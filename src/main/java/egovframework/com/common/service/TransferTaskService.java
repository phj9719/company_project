package egovframework.com.common.service;

import java.util.List;
import java.util.Map;

/**
 * 전송 업무를 처리하는 서비스단 로직 구성
 * 전송 업무를 처리하는 서비스단에서 이를 구현하여 Trans_job 정보에 등록하여야한다.
 * @author Lenovo
 *
 */
public interface TransferTaskService {
	
	/**
	 * 서비스별 전송 할 데이터를 만드는 로직 구현
	 * 선박별 같은 데이터
	 * @param companyCd
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> createSendDetailData(String companyCd) throws Exception;
	
	
	/**
	 * 서비스별 전송 할 데이터를 만드는 로직 구현
	 * 선박별 다른 데이터
	 * @param companyCd
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> createSendDetailData(String companyCd, String destVesselCd) throws Exception;
	
	/**
	 * 서비스별 후처리 작업 정의
	 * exception을 발생시키지 않고, 작업 결과만 리턴한다.
	 * @param params
	 * @return
	 */
	public Boolean doAfterTask(Map<String, Object> params);
	
	/**
	 * 수신처의 후처리 결과 전송 받음 (Detail 별 결과)
	 * @param params 
	 * 	COMPANY_CD   
		TRANS_ID     
		DESTINATION
		ROW_INDEX    
		TRANS_STATUS 
		DEPARTURE 
	 * @return
	 */
	public void getAfterTaskResult(Map<String, Object> params);

}
