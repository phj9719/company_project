(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00105");
            this.set_titletext("1-5 목욕제공 일정표");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"ba_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY01\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY02\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY03\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY04\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY05\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY06\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY07\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY08\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY09\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY10\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY11\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY12\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY13\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY14\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY15\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY16\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY17\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY18\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY19\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY20\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY21\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY22\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY23\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY24\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY25\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY26\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY27\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY28\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY29\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY30\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDAY31\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"sign\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">2021</Col><Col id=\"CMNM\">2021년</Col></Row><Row><Col id=\"CMCD\">2022</Col><Col id=\"CMNM\">2022년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_month", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_cnt", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report_cnt", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_main","0","0","1870","740",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","38","1860","700",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"78\"/><Column size=\"48\"/><Column size=\"112\"/><Column size=\"45\"/><Column size=\"84\"/><Column size=\"48\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/><Column size=\"46\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"현황\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"생활실\"/><Cell col=\"5\" text=\"일수\"/><Cell col=\"6\" text=\"01\"/><Cell col=\"7\" text=\"02\"/><Cell col=\"8\" text=\"03\"/><Cell col=\"9\" text=\"04\"/><Cell col=\"10\" text=\"05\"/><Cell col=\"11\" text=\"06\"/><Cell col=\"12\" text=\"07\"/><Cell col=\"13\" text=\"08\"/><Cell col=\"14\" text=\"09\"/><Cell col=\"15\" text=\"10\"/><Cell col=\"16\" text=\"11\"/><Cell col=\"17\" text=\"12\"/><Cell col=\"18\" text=\"13\"/><Cell col=\"19\" text=\"14\"/><Cell col=\"20\" text=\"15\"/><Cell col=\"21\" text=\"16\"/><Cell col=\"22\" text=\"17\"/><Cell col=\"23\" text=\"18\"/><Cell col=\"24\" text=\"19\"/><Cell col=\"25\" text=\"20\"/><Cell col=\"26\" text=\"21\"/><Cell col=\"27\" text=\"22\"/><Cell col=\"28\" text=\"23\"/><Cell col=\"29\" text=\"24\"/><Cell col=\"30\" text=\"25\"/><Cell col=\"31\" text=\"26\"/><Cell col=\"32\" text=\"27\"/><Cell col=\"33\" text=\"28\"/><Cell col=\"34\" text=\"29\"/><Cell col=\"35\" text=\"30\"/><Cell col=\"36\" text=\"31\"/></Band><Band id=\"body\"><Cell text=\"bind:거주현황\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:m_group\" combodataset=\"ds_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"2\" text=\"bind:m_name\" textAlign=\"center\" cssclass=\"cellBWoman\" cursor=\"pointer\" expandchar=\"dot\"/><Cell col=\"3\" text=\"bind:sex_nm\"/><Cell col=\"4\" text=\"bind:m_roomname\"/><Cell col=\"5\" text=\"bind:ba_cnt\"/><Cell col=\"6\" text=\"bind:WORKDAY01\"/><Cell col=\"7\" text=\"bind:WORKDAY02\"/><Cell col=\"8\" text=\"bind:WORKDAY03\"/><Cell col=\"9\" text=\"bind:WORKDAY04\"/><Cell col=\"10\" text=\"bind:WORKDAY05\"/><Cell col=\"11\" text=\"bind:WORKDAY06\"/><Cell col=\"12\" text=\"bind:WORKDAY07\"/><Cell col=\"13\" text=\"bind:WORKDAY08\"/><Cell col=\"14\" text=\"bind:WORKDAY09\"/><Cell col=\"15\" text=\"bind:WORKDAY10\"/><Cell col=\"16\" text=\"bind:WORKDAY11\"/><Cell col=\"17\" text=\"bind:WORKDAY12\"/><Cell col=\"18\" text=\"bind:WORKDAY13\"/><Cell col=\"19\" text=\"bind:WORKDAY14\"/><Cell col=\"20\" text=\"bind:WORKDAY15\"/><Cell col=\"21\" text=\"bind:WORKDAY16\"/><Cell col=\"22\" text=\"bind:WORKDAY17\"/><Cell col=\"23\" text=\"bind:WORKDAY18\"/><Cell col=\"24\" text=\"bind:WORKDAY19\"/><Cell col=\"25\" text=\"bind:WORKDAY20\"/><Cell col=\"26\" text=\"bind:WORKDAY21\"/><Cell col=\"27\" text=\"bind:WORKDAY22\"/><Cell col=\"28\" text=\"bind:WORKDAY23\"/><Cell col=\"29\" text=\"bind:WORKDAY24\"/><Cell col=\"30\" text=\"bind:WORKDAY25\"/><Cell col=\"31\" text=\"bind:WORKDAY26\"/><Cell col=\"32\" text=\"bind:WORKDAY27\"/><Cell col=\"33\" text=\"bind:WORKDAY28\"/><Cell col=\"34\" text=\"bind:WORKDAY29\"/><Cell col=\"35\" text=\"bind:WORKDAY30\"/><Cell col=\"36\" text=\"bind:WORKDAY31\"/></Band></Format></Formats>");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","1","2","250","26",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("1");
            obj.set_text("월간 목욕서비스 제공일정표");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_info","1510","2","350","26",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("2");
            obj.set_text("①-전신입욕 ②-목욕의자 ③-침상 ④-묙욕거부 ⑤-미입소 ♨-예정");
            obj.set_font("normal 9pt/normal \"Arial\"");
            obj.set_verticalAlign("bottom");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","880","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","352","12","8","17",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_year","111","7","79","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_month","189","7","63","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_month");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","257","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","365","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_all","581","7","50","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("전체");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_a","636","7","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("A");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_b","676","7","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("B");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_c","716","7","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("C");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_d","756","7","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("D");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_e","796","7","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("E");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prv","1","7","50","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("전월");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_cur","56","7","50","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("당월");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","70","26","350",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","1010","0","850","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","234","7","85","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("결재란표시");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2","513","7","185","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("월간목욕일정표(리스트)");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_hist",null,"7","147","26","0",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("목욕제공기록 조회");
            obj.set_cssclass("btn_search");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","326","7","182","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("월간목욕일정표(일-8인)");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_search.form.cal_date_from","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.cal_date_to","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_func.form.chk_sign","value","ds_report","sign");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00105.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00105.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00105.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00105
         * 화면명   	: 1-5 목욕제공 일정표
         * 화면설명 	:
         * 작성일   	: 2022-05-27
         * 작성자   	: 박영주
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
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.div_main.form.grd_list;
        this.reSearchData = "";
        this.searchFlag = "";
        this.fileGroupId = "";
        this.grp_btns = [];	// 그룹 버튼 A,B,C,D,E,전체 배열
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 그리드 설정
        	this.fn_setMainGrid();

        	// 리포트 출력 초기화
        	this.ds_report.setColumn(0, "sign", 1);

        	// 콤보 세팅
        	this.fn_setComboDs(obj);
        	this.fn_setMonth();

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	var today = Sct.Util.getToday();
        	var ym = today.substring(0,6);
        	var date_from = ym + '01';
        	var date_to = Sct.Util.getLastDay(ym);
        	this.ds_search.setColumn(0,"date_from", date_from);
        	this.ds_search.setColumn(0,"date_to", date_to);

        	// 콤보에 현재년, 현재월 세팅
        	this.div_search.form.cmb_year.set_value(today.substring(0,4));
        	this.div_search.form.cmb_month.set_value(parseInt(today.substring(4,6)));

        	// 그룹 버튼을 배열로 세팅
        	this.fn_make_grp_btns_array();
        	// '전체' 버튼 선택 상태로 세팅
        	this.btn_group_init();

        	// 오픈시 조회
        	this.fn_search();
        };

        this.fn_setMainGrid = function()
        {
        	var grdMain = this.div_cont.form.div_main.form.grd_list;

        	var nameIdx = grdMain.getBindCellIndex("body","m_name");
        	var snmIdx = grdMain.getBindCellIndex("body","거주현황");

        	var nameCss = "expr:dataset.getColumn(currow,'sex_nm')=='남'?'cellBMan':'cellBWoman'";
        	var snmCss = "expr:dataset.getColumn(currow,'거주현황')=='퇴소자'?'cellBRetire':''";

        	grdMain.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grdMain.setCellProperty("body", snmIdx, "cssclass", snmCss);
        }


        // 콤보에 값 세팅
        this.fn_setComboDs = function(obj)
        {
             var comboDsParamArr = [
                                  { outDsName : "ds_year", sqlId : "DAY00105.DAY00105_DS_YEAR_S", param : '', bEmptyRow : false}
                            ];
           this.gfn_setComboDs(obj, comboDsParamArr);
        }

        this.fn_setMonth = function()
        {
        	// 월 콤보박스 세팅 (1-12월)
        	this.ds_month.set_enableevent(false);
        	this.ds_month.clearData();
        	let nRow;
        	for (let i = 1; i <= 12; i++)
        	{
        		nRow = this.ds_month.addRow();
        		this.ds_month.setColumn(nRow, "CMCD", i);
        		this.ds_month.setColumn(nRow, "CMNM", i + "월");
        	}

        	this.ds_month.set_enableevent(true);
        }

        this.fn_make_grp_btns_array = function()
        {
        	var button_a = this.div_search.form.btn_grp_a;
        	var button_b = this.div_search.form.btn_grp_b;
        	var button_c = this.div_search.form.btn_grp_c;
        	var button_d = this.div_search.form.btn_grp_d;
        	var button_e = this.div_search.form.btn_grp_e;
        	var button_all = this.div_search.form.btn_grp_all;

        	this.grp_btns = [button_all,button_a,button_b,button_c,button_d,button_e];
        }

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	const svcId = "search_pre";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list_cnt=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00105.DAY00105_DS_LIST_CNT_S ";

        	const callbackFunc = "fn_callback";
        	var async = false;
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, async);

        	if (this.ds_list_cnt.getColumn(0,"cnt")<1) {
        		alert("수급자를 조회할 수 없습니다.");
        		return false;
        	}

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
        				   + "sqlId=DAY00105.DAY00105_DS_LIST_S ";

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
        			this.ds_list.set_rowposition(-1);
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
        /**
         * 특정위치의 문자열 바꾸기
         *
         * @param str 원본 문자열
         * @param character 바꿀 문자값
         * @param index 바꿀 위치
         */
        this.stringReplaceAt = function(str, character, index)
        {
        	return str.substr(0, index) + character + str.substr(index + character.length);
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        //
        this.fn_report_pre = function()
        {
        	this.fn_check_report_cnt();
        	if (this.ds_report_cnt.getColumn(0,"cnt") < 1) {
        		alert("정보를 조회하지 못했습니다.");
        		return false;
        	}

        	return true;
        }

        // 리포트 출력할 건수가 존재하는지 체크
        this.fn_check_report_cnt = function()
        {
        	var date_from = this.ds_search.getColumn(0,"date_from");
        	var date_to = this.ds_search.getColumn(0,"date_to");

        	var sqlId = "DAY00105_DS_REPORT_CNT";
        	const svcId = "report_cnt";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_report_cnt=output1";
        	const argument = "method=getList "
        				   + "sqlId=" + sqlId + " "
        				   + "sicode=" + fv_sicode + " "
        				   + "date_from=" + date_from + " "
        				   + "date_to=" + date_to + " ";

        	const callbackFunc = "fn_callback";
        	var async = false;
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, async);

        	trace("report_cnt: " + this.ds_report_cnt.getColumn(0,"cnt"));
        }

        // 월간목욕일정표(일-8인)
        // 월간목욕일정표(리스트)
        this.fn_report = function(obj,e)
        {
        	if(!this.fn_report_pre()) return;

        	let params;
        	const dicompNm = " ";
        	var popupUrl = "";
        	if (obj.id=="btn_report1") {
        		popupUrl = "DAY_POP::DAY00105_R01.xfdl";	// 월간목욕일정표(일-8인)
        	} else if (obj.id=="btn_report2") {
        		popupUrl = "DAY_POP::DAY00105_R02.xfdl";	// 월간목욕일정표(리스트)
        	} else {}
        	const popupName = "";

        	var sign = this.ds_report.getColumn(0,"sign");
        	var date_from = this.ds_search.getColumn(0,"date_from");
        	var date_to = this.ds_search.getColumn(0,"date_to");

        	params = {
        		sicode : fv_sicode
        	,	sign : sign
        	,	date_from : date_from
        	,	date_to : date_to
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        }

        //목욕제공기록조회 팝업
        this.btn_hist_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : fv_sicode
        	};
        	Sct.popup(this, "history", 450, 400, "", param, "DAY_POP::DAY00105_P02.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "bath_pop":
        			this.fn_search();
        			break;
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
         // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.ds_list.clearData();
        	this.btn_group_init();

        	this.fn_search();
        };

        // 그리드 셀클릭 이벤트
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	const selIdx = obj.getBindCellIndex("body", "m_name");

        	// 수급자명 컬럼인 경우
        	if (e.col == 2)
        	{
        		var selRow = this.ds_list.rowposition;
        		var m_code = this.ds_list.getColumn(selRow,"m_code");
        		var m_name = this.ds_list.getColumn(selRow,"m_name");
        		var date_from = this.ds_search.getColumn(0,"date_from");
        		var date_to = this.ds_search.getColumn(0,"date_to");

        		// 팝업
        		const param = {
        			SICODE : fv_sicode
        		,	M_CODE : m_code
        		,	M_NAME : m_name
        		,	DATE_FROM : date_from
        		,	DATE_TO : date_to
        		};
        		Sct.popup(this, "bath_pop", 450, 400, "", param, "DAY_POP::DAY00105_P01.xfdl", "fn_popCallback");
        	}
        };


        this.cmb_year_onitemchanged = function(obj,e)
        {
        	this.div_search.form.cmb_month.set_value('');
        	this.ds_list.clearData();
        	// 그룹버튼 선택 초기화
        	this.btn_group_init();
        };


        this.cmb_month_onitemchanged = function(obj,e)
        {
        	this.ds_list.clearData();
        	// 그룹버튼 선택 초기화
        	this.btn_group_init();

        	var year = this.div_search.form.cmb_year.value;
        	var month = this.div_search.form.cmb_month.value;
        	month = month.padStart(2,'0');
        	var date_from_str = year + month + '01';
        	var date_to_str = Sct.Util.getLastDay(year+month);
        	this.div_search.form.cal_date_from.set_value(date_from_str);
        	this.div_search.form.cal_date_to.set_value(date_to_str);

        	this.fn_search();
        };

        // A,B,C,D,E,전체 버튼 중 하나 클릭시
        this.btn_group_onclick = function(obj,e)
        {
        	//  선택 버튼 오랜지색으로, 그 외는 기본색으로
        	for(var i=0; i<this.grp_btns.length; i++) {
        		if (obj == this.grp_btns[i]) {
        			this.grp_btns[i].set_cssclass("btn_orange");
        		} else {
        			this.grp_btns[i].set_cssclass("btn_basic_gray");
        		}
        	}

        	// 선택된 버튼값 ds_search에 세팅
        	this.ds_search.setColumn(0,"m_group", obj.text);	// A,B,C,D,E,전체 중 하나

        	this.fn_search();
        };


        // 그룹 버튼 초기화 ('전체' 버튼이 선택된 상태)
        this.btn_group_init = function()
        {
        	for(var i=0; i<this.grp_btns.length; i++) {
        		if (this.grp_btns[i].text == "전체") {
        			this.grp_btns[i].set_cssclass("btn_orange");
        		} else {
        			this.grp_btns[i].set_cssclass("btn_basic_gray");
        		}
        	}

        	this.ds_search.setColumn(0,"m_group","전체");
        }

        this.btn_cur_onclick = function(obj,e)
        {
        	var today = Sct.Util.getToday();
        	var mFirstDay = today.substr(0,6) + "01";
        	var mLastDay = Sct.Util.getLastDay(today.substr(0,6));

        	this.div_search.form.cmb_year.set_value(today.substr(0,4));
        	this.div_search.form.cmb_month.set_value(parseInt(today.substr(4,2)));	// parseInt : 앞에 0이 덧붙는 월 때문에 필요
        	this.ds_search.setColumn(0,"date_from",mFirstDay);
        	this.ds_search.setColumn(0,"date_to",mLastDay);
        	this.btn_group_init();

        	this.fn_search();
        };

        this.btn_prv_onclick = function(obj,e)
        {
        	var prvMonth = Sct.Util.addMonth(Sct.Util.getToday(), -1).substr(0,6);	// yyyymm
        	var mFirstDay = prvMonth + "01";
        	var mLastDay = Sct.Util.getLastDay(prvMonth);

        	this.div_search.form.cmb_year.set_value(prvMonth.substr(0,4));
        	this.div_search.form.cmb_month.set_value(parseInt(prvMonth.substr(4,2)));	// parseInt : 앞에 0이 덧붙는 월 때문에 필요
        	this.ds_search.setColumn(0,"date_from",mFirstDay);
        	this.ds_search.setColumn(0,"date_to",mLastDay);
        	this.btn_group_init();

        	this.fn_search();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_main.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_main.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.cmb_year_onitemchanged,this);
            this.div_search.form.cmb_month.addEventHandler("onitemchanged",this.cmb_month_onitemchanged,this);
            this.div_search.form.btn_grp_all.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_a.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_b.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_c.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_d.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_e.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_prv.addEventHandler("onclick",this.btn_prv_onclick,this);
            this.div_search.form.btn_cur.addEventHandler("onclick",this.btn_cur_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_hist.addEventHandler("onclick",this.btn_hist_onclick,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00105.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
