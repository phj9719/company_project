package egovframework.com.common.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.http.conn.HttpHostConnectException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.BadSqlGrammarException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;

import egovframework.com.common.constant.CommonConstant;
import egovframework.com.common.exception.NexaServiceException;
import egovframework.com.common.service.TransferService;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.common.util.LanguageUtil;
import egovframework.com.common.util.TransferUtil;

/**
 * 파일전송관련 Controller
 */
@Controller
public class TransferController {

	private Logger log = LoggerFactory.getLogger(TransferController.class);

	@Resource(name="TransferUtil")
	private TransferUtil transferUtil;

	@Resource(name="LanguageUtil")
	private LanguageUtil languageUtil;
	
	@Autowired
	private TransferService	transferService;
	
	/**
	 * 전송 데이터 등록 : 송신처 Task
	 * 전송할 데이터는 아래 2가지 방법으로 받을 수 있다.
	 * [1].서비스단에서 조회, [2]. dataset으로 호출시
	 * input1 : 전송할 목적지 선박
	 * input2 : 위의 [2]의 방식으로 받은 데이터를 전송
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/sendData.do")
    public NexacroResult sendData(HttpServletRequest request) {
		NexacroResult result = new NexacroResult();
    	VariableList inVar 	 = new VariableList();
    	
    	try {
    		HttpPlatformRequest hpRequest = new HttpPlatformRequest(request);
	    	hpRequest.receiveData();

	        PlatformData inputData = hpRequest.getData();
        	inVar 	= inputData.getVariableList();

			DataSetList dataset = inputData.getDataSetList();
			DataSetList inDataSet = new DataSetList();
			
			log.debug("dataset : " + dataset.size());
			
			for (int i = 0; i < dataset.size(); i++) {
				DataSet ds = dataset.get(i);

				if (ds.getName().startsWith("input")) {
					inDataSet.add(ds);
				}
			}			

			Map<String, Object> resultMap  = transferService.sendData(inVar, inDataSet);
			int resultCode = (int)resultMap.get("resultCd");
			
			
			switch (resultCode) {
			case CommonConstant.SUCCESS :
		    	result.setErrorCode(0);

		    	//수신 선박별 Data 전송요청(Async)
		    	List<Map<String, Object>> sendDataList = (List<Map<String, Object>>) resultMap.get("sendDataList");
				for (Map<String, Object> sendDataItem : sendDataList) {
					transferService.sendDataReq((String)sendDataItem.get("DESTINATION"), sendDataItem);
				}
		    	break;
			case CommonConstant.NODATA :
				result.setErrorCode(-1);
				result.setErrorMsg(languageUtil.getMessage(inVar, "000236"));	// 전송 할 데이터가 존재하지 않습니다.
		    	break;
			case CommonConstant.NOT_FIND_SERVICE :
				result.setErrorCode(-1);
				result.setErrorMsg(languageUtil.getMessage(inVar, "000405"));	// 업무 서비스를 찾지 못했습니다.
		    	break;	
			case CommonConstant.PARAM_ERROR :
				result.setErrorCode(-1);
				result.setErrorMsg(languageUtil.getMessage(inVar, "000092"));	// 유효하지 않은 값입니다.
		    	break;
			}

		} catch (Exception e) {
			result.setErrorCode(-1);
			result.setErrorMsg(getErrorMsg(inVar, e));
		}

    	return result;

    }

	/**
	 * 수신처의 후처리 결과 받음 : 송신처 Task
	 * @param request
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "/transTaskResult.do" , method=RequestMethod.POST, produces = "application/json; charset=utf8")
	@ResponseBody
    public ResponseEntity<String> transTaskResult(HttpServletRequest request) throws IOException {
		log.debug("송신 측 : transTaskResult.do");
		ObjectMapper objectMapper = new ObjectMapper();
		
		Map<String, Object> receivedData = objectMapper.readValue(request.getInputStream(), HashMap.class);
		log.debug("receivedData : " + receivedData.toString());
		
		//후처리 결과로 송신처 상태 update
		transferService.updateSendStatusByAfterTaskResult(receivedData, null);
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("resultCode", "SUCCESS");
		
		return new ResponseEntity<String>(objectMapper.writeValueAsString(resultMap), HttpStatus.OK);
	}
	
	/**
	 * 파일 전송 요청 : 송신처 Task
	 * @param request
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "/transFtpFile.do" , method=RequestMethod.POST, produces = "application/json; charset=utf8")
	@ResponseBody
    public ResponseEntity<String> transFtpFile(HttpServletRequest request) throws IOException {
		log.debug("송신 측 : transFtpFile.do");
		ObjectMapper objectMapper = new ObjectMapper();
		
		Map<String, Object> receivedData = objectMapper.readValue(request.getInputStream(), HashMap.class);
		log.debug("receivedData : " + receivedData.toString());
		
		List<Map<String, Object>> resultMapList = transferService.transFtpFiles(receivedData);
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		if (resultMapList != null) {
			resultMap.put("resultCode", "SUCCESS");
			resultMap.put("resultFileInfoList", resultMapList);
		} else {
			resultMap.put("resultCode", "FAIL");
		}
		
		return new ResponseEntity<String>(objectMapper.writeValueAsString(resultMap), HttpStatus.OK);
	}
	
	/**
	 * 수신처의 수신 데이터 요청 받음 : 송신처 Task
	 * @param request
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "/receiveDataReq.do" , method=RequestMethod.POST, produces = "application/json; charset=utf8")
	@ResponseBody
    public ResponseEntity<String> receiveDataReq(HttpServletRequest request) throws IOException {
		log.debug("송신 측 : receiveDataReq.do");
		ObjectMapper objectMapper = new ObjectMapper();
		
		Map<String, Object> receivedData = objectMapper.readValue(request.getInputStream(), HashMap.class);
		log.debug("receivedData : " + receivedData.toString());
		
		String departureCd = (String)receivedData.get("DEPARTURE");
		String destinationVesselCd = (String)receivedData.get("DESTINATION");
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		if (receivedData == null || departureCd == null) {
			resultMap.put("resultCode", "FAIL");
			//resultMap.put("resultMessage", languageUtil.getMessage("000406")); // 수신된 정보가 없습니다.
		} else {
			//수신처가 자신의 코드와 같은 데이터 인지 validation 체크
			String myVesselCd = transferUtil.getMyVesselCd();
			
			if(myVesselCd != null && myVesselCd.equals(departureCd) && destinationVesselCd != null ) {
				
				//수신처의 데이터를 전송
				List receiveDataList = transferService.receiveDataReq(destinationVesselCd, receivedData);
				
				if (receiveDataList == null) {
					resultMap.put("resultMessage", "전송 할 데이터가 없음"); // 수신된 정보가 없습니다.
				} else {
					resultMap.put("receiveDataList", receiveDataList);
				}
				resultMap.put("resultCode", "SUCCESS");
				
			} else {
				resultMap.put("resultCode", "FAIL");
				//resultMap.put("resultMessage", languageUtil.getMessage("000407")); //수신처 정보 오류 입니다. 수신처 선박 정보를 확인 하세요.
			}
		}
		
		return new ResponseEntity<String>(objectMapper.writeValueAsString(resultMap), HttpStatus.OK);
	}
	
	
	
	
		
		
	/**
	 * data 수신 : 수신처 Task
	 * Http 프로토콜로 json 데이터를 받음
	 * @param request
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping(value = "/sendReq.do" , method=RequestMethod.POST, produces = "application/json; charset=utf8")
	@ResponseBody
    public ResponseEntity<String> sendReq(HttpServletRequest request) throws IOException {
		
		log.debug("수신 측 : sendReq.do");
		ObjectMapper objectMapper = new ObjectMapper();
		
		Map<String, Object> receivedData = objectMapper.readValue(request.getInputStream(), HashMap.class);
		log.debug("receivedData : " + receivedData.toString());
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
		try {
			if (receivedData == null || receivedData.get("DESTINATION") == null) {
				resultMap.put("resultCode", "FAIL");
				//resultMap.put("resultMessage", languageUtil.getMessage("000406")); // 수신된 정보가 없습니다.
			} else {
				//수신처가 자신의 코드와 같은 데이터 인지 validation 체크
				String myVesselCd = transferUtil.getMyVesselCd();
				String destinationCd = (String)receivedData.get("DESTINATION");
				
				
				List<Map<String, Object>> mapRecvDetalList = (List<Map<String, Object>>)receivedData.get("detailList");
				Map<String, Object> xMap = mapRecvDetalList.get(0);
				
				String getDataMode = (String)xMap.get("DATA_MODE");
				
				if(myVesselCd != null && myVesselCd.equals(destinationCd)) {
					//수신된 데이터 저장
					transferService.receiveData(receivedData);
					
					resultMap.put("resultCode", "SUCCESS");
					
					log.debug("수신 측 : getDataMode " + getDataMode);
				
					
					
					
					
					if(getDataMode.equals("4")) {
						log.debug("수신 측 : getDataMode " + getDataMode);
						//후처리 작업 => Async!!!
						transferService.receivedDataAfterTask2((String)receivedData.get("COMPANY_CD"), (String)receivedData.get("DEPARTURE"),getDataMode);
					
					} else {
						//후처리 작업 => Async!!!
						transferService.receivedDataAfterTask((String)receivedData.get("COMPANY_CD"), (String)receivedData.get("DEPARTURE"));
					}
					
					
				} else {
					resultMap.put("resultCode", "FAIL");
					//resultMap.put("resultMessage", languageUtil.getMessage("000407")); //수신처 정보 오류 입니다. 수신처 선박 정보를 확인 하세요.
				}
			}
			
			
		} catch (Exception e) {
			e.printStackTrace();
			log.error(e.getMessage());
			resultMap.put("resultCode", "FAIL");
			//resultMap.put("resultMessage", languageUtil.getMessage("000408")); //예외발생
		}
		
    	return new ResponseEntity<String>(objectMapper.writeValueAsString(resultMap), HttpStatus.OK);
    }
	
	/**
	 * data 수신 : 수신처 Task
	 * Http 프로토콜로 json 데이터를 받음
	 * @param request
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping(value = "/sendRequest.do" , method=RequestMethod.POST, produces = "application/json; charset=utf8")
	@ResponseBody
    public ResponseEntity<String> sendRequest(HttpServletRequest request) throws IOException {
		
		log.debug("수신 측 : sendRequest.do");
		ObjectMapper objectMapper = new ObjectMapper();
		
		Map<String, Object> receiveData = objectMapper.readValue(request.getInputStream(), HashMap.class);
		log.debug("receiveData : " + receiveData.toString());
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
		try {
			if (receiveData == null || receiveData.get("DESTINATION") == null) {
				resultMap.put("resultCode", "FAIL");
				//resultMap.put("resultMessage", languageUtil.getMessage("000545")); // 수신된 정보가 없습니다.
			} else {
				
				// 수신된 데이터 저장
				String resultValue = transferService.receiveDataSave(receiveData);
				
				
				if(resultValue.equals("SUCCESS")) {
					resultMap.put("resultCode", resultValue);
					log.debug("수신 측 : SUCCESS ");
					
				} else {
					resultMap.put("resultCode", "FAIL");
					// 수신테이블 저장시 예외발생
					//resultMap.put("resultMessage", languageUtil.getMessage("000546"));
					//resultMap.put("resultMessage", "수신 반영시 예외가 발생했습니다."); // 수신된 정보가 없습니다.
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			log.error(e.getMessage());
			resultMap.put("resultCode", "FAIL");
			// 수신 통신오류
			//resultMap.put("resultMessage", languageUtil.getMessage("000547"));
			//resultMap.put("resultMessage", "수신 연결시 예외가 발생했습니다."); // 수신된 정보가 없습니다.
		}
		
    	return new ResponseEntity<String>(objectMapper.writeValueAsString(resultMap), HttpStatus.OK);
    }
	
	/**
	 * data 수신 : 수신처 Task
	 * Http 프로토콜로 json 데이터를 받음
	 * @param request
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping(value = "/sendReceiveRequest.do" , method=RequestMethod.POST, produces = "application/json; charset=utf8")
	@ResponseBody
    public ResponseEntity<String> sendReceiveRequest(HttpServletRequest request) throws IOException {
		
		log.debug("수신 측 : sendReceiveRequest.do");
		ObjectMapper objectMapper = new ObjectMapper();
		
		Map<String, Object> receiveData = objectMapper.readValue(request.getInputStream(), HashMap.class);
		log.debug("receiveData : " + receiveData.toString());
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
		try {
			if (receiveData == null || receiveData.get("DEPARTURE") == null) {
				resultMap.put("resultCode", "FAIL");
				//resultMap.put("resultMessage", languageUtil.getMessage("000406")); // 수신된 정보가 없습니다.
			} else {
				
				// 수신된 데이터 저장
				String resultValue = transferService.receiveReceiveDataSave(receiveData);
				
				
				if(resultValue.equals("SUCCESS")) {
					resultMap.put("resultCode", resultValue);
					log.debug("수신 측 : SUCCESS ");
					
				} else {
					resultMap.put("resultCode", "FAIL");
					//resultMap.put("resultMessage", languageUtil.getMessage("000408")); //예외발생
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			log.error(e.getMessage());
			resultMap.put("resultCode", "FAIL");
			//resultMap.put("resultMessage", languageUtil.getMessage("000408")); //예외발생
		}
		
    	return new ResponseEntity<String>(objectMapper.writeValueAsString(resultMap), HttpStatus.OK);
    }
	
	/**
	 * 즉시수신요청 : 수신처 Task
	 * 수신처에서 수신요청한 선박코드를 받는다.
	 * input1 : 전송할 목적지 선박
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/receiveReq.do")
    public NexacroResult receiveReq(HttpServletRequest request) {
		NexacroResult result = new NexacroResult();
    	VariableList inVar 	 = new VariableList();
    	List<Map<String, Object>> resultOutputList = null;
    	
    	try {
    		HttpPlatformRequest hpRequest = new HttpPlatformRequest(request);
	    	hpRequest.receiveData();
	    	System.out.println(">>>>>>>>");
	    	PlatformData inputData = hpRequest.getData();
        	inVar 	= inputData.getVariableList();
        	String companyCd = inVar.getString("COMPANY_CD");

			DataSetList dataset = inputData.getDataSetList();
			DataSetList inDataSet = new DataSetList();
			
			log.debug("dataset : " + dataset.size());
			
			for (int i = 0; i < dataset.size(); i++) {
				DataSet ds = dataset.get(i);

				if (ds.getName().startsWith("input")) {
					inDataSet.add(ds);
				}
			}
			
			//선박별 요청실패 데이터 요청
			Map<String, Object> resultMap = transferService.receiveReq(inVar, inDataSet);
        	
			int resultCode = (int)resultMap.get("resultCd");
			
			switch (resultCode) {
			case CommonConstant.SUCCESS :
		    	result.setErrorCode(0);
		    	resultOutputList = new ArrayList<Map<String, Object>>();
		    	Map<String, Object> resultOutpuMap = null;
				
		    	List<Map<String, Object>> resultDataList = (List<Map<String, Object>>) resultMap.get("resultDataList");
		    	String resultCd = null;
		    	String departureCd = null;
		    	for(Map<String, Object> resultItemMap : resultDataList) {
		    		resultOutpuMap = new HashMap<String, Object>();
		    		
		    		resultCd = (String)resultItemMap.get("reqResultCd");
		    		departureCd = (String)resultItemMap.get("DEPARTURE");
		    		resultOutpuMap.put("DEPARTURE", departureCd);
		    		resultOutpuMap.put("TRANS_JOB", (String)resultItemMap.get("TRANS_JOB"));
		    		resultOutpuMap.put("RESULT_CD", resultCd);
		    		if("SUCCESS".equals(resultCd)) {
		    			List<Map<String, Object>> receiveDataList = (List<Map<String, Object>>)resultItemMap.get("receiveDataList");
		    			if (receiveDataList == null || receiveDataList.size() == 0) {
		    				resultOutpuMap.put("RESULT_MSG", "전송 할 데이터가 없습니다.");
		    			} else {
		    				//수신된 데이터 저장
		    				for (Map<String, Object> receivedData : receiveDataList) {
		    					transferService.receiveData(receivedData);
		    				}
		    				resultOutpuMap.put("RESULT_MSG", receiveDataList.size() + " 항목을 수신 받았습니다.");
		    			}
		    			
		    			//전송 받은 데이터가 없더라도 후처리 작업 대상이 있을 수 있으므로 실행
	    				//선박별 후처리 작업 => Async!!!
						transferService.receivedDataAfterTask(companyCd, departureCd);
	    			
		    		} else {
		    			resultOutpuMap.put("RESULT_MSG", "Fail: " + resultItemMap.get("reqResultMessage"));
		    		}
		    		
		    		resultOutputList.add(resultOutpuMap);
		    	}
		    	
		    	result.addDataSet("output1", resultOutputList);
		    	break;
			case CommonConstant.NODATA :
				result.setErrorCode(-1);
				result.setErrorMsg(languageUtil.getMessage(inVar, "000236"));	// 전송 할 데이터가 존재하지 않습니다.
		    	break;
			case CommonConstant.NOT_FIND_SERVICE :
				result.setErrorCode(-1);
				result.setErrorMsg(languageUtil.getMessage(inVar, "000405"));	// 업무 서비스를 찾지 못했습니다.
		    	break;	
			case CommonConstant.PARAM_ERROR :
				result.setErrorCode(-1);
				result.setErrorMsg(languageUtil.getMessage(inVar, "000092"));	// 유효하지 않은 값입니다.
		    	break;
			}

		} catch (Exception e) {
			result.setErrorCode(-1);
			result.setErrorMsg(getErrorMsg(inVar, e));
		}

    	return result;

    }
	
	@RequestMapping(value = "/smreceive.do")
    public NexacroResult smreceive(HttpServletRequest request) {
		NexacroResult result = new NexacroResult();
    	VariableList inVar 	 = new VariableList();
    	List<Map<String, Object>> resultOutputList = null;
    	
    	try {
    		HttpPlatformRequest hpRequest = new HttpPlatformRequest(request);
	    	hpRequest.receiveData();
	    	System.out.println(">>>>>>>>");
	    	PlatformData inputData = hpRequest.getData();
        	inVar 	= inputData.getVariableList();

			DataSetList dataset = inputData.getDataSetList();
			DataSetList inDataSet = new DataSetList();
			
			log.debug("dataset : " + dataset.size());
			
			for (int i = 0; i < dataset.size(); i++) {
				DataSet ds = dataset.get(i);

				if (ds.getName().startsWith("input")) {
					inDataSet.add(ds);
				}
			}
			
			//선박별 요청실패 데이터 요청
			result = transferService.smreceive(inVar, inDataSet);
        	
			

		} catch (Exception e) {
			result.setErrorCode(-1);
			result.setErrorMsg(getErrorMsg(inVar, e));
		}

    	return result;

    }
	
	/**
	 * 메시지 setting함수
	 * @param inVar
	 * @param e
	 * @return
	 */
	private String getErrorMsg(VariableList inVar, Exception e) {
		String errorMsg ;
		Throwable de = e.getCause();

		if (e instanceof HttpHostConnectException) {
			log.error("통신오류: {}", e.getMessage());
			errorMsg = languageUtil.getMessage(inVar, "000154");	// 통신중 오류가 발생하였습니다.
		} else if (de instanceof BadSqlGrammarException) {
			log.error("SQL 정합성에러: {}", de.getMessage());
			String[] argArr = {String.valueOf(((BadSqlGrammarException) de).getSQLException().getErrorCode())
					, String.valueOf(((BadSqlGrammarException) de).getSQLException().getMessage())};
			errorMsg = languageUtil.getMessage(inVar, "000088", argArr);	// SQL 오류가 발생했습니다! 오류 코드: {0}, 오류 메시지: {1}
		} else if (de instanceof DuplicateKeyException) {
			log.error("키값 중복에러: {}", de.getMessage());
			errorMsg = languageUtil.getMessage(inVar, "000235");	// 중복된 데이터가 존재하여 저장할 수 없습니다.
		} else if (de instanceof NexaServiceException) {
			log.error("커스텀 에러 : {}", de.getMessage());
			errorMsg = de.getMessage();
		} else {
			errorMsg = languageUtil.getMessage(inVar, "000213");	// 처리중 에러가 발생하였습니다.
			log.error("", e);
			log.error(e.getMessage());
		}
		
		return errorMsg;
	}
}