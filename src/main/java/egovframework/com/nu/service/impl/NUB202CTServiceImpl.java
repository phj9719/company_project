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
				
				//HEALTH?????? ???????????? ?????? ?????? Y ?????? ?????? N
				String healthYn = commonDao.getString("NUB202CT.NUB202CT_HEALTH_YN",map);
				
				String inDs = (String) map.get("INDS"); // ???????????? ??????
								
				String seq = ""; // ?????????
				
				// ????????????????????? ??????????????? ????????? ???????????? ????????? INSERT
				if(inDs.equals("ds_pressure_i") || inDs.equals("ds_pressure")) { // ??????
					seq = (String) map.get("PRE_SEQ");
					
					// ????????? ?????? ???????????? 20?????? ????????? ?????? 0?????? ??????, ????????? 20?????? ????????? 0?????? ??????
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
					
					if(seq == null) { // ?????? ???????????? ???????????? insert, ????????? update
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
					
				}else if(inDs.equals("ds_sugar_i") || inDs.equals("ds_sugar")) { // ??????
					seq = (String) map.get("SUG_SEQ");
					
					// ?????? ?????? 20?????? ???????????? 0?????? ??????
					if (map.get("SUGAR") == null || (map.get("SUGAR") != null && map.get("SUGAR").toString().equals(""))) {
						map.put("SUGAR_FBS", 0);
					}
					int sugar = Integer.parseInt(map.get("SUGAR").toString());
					if (sugar < 20) {
						map.put("SUGAR", 0);
					}
					
					if(seq == null) { // ?????? ???????????? ???????????? insert, ????????? update
						
						String countStr = commonDao.getString("NUB202CT.NUB202CT_DS_SUGAR_COUNT_S", map);
						int count = Integer.parseInt(countStr);
						// ????????? ????????? ?????? 1?????? ?????? ??????, ??? ?????? ????????? ?????? 2???????????? ??????
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
						// ???????????? ????????? ??????
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
							// T_NU_HEALTH_CHECK???????????? ?????? ???????????? ??????, ????????? ?????? ????????? ????????? ????????? ????????? ????????????
							int sugarTp = Integer.parseInt(map.get("SUG_TP").toString()); // ????????????
							if(sugarTp == 10) { // ?????? ?????? ????????????
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
							if(sugarTp == 30) { // ?????? ?????? ????????????
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
						
						// ????????? ???????????? ??????
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
							// T_NU_HEALTH_CHECK???????????? ?????? ???????????? ??????, ????????? ?????? ????????? ????????? ????????? ????????? ????????????
							int sugarTp = Integer.parseInt(map.get("SUG_TP").toString());
							if(sugarTp == 10) { // ?????? ?????? ????????????
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
							if(sugarTp == 30) { // ?????? ?????? ????????????
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
						//??????????????? ???????????? ?????? ?????? U ?????? ?????? I
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
					
				}else if(inDs.equals("ds_temperature_i") || inDs.equals("ds_temperature")) { // ??????
					seq = (String) map.get("TEM_SEQ");
					
					// ?????? ?????? 10?????? ???????????? 0?????? ??????
					if (map.get("TEMPERATURE") == null || (map.get("TEMPERATURE") != null && map.get("TEMPERATURE").toString().equals(""))) {
						map.put("TEMPERATURE", 0);
					}
					double temperature = Double.parseDouble(map.get("TEMPERATURE").toString());
					if (temperature < 10.0) {
						map.put("TEMPERATURE", 0);
					}
					
					if(seq == null) { // ?????? ???????????? ???????????? insert, ????????? update
						commonDao.insertData("NUB202CT.NUB202CT_DS_TEMP_I", map);
						insertCnt++;
					}else {
						commonDao.updateData("NUB202CT.NUB202CT_DS_TEMP_U", map);
						insertCnt++;
					}
					
					if(healthYn.equals("N")) { 
						int time = Integer.parseInt(map.get("TEM_TIME").toString());
						
						// ??????????????? ?????? ??????1, ??????2, ??????3??? ????????? ??????
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
						// T_NU_HEALTH_CHECK??? ???????????? ???????????? ??????1, ??????2, ??????3??? ?????? ??????????????? ????????? ????????????
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
						//??????????????? ???????????? ?????? ?????? U ?????? ?????? I
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
					
				}else if(inDs.equals("ds_compos_i") || inDs.equals("ds_compos")) { // ???????????? ?????????????????? ISNERT, UPDATE ??????
					seq = (String) map.get("COM_SEQ");
					
					if(seq == null) { // ????????? ???????????? ???????????? insert, ????????? update
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
