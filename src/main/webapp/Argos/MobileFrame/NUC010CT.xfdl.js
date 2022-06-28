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
                this._setFormPosition(480,606);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_personal","0","0",null,"280","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("#172959");
            obj.set_border("1px solid #172959");
            this.addChild(obj.name, obj);

            obj = new Static("sta_rName","6.49%","48","26.99%","33",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("0");
            obj.set_text("입소자 성함 : ");
            obj.set_color("#8b94ac");
            obj.set_letterSpacing("-0.5px");
            obj.set_font("normal 500 16pt/normal \"Noto Sans KR\"");
            this.div_personal.addChild(obj.name, obj);

            obj = new Static("sta_fName","6.49%","83","26.99%","33",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("1");
            obj.set_text("보호자 성함 : ");
            obj.set_font("normal 500 16pt/normal \"Noto Sans KR\"");
            obj.set_color("#8b94ac");
            obj.set_letterSpacing("-0.5px");
            this.div_personal.addChild(obj.name, obj);

            obj = new Static("sta_fCellphone","6.49%","118","30.13%","33",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("2");
            obj.set_text("보호자 연락처 : ");
            obj.set_font("normal 500 16pt/normal \"Noto Sans KR\"");
            obj.set_color("#8b94ac");
            obj.set_letterSpacing("-0.5px");
            this.div_personal.addChild(obj.name, obj);

            obj = new Static("sta_fCellPhoneDetail","6.49%","149","79.92%","30",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("3");
            obj.set_text("(※응급 상황 발생 시 연락받으실 전화번호)");
            obj.set_font("normal 500 14pt/normal \"Noto Sans KR\"");
            obj.set_color("#81a0da");
            obj.set_letterSpacing("-1px");
            this.div_personal.addChild(obj.name, obj);

            obj = new Static("sta_fCellPhoneValue","sta_fCellphone:10","118","162","33",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("4");
            obj.set_text("-");
            obj.set_color("#e8eaef");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            this.div_personal.addChild(obj.name, obj);

            obj = new Static("sta_fNameValue","sta_fName:10","83","110","33",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("5");
            obj.set_text("-");
            obj.set_color("#e8eaef");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            this.div_personal.addChild(obj.name, obj);

            obj = new Static("sta_rNameValue","sta_rName:10","48","110","33",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("6");
            obj.set_text("-");
            obj.set_color("#e8eaef");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            this.div_personal.addChild(obj.name, obj);

            obj = new ImageViewer("imv_profile","77.2%","16.19%","80","80",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("7");
            obj.set_borderRadius("40px");
            obj.set_border("1px solid transparent");
            obj.set_stretch("fit");
            obj.set_image("url(\'theme://images/imv_profile_e.png\')");
            this.div_personal.addChild(obj.name, obj);

            obj = new Button("btn_passChg","6.49%","194","160","40",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("8");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("btn_agree");
            this.div_personal.addChild(obj.name, obj);

            obj = new Button("btn_passClear","42.47%","194","180","40",null,null,null,null,null,null,this.div_personal.form);
            obj.set_taborder("9");
            obj.set_text("비밀번호 초기화");
            obj.set_cssclass("btn_agree");
            this.div_personal.addChild(obj.name, obj);

            obj = new Div("div_terms","0","div_personal:0",null,"70","0",null,null,null,null,null,this);
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
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            this.div_terms.addChild(obj.name, obj);

            obj = new Button("btn_terms",null,"15","40","40","5%",null,null,null,null,null,this.div_terms.form);
            obj.set_taborder("2");
            obj.set_icon("url(\'theme://images/ico_mypage_detail.png\')");
            this.div_terms.addChild(obj.name, obj);

            obj = new Div("div_version","0","div_terms:0",null,"70","0",null,null,null,null,null,this);
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
            obj.set_font("normal 700 16pt \"Noto Sans KR\"");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_version.addChild(obj.name, obj);

            obj = new Button("btn_version",null,"15","40","40","5%",null,null,null,null,null,this.div_version.form);
            obj.set_taborder("2");
            obj.set_icon("url(\'theme://images/ico_mypage_detail.png\')");
            this.div_version.addChild(obj.name, obj);

            obj = new Div("div_logout","0","div_version:0",null,"70","0",null,null,null,null,null,this);
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
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_logout.addChild(obj.name, obj);

            obj = new Button("btn_logout",null,"15","40","40","5%",null,null,null,null,null,this.div_logout.form);
            obj.set_taborder("2");
            obj.set_icon("url(\'theme://images/ico_mypage_detail.png\')");
            this.div_logout.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,606,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUC010CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUC010CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUC010CT.xfdl","lib::mpgm_com.xjs");
        this.registerScript("NUC010CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUC010CT
         * 화면명   	: 마이페이지
         * 화면설명 	: 모바일의 보호자 정보와 약관, 업데이트 확인 및 로그아웃
         * 작성일    	: 2021-09-06
         * 작성자   	: 조기종
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *
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
        	const name = nexacro.getApplication().gds_mUserInfo.getColumn(0, "FAM_NM");
        	const cellphone = nexacro.getApplication().gds_mUserInfo.getColumn(0, "FAM_TEL1");

        	let cellphoneStr;
        	if (cellphone != null && cellphone != "")
        	{
        		trace("phone length : " + cellphone.length);
        		if (cellphone.substr(0, 1) == 0 && cellphone.length == 11)
        		{
        			cellphoneStr = cellphone.substr(0, 3) + "-" + cellphone.substr(3, 4) + "-" + cellphone.substr(7, 4);
        		}
        		else if (cellphone.substr(0, 1) == 0 && cellphone.length == 10)
        		{
        			cellphoneStr = cellphone.substr(0, 3) + "-" + cellphone.substr(3, 3) + "-" + cellphone.substr(6, 4);
        		}
        		else
        		{
        			cellphoneStr = cellphone;
        		}
        	}

        	//const nameSize = nexacro.getTextSize(name, "normal 700 19pt/normal 'Noto Sans KR'");

        	this.div_personal.form.sta_fNameValue.set_text(name);
        	this.div_personal.form.sta_rNameValue.set_text(resName);
        	this.div_personal.form.sta_fCellPhoneValue.set_text(cellphoneStr);

        	//this.fn_getSignImage();
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{

        		}
        		else if(strSvcID == "passClear")
        		{
        			Sct.alert(this, "000579");	// 비밀번호 초기화가 완료되었습니다.
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
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "NUC_PASSWORD_POP":
        			break;
        		case "NUC_LOGOUT_POP" :
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 비밀번호 변경 (팝업)
        this.passChg = function()
        {
        	const param = {};

        	Sct.tPopup(this, "NUC_PASSWORD_POP", 350, 300, param, "MobilePOP::NUC_PASSWORD_POP.xfdl", "fn_popCallback");
        };

        this.passClear = function()
        {
        	if(!Sct.confirm(this, "000083", " 초기화")) return
        };

        // 서비스 이용약관 및 개인정보 처리방침
        this.movePersonalInfo = function()
        {
        	const id = "NUC011QR";
        	const url = "MobileFrame::NUC011QR.xfdl";
        	const title = "마이페이지";

        	this.mMenuOpen(id, url, title);
        };

        // 버전정보
        this.moveVersion = function()
        {
        	const id = "NUC012CT";
        	const url = "MobileFrame::NUC012CT.xfdl";
        	const title = "마이페이지";

        	this.mMenuOpen(id, url, title);
        };

        // 로그아웃
        this.logoutPop = function()
        {
        	const param = {};

        	Sct.tPopup(this, "NUC_LOGOUT_POP", 350, 300, param, "MobilePOP::NUC_LOGOUT_POP.xfdl", "fn_popCallback");
        };

        /***********************************************************************
         * FILE
         ***********************************************************************/
        //이미지 조회
        this.fn_getSignImage = function ()
        {
        	let imgUrl = "";
        	const fileGrp = nexacro.getApplication().gds_mUserInfo.getColumn(0, "FILE_REAL_NAME");
        	if(!Sct.Util.isEmpty(fileGrp))
        	{
        		const webHost = nexacro.getEnvironment().services["svcurl"].url;
        		const path = "/Argos/FILES";
        		imgUrl = webHost + path + fileGrp;
        		const chk = this.fileCheck(imgUrl);
        		if(chk == "404")
        		{
        			this.div_personal.form.imv_profile.set_image("theme://images/imv_profile_e.png");
        			this.div_personal.form.imv_profile.set_stretch("fit");
        		}
        		else
        		{
        			this.div_personal.form.imv_profile.set_image("URL('" + imgUrl + "')");
        			this.div_personal.form.imv_profile.set_stretch("fit");
        		}
        	}
        	else
        	{
        		this.div_personal.form.imv_profile.set_image("theme://images/imv_profile_e.png");
        		this.div_personal.form.imv_profile.set_stretch("fit");
        	}
        };

        // 파일 존재 유무 체크
        // 파일이 존재하지 않으면 404를 리턴함
        this.fileCheck = function(val)
        {
        	let req = new XMLHttpRequest();
        	req.open('GET', val, false);
        	req.send(null);
        	let headers = req.status;
        	return headers;
        };

        // 비밀번호 초기화
        this.div_personal_btn_passClear_onclick = function(obj,e)
        {
        	if(!Sct.confirm(this, "000083", "비밀번호를 초기화")) return;

        	const resId = nexacro.getApplication().gds_mUserInfo.getColumn(0, "RES_ID");
        	const defaultPass = nexacro.getApplication().gds_mUserInfo.getColumn(0, "JU1");
        	const companyCd = nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD");

        	const svcId = "passClear";
        	const params = "/NUC010CTController.do";
        	const inDatasets = "";
        	const outDatasets = "";
        	let argument = "method=passClear ";
        		argument += "COMPANY_CD=" + companyCd + " ";
        		argument += "RES_ID=" + resId + " ";
        		argument += "DEFAULT_PASS=" + sha256_digest(defaultPass) + " ";

        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.div_personal.form.btn_passChg.addEventHandler("onclick",this.passChg,this);
            this.div_personal.form.btn_passClear.addEventHandler("onclick",this.div_personal_btn_passClear_onclick,this);
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
        };
        this.loadIncludeScript("NUC010CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
