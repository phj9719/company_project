package egovframework.com.day.service.impl;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.annotation.Resource;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.ss.util.RegionUtil;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.common.constant.CommonConstant;
import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.day.service.DAY00702EXCELService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("DAY00702EXCELService")
public class DAY00702EXCELServiceImpl extends EgovAbstractServiceImpl implements DAY00702EXCELService {
	
	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	// 식단 업로드 양식 다운로드
	@Override
	public NexacroResult formDown(VariableList inVar, DataSetList inDataset, DataSetList outDataSet) throws Exception {
		
		NexacroResult result = new NexacroResult();
		List<String> titleList = new ArrayList<String>();	// 첫줄에 들어갈 컬럼명
		List<String> list = new ArrayList<String>();	// 아침, 점심, 저녁
		List<String> list2 = new ArrayList<String>();	// 오전간식, 오후간식, 기능식이
		List<String> list3 = new ArrayList<String>();	// 당뇨, 유동, 저염
		
		DataSet ds = inDataset.get("input1");	// ds_excel_day
		
		// 시트 이름 세팅
		String name = inVar.getString("SHEET_NAME");
		if (log.isDebugEnabled())
			log.debug(name);
		
		// 첫줄에 들어갈 컬럼명들 배열에 세팅
		List<Map<String, Object>> dsList = dataSetUtil.dataSetToList(ds);
		titleList.add("날짜");
		titleList.add("번호");
		for (int i = 0; i < dsList.size(); i++) {
			Map<String, Object> map = dsList.get(i);
			String dateStr = map.get("Date").toString();
			String[] dateArr = dateStr.split("-");
			String val = dateArr[0] + dateArr[1] + dateArr[2];
			titleList.add(val);
		}
		
		list.add("아침");
		list.add("점심");
		list.add("저녁");
		list2.add("오전간식");
		list2.add("오후간식");
		list2.add("기능식이");
		list3.add("당뇨");
		list3.add("유동");
		list3.add("저염");
		
		// 엑셀파일 객체 생성 HSSF : xls, XSSF : xlsx
		//Workbook workbook = new HSSFWorkbook();	
		Workbook workbook = new XSSFWorkbook();	
		// 시트 생성 ( 첫번째 시트 )
		Sheet sheet = workbook.createSheet(name);	
		
		// 자바 배열처럼 첫번째 인덱스가 0 부터 시작한다.
		// 첫번째 행을 생성한다. 첫번째줄이기 때문에 createRow(0)
		/*
		 * createRow -> createCell -> cell에 값과 스타일 설정
		 * 해당 row 인덱스의 createRow 명령어는 한번만 실행할 것
		 * for 문 등으로 createRow 를 반복하면 기존에 작성된 row의 내용이
		 * 모두 삭제되기 때문
		 */
		// Row 생성
		Row titleRow = sheet.createRow(0);
		int titleColNum = 0;
		Cell titleCell = null;
		for (int i = 0; i < titleList.size(); i++) {
			// 셀 생성
			titleCell = titleRow.createCell(titleColNum++);
			// 셀에 값 세팅
			titleCell.setCellValue(titleList.get(i));	// setCellValue 셀에 값넣기.
		}
		
		// 2번째 줄부터 양식 만들기
		int rowNum = 1;
		int cellNum = 0;
		Row dataRow = null;
		Cell dataCell = null;
		
		// 아침, 점심, 저녁
		for (int i = 0; i < list.size(); i++) {
			cellNum = 0;
			// 아침, 점심, 저녁의 첫줄 만들기
			dataRow = sheet.createRow(rowNum++);
			dataCell = dataRow.createCell(cellNum++);
			dataCell.setCellValue(list.get(i));
			dataCell = dataRow.createCell(cellNum);
			dataCell.setCellValue("1");
			// 2번째 줄 부터 6번째 줄까지 만들기
			for (int j = 2; j <= 6 ; j++) {
				dataRow = sheet.createRow(rowNum++);
				dataCell = dataRow.createCell(cellNum);
				dataCell.setCellValue("" + j);
			}
		}
		
		// 오전간식, 오후간식, 기능식이
		for (int i = 0; i < list2.size(); i++) {
			cellNum = 0;
			// 오전간식, 오후간식, 기능식이 첫줄 만들기
			dataRow = sheet.createRow(rowNum++);
			dataCell = dataRow.createCell(cellNum++);
			dataCell.setCellValue(list2.get(i));
			dataCell = dataRow.createCell(cellNum);
			dataCell.setCellValue("1");
			// 2번째 줄 부터 3번째 줄 까지 만들기
			for (int j = 2; j <= 3 ; j++) {
				dataRow = sheet.createRow(rowNum++);
				dataCell = dataRow.createCell(cellNum);
				dataCell.setCellValue("" + j);
			}
		}
		
		// 당뇨, 유동, 저염
		for (int i = 0; i < list3.size(); i++) {
			cellNum = 0;
			dataRow = sheet.createRow(rowNum++);
			dataCell = dataRow.createCell(cellNum++);
			dataCell.setCellValue(list3.get(i));
			dataCell = dataRow.createCell(cellNum);
			dataCell.setCellValue("1");
		}
		
		// 서버에 엑셀파일 생성하기
		if (log.isInfoEnabled())
			log.info("엑셀 파일 생성");
		
		String randomStr = randomString();
		// local
		//String rootDir = "D:\\";
		//String fileDir = "excel\\" + randomStr;
		//String mkDir = rootDir + fileDir + "\\";
		//String fileName = name + ".xlsx";
		//String fileRealName = fileDir + "\\" + fileName;
		
		// server
		String rootDir = CommonConstant.LINUX_FILE_DIR;
		String fileDir = "/excel/" + randomStr;
		String mkDir = rootDir + fileDir + "/";
		String fileName = name + ".xlsx";
		String fileRealName = fileDir + "/" + fileName;
		
		FileOutputStream fos = null;
		try {
			File dir = new File(mkDir);
			if (!dir.exists()) {
				if (log.isDebugEnabled())
					log.debug("폴더 생성 시도");
				if (dir.mkdirs())
					if (log.isDebugEnabled())
						log.debug("폴더 생성 성공");
				else
					if (log.isDebugEnabled())
						log.debug("폴더 생성 실패");
			}
			File file = new File(rootDir + fileRealName);
			fos = new FileOutputStream(file, false);
			workbook.write(fos);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (fos != null)
				fos.close();
		}
		if (log.isInfoEnabled())
			log.info("엑셀 파일 생성 성공");
		
		// 서버에 파일 생성후 넥사에 파일생성한 경로 리턴하기
		DataSet outDs = new DataSet("output1");
		outDs.addColumn("FILE_REAL_NAME", DataTypes.STRING, 255);
		outDs.addColumn("FILE_NAME", DataTypes.STRING, 255);
		
		int nRow = outDs.newRow();
		outDs.set(nRow, "FILE_REAL_NAME", fileRealName);
		outDs.set(nRow, "FILE_NAME", fileName);
		result.addDataSet(outDs);
		
		result.setErrorCode(0);
		
		return result;
	}

	// 식단 다운로드
	@Override
	public NexacroResult excelDown(VariableList inVar, DataSetList inDataset) throws Exception {
		
		NexacroResult result = new NexacroResult();
		
		DataSet ds = inDataset.get("input1");	// ds_excel_head
		DataSet ds2 = inDataset.get("input2");	// ds_excel_data
		
		Map<String, Object> map1 = dataSetUtil.dataSetToList(ds).get(0);
		String firstday = map1.get("firstday").toString();
		String lastday = map1.get("lastday").toString();
		String year = map1.get("YEAR").toString();
		String mon = map1.get("MON").toString();
		
		// 날짜 스트링 만들기
		// 시작일
		String first1 = firstday.substring(0, 4);
		String first2 = firstday.substring(5, 7);
		String first3 = firstday.substring(8, 10);
		String firstStr = first1 + first2 + first3;
		String firstStr2 = first1 + "." + first2 + "." + first3;
		
		// 마지막 일
		String last1 = lastday.substring(0, 4);
		String last2 = lastday.substring(5, 7);
		String last3 = lastday.substring(8, 10);
		String lastStr = last1 + last2 + last3;
		String lastStr2 = last1 + "." + last2 + "." + last3;
		
		// 시트 이름, 파일이름, 제목 세팅
		String name = inVar.getString("SHEET_NAME");
		if (log.isDebugEnabled())
			log.debug(name);
		String titleName = "";
		String fileNameStr = "";
		if (name.equals("주간")) {
			titleName = "주간식단표";
			fileNameStr = firstStr + " - " + lastStr + " 식단표";
		} else if (name.equals("월간")) {
			titleName = year + "년" + mon + "월" + " 식단표";
			fileNameStr = year + "년" + mon + "월" + " 식단표";
		}
		
		// 엑셀 객체 만들기 xlxs
		Workbook workbook = new XSSFWorkbook();
		// 시트 이름 세팅
		Sheet sheet = workbook.createSheet(fileNameStr);
		
		short borderThin = XSSFCellStyle.BORDER_THIN;
		short vAlignCenter = XSSFCellStyle.VERTICAL_CENTER;
		short alignCenter = CellStyle.ALIGN_CENTER;
		short fontBold = Font.BOLDWEIGHT_BOLD;
		
		// 열 너비 세팅
		// width = (열너비 * 256) + 200
		sheet.setColumnWidth(0, 1000);
		sheet.setColumnWidth(1, 4475);
		sheet.setColumnWidth(2, 4475);
		sheet.setColumnWidth(3, 4475);
		sheet.setColumnWidth(4, 4475);
		sheet.setColumnWidth(5, 4475);
		sheet.setColumnWidth(6, 4475);
		sheet.setColumnWidth(7, 4475);
		sheet.setColumnWidth(8, 4475);
		sheet.setColumnWidth(9, 4475);
		
		// 제일 상단 빈 row
		Row topRow = sheet.createRow(0);
		topRow.setHeightInPoints(10.0f);	// 셀 높이
		
		// 제목 row
		Row titleRow = sheet.createRow(1);
		int titleColNum = 1;
		Cell titleCell = titleRow.createCell(titleColNum);
		titleCell.setCellValue(titleName);
		titleRow.setHeightInPoints(25.0f);
		// 셀 병합
		CellRangeAddress titleMergeAddress = new CellRangeAddress(1, 1, 1, 7);
		sheet.addMergedRegion(titleMergeAddress);
		
		// 병합 셀 테두리 지정
		RegionUtil.setBorderLeft(borderThin, titleMergeAddress, sheet, workbook);
		RegionUtil.setBorderRight(borderThin, titleMergeAddress, sheet, workbook);
		RegionUtil.setBorderTop(borderThin, titleMergeAddress, sheet, workbook);
		RegionUtil.setBorderBottom(borderThin, titleMergeAddress, sheet, workbook);
		
		Font boldFont = workbook.createFont();
		boldFont.setBoldweight(fontBold);
		boldFont.setFontName("맑은 고딕");
		
		Font gothicFont = workbook.createFont();
		gothicFont.setFontName("맑은 고딕");
		
		// 제목 스타일 & 폰트
		CellStyle titlestyle = workbook.createCellStyle();	// 스타일 만들기
		Font titleFont = workbook.createFont();	// 폰트 만들기
		titleFont.setBoldweight(fontBold);	// 폰트 굵게
		titleFont.setFontHeightInPoints((short)14);	// 폰트 크기
		titleFont.setFontName("맑은 고딕");	// 폰트 이름
		// 스타일 테두리 설정
		titlestyle.setBorderLeft(borderThin);
		titlestyle.setBorderRight(borderThin);
		titlestyle.setBorderTop(borderThin);
		titlestyle.setBorderBottom(borderThin);
		
		titlestyle.setVerticalAlignment(vAlignCenter);	// 수직 정렬
		titlestyle.setAlignment(alignCenter);	// 수평 정렬
		titlestyle.setFont(titleFont);	// 스타일에 폰트 세팅
		titleCell.setCellStyle(titlestyle);	// 셀에 스타일 적용
		
		// 식단제공기간 스타일
		CellStyle dateStrStyle = workbook.createCellStyle();
		dateStrStyle.setBorderLeft(borderThin);
		dateStrStyle.setBorderRight(borderThin);
		dateStrStyle.setBorderTop(borderThin);
		dateStrStyle.setBorderBottom(borderThin);
		dateStrStyle.setVerticalAlignment(vAlignCenter);
		dateStrStyle.setAlignment(alignCenter);
		dateStrStyle.setFont(gothicFont);
		
		// 날짜 입력부 스타일
		CellStyle dateLeftStyle = workbook.createCellStyle();
		dateLeftStyle.setBorderLeft(borderThin);
		dateLeftStyle.setBorderTop(borderThin);
		dateLeftStyle.setBorderBottom(borderThin);
		dateLeftStyle.setVerticalAlignment(vAlignCenter);
		dateLeftStyle.setFont(boldFont);
		
		// 날짜와 기관명 사이의 스타일
		CellStyle dateBodyStyle = workbook.createCellStyle();
		dateBodyStyle.setBorderTop(borderThin);
		dateBodyStyle.setBorderBottom(borderThin);
		
		// 기관명 입력부 스타일
		CellStyle dateRightStyle = workbook.createCellStyle();
		dateRightStyle.setBorderRight(borderThin);
		dateRightStyle.setBorderTop(borderThin);
		dateRightStyle.setBorderBottom(borderThin);
		dateRightStyle.setVerticalAlignment(vAlignCenter);
		dateRightStyle.setAlignment(CellStyle.ALIGN_RIGHT);
		dateRightStyle.setFont(gothicFont);
		
		// 제목과 식단제공기간 사이의 빈 row
		Row airRow1 = sheet.createRow(2);
		airRow1.setHeightInPoints(5.0f);
		
		// 식단제공기간
		Row dateRow = sheet.createRow(3);
		Cell dateStrCell = dateRow.createCell(1);
		dateStrCell.setCellValue("식단제공기간");
		dateStrCell.setCellStyle(dateStrStyle);
		// 날짜 세팅
		Cell dateValCell = dateRow.createCell(2);
		dateValCell.setCellValue("  " + firstStr2 + " - " + lastStr2);
		dateValCell.setCellStyle(dateLeftStyle);
		
		// 빈 셀 만들기 (위, 아래 테두리적용)
		Cell dateBodyCell = null;
		for (int i = 3; i < 7; i++) {
			dateBodyCell = dateRow.createCell(i);
			dateBodyCell.setCellStyle(dateBodyStyle);
		}
		
		// 기관명 세팅
		String offname = map1.get("b_offname").toString();
		Cell dateRightCell = dateRow.createCell(7);
		dateRightCell.setCellValue(offname + "  ");
		dateRightCell.setCellStyle(dateRightStyle);
		
		// 날짜 윗부분 스타일
		CellStyle dateHeaderTopStyle = workbook.createCellStyle();
		dateHeaderTopStyle.setBorderLeft(borderThin);
		dateHeaderTopStyle.setBorderTop(borderThin);
		dateHeaderTopStyle.setBorderRight(borderThin);
		dateHeaderTopStyle.setAlignment(alignCenter);
		dateHeaderTopStyle.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.getIndex());
		dateHeaderTopStyle.setFillPattern(CellStyle.SOLID_FOREGROUND);
		dateHeaderTopStyle.setFont(boldFont);
		
		// 날짜 아래부분 스타일
		CellStyle dateHeaderBottomStyle = workbook.createCellStyle();
		dateHeaderBottomStyle.setBorderLeft(borderThin);
		dateHeaderBottomStyle.setBorderRight(borderThin);
		dateHeaderBottomStyle.setBorderBottom(borderThin);
		dateHeaderBottomStyle.setAlignment(alignCenter);
		dateHeaderBottomStyle.setVerticalAlignment(vAlignCenter);
		dateHeaderBottomStyle.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.getIndex());
		dateHeaderBottomStyle.setFillPattern(CellStyle.SOLID_FOREGROUND);
		dateHeaderBottomStyle.setFont(gothicFont);
		
		// 식단 종류 스타일
		CellStyle dataHeaderStyle = workbook.createCellStyle();
		dataHeaderStyle.setBorderLeft(borderThin);
		dataHeaderStyle.setBorderRight(borderThin);
		dataHeaderStyle.setBorderTop(borderThin);
		dataHeaderStyle.setBorderBottom(borderThin);
		dataHeaderStyle.setAlignment(alignCenter);
		dataHeaderStyle.setVerticalAlignment(vAlignCenter);
		dataHeaderStyle.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.getIndex());
		dataHeaderStyle.setFillPattern(CellStyle.SOLID_FOREGROUND);
		dataHeaderStyle.setFont(gothicFont);
		
		// 식단 목록 윗부분 스타일
		CellStyle dataBodyTopStyle = workbook.createCellStyle();
		dataBodyTopStyle.setBorderLeft(borderThin);
		dataBodyTopStyle.setBorderRight(borderThin);
		dataBodyTopStyle.setBorderTop(borderThin);
		dataBodyTopStyle.setAlignment(alignCenter);
		dataBodyTopStyle.setVerticalAlignment(vAlignCenter);
		dataBodyTopStyle.setFont(boldFont);
		
		// 식단 목록 중간부분 스타일
		CellStyle dataBodyMiddleStyle = workbook.createCellStyle();
		dataBodyMiddleStyle.setBorderLeft(borderThin);
		dataBodyMiddleStyle.setBorderRight(borderThin);
		dataBodyMiddleStyle.setAlignment(alignCenter);
		dataBodyMiddleStyle.setVerticalAlignment(vAlignCenter);
		dataBodyMiddleStyle.setFont(boldFont);
		
		// 식단 목록 바닥부분 스타일
		CellStyle dataBodyBottomStyle = workbook.createCellStyle();
		dataBodyBottomStyle.setBorderLeft(borderThin);
		dataBodyBottomStyle.setBorderRight(borderThin);
		dataBodyBottomStyle.setBorderBottom(borderThin);
		dataBodyBottomStyle.setAlignment(alignCenter);
		dataBodyBottomStyle.setVerticalAlignment(vAlignCenter);
		dataBodyBottomStyle.setFont(boldFont);
		
		// 식단 목록 점선 스타일
		CellStyle dataBodyBottomDashStyle = workbook.createCellStyle();
		dataBodyBottomDashStyle.setBorderLeft(borderThin);
		dataBodyBottomDashStyle.setBorderRight(borderThin);
		dataBodyBottomDashStyle.setBorderBottom(XSSFCellStyle.BORDER_DASHED);
		dataBodyBottomDashStyle.setAlignment(alignCenter);
		dataBodyBottomDashStyle.setVerticalAlignment(vAlignCenter);
		dataBodyBottomDashStyle.setFont(boldFont);
		
		int rNum = 0;
		int cNum = 0;
		
		List<Map<String, Object>> list = dataSetUtil.dataSetToList(ds2);
		
		if (log.isDebugEnabled())
			log.debug("list size : {}", list.size());
		
		Row airRow2 = null;
		Row airRow3 = null;
		Row dateHeaderTopRow = null;
		Cell dateHeaderTopCell = null;
		Row dateHeaderBottomRow = null;
		Cell dateHeaderBottomCell = null;
		Row dataHeaderRow1 = null;
		Cell dataHeaderCell1 = null;
		Row dataBodyTopRow1 = null;
		Cell dataBodyTopCell1 = null;
		Row dataBodyMiddleRow1_1 = null;
		Cell dataBodyMiddleCell1_1 = null;
		Row dataBodyMiddleRow1_2 = null;
		Cell dataBodyMiddleCell1_2 = null;
		Row dataBodyMiddleRow1_3 = null;
		Cell dataBodyMiddleCell1_3 = null;
		Row dataBodyMiddleRow1_4 = null;
		Cell dataBodyMiddleCell1_4 = null;
		Row dataBodyBottomRow1 = null;
		Cell dataBodyBottomCell1 = null;
		Row dataHeaderRow2 = null;
		Cell dataHeaderCell2 = null;
		Row dataBodyTopRow2 = null;
		Cell dataBodyTopCell2 = null;
		Row dataBodyMiddleRow2_1 = null;
		Cell dataBodyMiddleCell2_1 = null;
		Row dataBodyMiddleRow2_2 = null;
		Cell dataBodyMiddleCell2_2 = null;
		Row dataBodyMiddleRow2_3 = null;
		Cell dataBodyMiddleCell2_3 = null;
		Row dataBodyMiddleRow2_4 = null;
		Cell dataBodyMiddleCell2_4 = null;
		Row dataBodyBottomRow2 = null;
		Cell dataBodyBottomCell2 = null;
		Row dataHeaderRow3 = null;
		Cell dataHeaderCell3 = null;
		Row dataBodyTopRow3 = null;
		Cell dataBodyTopCell3 = null;
		Row dataBodyMiddleRow3_1 = null;
		Cell dataBodyMiddleCell3_1 = null;
		Row dataBodyMiddleRow3_2 = null;
		Cell dataBodyMiddleCell3_2 = null;
		Row dataBodyMiddleRow3_3 = null;
		Cell dataBodyMiddleCell3_3 = null;
		Row dataBodyMiddleRow3_4 = null;
		Cell dataBodyMiddleCell3_4 = null;
		Row dataBodyBottomRow3 = null;
		Cell dataBodyBottomCell3 = null;
		Row dataHeaderRow4 = null;
		Cell dataHeaderCell4 = null;
		Row dataBodyTopRow4 = null;
		Cell dataBodyTopCell4 = null;
		Row dataBodyMiddleRow4_1 = null;
		Cell dataBodyMiddleCell4_1 = null;
		Row dataBodyMiddleRow4_2 = null;
		Cell dataBodyMiddleCell4_2 = null;
		Row dataBodyMiddleRow4_3 = null;
		Cell dataBodyMiddleCell4_3 = null;
		Row dataBodyMiddleRow4_4 = null;
		Cell dataBodyMiddleCell4_4 = null;
		Row dataBodyBottomRow4 = null;
		Cell dataBodyBottomCell4 = null;
		Row dataHeaderRow5 = null;
		Cell dataHeaderCell5 = null;
		Row dataBodyTopRow5 = null;
		Cell dataBodyTopCell5 = null;
		Row dataBodyMiddleRow5 = null;
		Cell dataBodyMiddleCell5 = null;
		Row dataBodyBottomRow5 = null;
		Cell dataBodyBottomCell5 = null;
		Row dataHeaderRow6 = null;
		Cell dataHeaderCell6 = null;
		Row dataBodyTopRow6 = null;
		Cell dataBodyTopCell6 = null;
		Row dataBodyMiddleRow6 = null;
		Cell dataBodyMiddleCell6 = null;
		Row dataBodyBottomRow6 = null;
		Cell dataBodyBottomCell6 = null;
		
		for (int i = 0; i < list.size(); i++) {
			if(log.isDebugEnabled())
				log.debug("i : {}", i);
			
			Map<String, Object> map2 = list.get(i);
			
			// 월간의 전달과 다음달의 데이터가 나오지 않게 하기 위한 파라미터
			// diff1 < 0 인 데이터 이전달 데이터
			// diff2 > 0 인 데이터 다음달 데이터
			String diff1Str = map2.get("diff1").toString();
			int diff1 = Integer.parseInt(diff1Str);
			String diff2Str = map2.get("diff2").toString();
			int diff2 = Integer.parseInt(diff2Str);
			
			// 날짜 스트링 만들기
			String date = map2.get("Date").toString();
			String date1 = date.substring(0, 4);
			String date2 = date.substring(5, 7);
			String date3 = date.substring(8, 10);
			String dateStr = date1 + "." + date2 + "." + date3;
			
			// 일주일 단위로 시작 행과 열 초기화 (월간 다운로드를 위함)
			switch (i) {
				case 0:
					rNum = 4;
					cNum = 1;
					break;
				case 7:
					rNum = 44;
					cNum = 1;
					break;
				case 14:
					rNum = 84;
					cNum = 1;
					break;
				case 21:
					rNum = 124;
					cNum = 1;
					break;
				case 28:
					rNum = 164;
					cNum = 1;
					break;
				case 35:
					rNum = 204;
					cNum = 1;
					break;
				default:
					break;
			}
			
			// 빈 row
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35) {
				airRow2 = sheet.createRow(rNum++);
				airRow2.setHeightInPoints(5.0f);
			}
			
			// 날짜 윗부분
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dateHeaderTopRow = sheet.createRow(rNum++);
			dateHeaderTopCell = dateHeaderTopRow.createCell(cNum);
			dateHeaderTopCell.setCellValue(dateStr);
			dateHeaderTopCell.setCellStyle(dateHeaderTopStyle);
			
			// 날짜 아래부분 (요일)
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dateHeaderBottomRow = sheet.createRow(rNum++);
			dateHeaderBottomCell = dateHeaderBottomRow.createCell(cNum);
			dateHeaderBottomCell.setCellValue("(" + map2.get("식단요일").toString() + ")");
			dateHeaderBottomCell.setCellStyle(dateHeaderBottomStyle);
			
			// 빈 row
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35) {
				airRow3 = sheet.createRow(rNum++);
				airRow3.setHeightInPoints(5.0f);
			}
			
			// 아침 식단
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataHeaderRow1 = sheet.createRow(rNum++);
			dataHeaderCell1 = dataHeaderRow1.createCell(cNum);
			dataHeaderCell1.setCellValue("아침 식단");
			dataHeaderCell1.setCellStyle(dataHeaderStyle);
			
			// 아침식단 목록 윗부분
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyTopRow1 = sheet.createRow(rNum++);
			dataBodyTopCell1 = dataBodyTopRow1.createCell(cNum);
			dataBodyTopCell1.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("mor01").toString());
			dataBodyTopCell1.setCellStyle(dataBodyTopStyle);
			
			// 아침식단 목록 중간1
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyMiddleRow1_1 = sheet.createRow(rNum++);
			dataBodyMiddleCell1_1 = dataBodyMiddleRow1_1.createCell(cNum);
			dataBodyMiddleCell1_1.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("mor02").toString());
			dataBodyMiddleCell1_1.setCellStyle(dataBodyMiddleStyle);
			
			// 아침식단 목록 중간2
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyMiddleRow1_2 = sheet.createRow(rNum++);
			dataBodyMiddleCell1_2 = dataBodyMiddleRow1_2.createCell(cNum);
			dataBodyMiddleCell1_2.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("mor03").toString());
			dataBodyMiddleCell1_2.setCellStyle(dataBodyMiddleStyle);
			
			// 아침식단 목록 중간3
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyMiddleRow1_3 = sheet.createRow(rNum++);
			dataBodyMiddleCell1_3 = dataBodyMiddleRow1_3.createCell(cNum);
			dataBodyMiddleCell1_3.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("mor04").toString());
			dataBodyMiddleCell1_3.setCellStyle(dataBodyMiddleStyle);
			
			// 아침식단 목록 중간4
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyMiddleRow1_4 = sheet.createRow(rNum++);
			dataBodyMiddleCell1_4 = dataBodyMiddleRow1_4.createCell(cNum);
			dataBodyMiddleCell1_4.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("mor05").toString());
			dataBodyMiddleCell1_4.setCellStyle(dataBodyMiddleStyle);
			
			// 아침식단 목록 바닥
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyBottomRow1 = sheet.createRow(rNum++);
			dataBodyBottomCell1 = dataBodyBottomRow1.createCell(cNum);
			dataBodyBottomCell1.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("mor06").toString());
			dataBodyBottomCell1.setCellStyle(dataBodyBottomStyle);
			
			// 점심 식단
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataHeaderRow2 = sheet.createRow(rNum++);
			dataHeaderCell2 = dataHeaderRow2.createCell(cNum);
			dataHeaderCell2.setCellValue("점심 식단");
			dataHeaderCell2.setCellStyle(dataHeaderStyle);
			
			// 점심식단 목록 윗부분
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyTopRow2 = sheet.createRow(rNum++);
			dataBodyTopCell2 = dataBodyTopRow2.createCell(cNum);
			dataBodyTopCell2.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("lun01").toString());
			dataBodyTopCell2.setCellStyle(dataBodyTopStyle);
			
			// 점심식단 목록 중간1
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyMiddleRow2_1 = sheet.createRow(rNum++);
			dataBodyMiddleCell2_1 = dataBodyMiddleRow2_1.createCell(cNum);
			dataBodyMiddleCell2_1.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("lun02").toString());
			dataBodyMiddleCell2_1.setCellStyle(dataBodyMiddleStyle);
			
			// 점심식단 목록 중간2
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyMiddleRow2_2 = sheet.createRow(rNum++);
			dataBodyMiddleCell2_2 = dataBodyMiddleRow2_2.createCell(cNum);
			dataBodyMiddleCell2_2.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("lun03").toString());
			dataBodyMiddleCell2_2.setCellStyle(dataBodyMiddleStyle);
			
			// 점심식단 목록 중간3
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyMiddleRow2_3 = sheet.createRow(rNum++);
			dataBodyMiddleCell2_3 = dataBodyMiddleRow2_3.createCell(cNum);
			dataBodyMiddleCell2_3.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("lun04").toString());
			dataBodyMiddleCell2_3.setCellStyle(dataBodyMiddleStyle);
			
			// 점심식단 목록 중간4
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyMiddleRow2_4 = sheet.createRow(rNum++);
			dataBodyMiddleCell2_4 = dataBodyMiddleRow2_4.createCell(cNum);
			dataBodyMiddleCell2_4.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("lun05").toString());
			dataBodyMiddleCell2_4.setCellStyle(dataBodyMiddleStyle);
			
			// 점심식단 목록 바닥
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyBottomRow2 = sheet.createRow(rNum++);
			dataBodyBottomCell2 = dataBodyBottomRow2.createCell(cNum);
			dataBodyBottomCell2.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("lun06").toString());
			dataBodyBottomCell2.setCellStyle(dataBodyBottomStyle);
			
			// 저녁 식단
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataHeaderRow3 = sheet.createRow(rNum++);
			dataHeaderCell3 = dataHeaderRow3.createCell(cNum);
			dataHeaderCell3.setCellValue("저녁 식단");
			dataHeaderCell3.setCellStyle(dataHeaderStyle);
			
			// 저녁식단 목록 윗부분
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyTopRow3 = sheet.createRow(rNum++);
			dataBodyTopCell3 = dataBodyTopRow3.createCell(cNum);
			dataBodyTopCell3.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("din01").toString());
			dataBodyTopCell3.setCellStyle(dataBodyTopStyle);
			
			// 저녁식단 목록 중간1
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyMiddleRow3_1 = sheet.createRow(rNum++);
			dataBodyMiddleCell3_1 = dataBodyMiddleRow3_1.createCell(cNum);
			dataBodyMiddleCell3_1.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("din02").toString());
			dataBodyMiddleCell3_1.setCellStyle(dataBodyMiddleStyle);
			
			// 저녁식단 목록 중간2
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyMiddleRow3_2 = sheet.createRow(rNum++);
			dataBodyMiddleCell3_2 = dataBodyMiddleRow3_2.createCell(cNum);
			dataBodyMiddleCell3_2.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("din03").toString());
			dataBodyMiddleCell3_2.setCellStyle(dataBodyMiddleStyle);
			
			// 저녁식단 목록 중간3
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyMiddleRow3_3 = sheet.createRow(rNum++);
			dataBodyMiddleCell3_3 = dataBodyMiddleRow3_3.createCell(cNum);
			dataBodyMiddleCell3_3.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("din04").toString());
			dataBodyMiddleCell3_3.setCellStyle(dataBodyMiddleStyle);
			
			// 저녁식단 목록 중간4
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyMiddleRow3_4 = sheet.createRow(rNum++);
			dataBodyMiddleCell3_4 = dataBodyMiddleRow3_4.createCell(cNum);
			dataBodyMiddleCell3_4.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("din05").toString());
			dataBodyMiddleCell3_4.setCellStyle(dataBodyMiddleStyle);
			
			// 저녁식단 목록 바닥
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyBottomRow3 = sheet.createRow(rNum++);
			dataBodyBottomCell3 = dataBodyBottomRow3.createCell(cNum);
			dataBodyBottomCell3.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("din06").toString());
			dataBodyBottomCell3.setCellStyle(dataBodyBottomStyle);
			
			// 간   식
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataHeaderRow4 = sheet.createRow(rNum++);
			dataHeaderCell4 = dataHeaderRow4.createCell(cNum);
			dataHeaderCell4.setCellValue("간   식");
			dataHeaderCell4.setCellStyle(dataHeaderStyle);
			
			// 간식 목록 윗부분 (오전간식)
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyTopRow4 = sheet.createRow(rNum++);
			dataBodyTopCell4 = dataBodyTopRow4.createCell(cNum);
			dataBodyTopCell4.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("sna01").toString());
			dataBodyTopCell4.setCellStyle(dataBodyTopStyle);
			
			// 간식 목록 중간1
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyMiddleRow4_1 = sheet.createRow(rNum++);
			dataBodyMiddleCell4_1 = dataBodyMiddleRow4_1.createCell(cNum);
			dataBodyMiddleCell4_1.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("sna02").toString());
			dataBodyMiddleCell4_1.setCellStyle(dataBodyMiddleStyle);
			
			// 간식 목록 중간2 (점선)
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyMiddleRow4_2 = sheet.createRow(rNum++);
			dataBodyMiddleCell4_2 = dataBodyMiddleRow4_2.createCell(cNum);
			dataBodyMiddleCell4_2.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("sna03").toString());
			dataBodyMiddleCell4_2.setCellStyle(dataBodyBottomDashStyle);
			
			// 간식 목록 중간3 (오후간식 시작)
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyMiddleRow4_3 = sheet.createRow(rNum++);
			dataBodyMiddleCell4_3 = dataBodyMiddleRow4_3.createCell(cNum);
			dataBodyMiddleCell4_3.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("sna04").toString());
			dataBodyMiddleCell4_3.setCellStyle(dataBodyMiddleStyle);
			
			// 간식 목록 중간4
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyMiddleRow4_4 = sheet.createRow(rNum++);
			dataBodyMiddleCell4_4 = dataBodyMiddleRow4_4.createCell(cNum);
			dataBodyMiddleCell4_4.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("sna05").toString());
			dataBodyMiddleCell4_4.setCellStyle(dataBodyMiddleStyle);
			
			// 간식 목록 바닥
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyBottomRow4 = sheet.createRow(rNum++);
			dataBodyBottomCell4 = dataBodyBottomRow4.createCell(cNum);
			dataBodyBottomCell4.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("sna06").toString());
			dataBodyBottomCell4.setCellStyle(dataBodyBottomStyle);
			
			// 기능별식이
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataHeaderRow5 = sheet.createRow(rNum++);
			dataHeaderCell5 = dataHeaderRow5.createCell(cNum);
			dataHeaderCell5.setCellValue("기능별식이");
			dataHeaderCell5.setCellStyle(dataHeaderStyle);
			
			// 기능별식이 목록 윗부분
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyTopRow5 = sheet.createRow(rNum++);
			dataBodyTopCell5 = dataBodyTopRow5.createCell(cNum);
			dataBodyTopCell5.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("f_name1").toString());
			dataBodyTopCell5.setCellStyle(dataBodyTopStyle);
			
			// 기능별식이 목록 중간
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyMiddleRow5 = sheet.createRow(rNum++);
			dataBodyMiddleCell5 = dataBodyMiddleRow5.createCell(cNum);
			dataBodyMiddleCell5.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("f_name2").toString());
			dataBodyMiddleCell5.setCellStyle(dataBodyMiddleStyle);
			
			// 기능별식이 목록 바닥
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyBottomRow5 = sheet.createRow(rNum++);
			dataBodyBottomCell5 = dataBodyBottomRow5.createCell(cNum);
			dataBodyBottomCell5.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("f_name3").toString());
			dataBodyBottomCell5.setCellStyle(dataBodyBottomStyle);
			
			// 당뇨·유동·저염
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataHeaderRow6 = sheet.createRow(rNum++);
			dataHeaderCell6 = dataHeaderRow6.createCell(cNum);
			dataHeaderCell6.setCellValue("당뇨·유동·저염");
			dataHeaderCell6.setCellStyle(dataHeaderStyle);
			
			// 당뇨·유동·저염 목록 윗부분
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyTopRow6 = sheet.createRow(rNum++);
			dataBodyTopCell6 = dataBodyTopRow6.createCell(cNum);
			dataBodyTopCell6.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("f_name4").toString());
			dataBodyTopCell6.setCellStyle(dataBodyTopStyle);
			
			// 당뇨·유동·저염 중간
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyMiddleRow6 = sheet.createRow(rNum++);
			dataBodyMiddleCell6 = dataBodyMiddleRow6.createCell(cNum);
			dataBodyMiddleCell6.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("f_name5").toString());
			dataBodyMiddleCell6.setCellStyle(dataBodyMiddleStyle);
			
			// 당뇨·유동·저염 바닥
			if (i == 0 || i == 7 || i == 14 || i == 21 || i == 28 || i == 35)
				dataBodyBottomRow6 = sheet.createRow(rNum++);
			dataBodyBottomCell6 = dataBodyBottomRow6.createCell(cNum);
			dataBodyBottomCell6.setCellValue(name.equals("월간") && (diff1 < 0 || diff2 > 0) ? "" : map2.get("f_name6").toString());
			dataBodyBottomCell6.setCellStyle(dataBodyBottomStyle);
			
			cNum++;	// 다음 열로 이동
		}
		
		// 서버에 엑셀파일 생성하기
		if (log.isInfoEnabled())
			log.info("엑셀 파일 생성");
		
		String randomStr = randomString();
		// local
		//String rootDir = "D:\\";
		//String fileDir = "excel\\" + randomStr;
		//String mkDir = rootDir + fileDir + "\\";
		//String fileName = fileNameStr + ".xlsx";
		//String fileRealName = fileDir + "\\" + fileName;
		
		// server
		String rootDir = CommonConstant.LINUX_FILE_DIR;
		String fileDir = "/excel/" + randomStr;
		String mkDir = rootDir + fileDir + "/";
		String fileName = fileNameStr + ".xlsx";
		String fileRealName = fileDir + "/" + fileName;
		
		FileOutputStream fos = null;
		try {
			File dir = new File(mkDir);
			if (!dir.exists()) {
				if (log.isDebugEnabled())
					log.debug("폴더 생성 시도");
				if (dir.mkdirs())
					if (log.isDebugEnabled())
						log.debug("폴더 생성 성공");
				else
					if (log.isDebugEnabled())
						log.debug("폴더 생성 실패");
			}
			File file = new File(rootDir + fileRealName);
			fos = new FileOutputStream(file, false);
			workbook.write(fos);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (fos != null)
				fos.close();
		}
		if (log.isInfoEnabled())
			log.info("엑셀 파일 생성 성공");
		
		// 서버에 파일 생성후 넥사에 파일생성한 경로 리턴하기
		DataSet outDs = new DataSet("output1");
		outDs.addColumn("FILE_REAL_NAME", DataTypes.STRING, 255);
		outDs.addColumn("FILE_NAME", DataTypes.STRING, 255);
		
		int nRow = outDs.newRow();
		outDs.set(nRow, "FILE_REAL_NAME", fileRealName);
		outDs.set(nRow, "FILE_NAME", fileName);
		result.addDataSet(outDs);
		
		result.setErrorCode(0);
		
		return result;
	}
	
	// random String 생성
	private String randomString() {
		
		int leftLimit = 48;	// numeral '0'
		int rightLimit = 122;	// letter 'z'
		int targetStringLength = 10;
		Random random = new Random();
		
		String generatedString = random.ints(leftLimit, rightLimit + 1)
				.filter(i -> (i <= 57 || i >= 65) && (i <=90 || i >= 97))
				.limit(targetStringLength)
				.collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
				.toString();
		
		if (log.isDebugEnabled())
			log.debug("랜덤 스트링 : {}", generatedString);
		
		return generatedString;
	}
}
