(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00105_P02");
            this.set_titletext("목욕제공기록조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1658,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"ba_code\" type=\"STRING\" size=\"256\"/><Column id=\"ba_name\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"ba_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"ba_mm_01\" type=\"STRING\" size=\"256\"/><Column id=\"ba_mm_02\" type=\"STRING\" size=\"256\"/><Column id=\"ba_mm_03\" type=\"STRING\" size=\"256\"/><Column id=\"ba_mm_04\" type=\"STRING\" size=\"256\"/><Column id=\"ba_mm_05\" type=\"STRING\" size=\"256\"/><Column id=\"ba_mm_06\" type=\"STRING\" size=\"256\"/><Column id=\"ba_mm_07\" type=\"STRING\" size=\"256\"/><Column id=\"ba_mm_08\" type=\"STRING\" size=\"256\"/><Column id=\"ba_mm_09\" type=\"STRING\" size=\"256\"/><Column id=\"ba_mm_10\" type=\"STRING\" size=\"256\"/><Column id=\"ba_mm_11\" type=\"STRING\" size=\"256\"/><Column id=\"ba_mm_12\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"ba_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"ba_code\" type=\"STRING\" size=\"256\"/><Column id=\"ba_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"ba_type_nm\" type=\"STRING\" size=\"256\"/><Column id=\"제공방법\" type=\"STRING\" size=\"256\"/><Column id=\"목욕시간\" type=\"STRING\" size=\"256\"/><Column id=\"담당자01\" type=\"STRING\" size=\"256\"/><Column id=\"담당자02\" type=\"STRING\" size=\"256\"/><Column id=\"송영시간\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_main","10","0","940","730",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","33","930","697",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"23\"/><Column size=\"32\"/><Column size=\"70\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"45\"/><Column size=\"84\"/><Column size=\"48\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"출력\"/></Cell><Cell col=\"2\" text=\"현황\"/><Cell col=\"3\" text=\"그룹\"/><Cell col=\"4\" text=\"수급자명\"/><Cell col=\"5\" text=\"성별\"/><Cell col=\"6\" text=\"생활실\"/><Cell col=\"7\" text=\"총횟수\"/><Cell col=\"8\" text=\"1월\"/><Cell col=\"9\" text=\"2월\"/><Cell col=\"10\" text=\"3월\"/><Cell col=\"11\" text=\"4월\"/><Cell col=\"12\" text=\"5월\"/><Cell col=\"13\" text=\"6월\"/><Cell col=\"14\" text=\"7월\"/><Cell col=\"15\" text=\"8월\"/><Cell col=\"16\" text=\"9월\"/><Cell col=\"17\" text=\"10월\"/><Cell col=\"18\" text=\"11월\"/><Cell col=\"19\" text=\"12월\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:chk\"/><Cell col=\"2\" text=\"bind:거주현황\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:m_group\" combodataset=\"ds_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"4\" text=\"bind:ba_name\" textAlign=\"center\" cursor=\"pointer\" expandchar=\"dot\"/><Cell col=\"5\" text=\"bind:sex_nm\"/><Cell col=\"6\" text=\"bind:m_roomname\"/><Cell col=\"7\" text=\"bind:ba_cnt\" cssclass=\"BlueFontCell\"/><Cell col=\"8\" text=\"bind:ba_mm_01\"/><Cell col=\"9\" text=\"bind:ba_mm_02\"/><Cell col=\"10\" text=\"bind:ba_mm_03\"/><Cell col=\"11\" text=\"bind:ba_mm_04\"/><Cell col=\"12\" text=\"bind:ba_mm_05\"/><Cell col=\"13\" text=\"bind:ba_mm_06\"/><Cell col=\"14\" text=\"bind:ba_mm_07\"/><Cell col=\"15\" text=\"bind:ba_mm_08\"/><Cell col=\"16\" text=\"bind:ba_mm_09\"/><Cell col=\"17\" text=\"bind:ba_mm_10\"/><Cell col=\"18\" text=\"bind:ba_mm_11\"/><Cell col=\"19\" text=\"bind:ba_mm_12\"/></Band></Format></Formats>");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_report1","748","0","182","26",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("1");
            obj.set_text("목욕서비스제공기록");
            obj.set_cssclass("btn_print");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_right","960","0","695","730",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","282","0","85","26",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("결재란표시");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_report2","371","0","150","26",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_text("목욕기록(일자순)");
            obj.set_cssclass("btn_print");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_report3","526","0","160","26",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_text("목욕기록(수급자순)");
            obj.set_cssclass("btn_print");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","33","687","697",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"목욕일\"/><Cell col=\"1\" text=\"송영시간\"/><Cell col=\"2\" text=\"목욕시간\"/><Cell col=\"3\" text=\"그룹\"/><Cell col=\"4\" text=\"수급자명\"/><Cell col=\"5\" text=\"제공방법\"/><Cell col=\"6\" text=\"제공자①\"/><Cell col=\"7\" text=\"제공자②\"/></Band><Band id=\"body\"><Cell text=\"bind:ba_nalja\"/><Cell col=\"1\" text=\"bind:송영시간\" cssclass=\"BlueFontCell\"/><Cell col=\"2\" text=\"bind:목욕시간\"/><Cell col=\"3\" text=\"bind:m_group\"/><Cell col=\"4\" text=\"bind:ba_name\"/><Cell col=\"5\" text=\"bind:ba_type_nm\"/><Cell col=\"6\" text=\"bind:담당자01\"/><Cell col=\"7\" text=\"bind:담당자02\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_search","10","0","1350","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_year","281","7","79","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search","614","7","70","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_all","1","7","50","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("전체");
            obj.set_background("darkgray");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_a","56","7","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("A");
            obj.set_background("darkgray");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_b","96","7","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("B");
            obj.set_background("darkgray");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_c","136","7","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("C");
            obj.set_background("darkgray");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_d","176","7","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("D");
            obj.set_background("darkgray");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_e","216","7","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("E");
            obj.set_background("darkgray");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","365","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from_pic","454","7","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","483","12","8","17",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","495","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic","584","7","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prv","689","7","50","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("전월");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_cur","744","7","50","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("당월");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_week","799","7","43","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_text("1주일");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_half_month","847","7","43","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_text("15일");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_one_month","895","7","43","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_text("1개월");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_six_month","991","7","43","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_text("6개월");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_q1","1039","7","43","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("1분기");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_three_month","943","7","43","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_text("3개월");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_q2","1087","7","43","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_text("2분기");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_q3","1135","7","43","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("3분기");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_q4","1183","7","43","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_text("4분기");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","1450","3","200","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1658,780,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.cal_date_from","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_from_pic","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cal_date_to","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.cal_date_to_pic","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.chk_sign","value","ds_report","sign");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00105_P02.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00105_P02.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00105_P02.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00105_P02
         * 화면명   	: 목욕제공기록조회
         * 화면설명 	:
         * 작성일   	: 2022-06-03
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
        	this.fn_setDetailGrid();

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

        	// 콤보에 현재년 세팅
        	this.div_search.form.cmb_year.set_value(today.substring(0,4));

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

        	var nameIdx = grdMain.getBindCellIndex("body","ba_name");
        	var snmIdx = grdMain.getBindCellIndex("body","거주현황");

        	var nameCss = "expr:dataset.getColumn(currow,'sex_nm')=='남'?'cellBMan':'cellBWoman'";
        	var snmCss = "expr:dataset.getColumn(currow,'거주현황')=='퇴소자'?'cellBRetire':''";

        	var chkCss = "expr:dataset.getColumn(currow,'chk')=='1'?'cellBWoman':''";

        	grdMain.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grdMain.setCellProperty("body", snmIdx, "cssclass", snmCss);

        	grdMain.setCellProperty("body", grdMain.getBindCellIndex("body","chk"), "cssclass", chkCss);
        	grdMain.setCellProperty("body", grdMain.getBindCellIndex("body","m_roomname"), "cssclass", chkCss);
        	grdMain.setCellProperty("body", grdMain.getBindCellIndex("body","ba_cnt"), "cssclass", chkCss);
        }

        this.fn_setDetailGrid = function()
        {
        	var grdDetail = this.div_cont.form.div_right.form.grd_detail;

        	var nameIdx = grdDetail.getBindCellIndex("body","ba_name");
        	var nameCss = "expr:dataset.getColumn(currow,'sex_nm')=='남'?'cellBMan':'cellBWoman'";

        	grdDetail.setCellProperty("body", nameIdx, "cssclass", nameCss);
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
        	const inDatasets = "input1=ds_search input2=ds_search";
        	const outDatasets = "ds_list=output1 ds_detail=output2";
        	const argument = "method=getList "
        				   + "sqlId='DAY00105_P02.DAY00105_P02_DS_LIST_S DAY00105_P02.DAY00105_P02_DS_DETAIL_S'";

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

        this.fn_report_pre1 = function()
        {
        	var cnt = 0;
        	for(var i=0; i < this.ds_list.rowcount; i++){
        		if(this.ds_list.getColumn(i,"chk") == 1){
        			cnt++;
        		}
        	}

        	if (cnt==0) {
        		alert("출력할 수급자를 체크박스로 선택하세요.");
        		return false;
        	}

        	return true;
        }

        this.fn_report_pre2 = function()
        {
        	if(this.ds_list.rowcount==0) {
        		alert("출력할 항목을 조회하지 못했습니다.");
        		return;
        	}

        	return true;
        }

        //목욕서비스제공기록
        this.fn_report1 = function(obj,e)
        {
        	if(!this.fn_report_pre1()) return;

        	var ba_codes = "";	// 수급자 코드 리스트
        	for(var i=0; i < this.ds_list.rowcount; i++){
        		if(this.ds_list.getColumn(i,"chk") == 1){
        			let _code = this.ds_list.getColumn(i,"ba_code");
        			ba_codes += (_code + ",");
        		}
        	}
        	// 마지막 콤마 제거
        	ba_codes = ba_codes.substring(0,ba_codes.length-1);

        	let params;
        	const dicompNm = " ";
        	var popupUrl = "DAY_POP::DAY00104_R05.xfdl";
        	const popupName = "";

        	var sign = this.ds_report.getColumn(0,"sign");
        	var date_from = this.ds_search.getColumn(0,"date_from");
        	var date_to = this.ds_search.getColumn(0,"date_to");

        	params = {
        		sicode : fv_sicode
        	,	sign : sign
        	,	m_code : ba_codes
        	,	date_from : date_from
        	,	date_to : date_to
        	,	reserv_yn : "Y"			// 목욕예약도 출력할지 여부를 결정
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        }


        // 목욕기록(일자순)
        // 목욕기록(수급자순)
        this.fn_report2 = function(obj,e)
        {
        	if(!this.fn_report_pre2()) return;

        	let params;
        	const dicompNm = " ";
        	var popupUrl = "";
        	if (obj.id=="btn_report2") {
        		popupUrl = "DAY_POP::DAY00105_R04.xfdl";
        	} else if (obj.id=="btn_report3") {
        		popupUrl = "DAY_POP::DAY00105_R05.xfdl";
        	}
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

        	this.fn_search();
        };

        // 그리드 셀클릭 이벤트
        this.div_cont_div_right_grd_list_oncellclick = function(obj,e)
        {
        	const selIdx = obj.getBindCellIndex("body", "m_name");

        	// 수급자명 컬럼인 경우
        	if (e.col == 4)
        	{
        		var selRow = this.ds_list.rowposition;
        		var ba_code = this.ds_list.getColumn(selRow,"ba_code");

        		var hRow = this.ds_detail.findRow("ba_code", ba_code);
        		//this.ds_detail.set_rowposition(hRow);
        		this.fn_posCursor(hRow);
        	}
        };

        // nRow가 그리드 화면의 중앙부에 놓일 수 있도록
        // 사전에 v1, v2 위치로 rowposition을 이동시켰다가
        // 최종적으로 nRow로 위치시킴
        this.fn_posCursor = function(nRow)
        {
        	var v1 = -1;
        	var v2 = -1;

        	if (nRow-12<0) {
        		v1 = 0;
        	} else {
        		v1 = nRow-12;
        	}
        	if (nRow+12>this.ds_detail.rowcount) {
        		v2 = this.ds_detail.rowcount-1;
        	} else {
        		v2 = nRow + 12;
        	}

        	this.ds_detail.set_rowposition(v1);
        	this.ds_detail.set_rowposition(v2);

        	this.ds_detail.set_rowposition(nRow);
        }


        this.cmb_year_onitemchanged = function(obj,e)
        {
        	this.div_search.form.cal_date_from.set_value(e.postvalue + '0101');
        	this.div_search.form.cal_date_to.set_value(e.postvalue + '1231');

        	this.ds_list.clearData();
        	// 그룹버튼 선택 초기화
        	this.btn_group_init();

        	this.fn_search();
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
        	//  선택 버튼 빨간색으로, 그 외는 기본색으로
        	for(var i=0; i<this.grp_btns.length; i++) {
        		if (obj == this.grp_btns[i]) {
        			this.grp_btns[i].set_background("#ff8d00");
        		} else {
        			this.grp_btns[i].set_background("darkgray");
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
        			this.grp_btns[i].set_background("#ff8d00");
        		} else {
        			this.grp_btns[i].set_background("darkgray");
        		}
        	}

        	this.ds_search.setColumn(0,"m_group","전체");
        }

        // 당월
        this.btn_cur_onclick = function(obj,e)
        {
        	var today = Sct.Util.getToday();
        	var mFirstDay = today.substr(0,6) + "01";
        	var mLastDay = Sct.Util.getLastDay(today.substr(0,6));

        	this.div_search.form.cmb_year.set_value(today.substr(0,4));
        	this.ds_search.setColumn(0,"date_from",mFirstDay);
        	this.ds_search.setColumn(0,"date_to",mLastDay);
        	this.btn_group_init();

        	this.fn_search();
        };

        // 전월
        this.btn_prv_onclick = function(obj,e)
        {
        	var prvMonth = Sct.Util.addMonth(Sct.Util.getToday(), -1).substr(0,6);	// yyyymm
        	var mFirstDay = prvMonth + "01";
        	var mLastDay = Sct.Util.getLastDay(prvMonth);

        	this.div_search.form.cmb_year.set_value(prvMonth.substr(0,4));
        	this.ds_search.setColumn(0,"date_from",mFirstDay);
        	this.ds_search.setColumn(0,"date_to",mLastDay);
        	this.btn_group_init();

        	this.fn_search();
        };

        // 1주일
        this.btn_week_onclick = function(obj,e)
        {
        	var today = Sct.Util.getToday();
        	var date_from = Sct.Util.getWeekDay(today, 0);
        	var date_to = Sct.Util.getWeekDay(today, 6);

        	this.ds_search.setColumn(0,"date_from",date_from);
        	this.ds_search.setColumn(0,"date_to",date_to);
        	this.btn_group_init();

        	this.fn_search();
        };

        // 15일
        this.btn_half_month_onclick = function(obj,e)
        {
        	var today = Sct.Util.getToday();
        	var date_from = Sct.Util.addDate(today, -14);

        	this.ds_search.setColumn(0,"date_from",date_from);
        	this.ds_search.setColumn(0,"date_to",today);
        	this.btn_group_init();

        	this.fn_search();
        };

        // 1개월
        this.btn_one_month_onclick = function(obj,e)
        {
        	this.btn_cur_onclick();
        };

        // 3개월
        this.btn_three_month_onclick = function(obj,e)
        {
        	var prvMonth = Sct.Util.addMonth(Sct.Util.getToday(), -2).substr(0,6);	// yyyymm
        	var curMonth = Sct.Util.getToday().substr(0,6);	//yyyymm
        	var date_from = prvMonth + "01";
        	var date_to = Sct.Util.getLastDay(curMonth);

        	this.div_search.form.cmb_year.set_value(prvMonth.substr(0,4));
        	this.ds_search.setColumn(0,"date_from",date_from);
        	this.ds_search.setColumn(0,"date_to",date_to);
        	this.btn_group_init();

        	this.fn_search();
        };

        // 6개월
        this.btn_six_month_onclick = function(obj,e)
        {
        	var prvMonth = Sct.Util.addMonth(Sct.Util.getToday(), -5).substr(0,6);	// yyyymm
        	var curMonth = Sct.Util.getToday().substr(0,6);	//yyyymm
        	var date_from = prvMonth + "01";
        	var date_to = Sct.Util.getLastDay(curMonth);

        	this.div_search.form.cmb_year.set_value(prvMonth.substr(0,4));
        	this.ds_search.setColumn(0,"date_from",date_from);
        	this.ds_search.setColumn(0,"date_to",date_to);
        	this.btn_group_init();

        	this.fn_search();
        };

        // 1분기
        this.btn_q1_onclick = function(obj,e)
        {
        	var curYear = Sct.Util.getToday().substr(0,4);
        	var date_from = curYear + "0101";
        	var date_to = curYear + "0331";

        	this.div_search.form.cmb_year.set_value(curYear);
        	this.ds_search.setColumn(0,"date_from",date_from);
        	this.ds_search.setColumn(0,"date_to",date_to);
        	this.btn_group_init();

        	this.fn_search();
        };

        // 2분기
        this.btn_q2_onclick = function(obj,e)
        {
        	var curYear = Sct.Util.getToday().substr(0,4);
        	var date_from = curYear + "0401";
        	var date_to = curYear + "0630";

        	this.div_search.form.cmb_year.set_value(curYear);
        	this.ds_search.setColumn(0,"date_from",date_from);
        	this.ds_search.setColumn(0,"date_to",date_to);
        	this.btn_group_init();

        	this.fn_search();
        };

        // 3분기
        this.btn_q3_onclick = function(obj,e)
        {
        	var curYear = Sct.Util.getToday().substr(0,4);
        	var date_from = curYear + "0701";
        	var date_to = curYear + "0930";

        	this.div_search.form.cmb_year.set_value(curYear);
        	this.ds_search.setColumn(0,"date_from",date_from);
        	this.ds_search.setColumn(0,"date_to",date_to);
        	this.btn_group_init();

        	this.fn_search();
        };

        // 4분기
        this.btn_q4_onclick = function(obj,e)
        {
        	var curYear = Sct.Util.getToday().substr(0,4);
        	var date_from = curYear + "1001";
        	var date_to = curYear + "1231";

        	this.div_search.form.cmb_year.set_value(curYear);
        	this.ds_search.setColumn(0,"date_from",date_from);
        	this.ds_search.setColumn(0,"date_to",date_to);
        	this.btn_group_init();

        	this.fn_search();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_main.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_main.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_right_grd_list_oncellclick,this);
            this.div_cont.form.div_main.form.btn_report1.addEventHandler("onclick",this.fn_report1,this);
            this.div_cont.form.div_right.form.btn_report2.addEventHandler("onclick",this.fn_report2,this);
            this.div_cont.form.div_right.form.btn_report3.addEventHandler("onclick",this.fn_report2,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.cmb_year_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.btn_grp_all.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_a.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_b.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_c.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_d.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_e.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.cal_date_from_pic.addEventHandler("onchanged",this.div_search_cal_date_from_pic_onchanged,this);
            this.div_search.form.cal_date_to_pic.addEventHandler("onchanged",this.div_search_cal_date_to_pic_onchanged,this);
            this.div_search.form.btn_prv.addEventHandler("onclick",this.btn_prv_onclick,this);
            this.div_search.form.btn_cur.addEventHandler("onclick",this.btn_cur_onclick,this);
            this.div_search.form.btn_week.addEventHandler("onclick",this.btn_week_onclick,this);
            this.div_search.form.btn_half_month.addEventHandler("onclick",this.btn_half_month_onclick,this);
            this.div_search.form.btn_one_month.addEventHandler("onclick",this.btn_one_month_onclick,this);
            this.div_search.form.btn_six_month.addEventHandler("onclick",this.btn_six_month_onclick,this);
            this.div_search.form.btn_q1.addEventHandler("onclick",this.btn_q1_onclick,this);
            this.div_search.form.btn_three_month.addEventHandler("onclick",this.btn_three_month_onclick,this);
            this.div_search.form.btn_q2.addEventHandler("onclick",this.btn_q2_onclick,this);
            this.div_search.form.btn_q3.addEventHandler("onclick",this.btn_q3_onclick,this);
            this.div_search.form.btn_q4.addEventHandler("onclick",this.btn_q4_onclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
            this.ds_detail.addEventHandler("onrowposchanged",this.ds_detail_onrowposchanged,this);
        };
        this.loadIncludeScript("DAY00105_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
