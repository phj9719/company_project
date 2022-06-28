<%@page import="java.net.URLEncoder"%>
<%@page import="egovframework.com.common.constant.CommonConstant"%>
<%@ page contentType="text/html;charset=utf-8" pageEncoding="utf-8" %>
<%@ page language="java"%>
<%@ page import="java.lang.String.*" %>
<%@ page import="java.util.zip.ZipOutputStream"%>
<%@ page import="java.util.zip.ZipEntry"%>
<%@ page import="java.net.URLDecoder.*" %>
<%@ page import="java.io.BufferedInputStream"%>
<%@ page import="java.io.FileInputStream"%>
<%@ page import="java.io.File"%>
<%@ page import="java.io.IOException"%>
<%@ page import="javax.servlet.ServletException"%>
<%@ page import="javax.servlet.ServletOutputStream"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="javax.servlet.http.HttpServletResponse"%>
<%

	try {
		request.setCharacterEncoding("UTF-8");	// POST방식으로 전달된 한글이 깨지지 않도록 하는 코드
		String fileName = request.getParameter("fileName");	// 파일 이름 가져오기
		String fileRealName	= request.getParameter("fileRealName");	// 업무별 파일 경로
		String filePath = "";	// 파일 전체 경로
		
		// local
		//filePath = "D:\\" + fileRealName;	// File Root Directory + 업무별 파일 경로
		// server
		filePath = CommonConstant.LINUX_FILE_DIR + fileRealName;	// File Root Directory + 업무별 파일 경로
		File file = new File(filePath);	// 파일 전체 경로를 인자로 File 객체 생성
		
		// 파일이 있는 경우
		if(file.isFile()) {
			int bytes = (int)file.length();	// 파일의 길이
			String header = request.getHeader("User-Agent");	// 브라우저 확인
			
			// 브라우저별 한글 인코딩
			if(header.contains("MSIE") || header.contains("Trident")) {	// 브라우저가 internet Explorer일 때 (Trident는 MSIE 11)
				fileName = URLEncoder.encode(fileName, "utf-8").replaceAll("\\+", "%20");
				response.setHeader("Content-Disposition", "attachment; filename = " + fileName + ";");
			} else {	// 다른 브라우저 일때 (chrome, Edge 등)
				fileName = new String(fileName.getBytes("UTF-8"), "ISO-8859-1");
				response.setHeader("Content-Disposition", "attachment; filename = \"" + fileName + "\"");
			}
			
			response.setContentType("application/download; UTF-8");			// 컨텐츠 타입을 다운로드, 인코딩은 UTF-8로 설정
			response.setContentLength(bytes);								// 컨텐츠 길이를 파일의 길이만큼 설정
			response.setHeader("Content-Type", "application/octet-stream");	// 이진 파일을 위한 기본값 헤더에 세팅 
			response.setHeader("Content-Transfer-Encoding", "binary");		// 전송을 위한 Encoding 형식을 binary로 지정
			
			BufferedInputStream fin = null;
			ServletOutputStream outs = null;
			
			out.clear();					// 스트림 비우기
			out = pageContext.pushBody();	// 다운로드 jsp페이지에 대한 정보 저장
			
			fin = new BufferedInputStream(new FileInputStream(file));	// 파일을 읽기 위한 객체 생성
			outs = response.getOutputStream();							// 출력 스트림 열기
			
			byte[] buffer = new byte[1024];
			int n = 0;
			try {
				// 파일 내용을 읽고 이것을 ServletOutputStream을 통해서 출력
				while((n = fin.read(buffer, 0, 1024)) != -1) {
					outs.write(buffer, 0, n);
				}
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				if (outs != null) {
					try {
						outs.close();
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
				if (fin != null) {
					try {
						fin.close();
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			}
		}
		// 파일이 없는 경우
		else {
			out.println("<script langauage='javascript'>");
			out.println("alert('선택하신 파일을 찾을 수 없습니다.');");
			out.println("</script>");
		}
		
	} catch (Exception e) {
		e.printStackTrace();
	}

%>