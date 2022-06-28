/************************************************************************************
 * Argus System Service
 * Copyright(c) SCT
 * 
 * 1.Program  			: Common FileService
 * 2.File Name			: FileService.java
 * 3.Developer			: JL
 * 4.Development Date	: 2017-11-21
 * 5.Version			: 0.1
 * 6.Note				: 
 * 7.History		    :
*************************************************************************************/
package egovframework.com.common.file;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Blob;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.annotation.Resource;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.PlatformData;

import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.exception.NexaServiceException;
import egovframework.com.common.exception.NexaUserDefineException;
import egovframework.com.common.util.UpdateMetadataUtil;
import egovframework.com.rte.map.DataSetMap;
import egovframework.com.rte.nexacro.NexacroConstant;

@SuppressWarnings("unchecked")
@Service("FileService")
public class FileService {
	
	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Resource(name="FileUtil")
	private FileUtil fileUtil;

	@Autowired
	private UpdateMetadataUtil updateMetadataUtil;
	
	@Autowired
	private PlatformTransactionManager transactionManager;

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	//select with BLOB data(Preview Aspect)
	public void select(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {
			
		
		List <Map<String, Object>> records;
		List <Map<String, Object>> outrecords = new ArrayList<Map<String, Object>>();
		records = commonDao.getList((String)inVar.get("sqlId"), inVar);
			
		outrecords = fileUtil.blobToByte(records);
		
		//logging
		for(int z=0; z<outrecords.size(); z++){
//			log.debug("outrecords : "+outrecords.get(z).entrySet());
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(outrecords);
		outDataset.put("output1", outDsMap);
		
	}
	
	public void update(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) {
		
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			
			String vals = (String)inVar.get("vals");
			String paramArr[] = vals.split(",");
			for(int a=0; a<paramArr.length; a++){
				Map paramMap = new HashMap();
				String params[] = paramArr[a].split("/");
				paramMap.put("FILE_GRP_ID",params[0]);
				paramMap.put("FILE_ID",params[1]);
				commonDao.updateData("FILE_U",paramMap);
			}
			
			transactionManager.commit(transactionStatus);
		}catch (Exception e){
			transactionManager.rollback(transactionStatus);
			e.printStackTrace();
			throw new NexaServiceException("FileService update ERROR : "+e);
		}
	}
	
	//public void uploadFile(MultipartHttpServletRequest request, HttpServletResponse response, boolean isNormal) {
	public void uploadFile(MultipartHttpServletRequest request) {
		
		try {
			uploadFiles(request, true);
		} catch (Exception e) {
			e.printStackTrace();
			throw new NexaServiceException("FileService uploadFile ERROR : "+e);
		}
	}
	
	public void downloadfile(HttpServletRequest request, HttpServletResponse response, String GRP, String FILEID, String COMPANY) throws IOException, SQLException{

		try {
			Map paramMap = new HashMap();
			paramMap.put("FILE_GRP_ID", GRP);
			paramMap.put("FILE_ID", FILEID);
			paramMap.put("COMPANY", COMPANY);
			List <Map> records = commonDao.getList("FILE_DOWN_SELECT", paramMap); 
			
			Map row = records.get(0);
			Blob blob = (Blob) row.get("BLOB_FILE");
			String fileName = (String) row.get("FILE_NAME");
			
			ServletOutputStream out_stream	= null;
			InputStream in_stream = null;
			
			try {

				request.setCharacterEncoding("UTF-8");			
			    String userAgent = request.getHeader("User-Agent");
			    String isRuntime = "N";
			    //User-Agent: nexacroplatform14-Win32/2014 (compatible; Mozilla/4.0; MSIE 7.0)
			    
			    if(userAgent.indexOf("nexacroplatform14") > -1){
			    	isRuntime = "Y";
			    }
			    
				byte[] buffer = new byte[4096];

					try{
						response.setContentType("application/octet;charset=utf-8");
						
						if(isRuntime != null && isRuntime.equals("N")){
							
							if(userAgent.indexOf("MSIE") > -1){
								response.setHeader("Content-Disposition", "attachment; filename = \"" + new String(fileName.getBytes("utf-8"), "ISO8859_1") + "\"");
								response.setHeader("Content-Transper-Encoding", "binary");
							}else{
								response.setHeader("Content-Disposition", "attachment; filename = \"" + new String(fileName.getBytes("utf-8"), "ISO8859_1") + "\"");
							}										
							response.setHeader("Content-Transper-Encoding", "binary");
							response.setHeader("Content-Length", "" + String.valueOf(blob.length()));
							response.setHeader("Pargma", "no-cache");
							response.setHeader("Expires", "-1");
							
						}else{
							response.setHeader("Content-Disposition", "attachment; filename = \"" + new String(fileName.getBytes("utf-8"), "ISO8859_1") + "\"");
							response.setHeader("Content-Transper-Encoding", "binary");
							response.setHeader("Content-Length", "" + String.valueOf(blob.length()));				
						}
						
						out_stream = response.getOutputStream();
						in_stream = blob.getBinaryStream();
						
						int n = 0;
						while((n = in_stream.read(buffer, 0, 4096)) != -1){
							out_stream.write(buffer, 0, n);
						}
						
					}catch(Exception e){
						e.printStackTrace();
					}finally{
						if (in_stream != null){try{in_stream.close();}catch(Exception e){e.printStackTrace();}}
						if (out_stream != null){try{out_stream.close();}catch(Exception e){e.printStackTrace();}}
						out_stream.flush();
					}
				
			}catch(Exception e){
				e.printStackTrace();

				log.debug("DOWNLOAD FAILED : "+e);
			}
		}catch (Exception e) {
			e.printStackTrace();
			throw new NexaUserDefineException("BlobFileDown Error : ");
		}	
	}//method
	
	public void uploadWebEditorFiles(MultipartHttpServletRequest request){
		try {
			String grpid = request.getParameter("grpid");
			Map fileMap = request.getFileMap();
			
			Map dummy = new HashMap(); dummy.put("REG_PGM_ID", "WebEditorUploaded");
			
			List<MultipartFile> fl = request.getFiles("Filedata");
			
			for(int a=0; a<fl.size(); a++){
				Map fileMaps = new HashMap();
				MultipartFile mfile = fl.get(a);
				log.debug("origin file name : "+mfile.getOriginalFilename());
				log.debug("file name : "+mfile.getName());
				fileMaps.put("COMPANY_CD", "999");
				fileMaps.put("FILE_GRP_ID", grpid);
				fileMaps.put("FILE_SIZE", mfile.getSize());
				fileMaps.put("FILE_REAL_NAME", mfile.getOriginalFilename());
				fileMaps.put("BLOB_FILE", mfile.getBytes());
				fileMaps = updateMetadataUtil.getUpdateMetaData(fileMaps, dummy);
				commonDao.insertData("WEB_FILE_I",fileMaps);
			}
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("uploadWebEditorFiles ERROR : "+e);
		}
	}

	public void selectImg(HttpServletResponse res, String grpid) {
		try {
			String grp = grpid.substring(0,grpid.length()-1);
			String seq = grpid.substring(grpid.length()-1,grpid.length());
			log.debug("그룹 : "+grp);
			log.debug("순번 : "+seq);
			Map paramMap = new HashMap();
			paramMap.put("FILE_GRP_ID", grp);
			paramMap.put("FILE_ID", seq);
			List <Map> records = commonDao.getList("WEB_FILE_S", paramMap); 
			
			Map row = records.get(0);
			InputStream is = ((Blob) row.get("BLOB_FILE")).getBinaryStream();
			ServletOutputStream os = res.getOutputStream();
			int read;
			while((read = is.read()) != -1){
				os.write(read);
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new NexaServiceException("selectImg ERROR : "+e);
		}
	}

	public List onlyUploadFiles(MultipartHttpServletRequest request, HttpServletResponse response) {
		Map keyMap;
		try {
			keyMap = uploadFiles(request, false);	
		} catch (Exception e) {
			e.printStackTrace();
			throw new NexaServiceException("onlyUploadFiles ERROR : "+e);
		}
		
		return getDataLists(request, keyMap);
	}//
	
	private List getDataLists(MultipartHttpServletRequest request, Map keyMap){
		Map<String, List<Map>> sinputDsList = new HashMap<String, List<Map>>();
		List<Map> rowArr = null;
		
		List datas = new ArrayList();
		Map inVar = new HashMap();
		String params[];
		DataSetList inputDslist;
		
		try {
			
			String sqlId = request.getParameter("SQLID");
			String pgmId = sqlId.substring(0,sqlId.indexOf("_"));
			log.debug("FilService 289 Line : "+sqlId);
			
			inVar.put("REG_PGM_ID", pgmId);
			inVar.put("SQLID", sqlId);
			
			Map paramMap = request.getParameterMap();
			
			String datasetArr[] = (String[]) paramMap.get("inputDatasets");
			PlatformData pda = new PlatformData();
			pda.loadXml(datasetArr[0].toString());
			inputDslist = pda.getDataSetList();
			
			for(int s=0; s<inputDslist.size(); s++){
				DataSet ds = inputDslist.get(s);

				List<Map<String, Object>> rowMaps = fileUtil.getRowMaps(ds);
				rowArr = new ArrayList<Map>();
				
				log.debug("FIleService 308 Line rowMaps size : "+rowMaps.size());
				
				//Param variable Setting
				//get variable from Column "PARAMS" it must be initialized main datasets
				//
				if(s == 0){
					Map rowMap = rowMaps.get(0);
					if(rowMap.size() != 0){
						if(rowMap.containsKey("PARAMS")){
							params = ((String)rowMap.get("PARAMS")).split(",");
							for(int a=0; a<params.length; a++){
								inVar.put(params[a].substring(0, params[a].indexOf("=")), params[a].substring(params[a].indexOf("=")+1,params[a].length()));
							}
						}
					}
				}
				
				if(keyMap.containsKey(ds.getName())){
					List<Map> data = (List<Map>) keyMap.get(ds.getName());
					for(int x=0; x<rowMaps.size(); x++){
						log.debug("FileService 325 Line rowMAps = "+rowMaps.get(x).entrySet());
						for(int z=0; z<data.size(); z++){
							if(((int)data.get(z).get("rowidx")) == x){
								rowMaps.get(x).put((String) data.get(z).get("colid"), data.get(z).get("grpid"));
							}
						}
						rowArr.add(rowMaps.get(x));
					}
				}
				sinputDsList.put(ds.getName(), rowArr);
			}

			datas.add(sinputDsList);
			datas.add(inVar);
			datas.add(request.getParameter("method"));
			
			return datas;
			
		} catch (Exception e) {
			e.printStackTrace();
			throw new NexaServiceException("onlyUploadFeils ERROR : "+e);
		}
	}
	
	private Map uploadFiles(MultipartHttpServletRequest request, boolean isNormal){
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		Connection conn = null;
		Statement stmt = null;								
		ResultSet rs = null;
		
		Map grpKeyMap = new HashMap();
		List dataList = null;
		
		try {
			log.debug("들어 왔는가?");
			boolean isMultipart = ServletFileUpload.isMultipartContent(request);
			log.debug("isMultipart true?"+ isMultipart);
			if(isMultipart){
				String sqlId = request.getParameter("SQLID");
				log.debug("?"+ sqlId);
				String sqlIds[] = sqlId.split(" ");
				String pgmId = sqlId.substring(0,sqlId.indexOf("_"));
				Map inVar = new HashMap();
				inVar.put("REG_PGM_ID", pgmId);
				
				Map fileMap = request.getFileMap();
				Map paramMap = request.getParameterMap();
				List<Map> fileMaps = new ArrayList<Map>();
				Map rowMap = new HashMap();
				
				String datasetArr[] = (String[]) paramMap.get("inputDatasets");
				log.debug("datasetArr"+ datasetArr[0].toString());
				PlatformData pda = new PlatformData();
				pda.loadXml(datasetArr[0].toString());
				DataSetList inputDslist = pda.getDataSetList();
				log.debug("inputDslist.size()" +inputDslist.size());
				for(int a=0; a<inputDslist.size(); a++){
					DataSet ds;
					
//					log.debug(isNormal);
					if(isNormal == true){
						ds = inputDslist.get("input"+(a+1));
						log.debug("trueds"+ds);
					}else{
						ds = inputDslist.get(a);
						log.debug("else"+ds);
					}
					log.debug("의심간다.");
					//  I/U 없는 DS제외를 위해,
					if(ds != null){
						log.debug("[LOG]FileService uploadFiles");
						log.debug("rowcount : "+ds.getRowCount());
						log.debug("removed rowcount : "+ds.getRemovedRowCount());
						if(ds.getRowCount() + ds.getRemovedRowCount() != 0){   ///2018-07-14 ds.getRemovedRowCount() 추가 delete 타입은 로우카운트를 ds.getRemovedRowCount() 에서 읽음
							dataList = new ArrayList(); 
							List<Map<String, Object>> rowMaps = fileUtil.getRowMaps(ds);
							
							//logging
							log.debug("DS NAME : "+ds.getName());
							for(int x=0; x<rowMaps.size(); x++){
								log.debug(x+"번째 : "+rowMaps.get(x).entrySet());
							}
							
							for(int s=0; s<rowMaps.size(); s++){
								rowMap = rowMaps.get(s);
								if(rowMap.containsKey("FILE_GRP_ID1") || rowMap.containsKey("FILE_GRP_ID2") || 
								   rowMap.containsKey("FILE_GRP_ID3") || rowMap.containsKey("FILE_GRP_ID4")){
									
									List fileColidList = new ArrayList();
									Iterator dsitr = rowMap.entrySet().iterator();
									
									while(dsitr.hasNext()){
										Entry entry = (Entry)dsitr.next();
										String colid = (String) entry.getKey();
										if(colid.contains("FILE_GRP_ID")){
											fileColidList.add(colid);
										}
									}
									
									for(int z=0; z<fileColidList.size(); z++){
										String strfiles = ((String)rowMap.get(fileColidList.get(z)));
										if(strfiles != null && !strfiles.equals("")){
											boolean isNewFile = false;
											if(strfiles.contains("NEWFILEGRP")){
												isNewFile = true;
											}
											String isContainFile[] = strfiles.split("/");
											strfiles = strfiles.substring(strfiles.indexOf("/")+1, strfiles.length());
											String files[] = strfiles.split("/");

											if(isContainFile.length > 1){
												String fileGrpId = "";

												if(isNewFile){
													// TODO Dao Call해서 호출하는 방식으로 변경필요
//													conn = sqlSession.getConnection();
//													stmt = conn.createStatement();								
//													rs = stmt.executeQuery("SELECT FN_CM_SEQUENCE('001','','','FILE_GRP_ID',TO_CHAR(SYSDATE,'YYYYMMDD'),'FILE_GRP_ID','1','') FROM DUAL");
//													while(rs.next()){
//														fileGrpId = rs.getString(1);
//													}
													// TODO 여기까지

												}else{
													String paramGrp = ((String)rowMap.get(fileColidList.get(z)));
													fileGrpId = paramGrp.substring(0, paramGrp.indexOf("/"));
												}
												
												Map keydata = new HashMap();
												keydata.put("rowidx", s);
												keydata.put("colid", fileColidList.get(z));
												keydata.put("grpid", fileGrpId);
												dataList.add(keydata);
												
												rowMap.put(fileColidList.get(z), fileGrpId);
												
												Iterator fileitr = fileMap.entrySet().iterator();

												int flagCnt = 0;
												while (fileitr.hasNext()) {
													HashMap fileParamMap = new HashMap();
													if(flagCnt == files.length){
														break;
													}
													Entry entry = (Entry)fileitr.next();
													String filename = (String) entry.getKey();
													MultipartFile mfile = request.getFile(filename);
													if(Arrays.deepToString(files).contains(mfile.getName())){
														
														if(!fileParamMap.containsValue(mfile.getName())){
															fileParamMap.put("COMPANY", rowMap.get("COMPANY_CD"));
															fileParamMap.put("FILE_GRP_ID", fileGrpId);
															fileParamMap.put("FILE_SIZE", mfile.getSize());
															fileParamMap.put("FILE_NAME", mfile.getName());
															fileParamMap.put("BLOB_FILE", mfile.getBytes());
															fileMaps.add(fileParamMap);
															flagCnt++;
														}
													}
												}//while
											}
											
										}//if
									}//for
									if(isNormal){
										log.debug("SQL ID : "+sqlIds[a]);
										int rowType = ((Integer) rowMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
										rowMap.put("REG_PGM_ID", pgmId);
										if(rowType == DataSet.ROW_TYPE_INSERTED){											
											commonDao.insertData(sqlIds[a]+"_I", updateMetadataUtil.getUpdateMetaData(rowMap, inVar));
										}else if(rowType == DataSet.ROW_TYPE_UPDATED){
											commonDao.updateData(sqlIds[a]+"_U", updateMetadataUtil.getUpdateMetaData(rowMap, inVar));
										}else if(rowType == DataSet.ROW_TYPE_DELETED){
											commonDao.deleteData(sqlIds[a]+"_D", updateMetadataUtil.getUpdateMetaData(rowMap, inVar));
										}
									}
								}else if(isNormal == true){
									log.debug("NOT CONTAIN FILE GRP KEYS");
									int rowType = ((Integer) rowMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
									rowMap.put("REG_PGM_ID", pgmId);
									if(rowType == DataSet.ROW_TYPE_INSERTED){
									    if(rowMap.get("REG_PGM_ID").equals("SMD060CT")){
											String newpwd = BCrypt.hashpw((String) rowMap.get("USER_PASSWD"), BCrypt.gensalt());
											rowMap.put("USER_PASSWD", newpwd);					    	
									    }										
										commonDao.insertData(sqlIds[a]+"_I", updateMetadataUtil.getUpdateMetaData(rowMap, inVar));
									}else if(rowType == DataSet.ROW_TYPE_UPDATED){
										commonDao.updateData(sqlIds[a]+"_U", updateMetadataUtil.getUpdateMetaData(rowMap, inVar));
									}else if(rowType == DataSet.ROW_TYPE_DELETED){
										commonDao.deleteData(sqlIds[a]+"_D", updateMetadataUtil.getUpdateMetaData(rowMap, inVar));
									}
									//break;
								}
							}//for
							grpKeyMap.put(ds.getName(), dataList);
						}// ds.getRowCount() != 0 if
					}// ds != null if					
				}//for
				
				//file insert
				String id = "";
				//생산쪽에서 등록한 경우.
				if(sqlIds[0].indexOf("MS") != -1){
					id = "MS_FILE_I";
				}else{
					id = "FILE_I";
				}
				for(int i=0; i<fileMaps.size(); i++){
					Map filerowMap = fileMaps.get(i);	
					commonDao.insertData(id, updateMetadataUtil.getUpdateMetaData(filerowMap, inVar));
				}
				
				transactionManager.commit(transactionStatus);
			}
			
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			e.printStackTrace();
			throw new NexaServiceException("FileService uploadFile ERROR : "+e);
		}finally {
			//if(conn != null){try {conn.close();} catch (SQLException e) {e.printStackTrace();}}
			//if(stmt != null){try {stmt.close();} catch (SQLException e) {e.printStackTrace();}}
			//if(rs != null){try {rs.close();} catch (SQLException e) {e.printStackTrace();}}
		}
		return grpKeyMap;
	}
	
	public void mobileFileUpload(MultipartHttpServletRequest request){
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		HashMap fileParamMap = new HashMap();
		boolean isErr = false;
		String userId = "";
		
		try {
			boolean isMultipart = ServletFileUpload.isMultipartContent(request);
			
			if(isMultipart){
				
				Map fileMap = request.getFileMap();
				Map paramMap = request.getParameterMap();
				List<Map> fileMaps = new ArrayList<Map>();
				Map rowMap = new HashMap();
				
				String datasetArr[] = (String[]) paramMap.get("inputDatasets");
				PlatformData pda = new PlatformData();
				pda.loadXml(datasetArr[0].toString());
				DataSetList inputDslist = pda.getDataSetList();
				
				for(int a=0; a<inputDslist.size(); a++){
					DataSet ds = inputDslist.get("input"+(a+1));
					//  I/U 없는 DS제외를 위해,
					if(ds != null){
						if(ds.getRowCount() != 0){
							List<Map<String, Object>> rowMaps = fileUtil.getRowMaps(ds);
							
							//logging
							log.debug("DS NAME : "+ds.getName());
							for(int x=0; x<rowMaps.size(); x++){
								log.debug(x+"번째 : "+rowMaps.get(x).entrySet());
							}
							
							for(int s=0; s<rowMaps.size(); s++){
								rowMap = rowMaps.get(s);
								String grpid = (String)rowMap.get("FILE_GRP_ID");
								userId = grpid.substring(0, grpid.indexOf("-"));
								Iterator fileitr = fileMap.entrySet().iterator();
								while (fileitr.hasNext()) {
									Entry entry = (Entry)fileitr.next();
									String filename = (String) entry.getKey();
									MultipartFile mfile = request.getFile(filename);
									fileParamMap.put("COMPANY", "001");
									fileParamMap.put("FILE_GRP_ID", grpid);
									fileParamMap.put("FILE_SIZE", mfile.getSize());
									fileParamMap.put("FILE_NAME", mfile.getName());
									fileParamMap.put("BLOB_FILE", mfile.getBytes());
									commonDao.insertData("MS_FILE_TEMP_I", fileParamMap);
								}//while
							}
						}//if
					}//if
				}//for
			}//if

			Map<String, Object> userMap = new HashMap<String, Object>();
			userMap.put("userId", userId);

			commonDao.updateData("MSC103CTM_KEY_UPDATE",userMap);
		} catch (Exception e) {
			isErr = true;
			e.printStackTrace();
			throw new NexaServiceException("FileService uploadFile ERROR : "+e);
		}finally{
			if(isErr){
				transactionManager.rollback(transactionStatus);
			}else{
				transactionManager.commit(transactionStatus);
			}
		}
	}
	
}//class
