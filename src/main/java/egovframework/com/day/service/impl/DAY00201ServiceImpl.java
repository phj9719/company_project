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
import egovframework.com.day.service.DAY00201Service;
import egovframework.com.rte.nexacro.NexacroConstant;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("DAY00201Service")
public class DAY00201ServiceImpl extends EgovAbstractServiceImpl implements DAY00201Service {
	
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
			
			DataSet ds_nurse = inDataset.get("input1");
			DataSet ds_dosage_head = inDataset.get("input2");
			DataSet ds_dosage = inDataset.get("input3");
			
			List<Map<String, Object>> nurse_list = dataSetUtil.dataSetToList(ds_nurse);
			List<Map<String, Object>> dosage_head_list = dataSetUtil.dataSetToList(ds_dosage_head);
			List<Map<String, Object>> dosage_list = dataSetUtil.dataSetToList(ds_dosage);
			Map<String, Object> nurse_map = nurse_list.get(0);
			Map<String, Object> dosage_head_map = dosage_head_list.get(0);

			String flag = inVar.getString("flag");
			String nurse_flag = flag.substring(0, 1);
			String dosage_flag = flag.substring(1, 2);
			
			String n_number = nurse_map.get("n_number").toString();
			String donumber = dosage_head_map.get("donumber").toString();
			
			if (dosage_flag.equals("I") || dosage_flag.equals("U")) {	// kmdosage, kmnurse 테이블에 입력
				// kmdosage 테이블 작업
				if (!donumber.equals("")) {	// UPDATE도 삭제후 INSERT로 처리
					commonDao.deleteData("DAY00201_DS_DOSAGE_D", dosage_head_map);
				}
				dosage_head_map.put("list", dosage_list);	// 투약정보 행들은 <foreach>로 쿼리내로 삽입됨
				
				commonDao.insertData("DAY00201.DAY00201_DS_DOSAGE_I", dosage_head_map);
				
				// kmnurse 테이블 작업
				if (!n_number.equals("")) {	// UPDATE도 삭제후 INSERT로 처리
					commonDao.deleteData("DAY00201_DS_NURSE_D", nurse_map);
				}
				
				commonDao.insertData("DAY00201.DAY00201_DS_NURSE_I", nurse_map);
			} else if (dosage_flag.equals("D")) {
				commonDao.deleteData("DAY00201_DS_DOSAGE_D", dosage_head_map);
				//kmdosage 삭제시 kmnurse도 삭제해야 하는지???
			} else if (dosage_flag.equals("N")) {	// NO CHANGE
				if (nurse_flag.equals("I") || nurse_flag.equals("U")) {
					// kmnurse 테이블 작업
					if (!n_number.equals("")) {	// UPDATE도 삭제후 INSERT로 처리
						commonDao.deleteData("DAY00201_DS_NURSE_D", nurse_map);
					}
					
					commonDao.insertData("DAY00201.DAY00201_DS_NURSE_I", nurse_map);					
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
