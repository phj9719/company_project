(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUC101QR");
            this.set_titletext("생활현황");
            this.set_scrollindicatorsize("5");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,606);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_meal", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MEA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRE_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LUN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MOR_SNACK_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_SNACK_QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_composition", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"SMM\" type=\"STRING\" size=\"256\"/><Column id=\"BFM\" type=\"STRING\" size=\"256\"/><Column id=\"PBF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bomi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT_ID_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_LVL_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cist", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CIS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PT7_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CIS_GRADE_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sgds", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SGD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_resident","5.00%","1.65%",null,"14.03%","5.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("#dee7f6");
            obj.set_borderRadius("6px");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv_resident","6.02%","18%","60","60",null,null,null,null,null,null,this.div_resident.form);
            obj.set_taborder("0");
            obj.set_borderRadius("50px");
            obj.set_border("1px solid transparent");
            obj.set_stretch("fit");
            this.div_resident.addChild(obj.name, obj);

            obj = new Static("sta_resident","29%","17%","89","31.76%",null,null,null,null,null,null,this.div_resident.form);
            obj.set_taborder("1");
            obj.set_text("홍길동");
            obj.set_color("#6a8ed3");
            obj.set_verticalAlign("bottom");
            obj.set_letterSpacing("-1px");
            obj.set_font("normal 700 17pt/normal \"Noto Sans KR \"");
            this.div_resident.addChild(obj.name, obj);

            obj = new Static("Static01","sta_resident:0","18%","5.79%","30.59%",null,null,null,null,null,null,this.div_resident.form);
            obj.set_taborder("2");
            obj.set_text("님");
            obj.set_color("#999999");
            obj.set_verticalAlign("bottom");
            obj.set_textAlign("right");
            obj.set_font("normal 500 16pt/normal \"Noto Sans KR \"");
            this.div_resident.addChild(obj.name, obj);

            obj = new Calendar("cal_date","29%","50%","41.67%","30.59%",null,null,null,null,null,null,this.div_resident.form);
            obj.set_initvalueid("iv_cal_yyyyMMddddd");
            obj.set_taborder("3");
            obj.set_usesoftkeyboard("false");
            obj.set_dateformat("yyyy.MM.dd (ddd)");
            obj.set_buttonsize("0 0");
            obj.set_readonly("true");
            this.div_resident.addChild(obj.name, obj);

            obj = new Static("sta_roboTitle","5.00%","42.9%",null,"4.95%","5.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("로봇인지훈련");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("sta_remark","5.00%","15.68%",null,"3.3%","5.00%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("각 항목 클릭 시 상세내역을 보실 수 있습니다.");
            obj.set_letterSpacing("-1px");
            obj.set_fittocontents("both");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_meal_title","5%","20.3%","21.46%","4.95%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("식사");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Div("div_meal","5.00%","25.74%",null,"16.5%","5.00%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#88dc95");
            obj.set_borderRadius("6px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mealToday","2.78%","6.5%",null,"20.2%","2.78%",null,null,null,null,null,this.div_meal.form);
            obj.set_taborder("0");
            obj.set_text("오늘식사현황");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            this.div_meal.addChild(obj.name, obj);

            obj = new Div("div_mealLine","2.78%","33.33%",null,"1.01%","2.78%",null,null,null,null,null,this.div_meal.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.div_meal.addChild(obj.name, obj);

            obj = new Static("sta_breH","2.78%","42.42%","15.97%","25.25%",null,null,null,null,null,null,this.div_meal.form);
            obj.set_taborder("2");
            obj.set_text("아침식사");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.div_meal.addChild(obj.name, obj);

            obj = new Static("sta_lunH","21.53%","42.42%","15.97%","25.25%",null,null,null,null,null,null,this.div_meal.form);
            obj.set_taborder("3");
            obj.set_text("점심식사");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.div_meal.addChild(obj.name, obj);

            obj = new Static("sta_dinH","41.44%","42.42%","15.97%","25.25%",null,null,null,null,null,null,this.div_meal.form);
            obj.set_taborder("4");
            obj.set_text("저녁식사");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.div_meal.addChild(obj.name, obj);

            obj = new Static("sta_morSnackH","61.81%","42.42%","15.97%","25.25%",null,null,null,null,null,null,this.div_meal.form);
            obj.set_taborder("5");
            obj.set_text("오전간식");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            this.div_meal.addChild(obj.name, obj);

            obj = new Static("sta_aftSnackH",null,"42.42%","15.97%","25.25%","2.78%",null,null,null,null,null,this.div_meal.form);
            obj.set_taborder("6");
            obj.set_text("오후간식");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.div_meal.addChild(obj.name, obj);

            obj = new Static("sta_breVal","2.78%","68.69%","15.97%","25.25%",null,null,null,null,null,null,this.div_meal.form);
            obj.set_taborder("7");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#3e8f2b");
            obj.set_textAlign("center");
            obj.set_text("-");
            this.div_meal.addChild(obj.name, obj);

            obj = new Static("sta_lunVal","21.3%","68.69%","15.97%","25.25%",null,null,null,null,null,null,this.div_meal.form);
            obj.set_taborder("8");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#3e8f2b");
            obj.set_textAlign("center");
            obj.set_text("-");
            this.div_meal.addChild(obj.name, obj);

            obj = new Static("sta_dinVal","40.51%","68.69%","15.97%","25.25%",null,null,null,null,null,null,this.div_meal.form);
            obj.set_taborder("9");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#3e8f2b");
            obj.set_textAlign("center");
            obj.set_text("-");
            this.div_meal.addChild(obj.name, obj);

            obj = new Static("sta_morSnackVal","60.88%","68.69%","15.97%","25.25%",null,null,null,null,null,null,this.div_meal.form);
            obj.set_taborder("10");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#3e8f2b");
            obj.set_textAlign("center");
            obj.set_text("-");
            this.div_meal.addChild(obj.name, obj);

            obj = new Static("sta_aftSnackVal",null,"68.69%","15.97%","25.25%","2.78%",null,null,null,null,null,this.div_meal.form);
            obj.set_taborder("11");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_color("#3e8f2b");
            obj.set_textAlign("center");
            obj.set_text("-");
            this.div_meal.addChild(obj.name, obj);

            obj = new Static("sta_compositionTitle","5%","75.25%","21.46%","4.95%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("체성분");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("sta_comDt",null,"76%","66.67%","4%","5.00%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("최근 측정일 : ");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Div("div_smm","5.00%","80.69%","16.25%",null,null,"3.14%",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div03");
            obj.set_borderRadius("6px");
            obj.set_edge("url(\'theme://images/bg_diary_bc1.png\') 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_smmTitle","0%","10.1%","100%","24%",null,null,null,null,null,null,this.div_smm.form);
            obj.set_taborder("0");
            obj.set_text("골격근량");
            obj.set_font("normal 700 14pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            obj.set_color("#fcecf2");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-0.5px");
            this.div_smm.addChild(obj.name, obj);

            obj = new Static("sta_smmVal","0.00%","39.39%","100.00%","29.29%",null,null,null,null,null,null,this.div_smm.form);
            obj.set_taborder("1");
            obj.set_text("VAL");
            obj.set_textAlign("center");
            obj.set_font("normal 700 20pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.div_smm.addChild(obj.name, obj);

            obj = new Static("sta_unit","0%","65%","100.00%","25%",null,null,null,null,null,null,this.div_smm.form);
            obj.set_taborder("2");
            obj.set_text("㎏");
            obj.set_textAlign("center");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.div_smm.addChild(obj.name, obj);

            obj = new Div("div_weight","23.13%","80.69%","16.25%",null,null,"3.14%",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div03");
            obj.set_borderRadius("6px");
            obj.set_edge("url(\'theme://images/bg_diary_bc2.png\') 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_weightTitle","0%","9.9%","100%","24%",null,null,null,null,null,null,this.div_weight.form);
            obj.set_taborder("0");
            obj.set_text("체중");
            obj.set_font("normal 700 14pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            obj.set_color("#ffe9e2");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-0.5px");
            this.div_weight.addChild(obj.name, obj);

            obj = new Static("sta_weightVal","0.00%","39.39%","100.00%","29.29%",null,null,null,null,null,null,this.div_weight.form);
            obj.set_taborder("1");
            obj.set_text("VAL");
            obj.set_textAlign("center");
            obj.set_font("normal 700 20pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.div_weight.addChild(obj.name, obj);

            obj = new Static("sta_unit","0%","65%","100.00%","25%",null,null,null,null,null,null,this.div_weight.form);
            obj.set_taborder("2");
            obj.set_text("㎏");
            obj.set_textAlign("center");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.div_weight.addChild(obj.name, obj);

            obj = new Div("div_height","41.67%","80.69%","16.25%",null,null,"3.14%",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div03");
            obj.set_borderRadius("6px");
            obj.set_edge("url(\'theme://images/bg_diary_bc3.png\') 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_heightTitle","0%","10%","100%","24%",null,null,null,null,null,null,this.div_height.form);
            obj.set_taborder("0");
            obj.set_text("신장");
            obj.set_font("normal 700 14pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            obj.set_color("#fff2d6");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-0.5px");
            this.div_height.addChild(obj.name, obj);

            obj = new Static("sta_heightVal","0.00%","39.39%","100.00%","29.29%",null,null,null,null,null,null,this.div_height.form);
            obj.set_taborder("1");
            obj.set_text("VAL");
            obj.set_textAlign("center");
            obj.set_font("normal 700 20pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.div_height.addChild(obj.name, obj);

            obj = new Static("sta_unit","0%","65%","100.00%","25%",null,null,null,null,null,null,this.div_height.form);
            obj.set_taborder("2");
            obj.set_text("㎝");
            obj.set_textAlign("center");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.div_height.addChild(obj.name, obj);

            obj = new Div("div_bfm","60.00%","80.69%","16.25%",null,null,"3.14%",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div03");
            obj.set_borderRadius("6px");
            obj.set_edge("url(\'theme://images/bg_diary_bc4.png\') 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bfmTitle","0%","10%","100%","24%",null,null,null,null,null,null,this.div_bfm.form);
            obj.set_taborder("0");
            obj.set_text("체지방량");
            obj.set_font("normal 700 14pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            obj.set_color("#dff2f5");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-0.5px");
            this.div_bfm.addChild(obj.name, obj);

            obj = new Static("sta_bfmVal","0.00%","39.39%","100.00%","29.29%",null,null,null,null,null,null,this.div_bfm.form);
            obj.set_taborder("1");
            obj.set_text("VAL");
            obj.set_textAlign("center");
            obj.set_font("normal 700 20pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.div_bfm.addChild(obj.name, obj);

            obj = new Static("sta_unit","0%","65%","100.00%","25%",null,null,null,null,null,null,this.div_bfm.form);
            obj.set_taborder("2");
            obj.set_text("㎏");
            obj.set_textAlign("center");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.div_bfm.addChild(obj.name, obj);

            obj = new Div("div_pbf","78.13%","80.69%",null,null,"5.00%","3.14%",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div03");
            obj.set_borderRadius("6px");
            obj.set_edge("url(\'theme://images/bg_diary_bc5.png\') 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pbfTitle","0%","10%","100%","24%",null,null,null,null,null,null,this.div_pbf.form);
            obj.set_taborder("0");
            obj.set_text("체지방률");
            obj.set_font("normal 700 14pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
            obj.set_color("#e7e1ff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-0.5px");
            this.div_pbf.addChild(obj.name, obj);

            obj = new Static("sta_pbfVal","0.00%","39.39%","100.00%","29.29%",null,null,null,null,null,null,this.div_pbf.form);
            obj.set_taborder("1");
            obj.set_text("VAL");
            obj.set_textAlign("center");
            obj.set_font("normal 700 20pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.div_pbf.addChild(obj.name, obj);

            obj = new Static("sta_unit","0%","65%","100.00%","25%",null,null,null,null,null,null,this.div_pbf.form);
            obj.set_taborder("2");
            obj.set_text("％");
            obj.set_textAlign("center");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.div_pbf.addChild(obj.name, obj);

            obj = new Div("div_robo","5.00%","48.35%",null,"26.4%","5.00%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Div01");
            obj.set_background("#6a8ed3");
            obj.set_borderRadius("6px");
            obj.set_formscrolltype("both");
            obj.set_formscrollindicatorsize("0");
            obj.set_formscrollbartype("autoindicator");
            this.addChild(obj.name, obj);

            obj = new Div("div_bomi","1.85%","5.03%","27.78%","87.42%",null,null,null,null,null,null,this.div_robo.form);
            obj.set_taborder("1");
            obj.set_background("#6a8ed3");
            this.div_robo.addChild(obj.name, obj);

            obj = new Static("sta_bomiTitle","7.5%","3.6%","83.33%","14.39%",null,null,null,null,null,null,this.div_robo.form.div_bomi.form);
            obj.set_taborder("0");
            obj.set_text("훈련점수");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            this.div_robo.form.div_bomi.addChild(obj.name, obj);

            obj = new Static("sta_contVal","7.5%","32.61%","83.33%","14.49%",null,null,null,null,null,null,this.div_robo.form.div_bomi.form);
            obj.set_taborder("1");
            obj.set_text("프로그램");
            obj.set_color("#ffffff");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            obj.set_letterSpacing("-0.5px");
            obj.set_textAlign("center");
            this.div_robo.form.div_bomi.addChild(obj.name, obj);

            obj = new Static("sta_bomiPtVal","7.5%","47.1%","83.33%","14.49%",null,null,null,null,null,null,this.div_robo.form.div_bomi.form);
            obj.set_taborder("2");
            obj.set_text("점");
            obj.set_color("#ffffff");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            obj.set_letterSpacing("-0.5px");
            obj.set_textAlign("center");
            this.div_robo.form.div_bomi.addChild(obj.name, obj);

            obj = new Static("sta_bomDt","7.5%","82.61%","83.33%","14.49%",null,null,null,null,null,null,this.div_robo.form.div_bomi.form);
            obj.set_taborder("3");
            obj.set_text("일자");
            obj.set_color("#ffffff");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            obj.set_letterSpacing("-0.5px");
            obj.set_textAlign("center");
            this.div_robo.form.div_bomi.addChild(obj.name, obj);

            obj = new Div("div_cist","35.42%","5.03%","27.78%","87.42%",null,null,null,null,null,null,this.div_robo.form);
            obj.set_taborder("2");
            obj.set_background("#6a8ed3");
            this.div_robo.addChild(obj.name, obj);

            obj = new Static("sta_cistTitle","7.5%","3.6%","83.33%","14.39%",null,null,null,null,null,null,this.div_robo.form.div_cist.form);
            obj.set_taborder("0");
            obj.set_text("CIST 검사");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            this.div_robo.form.div_cist.addChild(obj.name, obj);

            obj = new Static("sta_cistPtVal7","7.5%","32.37%","83.33%","14.39%",null,null,null,null,null,null,this.div_robo.form.div_cist.form);
            obj.set_taborder("1");
            obj.set_text("점");
            obj.set_color("#ffffff");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            obj.set_letterSpacing("-0.5px");
            obj.set_textAlign("center");
            this.div_robo.form.div_cist.addChild(obj.name, obj);

            obj = new Static("sta_cistGradeVal","7.5%","46.76%","83.33%","14.39%",null,null,null,null,null,null,this.div_robo.form.div_cist.form);
            obj.set_taborder("2");
            obj.set_text("판정");
            obj.set_color("#ffffff");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            obj.set_letterSpacing("-0.5px");
            obj.set_textAlign("center");
            this.div_robo.form.div_cist.addChild(obj.name, obj);

            obj = new Static("sta_cistDt","7.5%","82.01%","83.33%","14.39%",null,null,null,null,null,null,this.div_robo.form.div_cist.form);
            obj.set_taborder("3");
            obj.set_text("일자");
            obj.set_color("#ffffff");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            obj.set_letterSpacing("-0.5px");
            obj.set_textAlign("center");
            this.div_robo.form.div_cist.addChild(obj.name, obj);

            obj = new Div("div_line00","66.9%","6.29%","1",null,null,"6.29%",null,null,null,null,this.div_robo.form);
            obj.set_taborder("3");
            this.div_robo.addChild(obj.name, obj);

            obj = new Div("div_sgds","69.91%","5.03%","27.78%","87.42%",null,null,null,null,null,null,this.div_robo.form);
            obj.set_taborder("4");
            obj.set_background("#6a8ed3");
            this.div_robo.addChild(obj.name, obj);

            obj = new Static("sta_sgdsTitle","7.5%","3.6%","83.33%","14.39%",null,null,null,null,null,null,this.div_robo.form.div_sgds.form);
            obj.set_taborder("0");
            obj.set_text("우울검사");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            this.div_robo.form.div_sgds.addChild(obj.name, obj);

            obj = new Static("sta_sgdsPtVal","7.5%","39.57%","83.33%","14.39%",null,null,null,null,null,null,this.div_robo.form.div_sgds.form);
            obj.set_taborder("1");
            obj.set_text("점");
            obj.set_color("#ffffff");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            obj.set_letterSpacing("-0.5px");
            obj.set_textAlign("center");
            this.div_robo.form.div_sgds.addChild(obj.name, obj);

            obj = new Static("sta_sgdDt","7.5%","82.61%","83.33%","14.49%",null,null,null,null,null,null,this.div_robo.form.div_sgds.form);
            obj.set_taborder("2");
            obj.set_text("일자");
            obj.set_color("#ffffff");
            obj.set_font("normal 500 13pt/normal \"Noto Sans KR\"");
            obj.set_letterSpacing("-0.5px");
            obj.set_textAlign("center");
            this.div_robo.form.div_sgds.addChild(obj.name, obj);

            obj = new Div("div_line","32.18%","6.29%","1",null,null,"6.29%",null,null,null,null,this.div_robo.form);
            obj.set_taborder("0");
            this.div_robo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,606,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_meal.form.sta_breVal","text","ds_meal","BRE_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_meal.form.sta_lunVal","text","ds_meal","LUN_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_meal.form.sta_dinVal","text","ds_meal","DIN_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_meal.form.sta_morSnackVal","text","ds_meal","MOR_SNACK_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_meal.form.sta_aftSnackVal","text","ds_meal","AFT_SNACK_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_smm.form.sta_smmVal","text","ds_composition","SMM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_weight.form.sta_weightVal","text","ds_composition","WEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_height.form.sta_heightVal","text","ds_composition","HEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_bfm.form.sta_bfmVal","text","ds_composition","BFM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_pbf.form.sta_pbfVal","text","ds_composition","PBF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_robo.form.div_bomi.form.sta_contVal","text","ds_bomi","CONTENT_ID_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_robo.form.div_bomi.form.sta_bomiPtVal","text","ds_bomi","SCORE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_robo.form.div_bomi.form.sta_bomDt","text","ds_bomi","BOM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_robo.form.div_cist.form.sta_cistPtVal7","text","ds_cist","PT7_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_robo.form.div_cist.form.sta_cistGradeVal","text","ds_cist","CIS_GRADE_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_robo.form.div_cist.form.sta_cistDt","text","ds_cist","CIS_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_robo.form.div_sgds.form.sta_sgdsPtVal","text","ds_sgds","PT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_robo.form.div_sgds.form.sta_sgdDt","text","ds_sgds","SGD_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUC101QR.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUC101QR.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUC101QR.xfdl","lib::mpgm_com.xjs");
        this.registerScript("NUC101QR.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUC101QR
         * 화면명   	: 생활현황
         * 화면설명 	: 모바일에서 입소자의 생활현황을 조회하는 화면
         * 작성일    	: 2021-09-08
         * 작성자   	: 조기종
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
        this.executeIncludeScript("lib::mpgm_com.xjs"); /*include "lib::mpgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = "";
        this.fv_currentGrid = "";
        this.nMoveY;
        this.fv_flag;
        // 서비스 단에서 받는 variable, 초기화 필요함
        this.outvar = "";
        this.fileGroupId = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.NUC101QR_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e);

        	const today = Sct.Util.getToday();
        	const resName = nexacro.getApplication().gds_mUserInfo.getColumn(0, "RES_NAME");
        	const resNameSize = nexacro.getTextSize(resName, "normal 700 19pt/normal 'Noto Sans KR'");

        	this.div_resident.form.cal_date.set_value(today);
        	this.div_resident.form.sta_resident.set_text(resName);
        	this.div_resident.form.sta_resident.set_width(resNameSize.nx);
        	this.div_resident.form.Static01.set_left("sta_resident:0px");

        	this.fn_getSignImage();

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "COMPANY_CD", nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD"));
        	this.ds_search.setColumn(0, "RES_ID", nexacro.getApplication().gds_mUserInfo.getColumn(0, "RES_ID"));
        	this.ds_search.setColumn(0, "DATE", today);

        	this.fn_search();
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
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
        	var inDatasets = "input1=ds_search input2=ds_search input3=ds_search input4=ds_search input5=ds_search";
        	var outDatasets = "ds_meal=output1 ds_composition=output2 ds_bomi=output3 ds_cist=output4 ds_sgds=output5";
        	var argument = "method=getList "
        		+ "sqlId='NUC101QR.NUC101QR_DS_MEAL_S NUC101QR.NUC101QR_DS_COMPOSITION_S NUC101QR.NUC101QR_DS_BOMI_S NUC101QR.NUC101QR_DS_CIST_S NUC101QR.NUC101QR_DS_SGDS_S' ";

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
        			if(this.ds_meal.rowcount < 1)
        			{
        				this.div_meal.form.sta_breVal.set_text('X');
        				this.div_meal.form.sta_lunVal.set_text('X');
        				this.div_meal.form.sta_dinVal.set_text('X');
        				this.div_meal.form.sta_morSnackVal.set_text('X');
        				this.div_meal.form.sta_aftSnackVal.set_text('X');
        			}

        			if(this.ds_composition.rowcount < 1)
        			{
        				this.sta_comDt.set_text("최근 측정일 : 없음");
        			}
        			else
        			{
        				const comDt = this.ds_composition.getColumn(0, "COM_DT");
        				const day = Sct.Util.getDayH(comDt, false);
        				const comDate = comDt.substr(0, 4) + "." + comDt.substr(4, 2) + "." + comDt.substr(6, 2) + "(" + day + ")";
        				this.sta_comDt.set_text("최근 측정일 : " + comDate);
        			}

        			if(this.ds_bomi.rowcount < 1)
        			{
        				this.div_robo.form.sta_bomDt.set_text("측정 정보 없음");
        				this.div_robo.form.sta_contVal.set_text("-");
        				this.div_robo.form.sta_lvlVal.set_text("-");
        				this.div_robo.form.sta_bomiPtVal.set_text("-");
        			}

        			if(this.ds_cist.rowcount < 1)
        			{
        				this.div_robo.form.sta_cistDt.set_text("측정 정보 없음");
        				this.div_robo.form.sta_cistPtVal7.set_text("-");
        				this.div_robo.form.sta_cistGradeVal.set_text("-");
        			}
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
         * Component Event Functions
         ***********************************************************************/
        // 로봇인지훈련
        this.bomi_go = function()
        {
        	const id = "NUC104QR";
        	const url = "MobileFrame::NUC104QR.xfdl";
        	const title = "로봇인지훈련";

        	this.mMenuOpen(id, url, title);
        };

        // CIST 검사
        this.cist_go = function()
        {
        	const id = "NUC105QR";
        	const url = "MobileFrame::NUC105QR.xfdl";
        	const title = "CIST 검사";

        	this.mMenuOpen(id, url, title);
        };

        // 우울 검사
        this.sgds_go = function()
        {
        	const id = "NUC106QR";
        	const url = "MobileFrame::NUC106QR.xfdl";
        	const title = "우울검사";

        	this.mMenuOpen(id, url, title);
        };

        // 식사
        this.meal_go = function()
        {
        	const id = "NUC102QR";
        	const url = "MobileFrame::NUC102QR.xfdl";
        	const title = "식사";

        	this.mMenuOpen(id, url, title);
        };

        // 체성분
        this.weight_go = function()
        {
        	const id = "NUC103QR";
        	const url = "MobileFrame::NUC103QR.xfdl";
        	const title = "체성분";

        	this.mMenuOpen(id, url, title);
        };

        /***********************************************************************
         * FILE
         ***********************************************************************/
        //이미지 조회
        this.fn_getSignImage = function ()
        {
        	let imgUrl = "";
        	const fileGrp = nexacro.getApplication().gds_mUserInfo.getColumn(0, "FILE_REAL_NAME");
        	if(!Sct.Util.isEmpty(fileGrp))
        	{
        		const webHost = nexacro.getEnvironment().services["svcurl"].url;
        		const path = "/Argos/FILES";
        		imgUrl = webHost + path + fileGrp;
        		const chk = this.fileCheck(imgUrl);
        		if(chk == "404")
        		{
        			this.div_resident.form.imv_resident.set_image("theme://images/imv_profile_e.png");
        			this.div_resident.form.imv_resident.set_stretch("fit");
        		}
        		else
        		{
        			this.div_resident.form.imv_resident.set_image("URL('" + imgUrl + "')");
        			this.div_resident.form.imv_resident.set_stretch("fit");
        		}
        	}
        	else
        	{
        		this.div_resident.form.imv_resident.set_image("theme://images/imv_profile_e.png");
        		this.div_resident.form.imv_resident.set_stretch("fit");
        	}
        };

        // 파일 존재 유무 체크
        // 파일이 존재하지 않으면 404를 리턴함
        this.fileCheck = function(val)
        {
        	let req = new XMLHttpRequest();
        	req.open('GET', val, false);
        	req.send(null);
        	let headers = req.status;
        	return headers;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("onload",this.NUC101QR_onload,this);
            this.div_meal.addEventHandler("onclick",this.meal_go,this);
            this.div_meal.form.sta_mealToday.addEventHandler("onclick",this.meal_go,this);
            this.div_meal.form.div_mealLine.addEventHandler("onclick",this.meal_go,this);
            this.div_meal.form.sta_breH.addEventHandler("onclick",this.meal_go,this);
            this.div_meal.form.sta_lunH.addEventHandler("onclick",this.meal_go,this);
            this.div_meal.form.sta_dinH.addEventHandler("onclick",this.meal_go,this);
            this.div_meal.form.sta_morSnackH.addEventHandler("onclick",this.meal_go,this);
            this.div_meal.form.sta_aftSnackH.addEventHandler("onclick",this.meal_go,this);
            this.div_meal.form.sta_breVal.addEventHandler("onclick",this.meal_go,this);
            this.div_meal.form.sta_lunVal.addEventHandler("onclick",this.meal_go,this);
            this.div_meal.form.sta_dinVal.addEventHandler("onclick",this.meal_go,this);
            this.div_meal.form.sta_morSnackVal.addEventHandler("onclick",this.meal_go,this);
            this.div_meal.form.sta_aftSnackVal.addEventHandler("onclick",this.meal_go,this);
            this.sta_compositionTitle.addEventHandler("onclick",this.weight_go,this);
            this.div_smm.addEventHandler("onclick",this.weight_go,this);
            this.div_smm.form.sta_smmTitle.addEventHandler("onclick",this.weight_go,this);
            this.div_smm.form.sta_smmVal.addEventHandler("onclick",this.weight_go,this);
            this.div_smm.form.sta_unit.addEventHandler("onclick",this.weight_go,this);
            this.div_weight.addEventHandler("onclick",this.weight_go,this);
            this.div_weight.form.sta_weightTitle.addEventHandler("onclick",this.weight_go,this);
            this.div_weight.form.sta_weightVal.addEventHandler("onclick",this.weight_go,this);
            this.div_weight.form.sta_unit.addEventHandler("onclick",this.weight_go,this);
            this.div_height.addEventHandler("onclick",this.weight_go,this);
            this.div_height.form.sta_heightTitle.addEventHandler("onclick",this.weight_go,this);
            this.div_height.form.sta_heightVal.addEventHandler("onclick",this.weight_go,this);
            this.div_height.form.sta_unit.addEventHandler("onclick",this.weight_go,this);
            this.div_bfm.addEventHandler("onclick",this.weight_go,this);
            this.div_bfm.form.sta_bfmTitle.addEventHandler("onclick",this.weight_go,this);
            this.div_bfm.form.sta_bfmVal.addEventHandler("onclick",this.weight_go,this);
            this.div_bfm.form.sta_unit.addEventHandler("onclick",this.weight_go,this);
            this.div_pbf.addEventHandler("onclick",this.weight_go,this);
            this.div_pbf.form.sta_pbfTitle.addEventHandler("onclick",this.weight_go,this);
            this.div_pbf.form.sta_pbfVal.addEventHandler("onclick",this.weight_go,this);
            this.div_pbf.form.sta_unit.addEventHandler("onclick",this.weight_go,this);
            this.div_robo.form.div_bomi.addEventHandler("onclick",this.bomi_go,this);
            this.div_robo.form.div_bomi.form.sta_bomiTitle.addEventHandler("onclick",this.bomi_go,this);
            this.div_robo.form.div_bomi.form.sta_contVal.addEventHandler("onclick",this.bomi_go,this);
            this.div_robo.form.div_bomi.form.sta_bomiPtVal.addEventHandler("onclick",this.bomi_go,this);
            this.div_robo.form.div_bomi.form.sta_bomDt.addEventHandler("onclick",this.bomi_go,this);
            this.div_robo.form.div_cist.addEventHandler("onclick",this.cist_go,this);
            this.div_robo.form.div_cist.form.sta_cistTitle.addEventHandler("onclick",this.cist_go,this);
            this.div_robo.form.div_cist.form.sta_cistPtVal7.addEventHandler("onclick",this.cist_go,this);
            this.div_robo.form.div_cist.form.sta_cistGradeVal.addEventHandler("onclick",this.cist_go,this);
            this.div_robo.form.div_cist.form.sta_cistDt.addEventHandler("onclick",this.cist_go,this);
            this.div_robo.form.div_sgds.addEventHandler("onclick",this.sgds_go,this);
            this.div_robo.form.div_sgds.form.sta_sgdsTitle.addEventHandler("onclick",this.sgds_go,this);
            this.div_robo.form.div_sgds.form.sta_sgdsPtVal.addEventHandler("onclick",this.sgds_go,this);
            this.div_robo.form.div_sgds.form.sta_sgdDt.addEventHandler("onclick",this.sgds_go,this);
        };
        this.loadIncludeScript("NUC101QR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
