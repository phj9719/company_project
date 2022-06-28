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
import egovframework.com.nu.service.NUA011CTService;

@Service("NUA011CTService")
public class NUA011CTServiceImpl implements NUA011CTService {

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
				
				
				String dataYn = commonDao.getString("NUA011CT.NUA011CT_DATA_YN",map);				
				if (rowType == DataSet.ROW_TYPE_UPDATED) {
					if(dataYn.equals("N")) { 
						commonDao.insertData("NUA011CT_DS_LIST_I", map);
					}else {
						commonDao.updateData("NUA011CT_DS_LIST_U", map);
					}
					
					
					map.put("GRP_CD", "PC_ROLE1");
					dataYn = commonDao.getString("NUA011CT.NUA011CT_ROLE_YN",map);
					if(map.get("PC_ROLE1").equals("0")) {//check x
						if(dataYn.equals("Y")) {
							commonDao.deleteData("NUA011CT_DS_ROLE_D", map);
						}
					}else{ //check O
						if(dataYn.equals("N")) {
							commonDao.insertData("NUA011CT_DS_ROLE_I", map);
						}	
					}
					map.put("GRP_CD", "PC_ROLE2");
					dataYn = commonDao.getString("NUA011CT.NUA011CT_ROLE_YN",map);
					if(map.get("PC_ROLE2").equals("0")) {
						if(dataYn.equals("Y")) {
							commonDao.deleteData("NUA011CT_DS_ROLE_D", map);
						}
					}else{
						if(dataYn.equals("N")) {
							commonDao.insertData("NUA011CT_DS_ROLE_I", map);
						}
					}
					map.put("GRP_CD", "PC_ROLE3");
					dataYn = commonDao.getString("NUA011CT.NUA011CT_ROLE_YN",map);
					if(map.get("PC_ROLE3").equals("0")) {
						if(dataYn.equals("Y")) {
							commonDao.deleteData("NUA011CT_DS_ROLE_D", map);
						}
					}else{
						if(dataYn.equals("N")) {
							commonDao.insertData("NUA011CT_DS_ROLE_I", map);
						}
					}
					map.put("GRP_CD", "PC_ROLE4");
					dataYn = commonDao.getString("NUA011CT.NUA011CT_ROLE_YN",map);
					if(map.get("PC_ROLE4").equals("0")) {
						if(dataYn.equals("Y")) {
							commonDao.deleteData("NUA011CT_DS_ROLE_D", map);
						}
					}else{
						if(dataYn.equals("N")) {
							commonDao.insertData("NUA011CT_DS_ROLE_I", map);
						}
					}
					map.put("GRP_CD", "PC_ROLE5");
					dataYn = commonDao.getString("NUA011CT.NUA011CT_ROLE_YN",map);
					if(map.get("PC_ROLE5").equals("0")) {
						if(dataYn.equals("Y")) {
							commonDao.deleteData("NUA011CT_DS_ROLE_D", map);
						}
					}else{
						if(dataYn.equals("N")) {
							commonDao.insertData("NUA011CT_DS_ROLE_I", map);
						}
					}
					map.put("GRP_CD", "PC_ROLE6");
					dataYn = commonDao.getString("NUA011CT.NUA011CT_ROLE_YN",map);
					if(map.get("PC_ROLE6").equals("0")) {
						if(dataYn.equals("Y")) {
							commonDao.deleteData("NUA011CT_DS_ROLE_D", map);
						}
					}else{
						if(dataYn.equals("N")) {
							commonDao.insertData("NUA011CT_DS_ROLE_I", map);
						}
					}
					
					map.put("GRP_CD", "PC_ROLE7");
					dataYn = commonDao.getString("NUA011CT.NUA011CT_ROLE_YN",map);
					if(map.get("PC_ROLE7").equals("0")) {
						if(dataYn.equals("Y")) {
							commonDao.deleteData("NUA011CT_DS_ROLE_D", map);
						}
					}else{
						if(dataYn.equals("N")) {
							commonDao.insertData("NUA011CT_DS_ROLE_I", map);
						}
					}
					
					map.put("GRP_CD", "PC_ROLE8");
					dataYn = commonDao.getString("NUA011CT.NUA011CT_ROLE_YN",map);
					if(map.get("PC_ROLE8").equals("0")) {
						if(dataYn.equals("Y")) {
							commonDao.deleteData("NUA011CT_DS_ROLE_D", map);
						}
					}else{
						if(dataYn.equals("N")) {
							commonDao.insertData("NUA011CT_DS_ROLE_I", map);
						}
					}
					
					map.put("GRP_CD", "PC_ROLE9");
					dataYn = commonDao.getString("NUA011CT.NUA011CT_ROLE_YN",map);
					if(map.get("PC_ROLE9").equals("0")) {
						if(dataYn.equals("Y")) {
							commonDao.deleteData("NUA011CT_DS_ROLE_D", map);
						}
					}else{
						if(dataYn.equals("N")) {
							commonDao.insertData("NUA011CT_DS_ROLE_I", map);
						}
					}
					
					map.put("GRP_CD", "TAB_ROLE1");
					map.put("APPLICATION_TP", "200");
					dataYn = commonDao.getString("NUA011CT.NUA011CT_ROLE_YN",map);
					if(map.get("TAB_ROLE1").equals("0")) {
						if(dataYn.equals("Y")) {
							commonDao.deleteData("NUA011CT_DS_ROLE_D", map);
						}
					}else{
						if(dataYn.equals("N")) {
							commonDao.insertData("NUA011CT_DS_ROLE_I", map);
						}
					}
					
					map.put("GRP_CD", "TAB_ROLE2");
					dataYn = commonDao.getString("NUA011CT.NUA011CT_ROLE_YN",map);
					if(map.get("TAB_ROLE2").equals("0")) {
						if(dataYn.equals("Y")) {
							commonDao.deleteData("NUA011CT_DS_ROLE_D", map);
						}
					}else{
						if(dataYn.equals("N")) {
							commonDao.insertData("NUA011CT_DS_ROLE_I", map);
						}
					}
					
					map.put("GRP_CD", "TAB_ROLE3");
					dataYn = commonDao.getString("NUA011CT.NUA011CT_ROLE_YN",map);
					if(map.get("TAB_ROLE3").equals("0")) {
						if(dataYn.equals("Y")) {
							commonDao.deleteData("NUA011CT_DS_ROLE_D", map);
						}
					}else{
						if(dataYn.equals("N")) {
							commonDao.insertData("NUA011CT_DS_ROLE_I", map);
						}
					}
					
					map.put("GRP_CD", "TAB_ROLE4");
					dataYn = commonDao.getString("NUA011CT.NUA011CT_ROLE_YN",map);
					if(map.get("TAB_ROLE4").equals("0")) {
						if(dataYn.equals("Y")) {
							commonDao.deleteData("NUA011CT_DS_ROLE_D", map);
						}
					}else{
						if(dataYn.equals("N")) {
							commonDao.insertData("NUA011CT_DS_ROLE_I", map);
						}
					}
					
					map.put("GRP_CD", "TAB_ROLE5");
					dataYn = commonDao.getString("NUA011CT.NUA011CT_ROLE_YN",map);
					if(map.get("TAB_ROLE5").equals("0")) {
						if(dataYn.equals("Y")) {
							commonDao.deleteData("NUA011CT_DS_ROLE_D", map);
						}
					}else{
						if(dataYn.equals("N")) {
							commonDao.insertData("NUA011CT_DS_ROLE_I", map);
						}
					}
					
					map.put("GRP_CD", "TAB_ROLE6");
					dataYn = commonDao.getString("NUA011CT.NUA011CT_ROLE_YN",map);
					if(map.get("TAB_ROLE6").equals("0")) {
						if(dataYn.equals("Y")) {
							commonDao.deleteData("NUA011CT_DS_ROLE_D", map);
						}
					}else{
						if(dataYn.equals("N")) {
							commonDao.insertData("NUA011CT_DS_ROLE_I", map);
						}
					}
					
					map.put("GRP_CD", "TAB_ROLE7");
					dataYn = commonDao.getString("NUA011CT.NUA011CT_ROLE_YN",map);
					if(map.get("TAB_ROLE7").equals("0")) {
						if(dataYn.equals("Y")) {
							commonDao.deleteData("NUA011CT_DS_ROLE_D", map);
						}
					}else{
						if(dataYn.equals("N")) {
							commonDao.insertData("NUA011CT_DS_ROLE_I", map);
						}
					}
					
					map.put("GRP_CD", "TAB_ROLE8");
					dataYn = commonDao.getString("NUA011CT.NUA011CT_ROLE_YN",map);
					if(map.get("TAB_ROLE8").equals("0")) {
						if(dataYn.equals("Y")) {
							commonDao.deleteData("NUA011CT_DS_ROLE_D", map);
						}
					}else{
						if(dataYn.equals("N")) {
							commonDao.insertData("NUA011CT_DS_ROLE_I", map);
						}
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
