package egovframework.com.common.domain;

import java.util.Map;

import org.springframework.http.HttpStatus;

/**
 * TransferUtil의 Http protocol 호출에 대한 결과
 * @author Lenovo
 *
 */
public class TransferResponse {
	private HttpStatus httpStatus;
	private Map<String, Object> responseResult;
	
	private Throwable throwable;
	
	public TransferResponse(HttpStatus httpStatus, Map<String, Object> responseResult) {
		this.httpStatus = httpStatus;
		this.responseResult = responseResult;
	}
	
	public TransferResponse(Throwable throwable) {
		this.throwable = throwable;
	}
	
	public HttpStatus getHttpStatus() {
		return httpStatus;
	}
	
	public Map<String, Object> getResponseResult() {
		return responseResult;
	}
	
	public boolean isSuccess() {
		if(httpStatus != null && httpStatus.is2xxSuccessful()) {
			if("SUCCESS".equals(responseResult.get("resultCode"))) {
				return true;
			}
		}
		return false;
	}
	
	public String getFailMessage() {
		if("FAIL".equals(responseResult.get("resultCode")) && responseResult.get("resultMessage") != null) {
			return (String)responseResult.get("resultMessage");
		} else {
			return "HttpStatus Code: " + httpStatus.toString() + ", "+ httpStatus.getReasonPhrase();
		}
	}
}
