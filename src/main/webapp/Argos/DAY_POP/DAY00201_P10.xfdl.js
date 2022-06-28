(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00201_P10");
            this.set_titletext("진료기록 새로입력");
            if (Form == this.constructor)
            {
                this._setFormPosition(690,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_combo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"INT\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CONTENT\">1.본인부담</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CONTENT\">2.월별청구</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CONTENT\">3.시설부담</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"CONTENT\">4.기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_medi_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"진료번호\" type=\"STRING\" size=\"256\"/><Column id=\"거주자명\" type=\"STRING\" size=\"256\"/><Column id=\"거주코드\" type=\"STRING\" size=\"256\"/><Column id=\"진료일\" type=\"DATE\" size=\"256\"/><Column id=\"m_date\" type=\"STRING\" size=\"256\"/><Column id=\"진료시간\" type=\"STRING\" size=\"256\"/><Column id=\"from_time_h\" type=\"STRING\" size=\"256\"/><Column id=\"from_time_m\" type=\"STRING\" size=\"256\"/><Column id=\"to_time_h\" type=\"STRING\" size=\"256\"/><Column id=\"to_time_m\" type=\"STRING\" size=\"256\"/><Column id=\"병의원명\" type=\"STRING\" size=\"256\"/><Column id=\"병원번호\" type=\"STRING\" size=\"256\"/><Column id=\"진료내용\" type=\"STRING\" size=\"256\"/><Column id=\"진료금액\" type=\"STRING\" size=\"256\"/><Column id=\"진료청구\" type=\"INT\" size=\"256\"/><Column id=\"투약금액\" type=\"STRING\" size=\"256\"/><Column id=\"투약청구\" type=\"INT\" size=\"256\"/><Column id=\"담당자명\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/><Column id=\"첨부파일번호\" type=\"STRING\" size=\"256\"/><Column id=\"filename1\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"from_time\" type=\"STRING\" size=\"256\"/><Column id=\"to_time\" type=\"STRING\" size=\"256\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"M_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"M_NUM\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","5","40","678","330",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","5","31","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("진료일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_00","5","61","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_01","5","91","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("진료시간");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_02","5","121","93","111",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("진료내용");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_verticalAlign("top");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_03","5","231","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("진료비");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_04","5","261","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("약제비");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_05","5","291","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02","97","31","578","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Calendar("cal_00","107","35","108","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_tooltiptext("점검일");
            obj.set_innerdataset("ds_data");
            obj.set_datecolumn("점검일");
            this.div_cont.addChild(obj.name, obj);

            obj = new Calendar("cal_01","cal_00:-22","35","23","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_data");
            obj.set_datecolumn("점검일");
            obj.set_enable("false");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02_00","97","61","578","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02_01","97","91","578","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02_02","97","231","578","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02_03","97","261","578","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02_04","97","291","578","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02_05","97","121","578","111",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_03_00","345","231","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_text("청구구분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_04_00","345","261","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_text("청구구분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_01","10","65","83","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_text("병·의원");
            obj.set_cssclass("btn_search");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_01_00","10","295","83","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_00","107","65","290","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_scrolltype("none");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_01","107","125","530","103",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00","107","234","229","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            obj.set_type("number");
            obj.set_format("##,###,###");
            obj.set_limitbymask("integer");
            obj.set_maskchar(" ");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_00","107","264","229","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            obj.set_format("##,###,###");
            obj.set_limitbymask("integer");
            obj.set_type("number");
            obj.set_maskchar(" ");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_04","107","295","175","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_06","5","1","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("26");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02_06","97","1","578","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_05_00","219","5","97","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("28");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_05","109","5","97","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("25");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_00","441","233","110","27",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("29");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CONTENT");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_00_00","441","263","110","27",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CONTENT");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01","107","95","75","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("31");
            obj.set_type("number");
            obj.set_textAlign("left");
            obj.set_format("#00");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_postfixtext("시");
            obj.set_displaynulltext(" ");
            this.div_cont.addChild(obj.name, obj);

            obj = new Spin("spn_01","158","95","24","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("32");
            obj.set_type("spinonly");
            obj.set_circulation("false");
            obj.set_min("0");
            obj.set_max("23");
            obj.set_value("");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01_00","187","95","75","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("33");
            obj.set_type("number");
            obj.set_textAlign("left");
            obj.set_format("#00");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_postfixtext("분");
            obj.set_displaynulltext(" ");
            this.div_cont.addChild(obj.name, obj);

            obj = new Spin("spn_02","238","95","24","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("34");
            obj.set_type("spinonly");
            obj.set_min("0");
            obj.set_max("59");
            obj.set_value("");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01_01","297","95","75","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("35");
            obj.set_type("number");
            obj.set_textAlign("left");
            obj.set_format("#00");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_postfixtext("시");
            obj.set_displaynulltext(" ");
            this.div_cont.addChild(obj.name, obj);

            obj = new Spin("spn_03","348","95","24","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("36");
            obj.set_type("spinonly");
            obj.set_min("0");
            obj.set_max("23");
            obj.set_value("");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01_02","377","95","75","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("37");
            obj.set_type("number");
            obj.set_textAlign("left");
            obj.set_format("#00");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_postfixtext("분");
            obj.set_displaynulltext(" ");
            this.div_cont.addChild(obj.name, obj);

            obj = new Spin("spn_04","428","95","24","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("38");
            obj.set_type("spinonly");
            obj.set_min("0");
            obj.set_max("59");
            obj.set_value("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_03","266","96","33","27",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("39");
            obj.set_text("부터");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_03_00","454","96","33","27",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("40");
            obj.set_text("까지");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_func","10","2","677","37",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","11","58","24",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("기록번호 :");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_00","534","9","65","24",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_00_00","604","9","65","24",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_01","62","11","69","24",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",690,380,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cont.form.cal_00","value","ds_medi_select","m_date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.cal_01","value","ds_medi_select","m_date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.txt_00","value","ds_medi_select","병의원명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.txt_01","value","ds_medi_select","진료내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.mae_00","value","ds_medi_select","진료금액");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.mae_00_00","value","ds_medi_select","투약금액");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.sta_04","text","ds_medi_select","writer");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.sta_05","text","ds_medi_select","거주자명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.sta_05_00","text","ds_medi_select","거주코드");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.cmb_00","value","ds_medi_select","진료청구");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.cmb_00_00","value","ds_medi_select","투약청구");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_func.form.sta_01","text","ds_medi_select","진료번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.mae_01","value","ds_medi_select","from_time_h");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right2.form.mae_01_00","value","ds_medi_select","from_time_m");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right2.form.mae_01_01","value","ds_medi_select","to_time_h");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right2.form.mae_01_02","value","ds_medi_select","to_time_m");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.spn_01","value","ds_medi_select","from_time_h");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.mae_01_00","value","ds_medi_select","from_time_m");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.spn_02","value","ds_medi_select","from_time_m");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.mae_01_01","value","ds_medi_select","to_time_h");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.spn_03","value","ds_medi_select","to_time_h");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.mae_01_02","value","ds_medi_select","to_time_m");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.spn_04","value","ds_medi_select","to_time_m");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00201_P10.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00201_P10.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00201_P10.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00201_P10
         * 화면명   	: 병의원 진료기록
         * 화면설명 	:
         * 작성일   	: 2022-06-10
         * 작성자   	: 성재영
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용

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
         const fv_m_code = this.parent.M_CODE;
         const fv_m_num = this.parent.M_NUM;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.DAY00207_P02_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 저장을 위한 gv_curWinKey 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00201_P10";

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "M_CODE", fv_m_code);
        	this.ds_search.setColumn(0, "M_NUM", fv_m_num);

        	this.fn_search();
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_medi_select=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00201_P10.DAY00201_P10_DS_LIST_S ";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        // 저장
        this.fn_save = function ()
        {
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
        	const inDs = "ds_medi_select";

        	this.fn_save_com(svcId, inDs);
        };
        // 삭제
        this.fn_delete = function()
        {
        	// validation
        	if (!this.fn_delete_pre()) return;

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_medi_select:U";
        	const outDatasets = "";
        	const argument = "method=delete "
        				   + "sqlId=DAY00201_P10.DAY00201_P10_DS_MEDI_SELECT_D ";

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
        			const name = nexacro.trim(this.ds_medi_select.getColumn(0, "담당자명"));
        			const staffid = nexacro.trim(this.ds_medi_select.getColumn(0, "담당코드"));
        			this.ds_medi_select.setColumn(0, "담당자명", name);
        			this.ds_medi_select.setColumn(0, "담당코드", staffid);
        			this.ds_medi_select.setColumn(0, "writer", name + "/" + staffid);

        		}
        		else if (strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");

        			this.ds_return.copyData(this.ds_return);
        			this.ds_return.clearData();

        			this.ds_return.addRow();
        			this.ds_return.copyRow(0, this.ds_return, 0);

        			this.close(this.ds_return.saveXML());
        		}
        		else if (strSvcID == "delete")
        		{
        			this.alert("삭제되었습니다.");
        			this.ds_return.copyData(this.ds_return);
        			this.ds_return.clearData();

        			this.ds_return.addRow();
        			this.ds_return.copyRow(0, this.ds_return, 0);

        			this.close(this.ds_return.saveXML());
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        // 저장 전 Validation
        this.fn_save_pre = function ()
        {
        	if (Sct.Util.isEmpty(this.ds_medi_select.getColumn(0, "병의원명")))
        	{
        		this.alert("병의원명을 입력해야 합니다.");
        		return false;
        	}

        	if (Sct.Util.isEmpty(this.ds_medi_select.getColumn(0, "진료내용")))
        	{
        		this.alert("진료내용을 입력해야 합니다.");
        		return false;
        	}
        	if (Sct.Util.isEmpty(this.ds_medi_select.getColumn(0, "writer")))
        	{
        		this.alert("작성자를 입력해야 합니다.");
        		return false;
        	}
        	this.ds_medi_select.setColumn(0, "병원번호", 0);

        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function()
        {
        	// 진료번호 없을 시
        	if (Sct.Util.isEmpty(this.ds_medi_select.getColumn(0,"진료번호")))
        	{
        		this.alert("삭제할 항목이 없습니다.");
        		return false;
        	}

        	if (!this.confirm("삭제 하시겠습니까?"))
        		return false;

        	this.ds_medi_select.set_updatecontrol(false);
        	this.ds_medi_select.setRowType(0, Dataset.ROWTYPE_DELETE);
        	this.ds_medi_select.set_updatecontrol(true);

        	return true;
        };
        /***********************************************************************
         * User Functions
         ***********************************************************************/
         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
         // 저장버튼 클릭
         this.btn_00_onclick = function(obj,e)
        {
        	this.fn_save();
        };
        // 삭제 버튼 클릭
        this.div_func_btn_00_00_onclick = function(obj,e)
        {
        	this.fn_delete();
        };
        // 시간 스핀
        this.div_cont_div_right2_spn_00_onspin = function(obj,e)
        {
        	let value1 = parseInt(this.ds_medi_select.getColumn(0,"from_time_h"));
        	let value2 = parseInt(this.ds_medi_select.getColumn(0,"from_time_m"));
        	let value3 = parseInt(this.ds_medi_select.getColumn(0,"to_time_h"));
        	let value4 = parseInt(this.ds_medi_select.getColumn(0,"to_time_m"));

        	switch(obj.id) {
        	case "spn_01":
        		if (e.up == true) {
        			this.ds_medi_select.setColumn(0,"from_time_h", value1 + 1);
        		} else {
        			this.ds_medi_select.setColumn(0,"from_time_h", value1 - 1);
        		}
        		break;
        	case "spn_02":
        		if (e.up == true) {
        			this.ds_medi_select.setColumn(0,"from_time_m", value2 + 1);
        		} else {
        			this.ds_medi_select.setColumn(0,"from_time_m", value2 - 1);
        		}
        		break;
        	case "spn_03":
        		if (e.up == true) {
        			this.ds_medi_select.setColumn(0,"to_time_h", value3 + 1);
        			if (e.postvalue > 23) {
        				this.ds_medi_select.setColumn(0, "to_time_h", 23);
        			}
        		} else {
        			this.ds_medi_select.setColumn(0,"to_time_h", value3 - 1);
        		}
        		break;
        	case "spn_04":
        		if (e.up == true) {
        			this.ds_medi_select.setColumn(0,"to_time_m", value4 + 1);
        			if (e.postvalue > 59) {
        				this.ds_medi_select.setColumn(0, "to_time_m", 59);
        			}
        		} else {
        			this.ds_medi_select.setColumn(0,"to_time_m", value4 - 1);
        		}
        		break;
        	default: break;
        	}
        };
        // 스핀 시간 값 제한 설정
        this.ds_medi_select_oncolumnchanged = function(obj,e)
        {
        	let value1 = parseInt(this.ds_medi_select.getColumn(0,"from_time_h"));
        	let value2 = parseInt(this.ds_medi_select.getColumn(0,"from_time_m"));
        	let value3 = parseInt(this.ds_medi_select.getColumn(0,"to_time_h"));
        	let value4 = parseInt(this.ds_medi_select.getColumn(0,"to_time_m"));

        	if (value1 > 23) {
        		this.ds_medi_select.setColumn(0, "from_time_h", 23);
        	}
        	if (value2 > 59) {
        		this.ds_medi_select.setColumn(0, "from_time_m", 59);
        	}
        	if (value3 > 23) {
        		this.ds_medi_select.setColumn(0, "to_time_h", 23);
        	}
        	if (value4 > 59) {
        		this.ds_medi_select.setColumn(0, "to_time_m", 59);
        	}
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 작성자 팝업
        this.div_cont_div_right2_btn_01_00_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_medi_select.getColumn(0, "m_date")
        	};

        	Sct.popup(this, "emp", 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 병의원 팝업
        this.div_cont_div_right2_btn_01_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : fv_sicode
        	};

        	Sct.popup(this, "hosp", 450, 600, "병·의원명 지정", param, "DAY_POP::DAY00201_P08.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_return", strDs);
        	switch(popid)
        	{
        		case "emp" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_medi_select.setColumn(0, "담당자명", name);
        				this.ds_medi_select.setColumn(0, "담당코드", staffid);
        				this.ds_medi_select.setColumn(0, "writer", name + "/" + staffid);
        			}
        			else
        			{
        				this.ds_medi_select.setColumn(0, "담당자명", "");
        				this.ds_medi_select.setColumn(0, "담당코드", "");
        				this.ds_medi_select.setColumn(0, "writer", "");
        			}
        			break;
        		case "hosp" :
        				const h_name = nexacro.trim(objDs.getColumn(0, "병의원명"));
        				const h_id = objDs.getColumn(0, "병원번호");
        				this.ds_medi_select.setColumn(0, "병원번호", h_id);
        				this.ds_medi_select.setColumn(0, "병의원명", h_name);
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_return", strDs);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DAY00207_P02_onload,this);
            this.div_cont.form.cal_00.addEventHandler("onchanged",this.div_00_cal_00_onchanged,this);
            this.div_cont.form.cal_01.addEventHandler("onchanged",this.div_00_cal_01_onchanged,this);
            this.div_cont.form.btn_01.addEventHandler("onclick",this.div_cont_div_right2_btn_01_onclick,this);
            this.div_cont.form.btn_01_00.addEventHandler("onclick",this.div_cont_div_right2_btn_01_00_onclick,this);
            this.div_cont.form.spn_01.addEventHandler("onspin",this.div_cont_div_right2_spn_00_onspin,this);
            this.div_cont.form.spn_01.addEventHandler("onchanged",this.div_cont_div_right2_spn_01_onchanged,this);
            this.div_cont.form.spn_02.addEventHandler("onspin",this.div_cont_div_right2_spn_00_onspin,this);
            this.div_cont.form.spn_03.addEventHandler("onspin",this.div_cont_div_right2_spn_00_onspin,this);
            this.div_cont.form.spn_04.addEventHandler("onspin",this.div_cont_div_right2_spn_00_onspin,this);
            this.div_func.form.btn_00.addEventHandler("onclick",this.btn_00_onclick,this);
            this.div_func.form.btn_00_00.addEventHandler("onclick",this.div_func_btn_00_00_onclick,this);
            this.ds_medi_select.addEventHandler("oncolumnchanged",this.ds_medi_select_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00201_P10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
