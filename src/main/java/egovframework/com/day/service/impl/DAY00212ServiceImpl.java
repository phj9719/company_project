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
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.day.service.DAY00212Service;
import egovframework.com.rte.nexacro.NexacroConstant;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("DAY00212Service")
public class DAY00212ServiceImpl extends EgovAbstractServiceImpl implements DAY00212Service {
	
	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;
	
	@Autowired
	private PlatformTransactionManager transactionManager;

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	@Override
	public NexacroResult save(VariableList inVar, DataSetList inDataset, DataSetList outDataSet) throws Exception {
		
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
			
		try {
			NexacroResult result = new NexacroResult();
			
			DataSet ds = inDataset.get("input1");
			List<Map<String, Object>> list = dataSetUtil.dataSetToList(ds);
			
			int n_number = 0;
			for (int i = 0; i < list.size(); i++) {
				Map<String, Object> map = list.get(i);
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

				if (rowType == DataSet.ROW_TYPE_INSERTED) {
				 	commonDao.insertData("DAY00212_P01.DAY00212_P01_DS_DATA_I", map);
				 	n_number = Integer.parseInt(map.get("n_number").toString());
				}
				if (rowType == DataSet.ROW_TYPE_UPDATED) {
				 	commonDao.updateData("DAY00212_P01.DAY00212_P01_DS_DATA_U", map);
				 	n_number = Integer.parseInt(map.get("n_number").toString());
				}
			}
			
		 	DataSet outDs = new DataSet("output1");
			outDs.addColumn("n_number", DataTypes.INT, 255);
			
			int nRow = outDs.newRow();
			System.out.println();
			outDs.set(nRow, "n_number", n_number);
			result.addDataSet(outDs);
			
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
