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

import java.text.SimpleDateFormat;
import java.util.Date;
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

/**
 * Alert관련 UTIL Class
 * @author SCT-PC-4
 *
 */
@Component("ReceiveBatchUtil")
public class ReceiveBatchUtil {

	@Resource(name="commonDao")
	private CommonDao commonDao;

	@Autowired
	private UpdateMetadataUtil updateMetadataUtil;
	
	private Logger log = LoggerFactory.getLogger(this.getClass().getSimpleName());

	//@Autowired
	//private PlatformTransactionManager transactionManager;
	/**
	 * Alert 실행
	 * @param DataSet
	 * @return void
	 */
	public void receiveMainBatch() {

		log.info("receiveBatchUtil() Start!");
		//TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		//TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);

		try {
			// T_SM_RECV_MAIN에서 TRANS_RST_STS가 NULL이거나 40, WK_FLAG가 NULL이 아닌것, TRANS_STATUS가 60인것, FIRST_RECV_CURR이 작은 순으로 조회 
			List<Map<String, Object>> reciveMapList = commonDao.getList("SM_RECEIVE_BATCH.SM_RECEIVE_BATCH_SEARCH");
			
			//System.out.println("reciveMapList.size()================================"+reciveMapList.size());
			
			for(int i = 0; i<reciveMapList.size(); i++){
				Map<String, Object> reciveMap = reciveMapList.get(i);
				
				//SP_SM_RECEIVE 호출
				commonDao.getMap("SM_RECEIVE_BATCH.SM_RECEIVE_BATCH_SP_SM_RECEIVE", reciveMap);
				
				if(reciveMap.get("ERR_CODE").equals("0")) {
					reciveMap.put("TRANS_RST_STS", "20");
					reciveMap.put("WK_FLAG", null);		
					reciveMap.put("REMARK", reciveMap.get("ERR_MSG").toString());
					updateMetadataUtil.setAuditData_batch(reciveMap, "");
					//T_SM_RECV_MAIN UPDATE
					commonDao.updateData("SM_RECEIVE_BATCH.SM_RECEIVE_BATCH_T_SM_RECEIVE_U_SUCCESS", reciveMap);
					log.info(new SimpleDateFormat("yyyyMMdd HH:mm:ss").format(new Date(System.currentTimeMillis()))+" "+reciveMap.get("TRANS_ID")+" ERR_CODE="+reciveMap.get("ERR_CODE")+" \nERR_MSG="+reciveMap.get("ERR_MSG")+" 성공!");
				}else {					
					reciveMap.put("TRANS_RST_STS", "40");
					//reciveMap.put("WK_FLAG", null);	
					reciveMap.put("REMARK", reciveMap.get("ERR_MSG").toString());
					updateMetadataUtil.setAuditData_batch(reciveMap, "");
					//T_SM_RECV_MAIN UPDATE
					commonDao.updateData("SM_RECEIVE_BATCH.SM_RECEIVE_BATCH_T_SM_RECEIVE_U_FAIL", reciveMap);
					log.info(new SimpleDateFormat("yyyyMMdd HH:mm:ss").format(new Date(System.currentTimeMillis()))+" "+reciveMap.get("TRANS_ID")+" ERR_CODE="+reciveMap.get("ERR_CODE")+" \nERR_MSG="+reciveMap.get("ERR_MSG")+" 실패!");
					
				}
				//T_SM_RECV_HISTORY INSERT
				commonDao.insertData("SM_RECEIVE_BATCH.SM_RECEIVE_BATCH_T_SM_RECV_HISTORY_I", reciveMap);
				if(!reciveMap.get("ERR_CODE").equals("0")) {
					break;
				}
			}			

			//transactionManager.commit(transactionStatus);
			System.out.println("commit되라");
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			//transactionManager.rollback(transactionStatus);
		}
		log.info("reciveBatchUtil() End!");
	}

}
