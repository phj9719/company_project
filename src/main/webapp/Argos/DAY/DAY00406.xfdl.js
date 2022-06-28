(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00406");
            this.set_titletext("4-6 월간 송영일지·시간오류");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"mday\" type=\"DATE\" size=\"256\"/><Column id=\"일자\" type=\"STRING\" size=\"256\"/><Column id=\"요일\" type=\"STRING\" size=\"256\"/><Column id=\"k_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"일인원\" type=\"STRING\" size=\"256\"/><Column id=\"시작차량\" type=\"STRING\" size=\"256\"/><Column id=\"시작미차량\" type=\"STRING\" size=\"256\"/><Column id=\"시작남자\" type=\"STRING\" size=\"256\"/><Column id=\"시작여자\" type=\"STRING\" size=\"256\"/><Column id=\"종료차량\" type=\"STRING\" size=\"256\"/><Column id=\"종료미차량\" type=\"STRING\" size=\"256\"/><Column id=\"종료남자\" type=\"STRING\" size=\"256\"/><Column id=\"종료여자\" type=\"STRING\" size=\"256\"/><Column id=\"시작중복\" type=\"STRING\" size=\"256\"/><Column id=\"종료중복\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/><Column id=\"MON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"k_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"k_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"시작코스\" type=\"STRING\" size=\"256\"/><Column id=\"시작차번호\" type=\"STRING\" size=\"256\"/><Column id=\"시작거주지\" type=\"STRING\" size=\"256\"/><Column id=\"시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"시작기사\" type=\"STRING\" size=\"256\"/><Column id=\"시작동승\" type=\"STRING\" size=\"256\"/><Column id=\"종료코스\" type=\"STRING\" size=\"256\"/><Column id=\"종료차번호\" type=\"STRING\" size=\"256\"/><Column id=\"종료거주지\" type=\"STRING\" size=\"256\"/><Column id=\"종료시간\" type=\"STRING\" size=\"256\"/><Column id=\"종료기사\" type=\"STRING\" size=\"256\"/><Column id=\"종료동승\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_car", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"combocode\" type=\"STRING\" size=\"256\"/><Column id=\"comboname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","900",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_subTitle1","0","0","220","25",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_text("월간 송영일지·시간오류");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" cursor=\"pointer\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"출력\" expandchar=\"rno\"/></Cell><Cell col=\"2\" text=\"제공일\"/><Cell col=\"3\" text=\"요일\"/><Cell col=\"4\" text=\"인원\"/><Cell col=\"5\" text=\"시작\"/><Cell col=\"6\" text=\"미차량\"/><Cell col=\"7\" text=\"남자\"/><Cell col=\"8\" text=\"여자\"/><Cell col=\"9\" text=\"종료\"/><Cell col=\"10\" text=\"미차량\"/><Cell col=\"11\" text=\"남자\"/><Cell col=\"12\" text=\"여자\"/><Cell col=\"13\" text=\"시·동일\"/><Cell col=\"14\" text=\"종·동일\"/></Band><Band id=\"body\"><Cell colspan=\"2\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:CHK\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"일지\"/></Cell><Cell col=\"2\" text=\"bind:일자\" cursor=\"pointer\"/><Cell col=\"3\" text=\"bind:요일\"/><Cell col=\"4\" text=\"bind:일인원\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" expr=\"dataset.getColumn(currow, '일인원') == 0 ? '' : dataset.getColumn(currow, '일인원')\"/><Cell col=\"5\" text=\"bind:시작차량\" expr=\"dataset.getColumn(currow, '시작차량') == 0 ? '' : dataset.getColumn(currow, '시작차량')\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"6\" text=\"bind:시작미차량\" expr=\"dataset.getColumn(currow, '시작미차량') == 0 ? '' : dataset.getColumn(currow, '시작미차량')\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"7\" text=\"bind:시작남자\" expr=\"dataset.getColumn(currow, '시작남자') == 0 ? '' : dataset.getColumn(currow, '시작남자')\"/><Cell col=\"8\" text=\"bind:시작여자\" expr=\"dataset.getColumn(currow, '시작여자') == 0 ? '' : dataset.getColumn(currow, '시작여자')\"/><Cell col=\"9\" text=\"bind:종료차량\" expr=\"dataset.getColumn(currow, '종료차량') == 0 ? '' : dataset.getColumn(currow, '종료차량')\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"10\" text=\"bind:종료미차량\" expr=\"dataset.getColumn(currow, '종료미차량') == 0 ? '' : dataset.getColumn(currow, '종료미차량')\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"11\" text=\"bind:종료남자\" expr=\"dataset.getColumn(currow, '종료남자') == 0 ? '' : dataset.getColumn(currow, '종료남자')\"/><Cell col=\"12\" text=\"bind:종료여자\" expr=\"dataset.getColumn(currow, '종료여자') == 0 ? '' : dataset.getColumn(currow, '종료여자')\"/><Cell col=\"13\" text=\"bind:시작중복\" expr=\"dataset.getColumn(currow, '시작중복') == 0 ? '' : dataset.getColumn(currow, '시작중복')\" color=\"red\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"14\" text=\"bind:종료중복\" expr=\"dataset.getColumn(currow, '종료중복') == 0 ? '' : dataset.getColumn(currow, '종료중복')\" color=\"red\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","div_left:10","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_subTitle2","0","0","190","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("일별 수급자 송영현황");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_detail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"수급자\"/><Cell col=\"1\" text=\"성별\"/><Cell col=\"2\" text=\"차량\"/><Cell col=\"3\" text=\"차번호\"/><Cell col=\"4\" text=\"거주\"/><Cell col=\"5\" text=\"시작\"/><Cell col=\"6\" text=\"운전자\"/><Cell col=\"7\" text=\"동승자\"/><Cell col=\"8\" text=\"차량\"/><Cell col=\"9\" text=\"차번호\"/><Cell col=\"10\" text=\"거주\"/><Cell col=\"11\" text=\"종료\"/><Cell col=\"12\" text=\"운전자\"/><Cell col=\"13\" text=\"동승자\"/></Band><Band id=\"body\"><Cell text=\"bind:k_name\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:성별\"/><Cell col=\"2\" text=\"bind:시작코스\"/><Cell col=\"3\" text=\"bind:시작차번호\"/><Cell col=\"4\" text=\"bind:시작거주지\"/><Cell col=\"5\" text=\"bind:시작시간\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"6\" text=\"bind:시작기사\"/><Cell col=\"7\" text=\"bind:시작동승\"/><Cell col=\"8\" text=\"bind:종료코스\"/><Cell col=\"9\" text=\"bind:종료차번호\"/><Cell col=\"10\" text=\"bind:종료거주지\"/><Cell col=\"11\" text=\"bind:종료시간\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"12\" text=\"bind:종료기사\"/><Cell col=\"13\" text=\"bind:종료동승\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","365","35",null,null,null,null,null,null,this);
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

            obj = new Div("div_func","div_search:10","0",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_report1","0","4","145","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("전체차량송영일지");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_report_body00","149","2","485","31",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_func.addChild(obj.name, obj);

            obj = new Combo("cmb_car_select","155","5","192","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_car");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2","351","4","135","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("차량별운행일지");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report3","490","4","135","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("차량별송영일지");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report4","640","4","145","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("월간송영인원집계");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00406.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00406.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00406.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00406
         * 화면명   	: 월간 송영일지·시간오류
         * 화면설명 	: 해당월의 송영인원집계와 송영일지 차량별 운행,송영일지
        				  를 출력하기 위한 화면
         * 작성일   	: 2022-05-12
         * 작성자   	: 조기종
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

        	// 콤보
        	this.fn_set_car_combo();

        	// 조회
        	this.fn_search();
        };

        // 그리드에 css 적용
        this.initGrid = function(grid)
        {
        	// 성별에 따라 이름 배경색 변경
        	const nameIdx = grid.getBindCellIndex("body", "k_name");
        	const nameCss = "expr:dataset.getColumn(currow, '성별') == '남' ? 'cellBMan' : 'cellBWoman'";
        	grid.setCellProperty("body", nameIdx, "cssclass", nameCss);
        };

        // 그리드에 css 적용
        this.initGrid2 = function(grid)
        {
        	// 요일에 따라 요일 색 변경
        	const dddIdx = grid.getBindCellIndex("body", "요일");
        	const dddCss = "expr:dataset.getColumn(currow, '요일') == '(일)' ? 'RedFontCell' : ''";
        	grid.setCellProperty("body", dddIdx, "cssclass", dddCss);
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
        				   + " sqlId=DAY00406.DAY00406_DS_LIST_S";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_searchDetail = function(day)
        {
        	const svcId = "searchDetail";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_detail=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00406.DAY00406_DS_DETAIL_S"
        				   + " sicode=" + fv_sicode
        				   + " mday=" + day;

        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 차량 조회
        this.fn_car_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_car=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00406.DAY00406_DS_CAR_S";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			this.initGrid2(this.div_cont.form.div_left.form.grd_list);
        		}
        		else if (strSvcID == "searchDetail")
        		{
        			this.initGrid(this.div_cont.form.div_right.form.grd_detail);
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

        // 차량 콤보 세팅
        this.fn_set_car_combo = function()
        {
        	this.ds_car.clearData();

        	this.fn_car_search();

        	const firstRowValue = this.ds_car.getColumn(0, "combocode");
        	this.div_func.form.cmb_car_select.set_value(firstRowValue);
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 리포트 출력
        this.fn_report = function(obj,e)
        {
        	let popupUrl = "";
        	let popupName = "";

        	let chk = 0;
        	const dateArr = [];
        	for (let i = 0; i < this.ds_list.rowcount; i++)
        	{
        		let chkVal = parseInt(this.ds_list.getColumn(i, "CHK"));
        		if (this.ds_list.getColumn(i, "CHK") == undefined)
        			chkVal = 0;

        		chk += chkVal
        		if (this.ds_list.getColumn(i, "CHK") == 1)
        		{
        			const chkDate = this.ds_list.getColumn(i, "mday");
        			dateArr.push(chkDate);
        		}
        	}

        	let isOpen = true;

        	switch(obj.id)
        	{
        		case "btn_report1" :
        			popupUrl = "DAY_POP::DAY00401_R01.xfdl";
        			popupName = "전체차량송영일지";
        			if (chk < 1) isOpen = false;
        			break;
        		case "btn_report2" :
        			popupUrl = "DAY_POP::DAY00401_R03.xfdl";
        			popupName = "차량별운행일지";
        			if (chk < 1) isOpen = false;
        			break;
        		case "btn_report3" :
        			popupUrl = "DAY_POP::DAY00401_R04.xfdl";
        			popupName = "차량별송영일지";
        			if (chk < 1) isOpen = false;
        			break;
        		case "btn_report4" :
        			popupUrl = "DAY_POP::DAY00406_R01.xfdl";
        			popupName = "월간송영인원집계";
        			break;
        		default:
        	}

        	if (!isOpen)
        	{
        		this.alert("선택된 출력항목이 없습니다.");
        		return;
        	}

        	let params;
        	const dicompNm = " ";

        	const gubun = this.div_func.form.cmb_car_select.value;
        	const fRow = this.ds_car.findRow("combocode", gubun);
        	const cName = this.ds_car.getColumn(fRow, "comboname");
        	const cNameArr = cName.split("-");
        	const no = cNameArr[1];

        	params = {
        		sicode : fv_sicode
        	,	date : this.ds_search.getColumn(0, "DATE")
        	,	from : this.ds_search.getColumn(0, "DATE_FROM")
        	,	to : this.ds_search.getColumn(0, "DATE_TO")
        	,	mon : this.ds_search.getColumn(0, "MON")
        	,	flag : "0"
        	,	gubun : gubun
        	,	no : no
        	,	chk : chk
        	,	dateArr : dateArr
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
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

        // 월간 송영일지·시간오류 그리드 셀 클릭 이벤트
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	const dayIdx = obj.getBindCellIndex("body", "일자");
        	//trace("dayIdx : " + dayIdx);
        	//trace("e.col : " + e.col);
        	//trace("e.cell : " + e.cell);
        	if (e.cell == dayIdx)
        	{
        		const day = this.ds_list.getColumn(e.row, "mday");
        		this.fn_searchDetail(day);
        	}
        };

        // 월간 송영일지·시간오류 데이터셋 컬럼 변경 이벤트
        this.ds_list_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "CHK")
        	{
        		const count = obj.getColumn(e.row, "일인원");
        		//trace("count : " + count);
        		if (count == undefined || count < 1)
        			obj.setColumn(e.row, "CHK", e.oldvalue);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_search.form.cal_date_pic.addEventHandler("onchanged",this.div_search_cal_date_pic_onchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report3.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report4.addEventHandler("onclick",this.fn_report,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00406.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
