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
import egovframework.com.nu.service.NUB202CTService;

@Service("NUB202CTService")
public class NUB202CTServiceImpl implements NUB202CTService {

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
				String healthYn = commonDao.getString("NUB202CT.NUB202CT_HEALTH_YN",map);
				
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
						commonDao.insertData("NUB202CT.NUB202CT_DS_PRESSURE_I", map);
						insertCnt++;
						if(healthYn.equals("N")) {
							commonDao.insertData("NUB202CT.NUB202CT_HEALTH_I", map);
						}
						if(healthYn.equals("Y")) { 
							commonDao.updateData("NUB202CT.NUB202CT_HEALTH_PRESSURE_U", map);						
						}
					}else {
						commonDao.updateData("NUB202CT.NUB202CT_DS_PRESSURE_U", map);
						insertCnt++;
						if(healthYn.equals("N")) { 
							commonDao.insertData("NUB202CT.NUB202CT_HEALTH_I", map);
						}
						if(healthYn.equals("Y")) { 
							commonDao.updateData("NUB202CT.NUB202CT_HEALTH_PRESSURE_U", map);						
						}
					}
					
					String refYn = commonDao.getString("NUB202CT_REF_YN_S", map);
					
					if (refYn.equals("Y")) {
						map.put("HEA_DT", map.get("PRE_DT").toString());
						String nsHealthYn = commonDao.getString("NUB202CT.NUB202CT_NS_SCT_HEALTH_DATA_YN_S",map);
						List<Map<String, Object>> nsHomeList = commonDao.getList("NUB202CT.NUB202CT_NS_RES_DATA_S",map);
						Map<String, Object> healthData = nsHomeList.get(x);
						if(nsHealthYn.equals("I")) { 
							commonDao.insertData("NUB202CT.NUB202CT_NS_HEALTH_I", healthData);
						}
						if(nsHealthYn.equals("U")) { 
							commonDao.updateData("NUB202CT.NUB202CT_NS_HEALTH_DATA_U", healthData);
						}
					}
					
				}else if(inDs.equals("ds_sugar_i") || inDs.equals("ds_sugar")) { // 혈당
					seq = (String) map.get("SUG_SEQ");
					
					// 혈당 값이 20보다 작을경우 0으로 처리
					if (map.get("SUGAR") == null || (map.get("SUGAR") != null && map.get("SUGAR").toString().equals(""))) {
						map.put("SUGAR_FBS", 0);
					}
					int sugar = Integer.parseInt(map.get("SUGAR").toString());
					if (sugar < 20) {
						map.put("SUGAR", 0);
					}
					
					if(seq == null) { // 혈당 시퀀스가 빈값이면 insert, 아니면 update
						
						String countStr = commonDao.getString("NUB202CT.NUB202CT_DS_SUGAR_COUNT_S", map);
						int count = Integer.parseInt(countStr);
						// 기계로 측정한 경우 1번재 행은 식전, 그 이후 행들은 식후 2시간으로 세팅
						if (Integer.parseInt(map.get("SUG_TP").toString()) == 0) {
							if (count > 0) {
								map.put("SUG_TP", "30");
								map.put("IR_SUGAR_PP2", map.get("IR_SUGAR") == null ? null : map.get("IR_SUGAR").toString());
								map.put("IR_SUGAR_PP2_TIME", map.get("IR_SUGAR_TIME") == null ? null : map.get("IR_SUGAR_TIME").toString());
								map.put("SUG_PP2_TIME", map.get("SUG_TIME"));
							} else {
								map.put("SUG_TP", "10");
								map.put("IR_SUGAR_FBS", map.get("IR_SUGAR") == null ? null : map.get("IR_SUGAR").toString());
								map.put("IR_SUGAR_FBS_TIME", map.get("IR_SUGAR_TIME") == null ? null : map.get("IR_SUGAR_TIME").toString());
								map.put("SUG_FBS_TIME", map.get("SUG_TIME"));
							}
						// 수동으로 입력한 경우
						} else {
							int sugarTp = Integer.parseInt(map.get("SUG_TP").toString());
							if (sugarTp == 30)
								map.put("SUG_PP2_TIME", map.get("SUG_TIME"));
							if (sugarTp == 10)
								map.put("SUG_FBS_TIME", map.get("SUG_TIME"));
						}
						
						commonDao.insertData("NUB202CT.NUB202CT_DS_SUGAR_I", map);
						insertCnt++;
						if(healthYn.equals("N")) {
							commonDao.insertData("NUB202CT.NUB202CT_HEALTH_I", map);
						}
						if(healthYn.equals("Y")) {
							// T_NU_HEALTH_CHECK테이블에 값이 있는경우 식전, 식후의 가장 마지막 시간에 측정한 값으로 업데이트
							int sugarTp = Integer.parseInt(map.get("SUG_TP").toString()); // 혈당유형
							if(sugarTp == 10) { // 식전 혈당 업데이트
								Map<String, Object> maxMap = commonDao.getMap("NUB202CT_DS_SUGAR_MAX_S", map);
								if (maxMap != null) {
									String maxTime = maxMap.get("MAX_TIME").toString();
									String curTime = map.get("SUG_TIME").toString();
									int maxTimeInt = Integer.parseInt(maxTime);
									int curTimeInt = Integer.parseInt(curTime);
									if (curTimeInt >= maxTimeInt) {
										if (map.get("IR_SUGAR") != null) {
											commonDao.updateData("NUB202CT.NUB202CT_HEALTH_SUGAR_IR_U", map);
										} else {
											commonDao.updateData("NUB202CT.NUB202CT_HEALTH_SUGAR_U", map);
										}
									}
								}
							}
							if(sugarTp == 30) { // 식후 혈당 업데이트
								Map<String, Object> maxMap = commonDao.getMap("NUB202CT_DS_SUGAR_MAX_S", map);
								if (maxMap != null) {
									String maxTime = maxMap.get("MAX_TIME").toString();
									String curTime = map.get("SUG_TIME").toString();
									int maxTimeInt = Integer.parseInt(maxTime);
									int curTimeInt = Integer.parseInt(curTime);
									if (curTimeInt >= maxTimeInt) {
										if (map.get("IR_SUGAR") != null) {
											commonDao.updateData("NUB202CT.NUB202CT_HEALTH_SUGAR2_IR_U", map);
										} else {
											commonDao.updateData("NUB202CT.NUB202CT_HEALTH_SUGAR2_U", map);
										}
									}
								}
							}
						}
						
					}else {	
						
						String countStr = commonDao.getString("NUB202CT.NUB202CT_DS_SUGAR_COUNT_S", map);
						int count = Integer.parseInt(countStr);
						
						// 수정시 수정시간 세팅
						if (map.get("EDIT").toString().equals("Y")) {
							int sugarTp = Integer.parseInt(map.get("SUG_TP").toString());
							if (sugarTp == 30)
								map.put("SUG_PP2_TIME", map.get("SUG_TIME"));
							if (sugarTp == 10)
								map.put("SUG_FBS_TIME", map.get("SUG_TIME"));
						} else {
							if (count > 1) {
								map.put("SUG_TP", "30");
								map.put("SUG_PP2_TIME", map.get("SUG_TIME"));
							} else {
								map.put("SUG_TP", "10");
								map.put("SUG_FBS_TIME", map.get("SUG_TIME"));
							}
						}
						
						commonDao.updateData("NUB202CT.NUB202CT_DS_SUGAR_U", map);
						insertCnt++;
						if(healthYn.equals("N")) { 
							commonDao.insertData("NUB202CT.NUB202CT_HEALTH_I", map);
						}
						if(healthYn.equals("Y")) { 
							// T_NU_HEALTH_CHECK테이블에 값이 있는경우 식전, 식후의 가장 마지막 시간에 측정한 값으로 업데이트
							int sugarTp = Integer.parseInt(map.get("SUG_TP").toString());
							if(sugarTp == 10) { // 식전 혈당 업데이트
								Map<String, Object> maxMap = commonDao.getMap("NUB202CT_DS_SUGAR_MAX_S", map);
								if (maxMap != null) {
									String maxTime = maxMap.get("MAX_TIME").toString();
									String curTime = map.get("SUG_TIME").toString();
									int maxTimeInt = Integer.parseInt(maxTime);
									int curTimeInt = Integer.parseInt(curTime);
									if (curTimeInt >= maxTimeInt) {
										commonDao.updateData("NUB202CT.NUB202CT_HEALTH_SUGAR_U", map);
									}
								}
							}
							if(sugarTp == 30) { // 식후 혈당 업데이트
								Map<String, Object> maxMap = commonDao.getMap("NUB202CT_DS_SUGAR_MAX_S", map);
								if (maxMap != null) {
									String maxTime = maxMap.get("MAX_TIME").toString();
									String curTime = map.get("SUG_TIME").toString();
									int maxTimeInt = Integer.parseInt(maxTime);
									int curTimeInt = Integer.parseInt(curTime);
									if (curTimeInt >= maxTimeInt) {
										commonDao.updateData("NUB202CT.NUB202CT_HEALTH_SUGAR2_U", map);
									}
								}
							}
						}
					}
					
					String refYn = commonDao.getString("NUB202CT_REF_YN_S", map);
					
					if (refYn.equals("Y")) {
						//너싱홈쪽에 데이터가 있을 경우 U 없을 경우 I
						map.put("HEA_DT", map.get("SUG_DT").toString());
						String nsHealthYn = commonDao.getString("NUB202CT.NUB202CT_NS_SCT_HEALTH_DATA_YN_S",map);
						List<Map<String, Object>> nsHomeList = commonDao.getList("NUB202CT.NUB202CT_NS_RES_DATA_S",map);
						Map<String, Object> healthData = nsHomeList.get(x);
						if(nsHealthYn.equals("I")) { 
							commonDao.insertData("NUB202CT.NUB202CT_NS_HEALTH_I", healthData);
						}
						if(nsHealthYn.equals("U")) { 
						 	commonDao.updateData("NUB202CT.NUB202CT_NS_HEALTH_DATA_U", healthData);
						}
					}
					
				}else if(inDs.equals("ds_temperature_i") || inDs.equals("ds_temperature")) { // 체온
					seq = (String) map.get("TEM_SEQ");
					
					// 체온 값이 10보다 작을경우 0으로 처리
					if (map.get("TEMPERATURE") == null || (map.get("TEMPERATURE") != null && map.get("TEMPERATURE").toString().equals(""))) {
						map.put("TEMPERATURE", 0);
					}
					double temperature = Double.parseDouble(map.get("TEMPERATURE").toString());
					if (temperature < 10.0) {
						map.put("TEMPERATURE", 0);
					}
					
					if(seq == null) { // 체온 시퀀스가 빈값이면 insert, 아니면 update
						commonDao.insertData("NUB202CT.NUB202CT_DS_TEMP_I", map);
						insertCnt++;
					}else {
						commonDao.updateData("NUB202CT.NUB202CT_DS_TEMP_U", map);
						insertCnt++;
					}
					
					if(healthYn.equals("N")) { 
						int time = Integer.parseInt(map.get("TEM_TIME").toString());
						
						// 입력시간에 따라 체온1, 체온2, 체온3에 데이터 넣기
						if(time >=0 && time < 1200) {
							map.put("TEM_TIME1", map.get("TEM_TIME").toString());
							map.put("TEM_TIME2", null);
							if (map.get("IR_TEMP") != null) {
								map.put("IR_TEMP1", map.get("IR_TEMP").toString());
								map.put("IR_TEMP_TIME1", map.get("IR_TEMP_TIME").toString());
							}
						}
						if(time >= 1200 && time < 1800) {
							map.put("TEM_TIME2", map.get("TEM_TIME").toString());
							if (map.get("IR_TEMP") != null) {
								map.put("IR_TEMP2", map.get("IR_TEMP").toString());
								map.put("IR_TEMP_TIME2", map.get("IR_TEMP_TIME").toString());
							}
						}
						if(time >= 1800 && time < 2400) {
							map.put("TEM_TIME3", map.get("TEM_TIME").toString());
							map.put("TEM_TIME2", null);
							if (map.get("IR_TEMP") != null) {
								map.put("IR_TEMP3", map.get("IR_TEMP").toString());
								map.put("IR_TEMP_TIME3", map.get("IR_TEMP_TIME").toString());
							}
						}
						
						commonDao.insertData("NUB202CT.NUB202CT_HEALTH_I", map);
					}
					if(healthYn.equals("Y")) { 
						// T_NU_HEALTH_CHECK에 데이터가 있는경우 체온1, 체온2, 체온3의 가장 마지막시간 값으로 업데이트
						int time = Integer.parseInt(map.get("TEM_TIME").toString());
						String maxTemTime1 = commonDao.getString("NUB202CT_DS_TEMP1_MAX_S", map);
						String maxTemTime2 = commonDao.getString("NUB202CT_DS_TEMP2_MAX_S", map);
						String maxTemTime3 = commonDao.getString("NUB202CT_DS_TEMP3_MAX_S", map);
						String curTemTime = map.get("TEM_TIME").toString();
						
						int curTemTimeInt = Integer.parseInt(curTemTime);
						int maxTemTime1Int = 0;
						int maxTemTime2Int = 0;
						int maxTemTime3Int = 0;
						if (maxTemTime1 != null) 
							maxTemTime1Int = Integer.parseInt(maxTemTime1);
						if (maxTemTime2 != null)
							maxTemTime2Int = Integer.parseInt(maxTemTime2);
						if (maxTemTime3 != null)
							maxTemTime3Int = Integer.parseInt(maxTemTime3);
						
						if(time >=0 && time < 1200) {
							if (curTemTimeInt >= maxTemTime1Int) {
								if (map.get("IR_TEMP") != null) {
									commonDao.updateData("NUB202CT.NUB202CT_HEALTH_TEMP1_IR_U", map);
								} else {
									commonDao.updateData("NUB202CT.NUB202CT_HEALTH_TEMP1_U", map);
								}
							}
						}
						if(time >= 1200 && time < 1800) {
							if (curTemTimeInt >= maxTemTime2Int) {
								if (map.get("IR_TEMP") != null) {
									commonDao.updateData("NUB202CT.NUB202CT_HEALTH_TEMP2_IR_U", map);
								} else {
									commonDao.updateData("NUB202CT.NUB202CT_HEALTH_TEMP2_U", map);
								}
							} 
						}
						if(time >= 1800 && time < 2400) {
							if (curTemTimeInt >= maxTemTime3Int) {
								if (map.get("IR_TEMP") != null) {
									commonDao.updateData("NUB202CT.NUB202CT_HEALTH_TEMP3_IR_U", map);
								} else {
									commonDao.updateData("NUB202CT.NUB202CT_HEALTH_TEMP3_U", map);
								}
							} 
						}
					}
					
					String refYn = commonDao.getString("NUB202CT_REF_YN_S", map);
					
					if (refYn.equals("Y")) {
						//너싱홈쪽에 데이터가 있을 경우 U 없을 경우 I
						map.put("HEA_DT", map.get("TEM_DT").toString());
						String nsHealthYn = commonDao.getString("NUB202CT.NUB202CT_NS_SCT_HEALTH_DATA_YN_S",map);
						List<Map<String, Object>> nsHomeList = commonDao.getList("NUB202CT.NUB202CT_NS_RES_DATA_S",map);
						Map<String, Object> healthData = nsHomeList.get(x);
						if(nsHealthYn.equals("I")) { 
							commonDao.insertData("NUB202CT.NUB202CT_NS_HEALTH_I", healthData);
						}
						if(nsHealthYn.equals("U")) { 
						 	commonDao.updateData("NUB202CT.NUB202CT_NS_HEALTH_DATA_U", healthData);
						}
					}
					
				}else if(inDs.equals("ds_compos_i") || inDs.equals("ds_compos")) { // 체성분은 건강기록일지 ISNERT, UPDATE 안함
					seq = (String) map.get("COM_SEQ");
					
					if(seq == null) { // 체성분 시퀀스가 빈값이면 insert, 아니면 update
						commonDao.insertData("NUB202CT.NUB202CT_DS_COMPOS_I", map);
						insertCnt++;
					}else {
						commonDao.insertData("NUB202CT.NUB202CT_DS_COMPOS_U", map);
						insertCnt++;
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
