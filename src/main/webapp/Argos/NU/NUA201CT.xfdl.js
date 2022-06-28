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
            this.set_titletext("건강기록일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HEA_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HEA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_H\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_L\" type=\"STRING\" size=\"256\"/><Column id=\"PULSE\" type=\"STRING\" size=\"256\"/><Column id=\"BREATH\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPERATURE1\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPERATURE2\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPERATURE3\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"SUGAR_FBS\" type=\"STRING\" size=\"256\"/><Column id=\"SUGAR_PP2\" type=\"STRING\" size=\"256\"/><Column id=\"COUGH\" type=\"STRING\" size=\"256\"/><Column id=\"THROAT\" type=\"STRING\" size=\"256\"/><Column id=\"BREATHING_DIFF\" type=\"STRING\" size=\"256\"/><Column id=\"SPUTUM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\"/><Column id=\"INJECTION\" type=\"STRING\" size=\"256\"/><Column id=\"DRUG\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SUG_FBS_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SUG_PP2_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"TEM_TIME1\" type=\"STRING\" size=\"256\"/><Column id=\"TEM_TIME2\" type=\"STRING\" size=\"256\"/><Column id=\"TEM_TIME3\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PRE_H\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PRE_L\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PULSE\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PRE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP1\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP_TIME1\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP2\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEM_TIME2\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP3\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP_TIME3\" type=\"STRING\" size=\"256\"/><Column id=\"IR_SUGAR_FBS\" type=\"STRING\" size=\"256\"/><Column id=\"IR_SUGAR_FBS_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"IR_SUGAR_PP2\" type=\"STRING\" size=\"256\"/><Column id=\"IR_SUGAR_PP2_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"DT\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_dose_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_time", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_room", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_vas", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location_all", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pre_remark", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_sex", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_GB\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","120",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","603",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_border("0px solid rgba(0,0,0,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("statc_divcont_title","0","7","200","22",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_text("입소자 리스트");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_paging","0",null,null,"30","0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_url("CM_POP::CM_PAGING_DIV.xfdl");
            obj.set_text("");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","30",null,null,"0","40",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_readonly("false");
            obj.set_binddataset("ds_head");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"입소자성명\"/><Cell col=\"2\" text=\"성별\"/><Cell col=\"3\" text=\"층\"/><Cell col=\"4\" text=\"생활실\" displaytype=\"normal\"/><Cell col=\"5\" text=\"생년월일\"/><Cell col=\"6\" text=\"나이\"/><Cell col=\"7\" text=\"등급\"/><Cell col=\"8\" text=\"퇴소여부\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWNUM\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:SEX\" combodataset=\"ds_nu_sex\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" displaytype=\"combotext\"/><Cell col=\"3\" text=\"bind:AREA\" combocodecol=\"ARE_CD\" combodatacol=\"ARE_NM\" combodataset=\"ds_area\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:LOCATION\" combocodecol=\"LOC_CD\" combodatacol=\"LOC_NM\" combodataset=\"ds_location_all\" displaytype=\"combotext\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:BIRTHDAY\"/><Cell col=\"6\" text=\"bind:AGE\"/><Cell col=\"7\" text=\"bind:GRADE\" displaytype=\"combotext\" combodataset=\"ds_nu_grade\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"8\" text=\"bind:ENTER_GB\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_gMove","605","45%","25","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_head","632","0",null,null,"30","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_DetailBg");
            obj.set_border("0px solid rgba(120,120,120,1)");
            obj.set_font("9pt \"Malgun Gothic\"");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","84","717","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02","0","30","717","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager","0","30","95","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("23");
            obj.set_text("처리자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static60","0","7","100","22",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("21");
            obj.set_text("처리자정보");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_manager","97","34","80","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Button("btn_addr","179","34","21","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::btn_WF_SearchSmall_P.png\') no-repeat rgba(255,255,255,1)");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00","0","274","717","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00","0","302","717","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00","0","330","717","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("chk_meal1","97","278","80","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("12");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_textAlign("center");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","61","100","22",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("24");
            obj.set_text("혈압정보");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager00","0","84","95","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("26");
            obj.set_text("혈압(H)");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_manager00","97","88","80","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager00_00","179","84","95","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("27");
            obj.set_text("혈압(L)");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_manager00_00","276","88","80","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager00_00_00","358","84","95","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("28");
            obj.set_text("맥박");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_manager00_00_00","455","88","80","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","0","138","717","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_manager00_00_00_00","455","142","80","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("7");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager00_00_00_00","358","138","95","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("33");
            obj.set_text("체온3(저녁)");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_manager00_00_01","276","142","80","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager00_00_01","179","138","95","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("32");
            obj.set_text("체온2(오후)");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_manager00_01","97","142","80","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager00_01","0","138","95","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("31");
            obj.set_text("체온1(오전)");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","0","115","100","22",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("29");
            obj.set_text("체온정보");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","0","192","717","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static60_00_00_00","0","169","100","22",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("34");
            obj.set_text("혈당정보");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager00_01_00","0","192","95","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("36");
            obj.set_text("혈당1");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_manager00_01_00","97","196","80","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager00_00_01_00","179","192","95","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("37");
            obj.set_text("혈당2");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_manager00_00_01_00","276","196","80","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","0","246","717","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_manager00_00_01_00_00","276","250","80","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager00_00_01_00_00","179","246","95","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("41");
            obj.set_text("몸무게");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_manager00_01_00_00","97","250","80","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("10");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager00_01_00_00","0","246","95","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("40");
            obj.set_text("호흡");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static60_00_00_00_00","0","223","100","22",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("38");
            obj.set_text("기타정보");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager00_01_00_00_00","0","274","95","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("42");
            obj.set_text("기침");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager00_01_00_00_00_00","0","302","95","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("48");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager00_01_00_00_00_00_00","0","330","95","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("50");
            obj.set_text("주사제투여");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00_00","0","358","717","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager00_01_00_00_00_00_00_00","0","358","95","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("52");
            obj.set_text("약물투여");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager00_00_01_00_00_00","179","274","95","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("43");
            obj.set_text("인후동");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager00_00_01_00_00_00_00","358","274","95","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("44");
            obj.set_text("호흡곤란");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("chk_meal1_00","276","278","80","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("13");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_textAlign("center");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("chk_meal1_00_00","455","278","80","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("14");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_textAlign("center");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager00_00_01_00_00_00_00_00","537","274","95","29",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("46");
            obj.set_text("객담");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new CheckBox("chk_meal1_00_00_00","635","278","80","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("15");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_textAlign("center");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_manager00_01_00_00_00","97","306","615","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_manager00_01_00_00_00_00","97","334","615","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("17");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_manager00_01_00_00_00_00_00","97","362","615","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("18");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01","0","418","717","132",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager00_01_00_01","0","418","95","132",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("55");
            obj.set_text("간호일지");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static60_00_00_00_01","0","395","122","22",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("53");
            obj.set_text("간호일지정보");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","97","422","615","124",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("19");
            obj.set_autoselect("true");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Button("btn_pre_remark","635","393","80","21",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("20");
            obj.set_text("전날내용");
            obj.set_visible("true");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static60","0","-1","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","22",null,"74","0.00%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("s01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name","753","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("입소자성명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_name","853","25","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_res_pp","970","25","25","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_background("url(\'imagerc::btn_WF_SearchSmall_P.png\') no-repeat rgba(255,255,255,1)");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_area","320","25","60","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","390","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_datacolumn("ARE_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("ARE_CD");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_location","511","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("생활실");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","611","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_codecolumn("LOC_CD");
            obj.set_datacolumn("LOC_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_location");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_pre_dt","25","25","80","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("< 전날");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_sdate","110","25","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_next_dt","225","25","80","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("앞날 >");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_enter_gb","990","25","80","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("퇴소여부");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_enter_gb","1080","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_cm_use_yn");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_sMove","44.87%","96",null,"16","44.87%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::search_open.png\') no-repeat transparent");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1500,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item18","div_cont.cal_validitystart","value","ds_head","VALID_PERIOD_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.cal_passwdExpire","value","ds_head","VALID_PASSWD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.edt_name","value","ds_search","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_head","value","ds_head","CUST_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_head","image","ds_download","BLOB_FILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_head.form.cmb_birth","value","ds_head","BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_head.form.cmb_hr_recruit_cnt","value","ds_head","RECRUIT_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_head.form.cmb_hr_sal_class","value","ds_head","SAL_CLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_head.form.edt_manager","value","ds_list","MANAGER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_head.form.chk_meal1","value","ds_list","COUGH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_head.form.edt_manager00","value","ds_list","PRE_H");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_head.form.edt_manager00_00","value","ds_list","PRE_L");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_head.form.edt_manager00_00_00","value","ds_list","PULSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_head.form.edt_manager00_00_00_00","value","ds_list","TEMPERATURE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_head.form.edt_manager00_00_01","value","ds_list","TEMPERATURE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_head.form.edt_manager00_01","value","ds_list","TEMPERATURE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_head.form.edt_manager00_01_00","value","ds_list","SUGAR_FBS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_head.form.edt_manager00_00_01_00","value","ds_list","SUGAR_PP2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_head.form.edt_manager00_00_01_00_00","value","ds_list","WEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_head.form.edt_manager00_01_00_00","value","ds_list","BREATH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_head.form.chk_meal1_00","value","ds_list","THROAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_head.form.chk_meal1_00_00","value","ds_list","BREATHING_DIFF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_head.form.chk_meal1_00_00_00","value","ds_list","SPUTUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_head.form.edt_manager00_01_00_00_00","value","ds_list","ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_head.form.edt_manager00_01_00_00_00_00","value","ds_list","INJECTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_head.form.edt_manager00_01_00_00_00_00_00","value","ds_list","DRUG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cal_sdate","value","ds_search","DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cmb_enter_gb","value","ds_search","RETIRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_head.form.TextArea00","value","ds_list","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM_POP::CM_PAGING_DIV.xfdl");
        };
        
        // User Script
        this.addIncludeScript("NUA201CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA201CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA201CT.xfdl", function() {
        /***********************************************************************
         * 화면ID   : NUA101CT.xfdl
         * 화면명   :
         * 화면설명 : 입소자등록
         * 작성일   : 2021-06-16 10:32
         * 작성자   : SOOIM
         * 수정이력 :
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2021.06.16		SOOIM		최초작성
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
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_head;

        this.fileGroupId = "";
        this.fv_currentTab = 0;
        this.gv_NextEmpNo = "";

        this.saveUrl = nexacro.getEnvironment().services["svcurl"].url + "/common/";

        this.fv_saveRefNo = "";
        this.saveType = ""; // 저장 구분
        this.scParam = this.gfn_getScreenParam();
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.setColumn(0,"COMPANY_CD",fv_Company);
        	this.ds_search.setColumn(0,"SERVICE_TP",fv_ServiceTp);
        	this.ds_search.setColumn(0,"APPLICATION_TP",fv_appTp);
        	this.ds_search.setColumn(0,"DT",Sct.Util.getToday());
        	this.ds_search.setColumn(0,"RETIRE_YN","N");

        	this.div_search.clearEventHandler("onkeyup");
        	//상태삭제순번컬럼 고정
        	//this.div_cont.form.div_left.form.grd_head.setFormatColProperty(2, "band", "left");
        	this.gfn_setDivDrag(this.div_cont.form.btn_gMove, this.div_cont.form.div_left, this.div_cont.form.div_head);
        	//rowTypeValidation 설정
        	var dsArr = ["ds_head"];
        	this.gfn_rowTypeValidationDs(dsArr);
        	this.fn_setComboDs(obj);
        	//페이징 처리 초기화
        	this.fn_initPageSet();

        	// 라이브러리 코드 쪽에서 div_search에 기본적으로 걸어놓은 검색 이벤트를 제거
        	// calendar 키인 모드에서 수정없이 엔터키 쳐도 검색을 하는 경우를 방지
        	this.div_search.clearEventHandler("onkeyup");

        	if(!Sct.Util.isEmpty(this.scParam)) {
        		this.fn_getReqDataset();
        	}

        	// 오픈시 전체 조회
        	this.fn_search();

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.cal_sdate.setFocus();
        };

        this.fn_getReqDataset = function(){

        	//this.ds_search.setColumn(0,"COMPANY_CD",this.scParam.pCompanyCd);
        	this.ds_search.setColumn(0,"NAME",this.scParam.pResName);
        	this.ds_search.setColumn(0,"AREA",this.scParam.pArea);

        	if(!Sct.Util.isEmpty(this.scParam.pArea)){ //층에 해당되는 생활실 조회
        		this.fn_location_search("ds_location", this.scParam.pArea);
        		var nInsertRow = this.ds_location.insertRow();
        		this.ds_location.setColumn(nInsertRow,"ARE_CD","");
        	} else {
        		this.ds_location.clearData();
        	}

        	this.ds_search.setColumn(0,"LOCATION",this.scParam.pLocation);
        	this.ds_search.setColumn(0,"DATE",this.scParam.pDt);
        	this.ds_search.setColumn(0,"RETIRE_YN","");
        };

        //페이징 처리 초기화
        this.fn_initPageSet = function()
        {
        	//페이징처리 초기화
        	this.ds_head.pageRowCount		= 50;											//조회될 row 갯수 (page Size)
            this.ds_head.pageCount			= 10;											//최대 페이지 갯수 (page Scale)
            this.ds_head.pageTotalVisible	= false;										//하단 page Size, pageScale 등 입력 div show YN
        	this.ds_head.pageNo				= 1;											//최초조회시 default 페이지 번호
        	this.ds_head.pageFunctionName	= "fn_search";									//페이지 버튼(1,2,3...)클릭시 조회할 function name
        	this.div_cont.form.div_left.form.div_paging.form.fn_init(this, this.ds_head);	//페이지 form 초기화

        }
        this.fn_setComboDs = function(obj)
        {
             var comboDsParamArr = [
        //                          { outDsName : "ds_location", sqlId : "NUA201CT.NUA201CT_DS_LOCATION_S", param : this.ds_search, bEmptyRow : true}
        //                        , { outDsName : "ds_room", sqlId : "NUA201CT.NUA201CT_DS_ROOM_S",param : this.ds_search, bEmptyRow : true}
        					     /*{ outDsName : "ds_manager", sqlId : "NUA201CT.NUA201CT_DS_MANAGER_S",param : this.ds_search, bEmptyRow : true}*/
        					    { outDsName : "ds_area", sqlId : "NUA201CT.NUA201CT_DS_AREA_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : true} // 층 조회
        					   , { outDsName : "ds_location_all", sqlId : "NUA201CT.NUA201CT_DS_LOCATION_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : true} // 생활실 전체 조회
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

        // 	 var mm = Sct.Util.getMonthDiff(this.ds_search.getColumn(0,"DT_FROM"),this.ds_search.getColumn(0,"DT_TO"));
        //
        // 	 if(mm>11){
        // 		Sct.alert(this, "000565"); //1년 이상 조회할 수 없습니다.
        // 		return;
        // 	 }

        	 this.fv_saveRefNo = ""; // 조회전 rowposition 인덱스 전역변수 초기화

        	 return true;

        };
        //list 조회 전 validation
        this.fn_list_search_pre = function ()
        {
             //조회전 그리드에 변경된 데이터가 있을경우 ..
             if(Sct.Grid.isUpdate(this.ds_list)) {
                 //메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
                 if(!Sct.confirm(this,"000171","")){
                     return false;
                 }
             }
        	 this.ds_list.clearData();
        	 return true;
        };
        //저장 전 validation
        this.fn_save_pre = function ()
        {
        	//저장여부
        	if (!Sct.Grid.hasInsertAndUpdateRow(this.ds_list))
        	{
        		Sct.alert(this, "000240"); //추가나 수정한 데이터가 없습니다.
        		return false;
        	}

        	//입력 필수여부체크
        	if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;

        	//입력한값 중복 여부 체크
        	var keyArr ;
        	keyArr = ["COMPANY_CD", "RES_ID","HEA_DT"];

        	if(!this.gfn_duplicateCheck(this.ds_list, keyArr)) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	//데이터 저장전 저장할 key 값 dataset 변수에 저장
        	this.gfn_saveKeyArr(this.ds_head, keyArr);
        	this.fv_saveRefNo = this.ds_head.getColumn(this.ds_head.rowposition, "RES_ID");
        	this.ds_list.set_updatecontrol(false);
        	if(this.saveType == "I") {
        		this.ds_list.setRowType(0, 2);
        	}
        	if(this.saveType == "U") {
        		this.ds_list.setRowType(0, 4);
        	}
        	this.ds_list.set_updatecontrol(true);
        	return true;
        };


        // 삭제 전 validation
        this.fn_delete_pre = function ()
        {
        	if(this.saveType != "U") {
        		Sct.alert(this, "000150"); // 삭제할 데이터가 없습니다.
        		return false;
        	}
        	//삭제하시겠습니까?
        	if(!Sct.confirm(this, "000152", "")) return false;

        	// 삭제 타입 설정
        	this.ds_list.set_updatecontrol(false);
        	this.ds_list.setRowType(0, 8);
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

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_head=output1";
        	var argument = "method=getListPaging "
        		+ "sqlId=NUA201CT.NUA201CT_DS_HEAD_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_list_search = function(){
        	var svcId = "list_search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA201CT.NUA201CT_DS_LIST_S "
        		+ " COMPANY_CD="+fv_Company
        		+ " RES_ID="+this.ds_head.getColumn(this.ds_head.rowposition,"RES_ID")
        		+ " DT="+this.ds_search.getColumn(this.ds_search.rowposition,"DT");
        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        this.fn_pre_remark_search = function(){
        	// 전날 간호일지 조회
        	var svcId = "searchRemark";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_pre_remark=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA201CT.NUA201CT_DS_PRE_REMARK_S "
        		+ "COMPANY_CD=" + this.ds_list.getColumn(0, "COMPANY_CD") + " "
        		+ "RES_ID=" + this.ds_list.getColumn(0, "RES_ID") + " "
        		+ "HEA_DT=" + this.ds_list.getColumn(0, "HEA_DT") + " " ;

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);

        		// 전날 간호일지 세팅
        	this.ds_list.setColumn(0, "REMARK", this.ds_pre_remark.getColumn(0, "REMARK"));
        }

        //저장
        this.fn_save = function ()
        {
        	//입력 필수여부체크
        	if(!this.fn_save_pre()) return false;

        // 	let svcId = "save";
        // 	let inDs = "ds_list";
        // 	this.fn_save_com(svcId, inDs);
        	var svcId = "save";
        	var params = "/NUA201CTController.do";
        	var inDatasets = "input1=ds_list:U";
        	var outDatasets = "";
        	var argument = "method=save ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        //삭제
        this.fn_delete = function ()
        {
        	//validation
        	if(!this.fn_delete_pre()) return;


        	var svcId = "delete";
        	var params = "/NUA201CTController.do";
        	var inDatasets = "input1=ds_list:U";
        	var outDatasets = "";
        	var argument = "method=delete ";

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

        			//서비스 조회 시 return 받은 block count와 총 row 수 전달
        			this.div_cont.form.div_left.form.div_paging.form.fn_callAfter();
        			//저장후 조회후 변경된 row로 rowposition 설정
        			//this.gfn_saveAfterFindRow(this.ds_head);
        			this.fn_findMstRow(this.fv_saveRefNo);
        			//this.fn_list_search();
        		}
        		if(strSvcID=="list_search"){
        			this.saveType = "U"; // 저장 구분 : update
        			// 식사 데이터 없을 시 입소자정보로 식사데이터 기본 조회
        			if(this.ds_list.rowcount == 0) {
        				this.saveType = "I"; // 저장 구분 : update
        				this.fn_list_addrow();
        			}
        		}
        		if(strSvcID == "save" || strSvcID == "delete")
        		{
        			this.fn_list_search();
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        //생활실 조회(outDatasets, 층 데이터)
        this.fn_location_search = function (outDs, col)
        {
        	var svcId = "location_search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = outDs+"=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA201CT.NUA201CT_DS_LOCATION_S "
        		+ " COMPANY_CD="+fv_Company
        		+ " AREA="+col;

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo) {
        	var sFindRow = this.ds_head.findRow("RES_ID", fv_saveRefNo);
        	if(sFindRow > -1) {
        		this.ds_head.set_rowposition(sFindRow);
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
        this.fn_list_addrow = function()
        {
        	var nRow = this.ds_list.addRow();
        	//초기화
        	this.ds_list.setColumn(nRow, "COMPANY_CD",fv_Company);								//회사코드
        	this.ds_list.setColumn(nRow, "RES_ID",this.ds_head.getColumn(this.ds_head.rowposition,"RES_ID"));								//회사코드
        	this.ds_list.setColumn(nRow, "HEA_DT",this.ds_search.getColumn(this.ds_search.rowposition,"DT"));								//회사코드
        	this.ds_list.setColumn(nRow, "PRE_H",0);
        	this.ds_list.setColumn(nRow, "PRE_L",0);
        	this.ds_list.setColumn(nRow, "PULSE",0);
        	this.ds_list.setColumn(nRow, "BREATH",0);
        	this.ds_list.setColumn(nRow, "TEMPERATURE1",0);
        	this.ds_list.setColumn(nRow, "TEMPERATURE2",0);
        	this.ds_list.setColumn(nRow, "TEMPERATURE3",0);
        	this.ds_list.setColumn(nRow, "WEIGHT",0);
        	this.ds_list.setColumn(nRow, "SUGAR_FBS",0);
        	this.ds_list.setColumn(nRow, "SUGAR_PP2",0);

        	this.ds_list.setColumn(nRow, "COUGH","0");
        	this.ds_list.setColumn(nRow, "THROAT","0");
        	this.ds_list.setColumn(nRow, "BREATHING_DIFF","0");
        	this.ds_list.setColumn(nRow, "SPUTUM","0");

        	this.ds_list.setColumn(nRow, "ACTION","N");
        	this.ds_list.setColumn(nRow, "FALL","N");
        	this.ds_list.setColumn(nRow, "DEHYDRATE","N");
        	this.ds_list.setColumn(nRow, "FECES","N");
        	this.ds_list.setColumn(nRow, "VAS","10");
        	this.ds_list.setColumn(nRow, "SORE","N");
        	this.ds_list.setColumn(nRow, "DELIRIUM","N");

        	// 접속자를 처리자에 저장
        	var userId = nexacro.getApplication().gds_userInfo.getColumn(0,"USER_ID");
        	var userNm = nexacro.getApplication().gds_userInfo.getColumn(0,"USER_NM_KOR");
        	this.ds_list.setColumn(nRow, "MANAGER_ID",userId);
        	this.ds_list.setColumn(nRow, "MANAGER_NM",userNm);
        	this.ds_list.set_updatecontrol(false);
        	this.ds_list.setRowType(0, 1);
        	this.ds_list.set_updatecontrol(true);

        };


        this.div_cont_grd_list_onexpandup = function(obj,e)
        {
        	if(e.col==obj.getBindCellIndex("body","RES_NM")){
        		var param = {
        			MULTI_YN : "N",
        			COMPANY_CD : fv_Company
        		};
        		Sct.popup(this, "RES_ID", 326, 226, "", param, "CM_POP::CM_RES_PP.xfdl", "fn_popCallback");
        	}
        	if(e.col==obj.getBindCellIndex("body","MANAGER_NM")){
        		var param = {
        			MULTI_YN : "N",
        			COMPANY_CD : fv_Company
        		};
        		Sct.popup(this, "MANAGER_ID", 326, 226, "", param, "CM_POP::CM_MANAGER_PP.xfdl", "fn_popCallback");
        	}
        };
         this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid){
        		case "RES_ID" : this.ds_list.setColumn(this.ds_list.rowposition, "RES_ID", objDs.getColumn(0, "RES_ID"));
        						this.ds_list.setColumn(this.ds_list.rowposition, "RES_NM", objDs.getColumn(0, "NAME"));
        						this.ds_list.setColumn(this.ds_list.rowposition, "AREA", objDs.getColumn(0, "AREA"));
        						this.ds_list.setColumn(this.ds_list.rowposition, "LOCATION", objDs.getColumn(0, "LOCATION"));
        						this.ds_list.setColumn(this.ds_list.rowposition, "REF_SYS_COMP_CD", objDs.getColumn(0, "REF_SYS_COMP_CD"));
        		break;

        		case "RES_NM" : if(this.fn_list_search_pre()) {
        							this.ds_search.setColumn(0, "NAME", objDs.getColumn(0, "NAME"));
        							this.ds_search.setColumn(0, "RES_ID", objDs.getColumn(0, "RES_ID"));
        							this.ds_search.setColumn(0, "AREA", objDs.getColumn(0, "AREA"));
        							var area = this.ds_search.getColumn(0, "AREA"); //층
        							if(!Sct.Util.isEmpty(area)){ //층에 해당되는 생활실 조회
        							   this.fn_location_search("ds_location", area);
        // 							   var nInsertRow = this.ds_location.insertRow();
        // 							   this.ds_location.setColumn(nInsertRow,"ARE_CD","");
        							}
        							this.ds_search.setColumn(0, "LOCATION", objDs.getColumn(0, "LOCATION"));

        							this.fn_search();
        						}
        		break;

        		case "MANAGER_ID" : this.ds_list.setColumn(this.ds_list.rowposition,"MANAGER_ID",objDs.getColumn(0,"USER_ID"));
        							this.ds_list.setColumn(this.ds_list.rowposition,"MANAGER_NM",objDs.getColumn(0,"USER_NM_KOR"));
        		break;
        	}

        };
        this.ds_list_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid=="SORE"){
        		if(obj.getColumn(e.row,"SORE")=="N"){
        			obj.setColumn(e.row,"SORE_DESC",null);
        		}
        	}

        	var time = Sct.Util.getHour()+Sct.Util.getMin(); // 현재시간
        	// 혈압,맥박 변경시 현재시간 적용
        	if(e.columnid == "PRE_H" || e.columnid == "PRE_L" || e.columnid == "PULSE"){
        		obj.setColumn(e.row,"PRE_TIME", time);
        	}else if(e.columnid == "SUGAR_FBS"){ // 혈당1
        		obj.setColumn(e.row,"SUG_FBS_TIME", time);
        	}else if(e.columnid == "SUGAR_PP2"){ // 혈당2
        		obj.setColumn(e.row,"SUG_PP2_TIME", time);
        	}else if(e.columnid == "TEMPERATURE1"){ // 체온1
        		obj.setColumn(e.row,"TEM_TIME1", time);
        	}else if(e.columnid == "TEMPERATURE2"){ // 체온2
        		obj.setColumn(e.row,"TEM_TIME2", time);
        	}else if(e.columnid == "TEMPERATURE3"){ // 체온3
        		obj.setColumn(e.row,"TEM_TIME3", time);
        	}
        };

        this.div_search_btn_res_pp_onclick = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company,
        		TABLE_NM : "T_NU_HEALTH_CHECK"
        	};
        	Sct.popup(this, "RES_NM", 326, 226, "", param, "CM_POP::CM_RES_DATA_INPUT_YN_PP.xfdl", "fn_popCallback");
        };

        //검색조건 층 콤보박스 변경 이벤트
        this.div_search_cmb_area_onitemchanged = function(obj,e)
        {
        	var area = this.ds_search.getColumn(0, "AREA"); //층

        	this.ds_search.setColumn(0, "LOCATION", ""); // 생활실 값 초기화

        	if(!Sct.Util.isEmpty(area)){ //층에 해당되는 생활실 조회
        		this.fn_location_search("ds_location", area);

        		var nInsertRow = this.ds_location.insertRow();
        		this.ds_location.setColumn(nInsertRow,"ARE_CD","");
        	}else{
        		this.ds_location.clearData();
        	}
        	this.fn_search();
        };

        this.div_cont_grd_list_oncellclick = function(obj,e)
        {
        	// 2021-11-17 전날내용 버튼 추가
        	if(obj.getCellText(e.row, e.col) == "전날내용") {
        		if(this.gfn_isNull(this.ds_list.getColumn(e.row, "RES_ID"))) {
        			Sct.alert(this, "000076", "입소자"+"|"); // {0} 항목은 필수 입력값입니다.
        			return;
        		}
        		if(!this.gfn_isNull(this.ds_list.getColumn(e.row, "REMARK"))) {
        			if(!Sct.confirm(this, "000582", "간호일지"+"|")) { // {0} 항목이 초기화됩니다. 계속하시겠습니까?
        				return;
        			} else {
        				this.ds_list.setColumn(e.row, "REMARK", "");
        			}
        		}

        		// 전날 간호일지 조회
        		var svcId = "searchRemark";
        		var params = "/commonController.do";
        		var inDatasets = "";
        		var outDatasets = "ds_pre_remark=output1";
        		var argument = "method=getList "
        			+ "sqlId=NUA201CT.NUA201CT_DS_PRE_REMARK_S "
        			+ "COMPANY_CD=" + this.ds_list.getColumn(e.row, "COMPANY_CD") + " "
        			+ "RES_ID=" + this.ds_list.getColumn(e.row, "RES_ID") + " "
        			;

        		var callbackFunc = "fn_callback";
        		Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);

        		// 전날 간호일지 세팅
        		this.ds_list.setColumn(e.row, "REMARK", this.ds_pre_remark.getColumn(0, "REMARK"));
        	}
        };

        this.ds_head_onrowposchanged = function(obj,e)
        {
        	// validation
        	if(!this.fn_list_search_pre()) {
        		this.ds_head.set_enableevent(false);
        		this.ds_head.set_rowposition(e.oldrow);
        		this.ds_head.set_enableevent(true);
        		return;
        	}

        	this.fn_list_search();
        };

        this.div_search_btn_next_dt_onclick = function(obj,e)
        {
        	if(this.fn_list_search_pre()) {
              var searchDt = this.ds_search.getColumn(0, "DT");
              var nextDt = Sct.Util.addDate(searchDt, 1);
              this.ds_search.setColumn(0, "DT", nextDt);
              this.fn_list_search();
           }
        };

        this.div_search_btn_pre_dt_onclick = function(obj,e)
        {
        	  if(this.fn_list_search_pre()) {
              var searchDt = this.ds_search.getColumn(0, "DT");
              var preDt = Sct.Util.addDate(searchDt, -1);
              this.ds_search.setColumn(0, "DT", preDt);
              this.fn_list_search();
           }
        };

        this.div_search_cmb_location_onitemchanged = function(obj,e)
        {
        	this.fn_search();
        };

        this.div_search_edt_name_onchanged = function(obj,e)
        {
        	this.fn_search();
        };

        this.div_search_cmb_enter_gb_onitemchanged = function(obj,e)
        {
        	this.fn_search();
        };

        this.div_search_cal_sdate_onchanged = function(obj,e)
        {
        	if(!this.fn_list_search_pre()) {
        		this.ds_search.setColumn(0,"DT",e.prevalue);
        		return;
           } else {
        		this.ds_search.setColumn(0,"DT",e.postvalue);
        		this.fn_list_search();
           }
        };

        this.fn_addressPop = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company
        	};
        	Sct.popup(this, "MANAGER_ID", 326, 226, "", param, "CM_POP::CM_MANAGER_PP.xfdl", "fn_popCallback");
        };

        this.fn_edt_onkeyup = function(obj,e)
        {
        	if (e.keycode == "13")
        	{
        		if (obj.id == "edt_name")
        		{
        			this.div_search.form.btn_res_pp.click();
        		}
        		else if (obj.id == "edt_manager")
        		{
        			this.div_cont.form.div_head.form.btn_addr.click();
        		}
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
            this.div_cont.form.div_left.form.statc_divcont_title.addEventHandler("onclick",this.div_cont_statc_divcont_title_onclick,this);
            this.div_cont.form.div_left.form.grd_head.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_head.form.edt_manager.addEventHandler("onkeyup",this.fn_edt_onkeyup,this);
            this.div_cont.form.div_head.form.btn_addr.addEventHandler("onclick",this.fn_addressPop,this);
            this.div_cont.form.div_head.form.chk_meal1.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_head.form.chk_meal1_00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_head.form.chk_meal1_00_00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_head.form.chk_meal1_00_00_00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_head.form.btn_pre_remark.addEventHandler("onclick",this.fn_pre_remark_search,this);
            this.div_search.form.edt_name.addEventHandler("onchanged",this.div_search_edt_name_onchanged,this);
            this.div_search.form.edt_name.addEventHandler("canchange",this.div_search_edt_name_canchange,this);
            this.div_search.form.edt_name.addEventHandler("onkeyup",this.fn_edt_onkeyup,this);
            this.div_search.form.btn_res_pp.addEventHandler("onclick",this.div_search_btn_res_pp_onclick,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.div_search_cmb_area_onitemchanged,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.div_search_cmb_location_onitemchanged,this);
            this.div_search.form.btn_pre_dt.addEventHandler("onclick",this.div_search_btn_pre_dt_onclick,this);
            this.div_search.form.cal_sdate.addEventHandler("onchanged",this.div_search_cal_sdate_onchanged,this);
            this.div_search.form.btn_next_dt.addEventHandler("onclick",this.div_search_btn_next_dt_onclick,this);
            this.div_search.form.cmb_enter_gb.addEventHandler("onitemchanged",this.div_search_cmb_enter_gb_onitemchanged,this);
            this.div_search.form.cmb_enter_gb.addEventHandler("canitemchange",this.div_search_cmb_enter_gb_canitemchange,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
            this.ds_pre_remark.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
            this.ds_head.addEventHandler("onrowposchanged",this.ds_head_onrowposchanged,this);
        };
        this.loadIncludeScript("NUA201CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
