(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00208_P02");
            this.set_titletext("수급자 외출기록");
            if (Form == this.constructor)
            {
                this._setFormPosition(690,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"M_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"M_NUM\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_out_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"외출번호\" type=\"STRING\" size=\"256\"/><Column id=\"거주자명\" type=\"STRING\" size=\"256\"/><Column id=\"거주코드\" type=\"STRING\" size=\"256\"/><Column id=\"외출구분\" type=\"INT\" size=\"256\"/><Column id=\"외출일\" type=\"STRING\" size=\"256\"/><Column id=\"외출시\" type=\"STRING\" size=\"256\"/><Column id=\"외출분\" type=\"STRING\" size=\"256\"/><Column id=\"복귀시\" type=\"STRING\" size=\"256\"/><Column id=\"복귀분\" type=\"STRING\" size=\"256\"/><Column id=\"행선지\" type=\"STRING\" size=\"256\"/><Column id=\"외출목적\" type=\"STRING\" size=\"256\"/><Column id=\"보호자명\" type=\"STRING\" size=\"256\"/><Column id=\"보호자관계\" type=\"STRING\" size=\"256\"/><Column id=\"보호자전화\" type=\"STRING\" size=\"256\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"일반외출\" type=\"STRING\" size=\"256\"/><Column id=\"외출시간공제\" type=\"STRING\" size=\"256\"/><Column id=\"확인담당\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
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

            obj = new Div("div_cont","5","37","680","308",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","5","32","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("외출일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_00","5","62","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("외출시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_01","5","122","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_02","5","152","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("외출목적");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_03","5","212","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("관계");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_04","5","242","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_05","5","272","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02","97","32","577","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Calendar("cal_00","107","36","108","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_tooltiptext("점검일");
            obj.set_innerdataset("ds_data");
            obj.set_datecolumn("점검일");
            this.div_cont.addChild(obj.name, obj);

            obj = new Calendar("cal_01","cal_00:-22","36","23","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_data");
            obj.set_datecolumn("점검일");
            obj.set_readonly("true");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02_00","97","62","577","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02_01","97","122","577","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02_02","97","212","577","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02_03","97","242","577","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02_04","97","272","577","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02_05","97","152","577","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_01","10","126","83","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_text("행선지");
            obj.set_cssclass("btn_search");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_01_00","10","276","83","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_00","107","126","150","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_scrolltype("none");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_01","107","155","460","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_scrolltype("none");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_03","266","66","33","27",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_text("부터");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_03_00","454","66","33","27",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            obj.set_text("까지");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_04","107","276","200","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01","107","65","75","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            obj.set_type("number");
            obj.set_textAlign("left");
            obj.set_format("#00");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_postfixtext("시");
            obj.set_displaynulltext(" ");
            this.div_cont.addChild(obj.name, obj);

            obj = new Spin("spn_01","mae_01:-24","65","24","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            obj.set_type("spinonly");
            obj.set_circulation("false");
            obj.set_min("0");
            obj.set_max("23");
            obj.set_value("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_05_00","217","67","23","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("25");
            obj.set_text("시");
            obj.set_visible("false");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01_00","187","65","75","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("26");
            obj.set_type("number");
            obj.set_textAlign("left");
            obj.set_format("#00");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_postfixtext("분");
            obj.set_displaynulltext(" ");
            this.div_cont.addChild(obj.name, obj);

            obj = new Spin("spn_02","mae_01_00:-24","65","24","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("27");
            obj.set_type("spinonly");
            obj.set_min("0");
            obj.set_max("59");
            obj.set_value("");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01_01","297","65","75","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("28");
            obj.set_type("number");
            obj.set_textAlign("left");
            obj.set_format("#00");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_postfixtext("시");
            obj.set_displaynulltext(" ");
            this.div_cont.addChild(obj.name, obj);

            obj = new Spin("spn_03","mae_01_01:-24","65","24","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("29");
            obj.set_type("spinonly");
            obj.set_min("0");
            obj.set_max("23");
            obj.set_value("");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01_02","377","65","75","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("30");
            obj.set_type("number");
            obj.set_textAlign("left");
            obj.set_format("#00");
            obj.set_padding("0px 0px 0px 15px");
            obj.set_postfixtext("분");
            obj.set_displaynulltext(" ");
            this.div_cont.addChild(obj.name, obj);

            obj = new Spin("spn_04","mae_01_02:-24","65","24","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("31");
            obj.set_type("spinonly");
            obj.set_min("0");
            obj.set_max("59");
            obj.set_value("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00","5","92","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("32");
            obj.set_text("외출구분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02_00_00","97","92","577","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_02_00_00","5","182","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("34");
            obj.set_text("동행인");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02_02_00","97","182","577","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_02","107","185","174","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("36");
            obj.set_scrolltype("none");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_02_00","107","215","174","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("37");
            obj.set_scrolltype("none");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_02_01","107","245","174","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("38");
            obj.set_scrolltype("none");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_00","290","186","91","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("39");
            obj.set_text("동행인");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_00_00","390","186","91","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("40");
            obj.set_text("보호자동행");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01_06","5","2","93","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("41");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_02_06","97","2","577","31",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00","107","6","94","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("43");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00_00","209","6","97","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("44");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_00","107","98","72","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("45");
            obj.set_text("일반외출");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","195","98","99","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("46");
            obj.set_text("외출시간공제");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",690,350,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_func.form.sta_01","text","ds_out_select","외출번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_cont.form.cal_00","value","ds_out_select","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.cal_01","value","ds_out_select","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.txt_00","value","ds_out_select","행선지");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.txt_01","value","ds_out_select","외출목적");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.sta_04","text","ds_out_select","writer");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.mae_01","value","ds_out_select","외출시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.spn_01","value","ds_out_select","외출시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.mae_01_00","value","ds_out_select","외출분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.spn_02","value","ds_out_select","외출분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.mae_01_01","value","ds_out_select","복귀시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.spn_03","value","ds_out_select","복귀시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.mae_01_02","value","ds_out_select","복귀분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.spn_04","value","ds_out_select","복귀분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.txt_02_01","value","ds_out_select","보호자전화");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.txt_02_00","value","ds_out_select","보호자관계");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.txt_02","value","ds_out_select","보호자명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.sta_00","text","ds_out_select","거주자명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.sta_00_00","text","ds_out_select","거주코드");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.chk_00","value","ds_out_select","일반외출");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.chk_01","value","ds_out_select","외출시간공제");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00208_P02.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00208_P02.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00208_P02.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00208_P02
         * 화면명   	: 수급자 외출기록
         * 화면설명 	:
         * 작성일   	: 2022-06-16
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
        this.DAY00208_P02_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 저장을 위한 gv_curWinKey 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00208_P02";

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
        	const outDatasets = "ds_out_select=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00208_P02.DAY00208_P02_DS_OUT_SELECT_S ";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        // 저장
        this.fn_save = function ()
        {
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
        	const inDs = "ds_out_select";

        	this.fn_save_com(svcId, inDs);
        };
        // 삭제
        this.fn_delete = function()
        {
        	// validation
        	if (!this.fn_delete_pre()) return;

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_out_select:U";
        	const outDatasets = "";
        	const argument = "method=delete "
        				   + "sqlId=DAY00208_P02.DAY00208_P02_DS_OUT_SELECT_D ";

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
        			let chk = this.ds_out_select.getColumn(0, "외출구분");
        			if (chk == 1) {
        				this.ds_out_select.setColumn(0, "일반외출", 1);
        			} else if (chk == 2) {
        				this.ds_out_select.setColumn(0, "외출시간공제", 2);
        			}

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
        	if (Sct.Util.isEmpty(this.ds_out_select.getColumn(0, "외출구분")))
        	{
        		this.alert("외출구분을 체크해주세요.");
        		return false;
        	}

        	if (Sct.Util.isEmpty(this.ds_out_select.getColumn(0, "행선지")))
        	{
        		this.alert("행선지를 입력해주세요.");
        		return false;
        	}

        	if (Sct.Util.isEmpty(this.ds_out_select.getColumn(0, "외출목적")))
        	{
        		this.alert("외출목적을 입력해주세요.");
        		return false;
        	}

        	if (Sct.Util.isEmpty(this.ds_out_select.getColumn(0, "보호자명")))
        	{
        		this.alert("동행인을 입력해주세요.");
        		return false;
        	}

        	if (Sct.Util.isEmpty(this.ds_out_select.getColumn(0, "보호자관계")))
        	{
        		this.alert("관계를 입력해주세요.");
        		return false;
        	}

        	if (Sct.Util.isEmpty(this.ds_out_select.getColumn(0, "보호자전화")))
        	{
        		this.alert("연락처를 입력해주세요.");
        		return false;
        	}

        	if (Sct.Util.isEmpty(this.ds_out_select.getColumn(0, "writer")))
        	{
        		this.alert("작성자를 입력해주세요.");
        		return false;
        	}

        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function()
        {
        	if (!this.confirm("삭제 하시겠습니까?"))
        		return false;

        	this.ds_out_select.set_updatecontrol(false);
        	this.ds_out_select.setRowType(0, Dataset.ROWTYPE_DELETE);
        	this.ds_out_select.set_updatecontrol(true);

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
        	let value1 = parseInt(this.ds_out_select.getColumn(0,"외출시"));
        	let value2 = parseInt(this.ds_out_select.getColumn(0,"외출분"));
        	let value3 = parseInt(this.ds_out_select.getColumn(0,"복귀시"));
        	let value4 = parseInt(this.ds_out_select.getColumn(0,"복귀분"));

        	switch(obj.id) {
        	case "spn_01":
        		if (e.up == true) {
        			this.ds_out_select.setColumn(0,"외출시", value1 + 1);
        		} else {
        			this.ds_out_select.setColumn(0,"외출시", value1 - 1);
        		}
        		break;
        	case "spn_02":
        		if (e.up == true) {
        			this.ds_out_select.setColumn(0,"외출분", value2 + 1);
        		} else {
        			this.ds_out_select.setColumn(0,"외출분", value2 - 1);
        		}
        		break;
        	case "spn_03":
        		if (e.up == true) {
        			this.ds_out_select.setColumn(0,"복귀시", value3 + 1);
        		} else {
        			this.ds_out_select.setColumn(0,"복귀시", value3 - 1);
        		}
        		break;
        	case "spn_04":
        		if (e.up == true) {
        			this.ds_out_select.setColumn(0,"복귀분", value4 + 1);
        		} else {
        			this.ds_out_select.setColumn(0,"복귀분", value4 - 1);
        		}
        		break;
        	default: break;
        	}
        };
        // 스핀 시간 값 제한 설정
        this.ds_out_select_oncolumnchanged = function(obj,e)
        {
        	let value1 = parseInt(this.ds_out_select.getColumn(0,"외출시"));
        	let value2 = parseInt(this.ds_out_select.getColumn(0,"외출분"));
        	let value3 = parseInt(this.ds_out_select.getColumn(0,"복귀시"));
        	let value4 = parseInt(this.ds_out_select.getColumn(0,"복귀분"));

        	if (value1 > 23) {
        		this.ds_out_select.setColumn(0, "외출시", 23);
        	}
        	if (value2 > 59) {
        		this.ds_out_select.setColumn(0, "외출분", 59);
        	}
        	if (value3 > 23) {
        		this.ds_out_select.setColumn(0, "복귀시", 23);
        	}
        	if (value4 > 59) {
        		this.ds_out_select.setColumn(0, "복귀분", 59);
        	}
        };
        // 체크박스 설정
        this.div_cont_chk_onchanged = function(obj,e)
        {
        	switch(obj.id) {
        	case "chk_00":
        				this.ds_out_select.setColumn(0, "외출시간공제", 0);
        				this.ds_out_select.setColumn(0, "외출구분", 1);
        		break;
        	case "chk_01":
        				this.ds_out_select.setColumn(0, "일반외출", 0);
        				this.ds_out_select.setColumn(0, "외출구분", 2);
        		break;
        	default:
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
        		,	DATE : this.ds_out_select.getColumn(0, "date")
        	};

        	Sct.popup(this, "emp", 450, 400, "", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 행선지 팝업
        this.div_cont_div_right2_btn_01_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : fv_sicode
        	};

        	Sct.popup(this, "dest", 450, 600, "", param, "DAY_POP::DAY00201_P08.xfdl", "fn_popCallback");
        };
        // 동행인 팝업
        this.div_cont_div_right2_btn_00_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_out_select.getColumn(0, "date")
        	};

        	Sct.popup(this, "emp_g", 450, 400, "", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 보호자동행 팝업
        this.div_cont_btn_00_00_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : fv_sicode
        		,	M_CODE : this.ds_out_select.getColumn(0, "거주코드")
        	};

        	Sct.popup(this, "guard", 450, 400, "", param, "DAY_POP::DAY00208_P01.xfdl", "fn_popCallback");
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
        				this.ds_out_select.setColumn(0, "확인담당", name);
        				this.ds_out_select.setColumn(0, "담당코드", staffid);
        				this.ds_out_select.setColumn(0, "writer", name + "/" + staffid);
        			}
        			else
        			{
        				this.ds_out_select.setColumn(0, "확인담당", "");
        				this.ds_out_select.setColumn(0, "담당코드", "");
        				this.ds_out_select.setColumn(0, "writer", "");
        			}
        			break;
        		case "dest" :
        				this.ds_out_select.setColumn(0, "행선지", objDs.getColumn(0,"병의원명"));
        			break;
        		case "emp_g" :
        			if (objDs.getColumn(0, "DEL") != "1")
        				{
        				this.ds_out_select.setColumn(0, "보호자명", objDs.getColumn(0,"c_name"));
        				this.ds_out_select.setColumn(0, "보호자관계", objDs.getColumn(0,"담당직종"));
        				this.ds_out_select.setColumn(0, "보호자전화", objDs.getColumn(0,"c_phone1"));
        				}
        				else
        				{
        				this.ds_out_select.setColumn(0, "보호자명", "");
        				this.ds_out_select.setColumn(0, "보호자관계", "");
        				this.ds_out_select.setColumn(0, "보호자전화", "");
        				}
        			break;
        		case "guard" :
        				const chkValue = objDs.getColumn(0, "chk");
        				if (chkValue == 1) {
        					this.ds_out_select.setColumn(0, "보호자명", objDs.getColumn(0, "m_conname"));
        					this.ds_out_select.setColumn(0, "보호자관계", objDs.getColumn(0, "m_conrele"));
        					this.ds_out_select.setColumn(0, "보호자전화", objDs.getColumn(0, "m_contel12"));
        				} else if (chkValue == 2) {
        					this.ds_out_select.setColumn(0, "보호자명", objDs.getColumn(0, "m_name1"));
        					this.ds_out_select.setColumn(0, "보호자관계", objDs.getColumn(0, "m_connect1"));
        					this.ds_out_select.setColumn(0, "보호자전화", objDs.getColumn(0, "m_phone12"));
        				} else if (chkValue == 3) {
        					this.ds_out_select.setColumn(0, "보호자명", objDs.getColumn(0, "m_name2"));
        					this.ds_out_select.setColumn(0, "보호자관계", objDs.getColumn(0, "m_connect2"));
        					this.ds_out_select.setColumn(0, "보호자전화", objDs.getColumn(0, "m_phone22"));
        				}
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_return", strDs);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DAY00208_P02_onload,this);
            this.div_func.form.btn_00.addEventHandler("onclick",this.btn_00_onclick,this);
            this.div_func.form.btn_00_00.addEventHandler("onclick",this.div_func_btn_00_00_onclick,this);
            this.div_cont.form.cal_00.addEventHandler("onchanged",this.div_00_cal_00_onchanged,this);
            this.div_cont.form.cal_01.addEventHandler("onchanged",this.div_00_cal_01_onchanged,this);
            this.div_cont.form.btn_01.addEventHandler("onclick",this.div_cont_div_right2_btn_01_onclick,this);
            this.div_cont.form.btn_01_00.addEventHandler("onclick",this.div_cont_div_right2_btn_01_00_onclick,this);
            this.div_cont.form.spn_01.addEventHandler("onspin",this.div_cont_div_right2_spn_00_onspin,this);
            this.div_cont.form.spn_02.addEventHandler("onspin",this.div_cont_div_right2_spn_00_onspin,this);
            this.div_cont.form.spn_03.addEventHandler("onspin",this.div_cont_div_right2_spn_00_onspin,this);
            this.div_cont.form.spn_04.addEventHandler("onspin",this.div_cont_div_right2_spn_00_onspin,this);
            this.div_cont.form.btn_00.addEventHandler("onclick",this.div_cont_div_right2_btn_00_onclick,this);
            this.div_cont.form.btn_00_00.addEventHandler("onclick",this.div_cont_btn_00_00_onclick,this);
            this.div_cont.form.chk_00.addEventHandler("onchanged",this.div_cont_chk_onchanged,this);
            this.div_cont.form.chk_01.addEventHandler("onchanged",this.div_cont_chk_onchanged,this);
            this.ds_out_select.addEventHandler("oncolumnchanged",this.ds_out_select_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00208_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
