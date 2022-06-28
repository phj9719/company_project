/************************************************************************************
 * Argus System Service
 * Copyright(c) SCT
 * 
 * 1.Program  			: Common Service
 * 2.File Name			: CMServiceP.java
 * 3.Developer			: JL
 * 4.Development Date	: 2017-08-25
 * 5.Version			: 0.1
 * 6.Note				: 
 * 7.History		    :
*************************************************************************************/

package egovframework.com.cm.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.cm.service.CMA020CTService;
import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.service.TransferService;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.common.util.LanguageUtil;
import egovframework.com.common.util.SendMassenger;
import egovframework.com.common.util.UpdateMetadataUtil;
import egovframework.com.rte.nexacro.NexacroConstant;

@Service("CMA020CTService")
public class CMA020CTServiceImpl implements CMA020CTService {

	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Autowired
	private UpdateMetadataUtil updateMetadataUtil;
	
	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;
	
	@Resource(name="LanguageUtil")
	private LanguageUtil languageUtil;
	
	@Resource(name="TransferService")
	private TransferService transferService;
		
	@Autowired
	private PlatformTransactionManager transactionManager;
	
	@Autowired
	private SendMassenger sendMassenger;

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());
	
	// 작성자 임시저장
	@Override
	public NexacroResult save(VariableList inVar, DataSetList inDataset) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			NexacroResult result = new NexacroResult();
			
			DataSet dsHead 		= inDataset.get("input1");
			DataSet dsGrpLine 	= inDataset.get("input2");
			DataSet dsRef		= inDataset.get("input3");
			DataSet dsRpt		= inDataset.get("input4");
			
			String pk_Doc_No="";
			boolean insertFlag = false;
			
			if(dsHead.getRowCount()!=0) {
				List<Map<String, Object>> head = dataSetUtil.dataSetToList(dsHead);
				for(int i=0; i<head.size(); i++)
				{
					Map<String, Object> map = head.get(i);
					
					List<Map<String, Object>> ds_ret = new ArrayList<Map<String, Object>>();
					
					pk_Doc_No = (String) map.get("PK_DOC_NO");
					if(pk_Doc_No == null || pk_Doc_No.equals("")) {
						Map<String, Object> pkDocNo = commonDao.getMap("CMA020CT.CMA020CT_NEW_PK_DOC_NO",map);
						pk_Doc_No = pkDocNo.get("PK_DOC_NO").toString();
						
						map.put("PK_DOC_NO", pk_Doc_No);
						insertFlag = true;
						
						ds_ret.add(pkDocNo);
					} else {
						Map<String, Object> pkMap = new HashMap<>();
						pkMap.put("PK_DOC_NO", pk_Doc_No);
						ds_ret.add(pkMap);
					}
					
					result.addDataSet("output1", ds_ret);
					updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
					
					if(insertFlag == true) {
						commonDao.insertData("CMA020CT.CMA020CT_CNT_I", map);
					} else {
						commonDao.updateData("CMA020CT.CMA020CT_CNT_U", map);
					}
					commonDao.updateData("CMA020CT.CMA020CT_ATT_U", map);
				}
			}
			
			if(dsGrpLine.getRowCount()!=0) {
				boolean grpFlag = false;
				List<Map<String, Object>> grpLine = dataSetUtil.dataSetToList(dsGrpLine);
				for(int i=0; i<grpLine.size(); i++)
				{
					Map<String, Object> map = grpLine.get(i);
					map.put("PK_DOC_NO", pk_Doc_No);
					
					updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
					if(insertFlag == false && grpFlag == false) {
						commonDao.deleteData("CMA020CT.CMA020CT_GRPLINE_D", map);
						grpFlag = true;
					}
					commonDao.insertData("CMA020CT.CMA020CT_GRPLINE_I", map);
				}
			}
			
			if(dsRef.getRowCount()!=0) {
				boolean refFlag = false;
				List<Map<String, Object>> ref = dataSetUtil.dataSetToList(dsRef);
				for(int i=0; i<ref.size(); i++)
				{
					Map<String, Object> map = ref.get(i);
					map.put("PK_DOC_NO", pk_Doc_No);
					
					updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
					if(insertFlag == false && refFlag == false) {
						commonDao.deleteData("CMA020CT.CMA020CT_REF_D", map);
						refFlag = true;
					}
					commonDao.insertData("CMA020CT.CMA020CT_REF_I", map);
				}
			}

			if(dsRpt.getRowCount()!=0) {
				boolean rptFlag = false;
				List<Map<String, Object>> rpt = dataSetUtil.dataSetToList(dsRpt);
				for(int i=0; i<rpt.size(); i++)
				{
					Map<String, Object> map = rpt.get(i);
					map.put("PK_DOC_NO", pk_Doc_No);
					
					updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
					if(insertFlag == false && rptFlag == false) {
						commonDao.deleteData("CMA020CT.CMA020CT_RPT_D", map);
						rptFlag = true;
					}
					commonDao.insertData("CMA020CT.CMA020CT_RPT_I", map);
				}
			}
			
			
			transactionManager.commit(transactionStatus);
			result.setErrorCode(0);
			return result;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.debug("[log]ErrorException -> "+ e.getMessage());
			throw e;
		}
	}
	
	// 작성자 결재상신
	@Override
	public NexacroResult submit(VariableList inVar, DataSetList inDataset) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			NexacroResult result = new NexacroResult();
			
			DataSet dsHead 		= inDataset.get("input1");
			DataSet dsGrpLine 	= inDataset.get("input2");
			DataSet dsRef		= inDataset.get("input3");
			DataSet dsRpt		= inDataset.get("input4");
			
			String company_Cd="";
			String plant_Cd="";
			String pk_Doc_No="";
			String grp_Doc_No="";
			String rpt_Doc_No="";
			String apv_Pgm_Id="";
			boolean insertFlag = false;
			
			if(dsHead.getRowCount()!=0) {
				List<Map<String, Object>> head = dataSetUtil.dataSetToList(dsHead);
				for(int i=0; i<head.size(); i++)
				{
					Map<String, Object> map = head.get(i);
					company_Cd = (String) map.get("COMPANY_CD");
					plant_Cd = (String) map.get("PLANT_CD");
					rpt_Doc_No = (String) map.get("RPT_DOC_NO");
					apv_Pgm_Id = (String) map.get("APV_PGM_ID");
					
					pk_Doc_No = (String) map.get("PK_DOC_NO");
					if(pk_Doc_No == null || pk_Doc_No.equals("")) {
						Map<String, Object> pkDocNo = commonDao.getMap("CMA020CT.CMA020CT_NEW_PK_DOC_NO",map);
						pk_Doc_No = pkDocNo.get("PK_DOC_NO").toString();
						map.put("PK_DOC_NO", pk_Doc_No);
						
						insertFlag = true;
						
						List<Map<String, Object>> ds_ret = new ArrayList<Map<String, Object>>();
						ds_ret.add(pkDocNo);
						result.addDataSet("output1", ds_ret);
					}

//					Map<String, Object> grpDocNo = commonDao.getMap("CMA020CT.CMA020CT_NEW_GRP_DOC_NO",map);
//					grp_Doc_No = grpDocNo.get("GRP_DOC_NO").toString();
//					map.put("GRP_DOC_NO", grp_Doc_No);
					map.put("GRP_DOC_NO", pk_Doc_No);
					
					updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
					
					if(insertFlag == true) {
						commonDao.insertData("CMA020CT.CMA020CT_CNT_I", map);
					} else {
						commonDao.updateData("CMA020CT.CMA020CT_CNT_U", map);
					}
					commonDao.updateData("CMA020CT.CMA020CT_ATT_U", map);
				}
			}
			
			if(dsGrpLine.getRowCount()!=0) {
				boolean grpFlag = false;
				List<Map<String, Object>> grpLine = dataSetUtil.dataSetToList(dsGrpLine);
				for(int i=0; i<grpLine.size(); i++)
				{
					Map<String, Object> map = grpLine.get(i);
					map.put("PK_DOC_NO", pk_Doc_No);
					map.put("GRP_DOC_NO", grp_Doc_No);
					
					updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
					if(insertFlag == false && grpFlag == false) {
						commonDao.deleteData("CMA020CT.CMA020CT_GRPLINE_D", map);
						grpFlag = true;
					}
					commonDao.insertData("CMA020CT.CMA020CT_GRPLINE_I", map);
				}
			}
			
			if(dsRef.getRowCount()!=0) {
				boolean refFlag = false;
				List<Map<String, Object>> ref = dataSetUtil.dataSetToList(dsRef);
				for(int i=0; i<ref.size(); i++)
				{
					Map<String, Object> map = ref.get(i);
					map.put("PK_DOC_NO", pk_Doc_No);
					
					updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
					if(insertFlag == false && refFlag == false) {
						commonDao.deleteData("CMA020CT.CMA020CT_REF_D", map);
						refFlag = true;
					}
					commonDao.insertData("CMA020CT.CMA020CT_REF_I", map);
				}
			}

			if(dsRpt.getRowCount()!=0) {
				boolean rptFlag = false;
				List<Map<String, Object>> rpt = dataSetUtil.dataSetToList(dsRpt);
				for(int i=0; i<rpt.size(); i++)
				{
					Map<String, Object> map = rpt.get(i);
					map.put("PK_DOC_NO", pk_Doc_No);
					
					updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
					if(insertFlag == false && rptFlag == false) {
						commonDao.deleteData("CMA020CT.CMA020CT_RPT_D", map);
						rptFlag = true;
					}
					commonDao.insertData("CMA020CT.CMA020CT_RPT_I", map);
				}
			}
			
			// 작성자 결재상신
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("COMPANY_CD", company_Cd);
			map.put("PLANT_CD", plant_Cd);
			map.put("PK_DOC_NO", pk_Doc_No);
			map.put("APV_PGM_ID", apv_Pgm_Id);
			
			updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
			
			commonDao.updateData("CMA020CT.CMA020CT_SUBMIT_W", map);
			
			// 각 화면 테이블의 결재 관련 컬럼 update
			// rpt_Doc_No
			String[] rptDocNoArray = rpt_Doc_No.split(",");
			for(int i=0; i<rptDocNoArray.length; i++) {
				map.put("RPT_DOC_NO", rptDocNoArray[i]);
				commonDao.updateData(apv_Pgm_Id + "." + apv_Pgm_Id + "_SUBMIT_W", map);
			}
			
			map.put("GRP_LINE_SEQ", 1);
			Map<String, Object> applPrcDt = commonDao.getMap("CMA020CT.CMA020CT_PRC_DT_S",map);
			List<Map<String, Object>> ds_ret2 = new ArrayList<Map<String, Object>>();
			ds_ret2.add(applPrcDt);
			result.addDataSet("output2", ds_ret2);
			
			Map<String, Object> nextEmail = commonDao.getMap("CMA020CT.CMA020CT_GET_EMAIL_FA",map);
			if(nextEmail.get("VESSEL_CD").toString().equals("HDO")) {
				System.out.println(nextEmail.get("USER_ID").toString());
				System.out.println(nextEmail.get("USER_NM_KOR").toString());
				String message = "알림테스트입니다. ERP 결제요청이 있습니다.";
				String solution_name = "알림테스트입니다. ERP 결제요청";
				sendMassenger.sendMassenger(nextEmail.get("EMAIL").toString(), message , solution_name);
			}
			transactionManager.commit(transactionStatus);
			result.setErrorCode(0);
			return result;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.debug("[log]ErrorException -> "+ e.getMessage());
			throw e;
		}
	}
	
	// 결재자 결재상신
	@Override
	public NexacroResult submit2(VariableList inVar, DataSetList inDataset) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			NexacroResult result = new NexacroResult();
			
			DataSet dsHead = inDataset.get("input1");
			
			//전송 대상
			List<Map<String, Object>> destinationList = new ArrayList<Map<String, Object>>();
						
			String line_Appvl_Flag="";
			String grp_Line_Seq="";
			String sum_Grp_Line_Seq="";
			String rpt_Doc_No="";
			String apv_Pgm_Id="";
			String apv_Sp_Id="";
			//String user_Nm_kor = inVar.getString("USER_NM_KOR");
			
			if(dsHead.getRowCount()!=0) {
				List<Map<String, Object>> head = dataSetUtil.dataSetToList(dsHead);
				for(int i=0; i<head.size(); i++)
				{
					Map<String, Object> map = head.get(i);
					line_Appvl_Flag = (String) map.get("LINE_APPVL_FLAG");
					grp_Line_Seq = (String) map.get("GRP_LINE_SEQ");
					sum_Grp_Line_Seq = (String) map.get("SUM_GRP_LINE_SEQ");
					rpt_Doc_No = (String) map.get("RPT_DOC_NO");
					apv_Pgm_Id = (String) map.get("APV_PGM_ID");
					apv_Sp_Id = (String) map.get("APV_SP_ID");
					//유저 이름 넣어주기 알람전송시 결제라인에 맞는 사람 찾기
					System.out.println(">>>>>>>>>>>>>>>"+map.get("USER_NM_KOR").toString());
					
					updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
					
					if(line_Appvl_Flag.equals("20")) { // 승인
						if(grp_Line_Seq.equals(sum_Grp_Line_Seq)) { // 최종결재자
							commonDao.updateData("CMA020CT.CMA020CT_SUBMIT_F", map);
							// 각 화면 테이블의 결재 관련 컬럼 update
							String[] rptDocNoArray = rpt_Doc_No.split(",");
							for(int j=0; j<rptDocNoArray.length; j++) {
								map.put("RPT_DOC_NO", rptDocNoArray[j]);
								commonDao.updateData(apv_Pgm_Id + "." + apv_Pgm_Id + "_SUBMIT_F", map);
							}
							
							// 결재최종승인 후처리
							if(!StringUtils.isEmpty(apv_Sp_Id)) {
								String[] apvSpId = apv_Sp_Id.split(",");
								
								// 구매보급 & 일반수리
								if(apv_Pgm_Id.substring(0, 2).equals("MM")
										|| apv_Pgm_Id.substring(0, 2).equals("RM")
										|| apv_Pgm_Id.substring(0, 2).equals("DK")) {
									
									Map<String, Object> sMap = new HashMap<String, Object>();
									sMap = commonDao.getMap(apv_Pgm_Id + "_SP_APV_S", map);
									updateMetadataUtil.setAuditData(sMap, inVar.getString("REG_PGM_ID"));
									
									//전송 프로시저 실행
									commonDao.getMap(apv_Pgm_Id + "." + apvSpId[0], sMap);
									
									// 전송 테이블 저장시 오류
									if(!sMap.get("ERR_CODE").equals("0")) {
										result.setErrorCode(-1);
										result.setErrorMsg(sMap.get("ERR_MSG").toString());
										return result;
									} 
									
									destinationList.add(new HashMap<String, Object>(sMap));
									
									// 전송 테이블 저장 후 원 테이블 WK_FLAG NULL처리
									for(int j=1; j<apvSpId.length; j++) {
										commonDao.updateData(apv_Pgm_Id + "." + apvSpId[j], sMap);
									}
									
									//데이터전송
									if(destinationList.size() > 0) transferService.sendDataRequest(destinationList);
									
								} else { // 기타
									updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
									
									map.put("APPVL_GRP_NO", map.get("RPT_DOC_NO"));
									//전송 프로시저 실행
									commonDao.getMap(apv_Pgm_Id + "." + apv_Sp_Id.toString(), map);
								}
								
							}
							Map<String, Object> nextEmail = commonDao.getMap("CMA020CT.CMA020CT_GET_EMAIL_F",map);
							if(nextEmail.get("VESSEL_CD").toString().equals("HDO")) {
								System.out.println(nextEmail.get("USER_ID").toString());
								System.out.println(nextEmail.get("USER_NM_KOR").toString());
								String message = "알림테스트입니다. ERP 결제승인 확인부탁드립니다.";
								String solution_name = "알림테스트입니다. ERP 결제승인";
								sendMassenger.sendMassenger(nextEmail.get("EMAIL").toString(), message, solution_name);
							}
						} else { // 중간결재자
							commonDao.updateData("CMA020CT.CMA020CT_SUBMIT_A", map);
							// 각 화면 테이블의 결재 관련 컬럼 update
							String[] rptDocNoArray = rpt_Doc_No.split(",");
							for(int j=0; j<rptDocNoArray.length; j++) {
								map.put("RPT_DOC_NO", rptDocNoArray[j]);
								commonDao.updateData(apv_Pgm_Id + "." + apv_Pgm_Id + "_SUBMIT_A", map);
							}
							Map<String, Object> nextEmail = commonDao.getMap("CMA020CT.CMA020CT_GET_EMAIL_A",map);
							if(nextEmail.get("VESSEL_CD").toString().equals("HDO")) {
								System.out.println(nextEmail.get("USER_ID").toString());
								System.out.println(nextEmail.get("USER_NM_KOR").toString());
								String message = "알림테스트입니다. ERP 결제요청이 있습니다. 확인부탁드립니다.";
								String solution_name = "알림테스트입니다. ERP 결제요청";
								sendMassenger.sendMassenger(nextEmail.get("EMAIL").toString(), message, solution_name);
							}
						}
					} else if(line_Appvl_Flag.equals("30")) { // 보류
						commonDao.updateData("CMA020CT.CMA020CT_SUBMIT_WITHHELD", map);
						// 각 화면 테이블의 결재 관련 컬럼 update
						String[] rptDocNoArray = rpt_Doc_No.split(",");
						for(int j=0; j<rptDocNoArray.length; j++) {
							map.put("RPT_DOC_NO", rptDocNoArray[j]);
							commonDao.updateData(apv_Pgm_Id + "." + apv_Pgm_Id + "_SUBMIT_WITHHELD", map);
						}
						Map<String, Object> nextEmail = commonDao.getMap("CMA020CT.CMA020CT_GET_EMAIL_C",map);
						if(nextEmail.get("VESSEL_CD").toString().equals("HDO")) {
							System.out.println(nextEmail.get("USER_ID").toString());
							System.out.println(nextEmail.get("USER_NM_KOR").toString());
							String message = "알림테스트입니다. ERP 결제보류되었습니다. 확인부탁드립니다.";
							String solution_name = "알림테스트입니다. ERP 결제보류";
							sendMassenger.sendMassenger(nextEmail.get("EMAIL").toString(), message, solution_name);
						}
					} else if(line_Appvl_Flag.equals("40")) { // 반려
						commonDao.updateData("CMA020CT.CMA020CT_SUBMIT_REFUSAL", map);
						// 각 화면 테이블의 결재 관련 컬럼 update
						String[] rptDocNoArray = rpt_Doc_No.split(",");
						for(int j=0; j<rptDocNoArray.length; j++) {
							map.put("RPT_DOC_NO", rptDocNoArray[j]);
							commonDao.updateData(apv_Pgm_Id + "." + apv_Pgm_Id + "_SUBMIT_REFUSAL", map);
						}
						Map<String, Object> nextEmail = commonDao.getMap("CMA020CT.CMA020CT_GET_EMAIL_C",map);
						if(nextEmail.get("VESSEL_CD").toString().equals("HDO")) {
							System.out.println(nextEmail.get("USER_ID").toString());
							System.out.println(nextEmail.get("USER_NM_KOR").toString());
							String message = "알림테스트입니다. ERP 결제반려되었습니다. 확인부탁드립니다.";
							String solution_name = "알림테스트입니다. ERP 결제반려";
							sendMassenger.sendMassenger(nextEmail.get("EMAIL").toString(), message, solution_name);
						}
					} else if(line_Appvl_Flag.equals("50")) { // 취소
						commonDao.updateData("CMA020CT.CMA020CT_SUBMIT_CANCEL", map);
						// 각 화면 테이블의 결재 관련 컬럼 update
						String[] rptDocNoArray = rpt_Doc_No.split(",");
						for(int j=0; j<rptDocNoArray.length; j++) {
							map.put("RPT_DOC_NO", rptDocNoArray[j]);
							commonDao.updateData(apv_Pgm_Id + "." + apv_Pgm_Id + "_SUBMIT_CANCEL", map);
						}
						Map<String, Object> nextEmail = commonDao.getMap("CMA020CT.CMA020CT_GET_EMAIL_C",map);
						if(nextEmail.get("VESSEL_CD").toString().equals("HDO")) {
							System.out.println(nextEmail.get("USER_ID").toString());
							System.out.println(nextEmail.get("USER_NM_KOR").toString());
							String message = "알림테스트입니다. ERP 결제취소되었습니다. 확인부탁드립니다.";
							String solution_name = "알림테스트입니다. ERP 결제취소";
							sendMassenger.sendMassenger(nextEmail.get("EMAIL").toString(), message, solution_name);
						}
					}

					Map<String, Object> applPrcDt = commonDao.getMap("CMA020CT.CMA020CT_PRC_DT_S",map);
					List<Map<String, Object>> ds_ret = new ArrayList<Map<String, Object>>();
					ds_ret.add(applPrcDt);
					result.addDataSet("output1", ds_ret);
					
				}
				
			}
		
			transactionManager.commit(transactionStatus);
			result.setErrorCode(0);
			return result;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.debug("[log]ErrorException -> "+ e.getMessage());
			throw e;
		}
	}
	
	// 작성자 상신취소
	@Override
	public NexacroResult cancel(VariableList inVar, DataSetList inDataset) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			NexacroResult result = new NexacroResult();
			
			DataSet dsHead = inDataset.get("input1");
			String rpt_Doc_No="";
			String apv_Pgm_Id="";
						
			if(dsHead.getRowCount()!=0) {
				List<Map<String, Object>> head = dataSetUtil.dataSetToList(dsHead);
				for(int i=0; i<head.size(); i++)
				{
					Map<String, Object> map = head.get(i);
					updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
					commonDao.updateData("CMA020CT.CMA020CT_CNT_CANCEL", map);
					
					// 각 화면 테이블의 결재 관련 컬럼 update
					rpt_Doc_No = (String) map.get("RPT_DOC_NO");
					apv_Pgm_Id = (String) map.get("APV_PGM_ID");
					
					String[] rptDocNoArray = rpt_Doc_No.split(",");
					for(int j=0; j<rptDocNoArray.length; j++) {
						map.put("RPT_DOC_NO", rptDocNoArray[j]);
						commonDao.updateData(apv_Pgm_Id + "." + apv_Pgm_Id + "_CNT_CANCEL", map);
					}
					
					List<Map<String, Object>> ds_ret = commonDao.getList("CMA020CT.CMA020CT_GRPLINE_S",map);
					result.addDataSet("output1", ds_ret);
				}
			}
			
			transactionManager.commit(transactionStatus);
			result.setErrorCode(0);
			return result;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.debug("[log]ErrorException -> "+ e.getMessage());
			throw e;
		}
	}
	
	// 작성자 결재상신 시 중복상신 체크
	@Override
	public NexacroResult appvlchk(VariableList inVar, DataSetList inDataset) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			NexacroResult result = new NexacroResult();
			
			DataSet dsHead = inDataset.get("input1");
			String rpt_Doc_No="";
			String apv_Pgm_Id="";
			
			if(dsHead.getRowCount()!=0) {
				List<Map<String, Object>> head = dataSetUtil.dataSetToList(dsHead);
				for(int i=0; i<head.size(); i++)
				{
					Map<String, Object> map = head.get(i);
					updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
					
					// 각 화면 테이블의 결재 관련 컬럼 update
					rpt_Doc_No = (String) map.get("RPT_DOC_NO");
					apv_Pgm_Id = (String) map.get("APV_PGM_ID");
					List<Map<String, Object>> ds_ret = new ArrayList<Map<String, Object>>();
					
					String[] rptDocNoArray = rpt_Doc_No.split(",");
					for(int j=0; j<rptDocNoArray.length; j++) {
						map.put("RPT_DOC_NO", rptDocNoArray[j]);
						Map<String, Object> appvlChk = commonDao.getMap(apv_Pgm_Id + "." + apv_Pgm_Id + "_APPVL_CHK", map);
						ds_ret.add(appvlChk);
					}
					
					result.addDataSet("output1", ds_ret);
				}
			}
			
			transactionManager.commit(transactionStatus);
			result.setErrorCode(0);
			return result;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.debug("[log]ErrorException -> "+ e.getMessage());
			throw e;
		}
	}
	
	// 참조문서 invoice Search
	@Override
	public NexacroResult invoiceSearch(VariableList inVar, DataSetList inDataset) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		try {
			NexacroResult result = new NexacroResult();
			
			DataSet dsInvoiceS = inDataset.get("input1");
			
			if(dsInvoiceS.getRowCount()!=0) {
				List<Map<String, Object>> invoice = dataSetUtil.dataSetToList(dsInvoiceS);
				List<Map<String, Object>> ds_ret = new ArrayList<Map<String, Object>>();
				
				for(int i=0; i<invoice.size(); i++)
				{
					Map<String, Object> map = invoice.get(i);
					//updateMetadataUtil.setAuditData(map, inVar.getString("REG_PGM_ID"));
					
					Map<String, Object> invoiceS = commonDao.getMap(inVar.getString("sqlId"), map);
					ds_ret.add(invoiceS);
				}
				result.addDataSet("output1", ds_ret);
			}
			
			transactionManager.commit(transactionStatus);
			result.setErrorCode(0);
			return result;
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.debug("[log]ErrorException -> "+ e.getMessage());
			throw e;
		}
	}
	
}
