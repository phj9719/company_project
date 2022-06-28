package egovframework.com.day_pop.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import java.util.Objects;

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
import egovframework.com.day_pop.service.DAY00202PPService;
import egovframework.com.rte.nexacro.NexacroConstant;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("DAY00202PPService")
public class DAY00202PPServiceImpl extends EgovAbstractServiceImpl implements DAY00202PPService {
	
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
			
			DataSet ds_list = inDataset.get("input1");
			List<Map<String, Object>> save_list = dataSetUtil.dataSetToList(ds_list);
			Map<String, Object> save_map = save_list.get(0);
			
			String n_number = save_map.get("n_number").toString();
			
			if ("0000000".equals(n_number)) {	// kmnurse에 항목이 존재하지 않는 경우 insert
				commonDao.insertData("DAY00202_P01.DAY00202_P01_DS_LIST_I", save_map);
			} else {	// kmnurse에 항목이 존재하는 경우 update
				commonDao.updateData("DAY00202_P01.DAY00202_P01_DS_LIST_U", save_map);
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
