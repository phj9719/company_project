/************************************************************************************
 * Argus System Service
 * Copyright(c) SCT
 * 
 * 1.Program  			: Common Service
 * 2.File Name			: CMServiceP.java
 * 3.Developer			: JL
 * 4.Development Date	: 2017-08-25
 * 5.Version			: 0.1
 * 6.Note				: 
 * 7.History		    :
*************************************************************************************/

package egovframework.com.cm.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.cm.service.CMA370QRService;
import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.service.CommonService;
import egovframework.com.common.service.TransferService;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.common.util.LanguageUtil;
import egovframework.com.common.util.TransferUtil;
import egovframework.com.common.util.UpdateMetadataUtil;
import egovframework.com.rte.nexacro.NexacroConstant;

@Service("CMA370QRService")
public class CMA370QRServiceImpl implements CMA370QRService {

	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Autowired
	private UpdateMetadataUtil updateMetadataUtil;
	
	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;
	
	@Resource(name="LanguageUtil")
	private LanguageUtil languageUtil;
	
	@Resource(name="commonService")
	private CommonService commonService;
// 	전송 2021-02-18
	@Resource(name="TransferService")
	private TransferService transferService;
	
	@Resource(name="TransferUtil")
	private TransferUtil transferUtil;
	
	@Autowired
	private PlatformTransactionManager transactionManager;

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());
	
	// 전송
	@Override
	public NexacroResult send(VariableList inVar, DataSetList inDataset) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			NexacroResult result = new NexacroResult();
			
			Map<String, Object> map = dataSetUtil.varToMap(inVar);
			
			// 전송 대상
			List<Map<String, Object>> destinationList = new ArrayList<Map<String, Object>>();
			
			DataSet dsList = inDataset.get("input1");
			
			//전송할 데이터셋
			List<Map<String, Object>> ds_List = dataSetUtil.dataSetToList(dsList);
			
			
			if(ds_List.size() > 0) {
				for(int l=0; l<ds_List.size(); l++) {
					Map<String, Object> lMap = ds_List.get(l);
					// 체크된 데이터만 전송
					String lChk = (String)lMap.get("CHK");
					if("1".equals(lChk)) {
						// 수신처 조회
						List<Map<String, Object>> recvList = commonDao.getList("CMA370QR.CMA370QR_RECV_S", lMap);
						
						if(recvList.size() > 0) {
							for(int j=0; j<recvList.size(); j++) {
								Map<String, Object> recvMap = recvList.get(j);
								// 전송대상 선박 조회
								List<Map<String, Object>> sList = commonDao.getList("CMA370QR.CMA370QR_GET_DESTINATION_S", recvMap);
								
								if(sList.size() > 0) {
									String destination = "";	// 대상 선박 지정 변수
									
									// 선박전체에 전송
									for(int i=0; i<sList.size(); i++) {
										// 조회된 선박을 대상 선박 지정 변수에 입력
										Map<String, Object> iMap = sList.get(i);
										destination = iMap.get("DESTINATION_PLANT_CD").toString();
										
										// 전송받을 선박 세팅
										recvMap.put("DESTINATION", destination);
										
										System.out.println(destination);
										
										updateMetadataUtil.setAuditData(recvMap, inVar.getString("REG_PGM_ID"));
										
										// 전송 프로시저 실행
										commonDao.getMap("CMA370QR.CMA370QR_SP_GR_APPL_SEND", recvMap);
										
										// 프로시저 에러발생시
										if(!recvMap.get("ERR_CODE").equals("0")) {
											result.setErrorCode(-1);
											result.setErrorMsg(recvMap.get("ERR_MSG").toString());
											return result;
										}
										// 전송 할 선박 및 trans_id 정보 2021-02-18
										destinationList.add(new HashMap<String, Object>(recvMap));
										
										// 각 수신처 TRANS_ID update(T_GR_APPL_LINE)
										commonDao.updateData("CMA370QR.CMA370QR_GR_APPL_LINE_U", recvMap);
									}
									
									if(destinationList.size() > 0) transferService.sendDataRequest(destinationList);
				
									//파일전송 sm_send 테이블에 insert후 실행해야함 
									if(destinationList.size() > 0) transferUtil.ftpParsingSend(destinationList) ;
								}else {
									result.setErrorCode(-1);
									result.setErrorMsg("선박이 없습니다.");
									return result;
								}
								// 전송완료후 본 테이블의 WK_FLAG = NULL로
								commonDao.updateData("CMA370QR.CMA370QR_GR_APPL_SEND_U", recvMap);
							}
						}
					}
				}
			}
						
			transactionManager.commit(transactionStatus);
			result.setErrorCode(0);
			return result;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.debug("[log]ErrorException -> "+ e.getMessage());
			throw e;
		}
	}
	
	// CANCEL
	@Override
	public NexacroResult cancel(VariableList inVar, DataSetList inDataset) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			NexacroResult result = new NexacroResult();
			
			DataSet dsList = inDataset.get("input1");
			
			if(dsList.getRowCount()!=0) {
				List<Map<String, Object>> list = dataSetUtil.dataSetToList(dsList);
				for(int i=0; i<list.size(); i++)
				{
					Map<String, Object> map = list.get(i);
					
					updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
					
					// T_SM_SEND_MAIN DELETE
					commonDao.deleteData("CM_SND_CANCEL_PP.CM_SND_RECV_CANCEL", map);
					// T_GR_APPL_CNT UPDATE
					commonDao.updateData("CM_SND_CANCEL_PP.CM_SND_UPDATE", map);
				}
			}
			
			
			transactionManager.commit(transactionStatus);
			result.setErrorCode(0);
			return result;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.debug("[log]ErrorException -> "+ e.getMessage());
			throw e;
		}
	}
	
}
