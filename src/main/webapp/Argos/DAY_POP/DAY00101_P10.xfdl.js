(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00101_P10");
            this.set_titletext("인지관리지원.인지활동지원");
            if (Form == this.constructor)
            {
                this._setFormPosition(708,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"ac_num\" type=\"STRING\" size=\"256\"/><Column id=\"ac_day\" type=\"STRING\" size=\"256\"/><Column id=\"ac_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"ac_code\" type=\"STRING\" size=\"256\"/><Column id=\"날씨\" type=\"STRING\" size=\"256\"/><Column id=\"날씨1\" type=\"STRING\" size=\"256\"/><Column id=\"날씨2\" type=\"STRING\" size=\"256\"/><Column id=\"날씨3\" type=\"STRING\" size=\"256\"/><Column id=\"날씨4\" type=\"STRING\" size=\"256\"/><Column id=\"날씨5\" type=\"STRING\" size=\"256\"/><Column id=\"기분\" type=\"STRING\" size=\"256\"/><Column id=\"기분1\" type=\"STRING\" size=\"256\"/><Column id=\"기분2\" type=\"STRING\" size=\"256\"/><Column id=\"기분3\" type=\"STRING\" size=\"256\"/><Column id=\"기분4\" type=\"STRING\" size=\"256\"/><Column id=\"기분5\" type=\"STRING\" size=\"256\"/><Column id=\"오전활동1\" type=\"STRING\" size=\"256\"/><Column id=\"오전활동2\" type=\"STRING\" size=\"256\"/><Column id=\"오전활동3\" type=\"STRING\" size=\"256\"/><Column id=\"오후활동1\" type=\"STRING\" size=\"256\"/><Column id=\"오후활동2\" type=\"STRING\" size=\"256\"/><Column id=\"오후활동3\" type=\"STRING\" size=\"256\"/><Column id=\"오전점검\" type=\"STRING\" size=\"256\"/><Column id=\"오전점검1\" type=\"STRING\" size=\"256\"/><Column id=\"오전점검2\" type=\"STRING\" size=\"256\"/><Column id=\"오후점검\" type=\"STRING\" size=\"256\"/><Column id=\"오후점검1\" type=\"STRING\" size=\"256\"/><Column id=\"오후점검2\" type=\"STRING\" size=\"256\"/><Column id=\"인지관리\" type=\"STRING\" size=\"256\"/><Column id=\"작성자\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/><Column id=\"org_ac_num\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_datacopy", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"ac_num\" type=\"STRING\" size=\"256\"/><Column id=\"ac_day\" type=\"STRING\" size=\"256\"/><Column id=\"ac_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"ac_code\" type=\"STRING\" size=\"256\"/><Column id=\"날씨\" type=\"STRING\" size=\"256\"/><Column id=\"날씨1\" type=\"STRING\" size=\"256\"/><Column id=\"날씨2\" type=\"STRING\" size=\"256\"/><Column id=\"날씨3\" type=\"STRING\" size=\"256\"/><Column id=\"날씨4\" type=\"STRING\" size=\"256\"/><Column id=\"날씨5\" type=\"STRING\" size=\"256\"/><Column id=\"기분\" type=\"STRING\" size=\"256\"/><Column id=\"기분1\" type=\"STRING\" size=\"256\"/><Column id=\"기분2\" type=\"STRING\" size=\"256\"/><Column id=\"기분3\" type=\"STRING\" size=\"256\"/><Column id=\"기분4\" type=\"STRING\" size=\"256\"/><Column id=\"기분5\" type=\"STRING\" size=\"256\"/><Column id=\"오전활동1\" type=\"STRING\" size=\"256\"/><Column id=\"오전활동2\" type=\"STRING\" size=\"256\"/><Column id=\"오전활동3\" type=\"STRING\" size=\"256\"/><Column id=\"오후활동1\" type=\"STRING\" size=\"256\"/><Column id=\"오후활동2\" type=\"STRING\" size=\"256\"/><Column id=\"오후활동3\" type=\"STRING\" size=\"256\"/><Column id=\"오전점검\" type=\"STRING\" size=\"256\"/><Column id=\"오전점검1\" type=\"STRING\" size=\"256\"/><Column id=\"오전점검2\" type=\"STRING\" size=\"256\"/><Column id=\"오후점검\" type=\"STRING\" size=\"256\"/><Column id=\"오후점검1\" type=\"STRING\" size=\"256\"/><Column id=\"오후점검2\" type=\"STRING\" size=\"256\"/><Column id=\"인지관리\" type=\"STRING\" size=\"256\"/><Column id=\"작성자\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/><Column id=\"org_ac_num\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_record", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"ac_day\" type=\"STRING\" size=\"256\"/><Column id=\"ac_name\" type=\"STRING\" size=\"256\"/><Column id=\"ac_code\" type=\"STRING\" size=\"256\"/><Column id=\"날씨\" type=\"STRING\" size=\"256\"/><Column id=\"기분\" type=\"STRING\" size=\"256\"/><Column id=\"오전활동1\" type=\"STRING\" size=\"256\"/><Column id=\"오전활동2\" type=\"STRING\" size=\"256\"/><Column id=\"오전활동3\" type=\"STRING\" size=\"256\"/><Column id=\"오후활동1\" type=\"STRING\" size=\"256\"/><Column id=\"오후활동2\" type=\"STRING\" size=\"256\"/><Column id=\"오후활동3\" type=\"STRING\" size=\"256\"/><Column id=\"오전점검\" type=\"STRING\" size=\"256\"/><Column id=\"오후점검\" type=\"STRING\" size=\"256\"/><Column id=\"인지관리\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_body1","0","36","688","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2","273","36","85","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00","362","40","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","485","40","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","36","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("관리점검일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body4","0","105","688","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","70","26","75",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_record00","418","0","120","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("전날기록 조회");
            obj.set_cssclass("btn_search");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body2","0","68","688","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_01","0","68","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager1_01","4","72","90","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager_value00","108","71","174","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_text("요양보호사 / 20210000");
            obj.set_textAlign("left");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_no","1","0","58","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_text("기록번호 : ");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_no_value","64","0","70","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_text("00000000");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"0","70","26","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body3","0","105","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_text("관리내용");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_content","103","109","454","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_maxlength("80");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_content","565","109","120","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_text("인지관리내용");
            obj.set_cssclass("btn_search");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body4_00","0","141","688","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body3_00","0","141","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_text("오늘의날씨");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body4_01","0","173","688","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body3_00_00","0","173","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_text("오늘의기분");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body4_01_00","0","205","688","157",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body3_00_01","0","205","98","157",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_text("오전활동");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_content00_01","103","210","579","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            obj.set_maxlength("40");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_content00_01_00","103","239","579","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("25");
            obj.set_maxlength("40");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_content00_01_01","103","268","579","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("26");
            obj.set_maxlength("40");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_amac_o","480","297","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_amac_x","618","297","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_o1","492","301","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("29");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_x1","631","301","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("30");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_amst_o","480","329","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_amst_x","618","329","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_o2","492","333","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("33");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_x2","631","333","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("34");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_amac_v","549","297","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_v1","562","301","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("36");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_amst_v","549","329","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_v2","562","333","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("38");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body20","97","297","384","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("39");
            obj.set_text("▶ 오전 활동은 즐거우셨나요 ?");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body21","97","329","384","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("40");
            obj.set_text("▶ 참여자들과 이야기는 나누셨나요 ?");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body4_01_00_00","0","361","688","157",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body3_00_01_00","0","361","98","157",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_text("오전활동");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_content00_01_02","103","366","579","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("43");
            obj.set_maxlength("40");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_content00_01_00_00","103","395","579","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("44");
            obj.set_maxlength("40");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_content00_01_01_00","103","424","579","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("45");
            obj.set_maxlength("40");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_pmac_o","480","453","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_pmac_x","618","453","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_o3","492","457","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("48");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_x3","631","457","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("49");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_pmst_o","480","485","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_pmst_x","618","485","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_o4","492","489","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("52");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_x4","631","489","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("53");
            obj.set_text("   X");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_pmac_v","549","453","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_v3","562","457","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("55");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_pmst_v","549","485","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_v4","562","489","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("57");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body20_00","97","453","384","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("58");
            obj.set_text("▶ 오전 활동은 즐거우셨나요 ?");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body21_00","97","485","384","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("59");
            obj.set_text("▶ 참여자들과 이야기는 나누셨나요 ?");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_we_1","103","145","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("60");
            obj.set_text(" 맑음");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_we_2","163","145","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("61");
            obj.set_text(" 구름");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_we_3","223","145","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("62");
            obj.set_text("  비");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_we_4","283","145","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("63");
            obj.set_text(" 흐림");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_we_5","343","145","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("64");
            obj.set_text("  눈");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_fe_1","103","177","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("65");
            obj.set_text(" 행복");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_fe_2","163","177","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("66");
            obj.set_text(" 기쁨");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_fe_3","223","177","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("67");
            obj.set_text(" 우울");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_fe_4","283","177","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("68");
            obj.set_text(" 슬픔");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_fe_5","343","177","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("69");
            obj.set_text(" 화남");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00","446","40","35","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("70");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_date","103","40","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("71");
            obj.set_readonly("true");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_border("0px none");
            obj.set_font("500 10pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("left");
            this.div_cont.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_content","718","272","591","235",null,null,null,null,null,null,this);
            obj.set_text("");
            obj.set_border("1px solid #ff8c00");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pdiv_close","10","10",null,"26","10",null,null,null,null,null,this.pdiv_content.form);
            obj.set_taborder("0");
            obj.set_text("인지관리지원 세부사항 (닫기)");
            obj.set_cssclass("btn_basic_gray");
            this.pdiv_content.addChild(obj.name, obj);

            obj = new Button("btn_pdiv_content1","10","41",null,"26","10",null,null,null,null,null,this.pdiv_content.form);
            obj.set_taborder("1");
            obj.set_text("정서적 안정된 환경조성으로 행동변화 감소 도움");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 20px");
            this.pdiv_content.addChild(obj.name, obj);

            obj = new Button("btn_pdiv_content2","10","72",null,"26","10",null,null,null,null,null,this.pdiv_content.form);
            obj.set_taborder("2");
            obj.set_text("위험(폭력 등) 상황에서의 수급자와 수발자의 안전관리 도움");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 20px");
            this.pdiv_content.addChild(obj.name, obj);

            obj = new Button("btn_pdiv_content3","10","103",null,"26","10",null,null,null,null,null,this.pdiv_content.form);
            obj.set_taborder("3");
            obj.set_text("행동변화에 대한 적절한 대처(지속적관찰, 사전예방 등)");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 20px");
            this.pdiv_content.addChild(obj.name, obj);

            obj = new Button("btn_pdiv_content4","10","134",null,"26","10",null,null,null,null,null,this.pdiv_content.form);
            obj.set_taborder("4");
            obj.set_text("관찰을 통한 행동변화 사전예방, 안전관리 도움");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 20px");
            this.pdiv_content.addChild(obj.name, obj);

            obj = new Button("btn_pdiv_content5","10","165",null,"26","10",null,null,null,null,null,this.pdiv_content.form);
            obj.set_taborder("5");
            obj.set_text("식습관 변화에 따른 영양상태 관리로 건강상태 유지도움(입맛변화 등)");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 20px");
            this.pdiv_content.addChild(obj.name, obj);

            obj = new Button("btn_pdiv_content6","10","196",null,"26","10",null,null,null,null,null,this.pdiv_content.form);
            obj.set_taborder("6");
            obj.set_text("정서적 안정과 생활의욕 향상 도움(말벗, 격려, 위로 등)");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 20px");
            this.pdiv_content.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",708,550,this,function(p){});
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

            obj = new BindItem("item32","div_cont.form.sta_body1_00","text","ds_data","ac_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.sta_body1_00_00","text","ds_data","ac_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.sta_no_value","text","ds_data","ac_num");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_cont.form.sta_manager_value00","text","ds_data","VIEW_MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_cont.form.edt_content","value","ds_data","인지관리");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.chk_o1","value","ds_data","오전점검1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.chk_x1","value","ds_data","오전점검1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.chk_o2","value","ds_data","오전점검2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.chk_x2","value","ds_data","오전점검2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.chk_v1","value","ds_data","오전점검1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.chk_v2","value","ds_data","오전점검2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.chk_o3","value","ds_data","오후점검1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.chk_x3","value","ds_data","오후점검1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.chk_o4","value","ds_data","오후점검2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.chk_x4","value","ds_data","오후점검2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.chk_v3","value","ds_data","오후점검1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.chk_v4","value","ds_data","오후점검2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.chk_we_1","value","ds_data","날씨1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.chk_we_2","value","ds_data","날씨2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.chk_we_3","value","ds_data","날씨3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.chk_we_4","value","ds_data","날씨4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.chk_we_5","value","ds_data","날씨5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.chk_fe_1","value","ds_data","기분1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.chk_fe_2","value","ds_data","기분2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.chk_fe_3","value","ds_data","기분3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.chk_fe_4","value","ds_data","기분4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.chk_fe_5","value","ds_data","기분5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.sta_body1_00_00_00","text","ds_data","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_cont.form.edt_content00_01","value","ds_data","오전활동1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_cont.form.edt_content00_01_00","value","ds_data","오전활동2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_cont.form.edt_content00_01_01","value","ds_data","오전활동3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_cont.form.edt_content00_01_02","value","ds_data","오후활동1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_cont.form.edt_content00_01_00_00","value","ds_data","오후활동2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_cont.form.edt_content00_01_01_00","value","ds_data","오후활동3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_search.form.cal_date_pic","value","ds_search","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.mae_date","value","ds_data","ac_day");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00101_P10.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00101_P10.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00101_P10.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00101_P10
         * 화면명   	: 인지관리지원, 인지활동지원
         * 화면설명 	: 인지관리지원, 인지활동지원 저장
         * 작성일   	: 2022-05-09
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
        const fv_sicode = this.parent.SICODE;
        const fv_date = this.parent.DATE;
        const fv_name = this.parent.NAME;
        const fv_mgroup = this.parent.MGROUP;
        const fv_mcode = this.parent.MCODE;

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00101_P10";

        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "date", fv_date);
        	this.ds_search.setColumn(0, "m_code", fv_mcode);

        	this.fn_search();

        	// 인지관리내용 팝업 오픈
        	this.pdiv_content.trackPopupByComponent(this.div_cont.form.sta_body3_00, 97, 0);


        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        // 저장 전
        this.fn_save_pre = function()
        {
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"ac_num"))){ // 기록번호 없을시 rowtype 2(추가행)
        		this.ds_data.set_updatecontrol(false);
        		this.ds_data.setRowType(0,2);
        		this.ds_data.set_updatecontrol(true);
        	}

        // 	if (this.ds_data.getRowType(0) != 2 || this.ds_data.getRowType(0) != 4) {
        // 		this.alert("저장할 항목이 없습니다.");
        // 		return false;
        // 	}

        	// 작성자 빈 값 체크
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"작성자"))){
        		this.alert("작성자를 지정해야합니다.");
        		return false;
        	}

        	// 저장 내용 체크
        	if (!Sct.Grid.hasInsertAndUpdateRow(this.ds_data))
        	{
        		this.alert("저장할 내용이 없습니다.");
        		return false;
        	}

        	// 날씨, 기분, 오전점검, 오후점검
        	var weather = "";
        	var feeling = "";
        	var amac = "";
        	var pmac = "";

        	for(var i=0; i<5; i++){
        		if(i < 2){
        			amac += this.ds_data.getColumn(0,"오전점검"+(i+1));
        			pmac += this.ds_data.getColumn(0,"오후점검"+(i+1));
        		}
        		weather += this.ds_data.getColumn(0,"날씨"+(i+1));
        		feeling += this.ds_data.getColumn(0,"기분"+(i+1));
        	}

        	this.ds_data.setColumn(0,"오전점검", amac);
        	this.ds_data.setColumn(0,"오후점검", pmac);
        	this.ds_data.setColumn(0,"날씨", weather);
        	this.ds_data.setColumn(0,"기분", feeling);

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

        	return true;
        }

        // 삭제 전 validation
        this.fn_delete_pre = function()
        {
        	// 기록번호 없을 시
        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0,"ac_num")))
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
        				   + "sqlId='DAY00101_P10.DAY00101_P10_DS_DATA_S '";
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
        				   + "sqlId=DAY00101_P10.DAY00101_P10_DS_DATA_D ";

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
         			this.fn_setReturnData("save"); // 리턴값 세팅

        		} else if(strSvcID == "delete") // 전날 요양일지 조회
        		{
        			this.alert("삭제되었습니다.");
        			this.fn_setReturnData("delete"); // 리턴값 세팅
        		}
        		else if(strSvcID == "record_search") // 전날기록 조회
        		{
        			if(this.ds_record.rowcount > 0){ // 전날 데이터 존재시 세팅
        				this.ds_data.setColumn(0,"인지관리",this.ds_record.getColumn(0,"인지관리"));
        				this.ds_data.setColumn(0,"오전활동1",this.ds_record.getColumn(0,"오전활동1"));
        				this.ds_data.setColumn(0,"오전활동2",this.ds_record.getColumn(0,"오전활동2"));
        				this.ds_data.setColumn(0,"오전활동3",this.ds_record.getColumn(0,"오전활동3"));
        				this.ds_data.setColumn(0,"오후활동1",this.ds_record.getColumn(0,"오후활동1"));
        				this.ds_data.setColumn(0,"오후활동2",this.ds_record.getColumn(0,"오후활동2"));
        				this.ds_data.setColumn(0,"오후활동3",this.ds_record.getColumn(0,"오후활동3"));

        				// 오전,오후점검 세팅
        				var str = this.ds_record.getColumn(0, "오전점검");
        				var str2 = this.ds_record.getColumn(0, "오후점검");
        				for (let i = 0; i < 2; i++)
        				{
        					const val = str.substr(i, 1);
        					const val2 = str2.substr(i, 1);
        					this.ds_data.setColumn(0, "오전점검" + (i+1), val);
        					this.ds_data.setColumn(0, "오후점검" + (i+1), val2);
        				}
        			}
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
        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };

        // 저장 버튼
        this.fn_saveBtn = function()
        {
        	this.fn_save();
        };

        // 삭제 버튼
        this.fn_deleteBtn = function()
        {
        	this.fn_delete();
        };

        // 작성자 팝업
        this.btn_manager_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : fv_sicode
        		,	DATE : fv_date
        	};

        	Sct.popup(this, "employee", 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 입력, 수정용 데이터셋에 데이터 복사
        this.fn_dataCopy = function()
        {
        	// 데이터 존재
        	if(this.ds_data.rowcount > 0){
        		const managerStr = this.ds_data.getColumn(0, "작성자")
        					 + "/"
        					 + this.ds_data.getColumn(0, "작성코드")
        		this.ds_data.setColumn(0, "VIEW_MANAGER", managerStr);

        		// 날씨, 기분 값 세팅
        		this.fn_setData(5,"날씨");
        		this.fn_setData(5,"기분");

        		// 오전,오후점검 세팅
        		var str = this.ds_data.getColumn(0, "오전점검");
        		var str2 = this.ds_data.getColumn(0, "오후점검");

        		for (let i = 0; i < 2; i++)
        		{
        			const val = str.substr(i, 1);
        			const val2 = str2.substr(i, 1);
        			this.ds_data.addColumn("오전점검"+(i+1), "STRING", 256);
        			this.ds_data.addColumn("오후점검"+(i+1), "STRING", 256);
        			this.ds_data.setColumn(0, "오전점검" + (i+1), val);
        			this.ds_data.setColumn(0, "오후점검" + (i+1), val2);
        		}

        	}else{ // 새로작성
        		this.ds_data.copyData(this.ds_datacopy);
        		const nRow = this.ds_data.addRow();

        		// 날짜, 이름 세팅
        		this.ds_data.setColumn(nRow, "sicode", fv_sicode);
        		this.ds_data.setColumn(nRow, "ac_day", fv_date);
        		this.ds_data.setColumn(nRow, "ac_name", fv_name);
        		this.ds_data.setColumn(nRow, "m_group", fv_mgroup);
        		this.ds_data.setColumn(nRow, "ac_code", fv_mcode);

        		this.ds_data.setColumn(nRow, "작성자", nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name")));
        		this.ds_data.setColumn(nRow, "작성코드", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid"));

        		const managerStr2 = this.ds_data.getColumn(nRow, "작성자")
        						 + "/"
        						 + this.ds_data.getColumn(nRow, "작성코드");
        		this.ds_data.setColumn(nRow, "VIEW_MANAGER", managerStr2);

        		// 날씨, 기분 값 세팅
        		this.ds_data.setColumn(nRow, "날씨", "00000");
        		this.ds_data.setColumn(nRow, "기분", "00000");
        		this.ds_data.setColumn(nRow, "오전점검", "00");
        		this.ds_data.setColumn(nRow, "오후점검", "00");
        		this.fn_setData(5,"날씨");
        		this.fn_setData(5,"기분");

        		// 오전,오후점검 세팅
        		this.ds_data.setColumn(nRow, "오전활동1", "");
        		this.ds_data.setColumn(nRow, "오전활동2", "");
        		this.ds_data.setColumn(nRow, "오전활동3", "");
        		this.ds_data.setColumn(nRow, "오후활동1", "");
        		this.ds_data.setColumn(nRow, "오후활동2", "");
        		this.ds_data.setColumn(nRow, "오후활동3", "");
        		this.ds_data.setColumn(nRow, "인지관리", "");
        		var str = this.ds_data.getColumn(0, "오전점검");
        		var str2 = this.ds_data.getColumn(0, "오후점검");

        		for (let i = 0; i < 2; i++)
        		{
        			var val = str.substr(i, 1);
        			var val2 = str2.substr(i, 1);
        			this.ds_data.setColumn(0, "오전점검" + (i+1), val);
        			this.ds_data.setColumn(0, "오후점검" + (i+1), val2);
        		}
        	}

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(0, 1);
        	this.ds_data.set_updatecontrol(true);
        };

        // 값 세팅
        this.fn_setData = function (length, name)
        {
        	// 날씨, 기분, 활동 값 세팅
        	var str = this.ds_data.getColumn(0, name);

        	for (let i = 0; i < length; i++)
        	{
        		var val = str.substr(i, 1);
        		if(this.ds_data.getColumn(0,"ac_num") != ""){ // 기록번호 존재시 컬럼추가 필요
        			this.ds_data.addColumn(name+(i+1), "STRING", 256);
        		}
        		if (val == 1){
        			this.ds_data.setColumn(0, name + (i+1), 1);
        		}else{
        			this.ds_data.setColumn(0, name + (i+1), 0);
        		}
        	}
        };

        // 리턴값 세팅
        this.fn_setReturnData = function(type)
        {
        	this.ds_return.clearData();

        	if(type == "save"){
        		this.ds_return.copyData(this.ds_data);
        	}

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
        		// 작성자
        		case "employee" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name1 = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid1 = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "작성자", name1);
        				this.ds_data.setColumn(0, "작성코드", staffid1);
        				this.ds_data.setColumn(0, "VIEW_MANAGER", name1 + "/" + staffid1);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "작성자", "");
        				this.ds_data.setColumn(0, "작성코드", "");
        				this.ds_data.setColumn(0, "VIEW_MANAGER", "");
        			}
        			break;
        	}
        }


        // 전날기록조회
        this.div_cont_btn_record_onclick = function(obj,e)
        {
        	const svcId = "record_search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_data ";
        	const outDatasets = "ds_record=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101_P10.DAY00101_P10_DS_RECORD_S '";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // O,△,X 체크박스 값 변경 이벤트
        this.mainChk_onchanged = function(obj,e)
        {
        	const num = obj.id.substr(5);

        	const value = e.postvalue;

        	switch (obj.id)
        	{
        		case "chk_o" + num:
        			if(value == 1)
        			{
        				this.div_cont.form.components["chk_v" + num].set_value(0);
        				this.div_cont.form.components["chk_x" + num].set_value(0);
        				if(num == 1 || num == 2){ // 오전점검
        					this.ds_data.setColumn(0,"오전점검"+num, 1);
        				}else{ // 오후점검
        					this.ds_data.setColumn(0,"오후점검"+(num-2), 1);
        				}

        			}
        			break;
        		case "chk_v" + num:
        			if(value == 2)
        			{
        				this.div_cont.form.components["chk_o" + num].set_value(0);
        				this.div_cont.form.components["chk_x" + num].set_value(0);
        				if(num == 1 || num == 2){ // 오전점검
        					this.ds_data.setColumn(0,"오전점검"+num, 2);
        				}else{ // 오후점검
        					this.ds_data.setColumn(0,"오후점검"+(num-2), 2);
        				}
        			}
        			break;
        		case "chk_x" + num:
        			if(value == 3)
        			{
        				this.div_cont.form.components["chk_o" + num].set_value(0);
        				this.div_cont.form.components["chk_v" + num].set_value(0);
        				if(num == 1 || num == 2){ // 오전점검
        					this.ds_data.setColumn(0,"오전점검"+num, 3);
        				}else{ // 오후점검
        					this.ds_data.setColumn(0,"오후점검"+(num-2), 3);
        				}
        			}
        			break;
        	}
        };

        // 인지관리내용 팝업창 띄우기
        this.div_cont_btn_content_onclick = function(obj,e)
        {
        	// 컴포넌트를 기준으로 PopupDiv 를 특정 위치에 표시
        	// 오늘의 날씨 static 기준으로 left 97 top 0
        	this.pdiv_content.trackPopupByComponent(this.div_cont.form.sta_body3_00, 97, 0);
        };

        // 인지관리내용 선택
        this.btn_pdiv_content_onclick = function(obj,e)
        {
        	this.ds_data.setColumn(0,"인지관리", obj.text);
        	this.pdiv_content.closePopup();
        };

        // popupdiv 닫기
        this.pdiv_content_btn_pdiv_close_onclick = function(obj,e)
        {
        	 this.pdiv_content.closePopup();
        };

        this.div_cont_sta_head1_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.sta_head1.addEventHandler("onclick",this.div_cont_sta_head1_onclick,this);
            this.div_cont.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_cont.form.btn_record00.addEventHandler("onclick",this.div_cont_btn_record_onclick,this);
            this.div_cont.form.btn_manager1_01.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_cont.form.btn_content.addEventHandler("onclick",this.div_cont_btn_content_onclick,this);
            this.div_cont.form.chk_o1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_x1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_o2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_x2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_v1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_v2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_o3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_x3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_o4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_x4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_v3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_v4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.pdiv_content.form.btn_pdiv_close.addEventHandler("onclick",this.pdiv_content_btn_pdiv_close_onclick,this);
            this.pdiv_content.form.btn_pdiv_content1.addEventHandler("onclick",this.btn_pdiv_content_onclick,this);
            this.pdiv_content.form.btn_pdiv_content2.addEventHandler("onclick",this.btn_pdiv_content_onclick,this);
            this.pdiv_content.form.btn_pdiv_content3.addEventHandler("onclick",this.btn_pdiv_content_onclick,this);
            this.pdiv_content.form.btn_pdiv_content4.addEventHandler("onclick",this.btn_pdiv_content_onclick,this);
            this.pdiv_content.form.btn_pdiv_content5.addEventHandler("onclick",this.btn_pdiv_content_onclick,this);
            this.pdiv_content.form.btn_pdiv_content6.addEventHandler("onclick",this.btn_pdiv_content_onclick,this);
        };
        this.loadIncludeScript("DAY00101_P10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
