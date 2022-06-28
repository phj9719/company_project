(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUB_BAND_EVENT_POP");
            this.set_titletext("처리자 조회 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_band_event", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BAN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_AGE\" type=\"STRING\" size=\"256\"/><Column id=\"BAND_TP\" type=\"STRING\" size=\"256\"/><Column id=\"BAND_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_band_event_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_manager", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_pop_main","0","0","800","600",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#FFFFFF");
            obj.set_borderRadius("20px");
            obj.set_visible("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_title","0","0",null,"70","0",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("0");
            obj.set_text("맥박이상 처리 팝업");
            obj.set_background("#47afe1");
            obj.set_color("#ffffff");
            obj.set_font("normal 700 27pt/normal \"Noto Sans KR\"");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_date","40","108","250","40",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("1");
            obj.set_text("-");
            obj.set_font("normal 500 18pt/normal \"Noto Sans KR\"");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_nameAge","36","140","250","66",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("2");
            obj.set_text("-");
            obj.set_font("normal 700 30pt/normal \"Noto Sans KR\"");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_band_event_tp","39","245","170","40",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("3");
            obj.set_text("맥박이상유형 : ");
            obj.set_cssclass("sta_check");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"515","200","50","190",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_tDefaultSkyblue");
            obj.set_visible("true");
            obj.set_borderRadius("25px");
            obj.set_font("normal 700 18pt/normal \"Noto Sans KR\"");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_close","190","515","200","50",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_cssclass("btn_tDefaultGray");
            obj.set_visible("true");
            obj.set_borderRadius("25px");
            obj.set_font("normal 700 18pt/normal \"Noto Sans KR\"");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_band_desc","39","288","170","40",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("6");
            obj.set_text("사유 및 조치 :");
            obj.set_cssclass("sta_check");
            obj.set_letterSpacing("1.7px");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new TextArea("txa_band_desc","40","330",null,"150","40",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("7");
            obj.set_displaynulltext("낙상사유 및 조치내용을 입력해주세요. (마이크버튼으로 음성 입력 가능)");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_manager","416","113","155","35",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("8");
            obj.set_text("처리자 선택 : ");
            obj.set_cssclass("sta_check");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Combo("cmb_manager","586","104",null,"50","40",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("9");
            obj.set_buttonsize("0 0");
            obj.set_innerdataset("ds_manager");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_font("normal 500 17pt/normal \"Noto Sans KR\"");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Radio("rdo_band_event_tp","220","251","530","40",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("10");
            obj.set_cssclass("sqRadio");
            obj.set_innerdataset("ds_nu_band_event_tp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_rowcount("1");
            obj.set_fittocontents("both");
            obj.set_font("normal 500 18pt/normal \"Noto Sans KR\"");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_tRecord",null,"286","60","36","50",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_tRecord2");
            obj.set_borderRadius("18px");
            this.div_pop_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_pop_main.form.sta_date","text","ds_band_event","BAN_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_pop_main.form.sta_nameAge","text","ds_band_event","NAME_AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_pop_main.form.rdo_band_event_tp","value","ds_band_event","BAND_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_pop_main.form.txa_band_desc","value","ds_band_event","BAND_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_pop_main.form.cmb_manager","value","ds_band_event","MANAGER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB_BAND_EVENT_POP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB_BAND_EVENT_POP.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB_BAND_EVENT_POP.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB_BAND_EVENT_POP.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;

        var fv_Company = this.parent.COMPANY_CD;

        // 온로드
        this.NUB_BAND_EVENT_POP_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	nexacro.getApplication().gv_curWinKey = "NUB_BAND_EVENT_POP";

        	this.ds_nu_band_event_tp.filter("CMCD != null");

        	const dateStr = this.fn_dateString(this.parent.BAND_ALERT_TIME);
        	const nameAge = this.parent.NAME + "(" + this.parent.AGE + ")";
        	const manager = nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID");

        	this.ds_search.setColumn(0, "COMPANY_CD", fv_Company);
        	this.ds_band_event.setColumn(0, "COMPANY_CD", fv_Company);
        	this.ds_band_event.setColumn(0, "BAN_TIME", this.parent.BAND_ALERT_TIME);
        	this.ds_band_event.setColumn(0, "BAN_DT", dateStr);
        	this.ds_band_event.setColumn(0, "RES_ID", this.parent.RES_ID);
        	this.ds_band_event.setColumn(0, "NAME_AGE", nameAge);
        	this.ds_band_event.setColumn(0, "MANAGER_ID", manager);

        	this.fn_setComboDs(obj);

        	this.div_pop_main.form.resetScroll();
        };

        this.fn_setComboDs = function(obj)
        {
        	const comboDsParamArr = [
        		{ outDsName : "ds_manager", sqlId : "NUB_COMMON.NUB_COMMON_DS_MANAGER_S", param : this.ds_search, bEmptyRow : true }
        	];
        	this.gfn_setComboDs(obj, comboDsParamArr);
        };

        this.fn_dateString = function(str)
        {
        	if (Sct.Util.isEmpty(str)) return "";

        	const YYYY = str.substr(0, 4);
        	const MM = str.substr(4, 2);
        	const DD = str.substr(6, 2);
        	const HH = str.substr(8, 2);
        	const mm = str.substr(10, 2);
        	const ss = str.substr(12, 2);
        	const sss = str.substr(15);

        	const dateStr = YYYY + "-" + MM + "-" + DD + " " + HH + ":" + mm + ":" + ss;

        	return dateStr;
        };

        // 디바이스 버튼
        this.NUB_BAND_EVENT_POP_ondevicebuttonup = function(obj,e)
        {
        	// 뒤로가기 버튼
        	if (e.button == 2)
        	{
        		this.close();
        	}
        };

        // 취소 버튼
        this.div_pop_main_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        // 처리자 팝업
        this.div_pop_main_cmb_manager_oneditclick = function(obj,e)
        {
        	const param = {COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")};

        	Sct.tPopup(this, "pop2", 350, 350, param, "TabletPOP::NUB_MANAGER_POP.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "pop2" : // 처리자
        			this.ds_band_event.setColumn(0, "MANAGER_ID", objDs.getColumn(0,"USER_ID"));
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };

        // 음성 입력
        this.div_pop_main_btn_tRecord_onclick = function(obj,e)
        {
        	const param = {arg1 : "1"};
        	const stObj = this.makeStandardObject();
        	if(stObj)
        	{
        		this.standardPlugin.callMethod("VOICE", param);
        	}
        };

        // 안드로이드 네이티브 통신 콜백
        this.on_standardPlugin_callback = function(obj, e)
        {
        	trace("this.on_callback ::: " + e.svcid);
        	trace("this.on_callback ::: " + e.reason);
        	trace("this.on_callback ::: " + e.returnvalue);

        	// STT
        	if(e.svcid == "VOICE1")
        	{
        		if(e.reason == 0)
        		{
        			let rmkValue = this.ds_band_event.getColumn(0, "BAND_DESC");
        			if (rmkValue == undefined)
        			{
        				this.ds_band_event.setColumn(0, "BAND_DESC", e.returnvalue);
        			}
        			else
        			{
        				this.ds_band_event.setColumn(0, "BAND_DESC", rmkValue + " " + e.returnvalue);
        			}
        		}
        	}
        };

        // 저장 버튼
        this.div_pop_main_btn_save_onclick = function(obj,e)
        {
        	const banTp = this.ds_band_event.getColumn(0, "BAND_TP");
        	if (banTp != null && banTp != undefined)
        	{
        		const svcId = "save";
        		const inDs = "ds_band_event";
        		this.fn_save_com(svcId, inDs);
        	}
        	else
        	{
        		alert("맥박이상유형을 선택해주세요");
        	}
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.formClick,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("onload",this.NUB_BAND_EVENT_POP_onload,this);
            this.addEventHandler("ondevicebuttonup",this.NUB_BAND_EVENT_POP_ondevicebuttonup,this);
            this.div_pop_main.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.sta_date.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.sta_nameAge.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.sta_band_event_tp.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.btn_save.addEventHandler("onclick",this.div_pop_main_btn_save_onclick,this);
            this.div_pop_main.form.btn_close.addEventHandler("onclick",this.div_pop_main_btn_close_onclick,this);
            this.div_pop_main.form.sta_band_desc.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.sta_manager.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.cmb_manager.addEventHandler("oneditclick",this.div_pop_main_cmb_manager_oneditclick,this);
            this.div_pop_main.form.btn_tRecord.addEventHandler("onclick",this.div_pop_main_btn_tRecord_onclick,this);
        };
        this.loadIncludeScript("NUB_BAND_EVENT_POP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
