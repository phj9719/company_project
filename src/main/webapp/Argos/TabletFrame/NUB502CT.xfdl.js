(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("CIST 검사");
            this.set_background("#f4f9fc");
            if (Form == this.constructor)
            {
                this._setFormPosition(1180,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resident", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_manager", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_AGE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CIS_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CIS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PT1\" type=\"INT\" size=\"256\"/><Column id=\"PT1_MAX\" type=\"INT\" size=\"256\"/><Column id=\"PT2\" type=\"INT\" size=\"256\"/><Column id=\"PT2_MAX\" type=\"INT\" size=\"256\"/><Column id=\"PT3\" type=\"INT\" size=\"256\"/><Column id=\"PT3_MAX\" type=\"INT\" size=\"256\"/><Column id=\"PT4\" type=\"INT\" size=\"256\"/><Column id=\"PT4_MAX\" type=\"INT\" size=\"256\"/><Column id=\"PT5\" type=\"INT\" size=\"256\"/><Column id=\"PT5_MAX\" type=\"INT\" size=\"256\"/><Column id=\"PT6\" type=\"INT\" size=\"256\"/><Column id=\"PT6_MAX\" type=\"INT\" size=\"256\"/><Column id=\"PT7\" type=\"INT\" size=\"256\"/><Column id=\"PT7_MAX\" type=\"INT\" size=\"256\"/><Column id=\"CIS_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cist_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CIS_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CIS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PT1\" type=\"INT\" size=\"256\"/><Column id=\"PT1_MAX\" type=\"INT\" size=\"256\"/><Column id=\"PT2\" type=\"INT\" size=\"256\"/><Column id=\"PT2_MAX\" type=\"INT\" size=\"256\"/><Column id=\"PT3\" type=\"INT\" size=\"256\"/><Column id=\"PT3_MAX\" type=\"INT\" size=\"256\"/><Column id=\"PT4\" type=\"INT\" size=\"256\"/><Column id=\"PT4_MAX\" type=\"INT\" size=\"256\"/><Column id=\"PT5\" type=\"INT\" size=\"256\"/><Column id=\"PT5_MAX\" type=\"INT\" size=\"256\"/><Column id=\"PT6\" type=\"INT\" size=\"256\"/><Column id=\"PT6_MAX\" type=\"INT\" size=\"256\"/><Column id=\"PT7\" type=\"INT\" size=\"256\"/><Column id=\"PT7_MAX\" type=\"INT\" size=\"256\"/><Column id=\"CIS_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_cist_pt", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_cist_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","2.46%","14",null,"40","3.39%",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","560","0","80","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("검색");
            obj.set_cssclass("btn_tSearch");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tReset",null,"0","100","40","200",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_tReset");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave00",null,"0","90","40","100",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_tSave");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","0","160","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_locale("ko_KR");
            obj.set_displaynulltext("일자");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","170","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_displaynulltext("층(생활실)");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","300","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_location");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("호실");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_resident","430","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_resident");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("입소자명");
            obj.set_buttonsize("0 0");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tDelete",null,"0","90","40","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_tDelete");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","2.46%","67",null,null,"3.39%","4.29%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","75","190","150",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_pt1","0","75","190","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("지남력(5/5)");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","0","5","420","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager","0","5","151","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("처리자");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_manager","162","10","245","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_itemheight("36");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_manager");
            obj.set_buttonsize("0 0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_pt1","20","135","150","70",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_inputtype("number");
            obj.set_inputfilter("comma,alpha,dot,sign,space,symbol");
            obj.set_textAlign("center");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00","190","75","180","150",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_pt2","210","135","140","70",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_inputtype("number");
            obj.set_inputfilter("comma,alpha,dot,sign,space,symbol");
            obj.set_textAlign("center");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_pt2","190","75","180","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("주의력(3/3)");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","370","75","200","150",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_pt3","390","135","160","70",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_inputtype("number");
            obj.set_inputfilter("comma,alpha,dot,sign,space,symbol");
            obj.set_textAlign("center");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","570","75","180","150",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","750","75","180","150",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","930","75","180","150",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","0","255","190","150",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_pt3","370","75","200","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_text("시공간기능(2/2)");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_pt4","570","75","180","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_text("집행기능(6/6)");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_pt4","590","135","140","70",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_inputtype("number");
            obj.set_inputfilter("comma,alpha,dot,sign,space,symbol");
            obj.set_textAlign("center");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_pt5","750","75","180","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_text("기억력(10/10)");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_pt5","770","135","140","70",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_inputtype("number");
            obj.set_inputfilter("comma,alpha,dot,sign,space,symbol");
            obj.set_textAlign("center");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_pt6","930","75","180","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_text("언어기능(4/4)");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_pt6","950","135","140","70",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_inputtype("number");
            obj.set_inputfilter("comma,alpha,dot,sign,space,symbol");
            obj.set_textAlign("center");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_pt7","0","255","190","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            obj.set_text("총점(30/30)");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_pt7","20","315","150","70",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            obj.set_inputtype("number");
            obj.set_inputfilter("comma,alpha,dot,sign,space,symbol");
            obj.set_textAlign("center");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00","190","255","920","150",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00","190","255","920","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("25");
            obj.set_text("판정");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_cis","210","315","880","70",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("26");
            obj.set_itemheight("65");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_nu_cist_grade");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",1180,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cmb_resident","value","ds_search","RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.edt_pt1","value","ds_list","PT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.cmb_manager","value","ds_list","MANAGER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Tab00.Tabpage0.form.div_cont.form.sta_residentVal","text","ds_resInfo","NAME_AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.edt_pt2","value","ds_list","PT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.edt_pt3","value","ds_list","PT3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.edt_pt4","value","ds_list","PT4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.edt_pt5","value","ds_list","PT5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.edt_pt6","value","ds_list","PT6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.edt_pt7","value","ds_list","PT7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.cmb_cis","value","ds_list","CIS_GRADE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB502CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB502CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB502CT.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB502CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    : NUB502CT
         * 화면명   :
         * 화면설명 :
         * 작성일    : 2021-10-08
         * 작성자   :  박한준
         * 수정이력 :
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2021-11-23		조기종		화면 UI 및 로직 변경
         ***********************************************************************
         ***********************************************************************
         */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = "";
        this.fv_currentGrid = "";
        this.tranFlag = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e, false);

        	// 검색조건 세팅
        	this.taSearchDataSetting(obj);

        	this.fn_setComboDs(obj);

        	this.ds_location.filter("ARE_CD == '" + this.ds_search.getColumn(0, "AREA") + "'");

        	this.fn_search();
        };

        // 처리자 콤보
        this.fn_setComboDs = function(obj)
        {
        	const comboDsParamArr = [
        		{ outDsName : "ds_manager", sqlId : "NUB_COMMON.NUB_COMMON_DS_MANAGER_S", param : this.ds_search, bEmptyRow : true }
        		,{outDsName : "ds_location", sqlId : "NUB_COMMON.NUB_COMMON_DS_LOCATION_ALL_S", param : this.ds_search, bEmptyRow : true}
        		,{outDsName : "ds_resident", sqlId : "NUB_COMMON.NUB_COMMON_DS_RESIDENT_ALL_S", param : this.ds_search, bEmptyRow : true}
        	];
        	this.gfn_setComboDs(obj, comboDsParamArr);
        };
        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 검색 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };

        // 초기화 버튼
        this.fn_resetBtn = function ()
        {
        	this.fn_reset();
        };

        // 저장 버튼
        this.fn_saveBtn = function ()
        {
        	this.fn_save();
        };

        //삭제 버튼
        this.fn_deleteBtn = function ()
        {
        	this.fn_delete();
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	const resident = this.ds_search.getColumn(0, "RES_ID");
        	if (resident == undefined || resident == "" || resident == null)
        	{
        		alert("입소자를 선택해 주세요");
        		return false;
        	}

        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function ()
        {
        	const resident = this.ds_search.getColumn(0, "RES_ID");
        	if (resident == undefined || resident == "" || resident == null)
        	{
        		alert("입소자를 선택해 주세요");
        		return false;
        	}

        	// 저장 내용 체크
        	if(!Sct.Grid.hasInsertAndUpdateRow(this.ds_list))
        	{
        		Sct.alert(this, "000569", "저장");	// {0}할 내용이 없습니다.
        		return false;
        	}

        	// 저장하시겠습니까?
        	if(!Sct.confirm(this, "000038")) return false;

        	const nRow = this.ds_list.rowposition;

        	if(this.ds_list.getRowType(nRow) == 2) this.tranFlag = "I";
        	else if(this.ds_list.getRowType(nRow) == 4) this.tranFlag = "U";

        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function ()
        {
        	const resident = this.ds_search.getColumn(0, "RES_ID");
        	if (resident == undefined || resident == "" || resident == null)
        	{
        		alert("입소자를 선택해 주세요");
        		return false;
        	}

        	// 데이터셋 상태가 추가상태이면 삭제 못함
        	if(this.ds_list.getRowType(this.ds_list.rowposition) == 2)
        	{
        		Sct.alert(this, "000569", "삭제");	// {0}할 내용이 없습니다.
        		return false;
        	}

        	// 삭제하시겠습니까?
        	if(!Sct.confirm(this, "000083", "삭제")) return false;

        	const nRow = this.ds_list.rowposition;
        	this.ds_list.set_updatecontrol(false);
        	this.ds_list.setRowType(nRow, Dataset.ROWTYPE_DELETE);
        	this.ds_list.set_updatecontrol(true);

        	return true;
        };



        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function ()
        {
        	//validation
        	if(!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search input2=ds_search";
        	const outDatasets = "ds_list=output1 ds_resInfo=output2";
        	const argument = "method=getList "
        		+ "sqlId='NUB502CT.NUB502CT_DS_LIST_S NUB_COMMON.NUB_COMMON_DS_RESINFO_S'";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //저장
        this.fn_save = function ()
        {
        	//validation
        	if(!this.fn_save_pre()) return;

        	const svcId = "save";
        	const inDs = "ds_list";
        	this.fn_save_com(svcId, inDs);
        };

        //초기화
        this.fn_reset = function ()
        {
        	this.ds_search.setColumn(0, "DATE", Sct.Util.getToday()); // 오늘
        	this.fn_search();
        }
        //삭제
        this.fn_delete = function ()
        {
        	if(!this.fn_delete_pre()) return;

        	let inDatasets = "input1=ds_list:U";
        	let argument = "method=delete ";
        		argument += "sqlId=NUB502CT.NUB502CT_DS_LIST_D ";

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const outDatasets = "";
        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "AREA", this.ds_resInfo.getColumn(0,"AREA"));
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "LOCATION", this.ds_resInfo.getColumn(0,"LOCATION"));
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "RES_ID", this.ds_resInfo.getColumn(0,"RES_ID"));

        			if (this.ds_list.rowcount < 1)
        			{
        				const nRow = this.ds_list.addRow();
        				this.ds_list.setColumn(nRow, "COMPANY_CD", this.ds_resInfo.getColumn(0,"COMPANY_CD"));
        				this.ds_list.setColumn(nRow, "RES_ID", this.ds_resInfo.getColumn(0,"RES_ID"));
        				this.ds_list.setColumn(nRow, "CIS_DT", this.ds_resInfo.getColumn(0,"DATE"));

        				for(let i = 1; i < 8; i++)
        				{
        					this.ds_list.setColumn(nRow, "PT" + i, 0);

        					//var nRow = this.ds_nu_cist_pt.findRow("CMCD", i + '0'); // PT MAX 값 세팅
        					//this.ds_list.setColumn(0, "PT"+i+"_MAX", this.ds_nu_cist_pt.getColumn(nRow,"STR1"));
        				}

        				// 처리자에 접속자 세팅
        				const userId = nexacro.getApplication().gds_userInfo.getColumn(0,"USER_ID");
        				this.ds_list.setColumn(nRow, "MANAGER_ID", userId);
        			}
        			else
        			{

        			}
        		}
        		else if(strSvcID == "save")
        		{
        			if(this.tranFlag == "I")
        			{
        				Sct.alert(this, "000570", "등록");	// {0} 되었습니다.
        			}
        			else if(this.tranFlag == "U")
        			{
        				Sct.alert(this, "000570", "수정");	// {0} 되었습니다.
        			}
        			this.tranFlag = "";

        			this.fn_search();
        		}
        		else if(strSvcID == "delete")
        		{
        			Sct.alert(this, "000570", "삭제");	// {0} 되었습니다.
        			this.fn_search();
        		}
        	}
        	else
        	{
        		this.tranFlag = "";
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/

        /***********************************************************************
        * Component Event Functions
        ***********************************************************************/
        this.fn_pt_onchanged = function(obj,e)
        {
        	var objId = obj.id; // edit id
        	objId = objId.slice(-3); // 뒤에서 3개 자르기
        	objId = objId.toUpperCase(); // 소문자를 대문자로

        	if(e.postvalue > this.ds_list.getColumn(0, objId + "_MAX"))
        	{
        		Sct.alert(this, "000580", "'" + this.ds_list.getColumn(0, objId + "_MAX") + "'");	// 해당점수는 {0}점을 초과할 수 없습니다.
        		obj.set_value(e.prevalue);
        		return;
        	}

        	//총점
        	if(objId != "PT7"){
        		let totScore =0;
        		for(let i = 1; i < 7; i++)
        		{
        			totScore += this.ds_list.getColumn(0, "PT" + i);
        		}
        		this.div_cont.form.edt_pt7.set_value(totScore);
        	}
        };

        // 처리자 선택
        this.cmb_manager_oneditclick = function(obj,e)
        {
        	const param = {COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")};

        	Sct.tPopup(this, "pop1", 350, 350, param, "TabletPOP::NUB_MANAGER_POP.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "pop1" :
        			this.ds_list.setColumn(0, "MANAGER_ID", objDs.getColumn(0,"USER_ID"));
        			break;
        		case "pop2" :
        			this.ds_location.filter("ARE_CD == '" + objDs.getColumn(0, "AREA") + "'");
        			this.ds_resident.filter("");
        			this.div_search.form.cmb_area.set_value(objDs.getColumn(0, "AREA"));
        			this.div_search.form.cmb_location.set_value(objDs.getColumn(0, "LOCATION"));
        			this.div_search.form.cmb_resident.set_value(objDs.getColumn(0, "RES_ID"));
        			this.fn_search();
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };

        // 입소자 선택
        this.div_search_cmb_resident_oneditclick = function(obj,e)
        {
        	const param = {
        			COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")
        		,	FLAG : "NUB502CT"
        		,	AREA : this.ds_search.getColumn(0, "AREA")
        		,	LOCATION : this.ds_search.getColumn(0, "LOCATION")
        		,	DATE : this.ds_search.getColumn(0, "DATE")
        	};

        	Sct.tPopup(this, "pop2", 350, 350, param, "TabletPOP::NUB_RESIDENT_POP.xfdl", "fn_popCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.div_search.addEventHandler("onclick",this.formClick,this);
            this.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.btn_tReset.addEventHandler("onclick",this.fn_resetBtn,this);
            this.div_search.form.btn_tSave00.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.cmb_area_onitemchanged2,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_location_onitemchanged2,this);
            this.div_search.form.cmb_resident.addEventHandler("oneditclick",this.div_search_cmb_resident_oneditclick,this);
            this.div_search.form.btn_tDelete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_cont.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_pt1.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_00_00_01_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_manager.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.cmb_manager.addEventHandler("oneditclick",this.cmb_manager_oneditclick,this);
            this.div_cont.form.edt_pt1.addEventHandler("onchanged",this.fn_pt_onchanged,this);
            this.div_cont.form.edt_pt1.addEventHandler("oneditclick",this.edt_oneditclick,this);
            this.div_cont.form.Static01_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.edt_pt2.addEventHandler("onchanged",this.fn_pt_onchanged,this);
            this.div_cont.form.edt_pt2.addEventHandler("oneditclick",this.edt_oneditclick,this);
            this.div_cont.form.sta_pt2.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.edt_pt3.addEventHandler("onchanged",this.fn_pt_onchanged,this);
            this.div_cont.form.edt_pt3.addEventHandler("oneditclick",this.edt_oneditclick,this);
            this.div_cont.form.Static01_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_00_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_00_00_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_pt3.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_pt4.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.edt_pt4.addEventHandler("onchanged",this.fn_pt_onchanged,this);
            this.div_cont.form.edt_pt4.addEventHandler("oneditclick",this.edt_oneditclick,this);
            this.div_cont.form.sta_pt5.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.edt_pt5.addEventHandler("onchanged",this.fn_pt_onchanged,this);
            this.div_cont.form.edt_pt5.addEventHandler("oneditclick",this.edt_oneditclick,this);
            this.div_cont.form.sta_pt6.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.edt_pt6.addEventHandler("onchanged",this.fn_pt_onchanged,this);
            this.div_cont.form.edt_pt6.addEventHandler("oneditclick",this.edt_oneditclick,this);
            this.div_cont.form.sta_pt7.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.edt_pt7.addEventHandler("onchanged",this.fn_pt_onchanged,this);
            this.div_cont.form.edt_pt7.addEventHandler("oneditclick",this.edt_oneditclick,this);
            this.div_cont.form.Static01_00_00_00_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_00_00_00_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
            this.ds_cist_input.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("NUB502CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
