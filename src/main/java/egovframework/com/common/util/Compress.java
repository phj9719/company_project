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

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.charset.Charset;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import java.util.zip.ZipOutputStream;

import javax.annotation.Resource;

import org.apache.commons.io.FilenameUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import egovframework.com.common.constant.CommonConstant;
import egovframework.com.common.dao.CommonDao;

/**
 * Alert관련 UTIL Class
 * @author SCT-PC-4
 *
 */
@Component("Compress")
public class Compress {
	
	private Logger log = LoggerFactory.getLogger(this.getClass().getSimpleName());

	/**
	 * Alert 실행
	 * @param DataSet
	 * @return void
	 */
	public int compress(File file) {

		log.info("compress() Start!");
		
		int errCode = 0;
		byte[] buf = new byte[1024];		
	
		String [] fileSplit = file.getPath().split("\\.");
		
		File filezip = new File(fileSplit[0]+".zip");		
		FileInputStream fileInputStream = null;
		FileOutputStream fileOutputStream = null;
		BufferedOutputStream bufferedOutputStream = null;
		ZipOutputStream outputStream = null;
		try {
			fileInputStream = new FileInputStream(file);
			fileOutputStream = new FileOutputStream(filezip);
			bufferedOutputStream = new BufferedOutputStream(fileOutputStream);
			outputStream = new ZipOutputStream(bufferedOutputStream, Charset.forName("MS949"));		
			outputStream.putNextEntry(new ZipEntry(file.getName()));
			 
			int len;
			byte[] buffer = new byte[1024];
			while ((len = fileInputStream.read(buffer)) > 0) {
				outputStream.write(buffer, 0, len);
			}
			
			outputStream.closeEntry();
			fileInputStream.close();
            outputStream.close();
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			return errCode;
		}  finally {
            try {
                outputStream.closeEntry();
                outputStream.close();
                fileInputStream.close();
            } catch (IOException e) {
                // Exception Handling
            }
        }
		log.info("compress() End!");
		return errCode;
	
	}
	
	public int unCompress(String tempPath) {
		
		log.info("unCompress() Start!");
		
		int errCode = 0;
	
		
        FileInputStream fileInputStream = null;
        FileOutputStream fileOutputStream = null;
        ZipInputStream zipInputStream = null;
        
      //  System.out.println(tempPath.getPath());
        System.out.println(tempPath);
        
		try {
	         fileInputStream = new FileInputStream(CommonConstant.FILE_ROOT_DIR+tempPath.split("\\.")[0]+".zip");
	         zipInputStream = new ZipInputStream(fileInputStream,Charset.forName("euc-kr"));

	         ZipEntry zipEntry = null;            
             
             while ((zipEntry = zipInputStream.getNextEntry()) != null) {         	
            	fileOutputStream = new FileOutputStream(new File(CommonConstant.FILE_ROOT_DIR+tempPath));      
            	
                int len = 0;
            	byte[] buffer = new byte[1024];
 //           	while ((len = zipInputStream.read(buffer,0,1024)) != -1) {              
            	while (zipInputStream.available() != 0 ) {
            		fileOutputStream.write(zipInputStream.read());
                }

                
                fileOutputStream.flush();
                fileOutputStream.close();
                zipInputStream.closeEntry();
             }
        
             zipInputStream.close();
             fileInputStream.close();
		
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			return errCode;
		} finally {
            try {      
                fileOutputStream.flush();
                fileOutputStream.close();
                zipInputStream.close();
                fileInputStream.close();
            } catch (IOException e) {
                // Exception Handling
            }
        }
		log.info("unCompress() End!");
		return errCode;
	}

}
