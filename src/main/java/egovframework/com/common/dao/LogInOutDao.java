package egovframework.com.common.dao;

import java.util.List;
import java.util.Map;


/**
 *
 * WARNING: Auto create
 * Template File Version : 1.0
 * Create : Tue Jul 07 11:48:58 KST 2009
 *
 **/
@SuppressWarnings("unchecked")
public interface LogInOutDao {
	
	/** login **/
	
	public List<Map<String, Object>> idCheck(String USER_ID);
	
	public List<Map<String, Object>> idCheck2(Map<String, Object> map);
	
	public List<Map<String, Object>> nshLoginCheck(Map<String, Object> map);
	
	public List<Map<String, Object>> idLicenseCheck(Map<String, Object> map);
	
	public List<Map<String, Object>> mobileIdCheck(Map<String, Object> map);
	
	public List<Map<String, Object>> mobileIdLicenseCheck(Map<String, Object> map);
	
	/** loginMenu **/
	
	public List<Map<String, Object>> mobileLoginMenu(Map<String, Object> map);
		
	public List<Map<String, Object>> loginConfig(Map<String, Object> map);
	
	public List<Map<String, Object>> fvrMenu(Map<String, Object> map);
	
	public List<Map<String, Object>> loginMenu(Map<String, Object> map);
	
	public List<Map<String, Object>> deptList();
	
	public List<Map<String, Object>> bizList();
	
	public List<Map<String, Object>> userInfo(Map<String, Object> map);
	
	public List<Map<String, Object>> nshUserInfo(Map<String, Object> map);

	public List<Map<String, Object>> companyList();
	
	public List<Map<String, Object>> plantList();
	
	public List<Map<String, Object>> messageList(Map<String, Object> map);
	
	public List<Map<String, Object>> whouseList();
	
	public List<Map<String, Object>> locationList();
	
	public List<Map<String, Object>> getPPLocationList();
	
	public List<Map<String, Object>> getCurrencyinfoList(String param);
	
	public List<Map<String, Object>> getUrlInfoList();
	
	public int insertLoginData(Map<String, Object> param);
	
	public List<Map<String, Object>> mobileUserInfo(Map<String, Object> map);
	
}