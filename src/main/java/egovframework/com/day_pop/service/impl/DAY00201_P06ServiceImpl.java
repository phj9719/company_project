package egovframework.com.day_pop.service.impl;

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
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.file.FileUtil;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.day_pop.service.DAY00201_P06Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("DAY00201_P06Service")
public class DAY00201_P06ServiceImpl extends EgovAbstractServiceImpl implements DAY00201_P06Service {
	
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
	public NexacroResult save(VariableList inVar, DataSetList inDataSet) throws Exception {
		
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			NexacroResult result = new NexacroResult();
			
			DataSet ds_save = inDataSet.get("input1");
			List<Map<String, Object>> list = dataSetUtil.dataSetToList(ds_save);
			for(int i=0;i<list.size();i++) {
				Map<String, Object> map = list.get(i);
				Map<String, Object> param = new HashMap<>();
				//?????? ???????????? ????????? ???????????? ?????? param ?????? ??????
				param.put("sicode", map.get("sicode"));
				param.put("n_code", map.get("m_code"));
				param.put("n_nalja", map.get("n_nalja"));
				
		
				//??????
				List<Map<String, Object>> records = commonDao.getList("DAY00201_P06.DAY00201_P06_DS_RECORD_LIST_S", param);
				
				// ?????? ???????????? ?????? ?????? ????????? ????????? ????????? UPDATE, ????????? INSERT
				if (records.size()>0) {
					//???????????? ???????????? n_number?????? ????????????
					//n_number??? auto increment?????? pk???(where????????? ???????????? ??????)
					int n_number = Integer.parseInt(records.get(0).get("n_number").toString());
					map.put("n_number", n_number);
					commonDao.updateData("DAY00201_P06.DAY00201_P06_DS_SAVE_U", map);
				} else {
					commonDao.insertData("DAY00201_P06.DAY00201_P06_DS_SAVE_I", map);
				}
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

	
}
