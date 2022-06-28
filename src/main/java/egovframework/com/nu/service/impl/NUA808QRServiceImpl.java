package egovframework.com.nu.service.impl;

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
import egovframework.com.nu.service.NUA808QRService;

@Service("NUA808QRService")
public class NUA808QRServiceImpl implements NUA808QRService {
	
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
		log.info("NUA808QR select start");
		String company_cd;	
		Map<String, Object> map;
		
		DataSet inDs = inDataset.get("input1");
		if (inDs != null) {
			map = (Map<String, Object>) dataSetUtil.dataSetToList(inDs).get(0);
			company_cd = map.get("COMPANY_CD").toString();
		}
		else {
			map = dataSetUtil.varToMap(inVar);
			company_cd = inVar.getString("COMPANY_CD");
		}
		
		log.debug("COMPANY_CD : " + company_cd);
		
		// 공기질 이상상태 조회
		String airJson = TorpedoMiddleBatch.airQualityJson2(company_cd);
		map.put("AIR_JSON", airJson);
		List<Map<String, Object>> airList = commonDao.getList("NUA808QR.NUA808QR_DS_AIR_LIST_S", map);
		log.info("SQLID : NUA808QR_DS_AIR_LIST_S 실행");
		outMap.put("output1", airList);
		
		// 기저귀 이상상태 조회
		String diaperJson = TorpedoMiddleBatch.diaperJson2(company_cd);
		map.put("DIAPER_JSON", diaperJson);
		List<Map<String, Object>> diaperList = commonDao.getList("NUA808QR.NUA808QR_DS_DIAPER_LIST_S", map);
		log.info("SQLID : NUA808QR_DS_DIAPER_LIST_S 실행");
		outMap.put("output2", diaperList);
		
		// 맥박 이상상태 조회
		List<Map<String, Object>> bandList = commonDao.getList("NUA808QR.NUA808QR_DS_BAND_LIST_S", map);
		log.info("SQLID : NUA808QR_DS_BAND_LIST_S 실행");
		outMap.put("output3", bandList);
		
		// 기기 총 개수 등 기타 정보 조회
		List<Map<String, Object>> etcList = commonDao.getList("NUA808QR.NUA808QR_DS_ETC_LIST_S", map);
		log.info("SQLID : NUA808QR_DS_ETC_LIST_S 실행");
		outMap.put("output4", etcList);
		
		log.info("NUA808QR select end");
	}

}
