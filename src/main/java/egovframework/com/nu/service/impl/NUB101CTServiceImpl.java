package egovframework.com.nu.service.impl;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.common.util.LanguageUtil;
import egovframework.com.common.util.TorpedoMiddleBatchUtil;
import egovframework.com.nu.service.NUB101CTService;

@Service("NUB101CTService")
public class NUB101CTServiceImpl implements NUB101CTService {

	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;
	
	@Resource(name="LanguageUtil")
	private LanguageUtil languageUtil;
	
	@Resource(name="TorpedoMiddleBatch")
	private TorpedoMiddleBatchUtil TorpedoMiddleBatch;
	
	private Logger log = LoggerFactory.getLogger(this.getClass().getName());
	
	@Override
	public void airSelect(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {
		
		String company_cd = inVar.getString("COMPANY_CD");
		String mac_add = inVar.getString("MAC_ADD");
		
		String jsonStr = TorpedoMiddleBatch.airQualityJson(company_cd, mac_add);
		String[] arySqlId = inVar.getString("sqlId").split(" ");
		
		for (int i = 0; i < arySqlId.length; i++) {
			DataSet inDs = inDataset.get("input" + (i + 1));

			log.debug("SQLID : " + arySqlId[i]);

			List<Map<String, Object>> records;

			if (inDs != null && inDs.getRowCount() > 0) {
				Map<String, Object> map = (Map<String, Object>) dataSetUtil.dataSetToList(inDs).get(0);
				if (!map.containsKey("COMPANY_CD")) {
					map.put("COMPANY_CD", inVar.getString("COMPANY_CD"));
				}
				map.put("JSON", jsonStr);
				records = commonDao.getList(arySqlId[i], map);
			} else {
				Map<String, Object> map = dataSetUtil.varToMap(inVar);
				map.put("JSON", jsonStr);
				records = commonDao.getList(arySqlId[i], map);
			}
			outMap.put("output" + (i + 1), records);
		}
	}

	@Override
	public void select(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {
		log.info("NUB101CT select start");
		String company_cd = inVar.getString("COMPANY_CD");
		String area = inVar.getString("AREA");
		String location = inVar.getString("LOCATION");
//		log.debug("COMPANY_CD : " + company_cd);
//		log.debug("AREA : " + area);
//		log.debug("LOCATION : " + location);
		
		Map<String, Object> map = dataSetUtil.varToMap(inVar);
		
		String mac_add = commonDao.getString("NUB101CT.NUB101CT_DS_MAC_ADD_S", map);
		log.info("SQLID : NUB101CT_DS_MAC_ADD_S 실행");
		String airJson = TorpedoMiddleBatch.airQualityJson(company_cd, mac_add);
		
		map.put("AIR_JSON", airJson);
		List<Map<String, Object>> macList = commonDao.getList("NUB101CT.NUB101CT_DS_AIRQUALITY_S", map);
		log.info("SQLID : NUB101CT_DS_AIRQUALITY_S 실행");
		outMap.put("output1", macList);
		
		String bandJson = TorpedoMiddleBatch.smartBandJson(company_cd);
		String diaperJson = TorpedoMiddleBatch.diaperJson2(company_cd);
		
		map.put("BAND_JSON", bandJson);
		map.put("DIAPER_JSON", diaperJson);
		List<Map<String, Object>> residentList = commonDao.getList("NUB101CT.NUB101CT_DS_RESIDENT_MONITOR_S", map);
		log.info("SQLID : NUB101CT_DS_RESIDENT_MONITOR_S 실행");
		outMap.put("output2", residentList);
		log.info("NUB101CT select end");
	}

}
