package egovframework.com.common.batch;

import java.io.File;
import java.util.Calendar;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import egovframework.com.common.constant.CommonConstant;

@Component("excelFileDelete")
public class ExcelFileDelete {
	
	private static final Logger log = LoggerFactory.getLogger(ExcelFileDelete.class);
	
	// 엑셀다운로드후 2분이 지난 엑셀 파일 삭제
	public void quartzExcelDeleteFiles() {
		// local
		//String filePath = "D:\\excel";
		// server
		String filePath = CommonConstant.LINUX_FILE_DIR + "/excel";
		File rootDir = new File(filePath);
		if(rootDir.exists())
			deleteFilesRecursively(rootDir);
	}
	
	// 서버에 생성되고 2분이 지난 파일 삭제
	private static void deleteFilesRecursively(File rootFile) {
		// local
		//String filePath = "D:\\excel";
		// server
		String filePath = CommonConstant.LINUX_FILE_DIR + "/excel";
		
		// 파일경로의 하위 파일들을 리스트화
		File[] allFiles = rootFile.listFiles();
		
		// Calendar 객체 생성
		Calendar cal = Calendar.getInstance();
		long todayMil = cal.getTimeInMillis();
		long oneTimeMil = 60 * 1000;
		
		Calendar fileCal = Calendar.getInstance();
		Date fileDate = null;
		
		// 하위 폴더의 파일도 삭제하기 위해 재귀적으로 삭제함
		if (allFiles != null) {
			for (File file : allFiles) {
				deleteFilesRecursively(file);
			}
		}
		
		if (log.isDebugEnabled() &&
				!rootFile.getPath().equals(filePath)) {
			log.debug("Remove file : {}", rootFile.getPath());
		}
		
		// 파일의 마지막 수정시간 가져오기
		fileDate = new Date(rootFile.lastModified());
		
		if (log.isDebugEnabled() &&
				!rootFile.getPath().equals(filePath)) {
			log.debug("file Date : {}", fileDate);
		}
		
		// 현재시간과 파일 수정시간 시간차 계산(단위 : 밀리 세컨드)
		fileCal.setTime(fileDate);
		long diffMil = todayMil - fileCal.getTimeInMillis();
		
		if (log.isDebugEnabled() &&
				!rootFile.getPath().equals(filePath)) {
			log.debug("diffMil : {}", diffMil);
		}
		
		// 분으로 계산
		int diffTime = (int)(diffMil/oneTimeMil);
		
		if (log.isDebugEnabled() &&
				!rootFile.getPath().equals(filePath)) {
			log.debug("diffTime : {}", diffTime);
		}
		
		// 수정한지 2분이 지난 파일 or 폴더 삭제
		if (diffTime > 1 && rootFile.exists()) {
			if(rootFile.delete()) {
				if (log.isInfoEnabled()) {
					log.info("{} 파일(폴더)을 삭제했습니다.", rootFile.getName());
				}
			}
		}
	}

}
