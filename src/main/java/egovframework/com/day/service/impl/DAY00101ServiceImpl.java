package egovframework.com.day.service.impl;

import java.util.HashMap;
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
import org.springframework.util.StringUtils;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.file.FileUtil;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.day.service.DAY00101Service;
import egovframework.com.rte.nexacro.NexacroConstant;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("DAY00101Service")
public class DAY00101ServiceImpl extends EgovAbstractServiceImpl implements DAY00101Service {
	
	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;
	
	@Resource(name="FileUtil")
	private FileUtil fileUtil;
	
	@Autowired
	private PlatformTransactionManager transactionManager;
	
	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	@Override
	public NexacroResult save(VariableList inVar, DataSetList inDataset) throws Exception {

		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			NexacroResult result = new NexacroResult();

			DataSet ds1 = inDataset.get("input1"); // ds_data
			DataSet ds2 = inDataset.get("input2"); // ds_kmdaily25 
			List<Map<String, Object>> list1 = dataSetUtil.dataSetToList(ds1);
			List<Map<String, Object>> list2 = dataSetUtil.dataSetToList(ds2);
			
			for (int i = 0; i < list1.size(); i++) {
				Map<String, Object> map = list1.get(i);
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				
				// 삽입
				if (rowType == DataSet.ROW_TYPE_INSERTED) {
				 	commonDao.insertData("DAY00101.DAY00101_DS_DATA_I", map);
				 	
				 	if (log.isInfoEnabled())
						log.info("DAY00101.DAY00101_DS_DATA_I 쿼리 실행 완료");
				}
				// 수정
				if (rowType == DataSet.ROW_TYPE_UPDATED) {
					// 수정 쿼리 실행
				 	commonDao.updateData("DAY00101.DAY00101_DS_DATA_U", map);
				 	
				 	if (log.isInfoEnabled())
						log.info("DAY00101.DAY00101_DS_DATA_U 쿼리 실행 완료");
				}
			}
			
			System.out.println("list2 size : "+list2.size());
			for (int i = 0; i < list2.size(); i++) {
				Map<String, Object> map = list2.get(i);
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				System.out.println("rowType : " + rowType);
				// 삽입
				if (rowType == DataSet.ROW_TYPE_INSERTED) {
				 	commonDao.insertData("DAY00101.DAY00101_DS_KMDAILY25_I", map);
				 	
				 	if (log.isInfoEnabled())
						log.info("DAY00101.DAY00101_DS_KMDAILY25_I 쿼리 실행 완료");
				}
				// 삭제
				// DELETE 타입이 적용되지 않아 UPDATE 타입으로 코딩
				// ds_kmdaily25의 테이블은 insert, delete만 함
				if (rowType == DataSet.ROW_TYPE_UPDATED) {
					// 수정 쿼리 실행
				 	commonDao.deleteData("DAY00101.DAY00101_DS_KMDAILY25_D", map);
				 	
				 	if (log.isInfoEnabled())
						log.info("DAY00101.DAY00101_DS_KMDAILY25_D 쿼리 실행 완료");
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
