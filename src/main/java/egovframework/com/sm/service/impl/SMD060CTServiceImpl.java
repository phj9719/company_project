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

package egovframework.com.sm.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.jdbc.BadSqlGrammarException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.exception.NexaServiceException;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.common.util.LanguageUtil;
import egovframework.com.common.util.UpdateMetadataUtil;
import egovframework.com.rte.nexacro.NexacroConstant;
import egovframework.com.sm.service.SMD060CTService;

@Service("SMD060CTService")
public class SMD060CTServiceImpl implements SMD060CTService {

	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Autowired
	private UpdateMetadataUtil updateMetadataUtil;
	
	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;
	
	@Resource(name="LanguageUtil")
	private LanguageUtil languageUtil;
	
	@Autowired
	private PlatformTransactionManager transactionManager;

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());
	
	@Override
	public int insert(VariableList inVar, DataSetList inDataset, VariableList outVar, Map<String, List<Map<String, Object>>> outMap) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			
			int insertCnt = 0;
			DataSet ds = inDataset.get("input1");
			List<Map<String, Object>> list = dataSetUtil.dataSetToList(ds);
			
			for (int x = 0; x < list.size(); x++) {
				Map<String, Object> map = list.get(x);

				updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));

				String newpwd = BCrypt.hashpw((String) map.get("USER_PASSWD"), BCrypt.gensalt());
				map.put("USER_PASSWD", newpwd);	
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 

				if (rowType == DataSet.ROW_TYPE_INSERTED) {
				 	commonDao.insertData("SMD060CT_DS_LIST_I", map);
				 	insertCnt++;
				}
				
			}

			transactionManager.commit(transactionStatus);
			return insertCnt;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.debug("[log]ErrorException -> "+ e.getMessage());
			throw e;
		}
	}
	
	@Override
	public NexacroResult insert2(VariableList inVar, DataSetList inDataset) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			NexacroResult result = new NexacroResult();

			DataSet ds = inDataset.get("input1");
			List<Map<String, Object>> list = dataSetUtil.dataSetToList(ds);
			
			for (int x = 0; x < list.size(); x++) {
				Map<String, Object> map = list.get(x);
				
				if((map.get("INOUT_USER_TP").equals("VS") || map.get("INOUT_USER_TP").equals("HD") || map.get("INOUT_USER_TP").equals("SA")) && map.get("SRM_TP").equals("N")  ) {
					String cnt = commonDao.getString("SMD060CT.SMD060CT_CM_USER_NO_CHK", map);
					if(cnt.equals("N")) {
						result.setErrorCode(-1);
						result.setErrorMsg("사원번호가 없습니다.");
						return result;
					}
				}

				updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));

				String newpwd = BCrypt.hashpw((String) map.get("USER_PASSWD"), BCrypt.gensalt());
				map.put("USER_PASSWD", newpwd);	
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 

				if (rowType == DataSet.ROW_TYPE_INSERTED) {
				 	commonDao.insertData("SMD060CT_DS_LIST_I", map);
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

	@Override
	public NexacroResult update(VariableList inVar, DataSetList inDataset) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			NexacroResult result = new NexacroResult();

			DataSet ds = inDataset.get("input1");
			List<Map<String, Object>> list = dataSetUtil.dataSetToList(ds);
			
			for (int x = 0; x < list.size(); x++) {
				Map<String, Object> map = list.get(x);
				
				if((map.get("INOUT_USER_TP").equals("VS") || map.get("INOUT_USER_TP").equals("HD") || map.get("INOUT_USER_TP").equals("SA")) && map.get("SRM_TP").equals("N")  ) {
					String cnt = commonDao.getString("SMD060CT.SMD060CT_CM_USER_NO_CHK", map);
					if(cnt.equals("N")) {
						result.setErrorCode(-1);
						result.setErrorMsg("사원번호가 없습니다.");
						return result;
					}
				}

				updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));

				String newpwd = BCrypt.hashpw((String) map.get("USER_PASSWD"), BCrypt.gensalt());
				map.put("USER_PASSWD", newpwd);	
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 

				if (rowType == DataSet.ROW_TYPE_UPDATED) {
				 	commonDao.insertData("SMD060CT_DS_LIST_U", map);
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
	
	@Override
	public void changePassword(VariableList inVar, DataSetList inDataset, VariableList outVar, Map<String, List<Map<String, Object>>> outMap) throws Exception {
		
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			String chkId;
			if(!inVar.getString("SYS").equals("")){
				chkId = (String)inVar.getString("SYS");
			}else{
				chkId = (String)inVar.getString("USER_ID");
			}

			Map<String, Object> rowMap = dataSetUtil.varToMap(inVar);
			
			
			String db_pass = commonDao.getString("SMD060CT_PP_PASS_CHK",rowMap);
			boolean pass = BCrypt.checkpw((String) inVar.getString("CUR_PASS"), db_pass);
			if(pass){
				String newpwd = BCrypt.hashpw((String) inVar.getString("NEW_PASS"), BCrypt.gensalt());
				
				rowMap.put("NEW_PASS", newpwd);

				updateMetadataUtil.setAuditData(rowMap, inVar.getString("REG_PGM_ID"));

				commonDao.updateData("SMA060CT_PP_CHG_PASS",rowMap);
			}else{
				throw new NexaServiceException(languageUtil.getMessage(inVar, "000137"));	//비밀번호가 일치하지 않습니다.
			}
			
			transactionManager.commit(transactionStatus);
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.debug("[log]ErrorException -> "+ e.getMessage());
			throw e;
		}
	}
	
	@Override
	public void clearPassword(VariableList inVar, DataSetList inDataset, VariableList outVar, Map<String, List<Map<String, Object>>> outMap) throws Exception {
		
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			String chkId;
			if(!inVar.getString("SYS").equals("")){
				chkId = (String)inVar.getString("SYS");
			}else{
				chkId = (String)inVar.getString("USER_ID");
			}
			
			String newpwd = BCrypt.hashpw((String) inVar.getString("NEW_PASS"), BCrypt.gensalt());
			
			Map<String, Object> rowMap = dataSetUtil.varToMap(inVar);
			rowMap.put("NEW_PASS", newpwd);

			updateMetadataUtil.setAuditData(rowMap, inVar.getString("REG_PGM_ID"));

			commonDao.updateData("SMA060CT_PP_CHG_PASS",rowMap);
			
			transactionManager.commit(transactionStatus);
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.debug("[log]ErrorException -> "+ e.getMessage());
			throw e;
		}
	}
	
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
			
			// 전송받을 대상 선박 조회
			List<Map<String, Object>> sList = commonDao.getList("SMD060CT.SMD060CT_GET_DESTINATION_S", map);
			
			if(sList.size() > 0) {
				String destination = "";	// 대상 선박 지정 변수
				
				// 선박전체에 전송
				for(int i = 0; i< sList.size(); i++) {
					// 조회된 선박을 대상 선박 지정 변수에 입력
					Map<String, Object> iMap = sList.get(i);
					destination = iMap.get("DESTINATION_PLANT_CD").toString();
					
					// 전송받을 선박 세팅
					map.put("DESTINATION", destination);
					
					updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
					
					// 전송 프로시저 실행
					commonDao.getMap("SMD060CT.SMD060CT_SP_CM_USER_SEND", map);
					
					// 프로시저 에러발생시
					if(!map.get("ERR_CODE").equals("0")) {
						result.setErrorCode(-1);
						result.setErrorMsg(map.get("ERR_MSG").toString());
						return result;
					}
					
					destinationList.add(new HashMap<String, Object>(map));
				}
				
				// 선박 전체에 전송완료후 본 테이블의 WK_FLAG = NULL로
			    commonDao.updateData("SMD060CT.SMD060CT_CM_USER_SEND_U", map);
				
				// 데이터 전송
				//if(destinationList.size() > 0) transferService.sendDataRequest(destinationList);
			} else {
				result.setErrorCode(-1);
				result.setErrorMsg("선박이 없습니다.");
				return result;
			}
			
			transactionManager.commit(transactionStatus);
			result.setErrorCode(0);
			return result;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.debug("[log]ErrorException -> " + e.getMessage());
			throw e;
		}
	}


}
