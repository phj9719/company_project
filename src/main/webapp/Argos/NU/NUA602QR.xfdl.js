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
            this.set_titletext("촉탁진료현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1340,1400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cm_service_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_sex", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CAR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LONG_TERM_CARE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"DOCTOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOCTOR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SYMPTOM\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TP\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/><Column id=\"CAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MED_EXP\" type=\"STRING\" size=\"256\"/><Column id=\"PHA_EXP\" type=\"STRING\" size=\"256\"/><Column id=\"HOSPITAL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HOSPITAL_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_que", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CAR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP1\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE1\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP1\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE1\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP2\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE2\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP2\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE2\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP3\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE3\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP3\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE3\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP4\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE4\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP4\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE4\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP5\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE5\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP5\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE5\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP6\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE6\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP6\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE6\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP7\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE7\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP7\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE7\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP8\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE8\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP8\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE8\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP9\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE9\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP9\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE9\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP10\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE10\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP10\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE10\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP11\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE11\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP11\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE11\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP12\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE12\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP12\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE12\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP13\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE13\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP13\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE13\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP14\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE14\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP14\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE14\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_TP15\" type=\"STRING\" size=\"256\"/><Column id=\"OBJ_VALUE15\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_TP15\" type=\"STRING\" size=\"256\"/><Column id=\"TIT_VALUE15\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_machine_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"LONG_TERM_CARE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_copy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CAR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LONG_TERM_CARE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"DOCTOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOCTOR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SYMPTOM\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TP\" type=\"STRING\" size=\"256\"/><Column id=\"QUE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location_all", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","22",null,"74","0.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("s01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_edate","-45","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("일자");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_sdate","90","25","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static26","204","25","16","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_font("8pt \"Malgun Gothic\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_edate","215","25","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_area","330","25","100","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","440","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_codecolumn("ARE_CD");
            obj.set_datacolumn("ARE_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_area");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_location","573","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("생활실");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","668","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("LOC_CD");
            obj.set_datacolumn("LOC_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_location");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_name","800","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("입소자성명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_name","900","25","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_color("black");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_res_pp","1016","25","25","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_background("url(\'imagerc::btn_WF_SearchSmall_P.png\') no-repeat rgba(255,255,255,1)");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_sdate","-45","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("일자");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0","120",null,null,"0.00%","0.00%",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_gHMove","540","40%","25","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","540",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","7","194","22",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_text("촉탁진료 현황");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","40",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_readonly("false");
            obj.set_binddataset("ds_list");
            obj.set_extendsizetype("row");
            obj.set_border("3px solid rgba(119,119,119,1), 1px solid rgba(229,229,229,1), 1px solid rgba(229,229,229,1), 1px solid rgba(229,229,229,1)");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"178\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"방문일자\"/><Cell col=\"2\" text=\"입소자성명\"/><Cell col=\"3\" text=\"층\" cssclass=\"CellEssential\"/><Cell col=\"4\" text=\"생활실\"/><Cell col=\"5\" text=\"주상명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:CAR_DT\"/><Cell col=\"2\" text=\"bind:RES_NM\"/><Cell col=\"3\" text=\"bind:AREA\" edittype=\"none\" displaytype=\"combotext\" combodataset=\"ds_area\" combodatacol=\"ARE_NM\" combocodecol=\"ARE_CD\"/><Cell col=\"4\" text=\"bind:LOCATION\" edittype=\"none\" displaytype=\"combotext\" combodataset=\"ds_location_all\" combodatacol=\"LOC_NM\" combocodecol=\"LOC_CD\"/><Cell col=\"5\" edittype=\"none\" textAlign=\"left\" textareaacceptsenter=\"true\" textareaautoselect=\"true\" text=\"bind:SYMPTOM\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_paging","0",null,null,"30","0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_url("CM_POP::CM_PAGING_DIV.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"0","80","29","0",null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("3");
            obj.set_text("진료등록");
            obj.set_visible("false");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","565","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","7","220","30",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("12");
            obj.set_text("촉탁진료 기록");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00","0","40","760","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm","0","40","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("14");
            obj.set_text("환자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_com_cd","133","44","100","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_cmp_nm","235","40","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("15");
            obj.set_text("장기요양 인정번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_cmp_nm","366","44","130","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_cmp_nm00","497","40","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("16");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_cmp_nm00","628","44","130","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","0","68","760","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00","0","68","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("18");
            obj.set_text("진료구분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_cmp_nm01","235","68","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("19");
            obj.set_text("방문일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Calendar("cal_start_date","366","72","130","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("4");
            obj.getSetter("calendarfunc").set("calendar");
            obj.set_headformat("yyyy.MM-dd");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_cmp_nm00_00","497","68","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("20");
            obj.set_text("병·의원");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_cmp_nm00_00","628","72","130","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("5");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","0","96","760","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00","0","96","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("22");
            obj.set_text("주상명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_com_cd00","133","100","362","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("6");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_cmp_nm00_00_00","497","96","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("23");
            obj.set_text("본인부담");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_question","0","165","780",null,null,"39",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_enable("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Radio("rdo_sex","133","71","97","24",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_direction("horizontal");
            obj.set_columncount("0");
            obj.set_readonly("true");
            var div_cont_form_div_right_form_rdo_sex_innerdataset = new nexacro.NormalDataset("div_cont_form_div_right_form_rdo_sex_innerdataset", obj);
            div_cont_form_div_right_form_rdo_sex_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">초진</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">재진</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_div_right_form_rdo_sex_innerdataset);
            obj.set_value("1");
            obj.set_index("0");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Radio("rdo_sex00","629","98","125","24",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_direction("horizontal");
            obj.set_columncount("0");
            obj.set_readonly("true");
            var div_cont_form_div_right_form_rdo_sex00_innerdataset = new nexacro.NormalDataset("div_cont_form_div_right_form_rdo_sex00_innerdataset", obj);
            div_cont_form_div_right_form_rdo_sex00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0%</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10%</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20%</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_div_right_form_rdo_sex00_innerdataset);
            obj.set_value("1");
            obj.set_index("0");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","0","124","760","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_comp_nm00_00_00","0","124","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("25");
            obj.set_text("진료시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_com_cd00_00","133","128","100","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("8");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_cmp_nm00_00_00_00","497","124","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("26");
            obj.set_text("약제비");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_cmp_nm01_00","235","124","130","29",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("27");
            obj.set_text("진료비");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_background("rgba(225,225,225,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_cmp_nm01","366","128","130","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("9");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_cmp_nm00_00_00","628","128","130","21",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("10");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_autoselect("true");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static60","0","0","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sMove","44.63%","96",null,"16","44.63%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::search_open.png\') no-repeat transparent");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1340,1400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cal_sdate","value","ds_search","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_edate","value","ds_search","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_name","value","ds_search","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.edt_com_cd","value","ds_list","RES_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.edt_cmp_nm","value","ds_list","LONG_TERM_CARE_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.edt_cmp_nm00","value","ds_list","JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.cal_start_date","value","ds_list","CAR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.edt_cmp_nm00_00","value","ds_list","HOSPITAL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.edt_com_cd00","value","ds_list","SYMPTOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.rdo_sex","value","ds_list","CARE_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.rdo_sex00","value","ds_list","PAY_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.edt_com_cd00_00","value","ds_list","CAR_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.edt_cmp_nm01","value","ds_list","MED_EXP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.edt_cmp_nm00_00_00","value","ds_list","PHA_EXP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM_POP::CM_PAGING_DIV.xfdl");
        };
        
        // User Script
        this.addIncludeScript("NUA602QR.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA602QR.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA602QR.xfdl", function() {
        /***********************************************************************
         * 화면ID   : NUA602QR.xfdl
         * 화면명   :
         * 화면설명 : 촉탁진료현황
         * 작성일   : 2021-07-15 10:32
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
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_list;

        this.fileGroupId = "";
        this.fv_currentTab = 0;
        this.gv_NextEmpNo = "";
        this.dsTp = "";
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

        	//rowTypeValidation 설정
        	var dsArr = ["ds_list"];
        	this.gfn_rowTypeValidationDs(dsArr);

        	//페이징 처리 초기화
        	this.fn_initPageSet();

        	this.fn_setComboDs(obj);

        	//drag 버튼 활성화
        	this.fn_setDivDrag();

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.cal_sdate.setFocus();

        };
        this.fn_setComboDs = function(obj)
        {
             var comboDsParamArr = [
        //                          { outDsName : "ds_location", sqlId : "NUA602QR.NUA602QR_DS_LOCATION_S", param : this.ds_search, bEmptyRow : true}
        //                        , { outDsName : "ds_room", sqlId : "NUA602QR.NUA602QR_DS_ROOM_S",param : this.ds_search, bEmptyRow : true}
        							{ outDsName : "ds_area", sqlId : "NUA401CT.NUA401CT_DS_AREA_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : true} // 층 조회
        						  , { outDsName : "ds_location_all", sqlId : "NUA401CT.NUA401CT_DS_LOCATION_S",param : {COMPANY_CD : fv_Company}, bEmptyRow : true} // 생활실 전체 조회
                            ];
           this.gfn_setComboDs(obj, comboDsParamArr);
        }
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

        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
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
        		+ "sqlId=NUA602QR.NUA602QR_DS_LIST_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_searchDetail = function ()
        {
        	var companyCd = this.ds_list.getColumn(this.ds_list.rowposition, "COMPANY_CD");
        	var carSeq = this.ds_list.getColumn(this.ds_list.rowposition,"CAR_SEQ");
        	var svcId = "searchDetail";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_que=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA602QR.NUA601CT_DS_CARE_S "
        		+ "COMPANY_CD=" + companyCd + " "
        		+ "CAR_SEQ=" + carSeq + " ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
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
        			//this.gfn_saveAfterFindRow(this.ds_list);
        			//this.fn_findMstRow(this.fv_saveRefNo);

        		}else if(strSvcID == "searchDetail"){
        			this.que_set_div();
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
        		+ "sqlId=NUA401CT.NUA401CT_DS_LOCATION_S "
        		+ " COMPANY_CD="+fv_Company
        		+ " AREA="+col;

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/


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
        //drag 버튼 활성화
        this.fn_setDivDrag = function()
        {
        	//divCont
        	this.gfn_setDivDrag(this.div_cont.form.btn_gHMove, this.div_cont.form.div_left, this.div_cont.form.div_right);
        }

        this.ds_list_onrowposchanged = function(obj,e)
        {
        	this.div_cont.form.div_right.form.div_question.reload();
        	this.div_cont.form.div_right.form.div_question.set_bottom(39);
        	this.fn_searchDetail();
        };

        //---------------------------------------행추가---------------------------------------------

        //행추가 버튼클릭시 촉탁진료등록화면의 신규로 등록된다.
        this.div_cont_div_left_btn_add_onclick = function(obj,e)
        {
        	if(!this.gfn_findSnull(this.div_search)) return false;
        	var menuCd = "06000100"; //메뉴코드
        	var param = {
        		dslist : this.ds_list,
        		dssearch : this.ds_search,
        		flag : "ADD"
        	};

        	//메뉴 open
        	Sct.chkOpenMenu(menuCd, param);
        };
        //그리드 더블클릭시 촉탁진료등록화면의 수정모드로 조회된다.
        this.div_cont_div_left_grd_list_oncelldblclick = function(obj,e)
        {
        	var menuCd = "06000100"; //메뉴코드
        	var nRow = this.ds_list_copy.addRow();
        	this.ds_list_copy.copyRow(0,this.ds_list,this.ds_list.rowposition);
        	var param = {
        		dslist : this.ds_list_copy,
        		dssearch : this.ds_search,
        		flag : "SEARCH"
        	};

        	//메뉴 open
        	Sct.chkOpenMenu(menuCd, param);
        };

        this.div_search_btn_res_pp_onclick = function(obj,e)
        {
        	var param = {
        		MULTI_YN : "N",
        		COMPANY_CD : fv_Company,
        		TABLE_NM : "T_NU_COMM_CARE_HEAD"
        	};
        	Sct.popup(this, "RES_NM", 326, 226, "", param, "CM_POP::CM_RES_DATA_INPUT_YN_PP.xfdl", "fn_popCallback");
        };

         this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid){
        		case "RES_NM" : this.ds_search.setColumn(0, "NAME", objDs.getColumn(0, "NAME"));
        						this.ds_search.setColumn(0, "RES_ID", objDs.getColumn(0, "RES_ID"));
        						this.ds_search.setColumn(0, "AREA", objDs.getColumn(0, "AREA"));

        						var area = this.ds_search.getColumn(0, "AREA"); //층
        						if(!Sct.Util.isEmpty(area)){ //층에 해당되는 생활실 조회
        							this.fn_location_search("ds_location", area);
        						}

        						this.ds_search.setColumn(0, "LOCATION", objDs.getColumn(0, "LOCATION"));
        						this.ds_search.setColumn(0, "JUMIN", objDs.getColumn(0, "JUMIN"));
        						this.ds_search.setColumn(0, "LONG_TERM_CARE_NO", objDs.getColumn(0, "LONG_TERM_CARE_NO"));
        		break;
        	}
        	this.fn_search();

        };
        //촉탁진료설문설정 데이터를 이용한 설문지 그림 그리기
        //init(name,left,top,width,height,right,bottom)
        this.que_set_div = function(){
        	var height = 25;
        	var width = 170;
        	var oldTop = 0;
        	var div = this.div_cont.form.div_right.form.div_question;
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
        			queText.set_readonly(true);
        			nameCnt++;
        		}
        		if(flag=="TEXTAREA"){
        			queDiv.addChild("are_que"+nameCnt,queArea); //area 추가
        			queArea.set_value(this.ds_que.getColumn(i,"TIT_VALUE1"));
        			queArea.show();
        			queArea.addEventHandler("onchanged",this.dataSetBinding,this);
        			queArea.set_readonly(true);
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
        						queChk.set_readonly(true);
        					}
        					if(this.ds_que.getColumn(i,"OBJ_TP"+c)=="TEXT"){
        						//edit.init(name,left,top,width,height,right,bottom)
        						var etc = new Edit("OBJ_VALUE"+c,(width+10)*left,top*height,width,height,null,null);
        						queDiv.addChild("edt_etc"+c,etc);
        						etc.show();
        						etc.set_value(this.ds_que.getColumn(i,"OBJ_VALUE"+c));
        						etc.set_readonly(true);
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
        };


        this.div_search_edt_name_onkeyup = function(obj,e)
        {
        	if (e.keycode == "13")
        	{
        		this.div_search.form.btn_res_pp.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.div_search_cmb_area_onitemchanged,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_search.form.edt_name.addEventHandler("onkeyup",this.div_search_edt_name_onkeyup,this);
            this.div_search.form.btn_res_pp.addEventHandler("onclick",this.div_search_btn_res_pp_onclick,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncelldblclick",this.div_cont_div_left_grd_list_oncelldblclick,this);
            this.div_cont.form.div_left.form.btn_add.addEventHandler("onclick",this.div_cont_div_left_btn_add_onclick,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_head_oncolumnchanged,this);
            this.ds_list.addEventHandler("onrowposchanged",this.ds_list_onrowposchanged,this);
            this.ds_que.addEventHandler("oncolumnchanged",this.ds_detail_oncolumnchanged,this);
            this.ds_que.addEventHandler("cancolumnchange",this.ds_detail_cancolumnchange,this);
            this.ds_list_copy.addEventHandler("oncolumnchanged",this.ds_head_oncolumnchanged,this);
            this.ds_list_copy.addEventHandler("onrowposchanged",this.ds_list_onrowposchanged,this);
        };
        this.loadIncludeScript("NUA602QR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
