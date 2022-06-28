/************************************************************************************
 * Argus System Controller
 * Copyright(c) SCT
 * 
 * 1.Program  			: Login Controller
 * 2.File Name			: LoginOutController.java
 * 3.Developer			: JL
 * 4.Development Date	: 2017-08-25
 * 5.Version			: 0.1
 * 6.Note				: 
 * 7.History		    :
*************************************************************************************/
package egovframework.com.common.controller;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.jdbc.BadSqlGrammarException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;

import egovframework.com.common.constant.CommonConstant;
import egovframework.com.common.service.LogInOutService;
import egovframework.com.common.util.LanguageUtil;

/**
 * Log in 및 Log out을 처리하는 공통 Controller
 */
@Controller
public class LogInOutController {

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	@Resource(name="logInOutService")
	LogInOutService logInOutService; 
	
	@Resource(name="LanguageUtil")
	LanguageUtil languageUtil;
	/**
	 * Login Check
	 * @param user
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/loginCheck.do")
    public NexacroResult loginCheck(HttpServletRequest request, HttpServletResponse response) {
    	NexacroResult result = new NexacroResult();
    	VariableList inVar   = new VariableList();
    	try {
    		HttpPlatformRequest hpRequest = new HttpPlatformRequest(request);
	    	hpRequest.receiveData();

	        PlatformData inputData = hpRequest.getData();
        	inVar 	= inputData.getVariableList();

			DataSetList dataset = inputData.getDataSetList();
			DataSetList inDataSet = new DataSetList();
			Map<String, List<Map<String, Object>>> outMap = new HashMap<String, List<Map<String, Object>>>(); 

			for (int i = 0; i < dataset.size(); i++) {
				DataSet ds = dataset.get(i);
				log.debug(ds.getName());
				if (ds.getName().startsWith("input")) {
					inDataSet.add(ds);
				}
			}

			String userId = inVar.getString("V_USER_ID");

			//inVar --> id, pass만 보내기
			int loginCheckStatus = logInOutService.nshLogin(inVar, outMap);

			if (loginCheckStatus == CommonConstant.LOGIN_RESULT_ID_ERROR) {
		    	result.setErrorCode(-1);
		    	//result.setErrorMsg(languageUtil.getMessage(inVar, "000127")); //해당 아이디가 존재하지 않습니다.
		    	result.setErrorMsg("로그인에 실패하였습니다.");
				return result;
			} else if (loginCheckStatus == CommonConstant.LOGIN_RESULT_PASS_ERROR) {
				result.setErrorCode(-1);
		    	result.setErrorMsg("비밀번호가 일치하지 않습니다."); //비밀번호가 일치하지 않습니다.
				return result;
			} else if (loginCheckStatus == CommonConstant.LOGIN_RESULT_LICENSE_ERROR) {
				result.setErrorCode(-1);
				result.setErrorMsg("시설의 라이센스가 만료되었습니다.");	// 시설의 라이센스가 만료되었습니다.
				return result;
			} else if (loginCheckStatus == CommonConstant.LOGIN_RESULT_USE_ERROR) {
				result.setErrorCode(-1);
				result.setErrorMsg("비인가 사용자 입니다.");	// 비인가 사용자 입니다.
				return result;
			}

			//List<Map<String, Object>> listUserInfo = outMap.get("gds_userInfo");
			//request.getSession().setAttribute("DEF_LANG", listUserInfo.get(0).get("DEF_LANG"));
			request.getSession().setAttribute("USER_ID", userId);
			request.getSession().setMaxInactiveInterval(0);

			Set<String> s = outMap.keySet();
			Iterator<String> ite = s.iterator();
			while (ite.hasNext()) {
				String key = ite.next();
	        	result.addDataSet(key, outMap.get(key));
			}

	    	result.setErrorCode(0);
		} catch (Exception e) {
			result.setErrorCode(-1);
			result.setErrorMsg("에러발생");
		}

		return result;
    }
	
	@RequestMapping("/MobileLoginCheck.do")
	public NexacroResult mobileLoginCheck(HttpServletRequest request, HttpServletResponse response) {
		NexacroResult result = new NexacroResult();
		VariableList inVar = new VariableList();
		try {
			HttpPlatformRequest hpRequest = new HttpPlatformRequest(request);
			hpRequest.receiveData();
			
			PlatformData inputData = hpRequest.getData();
			inVar = inputData.getVariableList();
			
			DataSetList dataset = inputData.getDataSetList();
			DataSetList inDataSet = new DataSetList();
			Map<String, List<Map<String, Object>>> outMap = new HashMap<String, List<Map<String, Object>>>();
			
			for(int i = 0; i < dataset.size(); i++) {
				DataSet ds = dataset.get(i);
				log.debug(ds.getName());
				if(ds.getName().startsWith("input")) {
					inDataSet.add(ds);
				}
			}
			
			String userId = inVar.getString("V_USER_ID");
			
			int mLoginCheckStatus = logInOutService.mobileLoginCheck(inVar, outMap);
			
			if(mLoginCheckStatus == CommonConstant.LOGIN_RESULT_ID_ERROR) {
				result.setErrorCode(-1);
				result.setErrorMsg(languageUtil.getMessage(inVar, "000127"));	// 로그인에 실패하였습니다.
				return result;
			} else if(mLoginCheckStatus == CommonConstant.LOGIN_RESULT_PASS_ERROR) {
				result.setErrorCode(-1);
				result.setErrorMsg(languageUtil.getMessage(inVar, "000127"));
				return result;
			} else if(mLoginCheckStatus == CommonConstant.LOGIN_RESULT_LICENSE_ERROR) {
				result.setErrorCode(-1);
				result.setErrorMsg(languageUtil.getMessage(inVar, "000313"));
				return result;
			} else if(mLoginCheckStatus == CommonConstant.LOGIN_RESULT_RECORDS_ERROR) {
				result.setErrorCode(-1);
				result.setErrorMsg(languageUtil.getMessage(inVar, "000581"));
				return result;
			}
			
			HttpSession session = request.getSession(true);
			session.setAttribute("USER_ID", userId);
			session.setMaxInactiveInterval(0);
			
			Set<String> s = outMap.keySet();
			Iterator<String> ite = s.iterator();
			while(ite.hasNext()) {
				String key = ite.next();
				result.addDataSet(key, outMap.get(key));
			}
			
			result.setErrorCode(0);
			
		} catch(Exception e) {
			result.setErrorCode(-1);
			result.setErrorMsg("에러 발생");
		}
		
		return result;
	}
	
	/**
	 * Logout
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/logout.do")
	public NexacroResult loginOut(HttpServletRequest request) {

    	NexacroResult result = new NexacroResult();
    	
    	log.debug("JESSSIONID(?) {}: ", request.getSession().getId());

		HttpSession session = request.getSession(false);
		if(session != null){
			session.invalidate();
			log.debug("세션해제");
	    	result.setErrorCode(0);
	    	result.setErrorMsg("로그아웃 되었습니다.");
		}
		log.debug("로그아웃 완료");
		return result;
	}
	

	/**
	 * 메시지 setting함수
	 * @param inVar
	 * @param e
	 * @return
	 */
	private String getErrorMsg(VariableList inVar, Exception e)
	{
		String errorMsg ;
		Throwable de = e.getCause();
		if (de instanceof BadSqlGrammarException) {
			log.error("SQL 정합성에러: {}", de.getMessage());
			String[] argArr = {String.valueOf(((BadSqlGrammarException) de).getSQLException().getErrorCode())
					, String.valueOf(((BadSqlGrammarException) de).getSQLException().getMessage())};
			//errorMsg = languageUtil.getMessage(inVar, "000088", argArr);	// SQL 오류가 발생했습니다! 오류 코드: {0}, 오류 메시지: {1}
			errorMsg = "SQL 오류가 발생했습니다! 오류 코드 : " + argArr[0] + ", 오류 메시지 : " + argArr[1];
		} else if (de instanceof DuplicateKeyException) {
			log.error("키값 중복에러: {}", de.getMessage());
			//errorMsg = languageUtil.getMessage(inVar, "000235");	// 중복된 데이터가 존재하여 저장할 수 없습니다.
			errorMsg = "중복된 데이터가 존재하여 저장할 수 없습니다.";
		} else {
			//errorMsg = languageUtil.getMessage(inVar, "000213");	// 처리중 에러가 발생하였습니다.
			errorMsg = "처리중 에러가 발생하였습니다.";
			log.error("", e);
			log.error(e.getMessage());
		}
		
		return errorMsg;
	}
}
