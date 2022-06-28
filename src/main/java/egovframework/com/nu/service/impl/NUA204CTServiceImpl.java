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
import egovframework.com.nu.service.NUA204CTService;

@Service("NUA204CTService")
public class NUA204CTServiceImpl implements NUA204CTService {

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
								
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				
				//HEALTH쪽에 데이터가 있을 경우 Y 없을 경우 N
				String healthYn = commonDao.getString("NUA204CT.NUA204CT_HEALTH_YN",map);
				if (rowType == DataSet.ROW_TYPE_INSERTED) {
					commonDao.insertData("NUA204CT_DS_LIST_I", map);
					insertCnt++;
					if(healthYn.equals("N")) { 
						commonDao.insertData("NUA204CT_HEALTH_I", map);
					}
					if(healthYn.equals("Y")) {
						int hour = Integer.parseInt(map.get("HOUR").toString());
						if(hour>=0 && hour < 12) {
							commonDao.updateData("NUA204CT_TEMP1_U", map);
						}
						if(hour >= 12 && hour<18) {
							commonDao.updateData("NUA204CT_TEMP2_U", map);
						}
						if(hour >= 18 && hour <24) {
							commonDao.updateData("NUA204CT_TEMP3_U", map);
						}
					}
				}
				if (rowType == DataSet.ROW_TYPE_UPDATED) {
					commonDao.updateData("NUA204CT_DS_LIST_U", map);
					insertCnt++;
					if(healthYn.equals("N")) { 
						commonDao.insertData("NUA204CT_HEALTH_I", map);
					}
					if(healthYn.equals("Y")) { 
						int hour = Integer.parseInt(map.get("HOUR").toString());
						if(hour>=0 && hour < 12) {
							commonDao.updateData("NUA204CT_TEMP1_U", map);
						}
						if(hour >= 12 && hour<18) {
							commonDao.updateData("NUA204CT_TEMP2_U", map);
						}
						if(hour >= 18 && hour <24) {
							commonDao.updateData("NUA204CT_TEMP3_U", map);
						}
					}
				}
				//너싱홈쪽에 데이터가 있을 경우 U 없을 경우 I
				map.put("HEA_DT", map.get("TEM_DT").toString());
				String nsHealthYn = commonDao.getString("CM_BATCH_HEALTH.NS_HEALTH_DATA_YN_S",map);
				String nsSicodeYn = commonDao.getString("CM_BATCH_HEALTH.NU_REF_YN_S",map);
				List<Map<String, Object>> nsHomeList = commonDao.getList("CM_BATCH_HEALTH.NS_RES_DATA_S",map);
				Map<String, Object> healthData = nsHomeList.get(0);
				//healthData.put("SUG_FBS_TIME", map.get("SUG_TIME"));
				if(nsSicodeYn.equals("Y")) {
					if(nsHealthYn.equals("I")) { 
						commonDao.insertData("CM_BATCH_HEALTH.NS_HEALTH_I", healthData);
					}
					if(nsHealthYn.equals("U")) { 
					 	commonDao.updateData("CM_BATCH_HEALTH.NS_HEALTH_DATA_U", healthData);
					}
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
