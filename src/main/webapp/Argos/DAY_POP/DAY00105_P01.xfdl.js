(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00105_P01");
            this.set_titletext("목욕일정입력");
            if (Form == this.constructor)
            {
                this._setFormPosition(740,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_item", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"aDates\" type=\"STRING\" size=\"256\"/><Column id=\"rnum\" type=\"STRING\" size=\"256\"/><Column id=\"ba_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"dday\" type=\"STRING\" size=\"256\"/><Column id=\"bDates\" type=\"STRING\" size=\"256\"/><Column id=\"ba_code\" type=\"STRING\" size=\"256\"/><Column id=\"ba_name\" type=\"STRING\" size=\"256\"/><Column id=\"ba_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"bShow\" type=\"STRING\" size=\"256\"/><Column id=\"bChk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sicode\">T22614000050</Col><Col id=\"aDates\">20220401</Col></Row><Row><Col id=\"sicode\">T22614000050</Col><Col id=\"aDates\">20220402</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_head", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"b_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_item_tmp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"ba_code\" type=\"STRING\" size=\"256\"/><Column id=\"ba_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"dow\" type=\"STRING\" size=\"256\"/><Column id=\"d01\" type=\"STRING\" size=\"256\"/><Column id=\"d02\" type=\"STRING\" size=\"256\"/><Column id=\"d03\" type=\"STRING\" size=\"256\"/><Column id=\"d04\" type=\"STRING\" size=\"256\"/><Column id=\"d05\" type=\"STRING\" size=\"256\"/><Column id=\"d06\" type=\"STRING\" size=\"256\"/><Column id=\"d07\" type=\"STRING\" size=\"256\"/><Column id=\"d08\" type=\"STRING\" size=\"256\"/><Column id=\"d09\" type=\"STRING\" size=\"256\"/><Column id=\"d10\" type=\"STRING\" size=\"256\"/><Column id=\"d11\" type=\"STRING\" size=\"256\"/><Column id=\"d12\" type=\"STRING\" size=\"256\"/><Column id=\"d13\" type=\"STRING\" size=\"256\"/><Column id=\"d14\" type=\"STRING\" size=\"256\"/><Column id=\"d15\" type=\"STRING\" size=\"256\"/><Column id=\"d16\" type=\"STRING\" size=\"256\"/><Column id=\"d17\" type=\"STRING\" size=\"256\"/><Column id=\"d18\" type=\"STRING\" size=\"256\"/><Column id=\"d19\" type=\"STRING\" size=\"256\"/><Column id=\"d20\" type=\"STRING\" size=\"256\"/><Column id=\"d21\" type=\"STRING\" size=\"256\"/><Column id=\"d22\" type=\"STRING\" size=\"256\"/><Column id=\"d23\" type=\"STRING\" size=\"256\"/><Column id=\"d24\" type=\"STRING\" size=\"256\"/><Column id=\"d25\" type=\"STRING\" size=\"256\"/><Column id=\"d26\" type=\"STRING\" size=\"256\"/><Column id=\"d27\" type=\"STRING\" size=\"256\"/><Column id=\"d28\" type=\"STRING\" size=\"256\"/><Column id=\"d29\" type=\"STRING\" size=\"256\"/><Column id=\"d30\" type=\"STRING\" size=\"256\"/><Column id=\"d31\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_days", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"ba_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"ba_code\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_body1","3","34",null,"34","3",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1","1","34","83","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_name","88","38","90","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_m_code","187","38","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01","3","67",null,"34","3",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head3","1","67","83","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("성별.생일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body10","1","106",null,"450","3",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"4","70","26","3",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_bdate","187","71","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head3_00","360","34","83","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_text("입 소 일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head4","360","67","83","34",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_text("퇴 소 일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sun","12","145","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_text("일요일");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_background("#ff8080");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_mon","111","145","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_text("월요일");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_tue","210","145","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_text("화요일");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_wed","309","145","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_text("수요일");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_thu","408","145","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_text("목요일");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_fri","507","145","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_text("금요일");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sat","606","145","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_text("토요일");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_background("lightblue");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_m_title","289","111",null,"30","291",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_01","12","169","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_02","111","169","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_003","210","169","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_04","309","169","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_05","408","169","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_06","507","169","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_07","606","169","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_08","12","228","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_09","111","228","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_10","210","228","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_11","309","228","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_12","408","228","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_13","507","228","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_14","606","228","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_15","12","287","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_16","111","287","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_17","210","287","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_18","309","287","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_19","408","287","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_20","507","287","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_21","606","287","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_22","12","346","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_23","111","346","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_24","210","346","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_25","309","346","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_26","408","346","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_27","507","346","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_28","606","346","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_29","12","405","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_30","111","405","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_31","210","405","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_32","309","405","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_33","408","405","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_34","507","405","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_35","606","405","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_36","12","464","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cal_37","111","464","100","60",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","17","174","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("57");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_02","116","174","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("58");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_03","215","174","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("59");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_04","314","174","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("60");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_05","413","174","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("61");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_06","512","174","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("62");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_07","611","174","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("63");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_08","17","233","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("64");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_09","116","233","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("65");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_10","215","233","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("66");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_11","314","233","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("67");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_12","413","233","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("68");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_13","512","233","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("69");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_14","611","233","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("70");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_15","17","292","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("71");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_16","116","292","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("72");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_17","215","292","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("73");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_18","314","292","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("74");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_19","413","292","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("75");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_20","512","292","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("76");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_21","611","292","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("77");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_22","17","351","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("78");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_23","116","351","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("79");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_24","215","351","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("80");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_25","314","351","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("81");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_26","413","351","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("82");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_27","512","351","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("83");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_28","611","351","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("84");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_29","17","410","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("85");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_30","116","410","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("86");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_31","215","410","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("87");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_32","314","410","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("88");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_33","413","410","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("89");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_34","512","410","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("90");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_35","611","410","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("91");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_36","17","469","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("92");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_37","116","469","90","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("93");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_reday","448","71","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("94");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_color("red");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_enday","448","38","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("95");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sex_nm","88","71","35","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_count","598","111",null,"30","22",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("96");
            obj.set_font("normal 700/normal \"Arial\"");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",740,580,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cont.form.sta_name","text","ds_head","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.sta_m_code","text","ds_head","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.sta_sex_nm","text","ds_head","sex_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.sta_bdate","text","ds_head","b_date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.sta_reday","text","ds_head","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.sta_enday","text","ds_head","m_enday");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00105_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00105_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00105_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00105_P01
         * 화면명   	: 목욕일정입력
         * 화면설명 	:
         * 작성일   	: 2022-05-31
         * 작성자   	: 박영주
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2022-00-00
         ***********************************************************************
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const sicode = this.parent.SICODE;
        const m_code = this.parent.M_CODE;
        const m_name = this.parent.M_NAME;
        const date_from = this.parent.DATE_FROM;
        const date_to = this.parent.DATE_TO;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.setColumn(0,"sicode",sicode);
        	this.ds_search.setColumn(0,"m_code",m_code);
        	this.ds_search.setColumn(0,"date_from",date_from);
        	this.ds_search.setColumn(0,"date_to",date_to);


        	this.fn_search();
        	this.fn_searchDetail();

        	this.fn_draw_cal();
        };


        this.fn_draw_cal = function()
        {
        	var m_title = "";
        	var tmp = this.ds_search.getColumn(0,"date_from");
        	m_title = tmp.substring(0,4) + "년 " + tmp.substring(4,6) + "월";
        	this.div_cont.form.sta_m_title.set_text(m_title);
        	tmp = this.ds_item.lookup("bChk","1","ba_cnt");
        	if (tmp!=undefined) {
        		this.div_cont.form.sta_count.set_text("목욕일수 = " + tmp);
        	} else { /* 목욕일수 0일 때는 표시 안함 */ }

        	for (var i=0; i<this.ds_item.rowcount; i++) {
        		var bShow = this.ds_item.getColumn(i,"bShow");
        		var chk = this.ds_item.getColumn(i,"bChk");
        		var date_str = this.ds_item.getColumn(i,"aDates");
        		var dday = this.ds_item.getColumn(i,"dday");

        		date_str = date_str.substr(8,2);
        		var i_str = i+1+"";
        		if (i_str<10) {
        			i_str = i_str.padStart(2, '0');
        		}
        		var chk_comp_name = "chk_"+i_str;
        		var chk_comp = this.div_cont.form.components[chk_comp_name];
        		if (bShow=='0') {	// 해당월 1일 이전의 안 쓰이는 체크박스 안 보이게
        			chk_comp.set_visible(false);
        			//this.div_cont.removeChild(chk_comp_name);
        			//chk_comp.destroy();
        		}
        		if (chk=='1') {
        			chk_comp.set_value('1');
        		}

        		chk_comp.set_text(dday.padStart(7,' '));
        	}

        	// 해당월의 마지막 날짜 이후의 안 쓰이는 체크박스 안 보이게
        	for (var j=this.ds_item.rowcount; j<37; j++) {
        		var chk_comp_name = "chk_"+(j+1);
        		var chk_comp = this.div_cont.form.components["chk_"+(j+1)];
        		chk_comp.set_visible(false);
        		//this.div_cont.removeChild(chk_comp_name);
        		//chk_comp.destroy();
        	}
        }


        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        this.fn_search_pre = function()
        {
        	return true;
        }

        this.fn_save_pre = function()
        {
        	// 모든 체크박스 value를 데이터셋에 반영
        	for (var i=0; i<37; i++) {
        		var num = (i+1+'').padStart(2,'0');
        		var chk_comp = this.div_cont.form.components["chk_"+num];
        		if (i>=this.ds_item.rowcount) break;
        		this.ds_item.setColumn(i,"bChk", chk_comp.value);
        	}

        	// 해당월 1일 이전의 행 삭제
        	for (var j=0; j<this.ds_item.rowcount; j++) {
        		var hrow = this.ds_item.findRow("bShow","0");
        		if (hrow==-1) break;
        		trace("hrow:" + hrow);
        		this.ds_item.deleteRow(hrow);
        	}

        	// 체크된 날만 남김
        	for (var k=this.ds_item.rowcount-1; k>=0; k--) {
        		var hrow = this.ds_item.findRow("bChk","0");
        		if (hrow==-1) break;
        		this.ds_item.deleteRow(hrow);
        	}

        	// 데이터 채우기
        	for (var m=0; m<this.ds_item.rowcount; m++) {
        		var _sicode = this.ds_item.getColumn(m,"sicode");
        		if (_sicode!=null && _sicode!='') continue;

        		var dday = this.ds_item.getColumn(m,"dday");
        		var nalja = this.parent.DATE_FROM.substr(0,4) + "-"
        				+ this.parent.DATE_FROM.substr(4,2) + "-"
        				+ dday.padStart(2,'0');
        		this.ds_item.setColumn(m,"sicode",this.parent.SICODE);
        		this.ds_item.setColumn(m,"ba_code",this.parent.M_CODE);
        		this.ds_item.setColumn(m,"ba_name",this.parent.M_NAME);
        		this.ds_item.setColumn(m,"ba_nalja",nalja);
        	}

        	return true;
        }

        //조회
        this.fn_search= function ()
        {
        	//validation
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_head=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00105_P01.DAY00105_P01_DS_HEAD_S ";

        	const aSync = false;
        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, aSync);
        };


        this.fn_searchDetail = function ()
        {
        	//validation
        	//if (!this.fn_search_pre()) return;

        	const svcId = "searchDetail";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_item=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00105_P01.DAY00105_P01_DS_ITEM_S ";

        	const aSync = false;
        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, aSync);
        };

        this.fn_save = function()
        {
        	// validation
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
        	const params = "/DAY00105Controller.do";
        	const inDatasets = "input1=ds_item";
        	const outDatasets = "";
        	const argument = "method=save "
        				+ "sicode=" + this.parent.SICODE + " "
        				+ "m_code=" + this.parent.M_CODE + " "
        				+ "date_from=" + this.parent.DATE_FROM + " "
        				+ "date_to=" + this.parent.DATE_TO + " ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };


        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{

        		} else if(strSvcID == "save")
        		{
        			alert("목욕일정 등록완료!");
        			this.ds_return.clearData();
        			this.ds_return.addColumn("REFRESH", "STRING");
        			var nRow = this.ds_return.addRow();
        			this.ds_return.setColumn(nRow, "REFRESH", "Y");

        			this.close(this.ds_return.saveXML());
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        	}
        }

        this.nalja_check_onclick = function(obj,e)
        {
        	var cnt = 0;
        	for (var i=0; i<37; i++) {
        		var num = (i+1+'').padStart(2,'0');
        		var chk_comp = this.div_cont.form.components["chk_"+num];

        		if (chk_comp.value==1) {
        			cnt++;
        		}
        	}
        	if (cnt>0) {
        		this.div_cont.form.sta_count.set_text("목욕일수 = " + cnt);
        	} else {// 1이다가 0일 때도 화면갱신 필요하므로
        		this.div_cont.form.sta_count.set_text("");
        	}
        };

        // 목욕일정 입력은
        // 입소일부터 퇴소일 당일까지만 가능. 그 외 불가
        this.nalja_check_canchange = function(obj,e)
        {
        	var m_enday = this.ds_head.getColumn(0,"m_enday");	// 입소일
        	var m_reday = this.ds_head.getColumn(0,"m_reday");  // 퇴소일
        	if (m_reday==null || m_reday=='') {
        		m_reday = '21000101';
        	}

        	var date_from = this.ds_search.getColumn(0,"date_from");
        	var year_mon = date_from.substr(0,6);
        	var dday = obj.text.trim();
        	var checkDate = year_mon + dday.padStart(2,'0');

        	m_enday = m_enday.replace(/[.]/g,'');	// 점 제거
        	m_reday = m_reday.replace(/[.]/g,'');

        	var enday = new Date(m_enday.substr(0,4),m_enday.substr(4,2)-1,m_enday.substr(6,2));
        	var reday = new Date(m_reday.substr(0,4),m_reday.substr(4,2)-1,m_reday.substr(6,2));
        	var checkday = new Date(checkDate.substr(0,4),checkDate.substr(4,2)-1,checkDate.substr(6,2));

        	if (checkday < enday || checkday > reday) {
        		return false;
        	} else {
        		return true;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_cont.form.chk_01.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_01.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_02.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_02.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_03.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_03.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_04.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_04.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_05.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_05.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_06.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_06.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_07.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_07.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_08.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_08.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_09.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_09.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_10.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_10.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_11.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_11.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_12.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_12.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_13.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_13.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_14.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_14.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_15.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_15.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_16.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_16.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_17.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_17.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_18.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_18.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_19.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_19.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_20.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_20.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_21.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_21.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_22.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_22.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_23.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_23.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_24.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_24.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_25.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_25.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_26.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_26.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_27.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_27.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_28.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_28.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_29.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_29.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_30.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_30.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_31.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_31.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_32.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_32.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_33.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_33.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_34.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_34.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_35.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_35.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_36.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_36.addEventHandler("canchange",this.nalja_check_canchange,this);
            this.div_cont.form.chk_37.addEventHandler("onclick",this.nalja_check_onclick,this);
            this.div_cont.form.chk_37.addEventHandler("canchange",this.nalja_check_canchange,this);
        };
        this.loadIncludeScript("DAY00105_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
