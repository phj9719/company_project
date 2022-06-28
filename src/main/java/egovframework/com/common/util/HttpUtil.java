package egovframework.com.common.util;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import com.google.gson.JsonObject;

public class HttpUtil {
	
	public static String callTorpedoApiPost(JsonObject params) {
		
		HttpURLConnection conn = null;
		StringBuilder sb = new StringBuilder();
		
		try {
			// URL 설정
			URL url = new URL("http://14.42.209.174:9082/api/v2/data");
			
			conn = (HttpURLConnection) url.openConnection();
			
			conn.setRequestMethod("POST");
			conn.setRequestProperty("Content-Type", "application/json");
			conn.setRequestProperty("Transfer-Encoding", "chunked");
			conn.setRequestProperty("Connection", "keep-alive");
			conn.setDoOutput(true);
			
			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
			
			bw.write(params.toString());
			bw.flush();
			bw.close();
			
			// 보내고 결과값 받기
			int responseCode = conn.getResponseCode();
			System.out.println(responseCode);
			
			if (responseCode == 200) {
				BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
				
				String line = "";
				while ((line = br.readLine()) != null) {
					sb.append(line);
				}
				br.close();
				//System.out.println(sb.toString());
			}
			
		} catch (Exception e) {
			System.out.println(e);
		}
		return sb.toString();
	}
	
	public static String callTorpedoApiGet(String identifier) {
		
		HttpURLConnection conn = null;
		StringBuilder sb = new StringBuilder();
		
		try {
			URL url = new URL("http://14.42.209.174:9082/api/services/identifer/" + identifier);
			
			conn = (HttpURLConnection) url.openConnection();
			
			conn.setRequestMethod("GET");
			
			int responseCode = conn.getResponseCode();
			
			if (responseCode == 200) {
				BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
				
				String line = "";
				while ((line = br.readLine()) != null) {
					sb.append(line);
				}
				br.close();
				//System.out.println(sb.toString());
			}
			
		} catch (Exception e) {
			System.out.println(e);
		}
		
		return sb.toString();
	}
}
