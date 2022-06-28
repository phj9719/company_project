package egovframework.com.common.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import egovframework.com.common.dao.CommonDao;

@Component("TorpedoMiddleBatch")
public class TorpedoMiddleBatchUtil {
	
	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	private Logger log = LoggerFactory.getLogger(this.getClass().getSimpleName());
	
	@Autowired
	private PlatformTransactionManager transactionManager;
	
	// Torpedo API 공기질 데이터
	public int airQualityHandle(String fromDt, String toDt) {
		
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			JsonObject param = new JsonObject();
			JsonObject dataParam = new JsonObject();
			
//			String fromYear = fromDt.substring(0, 4);
//			String fromMonth = fromDt.substring(4, 6);
//			String fromDay = fromDt.substring(6);
//			
//			String fromDtFull = fromYear + "-" + fromMonth + "-" + fromDay + " 00:00:00";
//			
//			String toYear = toDt.substring(0, 4);
//			String toMonth = toDt.substring(4, 6);
//			String toDay = toDt.substring(6);
//			
//			String toDtFull = toYear + "-" + toMonth + "-" + toDay + " 23:59:59";
			
			JsonArray fieldsArr = new JsonArray();
			fieldsArr.add("tvoc");
			fieldsArr.add("co_2");
			fieldsArr.add("score");
			fieldsArr.add("rssi");
			fieldsArr.add("humi");
			fieldsArr.add("name");
			fieldsArr.add("pm_10_0");
			fieldsArr.add("pm_1_0");
			fieldsArr.add("pm_2_5");
			fieldsArr.add("temp_c");
			fieldsArr.add("temp_f");
			fieldsArr.add("service_identifier");
			fieldsArr.add("device_identifier");
			
			dataParam.addProperty("from", fromDt);
			dataParam.addProperty("to", toDt);
			dataParam.addProperty("asc", true);
			dataParam.add("fields", fieldsArr);
			
			param.addProperty("modelCode", "BuildThing_IAQ_01");
			param.add("data", dataParam);
			
			String jsonStr = HttpUtil.callTorpedoApiPost(param);
			
			Map<String, Object> iMap = new HashMap<String, Object>();
			iMap.put("JSON", jsonStr);
			iMap.put("RESULT", "");
			
			commonDao.getMap("TORPEDO_API.TORPEDO_API_AIR", iMap);
			
			if(iMap.get("RESULT").equals("0")) {
				log.info("PROCEDURE_ERROR");
				log.info("airQualityBatch fail");
				transactionManager.rollback(transactionStatus);
				return 0;
			}else if (iMap.get("RESULT").equals("2")) {
				log.info("데이터 없음");
				transactionManager.rollback(transactionStatus);
				return 2;
			}
			
			transactionManager.commit(transactionStatus);
			
			return 1;
			
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
			
			return 0;
		}
		
	}
	
	// Torpedo API 밴드 데이터
	public int smartBandHandle(String fromDt, String toDt) {
		
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			
			JsonObject param = new JsonObject();
			JsonObject dataParam = new JsonObject();
			
			JsonArray fieldsArr = new JsonArray();
			fieldsArr.add("last_heart_rate");
			fieldsArr.add("rssi");
			fieldsArr.add("dist");
			fieldsArr.add("activity_dur");
			fieldsArr.add("calories");
			fieldsArr.add("mac");
			fieldsArr.add("sleep");
			fieldsArr.add("user_id");
			fieldsArr.add("name");
			fieldsArr.add("step");
			fieldsArr.add("input_ts");
			fieldsArr.add("service_identifier");
			fieldsArr.add("device_identifier");
			
			dataParam.addProperty("from", fromDt);
			dataParam.addProperty("to", toDt);
			dataParam.addProperty("asc", true);
			dataParam.add("fields", fieldsArr);
			
			param.addProperty("modelCode", "fitpolo_h705");
			param.add("data", dataParam);
			
			String jsonStr = HttpUtil.callTorpedoApiPost(param);
			
			Map<String, Object> iMap = new HashMap<String, Object>();
			iMap.put("JSON", jsonStr);
			iMap.put("RESULT", "");
			
			commonDao.getMap("TORPEDO_API.TORPEDO_API_SMARTBAND", iMap);
			
			if(iMap.get("RESULT").equals("0")) {
				log.info("PROCEDURE_ERROR");
				log.info("smartBandBatch fail");
				transactionManager.rollback(transactionStatus);
				return 0;
			}else if (iMap.get("RESULT").equals("2")) {
				log.info("데이터 없음");
				transactionManager.rollback(transactionStatus);
				return 2;
			}
			
			transactionManager.commit(transactionStatus);
			
			return 1;
			
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
			
			return 0;
		}
		
	}
	
	// Torpedo API 기저귀 데이터
	public int diaperHandle(String fromDt, String toDt) {
		
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			
			JsonObject param = new JsonObject();
			JsonObject dataParam = new JsonObject();
			
			JsonArray fieldsArr = new JsonArray();
			fieldsArr.add("name");
			fieldsArr.add("rssi");
			fieldsArr.add("fall");
			fieldsArr.add("wetness");
			fieldsArr.add("sleep_posture");
			fieldsArr.add("sleep_left_side");
			fieldsArr.add("sleep_up_side");
			fieldsArr.add("sleep_right_side");
			fieldsArr.add("sleep_upside_down");
			fieldsArr.add("inverted");
			fieldsArr.add("upright");
			fieldsArr.add("temp");
			fieldsArr.add("user_id");
			fieldsArr.add("service_identifier");
			fieldsArr.add("device_identifier");
			fieldsArr.add("battery");
			fieldsArr.add("inactivity_monitor");
			fieldsArr.add("connecting_status");
			fieldsArr.add("acc_x");
			fieldsArr.add("acc_y");
			fieldsArr.add("acc_z");
			
			dataParam.addProperty("from", fromDt);
			dataParam.addProperty("to", toDt);
			dataParam.addProperty("asc", true);
			dataParam.add("fields", fieldsArr);
			
			param.addProperty("modelCode", "sherrive_diaper_01");
			param.add("data", dataParam);
			
			String jsonStr = HttpUtil.callTorpedoApiPost(param);
			
			Map<String, Object> iMap = new HashMap<String, Object>();
			iMap.put("JSON", jsonStr);
			iMap.put("RESULT", "");
			
			commonDao.getMap("TORPEDO_API.TORPEDO_API_DIAPER", iMap);
			
			if(iMap.get("RESULT").equals("0")) {
				log.info("PROCEDURE_ERROR");
				log.info("diaperBatch fail");
				transactionManager.rollback(transactionStatus);
				return 0;
			}else if (iMap.get("RESULT").equals("2")) {
				log.info("데이터 없음");
				transactionManager.rollback(transactionStatus);
				return 2;
			}
			
			transactionManager.commit(transactionStatus);
			
			return 1;
			
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
			
			return 0;
		}
		
	}
	
	// 공기질 json
	public String airQualityJson(String company_cd, String mac_add) {
		
		String jsonStr = "";
		
		try {
			JsonObject param = new JsonObject();
			JsonObject dataParam = new JsonObject();
			
			Date date = new Date();
			SimpleDateFormat sdFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			Calendar cal = Calendar.getInstance();
			
			cal.setTime(date);
			String today = sdFormat.format(cal.getTime());
			
			cal.add(Calendar.MINUTE, -1);
			String before = sdFormat.format(cal.getTime());
			
			JsonArray fieldsArr = new JsonArray();
			fieldsArr.add("tvoc");
			fieldsArr.add("co_2");
			fieldsArr.add("score");
			fieldsArr.add("rssi");
			fieldsArr.add("humi");
			fieldsArr.add("name");
			fieldsArr.add("pm_10_0");
			fieldsArr.add("pm_1_0");
			fieldsArr.add("pm_2_5");
			fieldsArr.add("temp_c");
			fieldsArr.add("temp_f");
			fieldsArr.add("service_identifier");
			fieldsArr.add("device_identifier");
			
//			JsonArray fromToArray = new JsonArray();
//			JsonObject fromTo1 = new JsonObject();
//			fromTo1.addProperty("from", before);
//			fromTo1.addProperty("to", today);
//			fromToArray.add(fromTo1);
//			dataParam.add("date", fromToArray);
			
			dataParam.addProperty("from", before);	// 검색 시작시간
			dataParam.addProperty("to", today);		// 검색 마지막시간
			dataParam.addProperty("asc", false);		// 정렬
			dataParam.add("fields", fieldsArr);			// 토피도 데이터베이스 필드
			dataParam.addProperty("limit", 1);			// 출력 개수 제한
			
			JsonObject fieldQueryCondition = new JsonObject();
			JsonObject equalJson = new JsonObject();
			JsonObject equalJson2 = new JsonObject();
			JsonObject svcIdJson = new JsonObject();
			JsonObject deviceJson = new JsonObject();
			svcIdJson.addProperty("column_name", "service_identifier");
			svcIdJson.addProperty("value", company_cd);
			equalJson.add("equal", svcIdJson);
			deviceJson.addProperty("column_name", "device_identifier");
			deviceJson.addProperty("value", mac_add);
			equalJson2.add("equal", deviceJson);
			JsonArray andArray = new JsonArray();
			andArray.add(equalJson);
			andArray.add(equalJson2);
			fieldQueryCondition.add("and", andArray);
			
			dataParam.add("field_query_condition", fieldQueryCondition);
			
			
			//param.addProperty("serviceIdentifier", company_cd);		// 미들웨어 서비스 식별자 = 법인코드
			param.addProperty("modelCode", "BuildThing_IAQ_01");	// 공기질 센서 모델
			//param.addProperty("deviceIdentifier", mac_add);			// 맥주소
			param.add("data", dataParam);
			
			jsonStr = HttpUtil.callTorpedoApiPost(param);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return jsonStr;
	}
	
	// 공기질 json
		public String airQualityJson2(String company_cd) {
			
			String jsonStr = "";
			
			try {
				JsonObject param = new JsonObject();
				JsonObject dataParam = new JsonObject();
				
				Date date = new Date();
				SimpleDateFormat sdFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				Calendar cal = Calendar.getInstance();
				
				cal.setTime(date);
				String today = sdFormat.format(cal.getTime());
				
				cal.add(Calendar.MINUTE, -1);
				String before = sdFormat.format(cal.getTime());
				
				JsonArray fieldsArr = new JsonArray();
				fieldsArr.add("tvoc");
				fieldsArr.add("co_2");
				fieldsArr.add("score");
				fieldsArr.add("rssi");
				fieldsArr.add("humi");
				fieldsArr.add("name");
				fieldsArr.add("pm_10_0");
				fieldsArr.add("pm_1_0");
				fieldsArr.add("pm_2_5");
				fieldsArr.add("temp_c");
				fieldsArr.add("temp_f");
				fieldsArr.add("service_identifier");
				fieldsArr.add("device_identifier");
				
//				JsonArray fromToArray = new JsonArray();
//				JsonObject fromTo1 = new JsonObject();
//				fromTo1.addProperty("from", before);
//				fromTo1.addProperty("to", today);
//				fromToArray.add(fromTo1);
//				dataParam.add("date", fromToArray);
				
				dataParam.addProperty("from", before);	// 검색 시작시간
				dataParam.addProperty("to", today);		// 검색 마지막시간
				dataParam.addProperty("asc", false);		// 정렬
				dataParam.add("fields", fieldsArr);			// 토피도 데이터베이스 필드
				
				JsonObject fieldQueryCondition = new JsonObject();
				JsonObject equalJson = new JsonObject();
				JsonObject svcIdJson = new JsonObject();
				svcIdJson.addProperty("column_name", "service_identifier");
				svcIdJson.addProperty("value", company_cd);
				equalJson.add("equal", svcIdJson);
				JsonArray andArray = new JsonArray();
				andArray.add(equalJson);
				fieldQueryCondition.add("and", andArray);
				
				dataParam.add("field_query_condition", fieldQueryCondition);
				
				param.addProperty("modelCode", "BuildThing_IAQ_01");	// 공기질 센서 모델
				param.add("data", dataParam);
				
				jsonStr = HttpUtil.callTorpedoApiPost(param);
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			return jsonStr;
		}

	// 밴드 json
	public String smartBandJson(String company_cd) {
		
		String jsonStr = "";
		
		try {
			
			JsonObject param = new JsonObject();
			JsonObject dataParam = new JsonObject();
			
			Date date = new Date();
			SimpleDateFormat sdFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			Calendar cal = Calendar.getInstance();
			
			cal.setTime(date);
			String today = sdFormat.format(cal.getTime());
			
			cal.add(Calendar.MINUTE, -1);
			String before = sdFormat.format(cal.getTime());
			
			JsonArray fieldsArr = new JsonArray();
			fieldsArr.add("last_heart_rate");
			fieldsArr.add("rssi");
			fieldsArr.add("dist");
			fieldsArr.add("activity_dur");
			fieldsArr.add("calories");
			fieldsArr.add("mac");
			fieldsArr.add("sleep");
			fieldsArr.add("user_id");
			fieldsArr.add("name");
			fieldsArr.add("step");
			fieldsArr.add("input_ts");
			fieldsArr.add("service_identifier");
			fieldsArr.add("device_identifier");
			
//			JsonArray fromToArray = new JsonArray();
//			JsonObject fromTo1 = new JsonObject();
//			fromTo1.addProperty("from", before);
//			fromTo1.addProperty("to", today);
//			fromToArray.add(fromTo1);
//			dataParam.add("date", fromToArray);
			
			dataParam.addProperty("from", before);
			dataParam.addProperty("to", today);
			dataParam.addProperty("asc", true);
			dataParam.add("fields", fieldsArr);
			
			JsonObject fieldQueryCondition = new JsonObject();
			JsonObject equalJson = new JsonObject();
			JsonObject svcIdJson = new JsonObject();
			svcIdJson.addProperty("column_name", "service_identifier");
			svcIdJson.addProperty("value", company_cd);
			equalJson.add("equal", svcIdJson);
			JsonArray andArray = new JsonArray();
			andArray.add(equalJson);
			fieldQueryCondition.add("and", andArray);
			
			dataParam.add("field_query_condition", fieldQueryCondition);
			
			//param.addProperty("serviceIdentifier", company_cd);
			param.addProperty("modelCode", "fitpolo_h705");
			param.add("data", dataParam);
			
			jsonStr = HttpUtil.callTorpedoApiPost(param);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return jsonStr;
	}
	
	// 기저귀 json
	public String diaperJson(String company_cd) {
		
		String jsonStr = "";
		
		try {
			
			JsonObject param = new JsonObject();
			JsonObject dataParam = new JsonObject();
			
			Date date = new Date();
			SimpleDateFormat sdFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			Calendar cal = Calendar.getInstance();
			
			cal.setTime(date);
			String today = sdFormat.format(cal.getTime());
			
			cal.add(Calendar.MINUTE, -1);
			String before = sdFormat.format(cal.getTime());
			
			JsonArray fieldsArr = new JsonArray();
			fieldsArr.add("name");
			fieldsArr.add("rssi");
			fieldsArr.add("fall");
			fieldsArr.add("wetness");
			fieldsArr.add("sleep_posture");
			fieldsArr.add("sleep_left_side");
			fieldsArr.add("sleep_up_side");
			fieldsArr.add("sleep_right_side");
			fieldsArr.add("sleep_upside_down");
			fieldsArr.add("inverted");
			fieldsArr.add("upright");
			fieldsArr.add("temp");
			fieldsArr.add("user_id");
			fieldsArr.add("service_identifier");
			fieldsArr.add("device_identifier");
			fieldsArr.add("battery");
			fieldsArr.add("inactivity_monitor");
			fieldsArr.add("connecting_status");
			fieldsArr.add("acc_x");
			fieldsArr.add("acc_y");
			fieldsArr.add("acc_z");
			
//			JsonArray fromToArray = new JsonArray();
//			JsonObject fromTo1 = new JsonObject();
//			fromTo1.addProperty("from", before);
//			fromTo1.addProperty("to", today);
//			fromToArray.add(fromTo1);
//			dataParam.add("date", fromToArray);
			
			dataParam.addProperty("from", before);
			dataParam.addProperty("to", today);
			dataParam.addProperty("asc", true);
			dataParam.add("fields", fieldsArr);
			
			JsonObject fieldQueryCondition = new JsonObject();
			JsonObject equalJson = new JsonObject();
			JsonObject svcIdJson = new JsonObject();
			svcIdJson.addProperty("column_name", "service_identifier");
			svcIdJson.addProperty("value", company_cd);
			equalJson.add("equal", svcIdJson);
			JsonArray andArray = new JsonArray();
			andArray.add(equalJson);
			fieldQueryCondition.add("and", andArray);
			
			dataParam.add("field_query_condition", fieldQueryCondition);
			
			//param.addProperty("serviceIdentifier", company_cd);
			param.addProperty("modelCode", "sherrive_diaper_01");
			param.add("data", dataParam);
			
			jsonStr = HttpUtil.callTorpedoApiPost(param);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return jsonStr;
	}
	
	public String diaperJson2(String company_cd) {
		String jsonStr = "";
		
		try {
			
			Date date = new Date();
			SimpleDateFormat sdFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			Calendar cal = Calendar.getInstance();
			
			// 현재시간
			cal.setTime(date);
			String to = sdFormat.format(cal.getTime());
			
			// 현재시간으로 부터  공통코드 NU_MON_CYCLE STR2 분전
			String a1 = commonDao.getString("NUB_COMMON.GET_NU_MON_CYCLE_STR2", company_cd);
			int aInt1 = Integer.parseInt(a1);
			cal.add(Calendar.MINUTE, -aInt1);
			String from = sdFormat.format(cal.getTime());
			
			// 현재시간으로 부터 공통코드 NU_MON_CYCLE STR3 분전
			String a2 = commonDao.getString("NUB_COMMON.GET_NU_MON_CYCLE_STR3", company_cd);
			int aInt2 = Integer.parseInt(a2);
			cal.setTime(date);
			cal.add(Calendar.MINUTE, -aInt2);
			String beTo = sdFormat.format(cal.getTime());
			
			// 공통코드 NU_MON_CYCLE STR3 로부터 1분전
			cal.add(Calendar.MINUTE, -1);
			String beFrom = sdFormat.format(cal.getTime());
			
			JsonObject param = new JsonObject();
			JsonObject dataParam = new JsonObject();
			
			JsonArray fieldsArr = new JsonArray();
			//fieldsArr.add("name");
			//fieldsArr.add("rssi");
			fieldsArr.add("fall");
			fieldsArr.add("wetness");
			//fieldsArr.add("sleep_posture");
			//fieldsArr.add("sleep_left_side");
			//fieldsArr.add("sleep_up_side");
			//fieldsArr.add("sleep_right_side");
			//fieldsArr.add("sleep_upside_down");
			//fieldsArr.add("inverted");
			//fieldsArr.add("upright");
			//fieldsArr.add("temp");
			//fieldsArr.add("user_id");
			fieldsArr.add("service_identifier");
			fieldsArr.add("device_identifier");
			fieldsArr.add("battery");
			//fieldsArr.add("inactivity_monitor");
			fieldsArr.add("connecting_status");
			//fieldsArr.add("acc_x");
			//fieldsArr.add("acc_y");
			//fieldsArr.add("acc_z");
			
			JsonArray fromToArray = new JsonArray();
			JsonObject fromTo1 = new JsonObject();
			JsonObject fromTo2 = new JsonObject();
			fromTo1.addProperty("from", beFrom);
			fromTo1.addProperty("to", beTo);
			fromTo2.addProperty("from", from);
			fromTo2.addProperty("to", to);
			fromToArray.add(fromTo1);
			fromToArray.add(fromTo2);
			dataParam.add("date", fromToArray);
			
			dataParam.addProperty("asc", true);
			dataParam.add("fields", fieldsArr);
			
			JsonObject fieldQueryCondition = new JsonObject();
			JsonObject equalJson = new JsonObject();
			JsonObject svcIdJson = new JsonObject();
			svcIdJson.addProperty("column_name", "service_identifier");
			svcIdJson.addProperty("value", company_cd);
			equalJson.add("equal", svcIdJson);
			JsonArray andArray = new JsonArray();
			andArray.add(equalJson);
			fieldQueryCondition.add("and", andArray);
			
			dataParam.add("field_query_condition", fieldQueryCondition);
			
			param.addProperty("modelCode", "sherrive_diaper_01");
			param.add("data", dataParam);
			
			jsonStr = HttpUtil.callTorpedoApiPost(param);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return jsonStr;
	}
	
	// 밴드 json (법인, 일자, 시작시간, 종료시간)
	public String smartBandJsonDt(String company_cd, String dt, String shour, String ehour) {
		
		String jsonStr = "";
		
		try {
			
			JsonObject param = new JsonObject();
			JsonObject dataParam = new JsonObject();
			
			SimpleDateFormat beforeFormat = new SimpleDateFormat("yyyyMMdd");
			// Date로 변경하기 위해 날짜 형식을 yyyy-MM-dd로 변경
			SimpleDateFormat afterFormat = new SimpleDateFormat("yyyy-MM-dd");
			Date tempDate = null;
			Date tempDate2 = null;
			
			// yyyyMMdd로된 날짜 형식으로 java.util.Date 객체 생성
			tempDate = beforeFormat.parse(dt);
			
			// Date를 yyyy-MM-dd 형식으로 변경하여 String으로 반환
			String beforeTemp = afterFormat.format(tempDate);
			String before = beforeTemp + " " + shour;
			String today = beforeTemp + " " + ehour;
			
			Date date = new Date();
			SimpleDateFormat sdFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			Calendar cal = Calendar.getInstance();
			
			cal.setTime(date);
			//String today = sdFormat.format(cal.getTime());
			
			cal.add(Calendar.MINUTE, -1);
			//String before = sdFormat.format(cal.getTime());
			
			JsonArray fieldsArr = new JsonArray();
			fieldsArr.add("last_heart_rate");
			fieldsArr.add("rssi");
			fieldsArr.add("dist");
			fieldsArr.add("activity_dur");
			fieldsArr.add("calories");
			fieldsArr.add("mac");
			fieldsArr.add("sleep");
			fieldsArr.add("user_id");
			fieldsArr.add("name");
			fieldsArr.add("step");
			fieldsArr.add("input_ts");
			fieldsArr.add("service_identifier");
			fieldsArr.add("device_identifier");
			
			
//			JsonArray fromToArray = new JsonArray();
//			JsonObject fromTo1 = new JsonObject();
//			fromTo1.addProperty("from", before);
//			fromTo1.addProperty("to", today);
//			fromToArray.add(fromTo1);
//			dataParam.add("date", fromToArray);
			
			dataParam.addProperty("from", before);
			dataParam.addProperty("to", today);
			dataParam.addProperty("asc", true);
			dataParam.add("fields", fieldsArr);
			
			JsonObject fieldQueryCondition = new JsonObject();
			JsonObject equalJson = new JsonObject();
			JsonObject svcIdJson = new JsonObject();
			svcIdJson.addProperty("column_name", "service_identifier");
			svcIdJson.addProperty("value", company_cd);
			equalJson.add("equal", svcIdJson);
			JsonArray andArray = new JsonArray();
			andArray.add(equalJson);
			fieldQueryCondition.add("and", andArray);
			
			dataParam.add("field_query_condition", fieldQueryCondition);
			
			//param.addProperty("serviceIdentifier", company_cd);
			param.addProperty("modelCode", "fitpolo_h705");
			param.add("data", dataParam);
			
			jsonStr = HttpUtil.callTorpedoApiPost(param);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return jsonStr;
	}
	
	// 기저귀 json (법인, 일자, 시작시간, 종료시간)
	public String diaperJsonDt(String company_cd, String dt, String shour, String ehour) {
		
		String jsonStr = "";
		
		try {
			
			JsonObject param = new JsonObject();
			JsonObject dataParam = new JsonObject();
			
			SimpleDateFormat beforeFormat = new SimpleDateFormat("yyyyMMdd");
			// Date로 변경하기 위해 날짜 형식을 yyyy-MM-dd로 변경
			SimpleDateFormat afterFormat = new SimpleDateFormat("yyyy-MM-dd");
			Date tempDate = null;
			Date tempDate2 = null;
			
			// yyyyMMdd로된 날짜 형식으로 java.util.Date 객체 생성
			tempDate = beforeFormat.parse(dt);
			
			// Date를 yyyy-MM-dd 형식으로 변경하여 String으로 반환
			String beforeTemp = afterFormat.format(tempDate);
			String before = beforeTemp + " " + shour;
			String today = beforeTemp + " " + ehour;
			
			Date date = new Date();
			SimpleDateFormat sdFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			Calendar cal = Calendar.getInstance();
			
			cal.setTime(date);
			//String today = sdFormat.format(cal.getTime());
			
			cal.add(Calendar.MINUTE, -1);
			//String before = sdFormat.format(cal.getTime());
			
			JsonArray fieldsArr = new JsonArray();
			fieldsArr.add("name");
			fieldsArr.add("rssi");
			fieldsArr.add("fall");
			fieldsArr.add("wetness");
			fieldsArr.add("sleep_posture");
			fieldsArr.add("sleep_left_side");
			fieldsArr.add("sleep_up_side");
			fieldsArr.add("sleep_right_side");
			fieldsArr.add("sleep_upside_down");
			fieldsArr.add("inverted");
			fieldsArr.add("upright");
			fieldsArr.add("temp");
			fieldsArr.add("user_id");
			fieldsArr.add("service_identifier");
			fieldsArr.add("device_identifier");
			fieldsArr.add("battery");
			fieldsArr.add("inactivity_monitor");
			fieldsArr.add("connecting_status");
			fieldsArr.add("acc_x");
			fieldsArr.add("acc_y");
			fieldsArr.add("acc_z");
			
//			JsonArray fromToArray = new JsonArray();
//			JsonObject fromTo1 = new JsonObject();
//			fromTo1.addProperty("from", before);
//			fromTo1.addProperty("to", today);
//			fromToArray.add(fromTo1);
//			dataParam.add("date", fromToArray);
			
			dataParam.addProperty("from", before);
			dataParam.addProperty("to", today);
			dataParam.addProperty("asc", true);
			dataParam.add("fields", fieldsArr);
			
			JsonObject fieldQueryCondition = new JsonObject();
			JsonObject equalJson = new JsonObject();
			JsonObject svcIdJson = new JsonObject();
			svcIdJson.addProperty("column_name", "service_identifier");
			svcIdJson.addProperty("value", company_cd);
			equalJson.add("equal", svcIdJson);
			JsonArray andArray = new JsonArray();
			andArray.add(equalJson);
			fieldQueryCondition.add("and", andArray);
			
			dataParam.add("field_query_condition", fieldQueryCondition);
			
			//param.addProperty("serviceIdentifier", company_cd);
			param.addProperty("modelCode", "sherrive_diaper_01");
			param.add("data", dataParam);
			
			jsonStr = HttpUtil.callTorpedoApiPost(param);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return jsonStr;
	}
}
