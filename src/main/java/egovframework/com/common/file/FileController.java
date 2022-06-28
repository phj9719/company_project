/************************************************************************************
 * Argus System Controller
 * Copyright(c) SCT
 * 
 * 1.Program  			: Common FileController
 * 2.File Name			: FileController.java
 * 3.Developer			: JL
 * 4.Development Date	: 2017-11-21
 * 5.Version			: 0.1
 * 6.Note				: 
 * 7.History		    :
*************************************************************************************/
package egovframework.com.common.file;

import java.io.IOException;
import java.sql.SQLException;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import egovframework.com.common.exception.NexaUserDefineException;
import egovframework.com.common.util.ExceptionMsgChanger;
import egovframework.com.rte.map.DataSetMap;
import egovframework.com.rte.map.NexacroMapDTO;
import egovframework.com.rte.nexacro.NexacroConstant;

@Controller
public class FileController {
	@Resource(name="ExceptionMsgChanger")
	ExceptionMsgChanger exceptionMsgChanger;
	
	@Resource(name="FileService")
	FileService fileService;

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());
	
	@RequestMapping("/BlobFile.do")
	public ModelAndView operate(HttpServletRequest request, HttpServletResponse response, NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		try{
			DataSetMap tranInfo 				= xpDto.getTranInfoMap();
			Map <String, Object> inVar 			= xpDto.getInVariableMap();
			Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
			Map <String, Object> outVar 		= xpDto.getOutVariableMap();
			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
			
			String method = (String)inVar.get("method");
			if(method.equals("getList")){
				fileService.select(tranInfo, inVar, inDataset, outVar, outDataset);
			}else{
				fileService.update(tranInfo, inVar, inDataset, outVar, outDataset);
			}
			
			
			mav.addObject(NexacroConstant.OUT_VARIABLES_ATT_NAME, xpDto.getOutVariableMap());
			mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, 	xpDto.getOutDataSetMap());
			
		}catch(Exception e){
			log.error("", e);
			String errmsg = e.toString();
			errmsg = exceptionMsgChanger.changeExceptionMsg(errmsg);

			log.error("에러코드 :"+errmsg);

			mav.addObject(NexacroConstant.ERROR_CODE, "-1");
			mav.addObject(NexacroConstant.ERROR_MSG, errmsg);
		}
		
		return mav;
	}
	
	@RequestMapping("/BlobFileUpload.do")
	public ModelAndView uploadFile(MultipartHttpServletRequest request, HttpServletResponse response){
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		try{
			log.debug("파일 업다운로드");

			boolean isMultipart = ServletFileUpload.isMultipartContent(request);
			log.debug("isMultiPart : "+isMultipart);
			
			if(isMultipart == true){
				fileService.uploadFile(request);
				//MySqlTest
				//fileService.myUploadFile(request, response);
			}else{
				throw new NexaUserDefineException("NO MULTIPART REQUEST");
			}
			
		}catch(Exception e){
			log.error("", e);
			String errmsg = e.toString();
			errmsg = exceptionMsgChanger.changeExceptionMsg(errmsg);
			log.debug("에러코드 :"+errmsg);
			mav.addObject(NexacroConstant.ERROR_CODE, "-1");
			mav.addObject(NexacroConstant.ERROR_MSG, errmsg);
		}
		
		return mav;
	}
	
	@RequestMapping("/BlobFileDown.do")
	public void downloadfile(HttpServletRequest request, HttpServletResponse response, String GRP, String FILEID, String COMPANY) throws IOException, SQLException{
		try{
			fileService.downloadfile(request, response, GRP, FILEID, COMPANY);
		}catch(Exception e){
			log.error("", e);
			throw new NexaUserDefineException("BlobFileDown Error");
		}
	}
	
	@RequestMapping("/webEditorUpload.do")
	public void uploadEditorFiles(MultipartHttpServletRequest request, HttpServletResponse response){
		try {
			log.debug("webEditorUpload.do 호출됨");
			fileService.uploadWebEditorFiles(request);
		} catch (Exception e) {
			log.error("", e);
			throw new NexaUserDefineException("uploadEditorFiles Error");
		}
	}
	
	@RequestMapping("/getWebImg.do")
	public void getWebEditorImg(HttpServletResponse res, String grpid){
		try {
			fileService.selectImg(res, grpid);
		} catch (Exception e) {
			log.error("", e);
			throw new NexaUserDefineException("getWebEditorImg ERROR : "+e);
		}
	}
	
	@RequestMapping("/mobileFup.do")
	public ModelAndView mobileFileUpload(MultipartHttpServletRequest request){
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		try {
			fileService.mobileFileUpload(request);
		} catch (Exception e) {
			log.error("", e);
			String errmsg = e.toString();
			errmsg = exceptionMsgChanger.changeExceptionMsg(errmsg);
			log.error("에러코드 :"+errmsg);
			mav.addObject(NexacroConstant.ERROR_CODE, "-1");
			mav.addObject(NexacroConstant.ERROR_MSG, errmsg);
		}
		
		return mav;
	}
	
}
