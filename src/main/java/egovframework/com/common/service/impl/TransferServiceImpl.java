package egovframework.com.common.service.impl;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.util.StringUtils;
import org.springframework.web.context.ContextLoader;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.request.async.DeferredResult;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.common.constant.CommonConstant;
import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.domain.TransferResponse;
import egovframework.com.common.service.TransferService;
import egovframework.com.common.service.TransferTaskService;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.common.util.TimeZoneUtil;
import egovframework.com.common.util.TransferUtil;
import egovframework.com.common.util.UpdateMetadataUtil;

@Service("TransferService")
public class TransferServiceImpl implements TransferService {
	private Logger log = LoggerFactory.getLogger(TransferServiceImpl.class);
	
	@Resource(name="commonDao")
	private CommonDao commonDao;

	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;
	
	@Resource(name="TransferUtil")
	private TransferUtil transferUtil;
	
	@Resource(name="TimeZoneUtil")
	TimeZoneUtil timeZoneUtil;
	
	@Autowired
	private UpdateMetadataUtil updateMetadataUtil;
	
	@Autowired
	private PlatformTransactionManager transactionManager;
	
	private final static String STATUS_CD_REGIST = "01";			//????????????
	private final static String STATUS_CD_SEND_REQ = "02";			//???????????????
	private final static String STATUS_CD_SEND_REQ_FAIL = "03";		//??????????????????
	private final static String STATUS_CD_SEND_REQ_SUCCESS = "04";	//??????????????????
	private final static String STATUS_CD_SEND_PROCESS = "05";		//??????????????? (?????????)
	private final static String STATUS_CD_RECV_COMPLETE = "06";			//????????????
	private final static String STATUS_CD_RECVED_TASK_PROCESS = "07";	//??????????????????
	private final static String STATUS_CD_RECVED_TASK_FAIL = "08";		//?????????????????????
	private final static String STATUS_CD_TRANS_COMPLETE = "09";		//???????????????, ???????????????, ????????????
	
	private final static String STATUS_CD_REGIST2 = "01";				//????????????
	private final static String STATUS_CD_SEND_REQ_FAIL2 = "03";		// ????????????
	private final static String STATUS_CD_SEND_REQ_SUCCESS2 = "06";		// ????????????
	
	/**
	 * ?????? ???????????? : ????????? Task
	 * ?????? ????????? ?????? => ????????????
	 */
	@Override
	public Map<String, Object> sendData(VariableList inVar, DataSetList inDataset) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		Map<String, Object> resultMap = new HashMap<String, Object>();
		List<Map<String, Object>> sendDataList = new ArrayList<Map<String, Object>>();
		log.debug(">>>>>>>");
		try {
		
			DataSet ds = inDataset.get("input1");
			List<Map<String, Object>> destVesselList = dataSetUtil.dataSetToList(ds);//????????? ?????? ??????
			List<Map<String, Object>> sendDetailList = null;
			TransferTaskService transferTaskService = null;
			
			String getDataMode = inVar.getString("GET_DATA_MODE");	//1:??????(????????? ?????? ?????????), 2:input2??? ????????? ??????, 3:??????(????????? ???????????????)
			String companyCd = inVar.getString("COMPANY_CD");
			String transJob  = inVar.getString("TRANS_JOB");
			String programId = inVar.getString("PGM_ID");
			
			//String destName  = inVar.getString("DESTINATION");
			// ????????? ?????? ??????
			if (destVesselList == null || destVesselList.size() == 0) {
				resultMap.put("resultCd", CommonConstant.PARAM_ERROR);
				return resultMap;
			} else if (transJob == null || transJob.length() == 0) {
				resultMap.put("resultCd", CommonConstant.PARAM_ERROR);
				return resultMap;
			}
			
			String myVesselCd = transferUtil.getMyVesselCd(); //????????? ????????? ????????????
			
			//?????? ????????? ????????? => ????????? ??????
			if(getDataMode == null || getDataMode.length() == 0  || "1".equals(getDataMode) || "3".equals(getDataMode) || "4".equals(getDataMode)) {
				if (getDataMode == null || getDataMode.length() == 0) {
					getDataMode = "1";
				}
					
				String serviceName = commonDao.getString("SM_TRANS.GET_TRANS_JOB_SERVICE", transJob);
				log.debug("serviceName : " + serviceName);
				
				if (serviceName == null || serviceName.length() == 0) {
					resultMap.put("resultCd", CommonConstant.NOT_FIND_SERVICE);
					return resultMap;
				}
				
				WebApplicationContext context = ContextLoader.getCurrentWebApplicationContext();
				transferTaskService = (TransferTaskService)context.getBean(serviceName);
				if (transferTaskService == null) {
					resultMap.put("resultCd", CommonConstant.NOT_FIND_SERVICE);
					return resultMap;
				}
				
				
				if("3".equals(getDataMode)) {
					sendDetailList = transferTaskService.createSendDetailData(companyCd);
				}
				
				if("4".equals(getDataMode)) { 
					sendDetailList = transferTaskService.createSendDetailData(companyCd,myVesselCd);
					log.debug("!!!!!!!!!!");
				}
				
			} else if ("2".equals(getDataMode)){
				//?????? ???????????? ??????
				ds = inDataset.get("input2");
				sendDetailList = dataSetUtil.dataSetToList(ds);
				
				// ????????? ?????? ??????
				if (sendDetailList == null || sendDetailList.size() == 0) {
					resultMap.put("resultCd", CommonConstant.NODATA);
					return resultMap;
				}
			}
			
			
			// TRANS_ID ??????
			// TRANS_ID??? ?????? ?????? ?????? ????????? ???????????? ??????. (??????, ????????? ????????? ?????? ???????????? ??????)
			String transId = commonDao.getString("SM_TRANS.SEARCH_TRANS_ID", companyCd);
			String transSeq = "1";
			
			// 1. ????????? DB insert - T_SM_TRANS_MAIN, T_SM_TRANS_DETAIL, T_SM_TRANS_HISTORY
			// 2. DB ????????? ?????? ???, http Protocol??? ???????????? ?????? ??????
			int intRowIndex = 0;
			List<Map<String, Object>> detailList = null;
			for (Map<String, Object> destVessel : destVesselList) {
				String destVesselCd = (String)destVessel.get("VS_CD");
				
				if ( "1".equals(getDataMode) && transferTaskService != null) {
					//???????????? ???????????? ?????? : ????????? ????????? ??????
					sendDetailList = transferTaskService.createSendDetailData(companyCd, destVesselCd);
					if (sendDetailList == null || sendDetailList.size() == 0) {
						continue;
					}
				}
				
				
				/* T_SM_SEND_MAIN??? ?????? */
				Map<String, Object> mapSendMain = new HashMap<String, Object>();
				mapSendMain.put("COMPANY_CD" , companyCd);
				mapSendMain.put("TRANS_ID"   , transId);
				mapSendMain.put("DESTINATION", destVesselCd);
				mapSendMain.put("TRANS_JOB"  , transJob);
				mapSendMain.put("PROGRAM_ID" , programId);
				mapSendMain.put("DEPARTURE"  , myVesselCd);
				mapSendMain.put("TRANS_STATUS", "01");			// ???????????? : 01(??????)

				updateMetadataUtil.setAuditData(mapSendMain, inVar.getString("REG_PGM_ID"));
				
				// T_SM_TRANS_MAIN, T_SM_TRANS_DETAIL, T_SM_TRANS_HISTORY??? insert
				commonDao.insertData("SM_TRANS.INSERT_SEND_MAIN", mapSendMain);
				
				mapSendMain.put("TRANS_SEQ"  , transSeq);
				commonDao.insertData("SM_TRANS.INSERT_SEND_HIST", mapSendMain);
				
				detailList = new ArrayList<Map<String, Object>>();
				for (Map<String, Object> mapSendDetail : sendDetailList) {
					mapSendDetail.put("COMPANY_CD", companyCd);
					mapSendDetail.put("TRANS_ID"  , transId);
					mapSendDetail.put("DESTINATION"  , destVesselCd);
					mapSendDetail.put("ROW_INDEX" , intRowIndex);
					mapSendDetail.put("TRANS_STATUS" ,  STATUS_CD_REGIST);	// ???????????? : ????????????
					mapSendDetail.put("DATA_MODE" ,  getDataMode);	// ???????????? 

					// T_SM_SEND_DETAIL??? Table Data Insert
					commonDao.insertData("SM_TRANS.INSERT_SEND_DETAIL", mapSendDetail);
					intRowIndex++;
					
					detailList.add(new HashMap<String, Object>(mapSendDetail));
				}
				
				mapSendMain.put("detailList", detailList);
				log.debug(">>>"+mapSendMain.toString());
				sendDataList.add(mapSendMain);
				
			} //end of for
			
			//?????? ???????????? ?????? ???
			if (sendDataList.size() == 0) {
				resultMap.put("resultCd", CommonConstant.NODATA);
				return resultMap;
			}
			
			//?????? ????????? Data??? ??????
			transactionManager.commit(transactionStatus);
				
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
			throw e;
		}
		
		resultMap.put("sendDataList", sendDataList);
		resultMap.put("resultCd", CommonConstant.SUCCESS);
		return resultMap;
	}
	
	
	
	/**
	 * ????????? ?????? => Asyn(?????????)??????
	 * @param destVesselCd	: ????????? ????????????
	 * @param sendData		: ?????? ?????????
	 */
	@Async("threadPoolTaskExecutor")
	public void sendDataReq(String destVesselCd, Map<String, Object> sendData) throws Exception {
		log.debug("sendDataReq called");
		mapPrint(sendData);

		//??????????????? ?????? ?????? : ???????????????
		updateStatusSendMainDetail(sendData, STATUS_CD_SEND_REQ, null);
		
		//?????? ??????
		TransferResponse transferResponse = transferUtil.IF_sendReq(destVesselCd, sendData);
		
		log.debug("?????? ?????? destVesselCd : " + destVesselCd);
		log.debug("?????? ?????? " + transferResponse.getResponseResult().toString());
		
		log.debug("?????? ??????>>>>> " + transferResponse.toString());
		
		//???????????? ?????? ?????? ??????
		if(transferResponse.isSuccess()) {
			updateStatusSendMainDetail(sendData, STATUS_CD_SEND_REQ_SUCCESS, null);
		} else {
			updateStatusSendMainDetail(sendData, STATUS_CD_SEND_REQ_FAIL, transferResponse.getFailMessage());
		}
	}
	
	
	//@Async("threadPoolTaskExecutor")
	public String sendDataReq2(Map<String, Object> sendData) throws Exception {
		
		log.debug("?????? ?????? ??????"+sendData.toString());
		Map<String, Object> sendMap = commonDao.getMap("SM_TRANS.GET_SEND_MAIN_S", sendData);
		
		// ???????????? his ??????
		updateStatusSendMainSave(sendMap, STATUS_CD_REGIST2, null, true);
		
		log.debug("?????? ??????");
		TransferResponse transferResponse = transferUtil.IF_sendRequest(sendMap);
		
		
		log.debug("?????? ?????? " + transferResponse.getResponseResult().toString());
		
		//???????????? ?????? ?????? ??????
		
		if(transferResponse.isSuccess()) {
			log.debug("??????>>>>>");
			updateStatusSendMainSave(sendMap, STATUS_CD_SEND_REQ_SUCCESS2, null, false);
			return STATUS_CD_SEND_REQ_SUCCESS2;
		} else {
			log.debug("??????>>>>>");
			updateStatusSendMainSave(sendMap, STATUS_CD_SEND_REQ_FAIL2, transferResponse.getFailMessage(),false);
			return STATUS_CD_SEND_REQ_FAIL2;
		}
		
	}
	 
	@Async("threadPoolTaskExecutor")
	public void sendDataReq3(Map<String, Object> sendData) throws Exception {
		
		log.debug("?????? ?????? ??????");
		Map<String, Object> sendMap = commonDao.getMap("SM_TRANS.GET_SEND_MAIN_S", sendData);
		
		
		log.debug("?????? ??????");
		
		DeferredResult<String> dr = transferUtil.IF_sendReq3(sendMap);
		
		log.debug(">>>>ddd>>> "+dr.getResult());
		log.debug(">>>>ddd>>> "+dr);
		log.debug(">>>>ddd>>> "+dr.toString());
		
	}
	
	/**
	 * ????????? ?????? => ??????
	 * @param sendList	: ?????? ????????? LIST
	 */
	@Async("threadPoolTaskExecutor")
	public void sendDataRequest(List<Map<String, Object>> sendList) throws Exception {
		
		//sendList
		for(int i=0; i<sendList.size(); i++) {
			Map<String, Object> map = sendList.get(i);
			
			//Map<String, Object> sendMap = commonDao.getMap("SM_TRANS.GET_SEND_MAIN_S", map);
			
			// SEND HISTORY ?????? ??????
			updateStatusSendMainSave(map, STATUS_CD_REGIST2, null,true);
			
			// ???????????? ??????????????? ??????
			List<Map<String, Object>> preList = commonDao.getList("SM_TRANS.GET_PRE_SEND_MAIN_S", map);
			
			if(preList.size() > 0) {
				
				for(int j=0; j<preList.size(); j++) {
					
					Map<String, Object> sendMap = preList.get(j);
					
					log.debug("???????????? ?????? ?????? ??????"+sendMap.toString());
					
					// ???????????? HISTORY ??????
					//updateStatusSendMainSave(sendMap, STATUS_CD_REGIST2, null);
					
					
					
					log.debug("?????? ??????");
					TransferResponse transferResponse = transferUtil.IF_sendRequest(sendMap);
					log.debug("?????? ?????? " + transferResponse.getResponseResult().toString());
					
					
					//DeferredResult<String> dr = transferUtil.IF_sendReq3(sendMap);
					// 001 : ??????  002:?????? 003:IP??????
					
					//log.debug(">>>>ddd>>> dr "+dr);
					//log.debug(">>>>ddd>>> toString "+dr.toString());
					//log.debug(">>>>ddd>>> getResult "+dr.getResult());
					
					
					//???????????? ?????? ?????? ??????
					if(transferResponse.isSuccess()) {
						// ???????????? SEND_MAIN, SEND_HISTORY ??????
						updateStatusSendMainSave(sendMap, STATUS_CD_SEND_REQ_SUCCESS2, null,false);
					} else {
						// ???????????? SEND_MAIN, SEND_HISTORY ??????
						updateStatusSendMainSave(sendMap, STATUS_CD_SEND_REQ_FAIL2, transferResponse.getFailMessage(),false);
						log.debug("-----------------stop");
						// ????????? ????????? ?????? ??????
						break;
					}
					
					
				}
			}
		}
	}
	
	/**
	 * ????????? ?????? => ??????
	 * @param sendMap	: ?????? ?????????
	 * sendMainBatch???
	 */
	public String sendDataBatchReq(Map<String, Object> sendMap) throws Exception {
		
		// ???????????? HISTORY ??????
		//updateStatusSendMainSave(sendMap, STATUS_CD_REGIST2, null);
		
		log.debug("?????? ??????");
		TransferResponse transferResponse = transferUtil.IF_sendRequest(sendMap);
		
		
		log.debug("?????? ?????? " + transferResponse.getResponseResult().toString());
		
		//???????????? ?????? ?????? ??????
		
		if(transferResponse.isSuccess()) {
			updateStatusSendMainSave(sendMap, STATUS_CD_SEND_REQ_SUCCESS2, null, false);
			return STATUS_CD_SEND_REQ_SUCCESS2;
			
		} else {
			updateStatusSendMainSave(sendMap, STATUS_CD_SEND_REQ_FAIL2, transferResponse.getFailMessage(), false);
			return STATUS_CD_SEND_REQ_FAIL2;
		}
	}
	
	
	
	/**
	 * ????????? ?????? => ??????
	 * @param sendMap	: ?????? ?????????
	 * sendMainBatch???
	 */
	public String sendReveiveDataBatchReq(Map<String, Object> sendMap) throws Exception {
		
		// ???????????? HISTORY ??????
		//updateStatusSendMainSave(sendMap, STATUS_CD_REGIST2, null);
		
		log.debug("?????? ??????");
		TransferResponse transferResponse = transferUtil.IF_sendReceiveRequest(sendMap);
		
		
		log.debug("?????? ?????? " + transferResponse.getResponseResult().toString());
		
		//???????????? ?????? ?????? ??????
		
		if(transferResponse.isSuccess()) {
			updateStatusSendReceiveMainSave(sendMap, STATUS_CD_SEND_REQ_SUCCESS2, null);
			return STATUS_CD_SEND_REQ_SUCCESS2;
			
		} else {
			//updateStatusSendMainSave(sendMap, STATUS_CD_SEND_REQ_FAIL2, transferResponse.getFailMessage());
			return STATUS_CD_SEND_REQ_FAIL2;
		}
	}
	/**
	 * ?????? ?????? ?????? ?????? : ????????? Task
	 * ?????? ????????? : T_SM_TRANS_MAIN, T_SM_TRANS_DETAIL, T_SM_TRANS_HISTORY
	 * T_SM_TRANS_DETAIL ??? ?????? TRANS_ID??? ?????? ????????? ??????
	 * @param senData	: ?????? ?????? ??? ?????? ??????
	 * @param StatusCd	: ??????????????? ?????? ??????
	 * @param remark	: T_SM_TRANS_HISTORY ????????? ?????? ??????, ?????? ?????? ??? ?????? ???
	 */
	private void updateStatusSendMainDetail(Map<String, Object> senData, String StatusCd, String remark) {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		//?????? ???????????? Status??? ????????? Data??? ?????? 
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("COMPANY_CD", senData.get("COMPANY_CD"));
		paramMap.put("TRANS_ID", senData.get("TRANS_ID"));
		paramMap.put("DESTINATION", senData.get("DESTINATION"));
		paramMap.put("TRANS_SEQ", senData.get("TRANS_SEQ"));
		paramMap.put("TRANS_STATUS", StatusCd);
		
		ArrayList times = timeZoneUtil.getTimes("ko_KR", "YYMMDD", "NUMBER", "-", "HHMMSS","YES");
		paramMap.put("MOD_DT_LOC", times.get(1));
		paramMap.put("MOD_DT_CURR", times.get(0));
		paramMap.put("MOD_IP", senData.get("MOD_IP"));
		paramMap.put("MOD_USER", senData.get("MOD_USER"));
		paramMap.put("MOD_PGM_ID", senData.get("MOD_PGM_ID"));
		paramMap.put("MOD_DT", new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis())));
		
		try {
			commonDao.updateData("SM_TRANS.UPDATE_SEND_MAIN", paramMap);
			
			if (remark != null && remark.length() > 0) {
				paramMap.put("REMARK", remark);
			}
			commonDao.insertData("SM_TRANS.INSERT_SEND_HIST", paramMap);
			
//			List<Map<String, Object>> detailList = (List<Map<String, Object>>)senData.get("detailList");
			//T_SM_TRANS_DETAIL ??? ?????? TRANS_ID??? ?????? ????????? ??????
			commonDao.updateData("SM_TRANS.UPDATE_SEND_DETAIL", paramMap);
			
			transactionManager.commit(transactionStatus);
			
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
		}
	}
	
	/**
	 * ????????? ?????? => ??????
	 * ?????? ????????? ??? HISTORY ??????
	 * 
	 */
	private void updateStatusSendMainSave(Map<String, Object> senData, String StatusCd, String remark, boolean nowSend ) {
		/*
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		*/
		//
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition(TransactionDefinition.PROPAGATION_NESTED);
		//TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
	    TransactionStatus transactionStatusNested = transactionManager.getTransaction(transactionDefinition);
	    
		//?????? ???????????? Status??? ????????? Data??? ?????? 
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("COMPANY_CD", senData.get("COMPANY_CD"));
		paramMap.put("PLANT_CD", senData.get("PLANT_CD"));
		paramMap.put("TRANS_ID", senData.get("TRANS_ID"));
		paramMap.put("DESTINATION", senData.get("DESTINATION"));
		paramMap.put("TRANS_STATUS", StatusCd);
		
		
		
		ArrayList times = timeZoneUtil.getTimes("ko_KR", "YYMMDD", "NUMBER", "-", "HHMMSS","YES");
		paramMap.put("REG_DT_LOC", times.get(1));
		paramMap.put("REG_DT_CURR", times.get(0));
		paramMap.put("REG_IP", senData.get("REG_IP"));
		paramMap.put("REG_USER", senData.get("REG_USER"));
		paramMap.put("REG_PGM_ID", senData.get("REG_PGM_ID"));
		paramMap.put("REG_DT", new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis())));
		
		paramMap.put("MOD_DT_LOC", times.get(1));
		paramMap.put("MOD_DT_CURR", times.get(0));
		paramMap.put("MOD_IP", senData.get("REG_IP"));
		paramMap.put("MOD_USER", senData.get("REG_USER"));
		paramMap.put("MOD_PGM_ID", senData.get("REG_PGM_ID"));
		paramMap.put("MOD_DT", new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis())));
		
		try {
			
			//if(!StatusCd.equals("01")) {
			if(!nowSend) commonDao.updateData("SM_TRANS.UPDATE_SEND_MAIN_U", paramMap);
			//}
			
			if (remark != null && remark.length() > 0) {
				paramMap.put("REMARK", remark);
			}
			
			commonDao.insertData("SM_TRANS.INSERT_SEND_HIST_I", paramMap);
			
			transactionManager.commit(transactionStatusNested);
			
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatusNested);
		}
	}
	
	/**
	 * ????????? ?????? => ??????
	 * ?????? ????????? ??? HISTORY ??????
	 * 
	 */
	private void updateStatusSendReceiveMainSave(Map<String, Object> senData, String StatusCd, String remark) {
		/*
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		*/
		//
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition(TransactionDefinition.PROPAGATION_NESTED);
		//TransactionDefinition transactionDefinition = new DefaultTransactionDefinition(TransactionDefinition.PROPAGATION_REQUIRES_NEW);
	    TransactionStatus transactionStatusNested = transactionManager.getTransaction(transactionDefinition);
	    
		//?????? ???????????? Status??? ????????? Data??? ?????? 
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("COMPANY_CD", senData.get("COMPANY_CD"));
		paramMap.put("PLANT_CD", senData.get("PLANT_CD"));
		paramMap.put("TRANS_ID", senData.get("TRANS_ID"));
		paramMap.put("DEPARTURE", senData.get("DEPARTURE"));
		paramMap.put("TRANS_SEQ", senData.get("TRANS_SEQ"));
		paramMap.put("TRANS_STATUS", senData.get("TRANS_STATUS"));
		
		ArrayList times = timeZoneUtil.getTimes("ko_KR", "YYMMDD", "NUMBER", "-", "HHMMSS","YES");
		
		paramMap.put("MOD_DT_LOC", times.get(1));
		paramMap.put("MOD_DT_CURR", times.get(0));
		paramMap.put("MOD_IP", senData.get("REG_IP"));
		paramMap.put("MOD_USER", senData.get("REG_USER"));
		paramMap.put("MOD_PGM_ID", senData.get("REG_PGM_ID"));
		paramMap.put("MOD_DT", new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis())));
		
		try {
			
			if (remark != null && remark.length() > 0) {
				paramMap.put("REMARK", remark);
			}
			
			commonDao.insertData("SM_SEND_RECEIVE_BATCH.RECEIVE_RECV_HISTORY_U", paramMap);
			
			transactionManager.commit(transactionStatusNested);
			
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatusNested);
		}
	}
	
	/**
	 * ????????? ?????? ?????? ?????? ?????? : ????????? Task
	 * ?????? ????????? : T_SM_TRANS_MAIN, T_SM_TRANS_DETAIL, T_SM_TRANS_HISTORY
	 * @param senData	: ?????? ?????? ??? ?????? ??????
	 * @param remark	: T_SM_SEND_HISTORY ????????? ?????? ??????
	 */
	@Override
	public void updateSendStatusByAfterTaskResult(Map<String, Object> paramMap, String remark) {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		TransferTaskService transferTaskService = null;
		WebApplicationContext context = ContextLoader.getCurrentWebApplicationContext();
		log.debug("@@@@@@@@@");
		//?????? Detail ???????????? ??????
		Map<String, Object> detailDataMap = new HashMap<String, Object>();
		detailDataMap.put("COMPANY_CD", paramMap.get("COMPANY_CD"));
		detailDataMap.put("TRANS_ID", paramMap.get("TRANS_ID"));
		detailDataMap.put("DESTINATION", paramMap.get("DESTINATION"));
		detailDataMap.put("ROW_INDEX", paramMap.get("ROW_INDEX"));
		detailDataMap.put("TRANS_STATUS", paramMap.get("TRANS_STATUS"));
		detailDataMap.put("DEPARTURE", paramMap.get("DEPARTURE"));
		
		try {
			
			updateMetadataUtil.setAuditData(detailDataMap, this.getClass().getSimpleName());
			
			commonDao.updateData("SM_TRANS.UPDATE_SEND_DETAIL", detailDataMap);
			
			//Send Main??? ?????? ???????????? ????????? ??????
			Map<String, Object> finalStatusMap = commonDao.getMap("SM_TRANS.SEARCH_SEND_DETAIL_FINAL_STATUS", detailDataMap);
			Map<String, Object> sendMainMap = commonDao.getMap("SM_TRANS.SEARCH_SEND_MAIN", detailDataMap);
			String finalStatus = (String)finalStatusMap.get("TRANS_STATUS");
			String sendMainStatus = (String)sendMainMap.get("TRANS_STATUS");
			
			//?????? ?????? ?????? ??? update
			if (!StringUtils.isEmpty(finalStatus) && !finalStatus.equals(sendMainStatus)) {
				detailDataMap.put("TRANS_STATUS", finalStatus);
				commonDao.updateData("SM_TRANS.UPDATE_SEND_MAIN", detailDataMap);
				
				String transSeq = commonDao.getString("SM_TRANS.SEARCH_SEND_HIST_TRANS_SEQ", detailDataMap);
				detailDataMap.put("TRANS_SEQ"  , transSeq);
				if (remark != null && remark.length() > 0) {
					detailDataMap.put("REMARK", remark);
				}
				commonDao.insertData("SM_TRANS.INSERT_SEND_HIST", detailDataMap);
			}
			transactionManager.commit(transactionStatus);
			
			//???????????? getAfterTaskResult() ??????
			String serviceName = (String)paramMap.get("SERVICE_NAME");
			if (serviceName != null && serviceName.length() > 0) {
				transferTaskService = (TransferTaskService)context.getBean(serviceName);
				log.debug("----------");
				if (transferTaskService != null) {
					log.debug(">>>>>>>>>");
					transferTaskService.getAfterTaskResult(paramMap);
				}
				log.debug("<<<<<<<<<");
			}
			
			
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
		}
	}
	
	/**
	 * FTP ?????? ?????? ?????? : ????????? Task
	 * FTP ?????? ????????? ?????? ????????? ??????.
	 * @param paramMap
	 * @return
	 * @throws IOException
	 */
	public List<Map<String, Object>> transFtpFiles(Map<String, Object> paramMap) throws IOException {
		//FILE_GROUP_ID
		String fileGroupId = (String)paramMap.get("FILE_GROUP_ID");
		if (!StringUtils.isEmpty(fileGroupId)) {
			String destVesselCd = (String)paramMap.get("DESTINATION");
			Map<String, Object> searchMap = new HashMap<String, Object>();
			searchMap.put("COMPANY_CD", paramMap.get("COMPANY_CD"));
			searchMap.put("FILE_GROUP_ID", fileGroupId);
			searchMap.put("USE_YN", "Y");
			
			List<Map<String, Object>> fileInfoList = commonDao.getList("SM_FILE.SEARCH_FILE", searchMap);
			
			if (!StringUtils.isEmpty(destVesselCd) && transferUtil.fileCopyToFtpDir(destVesselCd, fileInfoList) ) {
				return fileInfoList;
			}
		}
		
		return null;
	}
	
	private void mapPrint(Map<String, Object> map) throws JsonProcessingException {
		ObjectMapper objectMapper = new ObjectMapper();
		log.debug(objectMapper.writeValueAsString(map));
	}

	/**
	 * ?????? ????????? ????????? ?????? ?????? ????????? : ????????? Task
	 * ?????? ????????? ?????????????????? ???????????? ??????
	 * @param params
	 * @return
	 */
	@Override
	public List receiveDataReq(String destinationVesselCd, Map<String, Object> params) {
		List<Map<String, Object>> receiveDataList = null;
		
		if (StringUtils.isEmpty(destinationVesselCd)) {
			return null;
		}
		
		//???????????? ?????? ?????? ????????? ???????????? ??????
		//???????????? readTimeout?????? ?????? ????????? 30?????? main??? ??????
		Map<String, Object> searchParam = new HashMap<String, Object>();
		searchParam.put("COMPANY_CD", params.get("COMPANY_CD"));
		searchParam.put("DESTINATION", destinationVesselCd);
		searchParam.put("TRANS_JOB", params.get("TRANS_JOB"));
		searchParam.put("SEARCH_TRANS_STATUS", STATUS_CD_SEND_REQ_FAIL);
		receiveDataList = commonDao.getList("SM_TRANS.SEARCH_RECEIVE_REQ_SEND_MAIN", searchParam);
		
		log.debug("receiveDataList : " + receiveDataList.toString());
		
		for(Map<String, Object> sendMainMap : receiveDataList) {
			searchParam.put("TRANS_ID", sendMainMap.get("TRANS_ID"));
			sendMainMap.put("detailList", commonDao.getList("SM_TRANS.SEARCH_SEND_DETAIL", searchParam));
		}
		
		//?????? ?????? ?????? : ??????????????? (?????????)
		for(Map<String, Object> sendMainMap : receiveDataList) {
			searchParam.put("TRANS_ID", sendMainMap.get("TRANS_ID"));
			String transSeq = commonDao.getString("SM_TRANS.SEARCH_SEND_HIST_TRANS_SEQ", searchParam);
			sendMainMap.put("TRANS_SEQ"  , transSeq);
			
			updateStatusSendMainDetail(sendMainMap, STATUS_CD_SEND_PROCESS, null);
		}
		
		return receiveDataList;
	}
	
	
	
	
	
	
	/**
	 * ?????? ?????? ????????? ?????? : ????????? Task
	 * ?????? ????????? Data??? ??????
	 */
	@Override
	public void receiveData(Map<String, Object> receivedData) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			/* T_SM_RECV_MAIN, T_SM_RECV_HISTORY, ??? ?????? */
			String departure = (String)receivedData.get("DEPARTURE");
			Map<String, Object> mapRecvMain = new HashMap<String, Object>();
			mapRecvMain.put("COMPANY_CD" , (String)receivedData.get("COMPANY_CD"));
			mapRecvMain.put("TRANS_ID" , receivedData.get("TRANS_ID"));
			mapRecvMain.put("DEPARTURE" , departure);
			mapRecvMain.put("TRANS_JOB" , (String)receivedData.get("TRANS_JOB"));
			mapRecvMain.put("PROGRAM_ID" , (String)receivedData.get("PROGRAM_ID"));
			mapRecvMain.put("DESTINATION" , (String)receivedData.get("DESTINATION"));
			mapRecvMain.put("TRANS_STATUS", STATUS_CD_RECV_COMPLETE);			// ???????????? : ????????????

			updateMetadataUtil.setAuditData(mapRecvMain, this.getClass().getSimpleName());
			
			// T_SM_RECV_MAIN, T_SM_TRANS_DETAIL, T_SM_RECV_HISTORY??? insert
			commonDao.insertData("SM_TRANS.INSERT_RECV_MAIN", mapRecvMain);
			
			mapRecvMain.put("TRANS_SEQ"  , "1");
			commonDao.insertData("SM_TRANS.INSERT_RECV_HIST", mapRecvMain);
			
			
			List<Map<String, Object>> mapRecvDetalList = (List<Map<String, Object>>)receivedData.get("detailList");
			for (Map<String, Object> mapRecvDetail : mapRecvDetalList) {
				mapRecvDetail.put("DEPARTURE" ,  departure);
				mapRecvDetail.put("TRANS_STATUS" ,  STATUS_CD_RECV_COMPLETE);	// ???????????? : ????????????

				updateMetadataUtil.setAuditData(mapRecvDetail, this.getClass().getSimpleName());
				
				log.debug("mapRecvDetail : " + mapRecvDetail.toString());
				// INSERT_RECV_DETAIL??? Table Data Insert
				commonDao.insertData("SM_TRANS.INSERT_RECV_DETAIL", mapRecvDetail);
				
				log.debug("mapRecvDetail : " + mapRecvDetail.toString());
			}
			
			transactionManager.commit(transactionStatus);
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
		}
	}
	
	/**
	 * ?????? ?????? ????????? ?????? : ????????? Task
	 * ?????? ????????? Data??? ??????
	 */
	@Override
	public String receiveDataSave(Map<String, Object> receiveData) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			
			/* T_SM_RECV_MAIN, T_SM_RECV_HISTORY, ??? ?????? */
			String departure = (String)receiveData.get("DEPARTURE");
			Map<String, Object> mapRecvMain = new HashMap<String, Object>();
			
			mapRecvMain.put("COMPANY_CD" , (String)receiveData.get("COMPANY_CD"));
			mapRecvMain.put("PLANT_CD" , (String)receiveData.get("PLANT_CD"));
			mapRecvMain.put("TRANS_ID" , receiveData.get("TRANS_ID"));
			mapRecvMain.put("DEPARTURE" , departure);
			mapRecvMain.put("DESTINATION" , (String)receiveData.get("DESTINATION"));
			mapRecvMain.put("TRANS_MD" , (String)receiveData.get("TRANS_MD"));
			mapRecvMain.put("TRANS_JOB" , (String)receiveData.get("TRANS_JOB"));
			mapRecvMain.put("TNS_EXEC_ID" , (String)receiveData.get("TNS_EXEC_ID"));
			mapRecvMain.put("TRANS_CNT" , receiveData.get("TRANS_CNT"));
			mapRecvMain.put("FILE_GROUP_ID" , receiveData.get("FILE_GROUP_ID"));
			mapRecvMain.put("PROGRAM_ID" , (String)receiveData.get("PROGRAM_ID"));
			mapRecvMain.put("DATA_COUNT" , receiveData.get("DATA_COUNT"));
			 // ???????????? : ????????????(06)
			mapRecvMain.put("TRANS_STATUS", STATUS_CD_SEND_REQ_SUCCESS2);
			// mapRecvMain.put("TRANS_RST_STS" , (String)receivedData.get("FIRST_RECV_CURR"));
			mapRecvMain.put("FIRST_RECV_CURR" , (String)receiveData.get("FIRST_TRANS_CURR"));
			//mapRecvMain.put("COMPLETE_RECV_CURR" , (String)receivedData.get("FIRST_RECV_CURR"));
			
			updateMetadataUtil.setAuditData(mapRecvMain, (String)receiveData.get("PROGRAM_ID"));
			
			// ?????????????????? 24??????????????? ??????
			mapRecvMain.put("FIRST_RECV_CURR" , mapRecvMain.get("REG_DT_LOC"));
			// ?????? ????????? ?????? ??????ip 
			mapRecvMain.put("REG_USER" , (String)receiveData.get("REG_USER"));
			mapRecvMain.put("REG_IP" , (String)receiveData.get("REG_IP"));
			
			// T_SM_RECV_MAIN, T_SM_RECV_HISTORY ??????
			commonDao.insertData("SM_TRANS.INSERT_RECV_MAIN_I", mapRecvMain);
			commonDao.insertData("SM_TRANS.INSERT_RECV_HIST_I", mapRecvMain);
			
			transactionManager.commit(transactionStatus);
			
			return "SUCCESS";
			
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
			return "FAIL";
		}
	}
	
	/**
	 * ????????? ????????? ????????? ?????? : ????????? Task
	 * ?????? ????????? departure(?????????)??? ????????? ???????????? ????????????.
	 * COMPANY_CD, DEPARTURE ??? ????????????.
	 * Asyn ??????. ???????????? Async
	 * @param departure
	 */
	@Async("threadPoolTaskExecutor")
	public void receivedDataAfterTask(String companyCd, String departure) {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		Map<String, Object> searchMap = new HashMap<String, Object>();
		searchMap.put("COMPANY_CD", companyCd);
		searchMap.put("DEPARTURE", departure);
		
		//????????? ?????? ????????? ??????(????????? ????????????, ????????????????????? ??? ???)
		List<Map<String, Object>> recvAfterTaskList = commonDao.getList("SM_TRANS.GET_RECV_AFTER_TASK_LIST", searchMap);
		Integer tempTransId = -1;
		String transSeq = null;
		log.debug("receivedDataAfterTask [departure] : " + departure + ", " + recvAfterTaskList.toString());
		//????????? ?????? ????????? (????????? ????????????, ????????????????????? ??? ???) ????????? ?????? ??????
		if (recvAfterTaskList != null) {
			
			try {
				//????????? ????????????????????? ??????(main, history) : ?????? ?????? ??????
				for(Map<String, Object> afterTaskMap : recvAfterTaskList) {
					//Main, History ????????? ???????????????????????? ??????
					if(tempTransId != Integer.parseInt(String.valueOf(afterTaskMap.get("TRANS_ID")))) {
						tempTransId = Integer.parseInt(String.valueOf(afterTaskMap.get("TRANS_ID")));
						//update main
						setAuditModifyData(afterTaskMap, this.getClass().getSimpleName());
						
						afterTaskMap.put("TRANS_STATUS" , STATUS_CD_RECVED_TASK_PROCESS);	// ???????????? : ??????????????????
						commonDao.updateData("SM_TRANS.UPDATE_RECV_MAIN", afterTaskMap);
						
						//insert history
						transSeq = commonDao.getString("SM_TRANS.SEARCH_TRANS_SEQ", afterTaskMap);
						
						afterTaskMap.put("TRANS_SEQ", transSeq);
						commonDao.insertData("SM_TRANS.INSERT_RECV_HIST", afterTaskMap);
					} else {
						afterTaskMap.put("TRANS_SEQ", transSeq);
					}
				}
				transactionManager.commit(transactionStatus);
			} catch (Exception e) {
				log.error(e.getMessage());
				log.error(e.getCause().getMessage());
				transactionManager.rollback(transactionStatus);
				throw e;
			}
			
			
			try {
				
				//Detail??? ?????? ????????? ?????? ??????
				tempTransId = -1;
				WebApplicationContext context = ContextLoader.getCurrentWebApplicationContext();
				String serviceName = "";
				TransferTaskService transferTaskService = null;
				boolean isTaskSuccess = false;
				
				for(int i=0; i<recvAfterTaskList.size() ; ++i) {
					Map<String, Object> afterTaskMap = recvAfterTaskList.get(i);
					
					//trans_id ?????? ???, ???????????? ??????
					if(tempTransId != Integer.parseInt(String.valueOf(afterTaskMap.get("TRANS_ID")))) {
						if(i != 0) {
							//main, history ?????? ??????
							Map<String, Object> prevTaskMap = recvAfterTaskList.get(i-1);
							updateStatusRecvMainByDetail(prevTaskMap);
						}
						
						tempTransId = Integer.parseInt(String.valueOf(afterTaskMap.get("TRANS_ID")));
						
						serviceName = (String)afterTaskMap.get("SERVICE_NAME");
						if (serviceName == null || serviceName.length() == 0) {
							tempTransId = -1;
							continue;
						}
						
						log.debug("erviceName " + serviceName);
						
						transferTaskService = (TransferTaskService)context.getBean(serviceName);
						log.debug("transferTaskService " + transferTaskService);
						if (transferTaskService == null) {
							tempTransId = -1;
							continue;
						}
					}
					
					//?????? ?????? ?????? ???????????? ??????
					if (StringUtils.isEmpty(afterTaskMap.get("PREV_PROCESSED"))) {
						log.debug("receivedDataAfterTask : afterTaskMap [" + afterTaskMap.toString());
						isTaskSuccess = transferTaskService.doAfterTask(afterTaskMap);
						
						//????????? ????????? ???????????? ?????? ????????? ??????
						//????????? ??????
						for(int j=i+1 ; j<recvAfterTaskList.size() ; ++j) {
							Map<String, Object> searchSameJob = recvAfterTaskList.get(j);
							//?????? COMPANY_CD, DEPARTURE ??? ?????? ?????? ?????? ??????
							//=> ?????? trans_id
							if (StringUtils.isEmpty(searchSameJob.get("PREV_PROCESSED"))
									&& !afterTaskMap.get("TRANS_ID").equals(searchSameJob.get("TRANS_ID"))
									&& isSameRecvDetailData(afterTaskMap, searchSameJob)) {
								searchSameJob.put("PREV_PROCESSED", "Y");
								searchSameJob.put("PREV_TRANS_STATUS", isTaskSuccess ? STATUS_CD_TRANS_COMPLETE:STATUS_CD_RECVED_TASK_FAIL);
							}
						}
						
						//????????? Detail ?????? ??????
						//???????????? ?????? ??????
						log.debug("????????? ????????????1");
						updateStatusRecvDetailAndSendStatus(afterTaskMap, isTaskSuccess ? STATUS_CD_TRANS_COMPLETE:STATUS_CD_RECVED_TASK_FAIL);
						
					} else {
						log.debug("????????? ????????????2");
						//?????? ????????? ????????? ????????? update
						if( !afterTaskMap.get("PREV_PROCESSED").equals(afterTaskMap.get("TRANS_STATUS_DETAIL_CURR"))) {
							//????????? Detail ?????? ??????
							//???????????? ?????? ??????
							log.debug("????????? ????????????3");
							updateStatusRecvDetailAndSendStatus(afterTaskMap, (String)afterTaskMap.get("PREV_TRANS_STATUS"));
						}
					}
					
					//????????? Detail ????????? ???????????? main, history ?????? ??????
					if(i == recvAfterTaskList.size() -1) {
						//main, history ?????? ??????
						updateStatusRecvMainByDetail(afterTaskMap);
					}
					
				}
			} catch (Exception e) {
				updateStatusRecvMainByDetail(recvAfterTaskList.get(0));
				log.error(e.getMessage());
				log.error(e.getCause().getMessage());
			}
		}
			
	}
	
	/**
	 * ????????? ????????? ????????? ?????? : ????????? Task
	 * ?????? ????????? departure(?????????)??? ????????? ???????????? ????????????.
	 * COMPANY_CD, DEPARTURE ??? ????????????.
	 * Asyn ??????. ???????????? Async
	 * @param departure
	 */
	@Async("threadPoolTaskExecutor")
	public void receivedDataAfterTask2(String companyCd, String departure, String dataMode) {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		Map<String, Object> searchMap = new HashMap<String, Object>();
		searchMap.put("COMPANY_CD", companyCd);
		searchMap.put("DEPARTURE", departure);
		
		//????????? ?????? ????????? ??????(????????? ????????????, ????????????????????? ??? ???)
		List<Map<String, Object>> recvAfterTaskList = commonDao.getList("SM_TRANS.GET_RECV_AFTER_TASK_LIST", searchMap);
		Integer tempTransId = -1;
		String transSeq = null;
		log.debug("receivedDataAfterTask [departure] : " + departure + ", " + recvAfterTaskList.toString());
		//????????? ?????? ????????? (????????? ????????????, ????????????????????? ??? ???) ????????? ?????? ??????
		if (recvAfterTaskList != null) {
			
			try {
				//????????? ????????????????????? ??????(main, history) : ?????? ?????? ??????
				for(Map<String, Object> afterTaskMap : recvAfterTaskList) {
					//Main, History ????????? ???????????????????????? ??????
					if(tempTransId != Integer.parseInt(String.valueOf(afterTaskMap.get("TRANS_ID")))) {
						tempTransId = Integer.parseInt(String.valueOf(afterTaskMap.get("TRANS_ID")));
						//update main
						setAuditModifyData(afterTaskMap, this.getClass().getSimpleName());
						
						afterTaskMap.put("TRANS_STATUS" , STATUS_CD_RECVED_TASK_PROCESS);	// ???????????? : ??????????????????
						commonDao.updateData("SM_TRANS.UPDATE_RECV_MAIN", afterTaskMap);
						
						//insert history
						transSeq = commonDao.getString("SM_TRANS.SEARCH_TRANS_SEQ", afterTaskMap);
						
						afterTaskMap.put("TRANS_SEQ", transSeq);
						commonDao.insertData("SM_TRANS.INSERT_RECV_HIST", afterTaskMap);
					} else {
						afterTaskMap.put("TRANS_SEQ", transSeq);
					}
				}
				transactionManager.commit(transactionStatus);
			} catch (Exception e) {
				log.error(e.getMessage());
				log.error(e.getCause().getMessage());
				transactionManager.rollback(transactionStatus);
				throw e;
			}
			
			
			try {
				
				//Detail??? ?????? ????????? ?????? ??????
				tempTransId = -1;
				WebApplicationContext context = ContextLoader.getCurrentWebApplicationContext();
				String serviceName = "";
				TransferTaskService transferTaskService = null;
				boolean isTaskSuccess = false;
				
				for(int i=0; i<recvAfterTaskList.size() ; ++i) {
					Map<String, Object> afterTaskMap = recvAfterTaskList.get(i);
					
					//trans_id ?????? ???, ???????????? ??????
					if(tempTransId != Integer.parseInt(String.valueOf(afterTaskMap.get("TRANS_ID")))) {
						if(i != 0) {
							//main, history ?????? ??????
							Map<String, Object> prevTaskMap = recvAfterTaskList.get(i-1);
							updateStatusRecvMainByDetail(prevTaskMap);
						}
						
						tempTransId = Integer.parseInt(String.valueOf(afterTaskMap.get("TRANS_ID")));
						
						serviceName = (String)afterTaskMap.get("SERVICE_NAME");
						if (serviceName == null || serviceName.length() == 0) {
							tempTransId = -1;
							continue;
						}
						
						log.debug("erviceName " + serviceName);
						
						transferTaskService = (TransferTaskService)context.getBean(serviceName);
						log.debug("transferTaskService " + transferTaskService);
						if (transferTaskService == null) {
							tempTransId = -1;
							continue;
						}
					}
					
					afterTaskMap.put("DATA_MODE", dataMode);
					
					//?????? ?????? ?????? ???????????? ??????
					if (StringUtils.isEmpty(afterTaskMap.get("PREV_PROCESSED"))) {
						log.debug("receivedDataAfterTask : afterTaskMap [" + afterTaskMap.toString());
						isTaskSuccess = transferTaskService.doAfterTask(afterTaskMap);
						
						//????????? ????????? ???????????? ?????? ????????? ??????
						//????????? ??????
						for(int j=i+1 ; j<recvAfterTaskList.size() ; ++j) {
							Map<String, Object> searchSameJob = recvAfterTaskList.get(j);
							//?????? COMPANY_CD, DEPARTURE ??? ?????? ?????? ?????? ??????
							//=> ?????? trans_id
							if (StringUtils.isEmpty(searchSameJob.get("PREV_PROCESSED"))
									&& !afterTaskMap.get("TRANS_ID").equals(searchSameJob.get("TRANS_ID"))
									&& isSameRecvDetailData(afterTaskMap, searchSameJob)) {
								searchSameJob.put("PREV_PROCESSED", "Y");
								searchSameJob.put("PREV_TRANS_STATUS", isTaskSuccess ? STATUS_CD_TRANS_COMPLETE:STATUS_CD_RECVED_TASK_FAIL);
							}
						}
						
						//????????? Detail ?????? ??????
						//???????????? ?????? ??????
						log.debug("????????? ????????????1");
						updateStatusRecvDetailAndSendStatus(afterTaskMap, isTaskSuccess ? STATUS_CD_TRANS_COMPLETE:STATUS_CD_RECVED_TASK_FAIL);
						
					} else {
						log.debug("????????? ????????????2");
						//?????? ????????? ????????? ????????? update
						if( !afterTaskMap.get("PREV_PROCESSED").equals(afterTaskMap.get("TRANS_STATUS_DETAIL_CURR"))) {
							//????????? Detail ?????? ??????
							//???????????? ?????? ??????
							log.debug("????????? ????????????3");
							updateStatusRecvDetailAndSendStatus(afterTaskMap, (String)afterTaskMap.get("PREV_TRANS_STATUS"));
						}
					}
					
					//????????? Detail ????????? ???????????? main, history ?????? ??????
					if(i == recvAfterTaskList.size() -1) {
						//main, history ?????? ??????
						updateStatusRecvMainByDetail(afterTaskMap);
					}
					
				}
			} catch (Exception e) {
				updateStatusRecvMainByDetail(recvAfterTaskList.get(0));
				log.error(e.getMessage());
				log.error(e.getCause().getMessage());
			}
		}
			
	}
	
	/**
	 * ??? Map ???????????? ????????? ?????? : ????????? Task
	 * @param data1
	 * @param data2
	 * @return
	 */
	private Boolean isSameRecvDetailData(Map<String, Object> data1, Map<String, Object> data2) {
		for (String key : data1.keySet()) {
			//????????? ????????? ?????? ???
			if ("COMPANY_CD".equals(key) || "DEPARTURE".equals(key)
					|| "TRANS_JOB".equals(key)	|| key.contains("PARAM")) {
				String value1 = String.valueOf(data1.get(key));
				String value2 = String.valueOf(data2.get(key));
				if (value1 != null && value2 != null && !value1.equals(value2)) {
					return false;
				}
			} else {
				continue;
			}
		}
		return true;
	}
	
	/**
	 * ???????????? detail ????????? ?????? ??? ?????? ?????? ??? ????????? ?????? : ????????? Task
	 * @param detailMap
	 * @param StatusCd
	 */
	private void updateStatusRecvDetailAndSendStatus(Map<String, Object> detailMap, String StatusCd) {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		Map<String, Object> recvDetailMap = new HashMap<String, Object>();
		recvDetailMap.put("COMPANY_CD", detailMap.get("COMPANY_CD"));
		recvDetailMap.put("TRANS_ID", detailMap.get("TRANS_ID"));
		recvDetailMap.put("DEPARTURE", detailMap.get("DEPARTURE"));
		recvDetailMap.put("DESTINATION", detailMap.get("DESTINATION"));
		recvDetailMap.put("ROW_INDEX", detailMap.get("ROW_INDEX"));
		recvDetailMap.put("SERVICE_NAME", detailMap.get("SERVICE_NAME"));
		recvDetailMap.put("TRANS_STATUS", StatusCd);
		
		TransferTaskService transferTaskService = null;
		WebApplicationContext context = ContextLoader.getCurrentWebApplicationContext();
		
		setAuditModifyData(recvDetailMap, this.getClass().getSimpleName());
		
		try {
			/*
			commonDao.updateData("SM_TRANS.UPDATE_RECV_DETAIL_TRANS_STATUS", recvDetailMap);
			transactionManager.commit(transactionStatus);
			System.out.println("????????? IF_updateSendDetailStatus "+recvDetailMap.values());
			System.out.println("????????? IF_updateSendDetailStatus");
			// Detail ????????? ??????
		    System.out.println("StatusCd>>>>>>  "+StatusCd);
			//dddddd
			if(detailMap.get("DATA_MODE").equals("4")) {
				//transferTaskService = (TransferTaskService)context.getBean((String)recvDetailMap.get("SERVICE_NAME"));
				//System.out.println("aaa " + transferTaskService);
				//if (transferTaskService != null) {
					System.out.println("1111");
					//transferTaskService.getAfterTaskResult(recvDetailMap);
					//updateSendStatusByAfterTaskResult
				updateSendStatusByAfterTaskResult(recvDetailMap, null);
				
				//}
			
			} else {
				System.out.println("22222");
				transferUtil.IF_updateSendDetailStatus(recvDetailMap);
			}
			*/
			
			log.debug("%%%%%");
			
			transferUtil.IF_updateSendDetailStatus(recvDetailMap);
			//	TransferTaskService.getAfterTaskResult(recvDetailMap);
			
			
			
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
		}
	}
	
	/**
	 * ???????????? Main ?????? ?????? ??? history insert  : ????????? Task
	 * ????????? ?????? ???, ?????? Detail??? ?????? ?????? ?????? ?????? ??????
	 * @param detailMap
	 */
	private void updateStatusRecvMainByDetail(Map<String, Object> detailMap) {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("COMPANY_CD", detailMap.get("COMPANY_CD"));
		paramMap.put("TRANS_ID", detailMap.get("TRANS_ID"));
		paramMap.put("DEPARTURE", detailMap.get("DEPARTURE"));
		paramMap.put("TRANS_SEQ", detailMap.get("TRANS_SEQ"));
		
		Map<String, Object> finalStatusMap = commonDao.getMap("SM_TRANS.SEARCH_RECV_DETAIL_FINAL_STATUS", paramMap);
		String finalStatus = (String)finalStatusMap.get("TRANS_STATUS");
		paramMap.put("TRANS_STATUS", finalStatus);
		log.debug("vvvvvvvvv");
		try {
			//update main
			setAuditModifyData(paramMap, this.getClass().getSimpleName());
			commonDao.updateData("SM_TRANS.UPDATE_RECV_MAIN", paramMap);
			
			//insert history
			commonDao.insertData("SM_TRANS.INSERT_RECV_HIST", paramMap);
			transactionManager.commit(transactionStatus);
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
		}
	}

	
	/**
	 * ??????????????? ?????? : ????????? Task
	 * ?????? ?????? ????????????
	 * ?????? ??????(TRANS_JOB)??? ?????? ??????
	 */
	@Override
	public Map<String, Object> receiveReq(VariableList inVar, DataSetList inDataset) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		List<Map<String, Object>> resultDataList = new ArrayList<Map<String, Object>>();
		Map<String, Object> resultItemMap = null;
	 	log.debug("------");
		DataSet ds = inDataset.get("input1");
		List<Map<String, Object>> receiveReqVesselList = dataSetUtil.dataSetToList(ds);//?????? ?????? ?????? ??????
		
		String companyCd = inVar.getString("COMPANY_CD");
		
		// ????????? ?????? ??????
		if (receiveReqVesselList == null || receiveReqVesselList.size() == 0) {
			resultMap.put("resultCd", CommonConstant.PARAM_ERROR);
			return resultMap;
		}
		
		//????????? ?????? ??????
		Map<String, Object> params = null;
		String myVesselCd = transferUtil.getMyVesselCd(); //????????? ????????? ????????????
		for (Map<String, Object> receiveReqVessel : receiveReqVesselList) {
			params = new HashMap<String, Object>();
			params.put("COMPANY_CD", companyCd);
			params.put("DEPARTURE", receiveReqVessel.get("DEPARTURE"));
			params.put("TRANS_JOB", receiveReqVessel.get("TRANS_JOB"));	//??????????????? ????????????
			params.put("DESTINATION", myVesselCd);
			
			TransferResponse resultRes = transferUtil.IF_receiveDataReq(params);
			
			//????????? ?????? ??????
			resultItemMap = new HashMap<String, Object>();
			resultItemMap.put("DEPARTURE", receiveReqVessel.get("DEPARTURE"));
			resultItemMap.put("TRANS_JOB", receiveReqVessel.get("TRANS_JOB"));
			if (resultRes.isSuccess()) {
				resultItemMap.put("reqResultCd", "SUCCESS");
				resultItemMap.put("receiveDataList", new ArrayList<HashMap<String, Object>>((List)resultRes.getResponseResult().get("receiveDataList")));
			} else {
				resultItemMap.put("reqResultCd", "FAIL");
				resultItemMap.put("reqResultMessage", resultRes.getFailMessage());
			}
			resultDataList.add(resultItemMap);
		
		} //end of for
		
		log.debug("receiveReq departureCd : " + resultDataList.toString());
		
		resultMap.put("resultDataList", resultDataList);
		resultMap.put("resultCd", CommonConstant.SUCCESS);
		return resultMap;
	}
	
	/**
	 * Async??? ????????? ??????????????? bean ????????? ???????????? ?????? ??????????????? ??????
	 * @param dataMap
	 * @param pgmId
	 */
	private void setAuditModifyData(Map<String, Object> dataMap, String pgmId){

		ArrayList times = timeZoneUtil.getTimes("ko_KR", "YYMMDD", "NUMBER", "-", "HHMMSS","YES");
		dataMap.put("MOD_DT_LOC" , times.get(1));
		dataMap.put("MOD_DT_CURR", times.get(0));
		dataMap.put("MOD_IP"     , "");
		dataMap.put("MOD_USER"   , "");
		dataMap.put("MOD_PGM_ID" , pgmId);
		dataMap.put("MOD_DT"     , new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis())));
	}

	@Override
	public NexacroResult smreceive(VariableList inVar, DataSetList inDataset) {
		// TODO Auto-generated method stub
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			NexacroResult result = new NexacroResult();
			
			DataSet dsList = inDataset.get("input1");
			List<Map<String, Object>> smReceiveList = dataSetUtil.dataSetToList(dsList);
			
			for(int i = 0; i<smReceiveList.size(); i++) {
				Map<String, Object> smReceivelistMap = smReceiveList.get(i);
				
				// SP_SM_RECEIVE ???????????? ?????? 
				commonDao.getMap("SM050CT.SM050CT_SP_SMRECEIVE", smReceivelistMap);
				
				// ???????????? ???????????????
				if(!smReceivelistMap.get("ERR_CODE").equals("0")) {
					result.setErrorCode(-1);
					result.setErrorMsg((i+1)+"?????? ????????? ????????? "+smReceivelistMap.get("ERR_MSG").toString());
					return result;
				}
				
				//T_SM_SEND_MAIN??? ????????? ???????????? SP_SM_RECEIVE???????????? ????????? ????????? ??????????????? ????????? ????????????
				
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



	@Override
	public String receiveReceiveDataSave(Map<String, Object> receiveData) throws Exception {
		// TODO Auto-generated method stub
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			
			/* T_SM_RECV_MAIN, T_SM_RECV_HISTORY, ??? ?????? */
			String departure = (String)receiveData.get("DEPARTURE");
			Map<String, Object> mapRecvMain = new HashMap<String, Object>();
			
			mapRecvMain.put("COMPANY_CD" , (String)receiveData.get("COMPANY_CD"));
			mapRecvMain.put("PLANT_CD" , (String)receiveData.get("PLANT_CD"));
			mapRecvMain.put("TRANS_ID" , receiveData.get("TRANS_ID"));
			mapRecvMain.put("DESTINATION" , departure);	
			mapRecvMain.put("TRANS_SEQ" , receiveData.get("TRANS_SEQ"));
			mapRecvMain.put("TRANS_STATUS" , (String)receiveData.get("TRANS_STATUS"));
			if(receiveData.containsKey("TRANS_RST_STS")) {
				mapRecvMain.put("TRANS_RST_STS" , (String)receiveData.get("TRANS_RST_STS"));
			}
			//mapRecvMain.put("FIN_FLAG" , (String)receiveData.get("FIN_FLAG"));
			mapRecvMain.put("WK_FLAG" , (String)receiveData.get("WK_FLAG"));
			if(receiveData.containsKey("REMARK")) {
				mapRecvMain.put("REMARK" , (String)receiveData.get("REMARK"));
			}	
			
			updateMetadataUtil.setAuditData(mapRecvMain, (String)receiveData.get("REG_PGM_ID"));
			//T_SM_SEND_MAIN UPDATE
		
			if(receiveData.containsKey("TRANS_RST_STS")) {	
				if(receiveData.get("TRANS_RST_STS").toString().equals("20") && receiveData.containsKey("REMARK")) {
					
					if(receiveData.get("REMARK").equals("??????")) {
					receiveData.put("TRANS_RST_STS", "20");
					commonDao.updateData("SM_TRANS.UPDATE_SEND_RECEIVE_MAIN_U", mapRecvMain);
					}
				}else if(receiveData.get("TRANS_RST_STS").toString().equals("20") && receiveData.containsKey("REMARK")){
					if(receiveData.get("REMARK").equals("???????????? ??????")) {
					receiveData.put("FTP_TRANS_RST_STS", "20");
					commonDao.updateData("SM_TRANS.UPDATE_SEND_RECEIVE_MAIN_U_FTP", mapRecvMain);	
					}
				}
			}
			
			//T_SM_SEND_HISTORY INSERT
			commonDao.insertData("SM_TRANS.INSERT_SEND_RECEIVE_HIST_I", mapRecvMain);
			
			
			transactionManager.commit(transactionStatus);
			
			return "SUCCESS";
			
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
			return "FAIL";
		}
	}

}
