package egovframework.com.day.service.impl;

import java.util.HashMap;
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
import egovframework.com.common.file.FileUtil;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.day.service.DAY00709Service;
import egovframework.com.rte.nexacro.NexacroConstant;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("DAY00709Service")
public class DAY00709ServiceImpl extends EgovAbstractServiceImpl implements DAY00709Service {
	
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
		if (log.isInfoEnabled())
			log.info("========== DAY00709 save 함수 실행 시작 ==========");
		
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			NexacroResult result = new NexacroResult();
			
			DataSet ds = inDataset.get("input1");
			List<Map<String, Object>> list = dataSetUtil.dataSetToList(ds);
			
			for (int i = 0; i < list.size(); i++) {
				Map<String, Object> map = list.get(i);
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				
				// 삽입
				if (rowType == DataSet.ROW_TYPE_INSERTED) {
					if (log.isInfoEnabled())
						log.info("DAY00707 DATA INSERT");
					
				 	commonDao.insertData("DAY00709.DAY00709_DS_DATA_I", map);
				 	
				 	if (log.isInfoEnabled())
						log.info("DAY00709.DAY00709_DS_DATA_I 쿼리 실행 완료");
				}
				// 수정
				if (rowType == DataSet.ROW_TYPE_UPDATED) {
					if (log.isInfoEnabled())
						log.info("DAY00709 DATA UPDATE");
					
					Map<String, Object> fMap = new HashMap<>();
					if (log.isDebugEnabled()) {
						if (map.get("FILE_GRP_ID") != null) {
							log.debug("FILE_GRP_ID : {}", map.get("FILE_GRP_ID").toString());
							log.debug("FILE_GRP_ID empty : {}", StringUtils.isEmpty(map.get("FILE_GRP_ID").toString()));
						}
					}
					// 수정시 FILE_GRP_ID가 비어있을 경우
					if (map.get("FILE_GRP_ID") != null) {
						if (log.isInfoEnabled())
							log.info("DAY00709 수정 업로드 파일 체크");
						
						if (StringUtils.isEmpty(map.get("FILE_GRP_ID").toString())) {
							// FILE_REAL_NAME이 있는경우 (파일 삭제 해야함)
							if (!StringUtils.isEmpty(map.get("FILE_REAL_NAME").toString())) {
								if (log.isInfoEnabled())
									log.info("DAY00709 업로드 파일 발견");
								
								fMap.put("COMPANY_CD", map.get("sicode").toString());
								fMap.put("FILE_GRP_ID", map.get("FILE_GRP_ID_O").toString());
								fMap.put("FILE_ID", map.get("FILE_ID").toString());
								
								// 실제 파일 삭제 시도
								if (log.isInfoEnabled())
									log.info("실제 파일 삭제 시도");
								
								fileUtil.fileDelete(map.get("FILE_REAL_NAME").toString());
								
								// 파일 테이블에서 해당 ROW의 DELETE_YN Y로 수정
								commonDao.updateData("CM_FILE.DELETE_FILE", fMap);
								
								if (log.isInfoEnabled())
									log.info("파일테이블 DELETE_YN Y로 업데이트 완료");
							}
						}
					}
					
					// 수정 쿼리 실행
				 	commonDao.updateData("DAY00709.DAY00709_DS_DATA_U", map);
				 	
				 	if (log.isInfoEnabled())
						log.info("DAY00709.DAY00709_DS_DATA_U 쿼리 실행 완료");
				}
			}
			
			transactionManager.commit(transactionStatus);
			result.setErrorCode(0);
			
			if (log.isInfoEnabled())
				log.info("========== DAY00709 save 함수 실행 완료 ==========");
			return result;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			if (log.isErrorEnabled()) {
				log.error("[log]ErrorException -> {}", e.getMessage());
				log.error("========== DAY00709 save 함수 실행 실패 ==========");
			}
			throw e;
		}
	}

	@Override
	public NexacroResult delete(VariableList inVar, DataSetList inDataset) throws Exception {
		if (log.isInfoEnabled())
			log.info("========== DAY00709 delete 함수 실행 시작 ==========");
		
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
					if (log.isInfoEnabled())
						log.info("DAY00709 DATA DELETE");
					
					Map<String, Object> fMap = new HashMap<>();
					if (log.isDebugEnabled()) {
						if (map.get("FILE_GRP_ID") != null) {
							log.debug("FILE_GRP_ID : {}", map.get("FILE_GRP_ID").toString());
							log.debug("FILE_GRP_ID empty : {}", StringUtils.isEmpty(map.get("FILE_GRP_ID").toString()));
						}
					}
					// 삭제시 FILE_GRP_ID_O에 값이 있는경우 (파일 삭제 해야함)
					if (map.get("FILE_GRP_ID_O") != null) {
						if (log.isInfoEnabled())
							log.info("DAY00709 삭제 파일 업로드 체크");
						
						if (!StringUtils.isEmpty(map.get("FILE_GRP_ID_O").toString())) {
							if (log.isInfoEnabled())
								log.info("DAY00709 업로드 파일 발견");
							
							fMap.put("COMPANY_CD", map.get("sicode").toString());
							fMap.put("FILE_GRP_ID", map.get("FILE_GRP_ID_O").toString());
							fMap.put("FILE_ID", map.get("FILE_ID").toString());
							
							// 파일 삭제 시도
							if (log.isInfoEnabled())
								log.info("실제 파일 삭제 시도");
							
							fileUtil.fileDelete(map.get("FILE_REAL_NAME").toString());
							
							// 파일 테이블에서 해당 ROW의 DELETE_YN Y로 수정
							commonDao.updateData("CM_FILE.DELETE_FILE", fMap);
							
							if (log.isInfoEnabled())
								log.info("파일테이블 DELETE_YN Y로 업데이트 완료");
						}
					}
					
					// 삭제 쿼리 실행
					commonDao.deleteData("DAY00709.DAY00709_DS_DATA_D", map);
					
					if (log.isInfoEnabled())
						log.info("DAY00709.DAY00709_DS_DATA_D 쿼리 실행 완료");
				}
			}
			
			transactionManager.commit(transactionStatus);
			result.setErrorCode(0);
			
			if (log.isInfoEnabled())
				log.info("========== DAY00709 delete 함수 실행 완료 ==========");
			return result;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			if (log.isErrorEnabled()) {
				log.error("[log]ErrorException -> {}", e.getMessage());
				log.error("========== DAY00709 delete 함수 실행 실패 ==========");
			}
			throw e;
		}
	}
	
}
