(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUA602QR");
            this.set_titletext("촉탁진료등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,569);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cm_service_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_room", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CAR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LONG_TERM_CARE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"DOCTOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOCTOR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SYMPTOM\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TP\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/><Column id=\"CAR_FR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAR_TO_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MED_EXP\" type=\"STRING\" size=\"256\"/><Column id=\"PHA_EXP\" type=\"STRING\" size=\"256\"/><Column id=\"HOSPITAL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HOSPITAL_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CAR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP1\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE1\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP1\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE1\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP2\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE2\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP2\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE2\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP3\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE3\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP3\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE3\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP4\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE4\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP4\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE4\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP5\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE5\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP5\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE5\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP6\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE6\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP6\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE6\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP7\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE7\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP7\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE7\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP8\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE8\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP8\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE8\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP9\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE9\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP9\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE9\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP10\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE10\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP10\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE10\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP11\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE11\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP11\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE11\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP12\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE12\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP12\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE12\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP13\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE13\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP13\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE13\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP14\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE14\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP14\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE14\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP15\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE15\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP15\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE15\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_machine_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CAR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"LONG_TERM_CARE_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_que", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CAR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP1\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE1\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP1\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE1\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP2\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE2\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP2\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE2\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP3\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE3\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP3\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE3\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP4\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE4\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP4\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE4\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP5\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE5\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP5\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE5\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP6\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE6\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP6\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE6\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP7\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE7\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP7\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE7\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP8\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE8\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP8\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE8\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP9\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE9\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP9\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE9\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP10\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE10\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP10\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE10\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP11\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE11\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP11\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE11\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP12\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE12\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP12\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE12\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP13\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE13\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP13\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE13\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP14\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE14\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP14\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE14\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP15\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE15\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP15\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE15\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MED_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MED_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ONE_DOSE\" type=\"STRING\" size=\"256\"/><Column id=\"DAILY_DOSE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REGULAR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DOSE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"BREAKFAST_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LUNCH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DINNNER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_dose_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_dose_time", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_care_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_care_pay", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HEA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_H\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_L\" type=\"STRING\" size=\"256\"/><Column id=\"SUGAR_FBS\" type=\"STRING\" size=\"256\"/><Column id=\"SUGAR_PP2\" type=\"STRING\" size=\"256\"/><Column id=\"PULSE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","0",null,null,"0.00%","0.00%",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_gHMove","780","40.00%","25","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_right","805","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_right_down","0",null,null,"280","0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","12","194","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_right_down.form);
            obj.set_taborder("0");
            obj.set_text("처방내역");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_right_down.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","39",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form.div_right_down.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_readonly("false");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("none");
            obj.set_border("3px solid rgba(119,119,119,1), 1px solid rgba(229,229,229,1), 1px solid rgba(229,229,229,1), 1px solid rgba(229,229,229,1)");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"55\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"투약시작일\"/><Cell col=\"2\" text=\"투약종료일\"/><Cell col=\"3\" text=\"투약유형\"/><Cell col=\"4\" text=\"사진\" cssclass=\"CellEssential\"/><Cell col=\"5\" text=\"약품명\"/><Cell col=\"6\" text=\"1회 투여량\"/><Cell col=\"7\" text=\"1일투여횟수\"/><Cell col=\"8\" text=\"복약유형\"/><Cell col=\"9\" text=\"아침\"/><Cell col=\"10\" text=\"점심\"/><Cell col=\"11\" text=\"저녁\"/><Cell col=\"12\" text=\"취침전\"/><Cell col=\"13\" text=\"약품효능 외\"/><Cell col=\"14\" text=\"등록자ID\"/><Cell col=\"15\" text=\"등록자명\"/><Cell col=\"16\" text=\"등록일자\"/><Cell col=\"17\" text=\"수정자명\"/><Cell col=\"18\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:FROM_DT\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:TO_DT\"/><Cell col=\"3\" text=\"bind:REGULAR_YN\" displaytype=\"combotext\" combodataset=\"ds_nu_dose_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"4\" text=\"bind:FILE_REAL_NAME\" edittype=\"none\" displaytype=\"imagecontrol\" combodataset=\"ds_location\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"5\" text=\"bind:MED_NM\" edittype=\"none\" displaytype=\"normal\" combodataset=\"ds_room\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"6\" edittype=\"none\" textAlign=\"left\" textareaacceptsenter=\"true\" textareaautoselect=\"true\" text=\"bind:ONE_DOSE\" displaytype=\"mask\" maskeditformat=\"#0.0000\"/><Cell col=\"7\" text=\"bind:DAILY_DOSE_CNT\"/><Cell col=\"8\" text=\"bind:DOSE_TP\" combodataset=\"ds_nu_dose_time\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" displaytype=\"combotext\"/><Cell col=\"9\" text=\"bind:BREAKFAST_YN\" displaytype=\"combotext\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"10\" text=\"bind:LUNCH_YN\" displaytype=\"combotext\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"11\" text=\"bind:DINNNER_YN\" displaytype=\"combotext\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"12\" text=\"bind:BED_YN\" displaytype=\"combotext\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"13\" text=\"bind:REMARK\" wordWrap=\"char\" displaytype=\"textareacontrol\" edittype=\"textarea\" textareainputfilter=\"none,alpha,comma,dot,digit,sign,space,symbol\"/><Cell col=\"14\" text=\"bind:REG_USER\"/><Cell col=\"15\" text=\"bind:REG_USER_NM\"/><Cell col=\"16\" displaytype=\"date\" text=\"bind:REG_DT\"/><Cell col=\"17\" text=\"bind:MOD_USER_NM\"/><Cell col=\"18\" displaytype=\"date\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_right_down.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"9","80","29","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_right_down.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_visible("false");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_right.form.div_right_down.addChild(obj.name, obj);

            obj = new Div("div_right_up","0","30",null,null,"0","289",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new BasicChart("cha_care","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form.div_right_up.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_chart");
            obj.set_background("white");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "건강측정 추이차트",
            		"textfont": "normal 700 20pt/normal \"Noto Sans KR\"",
            		"padding": "0px 0px 5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": " normal 400 9pt/normal \"Noto Sans KR\"",
            		"itemtextcolor": "#4c4c4c"
            	},
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12",
            		"visible": false
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12",
            		"visible": false
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "normal 400 10pt/normal \"Noto Sans KR\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "6pt '맑은 고딕'",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "고혈압",
            			"barvisible": "false",
            			"barsize": "65",
            			"itemtextvisible": "false",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:PRE_H",
            			"highlightlinevisible": "false",
            			"linevisible": "true",
            			"itemtexttype": "normal",
            			"tooltiptext": "bind:PRE_H",
            			"pointvisible": "true",
            			"pointsize": "5"
            		},
            		{
            			"id": "series1",
            			"titletext": "저혈압",
            			"barvisible": "false",
            			"barsize": "65",
            			"itemtextvisible": "false",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:PRE_L",
            			"highlightlinevisible": "false",
            			"linevisible": "true",
            			"pointvisible": "true",
            			"pointsize": "5"
            		},
            		{
            			"id": "series2",
            			"titletext": "식전혈당",
            			"barvisible": "false",
            			"barsize": "65",
            			"itemtextvisible": "false",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:SUGAR_FBS",
            			"highlightlinevisible": "false",
            			"linevisible": "true",
            			"pointvisible": "true",
            			"pointsize": "5"
            		},
            		{
            			"id": "series3",
            			"titletext": "식후 2시간 혈당",
            			"barvisible": "false",
            			"barsize": "65",
            			"itemtextvisible": "false",
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:SUGAR_PP2",
            			"highlightlinevisible": "false",
            			"linevisible": "true",
            			"pointvisible": "true",
            			"pointsize": "5"
            		},
            		{
            			"id": "series4",
            			"titletext": "맥박",
            			"valuecolumn": "bind:PULSE",
            			"barvisible": "false",
            			"highlightlinevisible": "false",
            			"linevisible": "true",
            			"pointvisible": "true",
            			"pointsize": "5"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252",
            			"tickmax": "300"
            		}
            	]
            });
            obj.set_categorycolumn("bind:HEA_DT");
            this.div_cont.form.div_right.form.div_right_up.addChild(obj.name, obj);

            obj = new Div("div_left","0","-8","780",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","13","220","30",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("16");
            obj.set_text("촉탁진료 기록");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("Static04_00","0","40","760","29",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm","0","40","130","29",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("18");
            obj.set_text("환자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Edit("edt_com_cd","133","44","100","21",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_autoselect("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_cmp_nm","235","40","130","29",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("19");
            obj.set_text("장기요양 인정번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Edit("edt_cmp_nm","366","44","130","21",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_autoselect("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_cmp_nm00","497","40","130","29",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("20");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Edit("edt_cmp_nm00","628","44","130","21",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("3");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_autoselect("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","0","68","760","29",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00","0","68","130","29",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("22");
            obj.set_text("진료구분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_cmp_nm01","235","68","130","29",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("23");
            obj.set_text("방문일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Calendar("cal_start_date","366","72","130","21",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("5");
            obj.getSetter("calendarfunc").set("calendar");
            obj.set_headformat("yyyy.MM-dd");
            obj.set_readonly("false");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_cmp_nm00_00","497","68","130","29",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("24");
            obj.set_text("병·의원");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Edit("edt_cmp_nm00_00","628","72","105","21",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("6");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_readonly("false");
            obj.set_cssclass("essential");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","0","96","760","29",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00","0","96","130","29",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("26");
            obj.set_text("주상명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Edit("edt_com_cd00","133","100","362","21",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("7");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_readonly("false");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_cmp_nm00_00_00","497","96","130","29",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("27");
            obj.set_text("본인부담");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_question","0","165","780",null,null,"39",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("15");
            obj.set_text("");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Radio("rdo_care_tp","133","71","101","24",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_rowcount("1");
            obj.set_direction("horizontal");
            obj.set_columncount("0");
            obj.set_innerdataset("ds_care_tp");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_index("0");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Radio("rdo_sex00","629","98","125","24",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("8");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_rowcount("1");
            obj.set_direction("horizontal");
            obj.set_columncount("0");
            obj.set_innerdataset("ds_care_pay");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_index("0");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","0","124","760","29",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00","0","124","130","29",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("29");
            obj.set_text("진료시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_cmp_nm01_00","235","124","130","29",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("30");
            obj.set_text("진료비");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_cmp_nm00_00_00_00","497","124","130","29",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("31");
            obj.set_text("약제비");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("Static26","175","128","16","20",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("32");
            obj.set_text(":");
            obj.set_font("8pt \"Malgun Gothic\"");
            obj.set_textAlign("center");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","133","128","45","21",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("9");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_add","680","10","80","29",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_text("진료등록");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","188","128","45","21",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("10");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","366","128","130","21",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("11");
            obj.set_type("number");
            obj.set_textAlign("center");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00","628","128","130","21",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("12");
            obj.set_type("number");
            obj.set_textAlign("center");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_hos_pp","733","72","25","21",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("13");
            obj.set_background("url(\'imagerc::btn_WF_SearchSmall_P.png\') no-repeat rgba(255,255,255,1)");
            obj.set_tabstop("false");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_hos_add","527","10","150","29",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("14");
            obj.set_text("너싱홈 병·의원 받기");
            obj.set_cssclass("btn_com_add");
            obj.set_visible("false");
            this.div_cont.form.div_left.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,569,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","div_cont.form.div_left.form.edt_com_cd","value","ds_head","RES_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_left.form.edt_cmp_nm","value","ds_head","LONG_TERM_CARE_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_left.form.edt_cmp_nm00","value","ds_search","JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_left.form.cal_start_date","value","ds_head","CAR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_left.form.edt_cmp_nm00_00","value","ds_head","HOSPITAL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_left.form.edt_com_cd00","value","ds_head","SYMPTOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_left.form.rdo_care_tp","value","ds_head","CARE_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_left.form.rdo_sex00","value","ds_head","PAY_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_cont.form.div_left.form.MaskEdit00","value","ds_head","CAR_FR_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_left.form.MaskEdit00_00","value","ds_head","CAR_TO_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_left.form.MaskEdit00_01","value","ds_head","MED_EXP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.div_left.form.MaskEdit00_01_00","value","ds_head","PHA_EXP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUA601CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA601CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA601CT.xfdl", function() {
        /***********************************************************************
         * 화면ID   : NUA601CT.xfdl
         * 화면명   :
         * 화면설명 : 촉탁진료등록
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
        var fv_rankCd =nexacro.getApplication().gds_userInfo.getColumn(0,"RANK_CD");
        var fv_appTp = nexacro.getApplication().gv_applicationTp;
        var fv_sysCd =nexacro.getApplication().gds_company.getColumn(nexacro.getApplication().gds_company.findRow("COMPANY_CD",fv_Company),"REF_SYS_COMP_CD");
        this.scParam = this.gfn_getScreenParam();
        this.fv_currentDS = this.ds_que;
        this.fv_currentGrid = this.div_cont.form.div_right.form.div_right_down.form.grd_detail;

        this.fileGroupId = "";
        this.fv_currentTab = 0;
        this.gv_NextEmpNo = "";
        this.dsTp = "";
        this.saveUrl = nexacro.getEnvironment().services["svcurl"].url + "/common/";
        this.isResetForm = false; //Reset Form 동작 여부
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

        	// 법인정보의 연결시스템CD 값이 있는 경우 너싱홈 병·의원받기 버튼 활성화 및 병·의원 팝업버튼 활성화
        	if(!Sct.Util.isEmpty(fv_sysCd)) {
        		this.div_cont.form.div_left.form.btn_hos_add.set_visible(true);
        		this.div_cont.form.div_left.form.btn_hos_pp.set_visible(true);
        	}else{
        		this.div_cont.form.div_left.form.edt_cmp_nm00_00.set_width(130);
        		this.div_cont.form.div_left.form.btn_hos_pp.set_visible(false);
        	}

        	//rowTypeValidation 설정
        	var dsArr = ["ds_detail"];
        	this.gfn_rowTypeValidationDs(dsArr);

        	this.fn_setComboDs(obj);

        	//drag 버튼 활성화
        	this.fn_setDivDrag();
        	if(!Sct.Util.isEmpty(this.scParam)) {
        		this.fn_getReqDataset();
        	}



        };
        this.fn_getReqDataset = function()
        {
        	var dslist = this.scParam.dslist;
        	var dssearch = this.scParam.dssearch;
        	this.dsTp = this.scParam.flag;

        	this.ds_search.setColumn(0, "COMPANY_CD", dssearch.getColumn(0,"COMPANY_CD"));
        	this.ds_search.setColumn(0, "RES_ID", dssearch.getColumn(0,"RES_ID"));
        	this.ds_search.setColumn(0, "NAME", dssearch.getColumn(0,"NAME"));

        	this.ds_search.setColumn(0, "LONG_TERM_CARE_NO", dssearch.getColumn(0,"LONG_TERM_CARE_NO"));
        // 	if(this.scParam.flag == 'ADD') { // 신규
        // 		this.ds_search.setColumn(0, "JUMIN", dssearch.getColumn(0,"JUMIN"));
        // 		this.fn_que_Search();
        // 	}
        	if(this.scParam.flag == 'SEARCH') { // 조회
        		this.ds_search.setColumn(0, "JUMIN", dslist.getColumn(0,"JUMIN"));
        		this.ds_search.setColumn(0, "CAR_DT", dslist.getColumn(0,"CAR_DT"));
        		this.fn_search();
        	}
        }
        this.fn_setComboDs = function(obj)
        {
             var comboDsParamArr = [
                                 { outDsName : "ds_care_tp", sqlId : "NUA601CT.NUA601CT_DS_CARE_TP_S",param : this.ds_search, bEmptyRow : false}
        					   , { outDsName : "ds_care_pay", sqlId : "NUA601CT.NUA601CT_DS_CARE_PAY_S",param : this.ds_search, bEmptyRow : false}
        					   , { outDsName : "ds_chart", sqlId : "NUA601CT.NUA601CT_DS_CHART_S",param : this.ds_search, bEmptyRow : false}
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
        //저장 전 validation
        this.fn_save_pre = function ()
        {
        	//변경여부
        	if (!(Sct.Grid.hasInsertAndUpdateRow(this.ds_head)||Sct.Grid.hasInsertAndUpdateRow(this.ds_que)))
        	{
        		Sct.alert(this, "000240"); //추가나 수정한 데이터가 없습니다.
        		return false;
        	}

        	//입력 필수여부체크
        	//if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;
        	if(!this.gfn_findSnull(this.div_cont.form.div_left)) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	return true;
        };
        // 삭제 전 validation
        this.fn_delete_pre = function ()
        {
        	//삭제하시겠습니까?
        	if(!Sct.confirm(this, "000152", "")) return false;

        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //기존 저장된 데이터 조회
        this.fn_search = function ()
        {
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_head=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA601CT.NUA601CT_DS_HEAD_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        //저장된 기록지 조회
        this.fn_care_Search = function ()
        {
        	var svcId = "care_search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_head";
        	var outDatasets = "ds_que=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA601CT.NUA601CT_DS_CARE_S ";
        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        //신규로 작성할 기록지 조회
        this.fn_que_Search = function ()
        {
        	var svcId = "que_search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_que=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA601CT.NUA601CT_DS_QUE_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_searchDetail = function ()
        {
        	var companyCd = this.ds_head.getColumn(this.ds_head.rowposition, "COMPANY_CD");
        	var resId = this.ds_head.getColumn(this.ds_head.rowposition,"RES_ID");
        	var carDt = this.ds_head.getColumn(this.ds_head.rowposition,"CAR_DT");
        	var url = location.origin+'/Argos/FILES';
        	var svcId = "searchDetail";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA601CT.NUA601CT_DS_DETAIL_S "
        		+ "COMPANY_CD=" + companyCd + " "
        		+ "RES_ID=" + resId + " "
        		+ "DT=" + carDt + " "
        		+ "URL=" + url + " ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };
        this.fn_chart_search= function ()
        {
        	var companyCd = this.ds_head.getColumn(this.ds_head.rowposition, "COMPANY_CD");
        	var resId = this.ds_head.getColumn(this.ds_head.rowposition,"RES_ID");
        	var carDt = this.ds_head.getColumn(this.ds_head.rowposition,"CAR_DT");
        	var svcId = "searchChart";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_chart=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA601CT.NUA601CT_DS_CHART_S "
        		+ "COMPANY_CD=" + companyCd + " "
        		+ "RES_ID=" + resId + " "
        		+ "DT=" + carDt + " ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };
        //저장
        this.fn_save = function ()
        {
        	//입력 필수여부체크
        	if(!this.fn_save_pre()) return false;
        	this.ds_search.setColumn(0, "CAR_DT",this.ds_head.getColumn(0,"CAR_DT"));
        	var svcId = "save";
        	var params = "/NUA601CTController.do";
        	var inDatasets = "input1=ds_head:U input2=ds_que:U";
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
        	this.ds_head.set_updatecontrol(false);
        	this.ds_head.setRowType(0,"D");
        	this.ds_head.set_updatecontrol(true);
        	var sqlId = "NUA601CT.NUA601CT_DS_HEAD_D";
        	var svcId = "delete";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_head:U";
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
        		if(strSvcID == "search"){ // 기존에 저장된 데이터 테이블 조회
        			var count = this.ds_head.rowcount;
        			Sct.alert(this, "000175", count + "|");
        			this.fn_care_Search(); // 저장된 기록지 조회.
        		}else if(strSvcID == "save"){
        			this.fn_search();
        		}else if(strSvcID == "delete"){
        			this.ds_search.clearData();
        			this.ds_head.clearData();
        			this.div_cont.form.div_left.form.div_question.reload();
        			Sct.alert(this, "000175", "0|");
        		}else if(strSvcID == "que_search"){ // 신규 기록지 조회
        			this.que_set_div(); //신규 기록지 생성.

        			//조회형식이라 insert 상태로 변경
        			this.ds_que.set_updatecontrol(false);
        			for(var i=0; i<this.ds_que.rowcount; i++){
        				this.ds_que.setRowType(i,"i");
        			}
        			this.ds_que.set_updatecontrol(true);

        			this.fn_searchDetail(); // 현재일에서 과거 2주의 날짜보다 같거나 큰 투약 종료일 조회.
        		}else if(strSvcID == "care_search"){
        			this.que_set_div();
        			this.fn_searchDetail(); // 방문일자에서 과거 2주 날짜보다 같거나 큰 투약종료일 조회.
        		}else if(strSvcID == "searchDetail"){
        			this.fn_chart_search();
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
         * Popup Functions
         ***********************************************************************/


        //코드 팝업 CALLBACK
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)){
        		return;
        	}
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	if(popid == "RES_NM"){
        		this.ds_head.clearData();
        		this.ds_que.clearData();
        		this.div_cont.form.div_left.form.div_question.reload();
        		this.div_cont.form.div_left.form.div_question.set_bottom(39);
        		if(this.ds_head.rowcount==0){
        			var nRow = this.ds_head.addRow();
        		}
        		this.ds_head.setColumn(0, "COMPANY_CD", objDs.getColumn(0, "COMPANY_CD"));
        		this.ds_head.setColumn(0, "RES_NM", objDs.getColumn(0, "NAME"));
        		this.ds_head.setColumn(0, "RES_ID", objDs.getColumn(0, "RES_ID"));
        		this.ds_search.setColumn(0, "JUMIN", objDs.getColumn(0, "JUMIN"));
        		this.ds_head.setColumn(0, "CAR_DT", Sct.Util.getToday());
        		this.ds_head.setColumn(0, "LONG_TERM_CARE_NO", objDs.getColumn(0, "LONG_TERM_CARE_NO"));
        		this.fn_que_Search();
        	}
        	if(popid == "HOS_NM"){
        		this.ds_head.setColumn(0, "HOSPITAL_NAME", objDs.getColumn(0, "HOS_NM"));
        		this.ds_head.setColumn(0, "HOSPITAL_ID", objDs.getColumn(0, "HOS_ID"));
        	}
        };


        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        //drag 버튼 활성화
        this.fn_setDivDrag = function()
        {
        	//divCont
        	this.gfn_setDivDrag(this.div_cont.form.btn_gHMove, this.div_cont.form.div_left, this.div_cont.form.div_right);
        }

        this.ds_head_onrowposchanged = function(obj,e)
        {
        	//this.fn_searchDetail();
        };


        //촉탁진료설문설정 데이터를 이용한 설문지 그림 그리기
        //init(name,left,top,width,height,right,bottom)
        this.que_set_div = function(){
        	var height = 25;
        	var width = 170;
        	var oldTop = 0;
        	var div = this.div_cont.form.div_left.form.div_question;
        	for(var i=0; i<this.ds_que.rowcount; i++){
        		var queCnt = 0; // 보기 개수 카운트용
        		var nameCnt=0;
        		var queText;
        		var queArea;
        		var flag; // 유형에 맞게 생성
        		var queNo = this.ds_que.getColumn(i,"QUE_NO"); // 문제번호
        		var queDesc = this.ds_que.getColumn(i,"QUE_DESC"); //문제내용
        		var queTp = this.ds_que.getColumn(i,"QUE_TYPE"); //보기유형 , 10 : 보기없음 , 20 : 보기있음
        		var objTp = this.ds_que.getColumn(i,"OBJ_TP1"); //오브젝트 유형 TEXT, CHECKBOX, STATIC, TEXTAREA, STATIC ex) checkbox가 오브젝트 유형

        		if(queTp=="10"){ //보기있음
        			for(var j=0; j<this.ds_que.colcount; j++){ // 보기의 개수를 count
        				if(this.ds_que.getColumn(i,"OBJ_TP"+j)!=null){
        					queCnt++;
        					if(this.ds_que.getColumn(i,"OBJ_TP"+j)=="CHECKBOX"){
        						flag="CHECKBOX";
        					}
        				}
        			}
        		}

        		if(queTp=="20"){ //보기없음
        			if(this.ds_que.getColumn(i,"TIT_TP1")=="TEXT"){
        				queCnt = 3;
        				//edt.init(name,left,top,width,height,right,bottom)
        				queText = new Edit("TIT_VALUE1",width+10,0,width*3,height,null);
        				flag = "TEXT";
        			}
        			if(this.ds_que.getColumn(i,"TIT_TP1")=="TEXTAREA"){ // area일경우에는 3줄로 하기위해 9로 한다.
        				queCnt = 9;
        				//area.init(name,left,top,width,height,right,bottom)
        				queArea = new TextArea("TIT_VALUE1",width+10,0,width*3,height*3,null);
        				flag = "TEXTAREA";
        			}
        		}

        		/*1.질문의 배경 div를 문제의 수와 보기의 개수만큼 크기를 생성하여 배치한다.*/
        		var queDiv = new Div();
        		//div.init(name,left,top,width,height,right,bottom)
        		queDiv.init(i,0,oldTop,760,height*nexacro.ceil(queCnt/3),null,null);

        		oldTop += height*nexacro.ceil(queCnt/3);
        		div.addChild(i,queDiv);

        		queDiv.show();

        		/*2.문제 번호와 질문을 합쳐서 1번의 div에 각각 생성하여 배치한다.변수 명 :queNo+queDesc*/
        		var question = queNo+'.'+queDesc;
        		//static.init(name,left,top,width,height)
        		var queSta = new Static("sta_que"+i,0,0,width,height);
        		queSta.set_text(question);
        		//eval("this.div_cont.form.div_left.form.div_question.form.div_que"+i+".addChild('sta_que"+i+"',queSta)");
        		//var sta= this.div_cont.form.div_left.form.div_question.form.div_que0.addChild("sta_que"+i,queSta);
        		queDiv.addChild("sta_que"+i,queSta); //static 추가
        		queSta.show();
        		queSta.set_textAlign("right");
        		if(flag=="TEXT"){
        			queDiv.addChild("edt_que"+nameCnt,queText); //edit 추가
        			queText.set_value(this.ds_que.getColumn(i,"TIT_VALUE1"));
        			queText.show();
        			//이벤트 추가
        			queText.addEventHandler("onchanged",this.dataSetBinding,this);

        			nameCnt++;
        		}
        		if(flag=="TEXTAREA"){
        			queDiv.addChild("are_que"+nameCnt,queArea); //area 추가
        			queArea.set_value(this.ds_que.getColumn(i,"TIT_VALUE1"));
        			queArea.show();
        			queArea.addEventHandler("onchanged",this.dataSetBinding,this);
        			nameCnt++;
        		}
        		if(flag=="CHECKBOX"){
        		var chkCnt = 0;
        		var staCnt = 0;
        		var left = 1;
        		var left2 = 1;
        			for(var c=0; c<this.ds_que.colcount; c++){
        				//checkbox.init(name,left,top,width,height,right,bottom)
        				if(this.ds_que.getColumn(i,"OBJ_TP"+c)=="CHECKBOX"||this.ds_que.getColumn(i,"OBJ_TP"+c)=="TEXT"){
        					chkCnt++;
        					var top=0;
        					if(nexacro.ceil(chkCnt/3)==1){
        						top=0;
        					}
        					if(nexacro.ceil(chkCnt/3)==2){
        						top=1;
        					}
        					if(nexacro.ceil(chkCnt/3)==3){
        						top=2;
        					}
        					if(nexacro.ceil(chkCnt/3)==4){
        						top=3;
        					}
        					if(nexacro.ceil(chkCnt/3)==5){
        						top=4;
        					}
        					if(this.ds_que.getColumn(i,"OBJ_TP"+c)=="CHECKBOX"){
        						var queChk = new CheckBox("OBJ_VALUE"+c,(width+10)*left,top*height,15,height,null,null);
        						queDiv.addChild("chk_que"+c,queChk);
        						queChk.show();
        						queChk.set_falsevalue(0);
        						queChk.set_truevalue(1);
        						queChk.set_value(this.ds_que.getColumn(i,"OBJ_VALUE"+c));
        						queChk.addEventHandler("onchanged",this.dataSetBinding,this);
        					}
        					if(this.ds_que.getColumn(i,"OBJ_TP"+c)=="TEXT"){
        						//edit.init(name,left,top,width,height,right,bottom)
        						var etc = new Edit("OBJ_VALUE"+c,(width+10)*left,top*height,width,height,null,null);
        						queDiv.addChild("edt_etc"+c,etc);
        						etc.show();
        						etc.set_value(this.ds_que.getColumn(i,"OBJ_VALUE"+c));
        						etc.addEventHandler("onchanged",this.dataSetBinding,this);
        					}
        					left++;
         					if(left==4){
         						left = 1;
         					}
        				}
        				if(this.ds_que.getColumn(i,"TIT_TP"+c)=="STATIC"){
        					//static.init(name,left,top,width,height,right,bottom)
        					staCnt++;
        					var top=0;
        					if(nexacro.ceil(staCnt/3)==1){
        						top=0;
        					}
        					if(nexacro.ceil(staCnt/3)==2){
        						top=1;
        					}
        					if(nexacro.ceil(staCnt/3)==3){
        						top=2;
        					}
        					if(nexacro.ceil(staCnt/3)==4){
        						top=3;
        					}
        					if(nexacro.ceil(staCnt/3)==5){
        						top=4;
        					}

        					if(left2==4){
         						left2 = 1;
         					}
        					var queTitle = new Static("tit_que"+c,(width+10)*left2+15,top*height,150,height,null,null);
        						left2++;
        					queTitle.set_text(this.ds_que.getColumn(i,"TIT_VALUE"+c));
        					queDiv.addChild("tit_que"+c,queTitle);
        					queTitle.show();
        					queTitle.addEventHandler("onchanged",this.dataSetBinding,this);
        				}
        			}
        		}
        	}
        	div.set_bottom(40); //스크롤이 자동생성되지 않아 BOTTOM 변경으로 인한 출력
        }
        this.dataSetBinding = function(obj, e){
        	var queNo = obj.parent.parent.name;
        	var colId = obj.name;
        	this.ds_que.setColumn(queNo,colId,obj.value);
        }

        //차트 클릭시 큰 팝업창을 띄워서 자세한 수치가 표기되도록 한다. 차트 부위별로 클릭이벤트를 전체 걸어준다.
        //차트 그래프 위/아래
        this.div_cont_div_right_div_right_up_cha_care_onclick = function(obj,e)
        {
        	var param = {
        		ds : this.ds_chart
        	};
        	Sct.popup(this, "CHART", 326, 226, "", param, "CM_POP::NUA601CT_CHART_PP.xfdl", "fn_popCallback");
        };
        //차트 그래프
        this.div_cont_div_right_div_right_up_cha_care_onboardclick = function(obj,e)
        {
        	var param = {
        		ds : this.ds_chart
        	};
        	Sct.popup(this, "CHART", 326, 226, "", param, "CM_POP::NUA601CT_CHART_PP.xfdl", "fn_popCallback");
        };
        //y축 옆
        this.div_cont_div_right_div_right_up_cha_care_onaxisclick = function(obj,e)
        {
        	var param = {
        		ds : this.ds_chart
        	};
        	Sct.popup(this, "CHART", 326, 226, "", param, "CM_POP::NUA601CT_CHART_PP.xfdl", "fn_popCallback");
        };

        this.div_cont_div_left_btn_add_onclick = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company,
        		TABLE_NM : "T_NU_COMM_CARE_HEAD"
        	};
        	Sct.popup(this, "RES_NM", 326, 226, "", param, "CM_POP::CM_RES_DATA_INPUT_YN_PP.xfdl", "fn_popCallback");
        };

        this.div_cont_div_left_btn_hos_pp_onclick = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company
        	};
        	Sct.popup(this, "HOS_NM", 326, 226, "", param, "CM_POP::CM_HOS_PP.xfdl", "fn_popCallback");
        };

        this.div_cont_div_left_btn_hos_add_onclick = function(obj,e)
        {
        	alert("개발예정");
        	return;
        };

        this.div_cont_div_left_edt_cmp_nm00_00_onkeyup = function(obj,e)
        {
        	if (e.keycode == "13")
        	{
        		this.div_cont.form.div_left.form.btn_hos_pp.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.div_cont.form.div_right.form.div_right_down.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.div_right_down.form.grd_list.addEventHandler("oncelldblclick",this.div_cont_grd_head_oncelldblclick,this);
            this.div_cont.form.div_right.form.div_right_down.form.btn_add.addEventHandler("onclick",this.div_cont_div_left_btn_add_onclick,this);
            this.div_cont.form.div_right.form.div_right_up.form.cha_care.addEventHandler("onclick",this.div_cont_div_right_div_right_up_cha_care_onclick,this);
            this.div_cont.form.div_right.form.div_right_up.form.cha_care.addEventHandler("onboardclick",this.div_cont_div_right_div_right_up_cha_care_onboardclick,this);
            this.div_cont.form.div_right.form.div_right_up.form.cha_care.addEventHandler("onaxisclick",this.div_cont_div_right_div_right_up_cha_care_onaxisclick,this);
            this.div_cont.form.div_left.form.edt_cmp_nm00_00.addEventHandler("onkeyup",this.div_cont_div_left_edt_cmp_nm00_00_onkeyup,this);
            this.div_cont.form.div_left.form.edt_com_cd00.addEventHandler("onchanged",this.div_cont_div_left_edt_com_cd00_onchanged,this);
            this.div_cont.form.div_left.form.div_question.addEventHandler("onclick",this.div_cont_div_left_div_question_onclick,this);
            this.div_cont.form.div_left.form.btn_add.addEventHandler("onclick",this.div_cont_div_left_btn_add_onclick,this);
            this.div_cont.form.div_left.form.btn_hos_pp.addEventHandler("onclick",this.div_cont_div_left_btn_hos_pp_onclick,this);
            this.div_cont.form.div_left.form.btn_hos_add.addEventHandler("onclick",this.div_cont_div_left_btn_hos_add_onclick,this);
            this.ds_head.addEventHandler("oncolumnchanged",this.ds_head_oncolumnchanged,this);
            this.ds_head.addEventHandler("onrowposchanged",this.ds_head_onrowposchanged,this);
            this.ds_detail.addEventHandler("oncolumnchanged",this.ds_detail_oncolumnchanged,this);
            this.ds_detail.addEventHandler("cancolumnchange",this.ds_detail_cancolumnchange,this);
            this.ds_que.addEventHandler("oncolumnchanged",this.ds_head_oncolumnchanged,this);
            this.ds_que.addEventHandler("onrowposchanged",this.ds_head_onrowposchanged,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("NUA601CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
