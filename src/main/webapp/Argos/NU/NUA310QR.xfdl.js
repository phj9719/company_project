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
            this.set_titletext("집중배설관찰일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NIG_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NIG_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_OBS\" type=\"STRING\" size=\"256\"/><Column id=\"FECES_OBS\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"CLOTH_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/><Column id=\"RES_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_00\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_01\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_02\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_03\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_04\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_05\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_06\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_07\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_08\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_09\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_10\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_11\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_12\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_13\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_14\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_15\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_16\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_17\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_18\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_19\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_20\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_21\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_22\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_23\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_00\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_01\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_02\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_03\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_04\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_05\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_06\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_07\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_08\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_09\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_10\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_11\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_12\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_13\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_14\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_15\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_16\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_17\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_18\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_19\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_20\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_21\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_22\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_23\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_00\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_01\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_02\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_03\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_04\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_05\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_06\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_07\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_08\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_09\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_10\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_11\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_12\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_13\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_14\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_15\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_16\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_17\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_18\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_19\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_20\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_21\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_22\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_23\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_QTY_00\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_01\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_02\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_03\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_04\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_05\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_06\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_07\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_08\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_09\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_10\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_11\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_12\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_13\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_14\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_15\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_16\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_17\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_18\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_19\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_20\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_21\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_22\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_23\" type=\"INT\" size=\"256\"/><Column id=\"N_FECES_00\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_01\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_02\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_03\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_04\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_05\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_06\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_07\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_08\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_09\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_10\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_11\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_12\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_13\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_14\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_15\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_16\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_17\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_18\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_19\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_20\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_21\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_22\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_23\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_00\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_01\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_02\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_03\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_04\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_05\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_06\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_07\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_08\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_09\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_10\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_11\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_12\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_13\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_14\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_15\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_16\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_17\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_18\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_19\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_20\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_21\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_22\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_23\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_00\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_01\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_02\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_03\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_04\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_05\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_06\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_07\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_08\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_09\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_10\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_11\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_12\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_13\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_14\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_15\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_16\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_17\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_18\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_19\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_20\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_21\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_22\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_23\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_00\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_01\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_02\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_03\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_04\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_05\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_06\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_07\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_08\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_09\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_10\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_11\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_12\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_13\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_14\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_15\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_16\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_17\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_18\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_19\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_20\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_21\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_22\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_23\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_00\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_01\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_02\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_03\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_04\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_05\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_06\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_07\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_08\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_09\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_10\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_11\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_12\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_13\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_14\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_15\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_16\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_17\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_18\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_19\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_20\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_21\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_22\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_23\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_00\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_01\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_02\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_03\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_04\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_05\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_06\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_07\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_08\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_09\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_10\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_11\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_12\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_13\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_14\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_15\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_16\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_17\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_18\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_19\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_20\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_21\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_22\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_23\" type=\"STRING\" size=\"256\"/><Column id=\"URIN\" type=\"STRING\" size=\"256\"/><Column id=\"FECES\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER\" type=\"STRING\" size=\"256\"/><Column id=\"CLOTH\" type=\"STRING\" size=\"256\"/><Column id=\"MIN\" type=\"STRING\" size=\"256\"/><Column id=\"DAW_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAW_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IR_INPUT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_IR_INPUT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CELLPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR4\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


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
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_manager", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_sex", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NIG_MANAGER_ID\" type=\"INT\" size=\"256\"/><Column id=\"NIG_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_OBS\" type=\"STRING\" size=\"256\"/><Column id=\"FECES_OBS\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"CLOTH_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/><Column id=\"RES_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_00\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_01\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_02\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_03\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_04\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_05\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_06\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_07\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_08\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_00\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_01\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_02\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_03\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_04\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_05\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_06\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_07\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_08\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_00\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_01\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_02\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_03\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_04\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_05\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_06\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_07\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_08\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_QTY_00\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_01\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_02\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_03\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_04\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_05\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_06\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_07\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_08\" type=\"INT\" size=\"256\"/><Column id=\"N_FECES_00\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_01\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_02\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_03\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_04\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_05\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_06\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_07\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_08\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_00\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_01\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_02\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_03\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_04\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_05\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_06\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_07\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_08\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_00\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_01\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_02\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_03\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_04\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_05\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_06\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_07\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_08\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_00\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_01\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_02\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_03\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_04\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_05\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_06\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_07\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_08\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_00\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_01\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_02\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_03\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_04\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_05\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_06\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_07\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_08\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_00\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_01\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_02\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_03\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_04\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_05\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_06\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_07\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_08\" type=\"STRING\" size=\"256\"/><Column id=\"URIN\" type=\"STRING\" size=\"256\"/><Column id=\"FECES\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER\" type=\"STRING\" size=\"256\"/><Column id=\"CLOTH\" type=\"STRING\" size=\"256\"/><Column id=\"MIN\" type=\"STRING\" size=\"256\"/><Column id=\"DAW_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAW_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IR_INPUT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_IR_INPUT_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_temp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NIG_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NIG_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_OBS\" type=\"STRING\" size=\"256\"/><Column id=\"FECES_OBS\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"CLOTH_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/><Column id=\"RES_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_00\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_01\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_02\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_03\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_04\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_05\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_06\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_07\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_08\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_09\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_10\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_11\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_12\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_13\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_14\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_15\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_16\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_17\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_18\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_19\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_20\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_21\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_22\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_23\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_00\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_01\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_02\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_03\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_04\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_05\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_06\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_07\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_08\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_09\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_10\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_11\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_12\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_13\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_14\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_15\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_16\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_17\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_18\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_19\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_20\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_21\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_22\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_23\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_00\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_01\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_02\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_03\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_04\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_05\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_06\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_07\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_08\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_09\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_10\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_11\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_12\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_13\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_14\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_15\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_16\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_17\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_18\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_19\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_20\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_21\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_22\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_23\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_QTY_00\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_01\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_02\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_03\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_04\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_05\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_06\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_07\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_08\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_09\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_10\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_11\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_12\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_13\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_14\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_15\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_16\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_17\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_18\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_19\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_20\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_21\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_22\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_23\" type=\"INT\" size=\"256\"/><Column id=\"N_FECES_00\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_01\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_02\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_03\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_04\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_05\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_06\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_07\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_08\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_09\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_10\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_11\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_12\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_13\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_14\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_15\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_16\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_17\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_18\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_19\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_20\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_21\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_22\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_23\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_00\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_01\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_02\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_03\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_04\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_05\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_06\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_07\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_08\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_09\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_10\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_11\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_12\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_13\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_14\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_15\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_16\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_17\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_18\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_19\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_20\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_21\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_22\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_23\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_00\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_01\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_02\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_03\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_04\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_05\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_06\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_07\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_08\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_09\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_10\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_11\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_12\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_13\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_14\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_15\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_16\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_17\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_18\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_19\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_20\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_21\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_22\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_23\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_00\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_01\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_02\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_03\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_04\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_05\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_06\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_07\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_08\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_09\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_10\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_11\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_12\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_13\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_14\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_15\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_16\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_17\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_18\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_19\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_20\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_21\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_22\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_23\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_00\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_01\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_02\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_03\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_04\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_05\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_06\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_07\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_08\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_09\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_10\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_11\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_12\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_13\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_14\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_15\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_16\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_17\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_18\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_19\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_20\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_21\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_22\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_23\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_00\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_01\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_02\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_03\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_04\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_05\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_06\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_07\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_08\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_09\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_10\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_11\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_12\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_13\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_14\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_15\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_16\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_17\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_18\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_19\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_20\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_21\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_22\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_23\" type=\"STRING\" size=\"256\"/><Column id=\"URIN\" type=\"STRING\" size=\"256\"/><Column id=\"FECES\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER\" type=\"STRING\" size=\"256\"/><Column id=\"CLOTH\" type=\"STRING\" size=\"256\"/><Column id=\"MIN\" type=\"STRING\" size=\"256\"/><Column id=\"DAW_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAW_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IR_INPUT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_IR_INPUT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list2_temp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NIG_MANAGER_ID\" type=\"INT\" size=\"256\"/><Column id=\"NIG_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_OBS\" type=\"STRING\" size=\"256\"/><Column id=\"FECES_OBS\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"CLOTH_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/><Column id=\"RES_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_00\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_01\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_02\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_03\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_04\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_05\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_06\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_07\" type=\"STRING\" size=\"256\"/><Column id=\"TM_MIN_08\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_00\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_01\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_02\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_03\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_04\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_05\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_06\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_07\" type=\"STRING\" size=\"256\"/><Column id=\"F_URIN_08\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_00\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_01\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_02\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_03\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_04\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_05\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_06\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_07\" type=\"STRING\" size=\"256\"/><Column id=\"M_URIN_08\" type=\"STRING\" size=\"256\"/><Column id=\"URIN_QTY_00\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_01\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_02\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_03\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_04\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_05\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_06\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_07\" type=\"INT\" size=\"256\"/><Column id=\"URIN_QTY_08\" type=\"INT\" size=\"256\"/><Column id=\"N_FECES_00\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_01\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_02\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_03\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_04\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_05\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_06\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_07\" type=\"STRING\" size=\"256\"/><Column id=\"N_FECES_08\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_00\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_01\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_02\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_03\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_04\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_05\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_06\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_07\" type=\"STRING\" size=\"256\"/><Column id=\"L_FECES_08\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_00\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_01\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_02\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_03\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_04\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_05\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_06\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_07\" type=\"STRING\" size=\"256\"/><Column id=\"D_FECES_08\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_00\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_01\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_02\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_03\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_04\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_05\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_06\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_07\" type=\"STRING\" size=\"256\"/><Column id=\"N_DIAPER_08\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_00\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_01\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_02\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_03\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_04\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_05\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_06\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_07\" type=\"STRING\" size=\"256\"/><Column id=\"S_DIAPER_08\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_00\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_01\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_02\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_03\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_04\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_05\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_06\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_07\" type=\"STRING\" size=\"256\"/><Column id=\"TM_CLOSE_08\" type=\"STRING\" size=\"256\"/><Column id=\"URIN\" type=\"STRING\" size=\"256\"/><Column id=\"FECES\" type=\"STRING\" size=\"256\"/><Column id=\"DIAPER\" type=\"STRING\" size=\"256\"/><Column id=\"CLOTH\" type=\"STRING\" size=\"256\"/><Column id=\"MIN\" type=\"STRING\" size=\"256\"/><Column id=\"DAW_MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DAW_MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IR_INPUT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_IR_INPUT_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","110",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","10","443",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_border("0px solid rgba(0,0,0,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","40",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"69\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"일자\" cssclass=\"CellEssential\"/><Cell col=\"4\" text=\"입소자성명\" cssclass=\"CellEssential\"/><Cell col=\"5\" text=\"층\"/><Cell col=\"6\" text=\"생활실\" displaytype=\"normal\"/><Cell col=\"7\" text=\"등록자ID\"/><Cell col=\"8\" text=\"등록자명\"/><Cell col=\"9\" text=\"등록일자\"/><Cell col=\"10\" text=\"수정자명\"/><Cell col=\"11\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:ROWNUM\"/><Cell col=\"3\" text=\"bind:EXC_DT\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:RES_NM\"/><Cell col=\"5\" text=\"bind:AREA\" combocodecol=\"ARE_CD\" combodatacol=\"ARE_NM\" combodataset=\"ds_area\" displaytype=\"combotext\"/><Cell col=\"6\" text=\"bind:LOCATION\" combocodecol=\"LOC_CD\" combodatacol=\"LOC_NM\" combodataset=\"ds_location_all\" displaytype=\"combotext\"/><Cell col=\"7\" text=\"bind:REG_USER\"/><Cell col=\"8\" text=\"bind:REG_USER_NM\"/><Cell col=\"9\" text=\"bind:REG_DT\" displaytype=\"date\"/><Cell col=\"10\" text=\"bind:MOD_USER_NM\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("statc_divcont_title","0","7","200","22",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("배변일지");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_addrow",null,"0","80","29","0",null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_paging","0",null,null,"30","0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("3");
            obj.set_url("CM_POP::CM_PAGING_DIV.xfdl");
            obj.set_text("");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_gMove","443","43.68%","25","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_right","468","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_border("0px solid rgba(0,0,0,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02","0","9","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("335");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_name","342","13","92","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name","226","9","114","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("336");
            obj.set_text("입소자성명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","37","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("339");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01","0","9","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("340");
            obj.set_text("배설관찰일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name00_01","226","37","114","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("341");
            obj.set_text("주간관찰자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_birthday2_00","102","13","122","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_cssclass("essential");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_00","0","65","100","57",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("342");
            obj.set_text("주간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01","99","65","128","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("343");
            obj.set_text("배뇨관찰");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_00","99","93","40","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("344");
            obj.set_text("소량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_00_00","138","93","40","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("345");
            obj.set_text("다량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_00_00_00","177","93","50","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("346");
            obj.set_text("소변량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_01","226","65","118","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("347");
            obj.set_text("배변관찰");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_00_01","226","93","40","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("348");
            obj.set_text("정상");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_00_00_01","265","93","40","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("349");
            obj.set_text("실변");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_00_00_01_00","304","93","40","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("350");
            obj.set_text("설사");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_01_00","343","65","89","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("351");
            obj.set_text("기져귀교환");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_00_01_00","343","93","40","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("352");
            obj.set_text("일반");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_00_00_01_01","382","93","50","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("353");
            obj.set_text("스마트");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_01_00_00","431","65","51","57",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("354");
            obj.set_text("옷교환");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_00","0","121","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("355");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f00","99","125","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("6");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m00","138","125","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("7");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            obj.set_value("0");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n00","226","125","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("9");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l00","265","125","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("10");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d00","304","125","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("11");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn00","343","125","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("12");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s00","382","125","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("13");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c00","431","125","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("14");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area","0","125","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("356");
            obj.set_text("00 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min00","40","125","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            obj.set_text("");
            obj.set_index("-1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q00","180","125","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("8");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_01","0","149","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("357");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c01","431","153","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("24");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s01","382","153","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("23");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn01","343","153","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("22");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d01","304","153","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("21");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l01","265","153","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("20");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n01","226","153","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("19");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q01","180","153","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("18");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_type("number");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m01","138","153","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("17");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f01","99","153","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("16");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min01","40","153","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("15");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area00","0","153","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("358");
            obj.set_text("01 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_02","0","177","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("359");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c02","431","181","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("34");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s02","382","181","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("33");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn02","343","181","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("32");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d02","304","181","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("31");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l02","265","181","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("30");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n02","226","181","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("29");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q02","180","181","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("28");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m02","138","181","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("27");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f02","99","181","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("26");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min02","40","181","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("25");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area00_00","0","181","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("360");
            obj.set_text("02 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_03","0","205","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("361");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c03","431","209","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("44");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s03","382","209","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("43");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn03","343","209","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("42");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d03","304","209","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("41");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l03","265","209","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("40");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n03","226","209","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("39");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q03","180","209","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("38");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m03","138","209","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("37");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f03","99","209","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("36");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min03","40","209","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("35");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area00_00_00","0","209","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("362");
            obj.set_text("03 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_04","0","233","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("363");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c04","431","237","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("54");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s04","382","237","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("53");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn04","343","237","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("52");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d04","304","237","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("51");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l04","265","237","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("50");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n04","226","237","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("49");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q04","180","237","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("48");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m04","138","237","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("47");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f04","99","237","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("46");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min04","40","237","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("45");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area00_00_00_00","0","237","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("364");
            obj.set_text("04 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_05","0","261","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("365");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c05","431","265","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("64");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s05","382","265","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("63");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn05","343","265","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("62");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d05","304","265","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("61");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l05","265","265","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("60");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n05","226","265","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("59");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q05","180","265","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("58");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m05","138","265","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("57");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f05","99","265","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("56");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min05","40","265","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("55");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area00_00_00_00_00","0","265","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("366");
            obj.set_text("05 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_06","0","289","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("367");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c06","431","293","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("74");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s06","382","293","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("73");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn06","343","293","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("72");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d06","304","293","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("71");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l06","265","293","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("70");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n06","226","293","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("69");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q06","180","293","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("68");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m06","138","293","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("67");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f06","99","293","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("66");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min06","40","293","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("65");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area00_00_00_00_00_00","0","293","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("368");
            obj.set_text("06 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_07","0","317","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("369");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c07","431","321","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("84");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s07","382","321","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("83");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn07","343","321","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("82");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d07","304","321","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("81");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l07","265","321","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("80");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n07","226","321","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("79");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q07","180","321","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("78");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m07","138","321","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("77");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f07","99","321","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("76");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min07","40","321","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("75");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area00_00_00_00_00_00_00","0","321","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("370");
            obj.set_text("07 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_08","0","345","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("371");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c08","431","349","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("94");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s08","382","349","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("93");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn08","343","349","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("92");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d08","304","349","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("91");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l08","265","349","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("90");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n08","226","349","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("89");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q08","180","349","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("88");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m08","138","349","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("87");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f08","99","349","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("86");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min08","40","349","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("85");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area00_00_00_00_00_00_00_00","0","349","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("372");
            obj.set_text("08 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_09","0","373","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("373");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_border("1px solid orange,1px solid silver,0px none");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c09","431","377","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("104");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s09","382","377","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("103");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn09","343","377","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("102");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d09","304","377","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("101");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l09","265","377","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("100");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n09","226","377","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("99");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q09","180","377","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("98");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m09","138","377","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("97");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f09","99","377","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("96");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min09","40","377","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("95");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area00_00_00_00_00_00_00_00_00","0","377","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("374");
            obj.set_text("09 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_10","0","401","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("375");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c10","431","405","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("114");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s10","382","405","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("113");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn10","343","405","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("112");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d10","304","405","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("111");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l10","265","405","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("110");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n10","226","405","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("109");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q10","180","405","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("108");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m10","138","405","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("107");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f10","99","405","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("106");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min10","40","405","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("105");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area00_00_00_00_00_00_00_00_00_00","0","405","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("376");
            obj.set_text("10 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_11","0","429","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("377");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c11","431","433","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("124");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s11","382","433","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("123");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn11","343","433","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("122");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d11","304","433","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("121");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l11","265","433","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("120");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n11","226","433","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("119");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q11","180","433","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("118");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m11","138","433","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("117");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f11","99","433","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("116");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min11","40","433","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("115");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area00_00_00_00_00_00_00_00_00_00_00","0","433","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("378");
            obj.set_text("11 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_12","0","457","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("379");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c12","431","461","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("134");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s12","382","461","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("133");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn12","343","461","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("132");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d12","304","461","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("131");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l12","265","461","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("130");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n12","226","461","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("129");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q12","180","461","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("128");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m12","138","461","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("127");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f12","99","461","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("126");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min12","40","461","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("125");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area00_00_00_00_00_00_00_00_00_00_00_00","0","461","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("380");
            obj.set_text("12 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_13","0","485","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("381");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c13","431","489","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("144");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s13","382","489","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("143");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn13","343","489","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("142");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d13","304","489","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("141");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l13","265","489","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("140");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n13","226","489","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("139");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q13","180","489","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("138");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m13","138","489","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("137");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f13","99","489","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("136");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min13","40","489","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("135");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area00_00_00_00_00_00_00_00_00_00_00_00_00","0","489","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("382");
            obj.set_text("13 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_14","0","513","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("383");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c14","431","517","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("154");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s14","382","517","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("153");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn14","343","517","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("152");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d14","304","517","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("151");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l14","265","517","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("150");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n14","226","517","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("149");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q14","180","517","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("148");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m14","138","517","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("147");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f14","99","517","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("146");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min14","40","517","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("145");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","517","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("384");
            obj.set_text("14 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_15","0","541","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("385");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c15","431","545","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("164");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s15","382","545","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("163");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn15","343","545","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("162");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d15","304","545","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("161");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l15","265","545","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("160");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n15","226","545","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("159");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q15","180","545","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("158");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m15","138","545","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("157");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f15","99","545","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("156");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min15","40","545","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("155");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","545","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("386");
            obj.set_text("15 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_16","0","569","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("387");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c16","431","573","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("174");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s16","382","573","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("173");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn16","343","573","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("172");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d16","304","573","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("171");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l16","265","573","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("170");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n16","226","573","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("169");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q16","180","573","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("168");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m16","138","573","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("167");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f16","99","573","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("166");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min16","40","573","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("165");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","573","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("388");
            obj.set_text("16 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_17","0","597","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("389");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c17","431","601","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("184");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s17","382","601","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("183");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn17","343","601","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("182");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d17","304","601","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("181");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l17","265","601","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("180");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n17","226","601","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("179");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q17","180","601","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("178");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m17","138","601","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("177");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f17","99","601","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("176");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min17","40","601","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("175");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","601","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("390");
            obj.set_text("17 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static02_02","490","9","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("391");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name00_02","827","9","50","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("392");
            obj.set_text("생활실");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name02","733","9","30","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("393");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","490","37","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("394");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_02","490","37","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("395");
            obj.set_text("야간관찰자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_00_00","490","65","100","57",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("396");
            obj.set_text("야간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_02","589","65","128","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("397");
            obj.set_text("배뇨관찰");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_00_02","589","93","40","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("398");
            obj.set_text("소량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_00_00_02","628","93","40","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("399");
            obj.set_text("다량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_00_00_00_00","667","93","50","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("400");
            obj.set_text("소변량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_00_01_01","716","93","40","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("401");
            obj.set_text("정상");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_01_01","716","65","118","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("402");
            obj.set_text("배변관찰");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_00_00_01_02","755","93","40","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("403");
            obj.set_text("실변");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_00_00_01_00_00","794","93","40","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("404");
            obj.set_text("설사");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_00_01_00_00","833","93","40","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("405");
            obj.set_text("일반");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_01_00_01","833","65","89","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("406");
            obj.set_text("기져귀교환");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_00_00_01_01_00","872","93","50","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("407");
            obj.set_text("스마트");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_01_01_00_00_00","921","65","51","57",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("408");
            obj.set_text("옷교환");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_18","490","121","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("409");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s18","872","125","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("193");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn18","833","125","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("192");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d18","794","125","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("191");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l18","755","125","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("190");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n18","716","125","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("189");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q18","670","125","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("188");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m18","628","125","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("187");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f18","589","125","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("186");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min18","530","125","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("185");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area01","490","125","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("410");
            obj.set_text("18 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c18","921","125","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("194");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_19","490","149","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("411");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area01_00","490","153","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("412");
            obj.set_text("19 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min19","530","153","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("195");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f19","589","153","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("196");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m19","628","153","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("197");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q19","670","153","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("198");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n19","716","153","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("199");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l19","755","153","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("200");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d19","794","153","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("201");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn19","833","153","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("202");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s19","872","153","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("203");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c19","921","153","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("204");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_20","490","177","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("413");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area01_00_00","490","181","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("414");
            obj.set_text("20 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min20","530","181","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("205");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f20","589","181","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("206");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m20","628","181","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("207");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q20","670","181","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("208");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n20","716","181","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("209");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l20","755","181","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("210");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d20","794","181","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("211");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn20","833","181","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("212");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s20","872","181","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("213");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c20","921","181","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("214");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_21","490","205","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("415");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area01_00_00_00","490","209","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("416");
            obj.set_text("21 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min21","530","209","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("215");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f21","589","209","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("216");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m21","628","209","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("217");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q21","670","209","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("218");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n21","716","209","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("219");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l21","755","209","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("220");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d21","794","209","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("221");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn21","833","209","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("222");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s21","872","209","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("223");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c21","921","209","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("224");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_22","490","233","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("417");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area01_00_00_00_00","490","237","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("418");
            obj.set_text("22 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min22","530","237","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("225");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f22","589","237","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("226");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m22","628","237","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("227");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q22","670","237","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("228");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n22","716","237","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("229");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l22","755","237","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("230");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d22","794","237","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("231");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn22","833","237","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("232");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s22","872","237","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("233");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c22","921","237","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("234");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_23","490","261","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("419");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area01_00_00_00_00_00","490","265","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("420");
            obj.set_text("23 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_min23","530","265","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("235");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_f23","589","265","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("236");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_m23","628","265","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("237");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_q23","670","265","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("238");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_n23","716","265","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("239");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_l23","755","265","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("240");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_d23","794","265","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("241");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_dn23","833","265","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("242");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_s23","872","265","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("243");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_c23","921","265","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("244");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_t00","490","373","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("421");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area01_00_00_00_00_00_00","490","377","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("422");
            obj.set_text("00 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_tmin00","530","377","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("245");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tf00","589","377","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("246");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tm00","628","377","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("247");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_tq00","670","377","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("248");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tn00","716","377","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("249");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tl00","755","377","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("250");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_td00","794","377","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("251");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tdn00","833","377","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("252");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tds00","872","377","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("253");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tc00","921","377","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("254");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_t01","490","401","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("423");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area01_00_00_00_00_00_00_00","490","405","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("424");
            obj.set_text("01 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_tmin01","530","405","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("255");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tf01","589","405","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("256");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tm01","628","405","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("257");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_tq01","670","405","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("258");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tn01","716","405","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("259");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tl01","755","405","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("260");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_td01","794","405","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("261");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tdn01","833","405","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("262");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tds01","872","405","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("263");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tc01","921","405","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("264");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_t02","490","429","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("425");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area01_00_00_00_00_00_00_00_00","490","433","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("426");
            obj.set_text("02 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_tmin02","530","433","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("265");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tf02","589","433","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("266");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tm02","628","433","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("267");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_tq02","670","433","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("268");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tn02","716","433","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("269");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tl02","755","433","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("270");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_td02","794","433","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("271");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tdn02","833","433","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("272");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tds02","872","433","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("273");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tc02","921","433","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("274");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_t03","490","457","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("427");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area01_00_00_00_00_00_00_00_00_00","490","461","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("428");
            obj.set_text("03 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_tmin03","530","461","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("275");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tf03","589","461","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("276");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tm03","628","461","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("277");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_tq03","670","461","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("278");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tn03","716","461","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("279");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tl03","755","461","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("280");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_td03","794","461","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("281");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tdn03","833","461","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("282");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tds03","872","461","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("283");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tc03","921","461","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("284");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_t04","490","485","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("429");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area01_00_00_00_00_00_00_00_00_00_00","490","489","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("430");
            obj.set_text("04 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_tmin04","530","489","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("285");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tf04","589","489","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("286");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tm04","628","489","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("287");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_tq04","670","489","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("288");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tn04","716","489","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("289");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tl04","755","489","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("290");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_td04","794","489","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("291");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tdn04","833","489","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("292");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tds04","872","489","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("293");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tc04","921","489","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("294");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_t05","490","513","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("431");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area01_00_00_00_00_00_00_00_00_00_00_00","490","517","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("432");
            obj.set_text("05 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_tmin05","530","517","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("295");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tf05","589","517","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("296");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tm05","628","517","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("297");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_tq05","670","517","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("298");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tn05","716","517","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("299");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tl05","755","517","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("300");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_td05","794","517","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("301");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tdn05","833","517","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("302");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tds05","872","517","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("303");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tc05","921","517","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("304");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_t06","490","541","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("433");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area01_00_00_00_00_00_00_00_00_00_00_00_00","490","545","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("434");
            obj.set_text("06 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_tmin06","530","545","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("305");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tf06","589","545","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("306");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tm06","628","545","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("307");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_tq06","670","545","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("308");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tn06","716","545","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("309");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tl06","755","545","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("310");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_td06","794","545","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("311");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tdn06","833","545","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("312");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tds06","872","545","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("313");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tc06","921","545","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("314");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_t07","490","569","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("435");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area01_00_00_00_00_00_00_00_00_00_00_00_00_00","490","573","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("436");
            obj.set_text("07 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_tmin07","530","573","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("315");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tf07","589","573","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("316");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tm07","628","573","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("317");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_tq07","670","573","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("318");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tn07","716","573","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("319");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tl07","755","573","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("320");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_td07","794","573","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("321");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tdn07","833","573","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("322");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tds07","872","573","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("323");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tc07","921","573","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("324");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_t08","490","597","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("437");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_area01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","490","601","40","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("438");
            obj.set_text("08 :");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_tmin08","530","601","59","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("325");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_minute");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tf08","589","601","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("326");
            obj.set_falsevalue("1");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tm08","628","601","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("327");
            obj.set_falsevalue("1");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("msk_tq08","670","601","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("328");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_limitbymask("integer");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tn08","716","601","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("329");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tl08","755","601","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("330");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_td08","794","601","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("331");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tdn08","833","601","40","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("332");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tds08","872","601","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("333");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_tc08","921","601","50","20",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("334");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_iconPosition("right");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","490","345","482","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("439");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_03","490","345","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("440");
            obj.set_text("명일관찰일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_birthday2_00_00","592","349","130","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("441");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_res_pp","437","12","25","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("442");
            obj.set_background("url(\'imagerc::btn_WF_SearchSmall_P.png\') no-repeat rgba(255,255,255,1)");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_area_i","765","13","60","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_datacolumn("ARE_NM");
            obj.set_type("filterlike");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("ARE_CD");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_enable("true");
            obj.set_background("");
            obj.set_index("-1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_location_i","879","13","90","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("3");
            obj.set_codecolumn("LOC_CD");
            obj.set_datacolumn("LOC_NM");
            obj.set_type("filterlike");
            obj.set_innerdataset("ds_location_all");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_index("-1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_day_manager_nm","342","41","92","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("444");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_day_manager","437","41","25","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("445");
            obj.set_background("url(\'imagerc::btn_WF_SearchSmall_P.png\') no-repeat rgba(255,255,255,1)");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_nig_manager_nm","593","41","92","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("446");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_nig_manager","688","41","25","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("447");
            obj.set_background("url(\'imagerc::btn_WF_SearchSmall_P.png\') no-repeat rgba(255,255,255,1)");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name00","491","9","40","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("337");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name00_00","579","9","40","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("338");
            obj.set_text("생일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_birthday2","621","13","110","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Combo("cmb_location_i00","533","13","44","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("443");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_innerdataset("ds_nu_sex");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_index("-1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_daw_manager_nm","0","37","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("448");
            obj.set_text("새벽관찰자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_daw_manager_nm","102","41","92","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("449");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_daw_manager","199","41","25","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("450");
            obj.set_background("url(\'imagerc::btn_WF_SearchSmall_P.png\') no-repeat rgba(255,255,255,1)");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_name01_02_00","724","345","100","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("451");
            obj.set_text("명일새벽관찰자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_nig_manager_nm00","827","349","92","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("452");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_tom_nig_manager","922","349","25","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("453");
            obj.set_background("url(\'imagerc::btn_WF_SearchSmall_P.png\') no-repeat rgba(255,255,255,1)");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.addChild(obj.name, obj);

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

            obj = new Static("sta_edate","-45","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("일자");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_sdate","90","25","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_area","200","25","60","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","270","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_datacolumn("ARE_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("ARE_CD");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_location","420","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("생활실");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","520","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_codecolumn("LOC_CD");
            obj.set_datacolumn("LOC_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_location");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_name","660","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("입소자성명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_name","760","25","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_color("black");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_res_pp","876","25","25","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_background("url(\'imagerc::btn_WF_SearchSmall_P.png\') no-repeat rgba(255,255,255,1)");
            obj.set_tabstop("false");
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

            obj = new BindItem("item1","div_cont.form.div_right.form.div_head.form.edt_cellphone00","value","ds_head","LONG_TERM_CARE_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_cont.form.div_right.form.edt_name","value","ds_list","RES_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_right.form.cal_birthday2","value","ds_list","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.cal_birthday2_00","value","ds_list","EXC_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.cmb_min00","value","ds_list","TM_MIN_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.cmb_min01","value","ds_list","TM_MIN_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.cmb_min02","value","ds_list","TM_MIN_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.cmb_min03","value","ds_list","TM_MIN_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.cmb_min04","value","ds_list","TM_MIN_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.cmb_min05","value","ds_list","TM_MIN_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.cmb_min06","value","ds_list","TM_MIN_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.cmb_min07","value","ds_list","TM_MIN_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.cmb_min08","value","ds_list","TM_MIN_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.cmb_min09","value","ds_list","TM_MIN_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.cmb_min10","value","ds_list","TM_MIN_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.cmb_min11","value","ds_list","TM_MIN_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_right.form.cmb_min12","value","ds_list","TM_MIN_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.cmb_min13","value","ds_list","TM_MIN_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.cmb_min14","value","ds_list","TM_MIN_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.cmb_min15","value","ds_list","TM_MIN_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.cmb_min16","value","ds_list","TM_MIN_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.cmb_min17","value","ds_list","TM_MIN_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_right.form.cmb_min18","value","ds_list","TM_MIN_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.cmb_min19","value","ds_list","TM_MIN_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.cmb_min20","value","ds_list","TM_MIN_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_right.form.cmb_min21","value","ds_list","TM_MIN_21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_right.form.cmb_min22","value","ds_list","TM_MIN_22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_right.form.cmb_min23","value","ds_list","TM_MIN_23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_right.form.cmb_tmin00","value","ds_list2","TM_MIN_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_right.form.cmb_tmin01","value","ds_list2","TM_MIN_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_right.form.cmb_tmin02","value","ds_list2","TM_MIN_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_right.form.cmb_tmin03","value","ds_list2","TM_MIN_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_right.form.cmb_tmin04","value","ds_list2","TM_MIN_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_right.form.cmb_tmin05","value","ds_list2","TM_MIN_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.cmb_tmin06","value","ds_list2","TM_MIN_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.cmb_tmin07","value","ds_list2","TM_MIN_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.div_right.form.cmb_tmin08","value","ds_list2","TM_MIN_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.div_right.form.cal_birthday2_00_00","value","ds_list2","EXC_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.cal_sdate","value","ds_search","DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_search.form.edt_name","value","ds_search","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.cmb_area_i","value","ds_list","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_right.form.cmb_location_i","value","ds_list","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.div_right.form.chk_f00","value","ds_list","F_URIN_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.div_right.form.chk_m00","value","ds_list","M_URIN_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.div_right.form.chk_f01","value","ds_list","F_URIN_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.div_right.form.chk_f02","value","ds_list","F_URIN_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.div_right.form.chk_f03","value","ds_list","F_URIN_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.div_right.form.chk_f04","value","ds_list","F_URIN_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.div_right.form.chk_f05","value","ds_list","F_URIN_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.div_right.form.chk_f06","value","ds_list","F_URIN_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.div_right.form.chk_f07","value","ds_list","F_URIN_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.div_right.form.chk_f08","value","ds_list","F_URIN_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.div_right.form.chk_f09","value","ds_list","F_URIN_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.div_right.form.chk_f10","value","ds_list","F_URIN_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.div_right.form.chk_f11","value","ds_list","F_URIN_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_cont.form.div_right.form.chk_f12","value","ds_list","F_URIN_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_cont.form.div_right.form.chk_f13","value","ds_list","F_URIN_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_cont.form.div_right.form.chk_f14","value","ds_list","F_URIN_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_cont.form.div_right.form.chk_f15","value","ds_list","F_URIN_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_cont.form.div_right.form.chk_f16","value","ds_list","F_URIN_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_cont.form.div_right.form.chk_f17","value","ds_list","F_URIN_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_cont.form.div_right.form.chk_f18","value","ds_list","F_URIN_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_cont.form.div_right.form.chk_f19","value","ds_list","F_URIN_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_cont.form.div_right.form.chk_f20","value","ds_list","F_URIN_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_cont.form.div_right.form.chk_f21","value","ds_list","F_URIN_21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","div_cont.form.div_right.form.chk_f22","value","ds_list","F_URIN_22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","div_cont.form.div_right.form.chk_f23","value","ds_list","F_URIN_23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_cont.form.div_right.form.chk_m01","value","ds_list","M_URIN_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_cont.form.div_right.form.chk_m02","value","ds_list","M_URIN_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_cont.form.div_right.form.chk_m03","value","ds_list","M_URIN_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_cont.form.div_right.form.chk_m04","value","ds_list","M_URIN_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","div_cont.form.div_right.form.chk_m05","value","ds_list","M_URIN_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","div_cont.form.div_right.form.chk_m06","value","ds_list","M_URIN_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","div_cont.form.div_right.form.chk_m07","value","ds_list","M_URIN_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","div_cont.form.div_right.form.chk_m08","value","ds_list","M_URIN_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","div_cont.form.div_right.form.chk_m09","value","ds_list","M_URIN_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","div_cont.form.div_right.form.chk_m10","value","ds_list","M_URIN_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","div_cont.form.div_right.form.chk_m11","value","ds_list","M_URIN_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","div_cont.form.div_right.form.chk_m12","value","ds_list","M_URIN_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","div_cont.form.div_right.form.chk_m13","value","ds_list","M_URIN_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","div_cont.form.div_right.form.chk_m14","value","ds_list","M_URIN_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","div_cont.form.div_right.form.chk_m15","value","ds_list","M_URIN_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","div_cont.form.div_right.form.chk_m16","value","ds_list","M_URIN_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","div_cont.form.div_right.form.chk_m17","value","ds_list","M_URIN_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","div_cont.form.div_right.form.chk_m18","value","ds_list","M_URIN_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","div_cont.form.div_right.form.chk_m19","value","ds_list","M_URIN_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","div_cont.form.div_right.form.chk_m20","value","ds_list","M_URIN_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","div_cont.form.div_right.form.chk_m21","value","ds_list","M_URIN_21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","div_cont.form.div_right.form.chk_m22","value","ds_list","M_URIN_22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","div_cont.form.div_right.form.chk_m23","value","ds_list","M_URIN_23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","div_cont.form.div_right.form.msk_q00","value","ds_list","URIN_QTY_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","div_cont.form.div_right.form.msk_q01","value","ds_list","URIN_QTY_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","div_cont.form.div_right.form.msk_q02","value","ds_list","URIN_QTY_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","div_cont.form.div_right.form.msk_q03","value","ds_list","URIN_QTY_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","div_cont.form.div_right.form.msk_q04","value","ds_list","URIN_QTY_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","div_cont.form.div_right.form.msk_q05","value","ds_list","URIN_QTY_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","div_cont.form.div_right.form.msk_q06","value","ds_list","URIN_QTY_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","div_cont.form.div_right.form.msk_q07","value","ds_list","URIN_QTY_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","div_cont.form.div_right.form.msk_q08","value","ds_list","URIN_QTY_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","div_cont.form.div_right.form.msk_q09","value","ds_list","URIN_QTY_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","div_cont.form.div_right.form.msk_q10","value","ds_list","URIN_QTY_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","div_cont.form.div_right.form.msk_q11","value","ds_list","URIN_QTY_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","div_cont.form.div_right.form.msk_q12","value","ds_list","URIN_QTY_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","div_cont.form.div_right.form.msk_q13","value","ds_list","URIN_QTY_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","div_cont.form.div_right.form.msk_q14","value","ds_list","URIN_QTY_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","div_cont.form.div_right.form.msk_q15","value","ds_list","URIN_QTY_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","div_cont.form.div_right.form.msk_q16","value","ds_list","URIN_QTY_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","div_cont.form.div_right.form.msk_q17","value","ds_list","URIN_QTY_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","div_cont.form.div_right.form.msk_q18","value","ds_list","URIN_QTY_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item116","div_cont.form.div_right.form.msk_q19","value","ds_list","URIN_QTY_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item117","div_cont.form.div_right.form.msk_q20","value","ds_list","URIN_QTY_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item118","div_cont.form.div_right.form.msk_q21","value","ds_list","URIN_QTY_21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item119","div_cont.form.div_right.form.msk_q22","value","ds_list","URIN_QTY_22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item120","div_cont.form.div_right.form.msk_q23","value","ds_list","URIN_QTY_23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item121","div_cont.form.div_right.form.chk_n00","value","ds_list","N_FECES_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item122","div_cont.form.div_right.form.chk_n01","value","ds_list","N_FECES_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item123","div_cont.form.div_right.form.chk_n02","value","ds_list","N_FECES_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item124","div_cont.form.div_right.form.chk_n03","value","ds_list","N_FECES_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item125","div_cont.form.div_right.form.chk_n04","value","ds_list","N_FECES_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item126","div_cont.form.div_right.form.chk_n05","value","ds_list","N_FECES_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item127","div_cont.form.div_right.form.chk_n06","value","ds_list","N_FECES_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item128","div_cont.form.div_right.form.chk_n07","value","ds_list","N_FECES_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item129","div_cont.form.div_right.form.chk_n08","value","ds_list","N_FECES_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item130","div_cont.form.div_right.form.chk_n09","value","ds_list","N_FECES_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item131","div_cont.form.div_right.form.chk_n10","value","ds_list","N_FECES_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item132","div_cont.form.div_right.form.chk_n11","value","ds_list","N_FECES_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item133","div_cont.form.div_right.form.chk_n12","value","ds_list","N_FECES_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item134","div_cont.form.div_right.form.chk_n13","value","ds_list","N_FECES_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item135","div_cont.form.div_right.form.chk_n14","value","ds_list","N_FECES_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item136","div_cont.form.div_right.form.chk_n15","value","ds_list","N_FECES_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item137","div_cont.form.div_right.form.chk_n16","value","ds_list","N_FECES_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item138","div_cont.form.div_right.form.chk_n17","value","ds_list","N_FECES_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item139","div_cont.form.div_right.form.chk_n18","value","ds_list","N_FECES_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item140","div_cont.form.div_right.form.chk_n19","value","ds_list","N_FECES_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item141","div_cont.form.div_right.form.chk_n20","value","ds_list","N_FECES_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item142","div_cont.form.div_right.form.chk_n21","value","ds_list","N_FECES_21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item143","div_cont.form.div_right.form.chk_n22","value","ds_list","N_FECES_22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item144","div_cont.form.div_right.form.chk_n23","value","ds_list","N_FECES_23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item145","div_cont.form.div_right.form.chk_l00","value","ds_list","L_FECES_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item146","div_cont.form.div_right.form.chk_l01","value","ds_list","L_FECES_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item147","div_cont.form.div_right.form.chk_l02","value","ds_list","L_FECES_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item148","div_cont.form.div_right.form.chk_l03","value","ds_list","L_FECES_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item149","div_cont.form.div_right.form.chk_l04","value","ds_list","L_FECES_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item150","div_cont.form.div_right.form.chk_l05","value","ds_list","L_FECES_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item151","div_cont.form.div_right.form.chk_l06","value","ds_list","L_FECES_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item152","div_cont.form.div_right.form.chk_l07","value","ds_list","L_FECES_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item153","div_cont.form.div_right.form.chk_l08","value","ds_list","L_FECES_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item154","div_cont.form.div_right.form.chk_l09","value","ds_list","L_FECES_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item155","div_cont.form.div_right.form.chk_l10","value","ds_list","L_FECES_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item156","div_cont.form.div_right.form.chk_l11","value","ds_list","L_FECES_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item157","div_cont.form.div_right.form.chk_l12","value","ds_list","L_FECES_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item158","div_cont.form.div_right.form.chk_l13","value","ds_list","L_FECES_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item159","div_cont.form.div_right.form.chk_l14","value","ds_list","L_FECES_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item160","div_cont.form.div_right.form.chk_l15","value","ds_list","L_FECES_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item161","div_cont.form.div_right.form.chk_l16","value","ds_list","L_FECES_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item162","div_cont.form.div_right.form.chk_l17","value","ds_list","L_FECES_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item163","div_cont.form.div_right.form.chk_l18","value","ds_list","L_FECES_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item164","div_cont.form.div_right.form.chk_l19","value","ds_list","L_FECES_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item165","div_cont.form.div_right.form.chk_l20","value","ds_list","L_FECES_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item166","div_cont.form.div_right.form.chk_l21","value","ds_list","L_FECES_21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item167","div_cont.form.div_right.form.chk_l22","value","ds_list","L_FECES_22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item168","div_cont.form.div_right.form.chk_l23","value","ds_list","L_FECES_23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item169","div_cont.form.div_right.form.chk_d00","value","ds_list","D_FECES_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item170","div_cont.form.div_right.form.chk_d01","value","ds_list","D_FECES_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item171","div_cont.form.div_right.form.chk_d02","value","ds_list","D_FECES_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item172","div_cont.form.div_right.form.chk_d03","value","ds_list","D_FECES_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item173","div_cont.form.div_right.form.chk_d04","value","ds_list","D_FECES_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item174","div_cont.form.div_right.form.chk_d05","value","ds_list","D_FECES_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item175","div_cont.form.div_right.form.chk_d06","value","ds_list","D_FECES_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item176","div_cont.form.div_right.form.chk_d07","value","ds_list","D_FECES_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item177","div_cont.form.div_right.form.chk_d08","value","ds_list","D_FECES_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item178","div_cont.form.div_right.form.chk_d09","value","ds_list","D_FECES_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item179","div_cont.form.div_right.form.chk_d10","value","ds_list","D_FECES_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item180","div_cont.form.div_right.form.chk_d11","value","ds_list","D_FECES_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item181","div_cont.form.div_right.form.chk_d12","value","ds_list","D_FECES_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item182","div_cont.form.div_right.form.chk_d13","value","ds_list","D_FECES_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item183","div_cont.form.div_right.form.chk_d14","value","ds_list","D_FECES_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item184","div_cont.form.div_right.form.chk_d15","value","ds_list","D_FECES_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item185","div_cont.form.div_right.form.chk_d16","value","ds_list","D_FECES_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item186","div_cont.form.div_right.form.chk_d17","value","ds_list","D_FECES_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item187","div_cont.form.div_right.form.chk_d18","value","ds_list","D_FECES_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item188","div_cont.form.div_right.form.chk_d19","value","ds_list","D_FECES_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item189","div_cont.form.div_right.form.chk_d20","value","ds_list","D_FECES_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item190","div_cont.form.div_right.form.chk_d21","value","ds_list","D_FECES_21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item191","div_cont.form.div_right.form.chk_d22","value","ds_list","D_FECES_22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item192","div_cont.form.div_right.form.chk_d23","value","ds_list","D_FECES_23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item193","div_cont.form.div_right.form.chk_dn00","value","ds_list","N_DIAPER_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item194","div_cont.form.div_right.form.chk_dn01","value","ds_list","N_DIAPER_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item195","div_cont.form.div_right.form.chk_dn02","value","ds_list","N_DIAPER_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item196","div_cont.form.div_right.form.chk_dn03","value","ds_list","N_DIAPER_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item197","div_cont.form.div_right.form.chk_dn04","value","ds_list","N_DIAPER_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item198","div_cont.form.div_right.form.chk_dn05","value","ds_list","N_DIAPER_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item199","div_cont.form.div_right.form.chk_dn06","value","ds_list","N_DIAPER_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item200","div_cont.form.div_right.form.chk_dn07","value","ds_list","N_DIAPER_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item201","div_cont.form.div_right.form.chk_dn08","value","ds_list","N_DIAPER_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item202","div_cont.form.div_right.form.chk_dn09","value","ds_list","N_DIAPER_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item203","div_cont.form.div_right.form.chk_dn10","value","ds_list","N_DIAPER_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item204","div_cont.form.div_right.form.chk_dn11","value","ds_list","N_DIAPER_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item205","div_cont.form.div_right.form.chk_dn12","value","ds_list","N_DIAPER_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item206","div_cont.form.div_right.form.chk_dn13","value","ds_list","N_DIAPER_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item207","div_cont.form.div_right.form.chk_dn14","value","ds_list","N_DIAPER_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item208","div_cont.form.div_right.form.chk_dn15","value","ds_list","N_DIAPER_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item209","div_cont.form.div_right.form.chk_dn16","value","ds_list","N_DIAPER_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item210","div_cont.form.div_right.form.chk_dn17","value","ds_list","N_DIAPER_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item211","div_cont.form.div_right.form.chk_dn18","value","ds_list","N_DIAPER_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item212","div_cont.form.div_right.form.chk_dn19","value","ds_list","N_DIAPER_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item213","div_cont.form.div_right.form.chk_dn20","value","ds_list","N_DIAPER_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item214","div_cont.form.div_right.form.chk_dn21","value","ds_list","N_DIAPER_21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item215","div_cont.form.div_right.form.chk_dn22","value","ds_list","N_DIAPER_22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item216","div_cont.form.div_right.form.chk_dn23","value","ds_list","N_DIAPER_23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item217","div_cont.form.div_right.form.chk_s00","value","ds_list","S_DIAPER_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item218","div_cont.form.div_right.form.chk_s01","value","ds_list","S_DIAPER_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item219","div_cont.form.div_right.form.chk_s02","value","ds_list","S_DIAPER_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item220","div_cont.form.div_right.form.chk_s03","value","ds_list","S_DIAPER_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item221","div_cont.form.div_right.form.chk_s04","value","ds_list","S_DIAPER_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item222","div_cont.form.div_right.form.chk_s05","value","ds_list","S_DIAPER_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item223","div_cont.form.div_right.form.chk_s06","value","ds_list","S_DIAPER_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item224","div_cont.form.div_right.form.chk_s07","value","ds_list","S_DIAPER_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item225","div_cont.form.div_right.form.chk_s08","value","ds_list","S_DIAPER_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item226","div_cont.form.div_right.form.chk_s09","value","ds_list","S_DIAPER_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item227","div_cont.form.div_right.form.chk_s10","value","ds_list","S_DIAPER_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item228","div_cont.form.div_right.form.chk_s11","value","ds_list","S_DIAPER_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item229","div_cont.form.div_right.form.chk_s12","value","ds_list","S_DIAPER_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item230","div_cont.form.div_right.form.chk_s13","value","ds_list","S_DIAPER_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item231","div_cont.form.div_right.form.chk_s14","value","ds_list","S_DIAPER_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item232","div_cont.form.div_right.form.chk_s15","value","ds_list","S_DIAPER_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item233","div_cont.form.div_right.form.chk_s16","value","ds_list","S_DIAPER_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item234","div_cont.form.div_right.form.chk_s17","value","ds_list","S_DIAPER_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item235","div_cont.form.div_right.form.chk_s18","value","ds_list","S_DIAPER_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item236","div_cont.form.div_right.form.chk_s19","value","ds_list","S_DIAPER_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item237","div_cont.form.div_right.form.chk_s20","value","ds_list","S_DIAPER_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item238","div_cont.form.div_right.form.chk_s21","value","ds_list","S_DIAPER_21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item239","div_cont.form.div_right.form.chk_s22","value","ds_list","S_DIAPER_22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item240","div_cont.form.div_right.form.chk_s23","value","ds_list","S_DIAPER_23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item241","div_cont.form.div_right.form.chk_c00","value","ds_list","TM_CLOSE_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item242","div_cont.form.div_right.form.chk_c01","value","ds_list","TM_CLOSE_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item243","div_cont.form.div_right.form.chk_c02","value","ds_list","TM_CLOSE_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item244","div_cont.form.div_right.form.chk_c03","value","ds_list","TM_CLOSE_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item245","div_cont.form.div_right.form.chk_c04","value","ds_list","TM_CLOSE_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item246","div_cont.form.div_right.form.chk_c05","value","ds_list","TM_CLOSE_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item247","div_cont.form.div_right.form.chk_c06","value","ds_list","TM_CLOSE_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item248","div_cont.form.div_right.form.chk_c07","value","ds_list","TM_CLOSE_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item249","div_cont.form.div_right.form.chk_c08","value","ds_list","TM_CLOSE_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item250","div_cont.form.div_right.form.chk_c09","value","ds_list","TM_CLOSE_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item251","div_cont.form.div_right.form.chk_c10","value","ds_list","TM_CLOSE_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item252","div_cont.form.div_right.form.chk_c11","value","ds_list","TM_CLOSE_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item253","div_cont.form.div_right.form.chk_c12","value","ds_list","TM_CLOSE_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item254","div_cont.form.div_right.form.chk_c13","value","ds_list","TM_CLOSE_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item255","div_cont.form.div_right.form.chk_c14","value","ds_list","TM_CLOSE_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item256","div_cont.form.div_right.form.chk_c15","value","ds_list","TM_CLOSE_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item257","div_cont.form.div_right.form.chk_c16","value","ds_list","TM_CLOSE_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item258","div_cont.form.div_right.form.chk_c17","value","ds_list","TM_CLOSE_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item259","div_cont.form.div_right.form.chk_c18","value","ds_list","TM_CLOSE_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item260","div_cont.form.div_right.form.chk_c19","value","ds_list","TM_CLOSE_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item261","div_cont.form.div_right.form.chk_c20","value","ds_list","TM_CLOSE_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item262","div_cont.form.div_right.form.chk_c21","value","ds_list","TM_CLOSE_21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item263","div_cont.form.div_right.form.chk_c22","value","ds_list","TM_CLOSE_22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item264","div_cont.form.div_right.form.chk_c23","value","ds_list","TM_CLOSE_23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.div_right.form.cmb_location_i00","value","ds_list","SEX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item265","div_cont.form.div_right.form.chk_tf00","value","ds_list2","F_URIN_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item266","div_cont.form.div_right.form.chk_tf01","value","ds_list2","F_URIN_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item267","div_cont.form.div_right.form.chk_tm00","value","ds_list2","M_URIN_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item268","div_cont.form.div_right.form.chk_tm01","value","ds_list2","M_URIN_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item269","div_cont.form.div_right.form.chk_tf02","value","ds_list2","F_URIN_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item270","div_cont.form.div_right.form.chk_tm02","value","ds_list2","M_URIN_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item271","div_cont.form.div_right.form.chk_tf03","value","ds_list2","F_URIN_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item272","div_cont.form.div_right.form.chk_tm03","value","ds_list2","M_URIN_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item273","div_cont.form.div_right.form.chk_tf04","value","ds_list2","F_URIN_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item274","div_cont.form.div_right.form.chk_tm04","value","ds_list2","M_URIN_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item275","div_cont.form.div_right.form.chk_tf05","value","ds_list2","F_URIN_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item276","div_cont.form.div_right.form.chk_tm05","value","ds_list2","M_URIN_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item277","div_cont.form.div_right.form.chk_tf06","value","ds_list2","F_URIN_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item278","div_cont.form.div_right.form.chk_tm06","value","ds_list2","M_URIN_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item279","div_cont.form.div_right.form.chk_tf07","value","ds_list2","F_URIN_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item280","div_cont.form.div_right.form.chk_tm07","value","ds_list2","M_URIN_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item281","div_cont.form.div_right.form.chk_tf08","value","ds_list2","F_URIN_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item282","div_cont.form.div_right.form.chk_tm08","value","ds_list2","M_URIN_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item283","div_cont.form.div_right.form.msk_tq08","value","ds_list2","URIN_QTY_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item284","div_cont.form.div_right.form.msk_tq07","value","ds_list2","URIN_QTY_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item285","div_cont.form.div_right.form.msk_tq06","value","ds_list2","URIN_QTY_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item286","div_cont.form.div_right.form.msk_tq05","value","ds_list2","URIN_QTY_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item287","div_cont.form.div_right.form.msk_tq04","value","ds_list2","URIN_QTY_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item288","div_cont.form.div_right.form.msk_tq03","value","ds_list2","URIN_QTY_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item289","div_cont.form.div_right.form.msk_tq02","value","ds_list2","URIN_QTY_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item290","div_cont.form.div_right.form.msk_tq01","value","ds_list2","URIN_QTY_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item291","div_cont.form.div_right.form.msk_tq00","value","ds_list2","URIN_QTY_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item292","div_cont.form.div_right.form.chk_tn00","value","ds_list2","N_FECES_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item293","div_cont.form.div_right.form.chk_tl00","value","ds_list2","L_FECES_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item294","div_cont.form.div_right.form.chk_td00","value","ds_list2","D_FECES_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item295","div_cont.form.div_right.form.chk_tdn00","value","ds_list2","N_DIAPER_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item296","div_cont.form.div_right.form.chk_tds00","value","ds_list2","S_DIAPER_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item297","div_cont.form.div_right.form.chk_tc00","value","ds_list2","TM_CLOSE_00");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item298","div_cont.form.div_right.form.chk_tn01","value","ds_list2","N_FECES_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item299","div_cont.form.div_right.form.chk_tl01","value","ds_list2","L_FECES_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item300","div_cont.form.div_right.form.chk_td01","value","ds_list2","D_FECES_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item301","div_cont.form.div_right.form.chk_tdn01","value","ds_list2","N_DIAPER_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item302","div_cont.form.div_right.form.chk_tds01","value","ds_list2","S_DIAPER_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item303","div_cont.form.div_right.form.chk_tc01","value","ds_list2","TM_CLOSE_01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item304","div_cont.form.div_right.form.chk_tn02","value","ds_list2","N_FECES_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item305","div_cont.form.div_right.form.chk_tl02","value","ds_list2","L_FECES_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item306","div_cont.form.div_right.form.chk_td02","value","ds_list2","D_FECES_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item307","div_cont.form.div_right.form.chk_tdn02","value","ds_list2","N_DIAPER_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item308","div_cont.form.div_right.form.chk_tds02","value","ds_list2","S_DIAPER_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item309","div_cont.form.div_right.form.chk_tc02","value","ds_list2","TM_CLOSE_02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item310","div_cont.form.div_right.form.chk_tn03","value","ds_list2","N_FECES_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item311","div_cont.form.div_right.form.chk_tl03","value","ds_list2","L_FECES_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item312","div_cont.form.div_right.form.chk_td03","value","ds_list2","D_FECES_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item313","div_cont.form.div_right.form.chk_tdn03","value","ds_list2","N_DIAPER_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item314","div_cont.form.div_right.form.chk_tds03","value","ds_list2","S_DIAPER_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item315","div_cont.form.div_right.form.chk_tc03","value","ds_list2","TM_CLOSE_03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item316","div_cont.form.div_right.form.chk_tn04","value","ds_list2","N_FECES_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item317","div_cont.form.div_right.form.chk_tl04","value","ds_list2","L_FECES_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item318","div_cont.form.div_right.form.chk_td04","value","ds_list2","D_FECES_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item319","div_cont.form.div_right.form.chk_tdn04","value","ds_list2","N_DIAPER_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item320","div_cont.form.div_right.form.chk_tds04","value","ds_list2","S_DIAPER_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item321","div_cont.form.div_right.form.chk_tc04","value","ds_list2","TM_CLOSE_04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item322","div_cont.form.div_right.form.chk_tn05","value","ds_list2","N_FECES_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item323","div_cont.form.div_right.form.chk_tl05","value","ds_list2","L_FECES_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item324","div_cont.form.div_right.form.chk_td05","value","ds_list2","D_FECES_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item325","div_cont.form.div_right.form.chk_tdn05","value","ds_list2","N_DIAPER_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item326","div_cont.form.div_right.form.chk_tds05","value","ds_list2","S_DIAPER_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item327","div_cont.form.div_right.form.chk_tc05","value","ds_list2","TM_CLOSE_05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item328","div_cont.form.div_right.form.chk_tn06","value","ds_list2","N_FECES_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item329","div_cont.form.div_right.form.chk_tl06","value","ds_list2","L_FECES_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item330","div_cont.form.div_right.form.chk_td06","value","ds_list2","D_FECES_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item331","div_cont.form.div_right.form.chk_tdn06","value","ds_list2","N_DIAPER_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item332","div_cont.form.div_right.form.chk_tds06","value","ds_list2","S_DIAPER_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item333","div_cont.form.div_right.form.chk_tc06","value","ds_list2","TM_CLOSE_06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item334","div_cont.form.div_right.form.chk_tn07","value","ds_list2","N_FECES_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item335","div_cont.form.div_right.form.chk_tl07","value","ds_list2","L_FECES_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item336","div_cont.form.div_right.form.chk_td07","value","ds_list2","D_FECES_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item337","div_cont.form.div_right.form.chk_tdn07","value","ds_list2","N_DIAPER_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item338","div_cont.form.div_right.form.chk_tds07","value","ds_list2","S_DIAPER_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item339","div_cont.form.div_right.form.chk_tc07","value","ds_list2","TM_CLOSE_07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item340","div_cont.form.div_right.form.chk_tn08","value","ds_list2","N_FECES_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item341","div_cont.form.div_right.form.chk_tl08","value","ds_list2","L_FECES_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item342","div_cont.form.div_right.form.chk_td08","value","ds_list2","D_FECES_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item343","div_cont.form.div_right.form.chk_tdn08","value","ds_list2","N_DIAPER_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item344","div_cont.form.div_right.form.chk_tds08","value","ds_list2","S_DIAPER_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item345","div_cont.form.div_right.form.chk_tc08","value","ds_list2","TM_CLOSE_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.edt_day_manager_nm","value","ds_list","DAY_MANAGER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_right.form.edt_nig_manager_nm","value","ds_list","NIG_MANAGER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item346","div_cont.form.div_right.form.edt_daw_manager_nm","value","ds_list","DAW_MANAGER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item347","div_cont.form.div_right.form.edt_nig_manager_nm00","value","ds_list2","DAW_MANAGER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM_POP::CM_PAGING_DIV.xfdl");
        };
        
        // User Script
        this.addIncludeScript("NUA310QR.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA310QR.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA310QR.xfdl", function() {
        /***********************************************************************
         * 화면ID   : NUA310CT.xfdl
         * 화면명   :
         * 화면설명 : 집중배설관찰일지
         * 작성일   : 2021-06-23 10:32
         * 작성자   : SOOIM
         * 수정이력 :
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2021.06.23		SOOIM		최초작성
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
        var saveFlag = "N";
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
        	this.ds_search.setColumn(0,"DT",Sct.Util.getToday());
        	//상태삭제순번컬럼 고정
        	//this.div_cont.form.div_left.form.grd_head.setFormatColProperty(2, "band", "left");
        	//rowTypeValidation 설정
        	var dsArr = ["ds_list"];
        	this.gfn_rowTypeValidationDs(dsArr);
        	this.fn_setComboDs(obj);
        	//drag 버튼 활성화
        	this.gfn_setDivDrag(this.div_cont.form.btn_gMove, this.div_cont.form.div_left, this.div_cont.form.div_right);
        	//페이징 처리 초기화
        	this.fn_initPageSet();
        	// 오픈시 전체 조회
        	//this.fn_search();

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.cal_sdate.setFocus();
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
        	this.div_cont.form.div_left.form.div_paging.form.fn_init(this, this.ds_list);	//페이지 form 초기화

        }
        this.fn_setComboDs = function(obj)
        {
             var comboDsParamArr = [
        //                          { outDsName : "ds_location", sqlId : "NUA310CT.NUA310CT_DS_LOCATION_S", param : this.ds_search, bEmptyRow : true}
        //                        , { outDsName : "ds_room", sqlId : "NUA310CT.NUA310CT_DS_ROOM_S",param : this.ds_search, bEmptyRow : true}
        					    { outDsName : "ds_manager", sqlId : "NUA310CT.NUA310CT_DS_MANAGER_S",param : this.ds_search, bEmptyRow : true}
        					   , { outDsName : "ds_area", sqlId : "NUA310CT.NUA310CT_DS_AREA_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : true} // 층 조회
        					   , { outDsName : "ds_location_all", sqlId : "NUA310CT.NUA310CT_DS_LOCATION_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : true} // 생활실 전체 조회
        					   , { outDsName : "ds_minute", sqlId : "NUA310CT.NUA310CT_DS_MINUTE_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : false}
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
        	 return true;
        };

        //저장 전 validation
        this.fn_save_pre = function ()
        {
        	//저장여부
        	if (!(Sct.Grid.hasInsertAndUpdateRow(this.ds_list)||Sct.Grid.hasInsertAndUpdateRow(this.ds_list2)))
        	{
        		Sct.alert(this, "000240"); //추가나 수정한 데이터가 없습니다.
        		return false;
        	}

        	//입력 필수여부체크
        	if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;

        	//입력한값 중복 여부 체크
        	var keyArr = ["COMPANY_CD", "RES_ID","EXC_DT"];

        	if(!this.gfn_duplicateCheck(this.fv_currentDS, keyArr)) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	//데이터 저장전 저장할 key 값 dataset 변수에 저장
        	this.gfn_saveKeyArrCurrentRow(this.ds_list, keyArr);
        	this.fv_saveRefNo = this.ds_list.getColumn(this.ds_list.rowposition, "RES_ID");
        	return true;
        };


        // 삭제 전 validation
        this.fn_delete_pre = function ()
        {
        	if (!Sct.Grid.hasDeletedRow(this.ds_list))
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
        	var outDatasets = "ds_list=output1 ds_list_temp=output1";
        	var argument = "method=getListPaging "
        		+ "sqlId=NUA310CT.NUA310CT_DS_LIST_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        //저장
        this.fn_save = function ()
        {
        	//입력 필수여부체크
        	if(!this.fn_save_pre()) return false;
        	//쪼개진 컬럼 합체 ds_list

        	if(!this.fn_ds_set()) return false;

        	//쪼개진 컬럼 합체 ds_list2
        	if(!this.fn_ds2_set()) return false;

        	var svcId = "save";
        	var params = "/NUA310CTController.do";
        	var inDatasets = "input1=ds_list:U input2=ds_list2:U";
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
        	var params = "/NUA310CTController.do";
        	var inDatasets = "input1=ds_list:U";
        	var outDatasets = "";
        	var sqlId = "NUA310CT.NUA310CT_DS_LIST_D";
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
        			this.div_cont.form.div_left.form.div_paging.form.fn_callAfter();
        			//저장후 조회후 변경된 row로 rowposition 설정
        			this.gfn_saveAfterFindRow(this.ds_list);
        			//this.fn_findMstRow(this.fv_saveRefNo);
        			if(count<1){
        				this.ds_list2.clearData();
        			}
        		}else if(strSvcID == "save" || strSvcID == "delete")
        		{
        			this.fn_search();
        		}else if(strSvcID == "tom_search"){
        			if(this.ds_list2.rowcount==0){
        				this.fn_list2_add();
        			}
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
        		+ "sqlId=NUA310CT.NUA310CT_DS_LOCATION_S "
        		+ " COMPANY_CD="+fv_Company
        		+ " AREA="+col;

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        this.fn_tom_search = function(){
        	var resId = this.ds_list.getColumn(this.ds_list.rowposition,"RES_ID");
        	var excDt = this.ds_list.getColumn(this.ds_list.rowposition,"EXC_DT");
        	var svcId = "tom_search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_list2=output1 ds_list2_temp=output1";
        	var argument = "method=getList "
        		+ "sqlId='NUA310CT.NUA310CT_DS_LIST2_S' "
        		+ "COMPANY_CD=" + fv_Company + " "
        		+ "RES_ID=" + resId + " "
        		+ "EXC_DT=" + excDt + "	";
        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        }
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
        	this.ds_list2.clearData();
        	var nRow = this.ds_list.addRow();
        	//초기화
        	this.ds_list.setColumn(nRow, "COMPANY_CD",fv_Company);								//회사코드
        	this.ds_list.setColumn(nRow, "IR_INPUT_FLAG", '000000000000000000000000');
        	// 접속자가 간호사, 요양사 경우 주관관찰자에 저장
        	if(nexacro.getApplication().gds_userInfo.getColumn(0,"RANK_CD") == "7"
        	|| nexacro.getApplication().gds_userInfo.getColumn(0,"RANK_CD") == "8"){
        		var userId = nexacro.getApplication().gds_userInfo.getColumn(0,"USER_ID");
        		this.ds_list.setColumn(nRow, "DAY_MANAGER_ID",userId);
        	}

        	//행추가시 NULL이라 기본데이터 0으로 셋팅
        	for(var i=0; i<24; i++){
        		if(i<10){
        			this.ds_list.setColumn(nRow,"TM_MIN_0"+i,"00"); //분 00분으로 셋팅
        			this.ds_list.setColumn(nRow,"M_URIN_0"+i,1); //배뇨관찰 소량 1으로 셋팅
        			this.ds_list.setColumn(nRow,"F_URIN_0"+i,1); //배뇨관찰 다량 1으로 셋팅
        			this.ds_list.setColumn(nRow,"N_FECES_0"+i,0); //배변관찰 정상 0
        			this.ds_list.setColumn(nRow,"L_FECES_0"+i,0); //배변관찰 실변 0
        			this.ds_list.setColumn(nRow,"D_FECES_0"+i,0); //배변관찰 설사 0
        			this.ds_list.setColumn(nRow,"N_DIAPER_0"+i,0); //기저귀 교환 일반 0
        			this.ds_list.setColumn(nRow,"S_DIAPER_0"+i,0); //기저귀 교환 스마트 0
        			this.ds_list.setColumn(nRow,"TM_CLOSE_0"+i,0); // 옷교환 0URIN_QTY00
        			this.ds_list.setColumn(nRow,"URIN_QTY_0"+i,0); // 소변량 URIN_QTY00
        		}else{
        			this.ds_list.setColumn(nRow,"TM_MIN_"+i,"00"); //분 00분으로 셋팅
        			this.ds_list.setColumn(nRow,"M_URIN_"+i,1);
        			this.ds_list.setColumn(nRow,"F_URIN_"+i,1);
        			this.ds_list.setColumn(nRow,"N_FECES_"+i,0);
        			this.ds_list.setColumn(nRow,"L_FECES_"+i,0);
        			this.ds_list.setColumn(nRow,"D_FECES_"+i,0);
        			this.ds_list.setColumn(nRow,"N_DIAPER_"+i,0); //기저귀 교환 일반 0
        			this.ds_list.setColumn(nRow,"S_DIAPER_"+i,0); //기저귀 교환 스마트 0
        			this.ds_list.setColumn(nRow,"TM_CLOSE_"+i,0); // 옷교환 0
        			this.ds_list.setColumn(nRow,"URIN_QTY_"+i,0); // 소변량 URIN_QTY00
        		}
        	}
        };
        this.fn_list2_add = function(){
        	var nRow = this.ds_list2.addRow();
        	//초기화
        	this.ds_list2.setColumn(nRow, "COMPANY_CD",fv_Company);								//회사코드
        	this.ds_list2.setColumn(nRow, "EXC_DT", Sct.Util.addDate(this.ds_list.getColumn(this.ds_list.rowposition,"EXC_DT"),1));
        	this.ds_list2.setColumn(nRow, "RES_ID", this.ds_list.getColumn(this.ds_list.rowposition,"RES_ID"));
        	this.ds_list2.setColumn(nRow, "IR_INPUT_FLAG", '00000000');
        	//행추가시 NULL이라 기본데이터 0으로 셋팅
        	for(var i=0; i<9; i++){
        		if(i<10){
        			this.ds_list2.setColumn(nRow,"TM_MIN_0"+i,"00"); //분 00분으로 셋팅
        			this.ds_list2.setColumn(nRow,"M_URIN_0"+i,1); //배뇨관찰 소량 0으로 셋팅
        			this.ds_list2.setColumn(nRow,"F_URIN_0"+i,1); //배뇨관찰 다량 0으로 셋팅
        			this.ds_list2.setColumn(nRow,"N_FECES_0"+i,0); //배변관찰 정상 0
        			this.ds_list2.setColumn(nRow,"L_FECES_0"+i,0); //배변관찰 실변 0
        			this.ds_list2.setColumn(nRow,"D_FECES_0"+i,0); //배변관찰 설사 0
        			this.ds_list2.setColumn(nRow,"N_DIAPER_0"+i,0); //기저귀 교환 일반 0
        			this.ds_list2.setColumn(nRow,"S_DIAPER_0"+i,0); //기저귀 교환 스마트 0
        			this.ds_list2.setColumn(nRow,"TM_CLOSE_0"+i,0); // 옷교환 0URIN_QTY00
        			this.ds_list2.setColumn(nRow,"URIN_QTY_0"+i,0); // 소변량 URIN_QTY00
        		}else{
        			this.ds_list2.setColumn(nRow,"TM_MIN_"+i,"00"); //분 00분으로 셋팅
        			this.ds_list2.setColumn(nRow,"M_URIN_"+i,1);
        			this.ds_list2.setColumn(nRow,"F_URIN_"+i,1);
        			this.ds_list2.setColumn(nRow,"N_FECES_"+i,0);
        			this.ds_list2.setColumn(nRow,"L_FECES_"+i,0);
        			this.ds_list2.setColumn(nRow,"D_FECES_"+i,0);
        			this.ds_list2.setColumn(nRow,"N_DIAPER_"+i,0); //기저귀 교환 일반 0
        			this.ds_list2.setColumn(nRow,"S_DIAPER_"+i,0); //기저귀 교환 스마트 0
        			this.ds_list2.setColumn(nRow,"TM_CLOSE_"+i,0); // 옷교환 0
        			this.ds_list2.setColumn(nRow,"URIN_QTY_"+i,0); // 소변량 URIN_QTY00
        		}
        	}
        }

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
        						this.ds_list.setColumn(this.ds_list.rowposition, "SEX", objDs.getColumn(0, "SEX"));
        						this.ds_list.setColumn(this.ds_list.rowposition, "BIRTHDAY", objDs.getColumn(0, "BIRTHDAY"));
        						this.ds_list.setColumn(this.ds_list.rowposition, "AREA", objDs.getColumn(0, "AREA"));
        						this.ds_list.setColumn(this.ds_list.rowposition, "LOCATION", objDs.getColumn(0, "LOCATION"));
        		break;
        		case "RES_NM" : this.ds_search.setColumn(0, "NAME", objDs.getColumn(0, "NAME"));
        						this.ds_search.setColumn(0, "RES_ID", objDs.getColumn(0, "RES_ID"));
        						this.ds_search.setColumn(0, "AREA", objDs.getColumn(0, "AREA"));
        						var area = this.ds_search.getColumn(0, "AREA"); //층
        						if(!Sct.Util.isEmpty(area)){ //층에 해당되는 생활실 조회
        							this.fn_location_search("ds_location", area);
        						}
        						this.ds_search.setColumn(0, "LOCATION", objDs.getColumn(0, "LOCATION"));
        		break;
        		case "DAY_MANAGER_ID" : this.ds_list.setColumn(this.ds_list.rowposition,"DAY_MANAGER_ID",objDs.getColumn(0,"USER_ID"));
        								this.ds_list.setColumn(this.ds_list.rowposition,"DAY_MANAGER_NM",objDs.getColumn(0,"USER_NM_KOR"));
        		break;
        		case "NIG_MANAGER_ID" : this.ds_list.setColumn(this.ds_list.rowposition,"NIG_MANAGER_ID",objDs.getColumn(0,"USER_ID"));
        								this.ds_list.setColumn(this.ds_list.rowposition,"NIG_MANAGER_NM",objDs.getColumn(0,"USER_NM_KOR"));
        		break;
        		case "DAW_MANAGER_ID" : this.ds_list.setColumn(this.ds_list.rowposition,"DAW_MANAGER_ID",objDs.getColumn(0,"USER_ID"));
        								this.ds_list.setColumn(this.ds_list.rowposition,"DAW_MANAGER_NM",objDs.getColumn(0,"USER_NM_KOR"));
        		break;
        		case "TOM_DAW_MANAGER_ID" : this.ds_list2.setColumn(this.ds_list2.rowposition,"DAW_MANAGER_ID",objDs.getColumn(0,"USER_ID"));
        									this.ds_list2.setColumn(this.ds_list2.rowposition,"DAW_MANAGER_NM",objDs.getColumn(0,"USER_NM_KOR"));
        		break;
        	}

        };

        this.div_search_btn_res_pp_onclick = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company,
        		AREA : this.ds_search.getColumn(0,"AREA"),
        		LOCATION : this.ds_search.getColumn(0,"LOCATION"),
        		TABLE_NM : "T_NU_EXCRETION"
        	};
        	Sct.popup(this, "RES_NM", 326, 226, "", param, "CM_POP::CM_RES_DATA_INPUT_YN_PP.xfdl", "fn_popCallback");
        };

        //검색조건 층 콤보박스 변경 이벤트
        this.div_search_cmb_area_onitemchanged = function(obj,e)
        {
        	var area = this.ds_search.getColumn(0, "AREA"); //층

        	this.ds_search.setColumn(0, "LOCATION", ""); // 생활실 값 초기화
        	this.ds_search.setColumn(0, "RES_ID", null); // 생활실 값 초기화
        	this.ds_search.setColumn(0, "NAME", null); // 생활실 값 초기화
        	if(!Sct.Util.isEmpty(area)){ //층에 해당되는 생활실 조회
        		this.fn_location_search("ds_location", area);

        		var nInsertRow = this.ds_location.insertRow();
        		this.ds_location.setColumn(nInsertRow,"ARE_CD","");
        	}else{
        		this.ds_location.clearData();
        	}
        };
        this.div_search_cal_sdate_onchanged = function(obj,e)
        {
        	if(this.ds_search.getColumn(0,"RES_ID")!=null){
        		this.fn_search();
        	}
        };

        ////////////////////////////////////////////////ds_list용////////////////////////////////////////
        this.ds_list_oncolumnchanged = function(obj,e)
        {
        	var chkFlag = e.columnid.substring(0,3); // 각 컬럼 구분자


        	if(chkFlag == "F_U" || chkFlag == "M_U"){ //배뇨관찰 (소량,다량)
        		var urinMM = e.columnid.substring(7,9); //배뇨관찰 시간대  F_URIN00

        		if(chkFlag == "F_U"){
        			this.ds_list.setColumn(e.row, "M_URIN_"+urinMM,1);
        		}
        		if(chkFlag == "M_U"){
        			this.ds_list.setColumn(e.row, "F_URIN_"+urinMM,1);
        		}
        	}
        	if(chkFlag == "N_F" || chkFlag == "L_F"||chkFlag == "D_F"){ //배변관찰(정상,실변,설사)
        		var fecesMM = e.columnid.substring(8,10); //배변 시간대  L_FECES_00

        		if(chkFlag == "N_F"){
        			this.ds_list.setColumn(e.row, "L_FECES_"+fecesMM,0);
        			this.ds_list.setColumn(e.row, "D_FECES_"+fecesMM,0);
        		}
        		if(chkFlag == "L_F"){
        			this.ds_list.setColumn(e.row, "N_FECES_"+fecesMM,0);
        			this.ds_list.setColumn(e.row, "D_FECES_"+fecesMM,0);
        		}
        		if(chkFlag == "D_F"){
        			this.ds_list.setColumn(e.row, "L_FECES_"+fecesMM,0);
        			this.ds_list.setColumn(e.row, "N_FECES_"+fecesMM,0);
        		}
        	}
        	if(chkFlag == "N_D" || chkFlag == "S_D"){ //기저귀교환(일반,스마트)
        		var diaperMM = e.columnid.substring(9,11); //기저귀 시간대  S_DIAPER_00
        		if(chkFlag == "N_D"){
        			this.ds_list.setColumn(e.row, "S_DIAPER_"+diaperMM,0);
        		}
        		if(chkFlag == "S_D"){
        			this.ds_list.setColumn(e.row, "N_DIAPER_"+diaperMM,0);
        		}
        	}
        	if(e.columnid == "EXC_DT" ||e.columnid == "RES_ID"){
        		if(!this.gfn_isNull(obj.getColumn(e.row,"EXC_DT"))){
        			if(!this.gfn_isNull(obj.getColumn(e.row,"RES_ID"))){
        				this.fn_tom_search();
        			}
        		}
        	}
        	if(saveFlag == "N"){
        		if(obj.getRowType(e.row) != 2){
        			if(e.columnid.substring(0,2) !="DA" && e.columnid.substring(0,2) !="NI"){
        				var rownum = e.columnid.split('_');
        				rownum = nexacro.toNumber(rownum[2]);
        				var irInputFlag = '';

        				if(e.newvalue!= this.ds_list_temp.getColumn(this.ds_list_temp.findRow("RES_ID",obj.getColumn(e.row,"RES_ID")),e.columnid)){
        					irInputFlag = obj.getColumn(e.row,"IR_INPUT_FLAG");
        					irInputFlag = irInputFlag.substring(0,rownum)+"S"+irInputFlag.substring(rownum+1,24);
        					obj.setColumn(e.row,"IR_INPUT_FLAG",irInputFlag);
        				}
        				if(e.newvalue == this.ds_list_temp.getColumn(this.ds_list_temp.findRow("RES_ID",obj.getColumn(e.row,"RES_ID")),e.columnid)){
        					var oriVal = this.ds_list_temp.getColumn(this.ds_list_temp.findRow("RES_ID",obj.getColumn(e.row,"RES_ID")),"IR_INPUT_FLAG").substr(rownum,1);
        					irInputFlag = obj.getColumn(e.row,"IR_INPUT_FLAG");
        					irInputFlag = irInputFlag.substring(0,rownum)+oriVal+irInputFlag.substring(rownum+1,24);
        					obj.setColumn(e.row,"IR_INPUT_FLAG",irInputFlag);
        				}
        			}
        		}
        	}
        };

        this.fn_ds_set = function(){
        	saveFlag = "Y";
        	for(var a=0; a<this.ds_list.rowcount; a++){
        		if(this.ds_list.getRowType(a)!=1 && this.ds_list.getRowType(a)!=8){
        			var urin = ""; //소변 data
        			var feces = ""; //대변 data
        			var diaper = "";
        			var cloth = "";
        			var min = "";
        			for(var i=0; i<24; i++){ //0~23시
        				if(i<10){
        					//분 데이터 통합
        					min += this.ds_list.getColumn(a,"TM_MIN_0"+i);

        					//소변 데이터 통합
        					if(this.ds_list.getColumn(a,"M_URIN_0"+i)!=1){
        						urin += this.ds_list.getColumn(a,"M_URIN_0"+i);
        					}else{
        						urin += this.ds_list.getColumn(a,"F_URIN_0"+i);
        					}

        					//대변 데이터 통합
        					if(this.ds_list.getColumn(a,"N_FECES_0"+i)!=0){
        						feces += this.ds_list.getColumn(a,"N_FECES_0"+i);
        					}else if(this.ds_list.getColumn(a,"L_FECES_0"+i)!=0){
        						feces += this.ds_list.getColumn(a,"L_FECES_0"+i);
        					}else{
        						feces += this.ds_list.getColumn(a,"D_FECES_0"+i);
        					}

        					//기저귀교환 데이터 통합
        					if(this.ds_list.getColumn(a,"N_DIAPER_0"+i)!=0){
        						diaper += this.ds_list.getColumn(a,"N_DIAPER_0"+i);
        					}else{
        						diaper += this.ds_list.getColumn(a,"S_DIAPER_0"+i);
        					}

        					//옷교환 CLOSE_00
        					cloth += this.ds_list.getColumn(a,"TM_CLOSE_0"+i);
        				}else{
        					//분 데이터 통합
        					min += this.ds_list.getColumn(a,"TM_MIN_"+i);

        					//소변 데이터 통합
        					if(this.ds_list.getColumn(a,"M_URIN_"+i)!=1){
        						urin += this.ds_list.getColumn(a,"M_URIN_"+i);
        					}else{
        						urin += this.ds_list.getColumn(a,"F_URIN_"+i);
        					}

        					//대변 데이터 통합
        					if(this.ds_list.getColumn(a,"N_FECES_"+i)!=0){
        						feces += this.ds_list.getColumn(a,"N_FECES_"+i);
        					}else if(this.ds_list.getColumn(a,"L_FECES_"+i)!=0){
        						feces += this.ds_list.getColumn(a,"L_FECES_"+i);
        					}else{
        						feces += this.ds_list.getColumn(a,"D_FECES_"+i);
        					}

        					//기저귀교환 데이터 통합
        					if(this.ds_list.getColumn(a,"N_DIAPER_"+i)!=0){
        						diaper += this.ds_list.getColumn(a,"N_DIAPER_"+i);
        					}else{
        						diaper += this.ds_list.getColumn(a,"S_DIAPER_"+i);
        					}

        					//옷교환
        					cloth += this.ds_list.getColumn(a,"TM_CLOSE_"+i);
        				}
        			}
        		this.ds_list.setColumn(a,"URIN",urin);
        		this.ds_list.setColumn(a,"FECES",feces);
        		this.ds_list.setColumn(a,"DIAPER",diaper);
        		this.ds_list.setColumn(a,"CLOTH",cloth);
        		this.ds_list.setColumn(a,"MIN",min);
        		}
        	}
        	saveFlag = "N";
        	return true;
        }

        this.ds_list_onrowposchanged = function(obj,e)
        {
        	if(this.ds_list.getRowType(e.newrow)!=2){
        		this.div_cont.form.div_right.form.cal_birthday2_00.set_enable(false);
        		this.div_cont.form.div_right.form.btn_res_pp.set_visible(false);
        		this.div_cont.form.div_right.form.edt_name.set_width(100);
        	}else{
        		this.div_cont.form.div_right.form.cal_birthday2_00.set_enable(true);
        		this.div_cont.form.div_right.form.btn_res_pp.set_visible(true);
        		this.div_cont.form.div_right.form.edt_name.set_width(80);
        	}

        	if(!this.gfn_isNull(this.ds_list.getColumn(e.newrow,"EXC_DT"))){
        		this.fn_tom_search();
        	}
        };


        ////////////////////////////////////////////////ds_list2용////////////////////////////////////////
        this.ds_list2_oncolumnchanged = function(obj,e)
        {
        	var chkFlag = e.columnid.substring(0,3); // 각 컬럼 구분자


        	if(chkFlag == "F_U" || chkFlag == "M_U"){ //배뇨관찰 (소량,다량)
        		var urinMM = e.columnid.substring(7,9); //배뇨관찰 시간대  F_URIN_00
        		if(chkFlag == "F_U"){
        			this.ds_list2.setColumn(e.row, "M_URIN_"+urinMM,1);
        		}
        		if(chkFlag == "M_U"){
        			this.ds_list2.setColumn(e.row, "F_URIN_"+urinMM,1);
        		}
        	}
        	if(chkFlag == "N_F" || chkFlag == "L_F"||chkFlag == "D_F"){ //배변관찰(정상,실변,설사)
        		var fecesMM = e.columnid.substring(8,10); //배변 시간대  L_FECES_00

        		if(chkFlag == "N_F"){
        			this.ds_list2.setColumn(e.row, "L_FECES_"+fecesMM,0);
        			this.ds_list2.setColumn(e.row, "D_FECES_"+fecesMM,0);
        		}
        		if(chkFlag == "L_F"){
        			this.ds_list2.setColumn(e.row, "N_FECES_"+fecesMM,0);
        			this.ds_list2.setColumn(e.row, "D_FECES_"+fecesMM,0);
        		}
        		if(chkFlag == "D_F"){
        			this.ds_list2.setColumn(e.row, "L_FECES_"+fecesMM,0);
        			this.ds_list2.setColumn(e.row, "N_FECES_"+fecesMM,0);
        		}
        	}
        	if(chkFlag == "N_D" || chkFlag == "S_D"){ //기저귀교환(일반,스마트)
        		var diaperMM = e.columnid.substring(9,11); //기저귀 시간대  S_DIAPER_00
        		if(chkFlag == "N_D"){
        			this.ds_list2.setColumn(e.row, "S_DIAPER_"+diaperMM,0);
        		}
        		if(chkFlag == "S_D"){
        			this.ds_list2.setColumn(e.row, "N_DIAPER_"+diaperMM,0);
        		}
        	}
        	if(saveFlag == "N"){
        		if(obj.getRowType(e.row) != 2){
        			if(e.columnid.substring(0,2) !="DA" && e.columnid.substring(0,2) !="NI"){
        				var rownum = e.columnid.split('_');
        				rownum = nexacro.toNumber(rownum[2]);
        				var irInputFlag = '';

        				if(e.newvalue!= this.ds_list2_temp.getColumn(this.ds_list2_temp.findRow("RES_ID",obj.getColumn(e.row,"RES_ID")),e.columnid)){
        					irInputFlag = obj.getColumn(e.row,"IR_INPUT_FLAG");
        					irInputFlag = irInputFlag.substring(0,rownum)+"S"+irInputFlag.substring(rownum+1,24);
        					obj.setColumn(e.row,"IR_INPUT_FLAG",irInputFlag);
        				}
        				if(e.newvalue == this.ds_list2_temp.getColumn(this.ds_list2_temp.findRow("RES_ID",obj.getColumn(e.row,"RES_ID")),e.columnid)){
        					var oriVal = this.ds_list2_temp.getColumn(this.ds_list2_temp.findRow("RES_ID",obj.getColumn(e.row,"RES_ID")),"IR_INPUT_FLAG").substr(rownum,1);
        					irInputFlag = obj.getColumn(e.row,"IR_INPUT_FLAG");
        					irInputFlag = irInputFlag.substring(0,rownum)+oriVal+irInputFlag.substring(rownum+1,24);
        					obj.setColumn(e.row,"IR_INPUT_FLAG",irInputFlag);
        				}
        			}
        		}
        	}
        };
        this.fn_ds2_set = function(){
        	saveFlag = "Y";
        	for(var a=0; a<this.ds_list2.rowcount; a++){
        		if(this.ds_list2.getRowType(a)!=1 && this.ds_list2.getRowType(a)!=8){
        			var urin = ""; //소변 data
        			var feces = ""; //대변 data
        			var diaper = "";
        			var cloth = "";
        			var min = "";
        			for(var i=0; i<9; i++){ //0~23시
        				if(i<10){
        					//분 데이터 통합
        					min += this.ds_list2.getColumn(a,"TM_MIN_0"+i);

        					//소변 데이터 통합
        					if(this.ds_list2.getColumn(a,"M_URIN_0"+i)!=1){
        						urin += this.ds_list2.getColumn(a,"M_URIN_0"+i);
        					}else{
        						urin += this.ds_list2.getColumn(a,"F_URIN_0"+i);
        					}

        					//대변 데이터 통합
        					if(this.ds_list2.getColumn(a,"N_FECES_0"+i)!=0){
        						feces += this.ds_list2.getColumn(a,"N_FECES_0"+i);
        					}else if(this.ds_list2.getColumn(a,"L_FECES_0"+i)!=0){
        						feces += this.ds_list2.getColumn(a,"L_FECES_0"+i);
        					}else{
        						feces += this.ds_list2.getColumn(a,"D_FECES_0"+i);
        					}

        					//기저귀교환 데이터 통합
        					if(this.ds_list2.getColumn(a,"N_DIAPER_0"+i)!=0){
        						diaper += this.ds_list2.getColumn(a,"N_DIAPER_0"+i);
        					}else{
        						diaper += this.ds_list2.getColumn(a,"S_DIAPER_0"+i);
        					}

        					//옷교환 CLOSE_00
        					cloth += this.ds_list2.getColumn(a,"TM_CLOSE_0"+i);
        				}else{
        					//분 데이터 통합
        					min += this.ds_list2.getColumn(a,"TM_MIN_"+i);

        					//소변 데이터 통합
        					if(this.ds_list2.getColumn(a,"M_URIN_"+i)!=1){
        						urin += this.ds_list2.getColumn(a,"M_URIN_"+i);
        					}else{
        						urin += this.ds_list2.getColumn(a,"F_URIN_"+i);
        					}

        					//대변 데이터 통합
        					if(this.ds_list2.getColumn(a,"N_FECES_"+i)!=0){
        						feces += this.ds_list2.getColumn(a,"N_FECES_"+i);
        					}else if(this.ds_list2.getColumn(a,"L_FECES_"+i)!=0){
        						feces += this.ds_list2.getColumn(a,"L_FECES_"+i);
        					}else{
        						feces += this.ds_list2.getColumn(a,"D_FECES_"+i);
        					}

        					//기저귀교환 데이터 통합
        					if(this.ds_list2.getColumn(a,"N_DIAPER_"+i)!=0){
        						diaper += this.ds_list2.getColumn(a,"N_DIAPER_"+i);
        					}else{
        						diaper += this.ds_list2.getColumn(a,"S_DIAPER_"+i);
        					}

        					//옷교환 CLOSE_00
        					cloth += this.ds_list2.getColumn(a,"TM_CLOSE_"+i);
        				}
        			}
        		this.ds_list2.setColumn(a,"URIN",urin);
        		this.ds_list2.setColumn(a,"FECES",feces);
        		this.ds_list2.setColumn(a,"DIAPER",diaper);
        		this.ds_list2.setColumn(a,"CLOTH",cloth);
        		this.ds_list2.setColumn(a,"MIN",min);
        		}
        	}
        	saveFlag = "N";
        	return true;
        }

        this.div_cont_div_right_btn_day_manager_onclick = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company
        	};
        	Sct.popup(this, "DAY_MANAGER_ID", 326, 226, "", param, "CM_POP::CM_MANAGER_PP.xfdl", "fn_popCallback");
        };

        this.div_cont_div_right_btn_nig_manager_onclick = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company
        	};
        	Sct.popup(this, "NIG_MANAGER_ID", 326, 226, "", param, "CM_POP::CM_MANAGER_PP.xfdl", "fn_popCallback");
        };

        this.div_cont_div_right_btn_daw_manager_onclick = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company
        	};
        	Sct.popup(this, "DAW_MANAGER_ID", 326, 226, "", param, "CM_POP::CM_MANAGER_PP.xfdl", "fn_popCallback");
        };

        this.div_cont_div_right_btn_tom_nig_manager_onclick = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company
        	};
        	Sct.popup(this, "TOM_DAW_MANAGER_ID", 326, 226, "", param, "CM_POP::CM_MANAGER_PP.xfdl", "fn_popCallback");
        };

        this.fn_edt_onkeyup = function(obj,e)
        {
        	if (e.keycode == "13")
        	{
        		if (obj == this.div_search.form.edt_name)
        		{
        			this.div_search.form.btn_res_pp.click();
        		}
        		else if (obj == this.div_cont.form.div_right.form.edt_name)
        		{
        			this.div_cont.form.div_right.form.btn_res_pp.click();
        		}
        		else if (obj == this.div_cont.form.div_right.form.edt_daw_manager_nm)
        		{
        			this.div_cont.form.div_right.form.btn_daw_manager.click();
        		}
        		else if (obj == this.div_cont.form.div_right.form.edt_day_manager_nm)
        		{
        			this.div_cont.form.div_right.form.btn_day_manager.click();
        		}
        		else if (obj == this.div_cont.form.div_right.form.edt_nig_manager_nm)
        		{
        			this.div_cont.form.div_right.form.btn_nig_manager.click();
        		}
        		else if (obj == this.div_cont.form.div_right.form.edt_nig_manager_nm00)
        		{
        			this.div_cont.form.div_right.form.btn_tom_nig_manager.click();
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
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.statc_divcont_title.addEventHandler("onclick",this.div_cont_statc_divcont_title_onclick,this);
            this.div_cont.form.div_left.form.btn_addrow.addEventHandler("onclick",this.fn_head_addrow,this);
            this.div_cont.form.div_right.form.edt_name.addEventHandler("onkeyup",this.fn_edt_onkeyup,this);
            this.div_cont.form.div_right.form.chk_f00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_m00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min00.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_m01.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_f01.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min01.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_m02.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_f02.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min02.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_m03.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_f03.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min03.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_m04.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_f04.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min04.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_m05.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_f05.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min05.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_m06.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_f06.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min06.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_m07.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_f07.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min07.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_m08.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_f08.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min08.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_m09.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_f09.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min09.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_m10.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_f10.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min10.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_m11.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_f11.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min11.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_m12.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_f12.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min12.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_m13.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_f13.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min13.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_m14.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_f14.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min14.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_m15.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_f15.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min15.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_m16.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_f16.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min16.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_m17.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_f17.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min17.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_m18.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_f18.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min18.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_min19.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_f19.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_m19.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min20.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_f20.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_m20.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min21.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_f21.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_m21.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min22.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_f22.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_m22.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_min23.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.chk_f23.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.chk_m23.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.div_cont.form.div_right.form.cmb_tmin00.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_tmin01.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_tmin02.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_tmin03.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_tmin04.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_tmin05.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_tmin06.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_tmin07.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.cmb_tmin08.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_right.form.btn_res_pp.addEventHandler("onclick",this.div_cont_grd_list_onexpandup,this);
            this.div_cont.form.div_right.form.edt_day_manager_nm.addEventHandler("onkeyup",this.fn_edt_onkeyup,this);
            this.div_cont.form.div_right.form.btn_day_manager.addEventHandler("onclick",this.div_cont_div_right_btn_day_manager_onclick,this);
            this.div_cont.form.div_right.form.edt_nig_manager_nm.addEventHandler("onkeyup",this.fn_edt_onkeyup,this);
            this.div_cont.form.div_right.form.btn_nig_manager.addEventHandler("onclick",this.div_cont_div_right_btn_nig_manager_onclick,this);
            this.div_cont.form.div_right.form.edt_daw_manager_nm.addEventHandler("onkeyup",this.fn_edt_onkeyup,this);
            this.div_cont.form.div_right.form.btn_daw_manager.addEventHandler("onclick",this.div_cont_div_right_btn_daw_manager_onclick,this);
            this.div_cont.form.div_right.form.edt_nig_manager_nm00.addEventHandler("onkeyup",this.fn_edt_onkeyup,this);
            this.div_cont.form.div_right.form.btn_tom_nig_manager.addEventHandler("onclick",this.div_cont_div_right_btn_tom_nig_manager_onclick,this);
            this.div_search.form.cal_sdate.addEventHandler("onchanged",this.div_search_cal_sdate_onchanged,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.div_search_cmb_area_onitemchanged,this);
            this.div_search.form.edt_name.addEventHandler("onkeyup",this.fn_edt_onkeyup,this);
            this.div_search.form.btn_res_pp.addEventHandler("onclick",this.div_search_btn_res_pp_onclick,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
            this.ds_list.addEventHandler("onrowposchanged",this.ds_list_onrowposchanged,this);
            this.ds_detail.addEventHandler("oncolumnchanged",this.ds_detail_oncolumnchanged,this);
            this.ds_list2.addEventHandler("oncolumnchanged",this.ds_list2_oncolumnchanged,this);
            this.ds_list_temp.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
            this.ds_list_temp.addEventHandler("onrowposchanged",this.ds_list_onrowposchanged,this);
            this.ds_list2_temp.addEventHandler("oncolumnchanged",this.ds_list2_oncolumnchanged,this);
        };
        this.loadIncludeScript("NUA310QR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
