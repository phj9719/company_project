package egovframework.com.common.controller;

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
import org.springframework.dao.DataIntegrityViolationException;
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
import egovframework.com.common.service.CommonService;
import egovframework.com.common.util.LanguageUtil;

/**
 * 조회/등록/수정/삭제를 처리하는 공통 Controller
 */
@Controller
public class CommonController {

	private Logger log = LoggerFactory.getLogger(CommonController.class);

	@Resource(name="commonService")
	private CommonService commonService;
	
	@Resource(name="LanguageUtil")
	private LanguageUtil languageUtil;

	/**
	 * 조회/등록/수정/삭제를 처리하는 공통 Controller
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/commonController.do")
//    public NexacroResult operate(NexacroMapDTO xpDto) {
//    public NexacroResult selectSampleList(@ParamDataSet(name = "input1", required = false) Map<String, Object> ds_search
//    		                            , @ParamVariable(name = "sql_id", required = false) Map<String, Object> ds_search) {
    public NexacroResult operate(HttpServletRequest request) {

    	NexacroResult result = new NexacroResult();
    	VariableList inVar 	 = new VariableList();
    	VariableList outVar  = new VariableList();
    	
    	try {
    		HttpPlatformRequest hpRequest = new HttpPlatformRequest(request);
	    	hpRequest.receiveData();

	        PlatformData inputData = hpRequest.getData();
        	inVar 	= inputData.getVariableList();

			DataSetList dataset = inputData.getDataSetList();
			DataSetList inDataSet = new DataSetList();
			DataSetList outDataSet = new DataSetList();
			Map<String, List<Map<String, Object>>> outMap = new HashMap<String, List<Map<String, Object>>>(); 

			for (int i = 0; i < dataset.size(); i++) {
				DataSet ds = dataset.get(i);

				if (ds.getName().startsWith("input")) {
					inDataSet.add(ds);
				} else if (ds.getName().startsWith("output")) {
					outDataSet.add(ds);
				}
			}

			Method method = getMethod(commonService, inVar.getString("method"));
			method.invoke(commonService, new Object[] {inVar, inDataSet, outVar, outMap});

			Set<String> s = outMap.keySet();
			Iterator<String> ite = s.iterator();
			while (ite.hasNext()) {
				String key = ite.next();
	        	result.addDataSet(key, outMap.get(key));
			}

	    	for (int k = 0; k < outVar.size(); k++) {
	    		Variable v = outVar.get(k);
	    		result.addVariable(v);
	    	}

	    	result.setErrorCode(0);
		} catch (Exception e) {
			result.setErrorCode(-1);
			result.setErrorMsg(getErrorMsg(inVar, e));
		}

    	return result;
    }

	/**
	 * methodName에 해당하는 method찾기.
	 * @param bean
	 * @param methodName
	 * @return
	 * @throws Exception
	 */
	private Method getMethod(Object bean, String methodName) throws Exception {
		Method[] methods = bean.getClass().getMethods();
		for (int i = 0; i < methods.length; i++) {
			if (methods[i].getName().equals(methodName)) {
				return methods[i];
			}
		}
		throw new Exception("Cann't find " + methodName + ".");
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
		} else if (de instanceof NexaServiceException) {
			log.error("커스텀 에러 : {}", de.getMessage());
			errorMsg = de.getMessage();
		} else if (de instanceof DataIntegrityViolationException) {
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