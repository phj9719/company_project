/**************************************************************************************
 * nexacro SAMPLE SYSTEM 
 * Copyright(c) 2009 nexacro ALLRIGHTS RESERVED.
 * 
 * 1.프로그램명  	: NexaDaoException
 * 2.파일명		: NexaDaoException.java
 * 3.개발자		: sian
 * 4.개발일자		: 2014.09.06 
 * 5.버젼		: 0.1
 * 6.설명		: NexaDaoException 발생시 공통 처리 부분
 * 7.이력		 
*************************************************************************************/
package egovframework.com.common.exception;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.dao.DataAccessException;

public class NexaDaoException extends DataAccessException{
	
	private static final long serialVersionUID = -4682560601213268496L;
	
	protected static final Log log = LogFactory.getLog(NexaDaoException.class);

	public NexaDaoException(String msg, Throwable cause) {
		super(msg, cause);
	}

	public NexaDaoException(String msg) {
		super(msg);
	}
}