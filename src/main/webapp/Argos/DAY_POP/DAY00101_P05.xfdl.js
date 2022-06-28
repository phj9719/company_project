(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00101_P05");
            this.set_titletext("신체보호기록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1115,690);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/><Column id=\"manager1\" type=\"STRING\" size=\"256\"/><Column id=\"manager2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"sex_gb\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"bi_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"bi_number\" type=\"STRING\" size=\"256\"/><Column id=\"bi_code\" type=\"STRING\" size=\"256\"/><Column id=\"bi_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"sex_gb\" type=\"STRING\" size=\"256\"/><Column id=\"jumin\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법1\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법2\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법3\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법4\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법5\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법6\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법7\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법8\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법9\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법10\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법11\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법12\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태1\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태2\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태3\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태4\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태5\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태6\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태7\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태8\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태9\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태10\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태11\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태12\" type=\"STRING\" size=\"256\"/><Column id=\"담당자01\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드01\" type=\"STRING\" size=\"256\"/><Column id=\"담당자02\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드02\" type=\"STRING\" size=\"256\"/><Column id=\"담당자03\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드03\" type=\"STRING\" size=\"256\"/><Column id=\"담당자04\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드04\" type=\"STRING\" size=\"256\"/><Column id=\"담당자05\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드05\" type=\"STRING\" size=\"256\"/><Column id=\"담당자06\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드06\" type=\"STRING\" size=\"256\"/><Column id=\"담당자07\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드07\" type=\"STRING\" size=\"256\"/><Column id=\"담당자08\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드08\" type=\"STRING\" size=\"256\"/><Column id=\"담당자09\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드09\" type=\"STRING\" size=\"256\"/><Column id=\"담당자10\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드10\" type=\"STRING\" size=\"256\"/><Column id=\"담당자11\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드11\" type=\"STRING\" size=\"256\"/><Column id=\"담당자12\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드12\" type=\"STRING\" size=\"256\"/><Column id=\"시작01\" type=\"STRING\" size=\"256\"/><Column id=\"종료01\" type=\"STRING\" size=\"256\"/><Column id=\"시작02\" type=\"STRING\" size=\"256\"/><Column id=\"종료02\" type=\"STRING\" size=\"256\"/><Column id=\"시작03\" type=\"STRING\" size=\"256\"/><Column id=\"종료03\" type=\"STRING\" size=\"256\"/><Column id=\"시작04\" type=\"STRING\" size=\"256\"/><Column id=\"종료04\" type=\"STRING\" size=\"256\"/><Column id=\"시작05\" type=\"STRING\" size=\"256\"/><Column id=\"종료05\" type=\"STRING\" size=\"256\"/><Column id=\"시작06\" type=\"STRING\" size=\"256\"/><Column id=\"종료06\" type=\"STRING\" size=\"256\"/><Column id=\"시작07\" type=\"STRING\" size=\"256\"/><Column id=\"종료07\" type=\"STRING\" size=\"256\"/><Column id=\"시작08\" type=\"STRING\" size=\"256\"/><Column id=\"종료08\" type=\"STRING\" size=\"256\"/><Column id=\"시작09\" type=\"STRING\" size=\"256\"/><Column id=\"종료09\" type=\"STRING\" size=\"256\"/><Column id=\"시작10\" type=\"STRING\" size=\"256\"/><Column id=\"종료10\" type=\"STRING\" size=\"256\"/><Column id=\"시작11\" type=\"STRING\" size=\"256\"/><Column id=\"종료11\" type=\"STRING\" size=\"256\"/><Column id=\"시작12\" type=\"STRING\" size=\"256\"/><Column id=\"종료12\" type=\"STRING\" size=\"256\"/><Column id=\"제재사유\" type=\"STRING\" size=\"256\"/><Column id=\"대안수단\" type=\"STRING\" size=\"256\"/><Column id=\"상담내용\" type=\"STRING\" size=\"256\"/><Column id=\"org_bi_number\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_record", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"bi_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"bi_number\" type=\"STRING\" size=\"256\"/><Column id=\"bi_code\" type=\"STRING\" size=\"256\"/><Column id=\"bi_name\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법1\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법2\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법3\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법4\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법5\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법6\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법7\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법8\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법9\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법10\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법11\" type=\"STRING\" size=\"256\"/><Column id=\"보호방법12\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태1\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태2\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태3\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태4\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태5\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태6\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태7\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태8\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태9\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태10\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태11\" type=\"STRING\" size=\"256\"/><Column id=\"수급자상태12\" type=\"STRING\" size=\"256\"/><Column id=\"시작01\" type=\"STRING\" size=\"256\"/><Column id=\"종료01\" type=\"STRING\" size=\"256\"/><Column id=\"시작02\" type=\"STRING\" size=\"256\"/><Column id=\"종료02\" type=\"STRING\" size=\"256\"/><Column id=\"시작03\" type=\"STRING\" size=\"256\"/><Column id=\"종료03\" type=\"STRING\" size=\"256\"/><Column id=\"시작04\" type=\"STRING\" size=\"256\"/><Column id=\"종료04\" type=\"STRING\" size=\"256\"/><Column id=\"시작05\" type=\"STRING\" size=\"256\"/><Column id=\"종료05\" type=\"STRING\" size=\"256\"/><Column id=\"시작06\" type=\"STRING\" size=\"256\"/><Column id=\"종료06\" type=\"STRING\" size=\"256\"/><Column id=\"시작07\" type=\"STRING\" size=\"256\"/><Column id=\"종료07\" type=\"STRING\" size=\"256\"/><Column id=\"시작08\" type=\"STRING\" size=\"256\"/><Column id=\"종료08\" type=\"STRING\" size=\"256\"/><Column id=\"시작09\" type=\"STRING\" size=\"256\"/><Column id=\"종료09\" type=\"STRING\" size=\"256\"/><Column id=\"시작10\" type=\"STRING\" size=\"256\"/><Column id=\"종료10\" type=\"STRING\" size=\"256\"/><Column id=\"시작11\" type=\"STRING\" size=\"256\"/><Column id=\"종료11\" type=\"STRING\" size=\"256\"/><Column id=\"시작12\" type=\"STRING\" size=\"256\"/><Column id=\"종료12\" type=\"STRING\" size=\"256\"/><Column id=\"제재사유\" type=\"STRING\" size=\"256\"/><Column id=\"대안수단\" type=\"STRING\" size=\"256\"/><Column id=\"상담내용\" type=\"STRING\" size=\"256\"/><Column id=\"org_bi_number\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","10",null,null,"10","6",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","70","25","75",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_no","1","0","58","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("기록번호 : ");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_no_value","64","0","70","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("00000000");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01","0","36","244","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01","662","36","174","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_01","662","36","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("변경일");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00","835","36","259","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_01_00","835","36","95","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager","839","40","87","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            obj.set_text("보호담당");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager_value1","937","39","153","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            obj.set_text("요양보호사 / 20210000");
            obj.set_textAlign("left");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_date","745","40","90","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_border("0px none");
            obj.set_font("500 10pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("left");
            obj.set_value("20220523");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00","0","107","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","36","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00","90","40","55","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_padding("0px");
            obj.set_text("강옥주님");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00","153","40","10","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_padding("0px");
            obj.set_text("A");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","176","40","55","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_padding("0px");
            obj.set_text("A103002");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00","243","36","200","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00","243","36","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_text("성별·생일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01_01","333","40","20","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_padding("0px");
            obj.set_text("여");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00","358","40","60","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_padding("0px");
            obj.set_text("35-08-28");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00","443","36","220","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2","442","36","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_text("생활실");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_02","534","40","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_padding("0px");
            obj.set_text("생활실입니다");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04","261","75","200","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("보호방법");
            obj.set_padding("0px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00","460","75","300","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("보호 후 수급자 상태");
            obj.set_padding("0px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01","759","75","255","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("담당자명");
            obj.set_padding("0px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager08","759","107","255","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00","1013","75","81","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("지움");
            obj.set_padding("0px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00","460","107","300","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager1","939","111","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("44");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00","1013","107","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_eraser1","1018","111","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("46");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"0","69","25","1",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_record","825","0","120","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("전날기록조회");
            obj.set_cssclass("btn_search");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_01","0","75","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("횟수");
            obj.set_padding("0px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_01_00","39","75","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("보호시작");
            obj.set_padding("0px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_01_01","113","75","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("경과시간");
            obj.set_padding("0px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_01_02","187","75","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("보호종료");
            obj.set_padding("0px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_05","39","107","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_06","113","107","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            obj.set_text("분");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_07","187","107","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_08","261","107","200","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_stime1","44","111","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("34");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            obj.set_tabstop("false");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min1","118","111","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("36");
            obj.set_textAlign("center");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont1","266","111","190","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("40");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont1_00","465","111","290","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("42");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_00","0","139","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager08_00","759","139","255","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_00","460","139","300","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager2","939","143","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("59");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_00","1013","139","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_eraser2","1018","143","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("61");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_05_00","39","139","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_06_00","113","139","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            obj.set_text("분");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_07_00","187","139","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_08_00","261","139","200","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_stime2","44","143","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("49");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min2","118","143","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("51");
            obj.set_textAlign("center");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont2","266","143","190","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("55");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont1_00_00","465","143","290","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("57");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_01","0","171","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager08_01","759","171","255","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_01","460","171","300","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager3","939","175","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("74");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_01","1013","171","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_eraser3","1018","175","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("76");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_05_01","39","171","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_06_01","113","171","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            obj.set_text("분");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_07_01","187","171","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_08_01","261","171","200","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_stime3","44","175","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("64");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min3","118","175","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("66");
            obj.set_textAlign("center");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont3","266","175","190","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("70");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont1_00_01","465","175","290","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("72");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_02","0","203","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("4");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager08_02","759","203","255","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_02","460","203","300","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager4","939","207","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("89");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_02","1013","203","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_eraser4","1018","207","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("91");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_05_02","39","203","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_06_02","113","203","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            obj.set_text("분");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_07_02","187","203","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_08_02","261","203","200","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_stime4","44","207","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("79");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min4","118","207","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("81");
            obj.set_textAlign("center");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont4","266","207","190","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("85");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont1_00_02","465","207","290","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("87");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_03","0","235","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("5");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager08_03","759","235","255","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_03","460","235","300","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager5","939","239","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("104");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_03","1013","235","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_eraser5","1018","239","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("106");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_05_03","39","235","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_06_03","113","235","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            obj.set_text("분");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_07_03","187","235","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_08_03","261","235","200","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_stime5","44","239","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("94");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min5","118","239","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("96");
            obj.set_textAlign("center");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont5","266","239","190","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("100");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont1_00_03","465","239","290","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("102");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_09","0","267","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("6");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager08_04","759","267","255","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("117");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_04","460","267","300","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager6","939","271","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("118");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_04","1013","267","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_eraser6","1018","271","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("121");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_05_04","39","267","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_06_04","113","267","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("109");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            obj.set_text("분");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_07_04","187","267","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_08_04","261","267","200","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_stime6","44","271","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("108");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min6","118","271","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("110");
            obj.set_textAlign("center");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont6","266","271","190","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("114");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont1_00_04","465","271","290","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("116");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_00_00","0","299","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("122");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("7");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager08_00_00","759","299","255","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("133");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_00_00","460","299","300","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager7","939","303","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("134");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_00_00","1013","299","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_eraser7","1018","303","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("136");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_05_00_00","39","299","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("123");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_06_00_00","113","299","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("125");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            obj.set_text("분");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_07_00_00","187","299","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("127");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_08_00_00","261","299","200","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_stime7","44","303","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("124");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min7","118","303","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("126");
            obj.set_textAlign("center");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont7","266","303","190","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("130");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont1_00_00_00","465","303","290","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("132");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_01_00","0","331","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("8");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager08_01_00","759","331","255","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("148");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_01_00","460","331","300","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("146");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager8","939","335","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("149");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_01_00","1013","331","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("150");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_eraser8","1018","335","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("151");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_05_01_00","39","331","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("138");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_06_01_00","113","331","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            obj.set_text("분");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_07_01_00","187","331","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("142");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_08_01_00","261","331","200","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("144");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_stime8","44","335","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("139");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min8","118","335","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("141");
            obj.set_textAlign("center");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont8","266","335","190","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("145");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont1_00_01_00","465","335","290","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("147");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_02_00","0","363","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("152");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("9");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager08_02_00","759","363","255","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("163");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_02_00","460","363","300","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("161");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager9","939","367","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("164");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_02_00","1013","363","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("165");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_eraser9","1018","367","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("166");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_05_02_00","39","363","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_06_02_00","113","363","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("155");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            obj.set_text("분");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_07_02_00","187","363","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("157");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_08_02_00","261","363","200","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("159");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_stime9","44","367","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("154");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min9","118","367","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("156");
            obj.set_textAlign("center");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont9","266","367","190","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("160");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont1_00_02_00","465","367","290","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("162");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_03_00","0","395","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("167");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("10");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager08_03_00","759","395","255","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("178");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_03_00","460","395","300","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("176");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager10","939","399","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("179");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_03_00","1013","395","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("180");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_eraser10","1018","399","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("181");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_05_03_00","39","395","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("168");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_06_03_00","113","395","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("170");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            obj.set_text("분");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_07_03_00","187","395","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("172");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_08_03_00","261","395","200","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("174");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_stime10","44","399","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("169");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min10","118","399","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("171");
            obj.set_textAlign("center");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont10","266","399","190","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("175");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont1_00_03_00","465","399","290","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("177");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_02_00_00","0","427","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("182");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("11");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager08_02_00_00","759","427","255","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("193");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_02_00_00","460","427","300","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("191");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager11","939","431","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("194");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_02_00_00","1013","427","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("195");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_eraser11","1018","431","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("196");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_05_02_00_00","39","427","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("183");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_06_02_00_00","113","427","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("185");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            obj.set_text("분");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_07_02_00_00","187","427","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("187");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_08_02_00_00","261","427","200","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("189");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_stime11","44","431","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("184");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min11","118","431","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("186");
            obj.set_textAlign("center");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont11","266","431","190","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("190");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont1_00_02_00_00","465","431","290","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("192");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_03_00_00","0","459","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("197");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("12");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager08_03_00_00","759","459","255","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("208");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_03_00_00","460","459","300","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("206");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager12","939","463","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("209");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_03_00_00","1013","459","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("210");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_eraser12","1018","463","70","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("211");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_05_03_00_00","39","459","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("198");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_06_03_00_00","113","459","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("200");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            obj.set_text("분");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_07_03_00_00","187","459","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("202");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_08_03_00_00","261","459","200","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("204");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_stime12","44","463","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("199");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min12","118","463","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("201");
            obj.set_textAlign("center");
            obj.set_maxlength("3");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont12","266","463","190","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("205");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont1_00_03_00_00","465","463","290","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("207");
            obj.set_autoselect("true");
            obj.set_maxlength("40");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_03_00_00_00","0","491","1093","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("212");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("▲ 보호시작, 종료시간, 보호방법, 담당자를 표시해야 합니다.");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_03_00_00_00_00","0","523","1093","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("213");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_03_00_00_00_01","0","555","1093","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("216");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_03_00_00_00_02","0","587","1093","80",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("219");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_01_03","0","523","188","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("214");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("보호사유");
            obj.set_padding("0px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_01_03_00","0","555","188","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("217");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("대안수단");
            obj.set_padding("0px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_01_03_01","0","587","188","80",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("220");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("상담내용\r\n(절박성,일시성에 반함)");
            obj.set_padding("0px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont1_04_00_00_00","193","527","895","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("215");
            obj.set_autoselect("true");
            obj.set_maxlength("120");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_cont1_04_00_00_00_00","193","559","895","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("218");
            obj.set_autoselect("true");
            obj.set_maxlength("120");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_00","193","592","895","70",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("221");
            obj.set_maxlength("2000");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_etime1","192","111","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("38");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            obj.set_readonly("true");
            obj.set_border("0px none");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_etime2","192","143","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("53");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            obj.set_readonly("true");
            obj.set_border("0px none");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_etime3","192","175","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("68");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            obj.set_readonly("true");
            obj.set_border("0px none");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_etime4","192","207","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("83");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            obj.set_readonly("true");
            obj.set_border("0px none");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_etime5","192","239","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("98");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            obj.set_readonly("true");
            obj.set_border("0px none");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_etime6","192","271","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("112");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            obj.set_readonly("true");
            obj.set_border("0px none");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_etime7","192","303","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("128");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            obj.set_readonly("true");
            obj.set_border("0px none");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_etime8","192","335","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("143");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            obj.set_readonly("true");
            obj.set_border("0px none");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_etime9","192","367","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("158");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            obj.set_readonly("true");
            obj.set_border("0px none");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_etime10","192","399","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("173");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            obj.set_readonly("true");
            obj.set_border("0px none");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_etime11","192","431","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("188");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            obj.set_readonly("true");
            obj.set_border("0px none");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_etime12","192","463","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("203");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_value("0000");
            obj.set_readonly("true");
            obj.set_border("0px none");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_time_from","1192","143","270","257",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_from_0100","3","115","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("0");
            obj.set_text("01:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_0600","56","87","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("1");
            obj.set_text("06:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_fcancle","3","3",null,"25","3",null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("2");
            obj.set_text("닫기 (close)");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_fdel","215","31",null,"25","3",null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("3");
            obj.set_text("지움");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_00","215","87","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("4");
            obj.set_text("  :00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_50","215","227","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("5");
            obj.set_text("  :50");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_hour","3","59","209","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("6");
            obj.set_text("보호시작시간");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_minute","215","59","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("7");
            obj.set_text("시작분");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_0200","3","143","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("8");
            obj.set_text("02:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_0700","56","115","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("9");
            obj.set_text("07:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_0300","3","171","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("10");
            obj.set_text("03:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_0800","56","143","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("11");
            obj.set_text("08:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_10","215","115","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("12");
            obj.set_text("  :10");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_20","215","143","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("13");
            obj.set_text("  :20");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_0400","3","199","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("14");
            obj.set_text("04:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_0900","56","171","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("15");
            obj.set_text("09:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_0500","3","227","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("16");
            obj.set_text("05:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1000","56","199","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("17");
            obj.set_text("10:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_30","215","171","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("18");
            obj.set_text("  :30");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_40","215","199","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("19");
            obj.set_text("  :40");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_0000","3","87","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("20");
            obj.set_text("00:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1100","56","227","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("21");
            obj.set_text("11:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_pretime","3","31","209","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("22");
            obj.set_text("시간 연속입력");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1300","109","115","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("23");
            obj.set_text("13:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1800","162","87","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("24");
            obj.set_text("18:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1400","109","143","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("25");
            obj.set_text("14:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1900","162","115","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("26");
            obj.set_text("19:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1500","109","171","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("27");
            obj.set_text("15:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_2000","162","143","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("28");
            obj.set_text("20:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1600","109","199","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("29");
            obj.set_text("16:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_2100","162","171","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("30");
            obj.set_text("21:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1700","109","227","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("31");
            obj.set_text("17:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_2200","162","199","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("32");
            obj.set_text("22:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1200","109","87","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("33");
            obj.set_text("12:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_2300","162","227","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("34");
            obj.set_text("23:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Div("div_time_to","1475","143","111","229",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tcancle","3","3",null,"25","3",null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("0");
            obj.set_text("닫기 (close)");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_10","3","31","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("1");
            obj.set_text("10분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_20","3","59","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("2");
            obj.set_text("20분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_30","3","87","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("3");
            obj.set_text("30분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_40","3","115","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("4");
            obj.set_text("40분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_50","3","143","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("5");
            obj.set_text("50분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_60","3","171","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("6");
            obj.set_text("1시간");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_80","56","31","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("7");
            obj.set_text("80분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_70","3","199","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("8");
            obj.set_text("70분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_90","56","59","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("9");
            obj.set_text("90분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_100","56","87","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("10");
            obj.set_text("100분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_110","56","115","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("11");
            obj.set_text("110분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_120","56","143","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("12");
            obj.set_text("2시간");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_150","56","171","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("13");
            obj.set_text("150분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_180","56","199","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("14");
            obj.set_text("3시간");
            this.div_time_to.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1115,690,this,function(p){});
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

            obj = new BindItem("item19","div_cont.form.sta_no_value","text","ds_data","bi_number");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.mae_date","value","ds_data","bi_nalja");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.sta_manager_value1","text","ds_data","VIEW_MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.sta_body1_00","text","ds_data","bi_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_right.form.sta_body1_00_00_00","text","ds_data","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_right.form.sta_body1_00_01","text","ds_data","성별");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_right.form.sta_body1_00_00_00_00","text","ds_data","jumin");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.sta_body1_00_00_01_00_00_01_00","text","ds_data","m_regist");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.sta_body1_00_02","text","ds_data","m_roomname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.div_right.form.sta_body1_00_02_00","text","ds_data","m_enday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.div_right.form.sta_body1_00_02_00_00","text","ds_data","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.div_right.form.sta_body1_00_02_00_00_00","text","ds_data","grade_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.div_right.form.sta_body1_00_00","text","ds_data","k_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.sta_body1_00_00_00","text","ds_data","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.sta_body1_00_00","text","ds_data","bi_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.sta_body1_00_00_00_00","text","ds_data","jumin");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.sta_body1_00_02","text","ds_data","m_roomname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_cont.form.sta_body1_00_01_01","text","ds_data","sex_gb");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","div_cont.form.sta_manager08","text","ds_data","manager1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.edt_min08_00_00_00","value","ds_data","emin9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.edt_min08_00_00_00_00","value","ds_data","emin10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.edt_min08_00_00_00_01","value","ds_data","emin11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.edt_min08_00_00_00_02","value","ds_data","emin12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.edt_min08_00_00_00_03","value","ds_data","emin13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.edt_min08_00_00_00_04","value","ds_data","emin14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.edt_min08_00_00_00_05","value","ds_data","emin15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.edt_min08_00_00_00_06","value","ds_data","emin16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.edt_min08_00_00_00_07","value","ds_data","emin17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.edt_min08_00_00_00_08","value","ds_data","emin18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_cont.form.edt_min08_00_00_00_09","value","ds_data","emin19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.sta_manager08_00","text","ds_data","manager2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_cont.form.sta_manager08_01","text","ds_data","manager3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_cont.form.sta_manager08_02","text","ds_data","manager4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_cont.form.sta_manager08_03","text","ds_data","manager5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_cont.form.sta_manager08_04","text","ds_data","manager6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_cont.form.sta_manager08_00_00","text","ds_data","manager7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_cont.form.sta_manager08_01_00","text","ds_data","manager8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_cont.form.sta_manager08_02_00","text","ds_data","manager9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_cont.form.sta_manager08_03_00","text","ds_data","manager10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_cont.form.sta_manager08_02_00_00","text","ds_data","manager11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","div_cont.form.sta_manager08_03_00_00","text","ds_data","manager12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","div_cont.form.edt_cont1","value","ds_data","보호방법1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_cont.form.edt_cont2","value","ds_data","보호방법2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_cont.form.edt_cont3","value","ds_data","보호방법3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_cont.form.edt_cont4","value","ds_data","보호방법4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_cont.form.edt_cont5","value","ds_data","보호방법5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","div_cont.form.edt_cont6","value","ds_data","보호방법6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","div_cont.form.edt_cont7","value","ds_data","보호방법7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","div_cont.form.edt_cont8","value","ds_data","보호방법8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","div_cont.form.edt_cont9","value","ds_data","보호방법9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","div_cont.form.edt_cont10","value","ds_data","보호방법10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","div_cont.form.edt_cont11","value","ds_data","보호방법11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","div_cont.form.edt_cont12","value","ds_data","보호방법12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","div_cont.form.edt_cont1_04_00_00_00","value","ds_data","제재사유");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","div_cont.form.edt_cont1_04_00_00_00_00","value","ds_data","대안수단");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","div_cont.form.txt_00","value","ds_data","상담내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","div_cont.form.edt_cont1_00","value","ds_data","수급자상태1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","div_cont.form.edt_cont1_00_00","value","ds_data","수급자상태2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","div_cont.form.edt_cont1_00_01","value","ds_data","수급자상태3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","div_cont.form.edt_cont1_00_02","value","ds_data","수급자상태4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","div_cont.form.edt_cont1_00_03","value","ds_data","수급자상태5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","div_cont.form.edt_cont1_00_04","value","ds_data","수급자상태6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","div_cont.form.edt_cont1_00_00_00","value","ds_data","수급자상태7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","div_cont.form.edt_cont1_00_01_00","value","ds_data","수급자상태8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","div_cont.form.edt_cont1_00_02_00","value","ds_data","수급자상태9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","div_cont.form.edt_cont1_00_03_00","value","ds_data","수급자상태10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","div_cont.form.edt_cont1_00_02_00_00","value","ds_data","수급자상태11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","div_cont.form.edt_cont1_00_03_00_00","value","ds_data","수급자상태12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","div_cont.form.mae_stime1","value","ds_data","시작01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","div_cont.form.mae_stime2","value","ds_data","시작02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","div_cont.form.mae_stime3","value","ds_data","시작03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","div_cont.form.mae_stime4","value","ds_data","시작04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","div_cont.form.mae_stime5","value","ds_data","시작05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","div_cont.form.mae_stime6","value","ds_data","시작06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","div_cont.form.mae_stime7","value","ds_data","시작07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","div_cont.form.mae_stime8","value","ds_data","시작08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","div_cont.form.mae_stime9","value","ds_data","시작09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","div_cont.form.mae_stime10","value","ds_data","시작10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","div_cont.form.mae_stime11","value","ds_data","시작11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","div_cont.form.mae_stime12","value","ds_data","시작12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","div_cont.form.sta_cro1_00_07","text","ds_data","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item137","div_cont.form.mae_etime1","value","ds_data","종료01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item138","div_cont.form.mae_etime2","value","ds_data","종료02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","div_cont.form.mae_etime3","value","ds_data","종료03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","div_cont.form.mae_etime4","value","ds_data","종료04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item116","div_cont.form.mae_etime5","value","ds_data","종료05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item117","div_cont.form.mae_etime6","value","ds_data","종료06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item118","div_cont.form.mae_etime7","value","ds_data","종료07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item119","div_cont.form.mae_etime8","value","ds_data","종료08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item120","div_cont.form.mae_etime9","value","ds_data","종료09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item121","div_cont.form.mae_etime10","value","ds_data","종료10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item122","div_cont.form.mae_etime11","value","ds_data","종료11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item123","div_cont.form.mae_etime12","value","ds_data","종료12");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00101_P05.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00101_P05.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00101_P05.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00101_P05
         * 화면명   	: 신체보호기록
         * 화면설명 	: 신체보호기록 저장,삭제
         * 작성일   	: 2022-05-30
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
        const fv_date = this.parent.date;
        const fv_mcode = this.parent.mcode;
        const fv_name = this.parent.mname;
        const fv_mgroup = this.parent.mgroup;
        const fv_sexgb = this.parent.sexgb;
        const fv_mjumin = this.parent.jumin;
        const fv_mroomname = this.parent.mroomname;

        var fv_minclick = 0; // 분 클릭 횟수
        var fv_houreventid = ""; // 시작시간 컴포넌트 id
        var fv_mineventid = ""; // 분 컴포넌트 id
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00101_P05";

        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "date", fv_date);
        	this.ds_search.setColumn(0, "m_code", fv_mcode);
        	this.ds_search.setColumn(0, "m_name", fv_name);
        	this.ds_search.setColumn(0, "m_group", fv_mgroup);
        	this.ds_search.setColumn(0, "sex_gb", fv_sexgb);
        	this.ds_search.setColumn(0, "m_jumin", fv_mjumin);
        	this.ds_search.setColumn(0, "m_roomname", fv_mroomname);

        	this.fn_search();

        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        // 저장 전
        this.fn_save_pre = function()
        {
        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"bi_number"))){ // 기록번호 없을시 rowtype 2(추가행)
        		this.ds_data.set_updatecontrol(false);
        		this.ds_data.setRowType(0,2);
        		this.ds_data.set_updatecontrol(true);
        	}

        	return true;
        }

        // 삭제 전 validation
        this.fn_delete_pre = function()
        {
        	// 기록번호 없을 시
        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0,"bi_number")))
        	{
        		this.alert("삭제할 항목이 없습니다.");
        		return false;
        	}

        	if (!this.confirm("삭제 하시겠습니까?"))
        		return false;

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(0, Dataset.ROWTYPE_DELETE);
        	this.ds_data.set_updatecontrol(true);

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
        	const inDatasets = "input1=ds_search ";
        	const outDatasets = "ds_data=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101_P05.DAY00101_P05_DS_DATA_S '";
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

        // 삭제
        this.fn_delete = function()
        {
        	// validation
        	if (!this.fn_delete_pre()) return;

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_data:U";
        	const outDatasets = "";
        	const argument = "method=delete "
        				   + "sqlId=DAY00101_P05.DAY00101_P05_DS_DATA_D ";

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
        			// 데이터 세팅
        			this.fn_dataCopy();

        		} else if(strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");
         			this.fn_setReturnData("save");

        		} else if(strSvcID == "delete") // 전날 요양일지 조회
        		{
        			this.alert("삭제되었습니다.");
         			this.fn_setReturnData("delete");

        		} else if(strSvcID == "record") // 전날기록 조회
        		{
        			if(this.ds_record.rowcount > 0){
        				// 전날기록 세팅
        				var stime = "";
        				var etime = "";
        				this.ds_data.setColumn(0,"제재사유",this.ds_record.getColumn(0,"제재사유"));
        				this.ds_data.setColumn(0,"대안수단",this.ds_record.getColumn(0,"대안수단"));
        				this.ds_data.setColumn(0,"상담내용",this.ds_record.getColumn(0,"상담내용"));
        				for(var i=1; i<=12; i++){
        					this.ds_data.setColumn(0,"보호방법"+i,this.ds_record.getColumn(0,"보호방법"+i));
        					this.ds_data.setColumn(0,"수급자상태"+i,this.ds_record.getColumn(0,"수급자상태"+i));
        					if(i<10){
        						this.ds_data.setColumn(0,"시작0"+i,this.ds_record.getColumn(0,"시작0"+i));
        						this.ds_data.setColumn(0,"종료0"+i,this.ds_record.getColumn(0,"종료0"+i));
        						stime = this.ds_data.getColumn(0,"시작0"+i).trim();
        						etime = this.ds_data.getColumn(0,"종료0"+i).trim();
        					}else{
        						this.ds_data.setColumn(0,"시작"+i,this.ds_record.getColumn(0,"시작"+i));
        						this.ds_data.setColumn(0,"종료"+i,this.ds_record.getColumn(0,"종료"+i));
        						stime = this.ds_data.getColumn(0,"시작"+i).trim();
        						etime = this.ds_data.getColumn(0,"종료"+i).trim();
        					}

        					// 경과시간 세팅
        					this.fn_settimeDiff(stime, etime, i);
        				}

        			}
        		}

        	}
        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };

        //전날일지조회
        this.btn_record = function(obj,e)
        {
        	// 시간팝업 닫기
        	this.fn_div_time_visible();

        	const svcId = "record";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_data ";
        	const outDatasets = "ds_record=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101_P05.DAY00101_P05_DS_RECORD_S '";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        /***********************************************************************
         * User Functions
         ***********************************************************************/
        /* 함수 명 : fn_timeDiff
         * 시간 차이 구하기
         * 입력 : 	time1	비교 시작일자 ex)19901010115000
         *			time2	비교 종료일자
        			type    hhmm 시간,분, mm 분
         * 반환 :  타입에 따라 반환
         */
        this.fn_timeDiff = function(time1, time2, type) {
        	// 문자열 날짜를 Date타입으로 변환
        	var date1 = Sct.Util.stringToDate(time1);
        	var date2 = Sct.Util.stringToDate(time2);

        	// 리턴값 변수
        	var returnValue = "";
        	// 두 날짜의 간격을 구함(초단위)
        	var diff = (date2 - date1) / 1000;
        	// 분 구하기
        	var mm = diff / 60;

        	// 간격 값을 시간 추출
        	var hour = diff / 3600;
        	// 시간의 자리수가 1자리일때 앞에 0 붙이기
        	if(0 <= hour && hour < 10) hour = "0" + Math.floor(hour);
        	// 시간이 음수일때 000으로
        	else if(hour < 0) hour = "00";
        	else hour = Math.floor(hour);

        	//간격 값에서 분 추출
        	var minute = (diff % 3600) / 60;
        	if(0 <= minute && minute < 10) minute = "0" + Math.floor(minute);
        	else if(minute < 0) minute = "00";
        	else minute = Math.floor(minute);

        	// 간격 값에서 초 추출
        	var second = (diff % 3600) % 60;
        	if(0 <= second && second < 10) second = "0" + Math.floor(second);
        	else if(second < 0) second = "00";
        	else second = Math.floor(second);

        	// 간격 값이 음수일때
        	if(diff <= 0) diffTime = "";

        	// HH:MM 형식
        	if(type == "hhmm"){
        		returnValue = hour + ":" + minute;
        	}
        	// 분 형식
        	if(type == "mm"){
        		returnValue = mm;
        	}

        	return returnValue;
        };

        // stime : 시작시간, etime : 종료시간, i : 반복횟수
        this.fn_settimeDiff = function (stime, etime, i)
        {
        	// 현재날짜+1일
        	var d = new Date();
        	d.setDate(d.getDate() + 1);
        	var s = d.getFullYear()
        		  + ((d.getMonth() + 1) + "").padLeft(2, '0')
        		  + (d.getDate() + "").padLeft(2, '0');

        	// 보호시작, 보호종료 시간이 존재하면 경과시간 세팅
        	if(!Sct.Util.isEmpty(stime) && !Sct.Util.isEmpty(etime)){
        		if(stime > etime){ // 종료시간이 시작시간 보다 작으면
        			sFullTime = Sct.Util.getToday() + stime + "00";
        			eFullTime = s + etime + "00"; // 현재날짜+1일로 비교 계산
        			diffTime = this.fn_timeDiff(sFullTime, eFullTime, "mm");
        		}else{
        			sFullTime = Sct.Util.getToday() + stime + "00";
        			eFullTime = Sct.Util.getToday() + etime + "00";
        			diffTime = this.fn_timeDiff(sFullTime, eFullTime, "mm");
        		}
        		// 비교시간 세팅
        		this.div_cont.form.components["edt_min"+i].set_value(diffTime);
        	}else{ // 빈값 세팅
        		this.div_cont.form.components["edt_min"+i].set_value("");
        	}
        };

        // phour : 시간, pmin : 분, padd : 선택한 분, i : 선택컴포넌트id.substr
        this.fn_minAdd = function (phour, pmin, padd, i)
        {
        	//기준일 2022-1-1 변경시간
        	var tDate = new Date(2022,1,1,parseInt(phour),parseInt(pmin));
        	// 분 더하기
        	if(Sct.Util.isEmpty(padd)) padd = 0;
        	tDate.setMinutes(tDate.getMinutes()+parseInt(padd));

        	// 시간, 분 스트링으로 변환
        	var tHours = tDate.getHours() + "";
        	var tMinutes = tDate.getMinutes() + "";

        	// 2자리 0 채우기
        	var hour = tHours.padStart(2,'0');
        	var min = tMinutes.padStart(2,'0');

        	// 보호시작시간이 00시가 아니고 보호종료시간이 00이면 시간을 24로 세팅
        	if(phour != "00" && hour == "00"){
        		hour = "24";
        	}
        	//보호종료시간 세팅
        	if(i < 10){
        		this.ds_data.setColumn(0,"종료0"+i, hour+min);
        	}else{
        		this.ds_data.setColumn(0,"종료"+i, hour+min);
        	}
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };

        // 저장 버튼
        this.fn_saveBtn = function()
        {
        	// 시간팝업 닫기
        	this.fn_div_time_visible();

        	this.fn_save();
        };

        // 삭제 버튼
        this.fn_deleteBtn = function()
        {
        	// 시간팝업 닫기
        	this.fn_div_time_visible();

        	this.fn_delete();
        };

        // 작성자 팝업
        this.btn_manager_onclick = function(obj,e)
        {
        	// 시간팝업 닫기
        	this.fn_div_time_visible();

        	if(obj.id == "btn_manager"){ // 변경자
        		var popid = "employee";
        	}
        	const param = {
        			SICODE : fv_sicode
        		,	DATE : fv_date
        	};

        	Sct.popup(this, popid, 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 입력, 수정용 데이터셋에 데이터 복사
        this.fn_dataCopy = function()
        {
        	// 기록번호
        	var binum = this.ds_data.getColumn(0,"bi_number");

        	//보호담당 로그인한 사람
        	var name = nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name"));
        	var id = nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid");

        	// 기록번호 존재
        	if(!Sct.Util.isEmpty(binum)){
        		this.ds_data.setColumn(0,"m_group",fv_mgroup);
        		this.ds_data.setColumn(0,"sex_gb", fv_sexgb);
        		this.ds_data.setColumn(0,"jumin", fv_mjumin);
        		this.ds_data.setColumn(0,"m_roomname", fv_mroomname);
        		//컬럼추가
        		this.ds_data.addColumn("c_name","STRING",256);
        		this.ds_data.addColumn("c_staffid","STRING",256);
        		this.ds_data.setColumn(0,"c_name", name);
        		this.ds_data.setColumn(0,"c_staffid", id);
        		var manager = name + "/"+ id;
        		this.ds_data.setColumn(0, "VIEW_MANAGER", manager);

        		// 담당자명, 시간 세팅
        		for(var i=1; i<=12; i++){
        			var name1 = "";
        			var code1 = "";
        			var stime = ""; // 시작시간
        			var etime = ""; // 종료시간
        			var sFullTime = ""; // 시작시간 풀타임
        			var eFullTime = ""; // 종료시간 풀타임
        			var diffTime = ""; // 비교시간
        			this.ds_data.addColumn("manager"+i,"STRING",256);
        			if(i<10){
        				name1 = this.ds_data.getColumn(0,"담당자0"+i).trim();
        				code1 = this.ds_data.getColumn(0,"담당코드0"+i);
        				if(!Sct.Util.isEmpty(name1)){ // 담당자가 빈값이 아니면 변경자 세팅
        					this.ds_data.setColumn(0,"manager"+i,name1 + "/" + code1);
        				}

        				stime = this.ds_data.getColumn(0,"시작0"+i).trim();
        				etime = this.ds_data.getColumn(0,"종료0"+i).trim();


        			}else{
        				name1 = this.ds_data.getColumn(0,"담당자"+i).trim();
        				code1 = this.ds_data.getColumn(0,"담당코드"+i);
        				if(!Sct.Util.isEmpty(name1)){ // 담당자가 빈값이 아니면 변경자 세팅
        					this.ds_data.setColumn(0,"manager"+i,name1 + "/" + code1);
        				}

         				stime = this.ds_data.getColumn(0,"시작"+i).trim();
         				etime = this.ds_data.getColumn(0,"종료"+i).trim();
        			}

        			// 경과시간 세팅
        			this.fn_settimeDiff(stime, etime, i);
        		}

         	}else{ // 새로작성
        		var aRow = this.ds_data.addRow();
        		this.ds_data.setColumn(aRow,"sicode", fv_sicode);
        		this.ds_data.setColumn(aRow,"bi_nalja", fv_date);
        		this.ds_data.setColumn(aRow,"bi_code", fv_mcode);
        		this.ds_data.setColumn(aRow,"bi_name", fv_name);
        		this.ds_data.setColumn(aRow,"m_group",fv_mgroup);
        		this.ds_data.setColumn(aRow,"sex_gb", fv_sexgb);
        		this.ds_data.setColumn(aRow,"jumin", fv_mjumin);
        		this.ds_data.setColumn(aRow,"m_roomname", fv_mroomname);

        		this.ds_data.addColumn("c_name","STRING",256);
        		this.ds_data.addColumn("c_staffid","STRING",256);
        		this.ds_data.setColumn(aRow,"c_name", name);
        		this.ds_data.setColumn(aRow,"c_staffid", id);
        		var manager = name + "/"+ id;
        		this.ds_data.setColumn(aRow, "VIEW_MANAGER", manager);

        		// 빈값 세팅
        		this.ds_data.setColumn(0,"제재사유","");
        		this.ds_data.setColumn(0,"대안수단","");
        		this.ds_data.setColumn(0,"상담내용","");
        		for(var i=1; i<=12; i++){
        			this.ds_data.addColumn("manager"+i,"STRING",256);
        			this.ds_data.setColumn(0,"manager"+i,"");
        			this.ds_data.setColumn(0,"보호방법"+i,"");
        			this.ds_data.setColumn(0,"수급자상태"+i,"");
        			if(i<10){
        				this.ds_data.setColumn(0,"담당자0"+i,"");
        				this.ds_data.setColumn(0,"담당코드0"+i,"");
        				this.ds_data.setColumn(0,"시작0"+i,"");
        				this.ds_data.setColumn(0,"종료0"+i,"");
        			}else{
        				this.ds_data.setColumn(0,"담당자"+i,"");
        				this.ds_data.setColumn(0,"담당코드"+i,"");
        				this.ds_data.setColumn(0,"시작"+i,"");
        				this.ds_data.setColumn(0,"종료"+i,"");
        			}
        		}
        	}

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(0, 1);
        	this.ds_data.set_updatecontrol(true);
        };


        // 리턴값 세팅
        this.fn_setReturnData = function(type)
        {
        	this.ds_return.clearData();

        	this.close(this.ds_return.saveXML());
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);

        	switch(popid)
        	{
        		// 관찰자1
        		case "employee" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid = objDs.getColumn(0, "c_staffid");
        				if(!Sct.Util.isEmpty(name)){
        					this.ds_data.setColumn(0,"c_name", name);
        					this.ds_data.setColumn(0,"c_staffid", staffid);
        					this.ds_data.setColumn(0, "VIEW_MANAGER", name + "/" + staffid);
        				}
        			}
        			else
        			{
        				this.ds_data.setColumn(0,"c_name", "");
        				this.ds_data.setColumn(0,"c_staffid", "");
        				this.ds_data.setColumn(0, "VIEW_MANAGER", "");
        			}
        			break;

        	}
        }


        // 관찰자 지움, 전체지움
        this.btn_del = function(obj,e)
        {
        	// 시간팝업 닫기
        	this.fn_div_time_visible();

        	var num = obj.id.substr(10);

         	switch(obj.id) {
        		case "btn_eraser" + num : // 횟수별 지움
        			if(num <10){
        				this.ds_data.setColumn(0,"시작0" + num, "");
        				this.ds_data.setColumn(0,"종료0" + num, "");
        				this.ds_data.setColumn(0,"담당자0" + num, "");
        				this.ds_data.setColumn(0,"담당자코드0" + num, "");

        			}else{
        				this.ds_data.setColumn(0,"시작" + num, "");
        				this.ds_data.setColumn(0,"종료" + num, "");
        				this.ds_data.setColumn(0,"담당자" + num, "");
        				this.ds_data.setColumn(0,"담당자코드" + num, "");
        			}
        			this.div_cont.form.components["edt_min"+num].set_value("");
        			this.ds_data.setColumn(0,"보호방법" + num, "");
        			this.ds_data.setColumn(0,"수급자상태" + num, "");
        			this.ds_data.setColumn(0,"manager" + num, "");
        			break;
         	default:
         	}
        };

        // from 팝업 시간 버튼 클릭
        this.from_hour_btn_onclick = function(obj,e)
        {
        	//fv_tfromid 선택한 컴포넌트 id
        	var objid = obj.id.substr(9);
        	this.div_cont.form.components[fv_houreventid].set_value(objid);
        	this.div_cont.form.components["mae_stime"+fv_houreventid.substr(9)].setFocus();
        };

        // from 팝업 분 버튼 클릭
        this.from_minute_btn_onclick = function(obj,e)
        {
        	var objid = obj.id.substr(9); // 분
        	var hour = this.div_cont.form.components[fv_houreventid].value.substr(0,2); // 시간

        	if(hour.replace(" ", "").length == 2){ // 시간 빈값체크
        		this.div_cont.form.components[fv_houreventid].set_value(hour+objid);
        		this.div_time_from.set_visible(false);
        		this.div_time_to.set_visible(true);
        		// 경과시간 빈값 체크, 빈값아니면 더하기
        		var edtmin = this.div_cont.form.components["edt_min"+fv_houreventid.substr(9)];
        		var minnum = fv_houreventid.substr(9);
        		if(!Sct.Util.isEmpty(edtmin.value)){
        			this.fn_minAdd(hour, objid, edtmin.value,minnum);
        		}
        		this.div_cont.form.components["edt_min"+minnum].setFocus();
        	}
        };

        // 시간 제대로 입력 안하면 "" 처리
        this.mae_time_onchanged = function(obj,e)
        {
        	var time = this.div_cont.form.components[obj.id].value;

        	var hour = time.substr(0,2);
        	var minute = time.substr(2,2);

        	if(hour > 23 || minute > 59 || time.replace(" ", "").length < 4){
        		this.div_cont.form.components[obj.id].set_value("");
        	}else{
        		var phour = e.postvalue.substr(0,2);
        		var pmin = e.postvalue.substr(2,2);
        		var minnum = fv_houreventid.substr(9); // mae_stime1 > 1
         		var min = this.div_cont.form.components["edt_min"+minnum].value; // 경과시간

        		if(!Sct.Util.isEmpty(phour.trim())) this.fn_minAdd(phour, pmin, min, minnum);
        	}
        };

        // to 분 버튼 클릭
        this.to_btn_onclick = function(obj,e)
        {
        	// 클릭시 from div 닫기
        	this.div_cont.form.components["mae_etime"+fv_mineventid.substr(7)].setFocus();
        	this.div_time_to.set_visible(false);

        	var objid = obj.id.substr(7); // 선택한 버튼 분
        	var minnum = fv_mineventid.substr(7); // 선택된 컴포넌트 edt_min2 > 2

        	// 선택한 분 세팅
        	this.div_cont.form.components[fv_mineventid].set_value(objid);

        	// 담당자명 세팅
        	const name = this.ds_data.getColumn(0,"c_name");
        	const staffid = this.ds_data.getColumn(0, "c_staffid");
        	if(minnum<10){
        		this.ds_data.setColumn(0,"담당자0"+minnum, name);
        		this.ds_data.setColumn(0,"담당코드0"+minnum, staffid);
        	}else{
        		this.ds_data.setColumn(0,"담당자"+minnum, name);
        		this.ds_data.setColumn(0,"담당코드"+minnum, staffid);
        	}
        	this.ds_data.setColumn(0,"manager"+minnum,name + "/" + staffid);

        	// 보호시작시간
        	var stime = "";
        	if(minnum < 10){
        		stime = this.ds_data.getColumn(0,"시작0"+minnum);
        	}else{
        		stime = this.ds_data.getColumn(0,"시작"+minnum);
        	}

        	if(Sct.Util.isEmpty(stime.trim())) { // 빈값이면 0000
        		stime = "0000";
        		if(minnum < 10){
        			this.ds_data.setColumn(0,"시작0"+minnum, "0000");
        		}else{
        			this.ds_data.setColumn(0,"시작"+minnum, "0000");
        		}
        	}

        	var phour = stime.substr(0,2);
        	var pmin = stime.substr(2,2);
        	this.fn_minAdd(phour, pmin, objid, minnum);

        };

        // 닫기, 지움
        this.from_btn_onclick = function(obj,e)
        {
        	switch(obj.id) {
        		case "btn_fcancle":
        			// 닫기 시 경과시간 존재 시 보호종료 값 세팅
        			var stime = "";
        			var minnum = fv_houreventid.substr(9); // 선택컴포넌트id
        			if(minnum < 10){
        				stime = this.ds_data.getColumn(0,"시작0"+minnum);
        			}else{
        				stime = this.ds_data.getColumn(0,"시작"+minnum);
        			}
        			var edtmin = this.div_cont.form.components["edt_min"+minnum];
        			if(!Sct.Util.isEmpty(edtmin.value)){
        				var phour = stime.substr(0,2);
        				var pmin = stime.substr(2,2);
        				this.fn_minAdd(phour, pmin, edtmin.value,minnum);
        // 				//기준일 2022-1-1 변경시간
        // 				var tDate = new Date(2022,1,1,parseInt(stime.substr(0,2)),parseInt(stime.substr(2,2)));
        // 				// 분 더하기
        // 				tDate.setMinutes(tDate.getMinutes()+parseInt(edtmin.value));
        //
        // 				// 시간, 분 스트링으로 변환
        // 				var tHours = tDate.getHours() + "";
        // 				var tMinutes = tDate.getMinutes() + "";
        //
        // 				// 2자리 0 채우기
        // 				var hour = tHours.padStart(2,'0');
        // 				var min = tMinutes.padStart(2,'0');
        //
        // 				//보호종료시간 세팅
        // 				// 보호시작시간이 00시가 아니고 보호종료시간이 00이면 시간을 24로 세팅
        // 				if(stime.substr(0,2) != "00" && hour == "00"){
        // 					hour = "24";
        // 				}
        // 				if(minnum < 10){
        // 					this.ds_data.setColumn(0,"종료0"+minnum, hour+min);
        // 				}else{
        // 					this.ds_data.setColumn(0,"종료"+minnum, hour+min);
        // 				}
        			}
        			this.div_cont.form.components["mae_etime"+minnum].setFocus();
        			this.div_time_from.set_visible(false); // 닫기
        			break;
        		case "btn_fdel":
        			this.div_cont.form.components[fv_houreventid].set_value("");
        			this.div_cont.form.components["edt_min"+fv_houreventid.substr(9)].set_value("");
        			this.div_cont.form.components["mae_etime"+fv_houreventid.substr(9)].set_value("");
        			this.div_cont.form.components["mae_etime"+fv_houreventid.substr(9)].setFocus();
        			this.div_time_from.set_visible(false); // 닫기
        			break;
        		case "btn_tcancle": // 분 닫기
        			this.div_cont.form.components["mae_etime"+fv_mineventid.substr(7)].setFocus();
        			this.div_time_to.set_visible(false); // 닫기
        			break;
        		case "btn_pretime": // 시간연속입력
        			var num = fv_houreventid.substr(9)-1;
        			var etime = this.div_cont.form.components["mae_etime"+num].value;
        			if(!Sct.Util.isEmpty(etime.trim())){
        				this.div_cont.form.components[fv_houreventid].set_value(etime);
        				this.div_cont.form.components["edt_min"+fv_houreventid.substr(9)].setFocus();
        				this.div_time_from.set_visible(false); // 닫기
        				this.div_time_to.set_visible(true); // 분팝업 열기
        			}
        			break;
        		default:
        	}
        };

        //변경 버튼 이벤트
        this.fn_manager_change = function(obj,e)
        {
        	// 시간팝업 닫기
        	this.fn_div_time_visible();

        	var num = obj.id.substr(11);
        	const name = this.ds_data.getColumn(0,"c_name");
        	const staffid = this.ds_data.getColumn(0, "c_staffid");

        	switch(obj.id) {
        		case "btn_manager" + num:
        			if(num<10){
        				this.ds_data.setColumn(0,"담당자0"+num, name);
        				this.ds_data.setColumn(0,"담당코드0"+num, staffid);
        			}else{
        				this.ds_data.setColumn(0,"담당자"+num, name);
        				this.ds_data.setColumn(0,"담당코드"+num, staffid);
        			}
        			this.ds_data.setColumn(0,"manager"+num,name + "/" + staffid);


        			break;
        	default:
        	}
        };

        // 경과시간 분 포커스
        this.edt_min_onsetfocus = function(obj,e)
        {
        	this.div_time_from.set_visible(false);
        	this.div_time_to.set_visible(true);

        	fv_mineventid = obj.id // 분클릭 컴포넌트 id

        	switch(obj.id) {
        		case "edt_min1":
        			this.div_time_to.move(271,85);
        			break;
        		case "edt_min2":
        			this.div_time_to.move(271,117);
        			break;
        		case "edt_min3":
        			this.div_time_to.move(271,149);
        			break;
        		case "edt_min4":
        			this.div_time_to.move(271,181);
        			break;
        		case "edt_min5":
        			this.div_time_to.move(271,213);
        			break;
        		case "edt_min6":
        			this.div_time_to.move(271,245);
        			break;
        		case "edt_min7":
        			this.div_time_to.move(271,278);
        			break;
        		case "edt_min8":
        			this.div_time_to.move(271,310);
        			break;
        		case "edt_min9":
        			this.div_time_to.move(271,342);
        			break;
        		case "edt_min10":
        			this.div_time_to.move(271,374);
        			break;
        		case "edt_min11":
        			this.div_time_to.move(271,394);
        			break;
        		case "edt_min12":
        			this.div_time_to.move(271,414);
        			break;
        		default:
        	}
        };

        // 보호시작시간 포커스
        this.mae_stime_onsetfocus = function(obj,e)
        {
        	this.div_time_from.set_visible(true);
        	this.div_time_to.set_visible(false);

        	fv_houreventid = obj.id // 시작시간 컴포넌트 id
        	switch(obj.id) {
        		case "mae_stime1":
        			this.div_time_from.move(271,85);
        			break;
        		case "mae_stime2":
        			this.div_time_from.move(271,117);
        			break;
        		case "mae_stime3":
        			this.div_time_from.move(271,149);
        			break;
        		case "mae_stime4":
        			this.div_time_from.move(271,181);
        			break;
        		case "mae_stime5":
        			this.div_time_from.move(271,213);
        			break;
        		case "mae_stime6":
        			this.div_time_from.move(271,245);
        			break;
        		case "mae_stime7":
        			this.div_time_from.move(271,278);
        			break;
        		case "mae_stime8":
        			this.div_time_from.move(271,310);
        			break;
        		case "mae_stime9":
        			this.div_time_from.move(271,342);
        			break;
        		case "mae_stime10":
        			this.div_time_from.move(271,374);
        			break;
        		case "mae_stime11":
        			this.div_time_from.move(271,394);
        			break;
        		case "mae_stime12":
        			this.div_time_from.move(271,414);
        			break;
        		default:
        	}
        };

        // 경과시간 입력 이벤트
        this.edt_min_onchanged = function(obj,e)
        {
        	// 클릭시 from div 닫기
        	this.div_time_to.set_visible(false);

        	// 선택한 컴포넌트
        	var minnum = obj.id.substr(7); // edt_min1 > 1

        	// 보호시작시간
        	var stime = "";
        	if(minnum < 10){
        		stime = this.ds_data.getColumn(0,"시작0"+minnum);
        	}else{
        		stime = this.ds_data.getColumn(0,"시작"+minnum);
        	}

        	// 보호시작시간이 빈값이면 0000
        	if(Sct.Util.isEmpty(stime.trim())) {
        		stime = "0000";
        		if(minnum < 10){
        			this.ds_data.setColumn(0,"시작0"+minnum, "0000");
        		}else{
        			this.ds_data.setColumn(0,"시작"+minnum, "0000");
        		}
        	}
         	var value = e.postvalue;
        // 	if(Sct.Util.isEmpty(e.postvalue)) value = 0;
        	var phour = stime.substr(0,2);
        	var pmin = stime.substr(2,2);
        	this.fn_minAdd(phour, pmin, value, minnum)
        };

        // 보호시작 아웃포커스
        this.mae_stime_onkillfocus = function(obj,e)
        {
        	var minnum = obj.id.substr(9);
        	var phour = "";
        	var pmin = "";
        	var minvalue = this.div_cont.form.components["edt_min"+minnum].value;

        	if(minnum < 10){
        		phour = this.ds_data.getColumn(0,"시작0"+minnum).substr(0,2);
        		pmin = this.ds_data.getColumn(0,"시작0"+minnum).substr(2,2);
        	}else{
        		phour = this.ds_data.getColumn(0,"시작"+minnum).substr(0,2);
        		pmin = this.ds_data.getColumn(0,"시작"+minnum).substr(2,2);
        	}

        	// 보호시작 빈값이 아니면 담당자명 세팅
        	if(this.div_cont.form.components["mae_stime"+minnum].text != "__:__"){
        		const name = this.ds_data.getColumn(0,"c_name");
        		const staffid = this.ds_data.getColumn(0, "c_staffid");

        		if(minnum<10){
        			this.ds_data.setColumn(0,"담당자0"+minnum, name);
        			this.ds_data.setColumn(0,"담당코드0"+minnum, staffid);
        		}else{
        			this.ds_data.setColumn(0,"담당자"+minnum, name);
        			this.ds_data.setColumn(0,"담당코드"+minnum, staffid);
        		}
        		this.ds_data.setColumn(0,"manager"+minnum,name + "/" + staffid);
        	}

        	// 포커스가 버튼이 아니면 팝업 닫기
        	if(this.getFocus().toString() != "[object Button]")
        	{
        		if(!Sct.Util.isEmpty(phour.trim())) this.fn_minAdd(phour, pmin, minvalue, minnum);
        		this.div_time_from.set_visible(false);
        	}
        };

        // 경과시간 아웃포커스
        this.edt_min_onkillfocus = function(obj,e)
        {
        	// 포커스가 버튼이 아니면 팝업 닫기
        	if(this.getFocus().toString() != "[object Button]")
        	{
        		this.div_time_to.set_visible(false);
        	}
        };

        // 시간팝업 닫기
        this.fn_div_time_visible = function ()
        {
        	this.div_time_from.set_visible(false);
        	this.div_time_to.set_visible(false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.close,this);
            this.div_cont.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_cont.form.sta_head1_01_01_01.addEventHandler("onclick",this.div_cont_sta_head1_01_01_01_onclick,this);
            this.div_cont.form.sta_body1_01_01_00.addEventHandler("onclick",this.div_cont_sta_body1_01_01_00_onclick,this);
            this.div_cont.form.btn_manager.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.sta_cro1_00_04_00_01.addEventHandler("onclick",this.div_cont_sta_cro1_00_04_00_01_onclick,this);
            this.div_cont.form.sta_manager08.addEventHandler("onclick",this.div_cont_sta_manager08_onclick,this);
            this.div_cont.form.btn_manager1.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_eraser1.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_cont.form.btn_record.addEventHandler("onclick",this.btn_record,this);
            this.div_cont.form.mae_stime1.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.mae_stime1.addEventHandler("onsetfocus",this.mae_stime_onsetfocus,this);
            this.div_cont.form.mae_stime1.addEventHandler("onkillfocus",this.mae_stime_onkillfocus,this);
            this.div_cont.form.edt_min1.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min1.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min1.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.edt_min1.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.btn_manager2.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_eraser2.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.mae_stime2.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.mae_stime2.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.mae_stime2.addEventHandler("onsetfocus",this.mae_stime_onsetfocus,this);
            this.div_cont.form.mae_stime2.addEventHandler("onkillfocus",this.mae_stime_onkillfocus,this);
            this.div_cont.form.edt_min2.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min2.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min2.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.edt_min2.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.btn_manager3.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_eraser3.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.mae_stime3.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.mae_stime3.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.mae_stime3.addEventHandler("onsetfocus",this.mae_stime_onsetfocus,this);
            this.div_cont.form.mae_stime3.addEventHandler("onkillfocus",this.mae_stime_onkillfocus,this);
            this.div_cont.form.edt_min3.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min3.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.edt_min3.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.btn_manager4.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_eraser4.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.mae_stime4.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.mae_stime4.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.mae_stime4.addEventHandler("onsetfocus",this.mae_stime_onsetfocus,this);
            this.div_cont.form.mae_stime4.addEventHandler("onkillfocus",this.mae_stime_onkillfocus,this);
            this.div_cont.form.edt_min4.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min4.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min4.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.edt_min4.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.btn_manager5.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_eraser5.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.mae_stime5.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.mae_stime5.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.mae_stime5.addEventHandler("onsetfocus",this.mae_stime_onsetfocus,this);
            this.div_cont.form.mae_stime5.addEventHandler("onkillfocus",this.mae_stime_onkillfocus,this);
            this.div_cont.form.edt_min5.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min5.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min5.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.edt_min5.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.btn_manager6.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_eraser6.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.mae_stime6.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.mae_stime6.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.mae_stime6.addEventHandler("onsetfocus",this.mae_stime_onsetfocus,this);
            this.div_cont.form.mae_stime6.addEventHandler("onkillfocus",this.mae_stime_onkillfocus,this);
            this.div_cont.form.edt_min6.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min6.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min6.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.edt_min6.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.btn_manager7.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_eraser7.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.mae_stime7.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.mae_stime7.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.mae_stime7.addEventHandler("onsetfocus",this.mae_stime_onsetfocus,this);
            this.div_cont.form.mae_stime7.addEventHandler("onkillfocus",this.mae_stime_onkillfocus,this);
            this.div_cont.form.edt_min7.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min7.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min7.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.edt_min7.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.btn_manager8.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_eraser8.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.mae_stime8.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.mae_stime8.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.mae_stime8.addEventHandler("onsetfocus",this.mae_stime_onsetfocus,this);
            this.div_cont.form.mae_stime8.addEventHandler("onkillfocus",this.mae_stime_onkillfocus,this);
            this.div_cont.form.edt_min8.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min8.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min8.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.edt_min8.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.btn_manager9.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_eraser9.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.mae_stime9.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.mae_stime9.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.mae_stime9.addEventHandler("onsetfocus",this.mae_stime_onsetfocus,this);
            this.div_cont.form.mae_stime9.addEventHandler("onkillfocus",this.mae_stime_onkillfocus,this);
            this.div_cont.form.edt_min9.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min9.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min9.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.edt_min9.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.btn_manager10.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_eraser10.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.mae_stime10.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.mae_stime10.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.mae_stime10.addEventHandler("onsetfocus",this.mae_stime_onsetfocus,this);
            this.div_cont.form.mae_stime10.addEventHandler("onkillfocus",this.mae_stime_onkillfocus,this);
            this.div_cont.form.edt_min10.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min10.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min10.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.edt_min10.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.btn_manager11.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_eraser11.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.mae_stime11.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.mae_stime11.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.mae_stime11.addEventHandler("onsetfocus",this.mae_stime_onsetfocus,this);
            this.div_cont.form.mae_stime11.addEventHandler("onkillfocus",this.mae_stime_onkillfocus,this);
            this.div_cont.form.edt_min11.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min11.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min11.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.edt_min11.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.btn_manager12.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_eraser12.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.mae_stime12.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.mae_stime12.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.mae_stime12.addEventHandler("onsetfocus",this.mae_stime_onsetfocus,this);
            this.div_cont.form.mae_stime12.addEventHandler("onkillfocus",this.mae_stime_onkillfocus,this);
            this.div_cont.form.edt_min12.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min12.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min12.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.edt_min12.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_cont1_04_00_00_00.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_cont1_04_00_00_00.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_cont1_04_00_00_00_00.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_cont1_04_00_00_00_00.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_time_from.form.btn_from_0100.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_0600.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_fcancle.addEventHandler("onclick",this.from_btn_onclick,this);
            this.div_time_from.form.btn_fdel.addEventHandler("onclick",this.from_btn_onclick,this);
            this.div_time_from.form.btn_from_00.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_50.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_0200.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_0700.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_0300.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_0800.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_10.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_20.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_0400.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_0900.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_0500.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1000.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_30.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_40.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_0000.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1100.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_pretime.addEventHandler("onclick",this.from_btn_onclick,this);
            this.div_time_from.form.btn_from_1300.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1800.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1400.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1900.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1500.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_2000.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1600.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_2100.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1700.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_2200.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1200.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_2300.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_to.form.btn_tcancle.addEventHandler("onclick",this.from_btn_onclick,this);
            this.div_time_to.form.btn_to_10.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_20.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_30.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_40.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_50.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_60.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_80.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_70.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_90.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_100.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_110.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_120.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_150.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_180.addEventHandler("onclick",this.to_btn_onclick,this);
        };
        this.loadIncludeScript("DAY00101_P05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
