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
import egovframework.com.nu.service.NUA206CTService;

@Service("NUA206CTService")
public class NUA206CTServiceImpl implements NUA206CTService {

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
	public NexacroResult save(VariableList inVar, DataSetList inDataset) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			NexacroResult result = new NexacroResult();
			
			String sFileGrpNo = inVar.getString("SELECT_FILE_GRP_ID"); // 팝업창에서 선택한 FILE_GRP_NO
			
			DataSet ds = inDataset.get("input1");
			List<Map<String, Object>> list = dataSetUtil.dataSetToList(ds);
			
			for (int x = 0; x < list.size(); x++) {
				Map<String, Object> map = list.get(x);
				updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				//map.put("NEW_FILE_GRP_ID", NewFileGrpNo);
				map.put("SELECT_FILE_GRP_ID", sFileGrpNo);
				
				if (rowType == DataSet.ROW_TYPE_INSERTED) {
					
					if(!"".equals(map.get("FILE_GRP_ID"))) { // 파일그룹ID 있음 
						if(!"".equals(map.get("SELECT_FILE_GRP_ID"))) { // 선택한 파일이 있으면 INSERT							
							commonDao.insertData("NUA206CT.NUA206CT_INSERT_FILE", map);
						}
					}
					
					commonDao.insertData("NUA206CT.NUA206CT_DS_LIST_I", map);
				}
				
				if (rowType == DataSet.ROW_TYPE_UPDATED) {
					if(!"".equals(map.get("FILE_GRP_ID"))) { // 파일그룹ID 있음 
						if(!"".equals(map.get("SELECT_FILE_GRP_ID"))) { // 선택한 파일이 있으면 기존 데이터 DELTE_YN = 'Y' 후 인서트
							commonDao.deleteData("NUA206CT.NUA206CT_DELETE_FILE", map);
							commonDao.insertData("NUA206CT.NUA206CT_INSERT_FILE", map); // INSERT
						}
					}
					
					commonDao.updateData("NUA206CT_DS_LIST_U", map);
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
