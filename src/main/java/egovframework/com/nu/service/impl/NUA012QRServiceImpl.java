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

import egovframework.com.nu.service.NUA012QRService;
import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.common.util.LanguageUtil;
import egovframework.com.common.util.TorpedoMiddleBatchUtil;

@Service("NUA012QRService")
public class NUA012QRServiceImpl implements NUA012QRService {
	
	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;
	
	@Resource(name="LanguageUtil")
	private LanguageUtil languageUtil;
	
	@Resource(name="TorpedoMiddleBatch")
	private TorpedoMiddleBatchUtil TorpedoMiddleBatch;
	
	//private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	@Override
	public void select(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {
		
		String company_cd = inVar.getString("COMPANY_CD");
		String dt = inVar.getString("DT");
		String shour = inVar.getString("S_HOUR");
		String ehour = inVar.getString("E_HOUR");
		
		String jsonStr = TorpedoMiddleBatch.smartBandJsonDt(company_cd, dt, shour, ehour); //밴드
		
		String[] arySqlId = inVar.getString("sqlId").split(" ");
		
		for (int i = 0; i < arySqlId.length; i++) {
			DataSet inDs = inDataset.get("input" + (i + 1));

			//log.debug("SQLID : " + arySqlId[i]);

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

}
