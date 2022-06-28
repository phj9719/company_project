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
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
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
@Component("TodoListBatchUtil")
public class TodoListBatchUtil {

	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Resource(name="TimeZoneUtil")
	TimeZoneUtil timeZoneUtil;
	
	private Logger log = LoggerFactory.getLogger(this.getClass().getSimpleName());

	@Autowired
	private PlatformTransactionManager transactionManager;
	
	public void setAuditData(Map<String, Object> dataMap, String pgmId){
		
		//System.out.println(">>>2123123123123123>>> ");
		
		ArrayList times = timeZoneUtil.getTimes("ko_KR", "YYMMDD", "NUMBER", "-", "HHMMSS","YES");
		
		dataMap.put("COMPANY_CD", "001");
		dataMap.put("REG_PGM_ID" , pgmId);
		dataMap.put("REG_USER", "BATCH");
		dataMap.put("REG_DT"     , new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis())));
		dataMap.put("REG_DT_CURR", times.get(0));
		dataMap.put("REG_DT_LOC" , times.get(1));
		
		
		dataMap.put("MOD_PGM_ID" , pgmId);
		dataMap.put("MOD_USER", "BATCH");
		dataMap.put("MOD_DT"     , new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis())));
		dataMap.put("MOD_DT_CURR", times.get(0));
		dataMap.put("MOD_DT_LOC" , times.get(1));
		
		
		
	}
	
	public void todoListCertBatch() {

		log.info("todoListCertBatch() Start!");
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);

		try {
			
			Map<String, Object> listMap = new HashMap<String, Object>();
			
			//System.out.println(">>>22222>>> ");
			
			// ArrayList<Object> times = new ArrayList();
			/*
			ArrayList times = timeZoneUtil.getTimes("ko_KR", "YYMMDD", "NUMBER", "-", "HHMMSS","YES");

			listMap.put("REG_PGM_ID" , "HRG130CT");
			listMap.put("REG_USER", "BATCH");
			listMap.put("REG_DT"     , new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis())));
			listMap.put("REG_DT_CURR", times.get(0));
			listMap.put("REG_DT_LOC" , times.get(1));
			
			
			listMap.put("MOD_PGM_ID" , "HRG130CT");
			listMap.put("MOD_USER", "BATCH");
			listMap.put("MOD_DT"     , new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis())));
			listMap.put("MOD_DT_CURR", times.get(0));
			listMap.put("MOD_DT_LOC" , times.get(1));
			*/
			
			setAuditData(listMap,"HRG130CT");
			
			
			String serverName = null;
			serverName = commonDao.getString("HR_TODO_LIST.HR_TODO_lIST_SERVER_NAME", listMap);
			
			// 본사만 작업이 가능하게 처리
			if(!StringUtils.isEmpty(serverName) && serverName.equals("HDO")) {
			
				int cnt = commonDao.getInt("HR_TODO_LIST.HR_SP_HR_TODO_CRET_LIST_BATCH_PRE", listMap);
				
				if(cnt > 0) {
					commonDao.getMap("HR_TODO_LIST.HR_SP_HR_TODO_CERT_LIST_BATCH", listMap);
					
					//System.out.println(">>>1111>>> "+listMap.get("TRANS_ID"));
					
					
					if(listMap.get("ERR_CODE").equals("0")) {
						transactionManager.commit(transactionStatus);
					} else {					
						transactionManager.rollback(transactionStatus);
					}
				
				}
			}
				
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
		}
		log.info("todoListCertBatch() End!");
	}
	
	public void todoListEduBatch() {

		log.info("todoListEduBatch() Start!");
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);

		try {
			
			Map<String, Object> listMap = new HashMap<String, Object>();
			
			//System.out.println(">>>111111>>> ");
			
			setAuditData(listMap,"HRG140CT");
			
			String serverName = null;
			serverName = commonDao.getString("HR_TODO_LIST.HR_TODO_lIST_SERVER_NAME", listMap);
			
			// 본사만 작업이 가능하게 처리
			if(!StringUtils.isEmpty(serverName) && serverName.equals("HDO")) {
				
		
				int cnt = commonDao.getInt("HR_TODO_LIST.HR_SP_HR_TODO_EDU_LIST_BATCH_PRE", listMap);
				
				if(cnt > 0) {
					commonDao.getMap("HR_TODO_LIST.HR_SP_HR_TODO_EDU_LIST_BATCH", listMap);
					
					//System.out.println(">>>1111>>> "+listMap.get("TRANS_ID"));
					
					
					if(listMap.get("ERR_CODE").equals("0")) {
						transactionManager.commit(transactionStatus);
					} else {					
						transactionManager.rollback(transactionStatus);
					}
				
				}
				
			}
		
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
		}
		log.info("todoListEduBatch() End!");
	}

}
