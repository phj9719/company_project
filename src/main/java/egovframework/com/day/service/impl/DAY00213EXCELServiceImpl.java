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
import egovframework.com.day.service.DAY00213EXCELService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("DAY00213EXCELService")
public class DAY00213EXCELServiceImpl extends EgovAbstractServiceImpl implements DAY00213EXCELService {
	
	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	@Override
	public NexacroResult excelDown(VariableList inVar, DataSetList inDataset) throws Exception {
		// TODO Auto-generated method stub
	NexacroResult result = new NexacroResult();
		
		DataSet ds1 = inDataset.get("input1");	// ds_excel_head
		DataSet ds2 = inDataset.get("input2");	// ds_excel_data
		
		// 시트 이름, 파일이름, 제목 세팅
		String name = inVar.getString("SHEET_NAME");
		if (log.isDebugEnabled())
			log.debug(name);
		String year = inVar.getString("YEAR");
		if (log.isDebugEnabled())
			log.debug(name);
		
		String titleName = "";
		String fileNameStr = "";
		
		titleName = name + year + "년";
		fileNameStr = name + year + "년";
		
		
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
		sheet.setColumnWidth(0, 2000);
		sheet.setColumnWidth(1, 1000);
		sheet.setColumnWidth(2, 2500);
		sheet.setColumnWidth(3, 2500);
		sheet.setColumnWidth(4, 1000);
		sheet.setColumnWidth(5, 3000);
		sheet.setColumnWidth(6, 3000);
		sheet.setColumnWidth(7, 3000);
		sheet.setColumnWidth(8, 6000);
		sheet.setColumnWidth(9, 1500);
		sheet.setColumnWidth(10, 2000);
		sheet.setColumnWidth(11, 2500);
		sheet.setColumnWidth(12, 3000);
		sheet.setColumnWidth(13, 6000);
		sheet.setColumnWidth(14, 1500);
		sheet.setColumnWidth(15, 2000);
		sheet.setColumnWidth(16, 2500);
		
		//글씨체
		Font gothicFont = workbook.createFont();
		gothicFont.setFontName("맑은 고딕");
		
		String[] head = {"거주현황","그룹","수급자코드","대상자명","성별","입소일","퇴소일","작성일①","사정기간①","총점①","기록①","작성자①","작성일②","사정기간②","총점②","기록②","작성자②"};
		String[] body = {"s_nm","m_group","m_code","m_name","sex_nm","m_enday","m_reday","사정일1","적용기간1","tot_point1","n_number1","작성자1","사정일2","적용기간2","tot_point2","n_number2","작성자2"};
		
		// 제일 상단 row
		Row headRow = sheet.createRow(0);			
		for(int i = 0; i<head.length; i++) {
			Cell headCell = headRow.createCell(i);
			headCell.setCellValue(head[i]);
		}
		
		List<Map<String, Object>> list2 = dataSetUtil.dataSetToList(ds2);
		for(int i = 0; i<list2.size(); i++) {
			Row bodyRow = sheet.createRow(i+1);
			Map<String, Object> list2Map = list2.get(i);
			list2Map.remove("ROW_TYPE");
			for(int j = 0; j<list2Map.size(); j++) {
				Cell bodyCell = bodyRow.createCell(j);
				if(list2Map.get(body[j]) != null) {
					bodyCell.setCellValue(list2Map.get(body[j]).toString());
				}else {
					bodyCell.setCellValue("");
				}
			}
			
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
