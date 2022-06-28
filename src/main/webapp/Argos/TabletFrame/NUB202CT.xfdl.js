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
            this.set_titletext("기초건강측정");
            this.set_background("#f4f9fc");
            if (Form == this.constructor)
            {
                this._setFormPosition(1180,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_MACADD\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_TP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resident", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pressure", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_TIME2\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_H\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_L\" type=\"STRING\" size=\"256\"/><Column id=\"PULSE\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PRE_H\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PRE_L\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PULSE\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PRE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"INDS\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_CHECKBOX\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sugar", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SUG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SUG_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SUG_TIME2\" type=\"STRING\" size=\"256\"/><Column id=\"SUG_TP\" type=\"STRING\" size=\"256\"/><Column id=\"SUGAR\" type=\"STRING\" size=\"256\"/><Column id=\"IR_SUGAR\" type=\"STRING\" size=\"256\"/><Column id=\"IR_SUGAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"INDS\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temperature", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TEM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TEM_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"TEM_TIME2\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPERATURE\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"INDS\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_compos", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"BMI\" type=\"STRING\" size=\"256\"/><Column id=\"SMM\" type=\"STRING\" size=\"256\"/><Column id=\"BFM\" type=\"STRING\" size=\"256\"/><Column id=\"FAT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PBF\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"INDS\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_AGE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_DT2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_manager", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_sugar", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pressure_i", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_TIME2\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_H\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_L\" type=\"STRING\" size=\"256\"/><Column id=\"PULSE\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PRE_H\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PRE_L\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PULSE\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PRE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"INDS\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sugar_i", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SUG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SUG_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SUG_TIME2\" type=\"STRING\" size=\"256\"/><Column id=\"SUG_TP\" type=\"STRING\" size=\"256\"/><Column id=\"SUGAR\" type=\"STRING\" size=\"256\"/><Column id=\"IR_SUGAR\" type=\"STRING\" size=\"256\"/><Column id=\"IR_SUGAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"INDS\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temperature_i", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TEM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TEM_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"TEM_TIME2\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPERATURE\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"INDS\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_compos_i", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"BMI\" type=\"STRING\" size=\"256\"/><Column id=\"SMM\" type=\"STRING\" size=\"256\"/><Column id=\"BFM\" type=\"STRING\" size=\"256\"/><Column id=\"FAT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PBF\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"INDS\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_connlist", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CON_MACH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"DEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_menuTitle","2.5%","10",null,"30","3.5%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_tMenuTitle");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_head","2.46%","62",null,null,"3.39%","5%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("50");
            obj.set_tabbuttonwidth("100");
            obj.set_showextrabutton("false");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage0",this.tab_head);
            obj.set_text("혈압");
            this.tab_head.addChild(obj.name, obj);

            obj = new Div("div_search","2.7%","30",null,"40","2.7%",null,null,null,null,null,this.tab_head.Tabpage0.form);
            obj.set_taborder("0");
            this.tab_head.Tabpage0.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","0","150","40",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_search.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.tab_head.Tabpage0.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","160","0","120","40",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_text("");
            this.tab_head.Tabpage0.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","290","0","120","40",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_search.form);
            obj.set_taborder("2");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_location");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_text("Combo00");
            this.tab_head.Tabpage0.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","550","0","80","40",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_search.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_tSearch");
            this.tab_head.Tabpage0.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave",null,"0","80","40","0",null,null,null,null,null,this.tab_head.Tabpage0.form.div_search.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_tSave");
            this.tab_head.Tabpage0.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tMeasure",null,"0","80","40","90",null,null,null,null,null,this.tab_head.Tabpage0.form.div_search.form);
            obj.set_taborder("6");
            obj.set_text("측정");
            obj.set_cssclass("btn_tMeasure");
            this.tab_head.Tabpage0.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_resident","420","0","120","40",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_search.form);
            obj.set_taborder("3");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_resident");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_text("Combo00");
            this.tab_head.Tabpage0.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tReset",null,"0","90","40","180",null,null,null,null,null,this.tab_head.Tabpage0.form.div_search.form);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_cssclass("btn_tReset");
            this.tab_head.Tabpage0.form.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","2.7%","84",null,null,"2.7%","4%",null,null,null,null,this.tab_head.Tabpage0.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_formscrolltype("vertical");
            this.tab_head.Tabpage0.addChild(obj.name, obj);

            obj = new Static("sta_name01","0","11","100","25",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("입소자성명 :");
            obj.set_cssclass("sta_tTxt1");
            this.tab_head.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name02","95","11","110","25",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_tTxt2");
            obj.set_text("홍길순(87)");
            this.tab_head.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_enterDt01","215","11","80","25",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("| 입소일 :");
            obj.set_cssclass("sta_tTxt1");
            this.tab_head.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_enterDt02","295","11","100","25",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("2017.01.01");
            obj.set_cssclass("sta_tTxt2");
            this.tab_head.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_room01","405","11","80","25",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("| 생활실 :");
            obj.set_cssclass("sta_tTxt1");
            this.tab_head.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_room02","480","11","110","25",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("1층/101호");
            obj.set_cssclass("sta_tTxt2");
            this.tab_head.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_preDt01","595","11","80","25",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("| 작성일 :");
            obj.set_cssclass("sta_tTxt1");
            this.tab_head.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0.00%","200",null,null,"0.00%","0%",null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_pressure");
            obj.set_cssclass("grd_DataList_h2");
            obj.set_autosizingtype("row");
            obj.set_wheelscrollrow("2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"320\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"시간\"/><Cell col=\"2\" text=\"혈압 H\"/><Cell col=\"3\" text=\"혈압 L\"/><Cell col=\"4\" text=\"맥박\"/><Cell col=\"5\" text=\"비고\"/><Cell col=\"6\" text=\"처리자\"/><Cell col=\"7\" expandchar=\"tEdit\"/><Cell col=\"8\" expandchar=\"tDelete\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:PRE_TIME\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"##:##\"/><Cell col=\"2\" text=\"bind:PRE_H\"/><Cell col=\"3\" text=\"bind:PRE_L\"/><Cell col=\"4\" text=\"bind:PULSE\"/><Cell col=\"5\" text=\"bind:REMARK\"/><Cell col=\"6\" text=\"bind:MANAGER_ID\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"CMCD\" combodatacol=\"CMNM\" combodataset=\"ds_manager\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.tab_head.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Div("div_head","0.00%","45",null,"145","0.00%",null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form);
            obj.set_taborder("8");
            obj.set_text("Div00");
            this.tab_head.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02","0","55","150","80",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form.div_head.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage0.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_preH","150","15","210","40",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form.div_head.form);
            obj.set_taborder("1");
            obj.set_text("혈압(H/L)");
            obj.set_cssclass("sta_tDataHForm4");
            this.tab_head.Tabpage0.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00","150","55","210","80",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form.div_head.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage0.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","360","55","11.42%","80",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form.div_head.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage0.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_pulse","360","15","120","40",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form.div_head.form);
            obj.set_taborder("4");
            obj.set_text("맥박");
            obj.set_cssclass("sta_tDataHForm1");
            this.tab_head.Tabpage0.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","480","55","420","80",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form.div_head.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage0.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_remark","480","15","420","40",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form.div_head.form);
            obj.set_taborder("7");
            obj.set_text("비고");
            obj.set_cssclass("sta_tDataHForm2");
            this.tab_head.Tabpage0.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_preH","160","75","80","40",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form.div_head.form);
            obj.set_taborder("8");
            obj.set_textAlign("center");
            obj.set_inputtype("number");
            obj.set_cssclass("essential");
            this.tab_head.Tabpage0.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static03_00","250","75","0.86%","40",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form.div_head.form);
            obj.set_taborder("9");
            obj.set_text("/");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.tab_head.Tabpage0.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_preL","270","75","80","40",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form.div_head.form);
            obj.set_taborder("10");
            obj.set_textAlign("center");
            obj.set_inputtype("number");
            obj.set_cssclass("essential");
            this.tab_head.Tabpage0.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_pulse","380","75","80","40",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form.div_head.form);
            obj.set_taborder("11");
            obj.set_textAlign("center");
            obj.set_inputtype("number");
            obj.set_cssclass("essential");
            this.tab_head.Tabpage0.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new TextArea("txt_remark","500","75","380","40",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form.div_head.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_tTxt2");
            this.tab_head.Tabpage0.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_preDt","0","15","150","40",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form.div_head.form);
            obj.set_taborder("13");
            obj.set_text("시간");
            obj.set_cssclass("sta_tDataHForm4");
            this.tab_head.Tabpage0.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager","900","15","150","40",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form.div_head.form);
            obj.set_taborder("14");
            obj.set_text("처리자");
            obj.set_cssclass("sta_tDataHForm2");
            this.tab_head.Tabpage0.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","900","55","150","80",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form.div_head.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage0.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Combo("cmb_manager","920","75","110","40",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form.div_head.form);
            obj.set_taborder("16");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_manager");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_buttonsize("0 0");
            obj.set_text("Combo00");
            this.tab_head.Tabpage0.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new MaskEdit("mae_preDt","20","75","110","40",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form.div_head.form);
            obj.set_taborder("6");
            obj.set_cssclass("medt_clock, essential");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_padding("0px 0px 0px 30px");
            this.tab_head.Tabpage0.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_preL","150","15","210","40",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form.div_head.form);
            obj.set_taborder("17");
            obj.set_text("혈압(H/L)");
            obj.set_cssclass("sta_tDataHForm4");
            this.tab_head.Tabpage0.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Button("btn_tRecord1","720","70","40","20",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_tRecord");
            this.tab_head.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_preDt02","675","11","100","25",null,null,null,null,null,null,this.tab_head.Tabpage0.form.div_cont.form);
            obj.set_taborder("10");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px none #dbdbdb");
            obj.set_color("#555555");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            obj.set_cssclass("sta_tTxt2");
            this.tab_head.Tabpage0.form.div_cont.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_head);
            obj.set_text("혈당");
            this.tab_head.addChild(obj.name, obj);

            obj = new Div("div_cont","2.62%","84",null,null,"2.62%","3.98%",null,null,null,null,this.tab_head.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_formscrolltype("vertical");
            this.tab_head.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_head","0.00%","45",null,"145","0.00%",null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.tab_head.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02","0","55","150","80",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form.div_head.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage1.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_sugar","150","15","120","40",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form.div_head.form);
            obj.set_taborder("1");
            obj.set_text("혈당");
            obj.set_cssclass("sta_tDataHForm4");
            this.tab_head.Tabpage1.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00","150","55","120","80",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form.div_head.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage1.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","270","55","15.13%","80",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form.div_head.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage1.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_sugarTp","270","15","160","40",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form.div_head.form);
            obj.set_taborder("4");
            obj.set_text("유형");
            obj.set_cssclass("sta_tDataHForm1");
            this.tab_head.Tabpage1.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","430","55","470","80",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form.div_head.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage1.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_remark","430","15","470","40",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form.div_head.form);
            obj.set_taborder("6");
            obj.set_text("비고");
            obj.set_cssclass("sta_tDataHForm2");
            this.tab_head.Tabpage1.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_sugar","170","75","80","40",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form.div_head.form);
            obj.set_taborder("7");
            obj.set_textAlign("center");
            obj.set_inputtype("number");
            obj.set_cssclass("essential");
            this.tab_head.Tabpage1.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new TextArea("txt_remark","450","75","430","40",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form.div_head.form);
            obj.set_taborder("8");
            this.tab_head.Tabpage1.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_preDt","0","15","150","40",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form.div_head.form);
            obj.set_taborder("9");
            obj.set_text("시간");
            obj.set_cssclass("sta_tDataHForm4");
            this.tab_head.Tabpage1.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager","900","15","150","40",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form.div_head.form);
            obj.set_taborder("10");
            obj.set_text("처리자");
            obj.set_cssclass("sta_tDataHForm2");
            this.tab_head.Tabpage1.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","900","55","150","80",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form.div_head.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage1.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Combo("cmb_manager","920","75","110","40",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form.div_head.form);
            obj.set_taborder("12");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_manager");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_buttonsize("0 0");
            obj.set_text("Combo00");
            this.tab_head.Tabpage1.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Combo("cmb_sugarTp","289","75","120","40",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form.div_head.form);
            obj.set_taborder("13");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_nu_sugar");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_cssclass("essential");
            obj.set_text("");
            this.tab_head.Tabpage1.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new MaskEdit("mae_sugDt","20","75","110","40",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form.div_head.form);
            obj.set_taborder("14");
            obj.set_cssclass("medt_clock, essential");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_padding("0px 0px 0px 30px");
            this.tab_head.Tabpage1.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Button("btn_tRecord2","695","25","40","20",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form.div_head.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_tRecord");
            this.tab_head.Tabpage1.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Grid("grd_list","0.00%","200",null,null,"0.00%","0%",null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_DataList_h2");
            obj.set_autosizingtype("row");
            obj.set_binddataset("ds_sugar");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"420\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"시간\"/><Cell col=\"2\" text=\"혈당\"/><Cell col=\"3\" text=\"유형\"/><Cell col=\"4\" text=\"비고\"/><Cell col=\"5\" text=\"처리자\"/><Cell col=\"6\" expandchar=\"tEdit\"/><Cell col=\"7\" expandchar=\"tDelete\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:SUG_TIME\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"##:##\"/><Cell col=\"2\" text=\"bind:SUGAR\" displaytype=\"normal\"/><Cell col=\"3\" text=\"bind:SUG_TP\" combodataset=\"ds_nu_sugar\" combocodecol=\"CMCD\" combodatacol=\"CMNM\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"4\" text=\"bind:REMARK\"/><Cell col=\"5\" text=\"bind:MANAGER_ID\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"CMCD\" combodatacol=\"CMNM\" combodataset=\"ds_manager\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.tab_head.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name01","0","11","100","25",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("입소자성명 :");
            obj.set_cssclass("sta_tTxt1");
            this.tab_head.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_enterDt01","215","11","80","25",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("| 입소일 :");
            obj.set_cssclass("sta_tTxt1");
            this.tab_head.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_room01","405","11","80","25",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("| 생활실 :");
            obj.set_cssclass("sta_tTxt1");
            this.tab_head.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name02","95","11","110","25",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_tTxt2");
            obj.set_text("홍길순(87)");
            this.tab_head.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_enterDt02","295","11","100","25",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("2017.01.01");
            obj.set_cssclass("sta_tTxt2");
            this.tab_head.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_room02","480","11","110","25",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("1층/101호");
            obj.set_cssclass("sta_tTxt2");
            this.tab_head.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_preDt01","595","11","80","25",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form);
            obj.set_taborder("8");
            obj.set_text("| 작성일 :");
            obj.set_cssclass("sta_tTxt1");
            this.tab_head.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_preDt02","675","11","100","25",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_cont.form);
            obj.set_taborder("9");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px none #dbdbdb");
            obj.set_color("#555555");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            obj.set_cssclass("sta_tTxt2");
            this.tab_head.Tabpage1.form.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","2.70%","30",null,"40","2.70%",null,null,null,null,null,this.tab_head.Tabpage1.form);
            obj.set_taborder("0");
            this.tab_head.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","0","150","40",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_search.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.tab_head.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","160","0","120","40",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_text("");
            this.tab_head.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","290","0","120","40",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_search.form);
            obj.set_taborder("2");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_location");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_text("Combo00");
            this.tab_head.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","550","0","80","40",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_search.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_tSearch");
            this.tab_head.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave",null,"0","80","40","0",null,null,null,null,null,this.tab_head.Tabpage1.form.div_search.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_tSave");
            this.tab_head.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tMeasure",null,"0","80","40","90",null,null,null,null,null,this.tab_head.Tabpage1.form.div_search.form);
            obj.set_taborder("6");
            obj.set_text("측정");
            obj.set_cssclass("btn_tMeasure");
            this.tab_head.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_resident","420","0","120","40",null,null,null,null,null,null,this.tab_head.Tabpage1.form.div_search.form);
            obj.set_taborder("3");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_resident");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_text("Combo00");
            this.tab_head.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tReset",null,"0","90","40","180",null,null,null,null,null,this.tab_head.Tabpage1.form.div_search.form);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_cssclass("btn_tReset");
            this.tab_head.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_head);
            obj.set_text("체온");
            this.tab_head.addChild(obj.name, obj);

            obj = new Div("div_cont","2.62%","84",null,null,"2.62%","3.94%",null,null,null,null,this.tab_head.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_formscrolltype("vertical");
            this.tab_head.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_name01","-495","11","80","25",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("| 입소일 :");
            obj.set_cssclass("sta_tTxt1");
            this.tab_head.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Div("div_head","0.00%","45",null,"145","0.00%",null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.tab_head.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02","0","55","150","80",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form.div_head.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage2.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_temp","150","15","120","40",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form.div_head.form);
            obj.set_taborder("1");
            obj.set_text("체온");
            obj.set_cssclass("sta_tDataHForm4");
            this.tab_head.Tabpage2.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00","150","55","120","80",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form.div_head.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage2.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","270","55","630","80",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form.div_head.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage2.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_remark","270","15","630","40",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form.div_head.form);
            obj.set_taborder("4");
            obj.set_text("비고");
            obj.set_cssclass("sta_tDataHForm2");
            this.tab_head.Tabpage2.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Edit("edt_temp","170","75","80","40",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form.div_head.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_inputtype("number");
            obj.set_cssclass("essential");
            this.tab_head.Tabpage2.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new TextArea("txt_remark","290","75","590","40",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form.div_head.form);
            obj.set_taborder("6");
            this.tab_head.Tabpage2.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_preDt","0","15","150","40",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form.div_head.form);
            obj.set_taborder("7");
            obj.set_text("시간");
            obj.set_cssclass("sta_tDataHForm4");
            this.tab_head.Tabpage2.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager","900","15","150","40",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form.div_head.form);
            obj.set_taborder("8");
            obj.set_text("처리자");
            obj.set_cssclass("sta_tDataHForm2");
            this.tab_head.Tabpage2.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","900","55","150","80",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form.div_head.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage2.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Combo("cmb_manager","920","75","110","40",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form.div_head.form);
            obj.set_taborder("10");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_manager");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_buttonsize("0 0");
            obj.set_text("Combo00");
            this.tab_head.Tabpage2.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new MaskEdit("mae_temDt","20","75","110","40",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form.div_head.form);
            obj.set_taborder("11");
            obj.set_cssclass("medt_clock, essential");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_padding("0px 0px 0px 30px");
            this.tab_head.Tabpage2.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Button("btn_tRecord3","615","25","40","20",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form.div_head.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_tRecord");
            this.tab_head.Tabpage2.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Grid("grd_list","0.00%","200",null,null,"0.00%","0%",null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_temperature");
            obj.set_cssclass("grd_DataList_h2");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"520\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"시간\"/><Cell col=\"2\" text=\"체온\"/><Cell col=\"3\" text=\"비고\"/><Cell col=\"4\" text=\"처리자\"/><Cell col=\"5\" expandchar=\"tEdit\"/><Cell col=\"6\" expandchar=\"tDelete\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:TEM_TIME\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"##:##\"/><Cell col=\"2\" text=\"bind:TEMPERATURE\"/><Cell col=\"3\" text=\"bind:REMARK\"/><Cell col=\"4\" text=\"bind:MANAGER_ID\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"CMCD\" combodatacol=\"CMNM\" combodataset=\"ds_manager\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.tab_head.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name01_00","0","11","100","25",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("입소자성명 :");
            obj.set_cssclass("sta_tTxt1");
            this.tab_head.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name02","95","11","110","25",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_tTxt2");
            obj.set_text("홍길순(87)");
            this.tab_head.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_enterDt01","215","11","80","25",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("| 입소일 :");
            obj.set_cssclass("sta_tTxt1");
            this.tab_head.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_enterDt02","295","11","100","25",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("2017.01.01");
            obj.set_cssclass("sta_tTxt2");
            this.tab_head.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_room01","405","11","80","25",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("| 생활실 :");
            obj.set_cssclass("sta_tTxt1");
            this.tab_head.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_room02","480","11","110","25",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form);
            obj.set_taborder("8");
            obj.set_text("1층/101호");
            obj.set_cssclass("sta_tTxt2");
            this.tab_head.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_preDt01","595","11","80","25",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form);
            obj.set_taborder("9");
            obj.set_text("| 작성일 :");
            obj.set_cssclass("sta_tTxt1");
            this.tab_head.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_preDt02","675","11","100","25",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_cont.form);
            obj.set_taborder("10");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px none #dbdbdb");
            obj.set_color("#555555");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            obj.set_cssclass("sta_tTxt2");
            this.tab_head.Tabpage2.form.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","2.61%","30",null,"40","2.61%",null,null,null,null,null,this.tab_head.Tabpage2.form);
            obj.set_taborder("0");
            this.tab_head.Tabpage2.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","0","150","40",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_search.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.tab_head.Tabpage2.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","160","0","120","40",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_text("");
            this.tab_head.Tabpage2.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","290","0","120","40",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_search.form);
            obj.set_taborder("2");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_location");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_text("Combo00");
            this.tab_head.Tabpage2.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","550","0","80","40",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_search.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_tSearch");
            this.tab_head.Tabpage2.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave",null,"0","80","40","0",null,null,null,null,null,this.tab_head.Tabpage2.form.div_search.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_tSave");
            this.tab_head.Tabpage2.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tMeasure",null,"0","80","40","90",null,null,null,null,null,this.tab_head.Tabpage2.form.div_search.form);
            obj.set_taborder("6");
            obj.set_text("측정");
            obj.set_cssclass("btn_tMeasure");
            this.tab_head.Tabpage2.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_resident","420","0","120","40",null,null,null,null,null,null,this.tab_head.Tabpage2.form.div_search.form);
            obj.set_taborder("3");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_resident");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_text("Combo00");
            this.tab_head.Tabpage2.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tReset",null,"0","90","40","180",null,null,null,null,null,this.tab_head.Tabpage2.form.div_search.form);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_cssclass("btn_tReset");
            this.tab_head.Tabpage2.form.div_search.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab_head);
            obj.set_text("체성분");
            this.tab_head.addChild(obj.name, obj);

            obj = new Div("div_cont","2.62%","84",null,null,"2.62%","3.89%",null,null,null,null,this.tab_head.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_formscrolltype("vertical");
            this.tab_head.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_name01","-495","11","80","25",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("| 입소일 :");
            obj.set_cssclass("sta_tTxt1");
            this.tab_head.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Div("div_head","0.00%","45",null,"145","0.00%",null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.tab_head.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02","0","55","120","80",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","360","55","120","80",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_smm","360","15","120","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("2");
            obj.set_text("골격근량(kg)");
            obj.set_cssclass("sta_tDataHForm1");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","600","55","300","80",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_remark","600","15","300","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("4");
            obj.set_text("비고");
            obj.set_cssclass("sta_tDataHForm2");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new TextArea("txt_remark","620","75","260","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("5");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_height","0","15","120","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("6");
            obj.set_text("신장");
            obj.set_cssclass("sta_tDataHForm4");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_manager","900","15","150","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("7");
            obj.set_text("처리자");
            obj.set_cssclass("sta_tDataHForm2");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","900","55","150","80",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Combo("cmb_manager","920","75","110","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("9");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_manager");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_buttonsize("0 0");
            obj.set_text("Combo00");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_weight","120","15","120","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("10");
            obj.set_text("체중");
            obj.set_cssclass("sta_tDataHForm4");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00","120","55","120","80",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_bmi","240","15","120","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("12");
            obj.set_text("체지방율(%)");
            obj.set_cssclass("sta_tDataHForm4");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_01","240","55","120","80",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_fat","480","15","120","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("14");
            obj.set_text("내장지방레벨");
            obj.set_cssclass("sta_tDataHForm1");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01","480","55","120","80",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_tDataBForm3");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new MaskEdit("mae_height","20","75","80","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("16");
            obj.set_border("1px solid #dbdbdb");
            obj.set_format("##0.#");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_cssclass("essential");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new MaskEdit("mae_weight","140","75","80","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("17");
            obj.set_border("1px solid #dbdbdb");
            obj.set_format("##0.#");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_cssclass("essential");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new MaskEdit("mae_bmi","260","75","80","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("18");
            obj.set_border("1px solid #dbdbdb");
            obj.set_format("##0.#");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_cssclass("essential");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new MaskEdit("mae_smm","380","75","80","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("19");
            obj.set_border("1px solid #dbdbdb");
            obj.set_format("##0.#");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_cssclass("essential");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new MaskEdit("mae_fat","500","75","80","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("20");
            obj.set_border("1px solid #dbdbdb");
            obj.set_format("##0.#");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_cssclass("essential");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Button("btn_tRecord4","780","25","40","20",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form.div_head.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_tRecord");
            this.tab_head.Tabpage3.form.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Grid("grd_list","0.00%","200",null,null,"0.00%","0%",null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_compos");
            obj.set_cssclass("grd_DataList_h2");
            obj.set_autosizingtype("row");
            obj.set_autosizebandtype("body");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"240\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"신장\"/><Cell col=\"2\" text=\"체중\"/><Cell col=\"3\" text=\"체지방율(%)\" font=\"normal 700 13pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"4\" text=\"골격근량(kg)\" font=\"normal 700 13pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"5\" text=\"내장지방레벨\" font=\"normal 700 13pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"6\" text=\"비고\"/><Cell col=\"7\" text=\"처리자\"/><Cell col=\"8\" expandchar=\"tEdit\"/><Cell col=\"9\" expandchar=\"tDelete\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:HEIGHT\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"##0.#\"/><Cell col=\"2\" text=\"bind:WEIGHT\" maskeditautoselect=\"true\" maskeditformat=\"##0.#\"/><Cell col=\"3\" text=\"bind:PBF\" maskeditformat=\"##0.#\"/><Cell col=\"4\" text=\"bind:SMM\" maskeditformat=\"##0.#\"/><Cell col=\"5\" text=\"bind:FAT_LVL\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:REMARK\"/><Cell col=\"7\" text=\"bind:MANAGER_ID\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"CMCD\" combodatacol=\"CMNM\" combodataset=\"ds_manager\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.tab_head.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name01_00","0","11","100","25",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("입소자성명 :");
            obj.set_cssclass("sta_tTxt1");
            this.tab_head.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name02","95","11","110","25",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_tTxt2");
            obj.set_text("홍길순(87)");
            this.tab_head.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_enterDt01","215","11","80","25",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("| 입소일 :");
            obj.set_cssclass("sta_tTxt1");
            this.tab_head.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_enterDt02","295","11","100","25",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("2017.01.01");
            obj.set_cssclass("sta_tTxt2");
            this.tab_head.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_room01","405","11","80","25",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("| 생활실 :");
            obj.set_cssclass("sta_tTxt1");
            this.tab_head.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_room02","480","11","110","25",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form);
            obj.set_taborder("8");
            obj.set_text("1층/101호");
            obj.set_cssclass("sta_tTxt2");
            this.tab_head.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_preDt01","600","11","80","25",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form);
            obj.set_taborder("9");
            obj.set_text("| 작성일 :");
            obj.set_cssclass("sta_tTxt1");
            this.tab_head.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_preDt02","680","11","100","25",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_cont.form);
            obj.set_taborder("10");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px none #dbdbdb");
            obj.set_color("#555555");
            obj.set_cssclass("sta_tTxt2");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            this.tab_head.Tabpage3.form.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","2.7%","30",null,"40","2.7%",null,null,null,null,null,this.tab_head.Tabpage3.form);
            obj.set_taborder("0");
            this.tab_head.Tabpage3.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","0","150","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_search.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.tab_head.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","160","0","120","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_text("");
            this.tab_head.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","290","0","120","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_search.form);
            obj.set_taborder("2");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_location");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_text("Combo00");
            this.tab_head.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","550","0","80","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_search.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_tSearch");
            this.tab_head.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave",null,"0","80","40","0",null,null,null,null,null,this.tab_head.Tabpage3.form.div_search.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_tSave");
            this.tab_head.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tMeasure",null,"0","80","40","90",null,null,null,null,null,this.tab_head.Tabpage3.form.div_search.form);
            obj.set_taborder("6");
            obj.set_text("측정");
            obj.set_cssclass("btn_tMeasure");
            this.tab_head.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_resident","420","0","120","40",null,null,null,null,null,null,this.tab_head.Tabpage3.form.div_search.form);
            obj.set_taborder("3");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_resident");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_text("Combo00");
            this.tab_head.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tReset",null,"0","90","40","180",null,null,null,null,null,this.tab_head.Tabpage3.form.div_search.form);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_cssclass("btn_tReset");
            this.tab_head.Tabpage3.form.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",1180,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_head.Tabpage0.form.div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_head.Tabpage0.form.div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_head.Tabpage0.form.div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab_head.Tabpage0.form.div_search.form.cmb_resident","value","ds_search","RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tab_head.Tabpage0.form.div_cont.form.sta_room02","text","ds_resInfo","ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab_head.Tabpage0.form.div_cont.form.sta_enterDt02","text","ds_resInfo","ENTER_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","tab_head.Tabpage0.form.div_cont.form.sta_name02","text","ds_resInfo","NAME_AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_head.Tabpage1.form.div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_head.Tabpage1.form.div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_head.Tabpage1.form.div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_head.Tabpage1.form.div_search.form.cmb_resident","value","ds_search","RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_head.Tabpage2.form.div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_head.Tabpage2.form.div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_head.Tabpage2.form.div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_head.Tabpage2.form.div_search.form.cmb_resident","value","ds_search","RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_head.Tabpage3.form.div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab_head.Tabpage3.form.div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","tab_head.Tabpage3.form.div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","tab_head.Tabpage3.form.div_search.form.cmb_resident","value","ds_search","RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","tab_head.Tabpage0.form.div_cont.form.div_head.form.edt_preH","value","ds_pressure_i","PRE_H");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","tab_head.Tabpage0.form.div_cont.form.div_head.form.edt_preL","value","ds_pressure_i","PRE_L");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","tab_head.Tabpage0.form.div_cont.form.div_head.form.edt_pulse","value","ds_pressure_i","PULSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","tab_head.Tabpage0.form.div_cont.form.div_head.form.txt_remark","value","ds_pressure_i","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","tab_head.Tabpage0.form.div_cont.form.div_head.form.cmb_manager","value","ds_pressure_i","MANAGER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","tab_head.Tabpage0.form.div_cont.form.div_head.form.mae_preDt","value","ds_pressure_i","PRE_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","tab_head.Tabpage2.form.div_cont.form.sta_name02","text","ds_resInfo","NAME_AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","tab_head.Tabpage2.form.div_cont.form.sta_enterDt02","text","ds_resInfo","ENTER_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","tab_head.Tabpage2.form.div_cont.form.sta_room02","text","ds_resInfo","ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","tab_head.Tabpage3.form.div_cont.form.sta_name02","text","ds_resInfo","NAME_AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","tab_head.Tabpage3.form.div_cont.form.sta_enterDt02","text","ds_resInfo","ENTER_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","tab_head.Tabpage3.form.div_cont.form.sta_room02","text","ds_resInfo","ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","tab_head.Tabpage1.form.div_cont.form.sta_name02","text","ds_resInfo","NAME_AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","tab_head.Tabpage1.form.div_cont.form.sta_enterDt02","text","ds_resInfo","ENTER_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","tab_head.Tabpage1.form.div_cont.form.sta_room02","text","ds_resInfo","ROOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","tab_head.Tabpage1.form.div_cont.form.div_head.form.mae_sugDt","value","ds_sugar_i","SUG_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","tab_head.Tabpage2.form.div_cont.form.div_head.form.mae_temDt","value","ds_temperature_i","TEM_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","tab_head.Tabpage1.form.div_cont.form.div_head.form.edt_sugar","value","ds_sugar_i","SUGAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","tab_head.Tabpage1.form.div_cont.form.div_head.form.cmb_sugarTp","value","ds_sugar_i","SUG_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","tab_head.Tabpage1.form.div_cont.form.div_head.form.txt_remark","value","ds_sugar_i","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","tab_head.Tabpage1.form.div_cont.form.div_head.form.cmb_manager","value","ds_sugar_i","MANAGER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","tab_head.Tabpage2.form.div_cont.form.div_head.form.edt_temp","value","ds_temperature_i","TEMPERATURE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","tab_head.Tabpage2.form.div_cont.form.div_head.form.txt_remark","value","ds_temperature_i","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","tab_head.Tabpage2.form.div_cont.form.div_head.form.cmb_manager","value","ds_temperature_i","MANAGER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","tab_head.Tabpage3.form.div_cont.form.div_head.form.mae_height","value","ds_compos_i","HEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","tab_head.Tabpage3.form.div_cont.form.div_head.form.mae_weight","value","ds_compos_i","WEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","tab_head.Tabpage3.form.div_cont.form.div_head.form.mae_bmi","value","ds_compos_i","PBF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","tab_head.Tabpage3.form.div_cont.form.div_head.form.mae_smm","value","ds_compos_i","SMM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","tab_head.Tabpage3.form.div_cont.form.div_head.form.mae_fat","value","ds_compos_i","FAT_LVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","tab_head.Tabpage3.form.div_cont.form.div_head.form.txt_remark","value","ds_compos_i","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","tab_head.Tabpage3.form.div_cont.form.div_head.form.cmb_manager","value","ds_compos_i","MANAGER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","tab_head.Tabpage0.form.div_cont.form.mae_preDt02","value","ds_resInfo","PRE_DT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","tab_head.Tabpage1.form.div_cont.form.mae_preDt02","value","ds_resInfo","PRE_DT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","tab_head.Tabpage2.form.div_cont.form.mae_preDt02","value","ds_resInfo","PRE_DT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","tab_head.Tabpage3.form.div_cont.form.mae_preDt02","value","ds_resInfo","PRE_DT2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB202CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB202CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB202CT.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB202CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUB202CT
         * 화면명   	: 기초건강측정
         * 화면설명 	: 혈압, 혈당, 체온, 체성분을 블루투스 기기를 이용
        				  하여 측정 or 수기로 작성하여 기록하는 화면
         * 작성일    	: ?
         * 작성자   	: ?
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2021-07-26		박한준		1차수정
         *		2021-09-15		조기종		건강기록일지에서 바로가기 버튼으로 화면
        									오픈시 측정 바로 하지 않도록 수정
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
        this.fv_currentDS = "";
        this.fv_currentDS_i = "";
        this.fv_currentGrid = "";
        this.tabFlag = nexacro.getApplication().gv_measureFlag;
        var tabMacAdd = nexacro.getApplication().gds_taCurRes.getColumn(0, "TAB_MACADD"); // 탭 맥어드레스
        var preMacAdd = nexacro.getApplication().gds_taCurRes.getColumn(0, "CON_PRE_MACADD"); // 혈압계 맥어드레스
        var sugMacAdd = nexacro.getApplication().gds_taCurRes.getColumn(0, "CON_SUG_MACADD"); // 혈당계 맥어드레스
        var temMacAdd = nexacro.getApplication().gds_taCurRes.getColumn(0, "CON_TEM_MACADD"); // 체온계 맥어드레스
        var comMacAdd = nexacro.getApplication().gds_taCurRes.getColumn(0, "CON_COM_MACADD"); // 체성분측정기 맥어드레스
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e, false);

        	this.sta_menuTitle.set_text(this.getOwnerFrame().arguments["menuTitle"]);

        	// 검색조건 세팅
        	this.taSearchDataSetting(obj);
        	// 처리자 콤보 세팅
        	this.fn_setComboDs(obj);

        	this.ds_search.setColumn(0,"TAB_MACADD", tabMacAdd);

        	this.fn_search();

        	// 건강기록일지에서 측정을 눌렀을 경우
        	if(this.tabFlag == 0)
        	{
        		nexacro.getApplication().gv_measureFlag = -1;
        		this.tab_head.set_tabindex(0);
        		//this.tab_head.Tabpage0.form.div_search.form.btn_tMeasure.click();
        	}
        	else if(this.tabFlag == 1)
        	{
        		nexacro.getApplication().gv_measureFlag = -1;
        		this.tab_head.set_tabindex(1);
        		//this.tab_head.Tabpage1.form.div_search.form.btn_tMeasure.click();
        	}
        	else if(this.tabFlag == 2)
        	{
        		nexacro.getApplication().gv_measureFlag = -1;
        		this.tab_head.set_tabindex(2);
        		//this.tab_head.Tabpage2.form.div_search.form.btn_tMeasure.click();
        	}

        };

        this.fn_setComboDs = function(obj)
        {
             var comboDsParamArr = [
        					     { outDsName : "ds_manager", sqlId : "NUB_COMMON.NUB_COMMON_DS_MANAGER_S",param : this.ds_search, bEmptyRow : true}
                            ];
           this.gfn_setComboDs(obj, comboDsParamArr);
        }

        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 검색 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search(this.fv_currentDS, this.fv_currentDS_i);
        	//this.fn_search(this.fv_currentDS);

        };

        // 저장 버튼
        this.fn_saveBtn = function ()
        {
        	//입력 필수여부체크
        	if(!this.fn_save_pre(this.fv_currentDS_i)) return false;
        	this.fn_save(this.fv_currentDS_i);
        };

        //삭제 버튼
        this.fn_deleteBtn = function ()
        {
        	//this.fn_delete(this.fv_currentDS);
        };

        // 초기화 버튼
        this.fn_resetBtn = function ()
        {
        	this.fn_reset();
        }
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        // 검색 전 validation
        this.fn_search_pre = function()
        {
        	if(Sct.Util.isEmpty(this.ds_search.getColumn(0,"RES_ID"))) { // 입소자성명이 빈값이면 리턴
        		//this.alert("입소자를 선택하여 주십시오.");
        		return false;
        	}
        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function(ds)
        {
        	// 입력 데이터셋에 법인코드(COMPANY_CD) 값이 없으면 저장
        	if(Sct.Util.isEmpty(ds.getColumn(0,"COMPANY_CD"))){
        		Sct.alert(this, "000569", "저장");	// {0}할 내용이 없습니다.
        		return false;
        	}else{ // 법인코드 값이 있으면 필수체크
        		if(ds.name == "ds_pressure_i"){ // 혈압
        			if(!this.gfn_findSnull(this.tab_head.Tabpage0.form.div_cont.form.div_head)) return false;
        		}else if(ds.name == "ds_sugar_i"){ // 혈당
        			if(!this.gfn_findSnull(this.tab_head.Tabpage1.form.div_cont.form.div_head)) return false;
        		}else if(ds.name == "ds_temperature_i"){ // 체온
        			if(!this.gfn_findSnull(this.tab_head.Tabpage2.form.div_cont.form.div_head)) return false;
        		}else if(ds.name == "ds_compos_i"){ // 체성분
        			if(this.ds_compos.rowcount > 0 ){ // 목록에 있으나 SEQ가 존재하면 수정가능
        				if(Sct.Util.isEmpty(this.ds_compos_i.getColumn(0,"COM_SEQ"))){
        					Sct.alert(this, "000574"); // 이미 저장된 정보가 있습니다.
        					return false;
        				}
        			}
        			if(!this.gfn_findSnull(this.tab_head.Tabpage3.form.div_cont.form.div_head)) return false;
        		}
        	}
        	//입력 필수여부체크
        	//if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;

        	//입력한값 중복 여부 체크
        	var keyArr = ["COMPANY_CD", "PRE_SEQ"];

        	if(!this.gfn_duplicateCheck(this.fv_currentDS, keyArr)) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function(ds, row)
        {
        	//삭제하시겠습니까?
        	if(!Sct.confirm(this, "000152", "")){ // 취소
        		//취소시 ROWTYPE NORMAL TYPE으로 변경
        		ds.set_enableevent(false);
        		ds.set_updatecontrol(false);
        		ds.setRowType(row, Dataset.ROWTYPE_NORMAL);
        		ds.set_updatecontrol(true);
        		ds.set_enableevent(true);
        		return false;
        	}
        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 검색
        this.fn_search = function(ds, ds_i)
        {
        	if(!this.fn_search_pre()) return;

        	if(!Sct.Util.isEmpty(ds_i)){ // 입력데이터셋의 COMPANY_CD가 빈값이 아니면 초기화
        		ds_i.clearData(); // 클리어
        		ds_i.addRow();
        	}

        	let svcId = "search";
        	let params = "/commonController.do";
        	let inDatasets = "input1=ds_search input2=ds_search input3=ds_search input4=ds_search input5=ds_search";
        	let outDatasets = "ds_resInfo=output1 ds_pressure=output2 ds_sugar=output3 ds_temperature=output4 ds_compos=output5";
        	let argument = "method=getList ";
        		argument += "sqlId='NUB202CT.NUB202CT_DS_RESINFO_S NUB202CT.NUB202CT_DS_PRESSURE_S NUB202CT.NUB202CT_DS_SUGAR_S NUB202CT.NUB202CT_DS_TEMP_S NUB202CT.NUB202CT_DS_COMPOS_S'";

        	let callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        //저장
        this.fn_save = function (ds)
        {
         	let inDs = "";
        	inDs = ds.name;

        	var svcId = "save";
        	var params = "/NUB202CTController.do";
        	var inDatasets = "input1="+inDs+":U";
        	var outDatasets = "";
        	var argument = "method=save ";
        	var callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 삭제
        this.fn_delete = function(ds, row)
        {
        	if(!this.fn_delete_pre(ds, row)) return;

        	let sqlId = "";
        	let inDs = "";
        	if(!Sct.Util.isEmpty(ds))
        	{
        		if(ds.name == "ds_pressure")
        		{
        			inDs = ds.name;
        			sqlId = "sqlId='NUB202CT.NUB202CT_DS_PRESSURE_D' ";
        		}else if(ds.name == "ds_sugar"){
        			inDs = ds.name;
        			sqlId = "sqlId='NUB202CT.NUB202CT_DS_SUGAR_D' ";
        		}else if(ds.name == "ds_temperature"){
        			inDs = ds.name;
        			sqlId = "sqlId='NUB202CT.NUB202CT_DS_TEMP_D' ";
        		}else if(ds.name == "ds_compos"){
        			inDs = ds.name;
        			sqlId = "sqlId='NUB202CT.NUB202CT_DS_COMPOS_D' ";
        		}
        	}

        	let svcId = "delete";
        	let params = "/commonController.do";
        	let inDatasets = "input1=" + inDs + ":U";
        	let outDatasets = "";
        	let argument = "method=delete ";
        		argument += sqlId;

        	let callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "AREA", this.ds_resInfo.getColumn(0,"AREA"));
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "LOCATION", this.ds_resInfo.getColumn(0,"LOCATION"));
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "RES_ID", this.ds_resInfo.getColumn(0,"RES_ID"));

        			if(this.fv_currentDS.rowcount < 1){ // 조회된 데이터가 없으면 작성일 빈값
        				this.ds_resInfo.setColumn(0,"PRE_DT2", "");
        			}else{
        				this.ds_resInfo.setColumn(0,"PRE_DT2", this.ds_search.getColumn(0,"DATE"));
        			}
        		}
        		else if(strSvcID == "save")
        		{
        			Sct.alert(this, "000570", "저장");	// {0} 되었습니다.
        			this.fn_search(this.fv_currentDS, this.fv_currentDS_i);
        			//this.fn_search();
        		}
        		else if(strSvcID == "delete")
        		{
        			Sct.alert(this, "000570", "삭제");	// {0} 되었습니다.
        			this.fn_search(this.fv_currentDS, this.fv_currentDS_i);
        			//this.fn_search();
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        // 연결된 기기조회
        this.fn_connnSearch = function (machTp)
        {
        	this.ds_search.setColumn(0,"MACH_TP", machTp);
        	const svcId = "connsearch";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_connlist=output1";
        	const argument = "method=getList "
        		+ "sqlId='NUB202CT.NUB202CT_DS_CONNLIST_S' ";

        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        //초기화
        this.fn_reset = function() {
        	this.ds_search.setColumn(0, "DATE", Sct.Util.getToday()); // 오늘
        	this.fn_search(this.fv_currentDS, this.fv_currentDS_i);
        	//this.fn_search();
        }

        // 연결된 기기 조회
        this.fn_connList = function (machTp)
        {
        	this.fn_connnSearch(machTp);

        	if(this.ds_connlist.rowcount < 1){
        		this.alert("연결된 기기가 없습니다. 기기 연결 후 측정하시기 바랍니다.");
        		return false;
        	}
        	return true;
        };
         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 혈압 측정 팝업
        this.tab_head_Tabpage0_div_search_btn_tMeasure_onclick = function(obj,e)
        {
        	if(!this.fn_connList("0300")) return false; // 연결된 혈압계 조회

        	var param = {mac : preMacAdd};

        	Sct.tPopup(this, "pop1", 350, 350, param, "TabletPOP::NUB_BLOOD_POP.xfdl", "fn_popCallback");
        };

        // 혈당 측정 팝업
        this.tab_head_Tabpage1_div_search_btn_tMeasure_onclick = function(obj,e)
        {
        	if(!this.fn_connList("0400")) return false; // 연결된 혈당계 조회

        	var param = {mac : sugMacAdd};

        	Sct.tPopup(this, "pop2", 350, 350, param, "TabletPOP::NUB_SUGAR_POP.xfdl", "fn_popCallback");
        };

        // 체온 측정 팝업
        this.tab_head_Tabpage2_div_search_btn_tMeasure_onclick = function(obj,e)
        {
        	//this.fn_connList("0500"); // 연결된 체온계 조회
        	if(!this.fn_connList("0500")) return false;

        	var param = {mac : temMacAdd};

        	Sct.tPopup(this, "pop3", 350, 350, param, "TabletPOP::NUB_TEMP_POP.xfdl", "fn_popCallback");
        };

        // 체성분 측정 팝업
        this.tab_head_Tabpage3_div_search_btn_tMeasure_onclick = function(obj,e)
        {
        	if(!this.fn_connList("0600")) return false; // 연결된 체성분분석기 조회

        	if(this.ds_compos.rowcount > 0 ){ // 목록에 있으나 있으면 측정불가
        		this.alert("이미 저장된 정보가 있습니다.");
        		return;
        	}
        	var param = {mac : comMacAdd};

        	Sct.tPopup(this, "pop4", 350, 500, param, "TabletPOP::NUB_WEIGHT_POP.xfdl", "fn_popCallback");
        };

        // 측정팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "pop1" : // 혈압
        			this.fn_onsetfocus();
        			this.ds_pressure_i.setColumn(0, "PRE_H", objDs.getColumn(0,"PRE_H"));
        			this.ds_pressure_i.setColumn(0, "PRE_L", objDs.getColumn(0,"PRE_L"));
        			this.ds_pressure_i.setColumn(0, "PULSE", objDs.getColumn(0,"PULSE"));
        			this.ds_pressure_i.setColumn(0, "IR_PRE_H", objDs.getColumn(0, "PRE_H"));
        			this.ds_pressure_i.setColumn(0, "IR_PRE_L", objDs.getColumn(0, "PRE_L"));
        			this.ds_pressure_i.setColumn(0, "IR_PULSE", objDs.getColumn(0, "PULSE"));
        			this.ds_pressure_i.setColumn(0, "PRE_TIME", Sct.Util.getHour() + Sct.Util.getMin());
        			this.ds_pressure_i.setColumn(0, "PRE_TIME2", this.ds_pressure_i.getColumn(0, "PRE_DT") + Sct.Util.getHour() + Sct.Util.getMin() + "00");
        			this.ds_pressure_i.setColumn(0, "IR_PRE_TIME", this.ds_pressure_i.getColumn(0, "PRE_DT") + Sct.Util.getHour() + Sct.Util.getMin() + "00");
        			this.fn_save(this.ds_pressure_i);
        			break;
        		case "pop2" : // 혈당
        			this.fn_onsetfocus();
        			this.ds_sugar_i.setColumn(0, "SUGAR", objDs.getColumn(0,"SUGAR"));
        			this.ds_sugar_i.setColumn(0, "SUG_TP", objDs.getColumn(0,"SUG_TP"));
        			this.ds_sugar_i.setColumn(0, "SUG_TIME", Sct.Util.getHour() + Sct.Util.getMin());
        			this.ds_sugar_i.setColumn(0, "IR_SUGAR", objDs.getColumn(0, "SUGAR"));
        			this.ds_sugar_i.setColumn(0, "IR_SUGAR_TIME", this.ds_sugar_i.getColumn(0, "SUG_DT") + Sct.Util.getHour() + Sct.Util.getMin() + "00");
        			this.ds_sugar_i.setColumn(0, "SUG_TIME2", this.ds_sugar_i.getColumn(0, "SUG_DT") + Sct.Util.getHour() + Sct.Util.getMin() + "00");
        			this.fn_save(this.ds_sugar_i);
        			break;
        		case "pop3" : // 체온
        			this.fn_onsetfocus();
        			this.ds_temperature_i.setColumn(0, "TEMPERATURE", objDs.getColumn(0,"TEMP"));
        			this.ds_temperature_i.setColumn(0, "TEM_TIME", Sct.Util.getHour() + Sct.Util.getMin());
        			this.ds_temperature_i.setColumn(0, "IR_TEMP", objDs.getColumn(0,"TEMP"));
        			this.ds_temperature_i.setColumn(0, "TEM_TIME2", this.ds_temperature_i.getColumn(0, "TEM_DT") + Sct.Util.getHour() + Sct.Util.getMin() + "00");
        			this.ds_temperature_i.setColumn(0, "IR_TEMP_TIME", this.ds_temperature_i.getColumn(0, "TEM_DT") + Sct.Util.getHour() + Sct.Util.getMin() + "00");
        			this.fn_save(this.ds_temperature_i);
        			break;
        		case "pop4" : // 체성분
        			this.fn_onsetfocus();
        			this.ds_compos_i.setColumn(0, "HEIGHT", objDs.getColumn(0,"HEIGHT"));
        			this.ds_compos_i.setColumn(0, "WEIGHT", objDs.getColumn(0,"WEIGHT"));
        			this.ds_compos_i.setColumn(0, "PBF", objDs.getColumn(0,"PBF"));
        			this.ds_compos_i.setColumn(0, "SMM", objDs.getColumn(0,"SMM"));
        			this.ds_compos_i.setColumn(0, "FAT_LVL", objDs.getColumn(0,"FAT_LVL"));
        			this.fn_save(this.ds_compos_i);
        			break;
        		case "pop5" :	// 처리자
        			const i = this.tab_head.tabindex;
        			if(i == 0)	// 혈압
        				this.ds_pressure_i.setColumn(0, "MANAGER_ID", objDs.getColumn(0,"USER_ID"));
        			else if(i == 1)	// 혈당
        				this.ds_sugar_i.setColumn(0, "MANAGER_ID", objDs.getColumn(0,"USER_ID"));
        			else if(i == 2)	// 체온
        				this.ds_temperature_i.setColumn(0, "MANAGER_ID", objDs.getColumn(0,"USER_ID"));
        			else if(i == 3)	// 체성분
        				this.ds_compos_i.setColumn(0, "MANAGER_ID", objDs.getColumn(0,"USER_ID"));
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };

        // head editbox 선택시 데이터셋 설정
        this.fn_onsetfocus = function()
        {
        	//if(this.fv_currentDS_i.getRowType(0) !=2 || this.fv_currentDS_i.getRowType(0) !=2 ){ // 행추가나 수정상태값이 아닌 경우
        	if(this.fv_currentDS_i.getRowType(0) == 1 || this.fv_currentDS_i.getRowType(0) == 2){ // 초기행 또는 행추가 상태일때 기본값세팅
        		if(Sct.Util.isEmpty(this.fv_currentDS_i.getColumn(0,"COMPANY_CD"))){ // 법인코드가 빈값이면 세팅

        			this.fv_currentDS_i.setColumn(0, "COMPANY_CD", this.ds_resInfo.getColumn(0,"COMPANY_CD"));
        			this.fv_currentDS_i.setColumn(0, "RES_ID", this.ds_resInfo.getColumn(0,"RES_ID"));
        			this.fv_currentDS_i.setColumn(0, "INDS", this.fv_currentDS_i.name);
        			this.fv_currentDS_i.setColumn(0, "REF_SYS_RES_ID", this.ds_resInfo.getColumn(0, "REF_SYS_RES_ID"));
        			this.fv_currentDS_i.setColumn(0, "REF_SYS_COMP_CD", this.ds_resInfo.getColumn(0, "REF_SYS_COMP_CD"));

        			const userId = nexacro.getApplication().gds_userInfo.getColumn(0,"USER_ID");
        			this.fv_currentDS_i.setColumn(0, "MANAGER_ID", userId);

        			//현재시간
        			const time = Sct.Util.getHour()+Sct.Util.getMin();

        			//초기값 설정
        			if(this.fv_currentDS_i.name == "ds_pressure_i") {
        				this.fv_currentDS_i.setColumn(0, "PRE_DT", this.ds_resInfo.getColumn(0,"PRE_DT"));
        				this.fv_currentDS_i.setColumn(0, "PRE_TIME", time);
        				this.fv_currentDS_i.setColumn(0, "PRE_TIME2", this.ds_resInfo.getColumn(0, "PRE_DT") + time + "00");
        			}else if(this.fv_currentDS_i.name == "ds_sugar_i") {
        				this.fv_currentDS_i.setColumn(0, "SUG_DT", this.ds_resInfo.getColumn(0,"PRE_DT"));
        				this.fv_currentDS_i.setColumn(0, "SUG_TIME", time);
        				this.fv_currentDS_i.setColumn(0, "SUG_TIME2", this.ds_resInfo.getColumn(0, "PRE_DT") + time + "00");
        			}else if(this.fv_currentDS_i.name == "ds_temperature_i") {
        				this.fv_currentDS_i.setColumn(0, "TEM_DT", this.ds_resInfo.getColumn(0,"PRE_DT"));
        				this.fv_currentDS_i.setColumn(0, "TEM_TIME", time);
        				this.fv_currentDS_i.setColumn(0, "TEM_TIME2", this.ds_resInfo.getColumn(0, "PRE_DT") + time + "00");
        			}else if(this.fv_currentDS_i.name == "ds_compos_i") {
        				this.fv_currentDS_i.setColumn(0, "COM_DT", this.ds_resInfo.getColumn(0,"PRE_DT"));

        				this.fv_currentDS_i.setColumn(0, "HEIGHT", 0);
        				this.fv_currentDS_i.setColumn(0, "WEIGHT", 0);
        				this.fv_currentDS_i.setColumn(0, "PBF", 0);
        				this.fv_currentDS_i.setColumn(0, "SMM", 0);
        				this.fv_currentDS_i.setColumn(0, "FAT_LVL", 0);
        			}
        		}

        	}
        };

        // 그리드 수정, 삭제 클릭 이벤트
        this.fn_onexpandup = function(obj,e)
        {
        	if(obj.getBindCellIndex("body", "EDIT_COL") == e.col){
        		this.fv_currentDS.setColumn(e.row, "Y");
        		this.fv_currentDS_i.copyRow(0, this.fv_currentDS, e.row);

        		const userId = nexacro.getApplication().gds_userInfo.getColumn(0,"USER_ID");
        		this.fv_currentDS_i.setColumn(0, "MANAGER_ID", userId);
        	}

        	if(obj.getBindCellIndex("body", "DEL_COL") == e.col){

        		//삭제버튼 클릭시 rowtype 변경
        		this.fv_currentDS.set_updatecontrol(false);
        		this.fv_currentDS.setRowType(e.row, Dataset.ROWTYPE_DELETE);
        		this.fv_currentDS.set_updatecontrol(true);

        		this.fn_delete(this.fv_currentDS, e.row);
        	}

        };

        // 탭 변경시 fv_currentGrid, fv_currentDS 바꾸기(div_cont에 그리드가 있는경우)
        this.tab_head_canchange = function(obj,e)
        {
        	const i = e.postindex;

        	if(i == "0"){ // 혈압
        		this.fv_currentDS = this.ds_pressure;
        		this.fv_currentDS_i = this.ds_pressure_i;
        	}else if(i == "1"){ // 혈당
        		this.fv_currentDS = this.ds_sugar;
        		this.fv_currentDS_i = this.ds_sugar_i;
        	}else if(i == "2"){ // 체온
        		this.fv_currentDS = this.ds_temperature;
        		this.fv_currentDS_i = this.ds_temperature_i;
        	}else if(i == "3"){ // 체성분
        		this.fv_currentDS = this.ds_compos;
        		this.fv_currentDS_i = this.ds_compos_i;
        	}
        	this.ds_search.setColumn(0, "DATE", Sct.Util.getToday());
        	this.fn_search();
        };

        // 시간 클릭 이벤트
        this.preDt_oneditclick = function(obj,e)
        {
        	let param;

        	if(obj.id == "mae_preDt")
        	{
        		param = {arg1 : "1"};
        	}
        	else if(obj.id == "mae_sugDt")
        	{
        		param = {arg1 : "2"};
        	}
        	else if(obj.id == "mae_temDt")
        	{
        		param = {arg1 : "3"};
        	}
        	this.makeStandardObject();
        	this.standardPlugin.callMethod("TIMEPICKER", param);
        };

        this.btn_tRecord_onclick = function(obj,e)
        {
        	let param;
        	if(obj.id == "btn_tRecord1")
        	{
        		param = {arg1 : "1"};
        	}
        	else if(obj.id == "btn_tRecord2")
        	{
        		param = {arg1 : "2"};
        	}
        	else if(obj.id == "btn_tRecord3")
        	{
        		param = {arg1 : "3"};
        	}
        	else if(obj.id == "btn_tRecord4")
        	{
        		param = {arg1 : "4"};
        	}
        	this.makeStandardObject();
        	this.standardPlugin.callMethod("VOICE", param);
        };

        // 앱에서 _oncallback의 callback 호출시
        this.on_standardPlugin_callback = function(obj, e)
        {
        	trace("this.on_callback ::: " + e.svcid);
        	trace("this.on_callback ::: " + e.reason);
        	trace("this.on_callback ::: " + e.returnvalue);

        	// 탭별 비고 콜백
        	if(e.svcid == "VOICE1")
        	{
        		if(e.reason == 0)
        		{
        			this.fn_onsetfocus();
        			let rmkValue = this.tab_head.Tabpage0.form.div_cont.form.div_head.form.txt_remark.value;
        			if (rmkValue == undefined)
        			{
        				this.tab_head.Tabpage0.form.div_cont.form.div_head.form.txt_remark.set_value(e.returnvalue);
        			}
        			else
        			{
        				this.tab_head.Tabpage0.form.div_cont.form.div_head.form.txt_remark.set_value(rmkValue + " " + e.returnvalue);
        			}
        		}
        	}
        	else if(e.svcid == "VOICE2")
        	{
        		if(e.reason == 0)
        		{
        			this.fn_onsetfocus();
        			let rmkValue = this.tab_head.Tabpage1.form.div_cont.form.div_head.form.txt_remark.value;
        			if (rmkValue == undefined)
        			{
        				this.tab_head.Tabpage1.form.div_cont.form.div_head.form.txt_remark.set_value(e.returnvalue);
        			}
        			else
        			{
        				this.tab_head.Tabpage1.form.div_cont.form.div_head.form.txt_remark.set_value(rmkValue + " " + e.returnvalue);
        			}
        		}
        	}
        	else if(e.svcid == "VOICE3")
        	{
        		if(e.reason == 0)
        		{
        			this.fn_onsetfocus();
        			let rmkValue = this.tab_head.Tabpage2.form.div_cont.form.div_head.form.txt_remark.value;
        			if (rmkValue == undefined)
        			{
        				this.tab_head.Tabpage2.form.div_cont.form.div_head.form.txt_remark.set_value(e.returnvalue);
        			}
        			else
        			{
        				this.tab_head.Tabpage2.form.div_cont.form.div_head.form.txt_remark.set_value(rmkValue + " " + e.returnvalue);
        			}
        		}
        	}
        	else if(e.svcid == "VOICE4")
        	{
        		if(e.reason == 0)
        		{
        			this.fn_onsetfocus();
        			let rmkValue = this.tab_head.Tabpage3.form.div_cont.form.div_head.form.txt_remark.value;
        			if (rmkValue == undefined)
        			{
        				this.tab_head.Tabpage3.form.div_cont.form.div_head.form.txt_remark.set_value(e.returnvalue);
        			}
        			else
        			{
        				this.tab_head.Tabpage3.form.div_cont.form.div_head.form.txt_remark.set_value(rmkValue + " " + e.returnvalue);
        			}
        		}
        	}

        	// 시간 콜백
        	if(e.svcid == "TIMEPICKER1")
        	{
        		if(e.reason == 0)
        		{
        			this.tab_head.Tabpage0.form.div_cont.form.div_head.form.mae_preDt.set_value(e.returnvalue);
        		}
        	}
        	else if(e.svcid == "TIMEPICKER2")
        	{
        		if(e.reason == 0)
        		{
        			this.tab_head.Tabpage1.form.div_cont.form.div_head.form.mae_sugDt.set_value(e.returnvalue);
        		}
        	}
        	else if(e.svcid == "TIMEPICKER3")
        	{
        		if(e.reason == 0)
        		{
        			this.tab_head.Tabpage2.form.div_cont.form.div_head.form.mae_temDt.set_value(e.returnvalue);
        		}
        	}
        };

        this.fn_mdt_onchanged = function(obj,e)
        {
        	if (obj.id == "mae_preDt")
        	{
        		this.ds_pressure_i.setColumn(0, "PRE_TIME2", this.ds_pressure_i.getColumn(0, "PRE_DT") + e.postvalue.substr(0, 2) + e.postvalue.substr(2, 2) + "00");
        	}

        	if (obj.id == "mae_sugDt")
        	{
        		this.ds_sugar_i.setColumn(0, "SUG_TIME2", this.ds_sugar_i.getColumn(0, "SUG_DT") + e.postvalue.substr(0, 2) + e.postvalue.substr(2, 2) + "00");
        	}

        	if (obj.id == "mae_temDt")
        	{
        		this.ds_temperature_i.setColumn(0, "TEM_TIME2", this.ds_temperature_i.getColumn(0, "TEM_DT") + e.postvalue.substr(0, 2) + e.postvalue.substr(2, 2) + "00");
        	}
        };

        this.cmb_manager_oneditclick = function(obj,e)
        {
        	const param = {COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")};

        	Sct.tPopup(this, "pop5", 350, 350, param, "TabletPOP::NUB_MANAGER_POP.xfdl", "fn_popCallback");
        };

        this.cmb_resident_oneditclick = function(obj,e)
        {
        	let param;
        	if (this.tab_head.tabindex == 0)
        		param = {COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD"), FLAG : "NUB202CT", DATE : this.ds_search.getColumn(0, "DATE")};
        	else if (this.tab_head.tabindex == 1)
        		param = {COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD"), FLAG : "NUB203CT", DATE : this.ds_search.getColumn(0, "DATE")};
        	else if (this.tab_head.tabindex == 2)
        		param = {COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD"), FLAG : "NUB204CT", DATE : this.ds_search.getColumn(0, "DATE")};
        	else if (this.tab_head.tabindex == 3)
        		param = {COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD"), FLAG : "NUB205CT", DATE : this.ds_search.getColumn(0, "DATE")};

        	Sct.tPopup(this, "pop5", 350, 350, param, "TabletPOP::NUB_RESIDENT_POP.xfdl", "fn_popCallback");
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
            this.tab_head.addEventHandler("canchange",this.tab_head_canchange,this);
            this.tab_head.Tabpage0.form.div_search.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage0.form.div_search.form.cmb_area.addEventHandler("onitemchanged",this.cmb_area_onitemchanged,this);
            this.tab_head.Tabpage0.form.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_location_onitemchanged,this);
            this.tab_head.Tabpage0.form.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.tab_head.Tabpage0.form.div_search.form.btn_tSave.addEventHandler("onclick",this.fn_saveBtn,this);
            this.tab_head.Tabpage0.form.div_search.form.btn_tMeasure.addEventHandler("onclick",this.tab_head_Tabpage0_div_search_btn_tMeasure_onclick,this);
            this.tab_head.Tabpage0.form.div_search.form.btn_tReset.addEventHandler("onclick",this.fn_resetBtn,this);
            this.tab_head.Tabpage0.form.div_cont.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage0.form.div_cont.form.grd_list.addEventHandler("onexpandup",this.fn_onexpandup,this);
            this.tab_head.Tabpage0.form.div_cont.form.div_head.form.Static02_00.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage0.form.div_cont.form.div_head.form.Static02_00_00.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage0.form.div_cont.form.div_head.form.Static02_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage0.form.div_cont.form.div_head.form.edt_preH.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage0.form.div_cont.form.div_head.form.edt_preL.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage0.form.div_cont.form.div_head.form.edt_pulse.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage0.form.div_cont.form.div_head.form.txt_remark.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage0.form.div_cont.form.div_head.form.Static02_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage0.form.div_cont.form.div_head.form.cmb_manager.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage0.form.div_cont.form.div_head.form.cmb_manager.addEventHandler("oneditclick",this.cmb_manager_oneditclick,this);
            this.tab_head.Tabpage0.form.div_cont.form.div_head.form.mae_preDt.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage0.form.div_cont.form.div_head.form.mae_preDt.addEventHandler("oneditclick",this.preDt_oneditclick,this);
            this.tab_head.Tabpage0.form.div_cont.form.div_head.form.mae_preDt.addEventHandler("onchanged",this.fn_mdt_onchanged,this);
            this.tab_head.Tabpage0.form.div_cont.form.btn_tRecord1.addEventHandler("onclick",this.btn_tRecord_onclick,this);
            this.tab_head.Tabpage1.form.div_cont.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage1.form.div_cont.form.div_head.form.Static02.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage1.form.div_cont.form.div_head.form.sta_sugar.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage1.form.div_cont.form.div_head.form.Static02_00_00.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage1.form.div_cont.form.div_head.form.sta_sugarTp.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage1.form.div_cont.form.div_head.form.Static02_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage1.form.div_cont.form.div_head.form.sta_remark.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage1.form.div_cont.form.div_head.form.edt_sugar.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage1.form.div_cont.form.div_head.form.txt_remark.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage1.form.div_cont.form.div_head.form.sta_preDt.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage1.form.div_cont.form.div_head.form.sta_manager.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage1.form.div_cont.form.div_head.form.Static02_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage1.form.div_cont.form.div_head.form.cmb_manager.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage1.form.div_cont.form.div_head.form.cmb_manager.addEventHandler("oneditclick",this.cmb_manager_oneditclick,this);
            this.tab_head.Tabpage1.form.div_cont.form.div_head.form.cmb_sugarTp.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage1.form.div_cont.form.div_head.form.mae_sugDt.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage1.form.div_cont.form.div_head.form.mae_sugDt.addEventHandler("oneditclick",this.preDt_oneditclick,this);
            this.tab_head.Tabpage1.form.div_cont.form.div_head.form.mae_sugDt.addEventHandler("onchanged",this.fn_mdt_onchanged,this);
            this.tab_head.Tabpage1.form.div_cont.form.div_head.form.btn_tRecord2.addEventHandler("onclick",this.btn_tRecord_onclick,this);
            this.tab_head.Tabpage1.form.div_cont.form.grd_list.addEventHandler("onexpandup",this.fn_onexpandup,this);
            this.tab_head.Tabpage1.form.div_search.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage1.form.div_search.form.cmb_area.addEventHandler("onitemchanged",this.cmb_area_onitemchanged,this);
            this.tab_head.Tabpage1.form.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_location_onitemchanged,this);
            this.tab_head.Tabpage1.form.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.tab_head.Tabpage1.form.div_search.form.btn_tSave.addEventHandler("onclick",this.fn_saveBtn,this);
            this.tab_head.Tabpage1.form.div_search.form.btn_tMeasure.addEventHandler("onclick",this.tab_head_Tabpage1_div_search_btn_tMeasure_onclick,this);
            this.tab_head.Tabpage1.form.div_search.form.btn_tReset.addEventHandler("onclick",this.fn_resetBtn,this);
            this.tab_head.Tabpage2.form.div_cont.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage2.form.div_cont.form.sta_name01.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage2.form.div_cont.form.div_head.form.Static02.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage2.form.div_cont.form.div_head.form.sta_temp.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage2.form.div_cont.form.div_head.form.Static02_00.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage2.form.div_cont.form.div_head.form.Static02_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage2.form.div_cont.form.div_head.form.sta_remark.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage2.form.div_cont.form.div_head.form.edt_temp.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage2.form.div_cont.form.div_head.form.txt_remark.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage2.form.div_cont.form.div_head.form.sta_preDt.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage2.form.div_cont.form.div_head.form.sta_manager.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage2.form.div_cont.form.div_head.form.Static02_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage2.form.div_cont.form.div_head.form.cmb_manager.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage2.form.div_cont.form.div_head.form.cmb_manager.addEventHandler("oneditclick",this.cmb_manager_oneditclick,this);
            this.tab_head.Tabpage2.form.div_cont.form.div_head.form.mae_temDt.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage2.form.div_cont.form.div_head.form.mae_temDt.addEventHandler("oneditclick",this.preDt_oneditclick,this);
            this.tab_head.Tabpage2.form.div_cont.form.div_head.form.mae_temDt.addEventHandler("onchanged",this.fn_mdt_onchanged,this);
            this.tab_head.Tabpage2.form.div_cont.form.div_head.form.btn_tRecord3.addEventHandler("onclick",this.btn_tRecord_onclick,this);
            this.tab_head.Tabpage2.form.div_cont.form.grd_list.addEventHandler("onexpandup",this.fn_onexpandup,this);
            this.tab_head.Tabpage2.form.div_search.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage2.form.div_search.form.cmb_area.addEventHandler("onitemchanged",this.cmb_area_onitemchanged,this);
            this.tab_head.Tabpage2.form.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_location_onitemchanged,this);
            this.tab_head.Tabpage2.form.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.tab_head.Tabpage2.form.div_search.form.btn_tSave.addEventHandler("onclick",this.fn_saveBtn,this);
            this.tab_head.Tabpage2.form.div_search.form.btn_tMeasure.addEventHandler("onclick",this.tab_head_Tabpage2_div_search_btn_tMeasure_onclick,this);
            this.tab_head.Tabpage2.form.div_search.form.btn_tReset.addEventHandler("onclick",this.fn_resetBtn,this);
            this.tab_head.Tabpage3.form.div_cont.form.sta_name01.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.Static02.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.Static02_00_00.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.sta_smm.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.Static02_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.sta_remark.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.txt_remark.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.sta_height.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.sta_manager.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.Static02_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.cmb_manager.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.cmb_manager.addEventHandler("oneditclick",this.cmb_manager_oneditclick,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.sta_weight.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.Static02_00.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.sta_bmi.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.Static02_00_01.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.sta_fat.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.Static02_00_00_01.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.mae_height.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.mae_weight.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.mae_bmi.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.mae_smm.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.mae_fat.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.tab_head.Tabpage3.form.div_cont.form.div_head.form.btn_tRecord4.addEventHandler("onclick",this.btn_tRecord_onclick,this);
            this.tab_head.Tabpage3.form.div_cont.form.grd_list.addEventHandler("onexpandup",this.fn_onexpandup,this);
            this.tab_head.Tabpage3.form.div_search.addEventHandler("onclick",this.formClick,this);
            this.tab_head.Tabpage3.form.div_search.form.cmb_area.addEventHandler("onitemchanged",this.cmb_area_onitemchanged,this);
            this.tab_head.Tabpage3.form.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_location_onitemchanged,this);
            this.tab_head.Tabpage3.form.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.tab_head.Tabpage3.form.div_search.form.btn_tSave.addEventHandler("onclick",this.fn_saveBtn,this);
            this.tab_head.Tabpage3.form.div_search.form.btn_tMeasure.addEventHandler("onclick",this.tab_head_Tabpage3_div_search_btn_tMeasure_onclick,this);
            this.tab_head.Tabpage3.form.div_search.form.btn_tReset.addEventHandler("onclick",this.fn_resetBtn,this);
        };
        this.loadIncludeScript("NUB202CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
