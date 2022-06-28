package egovframework.com.day.service.impl;

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

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.day.service.DAY00712Service;
import egovframework.com.rte.nexacro.NexacroConstant;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("DAY00712Service")
public class DAY00712ServiceImpl extends EgovAbstractServiceImpl implements DAY00712Service {
	
	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;
	
	@Autowired
	private PlatformTransactionManager transactionManager;

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	@Override
	public NexacroResult save(VariableList inVar, DataSetList inDataset) throws Exception {
		
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			NexacroResult result = new NexacroResult();
			
			DataSet ds = inDataset.get("input1");
			List<Map<String, Object>> list = dataSetUtil.dataSetToList(ds);
			
			for (int i = 0; i < list.size(); i++) {
				Map<String, Object> map = list.get(i);
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				
				if (rowType == DataSet.ROW_TYPE_INSERTED) {
					List<Map<String, Object>> duplRecord = commonDao.getList("DAY00712.DAY00712_DS_DUPL_S", map);
					if (duplRecord.size() > 0) {
						result.setErrorCode(-1);
						result.setErrorMsg("이미 등록된 일자입니다. 삭제후 등록하세요.");
						return result;
					}
					
				 	commonDao.insertData("DAY00712.DAY00712_DS_DATA_I", map);
				}
				if (rowType == DataSet.ROW_TYPE_UPDATED) {
				 	commonDao.updateData("DAY00712.DAY00712_DS_DATA_U", map);
				}
			}
			
			transactionManager.commit(transactionStatus);
			result.setErrorCode(0);
			return result;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.error("[log]ErrorException -> "+ e.getMessage());
			throw e;
		}
	}

	@Override
	public NexacroResult delete(VariableList inVar, DataSetList inDataset) throws Exception {
		
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			NexacroResult result = new NexacroResult();
			
			DataSet ds = inDataset.get("input1");
			List<Map<String, Object>> rmList = dataSetUtil.removedDataSetToList(ds);
			
			for (int i = 0; i < rmList.size(); i++) {
				Map<String, Object> map = rmList.get(i);
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				
				if (rowType == DataSet.ROW_TYPE_DELETED) {
					commonDao.deleteData("DAY00712.DAY00712_DS_DATA_D", map);
				}
			}
			
			transactionManager.commit(transactionStatus);
			result.setErrorCode(0);
			return result;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.error("[log]ErrorException -> "+ e.getMessage());
			throw e;
		}
	}
	
}
