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

package egovframework.com.common.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.nexacro.uiadapter17.spring.core.data.support.DataSetToListConverter;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.Variable;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.exception.NexaDaoException;
import egovframework.com.common.service.CommonService;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.common.util.UpdateMetadataUtil;
import egovframework.com.rte.map.DataSetMap;
import egovframework.com.rte.nexacro.NexacroConstant;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("commonService")
public class CommonServiceImpl extends EgovAbstractServiceImpl implements CommonService {

	@Resource(name = "commonDao")
	private CommonDao commonDao;

	// @Resource(name="keySettingUtil")
	// private keySettingUtil keySettingutil;

	@Autowired
	private UpdateMetadataUtil updateMetadataUtil;

	@Resource(name = "DataSetUtil")
	private DataSetUtil dataSetUtil;

	@Autowired
	private PlatformTransactionManager transactionManager;

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	/**
	 * ????????? ??????
	 * 
	 * @param VariableList
	 *            inVar, DataSetList inDataset, VariableList outVar, Map<String,
	 *            List<Map<String, Object>>> outMap
	 * @return
	 */
	@Override
	public void getList(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {

		String[] arySqlId = inVar.getString("sqlId").split(" ");
		String idx = "";

		for (int i = 0; i < arySqlId.length; i++) {
			DataSet inDs = inDataset.get("input" + (i + 1));

			log.info("SQLID : {}", arySqlId[i]);

			List<Map<String, Object>> records;

			if (inDs != null && inDs.getRowCount() > 0) {
				Map<String, Object> map = (Map<String, Object>) dataSetUtil.dataSetToList(inDs).get(0);
				if (!map.containsKey("COMPANY_CD")) {
					map.put("COMPANY_CD", inVar.getString("COMPANY_CD"));
				}
				records = commonDao.getList(arySqlId[i], map);
			} else if (inVar.contains("multicon")) {

				String mcon = inVar.getString("multicon");
				String[] amcon = mcon.split(",");
				ArrayList<String> multicon = new ArrayList<String>(Arrays.asList(amcon));

				HashMap<String, ArrayList<String>> var = new HashMap<String, ArrayList<String>>();
				inVar.set("multicon", multicon);
				records = commonDao.getList(arySqlId[i], dataSetUtil.varToMap(inVar));

				if (inVar.contains("TABLE_NM")) {
					Map<String, Object> paramMap = new HashMap<String, Object>();
					paramMap.put("tableName", inVar.getString("TABLE_NM"));
					idx = (String) commonDao.getMap("getUpdateRow", paramMap).get("OUTVAR");
					outVar.set("outvar", idx);
				}
			} else {
				records = commonDao.getList(arySqlId[i], dataSetUtil.varToMap(inVar));
				if (inVar.contains("TABLENM")) {
					String TableNm = inVar.getString("TABLENM");
					if (!TableNm.equals("FailInitDs")) {
						Map<String, Object> paramMap = new HashMap<String, Object>();
						paramMap.put("tableName", inVar.getString("TABLE_NM"));
						idx = (String) commonDao.getMap("getUpdateRow", paramMap).get("OUTVAR");
						outVar.set("outvar", idx);
					}
				}
			}
			outMap.put("output" + (i + 1), records);
		}
	}

	/**
	 * ????????? ?????? - ????????? ????????? dataset return ????????? - ????????? ?????? ?????????????????? ????????? ??????????????? ??????????????????
	 * 
	 * @param VariableList
	 *            inVar, DataSetList inDataset, VariableList outVar, Map<String,
	 *            List<Map<String, Object>>> outMap
	 * @return
	 */
	@Override
	public void getListPaging(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {

		String[] arySqlId = inVar.getString("sqlId").split(" ");
		String idx = "";

		DataSet inDs = inDataset.get(0);

		log.info("SQLID : {}", arySqlId[0]);

		String outDatasetNameStr = "output1";

		List<Map<String, Object>> records = new ArrayList<Map<String, Object>>();
		Map<String, Object> searchConditionMap = new HashMap<String, Object>();
		if (inDs != null && inDs.getRowCount() > 0) {
			searchConditionMap = (Map<String, Object>) dataSetUtil.dataSetToList(inDs).get(0);
			if (!searchConditionMap.containsKey("COMPANY_CD")) {
				searchConditionMap.put("COMPANY_CD", inVar.getString("COMPANY_CD"));
			}
		} else {
			searchConditionMap = dataSetUtil.varToMap(inVar);
		}
		List<Map<String, Object>> searchData = commonDao.getList(arySqlId[0], searchConditionMap);

		// sct_util.transaction ?????? argument ????????? pageRowCount,pageNo ??? ????????????.
		int iRowCnt = inVar.getInt("pageRowCount");
		int iPageNo = inVar.getInt("pageNo");

		int iTotalRowCount = searchData.size();
		int nPageBlock = (int) Math.ceil((double) iTotalRowCount / iRowCnt);
		int nStartRow = iRowCnt * (iPageNo - 1);

		if (nStartRow > (iTotalRowCount - 1)) {
			iPageNo = 1;
			nStartRow = iRowCnt * (iPageNo - 1);
		}

		int nEndRow = nStartRow + iRowCnt;

		for (int j = nStartRow; j < nEndRow; j++) {
			if (j == searchData.size())
				break;
			records.add(searchData.get(j));
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

		outMap.put(outDatasetNameStr, records);

	}

	/**
	 * ???????????? ??????
	 * 
	 * @param VariableList
	 *            inVar, DataSetList inDataset, VariableList outVar, Map<String,
	 *            List<Map<String, Object>>> outMap
	 * @return
	 */
	@Override
	public void getCallable(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {

		String[] arySqlId = inVar.getString("sqlId").split(" ");

		for (int i = 0; i < arySqlId.length; i++) {
			DataSet inDs = inDataset.get(i);

			log.info("SQLID : {}", arySqlId[i]);
			Map<String, Object> map = null;

			if (inDs != null && inDs.getRowCount() > 0) {
				map = (Map<String, Object>) dataSetUtil.dataSetToList(inDs).get(0);
				map.put("COMPANY_CD", inVar.getString("COMPANY_CD"));
				commonDao.getMap(arySqlId[i], map);
			} else {
				map = dataSetUtil.varToMap(inVar);
				commonDao.getMap(arySqlId[i], map);
			}

			String errCode = (String) map.get("ERR_CODE");
			if (errCode != null && !"0".equals(errCode)) {
				log.error("Call Procedure Error!! [ {} ]", errCode);
			}
			List<Map<String, Object>> outList = new ArrayList<Map<String, Object>>();
			outList.add(map);
			outMap.put("output" + (i + 1), outList);
		}
	}

	/**
	 * Combo ????????? ??????
	 * 
	 * @param VariableList
	 *            inVar, DataSetList inDataset, VariableList outVar, Map<String,
	 *            List<Map<String, Object>>> outMap
	 * @return
	 */
	@Override
	public void getcombo(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {

		String[] arySqlId = (inVar.getString("sqlId")).split(" ");
		List<Map<String, Object>> records;

		for (int i = 0; i < arySqlId.length; i++) {
			Map<String, Object> combomap = dataSetUtil.varToMap(inVar);
			combomap.put("VAR", arySqlId[i].toUpperCase());
			combomap.put("LANG_CD", inVar.getString("DEF_LANG"));

			records = commonDao.getList("getCMCODE", combomap);

			// ???????????? null??? ?????? ??????
			records.add(0, new HashMap<String, Object>());
			outMap.put("output" + (i + 1), records);
		}
	}

	/**
	 * ????????? insert
	 * 
	 * @param VariableList
	 *            inVar, DataSetList inDataset, VariableList outVar, Map<String,
	 *            List<Map<String, Object>>> outMap
	 * @return
	 */
	@Override
	public int insert(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			String sqlId = null;
			String[] arySqlId = inVar.getString("sqlId").split(" ");
			int insertCnt = 0;

			for (int i = 0; i < arySqlId.length; i++) {
				DataSet ds = inDataset.get("input" + (i + 1));
				log.info("SQL ????????? : {}", arySqlId[i]);
				sqlId = arySqlId[i];

				List<Map<String, Object>> list = dataSetUtil.dataSetToList(ds);

				for (int x = 0; x < list.size(); x++) {
					Map<String, Object> map = list.get(x);

					updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));

					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

					if (rowType == DataSet.ROW_TYPE_INSERTED) {
						commonDao.insertData(sqlId, map);
						insertCnt++;
					}
				}
			}
			transactionManager.commit(transactionStatus);
			return insertCnt;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.error("[log]ErrorException -> {}", e.getMessage());
			throw e;
		}
	}

	/**
	 * ????????? update
	 * 
	 * @param VariableList
	 *            inVar, DataSetList inDataset, VariableList outVar, Map<String,
	 *            List<Map<String, Object>>> outMap
	 * @return
	 */
	@Override
	public int update(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			String sqlId = null;
			String[] arySqlId = inVar.getString("sqlId").split(" ");
			int updateCnt = 0;

			for (int i = 0; i < arySqlId.length; i++) {
				DataSet ds = inDataset.get("input" + (i + 1));
				log.info("SQL ????????? : {}", arySqlId[i]);
				sqlId = arySqlId[i];

				List<Map<String, Object>> list = dataSetUtil.dataSetToList(ds);

				for (int x = 0; x < list.size(); x++) {
					Map<String, Object> map = list.get(x);

					updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));

					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

					if (rowType == DataSet.ROW_TYPE_UPDATED) {
						commonDao.updateData(sqlId, map);
						updateCnt++;
					} else if (rowType == DataSet.ROW_TYPE_INSERTED) {

					}
				}
			}
			transactionManager.commit(transactionStatus);
			return updateCnt;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.error("[log]ErrorException -> {}", e.getMessage());
			throw e;
		}
	}

	/**
	 * ????????? delete
	 * 
	 * @param VariableList
	 *            inVar, DataSetList inDataset, VariableList outVar, Map<String,
	 *            List<Map<String, Object>>> outMap
	 * @return int
	 */
	@Override
	public int delete(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {

		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			String sqlId = null;
			String[] arySqlId = inVar.getString("sqlId").split(" ");
			int deleteCnt = 0;

			for (int i = 0; i < arySqlId.length; i++) {
				DataSet ds = inDataset.get("input" + (i + 1));
				log.info("SQL ????????? : {}", arySqlId[i]);
				sqlId = arySqlId[i];

				List<Map<String, Object>> list = dataSetUtil.removedDataSetToList(ds);

				for (int x = 0; x < list.size(); x++) {
					Map<String, Object> map = list.get(x);

					updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));

					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

					if (rowType == DataSet.ROW_TYPE_DELETED) {
						commonDao.deleteData(sqlId, map);
						deleteCnt++;
					}
				}
			}
			transactionManager.commit(transactionStatus);
			return deleteCnt;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.error("[log]ErrorException -> {}", e.getMessage());
			throw e;
		}
	}
	
	/**
	 * ????????? ?????? or ??????
	 * 
	 * @param VariableList
	 *            inVar, DataSetList inDataset, VariableList outVar, Map<String,
	 *            List<Map<String, Object>>> outMap
	 * @return int
	 */
	@Override
	public int save(VariableList inVar, DataSetList inDataset, VariableList outVar, Map<String, List<Map<String, Object>>> outMap) throws Exception 
	{
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try 
		{
			String sqlId = null;	// sqlId ??????
			// sqlId ????????????
			String[] arySqlId = inVar.getString("sqlId").split(" ");
			log.info("arySqlId length : {}", arySqlId.length);
			int saveCnt = 0;		// ??????????????? ????????? ??? ??????
			String sqlFlag = "";	// ??????, ?????? ?????????
			
			// sqlId ???????????? ??????
			for(int i = 0; i < arySqlId.length; i++)
			{
				// sqlId??? ?????? ???????????? ??????
				DataSet ds = inDataset.get("input" + (i+1));
				log.info("sqlId : {}", arySqlId[i]);
				// sqlId ???????????? ex)SMA040CT_DS_HEAD
				sqlId = arySqlId[i];
				
				// ???????????? ??????????????????
				List<Map<String, Object>> list = dataSetUtil.dataSetToList(ds);
				
				// ??????????????? ????????? ?????? ??? ???????????? ??????
				for(int j = 0; j < list.size(); j++)
				{
					// ????????????????????? map????????? ??????
					Map<String, Object> map = list.get(j);
					
					// map??? ???????????? ??????
					List<String> keys = inVar.keyList();
					for(int k = 0; k < keys.size(); k++)
					{
						String key = keys.get(k);
						map.put(key, inVar.getString(key).toString());
					}
					
					// ????????? ??????
					//updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
					
					// ??? ?????? ????????????
					int rowType = ((Integer)map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
					log.debug("rowType : " + rowType);
					
					// insert
					if(rowType == DataSet.ROW_TYPE_INSERTED)
					{
						sqlFlag = "_I";
						// sqlId??? ?????? ???????????? ????????? sqlId??? ???????????? insert ??????
						commonDao.insertData(sqlId + sqlFlag, map);
						saveCnt++;
					}
					// update
					else if(rowType == DataSet.ROW_TYPE_UPDATED)
					{
						sqlFlag = "_U";
						// sqlId??? ?????? ???????????? ????????? sqlId??? ???????????? update ??????
						commonDao.updateData(sqlId + sqlFlag, map);
						saveCnt++;
					}
				}
			}
			// ?????? ??? ???????????? commit
			transactionManager.commit(transactionStatus);
			return saveCnt;
		}
		catch (Exception e)
		{
			// ????????? rollback
			transactionManager.rollback(transactionStatus);
			log.error("[log]ErrorException -> {}", e.getMessage());
			throw e;
		}
	}

	/**
	 * conchk
	 * 
	 * @param VariableList
	 *            inVar, DataSetList inDataset, VariableList outVar, Map<String,
	 *            List<Map<String, Object>>> outMap
	 * @return
	 */
	@Override
	public int conchk(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {

		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);

		try {
			String sqlId = null;
			String forceFlag = null;
			String[] arySqlId = inVar.getString("sqlId").split(" ");
			String[] forceSqlFlag = inVar.getString("forceSqlFlag").split(" ");

			int iRow = 0;

			for (int i = 0; i < arySqlId.length; i++) {
				List<Map<String, Object>> list = dataSetUtil.dataSetToList(inDataset.get("input" + (i + 1)));
				sqlId = arySqlId[i];

				for (int x = 0; x < list.size(); x++) {
					Map<String, Object> map = list.get(x);
					// DataSet??? Parameter??? ??????
					List<String> keys = inVar.keyList();
					for (int z = 0; z < keys.size(); z++) {
						String key = keys.get(z);
						map.put(key, inVar.get(key));
					}

					if (forceSqlFlag[i].toUpperCase().equals("Y")) {
						commonDao.updateData(sqlId, map);
					} else {
						int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
						forceFlag = null;

						if (rowType == DataSet.ROW_TYPE_INSERTED) {
							if (forceSqlFlag[i].toUpperCase().equals("N"))
								forceFlag = "_I";
							commonDao.insertData(sqlId, map);

						} else if (rowType == DataSet.ROW_TYPE_UPDATED) {
							if (forceSqlFlag[i].toUpperCase().equals("N"))
								forceFlag = "_U";

							commonDao.updateData(sqlId, map);
						} else if (rowType == DataSet.ROW_TYPE_DELETED) {
							if (forceSqlFlag[i].equals("N"))
								forceFlag = "_D";

							commonDao.deleteData(sqlId, map);
						}
					}
				}
			}

			String conval = "";
			if (inVar.contains("tablenm") || inVar.contains("companycd")) {
				Map<String, Object> keyCheckMap = commonDao.getMap("pro_dupchk", dataSetUtil.varToMap(inVar));
				conval = (String) keyCheckMap.get("RTN_MSG");
			}

			transactionManager.commit(transactionStatus);
			if (!conval.equals("0")) {
				throw new NexaDaoException("??????????????????:" + conval);
			}

			return iRow;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			throw e;
		}
	}

	/**
	 * ????????????
	 * 
	 * @param VariableList
	 *            inVar, DataSetList inDataset, VariableList outVar, Map<String,
	 *            List<Map<String, Object>>> outMap
	 * @return
	 */
	@Override
	public void renewSession(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {

		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes())
				.getRequest();
		HttpSession session = request.getSession();
		// setAttribute??? ?????????????????? session??? ???????????? ????????????????????? ??????????????? ???????????????
		// ?????? ??????.
		String userLang = (String) session.getAttribute("DEF_LANG");
		String userId = (String) session.getAttribute("USER_ID");
		session.setAttribute("DEF_LANG", userLang);
		session.setAttribute("USER_ID", userId);
	}

	/**
	 * T_CM_SEQUENCE UPDATE
	 * 
	 * @param Map<String,
	 *            Object> map COMPANY_CD, BIZ_CD, SHIP_CD, KEY_CD, SEQ_DATE,
	 *            ISSUE_CODE
	 * @return
	 */
	@Override
	public void setCmSeqeunceNo(Map<String, Object> map) throws Exception {
		try {
			if (map.get("BIZ_CD") == null)
				map.put("BIZ_CD", "");
			if (map.get("SHIP_CD") == null)
				map.put("SHIP_CD", "");
			if (map.get("ISSUE_CODE") == null)
				map.put("ISSUE_CODE", "");
			commonDao.updateData("Common.setCmSequenceNo", map);
		} catch (Exception e) {
			log.error("[log]ErrorException -> {}", e.getMessage());
			throw e;
		}
	}

}
