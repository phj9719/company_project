(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mFrameLogin");
            this.set_titletext("Mobile Login Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,708);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_login","0.00%","3.65%",null,null,"0.00%","0%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Login Division");
            obj.set_background("transparent");
            obj.set_border("0px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_login","5.00%","0","360","100",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("0");
            obj.set_text("스마트 안심요양원\r\n로그인");
            obj.set_font("normal 700 22pt/normal \"Noto Sans KR\"");
            obj.set_color("#555555");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_loginName","5.00%","229",null,"37","5.00%",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("ID를 입력하세요(입소자 성함)");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_pwd","5.00%","287",null,"37","5.00%",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("4");
            obj.set_displaynulltext("비밀번호를 입력하세요(기본 생년월일 6자리)");
            obj.set_password("true");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_login","5.00%",null,null,"54","5.00%","5%",null,null,null,null,this.div_login.form);
            obj.set_taborder("5");
            obj.set_text("확인");
            obj.set_enable("false");
            obj.set_cssclass("btn_basic");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_companyNm","5.00%","169",null,"37","17.92%",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("시설을 선택하세요");
            obj.set_readonly("true");
            this.div_login.addChild(obj.name, obj);

            obj = new ImageViewer("imv_companySearch",null,"163","50","50","5.00%",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("2");
            obj.set_image("url(\'theme://images/btn_sear.png\')");
            obj.set_stretch("fit");
            obj.set_background("transparent");
            this.div_login.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,708,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("mFrameLogin.xfdl","lib::lib_SHA256.xjs");
        this.addIncludeScript("mFrameLogin.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("mFrameLogin.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("mFrameLogin.xfdl","lib::mpgm_com.xjs");
        this.registerScript("mFrameLogin.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: mFrameLogin
         * 화면명   	: mFrameLogin
         * 화면설명 	: 모바일 로그인 페이지
         * 작성일   	: 2021-07-05
         * 작성자   	: 조기종
         * 수정이력 	: ↓↓↓↓↓↓↓
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
        this.executeIncludeScript("lib::mpgm_com.xjs"); /*include "lib::mpgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_Company;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.mframeLogin_onload = function (obj, e)
        {

        	//this.form_onload_com(obj, e,false);

        	obj.addEventHandler("onkeyup", this.fn_openDebugPopup, this);

        	// topFrame 아래쪽 경계선
        	nexacro.getApplication().av_topFrame.set_border("1px solid transparent,1px solid transparent,1px solid #cccccc");

        };

        this.div_login_btn_login_onclick = function (obj, e)
        {
        	const strCompanyNm = this.div_login.form.edt_companyNm.value;
        	const strLoginName = this.div_login.form.edt_loginName.value;
        	const pwd = this.div_login.form.edt_pwd.value;
        	const companyCd = this.fv_Company;
        	let strLoginPwd;
        	if(pwd != "" && pwd != null)
        	{
        		strLoginPwd = sha256_digest(pwd);
        	}

        	if (strCompanyNm == "" || strCompanyNm == null)
        	{
        		alert("시설명이 입력되지 않았습니다.");
        		this.companySearch();
        		return;
        	}
        	else if (strLoginName == "" || strLoginName == null)
        	{
        		alert("입소자명을 입력해주세요.");
        		this.div_login.form.edt_loginName.setFocus();
        		return;
        	}
        	else if (strLoginPwd == "" || strLoginPwd == null)
        	{
        		alert("비밀번호를 입력해주세요.");
        		this.div_login.form.edt_pwd.setFocus();
        		return;
        	}
        	else
        	{
        		nexacro.getApplication().gv_locale = "ko_KR";
        		nexacro.getApplication().gv_langType = "ko_KR";
        		nexacro.getApplication().gv_serviceTp = "100";
        		nexacro.getApplication().gv_applicationTp = "300";
        		nexacro.getApplication().gv_company = companyCd;

        		const svcId = "login";
        		const params = "/MobileLoginCheck.do";
        		const inDatasets = "";
        		const outDatasets = "gds_menu=gds_menu gds_mUserInfo=gds_mUserInfo gds_message=gds_message";
        		let argument = this.gfn_setParam("V_COMPANY_CD", companyCd);
        			argument += this.gfn_setParam("V_USER_NAME", strLoginName);
        			argument += this.gfn_setParam("V_USER_PWD", strLoginPwd);
        			argument += this.gfn_setParam("V_LANG_CD", nexacro.getApplication().gv_locale);
        			argument += this.gfn_setParam("V_SERVICE_TP", nexacro.getApplication().gv_serviceTp);
        			argument += this.gfn_setParam("V_APPLICATION_TP", nexacro.getApplication().gv_applicationTp);
        		const callbackFunc = "fn_logincallback";

        		this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        	}
        };

        this.fn_logincallback = function (strSvcID, nErrorCode, strErrorMsg) {
        	if (nErrorCode != 0)
        	{
        		//this.alert(strErrorMsg);
        	}
        	else
        	{
        		if (strSvcID == "login")
        		{
        			if(nexacro.getApplication().gds_mUserInfo.getColumn(0, "TOS_YN") != "Y")
        			{
        				var param = {};

        				Sct.tPopup(this, "NUC_LOGIN_AGREE_POP", 460, 700, param, "MobileFrame::NUC001CT.xfdl", "fn_popCallback");
        			}
        			else
        			{
        				nexacro.getApplication().gv_userId = this.div_login.form.edt_loginName.value;
        				nexacro.getApplication().gv_company = nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD");

        				const svcId = "search";
        				const params = "/commonController.do";
        				const inDatasets = "";
        				const outDatasets = "gds_systemproperty=output1";
        				let argument = "method=getList "
        					 + "sqlId='getSystemProperty' "
        					 + "LANG_CD=" + nexacro.getApplication().gv_locale + " "
        					 + "COMPANY_CD=" + nexacro.getApplication().gv_company + " ";
        				const callbackFunc = "fn_logincallback";
        				this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        			}
        		}
        		else if (strSvcID == "search")
        		{
        			nexacro.setPrivateProfile("M_ID", this.div_login.form.edt_loginName.value);
        			nexacro.getApplication().av_bottomFrame.set_formurl("MobileFrame::mFrameBottom.xfdl");
        			nexacro.getEnvironment().set_httptimeout(300);
        			nexacro.getApplication().av_frameSet.set_separatesize(nexacro.getApplication().av_mainModeSize);
        			for (let i = 0; i < nexacro.getApplication().gds_systemproperty.rowcount; i++)
        			{
        				nexacro.getApplication().addVariable("gv_" + nexacro.getApplication().gds_systemproperty.getColumn(i, "CODE").toLowerCase(), nexacro.getApplication().gds_systemproperty.getColumn(i, "SET_VALUE"));
        			}

        		}
        	}
        };

        // enter event
        this.edt_onkeyup = function(obj, e)
        {
        	if(e.keycode == 13)
        	{
        		if(obj.id == "edt_loginName")
        		{
        			this.div_login.form.edt_pwd.setFocus(true);
        		}
        		if(obj.id == "edt_pwd")
        		{
        			this.div_login.form.btn_login.setFocus(true);
        			this.div_login_btn_login_onclick();
        		}
        	}
        };

        // 모바일 디바이스 버튼 이벤트
        this.tFrameLogin_ondevicebuttonup = function(obj,e)
        {
        	// 뒤로가기 버튼
        	if(e.button == 2)
        	{
        		// 2번눌러 어플리케이션 종료
        		this.makeStandardObject();
        		const param = {};
        		this.standardPlugin.callMethod("APPEXIT", param);
        	}
        };

        // 비밀번호 입력시 이벤트
        this.div_login_edt_pwd_oninput = function(obj,e)
        {
        	// 아이디나 비밀번호가 빈값이면 로그인 버튼 비활성화
        	const edtId = this.div_login.form.edt_loginName;
        	if((edtId.value != null && edtId.value != "") && (obj.value != null && obj.value != ""))
        	{
        		this.div_login.form.btn_login.set_enable(true);
        	}
        	else
        	{
        		this.div_login.form.btn_login.set_enable(false);
        	}
        };

        // 아이디 입력시 이벤트
        this.div_login_edt_loginName_oninput = function(obj,e)
        {
        	// 아이디나 비밀번호가 빈값이면 로그인 버튼 비활성화
        	const edtPwd = this.div_login.form.edt_pwd;
        	if((obj.value != null && obj.value != "") && (edtPwd.value != null && edtPwd.value != ""))
        	{
        		this.div_login.form.btn_login.set_enable(true);
        	}
        	else
        	{
        		this.div_login.form.btn_login.set_enable(false);
        	}
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "NUC_LOGIN_AGREE_POP" :
        			break;
        		case "NUC_COMPANY_SEARCH_POP" :
        			this.div_login.form.edt_companyNm.set_value(objDs.getColumn(0, "COMPANY_NM"));
        			this.fv_Company = objDs.getColumn(0, "COMPANY_CD");
        			break;
        	}
        };

        // 시설 검색 팝업
        this.companySearch = function()
        {
        	const param = {};

        	Sct.tPopup(this, "NUC_COMPANY_SEARCH_POP", 460, 700, param, "MobilePOP::NUC_COMPANY_SEARCH_POP.xfdl", "fn_popCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.mframeLogin_onload,this);
            this.addEventHandler("ondevicebuttonup",this.tFrameLogin_ondevicebuttonup,this);
            this.addEventHandler("onclick",this.formClick,this);
            this.div_login.addEventHandler("onclick",this.formClick,this);
            this.div_login.form.sta_login.addEventHandler("onclick",this.formClick,this);
            this.div_login.form.edt_loginName.addEventHandler("onkeyup",this.edt_onkeyup,this);
            this.div_login.form.edt_loginName.addEventHandler("oninput",this.div_login_edt_loginName_oninput,this);
            this.div_login.form.edt_pwd.addEventHandler("oninput",this.div_login_edt_pwd_oninput,this);
            this.div_login.form.edt_pwd.addEventHandler("onkeyup",this.edt_onkeyup,this);
            this.div_login.form.btn_login.addEventHandler("onclick",this.div_login_btn_login_onclick,this);
            this.div_login.form.edt_companyNm.addEventHandler("oneditclick",this.companySearch,this);
            this.div_login.form.imv_companySearch.addEventHandler("onclick",this.companySearch,this);
        };
        this.loadIncludeScript("mFrameLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
