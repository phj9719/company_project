(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00701_P04");
            this.set_titletext("주야간 운영일지 출력(월)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"일지번호\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"시설장\" type=\"STRING\" size=\"256\"/><Column id=\"거주자수\" type=\"STRING\" size=\"256\"/><Column id=\"일등급\" type=\"STRING\" size=\"256\"/><Column id=\"이등급\" type=\"STRING\" size=\"256\"/><Column id=\"삼등급\" type=\"STRING\" size=\"256\"/><Column id=\"사등급\" type=\"STRING\" size=\"256\"/><Column id=\"오등급\" type=\"STRING\" size=\"256\"/><Column id=\"인지\" type=\"STRING\" size=\"256\"/><Column id=\"등외\" type=\"STRING\" size=\"256\"/><Column id=\"일송영\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"출력\" expandchar=\"rno\"/></Cell><Cell col=\"2\" text=\"운영일\"/><Cell col=\"3\" text=\"시설장\"/><Cell col=\"4\" text=\"총인원\"/><Cell col=\"5\" text=\"1등급\"/><Cell col=\"6\" text=\"2등급\"/><Cell col=\"7\" text=\"3등급\"/><Cell col=\"8\" text=\"4등급\"/><Cell col=\"9\" text=\"5등급\"/><Cell col=\"10\" text=\"인지\"/><Cell col=\"11\" text=\"등외\"/><Cell col=\"12\" text=\"일송영\"/><Cell col=\"13\" text=\"조회\"/><Cell col=\"14\" text=\"기록\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:CHK\"/><Cell col=\"2\" displaytype=\"date\" expandchar=\"dot\" text=\"bind:운영일\" cursor=\"pointer\"/><Cell col=\"3\" text=\"bind:시설장\"/><Cell col=\"4\" text=\"bind:거주자수\"/><Cell col=\"5\" text=\"bind:일등급\"/><Cell col=\"6\" text=\"bind:이등급\"/><Cell col=\"7\" text=\"bind:삼등급\"/><Cell col=\"8\" text=\"bind:사등급\"/><Cell col=\"9\" text=\"bind:오등급\"/><Cell col=\"10\" text=\"bind:인지\"/><Cell col=\"11\" text=\"bind:등외\"/><Cell col=\"12\" text=\"bind:일송영\"/><Cell col=\"13\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"90\" text=\"bind:EX\"/><Cell col=\"14\" text=\"bind:일지번호\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","3","500","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("주야간운영일지 출력");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","450","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","380","5","70","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","132","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","245","5","15","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","260","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date","10","5","90","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("0");
            obj.getSetter("calendarfunc").set("month");
            obj.set_buttonsize("0 0");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","cal_date:-1","5","25","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","470","0","868","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","5","4","65","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("결재란");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report","80","4","185","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("주야간운영일지 출력(월)");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,520,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.cal_date_from","value","ds_search","DATE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_to","value","ds_search","DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cal_date_pic","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00701_P04.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00701_P04.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00701_P04.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00701_P04
         * 화면명   	: 주야간 운영일지 출력(월)
         * 화면설명 	: 해당월의 주야간 운영일지를 출력하기 위한 화면
         * 작성일   	: 2022-03-21
         * 작성자   	: 조기종
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

        	const date = new Date();
        	const year = date.getFullYear();
        	const month = date.getMonth();
        	const firstDay = new Date(year, month, 1);
        	const lastDay = new Date(year, month + 1, 0);

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE", firstDay);
        	this.ds_search.setColumn(0, "DATE_FROM", firstDay);
        	this.ds_search.setColumn(0, "DATE_TO", lastDay);

        	// 리포트 결제란
        	this.div_func.form.chk_sign.set_value(1);

        	// 조회
        	this.fn_search();
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
        // 조회
        this.fn_search = function()
        {
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00701_P04.DAY00701_P04_DS_LIST_S ";
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

        			// from, to YYYY.MM.DD ~ YYYY.MM.DD 문장 만들기
        			const dateStr = this.fn_from_to_text(dateFromCol, dateToCol, "-");

        			const subTitleText = "주야간운영일지 출력 ( " + dateStr + " )";
        			this.div_cont.form.sta_subTitle.set_text(subTitleText);
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

        // 날짜 변경 이벤트
        this.div_search_cal_date_pic_onchanged = function(obj,e)
        {
        	// 선택월의 1일, 마지막일 구하기
        	const year = this.ds_search.getColumn(0,"DATE").substr(0,4);
        	const month = this.ds_search.getColumn(0,"DATE").substr(4);
        	const firstDay = new Date(year, month - 1 , 1);
        	const lastDay = new Date(year, month, 0);

        	// from to 날짜 셋팅
        	this.ds_search.setColumn(0, "DATE_FROM", firstDay);
        	this.ds_search.setColumn(0, "DATE_TO", lastDay);

        	this.fn_search();
        };

        // 그리드 더블클릭 이벤트
        this.div_cont_grd_list_oncelldblclick = function(obj,e)
        {
        	const dateIdx = obj.getBindCellIndex("body", "운영일");

        	if (e.cell == dateIdx)
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
        	const exIdx = obj.getBindCellIndex("body", "EX");

        	if (e.cell == exIdx)
        	{
        		const param = {
        				SICODE : fv_sicode
        			,	DATE : this.ds_list.getColumn(e.row, "운영일")
        		};

        		Sct.popup(this, "record", 450, 400, "7-1 주야간운영일지", param, "DAY_POP::DAY00701_P01.xfdl", "fn_popCallback");
        	}
        };

        // 주야간운영일지 출력(월)
        this.fn_report = function()
        {
        	// 체크된 항목의 수와 항목의 날짜 구하기
        	let chkListArr = [];
        	let chkCount = 0;
        	for (let i = 0; i < this.ds_list.rowcount; i++)
        	{
        		if (this.ds_list.getColumn(i, "CHK") == "1")
        		{
        			chkListArr.push(this.ds_list.getColumn(i, "운영일"));
        			chkCount++;
        		}
        	}

        	// 체크된 항목이 없을 경우
        	if (chkCount == 0)
        	{
        		this.alert("출력할 항목을 선택해주세요.");
        		return false;
        	}

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00701_R01.xfdl";
        	const popupName = "주야간운영일지";

        	params = {
        		sicode : fv_sicode
        	,	date : this.ds_list.getColumn(0, "운영일")
        	,	sign : this.div_func.form.chk_sign.value + ''
        	,	chkCount : chkCount
        	,	chkList : chkListArr
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.grd_list.addEventHandler("oncelldblclick",this.div_cont_grd_list_oncelldblclick,this);
            this.div_cont.form.grd_list.addEventHandler("onexpandup",this.div_cont_grd_list_onexpandup,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.cal_date_pic.addEventHandler("onchanged",this.div_search_cal_date_pic_onchanged,this);
            this.div_func.form.btn_report.addEventHandler("onclick",this.fn_report,this);
        };
        this.loadIncludeScript("DAY00701_P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
