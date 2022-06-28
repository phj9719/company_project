(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameLogin");
            this.set_titletext("Login Frame");
            this.set_background("url(\'imagerc::login_bg2.png\') no-repeat center center");
            if (Form == this.constructor)
            {
                this._setFormPosition(1916,930);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_NM_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("test_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ms_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"MAINCD\" type=\"STRING\" size=\"256\"/><Column id=\"MAINM\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_login","0.05%","0.00%",null,null,"-0.05%","0.00%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Login Division");
            obj.set_background("transparent");
            obj.set_border("0px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","670","145","574","100",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_stretch("none");
            obj.set_background("transparent");
            obj.set_border("0px solid rgba(170,170,170,1)");
            obj.set_image("");
            obj.set_text("");
            this.div_login.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","40.81%","17.10%","342","39",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("7");
            obj.set_image("url(\'imagerc::login_logo_sangji.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_background("transparent");
            obj.set_border("0px solid rgba(170,170,170,1)");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("Static00","38.76%","93.66%","442","32",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("9");
            obj.set_text("Copyright(c) SCT CO., Ltd. All Rights Reserved.");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_color("#b0b0b0");
            obj.set_font("normal 400 10pt/normal \"Noto Sans KR\"");
            this.div_login.addChild(obj.name, obj);

            obj = new Div("div_log","38%","30%","450","450",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("10");
            obj.set_background("#ffffff");
            obj.set_borderRadius("3px");
            obj.set_boxShadow("3px 3px 3px #c9c9c9");
            obj.set_text("");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_loginId","74","184","300","40",null,null,null,null,null,null,this.div_login.form.div_log.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#fbfbfb");
            obj.set_borderRadius("3px");
            obj.set_displaynulltext("아이디");
            obj.set_font("11pt/normal \"Noto Sans KR Regular\"");
            obj.set_color("#999999");
            obj.set_padding("0px 0px 0px 40px");
            obj.set_textAlign("left");
            this.div_login.form.div_log.addChild(obj.name, obj);

            obj = new Edit("edt_pwd","74","234","300","40",null,null,null,null,null,null,this.div_login.form.div_log.form);
            obj.set_taborder("2");
            obj.set_password("true");
            obj.set_autoselect("true");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#fbfbfb");
            obj.set_borderRadius("3px");
            obj.set_displaynulltext("패스워드");
            obj.set_font("11pt/normal \"Noto Sans KR Regular\"");
            obj.set_color("#999999");
            obj.set_padding("0px 0px 0px 40px");
            this.div_login.form.div_log.addChild(obj.name, obj);

            obj = new Button("btn_login","70","314","300","40",null,null,null,null,null,null,this.div_login.form.div_log.form);
            obj.set_taborder("3");
            obj.set_text("로그인");
            obj.set_cssclass("btn_login");
            obj.set_borderRadius("3px");
            obj.set_cursor("pointer");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 700 12pt/normal \"Noto Sans KR\"");
            obj.set_background("#2d5dbb");
            this.div_login.form.div_log.addChild(obj.name, obj);

            obj = new CheckBox("rememId","77","283","238","20",null,null,null,null,null,null,this.div_login.form.div_log.form);
            obj.set_taborder("4");
            obj.set_text("Remember ID");
            obj.set_color("black");
            obj.set_font("9pt/normal \"Noto Sans KR Regular\"");
            this.div_login.form.div_log.addChild(obj.name, obj);

            obj = new Button("Button00","269","282","99","22",null,null,null,null,null,null,this.div_login.form.div_log.form);
            obj.set_taborder("5");
            obj.set_text("사용자 계정신청");
            obj.set_background("url(\'imagerc::login_icon.png\') no-repeat left center transparent");
            obj.set_color("rgba(36,78,231,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt/normal \"Noto Sans KR Regular\"");
            obj.set_border("0px solid rgba(170,170,170,1)");
            obj.set_padding("0px 0px 0px 12px");
            obj.set_cursor("pointer");
            obj.set_visible("false");
            this.div_login.form.div_log.addChild(obj.name, obj);

            obj = new Static("Static01","174","52","100","30",null,null,null,null,null,null,this.div_login.form.div_log.form);
            obj.set_taborder("6");
            obj.set_text("로그인");
            obj.set_color("#2d5dbb");
            obj.set_font("17pt/normal \"NanumSquare ExtraBold\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_login.form.div_log.addChild(obj.name, obj);

            obj = new Div("Div00","83","195","18","18",null,null,null,null,null,null,this.div_login.form.div_log.form);
            obj.set_taborder("7");
            obj.set_background("url(\'imagerc::login_ico2.png\') no-repeat");
            this.div_login.form.div_log.addChild(obj.name, obj);

            obj = new Div("Div01","83","247","18","18",null,null,null,null,null,null,this.div_login.form.div_log.form);
            obj.set_taborder("8");
            obj.set_background("url(\'imagerc::login_ico3.png\') no-repeat");
            this.div_login.form.div_log.addChild(obj.name, obj);

            obj = new Edit("edt_companyCd","74","134","300","40",null,null,null,null,null,null,this.div_login.form.div_log.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#fbfbfb");
            obj.set_borderRadius("3px");
            obj.set_displaynulltext("시설코드");
            obj.set_font("11pt/normal \"Noto Sans KR Regular\"");
            obj.set_color("#999999");
            obj.set_padding("0px 0px 0px 40px");
            obj.set_textAlign("left");
            this.div_login.form.div_log.addChild(obj.name, obj);

            obj = new Div("Div00_00","83","145","18","18",null,null,null,null,null,null,this.div_login.form.div_log.form);
            obj.set_taborder("9");
            obj.set_background("url(\'imagerc::login_ico1.png\') no-repeat");
            this.div_login.form.div_log.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1916,930,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("frameLogin.xfdl","lib::lib_SHA256.xjs");
        this.addIncludeScript("frameLogin.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("frameLogin.xfdl","lib::pgm_com.xjs");
        this.registerScript("frameLogin.xfdl", function() {
        this.executeIncludeScript("lib::lib_SHA256.xjs"); /*include "lib::lib_SHA256.xjs"*/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/

        this.frameLogin_onload = function (obj, e) {

        	this.form_onload_com(obj, e,false);

        	nexacro.getApplication().gds_menu.clearData();
        	var cookieId = nexacro.getPrivateProfile("PRO_ID");
        	let cookieCd = nexacro.getPrivateProfile("PRO_CD");	//	2021-05-18 추가
        	if (cookieId != null && cookieId != "") {
        		trace("쿠키정보 존재 : " + cookieId);
        		this.div_login.form.div_log.form.rememId.set_value(1);
        		this.div_login.form.div_log.form.edt_loginId.set_value(cookieId);
        		// 2021-05-18 아이디 쿠키가 존재하면 시설코드도 세팅 추가
        		this.div_login.form.div_log.form.edt_companyCd.set_value(cookieCd);
        	}
        	this.div_login.form.div_log.form.btn_login.set_opacity(1); //this.div_login.form.div_log.form.btn_login.set_opacity(0.5);


        };

        this.div_login_btn_login_onclick = function (obj, e) {
        	var strLoginId = this.div_login.form.div_log.form.edt_loginId.value;
        	let pwd = this.div_login.form.div_log.form.edt_pwd.value;
        	let strLoginPwd;
        	if(pwd != "" && pwd != null) {
        		strLoginPwd = sha256_digest(pwd);
        	}
        	let strCompanyCd = this.div_login.form.div_log.form.edt_companyCd.value;

        	if (strCompanyCd == "" || strCompanyCd == null) {
        		this.alert("시설코드를 입력해주세요");
        		return;
        	}
        	if (strLoginId == "" || strLoginId == null) {
        		this.alert("ID를 입력해주세요.");
        		return;
        	} else if (strLoginPwd == "" || strLoginPwd == null) {
        		this.alert("비밀번호를 입력해주세요.");
        		return;
        	} else {
        		// gv_langType, gv_locale 하나로 통일.
        // 		if (this.div_login.form.div_log.form.Button01.opacity != 1) {
        // 			nexacro.getApplication().gv_locale = "ko_KR";
        // 			nexacro.getApplication().gv_langType = "ko_KR";
        // 		} else if (this.div_login.form.div_log.form.Button02.opacity != 1) {
        // 			nexacro.getApplication().gv_locale = "en_US";
        // 			nexacro.getApplication().gv_langType = "en_US";
        // 		} else if (this.div_login.form.div_log.form.Button03.opacity != 1) {
        // 			nexacro.getApplication().gv_locale = "zh_CN";
        // 			nexacro.getApplication().gv_langType = "zh_CN";
        // 		} else {
        // 			nexacro.getApplication().gv_locale = nexacro.getApplication().gds_userInfo.getColumn(0, "DEF_LANG");
        // 		}

        		// gv_langType, gv_locale ko_KR로 세팅
        		nexacro.getApplication().gv_locale = "ko_KR";
        		nexacro.getApplication().gv_langType = "ko_KR";
        		//nexacro.getApplication().gv_locale = nexacro.getApplication().gds_userInfo.getColumn(0, "DEF_LANG");

        		nexacro.getApplication().gv_serviceTp = "100";
        		nexacro.getApplication().gv_applicationTp = "100";
        		nexacro.getApplication().gv_company = strCompanyCd;

        		var svcId = "login";
        		var params = "/loginCheck.do";
        		var inDatasets = "";
        		var outDatasets = "gds_menu=gds_menu gds_bookmark=gds_bookmark gds_userInfo=gds_userInfo gds_company=gds_company gds_message=gds_message";
        		var argument = this.gfn_setParam("V_USER_ID", strLoginId);
        			argument += this.gfn_setParam("V_USER_PWD", strLoginPwd);
        			argument += this.gfn_setParam("V_LANG_CD", nexacro.getApplication().gv_locale);
        			argument += this.gfn_setParam("V_COMPANY_CD", strCompanyCd);
        			argument += this.gfn_setParam("V_SERVICE_TP", nexacro.getApplication().gv_serviceTp);
        			argument += this.gfn_setParam("V_APPLICATION_TP", nexacro.getApplication().gv_applicationTp);
        		var callbackFunc = "fn_logincallback";

        		this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        	}
        };

        this.fn_logincallback = function (strSvcID, nErrorCode, strErrorMsg) {
        	if (nErrorCode != 0) {
        		//this.alert(strErrorMsg);
        	} else {
        		if (strSvcID == "login") {

        			nexacro.getApplication().gv_userId = this.div_login.form.div_log.form.edt_loginId.value;
        			nexacro.getApplication().gv_company = nexacro.getApplication().gds_userInfo.getColumn(0, "COMPANY_CD");
        			nexacro.getApplication().gv_plant = nexacro.getApplication().gds_userInfo.getColumn(0, "PLANT_CD");
        			nexacro.getApplication().gv_biz = nexacro.getApplication().gds_userInfo.getColumn(0, "BIZ_CD");
        			nexacro.getApplication().gv_userauth = nexacro.getApplication().gds_userInfo.getColumn(0, "USER_AUTH");
        			nexacro.getApplication().gv_userdept = nexacro.getApplication().gds_userInfo.getColumn(0, "DEPT_CD"); //20170920 kjm 추가
        			nexacro.getApplication().gv_usernm = nexacro.getApplication().gds_userInfo.getColumn(0, "USER_NO"); //20170920 kjm 추가
        			this.userInfo = nexacro.getApplication().gds_userInfo.getColumn(0, "USER_NM_KOR");    // 2021-04-07  추가
        			this.deptCd = nexacro.getApplication().gds_userInfo.getColumn(0, "DEPT_CD");		  // 2021-04-07  추가
        			this.vesselCd = nexacro.getApplication().gds_userInfo.getColumn(0,"VESSEL_CD");		  // 2021-04-07  추가

        			var svcId = "search";
        			var params = "/commonController.do";
        			var inDatasets = "";
        			var outDatasets = "gds_systemproperty=output1";
        			var argument = "method=getList "
        				 + "sqlId='getSystemProperty' "
        				 + "LANG_CD=" + nexacro.getApplication().gv_locale + " "
        				 + "COMPANY_CD=" + nexacro.getApplication().gv_company + " ";
        			var callbackFunc = "fn_logincallback";
        			this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);


        		} else if (strSvcID == "search") {
        			nexacro.getApplication().av_homeFrame.set_formurl("Frame::frameHome.xfdl");

        			if (this.div_login.form.div_log.form.rememId.value == 1) {
        				trace("아이디 기억하기 : " + this.div_login.form.div_log.form.edt_loginId.value);
        				nexacro.setPrivateProfile("PRO_ID", this.div_login.form.div_log.form.edt_loginId.value);
        				// 2021-05-18 로그인한 시설코드 기억하기 추가
        				nexacro.setPrivateProfile("PRO_CD", this.div_login.form.div_log.form.edt_companyCd.value);

        			} else {
        				nexacro.setPrivateProfile("PRO_ID", "");
        				nexacro.setPrivateProfile("PRO_CD", "");	// 2021-05-18 추가
        			}

        			nexacro.getApplication().av_menuFrame.set_formurl("Frame::frameMenu.xfdl");
        			nexacro.getApplication().av_topFrame.set_formurl("Frame::frameTop.xfdl");
        			//nexacro.getApplication().av_homeFrame.set_formurl("HR::HRA010QR.xfdl");
        			nexacro.getEnvironment().set_httptimeout(300);
        			// reload시 그래프가 다시 그려지며 .. 에러발생 .. 추후 수정
        			// 06-22 자 frameLogin.xfdl 에는 없는코드 --> Timer 관련해서 코딩된듯
        			//nexacro.getApplication().av_homeFrame.form.Div01.form.sta_loginuser.set_text(nexacro.getApplication().gds_userInfo.getColumn(0, "DEPT_NM") + "&#13;&#10;<b v='true'>" + nexacro.getApplication().gds_userInfo.getColumn(0, "USER_NM_KOR") + "</b>");
        			nexacro.getApplication().av_vFrameSet0.set_separatesize(nexacro.getApplication().av_mainModeSize);

        			for (var i = 0; i < nexacro.getApplication().gds_systemproperty.rowcount; i++) {
        				nexacro.getApplication().addVariable("gv_" + nexacro.getApplication().gds_systemproperty.getColumn(i, "CODE").toLowerCase(), nexacro.getApplication().gds_systemproperty.getColumn(i, "SET_VALUE"));
        			}
        			//nexacro.getApplication().av_homeFrame.form.div_right.form.Static00.set_text(this.userInfo);
        		}
        	}
        };

        // enter key login
        this.frameLogin_onkeyup = function (obj, e) {
        	if (e.keycode == 13) {
        		this.div_login_btn_login_onclick();
        	}
        };

        // 언어선택(제거)
        this.fn_clicked = function (obj, e)
        {
        	this.div_login.form.div_log.form.Button01.set_opacity(1);
        	this.div_login.form.div_log.form.Button02.set_opacity(1);
        	this.div_login.form.div_log.form.Button03.set_opacity(1);
        	if (obj.name == "Button01")
        	{
        		this.div_login.form.div_log.form.Button01.set_opacity(0.5);
        	}
        	else if (obj.name == "Button02")
        	{
        		this.div_login.form.div_log.form.Button02.set_opacity(0.5);
        	}
        	else if (obj.name == "Button03")
        	{
        		this.div_login.form.div_log.form.Button03.set_opacity(0.5);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeyup",this.frameLogin_onkeyup,this);
            this.addEventHandler("onload",this.frameLogin_onload,this);
            this.div_login.form.div_log.form.btn_login.addEventHandler("onclick",this.div_login_btn_login_onclick,this);
            this.div_login.form.div_log.form.Button00.addEventHandler("onclick",this.div_login_Div_log_Button00_onclick,this);
        };
        this.loadIncludeScript("frameLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
