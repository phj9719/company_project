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
            this.set_titletext("식사일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_room", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_sch_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area_i", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location_i", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location_all", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_care_grp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_minute", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_sex", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"MEA_DT\" type=\"INT\" size=\"256\"/><Column id=\"BIRTHDAY2\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"FUND_DIS\" type=\"STRING\" size=\"256\"/><Column id=\"DIETARY_CURE\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TP\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TP\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/><Column id=\"B_MEAL1\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL2\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL3\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL4\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL5\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL6\" type=\"STRING\" size=\"256\"/><Column id=\"B_QTY1\" type=\"STRING\" size=\"256\"/><Column id=\"B_QTY2\" type=\"STRING\" size=\"256\"/><Column id=\"B_QTY3\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC1\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC2\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC3\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC4\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC5\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC6\" type=\"STRING\" size=\"256\"/><Column id=\"DIET1\" type=\"STRING\" size=\"256\"/><Column id=\"DIET2\" type=\"STRING\" size=\"256\"/><Column id=\"DIET3\" type=\"STRING\" size=\"256\"/><Column id=\"DIET4\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL1\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL2\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL3\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL4\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL5\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL6\" type=\"STRING\" size=\"256\"/><Column id=\"L_QTY1\" type=\"STRING\" size=\"256\"/><Column id=\"L_QTY2\" type=\"STRING\" size=\"256\"/><Column id=\"L_QTY3\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL1\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL2\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL3\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL4\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL5\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL6\" type=\"STRING\" size=\"256\"/><Column id=\"D_QTY1\" type=\"STRING\" size=\"256\"/><Column id=\"D_QTY2\" type=\"STRING\" size=\"256\"/><Column id=\"D_QTY3\" type=\"STRING\" size=\"256\"/><Column id=\"A_QTY1\" type=\"STRING\" size=\"256\"/><Column id=\"A_QTY2\" type=\"STRING\" size=\"256\"/><Column id=\"A_QTY3\" type=\"STRING\" size=\"256\"/><Column id=\"P_QTY1\" type=\"STRING\" size=\"256\"/><Column id=\"P_QTY2\" type=\"STRING\" size=\"256\"/><Column id=\"P_QTY3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"MEA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY2\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"FUND_DIS\" type=\"STRING\" size=\"256\"/><Column id=\"DIETARY_CURE\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TP\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TP\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/><Column id=\"B_MEAL1\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL2\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL3\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL4\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL5\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL6\" type=\"STRING\" size=\"256\"/><Column id=\"B_QTY1\" type=\"STRING\" size=\"256\"/><Column id=\"B_QTY2\" type=\"STRING\" size=\"256\"/><Column id=\"B_QTY3\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC1\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC2\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC3\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC4\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC5\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC6\" type=\"STRING\" size=\"256\"/><Column id=\"DIET1\" type=\"STRING\" size=\"256\"/><Column id=\"DIET2\" type=\"STRING\" size=\"256\"/><Column id=\"DIET3\" type=\"STRING\" size=\"256\"/><Column id=\"DIET4\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL1\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL2\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL3\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL4\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL5\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL6\" type=\"STRING\" size=\"256\"/><Column id=\"L_QTY1\" type=\"STRING\" size=\"256\"/><Column id=\"L_QTY2\" type=\"STRING\" size=\"256\"/><Column id=\"L_QTY3\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL1\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL2\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL3\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL4\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL5\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL6\" type=\"STRING\" size=\"256\"/><Column id=\"D_QTY1\" type=\"STRING\" size=\"256\"/><Column id=\"D_QTY2\" type=\"STRING\" size=\"256\"/><Column id=\"D_QTY3\" type=\"STRING\" size=\"256\"/><Column id=\"A_QTY1\" type=\"STRING\" size=\"256\"/><Column id=\"A_QTY2\" type=\"STRING\" size=\"256\"/><Column id=\"A_QTY3\" type=\"STRING\" size=\"256\"/><Column id=\"P_QTY1\" type=\"STRING\" size=\"256\"/><Column id=\"P_QTY2\" type=\"STRING\" size=\"256\"/><Column id=\"P_QTY3\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","120",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_gMove","605","45%","25","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_right","632","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_border("0px solid rgba(0,0,0,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_b","0","198","912","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00_00_00_00_00_01","691","198","221","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static02","0","30","335","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name00_01","0","30","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_text("처리자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_func","0","86","912","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f6","586","90","86","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("11");
            obj.set_text("기타장애");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f5","496","90","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("10");
            obj.set_text("위관영양");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f4","406","90","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("9");
            obj.set_text("당뇨");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f3","316","90","86","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("8");
            obj.set_text("소화불량");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f2","226","90","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("7");
            obj.set_text("연하곤란");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f1","136","90","86","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("6");
            obj.set_text("저작곤란");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_title_func","0","86","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("기능장애");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_diet","0","114","912","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d4","406","118","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("17");
            obj.set_text("고단백식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d3","316","118","86","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("16");
            obj.set_text("저염식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d2","226","118","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("15");
            obj.set_text("당뇨식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d1","136","118","86","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("14");
            obj.set_text("체중조절식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_title_diet","0","114","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("치료식이");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00_00_00","0","170","912","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_title_tp","0","170","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("구분");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_l","0","226","912","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_d","0","254","912","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_a","0","282","912","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_p","0","310","912","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_remark","0","366","912","190",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_title_b","0","198","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("아침식사");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_title_l","0","226","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("점심식사");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_title_d","0","254","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("저녁식사");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_title_a","0","282","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("오전간식");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_title_p","0","310","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("오후간식");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_b_meal1","196","202","86","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("26");
            obj.set_text("일반식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_b_meal2","286","202","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("27");
            obj.set_text("죽식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_b_meal3","376","202","96","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("28");
            obj.set_text("유동(경관)식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_b_meal4","476","202","70","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("29");
            obj.set_text("갈은식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_b_meal5","556","202","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("30");
            obj.set_text("다진식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_b_meal6","646","202","46","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("31");
            obj.set_text("미음");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_title_time","129","170","57","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_text("시간");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_title_type","185","170","507","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_text("식사유형");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_title_qty","691","170","221","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_text("식사량");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_b_qty1","700","202","46","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("33");
            obj.set_text("전량");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_b_qty2","752","202","74","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("34");
            obj.set_text("1/2 이상");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_b_qty3","832","202","74","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("35");
            obj.set_text("1/2 미만");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00_00_00_00_00_01_00","691","226","221","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00_00_00_00_00_01_00_00","691","254","221","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00_00_00_00_00_01_00_00_00","691","282","221","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00_00_00_00_00_01_00_00_00_00","691","310","221","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_meal1","196","230","86","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("39");
            obj.set_text("일반식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_meal2","286","230","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("40");
            obj.set_text("죽식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_meal3","376","230","96","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("41");
            obj.set_text("유동(경관)식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_meal4","476","230","70","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("42");
            obj.set_text("갈은식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_meal5","556","230","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("43");
            obj.set_text("다진식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_meal6","646","230","46","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("44");
            obj.set_text("미음");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_qty1","700","230","46","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("46");
            obj.set_text("전량");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_qty2","752","230","74","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("47");
            obj.set_text("1/2 이상");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_qty3","832","230","74","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("48");
            obj.set_text("1/2 미만");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_meal1","196","258","86","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("52");
            obj.set_text("일반식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_meal2","286","258","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("53");
            obj.set_text("죽식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_meal3","376","258","96","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("54");
            obj.set_text("유동(경관)식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_meal4","476","258","70","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("55");
            obj.set_text("갈은식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_meal5","556","258","80","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("56");
            obj.set_text("다진식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_meal6","646","258","46","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("57");
            obj.set_text("미음");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_qty1","700","258","46","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("59");
            obj.set_text("전량");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_qty2","752","258","74","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("60");
            obj.set_text("1/2 이상");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_qty3","832","258","74","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("61");
            obj.set_text("1/2 미만");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_a_qty1","700","286","46","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("66");
            obj.set_text("전량");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_a_qty2","752","286","74","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("67");
            obj.set_text("1/2 이상");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_a_qty3","832","286","74","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("68");
            obj.set_text("1/2 미만");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_p_qty1","700","314","46","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("73");
            obj.set_text("전량");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_p_qty2","752","314","74","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("74");
            obj.set_text("1/2 이상");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_p_qty3","832","314","74","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("75");
            obj.set_text("1/2 미만");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_title_remark","0","366","130","190",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("비고");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","132","369","777","184",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("78");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lun_time","132","230","53","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("38");
            obj.set_format("##:##");
            obj.set_limitbymask("integer");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("mae_bre_time","132","202","53","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("25");
            obj.set_format("##:##");
            obj.set_limitbymask("integer");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("mae_din_time","132","258","53","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("51");
            obj.set_format("##:##");
            obj.set_limitbymask("integer");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("mae_mor_snack_time","132","286","53","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("64");
            obj.set_format("##:##");
            obj.set_limitbymask("integer");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("mae_aft_snack_time","132","314","53","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("71");
            obj.set_format("##:##");
            obj.set_limitbymask("integer");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_day_manager_nm","132","34","170","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_day_manager","307","34","25","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::btn_WF_SearchSmall_P.png\') no-repeat rgba(255,255,255,1)");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("statc_divcont_title","0","7","200","22",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("79");
            obj.set_text("식사정보");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","603",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
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

            obj = new Static("sta_sdate","35","5","130","21",null,null,null,null,null,null,this.div_search.form);
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

            obj = new Button("btn_res_pp","970","25","25","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_background("url(\'imagerc::btn_WF_SearchSmall_P.png\') no-repeat rgba(255,255,255,1)");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_name","853","25","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_color("black");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_name","753","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("입소자성명");
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

            obj = new Static("sta_location","511","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("생활실");
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

            obj = new Static("sta_area","320","25","60","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_sMove","44.87%","96",null,"16","44.87%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::search_open.png\') no-repeat transparent");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1600,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item18","div_cont.cal_validitystart","value","ds_head","VALID_PERIOD_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.cal_passwdExpire","value","ds_head","VALID_PASSWD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.div_right.form.div_head.form.edt_cellphone00","value","ds_head","LONG_TERM_CARE_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.cal_sdate","value","ds_search","DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.chk_f6","value","ds_detail","FUNC6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.chk_f5","value","ds_detail","FUNC5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.chk_f4","value","ds_detail","FUNC4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_head.form.CheckBox00_00_00_00_01_00","value","ds_head","DIET4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.chk_f3","value","ds_detail","FUNC3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_head.form.CheckBox00_00_00_01_00","value","ds_head","DIET3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.chk_f2","value","ds_detail","FUNC2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_head.form.CheckBox00_00_01_00","value","ds_head","DIET2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.chk_f1","value","ds_detail","FUNC1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_head.form.CheckBox00_01_00","value","ds_head","DIET1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.chk_d4","value","ds_detail","DIET4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.chk_d3","value","ds_detail","DIET3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_right.form.chk_d2","value","ds_detail","DIET2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.chk_d1","value","ds_detail","DIET1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.chk_b_meal1","value","ds_detail","B_MEAL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.chk_b_meal2","value","ds_detail","B_MEAL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.chk_b_meal3","value","ds_detail","B_MEAL3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.chk_b_meal4","value","ds_detail","B_MEAL4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_right.form.chk_b_meal5","value","ds_detail","B_MEAL5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.chk_b_meal6","value","ds_detail","B_MEAL6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.chk_b_qty1","value","ds_detail","B_QTY1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_right.form.chk_b_qty2","value","ds_detail","B_QTY2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_right.form.chk_b_qty3","value","ds_detail","B_QTY3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_right.form.chk_l_meal1","value","ds_detail","L_MEAL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_right.form.chk_l_meal2","value","ds_detail","L_MEAL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_right.form.chk_l_meal3","value","ds_detail","L_MEAL3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_right.form.chk_l_meal4","value","ds_detail","L_MEAL4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_right.form.chk_l_meal5","value","ds_detail","L_MEAL5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_right.form.chk_l_meal6","value","ds_detail","L_MEAL6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.chk_l_qty1","value","ds_detail","L_QTY1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.chk_l_qty2","value","ds_detail","L_QTY2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.div_right.form.chk_l_qty3","value","ds_detail","L_QTY3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.div_right.form.chk_d_meal1","value","ds_detail","D_MEAL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.div_right.form.chk_d_meal2","value","ds_detail","D_MEAL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.div_right.form.chk_d_meal3","value","ds_detail","D_MEAL3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.div_right.form.chk_d_meal4","value","ds_detail","D_MEAL4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.div_right.form.chk_d_meal5","value","ds_detail","D_MEAL5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.div_right.form.chk_d_meal6","value","ds_detail","D_MEAL6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.div_right.form.chk_d_qty1","value","ds_detail","D_QTY1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.div_right.form.chk_d_qty2","value","ds_detail","D_QTY2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.div_right.form.chk_d_qty3","value","ds_detail","D_QTY3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_cont.form.div_right.form.chk_a_qty1","value","ds_detail","A_QTY1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_cont.form.div_right.form.chk_a_qty2","value","ds_detail","A_QTY2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_cont.form.div_right.form.chk_a_qty3","value","ds_detail","A_QTY3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_cont.form.div_right.form.chk_p_qty1","value","ds_detail","P_QTY1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_cont.form.div_right.form.chk_p_qty2","value","ds_detail","P_QTY2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_cont.form.div_right.form.chk_p_qty3","value","ds_detail","P_QTY3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.div_right.form.TextArea00","value","ds_detail","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_right.form.mae_bre_time","value","ds_detail","BRE_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_right.form.mae_lun_time","value","ds_detail","LUN_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.div_right.form.mae_din_time","value","ds_detail","DIN_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.div_right.form.mae_mor_snack_time","value","ds_detail","MOR_SNACK_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.div_right.form.mae_aft_snack_time","value","ds_detail","AFT_SNACK_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.edt_day_manager_nm","value","ds_detail","MANAGER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cmb_enter_gb","value","ds_search","RETIRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_name","value","ds_search","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM_POP::CM_PAGING_DIV.xfdl");
        };
        
        // User Script
        this.addIncludeScript("NUA307CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA307CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA307CT.xfdl", function() {
        /***********************************************************************
         * 화면ID   : NUA307CT.xfdl
         * 화면명   :
         * 화면설명 : 식사일지
         * 작성일   : 2021-06-23 10:32
         * 작성자   : SOOIM
         * 수정이력 :
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2021.08.17		SOOIM		최초작성
         *  2021.11.26      이승규		1차수정
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
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_list;

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
        	this.fn_searchBtn();

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
        //                          { outDsName : "ds_location", sqlId : "NUA307CT.NUA307CT_DS_LOCATION_S", param : this.ds_search, bEmptyRow : true}
        //                        , { outDsName : "ds_room", sqlId : "NUA307CT.NUA307CT_DS_ROOM_S",param : this.ds_search, bEmptyRow : true}
        //					    { outDsName : "ds_manager", sqlId : "NUA307CT.NUA307CT_DS_MANAGER_S",param : this.ds_search, bEmptyRow : true}
        					     { outDsName : "ds_area", sqlId : "NUA307CT.NUA307CT_DS_AREA_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : true} // 층 조회
        					   , { outDsName : "ds_location_all", sqlId : "NUA307CT.NUA307CT_DS_LOCATION_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : true} // 생활실 전체 조회
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

        	 this.ds_detail.clearData();

        	 this.fv_saveRefNo = ""; // 조회전 rowposition 인덱스 전역변수 초기화

        	 return true;
        };

        //저장 전 validation
        this.fn_save_pre = function ()
        {
        	//저장여부
        	if (!(Sct.Grid.isUpdate(this.ds_detail)))
        	{
        		Sct.alert(this, "000240"); //추가나 수정한 데이터가 없습니다.
        		return false;
        	}

        	//입력 필수여부체크
        	//if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;

        	//입력한값 중복 여부 체크
        	var keyArr = ["COMPANY_CD", "RES_ID"];

        	//if(!this.gfn_duplicateCheck(this.fv_currentDS, keyArr)) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	//데이터 저장전 저장할 key 값 dataset 변수에 저장
        	this.gfn_saveKeyArrCurrentRow(this.ds_head, keyArr);
        	this.fv_saveRefNo = this.ds_head.getColumn(this.ds_head.rowposition, "RES_ID");

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
        		+ "sqlId=NUA307CT.NUA307CT_DS_HEAD_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        //저장
        this.fn_save = function ()
        {
        	//입력 필수여부체크
        // 	if(!this.fn_save_pre()) return false;
        //
        // 	var svcId = "save";
        // 	var params = "/NUA307CTController.do";
        // 	var inDatasets = "input1=ds_detail:U";
        // 	var outDatasets = "";
        // 	var argument = "method=save ";
        //
        // 	var callbackFunc = "fn_callback";
        // 	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);

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
        		+ "sqlId=NUA307CT.NUA307CT_DS_DETAIL_D ";

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

        			this.fn_detail_search();
        		}
        		else if(strSvcID == "searchDetail")
        		{
        			this.saveType = "U"; // 저장 구분 : update
        			// 식사 데이터 없을 시 입소자정보로 식사데이터 기본 조회
        			if(this.ds_detail.rowcount == 0) {
        				this.fn_detail_search2();
        			}
        		}
        		else if(strSvcID == "searchDetail2")
        		{
        			this.saveType = "I"; // 저장 구분 : insert
        			// 조회조건의 날짜 세팅
        			this.ds_detail.setColumn(0, "MEA_DT", this.ds_search.getColumn(0, "DT"));
        			// 접속자를 처리자에 저장
        			var userId = nexacro.getApplication().gds_userInfo.getColumn(0,"USER_ID");
        			var userNm = nexacro.getApplication().gds_userInfo.getColumn(0,"USER_NM_KOR");
        			this.ds_detail.setColumn(0, "MANAGER_ID",userId);
        			this.ds_detail.setColumn(0, "MANAGER_NM",userNm);
        			this.ds_detail.set_updatecontrol(false);
        			this.ds_detail.setRowType(0, 1);
        			this.ds_detail.set_updatecontrol(true);
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
        		+ "sqlId=NUA307CT.NUA307CT_DS_LOCATION_S "
        		+ " COMPANY_CD="+fv_Company
        		+ " AREA="+col;

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        // detail 조회(식사데이터 조회)
        this.fn_detail_search = function (row, newDt)
        {
        	if(this.gfn_isNull(row)) row = this.ds_head.rowposition;
        	if(this.gfn_isNull(newDt)) newDt = this.ds_search.getColumn(0, "DT");

        	var svcId = "searchDetail";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_detail=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA307CT.NUA307CT_DS_DETAIL_S "
        		+ "COMPANY_CD=" + this.ds_search.getColumn(0, "COMPANY_CD") + " "
        		+ "MEA_DT=" + newDt + " "
        		+ "RES_ID=" + this.ds_head.getColumn(row, "RES_ID") + " "
        		;

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // detail 조회2(식사 데이터 없을 시 입소자정보로 식사데이터 기본 조회)
        this.fn_detail_search2 = function ()
        {
        	var svcId = "searchDetail2";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_detail=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA307CT.NUA307CT_DS_DETAIL_S2 "
        		+ "COMPANY_CD=" + this.ds_search.getColumn(0, "COMPANY_CD") + " "
        		+ "RES_ID=" + this.ds_head.getColumn(this.ds_head.rowposition, "RES_ID") + " "
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
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid){
        		case "RES_NM" :
        						if(this.fn_detail_search_pre()) {
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

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.div_search_btn_res_pp_onclick = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company,
        		TABLE_NM : "T_NU_MEAL"
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

        this.CheckBox_onchanged = function(obj,e)
        {
        	var column0;
        	var column1 = obj.name;
        	console.log(column1);

        	for(var i=1; i<7; i++){
        		/*
        		if(column1.substring(4,10)=="b_meal"){ //아침식사유형
        			column0 ="chk_b_meal"+i;
        			if(column0 != column1){
        				this.ds_list.setColumn(this.ds_list.rowposition,"B_MEAL"+i,0);
        			}
        		}
        		if(column1.substring(4,10)=="l_meal"){ //점심식사유형
        			column0 ="chk_l_meal"+i;
        			if(column0 != column1){
        				this.ds_list.setColumn(this.ds_list.rowposition,"L_MEAL"+i,0);
        			}
        		}
        		if(column1.substring(4,10)=="d_meal"){ //저녁식사유형
        			column0 ="chk_d_meal"+i;
        			if(column0 != column1){
        				this.ds_list.setColumn(this.ds_list.rowposition,"D_MEAL"+i,0);
        			}
        		}
        		*/
        		if(column1.substring(4,9)=="b_qty"){ //아침식사량
        			column0 ="chk_b_qty"+i;
        			if(column0 != column1){
        				this.ds_detail.setColumn(this.ds_detail.rowposition,"B_QTY"+i,0);
        			}
        		}
        		if(column1.substring(4,9)=="l_qty"){ //점심식사량
        			column0 ="chk_l_qty"+i;
        			if(column0 != column1){
        				this.ds_detail.setColumn(this.ds_detail.rowposition,"L_QTY"+i,0);
        			}
        		}
        		if(column1.substring(4,9)=="d_qty"){ //저녁식사량
        			column0 ="chk_d_qty"+i;
        			if(column0 != column1){
        				this.ds_detail.setColumn(this.ds_detail.rowposition,"D_QTY"+i,0);
        			}
        		}
        		if(column1.substring(4,9)=="a_qty"){ //오전간식량
        			column0 ="chk_a_qty"+i;
        			if(column0 != column1){
        				this.ds_detail.setColumn(this.ds_detail.rowposition,"A_QTY"+i,0);
        			}
        		}
        		if(column1.substring(4,9)=="p_qty"){ //오후간식량
        			column0 ="chk_p_qty"+i;
        			if(column0 != column1){
        				this.ds_detail.setColumn(this.ds_detail.rowposition,"P_QTY"+i,0);
        			}
        		}
        	}
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
              this.fn_detail_search();
           }

        };

        // 앞날 > 버튼 클릭 이벤트
        this.div_search_btn_next_dt_onclick = function(obj,e)
        {
           if(this.fn_detail_search_pre()) {
              var searchDt = this.ds_search.getColumn(0, "DT");
              var nextDt = Sct.Util.addDate(searchDt, 1);
              this.ds_search.setColumn(0, "DT", nextDt);
              this.fn_detail_search();
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

        // 식사시간 체크
        this.ds_detail_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid.substr(e.columnid.length-4, e.columnid.length) == "TIME") {
        		// 빈값 그대로
        		if(this.gfn_isNull(e.newvalue.trim())) return;

        		// 시간 형식 체크
        		if(!this.gfn_isTimeHm(e.newvalue.trim())) {
        			Sct.alert(this, "000084", "시간"+"|"); // {0} 형식을 확인하여 주십시오.
        			obj.setColumn(0, e.columnid, e.oldvalue);

        			// 포커스
        			if(e.columnid == "BRE_TIME") this.div_cont.form.div_right.form.mae_bre_time.setFocus();
        			else if(e.columnid == "LUN_TIME") this.div_cont.form.div_right.form.mae_lun_time.setFocus();
        			else if(e.columnid == "DIN_TIME") this.div_cont.form.div_right.form.mae_din_time.setFocus();
        			else if(e.columnid == "MOR_SNACK_TIME") this.div_cont.form.div_right.form.mae_mor_snack_time.setFocus();
        			else if(e.columnid == "AFT_SNACK_TIME") this.div_cont.form.div_right.form.mae_aft_snack_time.setFocus();

        			return;
        		}
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
            this.div_cont.form.div_right.form.sta_title_func.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.sta_title_diet.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.sta_title_tp.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.sta_title_b.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.sta_title_l.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.sta_title_d.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.sta_title_a.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.sta_title_p.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.chk_b_meal1.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_b_meal2.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_b_meal3.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_b_meal4.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_b_meal5.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_b_meal6.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.sta_title_time.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.sta_title_type.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.sta_title_qty.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.chk_b_qty1.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_b_qty2.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_b_qty3.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_l_meal1.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_l_meal2.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_l_meal3.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_l_meal4.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_l_meal5.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_l_meal6.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_l_qty1.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_l_qty2.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_l_qty3.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_d_meal1.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_d_meal2.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_d_meal3.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_d_meal4.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_d_meal5.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_d_meal6.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_d_qty1.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_d_qty2.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_d_qty3.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_a_qty1.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_a_qty2.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_a_qty3.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_p_qty1.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_p_qty2.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_p_qty3.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.sta_title_remark.addEventHandler("onclick",this.div_cont_div_head_sta_email_onclick,this);
            this.div_cont.form.div_right.form.edt_day_manager_nm.addEventHandler("onkeyup",this.fn_edt_onkeyup,this);
            this.div_cont.form.div_right.form.btn_day_manager.addEventHandler("onclick",this.div_cont_div_right_btn_day_manager_onclick,this);
            this.div_cont.form.div_right.form.statc_divcont_title.addEventHandler("onclick",this.div_cont_statc_divcont_title_onclick,this);
            this.div_cont.form.div_left.form.statc_divcont_title.addEventHandler("onclick",this.div_cont_statc_divcont_title_onclick,this);
            this.div_search.form.cal_sdate.addEventHandler("canchange",this.div_search_cal_sdate_canchange,this);
            this.div_search.form.btn_pre_dt.addEventHandler("onclick",this.div_search_btn_pre_dt_onclick,this);
            this.div_search.form.btn_next_dt.addEventHandler("onclick",this.div_search_btn_next_dt_onclick,this);
            this.div_search.form.cmb_enter_gb.addEventHandler("onitemchanged",this.div_search_cmb_enter_gb_onitemchanged,this);
            this.div_search.form.cmb_enter_gb.addEventHandler("canitemchange",this.div_search_cmb_enter_gb_canitemchange,this);
            this.div_search.form.btn_res_pp.addEventHandler("onclick",this.div_search_btn_res_pp_onclick,this);
            this.div_search.form.edt_name.addEventHandler("onchanged",this.div_search_edt_name_onchanged,this);
            this.div_search.form.edt_name.addEventHandler("canchange",this.div_search_edt_name_canchange,this);
            this.div_search.form.edt_name.addEventHandler("onkeyup",this.fn_edt_onkeyup,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.div_search_cmb_location_onitemchanged,this);
            this.div_search.form.cmb_location.addEventHandler("canitemchange",this.div_search_cmb_location_canitemchange,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.div_search_cmb_area_onitemchanged,this);
            this.div_search.form.cmb_area.addEventHandler("canitemchange",this.div_search_cmb_area_canitemchange,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_list.addEventHandler("onrowposchanged",this.ds_head_onrowposchanged,this);
            this.ds_list.addEventHandler("cancolumnchange",this.ds_head_cancolumnchange,this);
            this.ds_head.addEventHandler("onrowposchanged",this.ds_head_onrowposchanged,this);
            this.ds_detail.addEventHandler("oncolumnchanged",this.ds_detail_oncolumnchanged,this);
        };
        this.loadIncludeScript("NUA307CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
