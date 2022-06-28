package egovframework.com.day.service.impl;

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

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.day.service.DAY00211Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("DAY00211Service")
public class DAY00211ServiceImpl extends EgovAbstractServiceImpl implements DAY00211Service {
	
	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;
	
	@Autowired
	private PlatformTransactionManager transactionManager;
	
	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	@Override
	public void excel(VariableList inVar, DataSetList inDataset, Map<String, List<Map<String, Object>>> outMap) throws Exception {
		
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);

		try {
			NexacroResult result = new NexacroResult();
			//input variables
			String sicode = inVar.getString("sicode");
			String yyyymm = inVar.getString("yyyymm");
			String[] m_code = inVar.getString("m_code").split(",");

			//결과 저장할 변수
			List<Map<String, Object>> records = null;

			//sql 쿼리에 전달할 파라미터를 map으로 저장
			Map<String, Object> param = new HashMap<>();
			param.put("sicode", sicode);
			param.put("yyyymm", yyyymm);
			param.put("m_code", m_code);
			
			records = commonDao.getList("DAY00211.DAY00211_DS_EXCEL_S", param);

			
			//결과인 records를 outMap에 저장(key는 output1)
			//outMap을 컨트롤러에서 가공 후 result에 저장
			outMap.put("output1", records);

			result.setErrorCode(0);
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.error("[log]ErrorException -> {}", e.getMessage());
			throw e;
		}
	}

}
