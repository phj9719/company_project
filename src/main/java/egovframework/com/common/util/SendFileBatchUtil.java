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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
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

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import egovframework.com.common.dao.CommonDao;

/**
 * Alert관련 UTIL Class
 * @author SCT-PC-4
 *
 */
@Component("SendFileBatchUtil")
public class SendFileBatchUtil {

	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Resource(name="FtpUtil")
	private FtpUtil ftpUtil;

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
	public void sendMainFileBatch() {

		log.info("SendMainFileBatch() Start!");
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);

		try {
			// T_SM_SEND_MAIN에서 FTP_TRANS_STATUS가 01인것, REG_DT_LOC이 작은 순으로 조회 
			List<Map<String, Object>> reciveFileMapList = commonDao.getList("SM_SEND_FILE_BATCH.SM_SEND_FILE_BATCH_SEARCH");
		//	System.out.println("reciveMapList.size()================================"+reciveFileMapList.size());
			
			for(int i = 0; i<reciveFileMapList.size(); i++) {
				JsonParser parser = new JsonParser();
				
				JsonObject transCnt = (JsonObject) parser.parse((String) reciveFileMapList.get(i).get("TRANS_CNT")); 
				
			//	System.out.println("transCnt>>>>>>>>>>"+transCnt);
				
				JsonArray arrRoot = (JsonArray) transCnt.get("ROOT");
				
			//	System.out.println("arrRoot>>>>>>>>>>>>"+arrRoot);
			//	System.out.println("arrRoot.size()>>>>>>>>>>>>"+arrRoot.size());
				
				JsonObject Root = null;
				JsonArray arrList = null;
				List<Map<String,Object>> fileMapList = new ArrayList<>();
				List<String> RootKeyList = new ArrayList<>();
				
				Root = (JsonObject)arrRoot.get(0);//인덱스 번호로 접근해서 가져온다.
				
				Iterator i2 = Root.keySet().iterator();
				while(i2.hasNext()) {
					String keys = i2.next().toString();
				//	System.out.println(keys);
					RootKeyList.add(keys);
				}
				
				for(int j = 0; j<Root.size(); j++) {//첫행은 table_cnt라 무시
					if(Root.get(RootKeyList.get(j)) instanceof JsonArray) {
						arrList = (JsonArray) Root.get(RootKeyList.get(j));
					//	System.out.println("List>>>>>>>>>>>>>"+(j)+">>>>>>>>>>>>>>>"+arrList);
						if(!arrList.isJsonNull()) {
							//	System.out.println("Root.size()>>>>>>>>>>>>>>>"+Root.size());
			
							for(int k = 0; k<arrList.size(); k++) {
								JsonObject list = (JsonObject)arrList.get(k);//인덱스 번호로 접근해서 가져온다.
							
								//System.out.println("list>>>>>>>>>>>>>"+(k)+">>>>>>>>>>>>>>>"+list);	
								//System.out.println("list.get(\"SP_NM\")>>>>>>>>>>>>>"+(k)+">>>>>>>>>>>>>>>"+list.get("SP_NM"));
													
								String spNm = list.get("SP_NM").toString();
							
								if(spNm.equals("\"SP_SM_FILE_RECEIVE\"")) {
									Map<String,Object> fileMap = new HashMap<String, Object>();
									String FILE_GROUP_ID = list.get("FILE_GROUP_ID").toString().replaceAll("\\\"","");
									String FILE_ID = list.get("FILE_ID").toString().replaceAll("\\\"","");
									String COMPANY_CD = list.get("COMPANY_CD").toString().replaceAll("\\\"","");
									String ROW_CNT = list.get("ROW_CNT").toString().replaceAll("\\\"","");						
									String ROW_POS = list.get("ROW_POS").toString().replaceAll("\\\"","");	
									String FILE_NAMENO = list.get("FILE_REAL_NAME").toString().replaceAll("\\\"","");
									String FILE_NAME = FILE_NAMENO.split("/")[FILE_NAMENO.split("/").length-1];						
									String FILE_REAL_NAME = list.get("FILE_REAL_NAME").toString().replaceAll("\\\"","");		
								
									fileMap.put("FILE_GROUP_ID", FILE_GROUP_ID);
									fileMap.put("FILE_ID",FILE_ID);
									fileMap.put("COMPANY_CD",COMPANY_CD);
									fileMap.put("ROW_CNT",ROW_CNT);
									fileMap.put("ROW_POS",ROW_POS);
									fileMap.put("FILE_NAME",FILE_NAME);
									fileMap.put("FILE_REAL_NAME",FILE_REAL_NAME);
									fileMapList.add(fileMap);
								}	
								
								if(spNm.equals("\"SP_GR_FILE_RECEIVE\"")) {
									Map<String,Object> fileMap = new HashMap<String, Object>();
									String FILE_GROUP_ID = list.get("FILE_GROUP_ID").toString().replaceAll("\\\"","");
									String FILE_ID = list.get("FILE_ID").toString().replaceAll("\\\"","");
									String COMPANY_CD = list.get("COMPANY_CD").toString().replaceAll("\\\"","");
									String ROW_CNT = list.get("ROW_CNT").toString().replaceAll("\\\"","");						
									String ROW_POS = list.get("ROW_POS").toString().replaceAll("\\\"","");	
									String FILE_NAMENO = list.get("ATT_FILE_PATH").toString().replaceAll("\\\"","");
									String FILE_NAME = FILE_NAMENO.split("/")[FILE_NAMENO.split("/").length-1];						
									String FILE_REAL_NAME = list.get("ATT_FILE_PATH").toString().replaceAll("\\\"","");		
								
									fileMap.put("FILE_GROUP_ID", FILE_GROUP_ID);
									fileMap.put("FILE_ID",FILE_ID);
									fileMap.put("COMPANY_CD",COMPANY_CD);
									fileMap.put("ROW_CNT",ROW_CNT);
									fileMap.put("ROW_POS",ROW_POS);
									fileMap.put("FILE_NAME",FILE_NAME);
									fileMap.put("FILE_REAL_NAME",FILE_REAL_NAME);
									fileMapList.add(fileMap);
								}
							}
						}
					}	
				}
				
				if(fileMapList.size() == 0) {
					break;
				}
				
				
				//IP조회
				String destIp = commonDao.getString("SM_SEND_FILE_BATCH.SM_SEND_FILE_BATCH_DESPIP_SEARCH", reciveFileMapList.get(i));
				log.info(destIp);
				int err_code = ftpUtil.sendFile(destIp, fileMapList);
				String err_msg = "";
				log.info(">>>>>>>>>>>>>>>>>>>>>>>>>err_code="+err_code);
				
				if(err_code == 0) {
					err_msg = "파일전송 정상";
				}else if(err_code == -6){	
					err_msg = "FTP 전송오류";
				}else if(err_code == -5){	
					err_msg = "FTP 통신오류";
				}else if(err_code == -7){	
					err_msg = "파일존재하지 않음";
				}
				
				updateMetadataUtil.setAuditData_batch(reciveFileMapList.get(i), "");
				// 파일전송 실패 시 테이블 저장시 오류
				if(err_code != 0) {
					reciveFileMapList.get(i).put("FTP_TRANS_STATUS", "01");
					reciveFileMapList.get(i).put("REMARK", err_msg);
					commonDao.updateData("SM_SEND_FILE_BATCH.SM_SEND_FILE_BATCH_U_FAIL", reciveFileMapList.get(i));
					reciveFileMapList.get(i).put("TRANS_STATUS", "01");
					commonDao.updateData("SM_SEND_FILE_BATCH.SM_SEND_FILE_BATCH_HISTORY_I_FAIL", reciveFileMapList.get(i));
					
					log.error("전송실패");
				}else {
					reciveFileMapList.get(i).put("FTP_TRANS_STATUS", "06");
					reciveFileMapList.get(i).put("REMARK", err_msg);
					commonDao.updateData("SM_SEND_FILE_BATCH.SM_SEND_FILE_BATCH_U_FAIL", reciveFileMapList.get(i));
					reciveFileMapList.get(i).put("TRANS_STATUS", "06");
					commonDao.updateData("SM_SEND_FILE_BATCH.SM_SEND_FILE_BATCH_HISTORY_I_FAIL", reciveFileMapList.get(i));
					log.info("전송성공");
				}
				//파일전송 end
			}		
			
			transactionManager.commit(transactionStatus);
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
		}
		log.info("SendFileMapList() End!");
	}

}
