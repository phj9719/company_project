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
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resident", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HEA_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"HEA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_H\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_L\" type=\"STRING\" size=\"256\"/><Column id=\"PULSE\" type=\"STRING\" size=\"256\"/><Column id=\"BREATH\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPERATURE1\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPERATURE2\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPERATURE3\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"SUGAR_FBS\" type=\"STRING\" size=\"256\"/><Column id=\"SUGAR_PP2\" type=\"STRING\" size=\"256\"/><Column id=\"COUGH\" type=\"STRING\" size=\"256\"/><Column id=\"THROAT\" type=\"STRING\" size=\"256\"/><Column id=\"BREATHING_DIFF\" type=\"STRING\" size=\"256\"/><Column id=\"SPUTUM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\"/><Column id=\"INJECTION\" type=\"STRING\" size=\"256\"/><Column id=\"DRUG\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SUG_FBS_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SUG_PP2_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"TEM_TIME1\" type=\"STRING\" size=\"256\"/><Column id=\"TEM_TIME2\" type=\"STRING\" size=\"256\"/><Column id=\"TEM_TIME3\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PRE_H\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PRE_L\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PULSE\" type=\"STRING\" size=\"256\"/><Column id=\"IR_PRE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP1\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP_TIME1\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP2\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEM_TIME2\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP3\" type=\"STRING\" size=\"256\"/><Column id=\"IR_TEMP_TIME3\" type=\"STRING\" size=\"256\"/><Column id=\"IR_SUGAR_FBS\" type=\"STRING\" size=\"256\"/><Column id=\"IR_SUGAR_FBS_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"IR_SUGAR_PP2\" type=\"STRING\" size=\"256\"/><Column id=\"IR_SUGAR_PP2_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_manager", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_AGE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pre_remark", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","2.12%","14",null,"40","3.39%",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","0","160","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_locale("ko_KR");
            obj.set_displaynulltext("일자");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","170","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_displaynulltext("층(생활실)");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","300","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_location");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("호실");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","560","0","80","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_cssclass("btn_tSearch");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tDelete",null,"0","90","40","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_tDelete");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave",null,"0","90","40","100",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_tSave");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_resident","430","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_resident");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("입소자명");
            obj.set_buttonsize("0 0");
            obj.set_type("search");
            obj.set_usesoftkeyboard("false");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tReset",null,"0","100","40","200",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_cssclass("btn_tReset");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","2.12%","84",null,null,"3.39%","4.29%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_preTitle","0","55","320","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("혈압");
            obj.set_cssclass("sta_tDataHForm4");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_preB","0","95","210","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_preH","0","95","210","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("H/L");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static00","100","145","10","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            obj.set_text("/");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_pulseB","sta_preB:0","95","110","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_pulseH","sta_preH:0","95","110","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("맥박");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_temperature1B","sta_pulseB:0","95","110","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_temperature1H","sta_pulseH:0","95","110","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("오전①");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_temperature2B","sta_temperature1B:0","95","110","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_tDataBForm1");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_temperature2H","sta_temperature1H:00","95","110","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("오후②");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_TemperatureTitle","sta_preTitle:0","55","330","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("체온");
            obj.set_cssclass("sta_tDataHForm4");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sugarTtitle","sta_TemperatureTitle:0","55","240","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("혈당");
            obj.set_cssclass("sta_tDataHForm4");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_weightB","1000","55","110","140",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_weightH","1000","55","110","80",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_text("몸무게");
            obj.set_cssclass("sta_tDataHForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_remarkB","0","295",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_tDataBForm2");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txa_remark","20","345",null,null,"20","20",null,null,null,null,this.div_cont.form);
            obj.set_taborder("38");
            obj.set_wordWrap("char");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_bp_measure","190","61","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("39");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_tDefaultSkyblue");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_bt_measure","514","61","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("40");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_tDefaultSkyblue");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_bs_measure","793","62","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("41");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_tDefaultSkyblue");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_temperature3B","sta_temperature2B:0","95","110","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_tDataBForm1");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_temperature3H","sta_temperature2H:0","95","110","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("저녁③");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sugar_fbsB","sta_temperature3B:0","95","120","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_tDataBForm1");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sugar_fbsH","sta_temperature3H:0","95","120","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_text("식전①");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sugar_pp2B","sta_sugar_fbsB:0","95","120","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_tDataBForm1");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sugar_pp2H","sta_sugar_fbsH:0","95","120","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_text("식후2시간②");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_breathB","sta_sugarTtitle:0","55","110","140",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_tDataBForm1");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_breathH","sta_sugarTtitle:0","55","110","80",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_text("호흡");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_coughB","0","195","110","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_coughH","0","195","110","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_text("기침");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_throatB","sta_coughB:0","195","110","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_throatH","sta_coughH:0","195","110","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_text("인후통");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_breathing_diffB","sta_throatB:0","195","110","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_tDataBForm1");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_breathing_diffH","sta_throatH:0","195","110","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_text("호흡곤란");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sputumB","sta_breathing_diffB:0","195","110","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sputumH","sta_breathing_diffH:0","195","110","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_text("객담");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_etcB","sta_sputumB:0","195","270","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_etcH","sta_sputumH:0","195","270","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_text("기타");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_injectionB","sta_etcB:0","195","200","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_injectionH","sta_etcH:0","195","200","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_text("주사제투여");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_drugB","910","195","200","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_drugH","910","195","200","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_text("약물투여");
            obj.set_cssclass("sta_tDataHForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cough","35","245","45","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("31");
            obj.set_text("유");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_throat","145","245","45","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("32");
            obj.set_text("유");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_breathing_diff","255","245","45","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("57");
            obj.set_text("유");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_sputum","365","245","45","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("58");
            obj.set_text("유");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_etc","460","245","230","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("35");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_injection","730","245","160","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("36");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_drug","930","245","160","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("37");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_pre_h","23","145","70","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_pre_l","119","145","70","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_pulse","230","145","70","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_temperature1","340","145","70","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            obj.set_format("#0.#");
            obj.set_type("number");
            obj.set_limitbymask("both");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_temperature2","450","145","70","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("25");
            obj.set_format("#0.#");
            obj.set_type("number");
            obj.set_limitbymask("both");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_temperature3","560","145","70","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("26");
            obj.set_format("#0.#");
            obj.set_type("number");
            obj.set_limitbymask("both");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_sugar_fbs","670","145","80","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("27");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_sugar_pp2","790","145","80","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("28");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_breath","910","145","70","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("29");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_weight","1020","145","70","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("30");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_observe_managerIdB","164","0","245","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_tDataBForm2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_manager","166","2","240","36",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("61");
            obj.set_innerdataset("ds_manager");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_itemheight("36");
            obj.set_buttonsize("0 0");
            obj.set_type("search");
            obj.set_usesoftkeyboard("false");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager","0","0","165","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("62");
            obj.set_text("처리자");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_remarkH","0","295",null,"40","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_text("건강일지");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_previous_remarkH","64.22%","302","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("63");
            obj.set_text("전날복사");
            obj.set_cssclass("btn_tDefaultSkyblue");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_tRecord","55.61%","302","60","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("59");
            obj.set_cssclass("btn_tRecord");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",1180,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cmb_resident","value","ds_search","RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.mdt_pre_h","value","ds_list","PRE_H");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.mdt_pre_l","value","ds_list","PRE_L");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.mdt_pulse","value","ds_list","PULSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.mdt_temperature1","value","ds_list","TEMPERATURE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.mdt_temperature2","value","ds_list","TEMPERATURE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.mdt_temperature3","value","ds_list","TEMPERATURE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.mdt_sugar_fbs","value","ds_list","SUGAR_FBS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.mdt_sugar_pp2","value","ds_list","SUGAR_PP2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.mdt_breath","value","ds_list","BREATH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.mdt_weight","value","ds_list","WEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.chk_cough","value","ds_list","COUGH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.chk_throat","value","ds_list","THROAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.chk_breathing_diff","value","ds_list","BREATHING_DIFF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.chk_sputum","value","ds_list","SPUTUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.edt_etc","value","ds_list","ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.edt_injection","value","ds_list","INJECTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.edt_drug","value","ds_list","DRUG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.txa_remark","value","ds_list","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.cmb_manager","value","ds_list","MANAGER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB201CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB201CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB201CT.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB201CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUB201CT
         * 화면명   	: 건강기록일지
         * 화면설명 	: 태블릿 입소자별 건강기록일지를 관리
         * 작성일    	: 2021-07-30
         * 작성자   	: 조기종
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2021-09-15		조기종		측정 버튼을 바로가기 버튼으로 변경
         *		2021-10-07		조기종		sct_health 테이블에도 데이터가 들어가도록 수정
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
        this.fv_currentGrid = "";
        this.tranFlag = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e, false);

        	// 메뉴명 세팅
        //	this.sta_menuTitle.set_text(this.getOwnerFrame().arguments["menuTitle"]);

        	// 검색조건 세팅
        	this.taSearchDataSetting(obj);

        	// 처리자 콤보
        	this.fn_setComboDs(obj);

        	this.ds_location.filter("ARE_CD == '" + this.ds_search.getColumn(0, "AREA") + "'");

        	// 로드 완료후 검색
        	this.fn_search();
        };

        this.fn_setComboDs = function(obj)
        {
        	const comboDsParamArr = [
        		{ outDsName : "ds_manager", sqlId : "NUB_COMMON.NUB_COMMON_DS_MANAGER_S", param : this.ds_search, bEmptyRow : true }
        	   ,{ outDsName : "ds_location", sqlId : "NUB_COMMON.NUB_COMMON_DS_LOCATION_ALL_S", param : this.ds_search, bEmptyRow : true }
        	   ,{ outDsName : "ds_resident", sqlId : "NUB_COMMON.NUB_COMMON_DS_RESIDENT_ALL_S", param : this.ds_search, bEmptyRow : true }
        	];
        	this.gfn_setComboDs(obj, comboDsParamArr);
        };
        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 검색 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };

        // 초기화 버튼
        this.fn_resetBtn = function ()
        {
        	this.ds_search.setColumn(0, "DATE", Sct.Util.getToday()); // 오늘
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
        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function ()
        {
        	// 저장 내용 체크
        	if(!Sct.Grid.hasInsertAndUpdateRow(this.ds_list))
        	{
        		Sct.alert(this, "000569", "저장");	// {0}할 내용이 없습니다.
        		return false;
        	}

        	// 저장하시겠습니까?
        	if(!Sct.confirm(this, "000038")) return false;

        	const nRow = this.ds_list.rowposition;

        	if(this.ds_list.getRowType(nRow) == 2) this.tranFlag = "I";
        	else if(this.ds_list.getRowType(nRow) == 4) this.tranFlag = "U";

        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function()
        {
        	// 데이터셋 상태가 추가상태이면 삭제 못함
        	if(this.ds_list.getRowType(this.ds_list.rowposition) == 2)
        	{
        		Sct.alert(this, "000569", "삭제");	// {0}할 내용이 없습니다.
        		return false;
        	}

        	// 삭제하시겠습니까?
        	if(Sct.confirm(this, "000083", "삭제"))
        	{
        		const nRow = this.ds_list.rowposition;
        		trace(nRow);
        		this.ds_list.set_updatecontrol(false);
        		this.ds_list.setRowType(nRow, Dataset.ROWTYPE_DELETE);
        		this.ds_list.set_updatecontrol(true);
        		trace(this.ds_list.getRowType(nRow));
        	}
        	else
        	{
        		return false;
        	}

        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 검색
        this.fn_search = function ()
        {
        	// validation
        	if(!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search input2=ds_search";
        	const outDatasets = "ds_list=output1 ds_resInfo=output2";
        	const argument = "method=getList "
        		+ "sqlId='NUB201CT.NUB201CT_DS_LIST_S NUB_COMMON.NUB_COMMON_DS_RESINFO_S' ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function ()
        {
        	if(!this.fn_save_pre()) return;

        // 	const svcId = "save";
        // 	const inDs = "ds_list";
        // 	this.fn_save_com(svcId, inDs);

        	const svcId = "save";
        	const params = "/NUB201CTController.do";
        	const inDatasets = "input1=ds_list:U";
        	const outDatasets = "";
        	const argument = "method=save";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 삭제
        this.fn_delete = function()
        {
        	if(!this.fn_delete_pre()) return;

        	const svcId = "delete";
        //	const params = "/commonController.do";
        	const params = "/NUB201CTController.do";
        	const inDatasets = "input1=ds_list:U";
        	const outDatasets = "";
        // 	const argument = "method=delete "
        // 				   + "sqlId=NUB201CT.NUB201CT_DS_LIST_D ";
        	const argument = "method=delete";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		// 검색 콜백
        		if(strSvcID == "search")
        		{
        			// 검색조건 유지를 위해 글로벌 데이터셋에 조건 세팅
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "AREA", this.ds_resInfo.getColumn(0,"AREA"));
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "LOCATION", this.ds_resInfo.getColumn(0,"LOCATION"));
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "RES_ID", this.ds_resInfo.getColumn(0,"RES_ID"));

        			// 검색결과가 없으면
        			if(this.ds_list.rowcount < 1)
        			{
        				// 행추가
        				const nRow = this.ds_list.addRow();
        				// 초기화
        				this.ds_list.setColumn(nRow, "COMPANY_CD", this.ds_search.getColumn(0, "COMPANY_CD"));	// 시설코드
        				this.ds_list.setColumn(nRow, "RES_ID", this.ds_search.getColumn(0, "RES_ID"));	// 입소자ID
        			//	this.ds_list.setColumn(nRow, "HEA_DT", this.ds_search.getColumn(0, "DATE"));	// 작성일
        				this.ds_list.setColumn(nRow, "PRE_H", 0);	// 혈압(HIGH)
        				this.ds_list.setColumn(nRow, "PRE_L", 0);	// 혈압(LOW)
        				this.ds_list.setColumn(nRow, "PULSE", 0);	// 맥박
        				this.ds_list.setColumn(nRow, "BREATH", 0);	// 호흡
        				this.ds_list.setColumn(nRow, "TEMPERATURE1", 0);	// 체온1(오전)
        				this.ds_list.setColumn(nRow, "TEMPERATURE2", 0);	// 체온2(오후)
        				this.ds_list.setColumn(nRow, "TEMPERATURE3", 0);	// 체온3(저녁)
        				this.ds_list.setColumn(nRow, "WEIGHT", 0);	// 몸무게
        				this.ds_list.setColumn(nRow, "SUGAR_FBS", 0);	// 혈당1(식전)
        				this.ds_list.setColumn(nRow, "SUGAR_PP2", 0);	// 혈당2(식후2시간)
        				this.ds_list.setColumn(nRow, "COUGH", 0);
        				this.ds_list.setColumn(nRow, "THROAT", 0);
        				this.ds_list.setColumn(nRow, "BREATHING_DIFF", 0);
        				this.ds_list.setColumn(nRow, "SPUTUM", 0);

        				// 처리자에 접속자 세팅
        				this.ds_list.setColumn(nRow, "MANAGER_ID", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID"));
        			}
        			else
        			{
        			//	this.div_cont.form.mae_dateVal.set_value(this.ds_list.getColumn(0, "HEA_DT"));
        				if(this.ds_list.getColumn(0, "PRE_H") == "" || this.ds_list.getColumn(0, "PRE_H") == null)
        				{
        					this.ds_list.setColumn(0, "PRE_H", 0);
        				}
        				if(this.ds_list.getColumn(0, "PRE_L") == "" || this.ds_list.getColumn(0, "PRE_L") == null)
        				{
        					this.ds_list.setColumn(0, "PRE_L", 0);
        				}
        				if(this.ds_list.getColumn(0, "PULSE") == "" || this.ds_list.getColumn(0, "PULSE") == null)
        				{
        					this.ds_list.setColumn(0, "PULSE", 0);
        				}
        				if(this.ds_list.getColumn(0, "BREATH") == "" || this.ds_list.getColumn(0, "BREATH") == null)
        				{
        					this.ds_list.setColumn(0, "BREATH", 0);
        				}
        				if(this.ds_list.getColumn(0, "TEMPERATURE1") == "" || this.ds_list.getColumn(0, "TEMPERATURE1") == null)
        				{
        					this.ds_list.setColumn(0, "TEMPERATURE1", 0);
        				}
        				if(this.ds_list.getColumn(0, "TEMPERATURE2") == "" || this.ds_list.getColumn(0, "TEMPERATURE2") == null)
        				{
        					this.ds_list.setColumn(0, "TEMPERATURE2", 0);
        				}
        				if(this.ds_list.getColumn(0, "TEMPERATURE3") == "" || this.ds_list.getColumn(0, "TEMPERATURE3") == null)
        				{
        					this.ds_list.setColumn(0, "TEMPERATURE3", 0);
        				}
        				if(this.ds_list.getColumn(0, "WEIGHT") == "" || this.ds_list.getColumn(0, "WEIGHT") == null)
        				{
        					this.ds_list.setColumn(0, "WEIGHT", 0);
        				}
        				if(this.ds_list.getColumn(0, "SUGAR_FBS") == "" || this.ds_list.getColumn(0, "SUGAR_FBS") == null)
        				{
        					this.ds_list.setColumn(0, "SUGAR_FBS", 0);
        				}
        				if(this.ds_list.getColumn(0, "SUGAR_PP2") == "" || this.ds_list.getColumn(0, "SUGAR_PP2") == null)
        				{
        					this.ds_list.setColumn(0, "SUGAR_PP2", 0);
        				}
        				if(this.ds_list.getColumn(0, "COUGH") == "" || this.ds_list.getColumn(0, "COUGH") == null)
        				{
        					this.ds_list.setColumn(0, "COUGH", 0);
        				}
        				if(this.ds_list.getColumn(0, "THROAT") == "" || this.ds_list.getColumn(0, "THROAT") == null)
        				{
        					this.ds_list.setColumn(0, "THROAT", 0);
        				}
        				if(this.ds_list.getColumn(0, "BREATHING_DIFF") == "" || this.ds_list.getColumn(0, "BREATHING_DIFF") == null)
        				{
        					this.ds_list.setColumn(0, "BREATHING_DIFF", 0);
        				}
        				if(this.ds_list.getColumn(0, "SPUTUM") == "" || this.ds_list.getColumn(0, "SPUTUM") == null)
        				{
        					this.ds_list.setColumn(0, "SPUTUM", 0);
        				}
        			}
        		}
        		// 저장 콜백
        		else if(strSvcID == "save")
        		{
        			if(this.tranFlag == "I")
        			{
        				Sct.alert(this, "000570", "등록");	// {0} 되었습니다.
        			}
        			else if(this.tranFlag == "U")
        			{
        				Sct.alert(this, "000570", "수정");	// {0} 되었습니다.
        			}
        			this.tranFlag = "";

        			this.fn_search();
        		}
        		// 삭제 콜백
        		else if(strSvcID == "delete")
        		{
        			Sct.alert(this, "000570", "삭제");	// {0} 되었습니다.
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
        // 안드로이드 네이티브 통신 콜백
        this.on_standardPlugin_callback = function(obj, e)
        {
        	trace("this.on_callback ::: " + e.svcid);
        	trace("this.on_callback ::: " + e.reason);
        	trace("this.on_callback ::: " + e.returnvalue);

        	// STT
        	if(e.svcid == "VOICE1")
        	{
        		if(e.reason == 0)
        		{
        			let rmkValue = this.ds_list.getColumn(0, "REMARK");
        			if (rmkValue == undefined)
        			{
        				this.ds_list.setColumn(0, "REMARK", e.returnvalue);
        			}
        			else
        			{
        				this.ds_list.setColumn(0, "REMARK", rmkValue + " " + e.returnvalue);
        			}
        		}
        	}
        };

        this.on_standardPlugin_permission_result = function(obj, e)
        {
        	trace("this.on_permission_result ::: " + e.svcid);
        	trace("this.on_permission_result ::: " + e.reason);
        	trace("this.on_permission_result ::: " + e.returnvalue);

        	if (e.reason == -9)
        	{
        		this.alert("권한허용이 되지 않았습니다.");
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.btn_tMeasureLink_onclick = function(obj,e)
        {
        	for(let i = 0; i < nexacro.getApplication().av_subMenu.form.div_subMenuControl.form.components.length; i++)
        	{
        		if(nexacro.getApplication().av_subMenu.form.div_subMenuControl.form.components[i].text == "혈압측정" &&
        		   obj.id == "btn_bp_measure"){
        			nexacro.getApplication().av_subMenu.form.div_subMenuControl.form.components[i].setFocus();
        			nexacro.getApplication().av_subMenu.form.div_subMenuControl.form.components[i].click();
        		}
        		if(nexacro.getApplication().av_subMenu.form.div_subMenuControl.form.components[i].text == "체온측정" &&
        		   obj.id == "btn_bt_measure"){
        			nexacro.getApplication().av_subMenu.form.div_subMenuControl.form.components[i].setFocus();
        			nexacro.getApplication().av_subMenu.form.div_subMenuControl.form.components[i].click();
        		}
        		if(nexacro.getApplication().av_subMenu.form.div_subMenuControl.form.components[i].text == "혈당측정" &&
        		   obj.id == "btn_bs_measure"){
        			nexacro.getApplication().av_subMenu.form.div_subMenuControl.form.components[i].setFocus();
        			nexacro.getApplication().av_subMenu.form.div_subMenuControl.form.components[i].click();
        		}
        	}
        };

        this.btn_tRecord_onclick = function(obj,e)
        {
        	const param = {arg1 : "1"};
        	const stObj = this.makeStandardObject();
        	if(stObj)
        	{
        		this.standardPlugin.callMethod("VOICE", param);
        	}
        };



        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "pop1" : // 처리자
        			this.ds_list.setColumn(0, "MANAGER_ID", objDs.getColumn(0,"USER_ID"));
        			break;
        		case "pop2" : // 입소자
        			this.ds_location.filter("ARE_CD == '"+objDs.getColumn(0, "AREA")+"'");
        			this.ds_resident.filter("");
        			this.div_search.form.cmb_area.set_value(objDs.getColumn(0, "AREA"));
        			this.div_search.form.cmb_location.set_value(objDs.getColumn(0, "LOCATION"));
        			this.div_search.form.cmb_resident.set_value(objDs.getColumn(0, "RES_ID"));
        			this.fn_search();
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };

        // 시간 입력
        this.mdt_onchanged = function(obj,e)
        {
        	const time = Sct.Util.getHour()+Sct.Util.getMin();
        	// 혈압 H
        	if (obj.id == "mdt_pre_h")
        	{
        		this.ds_list.setColumn(0, "PRE_TIME", time);
        	}
        	// 혈압 L
        	else if (obj.id == "mdt_pre_l")
        	{
        		this.ds_list.setColumn(0, "PRE_TIME", time);
        	}
        	// 맥박
        	else if (obj.id == "mdt_pulse")
        	{
        		this.ds_list.setColumn(0, "PRE_TIME", time);
        	}
        	// 체온1
        	else if (obj.id == "mdt_temperature1")
        	{
        		this.ds_list.setColumn(0, "TEM_TIME1", time);
        	}
        	// 체온2
        	else if (obj.id == "mdt_temperature2")
        	{
        		this.ds_list.setColumn(0, "TEM_TIME2", time);
        	}
        	// 체온3
        	else if (obj.id == "mdt_temperature3")
        	{
        		this.ds_list.setColumn(0, "TEM_TIME3", time);
        	}
        	// 혈당1
        	else if (obj.id == "mdt_sugar_fbs")
        	{
        		this.ds_list.setColumn(0, "SUG_FBS_TIME", time);
        	}
        	// 혈당2
        	else if (obj.id == "mdt_sugar_pp2")
        	{
        		this.ds_list.setColumn(0, "SUG_PP2_TIME", time);
        	}
        };

        this.div_search_cmb_resident_oneditclick = function(obj,e)
        {
        	const param = {
        			COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")
        		,	FLAG : "NUB201CT"
        		,   AREA : this.ds_search.getColumn(0, "AREA")
        		,   LOCATION : this.ds_search.getColumn(0, "LOCATION")
        		,	DATE : this.ds_search.getColumn(0, "DATE")
        	};

        	Sct.tPopup(this, "pop2", 350, 350, param, "TabletPOP::NUB_RESIDENT_POP.xfdl", "fn_popCallback");
        };

        this.cmb_manager_oneditclick = function(obj,e)
        {
        	const param = {COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")};

        	Sct.tPopup(this, "pop1", 350, 350, param, "TabletPOP::NUB_MANAGER_POP.xfdl", "fn_popCallback");
        };



        this.div_cont_btn_previous_remarkH_onclick = function(obj,e)
        {
        	// 2021-11-17 전날내용 버튼 추가
        	if(this.gfn_isNull(this.ds_list.getColumn(0, "RES_ID"))) {
        		Sct.alert(this, "000076", "입소자"+"|"); // {0} 항목은 필수 입력값입니다.
        		return;
        	}
        	if(!this.gfn_isNull(this.ds_list.getColumn(0, "REMARK"))) {
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
        		+ "sqlId=NUB201CT.NUB201CT_DS_PRE_REMARK_S "
        		+ "COMPANY_CD=" + this.ds_list.getColumn(0, "COMPANY_CD") + " "
        		+ "RES_ID=" + this.ds_list.getColumn(0, "RES_ID") + " "
        		;

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);

        	// 전날 간호일지 세팅
        	this.ds_list.setColumn(0, "REMARK", this.ds_pre_remark.getColumn(0, "REMARK"));

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
            this.div_search.addEventHandler("onclick",this.formClick,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.cmb_area_onitemchanged,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_location_onitemchanged,this);
            this.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.btn_tDelete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_search.form.btn_tSave.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_search.form.cmb_resident.addEventHandler("oneditclick",this.div_search_cmb_resident_oneditclick,this);
            this.div_search.form.btn_tReset.addEventHandler("onclick",this.fn_resetBtn,this);
            this.div_cont.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_preTitle.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_preB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_preH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_pulseB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_pulseH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_temperature1B.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_temperature1H.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_temperature2B.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_temperature2H.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_TemperatureTitle.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_sugarTtitle.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_weightB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_weightH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_remarkB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.btn_bp_measure.addEventHandler("onclick",this.btn_tMeasureLink_onclick,this);
            this.div_cont.form.btn_bt_measure.addEventHandler("onclick",this.btn_tMeasureLink_onclick,this);
            this.div_cont.form.btn_bs_measure.addEventHandler("onclick",this.btn_tMeasureLink_onclick,this);
            this.div_cont.form.sta_temperature3B.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_temperature3H.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_sugar_fbsB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_sugar_fbsH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_sugar_pp2B.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_sugar_pp2H.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_breathB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_breathH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_coughB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_coughH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_throatB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_throatH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_breathing_diffB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_breathing_diffH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_sputumB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_sputumH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_etcB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_etcH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_injectionB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_injectionH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_drugB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_drugH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.mdt_pre_h.addEventHandler("onchanged",this.mdt_onchanged,this);
            this.div_cont.form.mdt_pre_l.addEventHandler("onchanged",this.mdt_onchanged,this);
            this.div_cont.form.mdt_pulse.addEventHandler("onchanged",this.mdt_onchanged,this);
            this.div_cont.form.mdt_temperature1.addEventHandler("onchanged",this.mdt_onchanged,this);
            this.div_cont.form.mdt_temperature2.addEventHandler("onchanged",this.mdt_onchanged,this);
            this.div_cont.form.mdt_temperature3.addEventHandler("onchanged",this.mdt_onchanged,this);
            this.div_cont.form.mdt_sugar_fbs.addEventHandler("onchanged",this.mdt_onchanged,this);
            this.div_cont.form.mdt_sugar_pp2.addEventHandler("onchanged",this.mdt_onchanged,this);
            this.div_cont.form.sta_observe_managerIdB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.cmb_manager.addEventHandler("oneditclick",this.cmb_manager_oneditclick,this);
            this.div_cont.form.sta_manager.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_remarkH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.btn_previous_remarkH.addEventHandler("onclick",this.div_cont_btn_previous_remarkH_onclick,this);
            this.div_cont.form.btn_tRecord.addEventHandler("onclick",this.btn_tRecord_onclick,this);
            this.ds_pre_remark.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("NUB201CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
