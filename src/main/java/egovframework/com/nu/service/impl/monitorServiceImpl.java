package egovframework.com.nu.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.Variable;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.common.util.LanguageUtil;
import egovframework.com.common.util.TorpedoMiddleBatchUtil;
import egovframework.com.nu.service.monitorService;

@Service("monitorService")
public class monitorServiceImpl implements monitorService {

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
	public void monitorSelect(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {
		
		String company_cd = inVar.getString("COMPANY_CD");
		//String mac_add = inVar.getString("MAC_ADD");
		
		String diaper = TorpedoMiddleBatch.diaperJson2(company_cd); //기저귀
		String band = TorpedoMiddleBatch.smartBandJson(company_cd); //밴드
		String[] arySqlId = inVar.getString("sqlId").split(" ");
		
		for (int i = 0; i < arySqlId.length; i++) {
			DataSet inDs = inDataset.get("input" + (i + 1));

			log.debug("SQLID : " + arySqlId[i]);

			List<Map<String, Object>> records;
			List<Map<String, Object>> searchData= new ArrayList<Map<String, Object>>();
			if (inDs != null && inDs.getRowCount() > 0) {
				Map<String, Object> map = (Map<String, Object>) dataSetUtil.dataSetToList(inDs).get(0);
				if (!map.containsKey("COMPANY_CD")) {
					map.put("COMPANY_CD", inVar.getString("COMPANY_CD"));
				}
				map.put("JSON", diaper);
				map.put("JSON2", band);
				records = commonDao.getList(arySqlId[i], map);
			} else {
				Map<String, Object> map = dataSetUtil.varToMap(inVar);
				map.put("JSON", diaper);
				map.put("JSON2", band);
				records = commonDao.getList(arySqlId[i], map);
			}
			//List<Map<String, Object>> searchData = commonDao.getList(arySqlId[i], records);

			// sct_util.transaction 에서 argument 변수에 pageRowCount,pageNo 로 전달받음.
			int iRowCnt = inVar.getInt("pageRowCount");
			int iPageNo = inVar.getInt("pageNo");

			int iTotalRowCount = records.size();
			int nPageBlock = (int) Math.ceil((double) iTotalRowCount / iRowCnt);
			int nStartRow = iRowCnt * (iPageNo - 1);

			if (nStartRow > (iTotalRowCount - 1)) {
				iPageNo = 1;
				nStartRow = iRowCnt * (iPageNo - 1);
			}

			int nEndRow = nStartRow + iRowCnt;

			for (int j = nStartRow; j < nEndRow; j++) {
				if (j == records.size())
					break;
				searchData.add(records.get(j));
			}

			Variable pageBlock = new Variable("pageBlock");
			pageBlock.set(nPageBlock);
			outVar.add(pageBlock);

			Variable pageTotRowCount = new Variable("pageTotRowCount");
			pageTotRowCount.set(iTotalRowCount);
			outVar.add(pageTotRowCount);

			Variable pageNo = new Variable("pageNo");
			pageNo.set(iPageNo);
			outVar.add(pageNo);
			
			outMap.put("output" + (i + 1), searchData);
		}
	}

}
