package egovframework.com.common.util;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

/**
 * Setting basic column Class 
 * REG_*, MOD_*
 * @author Kim JeongLok
 * @since 2017.10.05
 * @version 1.0
 * @see 
 */
@Service("UpdateMetadataUtil")
public class UpdateMetadataUtil {
	
	@Resource(name="TimeZoneUtil")
	TimeZoneUtil timeZoneUtil;

	@Resource(name="SessionUtil")
	private SessionUtil sessionUtil;

	Logger log = Logger.getLogger(this.getClass().getName());
	
	public Map getUpdateMetaData(Map map, Map inVar){
		String ip="";
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		HttpSession session = request.getSession();
		try {ip = InetAddress.getLocalHost().getHostAddress();} 
		catch (UnknownHostException e) {log.debug("IP불러오기 오류 : "+e);}
		String userLang = (String) session.getAttribute("DEF_LANG");
		if(userLang == null){userLang = "ko_KR";}
		String userId = (String) session.getAttribute("USER_ID");
		if(userId == null){userId = "UNDEFINED_USER";}
		log.debug("유저 언어 "+userLang);
		//   lang  	    --> 지역,도시 이름
		//   format     --> 일자표시형태 YYMMDD 로 조합 (YYMMDD,DDYYMM,MMYYDD등)
		//   type       --> 숫자or문자, NUMBER -> 숫자 , MONTH -> 월만 영어, DAY -> 일만 영어, BOTH -> 둘다 영어
		//   separator  --> 17 03 13 일경우 년 월 일 사이의 구분자 ,
		//   withHour 	--> 날짜뒤에 시분초 표시, HH 시 HHMM 시분 HHMMSS 시분초, (default : HHMM)
		//   SummerTime --> GMT 시간을 Summer Time 적용이냐 미적용이냐, (적용: YES)
		//timeZoneUtil.getTimes(lang, format, type, separator, withHour, SummerTime)
		
		ArrayList times = timeZoneUtil.getTimes(userLang, "YYMMDD", "NUMBER", "-", "HHMMSS","YES");
		map.put("REG_DT_LOC",times.get(1));
		map.put("REG_DT_CURR",times.get(0));
		map.put("REG_IP", ip);
		map.put("REG_USER", userId);
		map.put("REG_DT", new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis())));
		map.put("REG_PGM_ID", inVar.get("REG_PGM_ID"));
		return map;
	}
	
	public ArrayList getUpdateMetaData(Map map){
		
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		HttpSession session = request.getSession();
		
		ArrayList<Object> metaDataList = new ArrayList();
		
//		try {ip = InetAddress.getLocalHost().getHostAddress();} 
//		catch (UnknownHostException e) {log.debug("IP불러오기 오류 : "+e);}

    	String ip = sessionUtil.getClientIp(request);

		String userLang = (String) session.getAttribute("DEF_LANG");
		
		log.debug("유저 언어 "+userLang);
		if(userLang == null || userLang.isEmpty()){ 
			userLang = "ko_KR";
		}
		//   lang  	    --> 지역,도시 이름
		//   format     --> 일자표시형태 YYMMDD 로 조합 (YYMMDD,DDYYMM,MMYYDD등)
		//   type       --> 숫자or문자, NUMBER -> 숫자 , MONTH -> 월만 영어, DAY -> 일만 영어, BOTH -> 둘다 영어
		//   separator  --> 17 03 13 일경우 년 월 일 사이의 구분자 ,
		//   withHour 	--> 날짜뒤에 시분초 표시, HH 시 HHMM 시분 HHMMSS 시분초, (default : HHMM)
		//   SummerTime --> GMT 시간을 Summer Time 적용이냐 미적용이냐, (적용: YES)
		//timeZoneUtil.getTimes(lang, format, type, separator, withHour, SummerTime)
		
		ArrayList times = timeZoneUtil.getTimes(userLang, "YYMMDD", "NUMBER", "-", "HHMMSS","YES");
		metaDataList.add(times.get(1)); //REG_DT_LOC
		metaDataList.add(times.get(0)); //REG_DT_CURR
		metaDataList.add(ip);			//REG_IP
		metaDataList.add(session.getAttribute("USER_ID")); // REG_USER
		metaDataList.add(map.get("REG_PGM_ID"));
		metaDataList.add(new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis())));

		return metaDataList;
	}

	/**
	 * Audit항목 자동 setting함수.
	 * @param dataMap
	 * @param pgmId
	 */
	public void setAuditData(Map<String, Object> dataMap, String pgmId){

		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		HttpSession session = request.getSession();

    	String ip = sessionUtil.getClientIp(request);
		String userLang = (String) session.getAttribute("DEF_LANG");

		if(userLang == null || userLang.isEmpty()){ 
			userLang = "ko_KR";
		}

		ArrayList times = timeZoneUtil.getTimes(userLang, "YYMMDD", "NUMBER", "-", "HHMMSS","YES");

		dataMap.put("REG_DT_LOC" , times.get(1));
		dataMap.put("REG_DT_CURR", times.get(0));
		dataMap.put("REG_IP"     , ip);
		dataMap.put("REG_USER"   , session.getAttribute("USER_ID"));
		dataMap.put("REG_PGM_ID" , pgmId);
		dataMap.put("REG_DT"     , new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis())));
		dataMap.put("MOD_DT_LOC" , times.get(1));
		dataMap.put("MOD_DT_CURR", times.get(0));
		dataMap.put("MOD_IP"     , ip);
		dataMap.put("MOD_USER"   , session.getAttribute("USER_ID"));
		dataMap.put("MOD_PGM_ID" , pgmId);
		dataMap.put("MOD_DT"     , new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis())));
	}

	/**
	 * Audit항목 자동 setting함수.
	 * @param dataMap
	 * @param pgmId
	 */
	public void setAuditData_batch(Map<String, Object> dataMap, String pgmId){

		String userLang = "ko_KR";

		ArrayList times = timeZoneUtil.getTimes(userLang, "YYMMDD", "NUMBER", "-", "HHMMSS","YES");

		dataMap.put("REG_DT_LOC" , times.get(1));
		dataMap.put("REG_DT_CURR", times.get(0));
		dataMap.put("REG_IP"     , "BATCH");
		dataMap.put("REG_USER"   , "BATCH");
		dataMap.put("REG_PGM_ID" , pgmId);
		dataMap.put("REG_DT"     , new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis())));
		dataMap.put("MOD_DT_LOC" , times.get(1));
		dataMap.put("MOD_DT_CURR", times.get(0));
		dataMap.put("MOD_IP"     , "BATCH");
		dataMap.put("MOD_USER"   , "BATCH");
		dataMap.put("MOD_PGM_ID" , pgmId);
		dataMap.put("MOD_DT"     , new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis())));
	}
}
