package egovframework.com.nu.controller;

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

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
import com.nexacro17.xapi.data.Variable;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;

import egovframework.com.common.exception.NexaServiceException;
import egovframework.com.common.util.LanguageUtil;
import egovframework.com.nu.service.NUC_PASSWORD_POPService;

@Controller
public class NUC_PASSWORD_POPController {
	
	private Logger log = LoggerFactory.getLogger(NUC_PASSWORD_POPController.class);
	
	@Resource(name = "NUC_PASSWORD_POPService")
	private NUC_PASSWORD_POPService NUC_PASSWORD_POPService;
	
	@Resource(name = "LanguageUtil")
	private LanguageUtil languageUtil;
	
	@RequestMapping(value = "/NUC_PASSWORD_POPController.do")
	public NexacroResult operate(HttpServletRequest request) {
		
		NexacroResult result = new NexacroResult();
		VariableList inVar = new VariableList();
		VariableList outVar = new VariableList();
		
		try {
			HttpPlatformRequest hpRequest = new HttpPlatformRequest(request);
			hpRequest.receiveData();
			
			PlatformData inputData = hpRequest.getData();
			inVar = inputData.getVariableList();
			
			DataSetList dataset = inputData.getDataSetList();
			DataSetList inDataSet = new DataSetList();
			DataSetList outDataSet = new DataSetList();
			Map<String, List<Map<String, Object>>> outMap = new HashMap<String, List<Map<String,Object>>>();
			
			for (int i = 0; i < dataset.size(); i++) {
				DataSet ds = dataset.get(i);
				
				if(ds.getName().startsWith("input")) {
					inDataSet.add(ds);
				} else if(ds.getName().startsWith("output")) {
					outDataSet.add(ds);
				}
			}
			
			Method method = getMethod(NUC_PASSWORD_POPService, inVar.getString("method"));
			method.invoke(NUC_PASSWORD_POPService, new Object[] {inVar, inDataSet, outVar, outMap});
			
			Set<String> s = outMap.keySet();
			Iterator<String> ite = s.iterator();
			while(ite.hasNext()) {
				String key = ite.next();
	        	result.addDataSet(key, outMap.get(key));
			}
			
			for (int k = 0; k < outVar.size(); k++) {
	    		Variable v = outVar.get(k);
	    		result.addVariable(v);
	    	}

	    	result.setErrorCode(0);
	    	
		} catch (Exception e) {
			result.setErrorMsg(getErrorMsg(inVar, e));
			result.setErrorCode(-1);
		}
		
		return result;
	}
	
	private Method getMethod(Object bean, String methodName) throws Exception {
		Method[] methods = bean.getClass().getMethods();
		for (int i = 0; i < methods.length; i++) {
			if (methods[i].getName().equals(methodName)) {
				return methods[i];
			}
		}
		throw new Exception("Cann't find " + methodName + ".");
	}
	
	//Exception 처리
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
