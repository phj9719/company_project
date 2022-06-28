<%@page import="egovframework.com.common.constant.CommonConstant"%>
<%@ page contentType="text/html;charset=utf-8" pageEncoding="utf-8" %>
<%@ page language="java"%>
<%@ page import="java.io.File"%>
<%@ page import="java.io.IOException"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Enumeration"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="java.util.List"%>

<%@ page import="javax.servlet.ServletException"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="javax.servlet.http.HttpServletResponse"%>

<%@ page import="com.oreilly.servlet.*"%>
<%@ page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>

<%@ page import="com.nexacro17.xapi.tx.*" %>
<%@ page import="com.nexacro17.xapi.data.*" %>

<%
	request.setCharacterEncoding("UTF-8");
	String strFileForderName = request.getParameter("filefolder");
	String strFullFileForderName = "";
	
	String getFolderName = "";
	//String savePath		= CommonConstant.FILE_ROOT_DIR + "\\" ;
	String savePath		= CommonConstant.LINUX_FILE_DIR + "/";
	
	if (strFileForderName != null && !"".equals(strFileForderName))
	{
		String[] strArr = strFileForderName.split("/");
		for(int i=0; i<strArr.length; i++)
		{
			savePath = savePath + strArr[i] + "/";
			File extFolder = new File(savePath);
			
			if(!extFolder.exists())
			{
				System.out.println("폴더 생성 시도");
				if (extFolder.mkdirs())
					System.out.println("디렉토리 생성 성공!");
				else
					System.out.println("디렉토리 생성 실패!");
			}
		}
		getFolderName = "/" + request.getParameter("filefolder") + "/";
	}
	else
	{
		getFolderName = "/";
	}
	
	int maxSize = 1000 * 1024 * 1024;			// 최대 1기가까지 허용

	PlatformData resData = new PlatformData();
	VariableList resVarList = resData.getVariableList();

	try
	{
		MultipartRequest multi = new MultipartRequest(request, savePath, maxSize, "utf-8", new DefaultFileRenamePolicy());		
		Enumeration files = multi.getFileNames();

		DataSet ds = new DataSet("ds_uploadresult");
		
		ds.addColumn(new ColumnHeader("FILE_NAME", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("FILE_REAL_NAME", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("FILE_SIZE", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("FILE_TYPE", DataTypes.STRING));

		while (files.hasMoreElements()) {
			String name = (String)files.nextElement();
			
			String fileName = multi.getOriginalFileName(name);
			String type		= multi.getContentType(name);
			String fileRealName = multi.getFilesystemName(name);

			File f = multi.getFile(name);
			int row = ds.newRow(0);
			ds.set(row, "FILE_NAME", fileName);
			ds.set(row, "FILE_REAL_NAME", getFolderName + fileRealName);
			ds.set(row, "FILE_TYPE", type);
			ds.set(row, "FILE_SIZE", String.valueOf(f.length()));
		}

		resData.addDataSet(ds);
		resVarList.add("ErrorCode", 0);
		resVarList.add("ErrorMsg", "Success" );
	}
	catch (Exception e)
	{
		System.out.println(e.getMessage());
		DataSet dsError = new DataSet("ds_error");
		dsError.addColumn(new ColumnHeader("ErrorMsg", DataTypes.STRING));
		dsError.addColumn(new ColumnHeader("ErrorCode", DataTypes.LONG));

		dsError.set(dsError.newRow(), "ErrorCode", -1);
		dsError.set(dsError.newRow(), "ErrorMsg", e.getMessage());

		resData.addDataSet(dsError);
	}

	HttpPlatformResponse res = new HttpPlatformResponse(response, request);
	res.setContentType(PlatformType.CONTENT_TYPE_XML);
	res.setCharset("UTF-8");
	res.setData(resData);
	res.sendData();

%>
