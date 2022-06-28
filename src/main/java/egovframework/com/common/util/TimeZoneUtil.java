package egovframework.com.common.util;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.com.common.domain.TimeZoneId;

/**
 * Time difference change class for GSI concept
 *
 * @author Kim JeongLok
 * @since 2017.06.05
 * @version 1.0
 * @see common/domain/TimeZoneId
 * 		rte/map/DataSetMap
 */

@Service("TimeZoneUtil")
public class TimeZoneUtil {
	
	@Resource(name="TimeZoneId")
	TimeZoneId timeZoneId;

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	public ArrayList getTimes(String lang, String format, String type, String separator, String withHour,String GMTSummerTime) {
		log.debug("TimeZoneUtil GetTimes 메소드");
		ArrayList times = new ArrayList();
		String zonename = "";
		if(GMTSummerTime.toUpperCase() == "YES"){
			//apply daylight saving time
			zonename = "Europe/London";
		}else if(GMTSummerTime.toUpperCase() == "NO"){
			//not apply daylight saving time
			zonename = "GMT";
		}
		times.add(getLocalTime(zonename, "YYMMDD", "NUMBER", "-", "HHMMSS"));
		zonename = (String)timeZoneId.regions.get(lang.toUpperCase());
		times.add(getLocalTime(zonename,format,type,separator,withHour));
		return times;
	}
	
	/*  
	 	**format**
	 "YYMMDD" --> Year  /  Month  / Day
	 "YYDDMM" --> Year  /   Day   / Month
	 "MMYYDD" --> Month /   Year  / Day
	 "MMDDYY" --> Month /   Day   / Year
	 "DDMMYY" -->  Day  /  Month  / Year
	 "DDYYMM" -->  Day  /   Year  / Month
	
	 	**type**
	 NUMBER --> default(Only use Number)
	 MONTH  --> Only Month to String  
	 DAY    --> Only  Day  to String
	 BOTH   --> both Month&Day to String
	 
	 	**separator**
	  	The separator is not defined, parameter is directly mapping to Variable
	 ex) /
	  	 :
	  	 -
	  
	 	**withHour**
	 ""     --> +hour,minute(default)
	 HH     --> +hour
	 HHMM   --> +hour,minute
	 HHMMSS --> +hour,minute,second
	 HHMMSSNN --> +hour,minute,second,nanosecond
	 */
	private String getLocalTime(String zoneName, String format, String type, String separator, String withHour){
		
		ZonedDateTime localTime = ZonedDateTime.now(ZoneId.of(zoneName));
		
		String year = (localTime.getYear()+"").substring(0, 4); //Number year
		String month = localTime.getMonthValue()+""; //Number month
		String day = localTime.getDayOfMonth()+""; //Number day
		String sMonth = localTime.getMonth()+""; //String Month
		String sDay = localTime.getDayOfWeek()+""; //String Day
		String hour = localTime.getHour()+"";
		String minute = localTime.getMinute()+"";
		String second = localTime.getSecond()+"";
		String nanosecond = localTime.getNano()+"";
		
		if(month.length() == 1){month = "0"+month;}
		if(day.length() == 1){day = "0"+day;}
		if(hour.length() == 1){hour = "0"+hour;}
		if(minute.length() == 1){minute = "0"+minute;}
		if(second.length() == 1){second = "0"+second;}
		
		String MONTH="";
		String DAY="";
		
		if(type.toUpperCase() == "NUMBER"){
			MONTH = month;
			DAY = day;
		}else if(type.toUpperCase() == "MONTH"){
			MONTH = sMonth;
			DAY = day;
		}else if(type.toUpperCase() == "DAY"){
			MONTH = month;
			DAY = sDay;
		}else if(type.toUpperCase() == "BOTH"){
			MONTH = sMonth;
			DAY = sDay;
		}//if
		
		String time = "";
		switch(format.toUpperCase()){
			case "YYMMDD" : time = year+separator+MONTH+separator+DAY; break;
			case "YYDDMM" : time = year+separator+DAY+separator+MONTH; break;
			case "MMYYDD" : time = MONTH+separator+year+separator+DAY; break;
			case "MMDDYY" : time = MONTH+separator+DAY+separator+year; break;
			case "DDMMYY" : time = DAY+separator+MONTH+separator+year; break;
			case "DDYYMM" : time = DAY+separator+year+separator+MONTH; break;
		}//case
		
		if(withHour == ""){
			time += " "+hour+":"+minute;
		}else if(withHour.toUpperCase() == "HH"){
			time += " "+hour;
		}else if(withHour.toUpperCase() == "HHMM"){
			time += " "+hour+":"+minute;
		}else if(withHour.toUpperCase() == "HHMMSS"){
			time += " "+hour+":"+minute+":"+second+"."+nanosecond.substring(0, 3);
		}else if(withHour.toUpperCase() == "HHMMSSNN"){
			time += " "+hour+":"+minute+":"+second+":"+nanosecond;
		}//if
		
		return time;
	}//getLocalTime
	
	
}

