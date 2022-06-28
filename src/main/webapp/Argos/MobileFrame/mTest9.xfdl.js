(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("마이페이지");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_personal","0","0",null,"300","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("#172959");
            obj.set_border("1px solid #172959");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name","7%","40","20%","40",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("0");
            obj.set_text("홍길수");
            obj.set_textAlign("left");
            obj.set_color("#e8eaef");
            obj.set_font("bold 19pt/normal \"Noto Sans CJK KR Bold\"");
            this.div_personal.addChild(obj.name, obj);

            obj = new Static("Static01","27%","40","6%","40",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("1");
            obj.set_text("님");
            obj.set_color("#8b94ac");
            obj.set_font("bold 18pt/normal \"Noto Sans CJK KR Medium\"");
            obj.set_textAlign("left");
            this.div_personal.addChild(obj.name, obj);

            obj = new Static("sta_rName","7%","128","25%","33",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("2");
            obj.set_text("입소자 성함 : ");
            obj.set_font("bold 16pt/normal \"Noto Sans CJK KR Medium\"");
            obj.set_color("#8b94ac");
            obj.set_letterSpacing("-0.5px");
            this.div_personal.addChild(obj.name, obj);

            obj = new Static("sta_fName","7%","163","25%","33",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("3");
            obj.set_text("보호자 성함 : ");
            obj.set_font("bold 16pt/normal \"Noto Sans CJK KR Medium\"");
            obj.set_color("#8b94ac");
            obj.set_letterSpacing("-0.5px");
            this.div_personal.addChild(obj.name, obj);

            obj = new Static("sta_fCellphone","7%","198","29%","33",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("4");
            obj.set_text("보호자 연락처 : ");
            obj.set_font("bold 16pt/normal \"Noto Sans CJK KR Medium\"");
            obj.set_color("#8b94ac");
            obj.set_letterSpacing("-0.5px");
            this.div_personal.addChild(obj.name, obj);

            obj = new Static("sta_fCellPhoneDetail","7%","229","80%","30",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("5");
            obj.set_text("(※응급 상황 발생 시 연락받으실 전화번호)");
            obj.set_font("bold 14pt/normal \"Noto Sans CJK KR Regular\"");
            obj.set_color("#81a0da");
            obj.set_letterSpacing("-1px");
            this.div_personal.addChild(obj.name, obj);

            obj = new Static("sta_fCellPhoneValue","170","198","31%","33",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("6");
            obj.set_text("01012345678");
            obj.set_color("#e8eaef");
            obj.set_font("bold 16pt/normal \"Noto Sans CJK KR Medium\"");
            this.div_personal.addChild(obj.name, obj);

            obj = new Static("sta_fNameValue","150","163","17%","33",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("7");
            obj.set_text("홍길수");
            obj.set_color("#e8eaef");
            obj.set_font("bold 16pt/normal \"Noto Sans CJK KR Medium\"");
            this.div_personal.addChild(obj.name, obj);

            obj = new Static("sta_rNameValue","150","128","17%","33",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("8");
            obj.set_text("홍길동");
            obj.set_color("#e8eaef");
            obj.set_font("bold 16pt/normal \"Noto Sans CJK KR Medium\"");
            this.div_personal.addChild(obj.name, obj);

            obj = new ImageViewer("img_profile","339","25","80","80",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("9");
            obj.set_borderRadius("40px");
            obj.set_border("1px solid transparent");
            obj.set_background("url(\'theme://images/ico_mypage_profile1.png\') no-repeat center");
            this.div_personal.addChild(obj.name, obj);

            obj = new ImageViewer("img_setting","161","46","36","31",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("10");
            obj.set_background("url(\'theme://images/ico_mypage_setting1.png\') no-repeat center");
            this.div_personal.addChild(obj.name, obj);

            obj = new Div("div_line","7%","84","26%","2",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("11");
            obj.set_background("#c5c9d5");
            this.div_personal.addChild(obj.name, obj);

            obj = new Div("div_terms","0","300",null,"70","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_border("0px none,0px none,1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_terms","5%","15","35","35",null,null,null,null,null,null,this.div_terms.form);
            obj.set_taborder("0");
            obj.set_background("url(\'theme://images/ico_mypage1.png\') no-repeat center center");
            this.div_terms.addChild(obj.name, obj);

            obj = new Static("sta_terms","13%","15","73%","40",null,null,null,null,null,null,this.div_terms.form);
            obj.set_taborder("1");
            obj.set_text("서비스이용약관 및 개인정보 처리방침");
            obj.set_color("#555555");
            obj.set_font("bold 17pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_terms.addChild(obj.name, obj);

            obj = new Button("btn_terms",null,"15","40","40","5%",null,null,null,null,null,this.div_terms.form);
            obj.set_taborder("2");
            obj.set_icon("url(\'theme://images/ico_mypage_detail.png\')");
            this.div_terms.addChild(obj.name, obj);

            obj = new Div("div_version","0","370",null,"70","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_border("0px none,0px none,1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_version","5%","15","35","35",null,null,null,null,null,null,this.div_version.form);
            obj.set_taborder("0");
            obj.set_background("url(\'theme://images/ico_mypage2.png\') no-repeat center center");
            this.div_version.addChild(obj.name, obj);

            obj = new Static("sta_version","13%","15","73%","40",null,null,null,null,null,null,this.div_version.form);
            obj.set_taborder("1");
            obj.set_text("버전정보");
            obj.set_color("#555555");
            obj.set_font("bold 17pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_version.addChild(obj.name, obj);

            obj = new Button("btn_version",null,"15","40","40","5%",null,null,null,null,null,this.div_version.form);
            obj.set_taborder("2");
            obj.set_icon("url(\'theme://images/ico_mypage_detail.png\')");
            this.div_version.addChild(obj.name, obj);

            obj = new Div("div_logout","0","440",null,"70","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_border("0px none,0px none,1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_logout","5%","15","35","35",null,null,null,null,null,null,this.div_logout.form);
            obj.set_taborder("0");
            obj.set_background("url(\'theme://images/ico_mypage3.png\') no-repeat center center");
            this.div_logout.addChild(obj.name, obj);

            obj = new Static("sta_logout","13%","15","73%","40",null,null,null,null,null,null,this.div_logout.form);
            obj.set_taborder("1");
            obj.set_text("로그아웃");
            obj.set_color("#555555");
            obj.set_font("bold 17pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_logout.addChild(obj.name, obj);

            obj = new Button("btn_logout",null,"15","40","40","5%",null,null,null,null,null,this.div_logout.form);
            obj.set_taborder("2");
            obj.set_icon("url(\'theme://images/ico_mypage_detail.png\')");
            this.div_logout.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("mTest9.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("mTest9.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("mTest9.xfdl","lib::mpgm_com.xjs");
        this.registerScript("mTest9.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: mTest
         * 화면명   	:
         * 화면설명 	:
         * 작성일    	: 2021-07-06
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2020-07-08		배영걸		1차수정
         ***********************************************************************
         ***********************************************************************
         */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::mpgm_com.xjs"); /*include "lib::mpgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = "";
        this.fv_currentGrid = "";
        this.nMoveY;
        this.fv_flag;
        // 서비스 단에서 받는 variable, 초기화 필요함
        this.outvar = "";
        this.fileGroupId = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e);

        	const resName = nexacro.getApplication().gds_mUserInfo.getColumn(0, "RES_NAME");
        	const name = nexacro.getApplication().gds_mUserInfo.getColumn(0, "NAME");
        	const cellphone = nexacro.getApplication().gds_mUserInfo.getColumn(0, "CELLPHONE");

        	this.div_personal.form.sta_name.set_text(name);
        	this.div_personal.form.sta_fNameValue.set_text(name);
        	this.div_personal.form.sta_rNameValue.set_text(resName);
        	this.div_personal.form.sta_fCellPhoneValue.set_text(cellphone);

        	//조회조건
        	//this.ds_search.setColumn(0, "COMPANY_CD", nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD"));

        	//조회
        	//this.fn_search();

        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	return true;
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function ()
        {
        	//validation
        	if(!this.fn_search_pre()) return;

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		+ "sqlId=mTest7.mTest7_DS_LIST_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{

        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "NUC_LOGOUT_POP" :
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 개인정보 변경(톱니바퀴)
        this.movePersonalUpdate = function()
        {
        	const id = "test10";
        	const url = "MobileFrame::mTest10.xfdl";
        	const title = "마이페이지";

        	this.mMenuOpen(id, url, title);
        };

        // 서비스 이용약관 및 개인정보 처리방침
        this.movePersonalInfo = function()
        {
        	const id = "test11";
        	const url = "MobileFrame::mTest11.xfdl";
        	const title = "마이페이지";

        	this.mMenuOpen(id, url, title);
        };

        // 버전정보
        this.moveVersion = function()
        {
        	const id = "test12";
        	const url = "MobileFrame::mTest12.xfdl";
        	const title = "마이페이지";

        	this.mMenuOpen(id, url, title);
        };

        // 로그아웃
        this.logoutPop = function()
        {
        	const param = {};

        	Sct.tPopup(this, "NUC_LOGOUT_POP", 350, 300, param, "MobilePOP::NUC_LOGOUT_POP.xfdl", "fn_popCallback");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.div_personal.form.img_setting.addEventHandler("onclick",this.movePersonalUpdate,this);
            this.div_terms.addEventHandler("onclick",this.movePersonalInfo,this);
            this.div_terms.form.img_terms.addEventHandler("onclick",this.movePersonalInfo,this);
            this.div_terms.form.sta_terms.addEventHandler("onclick",this.movePersonalInfo,this);
            this.div_terms.form.btn_terms.addEventHandler("onclick",this.movePersonalInfo,this);
            this.div_version.addEventHandler("onclick",this.moveVersion,this);
            this.div_version.form.img_version.addEventHandler("onclick",this.moveVersion,this);
            this.div_version.form.sta_version.addEventHandler("onclick",this.moveVersion,this);
            this.div_version.form.btn_version.addEventHandler("onclick",this.moveVersion,this);
            this.div_logout.addEventHandler("onclick",this.logoutPop,this);
            this.div_logout.form.img_logout.addEventHandler("onclick",this.logoutPop,this);
            this.div_logout.form.sta_logout.addEventHandler("onclick",this.logoutPop,this);
            this.div_logout.form.btn_logout.addEventHandler("onclick",this.logoutPop,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
        };
        this.loadIncludeScript("mTest9.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
