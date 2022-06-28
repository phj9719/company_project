(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00101_P09");
            this.set_titletext("기능회복훈련 급여제공기록");
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
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"k_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"nalja\" type=\"STRING\" size=\"256\"/><Column id=\"k_number\" type=\"STRING\" size=\"256\"/><Column id=\"k_code\" type=\"STRING\" size=\"256\"/><Column id=\"k_name\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a\" type=\"STRING\" size=\"256\"/><Column id=\"a1\" type=\"STRING\" size=\"256\"/><Column id=\"a2\" type=\"STRING\" size=\"256\"/><Column id=\"a3\" type=\"STRING\" size=\"256\"/><Column id=\"a4\" type=\"STRING\" size=\"256\"/><Column id=\"a5\" type=\"STRING\" size=\"256\"/><Column id=\"a6\" type=\"STRING\" size=\"256\"/><Column id=\"a7\" type=\"STRING\" size=\"256\"/><Column id=\"a8\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b\" type=\"STRING\" size=\"256\"/><Column id=\"b1\" type=\"STRING\" size=\"256\"/><Column id=\"b2\" type=\"STRING\" size=\"256\"/><Column id=\"b3\" type=\"STRING\" size=\"256\"/><Column id=\"b4\" type=\"STRING\" size=\"256\"/><Column id=\"b5\" type=\"STRING\" size=\"256\"/><Column id=\"b6\" type=\"STRING\" size=\"256\"/><Column id=\"b7\" type=\"STRING\" size=\"256\"/><Column id=\"b8\" type=\"STRING\" size=\"256\"/><Column id=\"b9\" type=\"STRING\" size=\"256\"/><Column id=\"b10\" type=\"STRING\" size=\"256\"/><Column id=\"b11\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c\" type=\"STRING\" size=\"256\"/><Column id=\"c1\" type=\"STRING\" size=\"256\"/><Column id=\"c2\" type=\"STRING\" size=\"256\"/><Column id=\"c3\" type=\"STRING\" size=\"256\"/><Column id=\"c4\" type=\"STRING\" size=\"256\"/><Column id=\"c5\" type=\"STRING\" size=\"256\"/><Column id=\"c6\" type=\"STRING\" size=\"256\"/><Column id=\"c7\" type=\"STRING\" size=\"256\"/><Column id=\"c8\" type=\"STRING\" size=\"256\"/><Column id=\"훈련시a\" type=\"STRING\" size=\"256\"/><Column id=\"sh1\" type=\"STRING\" size=\"256\"/><Column id=\"sm1\" type=\"STRING\" size=\"256\"/><Column id=\"eh1\" type=\"STRING\" size=\"256\"/><Column id=\"em1\" type=\"STRING\" size=\"256\"/><Column id=\"훈련시b\" type=\"STRING\" size=\"256\"/><Column id=\"sh2\" type=\"STRING\" size=\"256\"/><Column id=\"sm2\" type=\"STRING\" size=\"256\"/><Column id=\"eh2\" type=\"STRING\" size=\"256\"/><Column id=\"em2\" type=\"STRING\" size=\"256\"/><Column id=\"훈련시c\" type=\"STRING\" size=\"256\"/><Column id=\"sh3\" type=\"STRING\" size=\"256\"/><Column id=\"sm3\" type=\"STRING\" size=\"256\"/><Column id=\"eh3\" type=\"STRING\" size=\"256\"/><Column id=\"em3\" type=\"STRING\" size=\"256\"/><Column id=\"훈련담당\" type=\"STRING\" size=\"256\"/><Column id=\"훈련코드\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_record", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"k_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"k_code\" type=\"STRING\" size=\"256\"/><Column id=\"k_name\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련a\" type=\"STRING\" size=\"256\"/><Column id=\"a1\" type=\"STRING\" size=\"256\"/><Column id=\"a2\" type=\"STRING\" size=\"256\"/><Column id=\"a3\" type=\"STRING\" size=\"256\"/><Column id=\"a4\" type=\"STRING\" size=\"256\"/><Column id=\"a5\" type=\"STRING\" size=\"256\"/><Column id=\"a6\" type=\"STRING\" size=\"256\"/><Column id=\"a7\" type=\"STRING\" size=\"256\"/><Column id=\"a8\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련b\" type=\"STRING\" size=\"256\"/><Column id=\"b1\" type=\"STRING\" size=\"256\"/><Column id=\"b2\" type=\"STRING\" size=\"256\"/><Column id=\"b3\" type=\"STRING\" size=\"256\"/><Column id=\"b4\" type=\"STRING\" size=\"256\"/><Column id=\"b5\" type=\"STRING\" size=\"256\"/><Column id=\"b6\" type=\"STRING\" size=\"256\"/><Column id=\"b7\" type=\"STRING\" size=\"256\"/><Column id=\"b8\" type=\"STRING\" size=\"256\"/><Column id=\"b9\" type=\"STRING\" size=\"256\"/><Column id=\"b10\" type=\"STRING\" size=\"256\"/><Column id=\"b11\" type=\"STRING\" size=\"256\"/><Column id=\"기능훈련c\" type=\"STRING\" size=\"256\"/><Column id=\"c1\" type=\"STRING\" size=\"256\"/><Column id=\"c2\" type=\"STRING\" size=\"256\"/><Column id=\"c3\" type=\"STRING\" size=\"256\"/><Column id=\"c4\" type=\"STRING\" size=\"256\"/><Column id=\"c5\" type=\"STRING\" size=\"256\"/><Column id=\"c6\" type=\"STRING\" size=\"256\"/><Column id=\"c7\" type=\"STRING\" size=\"256\"/><Column id=\"c8\" type=\"STRING\" size=\"256\"/><Column id=\"훈련시a\" type=\"STRING\" size=\"256\"/><Column id=\"sh1\" type=\"STRING\" size=\"256\"/><Column id=\"sm1\" type=\"STRING\" size=\"256\"/><Column id=\"eh1\" type=\"STRING\" size=\"256\"/><Column id=\"em1\" type=\"STRING\" size=\"256\"/><Column id=\"훈련시b\" type=\"STRING\" size=\"256\"/><Column id=\"sh2\" type=\"STRING\" size=\"256\"/><Column id=\"sm2\" type=\"STRING\" size=\"256\"/><Column id=\"eh2\" type=\"STRING\" size=\"256\"/><Column id=\"em2\" type=\"STRING\" size=\"256\"/><Column id=\"훈련시c\" type=\"STRING\" size=\"256\"/><Column id=\"sh3\" type=\"STRING\" size=\"256\"/><Column id=\"sm3\" type=\"STRING\" size=\"256\"/><Column id=\"eh3\" type=\"STRING\" size=\"256\"/><Column id=\"em3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_body1","0","36","688","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2","273","36","85","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00","362","40","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","446","40","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","36","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("훈련일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_date","103","40","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body3","0","109","230","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("신체기능훈련");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body4","229","109","230","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("기본동작훈련");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body5","458","109","230","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("일상생활동작훈련");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","70","26","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_record","163","0","150","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("전날기록 불러오기");
            obj.set_cssclass("btn_search");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_plan","318","0","200","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("기능회복훈련계획 불러오기");
            obj.set_cssclass("btn_search");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_del","523","0","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("전체지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body2","0","68","688","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_01","0","68","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager1_01","4","71","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_text("훈련담당");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager_value00","108","71","174","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_text("요양보호사 / 20210000");
            obj.set_textAlign("left");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body3_00","0","141","230","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body4_00","229","141","230","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body5_00","458","141","230","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body3_00_00","0","173","230","350",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body3_00_00_00","229","173","230","350",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body3_00_00_01","458","173","230","350",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_a1","10","183","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("32");
            obj.set_text("관절운동범위 평가");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_a8","10","213","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("33");
            obj.set_text("관절구축 예방운동");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_a2","10","243","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("34");
            obj.set_text("근력증강 운동");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_a3","10","273","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("35");
            obj.set_text("연하 운동");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_a4","10","303","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("36");
            obj.set_text("손가락 운동");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_a5","10","333","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("37");
            obj.set_text("조화 운동");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_a6","10","363","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("38");
            obj.set_text("지구력 훈련");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_a7","10","393","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("39");
            obj.set_text("팔 운동");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_b1","239","183","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("40");
            obj.set_text("뒤집기");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_b2","239","213","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("41");
            obj.set_text("일어나기");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_b3","239","243","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("42");
            obj.set_text("앉아있기");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_b4","239","273","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("43");
            obj.set_text("서있기");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_b5","239","303","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("44");
            obj.set_text("균형");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_b6","239","333","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("45");
            obj.set_text("이동");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_b7","239","363","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("46");
            obj.set_text("휠체어 조작 및 이동");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_b8","239","393","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("47");
            obj.set_text("보행");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_b9","239","423","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("48");
            obj.set_text("보장구장착 지켜보기");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_b11","239","483","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("50");
            obj.set_text("일어서기");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_b10","239","453","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("51");
            obj.set_text("도움제공");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_c1","468","183","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("53");
            obj.set_text("식사 동작");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_c2","468","213","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("54");
            obj.set_text("배설 동작");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_c3","468","243","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("55");
            obj.set_text("옷 갈아 입기동작");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_c4","468","273","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("56");
            obj.set_text("목욕 동작");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_c5","468","303","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("57");
            obj.set_text("몸 단장 동작");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_c6","468","333","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("58");
            obj.set_text("이동 동작");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_c8","468","393","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("60");
            obj.set_text("가사 동작");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_c7","468","363","210","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("59");
            obj.set_text("요리 동작");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_o");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_no","1","0","58","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("기록번호 : ");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_no_value","64","0","70","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("00000000");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time1","55","145","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time2","125","145","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_time1","110","145","10","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time3","275","145","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_time1_00","330","145","10","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("25");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time4","345","145","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("26");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time5","515","145","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("28");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_time1_01","570","145","10","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("29");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time6","585","145","50","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("30");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_time_from","850","229","217","229",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_from_0900","3","59","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("0");
            obj.set_text("09:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1400","56","59","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("1");
            obj.set_text("14:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_tcancle","3","3",null,"25","3",null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("2");
            obj.set_text("닫기 (close)");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_tdel","3","199",null,"25","56",null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("3");
            obj.set_text("지움");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_05","109","59","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("4");
            obj.set_text("05분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_30","162","59","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("5");
            obj.set_text("30분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_1_00_00","3","31","103","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("6");
            obj.set_text("시간");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_1_00_01","109","31","103","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("7");
            obj.set_text("분");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1000","3","87","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("8");
            obj.set_text("10:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1500","56","87","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("9");
            obj.set_text("15:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1100","3","115","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("10");
            obj.set_text("11:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1600","56","115","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("11");
            obj.set_text("16:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_10","109","87","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("12");
            obj.set_text("10분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_35","162","87","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("13");
            obj.set_text("35분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_15","109","115","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("14");
            obj.set_text("15분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_40","162","115","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("15");
            obj.set_text("40분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1200","3","143","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("16");
            obj.set_text("12:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1700","56","143","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("17");
            obj.set_text("17:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1300","3","171","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("18");
            obj.set_text("13:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1800","56","171","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("19");
            obj.set_text("18:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_20","109","143","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("20");
            obj.set_text("20분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_45","162","143","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("21");
            obj.set_text("45분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_25","109","171","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("22");
            obj.set_text("25분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_50","162","171","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("23");
            obj.set_text("50분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_55","162","199","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("24");
            obj.set_text("55분-");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Div("div_time_to","1085","230","111","201",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle","3","3",null,"25","3",null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("0");
            obj.set_text("훈련시간");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_03","3","31","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("1");
            obj.set_text("03분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_09","56","31","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("2");
            obj.set_text("09분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_04","3","59","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("3");
            obj.set_text("04분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_10","56","59","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("4");
            obj.set_text("10분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_05","3","87","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("5");
            obj.set_text("05분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_12","56","87","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("6");
            obj.set_text("12분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_06","3","115","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("7");
            obj.set_text("06분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_15","56","115","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("8");
            obj.set_text("15분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_07","3","143","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("9");
            obj.set_text("07분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_20","56","143","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("10");
            obj.set_text("20분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_30","56","171","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("11");
            obj.set_text("30분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_08","3","171","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("12");
            obj.set_text("08분");
            this.div_time_to.addChild(obj.name, obj);
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

            obj = new BindItem("item31","div_cont.form.sta_date","text","ds_data","nalja");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.sta_body1_00","text","ds_data","k_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.sta_body1_00_00","text","ds_data","k_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.chk_a1","value","ds_data","a1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.chk_a8","value","ds_data","a2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.chk_a2","value","ds_data","a3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.chk_a3","value","ds_data","a4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.chk_a4","value","ds_data","a5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.chk_a5","value","ds_data","a6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.chk_a6","value","ds_data","a7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.chk_a7","value","ds_data","a8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.chk_b1","value","ds_data","b1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.chk_b2","value","ds_data","b2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.chk_b3","value","ds_data","b3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.chk_b4","value","ds_data","b4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.chk_b5","value","ds_data","b5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.chk_b6","value","ds_data","b6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.chk_b7","value","ds_data","b7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.chk_b8","value","ds_data","b8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.chk_b9","value","ds_data","b9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.chk_b10","value","ds_data","b10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.chk_b11","value","ds_data","b11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.chk_c1","value","ds_data","c1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.chk_c2","value","ds_data","c2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.chk_c3","value","ds_data","c3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_cont.form.chk_c4","value","ds_data","c4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_cont.form.chk_c5","value","ds_data","c5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_cont.form.chk_c6","value","ds_data","c6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_cont.form.chk_c7","value","ds_data","c7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_cont.form.chk_c8","value","ds_data","c8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.sta_no_value","text","ds_data","k_number");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_cont.form.sta_manager_value00","text","ds_data","VIEW_MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00101_P09.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00101_P09.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00101_P09.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00101_P09
         * 화면명   	: 식사도움 관찰기록
         * 화면설명 	: 식사도움 관찰기록 저장
         * 작성일   	: 2022-05-02
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
        const fv_mcode = this.parent.MCODE;
        var fv_tfromid = ""; // 시간from 컴포넌트 id
        var fv_ttoid = ""; // 시간to 컴포넌트 id
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00101_P09";

        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "date", fv_date);
        	this.ds_search.setColumn(0, "m_code", fv_mcode);

        	this.fn_search();
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 저장 전
        this.fn_save_pre = function()
        {
        	// 훈련담당 빈 값 체크
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"훈련담당"))){
        		this.alert("훈련담당자를 지정해야합니다.");
        		return false;
        	}

        	var tra = ""; // 기능훈련a
        	var trb = ""; // 기능훈련b
        	var trc = ""; // 기능훈련c

        	// 기능훈련 저장 순서
        	// 1 2 3 4 5 6 7 8 보여지는 순서 ex) 0 1 1 0 0 0 0 0
        	// 1 8 2 3 4 5 6 7 저장 시 순서  ex) 0 1 0 0 0 0 0 1

        	tra += this.ds_data.getColumn(0, "a1");
        	for(var a=3; a<=8; a++){
        		tra += this.ds_data.getColumn(0, "a"+a);
        	}
        	tra += this.ds_data.getColumn(0, "a2");

        	for(var b=1; b<=11; b++){
        		trb += this.ds_data.getColumn(0, "b"+b);
        	}
        	for(var c=1; c<=8; c++){
        		trc += this.ds_data.getColumn(0, "c"+c);
        	}

        	this.ds_data.setColumn(0,"기능훈련a",tra);
        	this.ds_data.setColumn(0,"기능훈련b",trb);
        	this.ds_data.setColumn(0,"기능훈련c",trc);

        	// 훈련시간 세팅
        	var time1 = this.div_cont.form.mae_time1.value;
        	var time2 = this.div_cont.form.mae_time2.value;
        	var time3 = this.div_cont.form.mae_time3.value;
        	var time4 = this.div_cont.form.mae_time4.value;
        	var time5 = this.div_cont.form.mae_time5.value;
        	var time6 = this.div_cont.form.mae_time6.value;

        	// 둘중 하나라도 있으면 빈값 체크
        	var timesize1 = time1.replace(" ", "").length;
        	var timesize2 = time2.replace(" ", "").length;
        	var timesize3 = time3.replace(" ", "").length;
        	var timesize4 = time4.replace(" ", "").length;
        	var timesize5 = time5.replace(" ", "").length;
        	var timesize6 = time6.replace(" ", "").length;

        	if((timesize1 == 4 && timesize2 != 4) || (timesize1 != 4 && timesize2 == 4) || time1 > time2){
        		this.alert("신체기능훈련 시간이 잘못입력 되었습니다.");
        		return false;
        	}

        	if((timesize3 == 4 && timesize4 != 4) || (timesize3 != 4 && timesize4 == 4) || time3 > time4){
        		this.alert("기본동작훈련 시간이 잘못입력 되었습니다.");
        		return false;
        	}

        	if((timesize5 == 4 && timesize6 != 4) || (timesize5 != 4 && timesize6 == 4) || time5 > time6){
        		this.alert("일상생활동작훈련 시간이 잘못입력 되었습니다.");
        		return false;
        	}

        	this.ds_data.setColumn(0,"sh1", time1.substr(0,2));
        	this.ds_data.setColumn(0,"sm1", time1.substr(2,2));
        	this.ds_data.setColumn(0,"eh1", time2.substr(0,2));
        	this.ds_data.setColumn(0,"em1", time2.substr(2,2));
        	this.ds_data.setColumn(0,"sh2", time3.substr(0,2));
        	this.ds_data.setColumn(0,"sm2", time3.substr(2,2));
        	this.ds_data.setColumn(0,"eh2", time4.substr(0,2));
        	this.ds_data.setColumn(0,"em2", time4.substr(2,2));
        	this.ds_data.setColumn(0,"sh3", time5.substr(0,2));
        	this.ds_data.setColumn(0,"sm3", time5.substr(2,2));
        	this.ds_data.setColumn(0,"eh3", time6.substr(0,2));
        	this.ds_data.setColumn(0,"em3", time6.substr(2,2));

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

        	return true;
        }

        // 조회
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search ";
        	const outDatasets = "ds_data=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101_P09.DAY00101_P09_DS_DATA_S '";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	this.fn_div_time_visible(); // 팝업닫기

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
        			var manager = "";
        			// 훈련담당
        			if(nexacro.trim(this.ds_data.getColumn(0,"훈련담당")) != ""){
        				manager = nexacro.trim(this.ds_data.getColumn(0,"훈련담당")) + "/" + this.ds_data.getColumn(0,"훈련코드");
        			}else{
        				this.ds_data.setColumn(0, "훈련담당", nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name")));
        				this.ds_data.setColumn(0, "훈련코드", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid"));
        				manager = nexacro.trim(this.ds_data.getColumn(0,"훈련담당")) + "/" + this.ds_data.getColumn(0,"훈련코드");
        			}
         			this.ds_data.setColumn(0,"VIEW_MANAGER", manager);

        			// 훈련시간 값 세팅
        			this.fn_setTraining(this.ds_data);

        		} else if(strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");
        			this.fn_setData();

        		} else if(strSvcID == "record_search") // 전날 요양일지 조회
        		{
        			// 값이 존재하면 세팅
        			if(this.ds_record.rowcount > 0){
        				// 훈련시간 값 세팅
        				this.fn_setTraining(this.ds_record);
        				// 데이터 세팅
        				this.fn_setRerocd();
        			}

        		} else if(strSvcID == "plan_search") // 기능회복훈련계획 불러오기
        		{
        			if(this.ds_record.rowcount > 0){
        				// 훈련시간 값 세팅
        				this.fn_setTraining(this.ds_record);
        				// 데이터 세팅
        				this.fn_setRerocd();
        			}
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };

        // 전날기록 불러오기 조회
        this.div_cont_btn_record_onclick = function(obj,e)
        {
        	this.fn_div_time_visible(); // 팝업닫기

        	const svcId = "record_search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_data ";
        	const outDatasets = "ds_record=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101_P09.DAY00101_P09_DS_RECORD_S '";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 기능회복훈련계획 불러오기 조회
        this.div_cont_btn_plan_onclick = function(obj,e)
        {
        	this.fn_div_time_visible(); // 팝업닫기

        	const svcId = "plan_search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_data ";
        	const outDatasets = "ds_record=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101_P09.DAY00101_P09_DS_PLAN_S '";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        // 훈련시간 값 세팅(ds : 데이터셋)
        this.fn_setTraining = function (ds)
        {
        	var s1 = ds.getColumn(0,"sh1") + ds.getColumn(0,"sm1");
        	var e1 = ds.getColumn(0,"eh1") + ds.getColumn(0,"em1");
        	var s2 = ds.getColumn(0,"sh2") + ds.getColumn(0,"sm2");
        	var e2 = ds.getColumn(0,"eh2") + ds.getColumn(0,"em2");
        	var s3 = ds.getColumn(0,"sh3") + ds.getColumn(0,"sm3");
        	var e3 = ds.getColumn(0,"eh3") + ds.getColumn(0,"em3");

        	this.div_cont.form.mae_time1.set_value(s1);
        	this.div_cont.form.mae_time2.set_value(e1);
        	this.div_cont.form.mae_time3.set_value(s2);
        	this.div_cont.form.mae_time4.set_value(e2);
        	this.div_cont.form.mae_time5.set_value(s3);
        	this.div_cont.form.mae_time6.set_value(e3);
        };

        // 전날기록 불러오기, 기능회복훈련계획 불러오기 값 세팅
        this.fn_setRerocd = function ()
        {
        	for(var i=0; i < 8; i++){
        		this.ds_data.setColumn(0, "a"+(i+1),this.ds_record.getColumn(0,"a"+(i+1)));
        		this.ds_data.setColumn(0, "c"+(i+1),this.ds_record.getColumn(0,"c"+(i+1)));
        	}
        	for(var i=0; i < 11; i++){
        		this.ds_data.setColumn(0, "b"+(i+1),this.ds_record.getColumn(0,"b"+(i+1)));
        	}
        };

        // 데이터 세팅
        this.fn_setData = function () {
        	this.ds_return.clear();
        	this.ds_return.copyData(this.ds_data);
        	this.close(this.ds_return.saveXML());
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 구강점검 선택
        this.btn_manager_onclick = function(obj,e)
        {
        	this.fn_div_time_visible(); // 팝업닫기

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : fv_date
        	};

        	Sct.popup(this, "employee", 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 지움버튼 이벤트
        this.btn_del = function(obj,e)
        {
        	this.fn_div_time_visible(); // 팝업닫기

        	this.ds_data.setColumn(0,"훈련담당","");
        	this.ds_data.setColumn(0,"훈련코드","");
        	this.ds_data.setColumn(0,"VIEW_MANAGER","");
        	this.ds_data.setColumn(0,"기능훈련a","");
        	this.ds_data.setColumn(0,"기능훈련b","");
        	this.ds_data.setColumn(0,"기능훈련c","");
        	this.ds_data.setColumn(0,"훈련시a","");
        	this.ds_data.setColumn(0,"훈련시b","");
        	this.ds_data.setColumn(0,"훈련시c","");

        	// 시간
        	for(var i=1; i<=6; i++){
        		this.div_cont.form.components["mae_time"+i].set_value("");
        	}

        	// 체크박스
        	for(var i=1; i<=11; i++){
        		if(i <= 8){
        			this.ds_data.setColumn(0,"a"+i,0);
        			this.ds_data.setColumn(0,"c"+i,0);
        		}
        		this.ds_data.setColumn(0,"b"+i,0);
        	}
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
        		// 훈련담당
        		case "employee" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name1 = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid1 = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "훈련담당", name1);
        				this.ds_data.setColumn(0, "훈련코드", staffid1);
        				this.ds_data.setColumn(0, "VIEW_MANAGER", name1 + "/" + staffid1);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "훈련담당", "");
        				this.ds_data.setColumn(0, "훈련코드", "");
        				this.ds_data.setColumn(0, "VIEW_MANAGER", "");
        			}
        			break;
        	}
        }


        // 시간 제대로 입력 안하면 "" 처리
        this.mae_time_onchanged = function(obj,e)
        {
        	var time = this.div_cont.form.components[obj.id].value;

        	var hour = time.substr(0,2);
        	var minute = time.substr(2,2);

        	if(hour > 23 || minute > 59 || time.replace(" ", "").length < 4){
        		this.div_cont.form.components[obj.id].set_value("");
        	}
        };

        // 시간 from div 팝업
        this.mae_time_from_oneditclick = function(obj,e)
        {
        // 	this.div_time_from.set_visible(true);
        // 	this.div_time_to.set_visible(false);
        //
        // 	fv_tfromid = obj.id // from 시간 컴포넌트 id
        // 	switch(obj.id) {
        // 		case "mae_time1":
        // 			this.div_time_from.move(17,184);
        // 			break;
        // 		case "mae_time3":
        // 			this.div_time_from.move(246,184);
        // 			break;
        // 		case "mae_time5":
        // 			this.div_time_from.move(475,184);
        // 			break;
        // 	}
        };

        // 시간 to div 팝업
        this.mae_time_to_oneditclick = function(obj,e)
        {
        // 	this.div_time_from.set_visible(false);
        // 	this.div_time_to.set_visible(true);
        //
        // 	fv_ttoid = obj.id // to 시간 컴포넌트 id
        // 	switch(obj.id) {
        // 		case "mae_time2":
        // 			this.div_time_to.move(105,184);
        // 			break;
        // 		case "mae_time4":
        // 			this.div_time_to.move(327,184);
        // 			break;
        // 		case "mae_time6":
        // 			this.div_time_to.move(565,184);
        // 			break;
        // 	}
        };

        // from 팝업 시간 버튼 클릭
        this.from_hour_btn_onclick = function(obj,e)
        {
        	//fv_tfromid 선택한 컴포넌트 id
        	var objid = obj.id.substr(9);
        	this.div_cont.form.components[fv_tfromid].set_value(objid);


        };

        // from 팝업 분 버튼 클릭
        this.from_minute_btn_onclick = function(obj,e)
        {
        	var objid = obj.id.substr(9); // 분
        	var hour = this.div_cont.form.components[fv_tfromid].value.substr(0,2); // 시간

        	if(hour.replace(" ", "").length == 2){ // 시간 빈값체크
        		this.div_cont.form.components[fv_tfromid].set_value(hour+objid);
        		this.div_cont.form.btn_manager1_01.setFocus();
        		this.div_time_from.set_visible(false);
        	}
        };

        // to 분 버튼 클릭
        this.to_btn_onclick = function(obj,e)
        {
        	// 클릭시 from div 닫기
        	this.div_cont.form.btn_manager1_01.setFocus();
        	this.div_time_to.set_visible(false);

        	var objid = obj.id.substr(7); // 선택한 버튼 분

        	if(!Sct.Util.isEmpty(fv_tfromid)){ // from 컴포넌트id가 존재해야 입력 가능
        		var time = this.div_cont.form.components[fv_tfromid].value; // from 시간
        		var hour = time.substr(0,2); // from 시간 자르기
        		var minute = time.substr(2,3); // from 분 자르기
        		var timeadd = nexacro.toNumber(minute) + nexacro.toNumber(objid); // 분 더하기
        		var sethour = ""; // 세팅 시
        		var setminute = ""; // 세팅 분
        		var settime = ""; // 세팅 시간

        		if(timeadd < 10){ // 10 보다 작으면 앞에 0붙여주기
        			setminute = "0" + timeadd;
        			settime = hour + setminute;
        		}else if(timeadd > 59){ // 60보다 크면 60빼고 시간에 1 더하기
        			setminute = timeadd - 60;
        			sethour = nexacro.toNumber(hour) + 1;
        			if(setminute < 10){ // 10보다 작으면 앞에 0 붙여주기
        				setminute = "0" + setminute;
        			}
        			settime = sethour.toString() + setminute;
        		}else{
        			settime = hour + timeadd;
        		}

        		if(settime.length == 4){ // settime이 4자리면 세팅
        			this.div_cont.form.components[fv_ttoid].set_value(settime);
        		}
        	}

        };

        // 닫기, 지움
        this.from_btn_onclick = function(obj,e)
        {
        	switch(obj.id) {
        		case "btn_tcancle":
        			this.div_cont.form.btn_manager1_01.setFocus();
        			this.div_time_from.set_visible(false); // 닫기
        			break;
        		case "btn_tdel":
        			switch(fv_tfromid) {
        				case "mae_time1": // 신체기능훈련
        					this.div_cont.form.mae_time1.set_value("");
        					this.div_cont.form.mae_time2.set_value("");
        					break;
        				case "mae_time3": // 기본동작훈련
        					this.div_cont.form.mae_time3.set_value("");
        					this.div_cont.form.mae_time4.set_value("");
        					break;
        				case "mae_time5": // 일상생활동작훈련
        					this.div_cont.form.mae_time5.set_value("");
        					this.div_cont.form.mae_time6.set_value("");
        					break;
        				default:
        			}
        			this.div_cont.form.btn_manager1_01.setFocus();
        			this.div_time_from.set_visible(false); // 닫기
        			break;
        		default:
        	}
        };

        // 시간팝업from div
        this.mae_time_from_onsetfocus = function(obj,e)
        {
        	this.div_time_from.set_visible(true);
        	this.div_time_to.set_visible(false);

        	fv_tfromid = obj.id // from 시간 컴포넌트 id
        	switch(obj.id) {
        		case "mae_time1":
        			this.div_time_from.move(17,184);
        			break;
        		case "mae_time3":
        			this.div_time_from.move(246,184);
        			break;
        		case "mae_time5":
        			this.div_time_from.move(475,184);
        			break;
        	}
        };

        // 시간팝업to div
        this.mae_time_to_onsetfocus = function(obj,e)
        {
        	this.div_time_from.set_visible(false);
        	this.div_time_to.set_visible(true);

        	fv_ttoid = obj.id // to 시간 컴포넌트 id
        	switch(obj.id) {
        		case "mae_time2":
        			this.div_time_to.move(105,184);
        			break;
        		case "mae_time4":
        			this.div_time_to.move(327,184);
        			break;
        		case "mae_time6":
        			this.div_time_to.move(565,184);
        			break;
        	}
        };

        // from 시간 아웃포커스
        this.mae_time_from_onkillfocus = function(obj,e)
        {
        	trace(this.getFocus().toString());
        	// 포커스가 버튼이 아니면 팝업 닫기
        	if(this.getFocus().toString() != "[object Button]")
        	{
        		this.div_time_from.set_visible(false);
        	}
        };

        // to 시간 아웃포커스
        this.mae_time_to_onkillfocus = function(obj,e)
        {
        	trace(this.getFocus().toString());
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
            this.div_cont.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_cont.form.btn_record.addEventHandler("onclick",this.div_cont_btn_record_onclick,this);
            this.div_cont.form.btn_plan.addEventHandler("onclick",this.div_cont_btn_plan_onclick,this);
            this.div_cont.form.btn_del.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.btn_manager1_01.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.chk_a1.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_a8.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_a2.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_a3.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_a4.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_a5.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_a6.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_a7.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_b1.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_b2.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_b3.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_b4.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_b5.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_b6.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_b7.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_b8.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_b9.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_b11.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_b10.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.mae_time1.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.mae_time1.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.mae_time1.addEventHandler("onsetfocus",this.mae_time_from_onsetfocus,this);
            this.div_cont.form.mae_time1.addEventHandler("onkillfocus",this.mae_time_from_onkillfocus,this);
            this.div_cont.form.mae_time2.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.mae_time2.addEventHandler("oneditclick",this.mae_time_to_oneditclick,this);
            this.div_cont.form.mae_time2.addEventHandler("onsetfocus",this.mae_time_to_onsetfocus,this);
            this.div_cont.form.mae_time2.addEventHandler("onkillfocus",this.mae_time_to_onkillfocus,this);
            this.div_cont.form.mae_time3.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.mae_time3.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.mae_time3.addEventHandler("onsetfocus",this.mae_time_from_onsetfocus,this);
            this.div_cont.form.mae_time3.addEventHandler("onkillfocus",this.mae_time_from_onkillfocus,this);
            this.div_cont.form.mae_time4.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.mae_time4.addEventHandler("oneditclick",this.mae_time_to_oneditclick,this);
            this.div_cont.form.mae_time4.addEventHandler("onsetfocus",this.mae_time_to_onsetfocus,this);
            this.div_cont.form.mae_time4.addEventHandler("onkillfocus",this.mae_time_to_onkillfocus,this);
            this.div_cont.form.mae_time5.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.mae_time5.addEventHandler("oneditclick",this.mae_time_from_oneditclick,this);
            this.div_cont.form.mae_time5.addEventHandler("onsetfocus",this.mae_time_from_onsetfocus,this);
            this.div_cont.form.mae_time5.addEventHandler("onkillfocus",this.mae_time_from_onkillfocus,this);
            this.div_cont.form.mae_time6.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.mae_time6.addEventHandler("oneditclick",this.mae_time_to_oneditclick,this);
            this.div_cont.form.mae_time6.addEventHandler("onsetfocus",this.mae_time_to_onsetfocus,this);
            this.div_cont.form.mae_time6.addEventHandler("onkillfocus",this.mae_time_to_onkillfocus,this);
            this.div_time_from.form.btn_from_0900.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1400.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_tcancle.addEventHandler("onclick",this.from_btn_onclick,this);
            this.div_time_from.form.btn_tdel.addEventHandler("onclick",this.from_btn_onclick,this);
            this.div_time_from.form.btn_from_05.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_30.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_1000.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1500.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1100.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1600.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_10.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_35.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_15.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_40.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_1200.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1700.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1300.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1800.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_20.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_45.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_25.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_50.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_from.form.btn_from_55.addEventHandler("onclick",this.from_minute_btn_onclick,this);
            this.div_time_to.form.btn_cancle.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_03.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_09.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_04.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_10.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_05.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_12.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_06.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_15.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_07.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_20.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_30.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_08.addEventHandler("onclick",this.to_btn_onclick,this);
        };
        this.loadIncludeScript("DAY00101_P09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
