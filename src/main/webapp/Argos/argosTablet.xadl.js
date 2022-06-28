(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gds_gridMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"INT\" size=\"256\"/><Column id=\"DOMAINCD\" type=\"STRING\" size=\"256\"/><Column id=\"DOMAIN\" type=\"STRING\" size=\"256\"/><Column id=\"LANG\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"FUNCTION\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"REMARKS\" type=\"STRING\" size=\"256\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEQ\">1</Col><Col id=\"DOMAINCD\">TITLE</Col><Col id=\"DOMAIN\">타이틀</Col><Col id=\"LANG\">ko_KR</Col><Col id=\"TEXT\">우클릭 메뉴</Col><Col id=\"LEVEL\">0</Col><Col id=\"USEYN\">false</Col></Row><Row><Col id=\"SEQ\">2</Col><Col id=\"DOMAINCD\">EXPORTXLS</Col><Col id=\"DOMAIN\">엑셀 내보내기</Col><Col id=\"LANG\">ko_KR</Col><Col id=\"TEXT\">엑셀 내보내기</Col><Col id=\"LEVEL\">0</Col><Col id=\"USEYN\">1</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_calendar", this);
            obj._setContents("<ColumnInfo><Column id=\"DATECOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"TEXTCOLORCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"BACKGROUNDCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"BORDERCOLUMN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATECOLUMN\">20170501</Col><Col id=\"TEXTCOLORCOLUMN\">#f0770a</Col></Row><Row><Col id=\"DATECOLUMN\">20170503</Col><Col id=\"TEXTCOLORCOLUMN\">#f0770a</Col></Row><Row><Col id=\"DATECOLUMN\">20170505</Col><Col id=\"TEXTCOLORCOLUMN\">#f0770a</Col></Row><Row><Col id=\"DATECOLUMN\">20170509</Col><Col id=\"TEXTCOLORCOLUMN\">#f0770a</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_multiDic", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"string\" size=\"20\"/><Column id=\"PROPERTY_CD\" type=\"string\" size=\"20\"/><Column id=\"PROPERTY_NM\" type=\"string\" size=\"20\"/><Column id=\"LANG_FULL0\" type=\"string\" size=\"20\"/><Column id=\"LANG_SHORT0\" type=\"string\" size=\"20\"/><Column id=\"REMARK\" type=\"string\" size=\"60\"/><Column id=\"REG_PGM_ID\" type=\"string\" size=\"60\"/><Column id=\"REG_USER\" type=\"string\" size=\"60\"/><Column id=\"REG_DT\" type=\"string\" size=\"60\"/><Column id=\"REG_DT_CURR\" type=\"string\" size=\"60\"/><Column id=\"REG_DT_LOC\" type=\"string\" size=\"60\"/><Column id=\"REG_IP\" type=\"string\" size=\"200\"/><Column id=\"MOD_PGM_ID\" type=\"string\" size=\"32\"/><Column id=\"MOD_USER\" type=\"string\" size=\"20\"/><Column id=\"MOD_DT\" type=\"string\" size=\"32\"/><Column id=\"MOD_DT_CURR\" type=\"string\" size=\"20\"/><Column id=\"MOD_DT_LOC\" type=\"string\" size=\"20\"/><Column id=\"MOD_IP\" type=\"string\" size=\"20\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_message", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"INT\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SHOW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEAR_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"PRN_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"APPV_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"C_MENU_GRP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NM\">1. 요양급여기록</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">01</Col><Col id=\"MENU_CD\">01</Col></Row><Row><Col id=\"MENU_CD\">011</Col><Col id=\"MENU_NM\">1. 요양급여기록(매일)</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">01</Col><Col id=\"MENU_ID\">DAY00101</Col><Col id=\"PAGE_URL\">DAY::DAY00101.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00102</Col><Col id=\"MENU_NM\">2. 상태변화기록(매주)</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">01</Col><Col id=\"MENU_ID\">DAY00102</Col><Col id=\"PAGE_URL\">DAY::DAY00102.xfdl</Col></Row><Row><Col id=\"MENU_CD\">013</Col><Col id=\"MENU_NM\">3. 일별 요양급여 제공현황</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">01</Col><Col id=\"MENU_ID\">DAY00103</Col><Col id=\"PAGE_URL\">DAY::DAY00103.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00104</Col><Col id=\"MENU_NM\">4. 월간 요양급여 제공현황</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">01</Col><Col id=\"MENU_ID\">DAY00104</Col><Col id=\"PAGE_URL\">DAY::DAY00104.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00105</Col><Col id=\"MENU_NM\">5. 목욕제공 일정표</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">01</Col><Col id=\"MENU_ID\">DAY00105</Col><Col id=\"PAGE_URL\">DAY::DAY00105.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00106</Col><Col id=\"MENU_NM\">6. 월간 집중배설관찰기록</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">01</Col><Col id=\"MENU_ID\">DAY00106</Col><Col id=\"PAGE_URL\">DAY::DAY00106.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00107</Col><Col id=\"MENU_NM\">7. 요양보호사업무인수인계서</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">01</Col><Col id=\"MENU_ID\">DAY00107</Col><Col id=\"PAGE_URL\">DAY::DAY00107.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00108</Col><Col id=\"MENU_NM\">8. 월간 인지관리지원 기록</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">01</Col><Col id=\"MENU_ID\">DAY00108</Col><Col id=\"PAGE_URL\">DAY::DAY00108.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00109</Col><Col id=\"MENU_NM\">9. 월간 기능회복훈련 제공기록</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">01</Col><Col id=\"MENU_ID\">DAY00109</Col><Col id=\"PAGE_URL\">DAY::DAY00109.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00111</Col><Col id=\"MENU_NM\">10. 주야간 급여제공기록</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">01</Col><Col id=\"MENU_ID\">DAY00111</Col><Col id=\"PAGE_URL\">DAY::DAY00111.xfdl</Col></Row><Row><Col id=\"MENU_NM\">2. 간호급여기록</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">02</Col><Col id=\"MENU_CD\">02</Col></Row><Row><Col id=\"MENU_CD\">DAY00201</Col><Col id=\"MENU_NM\">1. 간호.투약기록입력(매일)</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">02</Col><Col id=\"MENU_ID\">DAY00201</Col><Col id=\"PAGE_URL\">DAY::DAY00201.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00202</Col><Col id=\"MENU_NM\">2. 일별 간호기록 조회.삭제</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">02</Col><Col id=\"MENU_ID\">DAY00202</Col><Col id=\"PAGE_URL\">DAY::DAY00202.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00203</Col><Col id=\"MENU_NM\">3. 간호기록소독일지</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">02</Col><Col id=\"MENU_ID\">DAY00203</Col><Col id=\"PAGE_URL\">DAY::DAY00203.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00204</Col><Col id=\"MENU_NM\">4. 상비약품점검</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">02</Col><Col id=\"MENU_ID\">DAY00204</Col><Col id=\"PAGE_URL\">DAY::DAY00204.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00205</Col><Col id=\"MENU_NM\">5. 의료기기점검</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">02</Col><Col id=\"MENU_ID\">DAY00205</Col><Col id=\"PAGE_URL\">DAY::DAY00205.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00206</Col><Col id=\"MENU_NM\">6. 의료폐기물대장</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">02</Col><Col id=\"MENU_ID\">DAY00206</Col><Col id=\"PAGE_URL\">DAY::DAY00206.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00207</Col><Col id=\"MENU_NM\">7. 병의원 진료기록</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">02</Col><Col id=\"MENU_ID\">DAY00207</Col><Col id=\"PAGE_URL\">DAY::DAY00207.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00208</Col><Col id=\"MENU_NM\">8. 외출기록</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">02</Col><Col id=\"MENU_ID\">DAY00208</Col><Col id=\"PAGE_URL\">DAY::DAY00208.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00209</Col><Col id=\"MENU_NM\">9. 수급자 병의원진료기록</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">02</Col><Col id=\"MENU_ID\">DAY00209</Col><Col id=\"PAGE_URL\">DAY::DAY00209.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00210</Col><Col id=\"MENU_NM\">10. 자세변경.욕창간호기록</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">02</Col><Col id=\"PAGE_URL\">DAY::DAY00210.xfdl</Col><Col id=\"MENU_ID\">DAY00210</Col></Row><Row><Col id=\"MENU_CD\">DAY00211</Col><Col id=\"MENU_NM\">11. 월간 간호제공기록</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">02</Col><Col id=\"MENU_ID\">DAY00211</Col><Col id=\"PAGE_URL\">DAY::DAY00211.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00212</Col><Col id=\"MENU_NM\">12. 간호사정.건강수준평가</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">02</Col><Col id=\"MENU_ID\">DAY00212</Col><Col id=\"PAGE_URL\">DAY::DAY00212.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00213</Col><Col id=\"MENU_NM\">13. 간호사정 평가현황</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">02</Col><Col id=\"MENU_ID\">DAY00213</Col><Col id=\"PAGE_URL\">DAY::DAY00213.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00214</Col><Col id=\"MENU_NM\">14. 감염예방일지</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">02</Col><Col id=\"MENU_ID\">DAY00214</Col><Col id=\"PAGE_URL\">DAY::DAY00214.xfdl</Col></Row><Row><Col id=\"MENU_NM\">3. 물리치료기록</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">03</Col><Col id=\"MENU_CD\">03</Col></Row><Row><Col id=\"MENU_CD\">DAY00301</Col><Col id=\"MENU_NM\">1. 물리(작업)치료 일지.제공기록 작성</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">03</Col><Col id=\"MENU_ID\">DAY00301</Col><Col id=\"PAGE_URL\">DAY::DAY00301.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00302</Col><Col id=\"MENU_NM\">2. 월간 물리(작업)치료 제공기록(삭제)</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">03</Col><Col id=\"MENU_ID\">DAY00302</Col><Col id=\"PAGE_URL\">DAY::DAY00302.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00303</Col><Col id=\"MENU_NM\">3. 물리치료.기능회복훈련 급여계획</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">03</Col><Col id=\"MENU_ID\">DAY00303</Col><Col id=\"PAGE_URL\">DAY::DAY00303.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00304</Col><Col id=\"MENU_NM\">4. 연간 물리치료.기능회복훈련 작성현황</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">03</Col><Col id=\"MENU_ID\">DAY00304</Col><Col id=\"PAGE_URL\">DAY::DAY00304.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00305</Col><Col id=\"MENU_NM\">5. 물리치료 운영일지 일괄출력</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">03</Col><Col id=\"MENU_ID\">DAY00305</Col><Col id=\"PAGE_URL\">DAY::DAY00305.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00306</Col><Col id=\"MENU_NM\">6. 연간 물리치료 제공기록.집계</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">03</Col><Col id=\"MENU_ID\">DAY00306</Col><Col id=\"PAGE_URL\">DAY::DAY00306.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00307</Col><Col id=\"MENU_NM\">7. 물리(작업)치료 제공기록 오류확인</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">03</Col><Col id=\"MENU_ID\">DAY00307</Col><Col id=\"PAGE_URL\">DAY::DAY00307.xfdl</Col></Row><Row><Col id=\"MENU_NM\">4. 이동서비스</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">04</Col><Col id=\"MENU_CD\">DAY004</Col></Row><Row><Col id=\"MENU_CD\">DAY00401</Col><Col id=\"MENU_NM\">1. 이동서비스 송영기록(매일)</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">04</Col><Col id=\"MENU_ID\">DAY00401</Col><Col id=\"PAGE_URL\">DAY::DAY00401.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00402</Col><Col id=\"MENU_NM\">2. 송영차량 운행일정.현황</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">04</Col><Col id=\"MENU_ID\">DAY00402</Col><Col id=\"PAGE_URL\">DAY::DAY00402.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00403</Col><Col id=\"MENU_NM\">3. 월간 송영·식사기록</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">04</Col><Col id=\"MENU_ID\">DAY00403</Col><Col id=\"PAGE_URL\">DAY::DAY00403.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00404</Col><Col id=\"MENU_NM\">4. 송영일정표.제공계획서</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">04</Col><Col id=\"MENU_ID\">DAY00404</Col><Col id=\"PAGE_URL\">DAY::DAY00404.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00405</Col><Col id=\"MENU_NM\">5. 월간 출석률.송영집계</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">04</Col><Col id=\"MENU_ID\">DAY00405</Col><Col id=\"PAGE_URL\">DAY::DAY00405.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00406</Col><Col id=\"MENU_NM\">6. 월간 송영일지.시간오류</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">04</Col><Col id=\"MENU_ID\">DAY00406</Col><Col id=\"PAGE_URL\">DAY::DAY00406.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00407</Col><Col id=\"MENU_NM\">7. 연간 운전자 송영집계표</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">04</Col><Col id=\"MENU_ID\">DAY00407</Col><Col id=\"PAGE_URL\">DAY::DAY00407.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00408</Col><Col id=\"MENU_NM\">8. 송영차량운행일지</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">04</Col><Col id=\"MENU_ID\">DAY00408</Col><Col id=\"PAGE_URL\">DAY::DAY00408.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00409</Col><Col id=\"MENU_NM\">9. 기간별차량일보집계</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">04</Col><Col id=\"MENU_ID\">DAY00409</Col><Col id=\"PAGE_URL\">DAY::DAY00409.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00410</Col><Col id=\"MENU_NM\">0. 월간 단기보호 이용현황</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">04</Col></Row><Row><Col id=\"MENU_NM\">5. 출퇴근기록</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">05</Col><Col id=\"MENU_CD\">05</Col></Row><Row><Col id=\"MENU_CD\">051</Col><Col id=\"MENU_NM\">1. 근무일정작성</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">05</Col></Row><Row><Col id=\"MENU_CD\">052</Col><Col id=\"MENU_NM\">2. 출퇴근기록 입력.수정</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">05</Col></Row><Row><Col id=\"MENU_CD\">053</Col><Col id=\"MENU_NM\">3. 월간 출퇴근기록부</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">05</Col></Row><Row><Col id=\"MENU_CD\">054</Col><Col id=\"MENU_NM\">4. 월간 출퇴근집계현황</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">05</Col></Row><Row><Col id=\"MENU_CD\">055</Col><Col id=\"MENU_NM\">5. 연간 출퇴근집계현황</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">05</Col></Row><Row><Col id=\"MENU_CD\">056</Col><Col id=\"MENU_NM\">6. 직원근무일지 작성.조회</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">05</Col></Row><Row><Col id=\"MENU_NM\">6. 건강개선프로그램</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">06</Col><Col id=\"MENU_CD\">06</Col></Row><Row><Col id=\"MENU_CD\">061</Col><Col id=\"MENU_NM\">1. 프로그램 의견수렴현황</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">06</Col><Col id=\"MENU_ID\">DAY00601</Col><Col id=\"PAGE_URL\">DAY::DAY00601.xfdl</Col></Row><Row><Col id=\"MENU_CD\">DAY00602</Col><Col id=\"MENU_NM\">2. 월간 프로그램 제공현황</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">06</Col><Col id=\"MENU_ID\">DAY00602</Col><Col id=\"PAGE_URL\">DAY::DAY00602.xfdl</Col></Row><Row><Col id=\"MENU_CD\">063</Col><Col id=\"MENU_NM\">3. 프로그램 등록.수정</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">06</Col></Row><Row><Col id=\"MENU_CD\">064</Col><Col id=\"MENU_NM\">4. 프로그램일지 작성(매일)</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">06</Col></Row><Row><Col id=\"MENU_CD\">065</Col><Col id=\"MENU_NM\">5. 월간 프로그램 참여기록(삭제)</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">06</Col></Row><Row><Col id=\"MENU_CD\">066</Col><Col id=\"MENU_NM\">6. 연간 프로그램일지 조회(삭제)</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">06</Col></Row><Row><Col id=\"MENU_CD\">067</Col><Col id=\"MENU_NM\">7. 월간 프로그램 일정표.소식지</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">06</Col></Row><Row><Col id=\"MENU_CD\">068</Col><Col id=\"MENU_NM\">8. 월간 프로그램 제공집계</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">06</Col></Row><Row><Col id=\"MENU_CD\">069</Col><Col id=\"MENU_NM\">9. 연간 프로그램 제공집계</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">06</Col></Row><Row><Col id=\"MENU_NM\">7. 수행,점검일지</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">07</Col><Col id=\"MENU_CD\">DAY007</Col></Row><Row><Col id=\"MENU_CD\">DAY00700</Col><Col id=\"MENU_NM\">7-0 수행,점검일지 현황</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">07</Col><Col id=\"MENU_ID\">DAY00700</Col><Col id=\"PAGE_URL\">DAY::DAY00700.xfdl</Col></Row><Row><Col id=\"MENU_NM\">8. 기록지출력</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">08</Col><Col id=\"MENU_CD\">08</Col></Row><Row><Col id=\"MENU_CD\">081</Col><Col id=\"MENU_NM\">1. 주야간 급여제공기록</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">08</Col></Row><Row><Col id=\"MENU_CD\">082</Col><Col id=\"MENU_NM\">2. 자세변경·욕창간호기록</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">08</Col></Row><Row><Col id=\"MENU_CD\">083</Col><Col id=\"MENU_NM\">3. 신체보호기록</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">08</Col></Row><Row><Col id=\"MENU_CD\">084</Col><Col id=\"MENU_NM\">4. 수급자 외출기록지</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">08</Col></Row><Row><Col id=\"MENU_CD\">085</Col><Col id=\"MENU_NM\">5. 상비약품 제공현황</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">08</Col></Row><Row><Col id=\"MENU_CD\">086</Col><Col id=\"MENU_NM\">0. 단기보호 제공기록</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">08</Col></Row><Row><Col id=\"MENU_NM\">9. 평가,사례관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">09</Col><Col id=\"MENU_CD\">09</Col></Row><Row><Col id=\"MENU_CD\">091</Col><Col id=\"MENU_NM\">1. 연간평가현황</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">09</Col></Row><Row><Col id=\"MENU_CD\">092</Col><Col id=\"MENU_NM\">2. 욕구사정.계획서작성</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">09</Col></Row><Row><Col id=\"MENU_CD\">093</Col><Col id=\"MENU_NM\">3. 연간 평가.일지 작성현황</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">09</Col></Row><Row><Col id=\"MENU_CD\">094</Col><Col id=\"MENU_NM\">4. 급여제공계획 변경사유서</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">09</Col></Row><Row><Col id=\"MENU_CD\">095</Col><Col id=\"MENU_NM\">5. 상담일지.응급상황기록</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">09</Col></Row><Row><Col id=\"MENU_CD\">096</Col><Col id=\"MENU_NM\">6. 월간 근무자기록 오류확인</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">09</Col></Row><Row><Col id=\"MENU_CD\">097</Col><Col id=\"MENU_NM\">7. 욕창.낙상.치매선별검사 현황</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">09</Col></Row><Row><Col id=\"MENU_CD\">098</Col><Col id=\"MENU_NM\">8. 월간 급여서비스 제공집계</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">09</Col></Row><Row><Col id=\"MENU_CD\">099</Col><Col id=\"MENU_NM\">9. 월간 급여제공기록 오류확인</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">09</Col></Row><Row><Col id=\"MENU_NM\">0. 운영관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">10</Col><Col id=\"MENU_CD\">10</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_openMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"INT\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"WIN_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_bookmark", this);
            obj.set_useclientlayout("true");
            obj._setContents("<Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DTM\" type=\"STRING\" size=\"256\"/><ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DTM\" type=\"STRING\" size=\"256\"/>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_userInfo_bak", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PASSWD\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SAL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_CHI\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INOUT_USER_TP\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"DEF_LANG\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH1\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH2\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH3\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH4\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH5\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HIRE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"RILE_REAL_NAME2\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_PERIOD_FR\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_PERIOD_TO\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_PASSWD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"QM_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"CAMERA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CAMERA_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CAMERA_PW\" type=\"STRING\" size=\"256\"/><Column id=\"CHATBOT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_company", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_SERVICE1\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_SERVICE2\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"PRESIDENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRESIDENT_NM_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_LAST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HOMEPAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"FISCAL_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PURCHASE_TAX_CALC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_TAX_CALC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_CALC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"PURCHASE_KEY_TP\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"E_MAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_OFFICE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TP\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_REPORT_TP\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_PAY_APPROVAL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CALENDAR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_TP\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_SRC\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_systemproperty", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MODULE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"DECIMAL_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ROUND_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SET_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_taCurRes", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_MACADD\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CON_PRE_MACADD\" type=\"STRING\" size=\"256\"/><Column id=\"CON_SUG_MACADD\" type=\"STRING\" size=\"256\"/><Column id=\"CON_TEM_MACADD\" type=\"STRING\" size=\"256\"/><Column id=\"CON_COM_MACADD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_mUserInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JU1\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_CON\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_TEL1\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_TEL2\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_userInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"b_offname\" type=\"STRING\" size=\"256\"/><Column id=\"b_offpost\" type=\"STRING\" size=\"256\"/><Column id=\"b_offjuso1\" type=\"STRING\" size=\"256\"/><Column id=\"b_offjuso2\" type=\"STRING\" size=\"256\"/><Column id=\"b_doctype\" type=\"STRING\" size=\"256\"/><Column id=\"b_manager\" type=\"STRING\" size=\"256\"/><Column id=\"b_person\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_b_beginday\" type=\"STRING\" size=\"256\"/><Column id=\"종별코드\" type=\"STRING\" size=\"256\"/><Column id=\"b_kod01\" type=\"STRING\" size=\"256\"/><Column id=\"b_kod02\" type=\"STRING\" size=\"256\"/><Column id=\"b_offtel\" type=\"STRING\" size=\"256\"/><Column id=\"b_offfax\" type=\"STRING\" size=\"256\"/><Column id=\"b_taxcode\" type=\"STRING\" size=\"256\"/><Column id=\"납부안내1\" type=\"STRING\" size=\"256\"/><Column id=\"납부안내2\" type=\"STRING\" size=\"256\"/><Column id=\"예금주명\" type=\"STRING\" size=\"256\"/><Column id=\"b_sajin01\" type=\"STRING\" size=\"256\"/><Column id=\"b_sajin02\" type=\"STRING\" size=\"256\"/><Column id=\"아침식사\" type=\"STRING\" size=\"256\"/><Column id=\"점심식사\" type=\"STRING\" size=\"256\"/><Column id=\"저녁식사\" type=\"STRING\" size=\"256\"/><Column id=\"오전간식\" type=\"STRING\" size=\"256\"/><Column id=\"오후간식\" type=\"STRING\" size=\"256\"/><Column id=\"소독온도조\" type=\"STRING\" size=\"256\"/><Column id=\"소독온도중\" type=\"STRING\" size=\"256\"/><Column id=\"소독온도석\" type=\"STRING\" size=\"256\"/><Column id=\"냉동온도\" type=\"STRING\" size=\"256\"/><Column id=\"냉장온도\" type=\"STRING\" size=\"256\"/><Column id=\"원산지안내\" type=\"STRING\" size=\"256\"/><Column id=\"월정산일\" type=\"STRING\" size=\"256\"/><Column id=\"월통보일\" type=\"STRING\" size=\"256\"/><Column id=\"월납부일\" type=\"STRING\" size=\"256\"/><Column id=\"제공시분\" type=\"STRING\" size=\"256\"/><Column id=\"식단제공\" type=\"STRING\" size=\"256\"/><Column id=\"c_autoid\" type=\"STRING\" size=\"256\"/><Column id=\"c_staffid\" type=\"STRING\" size=\"256\"/><Column id=\"c_group\" type=\"STRING\" size=\"256\"/><Column id=\"c_name\" type=\"STRING\" size=\"256\"/><Column id=\"c_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"c_jumin2\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"근무현황\" type=\"STRING\" size=\"256\"/><Column id=\"c_become\" type=\"STRING\" size=\"256\"/><Column id=\"c_retire\" type=\"STRING\" size=\"256\"/><Column id=\"c_dutyno\" type=\"STRING\" size=\"256\"/><Column id=\"c_dutyname\" type=\"STRING\" size=\"256\"/><Column id=\"p관리자\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_menu_bak", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"INT\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SHOW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEAR_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"PRN_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"APPV_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"C_MENU_GRP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gv_userId","");
            this._addVariable("gv_langType","ko_KR");
            this._addVariable("gv_nMaxOpenForm","10");
            this._addVariable("gv_nDataPerPage","20");
            this._addVariable("gv_curWinKey","");
            this._addVariable("gv_isBookmark","");
            this._addVariable("gv_cellMove","C");
            this._addVariable("gv_localMoney","9,999");
            this._addVariable("gv_locale","");
            this._addVariable("gv_userdept","");
            this._addVariable("gv_company","");
            this._addVariable("gv_plant","");
            this._addVariable("gv_biz","");
            this._addVariable("gv_usernm","");
            this._addVariable("gv_userauth","");
            this._addVariable("gv_curId","");
            this._addVariable("gv_serviceTp","");
            this._addVariable("gv_applicationTp","");
            this._addVariable("gv_measureFlag","-1");
            this._addVariable("gv_sdkVer","");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("argosTablet");
            this.set_screenid("Tablet");
            this.set_licenseurl("http://192.168.100.103:8080/Tablet/nexacro17_client_license.xml");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","800",null,null,this);
            mainframe.set_showtitlebar("false");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("Tablet");
            mainframe.set_showcascadetitletext("false");
            mainframe.set_showcascadestatustext("false");
            mainframe.set_showtitleicon("false");
            mainframe.set_layered("false");
            mainframe.set_openstatus("maximize");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,this);
            frame0.set_separatesize("100,*,0");
            frame0.set_showtitlebar("false");
            frame0.set_showtitleicon("false");
            frame0.set_showcascadetitletext("false");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("TopFrame",null,null,null,null,null,null,"",frame0);
            frame1.set_showtitlebar("false");
            frame1.set_showstatusbar("false");
            frame1.set_dragmovetype("none");
            frame1.set_showtitleicon("false");
            frame0.addChild(frame1.name, frame1);

            var frame2 = new HFrameSet("HFrameSet00",null,null,null,null,null,null,frame0);
            frame2.set_separatesize("100,*");
            frame2.set_showtitlebar("false");
            frame2.set_showtitleicon("false");
            frame2.set_showcascadetitletext("false");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"",frame2);
            frame3.set_showtitlebar("false");
            frame3.set_showstatusbar("false");
            frame3.set_dragmovetype("none");
            frame3.set_showtitleicon("false");
            frame3.set_showcascadetitletext("false");
            frame2.addChild(frame3.name, frame3);

            var frame4 = new FrameSet("WorkFrameSet",null,null,null,null,null,null,frame2);
            frame4.set_showtitleicon("false");
            frame4.set_showtitlebar("false");
            frame4.set_showcascadetitletext("false");
            frame2.addChild(frame4.name, frame4);

            var frame5 = new ChildFrame("LoginFrame",null,null,null,null,null,null,"TabletFrame::tFrameLogin.xfdl",frame0);
            frame5.set_showtitlebar("false");
            frame5.set_showstatusbar("false");
            frame5.set_dragmovetype("none");
            frame5.set_showcascadetitletext("false");
            frame5.set_showtitleicon("false");
            frame0.addChild(frame5.name, frame5);
            frame5.set_formurl("TabletFrame::tFrameLogin.xfdl");
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.application_onload,this);
        };
        
        // script Compiler
        this.registerScript("argosTablet.xadl", function() {
        // Frame 변수 정의
        // ==> Form을 Quick View로 볼 경우에는 아래 -시작- 부터 -끝- 까지 Comment 해야 함.
        // -시작-
        this.av_mainFrame = nexacro.getApplication().mainframe;
        this.av_vFrameSet00 = nexacro.getApplication().mainframe.VFrameSet00;
        this.av_hFrameSet00 = nexacro.getApplication().mainframe.VFrameSet00.HFrameSet00;
        this.av_workFrameSet = this.av_hFrameSet00.WorkFrameSet;

        this.av_mainMenu = this.av_hFrameSet00.LeftFrame;
        this.av_subMenu = this.av_vFrameSet00.TopFrame;


        this.av_login = this.av_vFrameSet00.LoginFrame;
        // -끝-

        // Frame Size Mode 정의
        this.av_loginModeSize = "0,0,*";
        this.av_mainModeSize = "100,*,0";

        // Size 정의
        // this.av_fullSize = {
        // 	h : 900,
        // 	w : 1366
        // };
        // this.av_ieFrameSize = { // 전체 프레임 사이즈에서 빼주는 값 (Web Browser가 차지하는 사이즈)
        // 	h : 150,
        // 	w : 4
        // };
        // this.av_fullFrameSize = { // 전체 프레임 영역 사이즈 (FullSize - IEFrameSize)
        // 	h : this.av_fullSize.h - this.av_ieFrameSize.h,
        // 	w : this.av_fullSize.w - this.av_ieFrameSize.w
        // };
        // this.av_mainFormSize = { // 업무(메뉴)화면 전체 영역 사이즈
        // 	h : 570,
        // 	w : 1112
        // };

        this.application_onload = function (obj, e)
        {
        	// 개발서버에서 svcurl 맵핑시키기
        	let objSrv = nexacro.getEnvironment().services["svcurl"];
        	trace(e.url);
        	const sIp = "http://14.42.209.174:2004";
        	const dIp = "http://192.168.100.80:8080";
        	const lIp = "http://192.168.100.103:8080";
        // 	if(e.url == sIp + "/Argos/argosTablet.xadl.js") {
        // 		objSrv.url = sIp;
        // 	}

        	if(system.navigatorname == "nexacro" && system.osversion.toUpperCase().indexOf("WINDOWS") == -1)
        	{
        		objSrv.url = lIp;
        	}

        	this.av_vFrameSet00.set_separatesize(this.av_loginModeSize);
        };
        });
        this.checkLicense("http://192.168.100.103:8080/Tablet/nexacro17_client_license.xml");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::Chart.xcss");
        this.loadIncludeScript("argosTablet.xadl");
    };
}
)();
