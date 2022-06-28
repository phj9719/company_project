package egovframework.com.common.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * Change Exception Message to MessageCode  
 * 
 * @author Kim JeongLok
 * @since 2017.10.05
 * @version 1.0
 * @see 
 */
@Service("ExceptionMsgChanger")
public class ExceptionMsgChanger {

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	public String changeExceptionMsg(String errMsg){
		String rtnMsg = "";
		
		if(errMsg.contains("sql.")){
			log.debug("SQL 에러");
			//rtnMsg = errMsg.substring(errMsg.indexOf(":"),errMsg.indexOf("")+9).replace("-", "");
			//rtnMsg.trim();
			errMsg.trim();
			String[] rtnMsgarr = errMsg.split(":");
			rtnMsg = rtnMsgarr[2];			
		}else if(errMsg.contains("lang.Exception")){
			log.debug("자바 에러");
			rtnMsg = errMsg.substring(errMsg.indexOf(":")+1, errMsg.length());
		}else if(errMsg.contains("BOM INFINITE")){
			rtnMsg = "ORALOOP";
		}
		log.debug("에러코드:"+rtnMsg);
		return rtnMsg;
	}
}
