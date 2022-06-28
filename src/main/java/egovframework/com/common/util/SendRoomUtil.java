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
@Component("roomBatch")
public class SendRoomUtil {

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

		log.info("roomBatch() Start!");
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);

		try {
			
			//List<Map<String, Object>> nsHomeAreList = commonDao.getList("CM_BATCH_ROOM.SCT_ROOM_ARE_S");
			//List<Map<String, Object>> nsHomeLocList = commonDao.getList("CM_BATCH_ROOM.SCT_ROOM_LOC_S");
			//if(nsHomeAreList.size()>0) {
			//	for(int i = 0; i<nsHomeAreList.size(); i++){ /*AREA*/
			//		Map<String, Object> nsHomeAreMap = nsHomeAreList.get(i);			
					
			//		String dataType = commonDao.getString("CM_BATCH_ROOM.SCT_ARE_DATA_YN_S",nsHomeAreMap);
					
			//		if(dataType.equals("I")) {
				Map<String, Object> nsHomeMap = new HashMap<>();
				commonDao.insertData("CM_BATCH_ROOM.SCT_ARE_I", nsHomeMap);
			//		}
			//		if(dataType.equals("U")) {
				commonDao.updateData("CM_BATCH_ROOM.SCT_ARE_U", nsHomeMap);
			//		}
			//	}
			//}
			//if(nsHomeLocList.size()>0) {
			//	for(int i=0; i<nsHomeLocList.size(); i++){ /*LOC*/
			//		Map<String, Object> nsHomeLocMap = nsHomeLocList.get(i);
					
			//		String dataType = commonDao.getString("CM_BATCH_ROOM.SCT_LOC_DATA_YN_S",nsHomeLocMap);
					
			//		if(dataType.equals("I")) {
				commonDao.insertData("CM_BATCH_ROOM.SCT_LOC_I", nsHomeMap);
			//		}
			//		if(dataType.equals("U")) {
				commonDao.updateData("CM_BATCH_ROOM.SCT_LOC_U", nsHomeMap);
			//		}
				commonDao.updateData("CM_BATCH_ROOM.NS_ROOM_U", nsHomeMap);
			//	}
			//}
			transactionManager.commit(transactionStatus);
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
		}
		log.info("roomBatch() End!");
	}

}
