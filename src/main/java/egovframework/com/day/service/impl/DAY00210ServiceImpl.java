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
import egovframework.com.day.service.DAY00210Service;
import egovframework.com.rte.nexacro.NexacroConstant;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("DAY00210Service")
public class DAY00210ServiceImpl extends EgovAbstractServiceImpl implements DAY00210Service {
	
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
	public void getRecordCnt(VariableList inVar, Map<String, List<Map<String, Object>>> outMap) throws Exception {

		String[] arySqlId = inVar.getString("sqlId").split(" ");
		Map<String, Object> invarMap = dataSetUtil.varToMap(inVar);

		List<Map<String, Object>> records;
		
		String m_codes = invarMap.get("listArr").toString();

		String[] temp = m_codes.split(",");
		List<String> codeList = Arrays.asList(temp);
		invarMap.put("m_codes", codeList);
			 
		records = commonDao.getList(arySqlId[0], invarMap);
		
		outMap.put("output1", records);
	}
}
