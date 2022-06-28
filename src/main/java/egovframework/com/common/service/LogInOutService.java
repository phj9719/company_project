/**************************************************************************************
 * nexacro Login check
 * Copyright(c) 2009 nexacro ALLRIGHTS RESERVED.
 * 
 * 1.Program Name       : 
 * 2.File Name	        : LogInOutService.java
 * 3.Developer          : sian
 * 4.Development Date	: 2014.09.06 
 * 5.Version     		: 0.1
 * 6.Explanation		: Location Service
 * 7.History		 
 * 	1) 2014.09.06
*************************************************************************************/
package egovframework.com.common.service;

import java.util.List;
import java.util.Map;

import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;



@SuppressWarnings("unchecked")
public interface LogInOutService {
	
	public void login() throws Exception;
	public int loginCheck(VariableList inVar, Map<String, List<Map<String, Object>>> outMap) throws Exception;
	public int mobileLoginCheck(VariableList inVar, Map<String, List<Map<String, Object>>> outMap) throws Exception;
	public int nshLogin(VariableList inVar, Map<String, List<Map<String, Object>>> outMap) throws Exception;
}
