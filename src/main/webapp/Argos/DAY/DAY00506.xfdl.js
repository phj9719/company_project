(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00506");
            this.set_titletext("5-6 직원근무일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"jan\" type=\"STRING\" size=\"256\"/><Column id=\"jan_wd\" type=\"STRING\" size=\"256\"/><Column id=\"jan_c\" type=\"STRING\" size=\"256\"/><Column id=\"jan_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"jan_day\" type=\"STRING\" size=\"256\"/><Column id=\"feb\" type=\"STRING\" size=\"256\"/><Column id=\"feb_wd\" type=\"STRING\" size=\"256\"/><Column id=\"feb_c\" type=\"STRING\" size=\"256\"/><Column id=\"feb_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"feb_day\" type=\"STRING\" size=\"256\"/><Column id=\"mar\" type=\"STRING\" size=\"256\"/><Column id=\"mar_wd\" type=\"STRING\" size=\"256\"/><Column id=\"mar_c\" type=\"STRING\" size=\"256\"/><Column id=\"mar_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"mar_day\" type=\"STRING\" size=\"256\"/><Column id=\"apr\" type=\"STRING\" size=\"256\"/><Column id=\"apr_wd\" type=\"STRING\" size=\"256\"/><Column id=\"apr_c\" type=\"STRING\" size=\"256\"/><Column id=\"apr_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"apr_day\" type=\"STRING\" size=\"256\"/><Column id=\"may\" type=\"STRING\" size=\"256\"/><Column id=\"may_wd\" type=\"STRING\" size=\"256\"/><Column id=\"may_c\" type=\"STRING\" size=\"256\"/><Column id=\"may_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"may_day\" type=\"STRING\" size=\"256\"/><Column id=\"jun\" type=\"STRING\" size=\"256\"/><Column id=\"jun_wd\" type=\"STRING\" size=\"256\"/><Column id=\"jun_c\" type=\"STRING\" size=\"256\"/><Column id=\"jun_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"jun_day\" type=\"STRING\" size=\"256\"/><Column id=\"jul\" type=\"STRING\" size=\"256\"/><Column id=\"jul_wd\" type=\"STRING\" size=\"256\"/><Column id=\"jul_c\" type=\"STRING\" size=\"256\"/><Column id=\"jul_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"jul_day\" type=\"STRING\" size=\"256\"/><Column id=\"aug\" type=\"STRING\" size=\"256\"/><Column id=\"aug_wd\" type=\"STRING\" size=\"256\"/><Column id=\"aug_c\" type=\"STRING\" size=\"256\"/><Column id=\"aug_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"aug_day\" type=\"STRING\" size=\"256\"/><Column id=\"sep\" type=\"STRING\" size=\"256\"/><Column id=\"sep_wd\" type=\"STRING\" size=\"256\"/><Column id=\"sep_c\" type=\"STRING\" size=\"256\"/><Column id=\"sep_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"sep_day\" type=\"STRING\" size=\"256\"/><Column id=\"oct\" type=\"STRING\" size=\"256\"/><Column id=\"oct_wd\" type=\"STRING\" size=\"256\"/><Column id=\"oct_c\" type=\"STRING\" size=\"256\"/><Column id=\"oct_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"oct_day\" type=\"STRING\" size=\"256\"/><Column id=\"nov\" type=\"STRING\" size=\"256\"/><Column id=\"nov_wd\" type=\"STRING\" size=\"256\"/><Column id=\"nov_c\" type=\"STRING\" size=\"256\"/><Column id=\"nov_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"nov_day\" type=\"STRING\" size=\"256\"/><Column id=\"dec\" type=\"STRING\" size=\"256\"/><Column id=\"dec_wd\" type=\"STRING\" size=\"256\"/><Column id=\"dec_c\" type=\"STRING\" size=\"256\"/><Column id=\"dec_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"dec_day\" type=\"STRING\" size=\"256\"/><Column id=\"근무일\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">2021</Col><Col id=\"CMNM\">2021년</Col></Row><Row><Col id=\"CMCD\">2022</Col><Col id=\"CMNM\">2022년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_date","0","0","1850","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("year","0","10","100","25",null,null,null,null,null,null,this.div_date.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_text("0");
            obj.set_value("");
            obj.set_index("-1");
            this.div_date.addChild(obj.name, obj);

            obj = new Calendar("cal_00","105","10","110","25",null,null,null,null,null,null,this.div_date.form);
            obj.set_taborder("1");
            obj.set_buttonsize("0");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.div_date.addChild(obj.name, obj);

            obj = new Calendar("cal_01","235","10","110","25",null,null,null,null,null,null,this.div_date.form);
            obj.set_taborder("2");
            obj.set_buttonsize("0");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_editformat("yyyy-MM-dd");
            this.div_date.addChild(obj.name, obj);

            obj = new Static("sta_00","220","10","10","25",null,null,null,null,null,null,this.div_date.form);
            obj.set_taborder("3");
            obj.set_text("~");
            this.div_date.addChild(obj.name, obj);

            obj = new Button("btn_search","350","10","70","25",null,null,null,null,null,null,this.div_date.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_date.addChild(obj.name, obj);

            obj = new Div("div_grid","0","40","1850","760",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd","0","25","1850","735",null,null,null,null,null,null,this.div_grid.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"150\"/><Cell col=\"2\" colspan=\"2\" expandimage=\"url('theme://images/ico_search.png')\" expandsize=\"150\" expandshow=\"show\"/><Cell col=\"4\" colspan=\"2\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"150\"/><Cell col=\"6\" colspan=\"2\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"150\"/><Cell col=\"8\" colspan=\"2\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"150\"/><Cell col=\"10\" colspan=\"2\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"150\"/><Cell col=\"12\" colspan=\"2\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"150\"/><Cell col=\"14\" colspan=\"2\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"150\"/><Cell col=\"16\" colspan=\"2\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"150\"/><Cell col=\"18\" colspan=\"2\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"150\"/><Cell col=\"20\" colspan=\"2\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"150\"/><Cell col=\"22\" colspan=\"2\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"150\"/><Cell row=\"1\" text=\"1월\"/><Cell row=\"1\" col=\"1\" text=\"+\"/><Cell row=\"1\" col=\"2\" text=\"2월\"/><Cell row=\"1\" col=\"3\" text=\"+\"/><Cell row=\"1\" col=\"4\" text=\"3월\"/><Cell row=\"1\" col=\"5\" text=\"+\"/><Cell row=\"1\" col=\"6\" text=\"4월\"/><Cell row=\"1\" col=\"7\" text=\"+\"/><Cell row=\"1\" col=\"8\" text=\"5월\"/><Cell row=\"1\" col=\"9\" text=\"+\"/><Cell row=\"1\" col=\"10\" text=\"6월\"/><Cell row=\"1\" col=\"11\" text=\"+\"/><Cell row=\"1\" col=\"12\" text=\"7월\"/><Cell row=\"1\" col=\"13\" text=\"+\"/><Cell row=\"1\" col=\"14\" text=\"8월\"/><Cell row=\"1\" col=\"15\" text=\"+\"/><Cell row=\"1\" col=\"16\" text=\"9월\"/><Cell row=\"1\" col=\"17\" text=\"+\"/><Cell row=\"1\" col=\"18\" text=\"10월\"/><Cell row=\"1\" col=\"19\" text=\"+\"/><Cell row=\"1\" col=\"20\" text=\"11월\"/><Cell row=\"1\" col=\"21\" text=\"+\"/><Cell row=\"1\" col=\"22\" text=\"12월\"/><Cell row=\"1\" col=\"23\" text=\"+\"/></Band><Band id=\"body\"><Cell text=\"bind:jan\" expandchar=\"dotd\" displaytype=\"date\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:jan_c\"/><Cell col=\"2\" text=\"bind:feb\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:feb_c\" cursor=\"pointer\"/><Cell col=\"4\" text=\"bind:mar\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"5\" text=\"bind:mar_c\" cursor=\"pointer\"/><Cell col=\"6\" text=\"bind:apr\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"7\" text=\"bind:apr_c\" cursor=\"pointer\"/><Cell col=\"8\" text=\"bind:may\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"9\" text=\"bind:may_c\" cursor=\"pointer\"/><Cell col=\"10\" text=\"bind:jun\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"11\" text=\"bind:jun_c\" cursor=\"pointer\"/><Cell col=\"12\" text=\"bind:jul\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"13\" text=\"bind:jul_c\" cursor=\"pointer\"/><Cell col=\"14\" text=\"bind:aug\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"15\" text=\"bind:aug_c\" cursor=\"pointer\"/><Cell col=\"16\" text=\"bind:sep\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"17\" text=\"bind:sep_c\" cursor=\"pointer\"/><Cell col=\"18\" text=\"bind:oct\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"19\" text=\"bind:oct_c\" cursor=\"pointer\"/><Cell col=\"20\" text=\"bind:nov\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"21\" text=\"bind:nov_c\" cursor=\"pointer\"/><Cell col=\"22\" text=\"bind:dec\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"23\" text=\"bind:dec_c\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.div_grid.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0","150","25",null,null,null,null,null,null,this.div_grid.form);
            obj.set_taborder("1");
            obj.set_text("직원근무일지");
            obj.set_cssclass("lb01");
            this.div_grid.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,1920,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_date.form.cal_00","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_date.form.cal_01","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_date.form.year","value","ds_search","year");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00506.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00506.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00506.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00506
         * 화면명   	: 5-06 직원근무일지
         * 화면설명 	:
         * 작성일   	:
         * 작성자   	: 이성탄
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
         ***********************************************************************/
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_grid.form.grd;
        this.fv_staff_id = nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid");
        this.fv_staff_name = nexacro.getApplication().gds_userInfo.getColumn(0, "c_name").trim();
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        //const MCODESTR = nexacro.getApplication().gds_userInfo.getColumn(0, "mCodeStr");
        const monArr = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
        //온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	const date = new Date();
        	const year = date.getFullYear();

        	this.ds_year.clearData();
        	let nRow;
        	for (let i = 0; i < 11; i++)
        	{
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year + i);
        		this.ds_year.setColumn(nRow, "CMNM", (year + i), "년");
        	}

        	this.ds_search.setColumn(0, "sicode", fv_sicode)
        	this.ds_search.setColumn(0, "year", year);
        	this.ds_search.setColumn(0, "date_from", year + '0101');
        	this.ds_search.setColumn(0, "date_to", year + '1231');

        	this.fn_setgrid(this.div_grid.form.grd);

        	this.fn_search();
        };


        //그리드 헤드
        this.fn_headgrid = function(grid)
        {
        	for(let i = 0; i< 12; i++){
        		grid.setCellProperty("head", i, "expandchar", String(i+1)+"월 일지");
        	}
        	this.fn_search();
        };

        //그리드 요일별 색상
        this.fn_setgrid = function(grid)
        {
        	for (let i = 0; i < monArr.length; i++){
        		const monIdx = grid.getBindCellIndex("body", monArr[i]);
        		const monIdx2 = grid.getBindCellIndex("body", 'jan');
        		const monCss = "expr:dataset.getColumn(currow, '" + monArr[i] + "_wd') == '6' ? 'BlueFontCell' : "
        					 + "dataset.getColumn(currow, '" + monArr[i] + "_wd') == '0' ? 'RedFontCell' : ''";

        		grid.setCellProperty("body", monIdx, "cssclass", monCss);
        		}
        };


        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        //this.fn_search_pre = function ()
        //{
        	// 검색조건 필수 체크 (컴포넌트 tooltiptext 값 넣을 것)
        //	if (!this.gfn_findSnull(this.div_search)) return false;

        //	return true;
        //};

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function()
        {
        	//validation
        	//if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00506.DAY00506_DS_LIST_S ";

        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			for(let i = 0; i< monArr.length; i++){
        				this.div_grid.form.grd.setCellProperty("head", i, "expandchar", (String(i+1)+"월 - "+ this.ds_list.getColumn(0, monArr[i]+"_cnt")));
        			}
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };


        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        //조회버튼
        this.div_date_btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        //콤보박스
        this.div_date_year_onitemchanged = function(obj,e)
        {

        	this.ds_search.setColumn(0, "date_from", e.postvalue + '0101');
        	this.ds_search.setColumn(0, "date_to", e.postvalue + '1231');

        	this.ds_search("search");
        };

        //월간 근무일지
        this.div_grid.form.grd_onexpandup = function(obj,e)
        {
        	if(e.col == 0
        	   || e.col == 2
        	   || e.col == 4
        	   || e.col == 6
        	   || e.col == 8
        	   || e.col == 10
        	   || e.col == 12
        	   || e.col == 14
        	   || e.col == 16
        	   || e.col == 18
        	   || e.col == 20
        	   || e.col == 22){

        		if(this.ds_list.rowcount < 1){
        			return;
        		}

        		const year = this.ds_year.getColumn(this.ds_year, "CMCD");
        		let month;

        		if(e.col == 0){
        			month = "01"
        		}else if (e.col == 2){
        			month = "02"
        		}else if (e.col == 4){
        			month = "03"
        		}else if (e.col == 6){
        			month = "04"
        		}else if (e.col == 8){
        			month = "05"
        		}else if (e.col == 10){
        			month = "06"
        		}else if (e.col == 12){
        			month = "07"
        		}else if (e.col == 14){
        			month = "08"
        		}else if (e.col == 16){
        			month = "09"
        		}else if (e.col == 18){
        			month = "10"
        		}else if (e.col == 20){
        			month = "11"
        		}else if (e.col == 22){
        			month = "12"
        		}


        		const dateFrom = year + month + "01"
        		const dateTo = Sct.Util.getLastDay(year+month)
        		const param = {
        				SICODE : fv_sicode
        			,	DATE_FROM : dateFrom
        			,   DATE_TO : dateTo
        //			,   MCODESTR : mCodeStr
        		};
        		Sct.popup(this, "monthRecord", 450, 400, "", param, "DAY_POP::DAY00506_P01.xfdl", "fn_popCallback");
        	}
        };

        //근무일지
        this.div_grid.form.grd_oncelldblclick = function(obj,e)
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
        		const date = new Date(obj.getCellPropertyValue(e.row, e.col, "text"));
        		const param = {
        				SICODE : fv_sicode
        			,	DATE : date
        			,	staffid : this.fv_staff_id
        			,	name : this.fv_staff_name
        		};

        		Sct.popup(this, "dayRecord", 450, 400, "", param, "DAY_POP::DAY00506_P02.xfdl", "fn_popCallback");
        	}
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        //팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "dayRecord" :
        			if (objDs.getColumn(0, "REFRESH") == "Y"){
        				this.fn_search();
        			}
        			break;
        		case "monthRecord" :
        			{
        				this.fn_search();
        			}
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_date.form.year.addEventHandler("onitemchanged",this.div_date_year_onitemchanged,this);
            this.div_date.form.btn_search.addEventHandler("onclick",this.div_date_btn_search_onclick,this);
            this.div_grid.form.grd.addEventHandler("onexpandup",this.div_grid.form.grd_onexpandup,this);
            this.div_grid.form.grd.addEventHandler("oncelldblclick",this.div_grid.form.grd_oncelldblclick,this);
        };
        this.loadIncludeScript("DAY00506.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
