package egovframework.com.day.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.util.StringUtils;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.file.FileUtil;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.day.service.DAY00102Service;
import egovframework.com.rte.nexacro.NexacroConstant;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("DAY00102Service")
public class DAY00102ServiceImpl extends EgovAbstractServiceImpl implements DAY00102Service {
	
	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;
	
	@Resource(name="FileUtil")
	private FileUtil fileUtil;
	
	@Autowired
	private PlatformTransactionManager transactionManager;
	
	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	@Override
	public NexacroResult save(VariableList inVar, DataSetList inDataset) throws Exception {
		
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			NexacroResult result = new NexacroResult();
			
			DataSet ds_state_desc = inDataset.get("input1");
			List<Map<String, Object>> list = dataSetUtil.dataSetToList(ds_state_desc);
			

			Map<String, Object> map = list.get(0);
			Map<String, Object> param = new HashMap<>();
			param.put("sicode", map.get("sicode"));
			param.put("sc_code", map.get("sc_code"));
			param.put("date_from", map.get("sc_nalja"));
			param.put("date_to", map.get("sc_nalja"));
			
			List<Map<String, Object>> records = commonDao.getList("DAY00102.DAY00102_DS_DETAIL_S", param);
			
			// 동일 입소자에 대한 동일 날짜의 상태변화 기록이 있으면 UPDATE, 없으면 INSERT
			if (records.size()>0) {
				int sc_number = Integer.parseInt(records.get(0).get("sc_number").toString());
				map.put("sc_number", sc_number);
				commonDao.updateData("DAY00102.DAY00102_DS_STATE_DESC_U", map);
			} else {
				commonDao.insertData("DAY00102.DAY00102_DS_STATE_DESC_I", map);
			}

			transactionManager.commit(transactionStatus);
			result.setErrorCode(0);
			return result;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.error("[log]ErrorException -> {}", e.getMessage());
			throw e;
		}
	}
	
	
	@Override
	public void getRecordCnt(VariableList inVar, Map<String, List<Map<String, Object>>> outMap) throws Exception {

		String[] arySqlId = inVar.getString("sqlId").split(" ");
		Map<String, Object> invarMap = dataSetUtil.varToMap(inVar);

		List<Map<String, Object>> records;
		
		String m_codes = invarMap.get("m_codes").toString();

		String[] temp = m_codes.split(",");
		List<String> codeList = Arrays.asList(temp);
		invarMap.put("m_codes", codeList);
			 
		records = commonDao.getList(arySqlId[0], invarMap);
		
		outMap.put("output1", records);
	}
}
