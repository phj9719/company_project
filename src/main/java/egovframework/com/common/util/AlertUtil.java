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
@Component("AlertUtil")
public class AlertUtil {

	@Resource(name="commonDao")
	private CommonDao commonDao;

	private Logger log = LoggerFactory.getLogger(this.getClass().getSimpleName());

	@Autowired
	private PlatformTransactionManager transactionManager;
	/**
	 * Alert 실행
	 * @param DataSet
	 * @return void
	 */
	public void executeAlert() {

		log.info("executeAlert() Start!");
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);

		try {
			List<Map<String, Object>> alertList = commonDao.getList("SM_ALERT.SEARCH_ALERT_MAIN");
			for(int i=0; i<alertList.size(); i++) {
				String sqlId = (String)alertList.get(i).get("SQL_ID");
				System.out.println("xxxxxx sqlId:"+sqlId);
			}

			transactionManager.commit(transactionStatus);
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
		}
		log.info("executeAlert() End!");
	}
}
