package egovframework.com.nu.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.common.util.LanguageUtil;
import egovframework.com.common.util.TorpedoMiddleBatchUtil;
import egovframework.com.nu.service.NUB101CT_DService;

@Service("NUB101CT_DService")
public class NUB101CT_DServiceImpl implements NUB101CT_DService {

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
	public void select(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {
		log.info("NUB101CT_D select start");
		String company_cd = inVar.getString("COMPANY_CD");
		
		Map<String, Object> map = dataSetUtil.varToMap(inVar);
		
		String mac_add = commonDao.getString("NUB101CT_D.NUB101CT_D_DS_MAC_ADD_S", map);
		log.info("SQLID : NUB101CT_D_DS_MAC_ADD_S 실행");
		String airJson = TorpedoMiddleBatch.airQualityJson(company_cd, mac_add);
		
		map.put("AIR_JSON", airJson);
		List<Map<String, Object>> macList = commonDao.getList("NUB101CT_D.NUB101CT_D_DS_AIRQUALITY_S", map);
		log.info("SQLID : NUB101CT_D_DS_AIRQUALITY_S 실행");
		outMap.put("output1", macList);
		
		String diaperJson = TorpedoMiddleBatch.diaperJson2(company_cd);
		map.put("DIAPER_JSON", diaperJson);
		List<Map<String, Object>> residentList = commonDao.getList("NUB101CT_D.NUB101CT_D_DS_RESIDENT_MONITOR_S", map);
		log.info("SQLID : NUB101CT_D_DS_RESIDENT_MONITOR_S 실행");
		outMap.put("output2", residentList);
		log.info("NUB101CT_D select end");
	}

}
