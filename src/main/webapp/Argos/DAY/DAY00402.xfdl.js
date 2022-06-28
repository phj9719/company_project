(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00402");
            this.set_titletext("4-2 송영차량 운행일정 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ord1\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"요일이용\" type=\"STRING\" size=\"256\"/><Column id=\"이용시간\" type=\"STRING\" size=\"256\"/><Column id=\"월요차량\" type=\"STRING\" size=\"256\"/><Column id=\"월요시간\" type=\"STRING\" size=\"256\"/><Column id=\"화요차량\" type=\"STRING\" size=\"256\"/><Column id=\"화요시간\" type=\"STRING\" size=\"256\"/><Column id=\"수요차량\" type=\"STRING\" size=\"256\"/><Column id=\"수요시간\" type=\"STRING\" size=\"256\"/><Column id=\"목요차량\" type=\"STRING\" size=\"256\"/><Column id=\"목요시간\" type=\"STRING\" size=\"256\"/><Column id=\"금요차량\" type=\"STRING\" size=\"256\"/><Column id=\"금요시간\" type=\"STRING\" size=\"256\"/><Column id=\"토요차량\" type=\"STRING\" size=\"256\"/><Column id=\"토요시간\" type=\"STRING\" size=\"256\"/><Column id=\"일요차량\" type=\"STRING\" size=\"256\"/><Column id=\"일요시간\" type=\"STRING\" size=\"256\"/><Column id=\"조회\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"DATE\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_car", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"combocode\" type=\"STRING\" size=\"256\"/><Column id=\"comboname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_week", this);
            obj._setContents("<ColumnInfo><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"mon\" type=\"STRING\" size=\"256\"/><Column id=\"tue\" type=\"STRING\" size=\"256\"/><Column id=\"wed\" type=\"STRING\" size=\"256\"/><Column id=\"thu\" type=\"STRING\" size=\"256\"/><Column id=\"fri\" type=\"STRING\" size=\"256\"/><Column id=\"sat\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0","305","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pre_dt","0","3","80","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("◀ 전날");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date","85","3","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMMddddd");
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_buttonsize("0 0");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_next_dt","224","3","80","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("앞날 ▶");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","cal_date:-1","cal_date:-25","25","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","div_search:10","0",null,"31","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_report1","0","3","235","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("기록식 전체운행일지()");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2","240","3","235","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("기록식 전체운행일정()");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report3","480","3","315","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("기록식 주간운행일정(~)");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_func2","0","35",null,"70","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_report4","200","0","140","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("1");
            obj.set_text("차량별 운행일지");
            obj.set_cssclass("btn_print");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_report5","345","0","195","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("2");
            obj.set_text("차량별 운행일정(해당요일)");
            obj.set_cssclass("btn_print");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_report6","545","0","135","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("3");
            obj.set_text("송영일지서식(A)");
            obj.set_cssclass("btn_print");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_report7","685","0","135","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("4");
            obj.set_text("송영일지서식(B)");
            obj.set_cssclass("btn_print");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_yearCar","950","0","130","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("6");
            obj.set_text("연간 차량운행 현황");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_yearMate","1085","0","140","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("7");
            obj.set_text("연간 수급자 송영집계");
            this.div_func2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","830","37","180","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("8");
            obj.set_text("송영차량 운행일정·현황");
            obj.set_cssclass("lb01");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_driver_select","825","0","120","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("5");
            obj.set_text("운전자지정");
            this.div_func2.addChild(obj.name, obj);

            obj = new Combo("cmb_car_select","0","0","192","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_car");
            obj.set_codecolumn("combocode");
            obj.set_datacolumn("comboname");
            this.div_func2.addChild(obj.name, obj);

            obj = new Div("div_main","0","110",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","20",null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"현황\"/><Cell col=\"1\" text=\"수급자명\"/><Cell col=\"2\" text=\"성별\"/><Cell col=\"3\" text=\"생활실\"/><Cell col=\"4\" text=\"이용일\"/><Cell col=\"5\" text=\"이용시간\"/><Cell col=\"6\" text=\"월(月)\"/><Cell col=\"7\" text=\"월요시간\"/><Cell col=\"8\" text=\"화(火)\"/><Cell col=\"9\" text=\"화요시간\"/><Cell col=\"10\" text=\"수(水)\"/><Cell col=\"11\" text=\"수요시간\"/><Cell col=\"12\" text=\"목(木)\"/><Cell col=\"13\" text=\"목요시간\"/><Cell col=\"14\" text=\"금(金)\"/><Cell col=\"15\" text=\"금요시간\"/><Cell col=\"16\" text=\"토(土)\"/><Cell col=\"17\" text=\"토요시간\"/><Cell col=\"18\" text=\"일(日)\"/><Cell col=\"19\" text=\"일요시간\"/><Cell col=\"20\" text=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:거주현황\"/><Cell col=\"1\" text=\"bind:m_name\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:성별\"/><Cell col=\"3\" text=\"bind:m_roomname\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:요일이용\"/><Cell col=\"5\" text=\"bind:이용시간\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"6\" text=\"bind:월요차량\"/><Cell col=\"7\" text=\"bind:월요시간\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"8\" text=\"bind:화요차량\"/><Cell col=\"9\" text=\"bind:화요시간\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"10\" text=\"bind:수요차량\"/><Cell col=\"11\" text=\"bind:수요시간\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"12\" text=\"bind:목요차량\"/><Cell col=\"13\" text=\"bind:목요시간\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"14\" text=\"bind:금요차량\"/><Cell col=\"15\" text=\"bind:금요시간\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"16\" text=\"bind:토요차량\" cssclass=\"BlueFontCell\"/><Cell col=\"17\" text=\"bind:토요시간\" cssclass=\"BlueFontCell\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"18\" text=\"bind:일요차량\" cssclass=\"RedFontCell\"/><Cell col=\"19\" text=\"bind:일요시간\" cssclass=\"RedFontCell\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"20\" text=\"bind:조회\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"60\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_date_pic","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00402.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00402.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00402.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00402
         * 화면명   	: 송영차량 운행일정 현황
         * 화면설명 	: 송영차량 운행일정 현황을 조회하는 화면
         * 작성일   	: 2022-05-03
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용

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
        	const month = date.getMonth() + 1;

        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE", Sct.Util.getToday());
        	this.ds_search.setColumn(0, "YEAR", year);
        	this.ds_search.setColumn(0, "MONTH", month);

        	// 콤보
        	this.fn_set_car_combo();

        	// 리포트 출력 초기화
        	this.ds_report.setColumn(0, "SIGN", 1);

        	this.fn_search();
        };

        // 그리드 css 적용
        this.initGrid = function(grid)
        {
        	// 성별에 따라 이름 배경색 변경
        	const nameIdx = grid.getBindCellIndex("body", "m_name");
        	const nameCss = "expr:dataset.getColumn(currow, '성별') == '남' ? 'cellBMan' : 'cellBWoman'";
        	grid.setCellProperty("body", nameIdx, "cssclass", nameCss);
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search input2=ds_search";
        	const outDatasets = "ds_list=output1 ds_week=output2";
        	const argument = "method=getList"
        				   + " sqlId='DAY00402.DAY00402_DS_LIST_S DAY00402.DAY00402_DS_WEEK_S '";
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
        				   + " sqlId=DAY00402.DAY00402_DS_CAR_S";

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
        			if (this.ds_week.rowcount > 0)
        			{
        				const sun = this.ds_week.getColumn(0, "sun");
        				const sat = this.ds_week.getColumn(0, "sat");

        				this.div_func.form.btn_report1.set_text("기록식 전체운행일지(" + sun + ")");
        				this.div_func.form.btn_report2.set_text("기록식 전체운행일정(" + sun + ")");
        				this.div_func.form.btn_report3.set_text("기록식 주간운행일정(" + sun + "~" + sat + ")");
        			}

        			this.initGrid(this.div_main.form.grd_list);
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
        // 차량 콤보 세팅
        this.fn_set_car_combo = function()
        {
        	this.ds_car.clearData();

        	this.fn_car_search();

        	const firstRowValue = this.ds_car.getColumn(0, "combocode");
        	this.div_func2.form.cmb_car_select.set_value(firstRowValue);
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 출력
        this.fn_report = function(obj,e)
        {
        	let popupUrl = "";
        	let popupName = "";
        	switch(obj.id)
        	{
        		case "btn_report1" :
        			popupUrl = "DAY_POP::DAY00402_R01.xfdl";
        			popupName = "기록식 전체운행일지";
        			break;
        		case "btn_report2" :
        			popupUrl = "DAY_POP::DAY00402_R02.xfdl";
        			popupName = "기록식 전체운행일정";
        			break;
        		case "btn_report3" :
        			popupUrl = "DAY_POP::DAY00402_R03.xfdl";
        			popupName = "기록식 주간운행일정";
        			break;
        		case "btn_report4" :
        			popupUrl = "DAY_POP::DAY00402_R04.xfdl";
        			popupName = "차량별 운행일지";
        			break;
        		case "btn_report5" :
        			popupUrl = "DAY_POP::DAY00402_R05.xfdl";
        			popupName = "차량별 운행일정";
        			break;
        		case "btn_report6" :
        			popupUrl = "DAY_POP::DAY00402_R06.xfdl";
        			popupName = "송영일지서식(A)";
        			break;
        		case "btn_report7" :
        			popupUrl = "DAY_POP::DAY00402_R07.xfdl";
        			popupName = "송영일지서식(B)";
        			break;
        		default:
        	}

        	let params;
        	const dicompNm = " ";

        	params = {
        		sicode : fv_sicode
        	,	date : this.ds_search.getColumn(0, "DATE")
        	,	gubun : this.div_func2.form.cmb_car_select.value
        	,	year : this.ds_search.getColumn(0, "YEAR")
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 운전자지정 버튼
        this.div_func_btn_driver_select_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_search.getColumn(0, "DATE")
        	};

        	Sct.popup(this, "driverSelect", 450, 400, "차량별 송영일지 출력", param, "DAY_POP::DAY00401_P04.xfdl", "fn_popCallback");
        };

        // 연간 차량운행 현황 버튼
        this.div_func2_btn_yearCar_onclick = function(obj,e)
        {
        	const param = {
        		SICODE : fv_sicode
        	,	YEAR : this.ds_search.getColumn(0, "YEAR")
        	};

        	Sct.popup(this, "yearCar", 450, 400, "연간 차량운행 현황", param, "DAY_POP::DAY00402_P02.xfdl", "fn_popCallback");
        };

        // 연간 수급자별 송영집계 버튼
        this.div_func2_btn_yearMate_onclick = function(obj,e)
        {
        	const param = {
        		SICODE : fv_sicode
        	,	YEAR : this.ds_search.getColumn(0, "YEAR")
        	};

        	Sct.popup(this, "yearMate", 450, 400, "연간 수급자별 송영집계", param, "DAY_POP::DAY00402_P03.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	//trace("popid : " + popid);
        	if (popid != "driverSelect"
        		&& popid != "yearCar"
        		&& popid != "yearMate"
        		&& popid != "search")
        	{
        		if(Sct.Util.isEmpty(strDs)) return;
        	}
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "driverSelect" :
        		case "yearCar" :
        		case "yearMate" :
        		case "search" :
        			//trace("검색하자!");
        			this.fn_search();
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 앞날
        this.div_search_btn_next_dt_onclick = function(obj,e)
        {
        	const searchDt = this.ds_search.getColumn(0, "DATE");
        	searchDt.setDate(searchDt.getDate() + 1);
        	this.ds_search.setColumn(0, "DATE", searchDt);
        	this.ds_search.setColumn(0, "YEAR", searchDt.getFullYear());
        	this.ds_search.setColumn(0, "MONTH", searchDt.getMonth() + 1);
        	this.fn_search();
        };

        // 전날
        this.div_search_btn_pre_dt_onclick = function(obj,e)
        {
        	const searchDt = this.ds_search.getColumn(0, "DATE");
        	searchDt.setDate(searchDt.getDate() - 1);
        	this.ds_search.setColumn(0, "DATE", searchDt);
        	this.ds_search.setColumn(0, "YEAR", searchDt.getFullYear());
        	this.ds_search.setColumn(0, "MONTH", searchDt.getMonth() + 1);
        	this.fn_search();
        };

        // 날짜 변경 이벤트
        this.div_search_cal_date_pic_onchanged = function(obj,e)
        {
        	const searchDt = this.ds_search.getColumn(0, "DATE");
        	this.ds_search.setColumn(0, "YEAR", searchDt.getFullYear());
        	this.ds_search.setColumn(0, "MONTH", searchDt.getMonth() + 1);
        	this.fn_search();
        };

        // 그리드 확장버튼 클릭 이벤트
        this.div_main_grd_list_onexpandup = function(obj,e)
        {
        	const searchIdx = obj.getBindCellIndex("body", "조회");
        	// 돋보기
        	if (e.col == searchIdx)
        	{
        		const param = {
        			SICODE : fv_sicode
        		,	M_CODE : this.ds_list.getColumn(e.row, "m_code")
        		};

        		Sct.popup(this, "search", 450, 400, "수급자 주간송영 운행일정", param, "DAY_POP::DAY00402_P01.xfdl", "fn_popCallback");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.btn_pre_dt.addEventHandler("onclick",this.div_search_btn_pre_dt_onclick,this);
            this.div_search.form.cal_date.addEventHandler("onchanged",this.div_search_cal_sdate_onchanged,this);
            this.div_search.form.btn_next_dt.addEventHandler("onclick",this.div_search_btn_next_dt_onclick,this);
            this.div_search.form.cal_date_pic.addEventHandler("onchanged",this.div_search_cal_date_pic_onchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report3.addEventHandler("onclick",this.fn_report,this);
            this.div_func2.form.btn_report4.addEventHandler("onclick",this.fn_report,this);
            this.div_func2.form.btn_report5.addEventHandler("onclick",this.fn_report,this);
            this.div_func2.form.btn_report6.addEventHandler("onclick",this.fn_report,this);
            this.div_func2.form.btn_report7.addEventHandler("onclick",this.fn_report,this);
            this.div_func2.form.btn_yearCar.addEventHandler("onclick",this.div_func2_btn_yearCar_onclick,this);
            this.div_func2.form.btn_yearMate.addEventHandler("onclick",this.div_func2_btn_yearMate_onclick,this);
            this.div_func2.form.btn_driver_select.addEventHandler("onclick",this.div_func_btn_driver_select_onclick,this);
            this.div_main.form.grd_list.addEventHandler("onexpandup",this.div_main_grd_list_onexpandup,this);
        };
        this.loadIncludeScript("DAY00402.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
