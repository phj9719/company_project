package egovframework.com.common.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.jdbc.BadSqlGrammarException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.PlatformException;

import egovframework.com.common.exception.NexaServiceException;
import egovframework.com.common.util.FcmUtil;
import egovframework.com.common.util.LanguageUtil;

@Controller
public class FcmController {
	
	private Logger log = LoggerFactory.getLogger(FcmController.class);
	
	@Resource(name="LanguageUtil")
	private LanguageUtil languageUtil;
	
	@RequestMapping(value = "/fcmTest.do")
	public @ResponseBody String fcmtest(HttpServletRequest request, HttpServletResponse response, Model model) throws Exception {
		
		//String tokenId = "c_5P__GeQC-Dm0ffQXP7iX:APA91bFMZkZKlQ17tbPU-O5Hxxc7aKh0cUvxXZiuvOpvQEu7u7RVarj3_jwYvGFbs1MkubkdxZZCoYqAg2Lox5wH_CBmr8Db2P2mqkyOHnNIbiB1bUaBAcPKbdn3YQXlA5LUngmkdVsQ";
		String tokenId = "";
		String title = "태블릿 푸시 알림 테스트 제목입니다.";
		String content = "태블릿 푸시 알림 테스트 내용입니다.";
		
		FcmUtil fcmUtil = new FcmUtil();
		fcmUtil.send_FCM(tokenId, title, content);
		
		return "test";
	}
	
	@RequestMapping(value = "/mFcmTest.do")
	public @ResponseBody String mFcmTest(HttpServletRequest request, HttpServletResponse response, Model model) throws Exception {
		
		//String tokenId = "fqTBzebnS4aU8r36sGzu3b:APA91bH95dcsmDRhdC4VfRv-xV-3Z6KGtaUO6CUw9DBcLnlhAHXL8olHIzc8D3o-V-r6kb20kj-MFwDuyTg_guldHebhzMV_Ld_JNZrcfmMIkMchikOtc1_xsEsnouCEbGDc8gtCLBUv";
		String tokenId = "";
		String title = "스마트 안심요양원";
		String content = "새 공지사항이 등록되었습니다.";
		
		FcmUtil fcmUtil = new FcmUtil();
		//fcmUtil.mSend_FCM(tokenId, title, content);
		
		return "test";
	}
	
	@RequestMapping(value = "/mFcm.do")
	public NexacroResult mobileNotification(HttpServletRequest request, HttpServletResponse response) {
		
		NexacroResult result = new NexacroResult();
		VariableList inVar 	 = new VariableList();
		
    	try {
    		HttpPlatformRequest hpRequest = new HttpPlatformRequest(request);
			hpRequest.receiveData();
			PlatformData inputData = hpRequest.getData();
	    	inVar 	= inputData.getVariableList();
		} catch (PlatformException e) {
			result.setErrorCode(-1);
			result.setErrorMsg(getErrorMsg(inVar, e));
		}
		
    	String companyCd = inVar.getString("COMPANY_CD");
		String tokenId = "";
		String title = "스마트 안심요양원";
		String content = "공지사항이 등록 혹은 수정되었습니다.";
		log.debug("companyCd : {}", companyCd);
		log.debug("tokenId : {}", tokenId);
		log.debug("title : {}", title);
		log.debug("content : {}", content);
		
		FcmUtil fcmUtil = new FcmUtil();
		fcmUtil.mSend_FCM(tokenId, title, content, companyCd);
		
		return result;
	}
	
	private String getErrorMsg(VariableList inVar, Exception e)
	{
		String errorMsg ;
		Throwable de = e.getCause();
		if (de instanceof BadSqlGrammarException) {
			log.error("SQL 정합성에러: {}", de.getMessage());
			String[] argArr = {String.valueOf(((BadSqlGrammarException) de).getSQLException().getErrorCode())
					, String.valueOf(((BadSqlGrammarException) de).getSQLException().getMessage())};
			errorMsg = languageUtil.getMessage(inVar, "000088", argArr);	// SQL 오류가 발생했습니다! 오류 코드: {0}, 오류 메시지: {1}
		} else if (de instanceof DuplicateKeyException) {
			log.error("키값 중복에러: {}", de.getMessage());
			errorMsg = languageUtil.getMessage(inVar, "000235");	// 중복된 데이터가 존재하여 저장할 수 없습니다.
		} else if (de instanceof NexaServiceException) {
			log.error("커스텀 에러 : {}", de.getMessage());
			errorMsg = de.getMessage();
		} else {
			errorMsg = languageUtil.getMessage(inVar, "000213");	// 처리중 에러가 발생하였습니다.
			log.error("", e);
			log.error(e.getMessage());
		}
		
		return errorMsg;
	}
}
