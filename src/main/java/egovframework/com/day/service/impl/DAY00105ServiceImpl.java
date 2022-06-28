package egovframework.com.day.service.impl;

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
import egovframework.com.day.service.DAY00105Service;
import egovframework.com.rte.nexacro.NexacroConstant;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("DAY00105Service")
public class DAY00105ServiceImpl extends EgovAbstractServiceImpl implements DAY00105Service {
	
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
			
			DataSet ds_item = inDataset.get("input1");
			List<Map<String, Object>> save_list = dataSetUtil.dataSetToList(ds_item); // 화면에서 가져온 리스트
			
			Map<String, Object> varMap = dataSetUtil.varToMap(inVar);
			List<Map<String, Object>> dbList = commonDao.getList("DAY00105_P01.DAY00105_P01_DS_ITEM_NOW_S", varMap); // DB에서 새로 가져온 리스트
 
			ListIterator<Map<String,Object>> listIterator = dbList.listIterator(dbList.size());
			
			while (listIterator.hasPrevious()) {
				Map<String,Object> dbMap = listIterator.previous();
				String sicode = dbMap.get("sicode").toString();
				String ba_code = dbMap.get("ba_code").toString();
				String ba_nalja = dbMap.get("ba_nalja").toString();
				
				ListIterator<Map<String,Object>> iter = save_list.listIterator(save_list.size());
				
				while (iter.hasPrevious()) {
					Map<String,Object> svMap = iter.previous();
					String sv_sicode = svMap.get("sicode").toString();
					String sv_ba_code = svMap.get("ba_code").toString();
					String sv_ba_nalja = svMap.get("ba_nalja").toString();
					
					// 1. 양 리스트에서 일치하는 항목은 변경되지 않은 것이므로 그냥 양쪽 리스트에서 제거
					if (Objects.equals(sicode, sv_sicode) 
							&& Objects.equals(ba_code, sv_ba_code) 
							&& Objects.equals(ba_nalja, sv_ba_nalja)) {
						
						iter.remove();
						listIterator.remove();

						break;
					}
				}
			}
			
			// 2. dbList에만 존재하는 항목은 delete
			for (Map<String,Object> dbMap : dbList) {
				commonDao.deleteData("DAY00105_P01.DAY00105_P01_DS_ITEM_D", dbMap);
			}
			// 3. save_list에만 존재하는 항목은 insert
			for (Map<String,Object> svMap : save_list) {				
				commonDao.insertData("DAY00105_P01.DAY00105_P01_DS_ITEM_I", svMap);
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
