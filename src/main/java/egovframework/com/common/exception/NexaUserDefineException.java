/**************************************************************************************
 * nexa SAMPLE SYSTEM 
 * Copyright(c) 2009 nexa ALLRIGHTS RESERVED.
 * 
 * 1.프로그램명  	: NexaServiceException
 * 2.파일명		: NexaServiceException.java
 * 3.개발자		: sian
 * 4.개발일자		: 2014.09.06 
 * 5.버젼		: 0.1
 * 6.설명		: NexaServiceException 발생시 공통 처리 부분
 * 7.이력		
 * 8.추가사항		: 화면에서 메시지 출력시 메시지 처리 부분 추가 
*************************************************************************************/
package egovframework.com.common.exception;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class NexaUserDefineException extends RuntimeException {
	
	private static final long serialVersionUID = -1121094779090553561L;
	
	protected static final Log log = LogFactory.getLog(NexaServiceException.class);
	
	public NexaUserDefineException() {
		super();		
	}

	public NexaUserDefineException(String message, Throwable cause) {
		super(message, cause);
	}

	public NexaUserDefineException(String message) {
		super(message);
	}

	public NexaUserDefineException(Throwable cause) {
		super(cause);
	}
}