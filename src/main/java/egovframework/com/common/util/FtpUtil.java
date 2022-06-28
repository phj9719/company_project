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
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPFile;
import org.apache.commons.net.ftp.FTPReply;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.PlatformTransactionManager;

import egovframework.com.common.constant.CommonConstant;

/**
 * FTP관련 UTIL Class
 * @author SCT-PC-4
 *
 */



@Component("FtpUtil")
public class FtpUtil {

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());
	
	@Autowired
	private Compress compress;

	/**
	 * FTP Data전송
	 * @param DataSet
	 * @return int
	 */
	public int sendFile(String destIp, List<Map<String, Object>> fileNameList) throws Exception {

		FTPClient client = null;
		FileInputStream inputStream = null;

		// 계정 로그인
		try {
			client = new FTPClient();
			client.setControlEncoding("MS949");			// 한글encoding

			client.connect(destIp);
			log.info("Connected to " + destIp);

			// 응답코드가 비정상일 경우 종료함
			int reply = client.getReplyCode();

			if (!FTPReply.isPositiveCompletion(reply)) {
				client.disconnect();
				log.info("FTP server refused connection");
				return CommonConstant.FTP_CONN_ERROR;
			} else {
				log.info(client.getReplyString());

				// timeout을 설정
				client.setSoTimeout(10000);

				// 로그인
				if (!client.login(CommonConstant.FTP_ID, CommonConstant.FTP_PASS)) {
					log.info("ftpuser login fail");
					return CommonConstant.FTP_CONN_ERROR;
				} else {
					log.info("ftpuser login success...");
				}

				client.enterLocalPassiveMode();
				client.setFileType(FTP.BINARY_FILE_TYPE);
				client.setFileTransferMode(FTP.STREAM_TRANSFER_MODE);	
				
				// "/FILES/FTP/in/" 디렉토리 생성
				client.makeDirectory(CommonConstant.FTP_DIR);
				client.makeDirectory(CommonConstant.FTP_DIR_IN);
				
				log.info(client.getReplyString());

				// 파일전송
				for (Map<String, Object> record : fileNameList) {
					String fileRealName = (String) record.get("FILE_REAL_NAME");
					String fileName = (String) record.get("FILE_NAME");
					String tempPath = "";
					
				//	System.out.println(fileRealName);
				//	System.out.println(CommonConstant.FILE_ROOT_DIR + fileRealName); 
					
					String fileRealName2 = (String) record.get("FILE_REAL_NAME");
					String [] fileRealNameSplit = fileRealName2.split("/");
					for(int i = 0; i<fileRealNameSplit.length-1; i++) {
						tempPath += "/"+fileRealNameSplit[i];
						client.makeDirectory(CommonConstant.FTP_DIR_IN+tempPath);
					}
					
					File put_file = new File(CommonConstant.FILE_ROOT_DIR + fileRealName);
					if(!put_file.exists()) {
						log.info("파일 없음");
						return CommonConstant.FTP_NO_FILE;
					}
					
					compress.compress(put_file);
					
					String[] filezipPath = (CommonConstant.FILE_ROOT_DIR + fileRealName).split("\\.");
					
					File put_file_zip = new File(filezipPath[0]+".zip");	
				//	inputStream = new FileInputStream(put_file_zip.getPath());	
					inputStream = new FileInputStream(CommonConstant.FILE_ROOT_DIR + fileRealName);	
				//	if (!client.storeFile((CommonConstant.FTP_DIR_IN + fileRealName).split("\\.")[0]+".zip", inputStream)) {
					if (!client.storeFile((CommonConstant.FTP_DIR_IN + fileRealName), inputStream)) {					
						log.info("FTP 전송시 오류발생");
						log.info(client.getReplyString());
						inputStream.close();
						return CommonConstant.FTP_TRANS_ERROR;
					}
					
					inputStream.close();
					//송신 local zip 파일 삭제
					//put_file_zip.delete();
				}

				client.logout();
			}
		} catch (Exception e) {
			log.info("ftp Error");
			e.printStackTrace();
			throw e;
		} finally {
			try {
				if (inputStream != null) {
					inputStream.close();
				}
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
			if(client != null && client.isConnected()){
				try {
					client.disconnect();
				}catch(IOException ioe) {
					ioe.printStackTrace();
				}
			}
		}

		return CommonConstant.SUCCESS;
	}

	/**
	 * FTP 파일수신
	 * @param DataSet
	 * @return int
	 */
	public int getFile(String destIp, List<Map<String, Object>> fileNameList) throws Exception {

		FTPClient client = null;
		FileInputStream inputStream = null;

		// 계정 로그인
		try {
			client = new FTPClient();
			client.setControlEncoding("euc-kr"); //한글 사용

			client.connect(destIp);
			log.info("Connected to " + destIp);

			// 응답코드가 비정상일 경우 종료함
			int reply = client.getReplyCode();

			if (!FTPReply.isPositiveCompletion(reply)) {
				client.disconnect();
				log.info("FTP server refused connection");
				return CommonConstant.FTP_CONN_ERROR;
			} else {
				log.info(client.getReplyString());

				// timeout을 설정
				client.setSoTimeout(10000);

				// 로그인
				if (!client.login(CommonConstant.FTP_ID, CommonConstant.FTP_PASS)) {
					log.info("ftpuser login fail");
					return CommonConstant.FTP_CONN_ERROR;
				} else {
					log.info("ftpuser login success...");
				}

				client.enterLocalPassiveMode();
				client.setFileType(FTP.BINARY_FILE_TYPE);
				client.setFileTransferMode(FTP.BINARY_FILE_TYPE);

				// "/FILES/FTP/in/" 디렉토리 생성
			
				// 파일수신
				for (Map<String, Object> record : fileNameList) {					
					String fileRealName = (String) record.get("FILE_REAL_NAME");
					String fileName = (String) record.get("FILE_NAME");
					
					
					String tempPath = "";
					String fileRealName2 = (String) record.get("FILE_REAL_NAME");
					String [] fileRealNameSplit = fileRealName2.split("/");
					for(int i = 0; i<fileRealNameSplit.length-1; i++) {
						tempPath += "/"+fileRealNameSplit[i];						
					}
					File dirFile = new File(CommonConstant.FILE_ROOT_DIR+tempPath);
					dirFile.mkdirs();
					
					if (StringUtils.isEmpty(fileRealName) || StringUtils.isEmpty(fileName)) {
						continue;
					}
									
					File file = null;
				
				//	file = new File(CommonConstant.FILE_ROOT_DIR+fileRealName.split("\\.")[0]+".zip");
					file = new File(CommonConstant.FILE_ROOT_DIR+fileRealName);
				//	System.out.println(CommonConstant.FILE_ROOT_DIR+fileRealName);
					
					FileOutputStream outputstream = new FileOutputStream(file);
					
				//	if (!client.retrieveFile(CommonConstant.FTP_DIR_IN+fileRealName.split("\\.")[0]+".zip", outputstream)) {
					if (!client.retrieveFile(CommonConstant.FTP_DIR_IN+fileRealName, outputstream)) {
						log.info("FTP 수신시 오류발생");
						log.info(client.getReplyString());
						outputstream.close();
						return CommonConstant.FTP_TRANS_ERROR;
					} else {

					
					}
					//파일 송신 후 삭제
					//client.deleteFile(fileRealName);
				//	compress.unCompress(fileRealName);
					outputstream.close();		
				//	file.delete();
				}
				client.logout();
			}
		} catch (Exception e) {
			log.info("ftp Error");
			e.printStackTrace();
			return CommonConstant.FTP_TRANS_ERROR;
		} finally {
			try {
				if (inputStream != null) {
					inputStream.close();
				}
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
			if(client != null && client.isConnected()){
				try {
					client.disconnect();
				}catch(IOException ioe) {
					ioe.printStackTrace();
				}
			}
		}

		return CommonConstant.SUCCESS;
	}
}
