/************************************************************************************
 * Argus System Util
 * Copyright(c) SCT
 * 
 * 1.Program  			: Common FileUtil
 * 2.File Name			: FileUtil.java
 * 3.Developer			: JL
 * 4.Development Date	: 2017-11-21
 * 5.Version			: 0.1
 * 6.Note				: 
 * 7.History		    :
*************************************************************************************/
package egovframework.com.common.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.service.TransferService;

/**
 * Alert관련 UTIL Class
 * @author SCT-PC-4
 *
 */
@Component("healthBatch")
public class SendHealthUtil {

	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Resource(name="TransferService")
	private TransferService transferService;
	

	@Autowired
	private UpdateMetadataUtil updateMetadataUtil;
	
	private Logger log = LoggerFactory.getLogger(this.getClass().getSimpleName());

	@Autowired
	private PlatformTransactionManager transactionManager;
	/**
	 * Alert 실행
	 * @param DataSet
	 * @return void
	 */
	public void sendMainBatch() {

		log.info("healthBatch() Start!");
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);

		try {
			
			//List<Map<String, Object>> nsHomeList = commonDao.getList("CM_BATCH_HEALTH.SCT_HEALTH_S");
			
			//if(nsHomeList.size()>0) {
			//	for(int i = 0; i<nsHomeList.size(); i++){
			//		Map<String, Object> nsHomeMap = nsHomeList.get(i);
			Map<String, Object> nsHomeMap = new HashMap<>();
			//		if(nsHomeMap.get("ir_type").equals("D")) { // IR_TYPE 이 D일경우 삭제
			commonDao.deleteData("CM_BATCH_HEALTH.SCT_HEALTH_D", nsHomeMap);
			//		}else {
			//			String dataType = commonDao.getString("CM_BATCH_HEALTH.SCT_HEALTH_DATA_YN_S",nsHomeMap);
			//			log.info(dataType);
			//			if(dataType.equals("I")) {
			commonDao.insertData("CM_BATCH_HEALTH.SCT_HEALTH_I", nsHomeMap);
			//			}
			//			if(dataType.equals("U")) {
			commonDao.updateData("CM_BATCH_HEALTH.SCT_HEALTH_U", nsHomeMap);
			//			}
			//		}
			commonDao.updateData("CM_BATCH_HEALTH.NS_HEALTH_U", nsHomeMap);
			//	}	
			//}
			transactionManager.commit(transactionStatus);
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
		}
		log.info("healthBatch() End!");
	}

}
