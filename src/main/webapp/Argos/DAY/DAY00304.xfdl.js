(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00304");
            this.set_titletext("3-4 연간 물리치료.기능회복훈련 작성현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_grade\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"평가일1\" type=\"STRING\" size=\"256\"/><Column id=\"계획시작1\" type=\"STRING\" size=\"256\"/><Column id=\"계획종료1\" type=\"STRING\" size=\"256\"/><Column id=\"치료시간1\" type=\"STRING\" size=\"256\"/><Column id=\"기능사a\" type=\"STRING\" size=\"256\"/><Column id=\"기능시a1\" type=\"STRING\" size=\"256\"/><Column id=\"평가자명1\" type=\"STRING\" size=\"256\"/><Column id=\"ha_number1\" type=\"STRING\" size=\"256\"/><Column id=\"평가일2\" type=\"STRING\" size=\"256\"/><Column id=\"계획시작2\" type=\"STRING\" size=\"256\"/><Column id=\"계획종료2\" type=\"STRING\" size=\"256\"/><Column id=\"치료시간2\" type=\"STRING\" size=\"256\"/><Column id=\"기능시2\" type=\"STRING\" size=\"256\"/><Column id=\"평가자명2\" type=\"STRING\" size=\"256\"/><Column id=\"ha_number2\" type=\"STRING\" size=\"256\"/><Column id=\"row_num\" type=\"STRING\" size=\"256\"/><Column id=\"평가일\" type=\"STRING\" size=\"256\"/><Column id=\"계획기간\" type=\"STRING\" size=\"256\"/><Column id=\"계획종료\" type=\"STRING\" size=\"256\"/><Column id=\"치료시간\" type=\"STRING\" size=\"256\"/><Column id=\"평가자명\" type=\"STRING\" size=\"256\"/><Column id=\"기능시a2\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명1\" type=\"STRING\" size=\"256\"/><Column id=\"계획기간1\" type=\"STRING\" size=\"256\"/><Column id=\"계획기간2\" type=\"STRING\" size=\"256\"/><Column id=\"ha_number\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"조회1\" type=\"STRING\" size=\"256\"/><Column id=\"조회2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">2022</Col><Col id=\"CMNM\">2022년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0","580","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_year","10","6","105","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_type("filterlike");
            obj.getSetter("onchanged").set("Common_onchanged");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search","349","6","69","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("date_from","118","6","105","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("2");
            obj.set_buttonsize("0 0");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("date_to","241","6","105","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_buttonsize("0 0");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","226","12.5","12","17",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("sta_title","0","25",null,"37","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","771","3","379","25",null,null,null,null,null,null,this.sta_title.form);
            obj.set_taborder("1");
            obj.set_text("yyyy 물리(작업)치료. 기능회복훈련계획 작성현황");
            obj.set_textAlign("left");
            obj.set_cssclass("lb01");
            this.sta_title.addChild(obj.name, obj);

            obj = new Div("div_01","0","60",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_1","0","0",null,null,"0","0",null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"35\"/><Column size=\"60\"/><Column size=\"35\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"125\"/><Column size=\"85\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"46\"/><Column size=\"85\"/><Column size=\"125\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"60\"/><Column size=\"46\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"거주현황\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"수급자명\" cursor=\"pointer\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"생활실\"/><Cell col=\"6\" text=\"입소일\"/><Cell col=\"7\" text=\"퇴소일\"/><Cell col=\"8\" text=\"물리치료①\"/><Cell col=\"9\" text=\"계획기간\"/><Cell col=\"10\" text=\"치료시간\" tooltiptext=\"bind:기능시a1\"/><Cell col=\"11\" text=\"기능훈련A\"/><Cell col=\"12\" text=\"작성자\"/><Cell col=\"13\" text=\"조회\"/><Cell col=\"14\" text=\"물리치료②\"/><Cell col=\"15\" text=\"계획기간\"/><Cell col=\"16\" text=\"치료시간\"/><Cell col=\"17\" text=\"기능훈련A\"/><Cell col=\"18\" text=\"작성자\"/><Cell col=\"19\" text=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:거주현황\"/><Cell col=\"1\" text=\"bind:m_group\"/><Cell col=\"2\" text=\"bind:m_name\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:성별\"/><Cell col=\"4\" text=\"bind:m_grade\"/><Cell col=\"5\" text=\"bind:m_roomname\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:m_enday\" displaytype=\"date\" expandchar=\"dot\"/><Cell col=\"7\" text=\"bind:m_reday\" displaytype=\"date\" expandchar=\"dot\" color=\"red\"/><Cell col=\"8\" text=\"bind:평가일1\" displaytype=\"date\" expandchar=\"dot\"/><Cell col=\"9\" expandchar=\"dot\" text=\"bind:계획기간1\" displaytype=\"normal\"/><Cell col=\"10\" text=\"bind:치료시간1\"/><Cell col=\"11\" text=\"bind:기능시a1\"/><Cell col=\"12\" text=\"bind:평가자명1\" textAlign=\"left\"/><Cell col=\"13\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"60\"/><Cell col=\"14\" text=\"bind:평가일2\" expandchar=\"dot\" displaytype=\"date\"/><Cell col=\"15\" text=\"bind:계획기간2\"/><Cell col=\"16\" text=\"bind:치료시간2\" displaytype=\"normal\"/><Cell col=\"17\" text=\"bind:기능시a2\"/><Cell col=\"18\" text=\"bind:평가자명2\" displaytype=\"normal\" textAlign=\"left\"/><Cell col=\"19\" expandimage=\"url('theme://images/ico_search.png')\" expandsize=\"60\" expandshow=\"show\"/></Band></Format></Formats>");
            this.div_01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.date_from","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.date_to","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00304.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00304.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00304.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00304
         * 화면명   	: 3-4 연간 물리치료.기능회복훈련 계획현황
         * 화면설명 	: 수급자별 물리치료·기능회복훈련 계획을 조회하는 화면
         * 작성일   	: 2022-06-13
         * 작성자   	: 이유정
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
         ***********************************************************************
         * 비고 :
         */
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
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

        	for (let i = -10; i < 11; i++)
        	{
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year + i);
        		this.ds_year.setColumn(nRow, "CMNM", (year + i) + "년");
        	}

        	this.div_search.form.cmb_year.set_value(year);


        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "year", year);
        	this.ds_search.setColumn(0, "date_from", year + '0101');
        	this.ds_search.setColumn(0, "date_to", year + '1231');

        	// 조회
        	this.fn_search();
        };

        // 그리드에 css 적용
        this.initGrid = function(grid)
        {
        	// 성별에 따라 이름 배경색 변경
        	const nameIdx = grid.getBindCellIndex("body", "m_name");
        	const nameCss = "expr:dataset.getColumn(currow, '성별') == '남' ? 'cellBMan' : 'cellBWoman'";
        	grid.setCellProperty("body", nameIdx, "cssclass", nameCss);


        	// 퇴사여부에 따라 거주현황 배경색 변경
        	const nowIdx = grid.getBindCellIndex("body", "거주현황");
        	const nowCss = "expr:dataset.getColumn(currow, '거주현황') == '퇴소자' ? 'cellBRetire' : ''";
        	grid.setCellProperty("body", nowIdx, "cssclass", nowCss);


        	// 물리치료 배경색 변경
        	const time1Idx = grid.getBindCellIndex("body", "평가일1");
        	const time1Css = "expr:dataset.getColumn(currow, '평가일1') != null ? 'cellBMan' : ''"
        	grid.setCellProperty("body", time1Idx, "cssclass", time1Css);

        	// 물리치료 배경색 변경
        	const time2Idx = grid.getBindCellIndex("body", "평가일2");
        	const time2Css = "expr:dataset.getColumn(currow, '평가일2') != null ? 'cellBMan' : ''"
        	grid.setCellProperty("body", time2Idx, "cssclass", time2Css);



        };


        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {


        	return true;
        };


        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function()
        {
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_data=output1";
        	const argument = "method=getList"
        				   + " sqlId='DAY00304.DAY00304_DS_DATA_S'";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };



        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")

        		{
        			const year = this.ds_search.getColumn(0, "year");
        			const gTitleStr = year + "년 물리(작업)치료. 기능회복훈련계획 작성현황";
        			this.sta_title.form.sta_title.set_text(gTitleStr);
        			//trace("year: " + year);


        			this.initGrid(this.div_01.form.grd_1);
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
        /* 날짜 스트링 만들기
         *
         * @param date DATE
         * @return String yyyyMMdd
         */


        /***********************************************************************
         * Popup Functions
         ***********************************************************************/



        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {

        	if(popid != "col13" & popid != "col19" )
        	{
        		if(Sct.Util.isEmpty(strDs)) return;
        	}
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)

        	{
        		case "col13" :
        			this.fn_search();
        			break;

        		case "col19" :
        			this.fn_search();
        			break;

        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };



        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 검색 버튼
        this.fn_searchBtn = function(obj,e)
        {
        	this.fn_search();
        };


        this.div_search_cmb_year_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "date_from", e.postvalue + '0101');
        	this.ds_search.setColumn(0, "date_to", e.postvalue + '1231');
           	this.ds_search.setColumn(0, "year", e.postvalue);
        	const gTitleStr = e.postvalue + "년 물리(작업)치료. 기능회복훈련계획 작성현황";
        	this.sta_title.form.sta_title.set_text(gTitleStr);
            this.fn_search();
        };



        //그리드 팝업
        this.div_01_grd_1_onexpandup = function(obj,e)
        {
        	/*
        	col13 팝업1
        	col19 팝업2
        	*/
        	if (e.col == "13"){
        		if(Sct.Util.isEmpty(this.ds_data.getColumn(e.row,"ha_number1"))){
        			//this.alert("팝업이 존재하지 않습니다.");
        			return false;
        		}
        		var param = {
        				SICODE : fv_sicode
        			,	NUMBER : this.ds_data.getColumn(e.row,"ha_number1")
        			,   CODE : this.ds_data.getColumn(e.row, "m_code")

        			}
        		Sct.popup(this, "col13", 450, 400, "", param, "DAY_POP::DAY00303_P01.xfdl", "fn_popCallback");
        	}

        	if(e.col == "19"){
        		if(Sct.Util.isEmpty(this.ds_data.getColumn(e.row,"ha_number2"))){
        			//this.alert("팝업이 존재하지 않습니다.");
        			return false;
        		}
        		var param = {
        				SICODE : fv_sicode
        			,	NUMBER : this.ds_data.getColumn(e.row,"ha_number2")
        			,   CODE : this.ds_data.getColumn(e.row, "m_code")

        		}
        		Sct.popup(this, "col19", 450, 400, "", param, "DAY_POP::DAY00303_P01.xfdl", "fn_popCallback");
        	}

        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.div_search_cmb_year_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.date_from.addEventHandler("onchanged",this.div_search_date_from_onchanged,this);
            this.div_search.form.date_to.addEventHandler("onchanged",this.div_search_date_to_onchanged,this);
            this.div_search.form.sta_00.addEventHandler("onclick",this.div_search_sta_00_onclick,this);
            this.sta_title.form.sta_title.addEventHandler("onclick",this.sta_title_sta_title_onclick,this);
            this.div_01.form.grd_1.addEventHandler("onexpandup",this.div_01_grd_1_onexpandup,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00304.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
