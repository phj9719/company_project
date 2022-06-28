/************************************************************************************
 * Argus System Util
 * Copyright(c) SCT
 * 
 * 1.Program  			: Common FileUtil
 * 2.File Name			: FileUtil.java
 * 3.Developer			: JL
 * 4.Development Date	: 2017-11-21
 * 5.Version			: 0.1
 * 6.Note				: 
 * 7.History		    :
*************************************************************************************/
package egovframework.com.common.util;

import java.io.File;
import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.FileDataSource;
import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.internet.MimeUtility;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.GsonHttpMessageConverter;
import org.springframework.stereotype.Component;
import org.springframework.util.StopWatch;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

/**
 * Alert관련 UTIL Class
 * @author SCT-PC-4
 *
 */
@Component("SendMassenger")
public class SendMassenger {

	private Logger log = LoggerFactory.getLogger(this.getClass().getSimpleName());

	/**
	 * Alert 실행
	 * @param DataSet
	 * @return void
	 */
	public void sendMassenger(String user, String message, String solution_name) {

		log.info("sendMassenger() Start!");
	
		HttpMethod method = HttpMethod.POST;
		int connectTime = 3000;
		int readTime = 10000;
		String path = "https://api.hiworks.com/office/v2/notify";
	//	String message = "알림테스트입니다. ERP 결제요청이 있습니다.";
		String link = "http://61.78.201.160:8080/Argos/launch.html?screenid=screen_generated";
	//	String solution_name = "알림테스트입니다. ERP 결제요청";
		
		
		log.info(user);
		user = "sct@sangjiship.com";
		
		try {
			UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(path);
			
			URI uri = uriBuilder.build().toUri();

			HttpHeaders headers = new HttpHeaders();
			headers.set("Content-Type",  "application/json");
			headers.set("Authorization", "Bearer 5ddb3f72ad89f8d9d13d0face0f31ea0");
			
			JsonObject body = new JsonObject();	
			
			JsonArray user_list = new JsonArray();
			user_list.add(user);
			
			body.add("user_list", user_list);
			body.addProperty("message", message);
			body.addProperty("link", link);
			body.addProperty("solution_name", solution_name);
			
			System.out.println("body>>>>>>>>>>>>>>"+body.toString());
			HttpEntity httpEntity = new HttpEntity (body, headers);
			
			RestTemplate restTemplate = new RestTemplate();
			//컨버터 설정
			List<HttpMessageConverter<?>> converters = new ArrayList<HttpMessageConverter<?>>();
			converters.add(new GsonHttpMessageConverter());
			
			restTemplate.setMessageConverters(converters);
			// 시간설정 추가
			//HttpComponentsClientHttpRequestFactory requestFactory = (HttpComponentsClientHttpRequestFactory)restTemplate.getRequestFactory();
			//log.debug("requestFactory : " + requestFactory);
			//requestFactory.setConnectTimeout(connectTime);
			//requestFactory.setReadTimeout(readTime);

			//log.debug( "Send Method : {"+ method.toString() +"}, URL : {"+uri+"}");
			//log.debug( "Send Header : {"+ httpEntity.getHeaders() +"}");
			//log.debug( "Send Payload : {"+ httpEntity.getBody().toString() +"}");//StringUtils.jsonParse(httpEntity.getBody()));

			StopWatch stopWatch = new StopWatch( uri.toString() );
			stopWatch.start( uri.toString() );// StopWatch Start
			ResponseEntity<Map<String, Object>> responseEntity = restTemplate.exchange(uri, method, httpEntity, new ParameterizedTypeReference<Map<String, Object>>() {});
			stopWatch.stop();// StopWatch End

//			logger.debug("success " + responseEntity.getStatusCode() + " " + responseEntity.getBody() + " by " + method.toString() + " " + path + " " + params);

			log.debug( "Response HttpStatus Code  : {"+ responseEntity.getStatusCode() +"}");
			log.debug( "Response Body : {"+ responseEntity.getBody() +"}");
			log.debug( "Rest During Time : {"+stopWatch.getLastTaskInfo().getTaskName() +"}, {"+stopWatch.getLastTaskTimeMillis()+"} ]");

			if(responseEntity.getStatusCode().equals("200")) {
				System.out.println("성공");
			}
			log.info("sendMassenger() End!");
			return;
			
		} catch (HttpStatusCodeException e) {
			log.error("fail " + e.getMessage() + " by " + method.toString() + " " + path + " ", e);
			return;
		} catch (RestClientException e) {
			log.error("fail " + e.getMessage() + " by " + method.toString() + " " + path  + " ", e);
			
			Map<String, Object> rb = new HashMap<String,Object>();
			rb.put("resultCode", "FAIL");
			rb.put("resultMessage", "네트워크 연결이 되지 않습니다.");
			
			return; 
		} catch (Exception e) {
			log.error("fail " + e.getMessage() + " by " + method.toString() + " " + path  + " ", e);
			return;
		} finally {
			
		}

	}
	
}



