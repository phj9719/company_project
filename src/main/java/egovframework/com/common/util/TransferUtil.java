package egovframework.com.common.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URI;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpEntityEnclosingRequestBase;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.stereotype.Component;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.util.StopWatch;
import org.springframework.util.StringUtils;
import org.springframework.util.concurrent.ListenableFuture;
import org.springframework.web.client.AsyncRestTemplate;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.request.async.DeferredResult;
import org.springframework.web.util.UriComponentsBuilder;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import egovframework.com.common.constant.CommonConstant;
import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.domain.TransferResponse;

/**
 * 송수신관련 UTIL Class
 * @author SCT-PC-4
 *
 */
@Component("TransferUtil")
public class TransferUtil {

	@Resource(name="commonDao")
	private CommonDao commonDao;

	@Autowired
	private UpdateMetadataUtil updateMetadataUtil;

	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;

	@Resource(name="FtpUtil") 
	private FtpUtil ftpUtil;
	
	@Resource(name="LanguageUtil")
	private LanguageUtil languageUtil;

	private static Logger log = LoggerFactory.getLogger(TransferUtil.class);

	@Autowired
	private PlatformTransactionManager transactionManager;
	
	private static AsyncRestTemplate asyncRestTemplate;
	
	private static RestTemplate restTemplate;
	static {
		HttpComponentsClientHttpRequestFactory requestFactory = new HttpComponentsClientHttpRequestFactory() {
			@Override
			protected HttpUriRequest createHttpUriRequest(HttpMethod httpMethod, URI uri) {
				if (HttpMethod.DELETE == httpMethod) {
					return new HttpDelete(uri);
				}
				return super.createHttpUriRequest(httpMethod, uri);
			}
		};
		requestFactory.setConnectTimeout(5000);
		requestFactory.setReadTimeout(5000);
		restTemplate = new RestTemplate(requestFactory);
		
		//List<HttpMessageConverter<?>> list = new ArrayList<HttpMessageConverter<?>>();
		//list.add(new FormHttpMessageConverter());
		//list.add(new StringHttpMessageConverter());
		//list.add(new MappingJackson2HttpMessageConverter());
		//restTemplate.setMessageConverters(list);
		
		asyncRestTemplate = new AsyncRestTemplate();
	}
	private static class HttpDelete extends HttpEntityEnclosingRequestBase {
	    public HttpDelete(final URI uri) {
	        super();
	        setURI(uri);
	    }

	    @Override
	    public String getMethod() {
	        return "DELETE";
	    }
	}
	
	private String getDestinationURL(String destVesselCd) {
		if(destVesselCd == null || destVesselCd.length() == 0) {
			return "";
		}
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SERVER_CD", destVesselCd);
		List<Map<String, Object>> serverList = commonDao.getList("SM_TRANS.getServerUrl", param);
		if (serverList == null || serverList.size() == 0) {
			return "";
		}
		
		return (String)serverList.get(0).get("REQ_URL");
	}
	
	private String getServerIP(String vesselCd) {
		if(vesselCd == null || vesselCd.length() == 0) {
			return "";
		}
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("SERVER_CD", vesselCd);
		List<Map<String, Object>> serverList = commonDao.getList("SM_TRANS.getServerUrl", param);
		if (serverList == null || serverList.size() == 0) {
			return "";
		}
		
		return (String)serverList.get(0).get("IP");
	}
	
	public static Map<String, Object> getErrResponseMap(HttpStatus httpStatus) {
		Map<String, Object> responseBody = new HashMap<String,Object>();
		responseBody.put("resultCode", httpStatus.name());
		responseBody.put("resultMessage", "HttpStatus "+httpStatus.value());
		return responseBody;
	}
	
	/**
	 * Http Protocol로 전송
	 * ConnectionTimeOut 3초
	 * @param path
	 * @param params
	 */
	private static TransferResponse transByHttp(String path, Map<String, Object> params) {
		HttpMethod method = HttpMethod.POST;
		int connectTime = 3000;
		int readTime = 10000;
		try {
			UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(path);

			//uriBuilder.queryParam(entry.getKey(), entry.getValue());
			URI uri = uriBuilder.build().toUri();

			HttpHeaders headers = new HttpHeaders();
			headers.set("Content-Type", "application/json");
			//headers.set("Authorization", "");
			
			HttpEntity httpEntity = new HttpEntity (params, headers);

			// 시간설정 추가
			HttpComponentsClientHttpRequestFactory requestFactory = (HttpComponentsClientHttpRequestFactory)restTemplate.getRequestFactory();
			log.debug("requestFactory : " + requestFactory);
			requestFactory.setConnectTimeout(connectTime);
			requestFactory.setReadTimeout(readTime);

			log.debug( "Send Method : {"+ method.toString() +"}, URL : {"+uri+"}");
			log.debug( "Send Header : {"+ httpEntity.getHeaders() +"}");
			log.debug( "Send Payload : {"+ httpEntity.getBody().toString() +"}");//StringUtils.jsonParse(httpEntity.getBody()));

			StopWatch stopWatch = new StopWatch( uri.toString() );
			stopWatch.start( uri.toString() );// StopWatch Start
			ResponseEntity<Map<String, Object>> responseEntity = restTemplate.exchange(uri, method, httpEntity, new ParameterizedTypeReference<Map<String, Object>>() {});
			stopWatch.stop();// StopWatch End

//			logger.debug("success " + responseEntity.getStatusCode() + " " + responseEntity.getBody() + " by " + method.toString() + " " + path + " " + params);

			log.debug( "Response HttpStatus Code  : {"+ responseEntity.getStatusCode() +"}");
			log.debug( "Response Body : {"+ responseEntity.getBody() +"}");
			log.debug( "Rest During Time : {"+stopWatch.getLastTaskInfo().getTaskName() +"}, {"+stopWatch.getLastTaskTimeMillis()+"} ]");

			return new TransferResponse(responseEntity.getStatusCode(), responseEntity.getBody());
			
		} catch (HttpStatusCodeException e) {
			log.error("fail " + e.getMessage() + " by " + method.toString() + " " + path + " " + params, e);
			return new TransferResponse(e.getStatusCode(), getErrResponseMap(e.getStatusCode()));
		} catch (RestClientException e) {
			log.error("fail " + e.getMessage() + " by " + method.toString() + " " + path  + " " + params, e);
			
			Map<String, Object> rb = new HashMap<String,Object>();
			rb.put("resultCode", "FAIL");
			rb.put("resultMessage", "네트워크 연결이 되지 않습니다.");
			
			return new TransferResponse(HttpStatus.NOT_FOUND, rb);
		} catch (Exception e) {
			log.error("fail " + e.getMessage() + " by " + method.toString() + " " + path  + " " + params, e);
			return new TransferResponse(e);
		} finally {
			
		}
	}
	
	/**
	 * Http Async Protocol로 전송
	 * ConnectionTimeOut 3초
	 * @param path
	 * @param params
	 */
	private static DeferredResult<String> transByAsyncHttp(String path, Map<String, Object> params) {
		log.debug("transByAsyncHttp called : " + params.toString());
		log.debug("asyncRestTemplate : " + asyncRestTemplate);
		HttpHeaders headers = new HttpHeaders();
		headers.set("Content-Type", "application/json");
		
		DeferredResult<String> dr = new DeferredResult<>();
		
		HttpEntity<Map<String, Object>> httpEntity = new HttpEntity<Map<String, Object>> (params, headers);
		ListenableFuture<ResponseEntity<Map<String, Object>>> responseEntity = asyncRestTemplate.exchange(path, HttpMethod.POST, httpEntity, new ParameterizedTypeReference<Map<String, Object>>() {});
		
		
		
		responseEntity.addCallback(result -> {
											
												log.debug( "R  : {"+ result.toString() +"}");
												log.debug( "Response HttpStatus Code  : {"+ result.getStatusCode() +"}");
												log.debug( "Response Body : {"+ result.getBody() +"}");
												
												
												//dr.setResult("001");
												//dr.setResult(result.getStatusCode()+"/work");
												//dr.setErrorResult(result);
												dr.setResult(result.getBody()+"/work");
												
												log.debug( ">> "+ dr.getResult());
												
												//log.debug( "성공 >> "+ params.get("TRANS_ID"));
												if(dr.getResult().toString().contains("SUCCESS")) {
													log.debug( "성공 >> "+ dr.getResult());
													
												} else {
													log.debug( "실패 >> "+ dr.getResult());
												}
			 
											  }
								   , ex-> {
									   		log.debug("fail : " + ex.getStackTrace());
									   		//dr.setResult("002");
									   		dr.setResult(ex.getMessage());
									   		log.debug( "실패 >> "+ params.get("TRANS_ID"));
									   		
									   		
									   		
								   			}
				
								  
				);		
		
		
		log.debug( "##>>>> "+ dr.getResult());
		return dr;
		
		
		
	}
	
	/**
	 * 데이터 송신 : 송신측 Task
	 * @param destVesselCd
	 * @param params
	 * @return
	 */
	public TransferResponse IF_sendReq(String destVesselCd, Map<String, Object> params) {
		String uri = getDestinationURL(destVesselCd);
		if(uri == null || uri.length() == 0) {
			return null;//return error;
		}
		
		return transByHttp(uri+"/sendReq.do", params);
	}
	
	/**
	 * 데이터 송신 : 송신측 Task
	 * @param destVesselCd
	 * @param params
	 * @return
	 */
	public TransferResponse IF_sendRequest(Map<String, Object> params) {
		
		// 수신처 정보(uri) 조회 (공통코드 : TRANS_DEST)
		String uri = getDestinationURL(params.get("DESTINATION").toString());
		
		// 주소없음 실패처리
		if(uri == null || uri.length() == 0) {
			
			//resultMap.put("resultCode", "FAIL");
			// 수신url 없음
			//resultMap.put("resultMessage", languageUtil.getMessage("000408")); //예외발생
			Map<String, Object> responseBody = new HashMap<String,Object>();
			responseBody.put("resultCode", "FAIL");
			responseBody.put("resultMessage", params.get("DESTINATION").toString()+"의 URI 주소가 없습니다.");
			//String[] argArr = {params.get("DESTINATION").toString()};
			//responseBody.put("resultMessage", languageUtil.getMessage("000548",argArr));
			
			return new TransferResponse(HttpStatus.NOT_FOUND, responseBody);
		}
		
		log.debug("수신처 sendRequest 연결");
		return transByHttp(uri+"/sendRequest.do", params);
		//return transByAsyncHttp(uri+"/sendRequest.do", params);
		
	}
	
	public TransferResponse IF_sendReceiveRequest(Map<String, Object> params) {
		
		// 수신처 정보(uri) 조회 (공통코드 : TRANS_DEST)
		String uri = getDestinationURL(params.get("DEPARTURE").toString());
		
		// 주소없음 실패처리
		if(uri == null || uri.length() == 0) {
			return new TransferResponse(HttpStatus.NOT_FOUND, getErrResponseMap(HttpStatus.NOT_FOUND));
		}
		
		log.debug("수신처 sendReceiveRequest 연결");
		return transByHttp(uri+"/sendReceiveRequest.do", params);
	}
	
	public DeferredResult<String> IF_sendReq3(Map<String, Object> params) {
		
		
		System.out.println("params>>> "+params.toString());
		String uri = getDestinationURL(params.get("DESTINATION").toString());
		DeferredResult<String> dr = new DeferredResult<>();
		
		if(uri == null || uri.length() == 0) {
			dr.setResult("003");
			System.out.println("uri>>>>> "+params.get("DESTINATION").toString()+ " : " +dr.setResult("주소없음"));
			return dr;//return error;
		}
		
		System.out.println("uri>>>>> "+params.get("DESTINATION").toString()+ " : " +uri);
		
		return transByAsyncHttp(uri+"/sendRequest.do", params);
		
	}

	/**
	 * send Detail의 상태 변경 : 수신측 Task
	 * @param params
	 */
	public void IF_updateSendDetailStatus(Map<String, Object> recvDetailMap) {
		String departure = (String)recvDetailMap.get("DEPARTURE");
		String uri = null;
		System.out.println("송신 측 1 " + recvDetailMap.values());
		System.out.println("송신 측 1 " + departure);
		if (!StringUtils.isEmpty(departure)) {
			
			uri = getDestinationURL(departure);
			System.out.println("송신 측 1-1 " + uri);
			if (!StringUtils.isEmpty(uri)) {
				
				// 작동안함
				//transByAsyncHttp(uri+"/transTaskResult.do", recvDetailMap);
				transByHttp(uri+"/transTaskResult.do", recvDetailMap);
			}
			System.out.println("송신 측 2 ");
		}
		System.out.println("송신 측 3 ");
	}
	
	/**
	 * 수신 데이터 요청 : 수신측 Task
	 * @param params
	 * @return
	 */
	public TransferResponse IF_receiveDataReq(Map<String, Object> params) {
		String departure = (String)params.get("DEPARTURE");
		String uri = null;
		
		if (!StringUtils.isEmpty(departure)) {
			uri = getDestinationURL(departure);
			if (StringUtils.isEmpty(uri)) {
				return null;
			}
			return transByHttp(uri+"/receiveDataReq.do", params);
		}
		
		return null;
	}
	
	/**
	 * 등록된 자신의 선박코드 조회
	 * @return
	 */
	public String getMyVesselCd() {
		return commonDao.getString("SM_TRANS.GET_MY_VESSEL_CD", "");
	}
	
	
	/**
	 * FILE_GROUP_ID 하나를 전송 받는다 : 수신측 Task
	 * FTP 프로토콜을 이용한 전송
	 * 결과는 새로 저장된 파일의 FILE_GROUP_ID
	 * @param companyCd
	 * @param departureVesselCd : 송신처의 선박 코드
	 * @param departureFileGroupId	: 송신처의 FILE_GROUP_ID
	 */
	public String getFileGroup(String companyCd, String departureVesselCd, String departureFileGroupId) {
		String resultFileGroupId = null;
		Map<String, Object> params = null;
		
		//송신처에 파일 전송 요청
		String uri = getDestinationURL(departureVesselCd);
		if(uri == null || uri.length() == 0) {
			return null;
		}

		params = new HashMap<String, Object>();
		params.put("COMPANY_CD", companyCd);
		params.put("DESTINATION", getMyVesselCd());
		params.put("FILE_GROUP_ID", departureFileGroupId);
		
		TransferResponse resultFileRes = transByHttp(uri+"/transFtpFile.do", params);
		
		if (resultFileRes != null) {
			//FTP 전송 FTP/out/destVesselCd/ (송신처) => FTP/in (수신처)
			Map<String, Object> resultMap = resultFileRes.getResponseResult();
			List<Map<String, Object>> resultFileInfoList = null;
			if (resultMap != null) {
				log.debug("getFileGroup : " + resultMap.toString());
				resultFileInfoList = (List<Map<String, Object>>)resultMap.get("resultFileInfoList");
				if (resultFileInfoList != null) {
					String ip = getServerIP(departureVesselCd);
					try {
						if (ftpUtil.getFile(ip, resultFileInfoList) == CommonConstant.SUCCESS) {
							
							resultFileGroupId = fileCopyFromFtpDir(resultFileInfoList);//
						
						}
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			}
		}
		
		return resultFileGroupId;
		
	}
	
	/**
	 * 해당 파일을 FTP/out/{destVesselCd}/ 에 복사 한다. 송신처 Task
	 * @param destVesselCd
	 * @param fileInfoList
	 * @return
	 * @throws IOException
	 */
	public Boolean fileCopyToFtpDir(String destVesselCd, List<Map<String, Object>> fileInfoList) throws IOException {
		Boolean result = true;
		String toFilePath = CommonConstant.FTP_DIR_OUT + destVesselCd;
		File fromFile;
		File toFile = new File(toFilePath);
		toFile.mkdirs();
		Calendar cal = Calendar.getInstance();
		SimpleDateFormat dataFormat = new SimpleDateFormat("yyyyMMddHHmmssSSS");
		
		FileInputStream inStream = null;
		FileOutputStream outStream = null;

		String fromFileName;
		String fromFileRealName;
		String toFileName;
		String toFileRealName;
		//FTP/out/destVesselCd/ 에 파일을 복사
		for(Map<String, Object> fileItem : fileInfoList) {
			fromFileName = (String)fileItem.get("FILE_NAME");
			fromFileRealName = CommonConstant.FILE_ROOT_DIR + (String)fileItem.get("FILE_REAL_NAME");
			
			fromFile = new File(fromFileRealName);
			log.debug("fileCopyToFtpDir fromFileRealName: " + fromFileRealName + " , fromFile :" + fromFile);
			
			//파일 존재 여부 판단
			if(fromFile == null || !fromFile.exists()) {
				continue;
			}
			
			toFileName = fromFileName.substring(0, fromFileName.lastIndexOf(".")) + "_" + dataFormat.format(Calendar.getInstance().getTime()) + fromFileName.substring(fromFileName.lastIndexOf("."));
			toFileRealName = toFilePath + File.separator + toFileName;
			log.debug("FTP file Name : " + toFileName);
			fileItem.put("FTP_OUT_FILE_NAME", toFileName);
			fileItem.put("FTP_OUT_FILE_REAL_NAME", toFileRealName.replace(CommonConstant.FILE_ROOT_DIR, ""));
			
			
			toFile = new File(toFileRealName);
			try {
				inStream = new FileInputStream(fromFile);
				outStream = new FileOutputStream(toFile);
				
				byte[] buffer = new byte[1024];
			    int length;
			    while ((length = inStream.read(buffer)) > 0){
			      outStream.write(buffer, 0, length);
			    }
				
			} catch (FileNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				result = false;
			}  catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				result = false;
			} finally {
				inStream.close();
				outStream.close();
			}
		} //end of fors
		
		return result;
	}
	
	/**
	 * 수신하여 FTP/in 폴더에 있는 파일을 업무 파일 위치에 저장 : 수신처 Task
	 * 새로운 정보로 db insert
	 * @param fileInfoList
	 * @return 새로 저장된 file group id
	 * @throws IOException
	 */
	public String fileCopyFromFtpDir(List<Map<String, Object>> fileInfoList) throws IOException {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		String resultFileGroupId = null;
		
		File fromFile = null;
		File toFile = null;
		
		FileInputStream inStream = null;
		FileOutputStream outStream = null;

		String fromFileName;
		String fromFileRealName;
		String toFileName;
		String toFileRealName;
		String toFileDirectory;
		Integer copyCount = 0;
		
		//1. FTP/in 에서 업무 파일 폴더로 복사
		//2. DB insert
		
		// T_SM_SEND_FILE의 FILE_GROUP_ID를 채번
		Map<String, Object> map = commonDao.getMap("SM_FILE.SEARCH_GROUP_ID", null);
		resultFileGroupId = String.valueOf(map.get("FILE_GROUP_ID"));
		
		try {
			
			for(Map<String, Object> fileItem : fileInfoList) {
				fromFileName = (String) fileItem.get("FTP_OUT_FILE_NAME");
				//복사 할 파일이 없을 때
				if (StringUtils.isEmpty(fromFileName)) {
					continue;
				}
				
				fromFileRealName= CommonConstant.FILE_ROOT_DIR + CommonConstant.FTP_DIR_IN + fromFileName;
				
				fromFile = new File(fromFileRealName);
				log.debug("fileCopyFromFtpDir fromFileRealName: " + fromFileRealName + " , fromFile :" + fromFile);
				
				//파일 존재 여부 판단
				if(fromFile == null || !fromFile.exists()) {
					continue;
				}
				
				toFileName = (String)fileItem.get("FILE_NAME");
				toFileRealName = (String)fileItem.get("FILE_REAL_NAME");
				
				//파일 디렉토리 생성
				toFileDirectory = CommonConstant.FILE_ROOT_DIR + File.separator + toFileRealName;
				toFileDirectory = toFileDirectory.substring(0, toFileDirectory.lastIndexOf(toFileName));
				new File(toFileDirectory).mkdirs();
				
				toFile = new File(CommonConstant.FILE_ROOT_DIR + File.separator + toFileRealName);
				
				log.debug("toFileName Name : " + toFileName + " , toFileDirectory :" + toFileDirectory + " , toFileRealName :" + toFileRealName);
				
				try {
					inStream = new FileInputStream(fromFile);
					outStream = new FileOutputStream(toFile);
					
					byte[] buffer = new byte[1024];
				    int length;
				    while ((length = inStream.read(buffer)) > 0){
				      outStream.write(buffer, 0, length);
				    }
				    
				} catch (FileNotFoundException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}  catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} finally {
					inStream.close();
					outStream.close();
					
					//파일 복사 후 FTP/in 에서 삭제
				    fromFile.delete();
				}
				
				fileItem.put("FILE_GROUP_ID", resultFileGroupId);
				updateMetadataUtil.setAuditData_batch(fileItem, this.getClass().getSimpleName());

				commonDao.insertData("SM_FILE.INSERT_FILE", fileItem);
				
				//기존 파일을 삭제 할 경우, 
				//파일 삭제 로직 필요
				
				++copyCount;
			} //end of for
			
			transactionManager.commit(transactionStatus);
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatus);
		}
		
		if (copyCount == 0) {
			resultFileGroupId = null;	
		}
		
		return resultFileGroupId;
	}
	
	

	/**
	 * 원격서버 통신(http방식으로 Call)
	 * @param url
	 * @param myVesselCd
	 * @throws Exception
	 */
	private void callRemote(String url, String myVesselCd) throws Exception {
        //http client 생성
        CloseableHttpClient httpClient = HttpClients.createDefault();
        
        //get 메서드와 URL 설정
        HttpGet httpGet = new HttpGet(url + "?SERVER_CD=" + myVesselCd);
        
        //agent 정보 설정
        //httpGet.addHeader("User-Agent", USER_AGENT);
        httpGet.addHeader("Content-type", "application/json");

        //get 요청
        CloseableHttpResponse httpResponse = httpClient.execute(httpGet);
        HttpEntity entity = (HttpEntity) httpResponse.getEntity();
        String content = EntityUtils.toString((org.apache.http.HttpEntity) entity);

        log.info("RES:" + httpResponse.getStatusLine().getStatusCode());
        log.info(content);

        httpClient.close();
	}
	
	
	/**
	 * Json Parsing 후 FTP서버로 송신)
	 * @param map (TRANS_ID 포함)
	 * @return void
	 * @throws Exception
	 */
	public void ftpParsingSend(List<Map<String, Object>> mapList) {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition(TransactionDefinition.PROPAGATION_NESTED);
		TransactionStatus transactionStatusNested = transactionManager.getTransaction(transactionDefinition);
		try {
			//파일전송 start
			for(int l = 0; l<mapList.size(); l++) {
				List<Map<String, Object>> transMapList	 = new ArrayList<Map<String, Object>>();			
				//T_SM_SEND_MAIN에 FTP_TRANS_STATUS가 01인것 만 조회
				
				transMapList = commonDao.getList("SM_TRANS.SM_TRANS_SEND_MAIN_SEARCH", mapList.get(l));
				
				int err_code = 0;
				String err_msg = "";
			//	System.out.println("11111111111111111111"); 
				for(int i = 0; i<transMapList.size(); i++) {
					log.info("TRANS_ID:"+transMapList.get(i).get("TRANS_ID"));
					JsonParser parser = new JsonParser();
				//	System.out.println("222222222222222222222"); 
					JsonObject transCnt = (JsonObject) parser.parse((String) transMapList.get(i).get("TRANS_CNT")); 
					
				//	System.out.println("transCnt>>>>>>>>>>"+transCnt);
					
					JsonArray arrRoot = (JsonArray) transCnt.get("ROOT");
					
				//	System.out.println("arrRoot>>>>>>>>>>>>"+arrRoot);
				//	System.out.println("arrRoot.size()>>>>>>>>>>>>"+arrRoot.size());
					
					JsonObject Root = null;
					JsonArray arrList = null;
					List<Map<String,Object>> fileMapList = new ArrayList<>();
					List<String> RootKeyList = new ArrayList<>();
					Root = (JsonObject)arrRoot.get(0);//인덱스 번호로 접근해서 가져온다.
					
				//	System.out.println("Root.size()>>>>>>>>>>>>>>>"+Root.size());
					
					Iterator i2 = Root.keySet().iterator();
					while(i2.hasNext()) {
						String keys = i2.next().toString();
					//	System.out.println(keys);
						RootKeyList.add(keys);
					}
					
					for(int j = 0; j<Root.size(); j++) {//첫행은 table_cnt라 무시
						if(Root.get(RootKeyList.get(j)) instanceof JsonArray) {
							arrList = (JsonArray) Root.get(RootKeyList.get(j));
						//	System.out.println("List>>>>>>>>>>>>>"+(j)+">>>>>>>>>>>>>>>"+arrList);
							if(!arrList.isJsonNull()) {
								for(int k = 0; k<arrList.size(); k++) {
									JsonObject list = (JsonObject)arrList.get(k);//인덱스 번호로 접근해서 가져온다.
								
								//	System.out.println("list>>>>>>>>>>>>>"+(k)+">>>>>>>>>>>>>>>"+list);	
								//	System.out.println("list.get(\"SP_NM\")>>>>>>>>>>>>>"+(k)+">>>>>>>>>>>>>>>"+list.get("SP_NM"));
														
									String spNm = list.get("SP_NM").toString();
									
									if(spNm.equals("\"SP_SM_FILE_RECEIVE\"")) {
										Map<String,Object> fileMap = new HashMap<String, Object>();
										String FILE_GROUP_ID = list.get("FILE_GROUP_ID").toString().replaceAll("\\\"","");
										String FILE_ID = list.get("FILE_ID").toString().replaceAll("\\\"","");
										String COMPANY_CD = list.get("COMPANY_CD").toString().replaceAll("\\\"","");
										String ROW_CNT = list.get("ROW_CNT").toString().replaceAll("\\\"","");						
										String ROW_POS = list.get("ROW_POS").toString().replaceAll("\\\"","");	
										String FILE_NAMENO = list.get("FILE_REAL_NAME").toString().replaceAll("\\\"","");
										String FILE_NAME = FILE_NAMENO.split("/")[FILE_NAMENO.split("/").length-1];						
										String FILE_REAL_NAME = list.get("FILE_REAL_NAME").toString().replaceAll("\\\"","");		
									
										fileMap.put("FILE_GROUP_ID", FILE_GROUP_ID);
										fileMap.put("FILE_ID",FILE_ID);
										fileMap.put("COMPANY_CD",COMPANY_CD);
										fileMap.put("ROW_CNT",ROW_CNT);
										fileMap.put("ROW_POS",ROW_POS);
										fileMap.put("FILE_NAME",FILE_NAME);
										fileMap.put("FILE_REAL_NAME",FILE_REAL_NAME);
										fileMapList.add(fileMap);
									}
								//	System.out.println("33333333333333333333333333"); 	
									if(spNm.equals("\"SP_GR_FILE_RECEIVE\"")) {
										Map<String,Object> fileMap = new HashMap<String, Object>();
										String FILE_GROUP_ID = list.get("FILE_GROUP_ID").toString().replaceAll("\\\"","");
										String FILE_ID = list.get("FILE_ID").toString().replaceAll("\\\"","");
										String COMPANY_CD = list.get("COMPANY_CD").toString().replaceAll("\\\"","");
										String ROW_CNT = list.get("ROW_CNT").toString().replaceAll("\\\"","");						
										String ROW_POS = list.get("ROW_POS").toString().replaceAll("\\\"","");	
										String FILE_NAMENO = list.get("ATT_FILE_PATH").toString().replaceAll("\\\"","");
										String FILE_NAME = FILE_NAMENO.split("/")[FILE_NAMENO.split("/").length-1];						
										String FILE_REAL_NAME = list.get("ATT_FILE_PATH").toString().replaceAll("\\\"","");		
									
										fileMap.put("FILE_GROUP_ID", FILE_GROUP_ID);
										fileMap.put("FILE_ID",FILE_ID);
										fileMap.put("COMPANY_CD",COMPANY_CD);
										fileMap.put("ROW_CNT",ROW_CNT);
										fileMap.put("ROW_POS",ROW_POS);
										fileMap.put("FILE_NAME",FILE_NAME);
										fileMap.put("FILE_REAL_NAME",FILE_REAL_NAME);
										fileMapList.add(fileMap);
									}
								}
							}
						}
					}
				//	System.out.println("44444444444444444444444444444"); 
					if(fileMapList.isEmpty()) {
						break;
					}
				//	System.out.println("555555555555555555555555555555"); 
					//192.168.100.145 대신 despIp 넣으주면 됨
					String despIp = commonDao.getString("SM_TRANS.SM_SEND_DESTIP",transMapList.get(i));
					
					err_code = ftpUtil.sendFile(despIp, fileMapList);
					log.info("err_code:"+err_code);
					
					if(err_code == 0) {
						err_msg = "파일전송 정상";
					}else if(err_code == -6){	
						err_msg = "FTP 전송오류";
					}else if(err_code == -5){	
						err_msg = "FTP 통신오류";
					}else if(err_code == -7){	
						err_msg = "파일존재하지 않음";
					}
								
					updateMetadataUtil.setAuditData_batch(transMapList.get(i), "");
					
					if(err_code != 0) {
						transMapList.get(i).put("FTP_TRANS_STATUS", "01");
						transMapList.get(i).put("REMARK", err_msg);
						commonDao.updateData("SM_TRANS.SM_SEND_FILE_U_FAIL", transMapList.get(i));
						transMapList.get(i).put("TRANS_STATUS", "01");
						commonDao.updateData("SM_TRANS.SM_SEND_FILE_HISTORY_I_FAIL", transMapList.get(i));
						log.error("전송실패");
					}else {
						transMapList.get(i).put("FTP_TRANS_STATUS", "06");
						transMapList.get(i).put("REMARK", err_msg);
						commonDao.updateData("SM_TRANS.SM_SEND_FILE_U_FAIL", transMapList.get(i));
						transMapList.get(i).put("TRANS_STATUS", "06");
						commonDao.updateData("SM_TRANS.SM_SEND_FILE_HISTORY_I_FAIL", transMapList.get(i));
						log.info("전송성공");
					}
				}	
			}
			transactionManager.commit(transactionStatusNested);
		} catch (Exception e) {
			log.error(e.getMessage());
			log.error(e.getCause().getMessage());
			transactionManager.rollback(transactionStatusNested); 
		}
		
	}
	
}
