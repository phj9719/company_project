(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("tFrameLogin");
            this.set_titletext("Login Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
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


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CON_MACH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_login","0%","0.00%",null,null,"0%","0.00%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Login Division");
            obj.set_background("transparent");
            obj.set_border("0px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Div("div_log","62.5%","0%",null,null,"0%","0%",null,null,null,null,this.div_login.form);
            obj.set_taborder("0");
            obj.set_background("linear-gradient(to left bottom,#aadcf0,#a5d1ed 100%)");
            obj.set_text("");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_loginId","5%","129",null,"70","5%",null,null,null,null,null,this.div_login.form.div_log.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#fbfbfb");
            obj.set_borderRadius("3px");
            obj.set_displaynulltext("ID를 입력해 주세요");
            obj.set_font("normal 500 20pt/normal \"Noto Sans KR\"");
            obj.set_color("#999999");
            obj.set_textAlign("left");
            this.div_login.form.div_log.addChild(obj.name, obj);

            obj = new Edit("edt_pwd","5%","211",null,"70","5%",null,null,null,null,null,this.div_login.form.div_log.form);
            obj.set_taborder("2");
            obj.set_password("true");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#fbfbfb");
            obj.set_borderRadius("3px");
            obj.set_displaynulltext("PASSWORD를 입력해 주세요");
            obj.set_font("normal 500 20pt/normal \"Noto Sans KR\"");
            obj.set_color("#999999");
            obj.set_textAlign("left");
            this.div_login.form.div_log.addChild(obj.name, obj);

            obj = new Button("btn_login","5%","296",null,"70","5%",null,null,null,null,null,this.div_login.form.div_log.form);
            obj.set_taborder("3");
            obj.set_text("로그인");
            obj.set_cssclass("btn_login");
            obj.set_borderRadius("3px");
            obj.set_cursor("pointer");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 700 20pt/normal \"Noto Sans KR\"");
            obj.set_background("#3a8dca");
            obj.set_color("#ffffff");
            this.div_login.form.div_log.addChild(obj.name, obj);

            obj = new Edit("edt_companyCd","5%","47",null,"70","5%",null,null,null,null,null,this.div_login.form.div_log.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #cccccc");
            obj.set_background("#fbfbfb");
            obj.set_borderRadius("3px");
            obj.set_displaynulltext("시설코드를 입력해 주세요");
            obj.set_font("normal 500 20pt/normal \"Noto Sans KR\"");
            obj.set_color("#999999");
            obj.set_textAlign("left");
            this.div_login.form.div_log.addChild(obj.name, obj);

            obj = new Button("btn_exit","5%",null,null,"70","5%","60",null,null,null,null,this.div_login.form.div_log.form);
            obj.set_taborder("4");
            obj.set_text("앱 종료");
            obj.set_cssclass("btn_login");
            obj.set_borderRadius("3px");
            obj.set_cursor("pointer");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 700 20pt/normal \"Noto Sans KR\"");
            obj.set_background("#3a8dca");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            this.div_login.form.div_log.addChild(obj.name, obj);

            obj = new Div("div_img","0%","0%",null,null,"37.5%","0%",null,null,null,null,this.div_login.form);
            obj.set_taborder("1");
            this.div_login.addChild(obj.name, obj);

            obj = new ImageViewer("img_background","0.00%","0.00%","100.00%","100%",null,null,null,null,null,null,this.div_login.form.div_img.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_edge("url(\'theme://images/login_bg.png\') 0px 0px");
            obj.set_padding("0px 3px 0px 10px");
            this.div_login.form.div_img.addChild(obj.name, obj);

            obj = new ImageViewer("img_title","6.25%","6.25%","238","92",null,null,null,null,null,null,this.div_login.form.div_img.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_imagealign("left middle");
            obj.set_background("url(\'theme://images/login_ttl.png\') no-repeat");
            obj.set_border("1px solid transparent");
            this.div_login.form.div_img.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",1280,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("tFrameLogin.xfdl","lib::lib_SHA256.xjs");
        this.addIncludeScript("tFrameLogin.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("tFrameLogin.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("tFrameLogin.xfdl","lib::tpgm_com.xjs");
        this.registerScript("tFrameLogin.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: tFrameLogin
         * 화면명   	: tFrameLogin
         * 화면설명 	: 태블릿 로그인 페이지
         * 작성일   	: 2021-05-26
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *
         ***********************************************************************
         */

        /***********************************************************************
         * Include
         ***********************************************************************/
        this.executeIncludeScript("lib::lib_SHA256.xjs"); /*include "lib::lib_SHA256.xjs"*/;
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;
        this.fv_tabSNo = ""; // 태블릿 시리얼번호
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.frameLogin_onload = function (obj, e) {

        	//this.form_onload_com(obj, e,false);

        	nexacro.getApplication().gds_menu.clearData();

        	const cookieId = nexacro.getPrivateProfile("PRO_ID");
        	const cookieCd = nexacro.getPrivateProfile("PRO_CD");	//	2021-05-18 추가
        	if (cookieId != null && cookieId != "") {
        		trace("쿠키정보 존재 : " + cookieId);
        		this.div_login.form.div_log.form.edt_loginId.set_value(cookieId);
        		// 2021-05-18 아이디 쿠키가 존재하면 시설코드도 세팅 추가
        		this.div_login.form.div_log.form.edt_companyCd.set_value(cookieCd);
        	}

        	this.div_login.form.div_log.form.btn_login.set_opacity(1);

        	if(system.navigatorname == "nexacro" && system.osversion.toUpperCase().indexOf("WINDOWS") == -1)
        	{
        		const param = {};
        		const standard = this.makeStandardObject();

        		this.standardPlugin.callMethod("SDK_INFO", param);
        		this.standardPlugin.callMethod("TabInfo", param);
        		this.standardPlugin.callMethod("versionCheck", param);
        	}

        	this.div_login.form.div_log.form.btn_login.setFocus();
        };

        this.div_login_btn_login_onclick = function (obj, e) {
        	const strLoginId = this.div_login.form.div_log.form.edt_loginId.value;
        	const pwd = this.div_login.form.div_log.form.edt_pwd.value;
        	let strLoginPwd;
        	if(pwd != "" && pwd != null) {
        		strLoginPwd = sha256_digest(pwd);
        	}
        	const strCompanyCd = this.div_login.form.div_log.form.edt_companyCd.value;

        	if (strCompanyCd == "" || strCompanyCd == null) {
        		alert("시설코드를 입력해주세요");
        		this.div_login.form.div_log.form.edt_companyCd.setFocus();
        		return;
        	}
        	if (strLoginId == "" || strLoginId == null) {
        		alert("ID를 입력해주세요.");
        		this.div_login.form.div_log.form.edt_loginId.setFocus();
        		return;
        	} else if (strLoginPwd == "" || strLoginPwd == null) {
        		alert("비밀번호를 입력해주세요.");
        		this.div_login.form.div_log.form.edt_pwd.setFocus();
        		return;
        	} else {
        		nexacro.getApplication().gv_locale = "ko_KR";
        		nexacro.getApplication().gv_langType = "ko_KR";
        		nexacro.getApplication().gv_serviceTp = "100";
        		nexacro.getApplication().gv_applicationTp = "200";
        		nexacro.getApplication().gv_company = strCompanyCd;

        		const svcId = "login";
        		const params = "/loginCheck.do";
        		const inDatasets = "";
        		const outDatasets = "gds_menu=gds_menu gds_bookmark=gds_bookmark gds_userInfo=gds_userInfo gds_company=gds_company gds_message=gds_message";
        		let argument = this.gfn_setParam("V_USER_ID", strLoginId);
        			argument += this.gfn_setParam("V_USER_PWD", strLoginPwd);
        			argument += this.gfn_setParam("V_LANG_CD", nexacro.getApplication().gv_locale);
        			argument += this.gfn_setParam("V_COMPANY_CD", strCompanyCd);
        			argument += this.gfn_setParam("V_SERVICE_TP", nexacro.getApplication().gv_serviceTp);
        			argument += this.gfn_setParam("V_APPLICATION_TP", nexacro.getApplication().gv_applicationTp);

        		const callbackFunc = "fn_logincallback";

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

        			// ds_detail 연결된 기기 조회
        			const svcId = "search";
        			const params = "/commonController.do";
        			const inDatasets = "";
        			const outDatasets = "gds_systemproperty=output1 ds_detail=output2";
        			let argument = "method=getList "
        				 + "sqlId='getSystemProperty NUB200CT.NUB200CT_DS_DETAIL_S' "
        				 + "LANG_CD=" + nexacro.getApplication().gv_locale + " "
        				 + "COMPANY_CD=" + nexacro.getApplication().gv_company + " "
        				 + "SERVICE_TP=" + nexacro.getApplication().gv_serviceTp + " "
        				 + "SN_NO=" + nexacro.getApplication().gds_taCurRes.getColumn(0, "TAB_MACADD") + " ";

        			const callbackFunc = "fn_logincallback";
        			this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);

        		} else if (strSvcID == "search") {
        			//글로벌변수 초기화
        			nexacro.getApplication().gds_taCurRes.setColumn(0,"CON_PRE_MACADD", "");
        			nexacro.getApplication().gds_taCurRes.setColumn(0,"CON_SUG_MACADD", "");
        			nexacro.getApplication().gds_taCurRes.setColumn(0,"CON_TEM_MACADD", "");
        			nexacro.getApplication().gds_taCurRes.setColumn(0,"CON_COM_MACADD", "");

        			// 연결된 기기 맥어드레스를 글로벌데이터셋에 저장
        			for(var i=0; i<this.ds_detail.rowcount; i++){
        				var macAdd = this.ds_detail.getColumn(i,"MAC_ADD");

        				if(this.ds_detail.getColumn(i, "MACH_TP") == "0300"){ // 혈압계
        					nexacro.getApplication().gds_taCurRes.setColumn(0,"CON_PRE_MACADD", macAdd);
        				}else if(this.ds_detail.getColumn(i, "MACH_TP") == "0400"){ // 혈당계
        					nexacro.getApplication().gds_taCurRes.setColumn(0,"CON_SUG_MACADD", macAdd);
        				}else if(this.ds_detail.getColumn(i, "MACH_TP") == "0500"){ // 체온계
        					nexacro.getApplication().gds_taCurRes.setColumn(0,"CON_TEM_MACADD", macAdd);
        				}else if(this.ds_detail.getColumn(i, "MACH_TP") == "0600"){ // 체성분분석기
        					nexacro.getApplication().gds_taCurRes.setColumn(0,"CON_COM_MACADD", macAdd);
        				}
        			}

        			nexacro.setPrivateProfile("PRO_ID", this.div_login.form.div_log.form.edt_loginId.value);
        			// 2021-05-18 로그인한 시설코드 기억하기 추가
        			nexacro.setPrivateProfile("PRO_CD", this.div_login.form.div_log.form.edt_companyCd.value);

        			//nexacro.getApplication().av_mainMenu.set_formurl("TabletFrame::tFrameMainMenu.xfdl");
        			//nexacro.getApplication().av_subMenu.set_formurl("TabletFrame::tFrameSubMenu.xfdl");
        			nexacro.getEnvironment().set_httptimeout(300);
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "COMPANY_CD", nexacro.getApplication().gv_company);
        			//nexacro.getApplication().av_vFrameSet00.set_separatesize(nexacro.getApplication().av_mainModeSize);
        			nexacro.getApplication().av_login.set_formurl("TabletFrame::NUB001CT.xfdl");

        			for (let i = 0; i < nexacro.getApplication().gds_systemproperty.rowcount; i++) {
        				nexacro.getApplication().addVariable("gv_" + nexacro.getApplication().gds_systemproperty.getColumn(i, "CODE").toLowerCase(), nexacro.getApplication().gds_systemproperty.getColumn(i, "SET_VALUE"));
        			}

        		}
        	}
        };

        // enter event
        this.edt_onkeydown = function(obj, e)
        {
        	if(e.keycode == 13)
        	{
        		if(obj.id == "edt_companyCd")
        		{
        			this.div_login.form.div_log.form.edt_loginId.setFocus(true);
        		}
        		if(obj.id == "edt_loginId")
        		{
        			this.div_login.form.div_log.form.edt_pwd.setFocus(true);
        		}
        		if(obj.id == "edt_pwd")
        		{
        			this.div_login.form.div_log.form.btn_login.setFocus(true);
        			this.div_login_btn_login_onclick();
        		}
        	}
        };

        // 디바이스 버튼 이벤트
        this.tFrameLogin_ondevicebuttonup = function(obj,e)
        {
        	if(e.button == 2)
        	{
        		//nexacro.getApplication().exit();

        		const param = {};
        		//this.makeStandardObject();
        		//this.standardPlugin.callMethod("APPEXIT", param);

        		Sct.tPopup(this, "NUB_APPEXIT_POP", 350, 350, param, "TabletPOP::NUB_APPEXIT_POP.xfdl", "fn_popCallback");
        	}
        };

        // 앱에서 _oncallback의 callback 호출시
        this.on_standardPlugin_callback = function(obj, e)
        {
        	//trace("this.on_callback ::: " + e.svcid);
        	//trace("this.on_callback ::: " + e.reason);
        	//trace("this.on_callback ::: " + e.returnvalue);

        	let json;
        	if(e.svcid == "SDK_INFO")
        	{
        		if(e.reason == 0)
        		{
        			//trace("this.on_callback ::: " + JSON.stringify(e.returnvalue));
        			json = e.returnvalue;
        			const sdkVer = json.SDK_VER; // sdk 버전

        			//trace("sdkVer ::: " + sdkVer);

        			nexacro.getApplication().gv_sdkVer = sdkVer;

        			if(nexacro.getApplication().gv_sdkVer < 29)
        			{
        				nexacro.getApplication().av_mainModeSize = "160,*,0";
        				this.div_login.form.div_log.form.btn_exit.set_visible(true);
        			}

        		}
        	}
        	else if (e.svcid == "TabInfo")
        	{
        		if(e.reason == 0)
        		{
        			trace("this.on_callback ::: " + JSON.stringify(e.returnvalue));
        			json = e.returnvalue;
        			const manufacturer = json.manufacturer; // 제조사
        			const model = json.model; //  모델명
        			const androidID = json.androidID; // Android ID

        			trace("manufacturer ::: " + manufacturer);
        			trace("model ::: " + model);
        			trace("androidID ::: " + androidID);

        			this.fv_tabSNo = androidID; // 태블릿ID

        			nexacro.getApplication().gds_taCurRes.setColumn(0, "TAB_MACADD", this.fv_tabSNo);

        		}
        		else if(e.reason == -1)
        		{
        			this.alert("입력기기 정보를 가져오는데 실패하였습니다.");
        		}
        	}
        };

        // 앱 종료
        this.div_login_div_log_btn_exit_onclick = function(obj,e)
        {
        	if(!confirm("앱을 종료하시겠습니까?")) return;
        	nexacro.getApplication().exit();
        };

        this.div_login_div_log_edt_companyCd_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeyup",this.frameLogin_onkeyup,this);
            this.addEventHandler("onload",this.frameLogin_onload,this);
            this.addEventHandler("ondevicebuttonup",this.tFrameLogin_ondevicebuttonup,this);
            this.addEventHandler("onclick",this.formClick,this);
            this.div_login.form.div_log.addEventHandler("onclick",this.formClick,this);
            this.div_login.form.div_log.form.edt_loginId.addEventHandler("onkeydown",this.edt_onkeydown,this);
            this.div_login.form.div_log.form.edt_pwd.addEventHandler("onkeydown",this.edt_onkeydown,this);
            this.div_login.form.div_log.form.btn_login.addEventHandler("onclick",this.div_login_btn_login_onclick,this);
            this.div_login.form.div_log.form.edt_companyCd.addEventHandler("onkeydown",this.edt_onkeydown,this);
            this.div_login.form.div_log.form.edt_companyCd.addEventHandler("onchanged",this.div_login_div_log_edt_companyCd_onchanged,this);
            this.div_login.form.div_log.form.btn_exit.addEventHandler("onclick",this.div_login_div_log_btn_exit_onclick,this);
        };
        this.loadIncludeScript("tFrameLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
