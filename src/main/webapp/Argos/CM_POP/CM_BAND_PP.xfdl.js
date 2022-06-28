(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COMMON_CODE");
            this.set_titletext("맥박조치 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(637,240);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"AGE_SEX\" type=\"STRING\" size=\"256\"/><Column id=\"FALL_TM\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"X_COOR\" type=\"STRING\" size=\"256\"/><Column id=\"Y_COOR\" type=\"INT\" size=\"256\"/><Column id=\"Z_COOR\" type=\"STRING\" size=\"256\"/><Column id=\"CONN_ST\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"POSTURE\" type=\"STRING\" size=\"256\"/><Column id=\"FALL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ACT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BLE_RSSI\" type=\"STRING\" size=\"256\"/><Column id=\"IOT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BAND_TP\" type=\"STRING\" size=\"256\"/><Column id=\"BAND_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CLEAR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"YYYYMMDD\" type=\"STRING\" size=\"256\"/><Column id=\"HHMM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_sex", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_room", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location_all", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_manager", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_band_event_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static60","3","2","150","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("맥박이상처리팝업");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Div("div_cont","0","25",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","30",null,"29","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name","0","2","70","29",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_text("맥박이상일시");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_dementia","252","30","70","29",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_text("이상유형");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_dementia","323","34","120","21",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_innerdataset("ds_nu_band_event_tp");
            obj.set_cssclass("essential");
            obj.set_index("-1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager_nm","444","30","70","29",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_text("처리자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","58",null,"29","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name01","0","58","70","29",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_text("입소자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_name00","71","62","179","21",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name00_01","252","58","70","29",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_text("나이/성별");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name00_00_00","444","58","70","29",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_text("층/생활실");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_name00_00","323","62","120","21",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_name00_00_00","515","62","120","21",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","0","86",null,"79","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name01_00","0","86","70","79",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            obj.set_text("맥박이상\r\n사유 및 조치");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","71","89","564","73",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"170","80","24","6",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"170","80","24","87",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_background("darkgray");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name02","0","30","70","29",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            obj.set_text("처리일시");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 10pt/normal \"Arial\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_name","71","2","132","29",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.div_cont.addChild(obj.name, obj);

            obj = new Calendar("cal_sdate00","71","34","110","21",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Calendar("cal_sdate","180","34","71","21",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_type("spin");
            obj.set_dateformat("HH:mm");
            obj.set_editformat("HH:mm");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_manager_nm","515","35","90","21",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_addr","606","35","21","21",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_background("url(\'imagerc::btn_WF_SearchSmall_P.png\') no-repeat rgba(255,255,255,1)");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",637,240,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cont.form.edt_name","value","ds_list","FALL_TM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.cmb_dementia","value","ds_list","BAND_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.edt_name00","value","ds_list","RES_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.edt_name00_00","value","ds_list","AGE_SEX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.edt_name00_00_00","value","ds_list","AREA_LOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.TextArea00","value","ds_list","BAND_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.cal_sdate","value","ds_list","HHMM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.cal_sdate00","value","ds_list","YYYYMMDD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.edt_manager_nm","value","ds_list","MANAGER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CM_BAND_PP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("CM_BAND_PP.xfdl","lib::pgm_com.xjs");
        this.registerScript("CM_BAND_PP.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;

        //Multi 선택 여부
        this.fv_multiYn = false;
        const fv_companyCd = nexacro.getApplication().gds_userInfo.getColumn(0,"COMPANY_CD");
        const fv_location = this.parent.LOCATION;
        const fv_area = this.parent.AREA;

        this.COMMON_CODE_onload = function (obj, e) {

        	this.form_onload_com(obj, e, false);

        	nexacro.getApplication().gv_curWinKey = "CM_BAND_PP";

        	const fRow = this.ds_nu_band_event_tp.findRowExpr("CMNM.indexOf('저심박') >= 0");
        	const tpCd = this.ds_nu_band_event_tp.getColumn(fRow, "CMCD");

        	this.ds_search.setColumn(0, "COMPANY_CD", fv_companyCd);
        	this.ds_list.setColumn(0,"COMPANY_CD", fv_companyCd);
        	this.ds_list.setColumn(0,"RES_ID", this.parent.RES_ID);
        	this.ds_list.setColumn(0,"RES_NM", this.parent.RES_NM);
        	this.ds_list.setColumn(0,"AGE_SEX", this.parent.AGE);
        	this.ds_list.setColumn(0,"AREA_LOC", this.parent.AREA);
        	this.ds_list.setColumn(0,"FALL_TM",this.parent.DTTM);
        	this.ds_list.setColumn(0,"BAN_TIME",this.parent.TM);
        	this.ds_list.setColumn(0,"YYYYMMDD",Sct.Util.getToday());
        	this.ds_list.setColumn(0,"HHMM",Sct.Util.getHour()+Sct.Util.getMin());
        	this.ds_list.setColumn(0, "MANAGER_ID", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID"));
        	this.ds_list.setColumn(0, "MANAGER_NM", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_NM_KOR"));
        	this.ds_list.setColumn(0, "BAND_TP", tpCd);
        	this.div_cont.form.cal_sdate.set_dateformat("HH:mm");
        	this.div_cont.form.cal_sdate.set_editformat("HH:mm");

        	// 오픈시 처리일시 날짜 선택에 커서 이동
        	this.div_cont.form.cal_sdate00.setFocus();

        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "save")
        		{
        			alert("저장하였습니다.");
        			this.close();
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        // 취소 버튼
        this.div_cont_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	// 필수체크
        	if (!this.gfn_findSnull(this.div_cont))
        		return false;

        	return true;
        };

        // 저장 버튼
        this.div_cont_btn_save_onclick = function(obj,e)
        {
        	if (!this.fn_save_pre())
        		return;

        	const svcId = "save";
        	const inDs = "ds_list";
        	this.fn_save_com(svcId, inDs);
        };

        // 처리자 팝업 호출
        this.fn_addressPop = function(obj,e)
        {
        	const param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_companyCd
        	};
        	Sct.popup(this, "MANAGER_ID", 326, 226, "", param, "CM_POP::CM_MANAGER_PP.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs)
        {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid){
        		case "MANAGER_ID" :
        			this.ds_list.setColumn(this.ds_list.rowposition,"MANAGER_ID",objDs.getColumn(0,"USER_ID"));
        			this.ds_list.setColumn(this.ds_list.rowposition,"MANAGER_NM",objDs.getColumn(0,"USER_NM_KOR"));
        		break;
        	}
        };

        this.div_cont_edt_manager_nm_onkeyup = function(obj,e)
        {
        	if (e.keycode == "13")
        	{
        		this.div_cont.form.btn_addr.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.COMMON_CODE_onload,this);
            this.div_cont.form.btn_save.addEventHandler("onclick",this.div_cont_btn_save_onclick,this);
            this.div_cont.form.btn_close.addEventHandler("onclick",this.div_cont_btn_close_onclick,this);
            this.div_cont.form.edt_manager_nm.addEventHandler("onkeyup",this.div_cont_edt_manager_nm_onkeyup,this);
            this.div_cont.form.btn_addr.addEventHandler("onclick",this.fn_addressPop,this);
        };
        this.loadIncludeScript("CM_BAND_PP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
