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

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.FileDataSource;
import javax.annotation.Resource;
import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.internet.MimeUtility;

import org.apache.commons.collections.map.HashedMap;
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
 * MAIL Class
 * @author 
 *
 */
@Component("Mail")
public class Mail {

	private Logger log = LoggerFactory.getLogger(this.getClass().getSimpleName());

	@Autowired
	private UpdateMetadataUtil updateMetadataUtil;
	
	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Autowired
	private PlatformTransactionManager transactionManager;
	
	/**
	 * Mail 송신
	 * @param vndCd 거래처코드
	 * @param vndEmail 수신자 업체 이메일
	 * @param picEmail 송신자
	 * @param hotEmailList 참조자 List
	 * @param emailTitle 메일 제목
	 * @param eamilText  메일 본문
	 * @param filePath 파일경로
	 * @param transJbo   화면명
	 * @param pkNo        화면에서의 pk 
	 * @param userId      REG_USER
	 * @return int
	 */
	public int sendFileMail(Map<String,Object> vndEmailMap, String picEmail, List<String> hotEmailList, String emailTitle, String eamilText, String filePath, String transJob, String pkNo ,String userId, String fileYn) {
		
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		log.info("sendMail() Start!");

    	Properties props = new Properties(); 
    	props.put("mail.smtp.host", "smtps.hiworks.com"); 
    	props.put("mail.smtp.port", 465); 
    	props.put("mail.smtp.auth", "true"); 
    	props.put("mail.smtp.ssl.enable", "true"); 
    	
    	Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
    		protected PasswordAuthentication getPasswordAuthentication() { 
    			return new PasswordAuthentication("sct@sangjiship.com", "sct123456!"); 
    			} 
    	});
    	
    	try {
    		MimeMessage message = new MimeMessage(session); 
    		//보내는사람
    		message.setFrom(new InternetAddress("sct@sangjiship.com")); 
    		//받는사람
    		message.addRecipient(Message.RecipientType.TO, new InternetAddress("leehearts@esct.co.kr"));
    		//참조
    		for(int i = 0; i<hotEmailList.size(); i++) {
    			String hotEmail = hotEmailList.get(i);
    			message.setRecipients(Message.RecipientType.CC, hotEmail);
    		}
    		// 메일 제목 
    		message.setSubject(emailTitle); 
    		
    		MimeBodyPart mbp1 = new MimeBodyPart();
    		//mbp1.setContent(eamilText,"text/html");
    		mbp1.setText(eamilText,"UTF-8","html");

    		Multipart mp = new MimeMultipart();
    		mp.addBodyPart(mbp1);
    		
    		if(fileYn.equals("Y")) {
	    		MimeBodyPart mbp2 = new MimeBodyPart();
	    		File file = new File(filePath);
	    		FileDataSource fds = new FileDataSource(file.getAbsolutePath());
	    		
	    		mbp2.setDataHandler(new DataHandler(fds));
	    		
	    		mbp2.setFileName(MimeUtility.encodeText(fds.getName()));
	    		mp.addBodyPart(mbp2);
    		}
    		
    		message.setContent(mp);
    		
    		// send the message
    		Transport.send(message);  
    		
    		String COMPANY_CD = "001";
    		String PLANT_CD = "HDO";
    		String TRANS_ID = "";
    		String TRANS_DT = new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis()));
    		String DESTINATION = "HDO";
    		String DEPARTURE = "HDO";
    		String TRANS_MD = "ML";
    		String WK_FLAG = "I";
    		String USE_YN = "N";
    		String TRANS_STATUS = "16";
    		String REMARK = "";
    		
    		if(transJob.equals("MMR020CT") || transJob.equals("MMR050CT") || transJob.equals("RMR020CT") || transJob.equals("RMR040CT")) {
    			String [] fileNameArr = filePath.split("/");
    			String fileName = fileNameArr[fileNameArr.length-1];
    			String[] fileNameNoPdf = fileName.split("\\."); 
    			REMARK = "VENDER: "+vndEmailMap.get("KOR_NM").toString()+", NO: "+fileNameNoPdf[0]+", SUBJECT: "+vndEmailMap.get("SUBJECT").toString()+", SEND: "+picEmail+" TO: "+vndEmailMap.get("EMAIL").toString()+" 메일 발송완료";
    		}else {
    			REMARK = "VENDER: "+vndEmailMap.get("KOR_NM").toString()+", NO: "+pkNo+", SUBJECT: "+vndEmailMap.get("SUBJECT").toString()+", SEND: "+picEmail+" TO: "+vndEmailMap.get("EMAIL").toString()+" 메일 발송완료";
    		}
    		
    		Map<String, Object> sendMainMap = new HashedMap();
   
    		sendMainMap.put("COMPANY_CD", COMPANY_CD);
    		sendMainMap.put("PLANT_CD", PLANT_CD);    	
    		sendMainMap.put("TRANS_DT", TRANS_DT);
    		sendMainMap.put("DESTINATION", DESTINATION);
    		sendMainMap.put("DEPARTURE", DEPARTURE);
    		sendMainMap.put("TRANS_STATUS", TRANS_STATUS);
    		sendMainMap.put("TRANS_MD", TRANS_MD);
    		sendMainMap.put("TRANS_JOB", transJob);
    		sendMainMap.put("PROGRAM_ID", transJob);
    		sendMainMap.put("WK_FLAG", WK_FLAG);
    		sendMainMap.put("USE_YN", USE_YN);
    		
    		//메일 제전송에 필요한 값들
    		//각 화면의 PK
    		sendMainMap.put("MAIL_PK_NO", pkNo); 
    		//첨부파일 경로
    		sendMainMap.put("MAIL_FILE_PATH", filePath); 
    		//거래처코드
    		sendMainMap.put("MAIL_VND_CD", vndEmailMap.get("VND_CD").toString());  
    		//파일첨부 여부 
    		sendMainMap.put("MAIL_FILE_YN", fileYn);     
    		
     		TRANS_ID = commonDao.getString("CM_MAIL_GET_TRANS_ID", sendMainMap);
    	
    		sendMainMap.put("TRANS_ID", TRANS_ID);
    		updateMetadataUtil.setAuditData(sendMainMap, transJob);
 	
    		sendMainMap.put("REG_USER", userId);
    		
    		//완료시간
    		sendMainMap.put("COMPLETE_TRANS_CURR", sendMainMap.get("REG_DT_LOC"));
    		
    		commonDao.insertData("CM_MAIL_SEND_MAIN_I", sendMainMap);
    		
    		Map<String, Object> sendHistoryMap = new HashedMap();
    		
    		sendHistoryMap.put("COMPANY_CD", COMPANY_CD);
    		sendHistoryMap.put("PLANT_CD", PLANT_CD);
    		sendHistoryMap.put("TRANS_ID", TRANS_ID);
    		sendHistoryMap.put("DESTINATION", DESTINATION);
    		sendHistoryMap.put("DEPARTURE", DEPARTURE);
    		sendHistoryMap.put("TRANS_STATUS", TRANS_STATUS);
    		sendHistoryMap.put("REMARK", REMARK);
    		sendHistoryMap.put("WK_FLAG", WK_FLAG);
    		sendHistoryMap.put("REMARK", REMARK);
    		updateMetadataUtil.setAuditData(sendHistoryMap, transJob);
    		
    		commonDao.insertData("CM_MAIL_SEND_HISTORY_I", sendHistoryMap);
    		
    		transactionManager.commit(transactionStatus);
    		log.info("sendMail() End!");
    		return 0;
    	} 
    	catch (Exception e) {
    		e.printStackTrace();
    		String errMsg = e.toString();
      		String errMsgReplaceAll = errMsg.replaceAll("(\r\n|\r|\n|\n\r)", "");
    		String COMPANY_CD = "001";
    		String PLANT_CD = "HDO";
    		String TRANS_ID = "";
    		String TRANS_DT = new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis()));
    		String DESTINATION = "HDO";
    		String DEPARTURE = "HDO";
    		String TRANS_MD = "ML";
    		String WK_FLAG = "I";
    		String USE_YN = "N";
    		String REMARK = "";
    		String TRANS_STATUS = "11";
    		
    		if(transJob.equals("MMR020CT") || transJob.equals("MMR050CT") || transJob.equals("RMR020CT") || transJob.equals("RMR040CT")) {
    			String [] fileNameArr = filePath.split("/");
    			String fileName = fileNameArr[fileNameArr.length-1];
    			String[] fileNameNoPdf = fileName.split("\\."); 
    			REMARK = "VENDER: "+vndEmailMap.get("KOR_NM").toString()+", NO: "+fileNameNoPdf[0]+", SUBJECT: "+vndEmailMap.get("SUBJECT").toString()+", SEND: "+picEmail+", TO: "+vndEmailMap.get("EMAIL").toString()+" 메일 발송실패, 원인: "+errMsgReplaceAll;
    		}else {
    			REMARK = "VENDER: "+vndEmailMap.get("KOR_NM").toString()+", NO: "+pkNo+", SUBJECT: "+vndEmailMap.get("SUBJECT").toString()+", SEND: "+picEmail+", TO: "+vndEmailMap.get("EMAIL").toString()+" 메일 발송실패, 원인: "+errMsgReplaceAll;
    		}
    		
    		Map<String, Object> sendMainMap = new HashedMap();
 
    		sendMainMap.put("COMPANY_CD", COMPANY_CD);
    		sendMainMap.put("PLANT_CD", PLANT_CD);    	
    		sendMainMap.put("TRANS_DT", TRANS_DT);
    		sendMainMap.put("DESTINATION", DESTINATION);
    		sendMainMap.put("DEPARTURE", DEPARTURE);
    		sendMainMap.put("TRANS_STATUS", TRANS_STATUS);
    		sendMainMap.put("TRANS_MD", TRANS_MD);
    		sendMainMap.put("TRANS_JOB", transJob);
    		sendMainMap.put("PROGRAM_ID", transJob);
    		sendMainMap.put("WK_FLAG", WK_FLAG);
    		sendMainMap.put("USE_YN", USE_YN);
       		TRANS_ID = commonDao.getString("CM_MAIL_GET_TRANS_ID", sendMainMap);
       		sendMainMap.put("TRANS_ID", TRANS_ID);
       		
    		//메일 제전송에 필요한 값들
    		//각 화면의 PK
    		sendMainMap.put("MAIL_PK_NO", pkNo); 
    		//첨부파일 경로
    		sendMainMap.put("MAIL_FILE_PATH", filePath); 
    		//거래처코드
    		sendMainMap.put("MAIL_VND_CD", vndEmailMap.get("VND_CD").toString());  
    		//파일첨부 여부 
    		sendMainMap.put("MAIL_FILE_YN", fileYn);     
    		
    		
    		updateMetadataUtil.setAuditData(sendMainMap, transJob);
    		
    		sendMainMap.put("REG_USER", userId);
 	
    		commonDao.insertData("CM_MAIL_SEND_MAIN_I", sendMainMap);
    		
    		Map<String, Object> sendHistoryMap = new HashedMap();
    		
    		sendHistoryMap.put("COMPANY_CD", COMPANY_CD);
    		sendHistoryMap.put("PLANT_CD", PLANT_CD);
    		sendHistoryMap.put("TRANS_ID", TRANS_ID);
    		sendHistoryMap.put("DESTINATION", DESTINATION);
    		sendHistoryMap.put("DEPARTURE", DEPARTURE);
    		sendHistoryMap.put("TRANS_STATUS", TRANS_STATUS);
    		sendHistoryMap.put("REMARK", REMARK);
    		sendHistoryMap.put("WK_FLAG", WK_FLAG);
    		sendHistoryMap.put("REMARK", REMARK);
    		updateMetadataUtil.setAuditData(sendHistoryMap, transJob);
    		
    		commonDao.insertData("CM_MAIL_SEND_HISTORY_I", sendHistoryMap);
    		transactionManager.commit(transactionStatus);
    		log.info("sendMail() ErrEnd!");
    		return -1;
    		
    	}

	}
	
	
	/**
	 * Mail 재송신
	 * @param vndKorNm 업체 이름 null이여도 상관없음
	 * @param vndEmail 수신자 업체 이메일
	 * @param picEmail 송신자
	 * @param hotEmailList 참조자 List
	 * @param emailTitle 메일 제목
	 * @param eamilText  메일 본문
	 * @param reSendMailmap TRNAS_ID 및 정보
	 * @return int
	 */
	public int reSendMail(Map<String, Object> vndEmailMap, String picEmail, List<String> hotEmailList, String emailTitle, String eamilText, Map<String,Object> reSendMailmap) {
		
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		log.info("reSendMail() Start!");
		
    	Properties props = new Properties(); 
    	props.put("mail.smtp.host", "smtps.hiworks.com"); 
    	props.put("mail.smtp.port", 465); 
    	props.put("mail.smtp.auth", "true"); 
    	props.put("mail.smtp.ssl.enable", "true"); 
    	
    	Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
    		protected PasswordAuthentication getPasswordAuthentication() { 
    			return new PasswordAuthentication("sct@sangjiship.com", "sct123456!"); 
    			} 
    	});
    	
    	try {
    		MimeMessage message = new MimeMessage(session); 
    		//보내는사람
    		message.setFrom(new InternetAddress("sct@sangjiship.com")); 
    		//받는사람
    		message.addRecipient(Message.RecipientType.TO, new InternetAddress("leehearts@esct.co.kr"));
    		//참조
    		for(int i = 0; i<hotEmailList.size(); i++) {
    			String hotEmail = hotEmailList.get(i);
    			message.setRecipients(Message.RecipientType.CC, hotEmail);
    		}
    		// 메일 제목 
    		message.setSubject(emailTitle); 
    		
    		MimeBodyPart mbp1 = new MimeBodyPart();
    		
    		mbp1.setText(eamilText,"UTF-8","html");
    		
    		Multipart mp = new MimeMultipart();
    		mp.addBodyPart(mbp1);
    		
    		if(reSendMailmap.get("MAIL_FILE_YN").toString().equals("Y")) {
	    		MimeBodyPart mbp2 = new MimeBodyPart();
	    		File file = new File(reSendMailmap.get("MAIL_FILE_PATH").toString());
	    		FileDataSource fds = new FileDataSource(file.getAbsolutePath());
	    		
	    		mbp2.setDataHandler(new DataHandler(fds));
	    		
	    		mbp2.setFileName(MimeUtility.encodeText(fds.getName()));
	    		mp.addBodyPart(mbp2);
    		}
    		message.setContent(mp);
    		
    		// send the message
    		Transport.send(message);  
    		
    		String TRANS_STATUS = "16";
    		reSendMailmap.put("TRANS_STATUS", TRANS_STATUS);
    		
    		updateMetadataUtil.setAuditData(reSendMailmap, reSendMailmap.get("TRANS_JOB").toString());
    		reSendMailmap.put("REG_USER", reSendMailmap.get("USER_ID").toString());
    		
    		//완료시간
    		reSendMailmap.put("COMPLETE_TRANS_CURR", reSendMailmap.get("REG_DT_LOC"));
			
			commonDao.updateData("CM_MAIL.CM_MAIL_SEND_MAIN_U", reSendMailmap);
			
			String REMARK = "";
			if(reSendMailmap.get("TRANS_JOB").toString().equals("MMR020CT") || reSendMailmap.get("TRANS_JOB").toString().equals("MMR050CT") 
					|| reSendMailmap.get("TRANS_JOB").toString().equals("RMR020CT") || reSendMailmap.get("TRANS_JOB").toString().equals("RMR040CT")) {
    			String [] fileNameArr = reSendMailmap.get("MAIL_FILE_PATH").toString().split("/");
    			String fileName = fileNameArr[fileNameArr.length-1];
    			String[] fileNameNoPdf = fileName.split("\\."); 
    			REMARK = "VENDER: "+vndEmailMap.get("KOR_NM").toString()+", NO: "+fileNameNoPdf[0]+", SUBJECT: "+vndEmailMap.get("SUBJECT").toString()+", SEND: "+picEmail+", TO: "+vndEmailMap.get("EMAIL").toString()+" 메일 발송완료";
    		}else {
    			REMARK = "VENDER: "+vndEmailMap.get("KOR_NM").toString()+", NO: "+reSendMailmap.get("MAIL_PK_NO").toString()+", SUBJECT: "+vndEmailMap.get("SUBJECT").toString()+", SEND: "+picEmail+", TO: "+vndEmailMap.get("EMAIL").toString()+" 메일 발송완료";
    		}
			
			reSendMailmap.put("REMARK", REMARK);
			
			commonDao.insertData("CM_MAIL.CM_MAIL_SEND_HISTORY_I", reSendMailmap);
			
			transactionManager.commit(transactionStatus);
			log.info("reSendMail() End!");
    		return 0;
    	} 
    	catch (Exception e) {
    		e.printStackTrace();
    		String errMsg = e.toString();	
      		String errMsgReplaceAll = errMsg.replaceAll("(\r\n|\r|\n|\n\r)", "");
    		
      		String TRANS_STATUS = "11";
      		reSendMailmap.put("TRANS_STATUS", TRANS_STATUS);
    		
    		updateMetadataUtil.setAuditData(reSendMailmap, reSendMailmap.get("TRANS_JOB").toString());
    		reSendMailmap.put("REG_USER", reSendMailmap.get("USER_ID").toString());
			
			commonDao.updateData("CM_MAIL.CM_MAIL_SEND_MAIN_U", reSendMailmap);
				
			String REMARK = "";
			if(reSendMailmap.get("TRANS_JOB").toString().equals("MMR020CT") || reSendMailmap.get("TRANS_JOB").toString().equals("MMR050CT") 
					|| reSendMailmap.get("TRANS_JOB").toString().equals("RMR020CT") || reSendMailmap.get("TRANS_JOB").toString().equals("RMR040CT")) {
    			String [] fileNameArr = reSendMailmap.get("MAIL_FILE_PATH").toString().split("/");
    			String fileName = fileNameArr[fileNameArr.length-1];
    			String[] fileNameNoPdf = fileName.split("\\."); 
    			REMARK = "VENDER: "+vndEmailMap.get("KOR_NM").toString()+", NO: "+fileNameNoPdf[0]+", SUBJECT: "+vndEmailMap.get("SUBJECT").toString()+", SEND: "+picEmail+", TO: "+vndEmailMap.get("EMAIL").toString()+" 메일 발송실패, 원인: "+errMsgReplaceAll;
    		}else {
    			REMARK = "VENDER: "+vndEmailMap.get("KOR_NM").toString()+", NO: "+reSendMailmap.get("MAIL_PK_NO").toString()+", SUBJECT: "+vndEmailMap.get("SUBJECT").toString()+", SEND: "+picEmail+", TO: "+vndEmailMap.get("EMAIL").toString()+" 메일 발송실패, 원인: "+errMsgReplaceAll;
    		}
			
			reSendMailmap.put("REMARK", REMARK);
			
			commonDao.insertData("CM_MAIL.CM_MAIL_SEND_HISTORY_I", reSendMailmap);
    		
			transactionManager.commit(transactionStatus);
      		log.info("reSendMail() ErrEnd!");
    		return -1;
    		
    	}

	}
}



