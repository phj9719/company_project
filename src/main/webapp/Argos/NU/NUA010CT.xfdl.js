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
            this.set_titletext("촉탁진료설문설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1112,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_QUE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_NO\" type=\"INT\" size=\"256\"/><Column id=\"QUE_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP1\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP1\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE1\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP2\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP2\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE2\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP3\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP3\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE3\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP4\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP4\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE4\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP5\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP5\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE5\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP6\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP6\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE6\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP7\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP7\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE7\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP8\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP8\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE8\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP9\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP9\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE9\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP10\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP10\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE10\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP11\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP11\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE11\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP12\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP12\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE12\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP13\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP13\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE13\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP14\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP14\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE14\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP15\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP15\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE15\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_locale", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_trans_chk", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT1\" type=\"STRING\" size=\"256\"/><Column id=\"CNT2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_comm_que_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_comm_que_obj_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_company_cd_s", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","22",null,"74","0%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("s01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_property_nm","235","26","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("설문제목");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_property_nm","330","26","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_company","5","26","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("법인명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_serv_tp","465","26","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("설문사용유무");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_use_yn","560","26","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cm_use_yn");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
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

            obj = new Button("btn_sMove","44.78%","96",null,"16","44.78%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::search_open.png\') no-repeat transparent");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","-1","0","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Div("div_cont","0","120",null,null,"0.00%","0.00%",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_gHMove","615","40%","25","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","615",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","7","194","22",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_text("촉탁진료 설문등록");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_addrow_grp",null,"0","80","29","0",null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_head");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_border("3px solid rgba(119,119,119,1), 1px solid rgba(229,229,229,1), 1px solid rgba(229,229,229,1), 1px solid rgba(229,229,229,1)");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"150\"/><Column size=\"283\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"NO\"/><Cell col=\"3\" text=\"법인명\"/><Cell col=\"4\" text=\"설문제목\" cssclass=\"CellEssential\"/><Cell col=\"5\" text=\"사용유무\" cssclass=\"CellEssential\"/><Cell col=\"6\" text=\"등록자ID\"/><Cell col=\"7\" text=\"등록자명\"/><Cell col=\"8\" text=\"등록일자\"/><Cell col=\"9\" text=\"수정자명\"/><Cell col=\"10\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:COMPANY_NM\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:QUE_TITLE\" edittype=\"normal\"/><Cell col=\"5\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:USE_YN\" textAlign=\"center\" verticalAlign=\"middle\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" comboautoselect=\"true\"/><Cell col=\"6\" text=\"bind:REG_USER\"/><Cell col=\"7\" text=\"bind:REG_USER_NM\"/><Cell col=\"8\" text=\"bind:REG_DT\" displaytype=\"date\"/><Cell col=\"9\" text=\"bind:MOD_USER_NM\"/><Cell col=\"10\" text=\"bind:MOD_DT\" displaytype=\"date\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","640","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","7","194","22",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("촉탁진료 설문등록 상세");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_addrow_code",null,"0","80","29","0",null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_detail");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_border("3px solid rgba(119,119,119,1), 1px solid rgba(229,229,229,1), 1px solid rgba(229,229,229,1), 1px solid rgba(229,229,229,1)");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"문제번호\"/><Cell col=\"4\" text=\"문제내용\"/><Cell col=\"5\" text=\"사용유무\"/><Cell col=\"6\" text=\"보기유형\"/><Cell col=\"7\" text=\"오브젝트 유형1\"/><Cell col=\"8\" text=\"타이틀 유형1\"/><Cell col=\"9\" text=\"타이틀 값1\"/><Cell col=\"10\" text=\"오브젝트유형2\"/><Cell col=\"11\" text=\"타이틀유형2\"/><Cell col=\"12\" text=\"타이틀 값2\"/><Cell col=\"13\" text=\"오브젝트 유형3\"/><Cell col=\"14\" text=\"타이틀 유형3\"/><Cell col=\"15\" text=\"타이틀 값3\"/><Cell col=\"16\" text=\"오브젝트 유형4\"/><Cell col=\"17\" text=\"타이틀 유형4\"/><Cell col=\"18\" text=\"타이틀 값4\"/><Cell col=\"19\" text=\"오브젝트 유형5\"/><Cell col=\"20\" text=\"타이틀 유형5\"/><Cell col=\"21\" text=\"타이틀 값5\"/><Cell col=\"22\" text=\"오브젝트 유형6\"/><Cell col=\"23\" text=\"타이틀 유형6\"/><Cell col=\"24\" text=\"타이틀 값6\"/><Cell col=\"25\" text=\"오브젝트 유형7\"/><Cell col=\"26\" text=\"타이틀 유형7\"/><Cell col=\"27\" text=\"타이틀 값7\"/><Cell col=\"28\" text=\"오브젝트 유형8\"/><Cell col=\"29\" text=\"타이틀 유형8\"/><Cell col=\"30\" text=\"타이틀 값8\"/><Cell col=\"31\" text=\"오브젝트 유형9\"/><Cell col=\"32\" text=\"타이틀 유형9\"/><Cell col=\"33\" text=\"타이틀 값9\"/><Cell col=\"34\" text=\"오브젝트 유형10\"/><Cell col=\"35\" text=\"타이틀 유형10\"/><Cell col=\"36\" text=\"타이틀 값10\"/><Cell col=\"37\" text=\"오브젝트 유형11\"/><Cell col=\"38\" text=\"타이틀 유형11\"/><Cell col=\"39\" text=\"타이틀 값11\"/><Cell col=\"40\" text=\"오브젝트 유형12\"/><Cell col=\"41\" text=\"타이틀 유형12\"/><Cell col=\"42\" text=\"타이틀 값12\"/><Cell col=\"43\" text=\"오브젝트 유형13\"/><Cell col=\"44\" text=\"타이틀 유형13\"/><Cell col=\"45\" text=\"타이틀 값13\"/><Cell col=\"46\" text=\"오브젝트 유형14\"/><Cell col=\"47\" text=\"타이틀 유형14\"/><Cell col=\"48\" text=\"타이틀 값14\"/><Cell col=\"49\" text=\"오브젝트 유형15\"/><Cell col=\"50\" text=\"타이틀 유형15\"/><Cell col=\"51\" text=\"타이틀 값15\"/><Cell col=\"52\" text=\"등록자ID\"/><Cell col=\"53\" text=\"등록자명\"/><Cell col=\"54\" text=\"등록일자\"/><Cell col=\"55\" text=\"수정자명\"/><Cell col=\"56\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" edittype=\"normal\" editinputtype=\"number\" text=\"bind:QUE_NO\" editautoselect=\"true\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:QUE_DESC\" editautoselect=\"true\"/><Cell col=\"5\" text=\"bind:USE_YN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"6\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:QUE_TYPE\" combodataset=\"ds_nu_comm_que_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"7\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:OBJ_TP1\"/><Cell col=\"8\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:TIT_TP1\"/><Cell col=\"9\" text=\"bind:TIT_VALUE1\" edittype=\"normal\"/><Cell col=\"10\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:OBJ_TP2\"/><Cell col=\"11\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:TIT_TP2\"/><Cell col=\"12\" text=\"bind:TIT_VALUE2\" edittype=\"normal\"/><Cell col=\"13\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:OBJ_TP3\"/><Cell col=\"14\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:TIT_TP3\"/><Cell col=\"15\" text=\"bind:TIT_VALUE3\" edittype=\"normal\"/><Cell col=\"16\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:OBJ_TP4\"/><Cell col=\"17\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:TIT_TP4\"/><Cell col=\"18\" text=\"bind:TIT_VALUE4\" edittype=\"normal\"/><Cell col=\"19\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:OBJ_TP5\"/><Cell col=\"20\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:TIT_TP5\"/><Cell col=\"21\" text=\"bind:TIT_VALUE5\" edittype=\"normal\"/><Cell col=\"22\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:OBJ_TP6\"/><Cell col=\"23\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:TIT_TP6\"/><Cell col=\"24\" text=\"bind:TIT_VALUE6\" edittype=\"normal\"/><Cell col=\"25\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:OBJ_TP7\"/><Cell col=\"26\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:TIT_TP7\"/><Cell col=\"27\" text=\"bind:TIT_VALUE7\" edittype=\"normal\"/><Cell col=\"28\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:OBJ_TP8\"/><Cell col=\"29\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:TIT_TP8\"/><Cell col=\"30\" text=\"bind:TIT_VALUE8\" edittype=\"normal\"/><Cell col=\"31\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:OBJ_TP9\"/><Cell col=\"32\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:TIT_TP9\"/><Cell col=\"33\" text=\"bind:TIT_VALUE9\" edittype=\"normal\"/><Cell col=\"34\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:OBJ_TP10\"/><Cell col=\"35\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:TIT_TP10\"/><Cell col=\"36\" text=\"bind:TIT_VALUE10\" edittype=\"normal\"/><Cell col=\"37\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:OBJ_TP11\"/><Cell col=\"38\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:TIT_TP11\"/><Cell col=\"39\" text=\"bind:TIT_VALUE11\" edittype=\"normal\"/><Cell col=\"40\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:OBJ_TP12\"/><Cell col=\"41\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:TIT_TP12\"/><Cell col=\"42\" text=\"bind:TIT_VALUE12\" edittype=\"normal\"/><Cell col=\"43\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:OBJ_TP13\"/><Cell col=\"44\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:TIT_TP13\"/><Cell col=\"45\" text=\"bind:TIT_VALUE13\" edittype=\"normal\"/><Cell col=\"46\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:OBJ_TP14\"/><Cell col=\"47\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:TIT_TP14\"/><Cell col=\"48\" text=\"bind:TIT_VALUE14\" edittype=\"normal\"/><Cell col=\"49\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:OBJ_TP15\"/><Cell col=\"50\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_comm_que_obj_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" text=\"bind:TIT_TP15\"/><Cell col=\"51\" text=\"bind:TIT_VALUE15\" edittype=\"normal\"/><Cell col=\"52\" text=\"bind:REG_USER\"/><Cell col=\"53\" text=\"bind:REG_USER_NM\"/><Cell col=\"54\" displaytype=\"date\" text=\"bind:REG_DT\"/><Cell col=\"55\" text=\"bind:MOD_USER_NM\"/><Cell col=\"56\" displaytype=\"date\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1112,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_search.form.cmb_use_yn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_property_nm","value","ds_search","QUE_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cmb_company","value","ds_search","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUA010CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA010CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA010CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    : NUA010CT
         * 화면명   : 촉탁진료설문설정
         * 화면설명 : 설문설정
         * 작성일    : 2021-06-09
         * 작성자   : SOOIM
         * 수정이력 :
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2021-06-09 		SOOIM	1차 수정
         *
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
        this.nMoveY;
        this.fv_flag;
        // 서비스 단에서 받는 variable, 초기화 필요함
        this.outvar = "";

        var fv_Company = nexacro.getApplication().gv_company; // 회사코드
        this.pgmId = nexacro.getApplication().gv_curWinKey;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	//동기방식 3번째param : false(공통코드 호출후 필터링 목적)
        	//this.form_onload_com(obj, e, false);
        	this.form_onload_com(obj, e);
        		this.fn_setComboDs(obj);
        	//rowTypeValidation 설정
        	var dsArr = ["ds_head", "ds_detail"];
        	this.gfn_rowTypeValidationDs(dsArr);

        	//drag 버튼 활성화
        	this.gfn_setDivDrag(this.div_cont.form.btn_gHMove, this.div_cont.form.div_left, this.div_cont.form.div_right);

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
        	return this.gfn_findSnull(this.div_search);

        	//조회전 그리드에 변경된 데이터가 있을경우 ..
        	if(Sct.Grid.isUpdate(this.div_cont.form.div_left.form.grd_head)
        		|| Sct.Grid.isUpdate(this.div_cont.form.div_right.form.grd_detail))
        	{
        		//메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
        		if(!Sct.confirm(this,"000171","")){
        			this.div_cont.form.div_left.form.grd_head.setFocus();
                    return false;
        		}
        	}

        	 //디테일 초기화
        	 this.ds_detail.clearData();
        	 return true;
        };

        //저장 전 validation
        this.fn_save_pre = function ()
        {
        	//변경여부
        	if (!Sct.Grid.hasInsertAndUpdateRow(this.fv_currentDS))
        	{
        		Sct.alert(this, "000240"); //추가나 수정한 데이터가 없습니다.
        		return false;
        	}

        // 	//다른상태값 존재여부
        // 	if(!Sct.Grid.hasDifferentRowType(this.fv_currentDS, Dataset.ROWTYPE_INSERT)&&!Sct.Grid.hasDifferentRowType(this.fv_currentDS, Dataset.ROWTYPE_UPDATE))
        // 	{
        // 		Sct.alert(this, "000237"); //추가작업 외 다른 작업상태가 존재합니다.
        // 		return false;
        // 	}
        	//입력 필수여부체크
        	if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;

        	//입력한값 중복 여부 체크
        	var keyArr ;
        	if(this.fv_currentDS.name == "ds_head")	keyArr = ["COMPANY_CD", "QUE_TITLE"];
        	else									keyArr = ["COMPANY_CD", "QUE_NO"];
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
        		+ "sqlId=NUA010CT.NUA010CT_DS_HEAD_S ";
        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //그룹코드세부항목 조회
        this.fn_searchDetail = function ()
        {
        	var companyCd = this.ds_head.getColumn(this.ds_head.rowposition, "COMPANY_CD");
        	var queId = this.ds_head.getColumn(this.ds_head.rowposition, "QUE_ID");

        	var svcId = "searchDetail";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_detail=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA010CT.NUA010CT_DS_DETAIL_S "
        		+ "COMPANY_CD=" + companyCd + " "
        		+ "QUE_ID=" + queId + " ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };
        //저장
        this.fn_save = function ()
        {
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
        	if(this.fv_currentDS.name == "ds_head")	sqlId = "NUA010CT.NUA010CT_DS_HEAD_D";
        	else									sqlId = "NUA010CT.NUA010CT_DS_DETAIL_D";

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
        this.ds_head_onrowposchanged = function(obj,e)
        {
        	this.fn_searchDetail();
        };

        //헤더 행추가
        this.div_cont_div_left_btn_addrow_grp_onclick = function(obj,e)
        {
        	if(!this.gfn_findSnull(this.div_search)) return false;
        	//초기화
        	var nRow = this.ds_head.addRow();
        	this.ds_head.setColumn(nRow, "COMPANY_CD", this.ds_search.getColumn(0,"COMPANY_CD"));
        	this.ds_head.setColumn(nRow, "USE_YN", 'Y');

        	//포커스
        	this.gfn_SetCellPos(this.div_cont.form.div_left.form.grd_head, "QUE_TITLE");
        };

        //디테일 행추가
        this.div_cont_div_right_btn_addrow_code_onclick = function(obj,e)
        {
        	var cnt = this.ds_head.getCaseCount("dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT");
        	if(cnt > 0)
        	{
        		Sct.alert(this, "000179"); //저장 후 행추가 해주시기 바랍니다.
        		return ;
        	}
        	if(this.ds_head.rowcount==0){
        		Sct.alert(this, "05040012"); //저장 후 행추가 해주시기 바랍니다.
        		return;
        	}
        	//초기화
        	var nRow = this.ds_detail.addRow();
        	var hRow = this.ds_head.rowposition;
        	this.ds_detail.setColumn(nRow, "COMPANY_CD", this.ds_head.getColumn(hRow, "COMPANY_CD"));
        	this.ds_detail.setColumn(nRow, "QUE_ID", this.ds_head.getColumn(hRow, "QUE_ID"));
        	this.ds_detail.setColumn(nRow, "USE_YN", 'Y');
        	if(this.ds_detail.rowcount==1){
        		this.ds_detail.setColumn(nRow, "QUE_NO", 0);
        	}
        	this.ds_detail.setColumn(nRow, "QUE_NO", this.ds_detail.getMax("QUE_NO")+1);

        	//포커스
        	this.gfn_SetCellPos(this.div_cont.form.div_right.form.grd_detail, "LANG_CD");
        };

        this.ds_detail_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "QUE_NO"){
        		obj.set_keystring("S:QUE_NO");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("oninit",this.fn_initDataset,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.div_search.form.cmb_company.addEventHandler("onitemchanged",this.div_search_cmb_company_onitemchanged,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.div_cont.form.div_left.form.btn_addrow_grp.addEventHandler("onclick",this.div_cont_div_left_btn_addrow_grp_onclick,this);
            this.div_cont.form.div_left.form.grd_head.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.btn_addrow_code.addEventHandler("onclick",this.div_cont_div_right_btn_addrow_code_onclick,this);
            this.div_cont.form.div_right.form.grd_detail.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.ds_head.addEventHandler("onrowposchanged",this.ds_head_onrowposchanged,this);
            this.ds_detail.addEventHandler("oncolumnchanged",this.ds_detail_oncolumnchanged,this);
        };
        this.loadIncludeScript("NUA010CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
