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
@Component("SendReceiveBatchUtil")
public class SendReceiveBatchUtil {

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
	public void sendReceiveMainBatch() {

		log.info("sendReceiveMainBatch() Start!");
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);

		try {
			
			List<Map<String, Object>> serverList = commonDao.getList("SM_SEND_RECEIVE_BATCH.RECEIVE_GET_DESTINATION_S");
			
			for(int i = 0; i<serverList.size(); i++)
			{
				Map<String, Object> serverMap = serverList.get(i);
				
				List<Map<String, Object>> sendMapList = commonDao.getList("SM_SEND_RECEIVE_BATCH.SM_SEND_RECEIVE_BATCH_SEARCH",serverMap);
				
				for(int j = 0; j<sendMapList.size(); j++)
				{
					Map<String, Object> sendMap = sendMapList.get(j);
					
					String returnValue = transferService.sendReveiveDataBatchReq(sendMap); 
					
					if(returnValue.equals("03")) break;
				}
				
			}	
			
			transactionManager.commit(transactionStatus);
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
		}
		log.info("sendReceiveMainBatch() End!");
	}

}
