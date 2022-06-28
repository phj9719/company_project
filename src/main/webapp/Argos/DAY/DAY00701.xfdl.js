(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00701");
            this.set_titletext("7-1 주야간운영일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"jan\" type=\"STRING\" size=\"256\"/><Column id=\"jan_wd\" type=\"STRING\" size=\"256\"/><Column id=\"jan_c\" type=\"STRING\" size=\"256\"/><Column id=\"feb\" type=\"STRING\" size=\"256\"/><Column id=\"feb_wd\" type=\"STRING\" size=\"256\"/><Column id=\"feb_c\" type=\"STRING\" size=\"256\"/><Column id=\"mar\" type=\"STRING\" size=\"256\"/><Column id=\"mar_wd\" type=\"STRING\" size=\"256\"/><Column id=\"mar_c\" type=\"STRING\" size=\"256\"/><Column id=\"apr\" type=\"STRING\" size=\"256\"/><Column id=\"apr_wd\" type=\"STRING\" size=\"256\"/><Column id=\"apr_c\" type=\"STRING\" size=\"256\"/><Column id=\"may\" type=\"STRING\" size=\"256\"/><Column id=\"may_wd\" type=\"STRING\" size=\"256\"/><Column id=\"may_c\" type=\"STRING\" size=\"256\"/><Column id=\"jun\" type=\"STRING\" size=\"256\"/><Column id=\"jun_wd\" type=\"STRING\" size=\"256\"/><Column id=\"jun_c\" type=\"STRING\" size=\"256\"/><Column id=\"jul\" type=\"STRING\" size=\"256\"/><Column id=\"jul_wd\" type=\"STRING\" size=\"256\"/><Column id=\"jul_c\" type=\"STRING\" size=\"256\"/><Column id=\"aug\" type=\"STRING\" size=\"256\"/><Column id=\"aug_wd\" type=\"STRING\" size=\"256\"/><Column id=\"aug_c\" type=\"STRING\" size=\"256\"/><Column id=\"sep\" type=\"STRING\" size=\"256\"/><Column id=\"sep_wd\" type=\"STRING\" size=\"256\"/><Column id=\"sep_c\" type=\"STRING\" size=\"256\"/><Column id=\"oct\" type=\"STRING\" size=\"256\"/><Column id=\"oct_wd\" type=\"STRING\" size=\"256\"/><Column id=\"oct_c\" type=\"STRING\" size=\"256\"/><Column id=\"nov\" type=\"STRING\" size=\"256\"/><Column id=\"nov_wd\" type=\"STRING\" size=\"256\"/><Column id=\"nov_c\" type=\"STRING\" size=\"256\"/><Column id=\"dec\" type=\"STRING\" size=\"256\"/><Column id=\"dec_wd\" type=\"STRING\" size=\"256\"/><Column id=\"dec_c\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">2021</Col><Col id=\"CMNM\">2021년</Col></Row><Row><Col id=\"CMCD\">2022</Col><Col id=\"CMNM\">2022년</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","32",null,"676","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/></Columns><Rows><Row size=\"21\" band=\"head\"/><Row size=\"21\"/></Rows><Band id=\"head\"><Cell text=\"1월\"/><Cell col=\"1\" text=\"명\"/><Cell col=\"2\" text=\"2월\"/><Cell col=\"3\" text=\"명\"/><Cell col=\"4\" text=\"3월\"/><Cell col=\"5\" text=\"명\"/><Cell col=\"6\" text=\"4월\"/><Cell col=\"7\" text=\"명\"/><Cell col=\"8\" text=\"5월\"/><Cell col=\"9\" text=\"명\"/><Cell col=\"10\" text=\"6월\"/><Cell col=\"11\" text=\"명\"/><Cell col=\"12\" text=\"7월\"/><Cell col=\"13\" text=\"명\"/><Cell col=\"14\" text=\"8월\"/><Cell col=\"15\" text=\"명\"/><Cell col=\"16\" text=\"9월\"/><Cell col=\"17\" text=\"명\"/><Cell col=\"18\" text=\"10월\"/><Cell col=\"19\" text=\"명\"/><Cell col=\"20\" text=\"11월\"/><Cell col=\"21\" text=\"명\"/><Cell col=\"22\" text=\"12월\"/><Cell col=\"23\" text=\"명\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" cursor=\"pointer\" expandchar=\"dotd\" text=\"bind:jan\"/><Cell col=\"1\" text=\"bind:jan_c\"/><Cell col=\"2\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dotd\" text=\"bind:feb\"/><Cell col=\"3\" text=\"bind:feb_c\"/><Cell col=\"4\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dotd\" text=\"bind:mar\"/><Cell col=\"5\" text=\"bind:mar_c\"/><Cell col=\"6\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dotd\" text=\"bind:apr\"/><Cell col=\"7\" text=\"bind:apr_c\"/><Cell col=\"8\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dotd\" text=\"bind:may\"/><Cell col=\"9\" text=\"bind:may_c\"/><Cell col=\"10\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dotd\" text=\"bind:jun\"/><Cell col=\"11\" text=\"bind:jun_c\"/><Cell col=\"12\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dotd\" text=\"bind:jul\"/><Cell col=\"13\" text=\"bind:jul_c\"/><Cell col=\"14\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dotd\" text=\"bind:aug\"/><Cell col=\"15\" text=\"bind:aug_c\"/><Cell col=\"16\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dotd\" text=\"bind:sep\"/><Cell col=\"17\" text=\"bind:sep_c\"/><Cell col=\"18\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dotd\" text=\"bind:oct\"/><Cell col=\"19\" text=\"bind:oct_c\"/><Cell col=\"20\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dotd\" text=\"bind:nov\"/><Cell col=\"21\" text=\"bind:nov_c\"/><Cell col=\"22\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dotd\" text=\"bind:dec\"/><Cell col=\"23\" text=\"bind:dec_c\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","6","3","250","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("2022년 주야간 운영일지");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_remark","grd_list:-1878","grd_list:2","300","16",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("▲ 운영일지 작성, 조회시 운영일자 \'더블클릭 ! \'");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_year","10","5","90","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"5","70","25","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","112","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","225","5","15","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","240","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","470","0","860","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_today","0","5","90","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("오늘일지");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_daily_search","100","5","110","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("업무내용검색");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_reportMon","220","5","185","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("주야간운영일지 출력(월)");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cmb_year","value","ds_search","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_date_from","value","ds_search","DATE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_to","value","ds_search","DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00701.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00701.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00701.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00701
         * 화면명   	: 7-1 주야간운영일지
         * 화면설명 	: 주야간 운영일지 작성여부를 확인하는 화면
         * 작성일   	: 2022-03-16
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2022-04-07		조기종		단위테스트 오류 수정
         ***********************************************************************
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.grd_list;
        this.reSearchData = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 현재 년도 구하기
        	const date = new Date();
        	const year = date.getFullYear();

        	// 년도 콤보박스 세팅
        	this.ds_year.clearData();
        	let nRow;
        	for (let i = 10; i > 0; i--)
        	{
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year - i);
        		this.ds_year.setColumn(nRow, "CMNM", (year - i) + "년");
        	}
        	for (let i = 0; i < 11; i++)
        	{
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year + i);
        		this.ds_year.setColumn(nRow, "CMNM", (year + i) + "년");
        	}

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "YEAR", year);
        	this.ds_search.setColumn(0, "DATE_FROM", year + '0101');
        	this.ds_search.setColumn(0, "DATE_TO", year + '1231');

        	// 오픈시 조회
        	this.fn_search();
        };

        // 그리드 css 적용
        this.initGrid = function(grid)
        {
        	// 토요일 파란색, 일요일 빨간색
        	const monArr = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
        	for (let i = 0; i < monArr.length; i++)
        	{
        		const monIdx = grid.getBindCellIndex("body", monArr[i]);
        		const monCss = "expr:dataset.getColumn(currow, '" + monArr[i] + "_wd') == '6' ? 'BlueFontCell' : "
        					 + "dataset.getColumn(currow, '" + monArr[i] + "_wd') == '0' ? 'RedFontCell' : ''";

        		grid.setCellProperty("body", monIdx, "cssclass", monCss);
        	}
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	// 검색조건 필수 체크 (컴포넌트 tooltiptext 값 넣을 것)
        	if (!this.gfn_findSnull(this.div_search)) return false;

        	return true;
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function ()
        {
        	//validation
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00701.DAY00701_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			// 그리드 제목 년도 세팅
        			const year = this.ds_search.getColumn(0, "YEAR");
        			const gTitleStr = year + "년 주야간운영일지";
        			this.div_cont.form.sta_subTitle.set_text(gTitleStr);

        			// 그리드 css 적용
        			this.initGrid(this.div_cont.form.grd_list);
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        		return false;
        	}
        };
        /***********************************************************************
         * User Functions
         ***********************************************************************/

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 업무내용 검색
        this.div_func_btn_daily_search_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : fv_sicode
        		,	YEAR : this.ds_search.getColumn(0, "YEAR")
        		,	DATE_FROM : this.ds_search.getColumn(0, "DATE_FROM")
        		,	DATE_TO : this.ds_search.getColumn(0, "DATE_TO")
        	};

        	Sct.popup(this, "daily", 450, 400, "", param, "DAY_POP::DAY00701_P03.xfdl", "fn_popCallback");
        };

        // 오늘일지
        this.div_func_btn_today_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : fv_sicode
        		,	DATE : new Date()
        	};

        	Sct.popup(this, "today", 450, 400, "7-1 주야간운영일지", param, "DAY_POP::DAY00701_P01.xfdl", "fn_popCallback");
        };

        // 주야간운영일지 출력(월)
        this.div_func_btn_reportMon_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : fv_sicode
        		,	DATE : new Date()
        	};

        	Sct.popup(this, "Mon", 450, 400, "", param, "DAY_POP::DAY00701_P04.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if (popid != "today" && popid != "record")
        	{
        		if(Sct.Util.isEmpty(strDs)) return;
        	}
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "record" :
        		case "today" :
        			this.fn_search();
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };

        // 조회조건 년도 값 변경 이벤트
        this.div_search_cmb_year_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "DATE_FROM", e.postvalue + '0101');
        	this.ds_search.setColumn(0, "DATE_TO", e.postvalue + '1231');

        	// 값 변경시 조회
        	this.fn_search();
        };

        // 그리드 셀 더블클릭 이벤트
        this.div_cont_grd_list_oncelldblclick = function(obj,e)
        {
        	const janIdx = obj.getBindCellIndex("body", "jan");
        	const febIdx = obj.getBindCellIndex("body", "feb");
        	const marIdx = obj.getBindCellIndex("body", "mar");
        	const aprIdx = obj.getBindCellIndex("body", "apr");
        	const mayIdx = obj.getBindCellIndex("body", "may");
        	const junIdx = obj.getBindCellIndex("body", "jun");
        	const julIdx = obj.getBindCellIndex("body", "jul");
        	const augIdx = obj.getBindCellIndex("body", "aug");
        	const sepIdx = obj.getBindCellIndex("body", "sep");
        	const octIdx = obj.getBindCellIndex("body", "oct");
        	const novIdx = obj.getBindCellIndex("body", "nov");
        	const decIdx = obj.getBindCellIndex("body", "dec");

        	if (e.col == janIdx
        		|| e.col == febIdx
        		|| e.col == marIdx
        		|| e.col == aprIdx
        		|| e.col == mayIdx
        		|| e.col == junIdx
        		|| e.col == julIdx
        		|| e.col == augIdx
        		|| e.col == sepIdx
        		|| e.col == octIdx
        		|| e.col == novIdx
        		|| e.col == decIdx)
        	{
        		if (Sct.Util.isEmpty(obj.getCellPropertyValue(e.row, e.col, "text")))
        			return false;
        		const param = {
        				SICODE : fv_sicode
        			,	DATE : new Date(obj.getCellPropertyValue(e.row, e.col, "text"))
        		};

        		Sct.popup(this, "record", 450, 400, "7-1 주야간운영일지", param, "DAY_POP::DAY00701_P01.xfdl", "fn_popCallback");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.grd_list.addEventHandler("oncelldblclick",this.div_cont_grd_list_oncelldblclick,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.div_search_cmb_year_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_func.form.btn_today.addEventHandler("onclick",this.div_func_btn_today_onclick,this);
            this.div_func.form.btn_daily_search.addEventHandler("onclick",this.div_func_btn_daily_search_onclick,this);
            this.div_func.form.btn_reportMon.addEventHandler("onclick",this.div_func_btn_reportMon_onclick,this);
        };
        this.loadIncludeScript("DAY00701.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
