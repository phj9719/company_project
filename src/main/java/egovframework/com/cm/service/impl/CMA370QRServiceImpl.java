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
// 	?????? 2021-02-18
	@Resource(name="TransferService")
	private TransferService transferService;
	
	@Resource(name="TransferUtil")
	private TransferUtil transferUtil;
	
	@Autowired
	private PlatformTransactionManager transactionManager;

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());
	
	// ??????
	@Override
	public NexacroResult send(VariableList inVar, DataSetList inDataset) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			NexacroResult result = new NexacroResult();
			
			Map<String, Object> map = dataSetUtil.varToMap(inVar);
			
			// ?????? ??????
			List<Map<String, Object>> destinationList = new ArrayList<Map<String, Object>>();
			
			DataSet dsList = inDataset.get("input1");
			
			//????????? ????????????
			List<Map<String, Object>> ds_List = dataSetUtil.dataSetToList(dsList);
			
			
			if(ds_List.size() > 0) {
				for(int l=0; l<ds_List.size(); l++) {
					Map<String, Object> lMap = ds_List.get(l);
					// ????????? ???????????? ??????
					String lChk = (String)lMap.get("CHK");
					if("1".equals(lChk)) {
						// ????????? ??????
						List<Map<String, Object>> recvList = commonDao.getList("CMA370QR.CMA370QR_RECV_S", lMap);
						
						if(recvList.size() > 0) {
							for(int j=0; j<recvList.size(); j++) {
								Map<String, Object> recvMap = recvList.get(j);
								// ???????????? ?????? ??????
								List<Map<String, Object>> sList = commonDao.getList("CMA370QR.CMA370QR_GET_DESTINATION_S", recvMap);
								
								if(sList.size() > 0) {
									String destination = "";	// ?????? ?????? ?????? ??????
									
									// ??????????????? ??????
									for(int i=0; i<sList.size(); i++) {
										// ????????? ????????? ?????? ?????? ?????? ????????? ??????
										Map<String, Object> iMap = sList.get(i);
										destination = iMap.get("DESTINATION_PLANT_CD").toString();
										
										// ???????????? ?????? ??????
										recvMap.put("DESTINATION", destination);
										
										System.out.println(destination);
										
										updateMetadataUtil.setAuditData(recvMap, inVar.getString("REG_PGM_ID"));
										
										// ?????? ???????????? ??????
										commonDao.getMap("CMA370QR.CMA370QR_SP_GR_APPL_SEND", recvMap);
										
										// ???????????? ???????????????
										if(!recvMap.get("ERR_CODE").equals("0")) {
											result.setErrorCode(-1);
											result.setErrorMsg(recvMap.get("ERR_MSG").toString());
											return result;
										}
										// ?????? ??? ?????? ??? trans_id ?????? 2021-02-18
										destinationList.add(new HashMap<String, Object>(recvMap));
										
										// ??? ????????? TRANS_ID update(T_GR_APPL_LINE)
										commonDao.updateData("CMA370QR.CMA370QR_GR_APPL_LINE_U", recvMap);
									}
									
									if(destinationList.size() > 0) transferService.sendDataRequest(destinationList);
				
									//???????????? sm_send ???????????? insert??? ??????????????? 
									if(destinationList.size() > 0) transferUtil.ftpParsingSend(destinationList) ;
								}else {
									result.setErrorCode(-1);
									result.setErrorMsg("????????? ????????????.");
									return result;
								}
								// ??????????????? ??? ???????????? WK_FLAG = NULL???
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
