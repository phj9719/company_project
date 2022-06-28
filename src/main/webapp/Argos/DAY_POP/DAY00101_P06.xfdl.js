(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00101_P06");
            this.set_titletext("일 목욕제공기록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,473);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_record", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"ac_day\" type=\"STRING\" size=\"256\"/><Column id=\"ac_name\" type=\"STRING\" size=\"256\"/><Column id=\"ac_code\" type=\"STRING\" size=\"256\"/><Column id=\"날씨\" type=\"STRING\" size=\"256\"/><Column id=\"기분\" type=\"STRING\" size=\"256\"/><Column id=\"오전활동1\" type=\"STRING\" size=\"256\"/><Column id=\"오전활동2\" type=\"STRING\" size=\"256\"/><Column id=\"오전활동3\" type=\"STRING\" size=\"256\"/><Column id=\"오후활동1\" type=\"STRING\" size=\"256\"/><Column id=\"오후활동2\" type=\"STRING\" size=\"256\"/><Column id=\"오후활동3\" type=\"STRING\" size=\"256\"/><Column id=\"오전점검\" type=\"STRING\" size=\"256\"/><Column id=\"오후점검\" type=\"STRING\" size=\"256\"/><Column id=\"인지관리\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"ba_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"nalja\" type=\"STRING\" size=\"256\"/><Column id=\"ba_number\" type=\"STRING\" size=\"256\"/><Column id=\"ba_code\" type=\"STRING\" size=\"256\"/><Column id=\"ba_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_gb\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"목욕시간\" type=\"STRING\" size=\"256\"/><Column id=\"sh\" type=\"STRING\" size=\"256\"/><Column id=\"sm\" type=\"STRING\" size=\"256\"/><Column id=\"eh\" type=\"STRING\" size=\"256\"/><Column id=\"em\" type=\"STRING\" size=\"256\"/><Column id=\"제공방법\" type=\"STRING\" size=\"256\"/><Column id=\"ba_memo\" type=\"STRING\" size=\"256\"/><Column id=\"담당자01\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드01\" type=\"STRING\" size=\"256\"/><Column id=\"담당직종01\" type=\"STRING\" size=\"256\"/><Column id=\"담당자02\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드02\" type=\"STRING\" size=\"256\"/><Column id=\"담당직종02\" type=\"STRING\" size=\"256\"/><Column id=\"org_ba_number\" type=\"STRING\" size=\"256\"/><Column id=\"등록일시\" type=\"STRING\" size=\"256\"/><Column id=\"등록자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일시\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER1\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER2\" type=\"STRING\" size=\"256\"/><Column id=\"move_cont\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_content", this);
            obj._setContents("<ColumnInfo><Column id=\"VALUE1\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_NUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bathway", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">전신입욕</Col></Row><Row><Col id=\"CMCD\">2</Col><Col id=\"CMNM\">목욕의자</Col></Row><Row><Col id=\"CMCD\">3</Col><Col id=\"CMNM\">침상</Col></Row><Row><Col id=\"CMCD\">4</Col><Col id=\"CMNM\">목욕거부</Col></Row><Row><Col id=\"CMCD\">5</Col><Col id=\"CMNM\">미입소</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"ba_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"nalja\" type=\"STRING\" size=\"256\"/><Column id=\"ba_number\" type=\"STRING\" size=\"256\"/><Column id=\"ba_code\" type=\"STRING\" size=\"256\"/><Column id=\"ba_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_gb\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"목욕시간\" type=\"STRING\" size=\"256\"/><Column id=\"sh\" type=\"STRING\" size=\"256\"/><Column id=\"sm\" type=\"STRING\" size=\"256\"/><Column id=\"eh\" type=\"STRING\" size=\"256\"/><Column id=\"em\" type=\"STRING\" size=\"256\"/><Column id=\"제공방법\" type=\"STRING\" size=\"256\"/><Column id=\"ba_memo\" type=\"STRING\" size=\"256\"/><Column id=\"담당자01\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드01\" type=\"STRING\" size=\"256\"/><Column id=\"담당직종01\" type=\"STRING\" size=\"256\"/><Column id=\"담당자02\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드02\" type=\"STRING\" size=\"256\"/><Column id=\"담당직종02\" type=\"STRING\" size=\"256\"/><Column id=\"org_ba_number\" type=\"STRING\" size=\"256\"/><Column id=\"등록일시\" type=\"STRING\" size=\"256\"/><Column id=\"등록자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일시\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER1\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER2\" type=\"STRING\" size=\"256\"/><Column id=\"move_cont\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_right","600","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("44");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1","0","36","580","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head2","0","36","100","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("5");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_save","510","0","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_no","1","0","58","26",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("기록번호 : ");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_no_value","64","0","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_text("00000000");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_01","0","132","580","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00","0","164","580","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01","0","196","580","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head2_00","0","132","100","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("19");
            obj.set_text("목욕시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head2_01","0","164","100","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("24");
            obj.set_text("제공방법");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_we_1","105","168","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("25");
            obj.set_text("전신입욕");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_we_2","185","168","75","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("26");
            obj.set_text("목욕의자");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_we_3","270","168","55","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("27");
            obj.set_text("침상");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_we_4","335","168","75","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("28");
            obj.set_text("목욕거부");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("4");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new CheckBox("chk_we_5","420","168","75","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("29");
            obj.set_text("미입소");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("5");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_02","0","100","580","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head2_00_00","0","100","100","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("16");
            obj.set_text("목욕제공일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("mae_date00","105","104","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_border("0px none");
            obj.set_font("500 10pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("left");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00","0","228","580","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head2_01_00","0","196","100","65",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("34");
            obj.set_text("목욕도움\r\n제공자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_manager1","105","200","300","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("31");
            obj.set_text("강남미/요양보호사/20210001");
            obj.set_textAlign("left");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_manager1","485","200","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("32");
            obj.set_text("제공자①");
            obj.set_cssclass("btn_worker");
            obj.set_enable("false");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_manager2","485","232","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("36");
            obj.set_text("제공자②");
            obj.set_cssclass("btn_worker");
            obj.set_enable("false");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_manager2","105","232","300","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("35");
            obj.set_text("강남미/요양보호사/20210001");
            obj.set_textAlign("left");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body4_00_00","0","292","580","156",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_content1","105","297","470","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("41");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_content2","105","327","470","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("42");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_content3","105","357","470","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("43");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_content4","105","387","470","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("44");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_content5","105","417","470","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("45");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_delAll","430","0","75","26",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_eraser");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head2_02","290","36","100","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("7");
            obj.set_text("수급코드");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_00","105","40","60","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("6");
            obj.set_text("강옥주");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","400","40","65","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("8");
            obj.set_text("A103002");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time1","105","136","50","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("20");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_enable("false");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_time1","160","136","10","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("21");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new MaskEdit("mae_time2","175","136","50","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("22");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_font("10pt/normal \"Noto Sans KR\"");
            obj.set_enable("false");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_02","0","68","580","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head2_02_00","0","68","100","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("10");
            obj.set_text("성별·그룹");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01_00","110","72","20","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("11");
            obj.set_text("여");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00_00","145","72","20","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("12");
            obj.set_text("A");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head2_02_01","290","68","100","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("13");
            obj.set_text("생활실");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00","400","72","65","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("14");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body4_00","0","260","580","33",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Edit("edt_content","105","264","470","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("38");
            obj.set_maxlength("80");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body3_00","0","260","100","188",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_text("특이사항");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","590",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_count","1","0","108","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_text("일횟수 = 1명");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_report",null,"0","150","26","0",null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("일 목욕제공리스트");
            obj.set_cssclass("btn_print");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","36","590",null,null,"0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"45\"/><Column size=\"90\"/><Column size=\"45\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"목욕일\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"목욕시간\"/><Cell col=\"5\" text=\"제공방법\"/><Cell col=\"6\" text=\"제공자1\"/><Cell col=\"7\" text=\"제공자2\"/><Cell col=\"8\" text=\"미이용\"/></Band><Band id=\"body\"><Cell text=\"bind:nalja\" calendardateformat=\"yyyy.MM.dd\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:m_group\" combodataset=\"ds_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"2\" text=\"bind:ba_name\" textAlign=\"center\" cssclass=\"cellBWoman\" cursor=\"pointer\" expandchar=\"dot\"/><Cell col=\"3\" text=\"bind:sex_gb\"/><Cell col=\"4\" text=\"bind:목욕시간\"/><Cell col=\"5\" text=\"bind:제공방법\" displaytype=\"combotext\" combodataset=\"ds_bathway\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"6\" text=\"bind:담당자01\"/><Cell col=\"7\" text=\"bind:담당자02\"/><Cell col=\"8\" text=\"bind:move_cont\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_time_from","1233","173","217","229",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_from_0900","3","87","50","25",null,null,null,null,null,null,this.div_time_from.form);
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

            obj = new Button("btn_tdel","162","199",null,"25","3",null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("3");
            obj.set_text("지움");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_05","109","59","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("4");
            obj.set_text("05분");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_30","109","199","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("5");
            obj.set_text("30분");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_1_00_00","3","31","103","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("6");
            obj.set_text("목욕시간");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_1_00_01","109","31","103","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("7");
            obj.set_text("목욕분");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1000","3","115","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("8");
            obj.set_text("10:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1500","56","87","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("9");
            obj.set_text("15:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1100","3","143","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("10");
            obj.set_text("11:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1600","56","115","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("11");
            obj.set_text("16:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_10","109","87","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("12");
            obj.set_text("10분");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_35","162","59","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("13");
            obj.set_text("35분");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_15","109","115","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("14");
            obj.set_text("15분");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_40","162","87","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("15");
            obj.set_text("40분");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1200","3","171","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("16");
            obj.set_text("12:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1700","56","143","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("17");
            obj.set_text("17:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1300","3","199","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("18");
            obj.set_text("13:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1800","56","171","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("19");
            obj.set_text("18:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_20","109","143","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("20");
            obj.set_text("20분");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_45","162","115","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("21");
            obj.set_text("45분");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_25","109","171","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("22");
            obj.set_text("25분");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_50","162","143","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("23");
            obj.set_text("50분");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_55","162","171","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("24");
            obj.set_text("55분");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_0800","3","59","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("25");
            obj.set_text("08:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Button("btn_from_1900","56","199","50","25",null,null,null,null,null,null,this.div_time_from.form);
            obj.set_taborder("26");
            obj.set_text("19:00");
            this.div_time_from.addChild(obj.name, obj);

            obj = new Div("div_time_to","1463","173","111","201",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle","3","3",null,"25","3",null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("0");
            obj.set_text("제공시간");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_05","3","31","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("1");
            obj.set_text("05분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_10","56","31","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("2");
            obj.set_text("10분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_15","3","59","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("3");
            obj.set_text("15분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_20","56","59","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("4");
            obj.set_text("20분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_25","3","87","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("5");
            obj.set_text("25분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_30","56","87","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("6");
            obj.set_text("30분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_35","3","115","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("7");
            obj.set_text("35분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_40","56","115","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("8");
            obj.set_text("40분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_45","3","143","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("9");
            obj.set_text("45분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_50","56","143","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("10");
            obj.set_text("50분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_60","56","171","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("11");
            obj.set_text("60분");
            this.div_time_to.addChild(obj.name, obj);

            obj = new Button("btn_to_55","3","171","50","25",null,null,null,null,null,null,this.div_time_to.form);
            obj.set_taborder("12");
            obj.set_text("55분");
            this.div_time_to.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,473,this,function(p){});
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

            obj = new BindItem("item69","div_search.form.cal_date_pic","value","ds_search","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_right.form.sta_body1_00_00_00","text","ds_data","m_roomname");
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

            obj = new BindItem("item57","div_cont.form.div_right.form.sta_body1_00_00","text","ds_data","ba_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_cont.form.sta_body1_00","text","ds_data","ba_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.sta_body1_00_00","text","ds_data","ba_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.sta_body1_00_01","text","ds_search","sexgb");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.sta_body1_00_00_00_00","text","ds_search","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.sta_no_value","text","ds_data","ba_number");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_right.form.sta_no_value","text","ds_data","ba_number");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.chk_we_1","value","ds_data","제공방법");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_right.form.chk_we_2","value","ds_data","제공방법");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_right.form.chk_we_3","value","ds_data","제공방법");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_right.form.chk_we_4","value","ds_data","제공방법");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_right.form.chk_we_5","value","ds_data","제공방법");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.div_right.form.mae_date00","value","ds_data","ba_nalja");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.div_right.form.sta_manager1","text","ds_data","VIEW_MANAGER1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.div_right.form.sta_manager2","text","ds_data","VIEW_MANAGER2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.div_right.form.edt_content","value","ds_data","ba_memo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.edt_content00_01","value","ds_data","오전활동1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.edt_content00_01_00","value","ds_data","오전활동2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.edt_content00_01_01","value","ds_data","오전활동3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.edt_content00_01_02","value","ds_data","오후활동1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.edt_content00_01_00_00","value","ds_data","오후활동2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_cont.form.edt_content00_01_01_00","value","ds_data","오후활동3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_cont.form.div_right.form.sta_body1_00","text","ds_data","ba_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.sta_body1_00_01_00","text","ds_data","sex_gb");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.sta_body1_00_00_00_00_00","text","ds_data","m_group");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00101_P06.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00101_P06.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00101_P06.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00101_P06
         * 화면명   	: 일 목욕제공기록
         * 화면설명 	: 일 목욕제공기록 저장
         * 작성일   	: 2022-05-26
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
        this.reSearchData = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00101_P06";
        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "date", fv_date);

        	this.fn_search("search");
        };

        // 현황, 수급자, 미이용 백그라운드 설정
        this.initGrid = function(grid)
        {
        	const nameIdx = grid.getBindCellIndex("body", "ba_name"); // 수급자명
        	//const nowIdx = grid.getBindCellIndex("body", "m_type"); // 현황

        	const nameCss = "expr:dataset.getColumn(currow, 'sex_gb') == '남' ? 'cellBMan' : 'cellBWoman'";
        	//const nowCss = "expr:dataset.getColumn(currow, 'm_type') == '퇴소자' ? 'cellBRetire' : ''";

        	grid.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	//grid.setCellProperty("body", nowIdx, "cssclass", nowCss);

         	// 미이용 백그라운드 설정
        	const moveArr = ["nalja", ,"m_group","sex_gb", "목욕시간", "제공방법", "담당자01", "담당자02","move_cont"];
        	for (let i = 0; i < moveArr.length; i++)
        	{
        		const moveIdx = grid.getBindCellIndex("body", moveArr[i]);
        		const moveCss = "expr:dataset.getColumn(currow, 'move_cont') != '' ? 'cellBRetire' : ''";

        		grid.setCellProperty("body", moveIdx, "cssclass", moveCss);
        	}

        }
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        // 저장 전
        this.fn_save_pre = function()
        {
        	if(this.ds_data.rowcount < 1){
        		return false;
        	}
        	// 훈련시간 세팅
        	var time1 = this.div_cont.form.div_right.form.mae_time1.value;
        	var time2 = this.div_cont.form.div_right.form.mae_time2.value;

        	if(Sct.Util.isEmpty(time1) && Sct.Util.isEmpty(time2)){
        		this.ds_data.setColumn(0,"목욕시간", "  :  -  :  ");
        	}else{
        		// 둘중 하나라도 있으면 빈값 체크
        		var timesize1 = time1.replace(" ", "").length;
        		var timesize2 = time2.replace(" ", "").length;

        		if((timesize1 == 4 && timesize2 != 4) || (timesize1 != 4 && timesize2 == 4) || time1 > time2){
        			this.alert("목욕 시간이 잘못입력 되었습니다.");
        			return false;
        		}

        		var sh = time1.substr(0,2);
        		var sm = time1.substr(2,2);
        		var eh = time2.substr(0,2);
        		var em = time2.substr(2,2);
        		this.ds_data.setColumn(0,"목욕시간", sh+":"+sm+"-"+eh+":"+em);
        	}

        	this.reSearchData = this.ds_data.getColumn(0, "ba_number");

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

        	return true;
        }


        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function(flag)
        {
        	const svcId = flag;
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search input2=ds_search";
        	const outDatasets = "ds_list=output1 ds_content=output2";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101_P06.DAY00101_P06_DS_LIST_S DAY00101_P06.DAY00101_P06_DS_CONTENT_S'";
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
        			//this.fn_dataCopy();
        			this.initGrid(this.div_cont.form.div_left.form.grd_list);
        			this.ds_list.set_rowposition(-1);
        			this.div_cont.form.div_left.form.sta_count.set_text("일횟수 = " + this.ds_list.rowcount + " 명");

        			// 특이사항 세팅
        			for(var i=0; i <5; i++){
        				this.div_cont.form.div_right.form.components["btn_content"+(i+1)].set_text(this.ds_content.getColumn(i,"VALUE1"));
        			}
        		} else if(strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");
         			this.fn_search("search_save");
        		} else if(strSvcID == "search_save")
        		{
        			// 해당 로우 이동
        			const sRow = this.fn_findMstRow(this.reSearchData);
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
        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo) {
        	const sFindRow = this.ds_list.findRow("ba_number", fv_saveRefNo);
        	if (sFindRow > -1) {
        		this.ds_list.set_rowposition(sFindRow);
        		//this.fn_dataCopy(sFindRow);
        	}

        	return sFindRow;
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search("search");
        };

        // 저장 버튼
        this.fn_saveBtn = function()
        {
        	this.fn_div_time_visible(); // 시간팝업 닫기
        	this.fn_save();
        };

        // 일 목욕제공리스트
        this.fn_report = function(obj,e)
        {
         	this.fn_div_time_visible(); // 시간팝업 닫기
         	let params;
         	const dicompNm = " ";
        	var popupUrl = "DAY_POP::DAY00101_R01.xfdl";
        	var popupName = "";

        	params = {
        		sicode : fv_sicode
        	,	date : this.ds_search.getColumn(0,"date")
        	,   sign : "1"
        	};

         	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 작성자 팝업
        this.btn_manager_onclick = function(obj,e)
        {
        	this.fn_div_time_visible(); // 시간팝업 닫기

        	if(obj.id == "btn_manager1"){ // 관찰자1
        		var popid = "employee1";
        	}if(obj.id == "btn_manager2"){ // 관찰자2
        		var popid = "employee2";
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
         	// 데이터 존재
         	if(this.ds_data.rowcount > 0){
        		if(!Sct.Util.isEmpty(this.ds_data.getColumn(0, "담당자01"))){
        			const managerStr1 = this.ds_data.getColumn(0, "담당자01").trim()
        					 + "/"
        					 + this.ds_data.getColumn(0, "담당직종01").trim()
        					 + "/"
        					 + this.ds_data.getColumn(0, "담당코드01")
        			this.ds_data.setColumn(0, "VIEW_MANAGER1", managerStr1);
        		}


        		if(!Sct.Util.isEmpty(this.ds_data.getColumn(0, "담당자02"))){
        			const managerStr2 = this.ds_data.getColumn(0, "담당자02").trim()
        					 + "/"
        					 + this.ds_data.getColumn(0, "담당직종02").trim()
        					 + "/"
        					 + this.ds_data.getColumn(0, "담당코드02")
        			this.ds_data.setColumn(0, "VIEW_MANAGER2", managerStr2);
        		}

        		var sh = this.ds_data.getColumn(0,"sh");
        		var sm = this.ds_data.getColumn(0,"sm");
        		var eh = this.ds_data.getColumn(0,"eh");
        		var em = this.ds_data.getColumn(0,"em");

        		this.div_cont.form.div_right.form.mae_time1.set_value(sh+sm);
        		this.div_cont.form.div_right.form.mae_time2.set_value(eh+em);

        		if(this.ds_data.getColumn(0,"제공방법") == 0){
        			this.ds_data.setColumn(0,"제공방법",2);
        		}

        		for(var i=0; i <5; i++){
        			this.div_cont.form.div_right.form.components["btn_content"+(i+1)].set_text(this.ds_content.getColumn(i,"VALUE1"));
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
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		// 제공자1
        		case "employee1" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name1 = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const dutyname1 = objDs.getColumn(0, "담당직종");
        				const staffid1 = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "담당자01", name1);
        				this.ds_data.setColumn(0, "담당직종01", dutyname1);
        				this.ds_data.setColumn(0, "담당코드01", staffid1);
        				this.ds_data.setColumn(0, "VIEW_MANAGER1", name1 + "/" + dutyname1 + "/" +staffid1);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "담당자01", "");
        				this.ds_data.setColumn(0, "담당직종01", "");
        				this.ds_data.setColumn(0, "담당코드01", "");
        				this.ds_data.setColumn(0, "VIEW_MANAGER1", "");
        			}
        			break;
        		// 제공자2
        		case "employee2" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name2 = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const dutyname2 = objDs.getColumn(0, "담당직종");
        				const staffid2 = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "담당자02", name2);
        				this.ds_data.setColumn(0, "담당직종02", dutyname2);
        				this.ds_data.setColumn(0, "담당코드02", staffid2);
        				this.ds_data.setColumn(0, "VIEW_MANAGER2", name2 + "/" + dutyname2 + "/" +staffid2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "담당자02", "");
        				this.ds_data.setColumn(0, "담당직종02", "");
        				this.ds_data.setColumn(0, "담당코드02", "");
        				this.ds_data.setColumn(0, "VIEW_MANAGER2", "");
        			}
        			break;
        	}
        }

        // 특이사항 버튼 클릭 이벤트
        this.btn_content_onclick = function(obj,e)
        {
        	this.fn_div_time_visible(); // 시간팝업 닫기
        	if(this.ds_data.rowcount < 1) return false;
        	this.ds_data.setColumn(0,"ba_memo", obj.text)
        };

        // 지움 이벤트
        this.btn_del = function(obj,e)
        {
        	this.fn_div_time_visible(); // 시간팝업 닫기
        	switch(obj.id) {
        		case "btn_delAll":
        			this.ds_data.setColumn(0, "담당자01", "");
        			this.ds_data.setColumn(0, "담당직종01", "");
        			this.ds_data.setColumn(0, "담당코드01", "");
        			this.ds_data.setColumn(0, "VIEW_MANAGER1", "");
        			this.ds_data.setColumn(0, "담당자02", "");
        			this.ds_data.setColumn(0, "담당직종02", "");
        			this.ds_data.setColumn(0, "담당코드02", "");
        			this.ds_data.setColumn(0, "VIEW_MANAGER2", "");
        			this.ds_data.setColumn(0,"ba_memo","");
        			this.ds_data.setColumn(0,"제공방법",0);
        			this.div_cont.form.div_right.form.mae_time1.set_value("");
        			this.div_cont.form.div_right.form.mae_time2.set_value("");
        			break;
        		case "btn_del1":
        			this.ds_data.setColumn(0, "담당자01", "");
        			this.ds_data.setColumn(0, "담당직종01", "");
        			this.ds_data.setColumn(0, "담당코드01", "");
        			this.ds_data.setColumn(0, "VIEW_MANAGER1", "");
        			break;
        		case "btn_del2":
        			this.ds_data.setColumn(0, "담당자02", "");
        			this.ds_data.setColumn(0, "담당직종02", "");
        			this.ds_data.setColumn(0, "담당코드02", "");
        			this.ds_data.setColumn(0, "VIEW_MANAGER2", "");
        			break;
        		default:
        	}
        };


        // 제공방법 선택
        this.mainChk_onchanged = function(obj,e)
        {
        	const num = obj.id.substr(7);

        	const prevalue = e.prevalue;
        	const value = e.postvalue;

        	switch (obj.id)
        	{
        		// 배뇨관찰
        		case "chk_we_" + num:
        				if(value == 1){
        					this.fn_chk_we(value);
        				}else if(value == 2){
        					this.fn_chk_we(value);
        				}else if(value == 3){
        					this.fn_chk_we(value);
        				}else if(value == 4){
        					this.fn_chk_we(value);
        					this.ds_data.setColumn(0,"ba_memo",obj.text);
        				}else if(value == 5){
        					this.fn_chk_we(value);
        					this.ds_data.setColumn(0,"ba_memo",obj.text);
        				}else{
        					this.ds_data.setColumn(0,"제공방법", e.prevalue);
        				}
        			break;

        	}
        };

        this.fn_chk_we = function (value)
        {
        	for(var i=1; i<=5; i++){
        		if(i != value){
        			this.div_cont.form.div_right.form.components["chk_we_"+i].set_value(0);
        		}
        	}
        	this.ds_data.setColumn(0,"제공방법", value);
        };

        // from 팝업 시간 버튼 클릭
        this.from_hour_btn_onclick = function(obj,e)
        {
        	//fv_tfromid 선택한 컴포넌트 id
        	var objid = obj.id.substr(9);
        	this.div_cont.form.div_right.form.mae_time1.set_value(objid);
        };

        // from 팝업 분 버튼 클릭
        this.from_minute_btn_onclick = function(obj,e)
        {
        	this.div_cont.form.div_right.form.btn_manager1.setFocus();
        	var objid = obj.id.substr(9); // 분
        	var hour = this.div_cont.form.div_right.form.mae_time1.value.substr(0,2); // 시간

        	if(hour.replace(" ", "").length == 2){ // 시간 빈값체크
        		this.div_cont.form.div_right.form.mae_time1.set_value(hour+objid);
        		this.div_time_from.set_visible(false);
        	}
        };

        // to 분 버튼 클릭
        this.to_btn_onclick = function(obj,e)
        {
        	// 클릭시 from div 닫기
        	this.div_cont.form.div_right.form.btn_manager1.setFocus();
        	this.div_time_to.set_visible(false);

        	var objid = obj.id.substr(7); // 선택한 버튼 분

        	var time = this.div_cont.form.div_right.form.mae_time1.value; // from 시간

        	if(!Sct.Util.isEmpty(time)){ // 시작시간이 빈값이 아니면 입력
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
        			this.div_cont.form.div_right.form.mae_time2.set_value(settime);
        		}
        	}

        };

        // 닫기, 지움
        this.from_btn_onclick = function(obj,e)
        {
        	switch(obj.id) {
        		case "btn_tcancle":
        			this.div_cont.form.div_right.form.btn_manager1.setFocus();
        			this.div_time_from.set_visible(false); // 닫기
        			break;
        		case "btn_tdel":
        			this.div_cont.form.div_right.form.mae_time1.set_value("");
        			this.div_cont.form.div_right.form.mae_time2.set_value("");
        			this.div_cont.form.div_right.form.btn_manager1.setFocus();
        			this.div_time_from.set_visible(false); // 닫기
        			break;
        		default:
        	}
        };

        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	const selIdx = obj.getBindCellIndex("body", "ba_name");

        	// 수급자명 컬럼인 경우
        	if (e.col == selIdx)
        	{
        		this.div_cont.form.div_right.form.mae_time1.set_enable(true);
        		this.div_cont.form.div_right.form.mae_time2.set_enable(true);
        		this.div_cont.form.div_right.form.btn_manager1.set_enable(true);
        		this.div_cont.form.div_right.form.btn_manager2.set_enable(true);
        // 		this.div_cont.form.div_right.form.btn_del1.set_enable(true);
        // 		this.div_cont.form.div_right.form.btn_del2.set_enable(true);
        		this.ds_data.clearData();
        		const nRow = this.ds_data.addRow();
        		// 선택한 로우의 데이터 copy
        		this.ds_data.copyRow(nRow, this.ds_list, e.row);

        		// 목욕도움제공자 값 세팅
        		if(!Sct.Util.isEmpty(this.ds_data.getColumn(0, "담당자01"))){
        			const managerStr1 = this.ds_data.getColumn(0, "담당자01").trim()
        					 + "/"
        					 + this.ds_data.getColumn(0, "담당직종01").trim()
        					 + "/"
        					 + this.ds_data.getColumn(0, "담당코드01")
        			this.ds_data.setColumn(0, "VIEW_MANAGER1", managerStr1);
        		}
        		if(!Sct.Util.isEmpty(this.ds_data.getColumn(0, "담당자02"))){
        			const managerStr2 = this.ds_data.getColumn(0, "담당자02").trim()
        					 + "/"
        					 + this.ds_data.getColumn(0, "담당직종02").trim()
        					 + "/"
        					 + this.ds_data.getColumn(0, "담당코드02")
        			this.ds_data.setColumn(0, "VIEW_MANAGER2", managerStr2);
        		}

        		// 목욕시간 세팅
        		var sh = this.ds_data.getColumn(0,"sh");
        		var sm = this.ds_data.getColumn(0,"sm");
        		var eh = this.ds_data.getColumn(0,"eh");
        		var em = this.ds_data.getColumn(0,"em");

        		this.div_cont.form.div_right.form.mae_time1.set_value(sh+sm);
        		this.div_cont.form.div_right.form.mae_time2.set_value(eh+em);

        		if(this.ds_data.getColumn(0,"제공방법") == 0){
        			this.ds_data.setColumn(0,"제공방법",2);
        		}
        	}

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(0, 1);
        	this.ds_data.set_updatecontrol(true);
        };

        //from 시간 포커스
        this.div_cont_div_right_mae_time1_onsetfocus = function(obj,e)
        {
        	this.div_time_from.set_visible(true);
        	this.div_time_to.set_visible(false);

        	this.div_time_from.move(633,173);
        };

        //to 시간 포커스
        this.div_cont_div_right_mae_time2_onsetfocus = function(obj,e)
        {
        	this.div_time_from.set_visible(false);
        	this.div_time_to.set_visible(true);

        	this.div_time_to.move(756,173);
        };

        // from 시간 아웃포커스
        this.div_cont_div_right_mae_time1_onkillfocus = function(obj,e)
        {
        	// 포커스가 버튼이 아니면 팝업 닫기
        	if(this.getFocus().toString() != "[object Button]")
        	{
        		this.div_time_from.set_visible(false);
        	}
        };

        // to 시간 아웃포커스
        this.div_cont_div_right_mae_time2_onkillfocus = function(obj,e)
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

        // 닫기
        this.DAY00101_P06_onclose = function(obj,e)
        {
        	this.ds_return.clearData();
        	this.ds_return.copyData(this.ds_list);
        	this.close(this.ds_return.saveXML());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.DAY00101_P06_onclose,this);
            this.div_cont.form.div_right.form.sta_head2.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.div_right.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_cont.form.div_right.form.sta_body1_01_01.addEventHandler("onclick",this.div_cont_div_right_sta_body1_01_01_onclick,this);
            this.div_cont.form.div_right.form.sta_head2_00.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.div_right.form.sta_head2_01.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.div_right.form.chk_we_1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.chk_we_1.addEventHandler("onclick",this.div_cont_div_right_chk_we_1_onclick,this);
            this.div_cont.form.div_right.form.chk_we_2.addEventHandler("onclick",this.div_cont_chk_we_2_onclick,this);
            this.div_cont.form.div_right.form.chk_we_2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.chk_we_3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.chk_we_3.addEventHandler("onclick",this.div_cont_chk_we_3_onclick,this);
            this.div_cont.form.div_right.form.chk_we_4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.chk_we_5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.sta_head2_00_00.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.div_right.form.mae_date00.addEventHandler("onchanged",this.div_cont_mae_date00_onchanged,this);
            this.div_cont.form.div_right.form.sta_head2_01_00.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.div_right.form.btn_manager1.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.div_right.form.btn_manager2.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.div_right.form.sta_body4_00_00.addEventHandler("onclick",this.div_cont_sta_body4_00_00_onclick,this);
            this.div_cont.form.div_right.form.btn_content1.addEventHandler("onclick",this.btn_content_onclick,this);
            this.div_cont.form.div_right.form.btn_content2.addEventHandler("onclick",this.btn_content_onclick,this);
            this.div_cont.form.div_right.form.btn_content3.addEventHandler("onclick",this.btn_content_onclick,this);
            this.div_cont.form.div_right.form.btn_content4.addEventHandler("onclick",this.btn_content_onclick,this);
            this.div_cont.form.div_right.form.btn_content5.addEventHandler("onclick",this.btn_content_onclick,this);
            this.div_cont.form.div_right.form.btn_delAll.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.div_right.form.sta_head2_02.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.div_right.form.mae_time1.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.div_right.form.mae_time1.addEventHandler("onsetfocus",this.div_cont_div_right_mae_time1_onsetfocus,this);
            this.div_cont.form.div_right.form.mae_time1.addEventHandler("onkillfocus",this.div_cont_div_right_mae_time1_onkillfocus,this);
            this.div_cont.form.div_right.form.mae_time1.addEventHandler("oneditclick",this.div_cont_div_right_mae_time1_oneditclick,this);
            this.div_cont.form.div_right.form.mae_time2.addEventHandler("onchanged",this.mae_time_onchanged,this);
            this.div_cont.form.div_right.form.mae_time2.addEventHandler("onsetfocus",this.div_cont_div_right_mae_time2_onsetfocus,this);
            this.div_cont.form.div_right.form.mae_time2.addEventHandler("onkillfocus",this.div_cont_div_right_mae_time2_onkillfocus,this);
            this.div_cont.form.div_right.form.sta_head2_02_00.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.div_right.form.sta_head2_02_01.addEventHandler("onclick",this.div_cont_sta_head2_onclick,this);
            this.div_cont.form.div_left.form.btn_report.addEventHandler("onclick",this.fn_report,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
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
            this.div_time_from.form.btn_from_0800.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_from.form.btn_from_1900.addEventHandler("onclick",this.from_hour_btn_onclick,this);
            this.div_time_to.form.btn_cancle.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_05.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_10.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_15.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_20.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_25.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_30.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_35.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_40.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_45.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_50.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_60.addEventHandler("onclick",this.to_btn_onclick,this);
            this.div_time_to.form.btn_to_55.addEventHandler("onclick",this.to_btn_onclick,this);
        };
        this.loadIncludeScript("DAY00101_P06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
