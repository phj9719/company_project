package egovframework.com.nu.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.common.util.LanguageUtil;
import egovframework.com.common.util.TorpedoMiddleBatchUtil;
import egovframework.com.common.util.UpdateMetadataUtil;
import egovframework.com.nu.service.JsonTestService;

@Service("JsonTestService")
public class JsonTestServiceImpl implements JsonTestService {
	
	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Autowired
	private UpdateMetadataUtil updateMetadataUtil;
	
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
		
		String company_cd = inVar.getString("COMPANY_CD");
		System.out.println("COMPANY_CD : " + company_cd);
		
		String jsonStr = TorpedoMiddleBatch.diaperJson2(company_cd);
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
				System.out.println("records : " + records);
			}
			outMap.put("output" + (i + 1), records);
		}
		
	}

}
