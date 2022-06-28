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
import egovframework.com.nu.service.NUB201CTService;
import egovframework.com.rte.nexacro.NexacroConstant;

@Service("NUB201CTService")
public class NUB201CTServiceImpl implements NUB201CTService {
	
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
	public int save(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {
		
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			
			int insertCnt = 0;
			
			DataSet ds = inDataset.get("input1");
			List<Map<String, Object>> list = dataSetUtil.dataSetToList(ds);
			
			for (int x = 0; x < list.size(); x++) {
				Map<String, Object> map = list.get(x);
				updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
				
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
				
				// 혈당 값이 20보다 작을경우 0으로 처리
				if (map.get("SUGAR_FBS") == null || (map.get("SUGAR_FBS") != null && map.get("SUGAR_FBS").toString().equals(""))) {
					map.put("SUGAR_FBS", 0);
				}
				if (map.get("SUGAR_PP2") == null || (map.get("SUGAR_PP2") != null && map.get("SUGAR_PP2").toString().equals(""))) {
					map.put("SUGAR_PP2", 0);
				}
				int sugarFbs = Integer.parseInt(map.get("SUGAR_FBS").toString());
				if (sugarFbs < 20) {
					map.put("SUGAR_FBS", 0);
				}
				int sugarPp2 = Integer.parseInt(map.get("SUGAR_PP2").toString());
				if (sugarPp2 < 20) {
					map.put("SUGAR_PP2", 0);
				}
				
				// 체온 값이 10보다 작을경우 0으로 처리
				if (map.get("TEMPERATURE1") == null || (map.get("TEMPERATURE1") != null && map.get("TEMPERATURE1").toString().equals(""))) {
					map.put("TEMPERATURE1", 0);
				}
				if (map.get("TEMPERATURE2") == null || (map.get("TEMPERATURE2") != null && map.get("TEMPERATURE2").toString().equals(""))) {
					map.put("TEMPERATURE2", 0);
				}
				if (map.get("TEMPERATURE3") == null || (map.get("TEMPERATURE3") != null && map.get("TEMPERATURE3").toString().equals(""))) {
					map.put("TEMPERATURE3", 0);
				}
				double temperature1 = Double.parseDouble(map.get("TEMPERATURE1").toString());
				if (temperature1 < 10.0) {
					map.put("TEMPERATURE1", 0);
				}
				double temperature2 = Double.parseDouble(map.get("TEMPERATURE2").toString());
				if (temperature2 < 10.0) {
					map.put("TEMPERATURE2", 0);
				}
				double temperature3 = Double.parseDouble(map.get("TEMPERATURE3").toString());
				if (temperature3 < 10.0) {
					map.put("TEMPERATURE3", 0);
				}
								
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				
				if (rowType == DataSet.ROW_TYPE_INSERTED) {
					commonDao.insertData("NUB201CT.NUB201CT_DS_LIST_I", map);
					insertCnt++;
				}
				if (rowType == DataSet.ROW_TYPE_UPDATED) {
					commonDao.updateData("NUB201CT.NUB201CT_DS_LIST_U", map);
					insertCnt++;
				}
				
				if (rowType != DataSet.ROW_TYPE_DELETED) {
					String refYn = commonDao.getString("NUB202CT_REF_YN_S", map);
					
					if (refYn.equals("Y")) {
						//너싱홈쪽에 데이터가 있을 경우 U 없을 경우 I
						String nsHealthYn = commonDao.getString("NUB201CT.NS_SCT_HEALTH_DATA_YN_S",map);
						List<Map<String, Object>> nsHomeList = commonDao.getList("NUB202CT.NUB202CT_NS_RES_DATA_S",map);
						Map<String, Object> healthData = nsHomeList.get(x);
						if(nsHealthYn.equals("I")) { 
							commonDao.insertData("NUB201CT.NUB201CT_NS_SCT_HEALTH_I", healthData);
						}
						if(nsHealthYn.equals("U")) { 
						 	commonDao.updateData("NUB201CT.NUB201CT_NS_SCT_HEALTH_U", healthData);
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

	@Override
	public int delete(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			
			int insertCnt = 0;
			
			DataSet ds = inDataset.get("input1");
			List<Map<String, Object>> rmList = dataSetUtil.removedDataSetToList(ds);
			
			
			for (int i = 0; i < rmList.size(); i++) {
				Map<String, Object> map = rmList.get(i);
				
				updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				
				if (rowType == DataSet.ROW_TYPE_DELETED) {
					commonDao.deleteData("NUB201CT.NUB201CT_DS_LIST_D", map);
					
					String refYn = commonDao.getString("NUB202CT_REF_YN_S", map);
					
					if (refYn.equals("Y")) {
						commonDao.updateData("NUB201CT.NS_SCT_HEALTH_D", map);
					}
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

}
