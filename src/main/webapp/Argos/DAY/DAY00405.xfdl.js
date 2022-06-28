(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00405");
            this.set_titletext("4-5 월간 출석률·송영집계");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ord1\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"등급\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"일수\" type=\"STRING\" size=\"256\"/><Column id=\"아침\" type=\"STRING\" size=\"256\"/><Column id=\"점심\" type=\"STRING\" size=\"256\"/><Column id=\"저녁\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"퇴소일\" type=\"STRING\" size=\"256\"/><Column id=\"조회\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"생일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/><Column id=\"MON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"nalja\" type=\"STRING\" size=\"256\"/><Column id=\"요일\" type=\"STRING\" size=\"256\"/><Column id=\"현인원\" type=\"STRING\" size=\"256\"/><Column id=\"출석\" type=\"STRING\" size=\"256\"/><Column id=\"남자\" type=\"STRING\" size=\"256\"/><Column id=\"여자\" type=\"STRING\" size=\"256\"/><Column id=\"시작거주지y\" type=\"STRING\" size=\"256\"/><Column id=\"시작거주지n\" type=\"STRING\" size=\"256\"/><Column id=\"종료거주지y\" type=\"STRING\" size=\"256\"/><Column id=\"종료거주지n\" type=\"STRING\" size=\"256\"/><Column id=\"야간\" type=\"STRING\" size=\"256\"/><Column id=\"아침\" type=\"STRING\" size=\"256\"/><Column id=\"점심\" type=\"STRING\" size=\"256\"/><Column id=\"저녁\" type=\"STRING\" size=\"256\"/><Column id=\"식수합\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","800",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_subTitle1","0","0","220","25",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_text("수급자별 월간 출석·식사집계");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Grid("grd_list1","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"현황\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"생활실\"/><Cell col=\"6\" text=\"일수\"/><Cell col=\"7\" text=\"아침\"/><Cell col=\"8\" text=\"점심\"/><Cell col=\"9\" text=\"저녁\"/><Cell col=\"10\" text=\"입소일\"/><Cell col=\"11\" text=\"퇴소일\"/><Cell col=\"12\" text=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:거주현황\"/><Cell col=\"1\" text=\"bind:m_group\"/><Cell col=\"2\" text=\"bind:m_name\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:성별\"/><Cell col=\"4\" text=\"bind:등급\"/><Cell col=\"5\" text=\"bind:m_roomname\"/><Cell col=\"6\" text=\"bind:일수\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" expr=\"dataset.getColumn(currow, '일수') == 0 ? '' : dataset.getColumn(currow, '일수')\"/><Cell col=\"7\" text=\"bind:아침\" expr=\"dataset.getColumn(currow, '아침') == 0 ? '' : dataset.getColumn(currow, '아침')\"/><Cell col=\"8\" text=\"bind:점심\" expr=\"dataset.getColumn(currow, '점심') == 0 ? '' : dataset.getColumn(currow, '점심')\"/><Cell col=\"9\" text=\"bind:저녁\" expr=\"dataset.getColumn(currow, '저녁') == 0 ? '' : dataset.getColumn(currow, '저녁')\"/><Cell col=\"10\" text=\"bind:m_enday\" displaytype=\"date\" expandchar=\"dot\"/><Cell col=\"11\" text=\"bind:퇴소일\" displaytype=\"date\" expandchar=\"dot\" color=\"red\"/><Cell col=\"12\" text=\"bind:조회\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"50\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","div_left:10","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_subTitle2","0","0","190","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("월간 출석,송영,식사 집계");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_list2","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"송영일\"/><Cell col=\"1\" text=\"요일\"/><Cell col=\"2\" text=\"현인원\"/><Cell col=\"3\" text=\"출석\"/><Cell col=\"4\" text=\"남\"/><Cell col=\"5\" text=\"여\"/><Cell col=\"6\" text=\"시작(Y)\"/><Cell col=\"7\" text=\"시작(N)\"/><Cell col=\"8\" text=\"종료(Y)\"/><Cell col=\"9\" text=\"종료(N)\"/><Cell col=\"10\" text=\"야간\"/><Cell col=\"11\" text=\"아침\"/><Cell col=\"12\" text=\"점심\"/><Cell col=\"13\" text=\"저녁\"/><Cell col=\"14\" text=\"식수합\"/></Band><Band id=\"body\"><Cell text=\"bind:nalja\"/><Cell col=\"1\" text=\"bind:요일\"/><Cell col=\"2\" text=\"bind:현인원\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" expr=\"dataset.getColumn(currow, '현인원') == 0 ? '' : dataset.getColumn(currow, '현인원')\"/><Cell col=\"3\" text=\"bind:출석\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" expr=\"dataset.getColumn(currow, '출석') == 0 ? '' : dataset.getColumn(currow, '출석')\"/><Cell col=\"4\" text=\"bind:남자\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" expr=\"dataset.getColumn(currow, '남자') == 0 ? '' : dataset.getColumn(currow, '남자')\"/><Cell col=\"5\" text=\"bind:여자\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" expr=\"dataset.getColumn(currow, '여자') == 0 ? '' : dataset.getColumn(currow, '여자')\"/><Cell col=\"6\" text=\"bind:시작거주지y\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" expr=\"dataset.getColumn(currow, '시작거주지y') == 0 ? '' : dataset.getColumn(currow, '시작거주지y')\"/><Cell col=\"7\" text=\"bind:시작거주지n\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" expr=\"dataset.getColumn(currow, '시작거주지n') == 0 ? '' : dataset.getColumn(currow, '시작거주지n')\"/><Cell col=\"8\" text=\"bind:종료거주지y\" expr=\"dataset.getColumn(currow, '종료거주지y') == 0 ? '' : dataset.getColumn(currow, '종료거주지y')\"/><Cell col=\"9\" text=\"bind:종료거주지n\" expr=\"dataset.getColumn(currow, '종료거주지n') == 0 ? '' : dataset.getColumn(currow, '종료거주지n')\"/><Cell col=\"10\" text=\"bind:야간\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" color=\"red\" expr=\"dataset.getColumn(currow, '야간') == 0 ? '' : dataset.getColumn(currow, '야간')\"/><Cell col=\"11\" text=\"bind:아침\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" expr=\"dataset.getColumn(currow, '아침') == 0 ? '' : dataset.getColumn(currow, '아침')\"/><Cell col=\"12\" text=\"bind:점심\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" expr=\"dataset.getColumn(currow, '점심') == 0 ? '' : dataset.getColumn(currow, '점심')\"/><Cell col=\"13\" text=\"bind:저녁\" expr=\"dataset.getColumn(currow, '저녁') == 0 ? '' : dataset.getColumn(currow, '저녁')\"/><Cell col=\"14\" text=\"bind:식수합\" expr=\"dataset.getColumn(currow, '식수합') == 0 ? '' : dataset.getColumn(currow, '식수합')\"/></Band></Format></Formats>");
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

            obj = new Div("div_func","div_search:10","0","868","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_report1","0","4","175","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("월간 수급자 송영집계");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2","180","4","175","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("월간 출석률 식수 집계");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report3","360","4","185","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("월간 수급자 결석리스트");
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
        this.addIncludeScript("DAY00405.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00405.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00405.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00405
         * 화면명   	: 월간 출석률·송영집계
         * 화면설명 	: 해당월의 출석,송영,식사 집계를 확인하는 화면
         * 작성일   	: 2022-05-09
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

        	// 퇴소여부에 따라 수급상태 배경색 변경
        	const nowIdx = grid.getBindCellIndex("body", "거주현황");
        	const nowCss = "expr:dataset.getColumn(currow, '거주현황') == '퇴소자' ? 'cellBRetire' : ''";
        	grid.setCellProperty("body", nowIdx, "cssclass", nowCss);
        };

        // 그리드에 css 적용
        this.initGrid2 = function(grid)
        {
        	// 요일에 따라 송영일 색 변경
        	const dayIdx = grid.getBindCellIndex("body", "nalja");
        	const dayCss = "expr:dataset.getColumn(currow, '요일') == '(일)' ? 'RedFontCell' : ''";
        	grid.setCellProperty("body", dayIdx, "cssclass", dayCss);

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
        	const inDatasets = "input1=ds_search input2=ds_search";
        	const outDatasets = "ds_list1=output1 ds_list2=output2";
        	const argument = "method=getList"
        				   + " sqlId='DAY00405.DAY00405_DS_LIST1_S DAY00405.DAY00405_DS_LIST2_S'";
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
        			this.initGrid(this.div_cont.form.div_left.form.grd_list1);
        			this.initGrid2(this.div_cont.form.div_right.form.grd_list2);
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
        	let popupUrl = "";
        	let popupName = "";
        	switch(obj.id)
        	{
        		case "btn_report1" :
        			popupUrl = "DAY_POP::DAY00405_R01.xfdl";
        			popupName = "월간 수급자 송영집계";
        			break;
        		case "btn_report2" :
        			popupUrl = "DAY_POP::DAY00405_R02.xfdl";
        			popupName = "월간 출석률 식수 집계";
        			break;
        		case "btn_report3" :
        			popupUrl = "DAY_POP::DAY00405_R03.xfdl";
        			popupName = "월간 수급자 결석리스트";
        			break;
        		default:
        	}

        	let params;
        	const dicompNm = " ";

        	params = {
        		sicode : fv_sicode
        	,	date : this.ds_search.getColumn(0, "DATE")
        	,	from : this.ds_search.getColumn(0, "DATE_FROM")
        	,	to : this.ds_search.getColumn(0, "DATE_TO")
        	,	mon : this.ds_search.getColumn(0, "MON")
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
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
        	const firstDay = new Date(year, month - 1 , 1);
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

        // 그리드 확장 버튼 이벤트
        this.div_cont_div_left_grd_list1_onexpandup = function(obj,e)
        {
        	const exIdx = obj.getBindCellIndex("body", "조회");

        	if (e.col == exIdx)
        	{
        		const tot = this.ds_list1.getColumn(e.row, "일수");
        		const name = this.ds_list1.getColumn(e.row, "m_name");
        		const code = this.ds_list1.getColumn(e.row, "m_code");
        		const sex = this.ds_list1.getColumn(e.row, "성별");
        		const birth = this.ds_list1.getColumn(e.row, "생일");
        		const enday = this.ds_list1.getColumn(e.row, "m_enday");
        		const reday = this.ds_list1.getColumn(e.row, "퇴소일");

        		if (tot == undefined)
        			return;
        		if (tot < 1)
        			return;

        		const param = {
        			SICODE : fv_sicode
        		,	NAME : name
        		,	CODE : code
        		,	SEX : sex
        		,	BIRTH : birth
        		,	ENDAY : enday
        		,	REDAY : reday
        		,	TOT : tot
        		,	FROM : this.ds_search.getColumn(0, "DATE_FROM")
        		,	TO : this.ds_search.getColumn(0, "DATE_TO")
        		,	YEARMON : this.ds_search.getColumn(0, "MON")
        		};

        		Sct.popup(this, "search", 450, 400, "월간 수급자 송영·식사 기록", param, "DAY_POP::DAY00405_P01.xfdl", "fn_popCallback");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list1.addEventHandler("onexpandup",this.div_cont_div_left_grd_list1_onexpandup,this);
            this.div_search.form.cal_date_pic.addEventHandler("onchanged",this.div_search_cal_date_pic_onchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report3.addEventHandler("onclick",this.fn_report,this);
        };
        this.loadIncludeScript("DAY00405.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
