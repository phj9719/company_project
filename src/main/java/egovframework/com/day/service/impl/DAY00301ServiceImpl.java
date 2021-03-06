package egovframework.com.day.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
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
import egovframework.com.day.service.DAY00301Service;
import egovframework.com.rte.nexacro.NexacroConstant;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("DAY00301Service")
public class DAY00301ServiceImpl extends EgovAbstractServiceImpl implements DAY00301Service {
	
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
			
			DataSet ds = inDataset.get("input1");	// ds_data
			DataSet ds2 = inDataset.get("input2");	// ds_detail
			List<Map<String, Object>> list = dataSetUtil.dataSetToList(ds);
			List<Map<String, Object>> list2 = dataSetUtil.dataSetToList(ds2);
			
			for (int i = 0; i < list.size(); i++) {
				Map<String, Object> map = list.get(i);
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				
				if (log.isDebugEnabled()) {
					log.debug("list1 i : {}", i);
					log.debug("list1 rowType : {}", rowType);
				}
				
				// ??????
				if (rowType == DataSet.ROW_TYPE_INSERTED) {
				 	commonDao.insertData("DAY00301.DAY00301_DS_DATA_I", map);
				 	
				 	if (log.isInfoEnabled())
						log.info("DAY00301.DAY00301_DS_DATA_I ?????? ?????? ??????");
				}
				// ??????
				if (rowType == DataSet.ROW_TYPE_UPDATED) {
				 	commonDao.updateData("DAY00301.DAY00301_DS_DATA_U", map);
				 	
				 	if (log.isInfoEnabled())
						log.info("DAY00301.DAY00301_DS_DATA_U ?????? ?????? ??????");
				}
			}
			
			for (int i = 0; i < list2.size(); i++) {
				Map<String, Object> map = list2.get(i);
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				
				if (log.isDebugEnabled()) {
					log.debug("list2 i : {}", i);
					log.debug("list2 rowType : {}", rowType);
					log.debug("mulnumber : {}", map.get("mulnumber").toString());
					log.debug("mulnumber isEmpty : {}", StringUtils.isEmpty(map.get("mulnumber").toString()));
				}
				
				// mulnumber??? ?????? ?????? ?????? ?????? ?????? ?????? ????????? ??????
				if (StringUtils.isEmpty(map.get("mulnumber").toString())) {
					commonDao.insertData("DAY00301.DAY00301_DS_DETAIL_I", map);
					
					if (log.isInfoEnabled()) {
						log.info("DAY00301.DAY00301_DS_DETAIL_I ?????? ?????? ??????");
					}
				} else {
					commonDao.updateData("DAY00301.DAY00301_DS_DETAIL_U", map);
					
					if (log.isInfoEnabled()) {
						log.info("DAY00301.DAY00301_DS_DETAIL_U ?????? ?????? ??????");
					}
				}
			}
			
			transactionManager.commit(transactionStatus);
			result.setErrorCode(0);
			return result;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.error("[log]ErrorException -> {}", e.getMessage());
			throw e;
		}
	}
}
