/**************************************************************************************
 * nexacro Login check
 * Copyright(c) 2009 nexacro ALLRIGHTS RESERVED.
 * 
 * 1.Program Name       : 
 * 2.File Name	        : LogInOutServiceImpl.java
 * 3.Developer          : JL
 * 4.Development Date	: 2014.09.06 
 * 5.Version     		: 0.1
 * 6.Explanation		: Location LocationServiceImpl
 * 7.History		 
 * 	1) 2014.09.06
 *************************************************************************************/
package egovframework.com.common.service.impl;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.VariableList;

import egovframework.com.common.constant.CommonConstant;
import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.dao.LogInOutDao;
import egovframework.com.common.exception.NexaServiceException;
import egovframework.com.common.service.LogInOutService;
import egovframework.com.common.util.DataSetUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("logInOutService")
@SuppressWarnings("unchecked")
public class LogInOutServiceImpl extends EgovAbstractServiceImpl implements LogInOutService {

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	@Resource(name = "logInOutDao")
	LogInOutDao logInOutDao;
	
	@Resource(name = "commonDao")
	private CommonDao commonDao;

	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;

	public void login() throws NexaServiceException {}

	public int loginCheck(VariableList inVar, Map<String, List<Map<String, Object>>> outMap) throws Exception {
		List<Map<String, Object>> records;
		String userId = inVar.getString("V_USER_ID");
		String passwd = inVar.getString("V_USER_PWD");
		String langCd = inVar.getString("V_LANG_CD");
		String comCd = inVar.getString("V_COMPANY_CD");
		String serviceTp = inVar.getString("V_SERVICE_TP");
		String appTp = inVar.getString("V_APPLICATION_TP");
		
		Map<String, Object> loginP = new HashMap<String, Object>();
		loginP.put("SERVICE_TP", serviceTp);
		loginP.put("COMPANY_CD", comCd);
		loginP.put("USER_ID", userId);
		loginP.put("LANG_CD", langCd);
		
		// SERVICE_TP, COMPANY_CD, USER_ID로 아이디와 비밀번호 조회
		records = logInOutDao.idCheck2(loginP);

		//아이디 맞을시
		if (records != null && records.size() > 0) {
			String db_pass = (String) records.get(0).get("USER_PASSWD");
			//boolean pass = BCrypt.checkpw(passwd, db_pass);

			//비밀번호도 맞을시
			if (db_pass.equals(passwd)) {
				List<Map<String, Object>> loginL;
				String useYn = records.get(0).get("USE_YN").toString();
				loginL = logInOutDao.idLicenseCheck(loginP);
				if(loginL.size() < 1) {
					return CommonConstant.LOGIN_RESULT_LICENSE_ERROR;
				} else if(!useYn.equals("Y")) {
					return CommonConstant.LOGIN_RESULT_USE_ERROR;
				} else {
					List<Map<String, Object>> userInfo = logInOutDao.userInfo(loginP);
					List<Map<String, Object>> companyList = logInOutDao.companyList();
					List<Map<String, Object>> messageList = logInOutDao.messageList(loginP);
					
					Map<String, Object> loginParam = new HashMap<String, Object>();
					loginParam.put("COMPANY_CD", userInfo.get(0).get("COMPANY_CD"));
					loginParam.put("USER_ID", userId);
					loginParam.put("LANG_CD", langCd);
					loginParam.put("SERVICE_TP", serviceTp);
					loginParam.put("APPLICATION_TP", appTp);
					List<Map<String, Object>> listMenu = logInOutDao.loginMenu(loginParam);
					List<Map<String, Object>> fvrMenu = logInOutDao.fvrMenu(loginParam);
					
					Map<String, Object> loginInfo = new HashMap<String, Object>();
					loginInfo.put("COMPANY_CD", userInfo.get(0).get("COMPANY_CD"));
					loginInfo.put("USER_ID", userInfo.get(0).get("USER_ID"));
					loginInfo.put("USER_NO", userInfo.get(0).get("USER_NO"));
					loginInfo.put("DEPT_CD", userInfo.get(0).get("DEPT_CD"));
					loginInfo.put("DEPT_NM", userInfo.get(0).get("DEPT_NM"));

					try {
						loginInfo.put("LOGIN_IP", InetAddress.getLocalHost().getHostAddress());
					} catch (UnknownHostException e) {
						log.error("IP불러오기 오류(LoginOutService) : " + e);
					}
					logInOutDao.insertLoginData(loginInfo);

					outMap.put("gds_userInfo", userInfo);
					outMap.put("gds_menu", listMenu);
					outMap.put("gds_bookmark", fvrMenu);
					outMap.put("gds_company", companyList);
					outMap.put("gds_message", messageList);
				}
			} else {
				return CommonConstant.LOGIN_RESULT_PASS_ERROR;
			}
			//아이디 틀릴시
		} else {
			return CommonConstant.LOGIN_RESULT_ID_ERROR;
		}
		return CommonConstant.SUCCESS;
	}
	
	public int mobileLoginCheck(VariableList inVar, Map<String, List<Map<String, Object>>> outMap) {
		List<Map<String, Object>> records;
		String companyCd = inVar.getString("V_COMPANY_CD");
		String userName = inVar.getString("V_USER_NAME");
		String passwd = inVar.getString("V_USER_PWD");
		String langCd = inVar.getString("V_LANG_CD");
		String serviceTp = inVar.getString("V_SERVICE_TP");
		String appTp = inVar.getString("V_APPLICATION_TP");
		
		Map<String, Object> loginP = new HashMap<String, Object>();
		loginP.put("COMPANY_CD", companyCd);
		loginP.put("NAME", userName);
		loginP.put("SERVICE_TP", serviceTp);
		loginP.put("LANG_CD", langCd);
		
		records = logInOutDao.mobileIdCheck(loginP);
		
		if(records != null && records.size() > 0) {
			if(records.size() != 1) {
				return CommonConstant.LOGIN_RESULT_RECORDS_ERROR;
			}
			
			String db_pass = (String) records.get(0).get("APP_PW");
			String userId = (String) records.get(0).get("RES_ID");
			loginP.put("USER_ID", userId);
			boolean pass = BCrypt.checkpw(passwd, db_pass);
			
			if(pass) {
				System.out.println("pass in");
				List<Map<String, Object>> loginL;
				loginL = logInOutDao.mobileIdLicenseCheck(loginP);
				if(loginL.size() > 0) {
					return CommonConstant.LOGIN_RESULT_LICENSE_ERROR;
				} else {
					// userInfo
					List<Map<String, Object>> mUserInfo = logInOutDao.mobileUserInfo(loginP);
					// message
					List<Map<String, Object>> messageList = logInOutDao.messageList(loginP);
					
					Map<String, Object> loginParam = new HashMap<String, Object>();
					loginParam.put("COMPANY_CD", mUserInfo.get(0).get("COMPANY_CD"));
					loginParam.put("USER_ID", userId);
					loginParam.put("LANG_CD", langCd);
					loginParam.put("SERVICE_TP", serviceTp);
					loginParam.put("APPLICATION_TP", appTp);
					
					List<Map<String, Object>> listMenu = logInOutDao.mobileLoginMenu(loginParam);
					
					outMap.put("gds_mUserInfo", mUserInfo);
					outMap.put("gds_message", messageList);
					outMap.put("gds_menu", listMenu);
				}
			} else {
				return CommonConstant.LOGIN_RESULT_PASS_ERROR;
			}
		} else {
			return CommonConstant.LOGIN_RESULT_ID_ERROR;
		}
		
		return CommonConstant.SUCCESS;
	}

	@Override
	public int nshLogin(VariableList inVar, Map<String, List<Map<String, Object>>> outMap) throws Exception {
		List<Map<String, Object>> records;
		String userId = inVar.getString("V_USER_ID");
		String passwd = inVar.getString("V_USER_PWD");
		String comCd = inVar.getString("V_COMPANY_CD");
		String appTp = inVar.getString("V_APPLICATION_TP");
		
		Map<String, Object> loginP = new HashMap<String, Object>();
		loginP.put("COMPANY_CD", comCd);
		loginP.put("USER_ID", userId);
		
		// COMPANY_CD, USER_ID로 아이디와 비밀번호 조회
		records = logInOutDao.nshLoginCheck(loginP);
		
		//아이디 맞을시
		if (records != null && records.size() > 0) {
			String db_pass = (String) records.get(0).get("c_systempa");

			//비밀번호도 맞을시
			if (db_pass.equals(passwd)) {
				List<Map<String, Object>> userInfo = logInOutDao.nshUserInfo(loginP);
				//List<Map<String, Object>> companyList = logInOutDao.companyList();
				//List<Map<String, Object>> messageList = logInOutDao.messageList(loginP);
				
//				Map<String, Object> loginParam = new HashMap<String, Object>();
//				loginParam.put("COMPANY_CD", userInfo.get(0).get("COMPANY_CD"));
//				loginParam.put("USER_ID", userId);
//				loginParam.put("APPLICATION_TP", appTp);
				//List<Map<String, Object>> listMenu = logInOutDao.loginMenu(loginParam);
				//List<Map<String, Object>> fvrMenu = logInOutDao.fvrMenu(loginParam);
				
				Map<String, Object> loginInfo = new HashMap<String, Object>();
//				loginInfo.put("COMPANY_CD", userInfo.get(0).get("COMPANY_CD"));
//				loginInfo.put("USER_ID", userInfo.get(0).get("USER_ID"));
//				loginInfo.put("USER_NO", userInfo.get(0).get("USER_NO"));
//				loginInfo.put("DEPT_CD", userInfo.get(0).get("DEPT_CD"));
//				loginInfo.put("DEPT_NM", userInfo.get(0).get("DEPT_NM"));

				try {
					loginInfo.put("LOGIN_IP", InetAddress.getLocalHost().getHostAddress());
				} catch (UnknownHostException e) {
					log.error("IP불러오기 오류(LoginOutService) : " + e);
				}
				//logInOutDao.insertLoginData(loginInfo);

				outMap.put("gds_userInfo", userInfo);
				//outMap.put("gds_menu", listMenu);
				//outMap.put("gds_bookmark", fvrMenu);
				//outMap.put("gds_company", companyList);
				//outMap.put("gds_message", messageList);
				
			} else {
				return CommonConstant.LOGIN_RESULT_PASS_ERROR;
			}
			//아이디 틀릴시
		} else {
			return CommonConstant.LOGIN_RESULT_ID_ERROR;
		}
		return CommonConstant.SUCCESS;
	}
	
	
}
