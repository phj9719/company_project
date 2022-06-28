package egovframework.com.cm.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

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

import egovframework.com.common.exception.NexaServiceException;
import egovframework.com.common.util.LanguageUtil;
import egovframework.com.cm.service.CMA370QRService;

@Controller
public class CMA370QRController {

	private Logger log = LoggerFactory.getLogger(CMA370QRController.class);

	@Resource(name="CMA370QRService")
	private CMA370QRService CMA370QRService;
	
	@Resource(name="LanguageUtil")
	private LanguageUtil languageUtil;
	
	
	@RequestMapping(value = "/CMA370QR_send.do")
    public NexacroResult send(HttpServletRequest request) {
    	NexacroResult result = new NexacroResult();
    	VariableList inVar 	 = new VariableList();
    	
    	try {
    		HttpPlatformRequest hpRequest = new HttpPlatformRequest(request);
	    	hpRequest.receiveData();

	        PlatformData inputData = hpRequest.getData();
        	inVar 	= inputData.getVariableList();
			DataSetList inDataSet = inputData.getDataSetList();

			result = CMA370QRService.send(inVar, inDataSet);
			
		} catch (Exception e) {
			result.setErrorCode(-1);
			result.setErrorMsg(getErrorMsg(inVar, e));
		}

    	return result;
    }
	
	@RequestMapping(value = "/CMA370QR_cancel.do")
	public NexacroResult cancel(HttpServletRequest request) {
		NexacroResult result = new NexacroResult();
		VariableList inVar 	 = new VariableList();
		
		try {
			HttpPlatformRequest hpRequest = new HttpPlatformRequest(request);
			hpRequest.receiveData();
			
			PlatformData inputData = hpRequest.getData();
			inVar 	= inputData.getVariableList();
			DataSetList inDataSet = inputData.getDataSetList();
			
			result = CMA370QRService.cancel(inVar, inDataSet);
			
		} catch (Exception e) {
			result.setErrorCode(-1);
			result.setErrorMsg(getErrorMsg(inVar, e));
		}
		
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
			log.debug("SQL 정합성에러: "+ de.getMessage());
			String[] argArr = {String.valueOf(((BadSqlGrammarException) de).getSQLException().getErrorCode())
					, String.valueOf(((BadSqlGrammarException) de).getSQLException().getMessage())};
			errorMsg = languageUtil.getMessage(inVar, "000088", argArr);	// SQL 오류가 발생했습니다! 오류 코드: {0}, 오류 메시지: {1}
		} else if (de instanceof DuplicateKeyException) {
			log.debug("키값 중복에러: "+ de.getMessage());
			errorMsg = languageUtil.getMessage(inVar, "000235");	// 중복된 데이터가 존재하여 저장할 수 없습니다.
		} else if (de instanceof NexaServiceException) {
			log.debug("커스텀 에러 : "+ de.getMessage());
			errorMsg = de.getMessage();
		} else {
			errorMsg = languageUtil.getMessage(inVar, "000213");	// 처리중 에러가 발생하였습니다.
			e.printStackTrace();
			log.error(e.getMessage());
		}
		
		return errorMsg;
	}
}