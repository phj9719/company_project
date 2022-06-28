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
            this.set_titletext("법인등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,730);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRESIDENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_service_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_sub_service_tp1", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_sub_service_tp2", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_SERVICE1\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_SERVICE2\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"PRESIDENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HOMEPAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TP\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_TP\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_FR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_FR_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_FR_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TO_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TO_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TO_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_FR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_FR_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_FR_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TO_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TO_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TO_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_FR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_FR_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_FR_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TO_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TO_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TO_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAMERA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CAMERA_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CAMERA_PW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_sys_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_hour", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_minute", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_company_cd_s", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","22",null,"74","0.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("s01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_company_nm","15","11","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("법인명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_prd_nm","265","11","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_serv_tp","515","11","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prd_nm","360","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_cal","765","11","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("유효기간");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_use_yn","15","42","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("사용유무");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_serv_tp","610","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cm_service_tp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_use_yn","110","42","50","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_cm_use_yn");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_start_date","870","11","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.getSetter("calendarfunc").set("calendar");
            obj.set_headformat("yyyy.MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static26_01","984","11","16","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_font("8pt \"Malgun Gothic\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_end_date","995","11","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.getSetter("calendarfunc").set("calendar");
            obj.set_headformat("yyyy.MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_company","110","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_company_cd_s");
            obj.set_codecolumn("COMPANY_CD");
            obj.set_datacolumn("COMPANY_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0","113",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","7","535",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_head");
            obj.set_autoenter("select");
            obj.set_readonly("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"90\"/><Column size=\"111\"/><Column size=\"98\"/><Column size=\"93\"/><Column size=\"100\"/><Column size=\"105\"/><Column size=\"109\"/><Column size=\"114\"/><Column size=\"96\"/><Column size=\"92\"/><Column size=\"96\"/><Column size=\"102\"/><Column size=\"113\"/><Column size=\"122\"/><Column size=\"125\"/><Column size=\"89\"/><Column size=\"96\"/><Column size=\"102\"/><Column size=\"104\"/><Column size=\"213\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"73\"/><Column size=\"92\"/><Column size=\"88\"/><Column size=\"84\"/><Column size=\"89\"/><Column size=\"88\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"법인코드\" cssclass=\"CellEssential\"/><Cell col=\"4\" text=\"법인명\"/><Cell col=\"5\" text=\"대표자명\"/><Cell col=\"6\" text=\"서비스유형\" cssclass=\"CellEssential\"/><Cell col=\"7\" text=\"유효기간 From\" cssclass=\"CellEssential\"/><Cell col=\"8\" text=\"유효기간 To\" cssclass=\"CellEssential\"/><Cell col=\"9\" text=\"부가서비스1\"/><Cell col=\"10\" text=\"부가서비스2\"/><Cell col=\"11\" text=\"전화번호1\" cssclass=\"CellEssential\"/><Cell col=\"12\" text=\"전화번호2\"/><Cell col=\"13\" text=\"팩스번호\"/><Cell col=\"14\" text=\"우편번호\"/><Cell col=\"15\" text=\"주소\"/><Cell col=\"16\" text=\"사업자등록번호\"/><Cell col=\"17\" text=\"장기요양기관번호\"/><Cell col=\"18\" text=\"업태\"/><Cell col=\"19\" text=\"종목\"/><Cell col=\"20\" text=\"연결시스템\"/><Cell col=\"21\" text=\"연결시스템ID\"/><Cell col=\"22\" text=\"홈페이지\"/><Cell col=\"23\" text=\"아침식사시간\"/><Cell col=\"24\" text=\"점심식사시간\"/><Cell col=\"25\" text=\"저녁식사시간\"/><Cell col=\"26\" text=\"오전간식시간\"/><Cell col=\"27\" text=\"오후간식시간\"/><Cell col=\"28\" text=\"사용유무\" cssclass=\"CellEssential\"/><Cell col=\"29\" text=\"등록자ID\"/><Cell col=\"30\" text=\"등록자명\"/><Cell col=\"31\" text=\"등록일자\"/><Cell col=\"32\" text=\"수정자명\"/><Cell col=\"33\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"normal\"/><Cell col=\"2\" expr=\"currow + 1\"/><Cell col=\"3\" text=\"bind:COMPANY_CD\"/><Cell col=\"4\" text=\"bind:COMPANY_NM\" displaytype=\"normal\" combodataset=\"expr:dataset.getColumn(currow,'USERKEY_TYPE')=='10'?'ds_hr_emp_rank':'ds_hr_crew'\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"5\" text=\"bind:PRESIDENT_NM\"/><Cell col=\"6\" text=\"bind:SERVICE_TP\" combodataset=\"ds_cm_service_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\" edittype=\"combo\" displaytype=\"combotext\"/><Cell col=\"7\" text=\"bind:START_DT\" displaytype=\"date\" combodataset=\"ds_hr_work_state\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"8\" text=\"bind:END_DT\" displaytype=\"date\"/><Cell col=\"9\" text=\"bind:SUB_SERVICE1\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_cm_sub_service1\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"10\" text=\"bind:SUB_SERVICE2\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_cm_sub_service2\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"11\" text=\"bind:TEL_NO\"/><Cell col=\"12\" text=\"bind:TEL_NO2\"/><Cell col=\"13\" text=\"bind:FAX_NO\" displaytype=\"normal\"/><Cell col=\"14\" text=\"bind:ZIP_CODE\"/><Cell col=\"15\" text=\"bind:ADDRESS\" displaytype=\"normal\"/><Cell col=\"16\" text=\"bind:REG_NO\"/><Cell col=\"17\" text=\"bind:CORP_NO\"/><Cell col=\"18\" text=\"bind:BUSINESS_CONDITION\"/><Cell col=\"19\" text=\"bind:BIZ_ITM\"/><Cell col=\"20\" text=\"bind:REF_SYS_TP\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_cm_sys_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"21\" text=\"bind:REF_SYS_COMP_CD\"/><Cell col=\"22\" text=\"bind:HOMEPAGE_URL\"/><Cell col=\"23\" text=\"bind:BRE_TIME\"/><Cell col=\"24\" text=\"bind:LUN_TIME\"/><Cell col=\"25\" text=\"bind:DIN_TIME\"/><Cell col=\"26\" text=\"bind:MOR_TIME\"/><Cell col=\"27\" text=\"bind:AFT_TIME\"/><Cell col=\"28\" text=\"bind:USE_YN\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_cm_use_yn\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"29\" text=\"bind:REG_USER\"/><Cell col=\"30\" text=\"bind:REG_USER_NM\"/><Cell col=\"31\" text=\"bind:REG_DT\" displaytype=\"date\"/><Cell col=\"32\" text=\"bind:MOD_USER_NM\"/><Cell col=\"33\" text=\"bind:MOD_DT\" displaytype=\"date\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("statc_divcont_title","0","7","200","22",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("법인조회");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_addrow",null,"0","80","29","0",null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","550","7","740",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_01_00_00","10","366","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00","10","30","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","10","58","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01","10","86","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00","10","114","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00","10","142","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00","10","282","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_01","10","254","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01","10","226","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","10","198","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_02","10","170","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm","10","30","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("31");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00","10","58","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("32");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00","10","86","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("33");
            obj.set_text("전화번호2");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00","10","114","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("34");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00","10","142","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("35");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00","10","170","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("36");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00","10","198","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("37");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00","10","310","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_01_00","10","338","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00","10","226","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("40");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00","10","254","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("41");
            obj.set_text("부가서비스1");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_00","10","282","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("42");
            obj.set_text("연결시스템");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_00_00","10","310","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("43");
            obj.set_text("유효기간 from");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_00_00_00","10","338","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("44");
            obj.set_text("홈페이지");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_00_00_01","375","310","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("45");
            obj.set_text("유효기간 to");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_00_01","375","282","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("46");
            obj.set_text("연결시스템CD");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_01","375","254","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("47");
            obj.set_text("부가서비스2");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_01","375","226","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("48");
            obj.set_text("사용유무");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_01","375","142","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("49");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_01","375","114","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("50");
            obj.set_text("장기요양기관번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_01","375","86","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("51");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_01","375","58","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("52");
            obj.set_text("전화번호1");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm01","375","30","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("53");
            obj.set_text("법인명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_com_cd","143","34","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_cmp_nm","506","34","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_prd_nm","143","62","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_phone1","506","62","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_serv_tp","143","230","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_cm_service_tp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_cssclass("essential");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_use_yn","506","230","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_cm_use_yn");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_cssclass("essential");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_start_date","143","314","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("18");
            obj.getSetter("calendarfunc").set("calendar");
            obj.set_headformat("yyyy.MM-dd");
            obj.set_cssclass("essential");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_end_date","506","314","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("19");
            obj.getSetter("calendarfunc").set("calendar");
            obj.set_headformat("yyyy.MM-dd");
            obj.set_cssclass("essential");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_phone2","143","90","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("4");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_fax","506","90","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("5");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_number","143","118","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("6");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_nu_num","506","118","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("7");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_post","143","174","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("10");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_address","143","202","592","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("11");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_sub_serv1","143","258","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_cm_sub_service_tp1");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_sub_serv2","506","258","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_cm_sub_service_tp2");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_home","143","342","592","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("20");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_ut","143","145","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("8");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_event_tp","506","145","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("9");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_sys_tp","143","288","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_cm_sys_tp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("cmb_sys_tp_cd","506","286","229","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("17");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_inputtype("alpha,space,number,sign,dot,digit,comma");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_00_00_00_00","10","366","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("54");
            obj.set_text("아침식사시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_01_00_00_00","10","394","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_00_00_00_00_00","10","394","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("56");
            obj.set_text("점심식사시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_01_00_00_00_00","10","422","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_01_00_00_00_00_00","10","450","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_01_00_00_00_00_00_00","10","478","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_00_00_00_00_00_00","10","422","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("61");
            obj.set_text("저녁식사시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","10","450","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("62");
            obj.set_text("오전간식시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","10","478","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("63");
            obj.set_text("오후간식시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_bre_start_hour","143","370","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("64");
            obj.set_innerdataset("ds_nu_hour");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_bre_start_minute","211","370","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("65");
            obj.set_innerdataset("ds_nu_minute");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static26_01","277","370","16","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("66");
            obj.set_text("~");
            obj.set_font("8pt \"Malgun Gothic\"");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_bre_end_minute","355","370","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("68");
            obj.set_innerdataset("ds_nu_minute");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_bre_end_hour","287","370","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("67");
            obj.set_innerdataset("ds_nu_hour");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_lun_start_hour","143","398","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("69");
            obj.set_innerdataset("ds_nu_hour");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_lun_start_minute","211","398","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("70");
            obj.set_innerdataset("ds_nu_minute");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static26_01_00","277","398","16","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("71");
            obj.set_text("~");
            obj.set_font("8pt \"Malgun Gothic\"");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_lun_end_hour","287","398","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("72");
            obj.set_innerdataset("ds_nu_hour");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_lun_end_minute","355","398","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("73");
            obj.set_innerdataset("ds_nu_minute");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_din_start_hour","143","426","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("74");
            obj.set_innerdataset("ds_nu_hour");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_din_start_minute","211","426","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("75");
            obj.set_innerdataset("ds_nu_minute");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00","277","426","16","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("76");
            obj.set_text("~");
            obj.set_font("8pt \"Malgun Gothic\"");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_din_end_hour","287","426","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("77");
            obj.set_innerdataset("ds_nu_hour");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_din_end_minute","355","426","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("78");
            obj.set_innerdataset("ds_nu_minute");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_mor_start_hour","143","454","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("79");
            obj.set_innerdataset("ds_nu_hour");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_mor_start_minute","211","454","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("80");
            obj.set_innerdataset("ds_nu_minute");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_aft_start_hour","143","482","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("81");
            obj.set_innerdataset("ds_nu_hour");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_aft_start_minute","211","482","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("82");
            obj.set_innerdataset("ds_nu_minute");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_01_00_00_00_00_00_00_00","10","506","729","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_camera_yn","10","506","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("84");
            obj.set_text("낙상카메라 Y/N");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_camera00","210","506","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("85");
            obj.set_text("낙상카메라 ID");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_camera00_00","480","506","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("86");
            obj.set_text("낙상카메라 P/W");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_camera_yn","143","510","65","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("87");
            obj.set_innerdataset("ds_cm_use_yn");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_camera_id","342","510","136","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("88");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_camera_pw","612","510","124","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("89");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_gHMove","535","37.58%","25","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_sMove","44.54%","96",null,"16","44.54%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("url(\'imagerc::search_open.png\') no-repeat transparent");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","0","-1","108","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,730,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_cont.form.div_head.form.edt_userid00","value","ds_list","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_head.form.edt_userid00_00","value","ds_list","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_head.form.edt_userid00_00_00","value","ds_list","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_head.form.edt_userid00_00_00_00","value","ds_list","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_head.form.cmb_company_cd00","value","ds_list","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_head.form.cmb_company_cd00_00","value","ds_list","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_head.form.cmb_company_cd00_00_00","value","ds_list","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_prd_nm","value","ds_search","PRESIDENT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.cmb_serv_tp","value","ds_search","SERVICE_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.cal_start_date","value","ds_search","START_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.cal_end_date","value","ds_search","END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.cmb_use_yn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.edt_com_cd","value","ds_head","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.edt_cmp_nm","value","ds_head","COMPANY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.edt_prd_nm","value","ds_head","PRESIDENT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.edt_phone1","value","ds_head","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.edt_phone2","value","ds_head","TEL_NO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.edt_fax","value","ds_head","FAX_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.edt_number","value","ds_head","REG_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_right.form.edt_nu_num","value","ds_head","CORP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_right.form.edt_ut","value","ds_head","BUSINESS_CONDITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.edt_event_tp","value","ds_head","BIZ_ITM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.edt_post","value","ds_head","ZIP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.edt_address","value","ds_head","ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_right.form.cmb_serv_tp","value","ds_head","SERVICE_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.cmb_use_yn","value","ds_head","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.cmb_sub_serv1","value","ds_head","SUB_SERVICE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_right.form.cmb_sub_serv2","value","ds_head","SUB_SERVICE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_right.form.cmb_sys_tp","value","ds_head","REF_SYS_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.cmb_sys_tp_cd","value","ds_head","REF_SYS_COMP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.cal_start_date","value","ds_head","START_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_right.form.cal_end_date","value","ds_head","END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_right.form.edt_home","value","ds_head","HOMEPAGE_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_cont.form.div_right.form.cmb_bre_start_hour","value","ds_head","BRE_FR_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_right.form.cmb_bre_start_minute","value","ds_head","BRE_FR_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_right.form.cmb_bre_end_minute","value","ds_head","BRE_TO_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_right.form.cmb_bre_end_hour","value","ds_head","BRE_TO_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_right.form.cmb_lun_start_hour","value","ds_head","LUN_FR_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_right.form.cmb_lun_start_minute","value","ds_head","LUN_FR_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_right.form.cmb_lun_end_hour","value","ds_head","LUN_TO_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_right.form.cmb_lun_end_minute","value","ds_head","LUN_TO_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_right.form.cmb_din_start_hour","value","ds_head","DIN_FR_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_right.form.cmb_din_start_minute","value","ds_head","DIN_FR_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_right.form.cmb_din_end_hour","value","ds_head","DIN_TO_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.cmb_din_end_minute","value","ds_head","DIN_TO_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.cmb_mor_start_hour","value","ds_head","MOR_SNACK_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.div_right.form.cmb_mor_start_minute","value","ds_head","MOR_SNACK_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.div_right.form.cmb_aft_start_hour","value","ds_head","AFT_SNACK_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.div_right.form.cmb_aft_start_minute","value","ds_head","AFT_SNACK_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_search.form.cmb_company","value","ds_search","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.div_right.form.cmb_camera_yn","value","ds_head","CAMERA_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.div_right.form.edt_camera_id","value","ds_head","CAMERA_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.div_right.form.edt_camera_pw","value","ds_head","CAMERA_PW");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMA001CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("CMA001CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("CMA001CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    : CMA001CT
         * 화면명   :
         * 화면설명 :
         * 작성일    : 2020-07-08
         * 작성자   :  배영걸
         * 수정이력 :
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2020-07-08		배영걸		1차수정
         *		2021-11-02		SOOIM		1차수정
         ***********************************************************************
         ***********************************************************************
         */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = this.ds_head;
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_head;
        this.nMoveX;
        this.nMoveY;
        this.fv_form;
        this.fv_flag;
        // 서비스 단에서 받는 variable, 초기화 필요함
        this.outvar = "";
        this.fileGroupId = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e);

        	//조회조건
        	this.div_search.form.cmb_use_yn.set_value("Y");
        	this.fv_form = obj;
        	this.fn_setComboDs(obj);

        	//조회
        	this.fn_search();

        	//drag 버튼 활성화
        	this.gfn_setDivDrag(this.div_cont.form.btn_gHMove, this.div_cont.form.div_left, this.div_cont.form.div_right);

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.cmb_company.setFocus();
        };

        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };

        // 저장 버튼
        this.fn_saveBtn = function ()
        {
        	this.fn_save();
        };

        this.fn_setComboDs = function(obj)
        {
             var comboDsParamArr = [
        					    { outDsName : "ds_company_cd_s", sqlId : "CMA002CT.CMA002CT_COMPANY_CD_S",param : "", bEmptyRow : true}
                            ];
           this.gfn_setComboDs(obj, comboDsParamArr);
        }
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	//조회전 그리드에 변경된 데이터가 있을경우 ..
        	if(Sct.Grid.isUpdate(this.ds_notice) || Sct.Grid.isUpdate(this.ds_read_user)){
        		if(!Sct.confirm(this,"000171","")){ //변경된 데이터가 있습니다. 무시하겠습니까?
        			return;
        		}
        	}

        	//조회조건 필수여부확인
        	if(!this.gfn_findSnull(this.div_search)) return false;

        	return true;
        };

        //저장 전 validation
        this.fn_save_pre = function ()
        {
        	//저장여부
        	if (!Sct.Grid.hasInsertAndUpdateRow(this.ds_head))
        	{
        		Sct.alert(this, "000240"); //추가나 수정한 데이터가 없습니다.
        		return false;
        	}

        	//입력 필수여부체크
        	if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

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

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_head=output1";
        	var argument = "method=getList "
        		+ "sqlId=CMA001CT.CMA001CT_DS_HEAD_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //저장
        this.fn_save = function ()
        {
        	if(!this.fn_save_pre()) return;

        	let svcId = "save";
        	let inDs = "ds_head";
        	this.fn_save_com(svcId, inDs);
        };


        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			var count = this.ds_head.rowcount;
        			Sct.alert(this, "000175", count + "|");
        		}
        		else if(strSvcID == "save" || strSvcID == "delete")
        		{
        			this.fn_search();
        		}
        		else if(strSvcID == "readUserInfoUpdate")
        		{
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/

         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/

        // 행추가
        this.fn_head_addrow = function(obj,e)
        {
        	var cnt = this.ds_head.getCaseCount("dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT");
        	if(cnt > 0)
        	{
        		Sct.alert(this, "000179"); //저장 후 행추가 해주시기 바랍니다.
        		return ;
        	}

        	var nRow = this.ds_head.addRow();
        	//초기화
        	this.ds_head.setColumn(nRow, "CHK", "0");
        	//아침
        	this.ds_head.setColumn(nRow, "BRE_FR_HOUR","08");
        	this.ds_head.setColumn(nRow, "BRE_FR_MINUTE","00");
        	this.ds_head.setColumn(nRow, "BRE_TO_HOUR","08");
        	this.ds_head.setColumn(nRow, "BRE_TO_MINUTE","30");
        	//점심
        	this.ds_head.setColumn(nRow, "LUN_FR_HOUR","11");
        	this.ds_head.setColumn(nRow, "LUN_FR_MINUTE","30");
        	this.ds_head.setColumn(nRow, "LUN_TO_HOUR","12");
        	this.ds_head.setColumn(nRow, "LUN_TO_MINUTE","00");
        	//저녁
        	this.ds_head.setColumn(nRow, "DIN_FR_HOUR","17");
        	this.ds_head.setColumn(nRow, "DIN_FR_MINUTE","00");
        	this.ds_head.setColumn(nRow, "DIN_TO_HOUR","17");
        	this.ds_head.setColumn(nRow, "DIN_TO_MINUTE","30");
        	//오전간식
        	this.ds_head.setColumn(nRow, "MOR_SNACK_HOUR","07");
        	this.ds_head.setColumn(nRow, "MOR_SNACK_MINUTE","00");
        	//오후간식
        	this.ds_head.setColumn(nRow, "AFT_SNACK_HOUR","14");
        	this.ds_head.setColumn(nRow, "AFT_SNACK_MINUTE","00");
        };


        this.div_search_cmb_company_onitemchanged = function(obj,e)
        {
        	 //그리드에 변경된 데이터가 있을경우
        //    if(Sct.Grid.isUpdate(this.div_cont.form.div_left.form.grd_head)){
        //       //메세지로 변경된 데이터 여부와 상관없이 변경할지 확인
        //       if(!Sct.confirm(this,"000171","")){
        //          this.ds_search.setColumn(0, "COMPANY_CD", e.prevalue);
        //          return;
        //       }
        //    }

        //    Sct.commCodeTran2(this.fv_form, this.ds_search.getColumn(0,"COMPANY_CD"), true);
        //    this.ds_head.clearData();
        };

        this.ds_head_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CAMERA_YN"){
        		if(e.newvalue != "Y"){
        			this.div_cont.form.div_right.form.edt_camera_id.set_enable(false);
        			this.div_cont.form.div_right.form.edt_camera_pw.set_enable(false);
        			obj.setColumn(e.row,"CAMERA_ID",null);
        			obj.setColumn(e.row,"CAMERA_PW",null);
        		}else{
        			this.div_cont.form.div_right.form.edt_camera_id.set_enable(true);
        			this.div_cont.form.div_right.form.edt_camera_pw.set_enable(true);
        		}
        	}
        };

        this.ds_head_onrowposchanged = function(obj,e)
        {
        	if(obj.getColumn(e.newrow,"CAMERA_YN")!="Y"){
        		this.div_cont.form.div_right.form.edt_camera_id.set_enable(false);
        		this.div_cont.form.div_right.form.edt_camera_pw.set_enable(false);
        	}else{
        		this.div_cont.form.div_right.form.edt_camera_id.set_enable(true);
        		this.div_cont.form.div_right.form.edt_camera_pw.set_enable(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.div_search.form.sta_company_nm.addEventHandler("onclick",this.div_search_sta_doc_no_onclick,this);
            this.div_search.form.cmb_use_yn.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_search.form.cmb_company.addEventHandler("onitemchanged",this.div_search_cmb_company_onitemchanged,this);
            this.div_cont.form.div_left.form.grd_head.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.statc_divcont_title.addEventHandler("onclick",this.div_cont_statc_divcont_title_onclick,this);
            this.div_cont.form.div_left.form.btn_addrow.addEventHandler("onclick",this.fn_head_addrow,this);
            this.div_cont.form.div_right.form.cmb_serv_tp.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_use_yn.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_sub_serv1.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_sub_serv2.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_sys_tp.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_bre_start_hour.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_bre_start_minute.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_bre_end_minute.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_bre_end_hour.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_lun_start_hour.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_lun_start_minute.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_lun_end_hour.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_lun_end_minute.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_din_start_hour.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_din_start_minute.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_din_end_hour.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_din_end_minute.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_mor_start_hour.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_mor_start_minute.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_aft_start_hour.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_aft_start_minute.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_camera_yn.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
            this.ds_head.addEventHandler("onrowposchanged",this.ds_head_onrowposchanged,this);
            this.ds_head.addEventHandler("oncolumnchanged",this.ds_head_oncolumnchanged,this);
        };
        this.loadIncludeScript("CMA001CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
