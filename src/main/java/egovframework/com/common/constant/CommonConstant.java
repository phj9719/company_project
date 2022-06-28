package egovframework.com.common.constant;

/**
 * 프로젝트에서 사용되는 공통상수에 대한 정의 클래스
 * @author SCT-PC-4
 *
 */
public class CommonConstant {

	/* 결과코드 정상 */
	public final static int SUCCESS = 0;

	/* 결과코드 오류 */
	public final static int ERROR = -1;

	/* 결과코드 파라미터오류 */
	public final static int PARAM_ERROR = -2;

	/* 결과코드 데이터없음 */
	public final static int NODATA = -3;
	
	/* 업무 서비스를 찾지 못 함 */
	public final static int NOT_FIND_SERVICE = -4;

	/* 결과코드 FTP통신오류 */
	public final static int FTP_CONN_ERROR = -5;

	/* 결과코드 FTP전송오류 */
	public final static int FTP_TRANS_ERROR = -6;

	/* 결과코드 FTP전송오류 */
	public final static int FTP_NO_FILE = -7;
	
	/* ID 입력오류 */
	public final static int LOGIN_RESULT_ID_ERROR = 1;

	/* 비밀번호 입력오류 */
	public final static int LOGIN_RESULT_PASS_ERROR = 2;
	
	/* 회사 라이센스 만료오류 */
	public final static int LOGIN_RESULT_LICENSE_ERROR = 3;
	
	/* ID 사용유무 오류 */
	public final static int LOGIN_RESULT_USE_ERROR = 4;
	
	/* 로그인 유저 중복 오류 */
	public final static int LOGIN_RESULT_RECORDS_ERROR = 5;

	/* File Root Directory */
	public final static String FILE_ROOT_DIR = "/FILES";
	public final static String WIN_FILE_DIR = "D:\\FILES";
	public static final String LINUX_FILE_DIR = "/usr/local/tomcat/webapps/FILES";

	/* FTP Directory */
	public final static String FTP_DIR = "/FTP/";

	/* FTP In Directory */
	public final static String FTP_DIR_IN = "/FTP/in/";

	/* FTP Out Directory */
	public final static String FTP_DIR_OUT = "/FILES/FTP/out/";

	/* FTP 접속 ID */
	public final static String FTP_ID = "ftpuser";

	/* FTP 접속 Password */
	public final static String FTP_PASS = "sangji1!";

	/* IP 정보 */
	public final static String IP_CENTER = "192.168.100.109";		// 본사
	public final static String IP_VENUS = "192.168.100.145";		// VENUS

	/* 시스템(선박 및 본사) 명칭 정보 */
	public final static String CENTER = "CENTER";		// 본사
	public final static String VENUS = "VENUS";			// VENUS
	
}
