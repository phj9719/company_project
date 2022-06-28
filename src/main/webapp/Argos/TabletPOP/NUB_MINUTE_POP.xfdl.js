(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUB_MINUTE_POP");
            this.set_titletext("분 입력 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"MIN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_pop_main","0","0","700","650",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#FFFFFF");
            obj.set_borderRadius("20px");
            obj.set_visible("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"4.33%","24","24","6%",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("0");
            obj.set_edge("url(\'theme://images/ico_popclose.png\') 0px 0px");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Div("div_left","47","75","247","525",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_min_select","18","-10","200","60",null,null,null,null,null,null,this.div_pop_main.form.div_left.form);
            obj.set_taborder("0");
            obj.set_text("분 선택");
            obj.set_textAlign("center");
            obj.set_visible("true");
            obj.set_cssclass("sta_tPopupTitle");
            obj.set_background("");
            this.div_pop_main.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_00","7","70","100","60",null,null,null,null,null,null,this.div_pop_main.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("00");
            obj.set_cssclass("btn_tSelectNumber");
            this.div_pop_main.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_05","127","70","100","60",null,null,null,null,null,null,this.div_pop_main.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("05");
            obj.set_cssclass("btn_tSelectNumber");
            this.div_pop_main.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_10","7","144","100","60",null,null,null,null,null,null,this.div_pop_main.form.div_left.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("btn_tSelectNumber");
            this.div_pop_main.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_15","127","144","100","60",null,null,null,null,null,null,this.div_pop_main.form.div_left.form);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_cssclass("btn_tSelectNumber");
            this.div_pop_main.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_20","7","219","100","60",null,null,null,null,null,null,this.div_pop_main.form.div_left.form);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_cssclass("btn_tSelectNumber");
            this.div_pop_main.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_25","127","219","100","60",null,null,null,null,null,null,this.div_pop_main.form.div_left.form);
            obj.set_taborder("6");
            obj.set_text("25");
            obj.set_cssclass("btn_tSelectNumber");
            this.div_pop_main.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_30","7","293","100","60",null,null,null,null,null,null,this.div_pop_main.form.div_left.form);
            obj.set_taborder("7");
            obj.set_text("30");
            obj.set_cssclass("btn_tSelectNumber");
            this.div_pop_main.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_35","127","293","100","60",null,null,null,null,null,null,this.div_pop_main.form.div_left.form);
            obj.set_taborder("8");
            obj.set_text("35");
            obj.set_cssclass("btn_tSelectNumber");
            this.div_pop_main.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_40","7","367","100","60",null,null,null,null,null,null,this.div_pop_main.form.div_left.form);
            obj.set_taborder("9");
            obj.set_text("40");
            obj.set_cssclass("btn_tSelectNumber");
            this.div_pop_main.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_45","127","367","100","60",null,null,null,null,null,null,this.div_pop_main.form.div_left.form);
            obj.set_taborder("10");
            obj.set_text("45");
            obj.set_cssclass("btn_tSelectNumber");
            this.div_pop_main.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_50","7","441","100","60",null,null,null,null,null,null,this.div_pop_main.form.div_left.form);
            obj.set_taborder("11");
            obj.set_text("50");
            obj.set_cssclass("btn_tSelectNumber");
            this.div_pop_main.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_55","127","441","100","60",null,null,null,null,null,null,this.div_pop_main.form.div_left.form);
            obj.set_taborder("12");
            obj.set_text("55");
            obj.set_cssclass("btn_tSelectNumber");
            this.div_pop_main.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","331","75","341","525",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_min_insert","81","-10","200","60",null,null,null,null,null,null,this.div_pop_main.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("분 입력");
            obj.set_textAlign("center");
            obj.set_visible("true");
            obj.set_cssclass("sta_tPopupTitle");
            this.div_pop_main.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_7","50","292","66","66",null,null,null,null,null,null,this.div_pop_main.form.div_right.form);
            obj.set_taborder("1");
            obj.set_text("7");
            obj.set_cssclass("btn_tSelectNumber2");
            this.div_pop_main.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_8","150","292","66","66",null,null,null,null,null,null,this.div_pop_main.form.div_right.form);
            obj.set_taborder("2");
            obj.set_text("8");
            obj.set_cssclass("btn_tSelectNumber2");
            this.div_pop_main.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_4","50","216","66","66",null,null,null,null,null,null,this.div_pop_main.form.div_right.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_tSelectNumber2");
            this.div_pop_main.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_5","150","216","66","66",null,null,null,null,null,null,this.div_pop_main.form.div_right.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_tSelectNumber2");
            this.div_pop_main.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_1","50","140","66","66",null,null,null,null,null,null,this.div_pop_main.form.div_right.form);
            obj.set_taborder("5");
            obj.set_text("1");
            obj.set_cssclass("btn_tSelectNumber2");
            this.div_pop_main.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_2","150","140","66","66",null,null,null,null,null,null,this.div_pop_main.form.div_right.form);
            obj.set_taborder("6");
            obj.set_text("2");
            obj.set_cssclass("btn_tSelectNumber2");
            this.div_pop_main.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_erase","250","368","66","66",null,null,null,null,null,null,this.div_pop_main.form.div_right.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_tSelectNumber2");
            obj.set_text("C");
            obj.set_color("#47afe1");
            this.div_pop_main.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_0","150","368","66","66",null,null,null,null,null,null,this.div_pop_main.form.div_right.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("btn_tSelectNumber2");
            this.div_pop_main.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_ok","50","464","264","50",null,null,null,null,null,null,this.div_pop_main.form.div_right.form);
            obj.set_taborder("9");
            obj.set_text("확인");
            obj.set_font("normal 700 20pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_background("#47afe1");
            obj.set_borderRadius("4px");
            this.div_pop_main.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_9","250","292","66","66",null,null,null,null,null,null,this.div_pop_main.form.div_right.form);
            obj.set_taborder("10");
            obj.set_text("9");
            obj.set_cssclass("btn_tSelectNumber2");
            this.div_pop_main.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_value","50","72","180","50",null,null,null,null,null,null,this.div_pop_main.form.div_right.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_font("normal 700 20pt/normal \"Noto Sans KR\"");
            obj.set_color("#000000");
            obj.set_textAlign("right");
            this.div_pop_main.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_6","250","216","66","66",null,null,null,null,null,null,this.div_pop_main.form.div_right.form);
            obj.set_taborder("12");
            obj.set_text("6");
            obj.set_cssclass("btn_tSelectNumber2");
            this.div_pop_main.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_3","250","140","66","66",null,null,null,null,null,null,this.div_pop_main.form.div_right.form);
            obj.set_taborder("13");
            obj.set_text("3");
            obj.set_cssclass("btn_tSelectNumber2");
            this.div_pop_main.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_back","250","64","66","66",null,null,null,null,null,null,this.div_pop_main.form.div_right.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_tSelectNumber2");
            obj.set_background("url(\'theme://images/ico_backspace.png\') no-repeat center center #f1f1f1");
            this.div_pop_main.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_00","50","368","66","66",null,null,null,null,null,null,this.div_pop_main.form.div_right.form);
            obj.set_taborder("15");
            obj.set_text("00");
            obj.set_cssclass("btn_tSelectNumber2");
            this.div_pop_main.form.div_right.addChild(obj.name, obj);

            obj = new Div("Div00","326","80","3",null,null,"60",null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("3");
            obj.set_background("#47afe1");
            this.div_pop_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",700,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB_MINUTE_POP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB_MINUTE_POP.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB_MINUTE_POP.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB_MINUTE_POP.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;

        // 온로드
        this.NUB_MINUTE_POP_onload = function(obj,e)
        {
        	this.div_pop_main.form.div_right.form.edt_value.set_value("");
        };

        // 디바이스 버튼
        this.NUB_MINUTE_POP_ondevicebuttonup = function(obj,e)
        {
        	// 뒤로가기 버튼
        	if (e.button == 2)
        	{
        		this.close();
        	}
        };

        // X 버튼 (닫기)
        this.div_pop_main_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        // 분 선택
        this.btn_select_onclick = function(obj,e)
        {
        	this.ds_return.clearData();
        	this.ds_return.addRow();
        	this.ds_return.setColumn(0, "MIN", obj.text);
        	this.close(this.ds_return.saveXML());
        };

        // 분 입력 숫자들
        this.btn_insert_onclick = function(obj,e)
        {
        	let iValTemp = "";
        	let iVal = this.div_pop_main.form.div_right.form.edt_value.value;
        	const nVal = obj.text;

        	iValTemp = iVal + nVal;

        	// 입력 글자 2글자 못 넘도록 하기
        	if (iValTemp.length > 2) return;

        	this.div_pop_main.form.div_right.form.edt_value.set_value(iValTemp);
        };

        // <- 버튼 (백스페이스)
        this.div_pop_main_div_right_btn_back_onclick = function(obj,e)
        {
        	const iVal = this.div_pop_main.form.div_right.form.edt_value.value;
        	const bVal = iVal.slice(0, -1);
        	this.div_pop_main.form.div_right.form.edt_value.set_value(bVal);
        };

        // C 버튼 (클리어)
        this.div_pop_main_div_right_btn_erase_onclick = function(obj,e)
        {
        	this.div_pop_main.form.div_right.form.edt_value.set_value("");
        };

        // 확인
        this.div_pop_main_div_right_btn_ok_onclick = function(obj,e)
        {
        	const iVal = this.div_pop_main.form.div_right.form.edt_value.value;
        	let rtnVal;
        	if (iVal.length == 0)
        	{
        		rtnVal = "00";
        	}
        	else if (iVal.length == 1)
        	{
        		rtnVal = "0" + iVal;
        	}
        	else if (iVal.length == 2)
        	{
        		rtnVal = iVal;
        	}
        	else
        	{
        		alert("분입력은 2자리수를 넘을 수 없습니다.");
        		return false;
        	}

        	if (parseInt(iVal) > 59)
        	{
        		alert("분입력은 59를 넘을 수 없습니다.");
        		return false;
        	}

        	this.ds_return.clearData();
        	this.ds_return.addRow();
        	this.ds_return.setColumn(0, "MIN", rtnVal);
        	this.close(this.ds_return.saveXML());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.formClick,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("ondevicebuttonup",this.NUB_MINUTE_POP_ondevicebuttonup,this);
            this.addEventHandler("onload",this.NUB_MINUTE_POP_onload,this);
            this.div_pop_main.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.btn_close.addEventHandler("onclick",this.div_pop_main_btn_close_onclick,this);
            this.div_pop_main.form.div_left.form.sta_min_select.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.div_left.form.btn_00.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_pop_main.form.div_left.form.btn_05.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_pop_main.form.div_left.form.btn_10.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_pop_main.form.div_left.form.btn_15.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_pop_main.form.div_left.form.btn_20.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_pop_main.form.div_left.form.btn_25.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_pop_main.form.div_left.form.btn_30.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_pop_main.form.div_left.form.btn_35.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_pop_main.form.div_left.form.btn_40.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_pop_main.form.div_left.form.btn_45.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_pop_main.form.div_left.form.btn_50.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_pop_main.form.div_left.form.btn_55.addEventHandler("onclick",this.btn_select_onclick,this);
            this.div_pop_main.form.div_right.form.sta_min_insert.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.div_right.form.btn_7.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.div_pop_main.form.div_right.form.btn_8.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.div_pop_main.form.div_right.form.btn_4.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.div_pop_main.form.div_right.form.btn_5.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.div_pop_main.form.div_right.form.btn_1.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.div_pop_main.form.div_right.form.btn_2.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.div_pop_main.form.div_right.form.btn_erase.addEventHandler("onclick",this.div_pop_main_div_right_btn_erase_onclick,this);
            this.div_pop_main.form.div_right.form.btn_0.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.div_pop_main.form.div_right.form.btn_ok.addEventHandler("onclick",this.div_pop_main_div_right_btn_ok_onclick,this);
            this.div_pop_main.form.div_right.form.btn_9.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.div_pop_main.form.div_right.form.btn_6.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.div_pop_main.form.div_right.form.btn_3.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.div_pop_main.form.div_right.form.btn_back.addEventHandler("onclick",this.div_pop_main_div_right_btn_back_onclick,this);
            this.div_pop_main.form.div_right.form.btn_00.addEventHandler("onclick",this.btn_insert_onclick,this);
        };
        this.loadIncludeScript("NUB_MINUTE_POP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
