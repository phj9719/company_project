(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00409");
            this.set_titletext("4-9 기간별차량일보 집계");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"monalja\" type=\"DATE\" size=\"256\"/><Column id=\"day2\" type=\"STRING\" size=\"256\"/><Column id=\"mocode\" type=\"STRING\" size=\"256\"/><Column id=\"차번호\" type=\"STRING\" size=\"256\"/><Column id=\"mostart\" type=\"INT\" size=\"256\"/><Column id=\"molast\" type=\"INT\" size=\"256\"/><Column id=\"distant\" type=\"INT\" size=\"256\"/><Column id=\"코드1\" type=\"STRING\" size=\"256\"/><Column id=\"내역1\" type=\"STRING\" size=\"256\"/><Column id=\"비용1\" type=\"INT\" size=\"256\"/><Column id=\"코드2\" type=\"STRING\" size=\"256\"/><Column id=\"내역2\" type=\"STRING\" size=\"256\"/><Column id=\"비용2\" type=\"INT\" size=\"256\"/><Column id=\"코드3\" type=\"STRING\" size=\"256\"/><Column id=\"내역3\" type=\"STRING\" size=\"256\"/><Column id=\"비용3\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/><Column id=\"MON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"monalja\" type=\"STRING\" size=\"256\"/><Column id=\"mocode\" type=\"STRING\" size=\"256\"/><Column id=\"차번호\" type=\"STRING\" size=\"256\"/><Column id=\"mostart\" type=\"STRING\" size=\"256\"/><Column id=\"molast\" type=\"STRING\" size=\"256\"/><Column id=\"distant\" type=\"STRING\" size=\"256\"/><Column id=\"지출금액\" type=\"STRING\" size=\"256\"/><Column id=\"지출내역\" type=\"STRING\" size=\"256\"/><Column id=\"작성자\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_main","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"운행일\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"차량번호\"/><Cell col=\"3\" text=\"시작거리\"/><Cell col=\"4\" text=\"종료거리\"/><Cell col=\"5\" text=\"운행거리\"/><Cell col=\"6\" text=\"구분1\"/><Cell col=\"7\" text=\"내역1\"/><Cell col=\"8\" text=\"금액1\"/><Cell col=\"9\" text=\"구분2\"/><Cell col=\"10\" text=\"내역2\"/><Cell col=\"11\" text=\"금액2\"/><Cell col=\"12\" text=\"구분3\"/><Cell col=\"13\" text=\"내역3\"/><Cell col=\"14\" text=\"금액3\"/><Cell col=\"15\" text=\"조회\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:monalja\" expandchar=\"dot\"/><Cell col=\"1\" text=\"bind:mocode\"/><Cell col=\"2\" text=\"bind:차번호\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:mostart\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:molast\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:distant\" textAlign=\"right\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" expr=\"dataset.getColumn(currow, 'distant') == 0 ? '' : dataset.getColumn(currow, 'distant')\"/><Cell col=\"6\" text=\"bind:코드1\"/><Cell col=\"7\" text=\"bind:내역1\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:비용1\" displaytype=\"number\" textAlign=\"right\" expr=\"dataset.getColumn(currow, '비용1') == 0 ? '' : dataset.getColumn(currow, '비용1')\"/><Cell col=\"9\" text=\"bind:코드2\"/><Cell col=\"10\" text=\"bind:내역2\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:비용2\" displaytype=\"number\" textAlign=\"right\" expr=\"dataset.getColumn(currow, '비용2') == 0 ? '' : dataset.getColumn(currow, '비용2')\"/><Cell col=\"12\" text=\"bind:코드3\"/><Cell col=\"13\" text=\"bind:내역3\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:비용3\" displaytype=\"number\" textAlign=\"right\" expr=\"dataset.getColumn(currow, '비용3') == 0 ? '' : dataset.getColumn(currow, '비용3')\"/><Cell col=\"15\" expandshow=\"show\" expandsize=\"60\" text=\"bind:조회\" expandchar=\"조회\"/></Band></Format></Formats>");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","230","25",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("1");
            obj.set_text("월간 차량 운행집계");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_tot",null,"2","150","21","165",null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("2");
            obj.set_text("월 지출금액 합계 : ");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_totVal",null,"2","103","22","55",null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("right");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_totCon",null,"2","20","23","31",null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("4");
            obj.set_text("원");
            obj.set_font("normal 13pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("right");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","440","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","122","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","235","5","15","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","250","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","5","90","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("0");
            obj.getSetter("calendarfunc").set("month");
            obj.set_buttonsize("0 0");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","cal_date:-1","5","25","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("4");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"4","70","26","5",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","div_search:10","0",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_report1","90","4","145","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("월간차량운행집계");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_excel","239","4","155","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("운행집계 다운로드");
            obj.set_cssclass("btn_excel");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","0","5","85","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("결재란표시");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_car","398","4","125","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("차량별운행일지");
            this.div_func.addChild(obj.name, obj);

            obj = new Grid("grd_excel","-745","84","668","346",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_excel");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"연번\"/><Cell col=\"1\" text=\"운행일\"/><Cell col=\"2\" text=\"차량번호\"/><Cell col=\"3\" text=\"운행시작\"/><Cell col=\"4\" text=\"운행종료\"/><Cell col=\"5\" text=\"일운행거리\"/><Cell col=\"6\" text=\"지출금액\"/><Cell col=\"7\" text=\"지출내역\"/><Cell col=\"8\" text=\"작성자\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:monalja\"/><Cell col=\"2\" text=\"bind:차번호\" textAlign=\"left\"/><Cell col=\"3\" textAlign=\"right\" text=\"bind:mostart\"/><Cell col=\"4\" textAlign=\"right\" text=\"bind:molast\"/><Cell col=\"5\" textAlign=\"right\" text=\"bind:distant\"/><Cell col=\"6\" text=\"bind:지출금액\" textAlign=\"right\"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:지출내역\"/><Cell col=\"8\" text=\"bind:작성자\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
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

            obj = new BindItem("item4","div_func.form.chk_sign","value","ds_report","SIGN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00409.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00409.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00409.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00409
         * 화면명   	: 기간별차량일보 집계
         * 화면설명 	: 해당월의 차량 운행집계를 조회하는 화면
         * 작성일   	: 2022-05-17
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
         ***********************************************************************
         * 비고 : 마이너스 좌표계에 엑셀 다운로드용 그리드 배치중
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

        	const date = new Date();
        	const year = date.getFullYear();
        	const month = date.getMonth();
        	const firstDay = new Date(year, month, 1);
        	const lastDay = new Date(year, month + 1, 0);
        	const firstString = this.fn_getDateString(firstDay);
        	const lastString = this.fn_getDateString(lastDay);
        	const yearMon = year + ((month + 1) + "").padStart(2, '0');

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE", firstDay);
        	this.ds_search.setColumn(0, "DATE_FROM", firstString);
        	this.ds_search.setColumn(0, "DATE_TO", lastString);
        	this.ds_search.setColumn(0, "MON", yearMon);

        	// 리포트 출력 초기화
        	this.ds_report.setColumn(0, "SIGN", 1);

        	// 조회
        	this.fn_search();
        };

        // 그리드에 css 적용
        this.initGrid = function(grid)
        {
        	// 날짜가 짝수일 경우 배경색 변경
        	const idxArr = ["monalja", "mocode", "차번호", "mostart", "molast", "distant"];
        	for (let i = 0; i < idxArr.length; i++)
        	{
        		const idx = grid.getBindCellIndex("body", idxArr[i]);
        		const cssStr = "expr:dataset.getColumn(currow, 'day2') == 0 ? 'CellBf7fcff' : ''";
        		grid.setCellProperty("body", idx, "cssclass", cssStr);
        	}
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
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00409.DAY00409_DS_LIST_S";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 엑셀 내용 조회
        this.fn_excel_search = function()
        {
        	const svcId = "excel_search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_excel=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00409.DAY00409_DS_EXCEL_S";

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
        			// 월 지출금액 합계 계산
        			let totWon = 0;
        			for (let i = 0; i < this.ds_list.rowcount; i++)
        			{
        				totWon += parseInt(this.ds_list.getColumn(i, "비용1"));
        				totWon += parseInt(this.ds_list.getColumn(i, "비용2"));
        				totWon += parseInt(this.ds_list.getColumn(i, "비용3"));
        			}
        			const totWonStr = totWon.toLocaleString("en-US");
        			//trace("totWon : " + totWon);
        			//trace("월 지출금액 합계 : " + totWonStr);
        			this.div_cont.form.div_main.form.sta_totVal.set_text(totWonStr);

        			// 그리드 셀 배경색 변경
        			this.initGrid(this.div_cont.form.div_main.form.grd_list);
        		}
        		else if (strSvcID == "excel_search")
        		{
        			let strFileName = "월간차량운행집계_";
        			const date = this.ds_search.getColumn(0, "DATE");
        			const fDate = date.getFullYear() + ((date.getMonth() + 1) + "").padStart(2, '0');
        			strFileName += fDate;
        			Sct.Grid.exportExcel(this, this.grd_excel, strFileName);
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
        this.fn_getDateString = function(date)
        {
        	const year = date.getFullYear() + "";
        	const month = ((date.getMonth() + 1) + "").padStart(2, '0');
        	const day = (date.getDate() + "").padStart(2, '0');

        	return year + month + day;
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 리포트 출력
        this.fn_report = function(obj,e)
        {
        	const popupUrl = "DAY_POP::DAY00409_R01.xfdl";
        	const popupName = "월간차량운행집계";
        	const dicompNm = " ";

        	const params = {
        		sicode : fv_sicode
        	,	from : this.ds_search.getColumn(0, "DATE_FROM")
        	,	to : this.ds_search.getColumn(0, "DATE_TO")
        	,	sign : this.ds_report.getColumn(0, "SIGN")
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if (popid != "car" && popid != "update")
        	{
        		if(Sct.Util.isEmpty(strDs)) return;
        	}
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "car" :
        		case "update" :
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

        // 날짜 변경 이벤트
        this.div_search_cal_date_pic_onchanged = function(obj,e)
        {
        	// 선택월의 1일, 마지막일 구하기
        	const year = this.ds_search.getColumn(0, "DATE").substr(0,4);
        	const month = this.ds_search.getColumn(0, "DATE").substr(4);
        	const firstDay = new Date(year, month - 1, 1);
        	const lastDay = new Date(year, month, 0);
        	const firstString = this.fn_getDateString(firstDay);
        	const lastString = this.fn_getDateString(lastDay);
        	const yearMonth = year + month;

        	// from to 날짜 셋팅
        	this.ds_search.setColumn(0, "DATE_FROM", firstString);
        	this.ds_search.setColumn(0, "DATE_TO", lastString);
        	this.ds_search.setColumn(0, "MON", yearMonth);

        	this.fn_search();
        };

        // 그리드 확장버튼 클릭 이벤트
        this.div_cont_div_main_grd_list_onexpandup = function(obj,e)
        {
        	const updateIdx = obj.getBindCellIndex("body", "조회");
        	// 조회
        	if (e.col == updateIdx)
        	{
        		const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_list.getColumn(e.row, "monalja")
        		,	CODE : this.ds_list.getColumn(e.row, "mocode")
        		};

        		Sct.popup(this, "update", 450, 400, "송영차량일지 조회·수정", param, "DAY_POP::DAY00408_P02.xfdl", "fn_popCallback");
        	}
        };

        // 운행집계 다운로드 (엑셀)
        this.div_func_btn_excel_onclick = function(obj,e)
        {
        	this.fn_excel_search();
        };

        // 차량별 운행일지 버튼
        this.div_func_btn_car_onclick = function(obj,e)
        {
        	const param = {
        		SICODE : fv_sicode
        	,	DATE_FROM : this.ds_search.getColumn(0, "DATE_FROM")
        	,	DATE_TO : this.ds_search.getColumn(0, "DATE_TO")
        	,	DS : this.ds_list
        	};

        	Sct.popup(this, "car", 450, 400, "차량별 운행일지", param, "DAY_POP::DAY00409_P01.xfdl", "fn_popCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_main.form.grd_list.addEventHandler("onexpandup",this.div_cont_div_main_grd_list_onexpandup,this);
            this.div_search.form.cal_date_pic.addEventHandler("onchanged",this.div_search_cal_date_pic_onchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_excel.addEventHandler("onclick",this.div_func_btn_excel_onclick,this);
            this.div_func.form.btn_car.addEventHandler("onclick",this.div_func_btn_car_onclick,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00409.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
