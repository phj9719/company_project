<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<% 
	request.setCharacterEncoding("UTF-8");
	
	//사용할 Parameter 값
	String inputYn = request.getParameter("inputYn"); 
	String roadFullAddr = request.getParameter("roadFullAddr"); 
	String jibunAddr = request.getParameter("jibunAddr"); 
	String zipNo = request.getParameter("zipNo"); 
	String addrDetail = request.getParameter("addrDetail");	
	
	/* 사용할 parameter 값 주석 제거
	String engAddr = request.getParameter("engAddr"); 
	String admCd    = request.getParameter("admCd");
	String rnMgtSn = request.getParameter("rnMgtSn");
	String bdMgtSn  = request.getParameter("bdMgtSn");
	String detBdNmList  = request.getParameter("detBdNmList");	
	String bdNm  = request.getParameter("bdNm");
	String bdKdcd  = request.getParameter("bdKdcd");
	String siNm  = request.getParameter("siNm");
	String sggNm  = request.getParameter("sggNm");
	String emdNm  = request.getParameter("emdNm");
	String liNm  = request.getParameter("liNm");
	String rn  = request.getParameter("rn");
	String udrtYn  = request.getParameter("udrtYn");
	String buldMnnm  = request.getParameter("buldMnnm");
	String buldSlno  = request.getParameter("buldSlno");
	String mtYn  = request.getParameter("mtYn");
	String lnbrMnnm  = request.getParameter("lnbrMnnm");
	String lnbrSlno  = request.getParameter("lnbrSlno"); 
	String emdNo  = request.getParameter("emdNo");
	*/

%>
</head>
<script language="javascript">
/* 주의사항 (IP차단 시 웹브라우저 사용 불가)
	모의 해킹 테스트 시 팝업API를 호출하시면 IP가 차단 될 수 있습니다. 
	주소팝업API를 제외하시고 테스트 하시기 바랍니다.
*/

function init(){
	var url = location.href;
	
	//팝업api 승인키
	var confmKey = "devU01TX0FVVEgyMDIxMTAxNDE2MzcwMDExMTc2MDU=";	
		
	// 도로명주소 검색결과 화면 출력내용, 1 : 도로명, 2 : 도로명+지번+상세보기(관련지번, 관할주민센터), 3 : 도로명+상세보기(상세건물명), 4 : 도로명+지번+상세보기(관련지번, 관할주민센터, 상세건물명)
	var resultType = "4"; 
	var inputYn= "<%=inputYn%>";
	if(inputYn != "Y"){
		document.form.confmKey.value = confmKey;
		document.form.returnUrl.value = url;
		document.form.resultType.value = resultType;
		//인터넷망
		document.form.action="https://www.juso.go.kr/addrlink/addrLinkUrl.do"; 
		//모바일 웹인 경우, 인터넷망 : "https://www.juso.go.kr/addrlink/addrMobileLinkUrl.do";
		
		document.form.submit();
	}else{
		//zipNo:우편번호, roadFullAddr:도로명주소, jibunAddr:지번주소, addrDetail:상세주소 (사용자 입력)
		setContent("<%=zipNo%>","<%=roadFullAddr%>","<%=jibunAddr%>","<%=addrDetail%>");
	}
}

//================================필수==============================================
if (! window.NEXACROHTML)
{
	window.NEXACROHTML = {};
}
  
	window.NEXACROHTML.FireUserNotify = function(userdata)
	{
		
	if (window.NEXACROWEBBROWSER)
	{
		// web runtime environment, iOS/iPadOS NRE
		window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, userdata);
	}
	else if (typeof nexacro == "undefined")
 	{
		// nexacro runtime environment 
		window.document.title = userdata;
	}
	else if (nexacro)
	{
    	// Android NRE, macOS NRE
		nexacro.fireUserNotify(userdata)
   }	
}

	
//nexacro platform으로 선택된 주소 data넘겨주기
function setContent(zipcode,addr,addrjibun,addrDetail)
{
	var str = zipcode +"," + addr + "," + addrjibun + ","+ addrDetail;
	
	window.NEXACROHTML.FireUserNotify(str);
}
	
//==============================================================================
</script>
<body onload="init();">
	<form id="form" name="form" method="post">
		<input type="hidden" id="confmKey" name="confmKey" value=""/>
		<input type="hidden" id="returnUrl" name="returnUrl" value=""/>
		<input type="hidden" id="resultType" name="resultType" value=""/>
		<!-- 해당시스템의 인코딩타입이 EUC-KR일경우에만 추가 START-->
		<!-- 
		<input type="hidden" id="encodingType" name="encodingType" value="EUC-KR"/>
		 -->
		<!-- 해당시스템의 인코딩타입이 EUC-KR일경우에만 추가 END-->
	</form>
</body>
</html>