/************************************************************************************
 * Argus System Service
 * Copyright(c) SCT
 * 
 * 1.Program  			: Common Service
 * 2.File Name			: CMServiceP.java
 * 3.Developer			: JL
 * 4.Development Date	: 2017-08-25
 * 5.Version			: 0.1
 * 6.Note				: 
 * 7.History		    :
*************************************************************************************/

package egovframework.com.cm.service.impl;

import java.util.ArrayList;
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

import egovframework.com.cm.service.CMA340QRService;
import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.service.CommonService;
import egovframework.com.common.service.TransferService;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.common.util.LanguageUtil;
import egovframework.com.common.util.TransferUtil;
import egovframework.com.common.util.UpdateMetadataUtil;
import egovframework.com.rte.nexacro.NexacroConstant;

@Service("CMA340QRService")
public class CMA340QRServiceImpl implements CMA340QRService {

	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Autowired
	private UpdateMetadataUtil updateMetadataUtil;
	
	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;
	
	@Resource(name="LanguageUtil")
	private LanguageUtil languageUtil;
	
	@Resource(name="commonService")
	private CommonService commonService;
	
	@Autowired
	private PlatformTransactionManager transactionManager;

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());
	
	// 접수
	@Override
	public NexacroResult receive(VariableList inVar, DataSetList inDataset) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			NexacroResult result = new NexacroResult();
			
			DataSet dsList = inDataset.get("input1");
			
			if(dsList.getRowCount()!=0) {
				List<Map<String, Object>> list = dataSetUtil.dataSetToList(dsList);
				for(int i=0; i<list.size(); i++) {
					Map<String, Object> map = list.get(i);
					String lChk = (String)map.get("CHK");
					if("1".equals(lChk)) {
						updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
						
						// T_GR_APPL_LINE UPDATE
						commonDao.updateData("CMA340QR.CMA340QR_RECV_U", map);
					}
				}
			}
			
			transactionManager.commit(transactionStatus);
			result.setErrorCode(0);
			return result;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.debug("[log]ErrorException -> "+ e.getMessage());
			throw e;
		}
	}
	
	// 보관
	@Override
	public NexacroResult save(VariableList inVar, DataSetList inDataset) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			NexacroResult result = new NexacroResult();
			
			DataSet dsList = inDataset.get("input1");
			
			if(dsList.getRowCount()!=0) {
				List<Map<String, Object>> list = dataSetUtil.dataSetToList(dsList);
				for(int i=0; i<list.size(); i++) {
					Map<String, Object> map = list.get(i);
					String lChk = (String)map.get("CHK");
					if("1".equals(lChk)) {
						updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
						
						// T_GR_APPL_LINE UPDATE
						commonDao.updateData("CMA340QR.CMA340QR_SAVE_U", map);
					}
				}
			}
			
			transactionManager.commit(transactionStatus);
			result.setErrorCode(0);
			return result;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.debug("[log]ErrorException -> "+ e.getMessage());
			throw e;
		}
	}
	
}
