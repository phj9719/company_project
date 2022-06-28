(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00402_P01");
            this.set_titletext("수급자 주간송영 운행일정");
            if (Form == this.constructor)
            {
                this._setFormPosition(785,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"K_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"M_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"생일\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"입소일\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"이용일\" type=\"STRING\" size=\"256\"/><Column id=\"월\" type=\"STRING\" size=\"256\"/><Column id=\"화\" type=\"STRING\" size=\"256\"/><Column id=\"수\" type=\"STRING\" size=\"256\"/><Column id=\"목\" type=\"STRING\" size=\"256\"/><Column id=\"금\" type=\"STRING\" size=\"256\"/><Column id=\"토\" type=\"STRING\" size=\"256\"/><Column id=\"일요일\" type=\"STRING\" size=\"256\"/><Column id=\"이용시간\" type=\"STRING\" size=\"256\"/><Column id=\"이용시작시\" type=\"STRING\" size=\"256\"/><Column id=\"이용시작분\" type=\"STRING\" size=\"256\"/><Column id=\"이용종료시\" type=\"STRING\" size=\"256\"/><Column id=\"이용종료분\" type=\"STRING\" size=\"256\"/><Column id=\"이용차량\" type=\"STRING\" size=\"256\"/><Column id=\"월요시간\" type=\"STRING\" size=\"256\"/><Column id=\"월요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"월요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"월요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"월요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"월요차량\" type=\"STRING\" size=\"256\"/><Column id=\"화요시간\" type=\"STRING\" size=\"256\"/><Column id=\"화요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"화요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"화요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"화요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"화요차량\" type=\"STRING\" size=\"256\"/><Column id=\"수요시간\" type=\"STRING\" size=\"256\"/><Column id=\"수요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"수요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"수요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"수요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"수요차량\" type=\"STRING\" size=\"256\"/><Column id=\"목요시간\" type=\"STRING\" size=\"256\"/><Column id=\"목요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"목요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"목요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"목요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"목요차량\" type=\"STRING\" size=\"256\"/><Column id=\"금요시간\" type=\"STRING\" size=\"256\"/><Column id=\"금요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"금요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"금요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"금요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"금요차량\" type=\"STRING\" size=\"256\"/><Column id=\"토요시간\" type=\"STRING\" size=\"256\"/><Column id=\"토요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"토요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"토요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"토요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"토요차량\" type=\"STRING\" size=\"256\"/><Column id=\"일요시간\" type=\"STRING\" size=\"256\"/><Column id=\"일요시작시\" type=\"STRING\" size=\"256\"/><Column id=\"일요시작분\" type=\"STRING\" size=\"256\"/><Column id=\"일요종료시\" type=\"STRING\" size=\"256\"/><Column id=\"일요종료분\" type=\"STRING\" size=\"256\"/><Column id=\"일요차량\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_main","10","35","765","515",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","11","9","260","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_text("수급자 정보");
            obj.set_cssclass("lb01");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","10","40",null,"2","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_background("#000000");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","9","47","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","91","47","660","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","9","80","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("입소일");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","91","80","660","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","9","203","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("이용시간");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","91","203","660","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","9","236","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("월요일");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","91","236","660","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5","9","269","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("화요일");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5","91","269","660","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_1","389","80","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("생활실");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3_1","389","203","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("이용차량");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head6","9","302","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("수요일");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6","91","302","660","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head7","9","335","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("목요일");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body7","91","335","660","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head8","9","368","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("금요일");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body8","91","368","660","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_1","389","47","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("성별·생일");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4_1","389","236","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("월요차량");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5_1","389","269","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("화요차량");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head6_1","389","302","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("수요차량");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head7_1","389","335","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("목요차량");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head8_1","389","368","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("금요차량");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_enday","99","88","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("11");
            obj.set_text("2021.08.07");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_roomname","479","88","119","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("13");
            obj.set_text("생활실");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sex","479","55","39","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            obj.set_text("남");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_birth","529","55","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("8");
            obj.set_text("38-08-11");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_subTitle2","11","129","260","24",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("14");
            obj.set_text("수급자 주간송영 운행일정");
            obj.set_cssclass("lb01");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_line00","10","160",null,"2","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("15");
            obj.set_background("#000000");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_from_hour","177","207","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("20");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_timeColon1","210","208","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("21");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_from_min","220","207","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("22");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_timeColon2","260","208","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("23");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_to_hour","277","207","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("24");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_timeColon3","310","208","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("25");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_to_min","320","207","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("26");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mname","99","55","69","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_text("이동철");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mcode","179","55","79","19",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_text("20210004");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_bighead1","9","170","381","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("송영서비스 이용시간");
            obj.set_background("#ebf1de");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_bighead2","389","170","362","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("이용차량");
            obj.set_background("#ebf1de");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head9","9","401","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("토요일");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body9","91","401","660","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head9_1","389","401","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("토요차량");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head10","9","434","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("일요일");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body10","91","434","660","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head10_1","389","434","83","34",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("일요차량");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_car","577","208","60","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_mon_from_hour","177","240","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("32");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mon_timeColon1","210","241","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("33");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_mon_from_min","220","240","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("34");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mon_timeColon2","260","241","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("35");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_mon_to_hour","277","240","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("36");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mon_timeColon3","310","241","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("37");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_mon_to_min","320","240","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("38");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_mon","115","240","45","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("31");
            obj.set_text("월");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_tue","115","274","45","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("43");
            obj.set_text("화");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_tue_from_hour","177","273","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("44");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_tue_timeColon1","210","274","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("45");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_tue_from_min","220","273","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("46");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_tue_timeColon2","260","274","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("47");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_tue_to_hour","277","273","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("48");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_tie_timeColon3","310","274","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("49");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_tue_to_min","320","273","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("50");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_wed","115","307","45","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("55");
            obj.set_text("수");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_wed_from_hour","177","306","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("56");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_wed_timeColon1","210","307","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("57");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_wed_from_min","220","306","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("58");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_wed_timeColon2","260","307","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("59");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_wed_to_hour","277","306","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("60");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_wed_timeColon3","310","307","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("61");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_wed_to_min","320","306","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("62");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_thu","115","340","45","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("67");
            obj.set_text("목");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_thu_from_hour","177","339","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("68");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_thu_timeColon1","210","340","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("69");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_thu_from_min","220","339","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("70");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_thu_timeColon2","260","340","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("71");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_thu_to_hour","277","339","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("72");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_thu_timeColon3","310","340","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("73");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_thu_to_min","320","339","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("74");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_fri","115","373","45","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("79");
            obj.set_text("금");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_fri_from_hour","177","372","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("80");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_fri_timeColon1","210","373","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("81");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_fri_from_min","220","372","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("82");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_fri_timeColon2","260","373","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("83");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_fri_to_hour","277","372","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("84");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_fri_timeColon3","310","373","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("85");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_fri_to_min","320","372","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("86");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_sat","115","406","45","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("91");
            obj.set_text("토");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_sat_from_hour","177","405","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("92");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sat_timeColon1","210","406","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("93");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_sat_from_min","220","405","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("94");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sat_timeColon2","260","406","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("95");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_sat_to_hour","277","405","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("96");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sat_timeColon3","310","406","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("97");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_sat_to_min","320","405","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("98");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_sun","115","439","45","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("103");
            obj.set_text("일");
            obj.set_cssclass("chk_x");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_sun_from_hour","177","438","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("104");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sun_timeColon1","210","439","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("105");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_sun_from_min","220","438","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("106");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sun_timeColon2","260","439","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("107");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_sun_to_hour","277","438","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("108");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작시간");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sun_timeColon3","310","439","10","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("109");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_sun_to_min","320","438","35","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("110");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_tooltiptext("시작분");
            obj.set_displaynulltext("00");
            obj.set_value("00");
            obj.set_text("00");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_mon_car","577","241","60","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("40");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_tue_car","577","274","60","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("52");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_wed_car","577","307","60","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("64");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_thu_car","577","340","60","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("76");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_fri_car","577","373","60","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("88");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_sat_car","577","406","60","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("100");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_sun_car","577","439","60","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("112");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_week","177","472","100","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("113");
            obj.set_text("월-금");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_sat","282","472","100","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("114");
            obj.set_text("토요일");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_sun","387","472","100","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("115");
            obj.set_text("일요일");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_all","492","472","100","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("116");
            obj.set_text("전체");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_func","10","0",null,"35","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_refresh","0","5","90","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("새로고침");
            obj.set_cssclass("btn_refresh");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5","70","25","0",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",785,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_main.form.sta_mname","text","ds_data","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_main.form.sta_mcode","text","ds_data","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_main.form.sta_sex","text","ds_data","성별");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_main.form.sta_birth","text","ds_data","생일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_main.form.sta_enday","text","ds_data","입소일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_main.form.sta_roomname","text","ds_data","m_roomname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_main.form.chk_mon","value","ds_data","월");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_main.form.chk_tue","value","ds_data","화");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_main.form.chk_wed","value","ds_data","수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_main.form.chk_thu","value","ds_data","목");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_main.form.chk_fri","value","ds_data","금");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_main.form.chk_sat","value","ds_data","토");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_main.form.chk_sun","value","ds_data","일요일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_main.form.edt_from_hour","value","ds_data","이용시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_main.form.edt_from_min","value","ds_data","이용시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_main.form.edt_to_hour","value","ds_data","이용종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_main.form.edt_to_min","value","ds_data","이용종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_main.form.edt_mon_from_hour","value","ds_data","월요시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_main.form.edt_mon_from_min","value","ds_data","월요시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_main.form.edt_mon_to_hour","value","ds_data","월요종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_main.form.edt_mon_to_min","value","ds_data","월요종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_main.form.edt_tue_from_hour","value","ds_data","화요시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_main.form.edt_tue_from_min","value","ds_data","화요시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_main.form.edt_tue_to_hour","value","ds_data","화요종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_main.form.edt_tue_to_min","value","ds_data","화요종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_main.form.edt_wed_from_hour","value","ds_data","수요시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_main.form.edt_wed_from_min","value","ds_data","수요시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_main.form.edt_wed_to_hour","value","ds_data","수요종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_main.form.edt_wed_to_min","value","ds_data","수요종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_main.form.edt_thu_from_hour","value","ds_data","목요시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_main.form.edt_thu_from_min","value","ds_data","목요시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_main.form.edt_thu_to_hour","value","ds_data","목요종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_main.form.edt_thu_to_min","value","ds_data","목요종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_main.form.edt_fri_from_hour","value","ds_data","금요시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_main.form.edt_fri_from_min","value","ds_data","금요시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_main.form.edt_fri_to_hour","value","ds_data","금요종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_main.form.edt_fri_to_min","value","ds_data","금요종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_main.form.edt_sat_from_hour","value","ds_data","토요시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_main.form.edt_sat_from_min","value","ds_data","토요시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_main.form.edt_sat_to_hour","value","ds_data","토요종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_main.form.edt_sat_to_min","value","ds_data","토요종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_main.form.edt_sun_from_hour","value","ds_data","일요시작시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_main.form.edt_sun_from_min","value","ds_data","일요시작분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_main.form.edt_sun_to_hour","value","ds_data","일요종료시");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_main.form.edt_sun_to_min","value","ds_data","일요종료분");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_main.form.edt_car","value","ds_data","이용차량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_main.form.edt_mon_car","value","ds_data","월요차량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_main.form.edt_tue_car","value","ds_data","화요차량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_main.form.edt_wed_car","value","ds_data","수요차량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_main.form.edt_thu_car","value","ds_data","목요차량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_main.form.edt_fri_car","value","ds_data","금요차량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_main.form.edt_sat_car","value","ds_data","토요차량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_main.form.edt_sun_car","value","ds_data","일요차량");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00402_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00402_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00402_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00402_P01
         * 화면명   	: 수급자 주간송영 운행일정
         * 화면설명 	: 수급자의 주간송영 운행일정을 조회, 수정하는 팝업
         * 작성일   	: 2022-05-03
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용

         ***********************************************************************
         비고 :
         */
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        const fv_mcode = this.parent.M_CODE;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 저장을 위한 gv_curWinKey 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00402_P01";

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "M_CODE", fv_mcode);

        	// 오픈시 조회
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

        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	const dayArr = ["이용", "월요", "화요", "수요", "금요", "토요", "일요"];

        	for (let i = 0; i < dayArr.length; i++)
        	{
        		const fullTime = this.ds_data.getColumn(0, dayArr[i] + "시작시")
        					   + ":"
        					   + this.ds_data.getColumn(0, dayArr[i] + "시작분")
        					   + "-"
        					   + this.ds_data.getColumn(0, dayArr[i] + "종료시")
        					   + ":"
        					   + this.ds_data.getColumn(0, dayArr[i] + "종료분");

        		if (fullTime == "00:00-00:00")
        			this.ds_data.setColumn(0, dayArr[i] + "시간", "");
        		else
        			this.ds_data.setColumn(0, dayArr[i] + "시간", fullTime);
        	}

        	const fullDay = this.ds_data.getColumn(0, "월")
        				  + this.ds_data.getColumn(0, "화")
        				  + this.ds_data.getColumn(0, "수")
        				  + this.ds_data.getColumn(0, "목")
        				  + this.ds_data.getColumn(0, "금")
        				  + this.ds_data.getColumn(0, "토");

        	this.ds_data.setColumn(0, "이용일", fullDay);

        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function ()
        {
        	//validation
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_data=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00402_P01.DAY00402_P01_DS_DATA_S";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
        	const inDs = "ds_data";

        	this.fn_save_com(svcId, inDs);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			const dayArr = ["이용", "월요", "화요", "수요", "목요", "금요", "토요", "일요"];

        			for (let i = 0; i < dayArr.length; i++)
        			{
        				if (Sct.Util.isEmpty(nexacro.trim(this.ds_data.getColumn(0, dayArr[i] + "시간"))))
        				{
        					this.ds_data.setColumn(0, dayArr[i] + "시작시", "00");
        					this.ds_data.setColumn(0, dayArr[i] + "시작분", "00");
        					this.ds_data.setColumn(0, dayArr[i] + "종료시", "00");
        					this.ds_data.setColumn(0, dayArr[i] + "종료분", "00");
        				}
        			}
        		}
        		else if (strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");
        			this.close();
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
         * Popup Functions
         ***********************************************************************/

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	//trace("popid : " + popid);
        	//trace("strDs : " + strDs);
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	const code1 = objDs.getColumn(0, "gubun1");
        	const code2 = objDs.getColumn(0, "gubun2");
        	let val1 = "";
        	let val2 = "";
        	if (Sct.Util.isEmpty(code1))
        		val1 = "  ";
        	else
        		val1 = code1;

        	if (Sct.Util.isEmpty(code2))
        		val2 = "  ";
        	else
        		val2 = code2;
        	switch(popid)
        	{
        		case "car" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "이용차량", val1 + val2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "이용차량", "");
        			}
        			break;
        		case "mon_car" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "월요차량", val1 + val2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "월요차량", "");
        			}
        			break;
        		case "tue_car" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "화요차량", val1 + val2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "화요차량", "");
        			}
        			break;
        		case "wed_car" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "수요차량", val1 + val2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "수요차량", "");
        			}
        			break;
        		case "thu_car" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "목요차량", val1 + val2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "목요차량", "");
        			}
        			break;
        		case "fri_car" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "금요차량", val1 + val2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "금요차량", "");
        			}
        			break;
        		case "sat_car" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "토요차량", val1 + val2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "토요차량", "");
        			}
        			break;
        		case "sun_car" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_data.setColumn(0, "일요차량", val1 + val2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "일요차량", "");
        			}
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 새로고침 버튼
        this.div_func_btn_refresh_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        // 저장 버튼
        this.div_func_btn_save_onclick = function(obj,e)
        {
        	this.fn_save();
        };

        // 시 변경 이벤트
        this.edt_hour_onchanged = function(obj,e)
        {
        	if (e.postvalue > "23" || e.postvalue == "")
        	{
        		obj.set_value("00");
        	}
        	else if (e.postvalue.length == 1)
        	{
        		obj.set_value("0" + e.postvalue);
        	}
        };

        // 분 변경 이벤트
        this.edt_min_onchanged = function(obj,e)
        {
        	if (e.postvalue > "59" || e.postvalue == "")
        	{
        		obj.set_value("00");
        	}
        	else if (e.postvalue.length == 1)
        	{
        		obj.set_value("0" + e.postvalue);
        	}
        };

        // 시간, 차량 복사 버튼 클릭 이벤트
        this.btn_week_onclick = function(obj,e)
        {
        	const sHour = this.ds_data.getColumn(0, "이용시작시");
        	const sMin = this.ds_data.getColumn(0, "이용시작분");
        	const eHour = this.ds_data.getColumn(0, "이용종료시");
        	const eMin = this.ds_data.getColumn(0, "이용종료분");
        	const gubun = this.ds_data.getColumn(0, "이용차량");

        	const dayArr = ["월요", "화요", "수요", "목요", "금요"];
        	const allDayArr = ["월요", "화요", "수요", "목요", "금요", "토요", "일요"];

        	switch(obj.id) {
        		case "btn_week" :
        			for (let i = 0; i < dayArr.length; i++)
        			{
        				this.ds_data.setColumn(0, dayArr[i] + "시작시", sHour);
        				this.ds_data.setColumn(0, dayArr[i] + "시작분", sMin);
        				this.ds_data.setColumn(0, dayArr[i] + "종료시", eHour);
        				this.ds_data.setColumn(0, dayArr[i] + "종료분", eMin);
        				this.ds_data.setColumn(0, dayArr[i] + "차량", gubun);
        			}
        			break;
        		case "btn_sat" :
        			this.ds_data.setColumn(0, "토요시작시", sHour);
        			this.ds_data.setColumn(0, "토요시작분", sMin);
        			this.ds_data.setColumn(0, "토요종료시", eHour);
        			this.ds_data.setColumn(0, "토요종료분", eMin);
        			this.ds_data.setColumn(0, "토요차량", gubun);
        			break;
        		case "btn_sun" :
        			this.ds_data.setColumn(0, "토요시작시", sHour);
        			this.ds_data.setColumn(0, "토요시작분", sMin);
        			this.ds_data.setColumn(0, "토요종료시", eHour);
        			this.ds_data.setColumn(0, "토요종료분", eMin);
        			this.ds_data.setColumn(0, "토요차량", gubun);
        			break;
        		case "btn_all" :
        			for (let i = 0; i < allDayArr.length; i++)
        			{
        				this.ds_data.setColumn(0, allDayArr[i] + "시작시", sHour);
        				this.ds_data.setColumn(0, allDayArr[i] + "시작분", sMin);
        				this.ds_data.setColumn(0, allDayArr[i] + "종료시", eHour);
        				this.ds_data.setColumn(0, allDayArr[i] + "종료분", eMin);
        				this.ds_data.setColumn(0, allDayArr[i] + "차량", gubun);
        			}
        			break;
        		default:
        	}
        };

        // 차량 에디트박스 클릭 이벤트
        this.edt_car_oneditclick = function(obj,e)
        {
        	let svcId = "";
        	switch(obj.id)
        	{
        		case "edt_car" :	// 이용차량
        			svcId = "car";
        			break;
        		case "edt_mon_car" :	// 월요차량
        			svcId = "mon_car";
        			break;
        		case "edt_tue_car" :	// 화요차량
        			svcId = "tue_car";
        			break;
        		case "edt_wed_car" :	// 수요차량
        			svcId = "wed_car";
        			break;
        		case "edt_thu_car" :	// 목요차량
        			svcId = "thu_car";
        			break;
        		case "edt_fri_car" :	// 금요차량
        			svcId = "fri_car";
        			break;
        		case "edt_sat_car" :	// 토요차량
        			svcId = "sat_car";
        			break;
        		case "edt_sun_car" :	// 일요차량
        			svcId = "sun_car";
        			break;
        		default:
        	}

        	const val = obj.value;
        	let val1 = "";
        	let val2 = "";

        	if (!Sct.Util.isEmpty(val))
        	{
        		val1 = val.substr(0, 2);
        		val2 = val.substr(2);
        	}

        	const param = {
        		SICODE : fv_sicode
        	,	VAL1 : val1
        	,	VAL2 : val2
        	};

        	Sct.popup(this, svcId, 450, 400, "송영차량지정", param, "DAY_POP::DAY00402_P04.xfdl", "fn_popCallback");
        };

        // 수급자 주간송영 운행일정 체크박스 체인지 이벤트
        this.chk_day_onchanged = function(obj,e)
        {
        	const startHour = this.ds_data.getColumn(0, "이용시작시");
        	const startMin = this.ds_data.getColumn(0, "이용시작분");
        	const endHour = this.ds_data.getColumn(0, "이용종료시");
        	const endMin = this.ds_data.getColumn(0, "이용종료분");
        	const car = this.ds_data.getColumn(0, "이용차량");

        	let ddd = "";
        	switch(obj.id)
        	{
        		case "chk_mon" :
        			ddd = "월";
        			break;
        		case "chk_tue" :
        			ddd = "화";
        			break;
        		case "chk_wed" :
        			ddd = "수";
        			break;
        		case "chk_thu" :
        			ddd = "목";
        			break;
        		case "chk_fri" :
        			ddd = "금";
        			break;
        		case "chk_sat" :
        			ddd = "토";
        			break;
        		case "chk_sun" :
        			ddd = "일";
        			break;
        		default:
        	}

        	if (e.postvalue == 0)
        	{
        		this.ds_data.setColumn(0, ddd + "요시작시", "00");
        		this.ds_data.setColumn(0, ddd + "요시작분", "00");
        		this.ds_data.setColumn(0, ddd + "요종료시", "00");
        		this.ds_data.setColumn(0, ddd + "요종료분", "00");
        		this.ds_data.setColumn(0, ddd + "요차량", "");
        	}
        	else
        	{
        		this.ds_data.setColumn(0, ddd + "요시작시", startHour);
        		this.ds_data.setColumn(0, ddd + "요시작분", startMin);
        		this.ds_data.setColumn(0, ddd + "요종료시", endHour);
        		this.ds_data.setColumn(0, ddd + "요종료분", endMin);
        		this.ds_data.setColumn(0, ddd + "요차량", car);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_main.form.edt_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.edt_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.edt_car.addEventHandler("oneditclick",this.edt_car_oneditclick,this);
            this.div_main.form.edt_mon_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_mon_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.edt_mon_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_mon_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.chk_mon.addEventHandler("onchanged",this.chk_day_onchanged,this);
            this.div_main.form.chk_tue.addEventHandler("onchanged",this.chk_day_onchanged,this);
            this.div_main.form.edt_tue_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_tue_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.edt_tue_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_tue_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.chk_wed.addEventHandler("onchanged",this.chk_day_onchanged,this);
            this.div_main.form.edt_wed_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_wed_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.edt_wed_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_wed_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.chk_thu.addEventHandler("onchanged",this.chk_day_onchanged,this);
            this.div_main.form.edt_thu_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_thu_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.edt_thu_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_thu_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.chk_fri.addEventHandler("onchanged",this.chk_day_onchanged,this);
            this.div_main.form.edt_fri_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_fri_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.edt_fri_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_fri_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.chk_sat.addEventHandler("onchanged",this.chk_day_onchanged,this);
            this.div_main.form.edt_sat_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_sat_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.edt_sat_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_sat_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.chk_sun.addEventHandler("onchanged",this.chk_day_onchanged,this);
            this.div_main.form.edt_sun_from_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_sun_from_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.edt_sun_to_hour.addEventHandler("onchanged",this.edt_hour_onchanged,this);
            this.div_main.form.edt_sun_to_min.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_main.form.edt_mon_car.addEventHandler("oneditclick",this.edt_car_oneditclick,this);
            this.div_main.form.edt_tue_car.addEventHandler("oneditclick",this.edt_car_oneditclick,this);
            this.div_main.form.edt_wed_car.addEventHandler("oneditclick",this.edt_car_oneditclick,this);
            this.div_main.form.edt_thu_car.addEventHandler("oneditclick",this.edt_car_oneditclick,this);
            this.div_main.form.edt_fri_car.addEventHandler("oneditclick",this.edt_car_oneditclick,this);
            this.div_main.form.edt_sat_car.addEventHandler("oneditclick",this.edt_car_oneditclick,this);
            this.div_main.form.edt_sun_car.addEventHandler("oneditclick",this.edt_car_oneditclick,this);
            this.div_main.form.btn_week.addEventHandler("onclick",this.btn_week_onclick,this);
            this.div_main.form.btn_sat.addEventHandler("onclick",this.btn_week_onclick,this);
            this.div_main.form.btn_sun.addEventHandler("onclick",this.btn_week_onclick,this);
            this.div_main.form.btn_all.addEventHandler("onclick",this.btn_week_onclick,this);
            this.div_func.form.btn_refresh.addEventHandler("onclick",this.div_func_btn_refresh_onclick,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.div_func_btn_save_onclick,this);
        };
        this.loadIncludeScript("DAY00402_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
