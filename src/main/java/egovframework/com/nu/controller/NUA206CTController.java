package egovframework.com.nu.controller;

import java.lang.reflect.Method;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.DeadlockLoserDataAccessException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.jdbc.BadSqlGrammarException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.Variable;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;

import egovframework.com.common.exception.NexaServiceException;
import egovframework.com.common.util.LanguageUtil;
import egovframework.com.nu.service.NUA206CTService;

@Controller
public class NUA206CTController {

	private Logger log = LoggerFactory.getLogger(NUA206CTController.class);

	@Resource(name="NUA206CTService")
	private NUA206CTService NUA206CTService;

	@Resource(name="LanguageUtil")
	private LanguageUtil languageUtil;
	
	@RequestMapping(value = "/NUA206CT_save.do")
    public NexacroResult save(HttpServletRequest request) {
    	NexacroResult result = new NexacroResult();
    	VariableList inVar 	 = new VariableList();
    	
    	try {
    		HttpPlatformRequest hpRequest = new HttpPlatformRequest(request);
	    	hpRequest.receiveData();

	        PlatformData inputData = hpRequest.getData();
        	inVar 	= inputData.getVariableList();

			DataSetList dataset = inputData.getDataSetList();
			DataSetList inDataSet = new DataSetList();

			for (int i = 0; i < dataset.size(); i++) {
				DataSet ds = dataset.get(i);
				inDataSet.add(ds);
			}
			
			result = NUA206CTService.save(inVar, inDataSet);
			
		} catch (Exception e) {
			result.setErrorCode(-1);
			result.setErrorMsg(getErrorMsg(inVar, e));
		}

    	return result;
    }
	
	//Exception ??????
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