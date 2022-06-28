package egovframework.com.common.util;

import java.io.FileInputStream;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.messaging.AndroidConfig;
import com.google.firebase.messaging.AndroidNotification;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.Message;

public class FcmUtil {
	
	public void send_FCM(String tokenId, String title, String content) {
		try {
			FirebaseApp tabletApp = null;
			
			// 본인의 json 파일 경로 입력 local
			//FileInputStream refreshToken = new FileInputStream("D:\\SANGJIERP_DEV\\workspace\\ArgosHealthCare\\src\\main\\webapp\\fcm\\nexatablet-6de92-firebase-adminsdk-rywrk-7f6233312c.json");
			
			// 본인의 json 파일 경로 입력 server
			FileInputStream refreshToken = new FileInputStream("/usr/local/tomcat/webapps/ROOT/fcm/nexatablet-6de92-firebase-adminsdk-rywrk-7f6233312c.json");
			
			
			FirebaseOptions options = new FirebaseOptions.Builder()
					.setCredentials(GoogleCredentials.fromStream(refreshToken))
					.build();
			
			// Firebase 처음 호출시에만 initializing 처리
//			if(FirebaseApp.getApps().isEmpty()) {
//				FirebaseApp.initializeApp(options);
//			}
			
			boolean initFlag = true;
			if(!FirebaseApp.getApps().isEmpty()) {
				for(int i = 0; i < FirebaseApp.getApps().size(); i++) {
					if(FirebaseApp.getApps().get(i).getName().equals("tablet")) {
						initFlag = false;
					}
				}
			}
			
			if(initFlag) {
				// Firebase initializing
				tabletApp = FirebaseApp.initializeApp(options, "tablet");
			}
			else {
				tabletApp = FirebaseApp.getInstance("tablet");
			}
			
			// String registrationToken = 안드로이드 토큰 입력;
			String registrationToken = tokenId;
			
			// 토픽(?)
			String topic = "falling";
			
			// message 작성
			Message msg = Message.builder()
					.setAndroidConfig(AndroidConfig.builder()
							.setTtl(3600 * 1000) // 1 hour in milliseconds
							.setPriority(AndroidConfig.Priority.NORMAL)
//							.setNotification(AndroidNotification.builder()
//									.setTitle(title)
//									.setBody(content)
//									.setIcon("stock_ticker_update")
//									.setColor("#f45342")
//									.build())
							.build())
					.putData("title", title)
					.putData("body", content)
					.setTopic(topic)
					//.setToken(registrationToken)
					.build();
			
			// 메세지를 FirebaseMessaging에 보내기
			String response = FirebaseMessaging.getInstance(tabletApp).send(msg);
			
			// 결과 출력
			System.out.println("Successfully sent message : " + response);
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			
		}
	}
	
	public void mSend_FCM(String tokenId, String title, String content, String company) {
		try {
			FirebaseApp mobileApp = null;
			
			System.out.println("공지 푸시 전송 시작");
			
			// 본인의 json 파일 경로 입력 local
			//FileInputStream refreshToken = new FileInputStream("D:\\SANGJIERP_DEV\\workspace\\ArgosHealthCare\\src\\main\\webapp\\fcm\\nexamobile-220bc-firebase-adminsdk-39jho-d47c03c05e.json");
			
			// 본인의 json 파일 경로 입력 server
			FileInputStream refreshToken = new FileInputStream("/usr/local/tomcat/webapps/ROOT/fcm/nexamobile-220bc-firebase-adminsdk-39jho-d47c03c05e.json");
			
			FirebaseOptions options = new FirebaseOptions.Builder()
					.setCredentials(GoogleCredentials.fromStream(refreshToken))
					.setProjectId("nexamobile-220bc")
					.build();
			
			boolean initFlag = true;
			if(!FirebaseApp.getApps().isEmpty()) {
				for(int i = 0; i < FirebaseApp.getApps().size(); i++) {
					if(FirebaseApp.getApps().get(i).getName().equals("mobile")) {
						initFlag = false;
					}
				}
			}
			
			if(initFlag) {
				// Firebase initializing
				mobileApp = FirebaseApp.initializeApp(options, "mobile");
			}
			else {
				mobileApp = FirebaseApp.getInstance("mobile");
			}
			
			// String registrationToken = 안드로이드 토큰 입력;
			String registrationToken = tokenId;
			
			// 토픽(?)
			String topic = "notice" + company;
			
			// message 작성
			Message msg = Message.builder()
					.setAndroidConfig(AndroidConfig.builder()
							.setTtl(3600 * 1000) // 1 hour in milliseconds
							.setPriority(AndroidConfig.Priority.NORMAL)
//							.setNotification(AndroidNotification.builder()
//									.setTitle(title)
//									.setBody(content)
//									.setIcon("stock_ticker_update")
//									.setColor("#f45342")
//									.build())
							.build())
					.putData("title", title)
					.putData("body", content)
					.setTopic(topic)
					//.setToken(registrationToken)
					.build();
			
			// 메세지를 FirebaseMessaging에 보내기
			String response = FirebaseMessaging.getInstance(mobileApp).send(msg);
			
			// 결과 출력
			System.out.println("Successfully sent message : " + response);
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			
		}
	}
}
