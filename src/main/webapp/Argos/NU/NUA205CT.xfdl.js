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
            this.set_titletext("체성분측정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"BMI\" type=\"STRING\" size=\"256\"/><Column id=\"SMM\" type=\"STRING\" size=\"256\"/><Column id=\"BFM\" type=\"STRING\" size=\"256\"/><Column id=\"FAT_LVL\" type=\"INT\" size=\"256\"/><Column id=\"PBF\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_age_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_sex", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_grade", this);
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


            obj = new Dataset("ds_nu_hour", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_minute", this);
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


            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"BMI\" type=\"STRING\" size=\"256\"/><Column id=\"SMM\" type=\"STRING\" size=\"256\"/><Column id=\"BFM\" type=\"STRING\" size=\"256\"/><Column id=\"FAT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PBF\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static60","0","0","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sMove","44.87%","96",null,"16","44.87%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("url(\'imagerc::search_open.png\') no-repeat transparent");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","22",null,"74","0%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("s01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sdate","25","5","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("일자");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_sdate","110","25","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_area","320","25","60","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
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
            obj.set_taborder("10");
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

            obj = new Static("sta_name","753","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
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
            obj.set_readonly("false");
            obj.set_color("black");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_res_pp","970","25","25","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_background("url(\'imagerc::btn_WF_SearchSmall_P.png\') no-repeat rgba(255,255,255,1)");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_enter_gb","990","25","80","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
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

            obj = new Button("btn_pre_dt","25","25","80","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("< 전날");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_next_dt","225","25","80","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("앞날 >");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0","120",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_gMove","605","45%","25","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_right","632","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_border("0px solid rgba(0,0,0,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02","0","30","335","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name00_01","0","30","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("11");
            obj.set_text("처리자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_right1","0","86","853","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_height","0","86","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("신장(cm)");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_right2","0","114","853","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_smm","0","114","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("골격근량(kg)");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_remark","0","170","853","200",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_title_remark","0","170","130","200",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("비고");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new TextArea("txt_remark","132","173","718","194",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("9");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_day_manager_nm","132","34","170","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_day_manager","307","34","25","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::btn_WF_SearchSmall_P.png\') no-repeat rgba(255,255,255,1)");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_right3","0","142","853","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_fat_lvl","0","142","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("내장지방레벨");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_weight","284","86","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("체중(kg)");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_bmi","568","86","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("BMI");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_pbf","284","114","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("체지방율(%)");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_bfm","568","114","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("체지방량(kg)");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_bfm","701","118","147","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_inputtype("normal");
            obj.set_inputfilter("comma,alpha,sign,space,symbol");
            obj.set_maxlength("11");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_bmi","701","90","147","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_inputtype("normal");
            obj.set_inputfilter("comma,alpha,sign,space,symbol");
            obj.set_maxlength("11");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("mae_height","133","90","147","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_format("##0.#");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("mae_weight","417","90","147","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            obj.set_format("##0.#");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("mae_smm","133","118","147","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("5");
            obj.set_cssclass("essential");
            obj.set_format("##0.#");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("mae_pbf","417","118","147","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("6");
            obj.set_cssclass("essential");
            obj.set_format("##0.#");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_fat_lvl","133","146","147","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("8");
            obj.set_inputtype("normal");
            obj.set_inputfilter("comma,alpha,sign,space,symbol");
            obj.set_maxlength("2");
            obj.set_cssclass("essential");
            obj.set_textAlign("right");
            obj.set_padding("0px 8px 2px 3px");
            obj.set_font("normal 400 9pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("statc_divcont_title","0","7","200","22",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("24");
            obj.set_text("체성분정보");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","603",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_border("0px solid rgba(0,0,0,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","30",null,null,"0","40",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_head");
            obj.set_autoenter("select");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"입소자성명\"/><Cell col=\"2\" text=\"성별\"/><Cell col=\"3\" text=\"층\"/><Cell col=\"4\" text=\"생활실\" displaytype=\"normal\"/><Cell col=\"5\" text=\"생년월일\"/><Cell col=\"6\" text=\"나이\"/><Cell col=\"7\" text=\"등급\"/><Cell col=\"8\" text=\"퇴소여부\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWNUM\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:SEX\" combodataset=\"ds_nu_sex\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" displaytype=\"combotext\"/><Cell col=\"3\" text=\"bind:AREA\" combocodecol=\"ARE_CD\" combodatacol=\"ARE_NM\" combodataset=\"ds_area\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:LOCATION\" combocodecol=\"LOC_CD\" combodatacol=\"LOC_NM\" combodataset=\"ds_location_all\" displaytype=\"combotext\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:BIRTHDAY\"/><Cell col=\"6\" text=\"bind:AGE\"/><Cell col=\"7\" text=\"bind:GRADE\" displaytype=\"combotext\" combodataset=\"ds_nu_grade\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"8\" text=\"bind:RETIRE_YN\" displaytype=\"combotext\" combodataset=\"ds_cm_use_yn\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("statc_divcont_title","0","7","200","22",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("입소자 리스트");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_paging","0",null,null,"30","0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_url("CM_POP::CM_PAGING_DIV.xfdl");
            obj.set_text("");
            this.div_cont.form.div_left.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1500,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cal_sdate","value","ds_search","DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_name","value","ds_search","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.cmb_enter_gb","value","ds_search","RETIRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.div_right.form.txt_remark","value","ds_detail","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.div_right.form.edt_day_manager_nm","value","ds_detail","MANAGER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.edt_bfm","value","ds_detail","BFM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.edt_bmi","value","ds_detail","BMI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.mae_height","value","ds_detail","HEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.mae_weight","value","ds_detail","WEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.mae_smm","value","ds_detail","SMM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.mae_pbf","value","ds_detail","PBF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.edt_fat_lvl","value","ds_detail","FAT_LVL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM_POP::CM_PAGING_DIV.xfdl");
        };
        
        // User Script
        this.addIncludeScript("NUA205CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA205CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA205CT.xfdl", function() {
        /***********************************************************************
         * 화면ID   : NUA205CT.xfdl
         * 화면명   :
         * 화면설명 : 체성분분석
         * 작성일   : 2021-06-22 10:32
         * 작성자   : SOOIM
         * 수정이력 :
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2021.06.22		SOOIM		최초작성
         *  2021.11.30		이승규		1차수정
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
        this.fv_currentGrid = this.div_cont.form.grd_list;

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

        	//rowTypeValidation 설정
        	//var dsArr = ["ds_list"];
        	//this.gfn_rowTypeValidationDs(dsArr);

        	this.fn_setComboDs(obj);
        	//drag 버튼 활성화
        	this.gfn_setDivDrag(this.div_cont.form.btn_gMove, this.div_cont.form.div_left, this.div_cont.form.div_right);
        	//페이징 처리 초기화
        	this.fn_initPageSet();

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
        	this.ds_search.setColumn(0,"DT",this.scParam.pDt);
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
        //                          { outDsName : "ds_location", sqlId : "NUA205CT.NUA205CT_DS_LOCATION_S", param : this.ds_search, bEmptyRow : true}
        //                        , { outDsName : "ds_room", sqlId : "NUA205CT.NUA205CT_DS_ROOM_S",param : this.ds_search, bEmptyRow : true}
        //					     { outDsName : "ds_manager", sqlId : "NUA205CT.NUA205CT_DS_MANAGER_S",param : this.ds_search, bEmptyRow : true}
        					     { outDsName : "ds_area", sqlId : "NUA205CT.NUA205CT_DS_AREA_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : true} // 층 조회
        					   , { outDsName : "ds_location_all", sqlId : "NUA205CT.NUA205CT_DS_LOCATION_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : true} // 생활실 전체 조회
                            ];
           this.gfn_setComboDs(obj, comboDsParamArr);
        }
        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	//validation
        	if(!this.fn_search_pre()) return;

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
             if(Sct.Grid.isUpdate(this.ds_detail)
        		//|| Sct.Grid.isUpdate(this.ds_schdl)
        		){
                 //메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
                 if(!Sct.confirm(this,"000171","")){
                     return false;
                 }
             }

             //조회조건 필수여부확인
        	 if(!this.gfn_findSnull(this.div_search)) return false;

        	 this.fv_saveRefNo = ""; // 조회전 남아있는 rowposition 인덱스 초기화

        	 return true;

        };

        //저장 전 validation
        this.fn_save_pre = function ()
        {
        	//저장여부
        	if (!Sct.Grid.isUpdate(this.ds_detail))
        	{
        		Sct.alert(this, "000240"); //추가나 수정한 데이터가 없습니다.
        		return false;
        	}

        	//입력 필수여부체크
        	if(!this.gfn_findSnull(this.div_cont.form.div_right)) return false;

        	var height = this.ds_detail.getColumn(0, "HEIGHT");
        	var weight = this.ds_detail.getColumn(0, "WEIGHT");
        	var smm = this.ds_detail.getColumn(0, "SMM");
        	var pbf = this.ds_detail.getColumn(0, "PBF");
        	var fat_lvl = this.ds_detail.getColumn(0, "FAT_LVL");
        	if(height == 0){
        		this.alert("신장(cm)은 0을 입력할 수 없습니다.");
        		this.div_cont.form.div_right.form.mae_height.setFocus();
        		return false;
        	}
        	if(weight == 0){
        		this.alert("체중(kg)은 0을 입력할 수 없습니다.");
        		this.div_cont.form.div_right.form.mae_weight.setFocus();
        		return false;
        	}
        	if(smm == 0){
        		this.alert("골격근량(kg)은 0을 입력할 수 없습니다.");
        		this.div_cont.form.div_right.form.mae_smm.setFocus();
        		return false;
        	}
        	if(pbf == 0){
        		this.alert("체지방율(%)은 0을 입력할 수 없습니다.");
        		this.div_cont.form.div_right.form.mae_pbf.setFocus();
        		return false;
        	}
        	if(fat_lvl == 0){
        		this.alert("내장지방레벨은 0을 입력할 수 없습니다.");
        		this.div_cont.form.div_right.form.edt_fat_lvl.setFocus();
        		return false;
        	}

        	//입력한값 중복 여부 체크
        	var keyArr = ["COMPANY_CD", "RES_ID","COM_DT"];
        	//if(!this.gfn_duplicateCheck(this.fv_currentDS, keyArr)) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	//데이터 저장전 저장할 key 값 dataset 변수에 저장
        	this.gfn_saveKeyArr(this.fv_currentDS, keyArr);
        	this.fv_saveRefNo = this.ds_list.getColumn(this.ds_list.rowposition, "RES_ID");

        	// 저장 타입 설정
        	this.ds_detail.set_updatecontrol(false);
        	if(this.saveType == "I") {
        		this.ds_detail.setRowType(0, 2);
        	} else if(this.saveType == "U") {
        		this.ds_detail.setRowType(0, 4);
        	}
        	this.ds_detail.set_updatecontrol(true);

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
        	this.ds_detail.set_updatecontrol(false);
        	this.ds_detail.setRowType(0, 8);
        	this.ds_detail.set_updatecontrol(true);

        	return true;
        };

        //detail 조회 전 validation
        this.fn_detail_search_pre = function ()
        {
             //조회전 그리드에 변경된 데이터가 있을경우 ..
             if(Sct.Grid.isUpdate(this.ds_detail)) {
                 //메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
                 if(!Sct.confirm(this,"000171","")){
                     return false;
                 }
             }
        	 this.ds_detail.clearData();
        	 return true;
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function ()
        {
        	this.ds_detail.clearData();

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_head=output1";
        	var argument = "method=getListPaging "
        		+ "sqlId=NUA205CT.NUA205CT_DS_HEAD_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //저장
        this.fn_save = function ()
        {
        	//입력 필수여부체크
        	if(!this.fn_save_pre()) return false;
        	let svcId = "save";
        	let inDs = "ds_detail"
        	this.fn_save_com(svcId, inDs);
        };

        //삭제
        this.fn_delete = function ()
        {
        	//validation
        	if(!this.fn_delete_pre()) return;

        	var svcId = "delete";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_detail:U";
        	var outDatasets = "";
        	var argument = "method=delete "
        		+ "sqlId=NUA205CT.NUA205CT_DS_DETAIL_D ";

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
        			this.div_cont.form.div_left.form.div_paging.form.fn_callAfter();
        			//저장후 조회후 변경된 row로 rowposition 설정
        			//this.gfn_saveAfterFindRow(this.ds_head);
        			this.fn_findMstRow(this.fv_saveRefNo);

        		}
        		else if(strSvcID == "searchDetail")
        		{
        			this.saveType = "U"; // 저장 구분 : update

        			// 요양/관찰일지 데이터 없을 시 행 추가
        			if(this.ds_detail.rowcount == 0) {
        				var aRow = this.ds_detail.addRow();
        				this.saveType = "I"; // 저장 구분 : insert
        				this.ds_detail.setColumn(aRow, "COMPANY_CD", fv_Company);
        				this.ds_detail.setColumn(aRow, "COM_DT", this.ds_search.getColumn(0, "DT"));
        				this.ds_detail.setColumn(aRow, "RES_ID", this.ds_head.getColumn(this.ds_head.rowposition, "RES_ID"));
        				// 접속자를 처리자에 저장
        				var userId = nexacro.getApplication().gds_userInfo.getColumn(0,"USER_ID");
        				var userNm = nexacro.getApplication().gds_userInfo.getColumn(0,"USER_NM_KOR");
        				this.ds_detail.setColumn(aRow, "MANAGER_ID",userId);
        				this.ds_detail.setColumn(aRow, "MANAGER_NM",userNm);
        				this.ds_detail.set_updatecontrol(false);
        				this.ds_detail.setRowType(aRow, 1);
        				this.ds_detail.set_updatecontrol(true);
        			}
        		}
        		else if(strSvcID == "save" || strSvcID == "delete")
        		{
        			this.fn_detail_search();
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
        		+ "sqlId=NUA205CT.NUA205CT_DS_LOCATION_S "
        		+ " COMPANY_CD="+fv_Company
        		+ " AREA="+col;

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        // detail 조회
        this.fn_detail_search = function (row, newDt)
        {
        	if(this.gfn_isNull(row)) row = this.ds_head.rowposition;
        	if(this.gfn_isNull(newDt)) newDt = this.ds_search.getColumn(0, "DT");

        	var svcId = "searchDetail";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_detail=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA205CT.NUA205CT_DS_DETAIL_S "
        		+ "COMPANY_CD=" + this.ds_search.getColumn(0, "COMPANY_CD") + " "
        		+ "COM_DT=" + newDt + " "
        		+ "RES_ID=" + this.ds_head.getColumn(row, "RES_ID") + " "
        		;

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
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

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid){
        		case "RES_NM" : if(this.fn_detail_search_pre()) {
        							this.ds_search.setColumn(0, "NAME", objDs.getColumn(0, "NAME"));
        							this.ds_search.setColumn(0, "RES_ID", objDs.getColumn(0, "RES_ID"));
        							this.ds_search.setColumn(0, "AREA", objDs.getColumn(0, "AREA"));
        							var area = this.ds_search.getColumn(0, "AREA"); //층
        							if(!Sct.Util.isEmpty(area)){ //층에 해당되는 생활실 조회
        							   this.fn_location_search("ds_location", area);
        							   var nInsertRow = this.ds_location.insertRow();
        							   this.ds_location.setColumn(nInsertRow,"ARE_CD","");
        							}
        							this.ds_search.setColumn(0, "LOCATION", objDs.getColumn(0, "LOCATION"));

        							this.fn_search();
        						}
        		break;
        		case "MANAGER_ID" : this.ds_detail.setColumn(this.ds_detail.rowposition,"MANAGER_ID",objDs.getColumn(0,"USER_ID"));
        							this.ds_detail.setColumn(this.ds_detail.rowposition,"MANAGER_NM",objDs.getColumn(0,"USER_NM_KOR"));
        		break;
        	}

        };

        this.div_search_btn_res_pp_onclick = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company,
        		TABLE_NM : "T_NU_COMPOSITION"
        	};
        	Sct.popup(this, "RES_NM", 326, 226, "", param, "CM_POP::CM_RES_DATA_INPUT_YN_PP.xfdl", "fn_popCallback");
        };

        this.div_cont_div_right_btn_day_manager_onclick = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company
        	};
        	Sct.popup(this, "MANAGER_ID", 326, 226, "", param, "CM_POP::CM_MANAGER_PP.xfdl", "fn_popCallback");
        };

        this.ds_head_onrowposchanged = function(obj,e)
        {
        	// validation
        	if(!this.fn_detail_search_pre()) {
        		this.ds_head.set_enableevent(false);
        		this.ds_head.set_rowposition(e.oldrow);
        		this.ds_head.set_enableevent(true);
        		return;
        	}

        	this.fn_detail_search(e.newrow);
        };

        // < 전날 버튼 클릭 이벤트
        this.div_search_btn_pre_dt_onclick = function(obj,e)
        {
           if(this.fn_detail_search_pre()) {
              var searchDt = this.ds_search.getColumn(0, "DT");
              var preDt = Sct.Util.addDate(searchDt, -1);
              this.ds_search.setColumn(0, "DT", preDt);
              this.fn_detail_search(this.ds_head.rowposition);
           }

        };

        // 앞날 > 버튼 클릭 이벤트
        this.div_search_btn_next_dt_onclick = function(obj,e)
        {
           if(this.fn_detail_search_pre()) {
              var searchDt = this.ds_search.getColumn(0, "DT");
              var nextDt = Sct.Util.addDate(searchDt, 1);
              this.ds_search.setColumn(0, "DT", nextDt);
              this.fn_detail_search(this.ds_head.rowposition);
           }
        };

        this.div_search_cal_sdate_canchange = function(obj,e)
        {
        	// validation
        	if(!this.fn_detail_search_pre()) {
        		return false;
        	} else {
        		this.fn_detail_search(this.ds_head.rowposition, e.postvalue);
        	}
        };

        // 층 변경전
        this.div_search_cmb_area_canitemchange = function(obj,e)
        {
           if(!this.fn_detail_search_pre()) {
              return false;
           }

        };

        // 층 변경후
        this.div_search_cmb_area_onitemchanged = function(obj,e)
        {
           	var area = this.ds_search.getColumn(0, "AREA"); //층

        	this.ds_search.setColumn(0, "LOCATION", ""); // 생활실 값 초기화
        	this.ds_search.setColumn(0, "RES_ID", null); // 생활실 값 초기화
        	this.ds_search.setColumn(0, "NAME", null); // 생활실 값 초기화

        	if(!Sct.Util.isEmpty(e.postvalue)){ //층에 해당되는 생활실 조회
        		this.fn_location_search("ds_location", e.postvalue);

        		var nInsertRow = this.ds_location.insertRow();
        		this.ds_location.setColumn(nInsertRow,"ARE_CD","");
        	} else {
        		this.ds_location.clearData();
        	}

        	this.fn_search();
        };

        // 생활실 변경전
        this.div_search_cmb_location_canitemchange = function(obj,e)
        {
           if(!this.fn_detail_search_pre()) {
              return false;
           }
        };
        // 생활실 변경후
        this.div_search_cmb_location_onitemchanged = function(obj,e)
        {
           this.fn_search();
        };

        // 퇴소여부 변경전
        this.div_search_cmb_enter_gb_canitemchange = function(obj,e)
        {
           if(!this.fn_detail_search_pre()) {
              return false;
           }
        };
        // 퇴소여부 변경후
        this.div_search_cmb_enter_gb_onitemchanged = function(obj,e)
        {
           this.fn_search();
        };

        // 입소자 키인변경전
        this.div_search_edt_name_canchange = function(obj,e)
        {
           if(!this.fn_detail_search_pre()) {
              return false;
           }
        };
        // 입소자 키인변경후
        this.div_search_edt_name_onchanged = function(obj,e)
        {
           this.fn_search();
        };

        // BMI, 체지방량(kg) 자동 계산
        this.ds_detail_oncolumnchanged = function(obj,e)
        {
        	var height = this.ds_detail.getColumn(0, "HEIGHT");
        	var weight = this.ds_detail.getColumn(0, "WEIGHT");
        	var pbf = this.ds_detail.getColumn(0, "PBF");

        	// BMI
        	if((e.columnid == "HEIGHT" || e.columnid == "WEIGHT") && !this.gfn_isNull(height) && !this.gfn_isNull(weight)) {
        		var bmi = nexacro.round(10000 * weight / height / height, 1);
        		this.ds_detail.setColumn(0, "BMI", bmi);
        	}

        	// 체지방량(kg)
        	if((e.columnid == "WEIGHT" || e.columnid == "PBF") && !this.gfn_isNull(weight) && !this.gfn_isNull(pbf)) {
        		var bfm = nexacro.round(weight * pbf / 100, 1);
        		this.ds_detail.setColumn(0, "BFM", bfm);
        	}

        };

        this.fn_edt_onkeyup = function(obj,e)
        {
        	if (e.keycode == "13")
        	{
        		if (obj.id == "edt_name")
        		{
        			this.div_search.form.btn_res_pp.click();
        		}
        		else if (obj.id == "edt_day_manager_nm")
        		{
        			this.div_cont.form.div_right.form.btn_day_manager.click();
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
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.div_search.form.cal_sdate.addEventHandler("canchange",this.div_search_cal_sdate_canchange,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.div_search_cmb_area_onitemchanged,this);
            this.div_search.form.cmb_area.addEventHandler("canitemchange",this.div_search_cmb_area_canitemchange,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.div_search_cmb_location_onitemchanged,this);
            this.div_search.form.cmb_location.addEventHandler("canitemchange",this.div_search_cmb_location_canitemchange,this);
            this.div_search.form.edt_name.addEventHandler("onchanged",this.div_search_edt_name_onchanged,this);
            this.div_search.form.edt_name.addEventHandler("canchange",this.div_search_edt_name_canchange,this);
            this.div_search.form.edt_name.addEventHandler("onkeyup",this.fn_edt_onkeyup,this);
            this.div_search.form.btn_res_pp.addEventHandler("onclick",this.div_search_btn_res_pp_onclick,this);
            this.div_search.form.cmb_enter_gb.addEventHandler("onitemchanged",this.div_search_cmb_enter_gb_onitemchanged,this);
            this.div_search.form.cmb_enter_gb.addEventHandler("canitemchange",this.div_search_cmb_enter_gb_canitemchange,this);
            this.div_search.form.btn_pre_dt.addEventHandler("onclick",this.div_search_btn_pre_dt_onclick,this);
            this.div_search.form.btn_next_dt.addEventHandler("onclick",this.div_search_btn_next_dt_onclick,this);
            this.div_cont.form.div_right.form.sta_height.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.sta_smm.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.sta_title_remark.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.edt_day_manager_nm.addEventHandler("onkeyup",this.fn_edt_onkeyup,this);
            this.div_cont.form.div_right.form.btn_day_manager.addEventHandler("onclick",this.div_cont_div_right_btn_day_manager_onclick,this);
            this.div_cont.form.div_right.form.sta_fat_lvl.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.sta_weight.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.sta_bmi.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.sta_pbf.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.sta_bfm.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.statc_divcont_title.addEventHandler("onclick",this.div_cont_statc_divcont_title_onclick,this);
            this.div_cont.form.div_left.form.grd_head.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.statc_divcont_title.addEventHandler("onclick",this.div_cont_statc_divcont_title_onclick,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
            this.ds_head.addEventHandler("onrowposchanged",this.ds_head_onrowposchanged,this);
            this.ds_detail.addEventHandler("oncolumnchanged",this.ds_detail_oncolumnchanged,this);
        };
        this.loadIncludeScript("NUA205CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
