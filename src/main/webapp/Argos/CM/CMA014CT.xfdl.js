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
            this.set_titletext("서비스 공지등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1112,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_use_yn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dup", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_files", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ROWIDX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"BLOB_FILE\" type=\"BLOB\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_download", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BLOB_FILE\" type=\"BLOB\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_service_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_rank_cd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_sal_cd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","22",null,"74","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("s01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_company_nm","575","26","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_company_nm","670","26","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_serv_tp","805","26","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_company_nm00","900","26","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_edate","242","26","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("작성일");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_sdate","340","26","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static26","454","26","16","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_font("8pt \"Malgun Gothic\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_edate","465","26","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_serv_tp00","15","26","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_serv_tp","110","26","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_cm_service_tp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0","112",null,null,"0%","0.00%",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_cont","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_DetailBg");
            obj.set_border("0px solid rgba(120,120,120,1)");
            obj.set_font("9pt \"Malgun Gothic\"");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_right","864","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.div_cont.form.div_cont.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00","37","35",null,"29","0",null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00","37","63",null,"29","0",null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00","37","91",null,null,"0","68",null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_content","37","91","106",null,null,"68",null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("8");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_title","37","63","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("9");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static05_00_01","37",null,null,"29","0","40",null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_use_yn","37",null,"106","29",null,"40",null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("11");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_not_dt","37","35","106","29",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("12");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_title","148","67",null,"21","6",null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_not_dt","148","39","144","21",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_visible("true");
            obj.set_cssclass("essential");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_user_passwd","148",null,null,"21","51","44",null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("4");
            obj.set_password("false");
            obj.set_readonly("true");
            obj.set_color("black");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_chgpass",null,null,"36","23","8","43",null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("3");
            obj.set_text("첨부");
            obj.set_visible("true");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new TextArea("ta_content","148","97",null,null,"6","73",null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_padding("5px");
            obj.set_font("normal 10pt/1.3 \"Arial\"");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_addrow",null,"5","80","29","0",null,null,null,null,null,this.div_cont.form.div_cont.form.div_right.form);
            obj.set_taborder("13");
            obj.set_text("행추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","876",null,null,"0",null,null,null,null,this.div_cont.form.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.form.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","35",null,null,"0","40",null,null,null,null,this.div_cont.form.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autosizebandtype("body");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"188\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"NO\"/><Cell col=\"3\" text=\"사업장\"/><Cell col=\"4\" displaytype=\"normal\" text=\"공장\"/><Cell col=\"5\" text=\"서비스유형\" cssclass=\"CellEssential\"/><Cell col=\"6\" text=\"작성일\" cssclass=\"CellEssential\"/><Cell col=\"7\" text=\"제목\" cssclass=\"CellEssential\"/><Cell col=\"8\" text=\"등록자ID\"/><Cell col=\"9\" text=\"등록자명\"/><Cell col=\"10\" text=\"등록일자\"/><Cell col=\"11\" text=\"수정자명\"/><Cell col=\"12\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" displaytype=\"combotext\" text=\"bind:BIZ_CD\" combodataset=\"gds_biz\" combocodecol=\"BIZ_CD\" combodatacol=\"BIZ_NM\" combotype=\"filterlike\"/><Cell col=\"4\" displaytype=\"combotext\" text=\"bind:PLANT_CD\" combodataset=\"gds_plant\" combocodecol=\"PLANT_CD\" combodatacol=\"PLANT_NM\" combotype=\"filterlike\"/><Cell col=\"5\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:SERVICE_TP\" combodataset=\"ds_cm_service_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"6\" text=\"bind:NOT_DT\" displaytype=\"date\"/><Cell col=\"7\" text=\"bind:TITLE\" displaytype=\"normal\"/><Cell col=\"8\" text=\"bind:REG_USER\"/><Cell col=\"9\" text=\"bind:REG_USER_NM\"/><Cell col=\"10\" text=\"bind:REG_DT\" displaytype=\"date\"/><Cell col=\"11\" text=\"bind:MOD_USER_NM\"/><Cell col=\"12\" text=\"bind:MOD_DT\" displaytype=\"date\"/></Band></Format></Formats>");
            this.div_cont.form.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","13","194","20",null,null,null,null,null,null,this.div_cont.form.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("공지리스트");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_gHMove","876","45.31%","25","50",null,null,null,null,null,null,this.div_cont.form.div_cont.form);
            obj.set_taborder("1");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.form.div_cont.addChild(obj.name, obj);

            obj = new Div("div_paging","0",null,null,"30","692","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_url("CM_POP::CM_PAGING_DIV.xfdl");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static60","0","-1","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sMove","44.42%","96",null,"16","44.42%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::search_open.png\') no-repeat transparent");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1112,610,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cont.form.div_cont","value","ds_list","GRADE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.div_cont","value","ds_list","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.div_cont","value","ds_list","USER_NM_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_cont","value","ds_list","WORK_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_cont","value","ds_list","USER_PASSWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_cont","value","ds_list","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_cont","value","ds_list","USER_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_cont","value","ds_list","DEF_LANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_cont","value","ds_list","USER_NM_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_cont","value","ds_list","USER_NM_CHI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_cont","value","ds_list","INOUT_USER_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_cont","value","ds_list","SRM_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_cont","value","ds_list","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_cont","value","ds_list","CELL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_cont","value","ds_list","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_cont","value","ds_list","BIZ_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_cont","value","ds_list","PLANT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.cal_validitystart","value","ds_list","VALID_PERIOD_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.cal_passwdExpire","value","ds_list","VALID_PASSWD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_cont","value","ds_list","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_cont","value","ds_list","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_cont","value","ds_list","VALID_PERIOD_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_cont","image","ds_download","BLOB_FILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_cont","value","ds_list","WC_GROUP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_cont","value","ds_list","WC_GROUP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_cont","value","ds_list","VALID_PERIOD_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_cont","value","ds_list","VALID_PASSWD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_cont","value","ds_list","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_cont","value","ds_list","CUST_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_cont.form.div_right.form.edt_user_passwd","value","ds_list","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_cont.form.div_right.form.edt_title","value","ds_list","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_search.form.edt_company_nm","value","ds_search","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_cont.form.div_right.form.cal_not_dt","value","ds_list","NOT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_cont.form.div_right.form.ta_content","value","ds_list","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_search.form.edt_company_nm00","value","ds_search","REG_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_search.form.cal_sdate","value","ds_search","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_search.form.cal_edate","value","ds_search","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_search.form.cmb_serv_tp","value","ds_search","SERVICE_TP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM_POP::CM_PAGING_DIV.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CMA014CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("CMA014CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("CMA014CT.xfdl", function() {
        /***********************************************************************
         * 화면ID   : CMA014CT.xfdl
         * 화면명   :
         * 화면설명 : 공지등록
         * 작성일   : 2021-06-25 10:32
         * 작성자   : SOOIM
         * 수정이력 :
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2021.06.24		SOOIM		최초작성
         ***********************************************************************
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/
        /***********************************************************************
         * Form Variables
         ***********************************************************************/

        var fv_Company = nexacro.getApplication().gds_userInfo.getColumn(0,"COMPANY_CD");
        var fv_ServiceTp = nexacro.getApplication().gds_userInfo.getColumn(0,"SERVICE_TP");
        var fv_appTp = nexacro.getApplication().gv_applicationTp;

        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.div_cont.form.div_left.form.grd_list;

        this.fileGroupId = "";
        this.fv_currentTab = 0;
        this.gv_NextEmpNo = "";

        this.saveUrl = nexacro.getEnvironment().services["svcurl"].url + "/common/";

        this.fv_saveRefNo = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.setColumn(0,"COMPANY_CD",fv_Company);
        	this.ds_search.setColumn(0,"SERVICE_TP",fv_ServiceTp);
        	this.ds_search.setColumn(0,"APPLICATION_TP",fv_appTp);
        	this.ds_search.setColumn(0,"DT_FROM",Sct.Util.getFirstDay());
        	this.ds_search.setColumn(0,"DT_TO",Sct.Util.getToday());
        	//상태삭제순번컬럼 고정
        	//this.div_cont.form.div_left.form.grd_head.setFormatColProperty(2, "band", "left");

        	//rowTypeValidation 설정
        	var dsArr = ["ds_list"];
        	this.gfn_rowTypeValidationDs(dsArr);

        	//페이징 처리 초기화
        	this.fn_initPageSet();

        	//drag 버튼 활성화
        	this.fn_setDivDrag();

        	// 오픈시 전체 조회
        	this.fn_search();

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.cmb_serv_tp.setFocus();
        };

        //페이징 처리 초기화
        this.fn_initPageSet = function()
        {
        	//페이징처리 초기화
        	this.ds_list.pageRowCount		= 50;											//조회될 row 갯수 (page Size)
            this.ds_list.pageCount			= 10;											//최대 페이지 갯수 (page Scale)
            this.ds_list.pageTotalVisible	= false;										//하단 page Size, pageScale 등 입력 div show YN
        	this.ds_list.pageNo				= 1;											//최초조회시 default 페이지 번호
        	this.ds_list.pageFunctionName	= "fn_search";									//페이지 버튼(1,2,3...)클릭시 조회할 function name
        	this.div_cont.form.div_paging.form.fn_init(this, this.ds_list);	//페이지 form 초기화

        }
        this.fn_setDivDrag = function()
        {
        	//divCont
        	this.gfn_setDivDrag(this.div_cont.form.div_cont.form.btn_gHMove, this.div_cont.form.div_cont.form.div_left, this.div_cont.form.div_cont.form.div_right);
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
             if(Sct.Grid.isUpdate(this.ds_list)
        		//|| Sct.Grid.isUpdate(this.ds_schdl)
        		){
                 //메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
                 if(!Sct.confirm(this,"000171","")){
                     return false;
                 }
             }

             //조회조건 필수여부확인
        	 if(!this.gfn_findSnull(this.div_search)) return false;

        	 var mm = Sct.Util.getMonthDiff(this.ds_search.getColumn(0,"DT_FROM"),this.ds_search.getColumn(0,"DT_TO"));

        	 if(mm>11){
        		Sct.alert(this, "000565"); //1년 이상 조회할 수 없습니다.
        		return;
        	 }

        	 return true;
        };

        //저장 전 validation
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

        	if(!this.gfn_findSnull(this.div_cont.form.div_cont.form.div_right)) return false;

        	//입력한값 중복 여부 체크
        	var keyArr ;
        	if(this.fv_currentDS.name == "ds_list"){
        		keyArr = ["COMPANY_CD","SERVICE_TP","TITLE","NOT_DT"];
        	}
        	if(!this.gfn_duplicateCheck(this.fv_currentDS, keyArr)) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	//데이터 저장전 저장할 key 값 dataset 변수에 저장
        	this.gfn_saveKeyArr(this.fv_currentDS, keyArr);
        	this.fv_saveRefNo = this.ds_list.getColumn(this.ds_list.rowposition, "TITLE");
        	return true;
        };


        // 삭제 전 validation
        this.fn_delete_pre = function ()
        {
        	if (!Sct.Grid.hasDeletedRow(this.fv_currentDS))
        	{
        		Sct.alert(this, "000150"); //삭제할 데이터가 없습니다.
        		return false;
        	}
        	//삭제하시겠습니까?
        	if(!Sct.confirm(this, "000152", "")) return false;

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
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getListPaging "
        		+ "sqlId=CMA014CT.CMA014CT_DS_LIST_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        //저장
        this.fn_save = function ()
        {
        	//입력 필수여부체크
        	if(!this.fn_save_pre()) return false;

        	let svcId = "save";
        	let inDs = "ds_list"
        	this.fn_save_com(svcId, inDs);
        };
        //삭제
        this.fn_delete = function ()
        {
        	//validation
        	if(!this.fn_delete_pre()) return;

        	var sqlId = "";
        	if(this.fv_currentDS.name == "ds_list")	sqlId = "CMA014CT.CMA014CT_DS_LIST_D";

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
        			var count = this.ds_list.rowcount;
        			Sct.alert(this, "000175", count + "|");

        			//서비스 조회 시 return 받은 block count와 총 row 수 전달
        			this.div_cont.form.div_paging.form.fn_callAfter();
        			//저장후 조회후 변경된 row로 rowposition 설정
        			//this.gfn_saveAfterFindRow(this.ds_list);
        			this.fn_findMstRow(this.fv_saveRefNo);

        		}else if(strSvcID == "save" || strSvcID == "delete")
        		{
        			this.fn_search();
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

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo) {
        	var sFindRow = this.ds_list.findRow("RES_ID", fv_saveRefNo);
        	if(sFindRow > -1) {
        		this.ds_list.set_rowposition(sFindRow);
        	}
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/


        //코드 팝업 CALLBACK
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        };


        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/


        //---------------------------------------행추가---------------------------------------------
        //master 행추가
        this.fn_head_addrow = function(obj,e)
        {
        	var nRow = this.ds_list.addRow();
        	//초기화
        	this.ds_list.setColumn(nRow, "COMPANY_CD",fv_Company);								//회사코드
        };


        this.div_cont_grd_list_onexpandup = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company
        	};
        	Sct.popup(this, "RES_ID", 326, 226, "", param, "CM_POP::CM_RES_PP.xfdl", "fn_popCallback");
        };
         this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid){
        		case "RES_ID" : this.ds_list.setColumn(this.ds_list.rowposition, "RES_ID", objDs.getColumn(0, "RES_ID"));
        						this.ds_list.setColumn(this.ds_list.rowposition, "RES_NM", objDs.getColumn(0, "NAME"));
        						this.ds_list.setColumn(this.ds_list.rowposition, "LOCATION", objDs.getColumn(0, "LOCATION"));
        						this.ds_list.setColumn(this.ds_list.rowposition, "ROOM", objDs.getColumn(0, "ROOM"));
        		break;
        		case "RES_NM" : this.ds_search.setColumn(0, "NAME", objDs.getColumn(0, "NAME"));
        						this.ds_search.setColumn(0, "LOCATION", objDs.getColumn(0, "LOCATION"));
        						this.ds_search.setColumn(0, "ROOM", objDs.getColumn(0, "ROOM"));
        		break;
        	}

        };

        this.div_search_btn_res_pp_onclick = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company
        	};
        	Sct.popup(this, "RES_NM", 326, 226, "", param, "CM_POP::CM_RES_PP.xfdl", "fn_popCallback");
        };


        this.fn_addRow = function(obj,e)
        {
        	var nRow  = this.ds_list.addRow();
        	this.ds_list.setColumn(nRow, "COMPANY_CD",fv_Company);
        	this.ds_list.setColumn(nRow, "SERVICE_TP",this.ds_search.getColumn(0,"SERVICE_TP"));
        	this.ds_list.setColumn(nRow, "NOT_DT", Sct.Util.getToday());
        	this.div_cont.form.div_cont.form.div_right.form.edt_title.setFocus();
        };

        this.div_cont_div_cont_div_right_btn_chgpass_onclick = function(obj,e)
        {
        	//fileGroupId 설정
        	this.fileGroupId = Sct.Util.isEmpty(this.ds_list.getColumn(this.ds_list.rowposition, "FILE_GRP_ID")) ? "" : this.ds_list.getColumn(this.ds_list.rowposition, "FILE_GRP_ID");

        	if(this.ds_list.rowcount == 0) return;
        	var param = {
        		folderName:"NU/NUA701CT/",
        		multiYn : "Y"
        	};
        	Sct.popup(this, "FILEUPLOAD", 326, 226, "", param, "CM_POP::FILEUPLOAD.xfdl", "fn_fileUploadPopupCallback");
        };
        //파일 팝업 콜백
        this.fn_fileUploadPopupCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);

        	switch(popid)
        	{
        		case "FILEUPLOAD" :
        			var sRow = this.ds_list.rowposition;
        			var dataGrpId = this.ds_list.getColumn(sRow, "FILE_GRP_ID");

        // 			if(Sct.Util.isEmpty(dataGrpId) && (!Sct.Util.isEmpty(this.fileGroupId))){}

        			if (this.ds_list.getColumn(sRow, "FILE_REAL_NAME") != objDs.getColumn(0, "FILE_REAL_NAME")) {
        				this.ds_list.setColumn(sRow, "FILE_GRP_ID", objDs.getColumn(0, "FILE_GRP_ID"));
        				this.ds_list.setColumn(sRow, "FILE_REAL_NAME", objDs.getColumn(0, "FILE_REAL_NAME"));
        				this.ds_list.setColumn(sRow, "FILE_NAME", objDs.getColumn(0, "FILE_NAME"));
        				//this.fn_getSignImage();
        			}

        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.div_search.form.sta_company_nm.addEventHandler("onclick",this.div_search_sta_doc_no_onclick,this);
            this.div_cont.form.div_cont.form.div_right.form.btn_chgpass.addEventHandler("onclick",this.div_cont_div_cont_div_right_btn_chgpass_onclick,this);
            this.div_cont.form.div_cont.form.div_right.form.btn_addrow.addEventHandler("onclick",this.fn_addRow,this);
            this.div_cont.form.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
            this.ds_list.addEventHandler("onrowposchanged",this.ds_list_onrowposchanged,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
        };
        this.loadIncludeScript("CMA014CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
