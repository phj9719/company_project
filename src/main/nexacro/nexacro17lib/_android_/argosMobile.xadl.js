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
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"INT\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SHOW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEAR_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"PRN_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"APPV_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"C_MENU_GRP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_openMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"INT\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"WIN_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_bookmark", this);
            obj.set_useclientlayout("true");
            obj._setContents("<Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DTM\" type=\"STRING\" size=\"256\"/><ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DTM\" type=\"STRING\" size=\"256\"/>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_userInfo", this);
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
            this.set_id("argosMobile");
            this.set_screenid("Mobile");
            this.set_licenseurl("http://14.42.209.174:2004/Mobile/nexacro17_client_license.xml");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","480","768",null,null,this);
            mainframe.set_showtitlebar("false");
            mainframe.set_showstatusbar("false");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("FrameSet",null,null,null,null,null,null,this);
            frame0.set_separatesize("60,*,100,0");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("TopFrame",null,null,null,null,null,null,"MobileFrame::mFrameTop.xfdl",frame0);
            frame1.getSetter("title").set("");
            frame1.set_showtitlebar("false");
            frame1.set_showstatusbar("false");
            frame1.set_showcascadetitletext("false");
            frame1.set_showtitleicon("false");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("MobileFrame::mFrameTop.xfdl");


            var frame2 = new FrameSet("WorkFrameSet",null,null,null,null,null,null,frame0);
            frame0.addChild(frame2.name, frame2);

            var frame3 = new ChildFrame("BottomFrame",null,null,null,null,null,null,"",frame0);
            frame3.getSetter("title").set("");
            frame3.set_showtitlebar("false");
            frame3.set_showstatusbar("false");
            frame3.set_showcascadetitletext("false");
            frame3.set_showtitleicon("false");
            frame0.addChild(frame3.name, frame3);

            var frame4 = new ChildFrame("LoginFrame",null,null,null,null,null,null,"MobileFrame::mFrameLogin.xfdl",frame0);
            frame4.set_showcascadetitletext("false");
            frame4.set_showtitlebar("false");
            frame4.set_showtitleicon("false");
            frame0.addChild(frame4.name, frame4);
            frame4.set_formurl("MobileFrame::mFrameLogin.xfdl");
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
        };
        
        // script Compiler
        this.registerScript("argosMobile.xadl", function() {
        // Frame 변수 정의
        // ==> Form을 Quick View로 볼 경우에는 아래 -시작- 부터 -끝- 까지 Comment 해야 함.
        // -시작-
        this.av_mainFrame = nexacro.getApplication().mainframe;

        this.av_frameSet = nexacro.getApplication().mainframe.FrameSet;
        this.av_workFrameSet = this.av_frameSet.WorkFrameSet;

        this.av_topFrame = this.av_frameSet.TopFrame;
        this.av_bottomFrame = this.av_frameSet.BottomFrame;
        this.av_loginFrame = this.av_frameSet.LoginFrame;
        // -끝-

        // Frame Size Mode 정의
        this.av_loginModeSize = "60,0,0,*";
        this.av_mainModeSize = "60,*,100,0";

        this.Application_onload = function(obj,e)
        {
        	// 개발서버에서 svcurl 맵핑 시키기
        	trace("클라이언트 url : " + e.url);
        	const objSrv = nexacro.getEnvironment().services["svcurl"];
        	const sIp = "http://14.42.209.174:2004";
        	const lIp = "http://192.168.100.21:8080";
        	if(e.url == sIp + "/Argos/argosMobile.xadl.js")
        	{
        		objSrv.url = sIp;
        	}

        	if(system.navigatorname == "nexacro" && system.osversion.toUpperCase().indexOf("WINDOWS") == -1)
        	{
        		objSrv.url = sIp;
        	}

        	this.av_frameSet.set_separatesize(this.av_loginModeSize);

        };
        });
        this.checkLicense("http://14.42.209.174:2004/Mobile/nexacro17_client_license.xml");
        
        this.loadPreloadList();

        this.loadIncludeScript("argosMobile.xadl");
    };
}
)();
