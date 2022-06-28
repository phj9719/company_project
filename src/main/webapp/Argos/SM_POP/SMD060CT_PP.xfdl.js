(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SMD060CT_PP");
            this.set_titletext("비밀번호 변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(326,226);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_chk", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt_cur_pass","9","17","307","39",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_displaynulltext("현재 비밀번호");
            obj.set_password("true");
            obj.set_color("rgba(160,175,194,1)");
            obj.set_font("9pt \"Verdana, antialias 9 malgun gothic,맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_new_pass_chk","9","113","307","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("새 비밀번호 확인");
            obj.set_password("true");
            obj.set_color("rgba(160,175,194,1)");
            obj.set_font("9pt \"Verdana, antialias 9 malgun gothic,맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_new_pass","9","65","307","39",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displaynulltext("새 비밀번호");
            obj.set_password("true");
            obj.set_color("rgba(160,175,194,1)");
            obj.set_font("9pt \"Verdana, antialias 9 malgun gothic,맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","98","169","100","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("확인");
            obj.set_enable("true");
            obj.set_background("rgba(31,188,2,1)");
            obj.set_border("0px solid rgba(125,127,128,1)");
            obj.set_color("white");
            obj.set_font("9pt \"Verdana, antialias 9 malgun gothic,맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","209","169","100","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_border("1px solid gainsboro");
            obj.set_font("9pt \"Verdana, antialias 9 malgun gothic,맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","8","169","80","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.set_enable("true");
            obj.set_background("RGBA(183,26,5,1)");
            obj.set_border("0px solid rgba(125,127,128,1)");
            obj.set_color("white");
            obj.set_font("9pt \"Verdana, antialias 9 malgun gothic,맑은 고딕\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",326,226,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SMD060CT_PP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("SMD060CT_PP.xfdl","lib::lib_SHA256.xjs");
        this.registerScript("SMD060CT_PP.xfdl", function() {
        // 비밀번호 변경 팝업
        // 개발자  : 김정록
        // 날   짜 : 2018-02-12
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::lib_SHA256.xjs"); /*include "lib::lib_SHA256.xjs"*/

        this.SMD060CT_PP_onload = function(obj,e)
        {
        	// 오픈시 첫번째 항목에 커서 이동
        	this.edt_cur_pass.setFocus();
        };

        this.fn_chkPass = function (obj, e)
        {
        	var curpass = this.edt_cur_pass.value;
        	var newpass = this.edt_new_pass.value;
        	var newpassChk = this.edt_new_pass_chk.value;

        	// 정규표현식
        	if(Sct.Util.isEmpty(curpass) || Sct.Util.isEmpty(newpass) || Sct.Util.isEmpty(newpassChk))
        	{
        		alert("필수값이 누락되었습니다.");
        		return;
        	}
        	const companyCd = this.opener.ds_list.getColumn(this.opener.ds_list.rowposition, "COMPANY_CD");
        	var userid;
        	var isSys = "";
        	if (nexacro.getApplication().gv_userauth == "01")
        	{
        		userid = this.opener.ds_list.getColumn(this.opener.ds_list.rowposition, "USER_ID");
        		isSys = nexacro.getApplication().gv_userId;
        	}
        	else
        	{
        		userid = this.opener.ds_list.getColumn(this.opener.ds_list.rowposition, "USER_ID");
        	}


        	if (newpass != newpassChk)
        	{
        		Sct.alert(this, "000137");//비밀번호가 일치하지 않습니다.
        		return false;
        	}

        	// var check1 = /^(?=.*[a-zA-Z])(?=.*[0-9]).{10,12}$/.test(newpass);   //영문,숫자
        	// var check2 = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{10,12}$/.test(newpass);  //영문,특수문자
        	// if(!(check1 && check2 && newpass.length >=10)){
        	// alert("패스워드는 영대소문자,특수문자 포함 10자리 이상입니다.");
        	// return;
        	// }

        	var argument = "method=changePassword "
        		 + "USER_ID=" + userid + " "
        		 + "COMPANY_CD=" + companyCd + " "
        		 + "SYS=" + isSys + " "
        		 + "CUR_PASS=" + sha256_digest(curpass) + " "
        		 + "NEW_PASS=" + sha256_digest(newpass) + " ";

        	Sct.transaction(this, "passChk", "/SMD060CTController.do", "", "ds_chk=output1", argument, "fn_callback");
        };

        this.fn_close = function (obj, e)
        {
        	this.close();
        };


        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "passChk")
        		{
        			Sct.alert(this, "000058");//성공적으로 처리되었습니다.
        			this.close();
        		} else if(strSvcID == "passClear") {

        			Sct.alert(this, "000554");
        		//	this.close();
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}

        };

        this.fn_enter = function (obj, e)
        {
        	if (e.keycode == 13)
        	{
        		this.fn_chkPass();
        	}
        };

        this.fn_clearPw_pre = function () {

        	if(!Sct.confirm(this, "000083", "0000으로 초기화")) return false;

        	return true;
        };

        this.btn_clear_onclick = function(obj,e)
        {

        	//validation
        	if(!this.fn_clearPw_pre()) return;

        	var userid;
        	var isSys = "";
        	const companyCd = this.opener.ds_list.getColumn(this.opener.ds_list.rowposition, "COMPANY_CD");
        	if (nexacro.getApplication().gv_userauth == "01")
        	{
        		userid = this.opener.ds_list.getColumn(this.opener.ds_list.rowposition, "USER_ID");
        		isSys = nexacro.getApplication().gv_userId;
        	}
        	else
        	{
        		userid = this.opener.ds_list.getColumn(this.opener.ds_list.rowposition, "USER_ID");
        	}

        	// 초기화 0000
        	var newpass = "0000";

        	// var check1 = /^(?=.*[a-zA-Z])(?=.*[0-9]).{10,12}$/.test(newpass);   //영문,숫자
        	// var check2 = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{10,12}$/.test(newpass);  //영문,특수문자
        	// if(!(check1 && check2 && newpass.length >=10)){
        	// alert("패스워드는 영대소문자,특수문자 포함 10자리 이상입니다.");
        	// return;
        	// }

        	var argument = "method=clearPassword "
        		 + "USER_ID=" + userid + " "
        		 + "COMPANY_CD=" + companyCd + " "
        		 + "SYS=" + isSys + " "
        		 + "NEW_PASS=" + sha256_digest(newpass) + " ";

        	Sct.transaction(this, "passClear", "/SMD060CTController.do", "", "ds_chk=output1", argument, "fn_callback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SMD060CT_PP_onload,this);
            this.btn_ok.addEventHandler("onclick",this.fn_chkPass,this);
            this.btn_cancel.addEventHandler("onclick",this.fn_close,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };
        this.loadIncludeScript("SMD060CT_PP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
