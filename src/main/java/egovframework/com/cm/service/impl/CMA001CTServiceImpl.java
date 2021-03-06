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

import egovframework.com.cm.service.CMA001CTService;
import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.common.util.LanguageUtil;
import egovframework.com.common.util.UpdateMetadataUtil;
import egovframework.com.rte.nexacro.NexacroConstant;

@Service("CMA001CTService")
public class CMA001CTServiceImpl implements CMA001CTService {

	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Autowired
	private UpdateMetadataUtil updateMetadataUtil;
	
	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;
	
	@Resource(name="LanguageUtil")
	private LanguageUtil languageUtil;
	
	@Autowired
	private PlatformTransactionManager transactionManager;

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());
	
	@Override
	public NexacroResult save(VariableList inVar, DataSetList inDataset) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			NexacroResult result = new NexacroResult();
			
			DataSet dsNotice 	= inDataset.get("ds_notice");
			DataSet dsReadUser 	= inDataset.get("ds_read_user");
			
			//????????? -> list
			List<Map<String, Object>> listNotice = dataSetUtil.dataSetToList(dsNotice);
			listNotice.addAll(dataSetUtil.removedDataSetToList(dsNotice));
			
			//????????? -> list
			List<Map<String, Object>> listReadUser = dataSetUtil.dataSetToList(dsReadUser);
			listReadUser.addAll(dataSetUtil.removedDataSetToList(dsReadUser));
			
			//????????? rowcount ??? 0????????? ???????????? ??????????????????
			if(listNotice.size() == 0)
			{
				//????????? ??????
				saveReadUser(listReadUser);
				transactionManager.commit(transactionStatus);
				result.setErrorCode(0);
				return result;
			}
			
			//??????????????? ????????? ??????, ?????? ?????? - 0?????? INDEX
			Map<String, Object> mapNotice = listNotice.get(0);
			updateMetadataUtil.setAuditData(mapNotice, inVar.getString("REG_PGM_ID"));
			
			int rowTypeNotice = ((Integer) mapNotice.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if(rowTypeNotice == DataSet.ROW_TYPE_INSERTED)
			{
				//????????? ?????? ?????? (MAX+1)
				int docNo = commonDao.getInt("CMA001CT.CMA001CT_GET_DOC_NO", mapNotice);
				mapNotice.put("DOC_NO", docNo);
				
				//????????? ??????
				commonDao.insertData("CMA001CT.CMA001CT_DS_NOTICE_I", mapNotice);
				
				//????????? ??????
				for(int i=0; i<listReadUser.size(); i++) listReadUser.get(i).put("DOC_NO", docNo);
				saveReadUser(listReadUser);
			}
			else if (rowTypeNotice == DataSet.ROW_TYPE_UPDATED)
			{
				//????????? ??????
				commonDao.updateData("CMA001CT.CMA001CT_DS_NOTICE_U", mapNotice);
				
				//????????? ??????
				saveReadUser(listReadUser);
			}
			else if (rowTypeNotice == DataSet.ROW_TYPE_DELETED)
			{
				//????????? ??????
				commonDao.deleteData("CMA001CT.CMA001CT_DS_NOTICE_D", mapNotice);
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
	
	// ????????? ??????
	public void saveReadUser(List<Map<String, Object>> listReadUser) throws Exception
	{
		//????????? ??????
		for(int i=0; i<listReadUser.size(); i++)
		{
			Map<String, Object> mapReadUser = listReadUser.get(i); 
			int rowTypeReadUser = ((Integer) mapReadUser.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			if(rowTypeReadUser == DataSet.ROW_TYPE_INSERTED)		commonDao.insertData("CMA001CT.CMA001CT_DS_READ_USER_I", mapReadUser);
			else if(rowTypeReadUser == DataSet.ROW_TYPE_UPDATED)	commonDao.updateData("CMA001CT.CMA001CT_DS_READ_USER_U", mapReadUser);
			else if(rowTypeReadUser == DataSet.ROW_TYPE_DELETED)	commonDao.deleteData("CMA001CT.CMA001CT_DS_READ_USER_D", mapReadUser);
		}
	}
	
	@Override
	public NexacroResult readUserInfoUpdate(VariableList inVar) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			NexacroResult result = new NexacroResult();
			
			Map<String, Object> mapReadUser = dataSetUtil.varToMap(inVar);

			commonDao.updateData("CMA001CT.CMA001CT_READ_USER_INFO_U", mapReadUser);
			
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
