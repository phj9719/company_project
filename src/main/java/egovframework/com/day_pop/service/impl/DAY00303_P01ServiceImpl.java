package egovframework.com.day_pop.service.impl;

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
import egovframework.com.day_pop.service.DAY00303_P01Service;
import egovframework.com.rte.nexacro.NexacroConstant;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("DAY00303_P01Service")
public class DAY00303_P01ServiceImpl extends EgovAbstractServiceImpl implements DAY00303_P01Service {
	
	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;
	
	@Autowired
	private PlatformTransactionManager transactionManager;

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	@Override
	public NexacroResult save(VariableList inVar, DataSetList inDataset) throws Exception {
		if (log.isInfoEnabled())
			log.info("========== DAY00303_P01 save 함수 실행 시작 ==========");
		
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			NexacroResult result = new NexacroResult();
			
			DataSet ds = inDataset.get("input1");
			List<Map<String, Object>> list = dataSetUtil.dataSetToList(ds);
			
			for (int i = 0; i < list.size(); i++) {
				Map<String, Object> map = list.get(i);
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				
				if (log.isDebugEnabled())
					log.debug("DAY00303_P01 save input1 row : {}, rowtype : {}", i, map.get(NexacroConstant.DATASET_ROW_TYPE).toString());
				
				if (rowType == DataSet.ROW_TYPE_INSERTED) {
					if (log.isInfoEnabled()) {
						log.info("DAY00303_P01 DS_DATA INSERT");
						log.info("DAY00303_P01 데이터 삽입전 중복데이터 존재 유무 확인");
					}
					
					List<Map<String, Object>> duplRecord = commonDao.getList("DAY00303_P01.DAY00303_P01_DS_DUPL_S", map);
					
					if (log.isInfoEnabled())
						log.info("DAY00303_P01.DAY00303_P01_DS_DUPL_S 쿼리 실행 완료");
					if (log.isDebugEnabled())
						log.debug("duplRecord size : {}", duplRecord.size());
					
					// 해당 입소자의 평가일이 같은 데이터는 삽입 불가
					if (duplRecord.size() > 0) {
						if (log.isInfoEnabled())
							log.info("DAY00303_P01 INSERT 중복 존재!");
						
						result.setErrorCode(-1);
						result.setErrorMsg("작성되어 있습니다. 평가일을 확인하세요.");
						return result;
					}
					
				 	commonDao.insertData("DAY00303_P01.DAY00303_P01_DS_DATA_I", map);
				 	
				 	if (log.isInfoEnabled())
				 		log.info("DAY00303_P01.DAY00303_P01_DS_DATA_I 쿼리 실행 완료");
				}
				if (rowType == DataSet.ROW_TYPE_UPDATED) {
					if (log.isInfoEnabled())
						log.info("DAY00303_P01 DS_DATA UPDATE");
					
				 	commonDao.updateData("DAY00303_P01.DAY00303_P01_DS_DATA_U", map);
				 	
				 	if (log.isInfoEnabled())
				 		log.info("DAY00303_P01.DAY00303_P01_DS_DATA_U 쿼리 실행 완료");
				}
			}
			
			transactionManager.commit(transactionStatus);
			result.setErrorCode(0);
			
			if (log.isInfoEnabled())
				log.info("========== DAY00303_P01 save 함수 실행 완료 ==========");
			return result;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			if (log.isErrorEnabled()) {
				log.error("[log]ErrorException -> "+ e.getMessage());
				log.error("========== DAY00303_P01 save 함수 실행 실패 ==========");
			}
			throw e;
		}
	}
	
}
