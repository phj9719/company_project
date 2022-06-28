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
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.nexacro17.xapi.data.ColumnHeader;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.data.datatype.DataType;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.PlatformException;

import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.exception.NexaUserDefineException;
import egovframework.com.rte.nexacro.NexacroConstant;

@Component("LanguageUtil")
public class LanguageUtil {
	
	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	private Logger log = LoggerFactory.getLogger(this.getClass().getName());
	
	/**
	 *  세션 langCd와 msgId로 메세지 return
	 * @param VariableList inVar, String msgId
	 * @return String
	 */
	public String getMessage(VariableList inVar, String msgId) {
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("MSG_ID", msgId);
		map.put("LANG_CD", inVar.getString("DEF_LANG"));
		map.put("M_COMPANY_CD", inVar.getString("M_COMPANY_CD"));
		String msg = commonDao.getString("Common.getMessageDescription", map);
		
		//특수문자치환
		msg = msg.replaceAll("'", "\"");
				
		return msg;
	}

	/**
	 *  세션 langCd와 msgId와 메세지파라미터로 메세지 return (메세지에 {0} 등 argument 포함된 경우)
	 * @param VariableList inVar, String msgId, String[] arrArgs
	 * @return String
	 */
	public String getMessage(VariableList inVar, String msgId, String[] arrArgs) {
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("MSG_ID", msgId);
		map.put("LANG_CD", inVar.getString("DEF_LANG"));
		map.put("M_COMPANY_CD", inVar.getString("M_COMPANY_CD"));
		String msg = commonDao.getString("Common.getMessageDescription", map);
		
		for(int i=0; i<arrArgs.length; i++)msg = msg.replace("{" + i + "}", arrArgs[i]);
		
		//특수문자치환
		msg = msg.replaceAll("'", "\"");
	
		return msg;
	}
	
	/**
	 * msgId로 메세지 return, langCd은 세션 값 사용
	 * @param langCd
	 * @param msgId
	 * @return
	 */
//	public String getMessage(String msgId) {
//		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
//		HttpSession session = request.getSession();
//
//		String userLang = (String) session.getAttribute("DEF_LANG");
//    	
//		if(userLang == null || userLang == ""){
//			userLang = "ko_KR";
//		}
//		
//		Map<String, Object> map = new HashMap<String, Object>();
//		map.put("MSG_ID", msgId);
//		map.put("LANG_CD", userLang);
//		String msg = commonDao.getString("Common.getMessageDescription", map);
//		
//		//특수문자치환
//		msg = msg.replaceAll("'", "\"");
//				
//		return msg;
//	}

}
