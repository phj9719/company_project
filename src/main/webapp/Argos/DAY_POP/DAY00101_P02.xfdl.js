(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00101_P02");
            this.set_titletext("집중배설 관찰기록");
            if (Form == this.constructor)
            {
                this._setFormPosition(708,690);
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
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"cr_number\" type=\"STRING\" size=\"256\"/><Column id=\"cr_nalja\" type=\"DATE\" size=\"256\"/><Column id=\"nalja\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"주간담당\" type=\"STRING\" size=\"256\"/><Column id=\"주간코드\" type=\"STRING\" size=\"256\"/><Column id=\"야간담당\" type=\"STRING\" size=\"256\"/><Column id=\"야간코드\" type=\"STRING\" size=\"256\"/><Column id=\"관찰분\" type=\"STRING\" size=\"256\"/><Column id=\"cr_08\" type=\"STRING\" size=\"256\"/><Column id=\"cr_09\" type=\"STRING\" size=\"256\"/><Column id=\"cr_10\" type=\"STRING\" size=\"256\"/><Column id=\"cr_11\" type=\"STRING\" size=\"256\"/><Column id=\"cr_12\" type=\"STRING\" size=\"256\"/><Column id=\"cr_13\" type=\"STRING\" size=\"256\"/><Column id=\"cr_14\" type=\"STRING\" size=\"256\"/><Column id=\"cr_15\" type=\"STRING\" size=\"256\"/><Column id=\"cr_16\" type=\"STRING\" size=\"256\"/><Column id=\"cr_17\" type=\"STRING\" size=\"256\"/><Column id=\"cr_18\" type=\"STRING\" size=\"256\"/><Column id=\"cr_19\" type=\"STRING\" size=\"256\"/><Column id=\"cr_20\" type=\"STRING\" size=\"256\"/><Column id=\"소변관찰\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_08\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_09\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_10\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_11\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_12\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_13\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_14\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_15\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_16\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_17\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_18\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_19\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_20\" type=\"STRING\" size=\"256\"/><Column id=\"배변관찰\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_08\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_09\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_10\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_11\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_12\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_13\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_14\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_15\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_16\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_17\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_18\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_19\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_20\" type=\"STRING\" size=\"256\"/><Column id=\"기저귀교환\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_08\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_09\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_10\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_11\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_12\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_13\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_14\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_15\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_16\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_17\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_18\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_19\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_20\" type=\"STRING\" size=\"256\"/><Column id=\"옷교환\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_08\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_09\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_10\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_11\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_12\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_13\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_14\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_15\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_16\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_17\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_18\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_19\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_20\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_08\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_09\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_10\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_11\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_12\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_13\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_14\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_15\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_16\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_17\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_18\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_19\" type=\"STRING\" size=\"256\"/><Column id=\"cr_t_20\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER1\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_record", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"ac_day\" type=\"STRING\" size=\"256\"/><Column id=\"ac_name\" type=\"STRING\" size=\"256\"/><Column id=\"ac_code\" type=\"STRING\" size=\"256\"/><Column id=\"날씨\" type=\"STRING\" size=\"256\"/><Column id=\"기분\" type=\"STRING\" size=\"256\"/><Column id=\"오전활동1\" type=\"STRING\" size=\"256\"/><Column id=\"오전활동2\" type=\"STRING\" size=\"256\"/><Column id=\"오전활동3\" type=\"STRING\" size=\"256\"/><Column id=\"오후활동1\" type=\"STRING\" size=\"256\"/><Column id=\"오후활동2\" type=\"STRING\" size=\"256\"/><Column id=\"오후활동3\" type=\"STRING\" size=\"256\"/><Column id=\"오전점검\" type=\"STRING\" size=\"256\"/><Column id=\"오후점검\" type=\"STRING\" size=\"256\"/><Column id=\"인지관리\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_datacopy", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"cr_number\" type=\"STRING\" size=\"256\"/><Column id=\"cr_nalja\" type=\"DATE\" size=\"256\"/><Column id=\"nalja\" type=\"STRING\" size=\"256\"/><Column id=\"cr_name\" type=\"STRING\" size=\"256\"/><Column id=\"cr_code\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"주간담당\" type=\"STRING\" size=\"256\"/><Column id=\"주간코드\" type=\"STRING\" size=\"256\"/><Column id=\"야간담당\" type=\"STRING\" size=\"256\"/><Column id=\"야간코드\" type=\"STRING\" size=\"256\"/><Column id=\"관찰분\" type=\"STRING\" size=\"256\"/><Column id=\"cr_08\" type=\"STRING\" size=\"256\"/><Column id=\"cr_09\" type=\"STRING\" size=\"256\"/><Column id=\"cr_10\" type=\"STRING\" size=\"256\"/><Column id=\"cr_11\" type=\"STRING\" size=\"256\"/><Column id=\"cr_12\" type=\"STRING\" size=\"256\"/><Column id=\"cr_13\" type=\"STRING\" size=\"256\"/><Column id=\"cr_14\" type=\"STRING\" size=\"256\"/><Column id=\"cr_15\" type=\"STRING\" size=\"256\"/><Column id=\"cr_16\" type=\"STRING\" size=\"256\"/><Column id=\"cr_17\" type=\"STRING\" size=\"256\"/><Column id=\"cr_18\" type=\"STRING\" size=\"256\"/><Column id=\"cr_19\" type=\"STRING\" size=\"256\"/><Column id=\"cr_20\" type=\"STRING\" size=\"256\"/><Column id=\"소변관찰\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_08\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_09\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_10\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_11\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_12\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_13\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_14\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_15\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_16\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_17\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_18\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_19\" type=\"STRING\" size=\"256\"/><Column id=\"cr_1_20\" type=\"STRING\" size=\"256\"/><Column id=\"배변관찰\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_08\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_09\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_10\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_11\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_12\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_13\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_14\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_15\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_16\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_17\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_18\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_19\" type=\"STRING\" size=\"256\"/><Column id=\"cr_2_20\" type=\"STRING\" size=\"256\"/><Column id=\"기저귀교환\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_08\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_09\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_10\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_11\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_12\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_13\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_14\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_15\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_16\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_17\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_18\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_19\" type=\"STRING\" size=\"256\"/><Column id=\"cr_3_20\" type=\"STRING\" size=\"256\"/><Column id=\"옷교환\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_08\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_09\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_10\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_11\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_12\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_13\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_14\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_15\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_16\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_17\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_18\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_19\" type=\"STRING\" size=\"256\"/><Column id=\"cr_4_20\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER1\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","10",null,null,"10","6",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","70","26","0",null,null,null,null,null,this.div_cont.form);
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

            obj = new Button("btn_del","523","0","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("전체지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01","0","36","344","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","0","36","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00","343","36","345","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_00","343","36","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_text("성별/생일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01","445","40","40","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01","489","40","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01","0","68","344","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_01","0","68","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("관찰일");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00","0","100","344","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_01_00","0","100","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager1","4","103","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            obj.set_text("관찰자①");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager_value1","108","103","174","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            obj.set_text("요양보호사 / 20210000");
            obj.set_textAlign("left");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_01","343","100","345","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_01_01","343","100","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager2","347","103","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("26");
            obj.set_text("관찰자②");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager_value2","451","103","174","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("27");
            obj.set_text("요양보호사 / 20210000");
            obj.set_textAlign("left");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00","343","68","345","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2_00_00","343","68","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_text("배설상태");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00","187","40","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01_00","103","40","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_kinds","445","72","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_background("#32cd32");
            obj.set_textAlign("center");
            obj.set_color("white");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_kinds00","514","72","65","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_background("#32cd32");
            obj.set_textAlign("center");
            obj.set_color("white");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_kinds01","583","72","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_background("#32cd32");
            obj.set_textAlign("center");
            obj.set_color("white");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_del_manager1","304","103","35","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            obj.set_text("");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_del_manager2","648","103","35","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("28");
            obj.set_text("");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_date","103","72","100","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("289");
            obj.set_readonly("true");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_border("0px none");
            obj.set_font("500 10pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("left");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_01_02","0","137","98","49",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("관찰시간");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_01_02_00","97","137","223","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("배뇨관찰");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1","97","185","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx1","245","185","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv1","171","185","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_01_02_00_00","319","137","223","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("배변관찰");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_01_02_00_01","541","137","74","49",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("기저귀\r\n교환");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_01_02_00_01_00","614","137","74","49",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("옷교환");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_amst_o00_00","97","161","75","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("마름");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_amst_x00_00","245","161","75","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("다량");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_amst_v00_00","171","161","75","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("소량");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_amst_o01_00","319","161","75","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("정상");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_amst_x01_01","467","161","75","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("설사");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_amst_v01_01","393","161","75","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("실변");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o8","112","189","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("43");
            obj.set_text("   V");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_v8","186","189","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("45");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_x8","260","189","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("47");
            obj.set_text("   ◎");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro2","319","185","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx3","467","185","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv2","393","185","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_o8","334","189","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("49");
            obj.set_text("   ○");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_v8","408","189","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("51");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_x8","482","189","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("53");
            obj.set_text("   □");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_clo1","614","185","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_di1","541","185","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr4_8","629","189","44","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("57");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr3_8","556","189","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("55");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00","0","185","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("08 :    ");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08","54","191","28","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("41");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_color("deeppink");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_01","97","217","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx1_00","245","217","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv1_00","171","217","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o9","112","221","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("61");
            obj.set_text("   V");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_v9","186","221","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("63");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_x9","260","221","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("65");
            obj.set_text("   ◎");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro2_00","319","217","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx3_00","467","217","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv2_00","393","217","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_o9","334","221","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("67");
            obj.set_text("   ○");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_v9","408","221","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("69");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_x9","482","221","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("71");
            obj.set_text("   □");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_clo1_00","614","217","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_di1_00","541","217","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr4_9","629","221","44","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("75");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr3_9","556","221","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("73");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_00","0","217","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("09 :    ");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min09","54","223","28","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("59");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_color("deeppink");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_02","97","249","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx1_01","245","249","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv1_01","171","249","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o10","112","253","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("79");
            obj.set_text("   V");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_v10","186","253","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("81");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_x10","260","253","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("83");
            obj.set_text("   ◎");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro2_01","319","249","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx3_01","467","249","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv2_01","393","249","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_o10","334","253","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("85");
            obj.set_text("   ○");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_v10","408","253","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("87");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_x10","482","253","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("89");
            obj.set_text("   □");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_clo1_01","614","249","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_di1_01","541","249","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr4_10","629","253","44","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("93");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr3_10","556","253","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("91");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_01","0","249","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("10 :    ");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min10","54","255","28","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("77");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_color("deeppink");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_03","97","281","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx1_02","245","281","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv1_02","171","281","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o11","112","285","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("97");
            obj.set_text("   V");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_v11","186","285","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("99");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_x11","260","285","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("101");
            obj.set_text("   ◎");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro2_02","319","281","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx3_02","467","281","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv2_02","393","281","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_o11","334","285","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("103");
            obj.set_text("   ○");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_v11","408","285","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("105");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_x11","482","285","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("107");
            obj.set_text("   □");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_clo1_02","614","281","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_di1_02","541","281","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr4_11","629","285","44","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("111");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr3_11","556","285","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("109");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_02","0","281","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("11 :    ");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min11","54","287","28","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("95");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_color("deeppink");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_04","97","313","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx1_03","245","313","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv1_03","171","313","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("116");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o12","112","317","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("115");
            obj.set_text("   V");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_v12","186","317","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("117");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_x12","260","317","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("119");
            obj.set_text("   ◎");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro2_03","319","313","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx3_03","467","313","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("124");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv2_03","393","313","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("122");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_o12","334","317","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("121");
            obj.set_text("   ○");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_v12","408","317","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("123");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_x12","482","317","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("125");
            obj.set_text("   □");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_clo1_03","614","313","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_di1_03","541","313","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("126");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr4_12","629","317","44","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("129");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr3_12","556","317","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("127");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_03","0","313","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("12 :    ");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min12","54","319","28","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("113");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_color("deeppink");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_01_00","97","345","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("132");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx1_00_00","245","345","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv1_00_00","171","345","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("134");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o13","112","349","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("133");
            obj.set_text("   V");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_v13","186","349","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("135");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_x13","260","349","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("137");
            obj.set_text("   ◎");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro2_00_00","319","345","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("138");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx3_00_00","467","345","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("142");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv2_00_00","393","345","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_o13","334","349","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("139");
            obj.set_text("   ○");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_v13","408","349","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("141");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_x13","482","349","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("143");
            obj.set_text("   □");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_clo1_00_00","614","345","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("146");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_di1_00_00","541","345","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("144");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr4_13","629","349","44","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("147");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr3_13","556","349","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("145");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_00_00","0","345","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("130");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("13 :    ");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min13","54","351","28","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("131");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_color("deeppink");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_02_00","97","377","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("150");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx1_01_00","245","377","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("154");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv1_01_00","171","377","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("152");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o14","112","381","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("151");
            obj.set_text("   V");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_v14","186","381","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("153");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_x14","260","381","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("155");
            obj.set_text("   ◎");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro2_01_00","319","377","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("156");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx3_01_00","467","377","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("160");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv2_01_00","393","377","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("158");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_o14","334","381","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("157");
            obj.set_text("   ○");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_v14","408","381","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("159");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_x14","482","381","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("161");
            obj.set_text("   □");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_clo1_01_00","614","377","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("164");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_di1_01_00","541","377","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("162");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr4_14","629","381","44","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("165");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr3_14","556","381","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("163");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_01_00","0","377","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("148");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("14 :    ");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min14","54","383","28","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("149");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_color("deeppink");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_03_00","97","409","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("168");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx1_02_00","245","409","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("172");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv1_02_00","171","409","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("170");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o15","112","413","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("169");
            obj.set_text("   V");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_v15","186","413","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("171");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_x15","260","413","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("173");
            obj.set_text("   ◎");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro2_02_00","319","409","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("174");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx3_02_00","467","409","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("178");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv2_02_00","393","409","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("176");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_o15","334","413","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("175");
            obj.set_text("   ○");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_v15","408","413","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("177");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_x15","482","413","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("179");
            obj.set_text("   □");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_clo1_02_00","614","409","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("182");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_di1_02_00","541","409","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("180");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr4_15","629","413","44","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("183");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr3_15","556","413","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("181");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_02_00","0","409","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("166");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("15 :    ");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min15","54","415","28","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("167");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_color("deeppink");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_01_01","97","441","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("186");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx1_00_01","245","441","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("190");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv1_00_01","171","441","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("188");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o16","112","445","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("187");
            obj.set_text("   V");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_v16","186","445","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("189");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_x16","260","445","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("191");
            obj.set_text("   ◎");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro2_00_01","319","441","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("192");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx3_00_01","467","441","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("196");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv2_00_01","393","441","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("194");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_o16","334","445","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("193");
            obj.set_text("   ○");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_v16","408","445","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("195");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_x16","482","445","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("197");
            obj.set_text("   □");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_clo1_00_01","614","441","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("200");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_di1_00_01","541","441","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("198");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr4_16","629","445","44","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("201");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr3_16","556","445","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("199");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_00_01","0","441","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("184");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("16 :    ");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min16","54","447","28","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("185");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_color("deeppink");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_02_01","97","473","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("204");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx1_01_01","245","473","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("208");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv1_01_01","171","473","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("206");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o17","112","477","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("205");
            obj.set_text("   V");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_v17","186","477","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("207");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_x17","260","477","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("209");
            obj.set_text("   ◎");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro2_01_01","319","473","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("210");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx3_01_01","467","473","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("214");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv2_01_01","393","473","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("212");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_o17","334","477","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("211");
            obj.set_text("   ○");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_v17","408","477","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("213");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_x17","482","477","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("215");
            obj.set_text("   □");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_clo1_01_01","614","473","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("218");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_di1_01_01","541","473","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("216");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr4_17","629","477","44","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("219");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr3_17","556","477","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("217");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_01_01","0","473","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("202");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("17 :    ");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min17","54","479","28","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("203");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_color("deeppink");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_03_01","97","505","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("222");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx1_02_01","245","505","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("226");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv1_02_01","171","505","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("224");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o18","112","509","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("223");
            obj.set_text("   V");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_v18","186","509","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("225");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_x18","260","509","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("227");
            obj.set_text("   ◎");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro2_02_01","319","505","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("228");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx3_02_01","467","505","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("232");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv2_02_01","393","505","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("230");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_o18","334","509","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("229");
            obj.set_text("   ○");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_v18","408","509","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("231");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_x18","482","509","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("233");
            obj.set_text("   □");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_clo1_02_01","614","505","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("236");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_di1_02_01","541","505","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("234");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr4_18","629","509","44","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("237");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr3_18","556","509","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("235");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_02_01","0","505","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("220");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("18 :    ");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min18","54","511","28","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("221");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_color("deeppink");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_02_01_00","97","537","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("240");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx1_01_01_00","245","537","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("244");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv1_01_01_00","171","537","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("242");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o19","112","541","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("241");
            obj.set_text("   V");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_v19","186","541","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("243");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_x19","260","541","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("245");
            obj.set_text("   ◎");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro2_01_01_00","319","537","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("246");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx3_01_01_00","467","537","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("250");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv2_01_01_00","393","537","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("248");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_o19","334","541","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("247");
            obj.set_text("   ○");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_v19","408","541","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("249");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_x19","482","541","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("251");
            obj.set_text("   □");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_clo1_01_01_00","614","537","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("254");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_di1_01_01_00","541","537","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("252");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr4_19","629","541","44","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("255");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr3_19","556","541","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("253");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_01_01_00","0","537","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("238");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("19 :    ");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min19","54","543","28","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("239");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_color("deeppink");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_03_01_00","97","569","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("258");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx1_02_01_00","245","569","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("262");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv1_02_01_00","171","569","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("260");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_o20","112","573","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("259");
            obj.set_text("   V");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_v20","186","573","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("261");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr1_x20","260","573","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("263");
            obj.set_text("   ◎");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro2_02_01_00","319","569","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("264");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crx3_02_01_00","467","569","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("268");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crv2_02_01_00","393","569","75","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("266");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_o20","334","573","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("265");
            obj.set_text("   ○");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_v20","408","573","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("267");
            obj.set_text("  △");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr2_x20","482","573","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("269");
            obj.set_text("   □");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_clo1_02_01_00","614","569","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("272");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_di1_02_01_00","541","569","74","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("270");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr4_20","629","573","44","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("273");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new CheckBox("chk_cr3_20","556","573","45","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("271");
            obj.set_text("   V");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_02_01_00","0","569","98","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("256");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("20 :    ");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min20","54","575","28","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("257");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_color("deeppink");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_02","0","606","688","55",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("274");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_amst_o00_00_00","0","606","95","55",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("275");
            obj.set_textAlign("left");
            obj.set_text("▶ 배뇨.배설\r\n    기저귀시간");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crt09","353","611","65","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("277");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crt13","97","633","65","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("281");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crt10","417","611","65","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("278");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crt14","161","633","65","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("282");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crt11","481","611","65","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("279");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crt15","225","633","65","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("283");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crt12","545","611","65","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("280");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crt16","289","633","65","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("284");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crt17","353","633","65","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("285");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crt18","417","633","65","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("286");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crt19","481","633","65","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("287");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crt20","545","633","65","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("288");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_crt08","289","611","65","23",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("276");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_crt");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_time","758","143","119","195",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_1","3","3","35","35",null,null,null,null,null,null,this.div_time.form);
            obj.set_taborder("0");
            obj.set_text("1");
            this.div_time.addChild(obj.name, obj);

            obj = new Button("btn_2","41","3","35","35",null,null,null,null,null,null,this.div_time.form);
            obj.set_taborder("1");
            obj.set_text("2");
            this.div_time.addChild(obj.name, obj);

            obj = new Button("btn_3","79","3","35","35",null,null,null,null,null,null,this.div_time.form);
            obj.set_taborder("2");
            obj.set_text("3");
            this.div_time.addChild(obj.name, obj);

            obj = new Button("btn_4","3","41","35","35",null,null,null,null,null,null,this.div_time.form);
            obj.set_taborder("3");
            obj.set_text("4");
            this.div_time.addChild(obj.name, obj);

            obj = new Button("btn_5","41","41","35","35",null,null,null,null,null,null,this.div_time.form);
            obj.set_taborder("4");
            obj.set_text("5");
            this.div_time.addChild(obj.name, obj);

            obj = new Button("btn_6","79","41","35","35",null,null,null,null,null,null,this.div_time.form);
            obj.set_taborder("5");
            obj.set_text("6");
            this.div_time.addChild(obj.name, obj);

            obj = new Button("btn_7","3","79","35","35",null,null,null,null,null,null,this.div_time.form);
            obj.set_taborder("6");
            obj.set_text("7");
            this.div_time.addChild(obj.name, obj);

            obj = new Button("btn_8","41","79","35","35",null,null,null,null,null,null,this.div_time.form);
            obj.set_taborder("7");
            obj.set_text("8");
            this.div_time.addChild(obj.name, obj);

            obj = new Button("btn_9","79","79","35","35",null,null,null,null,null,null,this.div_time.form);
            obj.set_taborder("8");
            obj.set_text("9");
            this.div_time.addChild(obj.name, obj);

            obj = new Button("btn_00","3","117","35","35",null,null,null,null,null,null,this.div_time.form);
            obj.set_taborder("9");
            obj.set_text("");
            this.div_time.addChild(obj.name, obj);

            obj = new Button("btn_0","41","117","35","35",null,null,null,null,null,null,this.div_time.form);
            obj.set_taborder("10");
            obj.set_text("0");
            this.div_time.addChild(obj.name, obj);

            obj = new Button("btn_cancle","79","117","35","35",null,null,null,null,null,null,this.div_time.form);
            obj.set_taborder("11");
            obj.set_text("취소");
            this.div_time.addChild(obj.name, obj);

            obj = new Button("btn_select","3","155",null,"35","3",null,null,null,null,null,this.div_time.form);
            obj.set_taborder("12");
            obj.set_text("확인");
            this.div_time.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_time","761","407","119","195",null,null,null,null,null,null,this);
            obj.set_text("");
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Button("btn_1","3","3","35","35",null,null,null,null,null,null,this.pdiv_time.form);
            obj.set_taborder("0");
            obj.set_text("1");
            this.pdiv_time.addChild(obj.name, obj);

            obj = new Button("btn_2","41","3","35","35",null,null,null,null,null,null,this.pdiv_time.form);
            obj.set_taborder("1");
            obj.set_text("2");
            this.pdiv_time.addChild(obj.name, obj);

            obj = new Button("btn_3","79","3","35","35",null,null,null,null,null,null,this.pdiv_time.form);
            obj.set_taborder("2");
            obj.set_text("3");
            this.pdiv_time.addChild(obj.name, obj);

            obj = new Button("btn_6","79","41","35","35",null,null,null,null,null,null,this.pdiv_time.form);
            obj.set_taborder("3");
            obj.set_text("6");
            this.pdiv_time.addChild(obj.name, obj);

            obj = new Button("btn_5","41","41","35","35",null,null,null,null,null,null,this.pdiv_time.form);
            obj.set_taborder("4");
            obj.set_text("5");
            this.pdiv_time.addChild(obj.name, obj);

            obj = new Button("btn_4","3","41","35","35",null,null,null,null,null,null,this.pdiv_time.form);
            obj.set_taborder("5");
            obj.set_text("4");
            this.pdiv_time.addChild(obj.name, obj);

            obj = new Button("btn_7","3","79","35","35",null,null,null,null,null,null,this.pdiv_time.form);
            obj.set_taborder("6");
            obj.set_text("7");
            this.pdiv_time.addChild(obj.name, obj);

            obj = new Button("btn_8","41","79","35","35",null,null,null,null,null,null,this.pdiv_time.form);
            obj.set_taborder("7");
            obj.set_text("8");
            this.pdiv_time.addChild(obj.name, obj);

            obj = new Button("btn_9","79","79","35","35",null,null,null,null,null,null,this.pdiv_time.form);
            obj.set_taborder("8");
            obj.set_text("9");
            this.pdiv_time.addChild(obj.name, obj);

            obj = new Button("btn_00_01_01_00","79","117","35","35",null,null,null,null,null,null,this.pdiv_time.form);
            obj.set_taborder("9");
            obj.set_text("");
            this.pdiv_time.addChild(obj.name, obj);

            obj = new Button("btn_00_00_01_00","41","117","35","35",null,null,null,null,null,null,this.pdiv_time.form);
            obj.set_taborder("10");
            obj.set_text("0");
            this.pdiv_time.addChild(obj.name, obj);

            obj = new Button("btn_00_03_00","3","117","35","35",null,null,null,null,null,null,this.pdiv_time.form);
            obj.set_taborder("11");
            obj.set_text("");
            this.pdiv_time.addChild(obj.name, obj);

            obj = new Button("btn_00_03_00_00","3","155",null,"35","3",null,null,null,null,null,this.pdiv_time.form);
            obj.set_taborder("12");
            obj.set_text("확인");
            this.pdiv_time.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",708,690,this,function(p){});
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

            obj = new BindItem("item19","div_cont.form.sta_no_value","text","ds_data","cr_number");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.sta_body1_00_01","text","ds_data","성별");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.sta_body1_00_00_01","text","ds_data","jumin1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_cont.form.sta_body1_00_00_01_00","text","ds_data","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.sta_body1_00_01_00","text","ds_data","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.sta_kinds","text","ds_data","cr_state1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.sta_kinds00","text","ds_data","cr_state2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.sta_kinds01","text","ds_data","cr_state3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.mae_date","value","ds_data","cr_nalja");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.sta_manager_value1","text","ds_data","VIEW_MANAGER1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.chk_cr1_o8","value","ds_data","cr_1_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.chk_cr1_v8","value","ds_data","cr_1_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.chk_cr1_x8","value","ds_data","cr_1_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.chk_cr1_o9","value","ds_data","cr_1_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.chk_cr1_o10","value","ds_data","cr_1_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.chk_cr1_o11","value","ds_data","cr_1_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.chk_cr1_o12","value","ds_data","cr_1_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.chk_cr1_o13","value","ds_data","cr_1_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.chk_cr1_o14","value","ds_data","cr_1_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.chk_cr1_o15","value","ds_data","cr_1_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.chk_cr1_o16","value","ds_data","cr_1_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.chk_cr1_o17","value","ds_data","cr_1_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.chk_cr1_o18","value","ds_data","cr_1_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.chk_cr1_o19","value","ds_data","cr_1_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.chk_cr1_o20","value","ds_data","cr_1_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.chk_cr1_v14","value","ds_data","cr_1_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.chk_cr1_v15","value","ds_data","cr_1_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.chk_cr1_v16","value","ds_data","cr_1_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_cont.form.chk_cr1_v17","value","ds_data","cr_1_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_cont.form.chk_cr1_v18","value","ds_data","cr_1_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_cont.form.chk_cr1_v19","value","ds_data","cr_1_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_cont.form.chk_cr1_v20","value","ds_data","cr_1_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_cont.form.chk_cr1_x14","value","ds_data","cr_1_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_cont.form.chk_cr1_x15","value","ds_data","cr_1_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_cont.form.chk_cr1_x16","value","ds_data","cr_1_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_cont.form.chk_cr1_x17","value","ds_data","cr_1_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_cont.form.chk_cr1_x18","value","ds_data","cr_1_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_cont.form.chk_cr1_x19","value","ds_data","cr_1_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","div_cont.form.chk_cr1_x20","value","ds_data","cr_1_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","div_cont.form.chk_cr1_v13","value","ds_data","cr_1_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_cont.form.chk_cr1_x13","value","ds_data","cr_1_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_cont.form.chk_cr1_x12","value","ds_data","cr_1_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_cont.form.chk_cr1_v12","value","ds_data","cr_1_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_cont.form.chk_cr1_v11","value","ds_data","cr_1_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","div_cont.form.chk_cr1_x11","value","ds_data","cr_1_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","div_cont.form.chk_cr1_x10","value","ds_data","cr_1_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","div_cont.form.chk_cr1_v10","value","ds_data","cr_1_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","div_cont.form.chk_cr1_v9","value","ds_data","cr_1_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","div_cont.form.chk_cr1_x9","value","ds_data","cr_1_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","div_cont.form.chk_cr2_o8","value","ds_data","cr_2_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","div_cont.form.chk_cr2_v8","value","ds_data","cr_2_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","div_cont.form.chk_cr2_x8","value","ds_data","cr_2_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","div_cont.form.chk_cr4_8","value","ds_data","cr_4_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","div_cont.form.chk_cr3_8","value","ds_data","cr_3_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","div_cont.form.chk_cr2_o9","value","ds_data","cr_2_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","div_cont.form.chk_cr2_v9","value","ds_data","cr_2_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","div_cont.form.chk_cr2_x9","value","ds_data","cr_2_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","div_cont.form.chk_cr4_9","value","ds_data","cr_4_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","div_cont.form.chk_cr3_9","value","ds_data","cr_3_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","div_cont.form.chk_cr2_o10","value","ds_data","cr_2_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","div_cont.form.chk_cr2_v10","value","ds_data","cr_2_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","div_cont.form.chk_cr2_x10","value","ds_data","cr_2_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","div_cont.form.chk_cr4_10","value","ds_data","cr_4_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","div_cont.form.chk_cr3_10","value","ds_data","cr_3_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","div_cont.form.chk_cr2_o11","value","ds_data","cr_2_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","div_cont.form.chk_cr2_v11","value","ds_data","cr_2_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","div_cont.form.chk_cr2_x11","value","ds_data","cr_2_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","div_cont.form.chk_cr4_11","value","ds_data","cr_4_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","div_cont.form.chk_cr3_11","value","ds_data","cr_3_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","div_cont.form.chk_cr2_o12","value","ds_data","cr_2_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","div_cont.form.chk_cr2_v12","value","ds_data","cr_2_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","div_cont.form.chk_cr2_x12","value","ds_data","cr_2_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","div_cont.form.chk_cr4_12","value","ds_data","cr_4_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","div_cont.form.chk_cr3_12","value","ds_data","cr_3_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","div_cont.form.chk_cr2_o13","value","ds_data","cr_2_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","div_cont.form.chk_cr2_v13","value","ds_data","cr_2_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","div_cont.form.chk_cr2_x13","value","ds_data","cr_2_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","div_cont.form.chk_cr4_13","value","ds_data","cr_4_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","div_cont.form.chk_cr3_13","value","ds_data","cr_3_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","div_cont.form.chk_cr2_o14","value","ds_data","cr_2_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","div_cont.form.chk_cr2_v14","value","ds_data","cr_2_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","div_cont.form.chk_cr2_x14","value","ds_data","cr_2_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item116","div_cont.form.chk_cr4_14","value","ds_data","cr_4_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item117","div_cont.form.chk_cr3_14","value","ds_data","cr_3_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item118","div_cont.form.chk_cr2_o15","value","ds_data","cr_2_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item119","div_cont.form.chk_cr2_v15","value","ds_data","cr_2_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item120","div_cont.form.chk_cr2_x15","value","ds_data","cr_2_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item121","div_cont.form.chk_cr4_15","value","ds_data","cr_4_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item122","div_cont.form.chk_cr3_15","value","ds_data","cr_3_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item123","div_cont.form.chk_cr2_o16","value","ds_data","cr_2_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item124","div_cont.form.chk_cr2_v16","value","ds_data","cr_2_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item125","div_cont.form.chk_cr2_x16","value","ds_data","cr_2_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item126","div_cont.form.chk_cr4_16","value","ds_data","cr_4_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item127","div_cont.form.chk_cr3_16","value","ds_data","cr_3_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item128","div_cont.form.chk_cr2_o17","value","ds_data","cr_2_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item129","div_cont.form.chk_cr2_v17","value","ds_data","cr_2_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item130","div_cont.form.chk_cr2_x17","value","ds_data","cr_2_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item131","div_cont.form.chk_cr4_17","value","ds_data","cr_4_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item132","div_cont.form.chk_cr3_17","value","ds_data","cr_3_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item133","div_cont.form.chk_cr2_o18","value","ds_data","cr_2_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item134","div_cont.form.chk_cr2_v18","value","ds_data","cr_2_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item135","div_cont.form.chk_cr2_x18","value","ds_data","cr_2_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item136","div_cont.form.chk_cr4_18","value","ds_data","cr_4_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item137","div_cont.form.chk_cr3_18","value","ds_data","cr_3_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item138","div_cont.form.chk_cr2_o19","value","ds_data","cr_2_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item139","div_cont.form.chk_cr2_v19","value","ds_data","cr_2_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item140","div_cont.form.chk_cr2_x19","value","ds_data","cr_2_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item141","div_cont.form.chk_cr4_19","value","ds_data","cr_4_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item142","div_cont.form.chk_cr3_19","value","ds_data","cr_3_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item143","div_cont.form.chk_cr2_o20","value","ds_data","cr_2_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item144","div_cont.form.chk_cr2_v20","value","ds_data","cr_2_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item145","div_cont.form.chk_cr2_x20","value","ds_data","cr_2_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item146","div_cont.form.chk_cr4_20","value","ds_data","cr_4_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item147","div_cont.form.chk_cr3_20","value","ds_data","cr_3_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.sta_manager_value2","text","ds_data","VIEW_MANAGER2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item148","div_cont.form.edt_min08","value","ds_data","cr_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item149","div_cont.form.edt_min09","value","ds_data","cr_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item150","div_cont.form.edt_min10","value","ds_data","cr_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item151","div_cont.form.edt_min11","value","ds_data","cr_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item152","div_cont.form.edt_min12","value","ds_data","cr_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item153","div_cont.form.edt_min13","value","ds_data","cr_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item154","div_cont.form.edt_min14","value","ds_data","cr_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item155","div_cont.form.edt_min15","value","ds_data","cr_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item156","div_cont.form.edt_min16","value","ds_data","cr_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item157","div_cont.form.edt_min17","value","ds_data","cr_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item158","div_cont.form.edt_min18","value","ds_data","cr_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item159","div_cont.form.edt_min19","value","ds_data","cr_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item160","div_cont.form.edt_min20","value","ds_data","cr_20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item161","div_cont.form.sta_crt08","text","ds_data","cr_t_08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item162","div_cont.form.sta_crt09","text","ds_data","cr_t_09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item163","div_cont.form.sta_crt13","text","ds_data","cr_t_13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item164","div_cont.form.sta_crt10","text","ds_data","cr_t_10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item165","div_cont.form.sta_crt14","text","ds_data","cr_t_14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item166","div_cont.form.sta_crt11","text","ds_data","cr_t_11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item167","div_cont.form.sta_crt15","text","ds_data","cr_t_15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item168","div_cont.form.sta_crt12","text","ds_data","cr_t_12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item169","div_cont.form.sta_crt16","text","ds_data","cr_t_16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item170","div_cont.form.sta_crt17","text","ds_data","cr_t_17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item171","div_cont.form.sta_crt18","text","ds_data","cr_t_18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item172","div_cont.form.sta_crt19","text","ds_data","cr_t_19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item173","div_cont.form.sta_crt20","text","ds_data","cr_t_20");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00101_P02.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00101_P02.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00101_P02.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00101_P02
         * 화면명   	: 집중배설 관찰기록
         * 화면설명 	: 집중배설 관찰기록 저장
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
        const fv_mjumin = this.parent.MJUMIN;
        const fv_sexgb = this.parent.SEXGB;
        const fv_mcode = this.parent.MCODE;
        var fv_minclick = 0; // 분 클릭 횟수
        var fv_mineventid = ""; // 분 컴포넌트 id
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00101_P02";

        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "date", fv_date);
        	this.ds_search.setColumn(0, "m_code", fv_mcode);

        	this.fn_search();
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        // 저장 전
        this.fn_save_pre = function()
        {
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"cr_number"))){ // 기록번호 없을시 rowtype 2(추가행)
        		this.ds_data.set_updatecontrol(false);
        		this.ds_data.setRowType(0,2);
        		this.ds_data.set_updatecontrol(true);
        	}

        // 	// 저장 내용 체크
        // 	if(!Sct.Grid.hasInsertAndUpdateRow(this.ds_data))
        // 	{
        // 		this.alert("저장할 내용이 없습니다.");
        // 		return false;
        // 	}
        //
        	// 관찰자1, 관찰자2 빈 값 체크
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"주간담당")) && Sct.Util.isEmpty(this.ds_data.getColumn(0,"야간담당"))){
        		this.alert("관찰자를 지정해야합니다.");
        		return false;
        	}



         	// 관찰분, 소변관찰, 배변관찰, 기저귀교환, 옷교환 저장값 세팅
        	var crt = "              "; // 40자리
        	var cr1 = "       "; // 20자리
        	var cr2 = "       "; // 20자리
        	var cr3 = "       "; // 20자리
        	var cr4 = "       "; // 20자리

        	for(var i=0; i< 13; i++){
        		if(i < 2){
        			crt += this.ds_data.getColumn(0,"cr_0"+(i+8));
        			cr1 += this.ds_data.getColumn(0,"cr_1_0"+(i+8));
        			cr2 += this.ds_data.getColumn(0,"cr_2_0"+(i+8));
        			cr3 += this.ds_data.getColumn(0,"cr_3_0"+(i+8));
        			cr4 += this.ds_data.getColumn(0,"cr_4_0"+(i+8));
        		}else{
        			crt += this.ds_data.getColumn(0,"cr_"+(i+8));
        			cr1 += this.ds_data.getColumn(0,"cr_1_"+(i+8));
        			cr2 += this.ds_data.getColumn(0,"cr_2_"+(i+8));
        			cr3 += this.ds_data.getColumn(0,"cr_3_"+(i+8));
        			cr4 += this.ds_data.getColumn(0,"cr_4_"+(i+8));
        		}
        	}

        	this.ds_data.setColumn(0,"관찰분",crt);
        	this.ds_data.setColumn(0,"소변관찰",cr1);
        	this.ds_data.setColumn(0,"배변관찰",cr2);
        	this.ds_data.setColumn(0,"기저귀교환",cr3);
        	this.ds_data.setColumn(0,"옷교환",cr4);

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

        	return true;
        }

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
        				   + "sqlId='DAY00101_P02.DAY00101_P02_DS_DATA_S '";
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
        			this.fn_setReturnData();

        		} else if(strSvcID == "delete") // 전날 요양일지 조회
        		{

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
        	this.fn_div_time_visible(); // 시간팝업 닫기
        	this.fn_save();
        };

        // 삭제 버튼
        this.fn_deleteBtn = function()
        {
        	//this.fn_delete();
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
        	// 기록번호
        	var crnum = this.ds_data.getColumn(0,"cr_number");

        	// 기록번호 존재
        	if(!Sct.Util.isEmpty(crnum)){
        		// 배뇨,배설,기저귀 시간 background 설정
         		for(var i=0; i<13; i++){
         			if(i < 2){
         				// 배뇨,배설 데이터 존재시 sta_crt_yellow 세팅, 기저귀 교환시 sta_crt_lightcyan
        				if(this.div_cont.form.components["sta_crt0" + (i+8)].text != ""){
        					if(this.ds_data.getColumn(0,"cr_3_0"+(i+8)) == "1"){ // 기저귀 교환 존재
        						this.div_cont.form.components["sta_crt0" + (i+8)].set_cssclass("sta_crt_lightcyan");
        					}else{
        						this.div_cont.form.components["sta_crt0" + (i+8)].set_cssclass("sta_crt_yellow");
        					}
        				}
         			}else{
        				if(this.div_cont.form.components["sta_crt" + (i+8)].text != ""){
        					if(this.ds_data.getColumn(0,"cr_3_"+(i+8)) == "1"){
        						this.div_cont.form.components["sta_crt" + (i+8)].set_cssclass("sta_crt_lightcyan");
        					}else{
        						this.div_cont.form.components["sta_crt" + (i+8)].set_cssclass("sta_crt_yellow");
        					}
        				}
         			}

         		}

         	}else{ // 새로작성

        		// 관찰자 설정
         		this.ds_data.setColumn(0, "주간담당", nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name")));
         		this.ds_data.setColumn(0, "주간코드", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid"));

         		const managerStr3 = this.ds_data.getColumn(0, "주간담당")
        						 + "/"
        						 + this.ds_data.getColumn(0, "주간코드");
        		this.ds_data.setColumn(0, "VIEW_MANAGER1", managerStr3);

        		// 배뇨관찰 기본값 세팅
        		for(var i=0; i< 13; i++){
        			if(i < 2){
        				this.ds_data.setColumn(0,"cr_0"+(i+8),'00');
        			}else{
        				this.ds_data.setColumn(0,"cr_"+(i+8),'00');
        			}
        		}
        		// 시간 세팅
        		for(var i=0; i< 13; i++){
        			if(i < 2){
        				this.ds_data.setColumn(0,"cr_1_0"+(i+8),1);
        			}else{
        				this.ds_data.setColumn(0,"cr_1_"+(i+8),1);
        			}
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
        this.fn_setReturnData = function()
        {
        	//this.ds_return.clearData();

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
        		case "employee1" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name1 = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid1 = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "주간담당", name1);
        				this.ds_data.setColumn(0, "주간코드", staffid1);
        				this.ds_data.setColumn(0, "VIEW_MANAGER1", name1 + "/" + staffid1);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "주간담당", "");
        				this.ds_data.setColumn(0, "주간코드", "");
        				this.ds_data.setColumn(0, "VIEW_MANAGER1", "");
        			}
        			break;
        		// 관차자2
        		case "employee2" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name2 = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid2 = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "야간담당", name2);
        				this.ds_data.setColumn(0, "야간코드", staffid2);
        				this.ds_data.setColumn(0, "VIEW_MANAGER2", name2 + "/" + staffid2);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "야간담당", "");
        				this.ds_data.setColumn(0, "야간코드", "");
        				this.ds_data.setColumn(0, "VIEW_MANAGER2", "");
        			}
        			break;
        	}
        }

        // O,△,X 체크박스 값 변경 이벤트
        this.mainChk_onchanged = function(obj,e)
        {
        	const num = obj.id.substr(9);

        	const value = e.postvalue;

        	// 배뇨관찰 체크박스 마름, 소량, 다량
        	var cr1_o = this.div_cont.form.components["chk_cr1_o" + num].value;
        	var cr1_v = this.div_cont.form.components["chk_cr1_v" + num].value;
        	var cr1_x = this.div_cont.form.components["chk_cr1_x" + num].value;

        	switch (obj.id)
        	{
        		// 배뇨관찰
        		case "chk_cr1_o" + num:
        			if(value == 1)
        			{
        				this.div_cont.form.components["chk_cr1_v" + num].set_value(0);
        				this.div_cont.form.components["chk_cr1_x" + num].set_value(0);
        				if(num < 10){
        					this.ds_data.setColumn(0,"cr_1_0"+num, 1);
        				}else{
        					this.ds_data.setColumn(0,"cr_1_"+num, 1);
        				}
        			}else{ // 체크박스 해제불가
        				if(cr1_v == 0 && cr1_x == 0){
        					if(num < 10){
        						this.ds_data.setColumn(0,"cr_1_0"+num, 1);
        					}else{
        						this.ds_data.setColumn(0,"cr_1_"+num, 1);
        					}
        				}
        			}
        			break;
        		case "chk_cr1_v" + num:
        			if(value == 2)
        			{
        				this.div_cont.form.components["chk_cr1_o" + num].set_value(0);
        				this.div_cont.form.components["chk_cr1_x" + num].set_value(0);
        				if(num < 10){
        					this.ds_data.setColumn(0,"cr_1_0"+num, 2);
        				}else{
        					this.ds_data.setColumn(0,"cr_1_"+num, 2);
        				}
        			}else{ // 체크박스 해제불가
        				if(cr1_o == 0 && cr1_x == 0){
        					if(num < 10){
        						this.ds_data.setColumn(0,"cr_1_0"+num, 2);
        					}else{
        						this.ds_data.setColumn(0,"cr_1_"+num, 2);
        					}
        				}
        			}
        			break;
        		case "chk_cr1_x" + num:
        			if(value == 3)
        			{
        				this.div_cont.form.components["chk_cr1_o" + num].set_value(0);
        				this.div_cont.form.components["chk_cr1_v" + num].set_value(0);
        				if(num < 10){
        					this.ds_data.setColumn(0,"cr_1_0"+num, 3);
        				}else{
        					this.ds_data.setColumn(0,"cr_1_"+num, 3);
        				}

        			}else{ // 체크박스 해제불가
        				if(cr1_v == 0 && cr1_x == 0){
        					if(num < 10){
        						this.ds_data.setColumn(0,"cr_1_0"+num, 3);
        					}else{
        						this.ds_data.setColumn(0,"cr_1_"+num, 3);
        					}
        				}
        			}
        			break;

        		// 배변관찰
        		case "chk_cr2_o" + num:
        			if(value == 1)
        			{
        				this.div_cont.form.components["chk_cr2_v" + num].set_value(0);
        				this.div_cont.form.components["chk_cr2_x" + num].set_value(0);
        				if(num < 10){
        					this.ds_data.setColumn(0,"cr_2_0"+num, 1);
        				}else{
        					this.ds_data.setColumn(0,"cr_2_"+num, 1);
        				}

        			}
        			break;
        		case "chk_cr2_v" + num:
        			if(value == 2)
        			{
        				this.div_cont.form.components["chk_cr2_o" + num].set_value(0);
        				this.div_cont.form.components["chk_cr2_x" + num].set_value(0);
        				if(num < 10){
        					this.ds_data.setColumn(0,"cr_2_0"+num, 2);
        				}else{
        					this.ds_data.setColumn(0,"cr_2_"+num, 2);
        				}

        			}
        			break;
        		case "chk_cr2_x" + num:
        			if(value == 3)
        			{
        				this.div_cont.form.components["chk_cr2_o" + num].set_value(0);
        				this.div_cont.form.components["chk_cr2_v" + num].set_value(0);
        				if(num < 10){
        					this.ds_data.setColumn(0,"cr_2_0"+num, 3);
        				}else{
        					this.ds_data.setColumn(0,"cr_2_"+num, 3);
        				}

        			}
        			break;
        	}
        };

        // 관찰자 지움, 전체지움
        this.btn_del = function(obj,e)
        {
        	this.fn_div_time_visible(); // 시간팝업 닫기
        	var objid = obj.id.substr(4);

        	if(objid == "del_manager1"){ // 관찰자1
        		this.ds_data.setColumn(0,"주간담당","");
        		this.ds_data.setColumn(0,"주간코드","");
        		this.ds_data.setColumn(0,"VIEW_MANAGER1","");
        	}else if(objid == "del_manager2"){ // 관찰자2
        		this.ds_data.setColumn(0,"야간담당","");
        		this.ds_data.setColumn(0,"야간코드","");
        		this.ds_data.setColumn(0,"VIEW_MANAGER2","");
        	}else if(objid == "del"){ // 전체지움
        		for(i=0; i<13; i++){
        			this.div_cont.form.components["chk_cr1_v" + (i+8)].set_value(0);
        			this.div_cont.form.components["chk_cr1_x" + (i+8)].set_value(0);
        			if(i < 2){ // ex) cr_1_08
        				this.ds_data.setColumn(0,"cr_1_0"+(i+8),1); // 배뇨관찰
        				this.ds_data.setColumn(0,"cr_2_0"+(i+8),0); // 배변관찰
        				this.ds_data.setColumn(0,"cr_3_0"+(i+8),0); // 기저귀교환
        				this.ds_data.setColumn(0,"cr_4_0"+(i+8),0); // 옷교환
        			}else{ // ex) cr_1_10
        				this.ds_data.setColumn(0,"cr_1_"+(i+8),1);
        				this.ds_data.setColumn(0,"cr_2_"+(i+8),0);
        				this.ds_data.setColumn(0,"cr_3_"+(i+8),0);
        				this.ds_data.setColumn(0,"cr_4_"+(i+8),0);
        			}
        		}
        	}
        };

        // 관찰시간 분 변경 이벤트
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

        // 분 클릭 이벤트
        this.edit_oneditclick = function(obj,e)
        {
        //   	this.div_time.set_visible(true);
        //
        // 	fv_mineventid = obj.id // 분클릭 컴포넌트 id
        // 	switch(obj.id) {
        // 		case "edt_min08":
        // 			this.div_time.move(105,185);
        // 			break;
        // 		case "edt_min09":
        // 			this.div_time.move(105,218);
        // 			break;
        // 		case "edt_min10":
        // 			this.div_time.move(105,251);
        // 			break;
        // 		case "edt_min11":
        // 			this.div_time.move(105,284);
        // 			break;
        // 		case "edt_min12":
        // 			this.div_time.move(105,317);
        // 			break;
        // 		case "edt_min13":
        // 			this.div_time.move(105,350);
        // 			break;
        // 		case "edt_min14":
        // 			this.div_time.move(105,383);
        // 			break;
        // 		case "edt_min15":
        // 			this.div_time.move(105,383);
        // 			break;
        // 		case "edt_min16":
        // 			this.div_time.move(105,393);
        // 			break;
        // 		case "edt_min17":
        // 			this.div_time.move(105,403);
        // 			break;
        // 		case "edt_min18":
        // 			this.div_time.move(105,413);
        // 			break;
        // 		case "edt_min19":
        // 			this.div_time.move(105,423);
        // 			break;
        // 		case "edt_min20":
        // 			this.div_time.move(105,433);
        // 			break;
        // 		default:
        // 	}

        };

        // popupdiv 분 클릭
        this.div_time_btn_onclick = function(obj,e)
        {
        	/*
        	 1. 2자리 선택 또는 확인 시 div 닫기
        	 2. 취소 선택 시 00으로 변경
        	 3. 60이상 선택시 00으로 변경
        	*/

        	// 선택한 버튼 값
        	var objid = nexacro.toNumber(obj.id.substr(4));
        	var eventid = fv_mineventid.substr(7); // edt_min08 -> 08
        	var setmin = ""; // 클릭한 데이터 변수

        	fv_minclick = fv_minclick + 1; // 버튼 선택 횟수

        	// 2자리 선택 또는 확인 선택 시 div 닫기
        	if(obj.id == "btn_select"){
        		this.div_cont.form.btn_manager1.setFocus();
        		this.div_time.set_visible(false);
        		if(this.ds_data.getColumn(0,"cr_"+eventid) > 60){
        			this.ds_data.setColumn(0,"cr_"+eventid, "00");
        		}
        		fv_minclick = 0;
        	}else if(obj.id == "btn_cancle"){ // 취소시 00으로 값 변경
        		this.div_cont.form.btn_manager1.setFocus();
        		this.div_time.set_visible(false);
        		this.ds_data.setColumn(0,"cr_"+eventid, "00");
        		fv_minclick = 0;
        	}else{
        		if(fv_minclick == 1){ // 앞자리 변경
        			setmin = objid + this.ds_data.getColumn(0,"cr_"+eventid).substr(1,1);
        			this.ds_data.setColumn(0,"cr_"+eventid, setmin);
        		}else if(fv_minclick == 2){ // 뒷자리 변경, 닫고 선택횟수 0으로 변경
        			setmin = this.ds_data.getColumn(0,"cr_"+eventid).substr(0,1) + objid;
        			if(setmin > 60){ // 60 초과시 00으로 변경
        				this.ds_data.setColumn(0,"cr_"+eventid, "00");
        			}else{
        				this.ds_data.setColumn(0,"cr_"+eventid, setmin);
        			}
        			this.div_cont.form.btn_manager1.setFocus();
        			this.div_time.set_visible(false);
        			fv_minclick = 0;
        		}
        	}

        };

        // 분 포커스
        this.edt_min_onsetfocus = function(obj,e)
        {
        	this.div_time.set_visible(true);

        	fv_mineventid = obj.id // 분클릭 컴포넌트 id
        	switch(obj.id) {
        		case "edt_min08":
        			this.div_time.move(105,185);
        			break;
        		case "edt_min09":
        			this.div_time.move(105,218);
        			break;
        		case "edt_min10":
        			this.div_time.move(105,251);
        			break;
        		case "edt_min11":
        			this.div_time.move(105,284);
        			break;
        		case "edt_min12":
        			this.div_time.move(105,317);
        			break;
        		case "edt_min13":
        			this.div_time.move(105,350);
        			break;
        		case "edt_min14":
        			this.div_time.move(105,383);
        			break;
        		case "edt_min15":
        			this.div_time.move(105,383);
        			break;
        		case "edt_min16":
        			this.div_time.move(105,393);
        			break;
        		case "edt_min17":
        			this.div_time.move(105,403);
        			break;
        		case "edt_min18":
        			this.div_time.move(105,413);
        			break;
        		case "edt_min19":
        			this.div_time.move(105,423);
        			break;
        		case "edt_min20":
        			this.div_time.move(105,433);
        			break;
        		default:
        	}
        };

        // 포커스 아웃
        this.edt_min_onkillfocus = function(obj,e)
        {
        	// 포커스가 버튼이 아니면 팝업 닫기
        	if(this.getFocus().toString() != "[object Button]")
        	{
        		this.div_time.set_visible(false);
        	}
        };

        // 시간팝업 닫기
        this.fn_div_time_visible = function ()
        {
        	this.div_time.set_visible(false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.close,this);
            this.div_cont.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_cont.form.btn_del.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.btn_manager1.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.btn_manager2.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.btn_del_manager1.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.btn_del_manager2.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.chk_cr1_o8.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_v8.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_x8.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_o8.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_v8.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_x8.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.edt_min08.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.chk_cr1_o9.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_v9.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_x9.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_o9.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_v9.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_x9.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.edt_min09.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min09.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min09.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min09.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.chk_cr1_o10.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_v10.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_x10.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_o10.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_v10.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_x10.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.edt_min10.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min10.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min10.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min10.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.chk_cr1_o11.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_v11.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_x11.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_o11.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_v11.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_x11.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.edt_min11.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min11.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min11.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min11.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.chk_cr1_o12.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_v12.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_x12.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_o12.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_v12.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_x12.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.edt_min12.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min12.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min12.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min12.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.chk_cr1_o13.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_v13.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_x13.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_o13.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_v13.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_x13.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.edt_min13.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min13.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min13.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min13.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.chk_cr1_o14.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_v14.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_x14.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_o14.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_v14.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_x14.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.edt_min14.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min14.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min14.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min14.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.chk_cr1_o15.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_v15.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_x15.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_o15.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_v15.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_x15.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.edt_min15.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min15.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min15.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min15.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.chk_cr1_o16.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_v16.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_x16.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_o16.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_v16.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_x16.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.edt_min16.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min16.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min16.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min16.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.chk_cr1_o17.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_v17.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_x17.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_o17.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_v17.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_x17.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.edt_min17.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min17.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min17.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min17.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.chk_cr1_o18.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_v18.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_x18.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_o18.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_v18.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_x18.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.edt_min18.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min18.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min18.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min18.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.chk_cr1_o19.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_v19.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_x19.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_o19.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_v19.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_x19.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.edt_min19.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min19.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min19.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min19.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_cont.form.chk_cr1_o20.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_v20.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr1_x20.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_o20.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_v20.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.chk_cr2_x20.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.edt_min20.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min20.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min20.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min20.addEventHandler("onsetfocus",this.edt_min_onsetfocus,this);
            this.div_time.form.btn_1.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.btn_2.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.btn_3.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.btn_4.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.btn_5.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.btn_6.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.btn_7.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.btn_8.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.btn_9.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.btn_0.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.btn_cancle.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.btn_select.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.pdiv_time.form.btn_1.addEventHandler("onclick",this.pdiv_time_btn_onclick,this);
            this.pdiv_time.form.btn_2.addEventHandler("onclick",this.pdiv_time_btn_onclick,this);
            this.pdiv_time.form.btn_3.addEventHandler("onclick",this.pdiv_time_btn_onclick,this);
            this.pdiv_time.form.btn_6.addEventHandler("onclick",this.pdiv_time_btn_onclick,this);
            this.pdiv_time.form.btn_5.addEventHandler("onclick",this.pdiv_time_btn_onclick,this);
            this.pdiv_time.form.btn_4.addEventHandler("onclick",this.pdiv_time_btn_onclick,this);
            this.pdiv_time.form.btn_7.addEventHandler("onclick",this.pdiv_time_btn_onclick,this);
            this.pdiv_time.form.btn_8.addEventHandler("onclick",this.pdiv_time_btn_onclick,this);
            this.pdiv_time.form.btn_9.addEventHandler("onclick",this.pdiv_time_btn_onclick,this);
            this.pdiv_time.form.btn_00_01_01_00.addEventHandler("onclick",this.pdiv_time_btn_onclick,this);
            this.pdiv_time.form.btn_00_00_01_00.addEventHandler("onclick",this.pdiv_time_btn_onclick,this);
            this.pdiv_time.form.btn_00_03_00.addEventHandler("onclick",this.pdiv_time_btn_onclick,this);
            this.pdiv_time.form.btn_00_03_00_00.addEventHandler("onclick",this.pdiv_time_btn_onclick,this);
        };
        this.loadIncludeScript("DAY00101_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
