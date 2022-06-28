(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00103");
            this.set_titletext("2-14 감염예방일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"c_staffid\" type=\"STRING\" size=\"256\"/><Column id=\"b_manager\" type=\"STRING\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"DATE\" size=\"256\"/><Column id=\"date_to\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"jan\" type=\"STRING\" size=\"256\"/><Column id=\"jan_wd\" type=\"STRING\" size=\"256\"/><Column id=\"jan_day\" type=\"STRING\" size=\"256\"/><Column id=\"jan_c\" type=\"STRING\" size=\"256\"/><Column id=\"jan_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"feb\" type=\"STRING\" size=\"256\"/><Column id=\"feb_wd\" type=\"STRING\" size=\"256\"/><Column id=\"feb_day\" type=\"STRING\" size=\"256\"/><Column id=\"feb_c\" type=\"STRING\" size=\"256\"/><Column id=\"feb_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"mar\" type=\"STRING\" size=\"256\"/><Column id=\"mar_wd\" type=\"STRING\" size=\"256\"/><Column id=\"mar_day\" type=\"STRING\" size=\"256\"/><Column id=\"mar_c\" type=\"STRING\" size=\"256\"/><Column id=\"mar_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"apr\" type=\"STRING\" size=\"256\"/><Column id=\"apr_wd\" type=\"STRING\" size=\"256\"/><Column id=\"apr_day\" type=\"STRING\" size=\"256\"/><Column id=\"apr_c\" type=\"STRING\" size=\"256\"/><Column id=\"apr_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"may\" type=\"STRING\" size=\"256\"/><Column id=\"may_wd\" type=\"STRING\" size=\"256\"/><Column id=\"may_day\" type=\"STRING\" size=\"256\"/><Column id=\"may_c\" type=\"STRING\" size=\"256\"/><Column id=\"may_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"jun\" type=\"STRING\" size=\"256\"/><Column id=\"jun_wd\" type=\"STRING\" size=\"256\"/><Column id=\"jun_day\" type=\"STRING\" size=\"256\"/><Column id=\"jun_c\" type=\"STRING\" size=\"256\"/><Column id=\"jun_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"jul\" type=\"STRING\" size=\"256\"/><Column id=\"jul_wd\" type=\"STRING\" size=\"256\"/><Column id=\"jul_day\" type=\"STRING\" size=\"256\"/><Column id=\"jul_c\" type=\"STRING\" size=\"256\"/><Column id=\"jul_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"aug\" type=\"STRING\" size=\"256\"/><Column id=\"aug_wd\" type=\"STRING\" size=\"256\"/><Column id=\"aug_day\" type=\"STRING\" size=\"256\"/><Column id=\"aug_c\" type=\"STRING\" size=\"256\"/><Column id=\"aug_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"sep\" type=\"STRING\" size=\"256\"/><Column id=\"sep_wd\" type=\"STRING\" size=\"256\"/><Column id=\"sep_day\" type=\"STRING\" size=\"256\"/><Column id=\"sep_c\" type=\"STRING\" size=\"256\"/><Column id=\"sep_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"oct\" type=\"STRING\" size=\"256\"/><Column id=\"oct_wd\" type=\"STRING\" size=\"256\"/><Column id=\"oct_day\" type=\"STRING\" size=\"256\"/><Column id=\"oct_c\" type=\"STRING\" size=\"256\"/><Column id=\"oct_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"nov\" type=\"STRING\" size=\"256\"/><Column id=\"nov_wd\" type=\"STRING\" size=\"256\"/><Column id=\"nov_day\" type=\"STRING\" size=\"256\"/><Column id=\"nov_c\" type=\"STRING\" size=\"256\"/><Column id=\"nov_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"dec\" type=\"STRING\" size=\"256\"/><Column id=\"dec_wd\" type=\"STRING\" size=\"256\"/><Column id=\"dec_day\" type=\"STRING\" size=\"256\"/><Column id=\"dec_c\" type=\"STRING\" size=\"256\"/><Column id=\"dec_cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","22",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" expandshow=\"show\" expandimage=\"url('theme://images/ico_search.png')\" expandsize=\"160\" cursor=\"pointer\"/><Cell col=\"2\" colspan=\"2\" expandshow=\"show\" expandsize=\"160\" displaytype=\"normal\" edittype=\"none\" expandimage=\"url('theme://images/ico_search.png')\" cursor=\"pointer\"/><Cell col=\"4\" colspan=\"2\" displaytype=\"normal\" edittype=\"none\" expandsize=\"160\" expandshow=\"show\" expandimage=\"url('theme://images/ico_search.png')\" cursor=\"pointer\"/><Cell col=\"6\" colspan=\"2\" displaytype=\"normal\" edittype=\"none\" expandshow=\"show\" expandsize=\"160\" expandimage=\"url('theme://images/ico_search.png')\" cursor=\"pointer\"/><Cell col=\"8\" colspan=\"2\" displaytype=\"normal\" edittype=\"none\" expandshow=\"show\" expandsize=\"160\" expandimage=\"url('theme://images/ico_search.png')\" cursor=\"pointer\"/><Cell col=\"10\" colspan=\"2\" displaytype=\"normal\" edittype=\"none\" expandshow=\"show\" expandsize=\"160\" expandimage=\"url('theme://images/ico_search.png')\" cursor=\"pointer\"/><Cell col=\"12\" colspan=\"2\" displaytype=\"normal\" edittype=\"none\" expandshow=\"show\" expandsize=\"160\" expandimage=\"url('theme://images/ico_search.png')\" cursor=\"pointer\"/><Cell col=\"14\" colspan=\"2\" displaytype=\"normal\" edittype=\"none\" expandshow=\"show\" expandsize=\"160\" expandimage=\"url('theme://images/ico_search.png')\" cursor=\"pointer\"/><Cell col=\"16\" colspan=\"2\" displaytype=\"normal\" edittype=\"none\" expandshow=\"show\" expandsize=\"160\" expandimage=\"url('theme://images/ico_search.png')\" cursor=\"pointer\"/><Cell col=\"18\" colspan=\"2\" displaytype=\"normal\" edittype=\"none\" expandshow=\"show\" expandsize=\"160\" expandimage=\"url('theme://images/ico_search.png')\" cursor=\"pointer\"/><Cell col=\"20\" colspan=\"2\" displaytype=\"normal\" edittype=\"none\" expandshow=\"show\" expandsize=\"160\" expandimage=\"url('theme://images/ico_search.png')\" cursor=\"pointer\"/><Cell col=\"22\" colspan=\"2\" displaytype=\"normal\" edittype=\"none\" expandshow=\"show\" expandsize=\"160\" expandimage=\"url('theme://images/ico_search.png')\" cursor=\"pointer\"/><Cell row=\"1\" text=\"1월\"/><Cell row=\"1\" col=\"1\" text=\"+\"/><Cell row=\"1\" col=\"2\" text=\"2월\"/><Cell row=\"1\" col=\"3\" text=\"+\"/><Cell row=\"1\" col=\"4\" text=\"3월\"/><Cell row=\"1\" col=\"5\" text=\"+\"/><Cell row=\"1\" col=\"6\" text=\"4월\"/><Cell row=\"1\" col=\"7\" text=\"+\"/><Cell row=\"1\" col=\"8\" text=\"5월\"/><Cell row=\"1\" col=\"9\" text=\"+\"/><Cell row=\"1\" col=\"10\" text=\"6월\"/><Cell row=\"1\" col=\"11\" text=\"+\"/><Cell row=\"1\" col=\"12\" text=\"7월\"/><Cell row=\"1\" col=\"13\" text=\"+\"/><Cell row=\"1\" col=\"14\" text=\"8월\"/><Cell row=\"1\" col=\"15\" text=\"+\"/><Cell row=\"1\" col=\"16\" text=\"9월\"/><Cell row=\"1\" col=\"17\" text=\"+\"/><Cell row=\"1\" col=\"18\" text=\"10월\"/><Cell row=\"1\" col=\"19\" text=\"+\"/><Cell row=\"1\" col=\"20\" text=\"11월\"/><Cell row=\"1\" col=\"21\" text=\"+\"/><Cell row=\"1\" col=\"22\" text=\"12월\"/><Cell row=\"1\" col=\"23\" text=\"+\"/></Band><Band id=\"body\"><Cell text=\"bind:jan\" expandchar=\"dotd\" displaytype=\"date\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:jan_c\" cursor=\"pointer\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:feb\" combodataset=\"ds_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:feb_c\" textAlign=\"center\" expandchar=\"dot\" cursor=\"pointer\"/><Cell col=\"4\" text=\"bind:mar\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"5\" text=\"bind:mar_c\" cursor=\"pointer\"/><Cell col=\"6\" text=\"bind:apr\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"7\" text=\"bind:apr_c\" cursor=\"pointer\"/><Cell col=\"8\" text=\"bind:may\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"9\" text=\"bind:may_c\" cursor=\"pointer\"/><Cell col=\"10\" text=\"bind:jun\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"11\" text=\"bind:jun_c\" cursor=\"pointer\"/><Cell col=\"12\" text=\"bind:jul\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"13\" text=\"bind:jul_c\" cursor=\"pointer\"/><Cell col=\"14\" text=\"bind:aug\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"15\" text=\"bind:aug_c\" cursor=\"pointer\"/><Cell col=\"16\" text=\"bind:sep\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"17\" text=\"bind:sep_c\" cursor=\"pointer\"/><Cell col=\"18\" text=\"bind:oct\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"19\" text=\"bind:oct_c\" cursor=\"pointer\"/><Cell col=\"20\" text=\"bind:nov\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"21\" text=\"bind:nov_c\" cursor=\"pointer\"/><Cell col=\"22\" text=\"bind:dec\" cursor=\"pointer\" expandchar=\"dotd\" displaytype=\"date\"/><Cell col=\"23\" text=\"bind:dec_c\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","230","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("감염예방일지");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_subdisc",null,"0","290","26","0",null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("감염예방일지 작성, 조회시 예방일자 \'더블클릭!\'");
            obj.set_color("red");
            obj.set_textAlign("right");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","450","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"5","70","26","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_year","10","5","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","112","5","110","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","240","5","110","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","226","5","10","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","470","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.cmb_year","value","ds_search","year");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cal_date_from","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_to","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00214.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00214.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00214.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00214
         * 화면명   	: 2-14 감염예방일지
         * 화면설명 	:
         * 작성일   	:
         * 작성자   	: 이동관
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
        this.fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        this.fv_staff_id = nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid");
        this.fv_staff_name = nexacro.getApplication().gds_userInfo.getColumn(0, "c_name").trim();
        this.fv_staff_dutyname = nexacro.getApplication().gds_userInfo.getColumn(0, "c_dutyname");
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_list;
        this.reSearchData = "";
        this.searchFlag = "";
        this.fileGroupId = "";
        const monArr = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 현재 년도 구하기
        	const date = new Date();
        	const year = 2022;
        	const thisYear = date.getFullYear();

        	// 년도 콤보박스 세팅 (현재년 기준 ~ 19?20?년 후까지)
        	this.ds_year.set_enableevent(false);
        	this.ds_year.clearData();
        	let nRow;
        	for (let i = 0; i <= (thisYear-year) + 4; i++){
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year + i);
        		this.ds_year.setColumn(nRow, "CMNM", (year + i) + "년");
        	}
        	this.ds_year.set_enableevent(true);

        	// 검색조건 세팅 ds_seerch의 oncolumchage이벤트가 this.initGrid 보다 먼저 실행되는지는 모름 렌덤이면 고쳐야함
        	this.ds_search.setColumn(0, "sicode", this.fv_sicode);
        	this.ds_search.setColumn(0, "year", thisYear);

        	// 그리드 세팅
        	this.initCssGrid(this.div_cont.form.div_left.form.grd_list);

        };

        //그리드 head text 값 설정
        this.initGrid = function(grid)
        {
        	for(let i = 0; i< 12; i++){
        		grid.setCellProperty("head", i, "expandchar", String(i+1)+"월 일지");
        	}
        	this.fn_search();
        };

        //그리드 head 버튼, body 토요일 파란색 일요일 빨간색
        this.initCssGrid = function(grid){

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
        				   + "sqlId=DAY00214.DAY00214_DS_LIST_S ";

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
        			for(let i = 0; i< monArr.length; i++){
        				this.div_cont.form.div_left.form.grd_list.setCellProperty("head", i, "expandchar", (String(i+1)+"월 - "+ this.ds_list.getColumn(0, monArr[i]+"_cnt")));
        			}
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };
        /***********************************************************************
         * User Functions
         ***********************************************************************/

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 팝업 콜백
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
        			if (objDs.getColumn(0, "REFRESH") == "Y"){
        				this.fn_search();
        			}
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

        // 저장 버튼
        this.fn_saveBtn = function()
        {
        	this.fn_save();
        };

        // 삭제 버튼
        this.fn_deleteBtn = function()
        {
        	this.fn_delete();
        };

        //검색조건 변경 시
        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "year"){
        		this.ds_search.setColumn(0, "date_from", e.newvalue + '0101');
        		this.ds_search.setColumn(0, "date_to", e.newvalue + '1231');
        		this.ds_list.clearData();
        		this.initGrid(this.div_cont.form.div_left.form.grd_list);
        	}
        };

        this.div_cont_div_left_grd_list_oncelldblclick = function(obj,e)
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
        				SICODE : this.fv_sicode
        			,   STAFF_ID : this.fv_staff_id
        			,   STAFF_NAME : this.fv_staff_name
        			,   STAFF_DUTYNAME : this.fv_staff_dutyname
        			,	DATE : date
        		};

        		Sct.popup(this, "dayRecord", 450, 400, "", param, "DAY_POP::DAY00214_P01.xfdl", "fn_popCallback");
        	}
        };

        this.div_cont_div_left_grd_list_onexpandup = function(obj,e)
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
        				SICODE : this.fv_sicode
        			,	DATE_FROM : dateFrom
        			,   DATE_TO : dateTo
        		};
        		Sct.popup(this, "monthRecord", 450, 400, "", param, "DAY_POP::DAY00214_P02.xfdl", "fn_popCallback");
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncelldblclick",this.div_cont_div_left_grd_list_oncelldblclick,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onexpandup",this.div_cont_div_left_grd_list_onexpandup,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00214.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
