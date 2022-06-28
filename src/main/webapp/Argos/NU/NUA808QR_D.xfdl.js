(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUA808QR_D");
            this.set_titletext("기저귀 이상상태현황모니터링조회");
            this.set_background("#f4f9fc");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"MON_AREA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mon_area", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_NOW\" type=\"STRING\" size=\"256\"/><Column id=\"BATTERY\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"B_HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"BAT_RATE\" type=\"INT\" size=\"256\"/><Column id=\"CONN_ST\" type=\"INT\" size=\"256\"/><Column id=\"CONNECT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_left_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_NOW\" type=\"STRING\" size=\"256\"/><Column id=\"BATTERY\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"B_HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"BAT_RATE\" type=\"INT\" size=\"256\"/><Column id=\"CONN_ST\" type=\"STRING\" size=\"256\"/><Column id=\"CONNECT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_right_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_NOW\" type=\"STRING\" size=\"256\"/><Column id=\"BATTERY\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"B_HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"BAT_RATE\" type=\"INT\" size=\"256\"/><Column id=\"CONN_ST\" type=\"STRING\" size=\"256\"/><Column id=\"CONNECT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_diaper_iot", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_etc_list", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_ALL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_LINE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_mon_cycle", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/><Column id=\"STR4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_temp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_NOW\" type=\"STRING\" size=\"256\"/><Column id=\"BATTERY\" type=\"STRING\" size=\"256\"/><Column id=\"HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"B_HUMI_RATE\" type=\"INT\" size=\"256\"/><Column id=\"BAT_RATE\" type=\"INT\" size=\"256\"/><Column id=\"CONN_ST\" type=\"INT\" size=\"256\"/><Column id=\"CONNECT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("dragscrolltype").set("vert");
            obj.set_cssclass("s01");
            obj.set_background("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("sta_area","28.67%","12","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("모니터링 지역");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_color("#ffffff");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","sta_area:10","12","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_codecolumn("ARE_CD");
            obj.set_datacolumn("ARE_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_mon_area");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"10","80","24","10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("닫기");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_location","cmb_area:6","12","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("#ffffff");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","sta_location:5","12","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("ARE_CD");
            obj.set_datacolumn("ARE_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_area");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search","cmb_location:8","10","60","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_mainTitle","8","0","28.17%","45",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("모니터링 시스템");
            obj.set_color("#ffffff");
            obj.set_font("normal 700 18pt/normal \"Noto Sans KR\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0%","50",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_humiCard","1.27%","9.23%","26%","27.44%",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_card");
            this.div_cont.addChild(obj.name, obj);

            obj = new ImageViewer("imv_ico","5.41%","7.11%","18.04%","35.53%",null,null,null,null,null,null,this.div_cont.form.div_humiCard.form);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::ico_sta_diaper2.png\')");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_stretch("fixaspectratio");
            this.div_cont.form.div_humiCard.addChild(obj.name, obj);

            obj = new Static("sta_count","60.57%","12","20.62%","80",null,null,null,null,null,null,this.div_cont.form.div_humiCard.form);
            obj.set_taborder("1");
            obj.set_text("-");
            obj.set_font("normal 700 50pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("right");
            obj.set_color("#fb8c35");
            this.div_cont.form.div_humiCard.addChild(obj.name, obj);

            obj = new Static("sta_diaperAllCount","81.19%","50","63","40",null,null,null,null,null,null,this.div_cont.form.div_humiCard.form);
            obj.set_taborder("2");
            obj.set_text("/-");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            obj.set_color("#cacaca");
            this.div_cont.form.div_humiCard.addChild(obj.name, obj);

            obj = new Static("sta_title","5.41%","51.78%","43.81%","18.87%",null,null,null,null,null,null,this.div_cont.form.div_humiCard.form);
            obj.set_taborder("3");
            obj.set_text("기저귀 확인");
            obj.set_font("normal 700 23pt/normal \"Noto Sans KR\"");
            obj.set_color("#fb8c35");
            this.div_cont.form.div_humiCard.addChild(obj.name, obj);

            obj = new Static("sta_text","5.67%","70.05%","87.37%","22.84%",null,null,null,null,null,null,this.div_cont.form.div_humiCard.form);
            obj.set_taborder("4");
            obj.set_text("기저귀를 교환하면 현황에서 없어집니다.");
            obj.set_wordWrap("char");
            obj.set_font("normal 500 16pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_humiCard.addChild(obj.name, obj);

            obj = new Div("div_batCard","1.27%","37.56%","26%","27.44%",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_card");
            this.div_cont.addChild(obj.name, obj);

            obj = new ImageViewer("imv_ico","5.41%","7.11%","18.04%","35.53%",null,null,null,null,null,null,this.div_cont.form.div_batCard.form);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::ico_sta_battery2.png\')");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_stretch("fixaspectratio");
            this.div_cont.form.div_batCard.addChild(obj.name, obj);

            obj = new Static("sta_count","60.57%","12","20.62%","80",null,null,null,null,null,null,this.div_cont.form.div_batCard.form);
            obj.set_taborder("1");
            obj.set_text("-");
            obj.set_font("normal 700 50pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("right");
            obj.set_color("#159258");
            this.div_cont.form.div_batCard.addChild(obj.name, obj);

            obj = new Static("sta_diaperAllCount","81.19%","50","63","40",null,null,null,null,null,null,this.div_cont.form.div_batCard.form);
            obj.set_taborder("2");
            obj.set_text("/-");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            obj.set_color("#cacaca");
            this.div_cont.form.div_batCard.addChild(obj.name, obj);

            obj = new Static("sta_title","5.41%","51.78%","43.81%","18.87%",null,null,null,null,null,null,this.div_cont.form.div_batCard.form);
            obj.set_taborder("3");
            obj.set_text("배터리 확인");
            obj.set_font("normal 700 23pt/normal \"Noto Sans KR\"");
            obj.set_color("#159258");
            this.div_cont.form.div_batCard.addChild(obj.name, obj);

            obj = new Static("sta_text","5.67%","70.05%","87.37%","22.84%",null,null,null,null,null,null,this.div_cont.form.div_batCard.form);
            obj.set_taborder("4");
            obj.set_text("기저귀 배터리가 교환되면 현황에서 없어집니다. ");
            obj.set_wordWrap("char");
            obj.set_font("normal 500 16pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_batCard.addChild(obj.name, obj);

            obj = new Div("div_connCard","1.27%","66.15%","26.00%","27.56%",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_card");
            this.div_cont.addChild(obj.name, obj);

            obj = new ImageViewer("imv_ico","5.41%","7.11%","18.04%","35.53%",null,null,null,null,null,null,this.div_cont.form.div_connCard.form);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::ico_sta_diapercon2.png\')");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_stretch("fixaspectratio");
            this.div_cont.form.div_connCard.addChild(obj.name, obj);

            obj = new Static("sta_count","60.57%","12","20.62%","80",null,null,null,null,null,null,this.div_cont.form.div_connCard.form);
            obj.set_taborder("1");
            obj.set_text("-");
            obj.set_font("normal 700 50pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("right");
            obj.set_color("#666666");
            this.div_cont.form.div_connCard.addChild(obj.name, obj);

            obj = new Static("sta_diaperAllCount","81.19%","50","63","40",null,null,null,null,null,null,this.div_cont.form.div_connCard.form);
            obj.set_taborder("2");
            obj.set_text("/-");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            obj.set_color("#cacaca");
            this.div_cont.form.div_connCard.addChild(obj.name, obj);

            obj = new Static("sta_title","5.41%","51.78%","43.81%","18.87%",null,null,null,null,null,null,this.div_cont.form.div_connCard.form);
            obj.set_taborder("3");
            obj.set_text("미체결 확인");
            obj.set_font("normal 700 23pt/normal \"Noto Sans KR\"");
            obj.set_color("#666666");
            this.div_cont.form.div_connCard.addChild(obj.name, obj);

            obj = new Static("sta_text","5.67%","70.05%","87.37%","22.84%",null,null,null,null,null,null,this.div_cont.form.div_connCard.form);
            obj.set_taborder("4");
            obj.set_text("기저귀센서를 체결하면 현황에서 없어집니다. ");
            obj.set_wordWrap("char");
            obj.set_font("normal 500 16pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_connCard.addChild(obj.name, obj);

            obj = new Static("sta_exchangeTitle","1.27%","15","26%","6.41%",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("기저귀 교환 현황");
            obj.set_font("normal 700 18pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            obj.set_color("#ffffff");
            obj.set_background("#47afe1");
            obj.set_borderRadius("10px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_left","28.93%","15","34%",null,null,"6.28%",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_DataList_h2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_left_list");
            obj.set_useselcolor("false");
            obj.set_autosizingtype("none");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"41\"/></Rows><Band id=\"head\"><Cell text=\"층/호실\"/><Cell col=\"1\" text=\"입소자\"/><Cell col=\"2\" text=\"기저귀(5분전)\"/><Cell col=\"3\" text=\"배터리\"/><Cell col=\"4\" text=\"체결상태\"/></Band><Band id=\"body\"><Cell text=\"bind:LOCATION\"/><Cell col=\"1\" text=\"bind:RESIDENT\"/><Cell col=\"2\" text=\"bind:DIAPER_NOW\"/><Cell col=\"3\" text=\"bind:BATTERY\"/><Cell col=\"4\" text=\"bind:CONNECT\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_right","64.27%","15","34%",null,null,"6.28%",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_DataList_h2");
            obj.set_binddataset("ds_right_list");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"41\"/></Rows><Band id=\"head\"><Cell text=\"층/호실\"/><Cell col=\"1\" text=\"입소자\"/><Cell col=\"2\" text=\"기저귀(5분전)\"/><Cell col=\"3\" text=\"배터리\"/><Cell col=\"4\" text=\"체결상태\"/></Band><Band id=\"body\"><Cell text=\"bind:LOCATION\"/><Cell col=\"1\" text=\"bind:RESIDENT\"/><Cell col=\"2\" text=\"bind:DIAPER_NOW\"/><Cell col=\"3\" text=\"bind:BATTERY\"/><Cell col=\"4\" text=\"bind:CONNECT\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_paging","25",null,null,"30","682","7",null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_url("CM_POP::CM_PAGING_DIV.xfdl");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1500,830,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_search.form.cmb_area","value","ds_search","MON_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cmb_location","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM_POP::CM_PAGING_DIV.xfdl");
        };
        
        // User Script
        this.addIncludeScript("NUA808QR_D.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA808QR_D.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA808QR_D.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: NUA808QR_D
         * 화면명   	: 기저귀 이상상태현황모니터링조회
         * 화면설명 	: 기저귀의 이상상태를 나타내는 모니터링 화면
         * 작성일   	: 2021-12-21 09:20
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *  수정일				수정자			내용
         *
         ***********************************************************************
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_companyCd = nexacro.getApplication().gds_userInfo.getColumn(0,"COMPANY_CD");
        this.timeCycle = 0;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.NUA808QR_D_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.setColumn(0, "COMPANY_CD", fv_companyCd);

        	this.fn_initPageSet();

        	this.fn_setComboDs(obj);

        	this.timeCycle = this.ds_nu_mon_cycle.getColumn(1, "STR1") * 1000;

        	this.fn_search();

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.cmb_area.setFocus();
        };

        // 타이머
        this.NUA808QR_D_ontimer = function(obj,e)
        {
        	if(e.timerid == 1)
        	{
        		// 페이징 순차적으로 검색되게 하기
        		this.div_cont.form.div_paging.form.fn_autoSearch("Y");
        	}
        };

        // 페이징 처리 초기화
        this.fn_initPageSet = function()
        {
        	// 페이징처리 초기화
        	this.ds_list.pageRowCount		= 38;								//조회될 row 갯수 (page Size)
            this.ds_list.pageCount			= 10;								//최대 페이지 갯수 (page Scale)
            this.ds_list.pageTotalVisible	= false;							//하단 page Size, pageScale 등 입력 div show YN
        	this.ds_list.pageNo				= 1;								//최초조회시 default 페이지 번호
        	this.ds_list.pageFunctionName	= "fn_search";						//페이지 버튼(1,2,3...)클릭시 조회할 function name
        	this.div_cont.form.div_paging.form.fn_init(this, this.ds_list);		//페이지 form 초기화

        };

        // 기저귀 그리드 css 변경
        this.fn_initGrid = function(grid, humiLine, batteryLine)
        {
        	const diaperIdx = grid.getBindCellIndex("body", "DIAPER_NOW");
        	const batteryIdx = grid.getBindCellIndex("body", "BATTERY");
        	const connIdx = grid.getBindCellIndex("body", "CONNECT");

        	const diaperCss = "expr:dataset.getColumn(currow, 'HUMI_RATE') >= "
        					+ humiLine
        					+ " && dataset.getColumn(currow, 'B_HUMI_RATE') >="
        					+ humiLine
        					+ " ? 'diaperHumiAlert' : ''";

        	const batteryCss = "expr:dataset.getColumn(currow, 'BAT_RATE') < " + batteryLine + " ? 'diaperBatAlert' : ''";

        	const connCss = "expr:dataset.getColumn(currow, 'CONN_ST') != 1 ? 'dipaerConnAlert' : ''";

        	grid.setCellProperty("body", diaperIdx, "cssclass", diaperCss);		// 기저귀 습도 이상
        	grid.setCellProperty("body", batteryIdx, "cssclass", batteryCss);	// 기저귀 배터리 이상
        	grid.setCellProperty("body", connIdx, "cssclass", connCss);			// 기저귀 연결 이상
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 검색
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/NUA808QR_DController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1 ds_etc_list=output2 ds_list_temp=output3";
        	const argument = "method=select ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			this.killTimer(1);
        			const companyNm = this.ds_etc_list.getColumn(0, "COMPANY_NM");	// 업체명
        			const diaperAllCount = this.ds_etc_list.getColumn(0, "DIAPER_ALL_COUNT");	// 기저귀 총 개수
        			const humiLine = this.ds_etc_list.getColumn(0, "HUMI_LINE");	// 기저귀 습도 알림 기준
        			const batteryLine = this.ds_etc_list.getColumn(0, "BAT_LINE");	// 기저귀 배터리 알림 기준
        			const diaperHumiRowCnt = this.ds_list_temp.getCaseCount("HUMI_RATE >= " + humiLine +  "&& B_HUMI_RATE >= " + humiLine);	// 기저귀 습도 이상 개수
        			const diaperBatRowCnt = this.ds_list_temp.getCaseCount("BAT_RATE < " + batteryLine);	// 기저귀 배터리 이상 개수
        			const diaperConnCnt = this.ds_list_temp.getCaseCount("CONN_ST != 1");	// 기저귀 미체결 개수

        			// 업체명 기저귀 총 개수 세팅
        			this.div_search.form.sta_mainTitle.set_text(companyNm + " 모니터링 시스템");
        			const diaperCountText = diaperAllCount == undefined ? 0 : diaperAllCount;
        			this.div_cont.form.div_humiCard.form.sta_diaperAllCount.set_text("/" + diaperCountText);
        			this.div_cont.form.div_batCard.form.sta_diaperAllCount.set_text("/" + diaperCountText);
        			this.div_cont.form.div_connCard.form.sta_diaperAllCount.set_text("/" + diaperCountText);

        			// 이상상태 개수 세팅
        			this.div_cont.form.div_humiCard.form.sta_count.set_text(diaperHumiRowCnt);
        			this.div_cont.form.div_batCard.form.sta_count.set_text(diaperBatRowCnt);
        			this.div_cont.form.div_connCard.form.sta_count.set_text(diaperConnCnt);

        			// 페이징 및 그리드 나누기
        			this.ds_left_list.clearData();
        			this.ds_right_list.clearData();

        			this.div_cont.form.div_paging.form.fn_callAfter();
        			// 데이터셋 내용 2개의 그리드에 나눠서 표시
        			for (let i = 0; i < this.ds_list.rowcount; i++)
        			{
        				if (i % 2 == 0)
        				{
        					const lRow = this.ds_left_list.addRow();
        					this.ds_left_list.copyRow(lRow, this.ds_list, i);
        				}
        				else
        				{
        					const rRow = this.ds_right_list.addRow();
        					this.ds_right_list.copyRow(rRow, this.ds_list, i);
        				}
        			}
        			this.ds_left_list.applyChange();
        			this.ds_right_list.applyChange();

        			// 그리드 초기화
        			this.fn_initGrid(this.div_cont.form.grd_left, humiLine, batteryLine);
        			this.fn_initGrid(this.div_cont.form.grd_right, humiLine, batteryLine);

        			this.setTimer(1, this.timeCycle);
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 콤보 세팅
        this.fn_setComboDs = function(obj)
        {
        	const comboDsParamArr = [
        			{ outDsName : "ds_area", sqlId : "CM_MONITOR_PP.CM_MOTITOR_PP_DS_AREA_S",param : {COMPANY_CD : fv_companyCd}, bEmptyRow : true} // 층 조회
        		, 	{ outDsName : "ds_mon_area", sqlId : "CM_MONITOR_PP.CM_MOTITOR_PP_DS_MON_AREA_S",param : {COMPANY_CD : fv_companyCd}, bEmptyRow : true} // 생활실 전체 조회
        	];
        	this.gfn_setComboDs(obj, comboDsParamArr);
        };

        // 검색조건 모니터링 지역 콤보박스 변경 이벤트
        this.div_search_cmb_area_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "AREA", "");
        };

        // 검색조건 층 콤보박스 변경 이벤트
        this.div_search_cmb_location_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "MON_AREA", "");
        };

        // 검색 버튼
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        // 닫기 버튼
        this.div_search_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.NUA808QR_D_ontimer,this);
            this.addEventHandler("onload",this.NUA808QR_D_onload,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.div_search_cmb_area_onitemchanged,this);
            this.div_search.form.btn_close.addEventHandler("onclick",this.div_search_btn_close_onclick,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.div_search_cmb_location_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.div_search_btn_search_onclick,this);
            this.div_cont.form.div_connCard.addEventHandler("onclick",this.Common_onclick,this);
            this.div_cont.form.div_paging.addEventHandler("onclick",this.div_cont_div_paging_onclick,this);
        };
        this.loadIncludeScript("NUA808QR_D.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
