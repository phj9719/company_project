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
            this.set_titletext("μμμΌμ§");
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
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resident", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excretion_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EXC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"MIN\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_1\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_2\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"FECES_1\" type=\"STRING\" size=\"256\"/><Column id=\"FECES_2\" type=\"STRING\" size=\"256\"/><Column id=\"FECES_3\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_N\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_S\" type=\"STRING\" size=\"256\"/><Column id=\"CLOTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_AGE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_posture_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"POS_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/><Column id=\"POS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"POS_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"POS_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"POSTURE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"ROW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_meal_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MEA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"FUND_DIS\" type=\"STRING\" size=\"256\"/><Column id=\"FUND1\" type=\"STRING\" size=\"256\"/><Column id=\"FUND2\" type=\"STRING\" size=\"256\"/><Column id=\"FUND3\" type=\"STRING\" size=\"256\"/><Column id=\"FUND4\" type=\"STRING\" size=\"256\"/><Column id=\"FUND5\" type=\"STRING\" size=\"256\"/><Column id=\"FUND6\" type=\"STRING\" size=\"256\"/><Column id=\"DIETARY_CURE\" type=\"STRING\" size=\"256\"/><Column id=\"DIET1\" type=\"STRING\" size=\"256\"/><Column id=\"DIET2\" type=\"STRING\" size=\"256\"/><Column id=\"DIET3\" type=\"STRING\" size=\"256\"/><Column id=\"DIET4\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL1\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL2\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL3\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL4\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL5\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL6\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TP\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL1\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL2\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL3\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL4\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL5\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL6\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TP\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL1\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL2\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL3\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL4\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL5\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL6\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_water_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"WAT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WAT_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"VOLUME\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_manager", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sleep_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SLE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"SLE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SLE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SLEEP_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_observe_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OBS_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"OBS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NOTE\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sleep_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SLE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"SLE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SLE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SLEEP_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_sleep_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_water_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"WAT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WAT_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"VOLUME\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_posture_time", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_minute", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_posture", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excretion_temp1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NIG_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NIG_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_OBS\" type=\"STRING\" size=\"256\"/><Column id=\"FECES_OBS\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"CLOTH_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excretion_temp2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NIG_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NIG_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_OBS\" type=\"STRING\" size=\"256\"/><Column id=\"FECES_OBS\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"CLOTH_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_meal_resident", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_FR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TO_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_FR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TO_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_FR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TO_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FOOD_TP\" type=\"STRING\" size=\"256\"/><Column id=\"FOOD1\" type=\"STRING\" size=\"256\"/><Column id=\"FOOD2\" type=\"STRING\" size=\"256\"/><Column id=\"FOOD3\" type=\"STRING\" size=\"256\"/><Column id=\"FOOD4\" type=\"STRING\" size=\"256\"/><Column id=\"FOOD5\" type=\"STRING\" size=\"256\"/><Column id=\"FOOD6\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC_DIS\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC1\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC2\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC3\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC4\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC5\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC6\" type=\"STRING\" size=\"256\"/><Column id=\"DIETARY_CURE\" type=\"STRING\" size=\"256\"/><Column id=\"DIET1\" type=\"STRING\" size=\"256\"/><Column id=\"DIET2\" type=\"STRING\" size=\"256\"/><Column id=\"DIET3\" type=\"STRING\" size=\"256\"/><Column id=\"DIET4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_menuTitle","2.46%","10",null,"30","3.47%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("λ©λ΄λͺ");
            obj.set_cssclass("sta_tMenuTitle");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","2.46%","52",null,null,"3.39%","5%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("50");
            obj.set_tabbuttonwidth("150");
            obj.set_showextrabutton("false");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage0",this.Tab00);
            obj.set_text("μ§μ€λ°°μ€κ΄μ°°");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("div_search","2.34%","10",null,"40","2.34%",null,null,null,null,null,this.Tab00.Tabpage0.form);
            obj.set_taborder("0");
            this.Tab00.Tabpage0.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","0","150","40",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_search.form);
            obj.set_taborder("0");
            obj.set_locale("ko_KR");
            obj.set_displaynulltext("μΌμ");
            this.Tab00.Tabpage0.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","160","0","120","40",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_displaynulltext("μΈ΅(μνμ€)");
            obj.set_text("Combo00");
            this.Tab00.Tabpage0.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","290","0","120","40",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_search.form);
            obj.set_taborder("2");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_location");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("νΈμ€");
            obj.set_text("Combo00");
            this.Tab00.Tabpage0.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","550","0","80","40",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_search.form);
            obj.set_taborder("3");
            obj.set_text("κ²μ");
            obj.set_cssclass("btn_tSearch");
            this.Tab00.Tabpage0.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_resident","420","0","120","40",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_search.form);
            obj.set_taborder("4");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_resident");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("μμμλͺ");
            obj.set_text("Combo00");
            this.Tab00.Tabpage0.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tReset",null,"0","90","40","188",null,null,null,null,null,this.Tab00.Tabpage0.form.div_search.form);
            obj.set_taborder("5");
            obj.set_text("μ΄κΈ°ν");
            obj.set_cssclass("btn_tReset");
            this.Tab00.Tabpage0.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave",null,"0","80","40","98",null,null,null,null,null,this.Tab00.Tabpage0.form.div_search.form);
            obj.set_taborder("6");
            obj.set_text("μ μ₯");
            obj.set_cssclass("btn_tSave");
            this.Tab00.Tabpage0.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tDelete",null,"0","80","40","8",null,null,null,null,null,this.Tab00.Tabpage0.form.div_search.form);
            obj.set_taborder("7");
            obj.set_text("μ­μ ");
            obj.set_cssclass("btn_tDelete");
            this.Tab00.Tabpage0.form.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","2.34%","55",null,null,"2.43%","3%",null,null,null,null,this.Tab00.Tabpage0.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.Tab00.Tabpage0.addChild(obj.name, obj);

            obj = new Static("sta_resident","0","11","100","25",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("μμμμ±λͺ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_residentVal","110","11","100","25",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("μ±λͺ(λμ΄)");
            obj.set_cssclass("sta_tTxt2");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_enterDt","214","11","80","25",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("| μμμΌ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_areaLocation","404","11","80","25",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("| μνμ€ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_areaLocatonVal","484","11","100","25",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("μΈ΅/νΈμ€");
            obj.set_cssclass("sta_tTxt2");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_date","584","11","80","25",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("| μμ±μΌ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_excretion_list","0.00%","175",null,null,"0.00%","0",null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("6");
            obj.set_cssclass("grd_DataList_h2");
            obj.set_binddataset("ds_excretion_list");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"105\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"μλ²\"/><Cell col=\"1\" rowspan=\"2\" text=\"μΌμ\"/><Cell col=\"2\" rowspan=\"2\" colspan=\"2\" text=\"μκ°\"/><Cell col=\"4\" colspan=\"3\" text=\"λ°°λ¨κ΄μ°°\"/><Cell col=\"7\" colspan=\"3\" text=\"λ°°λ³κ΄μ°°\"/><Cell col=\"10\" colspan=\"2\" text=\"κΈ°μ κ·κ΅ν\"/><Cell col=\"12\" rowspan=\"2\" text=\"μ·&#13;&#10;κ΅ν\"/><Cell row=\"1\" col=\"4\" text=\"μλ\"/><Cell row=\"1\" col=\"5\" text=\"λ€λ\"/><Cell row=\"1\" col=\"6\" text=\"μλ³λ\"/><Cell row=\"1\" col=\"7\" text=\"μ μ\"/><Cell row=\"1\" col=\"8\" text=\"μ€λ³\"/><Cell row=\"1\" col=\"9\" text=\"μ€μ¬\"/><Cell row=\"1\" col=\"10\" text=\"μΌλ°\"/><Cell row=\"1\" col=\"11\" text=\"μ€λ§νΈ\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:EXC_DT\"/><Cell col=\"2\" text=\"bind:HOUR\"/><Cell col=\"3\" text=\"bind:MIN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_minute\" combodatacol=\"CMCD\" combocodecol=\"CMCD\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:URIN_1\" checkboxtruevalue=\"2\" checkboxfalsevalue=\"0\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:URIN_2\" checkboxtruevalue=\"3\" checkboxfalsevalue=\"0\"/><Cell col=\"6\" text=\"bind:URIN_QTY\" edittype=\"mask\" maskeditformat=\"#,###\" displaytype=\"mask\" maskeditlimitbymask=\"integer\"/><Cell col=\"7\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:FECES_1\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"8\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:FECES_2\" checkboxtruevalue=\"2\" checkboxfalsevalue=\"0\"/><Cell col=\"9\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:FECES_3\" checkboxtruevalue=\"3\" checkboxfalsevalue=\"0\"/><Cell col=\"10\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:DIAPER_N\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"11\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:DIAPER_S\" checkboxtruevalue=\"2\" checkboxfalsevalue=\"0\"/><Cell col=\"12\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CLOTH\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/></Band></Format></Formats>");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_daytimeWorkerH","0","40","162","40",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("μ£Όκ°κ΄μ°°μ");
            obj.set_cssclass("sta_tDataHForm1");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_nighttimeWorkerH","575","40","162","40",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("8");
            obj.set_text("μΌκ°κ΄μ°°μ");
            obj.set_cssclass("sta_tDataHForm1");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_grd_goH","0","85","90","85",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("9");
            obj.set_text("μλ ₯ ν\r\nλ°λ‘κ°κΈ°");
            obj.set_cssclass("sta_tDataHForm1");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_grd_go0","99","85","110","85",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("10");
            obj.set_text("κΈμΌ μλ²½\r\n00μ ~ 04μ\r\nν ν΄λ¦­");
            obj.set_background("#d9d9d9");
            obj.set_cssclass("sta_tDataHForm1");
            obj.set_font("normal 700 11pt/normal \"Noto Sans KR\"");
            obj.set_color("#555555");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_grd_go4","219","85","110","85",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("11");
            obj.set_text("κΈμΌ μλ²½\r\n04μ ~ 08μ\r\nν ν΄λ¦­");
            obj.set_background("#d9d9d9");
            obj.set_cssclass("sta_tDataHForm1");
            obj.set_font("normal 700 11pt/normal \"Noto Sans KR\"");
            obj.set_color("#555555");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_grd_go9","339","85","110","85",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("12");
            obj.set_text("κΈμΌ μ£Όκ°\r\n09μ ~ 13μ\r\nν ν΄λ¦­");
            obj.set_background("#dbeef4");
            obj.set_cssclass("sta_tDataHForm1");
            obj.set_font("normal 700 11pt/normal \"Noto Sans KR\"");
            obj.set_color("#555555");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_grd_go13","459","85","110","85",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("13");
            obj.set_text("κΈμΌ μ£Όκ°\r\n13μ ~ 17μ\r\nν ν΄λ¦­");
            obj.set_background("#dbeef4");
            obj.set_cssclass("sta_tDataHForm1");
            obj.set_font("normal 700 11pt/normal \"Noto Sans KR\"");
            obj.set_color("#555555");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_grd_go18","579","85","110","85",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("14");
            obj.set_text("κΈμΌ μΌκ°\r\n18μ ~ 22μ\r\nν ν΄λ¦­");
            obj.set_background("#fdeada");
            obj.set_cssclass("sta_tDataHForm1");
            obj.set_font("normal 700 11pt/normal \"Noto Sans KR\"");
            obj.set_color("#555555");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_grd_go21","699","85","110","85",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("15");
            obj.set_text("κΈμΌ μΌκ°\r\n21μ ~ 01μ\r\nν ν΄λ¦­");
            obj.set_background("#fdeada");
            obj.set_cssclass("sta_tDataHForm1");
            obj.set_font("normal 700 11pt/normal \"Noto Sans KR\"");
            obj.set_color("#555555");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_grd_go24","819","85","110","85",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("16");
            obj.set_text("λͺμΌ μλ²½\r\n00μ ~ 04μ\r\nν ν΄λ¦­");
            obj.set_background("#fdeada");
            obj.set_cssclass("sta_tDataHForm1");
            obj.set_font("normal 700 11pt/normal \"Noto Sans KR\"");
            obj.set_color("#555555");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_grd_go28","939","85","110","85",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("17");
            obj.set_text("λͺμΌ μλ²½\r\n04μ ~ 08μ\r\nν ν΄λ¦­");
            obj.set_background("#fdeada");
            obj.set_cssclass("sta_tDataHForm1");
            obj.set_font("normal 700 11pt/normal \"Noto Sans KR\"");
            obj.set_color("#555555");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_enterDt","283","11","110","25",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("18");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px none #dbdbdb");
            obj.set_cssclass("sta_tTxt2");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_dateVal","653","11","110","25",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("19");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px none #dbdbdb");
            obj.set_cssclass("sta_tTxt2");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_daytimeWorker","171","42","250","35",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_manager");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_buttonsize("0 0");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_nighttimeWorker","745","42","250","35",null,null,null,null,null,null,this.Tab00.Tabpage0.form.div_cont.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_manager");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_buttonsize("0 0");
            this.Tab00.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("μ²΄μλ³κ²½");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("div_cont","2.52%","55",null,null,"2.43%","3%",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_grd_goH","0","50","150","110",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("μλ ₯ ν\r\n λ°λ‘κ°κΈ° ");
            obj.set_cssclass("sta_tDataHForm1");
            this.Tab00.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_grd_go0","170","50","160","110",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("μ£Όκ°\r\n08μ ~ 11μ\r\nν ν΄λ¦­");
            obj.set_background("#dbeef4");
            obj.set_cssclass("sta_tDataHForm1");
            obj.set_font("normal 700 11pt/normal \"Noto Sans KR\"");
            obj.set_color("#555555");
            this.Tab00.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_grd_go3","350","50","160","110",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("μ£Όκ°\r\n11μ ~ 14μ\r\nν ν΄λ¦­");
            obj.set_background("#dbeef4");
            obj.set_cssclass("sta_tDataHForm1");
            obj.set_font("normal 700 11pt/normal \"Noto Sans KR\"");
            obj.set_color("#555555");
            this.Tab00.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_grd_go6","530","50","160","110",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("μ£Όκ°\r\n14μ ~ 17μ\r\nν ν΄λ¦­");
            obj.set_background("#dbeef4");
            obj.set_cssclass("sta_tDataHForm1");
            obj.set_font("normal 700 11pt/normal \"Noto Sans KR\"");
            obj.set_color("#555555");
            this.Tab00.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_grd_go10","710","50","160","110",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("μΌκ°\r\n18μ ~ 00μ\r\nν ν΄λ¦­");
            obj.set_background("#fdeada");
            obj.set_cssclass("sta_tDataHForm1");
            obj.set_font("normal 700 11pt/normal \"Noto Sans KR\"");
            obj.set_color("#555555");
            this.Tab00.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_grd_go13","890","50","160","110",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("μΌκ°\r\n00μ ~ 07μ\r\nν ν΄λ¦­");
            obj.set_background("#fdeada");
            obj.set_cssclass("sta_tDataHForm1");
            obj.set_font("normal 700 11pt/normal \"Noto Sans KR\"");
            obj.set_color("#555555");
            this.Tab00.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_posture_list","0%","175",null,null,"0%","0",null,null,null,null,this.Tab00.Tabpage1.form.div_cont.form);
            obj.set_taborder("6");
            obj.set_cssclass("grd_DataList_h2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_posture_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"350\"/><Column size=\"300\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"μλ²\"/><Cell col=\"1\" text=\"μμΈλ³κ²½μΌμ\"/><Cell col=\"2\" colspan=\"3\" text=\"μμΈλ³κ²½μκ°\"/><Cell col=\"5\" text=\"λ³κ²½μμΈ\"/><Cell col=\"6\" text=\"μ²λ¦¬μ\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:POS_DT\"/><Cell col=\"2\" text=\"bind:STR1\"/><Cell col=\"3\" text=\"bind:POS_MIN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_minute\" combodatacol=\"CMCD\" combocodecol=\"CMCD\"/><Cell col=\"4\" text=\"bind:STR2\"/><Cell col=\"5\" text=\"bind:POSTURE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_nu_posture\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" comboitemheight=\"36\"/><Cell col=\"6\" text=\"bind:MANAGER_ID\" displaytype=\"combotext\" combodataset=\"ds_manager\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" comboitemheight=\"36\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_resident","0","11","100","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("μμμμ±λͺ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_residentVal","110","11","100","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_cont.form);
            obj.set_taborder("8");
            obj.set_text("μ±λͺ(λμ΄)");
            obj.set_cssclass("sta_tTxt2");
            this.Tab00.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_enterDt","214","11","80","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_cont.form);
            obj.set_taborder("9");
            obj.set_text("| μμμΌ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_enterDt","283","11","110","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_cont.form);
            obj.set_taborder("10");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px none #dbdbdb");
            obj.set_cssclass("sta_tTxt2");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            this.Tab00.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_areaLocation","404","11","80","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_cont.form);
            obj.set_taborder("11");
            obj.set_text("| μνμ€ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_areaLocatonVal","484","11","100","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_cont.form);
            obj.set_taborder("12");
            obj.set_text("μΈ΅/νΈμ€");
            obj.set_cssclass("sta_tTxt2");
            this.Tab00.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_date","584","11","80","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_cont.form);
            obj.set_taborder("13");
            obj.set_text("| μμ±μΌ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_dateVal","653","11","110","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_cont.form);
            obj.set_taborder("14");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px none #dbdbdb");
            obj.set_cssclass("sta_tTxt2");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            this.Tab00.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","2.52%","10",null,"40","2.52%",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","0","150","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_search.form);
            obj.set_taborder("0");
            obj.set_locale("ko_KR");
            obj.set_displaynulltext("μΌμ");
            this.Tab00.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","160","0","120","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_displaynulltext("μΈ΅(μνμ€)");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","290","0","120","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_search.form);
            obj.set_taborder("2");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_location");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("νΈμ€");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","550","0","80","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_search.form);
            obj.set_taborder("3");
            obj.set_text("κ²μ");
            obj.set_cssclass("btn_tSearch");
            this.Tab00.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tDelete",null,"0","80","40","0%",null,null,null,null,null,this.Tab00.Tabpage1.form.div_search.form);
            obj.set_taborder("4");
            obj.set_text("μ­μ ");
            obj.set_cssclass("btn_tDelete");
            this.Tab00.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave",null,"0","80","40","90",null,null,null,null,null,this.Tab00.Tabpage1.form.div_search.form);
            obj.set_taborder("5");
            obj.set_text("μ μ₯");
            obj.set_cssclass("btn_tSave");
            this.Tab00.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_resident","420","0","120","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_search.form);
            obj.set_taborder("6");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_resident");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("μμμλͺ");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tReset",null,"0","90","40","180",null,null,null,null,null,this.Tab00.Tabpage1.form.div_search.form);
            obj.set_taborder("7");
            obj.set_text("μ΄κΈ°ν");
            obj.set_cssclass("btn_tReset");
            this.Tab00.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("μμ¬");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("div_cont","2.52%","55",null,null,"2.43%","3%",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_fundDisB","0","50","857","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_tDataBForm2");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_fundDisH","0","50","147","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("κΈ°λ₯μ₯μ ");
            obj.set_cssclass("sta_tDataHForm4");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_fundVal1","167","61","100","20",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("μ μκ³€λ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_fundVal2","267","61","100","20",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("μ°νκ³€λ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_fundVal3","367","61","100","20",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("μνκ³€λ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_fundVal4","467","61","60","20",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("λΉλ¨");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_fundVal5","537","61","100","20",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("μκ΄μμ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_fundVal6","637","61","100","20",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("κΈ°νμ₯μ ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_dietaryCureB","0","91","857","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_tDataBForm2");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_dietaryCureH","0","91","147","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("8");
            obj.set_text("μΉλ£μμ΄");
            obj.set_cssclass("sta_tDataHForm1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dietaryVal1","167","100","110","20",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("10");
            obj.set_text("μ²΄μ€μ‘°μ μ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dietaryVal2","282","100","80","20",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("11");
            obj.set_text("λΉλ¨μ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dietaryVal3","371","100","80","20",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("12");
            obj.set_text("μ μΌμ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dietaryVal4","461","100","100","20",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("13");
            obj.set_text("κ³ λ¨λ°±μ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_managerIdB","857","50","195","81",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_tDataBForm3");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_managerIdH","857","50","195","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("14");
            obj.set_text("μ²λ¦¬μ");
            obj.set_cssclass("sta_tDataHForm3");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_managerId","870","95","170","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_manager");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_itemheight("36");
            obj.set_buttonsize("0 0");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_division","0","140","147","45",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("17");
            obj.set_text("κ΅¬λΆ");
            obj.set_cssclass("sta_tDataHForm4");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_timeH","147","140","130","45",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("18");
            obj.set_text("μκ°");
            obj.set_cssclass("sta_tDataHForm4");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_tpH","277","140","500","45",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("19");
            obj.set_text("μμ¬μ ν");
            obj.set_cssclass("sta_tDataHForm4");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_qtyH","777","140","279","45",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("20");
            obj.set_text("μμ¬λ");
            obj.set_cssclass("sta_tDataHForm3");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_breB","0","185","1055","45",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_tDataBForm3");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_breH","0","185","147","45",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("21");
            obj.set_text("μμΉ¨μμ¬");
            obj.set_cssclass("sta_tDataHForm4");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_lunB","0","231","1055","45",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_tDataBForm3");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_lunH","0","231","147","45",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("23");
            obj.set_text("μ μ¬μμ¬");
            obj.set_cssclass("sta_tDataHForm4");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_dinB","0","277","1055","45",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_tDataBForm3");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_dinH","0","277","147","45",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("25");
            obj.set_text("μ λμμ¬");
            obj.set_cssclass("sta_tDataHForm4");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_morSnackB","0","323","1055","45",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_tDataBForm3");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_morSnackH","0","323","147","45",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("27");
            obj.set_text("μ€μ κ°μ");
            obj.set_cssclass("sta_tDataHForm4");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_aftSnackB","0","369","1055","45",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_tDataBForm3");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_aftSnackH","0","369","147","45",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("29");
            obj.set_text("μ€νκ°μ");
            obj.set_cssclass("sta_tDataHForm4");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_breTime","161","191","110","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("31");
            obj.set_cssclass("medt_clock");
            obj.set_format("## : ##");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_padding("0px 0px 0px 20px");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lunTime","161","237","110","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("32");
            obj.set_cssclass("medt_clock");
            obj.set_format("## : ##");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_padding("0px 0px 0px 20px");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_dinTime","161","285","110","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("33");
            obj.set_cssclass("medt_clock");
            obj.set_format("## : ##");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_padding("0px 0px 0px 20px");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_morSnackTime","161","330","110","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("34");
            obj.set_cssclass("medt_clock");
            obj.set_format("## : ##");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_padding("0px 0px 0px 20px");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_aftSnackTime","161","375","110","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("35");
            obj.set_cssclass("medt_clock");
            obj.set_format("## : ##");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_padding("0px 0px 0px 20px");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_breTp1","286","195","80","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("36");
            obj.set_text("μΌλ°μ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_breTp2","366","195","70","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("37");
            obj.set_text("μ£½μ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_breTp3","431","195","110","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("38");
            obj.set_text("μ λΒ·κ²½κ΄μ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_breTp4","546","195","80","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("39");
            obj.set_text("κ°μμ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_breTp5","626","195","80","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("40");
            obj.set_text("λ€μ§μ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_breTp6","706","195","60","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("41");
            obj.set_text("λ―Έμ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Radio("rdo_breQty","773","195","264","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("42");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("sqRadio");
            var Tab00_Tabpage2_form_div_cont_form_rdo_breQty_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage2_form_div_cont_form_rdo_breQty_innerdataset", obj);
            Tab00_Tabpage2_form_div_cont_form_rdo_breQty_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">μ λ</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1/2 μ΄μ</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">1/2 λ―Έλ§</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage2_form_div_cont_form_rdo_breQty_innerdataset);
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_lunTp1","286","240","80","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("43");
            obj.set_text("μΌλ°μ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_lunTp2","366","240","70","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("44");
            obj.set_text("μ£½μ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_lunTp3","431","240","110","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("45");
            obj.set_text("μ λΒ·κ²½κ΄μ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_lunTp4","546","240","80","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("46");
            obj.set_text("κ°μμ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_lunTp5","626","240","80","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("47");
            obj.set_text("λ€μ§μ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_lunTp6","706","240","60","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("48");
            obj.set_text("λ―Έμ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dinTp1","286","287","80","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("49");
            obj.set_text("μΌλ°μ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dinTp2","366","287","70","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("50");
            obj.set_text("μ£½μ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dinTp3","431","287","110","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("51");
            obj.set_text("μ λΒ·κ²½κ΄μ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dinTp4","546","287","80","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("52");
            obj.set_text("κ°μμ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dinTp5","626","287","80","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("53");
            obj.set_text("λ€μ§μ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dinTp6","706","287","60","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("54");
            obj.set_text("λ―Έμ");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Radio("rdo_lunQty","773","240","264","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("55");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("sqRadio");
            var Tab00_Tabpage2_form_div_cont_form_rdo_lunQty_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage2_form_div_cont_form_rdo_lunQty_innerdataset", obj);
            Tab00_Tabpage2_form_div_cont_form_rdo_lunQty_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">μ λ</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1/2 μ΄μ</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">1/2 λ―Έλ§</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage2_form_div_cont_form_rdo_lunQty_innerdataset);
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Radio("rdo_dinQty","773","287","264","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("56");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("sqRadio");
            var Tab00_Tabpage2_form_div_cont_form_rdo_dinQty_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage2_form_div_cont_form_rdo_dinQty_innerdataset", obj);
            Tab00_Tabpage2_form_div_cont_form_rdo_dinQty_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">μ λ</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1/2 μ΄μ</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">1/2 λ―Έλ§</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage2_form_div_cont_form_rdo_dinQty_innerdataset);
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Radio("rdo_morSnackQty","773","333","264","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("57");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("sqRadio");
            var Tab00_Tabpage2_form_div_cont_form_rdo_morSnackQty_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage2_form_div_cont_form_rdo_morSnackQty_innerdataset", obj);
            Tab00_Tabpage2_form_div_cont_form_rdo_morSnackQty_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">μ λ</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1/2 μ΄μ</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">1/2 λ―Έλ§</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage2_form_div_cont_form_rdo_morSnackQty_innerdataset);
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Radio("rdo_aftSnackQty","773","380","264","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("58");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("sqRadio");
            var Tab00_Tabpage2_form_div_cont_form_rdo_aftSnackQty_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage2_form_div_cont_form_rdo_aftSnackQty_innerdataset", obj);
            Tab00_Tabpage2_form_div_cont_form_rdo_aftSnackQty_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">μ λ</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1/2 μ΄μ</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">1/2 λ―Έλ§</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage2_form_div_cont_form_rdo_aftSnackQty_innerdataset);
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_resident","0","11","100","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("59");
            obj.set_text("μμμμ±λͺ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_residentVal","110","11","100","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("60");
            obj.set_text("μ±λͺ(λμ΄)");
            obj.set_cssclass("sta_tTxt2");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_enterDt","214","11","80","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("61");
            obj.set_text("| μμμΌ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_enterDt","283","11","110","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("62");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px none #dbdbdb");
            obj.set_cssclass("sta_tTxt2");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_areaLocation","404","11","80","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("63");
            obj.set_text("| μνμ€ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_areaLocatonVal","484","11","100","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("64");
            obj.set_text("μΈ΅/νΈμ€");
            obj.set_cssclass("sta_tTxt2");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_date","584","11","80","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("65");
            obj.set_text("| μμ±μΌ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_dateVal","653","11","110","25",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_cont.form);
            obj.set_taborder("66");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px none #dbdbdb");
            obj.set_cssclass("sta_tTxt2");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            this.Tab00.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","2.43%","10",null,"40","2.43%",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","0","150","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_search.form);
            obj.set_taborder("0");
            obj.set_locale("ko_KR");
            obj.set_displaynulltext("μΌμ");
            this.Tab00.Tabpage2.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","160","0","120","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_displaynulltext("μΈ΅(μνμ€)");
            obj.set_text("Combo00");
            this.Tab00.Tabpage2.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","290","0","120","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_search.form);
            obj.set_taborder("2");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_location");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("νΈμ€");
            obj.set_text("Combo00");
            this.Tab00.Tabpage2.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","550","0","80","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_search.form);
            obj.set_taborder("3");
            obj.set_text("κ²μ");
            obj.set_cssclass("btn_tSearch");
            this.Tab00.Tabpage2.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tDelete",null,"0","80","40","0%",null,null,null,null,null,this.Tab00.Tabpage2.form.div_search.form);
            obj.set_taborder("4");
            obj.set_text("μ­μ ");
            obj.set_cssclass("btn_tDelete");
            this.Tab00.Tabpage2.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave",null,"0","80","40","90",null,null,null,null,null,this.Tab00.Tabpage2.form.div_search.form);
            obj.set_taborder("5");
            obj.set_text("μ μ₯");
            obj.set_cssclass("btn_tSave");
            this.Tab00.Tabpage2.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_resident","420","0","120","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div_search.form);
            obj.set_taborder("6");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_resident");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("μμμλͺ");
            obj.set_text("Combo00");
            this.Tab00.Tabpage2.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tReset",null,"0","90","40","180",null,null,null,null,null,this.Tab00.Tabpage2.form.div_search.form);
            obj.set_taborder("7");
            obj.set_text("μ΄κΈ°ν");
            obj.set_cssclass("btn_tReset");
            this.Tab00.Tabpage2.form.div_search.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("μλΆμ­μ·¨");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("div_cont","2.52%","55",null,null,"2.43%","3%",null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_resident","0","11","100","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("μμμμ±λͺ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_residentVal","110","11","100","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("μ±λͺ(λμ΄)");
            obj.set_cssclass("sta_tTxt2");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_enterDt","214","11","80","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("| μμμΌ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_enterDt","283","11","110","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("3");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px none #dbdbdb");
            obj.set_cssclass("sta_tTxt2");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_areaLocation","404","11","80","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("| μνμ€ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_areaLocatonVal","484","11","100","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("μΈ΅/νΈμ€");
            obj.set_cssclass("sta_tTxt2");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_date","584","11","80","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("| μμ±μΌ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_dateVal","653","11","110","25",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("7");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px none #dbdbdb");
            obj.set_cssclass("sta_tTxt2");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_wat_timeB","0","58","120","120",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_tDataBForm2");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_wat_timeH","0","58","120","40",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("8");
            obj.set_text("μκ°");
            obj.set_cssclass("sta_tDataHForm1");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_volumeB","120","58","120","120",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_tDataBForm2");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_volumeH","120","58","120","40",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("10");
            obj.set_text("μ­μ·¨λ");
            obj.set_cssclass("sta_tDataHForm1");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_water_remarkB","240","58","650","120",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_tDataBForm2");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_water_remarkH","240","58","650","40",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("12");
            obj.set_text("λΉκ³ ");
            obj.set_cssclass("sta_tDataHForm1");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_water_managerIdB","890","58","165","120",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_tDataBForm2");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_water_managerIdH","890","58","165","40",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("14");
            obj.set_text("μ²λ¦¬μ");
            obj.set_cssclass("sta_tDataHForm1");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_water_list","0","190",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("16");
            obj.set_cssclass("grd_DataList_h2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_water_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"400\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"μλ²\"/><Cell col=\"1\" text=\"μκ°\"/><Cell col=\"2\" text=\"μ­μ·¨λ\"/><Cell col=\"3\" text=\"λΉκ³ \"/><Cell col=\"4\" text=\"μ²λ¦¬μ\"/><Cell col=\"5\" expandchar=\"tEdit\"/><Cell col=\"6\" expandchar=\"tDelete\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:WAT_TIME\" displaytype=\"mask\" maskeditformat=\"## : ##\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:VOLUME\"/><Cell col=\"3\" text=\"bind:REMARK\"/><Cell col=\"4\" text=\"bind:MANAGER_ID\" displaytype=\"combotext\" combodataset=\"ds_manager\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_wat_time","8","120","100","40",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("17");
            obj.set_cssclass("medt_clock");
            obj.set_format("## : ##");
            obj.set_type("string");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_readonly("true");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_volume","133","120","95","40",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("18");
            obj.set_inputtype("number");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_water_remark","255","106","620","64",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("19");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_managerId","902","120","140","40",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_manager");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_itemheight("36");
            obj.set_buttonsize("0 0");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_tRecord_water","595","65","60","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_cont.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_tRecord");
            this.Tab00.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","2.34%","10",null,"40","2.34%",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("1");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","0","150","40",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_search.form);
            obj.set_taborder("0");
            obj.set_locale("ko_KR");
            obj.set_displaynulltext("μΌμ");
            this.Tab00.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","160","0","120","40",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_displaynulltext("μΈ΅(μνμ€)");
            obj.set_text("Combo00");
            this.Tab00.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","290","0","120","40",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_search.form);
            obj.set_taborder("2");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_location");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("νΈμ€");
            obj.set_text("Combo00");
            this.Tab00.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","550","0","80","40",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_search.form);
            obj.set_taborder("3");
            obj.set_text("κ²μ");
            obj.set_cssclass("btn_tSearch");
            this.Tab00.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave",null,"0","80","40","0",null,null,null,null,null,this.Tab00.Tabpage3.form.div_search.form);
            obj.set_taborder("4");
            obj.set_text("μ μ₯");
            obj.set_cssclass("btn_tSave");
            this.Tab00.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_resident","420","0","120","40",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div_search.form);
            obj.set_taborder("5");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_resident");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("μμμλͺ");
            obj.set_text("Combo00");
            this.Tab00.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tReset",null,"0","90","40","90",null,null,null,null,null,this.Tab00.Tabpage3.form.div_search.form);
            obj.set_taborder("6");
            obj.set_text("μ΄κΈ°ν");
            obj.set_cssclass("btn_tReset");
            this.Tab00.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("μλ©΄μν");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("div_cont","2.52%","55",null,null,"2.43%","3%",null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_resident","0","11","100","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("μμμμ±λͺ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_residentVal","110","11","100","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("μ±λͺ(λμ΄)");
            obj.set_cssclass("sta_tTxt2");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_enterDt","214","11","80","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("| μμμΌ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_enterDt","283","11","110","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("3");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px none #dbdbdb");
            obj.set_cssclass("sta_tTxt2");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_areaLocation","404","11","80","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("| μνμ€ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_areaLocatonVal","484","11","100","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("μΈ΅/νΈμ€");
            obj.set_cssclass("sta_tTxt2");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_date","584","11","80","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("| μμ±μΌ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_dateVal","653","11","110","25",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("7");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px none #dbdbdb");
            obj.set_cssclass("sta_tTxt2");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sle_timeB","0","78","120","120",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_tDataBForm2");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sleep_tpB","120","78","120","120",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_tDataBForm2");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sleep_tpH","120","78","120","40",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("11");
            obj.set_text("μλ©΄μν");
            obj.set_cssclass("sta_tDataHForm1");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sleep_remarkB","240","78","650","120",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_tDataBForm2");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_sleep_remark","255","126","620","64",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("14");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sleep_managerIdB","890","78","165","120",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_tDataBForm2");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_managerId","902","140","140","40",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_manager");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_itemheight("36");
            obj.set_buttonsize("0 0");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sle_timeH","0","78","120","40",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("8");
            obj.set_text("κΈ°μμκ°");
            obj.set_cssclass("sta_tDataHForm1");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sleep_remarkH","240","78","650","40",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("12");
            obj.set_text("λΉκ³ ");
            obj.set_cssclass("sta_tDataHForm1");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sleep_managerIdH","890","78","165","40",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("15");
            obj.set_text("μ²λ¦¬μ");
            obj.set_cssclass("sta_tDataHForm1");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_tRecord_sleep","605","85","60","24",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_tRecord");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_sleep_list","0","210",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("19");
            obj.set_cssclass("grd_DataList_h2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_sleep_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"400\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"μλ²\"/><Cell col=\"1\" text=\"κΈ°μμκ°\"/><Cell col=\"2\" text=\"μλ©΄μν\"/><Cell col=\"3\" text=\"λΉκ³ \"/><Cell col=\"4\" text=\"μ²λ¦¬μ\"/><Cell col=\"5\" expandchar=\"tEdit\"/><Cell col=\"6\" expandchar=\"tDelete\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:SLE_TIME\" displaytype=\"mask\" maskeditformat=\"## : ##\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:SLEEP_TP\" displaytype=\"combotext\" combodataset=\"ds_nu_sleep_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"3\" text=\"bind:REMARK\"/><Cell col=\"4\" text=\"bind:MANAGER_ID\" displaytype=\"combotext\" combodataset=\"ds_manager\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_sle_time","15","140","85","40",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("20");
            obj.set_format("## : ##");
            obj.set_type("string");
            obj.set_cssclass("medt_clock");
            obj.set_readonly("true");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_sleep_tp","135","140","90","40",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_cont.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_nu_sleep_tp");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            this.Tab00.Tabpage4.form.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","2.34%","10",null,"40","2.34%",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("1");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","0","150","40",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_search.form);
            obj.set_taborder("0");
            obj.set_locale("ko_KR");
            obj.set_displaynulltext("μΌμ");
            this.Tab00.Tabpage4.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","160","0","120","40",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_displaynulltext("μΈ΅(μνμ€)");
            obj.set_text("Combo00");
            this.Tab00.Tabpage4.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","290","0","120","40",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_search.form);
            obj.set_taborder("2");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_location");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("νΈμ€");
            obj.set_text("Combo00");
            this.Tab00.Tabpage4.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","550","0","80","40",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_search.form);
            obj.set_taborder("3");
            obj.set_text("κ²μ");
            obj.set_cssclass("btn_tSearch");
            this.Tab00.Tabpage4.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave",null,"0","80","40","0%",null,null,null,null,null,this.Tab00.Tabpage4.form.div_search.form);
            obj.set_taborder("4");
            obj.set_text("μ μ₯");
            obj.set_cssclass("btn_tSave");
            this.Tab00.Tabpage4.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_resident","420","0","120","40",null,null,null,null,null,null,this.Tab00.Tabpage4.form.div_search.form);
            obj.set_taborder("5");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_resident");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("μμμλͺ");
            obj.set_text("Combo00");
            this.Tab00.Tabpage4.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tReset",null,"0","90","40","90",null,null,null,null,null,this.Tab00.Tabpage4.form.div_search.form);
            obj.set_taborder("6");
            obj.set_text("μ΄κΈ°ν");
            obj.set_cssclass("btn_tReset");
            this.Tab00.Tabpage4.form.div_search.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00);
            obj.set_text("μμ/κ΄μ°°μΌμ§");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("div_cont","2.7%","55",null,null,"2.7%","4%",null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("\'");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("sta_resident","0","11","100","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("μμμμ±λͺ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_residentVal","110","11","100","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("μ±λͺ(λμ΄)");
            obj.set_cssclass("sta_tTxt2");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_enterDt","214","11","80","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("| μμμΌ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_enterDt","283","11","110","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("3");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px none #dbdbdb");
            obj.set_cssclass("sta_tTxt2");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_areaLocation","404","11","80","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("| μνμ€ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_areaLocatonVal","484","11","100","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("μΈ΅/νΈμ€");
            obj.set_cssclass("sta_tTxt2");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_date","584","11","80","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("| μμ±μΌ :");
            obj.set_cssclass("sta_tTxt1");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_dateVal","653","11","110","25",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("7");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px none #dbdbdb");
            obj.set_cssclass("sta_tTxt2");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_observe_remarkB","0","68","880","150",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_tDataBForm2");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_observe_remark","15","121","850","85",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("10");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_observe_managerIdB","880","68","165","150",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_tDataBForm2");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_managerId","892","140","140","40",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_manager");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_itemheight("36");
            obj.set_buttonsize("0 0");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_observe_remarkH","0","68","880","40",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("8");
            obj.set_text("κ΄μ°°κΈ°λ‘");
            obj.set_cssclass("sta_tDataHForm1");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_tRecord_observe1","515","75","60","24",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_tRecord");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_observe_managerIdH","880","68","165","40",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("11");
            obj.set_text("μ²λ¦¬μ");
            obj.set_cssclass("sta_tDataHForm1");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_observe_noteB","0","258","1045","150",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_tDataBForm2");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_observe_note","15","311","1015","85",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("17");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_observe_noteH","0","258","1045","40",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("15");
            obj.set_text("μμμΌμ§");
            obj.set_cssclass("sta_tDataHForm1");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_tRecord_observe2","595","265","60","24",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_cont.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_tRecord");
            this.Tab00.Tabpage5.form.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","2.34%","10",null,"40","2.34%",null,null,null,null,null,this.Tab00.Tabpage5.form);
            obj.set_taborder("1");
            this.Tab00.Tabpage5.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","0","150","40",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_search.form);
            obj.set_taborder("0");
            obj.set_locale("ko_KR");
            obj.set_displaynulltext("μΌμ");
            this.Tab00.Tabpage5.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","160","0","120","40",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_displaynulltext("μΈ΅(μνμ€)");
            obj.set_text("Combo00");
            this.Tab00.Tabpage5.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","290","0","120","40",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_search.form);
            obj.set_taborder("2");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_location");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("νΈμ€");
            obj.set_text("Combo00");
            this.Tab00.Tabpage5.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","550","0","80","40",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_search.form);
            obj.set_taborder("3");
            obj.set_text("κ²μ");
            obj.set_cssclass("btn_tSearch");
            this.Tab00.Tabpage5.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tDelete",null,"0","80","40","0%",null,null,null,null,null,this.Tab00.Tabpage5.form.div_search.form);
            obj.set_taborder("4");
            obj.set_text("μ­μ ");
            obj.set_cssclass("btn_tDelete");
            this.Tab00.Tabpage5.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave",null,"0","80","40","90",null,null,null,null,null,this.Tab00.Tabpage5.form.div_search.form);
            obj.set_taborder("5");
            obj.set_text("μ μ₯");
            obj.set_cssclass("btn_tSave");
            this.Tab00.Tabpage5.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_resident","420","0","120","40",null,null,null,null,null,null,this.Tab00.Tabpage5.form.div_search.form);
            obj.set_taborder("6");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_resident");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("μμμλͺ");
            obj.set_text("Combo00");
            this.Tab00.Tabpage5.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tReset",null,"0","90","40","180",null,null,null,null,null,this.Tab00.Tabpage5.form.div_search.form);
            obj.set_taborder("7");
            obj.set_text("μ΄κΈ°ν");
            obj.set_cssclass("btn_tReset");
            this.Tab00.Tabpage5.form.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",1180,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Tab00.Tabpage0.form.div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Tab00.Tabpage0.form.div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Tab00.Tabpage0.form.div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","Tab00.Tabpage0.form.div_search.form.cmb_resident","value","ds_search","RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Tab00.Tabpage1.form.div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Tab00.Tabpage1.form.div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Tab00.Tabpage1.form.div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Tab00.Tabpage1.form.div_search.form.cmb_resident","value","ds_search","RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Tab00.Tabpage0.form.div_cont.form.mae_enterDt","value","ds_resInfo","ENTER_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Tab00.Tabpage0.form.div_cont.form.sta_residentVal","text","ds_resInfo","NAME_AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Tab00.Tabpage0.form.div_cont.form.sta_areaLocatonVal","text","ds_resInfo","ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Tab00.Tabpage2.form.div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Tab00.Tabpage2.form.div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Tab00.Tabpage2.form.div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Tab00.Tabpage2.form.div_search.form.cmb_resident","value","ds_search","RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Tab00.Tabpage1.form.div_cont.form.sta_residentVal","text","ds_resInfo","NAME_AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Tab00.Tabpage1.form.div_cont.form.mae_enterDt","value","ds_resInfo","ENTER_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Tab00.Tabpage1.form.div_cont.form.sta_areaLocatonVal","text","ds_resInfo","ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Tab00.Tabpage2.form.div_cont.form.sta_residentVal","text","ds_resInfo","NAME_AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Tab00.Tabpage2.form.div_cont.form.mae_enterDt","value","ds_resInfo","ENTER_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Tab00.Tabpage2.form.div_cont.form.sta_areaLocatonVal","text","ds_resInfo","ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","Tab00.Tabpage2.form.div_cont.form.mae_dateVal","value","ds_meal_list","MEA_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","Tab00.Tabpage3.form.div_cont.form.sta_residentVal","text","ds_resInfo","NAME_AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","Tab00.Tabpage3.form.div_cont.form.mae_enterDt","value","ds_resInfo","ENTER_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","Tab00.Tabpage3.form.div_cont.form.sta_areaLocatonVal","text","ds_resInfo","ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","Tab00.Tabpage3.form.div_cont.form.mae_dateVal","value","ds_water_list","WAT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","Tab00.Tabpage4.form.div_cont.form.sta_residentVal","text","ds_resInfo","NAME_AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","Tab00.Tabpage4.form.div_cont.form.mae_enterDt","value","ds_resInfo","ENTER_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","Tab00.Tabpage4.form.div_cont.form.sta_areaLocatonVal","text","ds_resInfo","ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","Tab00.Tabpage4.form.div_cont.form.mae_dateVal","value","ds_sleep_list","SLE_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","Tab00.Tabpage5.form.div_cont.form.sta_residentVal","text","ds_resInfo","NAME_AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","Tab00.Tabpage5.form.div_cont.form.mae_enterDt","value","ds_resInfo","ENTER_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","Tab00.Tabpage5.form.div_cont.form.sta_areaLocatonVal","text","ds_resInfo","ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","Tab00.Tabpage3.form.div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","Tab00.Tabpage3.form.div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","Tab00.Tabpage3.form.div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","Tab00.Tabpage3.form.div_search.form.cmb_resident","value","ds_search","RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","Tab00.Tabpage4.form.div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","Tab00.Tabpage4.form.div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","Tab00.Tabpage4.form.div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","Tab00.Tabpage4.form.div_search.form.cmb_resident","value","ds_search","RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","Tab00.Tabpage5.form.div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","Tab00.Tabpage5.form.div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","Tab00.Tabpage5.form.div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","Tab00.Tabpage5.form.div_search.form.cmb_resident","value","ds_search","RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","Tab00.Tabpage5.form.div_cont.form.mae_dateVal","value","ds_observe_list","OBS_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","Tab00.Tabpage5.form.div_cont.form.txt_observe_remark","value","ds_observe_list","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","Tab00.Tabpage5.form.div_cont.form.cmb_managerId","value","ds_observe_list","MANAGER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","Tab00.Tabpage5.form.div_cont.form.txt_observe_note","value","ds_observe_list","NOTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","Tab00.Tabpage4.form.div_cont.form.txt_sleep_remark","value","ds_sleep_input","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","Tab00.Tabpage4.form.div_cont.form.cmb_managerId","value","ds_sleep_input","MANAGER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","Tab00.Tabpage4.form.div_cont.form.mae_sle_time","value","ds_sleep_input","SLE_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","Tab00.Tabpage4.form.div_cont.form.cmb_sleep_tp","value","ds_sleep_input","SLEEP_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","Tab00.Tabpage3.form.div_cont.form.mae_wat_time","value","ds_water_input","WAT_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","Tab00.Tabpage3.form.div_cont.form.edt_volume","value","ds_water_input","VOLUME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","Tab00.Tabpage3.form.div_cont.form.txt_water_remark","value","ds_water_input","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","Tab00.Tabpage3.form.div_cont.form.cmb_managerId","value","ds_water_input","MANAGER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Tab00.Tabpage0.form.div_cont.form.cmb_daytimeWorker","value","ds_excretion_temp1","DAY_MANAGER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Tab00.Tabpage0.form.div_cont.form.cmb_nighttimeWorker","value","ds_excretion_temp1","NIG_MANAGER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","Tab00.Tabpage2.form.div_cont.form.chk_fundVal1","value","ds_meal_list","FUND1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","Tab00.Tabpage2.form.div_cont.form.chk_fundVal2","value","ds_meal_list","FUND2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","Tab00.Tabpage2.form.div_cont.form.chk_fundVal3","value","ds_meal_list","FUND3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","Tab00.Tabpage2.form.div_cont.form.chk_fundVal4","value","ds_meal_list","FUND4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","Tab00.Tabpage2.form.div_cont.form.chk_fundVal5","value","ds_meal_list","FUND5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","Tab00.Tabpage2.form.div_cont.form.chk_fundVal6","value","ds_meal_list","FUND6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","Tab00.Tabpage2.form.div_cont.form.chk_dietaryVal1","value","ds_meal_list","DIET1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","Tab00.Tabpage2.form.div_cont.form.chk_dietaryVal2","value","ds_meal_list","DIET2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","Tab00.Tabpage2.form.div_cont.form.chk_dietaryVal3","value","ds_meal_list","DIET3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","Tab00.Tabpage2.form.div_cont.form.chk_dietaryVal4","value","ds_meal_list","DIET4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","Tab00.Tabpage2.form.div_cont.form.cmb_managerId","value","ds_meal_list","MANAGER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","Tab00.Tabpage2.form.div_cont.form.mae_breTime","value","ds_meal_list","BRE_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","Tab00.Tabpage2.form.div_cont.form.chk_breTp1","value","ds_meal_list","B_MEAL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","Tab00.Tabpage2.form.div_cont.form.chk_breTp2","value","ds_meal_list","B_MEAL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","Tab00.Tabpage2.form.div_cont.form.chk_breTp3","value","ds_meal_list","B_MEAL3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","Tab00.Tabpage2.form.div_cont.form.chk_breTp4","value","ds_meal_list","B_MEAL4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","Tab00.Tabpage2.form.div_cont.form.chk_breTp5","value","ds_meal_list","B_MEAL5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","Tab00.Tabpage2.form.div_cont.form.chk_breTp6","value","ds_meal_list","B_MEAL6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","Tab00.Tabpage2.form.div_cont.form.rdo_breQty","value","ds_meal_list","BRE_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","Tab00.Tabpage2.form.div_cont.form.mae_lunTime","value","ds_meal_list","LUN_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","Tab00.Tabpage2.form.div_cont.form.chk_lunTp1","value","ds_meal_list","L_MEAL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","Tab00.Tabpage2.form.div_cont.form.chk_lunTp2","value","ds_meal_list","L_MEAL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","Tab00.Tabpage2.form.div_cont.form.chk_lunTp3","value","ds_meal_list","L_MEAL3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","Tab00.Tabpage2.form.div_cont.form.chk_lunTp4","value","ds_meal_list","L_MEAL4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","Tab00.Tabpage2.form.div_cont.form.chk_lunTp5","value","ds_meal_list","L_MEAL5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","Tab00.Tabpage2.form.div_cont.form.chk_lunTp6","value","ds_meal_list","B_MEAL6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","Tab00.Tabpage2.form.div_cont.form.rdo_lunQty","value","ds_meal_list","LUN_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","Tab00.Tabpage2.form.div_cont.form.mae_dinTime","value","ds_meal_list","DIN_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","Tab00.Tabpage2.form.div_cont.form.chk_dinTp1","value","ds_meal_list","D_MEAL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","Tab00.Tabpage2.form.div_cont.form.chk_dinTp2","value","ds_meal_list","D_MEAL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","Tab00.Tabpage2.form.div_cont.form.chk_dinTp3","value","ds_meal_list","D_MEAL3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","Tab00.Tabpage2.form.div_cont.form.chk_dinTp4","value","ds_meal_list","D_MEAL4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","Tab00.Tabpage2.form.div_cont.form.chk_dinTp5","value","ds_meal_list","D_MEAL5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","Tab00.Tabpage2.form.div_cont.form.chk_dinTp6","value","ds_meal_list","D_MEAL6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","Tab00.Tabpage2.form.div_cont.form.rdo_dinQty","value","ds_meal_list","DIN_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","Tab00.Tabpage2.form.div_cont.form.mae_morSnackTime","value","ds_meal_list","MOR_SNACK_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","Tab00.Tabpage2.form.div_cont.form.rdo_morSnackQty","value","ds_meal_list","MOR_SNACK_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","Tab00.Tabpage2.form.div_cont.form.mae_aftSnackTime","value","ds_meal_list","AFT_SNACK_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","Tab00.Tabpage2.form.div_cont.form.rdo_aftSnackQty","value","ds_meal_list","AFT_SNACK_QTY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB301CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB301CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB301CT.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB301CT.xfdl", function() {
        /***********************************************************************
         * νλ©΄ID    	: NUB301CT
         * νλ©΄λͺ   	: μμμΌμ§
         * νλ©΄μ€λͺ 	: νλΈλ¦Ώ μμμλ³ μμμΌμ§ κ΄λ¦¬
         * μμ±μΌ    	: 2021-08-12
         * μμ±μ   	: μ‘°κΈ°μ’
         * μμ μ΄λ ₯ 	: βββββββ
         ***********************************************************************
         *     	μμ μΌ     	μμ μ   	λ΄μ©
         *
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
        this.fv_currentDS = "";	// νμ¬ λ°μ΄ν°μ (μ‘°νμ©)
        this.fv_inputDS = "";	// λ±λ‘, μμ μ© λ°μ΄ν°μ (λ¨μΌ)
        this.fv_currentGrid = "";	// νμ¬ κ·Έλ¦¬λ
        this.tranFlag = "";	// λ±λ‘, μμ  κ²°κ³Ό νλκ·Έ
        this.tabChangeFlag = "";	// ν­ λ³κ²½μ κ²μ νλκ·Έ
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e, false);

        	this.sta_menuTitle.set_text(this.getOwnerFrame().arguments["menuTitle"]);

        	// κ²μμ‘°κ±΄ μΈν
        	this.taSearchDataSetting(obj);

        	// μ²λ¦¬μ μ½€λ³΄
        	this.fn_setComboDs(obj);

        	// μ¨λ‘λκ° λλ¬μΌλ―λ‘ ν­ μ²΄μΈμ§μ κ²μνκ² νκΈ° μν΄ νλκ·Έ Yλ‘ μΈν
        	this.tabChangeFlag = "Y";

        	this.fn_search();
        };

        // μ²λ¦¬μ μ½€λ³΄
        this.fn_setComboDs = function(obj)
        {
        	const comboDsParamArr = [
        		{ outDsName : "ds_manager", sqlId : "NUB_COMMON.NUB_COMMON_DS_MANAGER_S", param : this.ds_search, bEmptyRow : true }
        	];
        	this.gfn_setComboDs(obj, comboDsParamArr);
        };

        // κ·Έλ¦¬λ μ»¬λΌμ μμνκΈ°
        this.fn_initGrid = function(grid)
        {
        	if(grid.id == "grd_posture_list")
        	{
        		const pMinIdx = grid.getBindCellIndex("body", "POS_MIN");
        		const pMinCss = "expr: dataset.getColumn(currow, 'POS_HOUR') < 110 ? 'blueFont' : 'orangeFont'";
        		grid.setCellProperty("body", pMinIdx, "cssclass", pMinCss);
        	}
        	else if(grid.id == "grd_excretion_list")
        	{
        		const eMinIdx = grid.getBindCellIndex("body", "MIN");
        		const eMinCss = "blueFont";
        		grid.setCellProperty("body", eMinIdx, "cssclass", eMinCss);
        	}
        };
        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // κ²μ λ²νΌ
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };

        // μ΄κΈ°ν λ²νΌ
        this.fn_resetBtn = function ()
        {
        	this.ds_search.setColumn(0, "DATE", Sct.Util.getToday()); // μ€λ
        	this.fn_search();
        };

        // μ μ₯ λ²νΌ
        this.fn_saveBtn = function ()
        {
        	this.fn_save();
        };

        // μ­μ  λ²νΌ
        this.fn_deleteBtn = function()
        {
        	this.fn_delete();
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        // κ²μ μ  validation
        this.fn_search_pre = function()
        {
        	return true;
        };

        // μ μ₯ μ  validation
        this.fn_save_pre = function()
        {
        	if(this.Tab00.tabindex != 0)
        	{
        		if(this.inputDS = "") return;

        		// μ μ₯ λ΄μ© μ²΄ν¬
        		if(!Sct.Grid.hasInsertAndUpdateRow(this.fv_inputDS))
        		{
        			Sct.alert(this, "000569", "μ μ₯");	// {0}ν  λ΄μ©μ΄ μμ΅λλ€.
        			return false;
        		}

        		// μ μ₯νμκ² μ΅λκΉ?
        		if(!Sct.confirm(this, "000038")) return false;

        		const nRow = this.fv_inputDS.rowposition;

        		if(this.fv_inputDS.getRowType(nRow) == 2) this.tranFlag = "I";
        		else if(this.fv_inputDS.getRowType(nRow) == 4) this.tranFlag = "U";
        	}
        	else
        	{
        		if(!Sct.Grid.hasInsertAndUpdateRow(this.ds_excretion_temp1) && !Sct.Grid.hasInsertAndUpdateRow(this.ds_excretion_temp2))
        		{
        			Sct.alert(this, "000569", "μ μ₯");
        			return false;
        		}

        		// μ μ₯νμκ² μ΅λκΉ?
        		if(!Sct.confirm(this, "000038")) return false;

        		this.tranFlag = "IU";
        	}
        	return true;
        };

        // μ­μ  μ  validation
        this.fn_delete_pre = function()
        {
        	let nRow;
        	if(this.Tab00.tabindex != 0)
        	{
        		// λ°μ΄ν°μ μνκ° μΆκ°μνμ΄λ©΄ μ­μ  λͺ»ν¨
        		if(this.fv_currentDS.getRowType(this.fv_currentDS.rowposition) == 2)
        		{
        			Sct.alert(this, "000569", "μ­μ ");	// {0}ν  λ΄μ©μ΄ μμ΅λλ€.
        			return false;
        		}

        		// μ­μ νμκ² μ΅λκΉ?
        		if(!Sct.confirm(this, "000083", "μ­μ ")) return false;

        		nRow = this.fv_currentDS.rowposition;
        		this.fv_currentDS.set_updatecontrol(false);
        		this.fv_currentDS.setRowType(nRow, Dataset.ROWTYPE_DELETE);
        		this.fv_currentDS.set_updatecontrol(true);
        	}
        	else
        	{
        		if(this.ds_excretion_temp1.getRowType(this.ds_excretion_temp1.rowposition) == 2)
        		{
        			Sct.alert(this, "000569", "μ­μ ");	// {0}ν  λ΄μ©μ΄ μμ΅λλ€.
        			return false;
        		}

        		// μ­μ νμκ² μ΅λκΉ?
        		if(!Sct.confirm(this, "000083", "μ­μ ")) return false;

        		nRow = this.ds_excretion_temp1.rowposition;
        		this.ds_excretion_temp1.set_updatecontrol(false);
        		this.ds_excretion_temp1.setRowType(nRow, Dataset.ROWTYPE_DELETE);
        		this.ds_excretion_temp1.set_updatecontrol(true);
        	}

        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // κ²μ
        this.fn_search = function()
        {
        	if(!this.fn_search_pre()) return;

        	let svcId = "";
        	let inDatasets = "input1=ds_search input2=ds_search";
        	let outDatasets = this.fv_currentDS.name + "=output1 ds_resInfo=output2";
        	let argument = "method=getList ";

        	// μμ/κ΄μ°°μΌμ§ κ²μ
        	if(this.Tab00.tabindex == 5)
        	{
        		svcId = "observeSearch";
        		argument += "sqlId='NUB301CT.NUB301CT_DS_OBSERVE_LIST_S NUB_COMMON.NUB_COMMON_DS_RESINFO_S'";
        	}
        	// μλ©΄μν κ²μ
        	else if(this.Tab00.tabindex == 4)
        	{
        		svcId = "sleepSearch";
        		argument += "sqlId='NUB301CT.NUB301CT_DS_SLEEP_LIST_S NUB_COMMON.NUB_COMMON_DS_RESINFO_S'";
        	}
        	// μλΆμ­μ·¨ κ²μ
        	else if(this.Tab00.tabindex == 3)
        	{
        		svcId = "waterSearch";
        		argument += "sqlId='NUB301CT.NUB301CT_DS_WATER_LIST_S NUB_COMMON.NUB_COMMON_DS_RESINFO_S'";
        	}
        	// μμ¬ κ²μ
        	else if(this.Tab00.tabindex == 2)
        	{
        		svcId = "mealSearch";
        		inDatasets = "input1=ds_search input2=ds_search input3=ds_search";
        		outDatasets = "ds_meal_list=output1 ds_meal_resident=output2 ds_resInfo=output3";
        		argument += "sqlId='NUB301CT.NUB301CT_DS_MEAL_LIST_S NUB301CT.NUB301CT_DS_MEAL_RESIDENT_S NUB_COMMON.NUB_COMMON_DS_RESINFO_S'";
        	}
        	// μ²΄μλ³κ²½ κ²μ
        	else if(this.Tab00.tabindex == 1)
        	{
        		svcId = "postureSearch";
        		argument += "sqlId='NUB301CT.NUB301CT_DS_POSTURE_LIST_S NUB_COMMON.NUB_COMMON_DS_RESINFO_S'";
        	}
        	// μ§μ€λ°°μ€κ΄μ°° κ²μ
        	else if(this.Tab00.tabindex == 0)
        	{
        		svcId = "excretionSearch";
        		argument += "sqlId='NUB301CT.NUB301CT_DS_EXCRETION_TEMP1_S NUB301CT.NUB301CT_DS_EXCRETION_TEMP2_S NUB_COMMON.NUB_COMMON_DS_RESINFO_S'";
        		inDatasets = "input1=ds_search input2=ds_search input3=ds_search";
        		outDatasets = "ds_excretion_temp1=output1 ds_excretion_temp2=output2 ds_resInfo=output3";
        	}

        	const params = "/commonController.do";
        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // μ μ₯
        this.fn_save = function()
        {
        	if(!this.fn_save_pre()) return;

        	let inDs;
        	if(this.Tab00.tabindex != 0)
        	{
        		inDs = this.fv_inputDS.name;
        	}
        	// μ§μ€λ°°μ€κ΄μ°°
        	else
        	{
        		inDs = "ds_excretion_temp1,ds_excretion_temp2";
        	}

        	const svcId = "save";
        	this.fn_save_com(svcId, inDs);
        };

        // μ­μ 
        this.fn_delete = function()
        {
        	if(!this.fn_delete_pre()) return;

        	let inDatasets = "input1=" + this.fv_currentDS.name + ":U";
        	let argument = "method=delete ";

        	if(this.Tab00.tabindex == 5)
        	{
        		argument += "sqlId=NUB301CT.NUB301CT_DS_OBSERVE_LIST_D ";
        	}
        	else if(this.Tab00.tabindex == 4)
        	{
        		argument += "sqlId=NUB301CT.NUB301CT_DS_SLEEP_LIST_D ";
        	}
        	else if(this.Tab00.tabindex == 3)
        	{
        		argument += "sqlId=NUB301CT.NUB301CT_DS_WATER_LIST_D ";
        	}
        	else if(this.Tab00.tabindex == 2)
        	{
        		argument += "sqlId=NUB301CT.NUB301CT_DS_MEAL_LIST_D";
        	}
        	else if(this.Tab00.tabindex == 1)
        	{
        		argument += "sqlId=NUB301CT.NUB301CT_DS_POSTURE_LIST_D ";
        	}
        	else if(this.Tab00.tabindex == 0)
        	{
        		inDatasets = "input1=ds_excretion_temp1:U";
        		argument += "sqlId=NUB301CT.NUB301CT_DS_EXCRETION_D ";
        	}

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const outDatasets = "";
        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // μ½λ°±
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	let nRow;
        	if (nErrorCode == 0)
        	{
        		// κ²μμ‘°κ±΄ μ μ§λ₯Ό μν΄ κΈλ‘λ² λ°μ΄ν°μμ μ‘°κ±΄ μΈν
        		nexacro.getApplication().gds_taCurRes.setColumn(0, "AREA", this.ds_resInfo.getColumn(0,"AREA"));
        		nexacro.getApplication().gds_taCurRes.setColumn(0, "LOCATION", this.ds_resInfo.getColumn(0,"LOCATION"));
        		nexacro.getApplication().gds_taCurRes.setColumn(0, "RES_ID", this.ds_resInfo.getColumn(0,"RES_ID"));

        		// μμ/κ΄μ°°μΌμ§ κ²μ μ½λ°±
        		if(strSvcID == "observeSearch")
        		{
        			// κ²μκ²°κ³Όκ° μμκ²½μ°
        			if(this.ds_observe_list.rowcount < 1)
        			{
        				// νμΆκ°
        				nRow = this.ds_observe_list.addRow();
        				// μ΄κΈ°ν
        				this.ds_observe_list.setColumn(nRow, "COMPANY_CD", this.ds_search.getColumn(0, "COMPANY_CD"));
        				this.ds_observe_list.setColumn(nRow, "RES_ID", this.ds_search.getColumn(0, "RES_ID"));

        				// μ²λ¦¬μμ μ μμ μΈν
        				this.ds_observe_list.setColumn(nRow, "MANAGER_ID", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID"));
        			}
        			else
        			{
        				// μ²λ¦¬μμ μ μμ μΈν
        				this.ds_observe_list.setColumn(0, "MANAGER_ID", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID"));
        			}
        		}
        		// μλ©΄μν κ²μ μ½λ°±
        		else if(strSvcID == "sleepSearch")
        		{
        			this.ds_sleep_input.clearData();
        			nRow = this.ds_sleep_input.addRow();
        			// μ΄κΈ°ν
        			this.ds_sleep_input.setColumn(nRow, "COMPANY_CD", this.ds_search.getColumn(0, "COMPANY_CD"));
        			this.ds_sleep_input.setColumn(nRow, "RES_ID", this.ds_search.getColumn(0, "RES_ID"));

        			// μ²λ¦¬μμ μ μμ μΈν
        			this.ds_sleep_input.setColumn(nRow, "MANAGER_ID", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID"));
        		}
        		// μλΆμ­μ·¨ κ²μ μ½λ°±
        		else if(strSvcID == "waterSearch")
        		{
        			this.ds_water_input.clearData();
        			nRow = this.ds_water_input.addRow();
        			// μ΄κΈ°ν
        			this.ds_water_input.setColumn(nRow, "COMPANY_CD", this.ds_search.getColumn(0, "COMPANY_CD"));
        			this.ds_water_input.setColumn(nRow, "RES_ID", this.ds_search.getColumn(0, "RES_ID"));

        			// μ²λ¦¬μμ μ μμ μΈν
        			this.ds_water_input.setColumn(nRow, "MANAGER_ID", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID"));
        		}
        		// μμ¬ κ²μ μ½λ°±
        		else if(strSvcID == "mealSearch")
        		{
        			// κ²μκ²°κ³Όκ° μμκ²½μ°
        			if(this.ds_meal_list.rowcount < 1)
        			{
        				// μ΄κΈ°ν
        				nRow = this.ds_meal_list.addRow();
        				this.ds_meal_list.setColumn(nRow, "COMPANY_CD", this.ds_search.getColumn(0, "COMPANY_CD"));
        				this.ds_meal_list.setColumn(nRow, "RES_ID", this.ds_search.getColumn(0, "RES_ID"));

        				// μμ¬μκ°
        				this.ds_meal_list.setColumn(nRow, "BRE_TIME", this.ds_meal_resident.getColumn(0, "BRE_FR_TIME"));
        				this.ds_meal_list.setColumn(nRow, "LUN_TIME", this.ds_meal_resident.getColumn(0, "LUN_FR_TIME"));
        				this.ds_meal_list.setColumn(nRow, "DIN_TIME", this.ds_meal_resident.getColumn(0, "DIN_FR_TIME"));
        				this.ds_meal_list.setColumn(nRow, "MOR_SNACK_TIME", this.ds_meal_resident.getColumn(0, "MOR_SNACK_TIME"));
        				this.ds_meal_list.setColumn(nRow, "AFT_SNACK_TIME", this.ds_meal_resident.getColumn(0, "AFT_SNACK_TIME"));

        				// κΈ°λ₯μ₯μ 
        				this.ds_meal_list.setColumn(nRow, "FUND1", this.ds_meal_resident.getColumn(0, "FUNC1"));
        				this.ds_meal_list.setColumn(nRow, "FUND2", this.ds_meal_resident.getColumn(0, "FUNC2"));
        				this.ds_meal_list.setColumn(nRow, "FUND3", this.ds_meal_resident.getColumn(0, "FUNC3"));
        				this.ds_meal_list.setColumn(nRow, "FUND4", this.ds_meal_resident.getColumn(0, "FUNC4"));
        				this.ds_meal_list.setColumn(nRow, "FUND5", this.ds_meal_resident.getColumn(0, "FUNC5"));
        				this.ds_meal_list.setColumn(nRow, "FUND6", this.ds_meal_resident.getColumn(0, "FUNC6"));

        				// μΉλ£μμ΄
        				this.ds_meal_list.setColumn(nRow, "DIET1", this.ds_meal_resident.getColumn(0, "DIET1"));
        				this.ds_meal_list.setColumn(nRow, "DIET2", this.ds_meal_resident.getColumn(0, "DIET2"));
        				this.ds_meal_list.setColumn(nRow, "DIET3", this.ds_meal_resident.getColumn(0, "DIET3"));
        				this.ds_meal_list.setColumn(nRow, "DIET4", this.ds_meal_resident.getColumn(0, "DIET4"));

        				// μμΉ¨μμ¬
        				this.ds_meal_list.setColumn(nRow, "B_MEAL1", this.ds_meal_resident.getColumn(0, "FOOD1"));
        				this.ds_meal_list.setColumn(nRow, "B_MEAL2", this.ds_meal_resident.getColumn(0, "FOOD2"));
        				this.ds_meal_list.setColumn(nRow, "B_MEAL3", this.ds_meal_resident.getColumn(0, "FOOD3"));
        				this.ds_meal_list.setColumn(nRow, "B_MEAL4", this.ds_meal_resident.getColumn(0, "FOOD4"));
        				this.ds_meal_list.setColumn(nRow, "B_MEAL5", this.ds_meal_resident.getColumn(0, "FOOD5"));
        				this.ds_meal_list.setColumn(nRow, "B_MEAL6", this.ds_meal_resident.getColumn(0, "FOOD6"));

        				// μ μ¬μμ¬
        				this.ds_meal_list.setColumn(nRow, "L_MEAL1", this.ds_meal_resident.getColumn(0, "FOOD1"));
        				this.ds_meal_list.setColumn(nRow, "L_MEAL2", this.ds_meal_resident.getColumn(0, "FOOD2"));
        				this.ds_meal_list.setColumn(nRow, "L_MEAL3", this.ds_meal_resident.getColumn(0, "FOOD3"));
        				this.ds_meal_list.setColumn(nRow, "L_MEAL4", this.ds_meal_resident.getColumn(0, "FOOD4"));
        				this.ds_meal_list.setColumn(nRow, "L_MEAL5", this.ds_meal_resident.getColumn(0, "FOOD5"));
        				this.ds_meal_list.setColumn(nRow, "L_MEAL6", this.ds_meal_resident.getColumn(0, "FOOD6"));

        				// μ λμμ¬
        				this.ds_meal_list.setColumn(nRow, "D_MEAL1", this.ds_meal_resident.getColumn(0, "FOOD1"));
        				this.ds_meal_list.setColumn(nRow, "D_MEAL2", this.ds_meal_resident.getColumn(0, "FOOD2"));
        				this.ds_meal_list.setColumn(nRow, "D_MEAL3", this.ds_meal_resident.getColumn(0, "FOOD3"));
        				this.ds_meal_list.setColumn(nRow, "D_MEAL4", this.ds_meal_resident.getColumn(0, "FOOD4"));
        				this.ds_meal_list.setColumn(nRow, "D_MEAL5", this.ds_meal_resident.getColumn(0, "FOOD5"));
        				this.ds_meal_list.setColumn(nRow, "D_MEAL6", this.ds_meal_resident.getColumn(0, "FOOD6"));

        				// μ²λ¦¬μμ μ μμ μΈν
        				this.ds_meal_list.setColumn(nRow, "MANAGER_ID", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID"));
        			}
        		}
        		// μ²΄μλ³κ²½ κ²μ μ½λ°±
        		else if(strSvcID == "postureSearch")
        		{
        			this.ds_posture_list.set_updatecontrol(false);
        			for(let i = 0; i < this.ds_posture_list.rowcount; i++)
        			{
        				if(this.ds_posture_list.getColumn(i, "STATUS") == "I")
        				{
        					this.ds_posture_list.setRowType(i, Dataset.ROWTYPE_INSERT);
        					this.Tab00.Tabpage1.form.div_cont.form.mae_dateVal.set_value("");
        				}
        			}
        			this.ds_posture_list.set_updatecontrol(true);
        			if(this.ds_posture_list.getColumn(0, "STATUS") == "U")
        			{
        				this.Tab00.Tabpage1.form.div_cont.form.mae_dateVal.set_value(this.ds_posture_list.getColumn(0, "SEARCH_DT"));
        			}
        			this.fn_initGrid(this.fv_currentGrid);
        		}
        		// μ§μ€λ°°λ³κ΄μ°° κ²μ μ½λ°±
        		else if(strSvcID == "excretionSearch")
        		{
        			this.ds_excretion_list.clearData();
        			let nRow;
        			const searchDay = this.ds_search.getColumn(0, "DATE");
        			const nextDay = Sct.Util.addDate(searchDay, 1);
        			// λΉμΌ κ²μκ²°κ³Όκ° μμ κ²½μ°
        			if(this.ds_excretion_temp1.rowcount < 1)
        			{
        				// λΉμΌ λ°μ΄ν°μ μ΄κΈ°ν
        				const temp1nRow = this.ds_excretion_temp1.addRow();
        				this.ds_excretion_temp1.setColumn(temp1nRow, "COMPANY_CD", this.ds_search.getColumn(0, "COMPANY_CD"));
        				this.ds_excretion_temp1.setColumn(temp1nRow, "EXC_DT", searchDay);
        				this.ds_excretion_temp1.setColumn(temp1nRow, "RES_ID", this.ds_search.getColumn(0, "RES_ID"));
        				this.ds_excretion_temp1.setColumn(temp1nRow, "EXC_TIME", "000000000000000000000000000000000000000000000000");	// κ΄μ°°λΆ (48μλ¦¬)
        				this.ds_excretion_temp1.setColumn(temp1nRow, "URIN_OBS", "000000000000000000000000");	// λ°°λ¨κ΄μ°° (24μλ¦¬)
        				this.ds_excretion_temp1.setColumn(temp1nRow, "FECES_OBS", "000000000000000000000000");	// λ°°λ³κ΄μ°° (24μλ¦¬)
        				this.ds_excretion_temp1.setColumn(temp1nRow, "DIAPER_CHG", "000000000000000000000000");	// κΈ°μ κ·κ΅ν (24μλ¦¬)
        				this.ds_excretion_temp1.setColumn(temp1nRow, "CLOTH_CHG", "000000000000000000000000");	// μ·κ΅ν (24μλ¦¬)
        				this.ds_excretion_temp1.setColumn(temp1nRow, "URIN_QTY", "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"); // μλ³λ (96μλ¦¬)

        				// κ·Έλ¦¬λμ κ·Έλ¦¬λ μλ ν₯μμ μνμ¬ μ΄λ²€νΈ μ€μ§
        				this.fv_currentGrid.set_enableevent(false);
        				this.fv_currentGrid.set_enableredraw(false);
        				this.ds_excretion_list.set_enableevent(false);

        				// κ·Έλ¦¬λμ λ°μ΄ν° μΆκ°
        				for(let i = 0; i < 24; i++)
        				{
        					nRow = this.ds_excretion_list.addRow();
        					// μ΄κΈ°ν
        					this.ds_excretion_list.setColumn(nRow, "EXC_DT", searchDay);
        					if(i < 10)
        					{
        						this.ds_excretion_list.setColumn(nRow, "HOUR", "0" + i + " : ");
        					}
        					else
        					{
        						this.ds_excretion_list.setColumn(nRow, "HOUR", i + " : ");
        					}
        					this.ds_excretion_list.setColumn(nRow, "MIN", "00");
        					this.ds_excretion_list.setColumn(nRow, "URIN_1", 0);
        					this.ds_excretion_list.setColumn(nRow, "URIN_2", 0);
        					this.ds_excretion_list.setColumn(nRow, "FECES_1", 0);
        					this.ds_excretion_list.setColumn(nRow, "FECES_2", 0);
        					this.ds_excretion_list.setColumn(nRow, "FECES_3", 0);
        					this.ds_excretion_list.setColumn(nRow, "DIAPER_N", 0);
        					this.ds_excretion_list.setColumn(nRow, "DIAPER_S", 0);
        					this.ds_excretion_list.setColumn(nRow, "CLOTH", 0);
        				}

        				// λ€ κ·Έλ ΈμΌλ―λ‘ μ΄λ²€νΈ λ€μ νμ±ν
        				this.fv_currentGrid.set_enableevent(true);
        				this.fv_currentGrid.set_enableredraw(true);
        				this.ds_excretion_list.set_enableevent(true);
        			}
        			// λΉμΌ κ²μκ²°κ³Όκ° μλκ²½μ°
        			else
        			{
        				let j = 0;	// String μλ₯΄κΈ°μ© λ³μ 2μΉΈμ© μλ¦
        				let k = 0;	// String μλ₯΄κΈ°μ© λ³μ 1μΉΈμ© μλ¦
        				let l = 0;	// String μλ₯΄κΈ°μ© λ³μ 4μΉΈμ© μλ¦

        				// κ·Έλ¦¬λμ κ·Έλ¦¬λ μλ ν₯μμ μνμ¬ μ΄λ²€νΈ μ€μ§
        				this.fv_currentGrid.set_enableevent(false);
        				this.fv_currentGrid.set_enableredraw(false);
        				this.ds_excretion_list.set_enableevent(false);

        				// κ·Έλ¦¬λμ λ°μ΄ν° μΆκ°
        				for(let i = 0; i < 24; i++)
        				{
        					nRow = this.ds_excretion_list.addRow();
        					const excTime = this.ds_excretion_temp1.getColumn(0, "EXC_TIME");
        					const urinObs = this.ds_excretion_temp1.getColumn(0, "URIN_OBS");
        					const urinOvalue = urinObs.substr(k, 1);
        					const urinQty = this.ds_excretion_temp1.getColumn(0, "URIN_QTY");
        					const urinQsub = urinQty.substr(l, 4);
        					const urinQvalue = urinQsub.replace(/(^0+)/, "");
        					const fecesObs = this.ds_excretion_temp1.getColumn(0, "FECES_OBS");
        					const fecesOvalue = fecesObs.substr(k, 1);
        					const diaperChg = this.ds_excretion_temp1.getColumn(0, "DIAPER_CHG");
        					const diaperCvalue = diaperChg.substr(k, 1);
        					const clothChg = this.ds_excretion_temp1.getColumn(0, "CLOTH_CHG");
        					const clothCvalue = clothChg.substr(k, 1);

        					this.ds_excretion_list.setColumn(nRow, "EXC_DT", searchDay);
        					if(i < 10)
        					{
        						this.ds_excretion_list.setColumn(nRow, "HOUR", "0" + i + " : ");
        					}
        					else
        					{
        						this.ds_excretion_list.setColumn(nRow, "HOUR", i + " : ");
        					}
        					this.ds_excretion_list.setColumn(nRow, "MIN", excTime.substr(j, 2));
        					switch(urinOvalue)
        					{
        						case "2":
        							this.ds_excretion_list.setColumn(nRow, "URIN_1", urinOvalue);
        							this.ds_excretion_list.setColumn(nRow, "URIN_2", 0);
        							break;
        						case "3":
        							this.ds_excretion_list.setColumn(nRow, "URIN_1", 0);
        							this.ds_excretion_list.setColumn(nRow, "URIN_2", urinOvalue);
        							break;
        						default:
        							this.ds_excretion_list.setColumn(nRow, "URIN_1", 0);
        							this.ds_excretion_list.setColumn(nRow, "URIN_2", 0);
        							break;
        					}
        					this.ds_excretion_list.setColumn(nRow, "URIN_QTY", urinQvalue);
        					switch(fecesOvalue)
        					{
        						case "1":
        							this.ds_excretion_list.setColumn(nRow, "FECES_1", fecesOvalue);
        							this.ds_excretion_list.setColumn(nRow, "FECES_2", 0);
        							this.ds_excretion_list.setColumn(nRow, "FECES_3", 0);
        							break;
        						case "2":
        							this.ds_excretion_list.setColumn(nRow, "FECES_1", 0);
        							this.ds_excretion_list.setColumn(nRow, "FECES_2", fecesOvalue);
        							this.ds_excretion_list.setColumn(nRow, "FECES_3", 0);
        							break;
        						case "3":
        							this.ds_excretion_list.setColumn(nRow, "FECES_1", 0);
        							this.ds_excretion_list.setColumn(nRow, "FECES_2", 0);
        							this.ds_excretion_list.setColumn(nRow, "FECES_3", fecesOvalue);
        							break;
        						default:
        							this.ds_excretion_list.setColumn(nRow, "FECES_1", 0);
        							this.ds_excretion_list.setColumn(nRow, "FECES_2", 0);
        							this.ds_excretion_list.setColumn(nRow, "FECES_3", 0);
        							break;
        					}
        					switch(diaperCvalue)
        					{
        						case "1":
        							this.ds_excretion_list.setColumn(nRow, "DIAPER_N", diaperCvalue);
        							this.ds_excretion_list.setColumn(nRow, "DIAPER_S", 0);
        							break;
        						case "2":
        							this.ds_excretion_list.setColumn(nRow, "DIAPER_N", 0);
        							this.ds_excretion_list.setColumn(nRow, "DIAPER_S", diaperCvalue);
        							break;
        						default:
        							this.ds_excretion_list.setColumn(nRow, "DIAPER_N", 0);
        							this.ds_excretion_list.setColumn(nRow, "DIAPER_S", 0);
        					}
        					this.ds_excretion_list.setColumn(nRow, "CLOTH", clothCvalue);
        					j += 2;
        					k++;
        					l += 4;
        				}
        				this.Tab00.Tabpage0.form.div_cont.form.mae_dateVal.set_value(searchDay);

        				// λ€ κ·Έλ ΈμΌλ―λ‘ μ΄λ²€νΈ λ€μ νμ±ν
        				this.fv_currentGrid.set_enableevent(true);
        				this.fv_currentGrid.set_enableredraw(true);
        				this.ds_excretion_list.set_enableevent(true);
        			}
        			// λͺμΌ κ²μκ²°κ³Όκ° μλκ²½μ°
        			if(this.ds_excretion_temp2.rowcount < 1)
        			{
        				// λͺμΌ λ°μ΄ν°μ μ΄κΈ°ν
        				const temp2nRow = this.ds_excretion_temp2.addRow();
        				this.ds_excretion_temp2.setColumn(temp2nRow, "COMPANY_CD", this.ds_search.getColumn(0, "COMPANY_CD"));
        				this.ds_excretion_temp2.setColumn(temp2nRow, "EXC_DT", nextDay);
        				this.ds_excretion_temp2.setColumn(temp2nRow, "RES_ID", this.ds_search.getColumn(0, "RES_ID"));
        				this.ds_excretion_temp2.setColumn(temp2nRow, "EXC_TIME", "000000000000000000000000000000000000000000000000");	// κ΄μ°°λΆ (48μλ¦¬)
        				this.ds_excretion_temp2.setColumn(temp2nRow, "URIN_OBS", "000000000000000000000000");	// λ°°λ¨κ΄μ°° (24μλ¦¬)
        				this.ds_excretion_temp2.setColumn(temp2nRow, "FECES_OBS", "000000000000000000000000");	// λ°°λ³κ΄μ°° (24μλ¦¬)
        				this.ds_excretion_temp2.setColumn(temp2nRow, "DIAPER_CHG", "000000000000000000000000");	// κΈ°μ κ·κ΅ν (24μλ¦¬)
        				this.ds_excretion_temp2.setColumn(temp2nRow, "CLOTH_CHG", "000000000000000000000000");	// μ·κ΅ν (24μλ¦¬)
        				this.ds_excretion_temp2.setColumn(temp2nRow, "URIN_QTY", "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"); // μλ³λ (96μλ¦¬)

        				// κ·Έλ¦¬λμ κ·Έλ¦¬λ μλ ν₯μμ μνμ¬ μ΄λ²€νΈ μ€μ§
        				this.fv_currentGrid.set_enableevent(false);
        				this.fv_currentGrid.set_enableredraw(false);
        				this.ds_excretion_list.set_enableevent(false);

        				// κ·Έλ¦¬λμ λ°μ΄ν° μΆκ°
        				for(let i = 0; i < 9; i++)
        				{
        					nRow = this.ds_excretion_list.addRow();
        					// μ΄κΈ°ν
        					this.ds_excretion_list.setColumn(nRow, "EXC_DT", nextDay);
        					this.ds_excretion_list.setColumn(nRow, "HOUR", "0" + i + " : ");
        					this.ds_excretion_list.setColumn(nRow, "MIN", "00");
        					this.ds_excretion_list.setColumn(nRow, "URIN_1", 0);
        					this.ds_excretion_list.setColumn(nRow, "URIN_2", 0);
        					this.ds_excretion_list.setColumn(nRow, "FECES_1", 0);
        					this.ds_excretion_list.setColumn(nRow, "FECES_2", 0);
        					this.ds_excretion_list.setColumn(nRow, "FECES_3", 0);
        					this.ds_excretion_list.setColumn(nRow, "DIAPER_N", 0);
        					this.ds_excretion_list.setColumn(nRow, "DIAPER_S", 0);
        					this.ds_excretion_list.setColumn(nRow, "CLOTH", 0);
        				}

        				// λ€ κ·Έλ ΈμΌλ―λ‘ μ΄λ²€νΈ λ€μ νμ±ν
        				this.fv_currentGrid.set_enableevent(true);
        				this.fv_currentGrid.set_enableredraw(true);
        				this.ds_excretion_list.set_enableevent(true);
        			}
        			// λͺμΌ κ²μκ²°κ³Όκ° μλκ²½μ°
        			else
        			{
        				let j = 0;
        				let k = 0;
        				let l = 0;

        				// κ·Έλ¦¬λμ κ·Έλ¦¬λ μλ ν₯μμ μνμ¬ μ΄λ²€νΈ μ€μ§
        				this.fv_currentGrid.set_enableevent(false);
        				this.fv_currentGrid.set_enableredraw(false);
        				this.ds_excretion_list.set_enableevent(false);

        				// κ·Έλ¦¬λμ λ°μ΄ν° μΆκ°
        				for(let i = 0; i < 9; i++)
        				{
        					nRow = this.ds_excretion_list.addRow();
        					const excTime2 = this.ds_excretion_temp2.getColumn(0, "EXC_TIME");
        					const urinObs2 = this.ds_excretion_temp2.getColumn(0, "URIN_OBS");
        					const urinOvalue2 = urinObs2.substr(k, 1);
        					const urinQty2 = this.ds_excretion_temp2.getColumn(0, "URIN_QTY");
        					const urinQsub2 = urinQty2.substr(l, 4);
        					const urinQvalue2 = urinQsub2.replace(/(^0+)/, "");
        					const fecesObs2 = this.ds_excretion_temp2.getColumn(0, "FECES_OBS");
        					const fecesOvalue2 = fecesObs2.substr(k, 1);
        					const diaperChg2 = this.ds_excretion_temp2.getColumn(0, "DIAPER_CHG");
        					const diaperCvalue2 = diaperChg2.substr(k, 1);
        					const clothChg2 = this.ds_excretion_temp2.getColumn(0, "CLOTH_CHG");
        					const clothCvalue2 = clothChg2.substr(k, 1);

        					this.ds_excretion_list.setColumn(nRow, "EXC_DT", nextDay);
        					this.ds_excretion_list.setColumn(nRow, "HOUR", "0" + i + " : ");
        					this.ds_excretion_list.setColumn(nRow, "MIN", excTime2.substr(j, 2));
        					switch(urinOvalue2)
        					{
        						case "2":
        							this.ds_excretion_list.setColumn(nRow, "URIN_1", urinOvalue2);
        							this.ds_excretion_list.setColumn(nRow, "URIN_2", 0);
        							break;
        						case "3":
        							this.ds_excretion_list.setColumn(nRow, "URIN_1", 0);
        							this.ds_excretion_list.setColumn(nRow, "URIN_2", urinOvalue2);
        							break;
        						default:
        							this.ds_excretion_list.setColumn(nRow, "URIN_1", 0);
        							this.ds_excretion_list.setColumn(nRow, "URIN_2", 0);
        							break;
        					}
        					this.ds_excretion_list.setColumn(nRow, "URIN_QTY", urinQvalue2);
        					switch(fecesOvalue2)
        					{
        						case "1":
        							this.ds_excretion_list.setColumn(nRow, "FECES_1", fecesOvalue2);
        							this.ds_excretion_list.setColumn(nRow, "FECES_2", 0);
        							this.ds_excretion_list.setColumn(nRow, "FECES_3", 0);
        							break;
        						case "2":
        							this.ds_excretion_list.setColumn(nRow, "FECES_1", 0);
        							this.ds_excretion_list.setColumn(nRow, "FECES_2", fecesOvalue2);
        							this.ds_excretion_list.setColumn(nRow, "FECES_3", 0);
        							break;
        						case "3":
        							this.ds_excretion_list.setColumn(nRow, "FECES_1", 0);
        							this.ds_excretion_list.setColumn(nRow, "FECES_2", 0);
        							this.ds_excretion_list.setColumn(nRow, "FECES_3", fecesOvalue2);
        							break;
        						default:
        							this.ds_excretion_list.setColumn(nRow, "FECES_1", 0);
        							this.ds_excretion_list.setColumn(nRow, "FECES_2", 0);
        							this.ds_excretion_list.setColumn(nRow, "FECES_3", 0);
        							break;
        					}
        					switch(diaperCvalue2)
        					{
        						case "1":
        							this.ds_excretion_list.setColumn(nRow, "DIAPER_N", diaperCvalue2);
        							this.ds_excretion_list.setColumn(nRow, "DIAPER_S", 0);
        							break;
        						case "2":
        							this.ds_excretion_list.setColumn(nRow, "DIAPER_N", 0);
        							this.ds_excretion_list.setColumn(nRow, "DIAPER_S", diaperCvalue2);
        							break;
        						default:
        							this.ds_excretion_list.setColumn(nRow, "DIAPER_N", 0);
        							this.ds_excretion_list.setColumn(nRow, "DIAPER_S", 0);
        					}
        					this.ds_excretion_list.setColumn(nRow, "CLOTH", clothCvalue2);
        					j += 2;
        					k++;
        					l += 4;
        				}

        				// λ€ κ·Έλ ΈμΌλ―λ‘ μ΄λ²€νΈ λ€μ νμ±ν
        				this.fv_currentGrid.set_enableevent(true);
        				this.fv_currentGrid.set_enableredraw(true);
        				this.ds_excretion_list.set_enableevent(true);
        			}
        			this.fn_initGrid(this.fv_currentGrid);
        			this.ds_excretion_list.set_rowposition(0);
        		}
        		// μ μ₯ μ½λ°±
        		else if(strSvcID == "save")
        		{
        			if(this.tranFlag == "I")
        			{
        				Sct.alert(this, "000570", "λ±λ‘");	// {0} λμμ΅λλ€.
        			}
        			else if(this.tranFlag == "U")
        			{
        				Sct.alert(this, "000570", "μμ ");	// {0} λμμ΅λλ€.
        			}
        			else if(this.tranFlag == "IU")
        			{
        				Sct.alert(this, "000570", "μ μ₯");
        			}
        			this.tranFlag = "";

        			this.fn_search();
        		}
        		// μ­μ  μ½λ°±
        		else if(strSvcID == "delete")
        		{
        			Sct.alert(this, "000570", "μ­μ ");	// {0} λμμ΅λλ€.
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
        /**
         * νΉμ μμΉμ λ¬Έμμ΄ λ°κΎΈκΈ°
         *
         * @param str μλ³Έ λ¬Έμμ΄
         * @param character λ°κΏ λ¬Έμκ°
         * @param index λ°κΏ μμΉ
         */
        this.stringReplaceAt = function(str, character, index)
        {
        	return str.substr(0, index) + character + str.substr(index + character.length);
        };

        /**
         * μ§μ€λ°°μ€κ΄μ°° DBμλ ₯μ© String λ§λ€κΈ°
         *
         * @param cRow λΉμΌ λ°κΏ λ¬Έμ index
         * @param sRow λͺμΌ λ°κΏ λ¬Έμ index
         * @param str1 λΉμΌ μλ³Έ λ¬Έμμ΄
         * @param str2 λͺμΌ μλ³Έ λ¬Έμμ΄
         * @param col λ°μ΄ν°μ μ»¬λΌλͺ
         * @param value λ°κΏ λ¬Έμκ°
         * @param offset λ¬Έμ κ°κ²©
         */
        this.fn_valueSet = function(cRow, sRow, str1, str2, col, value, offset)
        {
        	let index;
        	if(offset == null || offset == 0)
        	{
        		if(cRow < 24)
        		{
        			str1 = this.stringReplaceAt(str1, value, cRow);
        			this.ds_excretion_temp1.setColumn(0, col, str1);
        		}
        		else
        		{
        			str2 = this.stringReplaceAt(str2, value, sRow);
        			this.ds_excretion_temp2.setColumn(0, col, str2);
        		}
        	}
        	else
        	{
        		if(cRow < 24)
        		{
        			index = cRow * offset;
        			str1 = this.stringReplaceAt(str1, value, index);
        			this.ds_excretion_temp1.setColumn(0, col, str1);
        		}
        		else
        		{
        			index = sRow * offset;
        			str2 = this.stringReplaceAt(str2, value, index);
        			this.ds_excretion_temp2.setColumn(0, col, str2);
        		}
        	}
        };
         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // ν­ λ³κ²½μ
        this.Tab00_onchanged = function(obj,e)
        {
        	const i = e.postindex;
        	const today = Sct.Util.getToday();
        	// μμ/κ΄μ°°μΌμ§
        	if(i == 5)
        	{
        		this.fv_currentDS = this.ds_observe_list;
        		this.fv_inputDS = this.ds_observe_list;
        		this.fv_currentGrid = "";
        		this.ds_search.setColumn(0, "DATE", today);
        	}
        	// μλ©΄μν
        	else if(i == 4)
        	{
        		this.fv_currentDS = this.ds_sleep_list;
        		this.fv_inputDS = this.ds_sleep_input;
        		this.fv_currentGrid = this.Tab00.Tabpage4.form.div_cont.form.grd_sleep_list;
        		this.ds_search.setColumn(0, "DATE", today);
        	}
        	// μλΆμ­μ·¨
        	else if(i == 3)
        	{
        		this.fv_currentDS = this.ds_water_list;
        		this.fv_inputDS = this.ds_water_input;
        		this.fv_currentGrid = this.Tab00.Tabpage3.form.div_cont.form.grd_water_list;
        		this.ds_search.setColumn(0, "DATE", today);
        	}
        	// μμ¬
        	else if(i == 2)
        	{
        		this.fv_currentDS = this.ds_meal_list;
        		this.fv_inputDS = this.ds_meal_list;
        		this.fv_currentGrid = "";
        		this.ds_search.setColumn(0, "DATE", today);
        	}
        	// μ²΄μλ³κ²½
        	else if(i == 1)
        	{
        		this.fv_currentDS = this.ds_posture_list;
        		this.fv_inputDS = this.ds_posture_list;
        		this.fv_currentGrid = this.Tab00.Tabpage1.form.div_cont.form.grd_posture_list;
        		const nowTime = Sct.Util.getHour() + Sct.Util.getMin();
        		if(nowTime < 0800)
        		{
        			const beforeDay = today - 1;
        			this.ds_search.setColumn(0, "DATE", beforeDay);
        		}
        		else
        		{
        			this.ds_search.setColumn(0, "DATE", today);
        		}
        	}
        	// μ§μ€λ°°μ€κ΄μ°°
        	else if(i == 0)
        	{
        		this.fv_currentDS = this.ds_excretion_list;
        		this.fv_inputDS = "";
        		this.fv_currentGrid = this.Tab00.Tabpage0.form.div_cont.form.grd_excretion_list;
        		this.ds_search.setColumn(0, "DATE", today);
        	}

        	// μ¨λ‘λμ κ²μνμ§ μκ³  ν­μ²΄μΈμ§ ν λ κ²μ
        	if(this.tabChangeFlag == "Y")
        	{
        		this.fn_search();
        	}

        };

        // μμ±μΈμ
        this.btn_tRecord_onclick = function(obj,e)
        {
        	trace(obj.id);
        	let param;
        	this.makeStandardObject();

        	// μμ/κ΄μ°°μΌμ§ κ΄μ°°κΈ°λ‘
        	if(obj.id == "btn_tRecord_observe1")
        	{
        		param = {arg1 : "1"};
        	}
        	// μμ/κ΄μ°°μΌμ§ μμμΌμ§
        	else if(obj.id == "btn_tRecord_observe2")
        	{
        		param = {arg1 : "2"};
        	}
        	// μλ©΄μν λΉκ³ 
        	else if(obj.id == "btn_tRecord_sleep")
        	{
        		param = {arg1 : "3"};
        	}
        	// μλΆμ­μ·¨ λΉκ³ 
        	else if(obj.id == "btn_tRecord_water")
        	{
        		param = {arg1 : "4"};
        	}

        	this.standardPlugin.callMethod("VOICE", param);
        };

        // standardObject μλλ‘μ΄λ λ€μ΄ν°λΈ ν΅μ  callback
        this.on_standardPlugin_callback = function(obj, e)
        {
        	trace("this.on_callback ::: " + e.svcid);
        	trace("this.on_callback ::: " + e.reason);
        	trace("this.on_callback ::: " + e.returnvalue);

        	// κ΄μ°°κΈ°λ‘ STT
        	if(e.svcid == "VOICE1")
        	{
        		if(e.reason == 0)
        		{
        			let rmkValue = this.Tab00.Tabpage5.form.div_cont.form.txt_observe_remark.value;
        			if (rmkValue == undefined)
        			{
        				this.Tab00.Tabpage5.form.div_cont.form.txt_observe_remark.set_value(e.returnvalue);
        			}
        			else
        			{
        				this.Tab00.Tabpage5.form.div_cont.form.txt_observe_remark.set_value(rmkValue + " " + e.returnvalue);
        			}
        		}
        	}
        	// μμμΌμ§ STT
        	else if(e.svcid == "VOICE2")
        	{
        		if(e.reason == 0)
        		{
        			let rmkValue = this.Tab00.Tabpage5.form.div_cont.form.txt_observe_note.value;
        			if (rmkValue == undefined)
        			{
        				this.Tab00.Tabpage5.form.div_cont.form.txt_observe_note.set_value(e.returnvalue);
        			}
        			else
        			{
        				this.Tab00.Tabpage5.form.div_cont.form.txt_observe_note.set_value(rmkValue + " " + e.returnvalue);
        			}
        		}
        	}
        	// μλ©΄μν λΉκ³  STT
        	else if(e.svcid == "VOICE3")
        	{
        		if(e.reason == 0)
        		{
        			let rmkValue = this.Tab00.Tabpage4.form.div_cont.form.txt_sleep_remark.value;
        			if (rmkValue == undefined)
        			{
        				this.Tab00.Tabpage4.form.div_cont.form.txt_sleep_remark.set_value(e.returnvalue);
        			}
        			else
        			{
        				this.Tab00.Tabpage4.form.div_cont.form.txt_sleep_remark.set_value(rmkValue + " " + e.returnvalue);
        			}
        		}
        	}
        	// μλΆμ­μ·¨ λΉκ³  STT
        	else if(e.svcid == "VOICE4")
        	{
        		if(e.reason == 0)
        		{
        			let rmkValue = this.Tab00.Tabpage3.form.div_cont.form.txt_water_remark.value;
        			if (rmkValue == undefined)
        			{
        				this.Tab00.Tabpage3.form.div_cont.form.txt_water_remark.set_value(e.returnvalue);
        			}
        			else
        			{
        				this.Tab00.Tabpage3.form.div_cont.form.txt_water_remark.set_value(rmkValue + " " + e.returnvalue);
        			}
        		}
        	}
        	// μλ©΄μν κΈ°μμκ° timepicker
        	else if(e.svcid == "TIMEPICKER1")
        	{
        		if(e.reason == 0)
        		{
        			this.Tab00.Tabpage4.form.div_cont.form.mae_sle_time.set_value(e.returnvalue);
        		}
        	}
        	// μλΆμ­μ·¨ μκ° timepicker
        	else if(e.svcid == "TIMEPICKER2")
        	{
        		if(e.reason == 0)
        		{
        			this.Tab00.Tabpage3.form.div_cont.form.mae_wat_time.set_value(e.returnvalue);
        		}
        	}
        	// μμ¬ μ€μ μμ¬ μκ° timepicker
        	else if(e.svcid == "TIMEPICKER3")
        	{
        		if(e.reason == 0)
        		{
        			this.Tab00.Tabpage2.form.div_cont.form.mae_breTime.set_value(e.returnvalue);
        		}
        	}
        	// μμ¬ μ μ¬μμ¬ μκ° timepicker
        	else if(e.svcid == "TIMEPICKER4")
        	{
        		if(e.reason == 0)
        		{
        			this.Tab00.Tabpage2.form.div_cont.form.mae_lunTime.set_value(e.returnvalue);
        		}
        	}
        	// μμ¬ μ λμμ¬ μκ° timepicker
        	else if(e.svcid == "TIMEPICKER5")
        	{
        		if(e.reason == 0)
        		{
        			this.Tab00.Tabpage2.form.div_cont.form.mae_dinTime.set_value(e.returnvalue);
        		}
        	}
        	// μμ¬ μ€μ κ°μ μκ° timepicker
        	else if(e.svcid == "TIMEPICKER6")
        	{
        		if(e.reason == 0)
        		{
        			this.Tab00.Tabpage2.form.div_cont.form.mae_morSnackTime.set_value(e.returnvalue);
        		}
        	}
        	// μμ¬ μ€μ μμ¬ μκ° timepicker
        	else if(e.svcid == "TIMEPICKER7")
        	{
        		if(e.reason == 0)
        		{
        			this.Tab00.Tabpage2.form.div_cont.form.mae_aftSnackTime.set_value(e.returnvalue);
        		}
        	}
        };

        // TIMEPICKER
        this.msk_oneditclick = function(obj,e)
        {
        	let param;
        	this.makeStandardObject();
        	// μλ©΄μν κΈ°μμκ° timepicker
        	if(obj.id == "mae_sle_time")
        	{
        		param = {arg1 : "1"};
        	}
        	// μλΆμ­μ·¨ μκ° timepicker
        	else if(obj.id == "mae_wat_time")
        	{
        		param = {arg1 : "2"};
        	}
        	// μμ¬ μμΉ¨μμ¬ μκ° timepicker
        	else if(obj.id == "mae_breTime")
        	{
        		param = {arg1 : "3"};
        	}
        	// μμ¬ μ μ¬μμ¬ μκ° timepicker
        	else if(obj.id == "mae_lunTime")
        	{
        		param = {arg1 : "4"};
        	}
        	// μμ¬ μ λμμ¬ μκ° timepicker
        	else if(obj.id == "mae_dinTime")
        	{
        		param = {arg1 : "5"};
        	}
        	// μμ¬ μ€μ κ°μ μκ° timepicker
        	else if(obj.id == "mae_morSnackTime")
        	{
        		param = {arg1 : "6"};
        	}
        	// μμ¬ μ€νκ°μ μκ° timepicker
        	else if(obj.id == "mae_aftSnackTime")
        	{
        		param = {arg1 : "7"};
        	}
        	this.standardPlugin.callMethod("TIMEPICKER", param);
        };

        // κ·Έλ¦¬λ νμ₯λ²νΌ
        this.fn_grid_onexpandup = function(obj,e)
        {
        	// μμ λ²νΌ ν΄λ¦­
        	if(obj.getBindCellIndex("body", "EDIT_COL") == e.col)
        	{
        		this.fv_inputDS.copyRow(0, this.fv_currentDS, e.row);
        		this.fv_inputDS.set_updatecontrol(false);
        		this.fv_inputDS.setRowType(0, Dataset.ROWTYPE_UPDATE);
        		this.fv_inputDS.set_updatecontrol(true);

        		if (this.fv_inputDS != "" && this.fv_inputDS.name != "ds_posture_list")
        		{
        			// μ²λ¦¬μμ μ μμ μΈν
        			this.fv_inputDS.setColumn(0, "MANAGER_ID", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID"));
        		}
        	}

        	// μ­μ λ²νΌ ν΄λ¦­
        	if(obj.getBindCellIndex("body", "DEL_COL") == e.col)
        	{
        		this.fv_currentDS.set_rowposition(e.row);
        		this.fn_delete();
        	}
        };

        // κ·Έλ¦¬λ λͺ©μ νμΌλ‘ μ΄λ (μ§μ€λ°°μ€κ΄μ°°, μ²΄μλ³κ²½)
        this.fn_gridRow_go = function(obj)
        {
        	switch(obj.id)
        	{
        		case "btn_grd_go0":
        			this.fv_currentDS.set_rowposition(0);
        			this.fv_currentGrid.scrollTo(0, 0);
        			break;
        		case "btn_grd_go3":
        			this.fv_currentDS.set_rowposition(3);
        			this.fv_currentGrid.scrollTo(0, 120);
        			break;
        		case "btn_grd_go4":
        			this.fv_currentDS.set_rowposition(4);
        			this.fv_currentGrid.scrollTo(0, 160);
        			break;
        		case "btn_grd_go6":
        			this.fv_currentDS.set_rowposition(6);
        			this.fv_currentGrid.scrollTo(0, 240);
        			break;
        		case "btn_grd_go9":
        			this.fv_currentDS.set_rowposition(9);
        			this.fv_currentGrid.scrollTo(0, 360);
        			break;
        		case "btn_grd_go10":
        			this.fv_currentDS.set_rowposition(10);
        			this.fv_currentGrid.scrollTo(0, 400);
        			break;
        		case "btn_grd_go13":
        			this.fv_currentDS.set_rowposition(13);
        			this.fv_currentGrid.scrollTo(0, 520);
        			break;
        		case "btn_grd_go18":
        			this.fv_currentDS.set_rowposition(18);
        			this.fv_currentGrid.scrollTo(0, 720);
        			break;
        		case "btn_grd_go21":
        			this.fv_currentDS.set_rowposition(21);
        			this.fv_currentGrid.scrollTo(0, 840);
        			break;
        		case "btn_grd_go24":
        			this.fv_currentDS.set_rowposition(24);
        			this.fv_currentGrid.scrollTo(0, 960);
        			break;
        		case "btn_grd_go28":
        			this.fv_currentDS.set_rowposition(28);
        			this.fv_currentGrid.scrollTo(0, 1120);
        			break;
        	}
        };

        // μ§μ€λ°°μ€κ΄μ°° κ·Έλ¦¬λ λ°μ΄ν°μ κ°λ³κ²½μ μ΄λ²€νΈ
        this.ds_excretion_list_oncolumnchanged = function(obj,e)
        {
        	const cRow = obj.rowposition;
        	const sRow = cRow - 24;
        	let col;
        	let value = e.newvalue;
        	let offset = 0;
        	switch(e.columnid)
        	{
        		// κ΄μ°°λΆ
        		case "MIN":
        			col = "EXC_TIME";
        			offset = 2;
        			break;
        		// λ°°λ¨κ΄μ°° μλ
        		case "URIN_1":
        			obj.setColumn(cRow, "URIN_2", 0);
        			col = "URIN_OBS";
        			break;
        		// λ°°λ¨κ΄μ°° λλ
        		case "URIN_2":
        			obj.setColumn(cRow, "URIN_1", 0);
        			col = "URIN_OBS";
        			break;
        		// μλ³λ
        		case "URIN_QTY":
        			col = "URIN_QTY";
        			value = value.padStart(4, "0");
        			offset = 4;
        			break;
        		// λ°°λ³κ΄μ°° μ μ
        		case "FECES_1":
        			obj.setColumn(cRow, "FECES_2", 0);
        			obj.setColumn(cRow, "FECES_3", 0);
        			col = "FECES_OBS";
        			break;
        		// λ°°λ³κ΄μ°° μ€λ³
        		case "FECES_2":
        			obj.setColumn(cRow, "FECES_1", 0);
        			obj.setColumn(cRow, "FECES_3", 0);
        			col = "FECES_OBS";
        			break;
        		// λ°°λ³κ΄μ°° μ€μ¬
        		case "FECES_3":
        			obj.setColumn(cRow, "FECES_1", 0);
        			obj.setColumn(cRow, "FECES_2", 0);
        			col = "FECES_OBS";
        			break;
        		// κΈ°μ κ·κ΅ν μΌλ°
        		case "DIAPER_N":
        			obj.setColumn(cRow, "DIAPER_S", 0);
        			col = "DIAPER_CHG";
        			break;
        		// κΈ°μ κ·κ΅ν μ€λ§νΈ
        		case "DIAPER_S":
        			obj.setColumn(cRow, "DIAPER_N", 0);
        			col = "DIAPER_CHG";
        			break;
        		// μ·κ΅ν
        		case "CLOTH":
        			col = "CLOTH_CHG";
        			break;
        	}
        	if(e.columnid != "EXC_DT" && e.columnid != "HOUR")
        	{
        		const str1 = this.ds_excretion_temp1.getColumn(0, col);
        		const str2 = this.ds_excretion_temp2.getColumn(0, col);
        		// DBμλ ₯μ© String λ§λ€κΈ°
        		this.fn_valueSet(cRow, sRow, str1, str2, col, value, offset);
        	}
        };

        // μμ¬ λ°μ΄ν°μ κ° λ³κ²½μ μ΄λ²€νΈ
        this.ds_meal_list_oncolumnchanged = function(obj,e)
        {
        	const cRow = obj.rowposition;
        	let col = "A";
        	let j;
        	switch(e.columnid)
        	{
        		// μμΉ¨μμ¬ μΌλ°μ
        		case "B_MEAL1":
        			col = "B_MEAL";
        			j = 1;
        			break;
        		// μμΉ¨μμ¬ μ£½μ
        		case "B_MEAL2":
        			col = "B_MEAL";
        			j = 2;
        			break;
        		// μμΉ¨μμ¬ μ λΒ·κ²½κ΄μ
        		case "B_MEAL3":
        			col = "B_MEAL";
        			j = 3;
        			break;
        		// μμΉ¨μμ¬ κ°μμ
        		case "B_MEAL4":
        			col = "B_MEAL";
        			j = 4;
        			break;
        		// μμΉ¨μμ¬ λ€μ§μ
        		case "B_MEAL5":
        			col = "B_MEAL";
        			j = 5;
        			break;
        		// μμΉ¨μμ¬ λ―Έμ
        		case "B_MEAL6":
        			col = "B_MEAL";
        			j = 6;
        			break;
        		// μ μ¬μμ¬ μΌλ°μ
        		case "L_MEAL1":
        			col = "L_MEAL";
        			j = 1;
        			break;
        		// μ μ¬μμ¬ μ£½μ
        		case "L_MEAL2":
        			col = "L_MEAL";
        			j = 2;
        			break;
        		// μ μ¬μμ¬ μ λΒ·κ²½κ΄μ
        		case "L_MEAL3":
        			col = "L_MEAL";
        			j = 3;
        			break;
        		// μ μ¬μμ¬ κ°μμ
        		case "L_MEAL4":
        			col = "L_MEAL";
        			j = 4;
        			break;
        		// μ μ¬μμ¬ λ€μ§μ
        		case "L_MEAL5":
        			col = "L_MEAL";
        			j = 5;
        			break;
        		// μ μ¬μμ¬ λ―Έμ
        		case "L_MEAL6":
        			col = "L_MEAL";
        			j = 6;
        			break;
        		// μ λμμ¬ μΌλ°μ
        		case "D_MEAL1":
        			col = "D_MEAL";
        			j = 1;
        			break;
        		// μ λμμ¬ μ£½μ
        		case "D_MEAL2":
        			col = "D_MEAL";
        			j = 2;
        			break;
        		// μ λμμ¬ μ λΒ·κ²½κ΄μ
        		case "D_MEAL3":
        			col = "D_MEAL";
        			j = 3;
        			break;
        		// μ λμμ¬ κ°μμ
        		case "D_MEAL4":
        			col = "D_MEAL";
        			j = 4;
        			break;
        		// μ λμμ¬ λ€μ§μ
        		case "D_MEAL5":
        			col = "D_MEAL";
        			j = 5;
        			break;
        		// μ λμμ¬ λ―Έμ
        		case "D_MEAL6":
        			col = "D_MEAL";
        			j = 6;
        			break;
        	}

        	// μμ¬μ ν μ²΄ν¬λ°μ€ νλλ§ μ νλλλ‘ νκΈ°
        	for(let i = 1; i < 7; i++)
        	{
        		if(i != j)
        		{
        			this.ds_meal_list.setColumn(cRow, col + i, 0);
        		}
        	}
        };

        // μμ¬ μμμ μ½€λ³΄ λ³κ²½μ μ΄λ²€νΈ
        this.meal_cmb_resident_onitemchanged = function(obj,e)
        {
        	this.fn_search();
        };

        // μμΈλ³κ²½μΌμ§ κ·Έλ¦¬λ μ ν΄λ¦­ μ΄λ²€νΈ
        this.Tab00_Tabpage1_div_cont_grd_posture_list_oncellclick = function(obj,e)
        {
        	const minIdx = obj.getBindCellIndex("body", "POS_MIN");
        	const posIdx = obj.getBindCellIndex("body", "POSTURE");
        	const manIdx = obj.getBindCellIndex("body", "MANAGER_ID");
        	if (e.col == minIdx || e.col == posIdx || e.col == manIdx)
        	{
        		const manValue = this.ds_posture_list.getColumn(e.row, "MANAGER_ID");
        		trace(manValue);
        		if (manValue == undefined)
        		{
        			const userId = nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID");
        			this.ds_posture_list.setColumn(e.row, "MANAGER_ID", userId);
        		}

        		if (e.col == manIdx)
        		{
        			const param = {COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")};

        			Sct.tPopup(this, "pop3", 350, 350, param, "TabletPOP::NUB_MANAGER_POP.xfdl", "fn_popCallback");
        		}
        	}
        };

        // μ²λ¦¬μ μ ν
        this.cmb_manager_oneditclick = function(obj,e)
        {
        	const param = {COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")};

        	if (obj.id == "cmb_daytimeWorker")	// μ§μ€λ°°μ€κ΄μ°°μΌμ§ μ£Όκ°κ΄μ°°μ
        		Sct.tPopup(this, "pop1", 350, 350, param, "TabletPOP::NUB_MANAGER_POP.xfdl", "fn_popCallback");
        	else if (obj.id == "cmb_nighttimeWorker")	// μ§μ€λ°°μ€κ΄μ°°μΌμ§ μΌκ°κ΄μ°°μ
        		Sct.tPopup(this, "pop2", 350, 350, param, "TabletPOP::NUB_MANAGER_POP.xfdl", "fn_popCallback");
        	else if (obj.id == "cmb_managerId")	// μ²λ¦¬μ
        		Sct.tPopup(this, "pop4", 350, 350, param, "TabletPOP::NUB_MANAGER_POP.xfdl", "fn_popCallback");
        };

        // νμ μ½λ°±
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "pop1" :	// μ£Όκ°κ΄μ°°μ
        			this.ds_excretion_temp1.setColumn(0, "DAY_MANAGER_ID", objDs.getColumn(0, "USER_ID"));
        			this.ds_excretion_temp1.setColumn(0, "DAY_MANAGER_NM", objDs.getColumn(0, "NAME"));
        			break;
        		case "pop2" :	// μΌκ°κ΄μ°°μ
        			this.ds_excretion_temp1.setColumn(0, "NIG_MANAGER_ID", objDs.getColumn(0, "USER_ID"));
        			this.ds_excretion_temp1.setColumn(0, "NIG_MANAGER_NM", objDs.getColumn(0, "NAME"));
        			break;
        		case "pop3" :	// μ²΄μλ³κ²½ μ²λ¦¬μ
        			this.ds_posture_list.setColumn(this.ds_posture_list.rowposition, "MANAGER_ID", objDs.getColumn(0, "USER_ID"));
        			break;
        		case "pop4" :	// κ·Έ μΈ νλ©΄ μ²λ¦¬μ
        			const i = this.Tab00.tabindex;
        			if (i == 2)	// μμ¬
        				this.ds_meal_list.setColumn(0, "MANAGER_ID", objDs.getColumn(0, "USER_ID"));
        			else if (i == 3)	// μλΆμ­μ·¨
        				this.ds_water_input.setColumn(0, "MANAGER_ID", objDs.getColumn(0, "USER_ID"));
        			else if (i == 4)	// μλ©΄μν
        				this.ds_sleep_input.setColumn(0, "MANAGER_ID", objDs.getColumn(0, "USER_ID"));
        			else if (i == 5)	// μμ/κ΄μ°°μΌμ§
        				this.ds_observe_list.setColumn(0, "MANAGER_ID", objDs.getColumn(0, "USER_ID"));
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
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
            this.addEventHandler("onclick",this.formClick,this);
            this.sta_menuTitle.addEventHandler("onclick",this.formClick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage0.form.div_search.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage0.form.div_search.form.cmb_area.addEventHandler("onitemchanged",this.cmb_area_onitemchanged,this);
            this.Tab00.Tabpage0.form.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_location_onitemchanged,this);
            this.Tab00.Tabpage0.form.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.Tab00.Tabpage0.form.div_search.form.btn_tReset.addEventHandler("onclick",this.fn_searchBtn,this);
            this.Tab00.Tabpage0.form.div_search.form.btn_tSave.addEventHandler("onclick",this.fn_saveBtn,this);
            this.Tab00.Tabpage0.form.div_search.form.btn_tDelete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.Tab00.Tabpage0.form.div_cont.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage0.form.div_cont.form.sta_resident.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage0.form.div_cont.form.sta_residentVal.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage0.form.div_cont.form.sta_enterDt.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage0.form.div_cont.form.sta_areaLocation.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage0.form.div_cont.form.sta_areaLocatonVal.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage0.form.div_cont.form.sta_date.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage0.form.div_cont.form.sta_daytimeWorkerH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage0.form.div_cont.form.sta_nighttimeWorkerH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage0.form.div_cont.form.sta_grd_goH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage0.form.div_cont.form.btn_grd_go0.addEventHandler("onclick",this.fn_gridRow_go,this);
            this.Tab00.Tabpage0.form.div_cont.form.btn_grd_go4.addEventHandler("onclick",this.fn_gridRow_go,this);
            this.Tab00.Tabpage0.form.div_cont.form.btn_grd_go9.addEventHandler("onclick",this.fn_gridRow_go,this);
            this.Tab00.Tabpage0.form.div_cont.form.btn_grd_go13.addEventHandler("onclick",this.fn_gridRow_go,this);
            this.Tab00.Tabpage0.form.div_cont.form.btn_grd_go18.addEventHandler("onclick",this.fn_gridRow_go,this);
            this.Tab00.Tabpage0.form.div_cont.form.btn_grd_go21.addEventHandler("onclick",this.fn_gridRow_go,this);
            this.Tab00.Tabpage0.form.div_cont.form.btn_grd_go24.addEventHandler("onclick",this.fn_gridRow_go,this);
            this.Tab00.Tabpage0.form.div_cont.form.btn_grd_go28.addEventHandler("onclick",this.fn_gridRow_go,this);
            this.Tab00.Tabpage0.form.div_cont.form.mae_enterDt.addEventHandler("oneditclick",this.formClick,this);
            this.Tab00.Tabpage0.form.div_cont.form.mae_dateVal.addEventHandler("oneditclick",this.formClick,this);
            this.Tab00.Tabpage0.form.div_cont.form.cmb_daytimeWorker.addEventHandler("oneditclick",this.cmb_manager_oneditclick,this);
            this.Tab00.Tabpage0.form.div_cont.form.cmb_nighttimeWorker.addEventHandler("oneditclick",this.cmb_manager_oneditclick,this);
            this.Tab00.Tabpage1.form.div_cont.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.div_cont.form.sta_grd_goH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.div_cont.form.btn_grd_go0.addEventHandler("onclick",this.fn_gridRow_go,this);
            this.Tab00.Tabpage1.form.div_cont.form.btn_grd_go3.addEventHandler("onclick",this.fn_gridRow_go,this);
            this.Tab00.Tabpage1.form.div_cont.form.btn_grd_go6.addEventHandler("onclick",this.fn_gridRow_go,this);
            this.Tab00.Tabpage1.form.div_cont.form.btn_grd_go10.addEventHandler("onclick",this.fn_gridRow_go,this);
            this.Tab00.Tabpage1.form.div_cont.form.btn_grd_go13.addEventHandler("onclick",this.fn_gridRow_go,this);
            this.Tab00.Tabpage1.form.div_cont.form.grd_posture_list.addEventHandler("oncellclick",this.Tab00_Tabpage1_div_cont_grd_posture_list_oncellclick,this);
            this.Tab00.Tabpage1.form.div_cont.form.sta_resident.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.div_cont.form.sta_residentVal.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.div_cont.form.sta_enterDt.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.div_cont.form.mae_enterDt.addEventHandler("oneditclick",this.formClick,this);
            this.Tab00.Tabpage1.form.div_cont.form.sta_areaLocation.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.div_cont.form.sta_areaLocatonVal.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.div_cont.form.sta_date.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.div_cont.form.mae_dateVal.addEventHandler("oneditclick",this.formClick,this);
            this.Tab00.Tabpage1.form.div_search.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.div_search.form.cmb_area.addEventHandler("onitemchanged",this.cmb_location_onitemchanged,this);
            this.Tab00.Tabpage1.form.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_room_onitemchanged,this);
            this.Tab00.Tabpage1.form.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.Tab00.Tabpage1.form.div_search.form.btn_tDelete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.Tab00.Tabpage1.form.div_search.form.btn_tSave.addEventHandler("onclick",this.fn_saveBtn,this);
            this.Tab00.Tabpage1.form.div_search.form.btn_tReset.addEventHandler("onclick",this.fn_searchBtn,this);
            this.Tab00.Tabpage2.form.div_cont.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_fundDisB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_fundDisH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_dietaryCureB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_dietaryCureH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_managerIdB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_managerIdH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.cmb_managerId.addEventHandler("oneditclick",this.cmb_manager_oneditclick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_division.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_timeH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_tpH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_qtyH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_breB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_breH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_lunB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_lunH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_dinB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_dinH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_morSnackB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_morSnackH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_aftSnackB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_aftSnackH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.mae_breTime.addEventHandler("oneditclick",this.msk_oneditclick,this);
            this.Tab00.Tabpage2.form.div_cont.form.mae_lunTime.addEventHandler("oneditclick",this.msk_oneditclick,this);
            this.Tab00.Tabpage2.form.div_cont.form.mae_dinTime.addEventHandler("oneditclick",this.msk_oneditclick,this);
            this.Tab00.Tabpage2.form.div_cont.form.mae_morSnackTime.addEventHandler("oneditclick",this.msk_oneditclick,this);
            this.Tab00.Tabpage2.form.div_cont.form.mae_aftSnackTime.addEventHandler("oneditclick",this.msk_oneditclick,this);
            this.Tab00.Tabpage2.form.div_cont.form.rdo_breQty.addEventHandler("onitemchanged",this.Tab00_Tabpage2_div_cont_Radio00_onitemchanged,this);
            this.Tab00.Tabpage2.form.div_cont.form.rdo_lunQty.addEventHandler("onitemchanged",this.Tab00_Tabpage2_div_cont_Radio00_onitemchanged,this);
            this.Tab00.Tabpage2.form.div_cont.form.rdo_dinQty.addEventHandler("onitemchanged",this.Tab00_Tabpage2_div_cont_Radio00_onitemchanged,this);
            this.Tab00.Tabpage2.form.div_cont.form.rdo_morSnackQty.addEventHandler("onitemchanged",this.Tab00_Tabpage2_div_cont_Radio00_onitemchanged,this);
            this.Tab00.Tabpage2.form.div_cont.form.rdo_aftSnackQty.addEventHandler("onitemchanged",this.Tab00_Tabpage2_div_cont_Radio00_onitemchanged,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_resident.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_residentVal.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_enterDt.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.mae_enterDt.addEventHandler("oneditclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_areaLocation.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_areaLocatonVal.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.sta_date.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_cont.form.mae_dateVal.addEventHandler("oneditclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_search.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.div_search.form.cmb_area.addEventHandler("onitemchanged",this.cmb_location_onitemchanged,this);
            this.Tab00.Tabpage2.form.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_room_onitemchanged,this);
            this.Tab00.Tabpage2.form.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.Tab00.Tabpage2.form.div_search.form.btn_tDelete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.Tab00.Tabpage2.form.div_search.form.btn_tSave.addEventHandler("onclick",this.fn_saveBtn,this);
            this.Tab00.Tabpage2.form.div_search.form.cmb_resident.addEventHandler("onitemchanged",this.meal_cmb_resident_onitemchanged,this);
            this.Tab00.Tabpage2.form.div_search.form.btn_tReset.addEventHandler("onclick",this.fn_searchBtn,this);
            this.Tab00.Tabpage3.form.div_cont.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage3.form.div_cont.form.sta_resident.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage3.form.div_cont.form.sta_residentVal.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage3.form.div_cont.form.sta_enterDt.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage3.form.div_cont.form.mae_enterDt.addEventHandler("oneditclick",this.formClick,this);
            this.Tab00.Tabpage3.form.div_cont.form.sta_areaLocation.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage3.form.div_cont.form.sta_areaLocatonVal.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage3.form.div_cont.form.sta_date.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage3.form.div_cont.form.mae_dateVal.addEventHandler("oneditclick",this.formClick,this);
            this.Tab00.Tabpage3.form.div_cont.form.sta_wat_timeB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage3.form.div_cont.form.sta_wat_timeH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage3.form.div_cont.form.sta_volumeB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage3.form.div_cont.form.sta_volumeH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage3.form.div_cont.form.sta_water_remarkB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage3.form.div_cont.form.sta_water_remarkH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage3.form.div_cont.form.sta_water_managerIdB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage3.form.div_cont.form.sta_water_managerIdH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage3.form.div_cont.form.grd_water_list.addEventHandler("onexpandup",this.fn_grid_onexpandup,this);
            this.Tab00.Tabpage3.form.div_cont.form.mae_wat_time.addEventHandler("oneditclick",this.msk_oneditclick,this);
            this.Tab00.Tabpage3.form.div_cont.form.cmb_managerId.addEventHandler("oneditclick",this.cmb_manager_oneditclick,this);
            this.Tab00.Tabpage3.form.div_cont.form.btn_tRecord_water.addEventHandler("onclick",this.btn_tRecord_onclick,this);
            this.Tab00.Tabpage3.form.div_search.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage3.form.div_search.form.cmb_area.addEventHandler("onitemchanged",this.cmb_location_onitemchanged,this);
            this.Tab00.Tabpage3.form.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_room_onitemchanged,this);
            this.Tab00.Tabpage3.form.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.Tab00.Tabpage3.form.div_search.form.btn_tSave.addEventHandler("onclick",this.fn_saveBtn,this);
            this.Tab00.Tabpage3.form.div_search.form.btn_tReset.addEventHandler("onclick",this.fn_searchBtn,this);
            this.Tab00.Tabpage4.form.div_cont.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage4.form.div_cont.form.sta_resident.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage4.form.div_cont.form.sta_residentVal.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage4.form.div_cont.form.sta_enterDt.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage4.form.div_cont.form.mae_enterDt.addEventHandler("oneditclick",this.formClick,this);
            this.Tab00.Tabpage4.form.div_cont.form.sta_areaLocation.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage4.form.div_cont.form.sta_areaLocatonVal.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage4.form.div_cont.form.sta_date.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage4.form.div_cont.form.mae_dateVal.addEventHandler("oneditclick",this.formClick,this);
            this.Tab00.Tabpage4.form.div_cont.form.sta_sle_timeB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage4.form.div_cont.form.sta_sleep_tpB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage4.form.div_cont.form.sta_sleep_tpH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage4.form.div_cont.form.sta_sleep_remarkB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage4.form.div_cont.form.sta_sleep_managerIdB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage4.form.div_cont.form.cmb_managerId.addEventHandler("oneditclick",this.cmb_manager_oneditclick,this);
            this.Tab00.Tabpage4.form.div_cont.form.sta_sle_timeH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage4.form.div_cont.form.sta_sleep_remarkH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage4.form.div_cont.form.sta_sleep_managerIdH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage4.form.div_cont.form.btn_tRecord_sleep.addEventHandler("onclick",this.btn_tRecord_onclick,this);
            this.Tab00.Tabpage4.form.div_cont.form.grd_sleep_list.addEventHandler("onexpandup",this.fn_grid_onexpandup,this);
            this.Tab00.Tabpage4.form.div_cont.form.mae_sle_time.addEventHandler("oneditclick",this.msk_oneditclick,this);
            this.Tab00.Tabpage4.form.div_search.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage4.form.div_search.form.cmb_area.addEventHandler("onitemchanged",this.cmb_location_onitemchanged,this);
            this.Tab00.Tabpage4.form.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_room_onitemchanged,this);
            this.Tab00.Tabpage4.form.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.Tab00.Tabpage4.form.div_search.form.btn_tSave.addEventHandler("onclick",this.fn_saveBtn,this);
            this.Tab00.Tabpage4.form.div_search.form.btn_tReset.addEventHandler("onclick",this.fn_resetBtn,this);
            this.Tab00.Tabpage5.form.div_cont.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage5.form.div_cont.form.sta_resident.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage5.form.div_cont.form.sta_residentVal.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage5.form.div_cont.form.sta_enterDt.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage5.form.div_cont.form.mae_enterDt.addEventHandler("oneditclick",this.formClick,this);
            this.Tab00.Tabpage5.form.div_cont.form.sta_areaLocation.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage5.form.div_cont.form.sta_areaLocatonVal.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage5.form.div_cont.form.sta_date.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage5.form.div_cont.form.mae_dateVal.addEventHandler("oneditclick",this.formClick,this);
            this.Tab00.Tabpage5.form.div_cont.form.sta_observe_remarkB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage5.form.div_cont.form.sta_observe_managerIdB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage5.form.div_cont.form.cmb_managerId.addEventHandler("oneditclick",this.cmb_manager_oneditclick,this);
            this.Tab00.Tabpage5.form.div_cont.form.sta_observe_remarkH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage5.form.div_cont.form.btn_tRecord_observe1.addEventHandler("onclick",this.btn_tRecord_onclick,this);
            this.Tab00.Tabpage5.form.div_cont.form.sta_observe_managerIdH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage5.form.div_cont.form.sta_observe_noteB.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage5.form.div_cont.form.sta_observe_noteH.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage5.form.div_cont.form.btn_tRecord_observe2.addEventHandler("onclick",this.btn_tRecord_onclick,this);
            this.Tab00.Tabpage5.form.div_search.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage5.form.div_search.form.cmb_area.addEventHandler("onitemchanged",this.cmb_location_onitemchanged,this);
            this.Tab00.Tabpage5.form.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_room_onitemchanged,this);
            this.Tab00.Tabpage5.form.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.Tab00.Tabpage5.form.div_search.form.btn_tDelete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.Tab00.Tabpage5.form.div_search.form.btn_tSave.addEventHandler("onclick",this.fn_saveBtn,this);
            this.Tab00.Tabpage5.form.div_search.form.btn_tReset.addEventHandler("onclick",this.fn_searchBtn,this);
            this.ds_excretion_list.addEventHandler("oncolumnchanged",this.ds_excretion_list_oncolumnchanged,this);
            this.ds_meal_list.addEventHandler("oncolumnchanged",this.ds_meal_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("NUB301CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
