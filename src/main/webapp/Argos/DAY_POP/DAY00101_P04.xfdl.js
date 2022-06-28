(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00101_P04");
            this.set_titletext("수급자상태설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,710);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"sexgb\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_autoid\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"나이\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"식사종류\" type=\"STRING\" size=\"256\"/><Column id=\"meal\" type=\"STRING\" size=\"256\"/><Column id=\"기능장애\" type=\"STRING\" size=\"256\"/><Column id=\"st1\" type=\"STRING\" size=\"256\"/><Column id=\"st2\" type=\"STRING\" size=\"256\"/><Column id=\"st3\" type=\"STRING\" size=\"256\"/><Column id=\"st4\" type=\"STRING\" size=\"256\"/><Column id=\"st5\" type=\"STRING\" size=\"256\"/><Column id=\"배설조절\" type=\"STRING\" size=\"256\"/><Column id=\"배설변의\" type=\"STRING\" size=\"256\"/><Column id=\"배설뇨의\" type=\"STRING\" size=\"256\"/><Column id=\"배설보조\" type=\"STRING\" size=\"256\"/><Column id=\"침실사용\" type=\"STRING\" size=\"256\"/><Column id=\"drugtime\" type=\"STRING\" size=\"256\"/><Column id=\"신장\" type=\"STRING\" size=\"256\"/><Column id=\"체중\" type=\"STRING\" size=\"256\"/><Column id=\"혈액형\" type=\"STRING\" size=\"256\"/><Column id=\"종교\" type=\"STRING\" size=\"256\"/><Column id=\"추가시분\" type=\"STRING\" size=\"256\"/><Column id=\"nur_time1\" type=\"STRING\" size=\"256\"/><Column id=\"nur_time2\" type=\"STRING\" size=\"256\"/><Column id=\"nur_time3\" type=\"STRING\" size=\"256\"/><Column id=\"nur_time4\" type=\"STRING\" size=\"256\"/><Column id=\"nur_time5\" type=\"STRING\" size=\"256\"/><Column id=\"nur_time6\" type=\"STRING\" size=\"256\"/><Column id=\"제공시분\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_record", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"nur_time1\" type=\"STRING\" size=\"256\"/><Column id=\"nur_time2\" type=\"STRING\" size=\"256\"/><Column id=\"nur_time3\" type=\"STRING\" size=\"256\"/><Column id=\"nur_time4\" type=\"STRING\" size=\"256\"/><Column id=\"nur_time5\" type=\"STRING\" size=\"256\"/><Column id=\"nur_time6\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_body1","0","36","580","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2","0","36","110","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_save","510","0","70","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00","0","132","580","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_01","0","132","110","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_text("기능장애");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_ste_1","115","136","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_text("저작곤란");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_ste_2","195","136","75","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_text("연하곤락");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_ste_3","280","136","75","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_text("소화불량");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_ste_4","365","136","75","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_text("당뇨");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_ste_5","450","136","75","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            obj.set_text("위관영양");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00","0","196","580","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_search","370","0","135","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("설정값 가져오기");
            obj.set_cssclass("btn_search");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_02","290","36","110","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("성별·나이");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00","115","40","60","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("강옥주");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00","445","40","20","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_text("87");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","190","40","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("A103002");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01","410","40","20","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("여");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","71","170","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_text("식사상태파악");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00","0","100","580","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_01_01","0","100","110","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_text("식사종류");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_kind1","115","104","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_text("일반식");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_kind2","195","104","75","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_text("죽식");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_kind3","280","104","95","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_text("유동식(미음)");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_00","0","260","580","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_01","0","228","580","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01","0","324","580","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","0","167","170","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            obj.set_text("배설상태파악");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_01_00","0","228","110","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("28");
            obj.set_text("배설뇨의장애");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_1","115","232","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("29");
            obj.set_text("있다");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_2","175","232","55","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("30");
            obj.set_text("없다");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_01_01_00","0","196","110","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            obj.set_text("배설변의장애");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_1","115","200","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("25");
            obj.set_text("있다");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_2","175","200","55","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("26");
            obj.set_text("없다");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_01_01_01","0","260","110","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("32");
            obj.set_text("배설보조기구");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr3_1","115","264","110","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("33");
            obj.set_text("인공장루(요루)");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr3_2","235","264","85","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("34");
            obj.set_text("유치도뇨관");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr3_3","330","264","85","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("35");
            obj.set_text("기저귀착용");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00_00","0","295","170","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("36");
            obj.set_text("간호상태파악");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_00","0","356","580","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_01","0","388","580","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_02","0","420","580","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_01_01_01_00","0","388","110","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("45");
            obj.set_text("신장(Cm)");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_01_01_00_00","0","324","110","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("38");
            obj.set_text("상급침실");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_01_00_00","0","356","110","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("42");
            obj.set_text("투약전달시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_01_01_01_00_00","0","420","110","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("51");
            obj.set_text("체중(Kg)");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_room1","115","328","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("39");
            obj.set_text("사용");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_room2","175","328","55","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("40");
            obj.set_text("안함");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_02_00","290","388","110","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("48");
            obj.set_text("혈액형");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_02_00_00","290","420","110","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("54");
            obj.set_text("종   교");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Spin("spn_weight","215","423","20","27",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("53");
            obj.set_type("spinonly");
            obj.set_increment("1");
            obj.set_min("-99");
            obj.set_max("999");
            obj.set_value("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Spin("spn_height","215","391","20","27",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("47");
            obj.set_type("spinonly");
            obj.set_min("-99");
            obj.set_max("999");
            obj.set_value("");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_weight","115","423","100","27",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("52");
            obj.set_format("0.0");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_padding("0px 25px 2px 0px");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_height","115","391","100","27",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("46");
            obj.set_format("0.0");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_padding("0px 25px 2px 0px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cm","191","391","19","27",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("85");
            obj.set_text("cm");
            obj.set_textAlign("right");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_kg","191","423","19","27",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("86");
            obj.set_text("kg");
            obj.set_textAlign("right");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_00","115","359","460","27",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("43");
            obj.set_maxlength("60");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","405","391","170","27",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("49");
            obj.set_maxlength("10");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","405","423","170","27",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("55");
            obj.set_maxlength("20");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_02_00","0","494","580","193",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_01_01_01_00_00_00","0","462","110","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("56");
            obj.set_text("필요영역");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_01_01_01_00_00_00_00","109","462","182","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("57");
            obj.set_text("서비스제공명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_01_01_01_00_00_00_00_00","290","462","60","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("58");
            obj.set_text("제공분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_01_01_01_00_00_00_00_00_00","349","462","230","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("59");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_01_01_01_00_00_00_01","0","494","110","193",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("60");
            obj.set_text("건강관리\r\n및\r\n간호관리");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_03","109","494","182","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("31. 건강관리(바이탈)");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_03_00","109","526","182","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("31. 건강관리(투약관리)");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_03_01","109","558","182","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("32. 건강관리(욕창간호)");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_03_02","109","590","182","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("32. 간호처치(배설간호)");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_03_02_00","109","622","182","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("32. 건강관리(비위관영양)");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_03_02_01","109","654","182","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("32. 건강관리(도뇨관관리)");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_03_03","290","494","60","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_03_00_00","290","526","60","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_03_01_00","290","558","60","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_03_02_02","290","590","60","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_03_02_00_00","290","622","60","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_03_02_01_00","290","654","60","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_03_00_00_00","349","526","231","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("◀ 경구약투여 (1일) 제공분");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_03_01_00_00","349","558","231","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("◀ 욕창간호 (1일) 제공분");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_03_02_02_00","349","590","231","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("◀ 배설간호 (1회) 제공분");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_03_02_00_00_00","349","622","231","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("◀ 비위관영양 (1일) 제공분");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_03_02_01_00_00","349","654","231","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("◀ 도뇨관관리 (1회) 제공분");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00_01_03_03_00","349","494","231","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("◀ 바이탈측정 (1일) 제공분");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_nurse1","295","498","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("68");
            obj.set_maxlength("2");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_nurse2","295","530","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("70");
            obj.set_maxlength("2");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_nurse3","295","562","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("72");
            obj.set_maxlength("2");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_nurse4","295","594","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("74");
            obj.set_maxlength("2");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_nurse5","295","626","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("76");
            obj.set_maxlength("2");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_nurse6","295","658","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("78");
            obj.set_maxlength("2");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,710,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_cont.form.div_right.form.div_main.form.sta_body1_00_00","text","ds_list","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_00","text","ds_list","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_right.form.div_main.form.sta_body1_00_01","text","ds_list","sex_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_00_00","text","ds_list","age");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01","text","ds_list","m_jumin1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00","text","ds_list","m_enday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00","text","ds_list","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00","text","ds_list","m_conname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01","text","ds_list","m_liday1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01_00","text","ds_list","m_regist");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01_01","text","ds_list","grade_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01_02","text","ds_list","m_liday2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.sta_body1_00_02","text","ds_list","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.div_main.form.sta_body1_00_02_00","text","ds_list","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_main.form.sta_body1_00_02_00_00","text","ds_list","m_juso1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_main.form.sta_body1_00_02_00_01","text","ds_list","m_juso2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_main.form.sta_body1_00_02_00_01_00","text","ds_list","m_post");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_01","text","ds_state_desc","view_manager");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.div_main.form.sta_body1_00","text","ds_list","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.div_main.form.sta_body16","text","ds_data","din02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.div_main.form.sta_body11","text","ds_data","lun04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_right.form.div_main.form.sta_body12","text","ds_data","lun05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.div_main.form.sta_body13","text","ds_data","lun06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.div_main.form.sta_body15","text","ds_data","din01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_right.form.div_main.form.sta_body17","text","ds_data","din03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_right.form.div_main.form.sta_body18","text","ds_data","din04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.div_main.form.sta_body19","text","ds_data","din05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_right.form.div_main.form.mae_00_00","value","ds_list","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_right.form.div_main.form.mae_00_01","value","ds_list","m_liday1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_right.form.div_main.form.mae_00_01_00","value","ds_list","m_liday2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00_00","text","ds_list_copy","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00_01","text","ds_list_copy","m_liday1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00_01_00","text","ds_list_copy","m_liday2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.chk_ste_1","value","ds_data","st1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.chk_ste_2","value","ds_data","st2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.chk_ste_3","value","ds_data","st3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.chk_ste_4","value","ds_data","st4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.chk_ste_5","value","ds_data","st5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_search.form.cal_date_pic","value","ds_search","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.sta_body1_00","text","ds_data","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_right.form.sta_body1_00_00_00","text","ds_data","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.sta_body1_00_01","text","ds_data","성별");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.sta_body1_00_00_00_00","text","ds_data","jumin");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.div_right.form.sta_body1_00_00_01_00_00_01_00","text","ds_data","m_regist");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.div_right.form.sta_body1_00_02","text","ds_data","m_roomname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.div_right.form.sta_body1_00_02_00","text","ds_data","m_enday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.div_right.form.sta_body1_00_02_00_00","text","ds_data","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.div_right.form.sta_body1_00_02_00_00_00","text","ds_data","grade_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.div_right.form.sta_body1_00_00","text","ds_data","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.sta_body1_00_00","text","ds_data","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.sta_body1_00_01","text","ds_data","성별");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.sta_body1_00_00_00_00","text","ds_data","age");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_cont.form.chk_cr2_1","value","ds_data","배설뇨의");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.chk_cr2_2","value","ds_data","배설뇨의");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.chk_cr1_1","value","ds_data","배설변의");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.chk_cr1_2","value","ds_data","배설변의");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.chk_room1","value","ds_data","침실사용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.chk_room2","value","ds_data","침실사용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.mae_weight","value","ds_data","체중");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.mae_height","value","ds_data","신장");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.edt_00","value","ds_data","drugtime");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_cont.form.edt_00_00","value","ds_data","혈액형");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_cont.form.edt_00_00_00","value","ds_data","종교");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_cont.form.edt_nurse1","value","ds_data","nur_time1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_cont.form.edt_nurse2","value","ds_data","nur_time2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_cont.form.edt_nurse3","value","ds_data","nur_time3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_cont.form.edt_nurse4","value","ds_data","nur_time4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_cont.form.edt_nurse5","value","ds_data","nur_time5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_cont.form.edt_nurse6","value","ds_data","nur_time6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","div_cont.form.chk_kind1","value","ds_data","meal");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","div_cont.form.chk_kind2","value","ds_data","meal");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_cont.form.chk_kind3","value","ds_data","meal");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00101_P04.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00101_P04.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00101_P04.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00101_P04
         * 화면명   	: 수급자 상태설정
         * 화면설명 	: 수급자 상태설정
         * 작성일   	: 2022-05-27
         * 작성자   	: 박한준
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
        //const fv_flag = this.parent.FLAG;
        const fv_sicode = this.parent.sicode;
        const fv_mcode = this.parent.m_code;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00101_P04";
        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "m_code", fv_mcode);

        	this.fn_search();
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        // 저장 전
        this.fn_save_pre = function()
        {
        	// 기능장애
        	var st = "";
        	for(var i=1; i<=5; i++){
        		st += this.ds_data.getColumn(0,"st"+i);
        	}
        	this.ds_data.setColumn(0,"기능장애", st);

        	// 배설보조
        	if(this.div_cont.form.chk_cr3_1.value == 1){
        		this.ds_data.setColumn(0,"배설보조", 1);
        	}else if(this.div_cont.form.chk_cr3_2.value == 2 && this.div_cont.form.chk_cr3_3.value != 3){
        		this.ds_data.setColumn(0,"배설보조", 2);
        	}else if(this.div_cont.form.chk_cr3_2.value != 2 && this.div_cont.form.chk_cr3_3.value == 3){
        		this.ds_data.setColumn(0,"배설보조", 3);
        	}else if(this.div_cont.form.chk_cr3_2.value == 2 && this.div_cont.form.chk_cr3_3.value == 3){
        		this.ds_data.setColumn(0,"배설보조", 4);
        	}else{
        		this.ds_data.setColumn(0,"배설보조", 0);
        	}

        	var nurse_time = "";

        	for(var i=1; i<=6; i++){
        		// 두자릿수 아니면 0 채움
        		//trace("length : " + this.ds_data.getColumn(0,"nur_time"+i).length);
        		if(this.ds_data.getColumn(0,"nur_time"+i).length < 2){
        			nurse_time += this.ds_data.getColumn(0,"nur_time"+i).padStart(2, '0');
        			//trace("nurse_time : " + nurse_time);
        		}else{
        			nurse_time += this.ds_data.getColumn(0,"nur_time"+i);
        		}
        	}

        	// 오른쪽에서부터 0으로 50자리 채움
        	nurse_time = nurse_time.padEnd(50,'0');
        	this.ds_data.setColumn(0,"추가시분",nurse_time);

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

        	return true;
        };


        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_data=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101_P04.DAY00101_P04_DS_DATA_S '";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	// validation
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
         	const inDs = "ds_data";
        	this.fn_save_com(svcId, inDs);
        };

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			// 데이터 세팅
        			this.fn_dataCopy();

        		} else if(strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");
        			this.fn_setReturnData(); // 리턴값 세팅

        		} else if(strSvcID == "set_import")
        		{
        			// 설정값 가져온 거 세팅
        			for(var i=1; i<=6; i++){
        				// 제공분 0 제거
        				if(this.ds_record.getColumn(0,"nur_time"+i).substr(0,1) == 0){
        					this.ds_data.setColumn(0,"nur_time"+i, this.ds_record.getColumn(0,"nur_time"+i).substr(1,1));
        				}
        			}
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };

        // 설정값 가져오기
        this.btn_set_import = function(obj,e)
        {
        	const svcId = "set_import";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_record=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101_P04.DAY00101_P04_DS_RECORD_S '";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        /***********************************************************************
         * User Functions
         ***********************************************************************/
        // 체크박스 선택
        this.mainChk_onchanged = function(obj,e)
        {
        	var num = obj.id.substr(8);

        	var prevalue = e.prevalue; // 이전값
        	var value = e.postvalue; // 변경값
        	var comp = ""; // 컴포넌트
        	var colid = ""; // 컬럼id
        	var cnt = ""; // 반복횟수

        	switch (obj.id)
        	{
        		// 식사종류
        		case "chk_kind" + num:
        				comp = "chk_kind";
        				colid = "meal"
        				cnt = 3;
        				if(value == 1){
        					this.fn_chk_we(comp, value, colid, cnt);
        					//this.fn_chk_we();
        				}else if(value == 2){
        					this.fn_chk_we(comp, value, colid, cnt);
        				}else if(value == 3){
        					this.fn_chk_we(comp, value, colid, cnt);
        				}else{
        					this.ds_data.setColumn(0,colid, e.prevalue);
        				}
        			break;
        		// 배설변의장애
        		case "chk_cr1_" + num:
        				comp = "chk_cr1_";
        				colid = "배설변의"
        				cnt = 2;
        				if(value == 1){
        					this.fn_chk_we(comp, value, colid, cnt);
        				}else if(value == 2){
        					this.fn_chk_we(comp, value, colid, cnt);
        				}else{
        					this.ds_data.setColumn(0,colid, e.prevalue);
        				}
        			break;
        		// 배설뇨의장애
        		case "chk_cr2_" + num:
        				comp = "chk_cr2_";
        				colid = "배설뇨의"
        				cnt = 2;
        				if(value == 1){
        					this.fn_chk_we(comp, value, colid, cnt);
        				}else if(value == 2){
        					this.fn_chk_we(comp, value, colid, cnt);
        				}else{
        					this.ds_data.setColumn(0,colid, e.prevalue);
        				}
        			break;
        		// 배설보조기구
        		case "chk_cr3_" + num:
        				// 인공장루
        				// 유치도뇨관 + 기저귀착용 선택가능
        				if(value == 1){
        					this.div_cont.form.chk_cr3_2.set_value(0);
        					this.div_cont.form.chk_cr3_3.set_value(0);
        				}else if(value == 2){
        					this.div_cont.form.chk_cr3_1.set_value(0);
        				}else if(value == 3){
        					this.div_cont.form.chk_cr3_1.set_value(0);
        				}
        			break;
        		// 상급침실
        		case "chk_room" + num:
        				comp = "chk_room";
        				colid = "침실사용"
        				cnt = 2;
        				if(value == 1){
        					this.fn_chk_we(comp, value, colid, cnt);
        				}else if(value == 2){
        					this.fn_chk_we(comp, value, colid, cnt);
        				}else{
        					this.ds_data.setColumn(0,colid, e.prevalue);
        				}
        			break;

        	}
        };

        //체크박스 해제 불가
        // comp : 컴포넌트, value : 변경값, colid : 변경컬럼, cnt : 반복횟수
        this.fn_chk_we = function (comp, value, colid, cnt)
        {
        	for(var i=1; i<=cnt; i++){
        		if(i != value){
        			this.div_cont.form.components[comp+i].set_value(0);
        		}
        	}
        	this.ds_data.setColumn(0,colid, value);
        };

        // 온도 스핀이벤트
        this.spn_onspin = function(obj,e)
        {
        	const idStr = obj.id.substr(4);
        	//기본값 또는 DB값
        	const prevalue = this.div_cont.form.components["mae_" + idStr].value;

        	let pm = 0;
        	if(e.up == true){ // 증가
        		pm = 1;
        	}else{ // 감소
        		pm = -1;
        	}

        	const value = parseFloat(prevalue) + pm;

        	if(value > 999 || value < 0){ // 입력값이 999이상 또는 0이하 입력안되게 설정
        		return false;
        	}

        	this.div_cont.form.components["mae_" + idStr].set_value(value);
        };

        // 온도 maskedit 변경 이벤트
        this.mae_tem_onchanged = function(obj,e)
        {
        	const idStr = obj.id.substr(4);

        	if(e.postvalue > 999 || e.postvalue < 0){ // 입력값이 999이상 또는 0이하이면 0으로 세팅
        		this.div_cont.form.components["mae_" + idStr].set_value(0);
        	}
        };


        // 방향키 위,아래 누를때
        this.mae_tem_onkeydown = function(obj,e)
        {
        	const idStr = obj.id.substr(4);
        	const prevalue = this.div_cont.form.components["mae_" + idStr].value

        	let pm = 0;
        	// 위 38, 아래 40
        	if(e.keycode == 38){
        		pm = 1;
        	}else if(e.keycode == 40){
        		pm = -1;
        	}

        	const value = parseFloat(prevalue) + pm;

        	if(value > 999 || value < 0){ // 입력값이 999이상 또는 0이하 입력안되게 설정
        		return false;
        	}

        	// 값 세팅
        	this.div_cont.form.components["mae_" + idStr].set_value(value);

        };

        // 리턴값 세팅
        this.fn_setReturnData = function()
        {
        	this.ds_return.clearData();
        	this.ds_return.copyData(this.ds_data);
        	this.close(this.ds_return.saveXML());
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 저장 버튼
        this.fn_saveBtn = function()
        {
        	this.fn_save();
        };

        // 입력, 수정용 데이터셋에 데이터 복사
        this.fn_dataCopy = function()
        {
        	trace(">> "+this.ds_data.getColumn(0,"식사종류"));
        	trace(">> "+this.ds_data.getColumn(0,"meal"));
        	// 배설보조기구 값 세팅
        	// 1:인공장루, 2:유치도뇨관, 3:기저귀착용, 4:유치도뇨관+기저귀착용
        	if(this.ds_data.getColumn(0,"배설보조") == "1"){
        		this.div_cont.form.chk_cr3_1.set_value(1);
        	}else if(this.ds_data.getColumn(0,"배설보조") == "2"){
        		this.div_cont.form.chk_cr3_2.set_value(2);
        	}else if(this.ds_data.getColumn(0,"배설보조") == "3"){
        		this.div_cont.form.chk_cr3_3.set_value(3);
        	}else if(this.ds_data.getColumn(0,"배설보조") == "4"){
        		this.div_cont.form.chk_cr3_2.set_value(2);
        		this.div_cont.form.chk_cr3_3.set_value(3);
        	}

        	// 제공분 0 제거
        	for(var i=1; i<=6; i++){
        		if(this.ds_data.getColumn(0,"nur_time"+i).substr(0,1) == 0){
        			this.ds_data.setColumn(0,"nur_time"+i, this.ds_data.getColumn(0,"nur_time"+i).substr(1,1));
        		}
        	}

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(0, 1);
        	this.ds_data.set_updatecontrol(true);
        };


        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        // 	if(Sct.Util.isEmpty(strDs)) return;
        // 	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        // 	switch(popid)
        // 	{
        // 		// 제공자1
        // 		case "employee1" :
        // 			if (objDs.getColumn(0, "DEL") != "1")
        // 			{
        // 				const name1 = nexacro.trim(objDs.getColumn(0, "c_name"));
        // 				const dutyname1 = objDs.getColumn(0, "담당직종");
        // 				const staffid1 = objDs.getColumn(0, "c_staffid");
        // 				this.ds_data.setColumn(0, "담당자01", name1);
        // 				this.ds_data.setColumn(0, "담당직종01", dutyname1);
        // 				this.ds_data.setColumn(0, "담당코드01", staffid1);
        // 				this.ds_data.setColumn(0, "VIEW_MANAGER1", name1 + "/" + dutyname1 + "/" +staffid1);
        // 			}
        // 			else
        // 			{
        // 				this.ds_data.setColumn(0, "담당자01", "");
        // 				this.ds_data.setColumn(0, "담당직종01", "");
        // 				this.ds_data.setColumn(0, "담당코드01", "");
        // 				this.ds_data.setColumn(0, "VIEW_MANAGER1", "");
        // 			}
        // 			break;
        // 	}
        }

        // 분 자릿수 체크
        this.edit_nurse_onchanged = function(obj,e)
        {
        // 	//this.div_cont.form.edt_nurse1
        // 	if(e.postvalue.length < 2){
        // 		var value = "0" + e.postvalue;
        // 	}
        // 	obj.set_value(value);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.sta_head2.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_cont.form.sta_head2_01.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.chk_ste_1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_ste_2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_ste_3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_ste_4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_ste_5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.btn_search.addEventHandler("onclick",this.btn_set_import,this);
            this.div_cont.form.sta_head2_02.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.sta_head2_01_01.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.chk_kind1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_kind2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_kind2.addEventHandler("onclick",this.div_cont_chk_kind2_onclick,this);
            this.div_cont.form.chk_kind3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.sta_head2_01_00.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.chk_cr2_1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_2.addEventHandler("onclick",this.div_cont_chk_we_2_onclick,this);
            this.div_cont.form.chk_cr2_2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.sta_head2_01_01_00.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.chk_cr1_1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_2.addEventHandler("onclick",this.div_cont_chk_we_2_onclick,this);
            this.div_cont.form.chk_cr1_2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.sta_head2_01_01_01.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.chk_cr3_1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr3_2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr3_2.addEventHandler("onclick",this.div_cont_chk_we_3_onclick,this);
            this.div_cont.form.chk_cr3_3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.sta_head2_01_01_01_00.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.sta_head2_01_01_00_00.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.sta_head2_01_00_00.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.sta_head2_01_01_01_00_00.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.chk_room1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_room2.addEventHandler("onclick",this.div_cont_chk_we_2_onclick,this);
            this.div_cont.form.chk_room2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.sta_head2_02_00.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.sta_head2_02_00_00.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.spn_weight.addEventHandler("onspin",this.spn_onspin,this);
            this.div_cont.form.spn_height.addEventHandler("onspin",this.spn_onspin,this);
            this.div_cont.form.mae_weight.addEventHandler("onchanged",this.mae_tem_onchanged,this);
            this.div_cont.form.mae_weight.addEventHandler("onkeydown",this.mae_tem_onkeydown,this);
            this.div_cont.form.mae_height.addEventHandler("onchanged",this.mae_tem_onchanged,this);
            this.div_cont.form.mae_height.addEventHandler("onkeydown",this.mae_tem_onkeydown,this);
            this.div_cont.form.sta_body1_01_01_00_01_02_00.addEventHandler("onclick",this.div_cont_sta_body1_01_01_00_01_02_00_onclick,this);
            this.div_cont.form.sta_head2_01_01_01_00_00_00.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.sta_head2_01_01_01_00_00_00_00.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.sta_head2_01_01_01_00_00_00_00_00.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.sta_head2_01_01_01_00_00_00_00_00_00.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.sta_head2_01_01_01_00_00_00_01.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.edt_nurse1.addEventHandler("onchanged",this.edit_nurse_onchanged,this);
            this.div_cont.form.edt_nurse2.addEventHandler("onchanged",this.edit_nurse_onchanged,this);
            this.div_cont.form.edt_nurse3.addEventHandler("onchanged",this.edit_nurse_onchanged,this);
            this.div_cont.form.edt_nurse4.addEventHandler("onchanged",this.edit_nurse_onchanged,this);
            this.div_cont.form.edt_nurse5.addEventHandler("onchanged",this.edit_nurse_onchanged,this);
            this.div_cont.form.edt_nurse6.addEventHandler("onchanged",this.edit_nurse_onchanged,this);
        };
        this.loadIncludeScript("DAY00101_P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
