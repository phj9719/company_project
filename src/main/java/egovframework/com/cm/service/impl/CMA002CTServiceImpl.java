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
import egovframework.com.cm.service.CMA002CTService;

@Service("CMA002CTService")
public class CMA002CTServiceImpl implements CMA002CTService {

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
	public int save(VariableList inVar, DataSetList inDataset, VariableList outVar, Map<String, List<Map<String, Object>>> outMap) throws Exception {
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
				 	commonDao.insertData("CMA002CT_DS_LIST_I", map);
				 	insertCnt++;
				}
				if (rowType == DataSet.ROW_TYPE_UPDATED) {
				 	commonDao.updateData("CMA002CT_DS_LIST_U", map);
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
	public void changePassword(VariableList inVar, DataSetList inDataset, VariableList outVar, Map<String, List<Map<String, Object>>> outMap) throws Exception {
		
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			
			DataSet ds = inDataset.get("input1");
			
			List<Map<String, Object>> list = dataSetUtil.dataSetToList(ds);
			Map<String, Object> map = list.get(0);
			
			String db_pass = commonDao.getString("CMA002CT_PP_PASS_CHK",map);
			//String nowPwd = BCrypt.hashpw(map.get("CUR_PASS").toString(), BCrypt.gensalt());
			//boolean pass = BCrypt.checkpw(nowPwd, db_pass);
			boolean pass = BCrypt.checkpw(map.get("CUR_PASS").toString(), db_pass);
			if(pass){
				String newpwd = BCrypt.hashpw((String) map.get("NEW_PASS"), BCrypt.gensalt());
				map.put("NEW_PASS", newpwd);

				commonDao.updateData("CMA002CT_PP_CHG_PASS",map);
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
			String companyCd = inVar.getString("COMPANY_CD");
			String serviceTp = inVar.getString("SERVICE_TP");
			Map<String, Object> rowMap = dataSetUtil.varToMap(inVar);
			rowMap.put("NEW_PASS", newpwd);
			rowMap.put("COMPANY_CD", companyCd);
			rowMap.put("SERVICE_TP", serviceTp);
			updateMetadataUtil.setAuditData(rowMap, inVar.getString("REG_PGM_ID"));

			commonDao.updateData("CMA002CT_PP_CHG_PASS",rowMap);
			
			transactionManager.commit(transactionStatus);
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.debug("[log]ErrorException -> "+ e.getMessage());
			throw e;
		}
	}
}
