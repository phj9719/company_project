(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUC_PASSWORD_POP");
            this.set_titletext("모바일 비밀번호 변경 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_chk", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_pop_main","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_borderRadius("24px");
            obj.set_background("#FFFFFF");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0","5%","100%","50",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("0");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("sta_pop_title");
            obj.set_textAlign("center");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_cancel","0",null,"175","60",null,"0",null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_ok",null,null,"175","60","0","0",null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("2");
            obj.set_text("변경");
            obj.set_cssclass("btn_pop_yes");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_curPasswd","4.86%","80",null,"36","4.86%",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("3");
            obj.set_text("현재비밀번호");
            obj.set_textAlign("center");
            obj.set_color("#7d7f97");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Edit("edt_curPasswd","4.86%","120",null,"35","4.86%",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("4");
            obj.set_textAlign("center");
            obj.set_password("true");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Edit("edt_chgPasswd","4.29%","215",null,"35","4.86%",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_password("true");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_chgPasswd","4.29%","175",null,"36","4.86%",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("6");
            obj.set_text("변경비밀번호");
            obj.set_textAlign("center");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_color("#7d7f97");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_remark","4.86%","360",null,"50","4.86%",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("7");
            obj.set_text("※비밀번호는 영문, 숫자, 특수문자 포함 8자리 이상 설정하여 주십시오.");
            obj.set_cssclass("sta_txt");
            obj.set_wordWrap("char");
            obj.set_textAlign("center");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_chgPasswd_chk","4.00%","270",null,"36","4.86%",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("8");
            obj.set_text("변경비밀번호 재입력");
            obj.set_textAlign("center");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_color("#7d7f97");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Edit("edt_chgPasswd_chk","4.00%","310",null,"35","4.86%",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("9");
            obj.set_textAlign("center");
            obj.set_password("true");
            this.div_pop_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",350,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUC_PASSWORD_POP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUC_PASSWORD_POP.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUC_PASSWORD_POP.xfdl","lib::mpgm_com.xjs");
        this.addIncludeScript("NUC_PASSWORD_POP.xfdl","lib::lib_SHA256.xjs");
        this.registerScript("NUC_PASSWORD_POP.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: NUC_PASSWORD_POP
         * 화면명   	: 모바일 비밀번호 변경 팝업
         * 화면설명 	: 모바일 비밀번호 변경하는 팝업
         * 작성일   	: 2021-09-03
         * 작성자   	: 조기종
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *
         ***********************************************************************
         */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::mpgm_com.xjs"); /*include "lib::mpgm_com.xjs"*/;
        this.executeIncludeScript("lib::lib_SHA256.xjs"); /*include "lib::lib_SHA256.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/


        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.NUC_PASSWORD_POP_onload = function(obj,e)
        {

        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 취소
        this.div_pop_main_btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        // 변경
        this.div_pop_main_btn_ok_onclick = function(obj,e)
        {
        	this.fn_chkPass();
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        this.fn_chkPass = function()
        {
        	const curPass = this.div_pop_main.form.edt_curPasswd.value;
        	const chgPass = this.div_pop_main.form.edt_chgPasswd.value;
        	const chgPassChk = this.div_pop_main.form.edt_chgPasswd_chk.value;

        	if(Sct.Util.isEmpty(curPass))
        	{
        		Sct.alert(this, "000033", "현재비밀번호");
        		this.div_pop_main.form.edt_curPasswd.setFocus(true);
        		return;
        	}

        	if(Sct.Util.isEmpty(chgPass))
        	{
        		Sct.alert(this, "000033", "변경비밀번호");
        		this.div_pop_main.form.edt_chgPasswd.setFocus(true);
        		return;
        	};

        	if(Sct.Util.isEmpty(chgPassChk))
        	{
        		Sct.alert(this, "000033", "변경비밀번호 재입력");
        		this.div_pop_main.form.edt_chgPasswd_chk.setFocus(true);
        		return;
        	};

        	// 비밀번호 정규식
        	const passReg = this.fn_checkPass(chgPass);

        	if(passReg != "Y")
        	{
        		Sct.alert(this, "000576"); // 비밀번호 포멧에 맞게 변경하세요.
        		this.div_pop_main.form.edt_chgPasswd.set_value("");
        		this.div_pop_main.form.edt_chgPasswd_chk.set_value("");
        		this.div_pop_main.form.edt_chgPasswd.setFocus(true);
        		return;
        	}

        	if(chgPass != chgPassChk)
        	{
        		Sct.alert(this, "000578");	// 변경 비밀번호가 일치하지 않습니다.
        		this.div_pop_main.form.edt_chgPasswd_chk.set_value("");
        		this.div_pop_main.form.edt_chgPasswd_chk.setFocus(true);
        		return false;
        	}

        	const companyCd = nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD");
        	const resId = nexacro.getApplication().gds_mUserInfo.getColumn(0, "RES_ID");

        	const svcId = "passChg";
        	const params = "/NUC_PASSWORD_POPController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_chk=output1";
        	const argument = "method=passChk "
        			+ "COMPANY_CD=" + companyCd + " "
        			+ "RES_ID=" + resId + " "
        			+ "CUR_PASS=" + sha256_digest(curPass) + " "
        			+ "CHG_PASS=" + sha256_digest(chgPass) + " ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "passChg")
        		{
        			Sct.alert(this, "000577"); // 비밀번호 변경이 완료되었습니다.
        			this.close();
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}

        };

        // 비밀번호 체크
        this.fn_checkPass = function(sValue)
        {
        	var sRtn = "N";

        	// 정규식 영문, 숫자, 특수문자 포함 8자리 이상
        	var pRegExp = /^.*(?=^.{8,}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

        	var match = sValue.match(pRegExp);

        	if(match == null)
        	{
        		sRtn = "N";
        	}
        	else
        	{
        		sRtn = "Y";
        	}

        	return sRtn;
        };

        // edit component enter event
        this.edt_onkeyup = function(obj, e)
        {
        	if(e.keycode == 13)
        	{
        		if(obj.id == "edt_curPasswd")
        		{
        			this.div_pop_main.form.edt_chgPasswd.setFocus(true);
        		}
        		if(obj.id == "edt_chgPasswd")
        		{
        			this.div_pop_main.form.edt_chgPasswd_chk.setFocus(true);
        		}
        		if(obj.id == "edt_chgPasswd_chk")
        		{
        			this.div_pop_main.form.btn_ok.setFocus(true);
        			this.div_pop_main.form.btn_ok.click();
        		}
        	}
        };

        // 안드로이드 버튼 이벤트
        this.NUC_PASSWORD_POP_ondevicebuttonup = function(obj,e)
        {
        	if(e.button == 2)
        	{
        		this.close();
        	};
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NUC_PASSWORD_POP_onload,this);
            this.addEventHandler("ondevicebuttonup",this.NUC_PASSWORD_POP_ondevicebuttonup,this);
            this.div_pop_main.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.sta_title.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.btn_cancel.addEventHandler("onclick",this.div_pop_main_btn_cancel_onclick,this);
            this.div_pop_main.form.btn_ok.addEventHandler("onclick",this.div_pop_main_btn_ok_onclick,this);
            this.div_pop_main.form.sta_curPasswd.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.edt_curPasswd.addEventHandler("onkeyup",this.edt_onkeyup,this);
            this.div_pop_main.form.edt_chgPasswd.addEventHandler("onkeyup",this.edt_onkeyup,this);
            this.div_pop_main.form.sta_chgPasswd.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.sta_remark.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.sta_chgPasswd_chk.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.edt_chgPasswd_chk.addEventHandler("onkeyup",this.edt_onkeyup,this);
        };
        this.loadIncludeScript("NUC_PASSWORD_POP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
