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
	
	private final static String STATUS_CD_REGIST = "01";			//전송등록
	private final static String STATUS_CD_SEND_REQ = "02";			//전송요청중
	private final static String STATUS_CD_SEND_REQ_FAIL = "03";		//전송요청실패
	private final static String STATUS_CD_SEND_REQ_SUCCESS = "04";	//전송요청성공
	private final static String STATUS_CD_SEND_PROCESS = "05";		//수신응답중 (전송중)
	private final static String STATUS_CD_RECV_COMPLETE = "06";			//수신완료
	private final static String STATUS_CD_RECVED_TASK_PROCESS = "07";	//수신후작업중
	private final static String STATUS_CD_RECVED_TASK_FAIL = "08";		//수신수작업실패
	private final static String STATUS_CD_TRANS_COMPLETE = "09";		//동기화완료, 송수신완료, 전송완료
	
	private final static String STATUS_CD_REGIST2 = "01";				//송신대기
	private final static String STATUS_CD_SEND_REQ_FAIL2 = "03";		// 송신실패
	private final static String STATUS_CD_SEND_REQ_SUCCESS2 = "06";		// 송신완료
	
	/**
	 * 전송 프로세스 : 송신처 Task
	 * 전송 데이터 등록 => 전송요청
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
			List<Map<String, Object>> destVesselList = dataSetUtil.dataSetToList(ds);//목적지 선박 목록
			List<Map<String, Object>> sendDetailList = null;
			TransferTaskService transferTaskService = null;
			
			String getDataMode = inVar.getString("GET_DATA_MODE");	//1:조회(선박별 다른 데이터), 2:input2에 인자로 받음, 3:조회(선박별 같은데이터)
			String companyCd = inVar.getString("COMPANY_CD");
			String transJob  = inVar.getString("TRANS_JOB");
			String programId = inVar.getString("PGM_ID");
			
			//String destName  = inVar.getString("DESTINATION");
			// 인자값 오류 확인
			if (destVesselList == null || destVesselList.size() == 0) {
				resultMap.put("resultCd", CommonConstant.PARAM_ERROR);
				return resultMap;
			} else if (transJob == null || transJob.length() == 0) {
				resultMap.put("resultCd", CommonConstant.PARAM_ERROR);
				return resultMap;
			}
			
			String myVesselCd = transferUtil.getMyVesselCd(); //등록된 자신의 선박코드
			
			//보낼 데이터 만들기 => 선박별 조회
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
				//받은 데이터를 설정
				ds = inDataset.get("input2");
				sendDetailList = dataSetUtil.dataSetToList(ds);
				
				// 데이터 오류 확인
				if (sendDetailList == null || sendDetailList.size() == 0) {
					resultMap.put("resultCd", CommonConstant.NODATA);
					return resultMap;
				}
			}
			
			
			// TRANS_ID 채번
			// TRANS_ID가 같은 것은 같은 정보로 생성됨을 의미. (송신, 수신처 정보는 다른 여러개를 생성)
			String transId = commonDao.getString("SM_TRANS.SEARCH_TRANS_ID", companyCd);
			String transSeq = "1";
			
			// 1. 선박별 DB insert - T_SM_TRANS_MAIN, T_SM_TRANS_DETAIL, T_SM_TRANS_HISTORY
			// 2. DB 작업이 종료 후, http Protocol을 이용하여 전송 요청
			int intRowIndex = 0;
			List<Map<String, Object>> detailList = null;
			for (Map<String, Object> destVessel : destVesselList) {
				String destVesselCd = (String)destVessel.get("VS_CD");
				
				if ( "1".equals(getDataMode) && transferTaskService != null) {
					//조회해서 데이터를 설정 : 선박별 데이터 조회
					sendDetailList = transferTaskService.createSendDetailData(companyCd, destVesselCd);
					if (sendDetailList == null || sendDetailList.size() == 0) {
						continue;
					}
				}
				
				
				/* T_SM_SEND_MAIN에 저장 */
				Map<String, Object> mapSendMain = new HashMap<String, Object>();
				mapSendMain.put("COMPANY_CD" , companyCd);
				mapSendMain.put("TRANS_ID"   , transId);
				mapSendMain.put("DESTINATION", destVesselCd);
				mapSendMain.put("TRANS_JOB"  , transJob);
				mapSendMain.put("PROGRAM_ID" , programId);
				mapSendMain.put("DEPARTURE"  , myVesselCd);
				mapSendMain.put("TRANS_STATUS", "01");			// 전송상태 : 01(등록)

				updateMetadataUtil.setAuditData(mapSendMain, inVar.getString("REG_PGM_ID"));
				
				// T_SM_TRANS_MAIN, T_SM_TRANS_DETAIL, T_SM_TRANS_HISTORY에 insert
				commonDao.insertData("SM_TRANS.INSERT_SEND_MAIN", mapSendMain);
				
				mapSendMain.put("TRANS_SEQ"  , transSeq);
				commonDao.insertData("SM_TRANS.INSERT_SEND_HIST", mapSendMain);
				
				detailList = new ArrayList<Map<String, Object>>();
				for (Map<String, Object> mapSendDetail : sendDetailList) {
					mapSendDetail.put("COMPANY_CD", companyCd);
					mapSendDetail.put("TRANS_ID"  , transId);
					mapSendDetail.put("DESTINATION"  , destVesselCd);
					mapSendDetail.put("ROW_INDEX" , intRowIndex);
					mapSendDetail.put("TRANS_STATUS" ,  STATUS_CD_REGIST);	// 전송상태 : 전송등록
					mapSendDetail.put("DATA_MODE" ,  getDataMode);	// 전송구분 

					// T_SM_SEND_DETAIL에 Table Data Insert
					commonDao.insertData("SM_TRANS.INSERT_SEND_DETAIL", mapSendDetail);
					intRowIndex++;
					
					detailList.add(new HashMap<String, Object>(mapSendDetail));
				}
				
				mapSendMain.put("detailList", detailList);
				log.debug(">>>"+mapSendMain.toString());
				sendDataList.add(mapSendMain);
				
			} //end of for
			
			//보낼 데이터가 없을 때
			if (sendDataList.size() == 0) {
				resultMap.put("resultCd", CommonConstant.NODATA);
				return resultMap;
			}
			
			//수신 선박별 Data를 등록
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
	 * 선박별 전송 => Asyn(비동기)방식
	 * @param destVesselCd	: 수신처 선박코드
	 * @param sendData		: 보낼 데이터
	 */
	@Async("threadPoolTaskExecutor")
	public void sendDataReq(String destVesselCd, Map<String, Object> sendData) throws Exception {
		log.debug("sendDataReq called");
		mapPrint(sendData);

		//전송요청전 상태 수정 : 전송요청중
		updateStatusSendMainDetail(sendData, STATUS_CD_SEND_REQ, null);
		
		//전송 요청
		TransferResponse transferResponse = transferUtil.IF_sendReq(destVesselCd, sendData);
		
		log.debug("전송 요청 destVesselCd : " + destVesselCd);
		log.debug("전송 결과 " + transferResponse.getResponseResult().toString());
		
		log.debug("전송 결과>>>>> " + transferResponse.toString());
		
		//전송요청 결과 상태 수정
		if(transferResponse.isSuccess()) {
			updateStatusSendMainDetail(sendData, STATUS_CD_SEND_REQ_SUCCESS, null);
		} else {
			updateStatusSendMainDetail(sendData, STATUS_CD_SEND_REQ_FAIL, transferResponse.getFailMessage());
		}
	}
	
	
	//@Async("threadPoolTaskExecutor")
	public String sendDataReq2(Map<String, Object> sendData) throws Exception {
		
		log.debug("송신 정보 조회"+sendData.toString());
		Map<String, Object> sendMap = commonDao.getMap("SM_TRANS.GET_SEND_MAIN_S", sendData);
		
		// 송신대기 his 저장
		updateStatusSendMainSave(sendMap, STATUS_CD_REGIST2, null, true);
		
		log.debug("송신 요청");
		TransferResponse transferResponse = transferUtil.IF_sendRequest(sendMap);
		
		
		log.debug("전송 결과 " + transferResponse.getResponseResult().toString());
		
		//전송요청 결과 상태 수정
		
		if(transferResponse.isSuccess()) {
			log.debug("성공>>>>>");
			updateStatusSendMainSave(sendMap, STATUS_CD_SEND_REQ_SUCCESS2, null, false);
			return STATUS_CD_SEND_REQ_SUCCESS2;
		} else {
			log.debug("실패>>>>>");
			updateStatusSendMainSave(sendMap, STATUS_CD_SEND_REQ_FAIL2, transferResponse.getFailMessage(),false);
			return STATUS_CD_SEND_REQ_FAIL2;
		}
		
	}
	 
	@Async("threadPoolTaskExecutor")
	public void sendDataReq3(Map<String, Object> sendData) throws Exception {
		
		log.debug("송신 정보 조회");
		Map<String, Object> sendMap = commonDao.getMap("SM_TRANS.GET_SEND_MAIN_S", sendData);
		
		
		log.debug("송신 요청");
		
		DeferredResult<String> dr = transferUtil.IF_sendReq3(sendMap);
		
		log.debug(">>>>ddd>>> "+dr.getResult());
		log.debug(">>>>ddd>>> "+dr);
		log.debug(">>>>ddd>>> "+dr.toString());
		
	}
	
	/**
	 * 선박별 전송 => 동기
	 * @param sendList	: 보낼 데이터 LIST
	 */
	@Async("threadPoolTaskExecutor")
	public void sendDataRequest(List<Map<String, Object>> sendList) throws Exception {
		
		//sendList
		for(int i=0; i<sendList.size(); i++) {
			Map<String, Object> map = sendList.get(i);
			
			//Map<String, Object> sendMap = commonDao.getMap("SM_TRANS.GET_SEND_MAIN_S", map);
			
			// SEND HISTORY 대기 저장
			updateStatusSendMainSave(map, STATUS_CD_REGIST2, null,true);
			
			// 수신처별 전송데이터 조회
			List<Map<String, Object>> preList = commonDao.getList("SM_TRANS.GET_PRE_SEND_MAIN_S", map);
			
			if(preList.size() > 0) {
				
				for(int j=0; j<preList.size(); j++) {
					
					Map<String, Object> sendMap = preList.get(j);
					
					log.debug("수신처별 전송 정보 조회"+sendMap.toString());
					
					// 송신대기 HISTORY 저장
					//updateStatusSendMainSave(sendMap, STATUS_CD_REGIST2, null);
					
					
					
					log.debug("송신 요청");
					TransferResponse transferResponse = transferUtil.IF_sendRequest(sendMap);
					log.debug("전송 결과 " + transferResponse.getResponseResult().toString());
					
					
					//DeferredResult<String> dr = transferUtil.IF_sendReq3(sendMap);
					// 001 : 성공  002:실패 003:IP없음
					
					//log.debug(">>>>ddd>>> dr "+dr);
					//log.debug(">>>>ddd>>> toString "+dr.toString());
					//log.debug(">>>>ddd>>> getResult "+dr.getResult());
					
					
					//전송요청 결과 상태 수정
					if(transferResponse.isSuccess()) {
						// 송신완료 SEND_MAIN, SEND_HISTORY 저장
						updateStatusSendMainSave(sendMap, STATUS_CD_SEND_REQ_SUCCESS2, null,false);
					} else {
						// 송신실패 SEND_MAIN, SEND_HISTORY 저장
						updateStatusSendMainSave(sendMap, STATUS_CD_SEND_REQ_FAIL2, transferResponse.getFailMessage(),false);
						log.debug("-----------------stop");
						// 실패한 수신처 전송 중단
						break;
					}
					
					
				}
			}
		}
	}
	
	/**
	 * 선박별 전송 => 동기
	 * @param sendMap	: 보낼 데이터
	 * sendMainBatch용
	 */
	public String sendDataBatchReq(Map<String, Object> sendMap) throws Exception {
		
		// 송신대기 HISTORY 저장
		//updateStatusSendMainSave(sendMap, STATUS_CD_REGIST2, null);
		
		log.debug("송신 요청");
		TransferResponse transferResponse = transferUtil.IF_sendRequest(sendMap);
		
		
		log.debug("전송 결과 " + transferResponse.getResponseResult().toString());
		
		//전송요청 결과 상태 수정
		
		if(transferResponse.isSuccess()) {
			updateStatusSendMainSave(sendMap, STATUS_CD_SEND_REQ_SUCCESS2, null, false);
			return STATUS_CD_SEND_REQ_SUCCESS2;
			
		} else {
			updateStatusSendMainSave(sendMap, STATUS_CD_SEND_REQ_FAIL2, transferResponse.getFailMessage(), false);
			return STATUS_CD_SEND_REQ_FAIL2;
		}
	}
	
	
	
	/**
	 * 선박별 전송 => 동기
	 * @param sendMap	: 보낼 데이터
	 * sendMainBatch용
	 */
	public String sendReveiveDataBatchReq(Map<String, Object> sendMap) throws Exception {
		
		// 송신대기 HISTORY 저장
		//updateStatusSendMainSave(sendMap, STATUS_CD_REGIST2, null);
		
		log.debug("송신 요청");
		TransferResponse transferResponse = transferUtil.IF_sendReceiveRequest(sendMap);
		
		
		log.debug("전송 결과 " + transferResponse.getResponseResult().toString());
		
		//전송요청 결과 상태 수정
		
		if(transferResponse.isSuccess()) {
			updateStatusSendReceiveMainSave(sendMap, STATUS_CD_SEND_REQ_SUCCESS2, null);
			return STATUS_CD_SEND_REQ_SUCCESS2;
			
		} else {
			//updateStatusSendMainSave(sendMap, STATUS_CD_SEND_REQ_FAIL2, transferResponse.getFailMessage());
			return STATUS_CD_SEND_REQ_FAIL2;
		}
	}
	/**
	 * 전송 결과 상태 수정 : 송신처 Task
	 * 수정 테이블 : T_SM_TRANS_MAIN, T_SM_TRANS_DETAIL, T_SM_TRANS_HISTORY
	 * T_SM_TRANS_DETAIL 는 같은 TRANS_ID에 대해 한번에 변경
	 * @param senData	: 상태 수정 시 필요 정보
	 * @param StatusCd	: 변경하고자 하는 상태
	 * @param remark	: T_SM_TRANS_HISTORY 비고에 넣을 내용, 연결 실패 시 내용 등
	 */
	private void updateStatusSendMainDetail(Map<String, Object> senData, String StatusCd, String remark) {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		//받은 데이터로 Status에 필요한 Data를 만듦 
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
			//T_SM_TRANS_DETAIL 는 같은 TRANS_ID에 대해 한번에 변경
			commonDao.updateData("SM_TRANS.UPDATE_SEND_DETAIL", paramMap);
			
			transactionManager.commit(transactionStatus);
			
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
		}
	}
	
	/**
	 * 선박별 전송 => 동기
	 * 전송 상태값 및 HISTORY 저장
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
	    
		//받은 데이터로 Status에 필요한 Data를 만듦 
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
	 * 선박별 전송 => 동기
	 * 전송 상태값 및 HISTORY 저장
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
	    
		//받은 데이터로 Status에 필요한 Data를 만듦 
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
	 * 후처리 작업 결과 상태 수정 : 송신처 Task
	 * 수정 테이블 : T_SM_TRANS_MAIN, T_SM_TRANS_DETAIL, T_SM_TRANS_HISTORY
	 * @param senData	: 상태 수정 시 필요 정보
	 * @param remark	: T_SM_SEND_HISTORY 비고에 넣을 내용
	 */
	@Override
	public void updateSendStatusByAfterTaskResult(Map<String, Object> paramMap, String remark) {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		TransferTaskService transferTaskService = null;
		WebApplicationContext context = ContextLoader.getCurrentWebApplicationContext();
		log.debug("@@@@@@@@@");
		//받은 Detail 데이터를 정리
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
			
			//Send Main의 값이 바뀌었을 경우만 수정
			Map<String, Object> finalStatusMap = commonDao.getMap("SM_TRANS.SEARCH_SEND_DETAIL_FINAL_STATUS", detailDataMap);
			Map<String, Object> sendMainMap = commonDao.getMap("SM_TRANS.SEARCH_SEND_MAIN", detailDataMap);
			String finalStatus = (String)finalStatusMap.get("TRANS_STATUS");
			String sendMainStatus = (String)sendMainMap.get("TRANS_STATUS");
			
			//현재 값과 다를 때 update
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
			
			//서비스의 getAfterTaskResult() 호출
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
	 * FTP 파일 전송 요청 : 송신처 Task
	 * FTP 파일 전송을 위한 작업을 한다.
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
	 * 수신 데이터 요청에 대한 응답 데이터 : 송신처 Task
	 * 해당 선박의 전송요청실패 데이터를 조회
	 * @param params
	 * @return
	 */
	@Override
	public List receiveDataReq(String destinationVesselCd, Map<String, Object> params) {
		List<Map<String, Object>> receiveDataList = null;
		
		if (StringUtils.isEmpty(destinationVesselCd)) {
			return null;
		}
		
		//수신처에 대해 요청 실패난 데이터를 조회
		//수신처리 readTimeout으로 인해 한번에 30개의 main만 보냄
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
		
		//전체 상태 변경 : 수신응답중 (전송중)
		for(Map<String, Object> sendMainMap : receiveDataList) {
			searchParam.put("TRANS_ID", sendMainMap.get("TRANS_ID"));
			String transSeq = commonDao.getString("SM_TRANS.SEARCH_SEND_HIST_TRANS_SEQ", searchParam);
			sendMainMap.put("TRANS_SEQ"  , transSeq);
			
			updateStatusSendMainDetail(sendMainMap, STATUS_CD_SEND_PROCESS, null);
		}
		
		return receiveDataList;
	}
	
	
	
	
	
	
	/**
	 * 전송 받은 데이터 저장 : 수신처 Task
	 * 수신 선박별 Data를 등록
	 */
	@Override
	public void receiveData(Map<String, Object> receivedData) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			/* T_SM_RECV_MAIN, T_SM_RECV_HISTORY, 에 저장 */
			String departure = (String)receivedData.get("DEPARTURE");
			Map<String, Object> mapRecvMain = new HashMap<String, Object>();
			mapRecvMain.put("COMPANY_CD" , (String)receivedData.get("COMPANY_CD"));
			mapRecvMain.put("TRANS_ID" , receivedData.get("TRANS_ID"));
			mapRecvMain.put("DEPARTURE" , departure);
			mapRecvMain.put("TRANS_JOB" , (String)receivedData.get("TRANS_JOB"));
			mapRecvMain.put("PROGRAM_ID" , (String)receivedData.get("PROGRAM_ID"));
			mapRecvMain.put("DESTINATION" , (String)receivedData.get("DESTINATION"));
			mapRecvMain.put("TRANS_STATUS", STATUS_CD_RECV_COMPLETE);			// 전송상태 : 수신완료

			updateMetadataUtil.setAuditData(mapRecvMain, this.getClass().getSimpleName());
			
			// T_SM_RECV_MAIN, T_SM_TRANS_DETAIL, T_SM_RECV_HISTORY에 insert
			commonDao.insertData("SM_TRANS.INSERT_RECV_MAIN", mapRecvMain);
			
			mapRecvMain.put("TRANS_SEQ"  , "1");
			commonDao.insertData("SM_TRANS.INSERT_RECV_HIST", mapRecvMain);
			
			
			List<Map<String, Object>> mapRecvDetalList = (List<Map<String, Object>>)receivedData.get("detailList");
			for (Map<String, Object> mapRecvDetail : mapRecvDetalList) {
				mapRecvDetail.put("DEPARTURE" ,  departure);
				mapRecvDetail.put("TRANS_STATUS" ,  STATUS_CD_RECV_COMPLETE);	// 전송상태 : 수신완료

				updateMetadataUtil.setAuditData(mapRecvDetail, this.getClass().getSimpleName());
				
				log.debug("mapRecvDetail : " + mapRecvDetail.toString());
				// INSERT_RECV_DETAIL에 Table Data Insert
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
	 * 전송 받은 데이터 저장 : 수신처 Task
	 * 수신 선박별 Data를 등록
	 */
	@Override
	public String receiveDataSave(Map<String, Object> receiveData) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			
			/* T_SM_RECV_MAIN, T_SM_RECV_HISTORY, 에 저장 */
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
			 // 전송상태 : 송신완료(06)
			mapRecvMain.put("TRANS_STATUS", STATUS_CD_SEND_REQ_SUCCESS2);
			// mapRecvMain.put("TRANS_RST_STS" , (String)receivedData.get("FIRST_RECV_CURR"));
			mapRecvMain.put("FIRST_RECV_CURR" , (String)receiveData.get("FIRST_TRANS_CURR"));
			//mapRecvMain.put("COMPLETE_RECV_CURR" , (String)receivedData.get("FIRST_RECV_CURR"));
			
			updateMetadataUtil.setAuditData(mapRecvMain, (String)receiveData.get("PROGRAM_ID"));
			
			// 최초수신일자 24시간형태로 저장
			mapRecvMain.put("FIRST_RECV_CURR" , mapRecvMain.get("REG_DT_LOC"));
			// 전송 등록자 전송 등록ip 
			mapRecvMain.put("REG_USER" , (String)receiveData.get("REG_USER"));
			mapRecvMain.put("REG_IP" , (String)receiveData.get("REG_IP"));
			
			// T_SM_RECV_MAIN, T_SM_RECV_HISTORY 저장
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
	 * 수신된 데이터 후작업 처리 : 수신처 Task
	 * 함수 호출전 departure(송신처)와 연결된 상태임을 가정한다.
	 * COMPANY_CD, DEPARTURE 별 작업한다.
	 * Asyn 작업. 송신처별 Async
	 * @param departure
	 */
	@Async("threadPoolTaskExecutor")
	public void receivedDataAfterTask(String companyCd, String departure) {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		Map<String, Object> searchMap = new HashMap<String, Object>();
		searchMap.put("COMPANY_CD", companyCd);
		searchMap.put("DEPARTURE", departure);
		
		//작업할 것이 있는지 조회(상태가 수신완료, 수신후작업실패 인 것)
		List<Map<String, Object>> recvAfterTaskList = commonDao.getList("SM_TRANS.GET_RECV_AFTER_TASK_LIST", searchMap);
		Integer tempTransId = -1;
		String transSeq = null;
		log.debug("receivedDataAfterTask [departure] : " + departure + ", " + recvAfterTaskList.toString());
		//작업할 것이 있다면 (상태가 수신완료, 수신후작업실패 인 것) 후처리 작업 실행
		if (recvAfterTaskList != null) {
			
			try {
				//상태를 수신후작업중로 변경(main, history) : 중복 작업 배제
				for(Map<String, Object> afterTaskMap : recvAfterTaskList) {
					//Main, History 상태를 수신후작업중으로 변경
					if(tempTransId != Integer.parseInt(String.valueOf(afterTaskMap.get("TRANS_ID")))) {
						tempTransId = Integer.parseInt(String.valueOf(afterTaskMap.get("TRANS_ID")));
						//update main
						setAuditModifyData(afterTaskMap, this.getClass().getSimpleName());
						
						afterTaskMap.put("TRANS_STATUS" , STATUS_CD_RECVED_TASK_PROCESS);	// 전송상태 : 수신후작업중
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
				
				//Detail에 대한 후처리 작업 실행
				tempTransId = -1;
				WebApplicationContext context = ContextLoader.getCurrentWebApplicationContext();
				String serviceName = "";
				TransferTaskService transferTaskService = null;
				boolean isTaskSuccess = false;
				
				for(int i=0; i<recvAfterTaskList.size() ; ++i) {
					Map<String, Object> afterTaskMap = recvAfterTaskList.get(i);
					
					//trans_id 변경 시, 서비스명 변경
					if(tempTransId != Integer.parseInt(String.valueOf(afterTaskMap.get("TRANS_ID")))) {
						if(i != 0) {
							//main, history 상태 변경
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
					
					//이미 작업 처리 되었는지 여부
					if (StringUtils.isEmpty(afterTaskMap.get("PREV_PROCESSED"))) {
						log.debug("receivedDataAfterTask : afterTaskMap [" + afterTaskMap.toString());
						isTaskSuccess = transferTaskService.doAfterTask(afterTaskMap);
						
						//앞으로 작업할 로직에서 같은 작업을 찾음
						//체크만 해둠
						for(int j=i+1 ; j<recvAfterTaskList.size() ; ++j) {
							Map<String, Object> searchSameJob = recvAfterTaskList.get(j);
							//이미 COMPANY_CD, DEPARTURE 가 같은 것을 조회 했음
							//=> 다른 trans_id
							if (StringUtils.isEmpty(searchSameJob.get("PREV_PROCESSED"))
									&& !afterTaskMap.get("TRANS_ID").equals(searchSameJob.get("TRANS_ID"))
									&& isSameRecvDetailData(afterTaskMap, searchSameJob)) {
								searchSameJob.put("PREV_PROCESSED", "Y");
								searchSameJob.put("PREV_TRANS_STATUS", isTaskSuccess ? STATUS_CD_TRANS_COMPLETE:STATUS_CD_RECVED_TASK_FAIL);
							}
						}
						
						//수신측 Detail 상태 변경
						//송신측에 상태 전송
						log.debug("송신측 업데이트1");
						updateStatusRecvDetailAndSendStatus(afterTaskMap, isTaskSuccess ? STATUS_CD_TRANS_COMPLETE:STATUS_CD_RECVED_TASK_FAIL);
						
					} else {
						log.debug("송신측 업데이트2");
						//이미 작업이 되어서 상태만 update
						if( !afterTaskMap.get("PREV_PROCESSED").equals(afterTaskMap.get("TRANS_STATUS_DETAIL_CURR"))) {
							//수신측 Detail 상태 변경
							//송신측에 상태 전송
							log.debug("송신측 업데이트3");
							updateStatusRecvDetailAndSendStatus(afterTaskMap, (String)afterTaskMap.get("PREV_TRANS_STATUS"));
						}
					}
					
					//마지막 Detail 작업에 대해서도 main, history 상태 변경
					if(i == recvAfterTaskList.size() -1) {
						//main, history 상태 변경
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
	 * 수신된 데이터 후작업 처리 : 수신처 Task
	 * 함수 호출전 departure(송신처)와 연결된 상태임을 가정한다.
	 * COMPANY_CD, DEPARTURE 별 작업한다.
	 * Asyn 작업. 송신처별 Async
	 * @param departure
	 */
	@Async("threadPoolTaskExecutor")
	public void receivedDataAfterTask2(String companyCd, String departure, String dataMode) {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		Map<String, Object> searchMap = new HashMap<String, Object>();
		searchMap.put("COMPANY_CD", companyCd);
		searchMap.put("DEPARTURE", departure);
		
		//작업할 것이 있는지 조회(상태가 수신완료, 수신후작업실패 인 것)
		List<Map<String, Object>> recvAfterTaskList = commonDao.getList("SM_TRANS.GET_RECV_AFTER_TASK_LIST", searchMap);
		Integer tempTransId = -1;
		String transSeq = null;
		log.debug("receivedDataAfterTask [departure] : " + departure + ", " + recvAfterTaskList.toString());
		//작업할 것이 있다면 (상태가 수신완료, 수신후작업실패 인 것) 후처리 작업 실행
		if (recvAfterTaskList != null) {
			
			try {
				//상태를 수신후작업중로 변경(main, history) : 중복 작업 배제
				for(Map<String, Object> afterTaskMap : recvAfterTaskList) {
					//Main, History 상태를 수신후작업중으로 변경
					if(tempTransId != Integer.parseInt(String.valueOf(afterTaskMap.get("TRANS_ID")))) {
						tempTransId = Integer.parseInt(String.valueOf(afterTaskMap.get("TRANS_ID")));
						//update main
						setAuditModifyData(afterTaskMap, this.getClass().getSimpleName());
						
						afterTaskMap.put("TRANS_STATUS" , STATUS_CD_RECVED_TASK_PROCESS);	// 전송상태 : 수신후작업중
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
				
				//Detail에 대한 후처리 작업 실행
				tempTransId = -1;
				WebApplicationContext context = ContextLoader.getCurrentWebApplicationContext();
				String serviceName = "";
				TransferTaskService transferTaskService = null;
				boolean isTaskSuccess = false;
				
				for(int i=0; i<recvAfterTaskList.size() ; ++i) {
					Map<String, Object> afterTaskMap = recvAfterTaskList.get(i);
					
					//trans_id 변경 시, 서비스명 변경
					if(tempTransId != Integer.parseInt(String.valueOf(afterTaskMap.get("TRANS_ID")))) {
						if(i != 0) {
							//main, history 상태 변경
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
					
					//이미 작업 처리 되었는지 여부
					if (StringUtils.isEmpty(afterTaskMap.get("PREV_PROCESSED"))) {
						log.debug("receivedDataAfterTask : afterTaskMap [" + afterTaskMap.toString());
						isTaskSuccess = transferTaskService.doAfterTask(afterTaskMap);
						
						//앞으로 작업할 로직에서 같은 작업을 찾음
						//체크만 해둠
						for(int j=i+1 ; j<recvAfterTaskList.size() ; ++j) {
							Map<String, Object> searchSameJob = recvAfterTaskList.get(j);
							//이미 COMPANY_CD, DEPARTURE 가 같은 것을 조회 했음
							//=> 다른 trans_id
							if (StringUtils.isEmpty(searchSameJob.get("PREV_PROCESSED"))
									&& !afterTaskMap.get("TRANS_ID").equals(searchSameJob.get("TRANS_ID"))
									&& isSameRecvDetailData(afterTaskMap, searchSameJob)) {
								searchSameJob.put("PREV_PROCESSED", "Y");
								searchSameJob.put("PREV_TRANS_STATUS", isTaskSuccess ? STATUS_CD_TRANS_COMPLETE:STATUS_CD_RECVED_TASK_FAIL);
							}
						}
						
						//수신측 Detail 상태 변경
						//송신측에 상태 전송
						log.debug("송신측 업데이트1");
						updateStatusRecvDetailAndSendStatus(afterTaskMap, isTaskSuccess ? STATUS_CD_TRANS_COMPLETE:STATUS_CD_RECVED_TASK_FAIL);
						
					} else {
						log.debug("송신측 업데이트2");
						//이미 작업이 되어서 상태만 update
						if( !afterTaskMap.get("PREV_PROCESSED").equals(afterTaskMap.get("TRANS_STATUS_DETAIL_CURR"))) {
							//수신측 Detail 상태 변경
							//송신측에 상태 전송
							log.debug("송신측 업데이트3");
							updateStatusRecvDetailAndSendStatus(afterTaskMap, (String)afterTaskMap.get("PREV_TRANS_STATUS"));
						}
					}
					
					//마지막 Detail 작업에 대해서도 main, history 상태 변경
					if(i == recvAfterTaskList.size() -1) {
						//main, history 상태 변경
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
	 * 두 Map 데이터가 같은지 확인 : 수신처 Task
	 * @param data1
	 * @param data2
	 * @return
	 */
	private Boolean isSameRecvDetailData(Map<String, Object> data1, Map<String, Object> data2) {
		for (String key : data1.keySet()) {
			//같은지 확인할 컬럼 값
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
	 * 수신처의 detail 후처리 작업 후 상태 변경 및 송신처 전송 : 수신처 Task
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
			System.out.println("송신측 IF_updateSendDetailStatus "+recvDetailMap.values());
			System.out.println("송신측 IF_updateSendDetailStatus");
			// Detail 송신처 전송
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
	 * 수신처의 Main 상태 변경 및 history insert  : 수시처 Task
	 * 후처리 작업 중, 수신 Detail의 상태 값을 조회 하여 변경
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
	 * 수신데이터 요청 : 수신처 Task
	 * 수신 요청 프로세스
	 * 업무 구분(TRANS_JOB)별 수신 요청
	 */
	@Override
	public Map<String, Object> receiveReq(VariableList inVar, DataSetList inDataset) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		List<Map<String, Object>> resultDataList = new ArrayList<Map<String, Object>>();
		Map<String, Object> resultItemMap = null;
	 	log.debug("------");
		DataSet ds = inDataset.get("input1");
		List<Map<String, Object>> receiveReqVesselList = dataSetUtil.dataSetToList(ds);//수신 요청 선박 목록
		
		String companyCd = inVar.getString("COMPANY_CD");
		
		// 인자값 오류 확인
		if (receiveReqVesselList == null || receiveReqVesselList.size() == 0) {
			resultMap.put("resultCd", CommonConstant.PARAM_ERROR);
			return resultMap;
		}
		
		//선박별 수신 요청
		Map<String, Object> params = null;
		String myVesselCd = transferUtil.getMyVesselCd(); //등록된 자신의 선박코드
		for (Map<String, Object> receiveReqVessel : receiveReqVesselList) {
			params = new HashMap<String, Object>();
			params.put("COMPANY_CD", companyCd);
			params.put("DEPARTURE", receiveReqVessel.get("DEPARTURE"));
			params.put("TRANS_JOB", receiveReqVessel.get("TRANS_JOB"));	//업무구분별 수신요청
			params.put("DESTINATION", myVesselCd);
			
			TransferResponse resultRes = transferUtil.IF_receiveDataReq(params);
			
			//선박별 결과 저장
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
	 * Async로 호출된 함수에서는 bean 생성이 원할하지 않아 내부적으로 호출
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
				
				// SP_SM_RECEIVE 프로시저 호출 
				commonDao.getMap("SM050CT.SM050CT_SP_SMRECEIVE", smReceivelistMap);
				
				// 프로시저 에러발생시
				if(!smReceivelistMap.get("ERR_CODE").equals("0")) {
					result.setErrorCode(-1);
					result.setErrorMsg((i+1)+"번쨰 체크된 행에서 "+smReceivelistMap.get("ERR_MSG").toString());
					return result;
				}
				
				//T_SM_SEND_MAIN에 결과값 업데이트 SP_SM_RECEIVE프로시저 안에서 하는지 자바단에서 하는지 상의필요
				
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
			
			/* T_SM_RECV_MAIN, T_SM_RECV_HISTORY, 에 저장 */
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
					
					if(receiveData.get("REMARK").equals("성공")) {
					receiveData.put("TRANS_RST_STS", "20");
					commonDao.updateData("SM_TRANS.UPDATE_SEND_RECEIVE_MAIN_U", mapRecvMain);
					}
				}else if(receiveData.get("TRANS_RST_STS").toString().equals("20") && receiveData.containsKey("REMARK")){
					if(receiveData.get("REMARK").equals("파일전송 정상")) {
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
