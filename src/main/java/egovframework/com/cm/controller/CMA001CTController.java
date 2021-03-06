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
import egovframework.com.cm.service.CMA001CTService;

@Controller
public class CMA001CTController {

	private Logger log = LoggerFactory.getLogger(CMA001CTController.class);

	@Resource(name="CMA001CTService")
	private CMA001CTService CMA001CTService;
	
	@Resource(name="LanguageUtil")
	private LanguageUtil languageUtil;
	
	@RequestMapping(value = "/CMA001CT_save.do")
    public NexacroResult save(HttpServletRequest request) {
    	NexacroResult result = new NexacroResult();
    	VariableList inVar 	 = new VariableList();
    	
    	try {
    		HttpPlatformRequest hpRequest = new HttpPlatformRequest(request);
	    	hpRequest.receiveData();

	        PlatformData inputData = hpRequest.getData();
        	inVar 	= inputData.getVariableList();
			DataSetList inDataSet = inputData.getDataSetList();

			result = CMA001CTService.save(inVar, inDataSet);
			
		} catch (Exception e) {
			result.setErrorCode(-1);
			result.setErrorMsg(getErrorMsg(inVar, e));
		}

    	return result;
    }
	
	@RequestMapping(value = "/CMA001CT_readUserInfoUpdate.do")
    public NexacroResult readUserInfoUpdate(HttpServletRequest request) {
    	NexacroResult result = new NexacroResult();
    	VariableList inVar 	 = new VariableList();
    	
    	try {
    		HttpPlatformRequest hpRequest = new HttpPlatformRequest(request);
	    	hpRequest.receiveData();

	        PlatformData inputData = hpRequest.getData();
        	inVar 	= inputData.getVariableList();

			result = CMA001CTService.readUserInfoUpdate(inVar);
			
		} catch (Exception e) {
			result.setErrorCode(-1);
			result.setErrorMsg(getErrorMsg(inVar, e));
		}

    	return result;
    }

	/**
	 * ????????? setting??????
	 * @param inVar
	 * @param e
	 * @return
	 */
	private String getErrorMsg(VariableList inVar, Exception e)
	{
		String errorMsg ;
		Throwable de = e.getCause();
		if (de instanceof BadSqlGrammarException) {
			log.debug("SQL ???????????????: "+ de.getMessage());
			String[] argArr = {String.valueOf(((BadSqlGrammarException) de).getSQLException().getErrorCode())
					, String.valueOf(((BadSqlGrammarException) de).getSQLException().getMessage())};
			errorMsg = languageUtil.getMessage(inVar, "000088", argArr);	// SQL ????????? ??????????????????! ?????? ??????: {0}, ?????? ?????????: {1}
		} else if (de instanceof DuplicateKeyException) {
			log.debug("?????? ????????????: "+ de.getMessage());
			errorMsg = languageUtil.getMessage(inVar, "000235");	// ????????? ???????????? ???????????? ????????? ??? ????????????.
		} else if (de instanceof NexaServiceException) {
			log.debug("????????? ?????? : "+ de.getMessage());
			errorMsg = de.getMessage();
		} else {
			errorMsg = languageUtil.getMessage(inVar, "000213");	// ????????? ????????? ?????????????????????.
			e.printStackTrace();
			log.error(e.getMessage());
		}
		
		return errorMsg;
	}
}