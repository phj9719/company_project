package egovframework.com.common.service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

public interface TransferService {
	//송신처 Task
	public Map<String, Object> sendData(VariableList inVar, DataSetList inDataset) throws Exception;
	
	
	//선박별 데이터 전송 : Async
	public void sendDataReq(String destVesselCd, Map<String, Object> senData) throws Exception;
	
	//선박별 데이터 전송 : Async
	public String sendDataReq2(Map<String, Object> senData) throws Exception;
	
	public void sendDataReq3(Map<String, Object> senData) throws Exception;
	
	public void sendDataRequest(List<Map<String, Object>> sendList) throws Exception;
	
	public String sendDataBatchReq(Map<String, Object> sendMap) throws Exception;
	
	public String sendReveiveDataBatchReq(Map<String, Object> sendMap) throws Exception;
	//후처리 결과 상태 수정
	public void updateSendStatusByAfterTaskResult(Map<String, Object> paramMap, String remark);
	
	//FTP파일 전송 요청
	public List<Map<String, Object>> transFtpFiles(Map<String, Object> paramMap) throws IOException;
	
	
	public List receiveDataReq(String destinationVesselCd, Map<String, Object> params);
	
	
	
	//수신처 Task
	//전송 받은 데이터 저장
	public void receiveData(Map<String, Object> receivedData) throws Exception;
	
	public String receiveDataSave(Map<String, Object> receiveData) throws Exception;
	
	public String receiveReceiveDataSave(Map<String, Object> receiveData) throws Exception;
	
	//수신된 데이터 후작업 처리 : Async
	public void receivedDataAfterTask(String companyCd, String departure);
	
	public void receivedDataAfterTask2(String companyCd, String departure, String dataMode);
	
	//데이터 수신 요청
	public Map<String, Object> receiveReq(VariableList inVar, DataSetList inDataset);

	//데이터 수신 요청 20210204 이동관
	public NexacroResult smreceive(VariableList inVar, DataSetList inDataset);

}
