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

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.common.util.LanguageUtil;
import egovframework.com.common.util.UpdateMetadataUtil;
import egovframework.com.nu.service.NUB203CTService;

@Service("NUB203CTService")
public class NUB203CTServiceImpl implements NUB203CTService {

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
				
				//int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				
				//HEALTH쪽에 데이터가 있을 경우 Y 없을 경우 N
				String healthYn = commonDao.getString("NUB203CT.NUB203CT_HEALTH_YN",map);
				
				String inDs = (String) map.get("INDS"); // 데이터셋 정보
								
				String seq = ""; // 시퀀스
				
				// 건강기록일지에 해당날짜의 입소자 데이터가 없으면 INSERT
				if(inDs.equals("ds_pressure_i") || inDs.equals("ds_pressure")) { // 혈압
					seq = (String) map.get("PRE_SEQ");
					
					// 혈압의 값중 한개라도 20보다 작으면 둘다 0으로 처리, 맥박이 20보다 작으면 0으로 처리
					if (map.get("PRE_H") == null || (map.get("PRE_H") != null && map.get("PRE_H").toString().equals(""))) {
						map.put("PRE_H", 0);
					}
					if (map.get("PRE_L") == null || (map.get("PRE_L") != null && map.get("PRE_L").toString().equals(""))) {
						map.put("PRE_L", 0);
					}
					if (map.get("PULSE") == null || (map.get("PULSE") != null && map.get("PULSE").toString().equals(""))) {
						map.put("PULSE", 0);
					}
					int preH = Integer.parseInt(map.get("PRE_H").toString());
					int preL = Integer.parseInt(map.get("PRE_L").toString());
					int pulse = Integer.parseInt(map.get("PULSE").toString());
					if (preH < 20 || preL < 20) {
						map.put("PRE_H", 0);
						map.put("PRE_L", 0);
					}
					if (pulse < 20) {
						map.put("PULSE", 0);
					}
					
					if(seq == null) { // 혈압 시퀀스가 빈값이면 insert, 아니면 update
						commonDao.insertData("NUB203CT.NUB203CT_DS_PRESSURE_I", map);
						insertCnt++;
						if(healthYn.equals("N")) {
							commonDao.insertData("NUB203CT.NUB203CT_HEALTH_I", map);
						}
						if(healthYn.equals("Y")) { 
							commonDao.updateData("NUB203CT.NUB203CT_HEALTH_PRESSURE_U", map);						
						}
					}else {
						commonDao.updateData("NUB203CT.NUB203CT_DS_PRESSURE_U", map);
						insertCnt++;
						if(healthYn.equals("N")) { 
							commonDao.insertData("NUB203CT.NUB203CT_HEALTH_I", map);
						}
						if(healthYn.equals("Y")) { 
							commonDao.updateData("NUB203CT.NUB203CT_HEALTH_PRESSURE_U", map);						
						}
					}
					
					String refYn = commonDao.getString("NUB203CT_REF_YN_S", map);
					
					if (refYn.equals("Y")) {
						map.put("HEA_DT", map.get("PRE_DT").toString());
						String nsHealthYn = commonDao.getString("NUB203CT.NUB203CT_NS_SCT_HEALTH_DATA_YN_S",map);
						List<Map<String, Object>> nsHomeList = commonDao.getList("NUB203CT.NUB203CT_NS_RES_DATA_S",map);
						Map<String, Object> healthData = nsHomeList.get(x);
						if(nsHealthYn.equals("I")) { 
							commonDao.insertData("NUB203CT.NUB203CT_NS_HEALTH_I", healthData);
						}
						if(nsHealthYn.equals("U")) { 
							commonDao.updateData("NUB203CT.NUB203CT_NS_HEALTH_DATA_U", healthData);
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
