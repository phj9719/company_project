(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00701_P03");
            this.set_titletext("운영일지 업무내용 검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"일지번호\" type=\"INT\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"업무제목01\" type=\"STRING\" size=\"256\"/><Column id=\"업무제목02\" type=\"STRING\" size=\"256\"/><Column id=\"업무제목03\" type=\"STRING\" size=\"256\"/><Column id=\"업무제목04\" type=\"STRING\" size=\"256\"/><Column id=\"프로그램01\" type=\"STRING\" size=\"256\"/><Column id=\"프로그램02\" type=\"STRING\" size=\"256\"/><Column id=\"프로그램03\" type=\"STRING\" size=\"256\"/><Column id=\"업무내용01\" type=\"STRING\" size=\"256\"/><Column id=\"업무내용02\" type=\"STRING\" size=\"256\"/><Column id=\"업무내용03\" type=\"STRING\" size=\"256\"/><Column id=\"업무내용04\" type=\"STRING\" size=\"256\"/><Column id=\"프로내용01\" type=\"STRING\" size=\"256\"/><Column id=\"프로내용02\" type=\"STRING\" size=\"256\"/><Column id=\"프로내용03\" type=\"STRING\" size=\"256\"/><Column id=\"EX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/><Column id=\"SEARCH1\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH2\" type=\"STRING\" size=\"256\"/><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_flag", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">OR</Col><Col id=\"CMNM\">또는</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","40",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"140\"/></Rows><Band id=\"head\"><Cell text=\"운영일\"/><Cell col=\"1\" text=\"업무내용①\"/><Cell col=\"2\" text=\"업무내용②\"/><Cell col=\"3\" text=\"업무내용③\"/><Cell col=\"4\" text=\"업무내용④\"/><Cell col=\"5\" text=\"프로그램①\"/><Cell col=\"6\" text=\"프로그램②\"/><Cell col=\"7\" text=\"조회\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" expandchar=\"dot\" text=\"bind:운영일\" cursor=\"pointer\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:업무내용01\" textareascrolltype=\"vertical\" textareascrollbartype=\"fixed\" wordWrap=\"char\" displaytype=\"textareacontrol\"/><Cell col=\"2\" edittype=\"none\" displaytype=\"textareacontrol\" text=\"bind:업무내용02\" wordWrap=\"char\" textareascrollbartype=\"fixed\" textareascrolltype=\"vertical\"/><Cell col=\"3\" text=\"bind:업무내용03\" displaytype=\"textareacontrol\" wordWrap=\"char\" textareascrolltype=\"vertical\" textareascrollbartype=\"fixed\"/><Cell col=\"4\" text=\"bind:업무내용04\" displaytype=\"textareacontrol\" wordWrap=\"char\" textareascrolltype=\"vertical\" textareascrollbartype=\"fixed\"/><Cell col=\"5\" text=\"bind:프로내용01\" displaytype=\"textareacontrol\" wordWrap=\"char\" textareascrolltype=\"vertical\" textareascrollbartype=\"fixed\"/><Cell col=\"6\" text=\"bind:프로내용02\" displaytype=\"textareacontrol\" wordWrap=\"char\" textareascrolltype=\"vertical\" textareascrollbartype=\"fixed\"/><Cell col=\"7\" expandshow=\"show\" expandimage=\"url('theme://images/ico_search.png')\" expandsize=\"100\" text=\"bind:EX\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","3","500","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("운영일지 업무내용검색");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","0","0",null,"35","0",null,null,null,null,null,this);
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

            obj = new Button("btn_search","920","5","70","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("검색");
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

            obj = new Static("sta_head1","386","3","90","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("■ 검색어1");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_body1","sta_head1:-1","3","120","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_search1","480","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_tooltiptext("검색어1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_head2","594","3","90","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("■ 검색어2");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_body2","683","3","230","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_search2","688","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_tooltiptext("검색어2");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_search","807","5","100","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_flag");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_01","1001","5","357","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("※ 검색어는 2글자 이상 작성해야 검색 됩니다.");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1500,520,this,function(p){});
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

            obj = new BindItem("item3","div_search.form.edt_search1","value","ds_search","SEARCH1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_search2","value","ds_search","SEARCH2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.cmb_search","value","ds_search","FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00701_P03.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00701_P03.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00701_P03.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00701_P03
         * 화면명   	: 운영일지 업무내용 검색
         * 화면설명 	: 주야간 운영일지 업무내용을 검색하여 해당 내용을
        				  띄우기 위한 팝업
         * 작성일   	: 2022-03-22
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
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
        const fv_sicode = this.parent.SICODE;
        const fv_year = this.parent.YEAR;
        const fv_date_from = this.parent.DATE_FROM;
        const fv_date_to = this.parent.DATE_TO;
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
        	this.ds_search.setColumn(0, "YEAR", fv_year);
        	this.ds_search.setColumn(0, "DATE_FROM", fv_date_from);
        	this.ds_search.setColumn(0, "DATE_TO", fv_date_to);
        	this.ds_search.setColumn(0, "SEARCH1", "");
        	this.ds_search.setColumn(0, "SEARCH2", "");
        	this.ds_search.setColumn(0, "FLAG", "OR");

        	// 그리드 제목의 날짜 세팅
        	const dateFromCol = this.ds_search.getColumn(0, "DATE_FROM");
        	const dateToCol = this.ds_search.getColumn(0, "DATE_TO");

        	const dateStr = this.fn_from_to_text(dateFromCol, dateToCol);

        	const subTitleText = "운영일지 업무내용 검색 ( " + dateStr + " )";
        	this.div_cont.form.sta_subTitle.set_text(subTitleText);
        };

        // 그리드에 css 적용
        this.initGrid = function(grid)
        {
        	// 검색어에 있는 단어길이가 2글자 이상인 경우 단어가 포함된컬럼에 파란색으로 표시
        	const s1Str = this.ds_search.getColumn(0, "SEARCH1");
        	const s2Str = this.ds_search.getColumn(0, "SEARCH2");
        	const colArr = ["업무내용01", "업무내용02", "업무내용03", "업무내용04", "프로내용01", "프로내용02"];

        	for (let i = 0; i < colArr.length; i++)
        	{
        		let exprStr = "";
        		let exprArr = [];
        		if (!Sct.Util.isEmpty(s1Str))
        			if (s1Str.length >= 2)
        				exprArr.push("dataset.getColumn(currow, '" + colArr[i] + "').indexOf('" + s1Str + "') != '-1' ");
        		if (!Sct.Util.isEmpty(s2Str))
        			if (s2Str.length >= 2)
        				exprArr.push("dataset.getColumn(currow, '" + colArr[i] + "').indexOf('" + s2Str + "') != '-1' ");

        		for (let j = 0; j < exprArr.length; j++)
        		{
        			if (j == 0)
        				exprStr += exprArr[j];
        			else
        				exprStr += "|| " + exprArr[j];
        		}

        		if (!Sct.Util.isEmpty(exprStr))
        		{
        			const colIdx = grid.getBindCellIndex("body", colArr[i]);
        			const colCss = "expr:" + exprStr + "? 'BlueFontCell' : ''";

        			grid.setCellProperty("body", colIdx, "cssclass", colCss);
        		}

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

        	const s1 = this.ds_search.getColumn(0, "SEARCH1");
        	const s2 = this.ds_search.getColumn(0, "SEARCH2");

        	if (Sct.Util.isEmpty(s1) && Sct.Util.isEmpty(s2))
        	{
        		this.alert("검색어를 입력해주세요.");
        		return false;
        	}

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
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00701_P03.DAY00701_P03_DS_LIST_S ";
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
        			// 그리드 제목의 날짜 세팅
        			const dateFromCol = this.ds_search.getColumn(0, "DATE_FROM");
        			const dateToCol = this.ds_search.getColumn(0, "DATE_TO");

        			const dateStr = this.fn_from_to_text(dateFromCol, dateToCol);

        			const subTitleText = "운영일지 업무내용 검색 ( " + dateStr + " )";
        			this.div_cont.form.sta_subTitle.set_text(subTitleText);

        			// 그리드에 css 적용
        			this.initGrid(this.div_cont.form.grd_list);
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
        /*
         * from, to YYYY.MM.DD ~ YYYY.MM.DD 문장 만들기
         *
         * @param from DATE from 날짜
         * @param to DATE to 날짜
         * @param deli str 구분자 ex) "-", "~" 안넣을 경우 "~"
         */
        this.fn_from_to_text = function(from, to, deli)
        {
        	const dateFromCol = from;
        	const yyyyFrom = dateFromCol.getFullYear();
        	const mmFrom = (dateFromCol.getMonth() + 1) + "";
        	const ddFrom = dateFromCol.getDate() + "";
        	const dateToCol = to;
        	const yyyyTo = dateToCol.getFullYear();
        	const mmTo = (dateToCol.getMonth() + 1) + "";
        	const ddTo = dateToCol.getDate() + "";

        	let delimiter = "";
        	if (!Sct.Util.isEmpty(deli))
        		delimiter = " " + deli + " ";
        	else
        		delimiter = " ~ ";

        	const dateFrom = yyyyFrom + "." + mmFrom.padStart(2, "0") + "." + ddFrom.padStart(2, "0");
        	const dateTo = yyyyTo + "." + mmTo.padStart(2, "0") + "." + ddTo.padStart(2, "0");

        	const rtnDate = dateFrom + delimiter + dateTo;
        	return rtnDate;
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 검색 버튼
        this.fn_searchBtn = function(obj,e)
        {
        	this.fn_search();
        };

        // 조회조건 년도 값 변경 이벤트
        this.div_search_cmb_year_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "DATE_FROM", e.postvalue + '0101');
        	this.ds_search.setColumn(0, "DATE_TO", e.postvalue + '1231');
        };

        // 그리드 더블클릭 이벤트
        this.div_cont_grd_list_oncelldblclick = function(obj,e)
        {
        	const dateIdx = obj.getBindCellIndex("body", "운영일");

        	if (e.col == dateIdx)
        	{
        		const param = {
        				SICODE : fv_sicode
        			,	DATE : this.ds_list.getColumn(e.row, "운영일")
        		};

        		Sct.popup(this, "record", 450, 400, "7-1 주야간운영일지", param, "DAY_POP::DAY00701_P01.xfdl", "fn_popCallback");
        	}
        };

        // 그리드 확장 버튼 이벤트
        this.div_cont_grd_list_onexpandup = function(obj,e)
        {
        	const dateIdx = obj.getBindCellIndex("body", "EX");

        	if (e.col == dateIdx)
        	{
        		const param = {
        				SICODE : fv_sicode
        			,	DATE : this.ds_list.getColumn(e.row, "운영일")
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
            this.div_cont.form.grd_list.addEventHandler("onexpandup",this.div_cont_grd_list_onexpandup,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.div_search_cmb_year_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
        };
        this.loadIncludeScript("DAY00701_P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
