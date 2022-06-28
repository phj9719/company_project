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

package egovframework.com.nu.service.impl;

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
import egovframework.com.rte.map.DataSetMap;
import egovframework.com.rte.nexacro.NexacroConstant;
import egovframework.com.nu.service.NUA601CTService;

@Service("NUA601CTService")
public class NUA601CTServiceImpl implements NUA601CTService {

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
			String carSeq = "";
			DataSet dsHead = inDataset.get("input1");
			DataSet dsQue = inDataset.get("input2");
			List<Map<String, Object>> head = dataSetUtil.dataSetToList(dsHead);
			
			for (int x = 0; x < head.size(); x++) {
				Map<String, Object> map = head.get(x);
				updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
								
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				
				if (rowType == DataSet.ROW_TYPE_INSERTED) {
					carSeq = commonDao.getString("NUA601CT.NUA601CT_CAR_SEQ",map);
					map.put("CAR_SEQ", carSeq);
					commonDao.insertData("NUA601CT_DS_HEAD_I", map);
				}
				if (rowType == DataSet.ROW_TYPE_UPDATED) {
					commonDao.updateData("NUA601CT_DS_HEAD_U", map);
				}
			}
			List<Map<String, Object>> Que = dataSetUtil.dataSetToList(dsQue);
			
			for (int x = 0; x < Que.size(); x++) {
				Map<String, Object> map = Que.get(x);
				updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
								
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				
				if (rowType == DataSet.ROW_TYPE_INSERTED) {
					map.put("CAR_SEQ", carSeq);
					commonDao.insertData("NUA601CT_DS_QUE_I", map);
				}
				if (rowType == DataSet.ROW_TYPE_UPDATED) {
					commonDao.updateData("NUA601CT_DS_QUE_U", map);
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
}
