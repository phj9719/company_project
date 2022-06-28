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
import egovframework.com.nu.service.NUB302CTService;
import egovframework.com.rte.nexacro.NexacroConstant;

@Service("NUB302CTService")
public class NUB302CTServiceImpl implements NUB302CTService {
	
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
	public void save(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			DataSet ds = inDataset.get("input1");	// 전체 데이터셋
			DataSet ds2 = inDataset.get("input2");	// 새벽 전용 데이터셋
			String sFlag = inVar.getString("FLAG");	// 새벽 삽입 관련 플래그
			List<Map<String, Object>> list = dataSetUtil.dataSetToList(ds);
			
			for (int x = 0; x < list.size(); x++) {
				Map<String, Object> map = list.get(x);
				updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
				
				int y = 0;
				Map<String, Object> map2 = null;
				if (ds2.getRowCount() == 1 && sFlag.equals("1")) {
					log.debug("집중배설 관찰 새벽데이터 only");
					List<Map<String, Object>> list2 = dataSetUtil.dataSetToList(ds2);
					map2 = list2.get(0);
					updateMetadataUtil.setAuditData(map2, inVar.getString("REG_PGM_ID"));
					y = 1;
				}
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				
				if (rowType == DataSet.ROW_TYPE_INSERTED) {
					if (y == 1)
						commonDao.insertData("NUB302CT.NUB302CT_DS_LIST_TEMP_I", map2);
					else
						commonDao.insertData("NUB302CT.NUB302CT_DS_LIST_TEMP_I", map);
				}
				if (rowType == DataSet.ROW_TYPE_UPDATED) {
					commonDao.updateData("NUB302CT.NUB302CT_DS_LIST_TEMP_U", map);
				}
				
				if (rowType != DataSet.ROW_TYPE_DELETED) {
					String refYn = commonDao.getString("NUB_COMMON.NUB_COMMON_REF_YN_S", map);
					
					if (refYn.equals("Y")) {
						//너싱홈쪽에 데이터가 있을 경우 U 없을 경우 I
						log.debug("집중배설관찰 너싱홈 있음");
						String nsexcreaYn = commonDao.getString("NUB302CT.NUB302CT_SCT_EXCREA_DATA_YN_S", map);
						if (nsexcreaYn.equals("I")) { 
							if (y == 1)
								commonDao.insertData("NUB302CT.NUB302CT_SCT_EXCREA_I", map2);
							else
								commonDao.insertData("NUB302CT.NUB302CT_SCT_EXCREA_I", map);
						}
						if (nsexcreaYn.equals("U")) { 
							commonDao.updateData("NUB302CT.NUB302CT_SCT_EXCREA_U", map);
						}
					}	
				}
			}
			
			transactionManager.commit(transactionStatus);
		} catch (Exception e) {
			// 실패시 rollback
			transactionManager.rollback(transactionStatus);
			log.debug("[log]ErrorException -> " + e.getMessage());
			throw e;
		}	
	}

	@Override
	public void delete(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			DataSet ds = inDataset.get("input1");
			List<Map<String, Object>> rmList = dataSetUtil.removedDataSetToList(ds);
			
			for (int i = 0; i < rmList.size(); i++) {
				Map<String, Object> map = rmList.get(i);
				
				updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				
				if (rowType == DataSet.ROW_TYPE_DELETED) {
					log.debug("집중배설관찰 데이터 삭제");
					commonDao.deleteData("NUB302CT.NUB302CT_DS_LIST_TEMP_D", map);
					
					String refYn = commonDao.getString("NUB_COMMON.NUB_COMMON_REF_YN_S", map);
					
					if (refYn.equals("Y")) {
						String nsexcreaYn = commonDao.getString("NUB302CT.NUB302CT_SCT_EXCREA_DATA_YN_S", map);
						if (nsexcreaYn.equals("U")) { 
							log.debug("너싱홈 데이터 플래그 D로 변경");
							commonDao.updateData("NUB302CT.NUB302CT_SCT_EXCREA_UD", map);
						}
					}
				}
			}
			
			transactionManager.commit(transactionStatus);
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.debug("[log]ErrorException -> "+ e.getMessage());
			throw e;
		}
	}
}
