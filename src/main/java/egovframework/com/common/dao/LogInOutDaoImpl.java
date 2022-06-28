package egovframework.com.common.dao;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;

@Repository("logInOutDao")
//public class SqlMapLogInOutDAO extends SqlMapClientDaoSupport  implements LogInOutDAO{
public class LogInOutDaoImpl extends EgovAbstractMapper implements LogInOutDao {

	//CM_USER_CHECK 
	//Check the ID is Correct 
	public List<Map<String, Object>> idCheck(String USER_ID) {
		return selectList("CM_USER_CHECK.idCheck", USER_ID);
	}
	
	public List<Map<String, Object>> idCheck2(Map<String, Object> model) {
		return selectList("CM_USER_CHECK.idCheck2", model);
	}
	
	@Override
	public List<Map<String, Object>> nshLoginCheck(Map<String, Object> map) {
		return selectList("NSH_LOGIN.loginCheck", map);
	}
	
	public List<Map<String, Object>> idLicenseCheck(Map<String, Object> model) {
		return selectList("CM_USER_CHECK.idLicenseCheck", model);
	}
	
	public List<Map<String, Object>> mobileIdCheck(Map<String, Object> model) {
		return selectList("CM_USER_CHECK.mobileIdCheck", model);
	}
	
	public List<Map<String, Object>> mobileIdLicenseCheck(Map<String, Object> model) {
		return selectList("CM_USER_CHECK.mobileIdLicenseCheck", model);
	}

	public List<Map<String, Object>> loginConfig(Map<String, Object> model) {
		return selectList("loginConfig", model);
	}
	
	// Mobile user Menu
	public List<Map<String, Object>> mobileLoginMenu(Map<String, Object> model) {
		return selectList("mobileLoginMenu", model);
	}

	//CM_FVR_MENU
	//Get Favor Menu
	public List<Map<String, Object>> fvrMenu(Map<String, Object> model)  {
		return selectList("CM_FVR_MENU",model);
	}

	//CM_USER_CHECK
	//Get List of menu that refer to Login User's Auth
	public List<Map<String, Object>> loginMenu(Map<String, Object> model)  {
		return selectList("loginMenu_auth", model);
	}

	//CM_USER_CHECK
	//Get List of Department 
	public List<Map<String, Object>> deptList()  {
		return selectList("getDEPTLIST");
	}

	//CM_USER_CHECK
	//Get List of Business
	public List<Map<String, Object>> bizList()  {		
		return selectList("getBIZLIST");
	}
	
	//CM_USER_CHECK
	//Get information of Login User
	public List<Map<String, Object>> userInfo(Map<String, Object> model)  {		
		return selectList("getuserInfo", model);
	}
	
	@Override
	public List<Map<String, Object>> nshUserInfo(Map<String, Object> map) {
		return selectList("NSH_LOGIN.getuserInfo", map);
	}

	//CM_USER_CHECK
	//Get information of Login User
	public List<Map<String, Object>> companyList()  {		
		return selectList("getCompany");
	}
	
	//CM_USER_CHECK
	//Get Message
	public List<Map<String, Object>> messageList(Map<String, Object> model)  {
		return selectList("getMessage", model);
	}

	@Override
	public List<Map<String, Object>> plantList()  {
		return selectList("getPlant");
	}

	@Override
	public List<Map<String, Object>> whouseList()  {
		return selectList("getWhouse");
	}

	@Override
	public List<Map<String, Object>> locationList()  {
		return selectList("getLocation");
	}
	
	@Override
	public List<Map<String, Object>> getPPLocationList()  {
		return selectList("getPPLocation");
	}

	@Override
	public List<Map<String, Object>> getCurrencyinfoList(String COMPANY_CD)  {
		return selectList("getCurrencyinfo",COMPANY_CD);
	}

	@Override
	public List<Map<String, Object>> getUrlInfoList()  {
		return selectList("CM_USER_CHECK.getServerUrl", null);
	}

	@Override
	public int insertLoginData(Map<String, Object> param)  {
		return insert("setLoginTime", param);
	}
	
	public List<Map<String, Object>> mobileUserInfo(Map<String, Object> model) {
		return selectList("mobileUserInfo", model);
	}
	
}