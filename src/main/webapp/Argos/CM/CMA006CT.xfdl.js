(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SMD030CT");
            this.set_titletext("역할관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1112,590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEAR_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"PRN_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"APPV_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEAR_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"PRN_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"APPV_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dup", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_application_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_service_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_company_cd_s", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","22",null,"74","0%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("s01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_grp_nm","769","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("역할명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_grp_nm","864","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_company","5","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("법인명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_serv_tp","245","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_menu_tp","485","25","124","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("응용프로그램유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_company","110","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_company_cd_s");
            obj.set_codecolumn("COMPANY_CD");
            obj.set_datacolumn("COMPANY_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_serv_tp","340","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cm_service_tp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_menu_tp","619","25","160","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cm_application_tp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_cssclass("essential");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0","120",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_gHMove","455","40.20%","25","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","455",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_head");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"48\"/><Column size=\"96\"/><Column size=\"94\"/><Column size=\"139\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"75\"/><Column size=\"67\"/><Column size=\"71\"/><Column size=\"66\"/><Column size=\"71\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"NO\"/><Cell col=\"3\" text=\"법인명\" cssclass=\"CellEssential\"/><Cell col=\"4\" text=\"서비스유형\" cssclass=\"CellEssential\"/><Cell col=\"5\" text=\"응용프로그램유형\" cssclass=\"CellEssential\"/><Cell col=\"6\" text=\"역할코드\" cssclass=\"CellEssential\"/><Cell col=\"7\" text=\"역할명\" cssclass=\"CellEssential\"/><Cell col=\"8\" text=\"설명\"/><Cell col=\"9\" text=\"사용여부\" cssclass=\"CellEssential\"/><Cell col=\"10\" text=\"등록자ID\"/><Cell col=\"11\" text=\"등록자명\"/><Cell col=\"12\" text=\"등록일자\"/><Cell col=\"13\" text=\"수정자명\"/><Cell col=\"14\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" text=\"bind:COMPANY_CD\"/><Cell col=\"4\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_cm_service_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\" text=\"bind:SERVICE_TP\"/><Cell col=\"5\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_cm_application_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\" text=\"bind:APPLICATION_TP\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:GRP_CD\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:GRP_NM\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:GRP_DESC\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell col=\"9\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:USE_YN\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" combodataset=\"ds_cm_use_yn\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"10\" text=\"bind:REG_USER\"/><Cell col=\"11\" text=\"bind:REG_USER_NM\"/><Cell col=\"12\" text=\"bind:REG_DT\" edittype=\"none\" displaytype=\"date\"/><Cell col=\"13\" text=\"bind:MOD_USER_NM\"/><Cell col=\"14\" displaytype=\"date\" edittype=\"none\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","7","194","22",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("역할 리스트");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_addrow_head",null,"0","80","29","0",null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","480","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_gVMove","43.61%","217","50","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_icon("URL(\'imagerc::grid_vertical.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_up","0","0",null,"217","0",null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_menu","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_menu");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"116\"/><Column size=\"113\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"79\"/><Column size=\"81\"/><Column size=\"79\"/><Column size=\"74\"/><Column size=\"77\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"레벨\"/><Cell col=\"3\" text=\"메뉴코드\"/><Cell col=\"4\" text=\"메뉴명\"/><Cell col=\"5\" text=\"초기화\"/><Cell col=\"6\" text=\"조회\"/><Cell col=\"7\" text=\"추가\"/><Cell col=\"8\" text=\"수정\"/><Cell col=\"9\" text=\"삭제\"/><Cell col=\"10\" text=\"발행\"/><Cell col=\"11\" text=\"승인\"/><Cell col=\"12\" text=\"등록자ID\"/><Cell col=\"13\" text=\"등록자명\"/><Cell col=\"14\" text=\"등록일자\"/><Cell col=\"15\" text=\"수정자명\"/><Cell col=\"16\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow + 1\"/><Cell col=\"2\" text=\"bind:MENU_LEVEL\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:MENU_CD\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:MENU_NM\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" text=\"bind:CLS_AUTH\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" text=\"bind:SEAR_AUTH\"/><Cell col=\"7\" displaytype=\"checkboxcontrol\" text=\"bind:ADD_AUTH\"/><Cell col=\"8\" displaytype=\"checkboxcontrol\" text=\"bind:SAVE_AUTH\"/><Cell col=\"9\" displaytype=\"checkboxcontrol\" text=\"bind:DEL_AUTH\"/><Cell col=\"10\" displaytype=\"checkboxcontrol\" text=\"bind:PRN_AUTH\"/><Cell col=\"11\" displaytype=\"checkboxcontrol\" text=\"bind:APPV_AUTH\"/><Cell col=\"12\" text=\"bind:REG_USER\"/><Cell col=\"13\" text=\"bind:REG_USER_NM\"/><Cell col=\"14\" text=\"bind:REG_DT\" edittype=\"none\" displaytype=\"date\"/><Cell col=\"15\" text=\"bind:MOD_USER_NM\"/><Cell col=\"16\" edittype=\"none\" displaytype=\"date\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","7","194","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("1");
            obj.set_text("메뉴 리스트");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Button("btn_addrow_detail",null,"0","80","29","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("2");
            obj.set_text("역할추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Div("div_down","0","244",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_detail");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"99\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"73\"/><Column size=\"76\"/><Column size=\"79\"/><Column size=\"77\"/><Column size=\"76\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"NO\"/><Cell col=\"3\" text=\"레벨\"/><Cell col=\"4\" text=\"메뉴코드\"/><Cell col=\"5\" text=\"메뉴명\"/><Cell col=\"6\" text=\"초기화\"/><Cell col=\"7\" text=\"조회\"/><Cell col=\"8\" text=\"추가\"/><Cell col=\"9\" text=\"저장\"/><Cell col=\"10\" text=\"삭제\"/><Cell col=\"11\" text=\"발행\"/><Cell col=\"12\" text=\"승인\"/><Cell col=\"13\" text=\"등록자ID\"/><Cell col=\"14\" text=\"등록자명\"/><Cell col=\"15\" text=\"등록일자\"/><Cell col=\"16\" text=\"수정자명\"/><Cell col=\"17\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" text=\"bind:MENU_LEVEL\"/><Cell col=\"4\" text=\"bind:MENU_CD\"/><Cell col=\"5\" text=\"bind:MENU_NM\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CLS_AUTH\"/><Cell col=\"7\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:SEAR_AUTH\"/><Cell col=\"8\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:ADD_AUTH\"/><Cell col=\"9\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:SAVE_AUTH\"/><Cell col=\"10\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:DEL_AUTH\"/><Cell col=\"11\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:PRN_AUTH\"/><Cell col=\"12\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:APPV_AUTH\"/><Cell col=\"13\" text=\"bind:REG_USER\"/><Cell col=\"14\" text=\"bind:REG_USER_NM\"/><Cell col=\"15\" text=\"bind:REG_DT\" displaytype=\"date\"/><Cell col=\"16\" text=\"bind:MOD_USER_NM\"/><Cell col=\"17\" displaytype=\"date\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","7","194","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("1");
            obj.set_text("역할 세부 메뉴 리스트");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("Static60","0","0","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sMove","44.78%","96",null,"16","44.78%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::search_open.png\') no-repeat transparent");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1112,590,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.edt_menu_id00","value","ds_search","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_menu_id00_00","value","ds_search","MENU_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edt_grp_nm","value","ds_search","GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cmb_company","value","ds_search","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cmb_serv_tp","value","ds_search","SERVICE_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.cmb_menu_tp00_00","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.cmb_menu_tp","value","ds_search","APPLICATION_TP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMA006CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("CMA006CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("CMA006CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    : SMD030CT
         * 화면명   : 역할관리
         * 화면설명 :  역할관리 화면.
         * 작성일    : 2017-07-31 11:59
         * 작성자   : 김정록
         * 수정이력 :
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	  2020-06-18	배영걸		17 버전업
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
        this.fv_rowidx;
        this.fv_form;
        this.nMoveX;
        this.nMoveY;
        this.fv_flag = false;
        this.outvar = "";

        var fv_Company = nexacro.getApplication().gv_company; // 회사코드
        var fv_ServiceTp = nexacro.getApplication().gds_userInfo.getColumn(0,"SERVICE_TP");
        this.pgmId = nexacro.getApplication().gv_curWinKey;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e);
        	this.fv_form = obj;
        	this.fn_setComboDs(obj);
        	//키값 추가행일경우만 입력가능
        	var grpCdColIdx = this.div_cont.form.div_left.form.grd_head.getBindCellIndex("body", "GRP_CD");
        	this.div_cont.form.div_left.form.grd_head.setCellProperty("body", grpCdColIdx, "edittype", "expr:dataset.getRowType(currow) == 2 ? 'normal' : 'none'");

        	//rowTypeValidation 설정
        	var dsArr = ["ds_head"];
        	this.gfn_rowTypeValidationDs(dsArr);

        	//drag 버튼 활성화
        	this.gfn_setDivDrag(this.div_cont.form.btn_gHMove, this.div_cont.form.div_left, this.div_cont.form.div_right);
        	this.gfn_setDivDrag(this.div_cont.form.div_right.form.btn_gVMove, this.div_cont.form.div_right.form.div_up, this.div_cont.form.div_right.form.div_down);

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.cmb_company.setFocus();
        };
        this.fn_setComboDs = function(obj)
        {
             var comboDsParamArr = [
        					    { outDsName : "ds_company_cd_s", sqlId : "CMA002CT.CMA002CT_COMPANY_CD_S",param : "", bEmptyRow : true}
                            ];
           this.gfn_setComboDs(obj, comboDsParamArr);
        }

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
        	//조회전 그리드에 변경된 데이터가 있을경우 ..
        	if(Sct.Grid.isUpdate(this.div_cont.form.div_left.form.grd_head)
        		|| Sct.Grid.isUpdate(this.div_cont.form.div_right.form.div_down.form.grd_detail))
        	{
        		//메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
        		if(!Sct.confirm(this,"000171","")){
        			this.div_cont.form.div_left.form.grd_head.setFocus();
                    return false;
        		}
        	}

        	 //조회조건 필수여부확인
        	 if(!this.gfn_findSnull(this.div_search)) return false;

        	 //디테일 초기화
        	 this.ds_menu.clearData();
        	 this.ds_detail.clearData();
        	 return true;


        };

        //추가 전 validation
        this.fn_save_pre = function ()
        {
        	//저장여부
        	if (!Sct.Grid.hasInsertAndUpdateRow(this.fv_currentDS))
        	{
        		Sct.alert(this, "000240"); //추가나 수정한 데이터가 없습니다.
        		return false;
        	}

        	//입력 필수여부체크
        	if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;

        	//입력한값 중복 여부 체크
        	var keyArr ;
        	if(this.fv_currentDS.name == "ds_head")	keyArr = ["COMPANY_CD", "GRP_CD","SERVICE_TP"];
        	else									keyArr = ["COMPANY_CD", "GRP_CD", "MENU_CD","SERVICE_TP"];
        	if(!this.gfn_duplicateCheck(this.fv_currentDS, keyArr)) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	//데이터 저장전 저장할 key 값 dataset 변수에 저장
        	this.gfn_saveKeyArr(this.fv_currentDS, keyArr);

        	return true;
        };



        // 삭제 전 validation
        this.fn_delete_pre = function ()
        {
        	//변경여부
        	if (!Sct.Grid.hasDeletedRow(this.fv_currentDS))
        	{
        		Sct.alert(this, "000150"); //삭제할 데이터가 없습니다.
        		return false;
        	}

        	//다른상태값 존재여부
        	if(!Sct.Grid.hasDifferentRowType(this.fv_currentDS, Dataset.ROWTYPE_DELETE))
        	{
        		Sct.alert(this, "000239"); //삭제작업 외 다른 작업상태가 존재합니다.
        		return false;
        	}

        	//삭제하시겠습니까?
        	if(!Sct.confirm(this, "000152", "")) return false;

        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //Header 조회
        this.fn_search = function ()
        {
        	//validation
        	if(!this.fn_search_pre()) return;

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_head=output1";
        	var argument = "method=getList "
        		+ "sqlId=CMA006CT.CMA006CT_DS_HEAD_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //Detail 조회
        this.fn_searchDetail = function ()
        {
        	var nRow = this.ds_head.rowposition;
        	var grpCd = this.ds_head.getColumn(nRow, "GRP_CD");
        	var companyCd = this.ds_head.getColumn(nRow, "COMPANY_CD");
        	var serviceTp = this.ds_head.getColumn(nRow, "SERVICE_TP");
        	var applicationTp = this.ds_head.getColumn(nRow, "APPLICATION_TP");

        	var svcId = "searchDetail";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_menu=output1 ds_detail=output2";
        	var argument = "method=getList "
        		+ "sqlId='CMA006CT.CMA006CT_DS_MENU_S CMA006CT.CMA006CT_DS_DETAIL_S' "
        		+ "COMPANY_CD=" + companyCd + " "
        		+ "GRP_CD=" + grpCd + " "
        		+ "SERVICE_TP=" + serviceTp + " "
        		+ "APPLICATION_TP=" + applicationTp + " ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //저장
        this.fn_save = function ()
        {
        	//입력 필수여부체크
        	if(!this.fn_save_pre()) return false;

        	let svcId = "save";
        	let inDs = "ds_head,ds_detail"
        	this.fn_save_com(svcId, inDs);
        };

        //삭제
        this.fn_delete = function ()
        {
        	//validation
        	if(!this.fn_delete_pre()) return;

        	var sqlId = "";
        	if(this.fv_currentDS.name == "ds_head")	sqlId = "CMA006CT.CMA006CT_DS_HEAD_D";
        	else									sqlId = "CMA006CT.CMA006CT_DS_DETAIL_D";

        	var svcId = "delete";
        	var params = "/commonController.do";
        	var inDatasets = "input1=" +  this.fv_currentDS.name + ":U";
        	var outDatasets = "";
        	var argument = "method=delete "
        		+ "sqlId=" + sqlId + " ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
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

        			//저장후 조회후 변경된 row로 rowposition 설정
        			this.gfn_saveAfterFindRow(this.ds_head);
        		}
        		else if(strSvcID == "searchDetail")
        		{
        			var count = this.ds_detail.rowcount;
        			Sct.alert(this, "000175", count + "|");

        			//저장후 조회후 변경된 row로 rowposition 설정
        			this.gfn_saveAfterFindRow(this.ds_detail);
        		}
        		else if(strSvcID == "save" || strSvcID == "delete")
        		{
        			if(this.fv_currentDS.name == "ds_head")	this.fn_search();
        			else									this.fn_searchDetail();
        		}
        		else if(strSvcID == "send")
        		{
        			Sct.alert(this, "000533"); // 전송할 데이터를 등록하였습니다.
        			this.fn_search();
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        //역할 헤더 행추가
        this.div_cont_div_left_btn_addrow_head_onclick = function(obj,e)
        {
        	if(!this.gfn_findSnull(this.div_search)) return false;
        	var nRow = this.ds_head.addRow();
        	//초기화
        	this.ds_head.setColumn(nRow, "COMPANY_CD", this.ds_search.getColumn(0,"COMPANY_CD"));
        	this.ds_head.setColumn(nRow, "SERVICE_TP", this.ds_search.getColumn(0,"SERVICE_TP"));
        	this.ds_head.setColumn(nRow, "APPLICATION_TP", this.ds_search.getColumn(0,"APPLICATION_TP"));
        	this.ds_head.setColumn(nRow, "USE_YN", "Y");

        	//포커스
        	this.gfn_SetCellPos(this.div_cont.form.div_left.form.grd_head, "GRP_CD");
        };

        this.ds_head_onrowposchanged = function(obj,e)
        {
        	//menugrid 체크박스 HEAD 0 초기화
        	var grdMenu = this.div_cont.form.div_right.form.div_up.form.grd_menu;
        	grdMenu.setCellProperty("head", grdMenu.getBindCellIndex("body", "CHK"), "text", "0");

        	//detail 조회
        	this.fn_searchDetail();
        };

        //그리드 헤더클릭 이벤트
        this.div_cont_div_right_div_up_grd_menu_onheadclick = function(obj,e)
        {
        	//체크박스 헤더클릭시 이벤트
        	if(e.col == obj.getBindCellIndex("body", "CHK"))
        	{
        		var chkValue = obj.getCellProperty("head", e.col, "text");
        		var chk = "";
        		if(chkValue != "1")	chk = "1";
        		else				chk = "0";

        		//체크박스 설정
        		obj.setCellProperty("head", e.col, "text", chk);
        		for(var i=0; i<this.ds_menu.rowcount; i++) this.ds_menu.setColumn(i, "CHK", chk);
        	}
        };

        //역할추가 버튼
        this.div_cont_div_right_div_up_btn_addrow_detail_onclick = function(obj,e)
        {
        	var fRow = this.ds_menu.findRow("CHK", "1");
        	if(fRow < 0)
        	{
        		Sct.alert(this, "000119"); //선택된 데이터가 없습니다.
        		return ;
        	}

        	//헤더가 추가행일경우
        	if(this.ds_head.getRowType(this.ds_head.rowposition) == Dataset.ROWTYPE_INSERT)
        	{
        		Sct.alert(this, "000179"); //저장 후 행추가 해주시기 바랍니다.
        		return ;
        	}

        	var grpCd = this.ds_head.getColumn(this.ds_head.rowposition, "GRP_CD");
        	var servTp = this.ds_head.getColumn(this.ds_head.rowposition, "SERVICE_TP");
        	var appTp = this.ds_head.getColumn(this.ds_head.rowposition, "APPLICATION_TP");
        	var companyCd = this.ds_head.getColumn(this.ds_head.rowposition, "COMPANY_CD");
        	for(var i=0; i<this.ds_menu.rowcount; i++)
        	{
        		//메뉴 -> 역할세부메뉴 (ds_menu -> ds_detail)
        		if(this.ds_menu.getColumn(i, "CHK") == "1")
        		{
        			var nRow = this.ds_detail.addRow();
        			this.ds_detail.copyRow(nRow, this.ds_menu, i);
        			this.ds_detail.setColumn(nRow, "COMPANY_CD", companyCd);
        			this.ds_detail.setColumn(nRow, "GRP_CD", grpCd);
        			this.ds_detail.setColumn(nRow, "SERVICE_TP", servTp);
        			this.ds_detail.setColumn(nRow, "APPLICATION_TP", appTp);
        			this.ds_menu.deleteRow(i);
        			i--;
        		}
        	}
        	this.div_cont.form.div_right.form.div_down.form.grd_detail.setFocus();
        };

        //메뉴그리드 더블클릭 이벤트
        this.div_cont_div_right_div_up_grd_menu_oncelldblclick = function(obj,e)
        {
        	//헤더가 추가행일경우
        	if(this.ds_head.getRowType(this.ds_head.rowposition) == Dataset.ROWTYPE_INSERT)
        	{
        		Sct.alert(this, "000179"); //저장 후 행추가 해주시기 바랍니다.
        		return ;
        	}

        	//메뉴 -> 역할세부메뉴 (ds_menu -> ds_detail)
        	var grpCd = this.ds_head.getColumn(this.ds_head.rowposition, "GRP_CD");
        	var nRow = this.ds_detail.addRow();
        	this.ds_detail.copyRow(nRow, this.ds_menu, e.row);
        	this.ds_detail.setColumn(nRow, "GRP_CD", grpCd);
        	this.ds_menu.deleteRow(e.row);
        	this.div_cont.form.div_right.form.div_down.form.grd_detail.setFocus();
        };

        this.ds_detail_cancolumnchange = function(obj,e)
        {
        	//삭제버튼 check event
        	if(e.columnid == "DEL_CHECKBOX")
        	{
        		//추가된row 삭제컬럼 체크시
        		if(obj.getRowType(e.row) == Dataset.ROWTYPE_INSERT)
        		{
        			//역할세부메뉴 -> 메뉴 (ds_detail -> ds_menu)
        			var nRow = this.ds_menu.addRow();
        			this.ds_menu.copyRow(nRow, this.ds_detail, e.row);
        		}
        	}
        };


        this.div_search_cmb_company_onitemchanged = function(obj,e)
        {
        			//그리드에 변경된 데이터가 있을경우
           if(Sct.Grid.isUpdate(this.div_cont.form.div_left.form.grd_head)||Sct.Grid.isUpdate(this.div_cont.form.div_right.form.div_up.form.grd_menu)||Sct.Grid.isUpdate(this.div_cont.form.div_right.form.div_down.form.grd_detail)){
              //메세지로 변경된 데이터 여부와 상관없이 변경할지 확인
              if(!Sct.confirm(this,"000171","")){
                 this.ds_search.setColumn(0, "COMPANY_CD", e.prevalue);
                 return;
              }
           }

           Sct.commCodeTran2(this.fv_form, this.ds_search.getColumn(0,"COMPANY_CD"),fv_ServiceTp, true);
           this.ds_head.clearData();
           this.ds_menu.clearData();
           this.ds_detail.clearData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.cmb_company.addEventHandler("onitemchanged",this.div_search_cmb_company_onitemchanged,this);
            this.div_cont.form.div_left.form.grd_head.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.btn_addrow_head.addEventHandler("onclick",this.div_cont_div_left_btn_addrow_head_onclick,this);
            this.div_cont.form.div_right.form.div_up.form.grd_menu.addEventHandler("onheadclick",this.div_cont_div_right_div_up_grd_menu_onheadclick,this);
            this.div_cont.form.div_right.form.div_up.form.grd_menu.addEventHandler("oncelldblclick",this.div_cont_div_right_div_up_grd_menu_oncelldblclick,this);
            this.div_cont.form.div_right.form.div_up.form.btn_addrow_detail.addEventHandler("onclick",this.div_cont_div_right_div_up_btn_addrow_detail_onclick,this);
            this.div_cont.form.div_right.form.div_down.form.grd_detail.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_head.addEventHandler("onrowposchanged",this.ds_head_onrowposchanged,this);
            this.ds_detail.addEventHandler("cancolumnchange",this.ds_detail_cancolumnchange,this);
        };
        this.loadIncludeScript("CMA006CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
