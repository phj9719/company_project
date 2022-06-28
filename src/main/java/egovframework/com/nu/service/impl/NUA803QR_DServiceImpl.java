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
import egovframework.com.nu.service.NUA803QR_DService;

@Service("NUA803QR_DService")
public class NUA803QR_DServiceImpl implements NUA803QR_DService {
	
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
		log.info("NUA803QR_D select start");
		
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
		
		// 기저귀 이상상태 조회
		String diaperJson = TorpedoMiddleBatch.diaperJson2(company_cd);
		map.put("DIAPER_JSON", diaperJson);
		List<Map<String, Object>> diaperPageList= new ArrayList<Map<String, Object>>();
		List<Map<String, Object>> diaperList = commonDao.getList("NUA803QR_D.NUA803QR_D_DS_LIST_S", map);
		log.info("SQLID : NUA803QR_D_DS_LIST_S 실행");
		
		log.debug("NUA803QR_D_DS_LIST_S paging 시작");
		int iRowCnt = inVar.getInt("pageRowCount");
		int iPageNo = inVar.getInt("pageNo");

		int iTotalRowCount = diaperList.size();
		int nPageBlock = (int) Math.ceil((double) iTotalRowCount / iRowCnt);
		int nStartRow = iRowCnt * (iPageNo - 1);

		if (nStartRow > (iTotalRowCount - 1)) {
			iPageNo = 1;
			nStartRow = iRowCnt * (iPageNo - 1);
		}

		int nEndRow = nStartRow + iRowCnt;

		for (int j = nStartRow; j < nEndRow; j++) {
			if (j == diaperList.size())
				break;
			diaperPageList.add(diaperList.get(j));
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
		
		log.debug("NUA803QR_D_DS_LIST_S paging 완료");
		
		outMap.put("output1", diaperPageList);
		
		// 기기 총 개수 등 기타 정보 조회
		List<Map<String, Object>> etcList = commonDao.getList("NUA803QR_D.NUA803QR_D_DS_ETC_LIST_S", map);
		log.info("SQLID : NUA803QR_D_DS_ETC_LIST_S 실행");
		outMap.put("output2", etcList);
		
		log.info("NUA803QR_D select end");
	}

}
