(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUB304CT");
            this.set_titletext("식사");
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
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MEA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"FUND_DIS\" type=\"STRING\" size=\"256\"/><Column id=\"FUND1\" type=\"STRING\" size=\"256\"/><Column id=\"FUND2\" type=\"STRING\" size=\"256\"/><Column id=\"FUND3\" type=\"STRING\" size=\"256\"/><Column id=\"FUND4\" type=\"STRING\" size=\"256\"/><Column id=\"FUND5\" type=\"STRING\" size=\"256\"/><Column id=\"FUND6\" type=\"STRING\" size=\"256\"/><Column id=\"DIETARY_CURE\" type=\"STRING\" size=\"256\"/><Column id=\"DIET1\" type=\"STRING\" size=\"256\"/><Column id=\"DIET2\" type=\"STRING\" size=\"256\"/><Column id=\"DIET3\" type=\"STRING\" size=\"256\"/><Column id=\"DIET4\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL1\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL2\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL3\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL4\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL5\" type=\"STRING\" size=\"256\"/><Column id=\"B_MEAL6\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TP\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL1\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL2\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL3\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL4\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL5\" type=\"STRING\" size=\"256\"/><Column id=\"L_MEAL6\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TP\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL1\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL2\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL3\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL4\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL5\" type=\"STRING\" size=\"256\"/><Column id=\"D_MEAL6\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_manager", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_AGE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_minute", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_posture", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_meal_resident", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_FR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_TO_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_FR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_TO_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_FR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_TO_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FOOD_TP\" type=\"STRING\" size=\"256\"/><Column id=\"FOOD1\" type=\"STRING\" size=\"256\"/><Column id=\"FOOD2\" type=\"STRING\" size=\"256\"/><Column id=\"FOOD3\" type=\"STRING\" size=\"256\"/><Column id=\"FOOD4\" type=\"STRING\" size=\"256\"/><Column id=\"FOOD5\" type=\"STRING\" size=\"256\"/><Column id=\"FOOD6\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC_DIS\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC1\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC2\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC3\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC4\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC5\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC6\" type=\"STRING\" size=\"256\"/><Column id=\"DIETARY_CURE\" type=\"STRING\" size=\"256\"/><Column id=\"DIET1\" type=\"STRING\" size=\"256\"/><Column id=\"DIET2\" type=\"STRING\" size=\"256\"/><Column id=\"DIET3\" type=\"STRING\" size=\"256\"/><Column id=\"DIET4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_readonly("false");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","300","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_location");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("호실");
            obj.set_readonly("false");
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
            obj.set_popupsize("0 0");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tReset",null,"0","100","40","200",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_cssclass("btn_tReset");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","2.12%","65",null,null,"3.39%","4.29%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_fundDisB","0","0","891","45",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_tDataBForm2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_fundDisH","0","0","147","45",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("기능장애");
            obj.set_cssclass("sta_tDataHForm4");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_fundVal1","167","8","110","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("저작곤란");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_fundVal2","277","8","110","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("연하곤란");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_fundVal3","387","8","110","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("소화곤란");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_fundVal4","497","8","70","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("당뇨");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_fundVal5","567","8","110","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("위관영양");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_fundVal6","677","8","110","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("기타장애");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_dietaryCureB","0","46","891","45",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_tDataBForm2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_dietaryCureH","0","46","147","45",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_text("치료식이");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dietaryVal1","167","53","130","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_text("체중조절식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dietaryVal2","302","53","90","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_text("당뇨식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dietaryVal3","401","53","90","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_text("저염식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dietaryVal4","501","53","110","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_text("고단백식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_managerIdB","891","0","224","91",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_managerIdH","891","0","224","45",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_text("처리자");
            obj.set_cssclass("sta_tDataHForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_managerId","904","49","200","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_manager");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_itemheight("36");
            obj.set_buttonsize("0 0");
            obj.set_readonly("false");
            obj.set_type("search");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_division","0","95","147","45",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_text("구분");
            obj.set_cssclass("sta_tDataHForm4");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_timeH","147","95","130","45",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_text("시간");
            obj.set_cssclass("sta_tDataHForm4");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_tpH","277","95","530","45",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_text("식사유형");
            obj.set_cssclass("sta_tDataHForm4");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_qtyH","807","95","308","45",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_text("식사량");
            obj.set_cssclass("sta_tDataHForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_breB","0","140",null,"45","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_breH","0","140","147","45",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            obj.set_text("아침식사");
            obj.set_cssclass("sta_tDataHForm4");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_lunB","0","186",null,"45","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_lunH","0","186","147","45",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            obj.set_text("점심식사");
            obj.set_cssclass("sta_tDataHForm4");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_dinB","0","232",null,"45","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_dinH","0","232","147","45",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("25");
            obj.set_text("저녁식사");
            obj.set_cssclass("sta_tDataHForm4");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_morSnackB","0","278",null,"45","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_morSnackH","0","278","147","45",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("27");
            obj.set_text("오전간식");
            obj.set_cssclass("sta_tDataHForm4");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_aftSnackB","0","324",null,"45","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_aftSnackH","0","324","147","45",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("29");
            obj.set_text("오후간식");
            obj.set_cssclass("sta_tDataHForm4");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_breTime","161","144","110","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("31");
            obj.set_cssclass("medt_clock");
            obj.set_format("## : ##");
            obj.set_readonly("true");
            obj.set_type("string");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lunTime","161","190","110","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("32");
            obj.set_cssclass("medt_clock");
            obj.set_format("## : ##");
            obj.set_readonly("true");
            obj.set_type("string");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_dinTime","161","238","110","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("33");
            obj.set_cssclass("medt_clock");
            obj.set_format("## : ##");
            obj.set_readonly("true");
            obj.set_type("string");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_morSnackTime","161","283","110","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("34");
            obj.set_cssclass("medt_clock");
            obj.set_format("## : ##");
            obj.set_readonly("true");
            obj.set_type("string");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_aftSnackTime","161","328","110","35",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("35");
            obj.set_cssclass("medt_clock");
            obj.set_format("## : ##");
            obj.set_readonly("true");
            obj.set_type("string");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_breTp1","286","148","90","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("36");
            obj.set_text("일반식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_breTp2","371","148","70","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("37");
            obj.set_text("죽식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_breTp3","436","148","130","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("38");
            obj.set_text("유동·경관식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_breTp4","566","148","90","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("39");
            obj.set_text("갈은식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_breTp5","651","148","90","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("40");
            obj.set_text("다진식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_breTp6","736","148","70","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("41");
            obj.set_text("미음");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("rdo_breQty","803","148","307","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("42");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("sqRadio");
            var div_cont_form_rdo_breQty_innerdataset = new nexacro.NormalDataset("div_cont_form_rdo_breQty_innerdataset", obj);
            div_cont_form_rdo_breQty_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전량</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1/2 이상</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">1/2 미만</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_rdo_breQty_innerdataset);
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_lunTp1","286","193","80","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("43");
            obj.set_text("일반식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_lunTp2","371","193","70","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("44");
            obj.set_text("죽식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_lunTp3","436","193","130","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("45");
            obj.set_text("유동·경관식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_lunTp4","566","193","80","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("46");
            obj.set_text("갈은식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_lunTp5","651","193","80","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("47");
            obj.set_text("다진식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_lunTp6","736","193","60","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("48");
            obj.set_text("미음");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dinTp1","286","240","80","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("49");
            obj.set_text("일반식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dinTp2","371","240","70","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("50");
            obj.set_text("죽식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dinTp3","436","240","130","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("51");
            obj.set_text("유동·경관식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dinTp4","566","240","80","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("52");
            obj.set_text("갈은식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dinTp5","651","240","80","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("53");
            obj.set_text("다진식");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_dinTp6","736","240","60","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("54");
            obj.set_text("미음");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("rdo_lunQty","803","193","307","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("55");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("sqRadio");
            var div_cont_form_rdo_lunQty_innerdataset = new nexacro.NormalDataset("div_cont_form_rdo_lunQty_innerdataset", obj);
            div_cont_form_rdo_lunQty_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전량</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1/2 이상</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">1/2 미만</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_rdo_lunQty_innerdataset);
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("rdo_dinQty","803","240","307","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("56");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("sqRadio");
            var div_cont_form_rdo_dinQty_innerdataset = new nexacro.NormalDataset("div_cont_form_rdo_dinQty_innerdataset", obj);
            div_cont_form_rdo_dinQty_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전량</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1/2 이상</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">1/2 미만</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_rdo_dinQty_innerdataset);
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("rdo_morSnackQty","803","286","307","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("57");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("sqRadio");
            var div_cont_form_rdo_morSnackQty_innerdataset = new nexacro.NormalDataset("div_cont_form_rdo_morSnackQty_innerdataset", obj);
            div_cont_form_rdo_morSnackQty_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전량</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1/2 이상</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">1/2 미만</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_rdo_morSnackQty_innerdataset);
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("rdo_aftSnackQty","803","333","307","30",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("58");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("sqRadio");
            var div_cont_form_rdo_aftSnackQty_innerdataset = new nexacro.NormalDataset("div_cont_form_rdo_aftSnackQty_innerdataset", obj);
            div_cont_form_rdo_aftSnackQty_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전량</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1/2 이상</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">1/2 미만</Col></Row></Rows>");
            obj.set_innerdataset(div_cont_form_rdo_aftSnackQty_innerdataset);
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

            obj = new BindItem("item8","div_cont.form.chk_fundVal1","value","ds_list","FUND1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.chk_fundVal2","value","ds_list","FUND2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.chk_fundVal3","value","ds_list","FUND3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.chk_fundVal4","value","ds_list","FUND4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.chk_fundVal5","value","ds_list","FUND5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.chk_fundVal6","value","ds_list","FUND6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.chk_dietaryVal1","value","ds_list","DIET1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.chk_dietaryVal2","value","ds_list","DIET2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.chk_dietaryVal3","value","ds_list","DIET3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.chk_dietaryVal4","value","ds_list","DIET4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.cmb_managerId","value","ds_list","MANAGER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.mae_breTime","value","ds_list","BRE_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.chk_breTp1","value","ds_list","B_MEAL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.chk_breTp2","value","ds_list","B_MEAL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.chk_breTp3","value","ds_list","B_MEAL3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.chk_breTp4","value","ds_list","B_MEAL4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.chk_breTp5","value","ds_list","B_MEAL5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.chk_breTp6","value","ds_list","B_MEAL6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.rdo_breQty","value","ds_list","BRE_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.mae_lunTime","value","ds_list","LUN_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.chk_lunTp1","value","ds_list","L_MEAL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.chk_lunTp2","value","ds_list","L_MEAL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.chk_lunTp3","value","ds_list","L_MEAL3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.chk_lunTp4","value","ds_list","L_MEAL4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.chk_lunTp5","value","ds_list","L_MEAL5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.chk_lunTp6","value","ds_list","L_MEAL6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.rdo_lunQty","value","ds_list","LUN_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.mae_dinTime","value","ds_list","DIN_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.chk_dinTp1","value","ds_list","D_MEAL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.chk_dinTp2","value","ds_list","D_MEAL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.chk_dinTp3","value","ds_list","D_MEAL3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.chk_dinTp4","value","ds_list","D_MEAL4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.chk_dinTp5","value","ds_list","D_MEAL5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.chk_dinTp6","value","ds_list","D_MEAL6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.rdo_dinQty","value","ds_list","DIN_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.mae_morSnackTime","value","ds_list","MOR_SNACK_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.rdo_morSnackQty","value","ds_list","MOR_SNACK_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.mae_aftSnackTime","value","ds_list","AFT_SNACK_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.rdo_aftSnackQty","value","ds_list","AFT_SNACK_QTY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB304CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB304CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB304CT.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB304CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUB304CT
         * 화면명   	: 식사
         * 화면설명 	: 태블릿 입소자별 당일 식사 기록
         * 작성일    	: 2021-11-18
         * 작성자   	: 이승규
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     	수정일     	수정자   	내용
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
        this.fv_currentDS = "";
        this.fv_currentGrid = this.div_cont.form.grd_list;
        this.tranFlag = "";
        this.searchFlag = "";	// 검색 플래그 1 : 새벽, 2 : 주간, 3 : 야간
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.NUB304CT_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 검색조건 세팅
        	this.taSearchDataSetting(obj);

        	// 관찰자, 층, 호실 콤보 초기화
        	this.fn_setComboDs(obj);

        	this.ds_location.filter("ARE_CD == '" + this.ds_search.getColumn(0, "AREA") + "'");

        	// 로드 완료후 검색
        	this.fn_search();
        };

        // 콤보 데이터 세팅
        this.fn_setComboDs = function(obj)
        {
        	const comboDsParamArr = [
        		{ outDsName : "ds_manager", sqlId : "NUB_COMMON.NUB_COMMON_DS_MANAGER_S", param : this.ds_search, bEmptyRow : true }
        		,{ outDsName : "ds_location", sqlId : "NUB_COMMON.NUB_COMMON_DS_LOCATION_ALL_S", param : this.ds_search, bEmptyRow : true }
        		,{ outDsName : "ds_resident", sqlId : "NUB_COMMON.NUB_COMMON_DS_RESIDENT_ALL_S", param : this.ds_search, bEmptyRow : true }
        	];
        	this.gfn_setComboDs(obj, comboDsParamArr);
        };

        // 그리드 컬럼에 색입히기
        this.fn_initGrid = function(grid)
        {
        	const pMinIdx = grid.getBindCellIndex("body", "POS_MIN");
        	const pMinCss = "expr: dataset.getColumn(currow, 'POS_HOUR') < 110 ? 'blueFont' : 'orangeFont'";
        	grid.setCellProperty("body", pMinIdx, "cssclass", pMinCss);
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
        	const resident = this.ds_search.getColumn(0, "RES_ID");
        	if (resident == undefined || resident == "" || resident == null)
        	{
        		alert("입소자를 선택해 주세요");
        		return false;
        	}
        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function ()
        {
        	const resident = this.ds_search.getColumn(0, "RES_ID");
        	if (resident == undefined || resident == "" || resident == null)
        	{
        		alert("입소자를 선택해 주세요");
        		return false;
        	}
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
        	const resident = this.ds_search.getColumn(0, "RES_ID");
        	if (resident == undefined || resident == "" || resident == null)
        	{
        		alert("입소자를 선택해 주세요");
        		return false;
        	}
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
        		this.ds_list.set_updatecontrol(false);
        		this.ds_list.setRowType(nRow, Dataset.ROWTYPE_DELETE);
        		this.ds_list.set_updatecontrol(true);
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
        	const inDatasets = "input1=ds_search input2=ds_search input3=ds_search";
        	const outDatasets = "ds_list=output1 ds_meal_resident=output2 ds_resInfo=output3";
        	const argument = "method=getList "
        		+ "sqlId='NUB304CT.NUB304CT_DS_LIST_S NUB304CT.NUB304CT_DS_MEAL_RESIDENT_S NUB_COMMON.NUB_COMMON_DS_RESINFO_S' ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function ()
        {
        	if(!this.fn_save_pre()) return;

         	const svcId = "save";
         	const inDs = "ds_list";
         	this.fn_save_com(svcId, inDs);
        };

        // 삭제
        this.fn_delete = function()
        {
        	if(!this.fn_delete_pre()) return;

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_list:U";
        	const outDatasets = "";
         	const argument = "method=delete "
         				   + "sqlId=NUB304CT.NUB304CT_DS_LIST_D ";

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
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "AREA", this.ds_search.getColumn(0,"AREA"));
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "LOCATION", this.ds_search.getColumn(0,"LOCATION"));
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "RES_ID", this.ds_search.getColumn(0,"RES_ID"));

        			// 검색결과가 없을경우
        			if(this.ds_list.rowcount < 1)
        			{
        				// 초기화
        				nRow = this.ds_list.addRow();
        				this.ds_list.setColumn(nRow, "COMPANY_CD", this.ds_search.getColumn(0, "COMPANY_CD"));
        				this.ds_list.setColumn(nRow, "RES_ID", this.ds_search.getColumn(0, "RES_ID"));

        				// 식사시간
        				this.ds_list.setColumn(nRow, "BRE_TIME", this.ds_meal_resident.getColumn(0, "BRE_FR_TIME"));
        				this.ds_list.setColumn(nRow, "LUN_TIME", this.ds_meal_resident.getColumn(0, "LUN_FR_TIME"));
        				this.ds_list.setColumn(nRow, "DIN_TIME", this.ds_meal_resident.getColumn(0, "DIN_FR_TIME"));
        				this.ds_list.setColumn(nRow, "MOR_SNACK_TIME", this.ds_meal_resident.getColumn(0, "MOR_SNACK_TIME"));
        				this.ds_list.setColumn(nRow, "AFT_SNACK_TIME", this.ds_meal_resident.getColumn(0, "AFT_SNACK_TIME"));

        				// 기능장애
        				this.ds_list.setColumn(nRow, "FUND1", this.ds_meal_resident.getColumn(0, "FUNC1"));
        				this.ds_list.setColumn(nRow, "FUND2", this.ds_meal_resident.getColumn(0, "FUNC2"));
        				this.ds_list.setColumn(nRow, "FUND3", this.ds_meal_resident.getColumn(0, "FUNC3"));
        				this.ds_list.setColumn(nRow, "FUND4", this.ds_meal_resident.getColumn(0, "FUNC4"));
        				this.ds_list.setColumn(nRow, "FUND5", this.ds_meal_resident.getColumn(0, "FUNC5"));
        				this.ds_list.setColumn(nRow, "FUND6", this.ds_meal_resident.getColumn(0, "FUNC6"));

        				// 치료식이
        				this.ds_list.setColumn(nRow, "DIET1", this.ds_meal_resident.getColumn(0, "DIET1"));
        				this.ds_list.setColumn(nRow, "DIET2", this.ds_meal_resident.getColumn(0, "DIET2"));
        				this.ds_list.setColumn(nRow, "DIET3", this.ds_meal_resident.getColumn(0, "DIET3"));
        				this.ds_list.setColumn(nRow, "DIET4", this.ds_meal_resident.getColumn(0, "DIET4"));

        				// 아침식사
        				this.ds_list.setColumn(nRow, "B_MEAL1", this.ds_meal_resident.getColumn(0, "FOOD1"));
        				this.ds_list.setColumn(nRow, "B_MEAL2", this.ds_meal_resident.getColumn(0, "FOOD2"));
        				this.ds_list.setColumn(nRow, "B_MEAL3", this.ds_meal_resident.getColumn(0, "FOOD3"));
        				this.ds_list.setColumn(nRow, "B_MEAL4", this.ds_meal_resident.getColumn(0, "FOOD4"));
        				this.ds_list.setColumn(nRow, "B_MEAL5", this.ds_meal_resident.getColumn(0, "FOOD5"));
        				this.ds_list.setColumn(nRow, "B_MEAL6", this.ds_meal_resident.getColumn(0, "FOOD6"));

        				// 점심식사
        				this.ds_list.setColumn(nRow, "L_MEAL1", this.ds_meal_resident.getColumn(0, "FOOD1"));
        				this.ds_list.setColumn(nRow, "L_MEAL2", this.ds_meal_resident.getColumn(0, "FOOD2"));
        				this.ds_list.setColumn(nRow, "L_MEAL3", this.ds_meal_resident.getColumn(0, "FOOD3"));
        				this.ds_list.setColumn(nRow, "L_MEAL4", this.ds_meal_resident.getColumn(0, "FOOD4"));
        				this.ds_list.setColumn(nRow, "L_MEAL5", this.ds_meal_resident.getColumn(0, "FOOD5"));
        				this.ds_list.setColumn(nRow, "L_MEAL6", this.ds_meal_resident.getColumn(0, "FOOD6"));

        				// 저녁식사
        				this.ds_list.setColumn(nRow, "D_MEAL1", this.ds_meal_resident.getColumn(0, "FOOD1"));
        				this.ds_list.setColumn(nRow, "D_MEAL2", this.ds_meal_resident.getColumn(0, "FOOD2"));
        				this.ds_list.setColumn(nRow, "D_MEAL3", this.ds_meal_resident.getColumn(0, "FOOD3"));
        				this.ds_list.setColumn(nRow, "D_MEAL4", this.ds_meal_resident.getColumn(0, "FOOD4"));
        				this.ds_list.setColumn(nRow, "D_MEAL5", this.ds_meal_resident.getColumn(0, "FOOD5"));
        				this.ds_list.setColumn(nRow, "D_MEAL6", this.ds_meal_resident.getColumn(0, "FOOD6"));

        				// 처리자에 접속자 세팅
        				this.ds_list.setColumn(nRow, "MANAGER_ID", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID"));
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
         * Component Event Functions
         ***********************************************************************/

        // TIMEPICKER
        this.msk_oneditclick = function(obj,e)
        {
        	let param;
        	this.makeStandardObject();

        	// 식사 아침식사 시간 timepicker
        	if(obj.id == "mae_breTime")
        	{
        		param = {arg1 : "3"};
        	}
        	// 식사 점심식사 시간 timepicker
        	else if(obj.id == "mae_lunTime")
        	{
        		param = {arg1 : "4"};
        	}
        	// 식사 저녁식사 시간 timepicker
        	else if(obj.id == "mae_dinTime")
        	{
        		param = {arg1 : "5"};
        	}
        	// 식사 오전간식 시간 timepicker
        	else if(obj.id == "mae_morSnackTime")
        	{
        		param = {arg1 : "6"};
        	}
        	// 식사 오후간식 시간 timepicker
        	else if(obj.id == "mae_aftSnackTime")
        	{
        		param = {arg1 : "7"};
        	}
        	this.standardPlugin.callMethod("TIMEPICKER", param);
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	const nowRow = this.ds_list.rowposition;
        	const cRow = parseInt(this.ds_list.getColumn(nowRow, "ROW"));
        	const iRow = this.ds_list.findRow("ROW", cRow);
        	switch(popid)
        	{
        		case "pop2" : // 입소자
        // 			this.ds_search.setColumn(0, "RES_ID", objDs.getColumn(0, "RES_ID"));
        // 			this.ds_search.setColumn(0, "AREA", objDs.getColumn(0, "AREA"));
        // 			this.ds_search.setColumn(0, "LOCATION", objDs.getColumn(0, "LOCATION"));
        			this.ds_location.filter("ARE_CD == '"+objDs.getColumn(0, "AREA")+"'");
        			this.ds_resident.filter("");
        			this.div_search.form.cmb_area.set_value(objDs.getColumn(0, "AREA"));
        			this.div_search.form.cmb_location.set_value(objDs.getColumn(0, "LOCATION"));
        			this.div_search.form.cmb_resident.set_value(objDs.getColumn(0, "RES_ID"));
        			this.fn_search();
        			break;
        		case "pop4" : // 처리자
        			this.ds_list.setColumn(0, "MANAGER_ID", objDs.getColumn(0, "USER_ID"));
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };

        // 입소자 조회 팝업
        this.div_search_cmb_resident_oneditclick = function(obj,e)
        {
        	const param = {
        			COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")
        		,	FLAG : "NUB304CT"
        		,   AREA : this.ds_search.getColumn(0, "AREA")
        		,   LOCATION : this.ds_search.getColumn(0, "LOCATION")
        		,	DATE : this.ds_search.getColumn(0, "DATE")
        	};

        	Sct.tPopup(this, "pop2", 350, 350, param, "TabletPOP::NUB_RESIDENT_POP.xfdl", "fn_popCallback");
        };

        // 처리자 선택
        this.cmb_manager_oneditclick = function(obj,e)
        {
        	const param = {COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")};

        	Sct.tPopup(this, "pop4", 350, 350, param, "TabletPOP::NUB_MANAGER_POP.xfdl", "fn_popCallback");
        };

        // standardObject 안드로이드 네이티브 통신 callback
        this.on_standardPlugin_callback = function(obj, e)
        {
        	trace("this.on_callback ::: " + e.svcid);
        	trace("this.on_callback ::: " + e.reason);
        	trace("this.on_callback ::: " + e.returnvalue);

        	// 식사 오전식사 시간 timepicker
        	if(e.svcid == "TIMEPICKER3")
        	{
        		if(e.reason == 0)
        		{
        			this.div_cont.form.mae_breTime.set_value(e.returnvalue);
        		}
        	}
        	// 식사 점심식사 시간 timepicker
        	else if(e.svcid == "TIMEPICKER4")
        	{
        		if(e.reason == 0)
        		{
        			this.div_cont.form.mae_lunTime.set_value(e.returnvalue);
        		}
        	}
        	// 식사 저녁식사 시간 timepicker
        	else if(e.svcid == "TIMEPICKER5")
        	{
        		if(e.reason == 0)
        		{
        			this.div_cont.form.mae_dinTime.set_value(e.returnvalue);
        		}
        	}
        	// 식사 오전간식 시간 timepicker
        	else if(e.svcid == "TIMEPICKER6")
        	{
        		if(e.reason == 0)
        		{
        			this.div_cont.form.mae_morSnackTime.set_value(e.returnvalue);
        		}
        	}
        	// 식사 오전식사 시간 timepicker
        	else if(e.svcid == "TIMEPICKER7")
        	{
        		if(e.reason == 0)
        		{
        			this.div_cont.form.mae_aftSnackTime.set_value(e.returnvalue);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("onclick",this.formClick,this);
            this.addEventHandler("onload",this.NUB304CT_onload,this);
            this.div_search.addEventHandler("onclick",this.formClick,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.cmb_area_onitemchanged2,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_location_onitemchanged2,this);
            this.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.btn_tDelete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_search.form.btn_tSave.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_search.form.cmb_resident.addEventHandler("oneditclick",this.div_search_cmb_resident_oneditclick,this);
            this.div_search.form.btn_tReset.addEventHandler("onclick",this.fn_resetBtn,this);
            this.div_cont.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_fundDisB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_fundDisH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_dietaryCureB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_dietaryCureH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_managerIdB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_managerIdH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.cmb_managerId.addEventHandler("oneditclick",this.cmb_manager_oneditclick,this);
            this.div_cont.form.sta_division.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_timeH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_tpH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_qtyH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_breB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_breH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_lunB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_lunH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_dinB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_dinH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_morSnackB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_morSnackH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_aftSnackB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_aftSnackH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.mae_breTime.addEventHandler("oneditclick",this.msk_oneditclick,this);
            this.div_cont.form.mae_lunTime.addEventHandler("oneditclick",this.msk_oneditclick,this);
            this.div_cont.form.mae_dinTime.addEventHandler("oneditclick",this.msk_oneditclick,this);
            this.div_cont.form.mae_morSnackTime.addEventHandler("oneditclick",this.msk_oneditclick,this);
            this.div_cont.form.mae_aftSnackTime.addEventHandler("oneditclick",this.msk_oneditclick,this);
            this.div_cont.form.rdo_breQty.addEventHandler("onitemchanged",this.Tab00_Tabpage2_div_cont_Radio00_onitemchanged,this);
            this.div_cont.form.rdo_lunQty.addEventHandler("onitemchanged",this.Tab00_Tabpage2_div_cont_Radio00_onitemchanged,this);
            this.div_cont.form.rdo_dinQty.addEventHandler("onitemchanged",this.Tab00_Tabpage2_div_cont_Radio00_onitemchanged,this);
            this.div_cont.form.rdo_morSnackQty.addEventHandler("onitemchanged",this.Tab00_Tabpage2_div_cont_Radio00_onitemchanged,this);
            this.div_cont.form.rdo_aftSnackQty.addEventHandler("onitemchanged",this.Tab00_Tabpage2_div_cont_Radio00_onitemchanged,this);
        };
        this.loadIncludeScript("NUB304CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
