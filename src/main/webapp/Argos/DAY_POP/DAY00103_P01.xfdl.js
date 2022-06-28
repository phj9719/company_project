(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00103_P01");
            this.set_titletext("식사도움 관찰기록");
            if (Form == this.constructor)
            {
                this._setFormPosition(792,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kinds", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">일반식</Col></Row><Row><Col id=\"CMCD\">2</Col><Col id=\"CMNM\">죽</Col></Row><Row><Col id=\"CMCD\">3</Col><Col id=\"CMNM\">유동.미음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_amount", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">1</Col></Row><Row><Col id=\"CMCD\">2</Col><Col id=\"CMNM\">½상</Col></Row><Row><Col id=\"CMCD\">3</Col><Col id=\"CMNM\">½하</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"k_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"nalja\" type=\"STRING\" size=\"256\"/><Column id=\"k_number\" type=\"STRING\" size=\"256\"/><Column id=\"k_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"k_code\" type=\"STRING\" size=\"256\"/><Column id=\"식사종류\" type=\"STRING\" size=\"256\"/><Column id=\"식사종류명\" type=\"STRING\" size=\"256\"/><Column id=\"아침양\" type=\"STRING\" size=\"256\"/><Column id=\"아침종류\" type=\"STRING\" size=\"256\"/><Column id=\"점심양\" type=\"STRING\" size=\"256\"/><Column id=\"점심종류\" type=\"STRING\" size=\"256\"/><Column id=\"저녁양\" type=\"STRING\" size=\"256\"/><Column id=\"저녁종류\" type=\"STRING\" size=\"256\"/><Column id=\"오전간식\" type=\"STRING\" size=\"256\"/><Column id=\"오후간식\" type=\"STRING\" size=\"256\"/><Column id=\"아침시\" type=\"STRING\" size=\"256\"/><Column id=\"아침분\" type=\"STRING\" size=\"256\"/><Column id=\"점심시\" type=\"STRING\" size=\"256\"/><Column id=\"점심분\" type=\"STRING\" size=\"256\"/><Column id=\"저녁시\" type=\"STRING\" size=\"256\"/><Column id=\"저녁분\" type=\"STRING\" size=\"256\"/><Column id=\"요양일지\" type=\"STRING\" size=\"256\"/><Column id=\"일지담당\" type=\"STRING\" size=\"256\"/><Column id=\"일지코드\" type=\"STRING\" size=\"256\"/><Column id=\"구강담당\" type=\"STRING\" size=\"256\"/><Column id=\"구강코드\" type=\"STRING\" size=\"256\"/><Column id=\"구강상태\" type=\"STRING\" size=\"256\"/><Column id=\"구강내용\" type=\"STRING\" size=\"256\"/><Column id=\"b_time\" type=\"STRING\" size=\"256\"/><Column id=\"b_time1\" type=\"STRING\" size=\"256\"/><Column id=\"b_time2\" type=\"STRING\" size=\"256\"/><Column id=\"l_time\" type=\"STRING\" size=\"256\"/><Column id=\"l_time1\" type=\"STRING\" size=\"256\"/><Column id=\"l_time2\" type=\"STRING\" size=\"256\"/><Column id=\"d_time\" type=\"STRING\" size=\"256\"/><Column id=\"d_time1\" type=\"STRING\" size=\"256\"/><Column id=\"d_time2\" type=\"STRING\" size=\"256\"/><Column id=\"am_time\" type=\"STRING\" size=\"256\"/><Column id=\"pm_time\" type=\"STRING\" size=\"256\"/><Column id=\"구강메모\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER1\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_record", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"k_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"k_code\" type=\"STRING\" size=\"256\"/><Column id=\"k_name\" type=\"STRING\" size=\"256\"/><Column id=\"요양일지\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sicode\">1</Col><Col id=\"k_nalja\">일반식</Col></Row><Row><Col id=\"sicode\">2</Col><Col id=\"k_nalja\">죽</Col></Row><Row><Col id=\"sicode\">3</Col><Col id=\"k_nalja\">유동.미음</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_body1","0","36","772","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2","273","36","85","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00","362","40","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00","484","40","35","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","522","40","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01","446","40","35","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_kinds","0","79","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_background("#32cd32");
            obj.set_textAlign("center");
            obj.set_color("white");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","36","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("제공일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_num1","66","0","224","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_textAlign("left");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_date","103","40","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_time","0","111","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_text("식사시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_b","97","79","177","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("아침");
            obj.set_textAlign("center");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_l","273","79","177","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("점심");
            obj.set_textAlign("center");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_d","449","79","177","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("저녁");
            obj.set_textAlign("center");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_s","625","79","147","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("오전,오후간식");
            obj.set_textAlign("center");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_b_time","97","111","177","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_l_time","273","111","177","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_d_time","449","111","177","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_s_time1","625","111","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00","0","143","98","143",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_text("식사종류\r\n식사량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_01_00","97","143","177","111",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00_01_00","273","143","177","136",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00_00_01_00","449","143","177","136",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00_00_00_00_00","625","143","147","136",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("rdo_b","103","148","95","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            obj.set_cssclass("radioselect");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_kinds");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("rdo_ba","203","148","65","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("25");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_cssclass("radioselect");
            obj.set_innerdataset("ds_amount");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_01_01","97","253","177","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00_01_01","273","253","177","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00_00_01_01","449","253","177","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00_00_00_00_01","625","253","147","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_bd","177","256","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("30");
            obj.set_text("아침지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("rdo_l","279","148","95","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("31");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_kinds");
            obj.set_cssclass("radioselect");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("rdo_la","380","148","65","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("32");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_amount");
            obj.set_cssclass("radioselect");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("rdo_d","455","148","95","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("33");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_kinds");
            obj.set_cssclass("radioselect");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("rdo_da","555","148","65","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("34");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_amount");
            obj.set_cssclass("radioselect");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("rdo_sa2","701","148","65","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("35");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_amount");
            obj.set_cssclass("radioselect");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_ld","355","256","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("36");
            obj.set_text("점심지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_sd","676","256","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("37");
            obj.set_text("간식지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_dd","530","256","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("38");
            obj.set_text("저녁지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_s_time2","698","111","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Radio("rdo_sa1","631","148","65","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("40");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_amount");
            obj.set_cssclass("radioselect");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","70","26","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("41");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body10","0","381","772","205",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_content2","103","385","663","196",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("43");
            obj.set_maxlength("2000");
            obj.set_wordWrap("char");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head10","0","381","98","205",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("요양일지");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body8_00","0","285","772","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_state","0","285","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("46");
            obj.set_text("구강상태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body8_00_00","0","317","772","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_01_01","0","317","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("48");
            obj.set_text("처리내용");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body8_00_00_00","0","349","772","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01","0","349","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body8_00_00_00_00","0","585","772","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_00","0","585","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_content","103","321","663","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("53");
            obj.set_maxlength("40");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_state_delete","656","352","110","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("54");
            obj.set_text("구강상태지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_record","611","588","155","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("55");
            obj.set_text("전날 요양일지 조회");
            obj.set_cssclass("btn_search");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_state2","200","289","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("56");
            obj.set_text("입안 행굼");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_x");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_state1","103","289","90","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("57");
            obj.set_text("양치질도움");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_x");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager_value","108","352","174","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("58");
            obj.set_text("요양보호사 / 20210000");
            obj.set_textAlign("left");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager_value2","108","588","174","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("59");
            obj.set_text("요양보호사 / 20210000");
            obj.set_textAlign("left");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager1","4","352","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("60");
            obj.set_text("구강점검");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager2","4","588","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("61");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_no","1","3","58","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("62");
            obj.set_text("기록번호 : ");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_no_value","64","3","70","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("63");
            obj.set_text("00000000");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",792,650,this,function(p){});
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

            obj = new BindItem("item0","div_cont.form.sta_body1_00","text","ds_data","k_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.sta_body1_00_00_00","text","ds_data","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.sta_body1_00_00","text","ds_data","k_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.sta_body1_00_01","text","ds_data","성별");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.sta_kinds","text","ds_data","식사종류명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.sta_date","text","ds_data","nalja");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.sta_b_time","text","ds_data","아침시간");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.sta_l_time","text","ds_data","점심시간");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.sta_d_time","text","ds_data","저녁시간");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.sta_s_time1","text","ds_data","am_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.sta_s_time2","text","ds_data","pm_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.rdo_b","value","ds_data","아침종류");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.rdo_ba","value","ds_data","아침양");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.rdo_l","value","ds_data","점심종류");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.rdo_la","value","ds_data","점심양");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.rdo_d","value","ds_data","저녁종류");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.rdo_da","value","ds_data","저녁양");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.rdo_sa2","value","ds_data","오후간식");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.rdo_sa1","value","ds_data","오전간식");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.txt_content2","value","ds_data","요양일지");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.edt_content","value","ds_data","구강내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.chk_state2","value","ds_data","구강상태");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.chk_state1","value","ds_data","구강상태");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.sta_manager_value","text","ds_data","VIEW_MANAGER1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.sta_manager_value2","text","ds_data","VIEW_MANAGER2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.div_right.form.div_main.form.sta_no_value","text","ds_data","식사번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.sta_no_value","text","ds_data","k_number");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00103_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00103_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00103_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00103_P01
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

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00103_P01";

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
        	// 구강상태 값이 있거나 처리내용이 있거나 둘 다 있으면 구강점검자 체크
        	if((this.ds_data.getColumn(0,"구강상태") != 0 || !Sct.Util.isEmpty(this.ds_data.getColumn(0,"구강내용")))){
        		if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"구강담당"))){
        			this.alert("구강점검자를 지정해야합니다.");
        			return false;
        		}
        	}

        	// 요양일지가 빈값이 아닐때 작성자 빈값 체크
        	if(!Sct.Util.isEmpty(this.ds_data.getColumn(0,"요양일지"))){
        		if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"일지담당")) || nexacro.trim(this.ds_data.getColumn(0,"일지담당")) == ""){
        			this.alert("작성자를 지정해야합니다.");
        			return false;
        		}
        	}

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
        				   + "sqlId='DAY00103_P01.DAY00103_P01_DS_DATA_S '";
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
        			// 구강점검, 작성자
        			var manager1 = "";
        			var manager2 = "";

        			if(nexacro.trim(this.ds_data.getColumn(0,"구강담당")) != ""){
        				manager1 = nexacro.trim(this.ds_data.getColumn(0,"구강담당")) + "/" + this.ds_data.getColumn(0,"구강코드");
        			}
        			if(nexacro.trim(this.ds_data.getColumn(0,"일지담당")) != ""){
        				manager2 = nexacro.trim(this.ds_data.getColumn(0,"일지담당")) + "/" + this.ds_data.getColumn(0,"일지코드");
        			}
        // 			else{
        // 				this.ds_data.setColumn(0, "일지담당", nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name")));
        // 				this.ds_data.setColumn(0, "일지코드", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid"));
        // 				manager2 = nexacro.trim(this.ds_data.getColumn(0,"일지담당")) + "/" + this.ds_data.getColumn(0,"일지코드");
        // 			}

        			var btime = this.ds_data.getColumn(0,"아침시간");
        			var ltime = this.ds_data.getColumn(0,"점심시간");
        			var dtime = this.ds_data.getColumn(0,"저녁시간");

        			if(btime == "00:00"){
        			this.ds_data.setColumn(0,"아침시간", this.ds_data.getColumn(0,"b_time"));
        			}
        			if(ltime == "00:00"){
        				this.ds_data.setColumn(0,"점심시간", this.ds_data.getColumn(0,"l_time"));
        			}
        			if(dtime == "00:00"){
        				this.ds_data.setColumn(0,"저녁시간", this.ds_data.getColumn(0,"d_time"));
        			}

        			this.ds_data.setColumn(0,"VIEW_MANAGER1", manager1);
        			this.ds_data.setColumn(0,"VIEW_MANAGER2", manager2);

        		} else if(strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");
         			this.close(this.ds_return.saveXML());

        		} else if(strSvcID == "record_search") // 전날 요양일지 조회
        		{
        			if(this.ds_record.rowcount > 0) {
        				var record = this.ds_record.getColumn(0,"요양일지");
        				this.ds_data.setColumn(0,"요양일지",record);
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

        this.btn_manager_onclick = function(obj,e)
        {
        	if(obj.id == "btn_manager1"){ // 구강점검
        		var popid = "employee1";
        	}if(obj.id == "btn_manager2"){ // 작성자
        		var popid = "employee2";
        	}

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : fv_date
        	};

        	Sct.popup(this, popid, 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
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
        		// 구강점검
        		case "employee1" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name1 = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid1 = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "구강담당", name1);
        				this.ds_data.setColumn(0, "구강코드", staffid1);
        				this.ds_data.setColumn(0, "VIEW_MANAGER1", name1 + "/" + staffid1);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "구강담당", "");
        				this.ds_data.setColumn(0, "구강코드", "");
        				this.ds_data.setColumn(0, "VIEW_MANAGER1", "");
        			}
        			break;
        		// 점검자
        		case "employee2" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name2 = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid2 = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "일지담당", name2);
        				this.ds_data.setColumn(0, "일지코드", staffid2);
        				this.ds_data.setColumn(0, "VIEW_MANAGER2", name2 + "/" + staffid2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "일지담당", "");
        				this.ds_data.setColumn(0, "일지코드", "");
        				this.ds_data.setColumn(0, "VIEW_MANAGER2", "");
        			}
        			break;
        	}
        }

        // 지움버튼 이벤트
        this.btn_del = function(obj,e)
        {
        	var objid = obj.id.substr(4);

        	if(objid == "bd"){ // 아침지움
        		this.ds_data.setColumn(0,"아침종류",0);
        		this.ds_data.setColumn(0,"아침양",0);
        	}else if(objid == "ld"){ // 점심지움
        		this.ds_data.setColumn(0,"점심종류",0);
        		this.ds_data.setColumn(0,"점심양",0);
        	}else if(objid == "dd"){ // 저녁지움
        		this.ds_data.setColumn(0,"저녁종류",0);
        		this.ds_data.setColumn(0,"저녁양",0);
        	}else if(objid == "sd"){ // 간식지움
        		this.ds_data.setColumn(0,"오전간식",0);
        		this.ds_data.setColumn(0,"오후간식",0);
        	}else if(objid == "state_delete"){ // 구강상태지움
        		this.ds_data.setColumn(0,"구강상태",0);
        		this.ds_data.setColumn(0,"구강내용","");
        		this.ds_data.setColumn(0,"구강담당","");
        		this.ds_data.setColumn(0,"구강코드","");
        		this.ds_data.setColumn(0,"VIEW_MANAGER1","");
        	}
        };

        // 구강상태 체크박스 이벤트
        this.chk_state_canchange = function(obj,e)
        {
        	// 구강내용 빈값 시 base_info 구강메모 가져오기
        	if(e.postvalue != "0" && nexacro.trim(this.ds_data.getColumn(0,"구강내용")) == ""){
        		this.ds_data.setColumn(0,"구강내용", this.ds_data.getColumn(0,"구강메모"));
        	}
        	// 1 : 양치질도움, 2 : 입안행굼
        	if(e.postvalue == "1"){
        		this.div_cont.form.chk_state2.set_value(0);
        	}else if(e.postvalue == "2"){
        		this.div_cont.form.chk_state1.set_value(0);
        	}
        };


        // 전날 요양일지 조회
        this.div_cont_btn_record_onclick = function(obj,e)
        {
        	const svcId = "record_search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_data ";
        	const outDatasets = "ds_record=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00103_P01.DAY00103_P01_DS_RECORD_S '";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.rdo_b.addEventHandler("onitemchanged",this.div_cont_rdo_b_onitemchanged,this);
            this.div_cont.form.rdo_ba.addEventHandler("onitemchanged",this.div_cont_rdo_b_onitemchanged,this);
            this.div_cont.form.btn_bd.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.rdo_l.addEventHandler("onitemchanged",this.div_cont_rdo_b_onitemchanged,this);
            this.div_cont.form.rdo_la.addEventHandler("onitemchanged",this.div_cont_rdo_b_onitemchanged,this);
            this.div_cont.form.rdo_d.addEventHandler("onitemchanged",this.div_cont_rdo_b_onitemchanged,this);
            this.div_cont.form.rdo_da.addEventHandler("onitemchanged",this.div_cont_rdo_b_onitemchanged,this);
            this.div_cont.form.rdo_sa2.addEventHandler("onitemchanged",this.div_cont_rdo_b_onitemchanged,this);
            this.div_cont.form.btn_ld.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.btn_sd.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.btn_dd.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.rdo_sa1.addEventHandler("onitemchanged",this.div_cont_rdo_b_onitemchanged,this);
            this.div_cont.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_cont.form.btn_state_delete.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.btn_record.addEventHandler("onclick",this.div_cont_btn_record_onclick,this);
            this.div_cont.form.chk_state2.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.chk_state1.addEventHandler("canchange",this.chk_state_canchange,this);
            this.div_cont.form.btn_manager1.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.btn_manager2.addEventHandler("onclick",this.btn_manager_onclick,this);
        };
        this.loadIncludeScript("DAY00103_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
