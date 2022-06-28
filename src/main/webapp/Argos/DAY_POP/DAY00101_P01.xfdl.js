(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00101_P01");
            this.set_titletext("자세변경기록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,610);
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
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"so_number\" type=\"STRING\" size=\"256\"/><Column id=\"so_nalja\" type=\"DATE\" size=\"256\"/><Column id=\"so_code\" type=\"STRING\" size=\"256\"/><Column id=\"so_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"sex_gb\" type=\"STRING\" size=\"256\"/><Column id=\"jumin\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"체위시08\" type=\"STRING\" size=\"256\"/><Column id=\"체위시09\" type=\"STRING\" size=\"256\"/><Column id=\"체위시10\" type=\"STRING\" size=\"256\"/><Column id=\"체위시11\" type=\"STRING\" size=\"256\"/><Column id=\"체위시12\" type=\"STRING\" size=\"256\"/><Column id=\"체위시13\" type=\"STRING\" size=\"256\"/><Column id=\"체위시14\" type=\"STRING\" size=\"256\"/><Column id=\"체위시15\" type=\"STRING\" size=\"256\"/><Column id=\"체위시16\" type=\"STRING\" size=\"256\"/><Column id=\"체위시17\" type=\"STRING\" size=\"256\"/><Column id=\"체위시18\" type=\"STRING\" size=\"256\"/><Column id=\"담당자08\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드08\" type=\"STRING\" size=\"256\"/><Column id=\"담당자09\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드09\" type=\"STRING\" size=\"256\"/><Column id=\"담당자10\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드10\" type=\"STRING\" size=\"256\"/><Column id=\"담당자11\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드11\" type=\"STRING\" size=\"256\"/><Column id=\"담당자12\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드12\" type=\"STRING\" size=\"256\"/><Column id=\"담당자13\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드13\" type=\"STRING\" size=\"256\"/><Column id=\"담당자14\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드14\" type=\"STRING\" size=\"256\"/><Column id=\"담당자15\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드15\" type=\"STRING\" size=\"256\"/><Column id=\"담당자16\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드16\" type=\"STRING\" size=\"256\"/><Column id=\"담당자17\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드17\" type=\"STRING\" size=\"256\"/><Column id=\"담당자18\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드18\" type=\"STRING\" size=\"256\"/><Column id=\"체위시분\" type=\"STRING\" size=\"256\"/><Column id=\"smin08\" type=\"STRING\" size=\"256\"/><Column id=\"smin09\" type=\"STRING\" size=\"256\"/><Column id=\"smin10\" type=\"STRING\" size=\"256\"/><Column id=\"smin11\" type=\"STRING\" size=\"256\"/><Column id=\"smin12\" type=\"STRING\" size=\"256\"/><Column id=\"smin13\" type=\"STRING\" size=\"256\"/><Column id=\"smin14\" type=\"STRING\" size=\"256\"/><Column id=\"smin15\" type=\"STRING\" size=\"256\"/><Column id=\"smin16\" type=\"STRING\" size=\"256\"/><Column id=\"smin17\" type=\"STRING\" size=\"256\"/><Column id=\"smin18\" type=\"STRING\" size=\"256\"/><Column id=\"체위끝분\" type=\"STRING\" size=\"256\"/><Column id=\"emin09\" type=\"STRING\" size=\"256\"/><Column id=\"emin10\" type=\"STRING\" size=\"256\"/><Column id=\"emin11\" type=\"STRING\" size=\"256\"/><Column id=\"emin12\" type=\"STRING\" size=\"256\"/><Column id=\"emin13\" type=\"STRING\" size=\"256\"/><Column id=\"emin14\" type=\"STRING\" size=\"256\"/><Column id=\"emin15\" type=\"STRING\" size=\"256\"/><Column id=\"emin16\" type=\"STRING\" size=\"256\"/><Column id=\"emin17\" type=\"STRING\" size=\"256\"/><Column id=\"emin18\" type=\"STRING\" size=\"256\"/><Column id=\"emin19\" type=\"STRING\" size=\"256\"/><Column id=\"org_so_number\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"manager08\" type=\"STRING\" size=\"256\"/><Column id=\"manager09\" type=\"STRING\" size=\"256\"/><Column id=\"manager10\" type=\"STRING\" size=\"256\"/><Column id=\"manager11\" type=\"STRING\" size=\"256\"/><Column id=\"manager12\" type=\"STRING\" size=\"256\"/><Column id=\"manager13\" type=\"STRING\" size=\"256\"/><Column id=\"manager14\" type=\"STRING\" size=\"256\"/><Column id=\"manager15\" type=\"STRING\" size=\"256\"/><Column id=\"manager16\" type=\"STRING\" size=\"256\"/><Column id=\"manager17\" type=\"STRING\" size=\"256\"/><Column id=\"manager18\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_posture", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">자세1 - 좌측으로 눕기</Col></Row><Row><Col id=\"CMCD\">2</Col><Col id=\"CMNM\">자세2 - 똑바로 눕기</Col></Row><Row><Col id=\"CMCD\">3</Col><Col id=\"CMNM\">자세3 - 우측으로 눕기</Col></Row><Row><Col id=\"CMCD\">4</Col><Col id=\"CMNM\">자세4 - 엎드려 눕기</Col></Row><Row><Col id=\"CMCD\">5</Col><Col id=\"CMNM\">자세5 - 침대에서 앉기</Col></Row><Row><Col id=\"CMCD\">6</Col><Col id=\"CMNM\">자세6 - 휠체어 태우기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_datacopy", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"so_number\" type=\"STRING\" size=\"256\"/><Column id=\"so_nalja\" type=\"DATE\" size=\"256\"/><Column id=\"so_code\" type=\"STRING\" size=\"256\"/><Column id=\"so_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"sex_gb\" type=\"STRING\" size=\"256\"/><Column id=\"jumin\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"체위시08\" type=\"STRING\" size=\"256\"/><Column id=\"체위시09\" type=\"STRING\" size=\"256\"/><Column id=\"체위시10\" type=\"STRING\" size=\"256\"/><Column id=\"체위시11\" type=\"STRING\" size=\"256\"/><Column id=\"체위시12\" type=\"STRING\" size=\"256\"/><Column id=\"체위시13\" type=\"STRING\" size=\"256\"/><Column id=\"체위시14\" type=\"STRING\" size=\"256\"/><Column id=\"체위시15\" type=\"STRING\" size=\"256\"/><Column id=\"체위시16\" type=\"STRING\" size=\"256\"/><Column id=\"체위시17\" type=\"STRING\" size=\"256\"/><Column id=\"체위시18\" type=\"STRING\" size=\"256\"/><Column id=\"담당자08\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드08\" type=\"STRING\" size=\"256\"/><Column id=\"담당자09\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드09\" type=\"STRING\" size=\"256\"/><Column id=\"담당자10\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드10\" type=\"STRING\" size=\"256\"/><Column id=\"담당자11\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드11\" type=\"STRING\" size=\"256\"/><Column id=\"담당자12\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드12\" type=\"STRING\" size=\"256\"/><Column id=\"담당자13\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드13\" type=\"STRING\" size=\"256\"/><Column id=\"담당자14\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드14\" type=\"STRING\" size=\"256\"/><Column id=\"담당자15\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드15\" type=\"STRING\" size=\"256\"/><Column id=\"담당자16\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드16\" type=\"STRING\" size=\"256\"/><Column id=\"담당자17\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드17\" type=\"STRING\" size=\"256\"/><Column id=\"담당자18\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드18\" type=\"STRING\" size=\"256\"/><Column id=\"체위시분\" type=\"STRING\" size=\"256\"/><Column id=\"smin8\" type=\"STRING\" size=\"256\"/><Column id=\"smin9\" type=\"STRING\" size=\"256\"/><Column id=\"smin10\" type=\"STRING\" size=\"256\"/><Column id=\"smin11\" type=\"STRING\" size=\"256\"/><Column id=\"smin12\" type=\"STRING\" size=\"256\"/><Column id=\"smin13\" type=\"STRING\" size=\"256\"/><Column id=\"smin14\" type=\"STRING\" size=\"256\"/><Column id=\"smin15\" type=\"STRING\" size=\"256\"/><Column id=\"smin16\" type=\"STRING\" size=\"256\"/><Column id=\"smin17\" type=\"STRING\" size=\"256\"/><Column id=\"smin18\" type=\"STRING\" size=\"256\"/><Column id=\"체위끝분\" type=\"STRING\" size=\"256\"/><Column id=\"emin9\" type=\"STRING\" size=\"256\"/><Column id=\"emin10\" type=\"STRING\" size=\"256\"/><Column id=\"emin11\" type=\"STRING\" size=\"256\"/><Column id=\"emin12\" type=\"STRING\" size=\"256\"/><Column id=\"emin13\" type=\"STRING\" size=\"256\"/><Column id=\"emin14\" type=\"STRING\" size=\"256\"/><Column id=\"emin15\" type=\"STRING\" size=\"256\"/><Column id=\"emin16\" type=\"STRING\" size=\"256\"/><Column id=\"emin17\" type=\"STRING\" size=\"256\"/><Column id=\"emin18\" type=\"STRING\" size=\"256\"/><Column id=\"emin19\" type=\"STRING\" size=\"256\"/><Column id=\"org_so_number\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"manager08\" type=\"STRING\" size=\"256\"/><Column id=\"manager09\" type=\"STRING\" size=\"256\"/><Column id=\"manager10\" type=\"STRING\" size=\"256\"/><Column id=\"manager11\" type=\"STRING\" size=\"256\"/><Column id=\"manager12\" type=\"STRING\" size=\"256\"/><Column id=\"manager13\" type=\"STRING\" size=\"256\"/><Column id=\"manager14\" type=\"STRING\" size=\"256\"/><Column id=\"manager15\" type=\"STRING\" size=\"256\"/><Column id=\"manager16\" type=\"STRING\" size=\"256\"/><Column id=\"manager17\" type=\"STRING\" size=\"256\"/><Column id=\"manager18\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_record", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"so_number\" type=\"STRING\" size=\"256\"/><Column id=\"so_nalja\" type=\"DATE\" size=\"256\"/><Column id=\"so_code\" type=\"STRING\" size=\"256\"/><Column id=\"so_name\" type=\"STRING\" size=\"256\"/><Column id=\"체위시08\" type=\"STRING\" size=\"256\"/><Column id=\"체위시09\" type=\"STRING\" size=\"256\"/><Column id=\"체위시10\" type=\"STRING\" size=\"256\"/><Column id=\"체위시11\" type=\"STRING\" size=\"256\"/><Column id=\"체위시12\" type=\"STRING\" size=\"256\"/><Column id=\"체위시13\" type=\"STRING\" size=\"256\"/><Column id=\"체위시14\" type=\"STRING\" size=\"256\"/><Column id=\"체위시15\" type=\"STRING\" size=\"256\"/><Column id=\"체위시16\" type=\"STRING\" size=\"256\"/><Column id=\"체위시17\" type=\"STRING\" size=\"256\"/><Column id=\"체위시18\" type=\"STRING\" size=\"256\"/><Column id=\"담당자08\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드08\" type=\"STRING\" size=\"256\"/><Column id=\"담당자09\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드09\" type=\"STRING\" size=\"256\"/><Column id=\"담당자10\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드10\" type=\"STRING\" size=\"256\"/><Column id=\"담당자11\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드11\" type=\"STRING\" size=\"256\"/><Column id=\"담당자12\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드12\" type=\"STRING\" size=\"256\"/><Column id=\"담당자13\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드13\" type=\"STRING\" size=\"256\"/><Column id=\"담당자14\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드14\" type=\"STRING\" size=\"256\"/><Column id=\"담당자15\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드15\" type=\"STRING\" size=\"256\"/><Column id=\"담당자16\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드16\" type=\"STRING\" size=\"256\"/><Column id=\"담당자17\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드17\" type=\"STRING\" size=\"256\"/><Column id=\"담당자18\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드18\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","10",null,null,"10","6",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","70","26","75",null,null,null,null,null,this.div_cont.form);
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

            obj = new Button("btn_del","750","0","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("전체지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01","0","36","230","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01","588","36","164","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_01","588","36","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("변경일");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_01_00","751","36","239","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_01_00","751","36","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager","755","39","72","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_text("변경자");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager_value1","838","39","145","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_text("요양보호사 / 20210000");
            obj.set_textAlign("left");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_date","671","40","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_format("####.##.##");
            obj.set_type("string");
            obj.set_border("0px none");
            obj.set_font("500 10pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("left");
            obj.set_value("20220523");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_01_01_01_02","800","-55","98","49",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("관찰시간");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00","288","117","150","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_00","288","160","150","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_01","288","203","150","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_02","288","246","150","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_03","288","289","150","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_00_00","288","332","150","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_01_00","288","375","150","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_02_00","288","418","150","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_00_01","288","461","150","43",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_01_01","288","503","150","43",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_02_01","288","545","150","43",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new ImageViewer("imv_posImg","0","75","288","513",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("24");
            obj.set_stretch("fit");
            obj.set_image("url(\'imagerc::posImg.png\')");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","36","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("25");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00","90","40","55","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("26");
            obj.set_padding("0px");
            obj.set_text("강옥주님");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00","150","40","10","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("27");
            obj.set_padding("0px");
            obj.set_text("A");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","170","40","55","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("28");
            obj.set_padding("0px");
            obj.set_text("A103002");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00","229","36","180","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00","229","36","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("29");
            obj.set_text("성별·생일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01_01","319","40","20","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("30");
            obj.set_padding("0px");
            obj.set_text("여");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00","344","40","60","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("31");
            obj.set_padding("0px");
            obj.set_text("35-08-28");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_01_00_00","409","36","180","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_head2","408","36","80","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("32");
            obj.set_text("생활실");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_02","500","40","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("33");
            obj.set_padding("0px");
            obj.set_text("생활실입니다");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04","288","75","150","43",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("자세변경시간");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00","437","75","220","43",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("변경후자세");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01","656","75","255","43",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("자세변경자");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager08","656","117","255","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00","910","75","80","43",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("지움");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00","437","117","220","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("변경후자세");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_08","442","122","210","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("42");
            obj.set_innerdataset("ds_posture");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager08",null,"123","70","33","84",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("43");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00","910","117","80","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_time08","915","123","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("44");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager09","656","160","255","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_01","437","160","220","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("변경후자세");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_09","442","165","210","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("48");
            obj.set_innerdataset("ds_posture");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager09",null,"166","70","33","84",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("49");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_00","910","160","80","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_time09","915","166","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("51");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager10","656","203","255","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_02","437","203","220","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("변경후자세");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_10","442","208","210","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("54");
            obj.set_innerdataset("ds_posture");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager10",null,"209","70","33","84",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("55");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_01","910","203","80","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_time10","915","209","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("57");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager11","656","246","255","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_03","437","246","220","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("변경후자세");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_11","442","251","210","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("60");
            obj.set_innerdataset("ds_posture");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager11",null,"252","70","33","84",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("61");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_02","910","246","80","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_time11","915","252","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("63");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager12","656","289","255","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_04","437","289","220","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("변경후자세");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_12","442","294","210","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("66");
            obj.set_innerdataset("ds_posture");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager12",null,"295","70","33","84",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("67");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_03","910","289","80","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_time12","915","295","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("69");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager13","656","332","255","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_01_00","437","332","220","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("변경후자세");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_13","442","337","210","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("72");
            obj.set_innerdataset("ds_posture");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager13",null,"338","70","33","84",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("73");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_00_00","910","332","80","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_time13","915","338","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("75");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager14","656","375","255","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_02_00","437","375","220","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("변경후자세");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_14","442","380","210","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("78");
            obj.set_innerdataset("ds_posture");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager14",null,"381","70","33","84",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("79");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_01_00","910","375","80","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_time14","915","381","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("81");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager15","656","418","255","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_03_00","437","418","220","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("변경후자세");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_15","442","423","210","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("84");
            obj.set_innerdataset("ds_posture");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager15",null,"424","70","33","84",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("85");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_02_00","910","418","80","44",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_time15","915","424","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("87");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager16","656","461","255","43",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_03_00_00","437","461","220","43",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("변경후자세");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_16","442","466","210","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("90");
            obj.set_innerdataset("ds_posture");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager16",null,"466","70","33","84",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("91");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_02_00_00","910","461","80","43",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_time16","915","466","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("93");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager17","656","503","255","43",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_03_00_00_00","437","503","220","43",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("변경후자세");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_17","442","508","210","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("96");
            obj.set_innerdataset("ds_posture");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager17",null,"508","70","33","84",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("97");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_02_00_00_00","910","503","80","43",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_time17","915","508","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("99");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager18","656","545","255","43",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            obj.set_text("김구인 20200009");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_00_03_00_00_01","437","545","220","43",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("변경후자세");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_18","442","550","210","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("102");
            obj.set_innerdataset("ds_posture");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_manager18",null,"550","70","33","84",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("103");
            obj.set_text("변경");
            obj.set_cssclass("btn_worker");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_cro1_00_04_00_01_00_00_02_00_00_01","910","545","80","43",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            obj.set_text("");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_time18","915","550","70","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("105");
            obj.set_text("지움");
            obj.set_cssclass("btn_eraser");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"0","70","26","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("106");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_record","625","0","120","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("107");
            obj.set_text("전일기록조회");
            obj.set_cssclass("btn_search");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00","310","123","28","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("108");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("08 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("08 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08","338","123","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("109");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_background("#ffffff");
            obj.set_autoskip("true");
            obj.set_readonly("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_01","360","123","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("110");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("- 09 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("- 09 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_00_00","399","123","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("111");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_02","310","166","28","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("112");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("09 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("09 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min09","338","166","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("113");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_background("#ffffff");
            obj.set_autoskip("true");
            obj.set_readonly("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_01_00","360","166","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("114");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("- 10 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("- 10 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_00_00_00","399","166","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("115");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_03","310","209","28","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("116");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("10 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("10 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min10","338","209","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("117");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_background("#ffffff");
            obj.set_autoskip("true");
            obj.set_readonly("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_01_01","360","209","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("118");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("- 11 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("- 11 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_00_00_01","399","209","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("119");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_04","310","252","28","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("120");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("11 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("11 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min11","338","252","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("121");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_background("#ffffff");
            obj.set_autoskip("true");
            obj.set_readonly("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_01_02","360","252","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("122");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("- 12 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("- 12 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_00_00_02","399","252","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("123");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_05","310","295","28","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("124");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("12 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("12 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min12","338","295","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("125");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_background("#ffffff");
            obj.set_autoskip("true");
            obj.set_readonly("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_01_03","360","295","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("126");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("- 13 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("- 13 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_00_00_03","399","295","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("127");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_06","310","338","28","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("128");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("13 : ");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("13 : ");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min13","338","338","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("129");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_background("#ffffff");
            obj.set_autoskip("true");
            obj.set_readonly("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_01_04","360","338","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("130");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("- 14 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("- 14 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_00_00_04","399","338","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("131");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_07","310","381","28","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("132");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("14 : ");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("14 : ");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min14","338","381","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("133");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_background("#ffffff");
            obj.set_autoskip("true");
            obj.set_readonly("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_01_05","360","381","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("134");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("- 15 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("- 15 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_00_00_05","399","381","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("135");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_08","310","424","28","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("136");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("15 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("15 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min15","338","424","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("137");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_background("#ffffff");
            obj.set_autoskip("true");
            obj.set_readonly("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_01_06","360","424","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("138");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("- 16 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("- 16 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_00_00_06","399","424","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("139");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_09","310","466","28","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("140");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("16 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("16 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min16","338","466","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("141");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_background("#ffffff");
            obj.set_autoskip("true");
            obj.set_readonly("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_01_07","360","466","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("142");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("- 17 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("- 17 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_00_00_07","399","466","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("143");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_10","310","508","28","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("144");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("17 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("17 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min17","338","508","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("145");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_background("#ffffff");
            obj.set_autoskip("true");
            obj.set_readonly("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_01_08","360","508","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("146");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("- 18 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("- 18 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_00_00_08","399","508","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("147");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_11","310","550","28","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("148");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("18 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("18 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min18","338","550","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("149");
            obj.set_font("bold 11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_background("#ffffff");
            obj.set_autoskip("true");
            obj.set_readonly("true");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_01_09","360","550","40","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("150");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("- 19 :");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("- 19 :");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_min08_00_00_00_09","399","550","20","33",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("151");
            obj.set_font("11pt/normal \"Noto Sans KR\"");
            obj.set_value("00");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            obj.set_autoselect("true");
            obj.set_padding("0px");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            obj.set_text("00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_time","1048","143","119","195",null,null,null,null,null,null,this);
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

            obj = new Div("div_time","1048","143","119","195",null,null,null,null,null,null,this.div_time.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            obj.set_visible("false");
            this.div_time.addChild(obj.name, obj);

            obj = new Button("btn_1","3","3","35","35",null,null,null,null,null,null,this.div_time.form.div_time.form);
            obj.set_taborder("0");
            obj.set_text("1");
            this.div_time.form.div_time.addChild(obj.name, obj);

            obj = new Button("btn_2","41","3","35","35",null,null,null,null,null,null,this.div_time.form.div_time.form);
            obj.set_taborder("1");
            obj.set_text("2");
            this.div_time.form.div_time.addChild(obj.name, obj);

            obj = new Button("btn_3","79","3","35","35",null,null,null,null,null,null,this.div_time.form.div_time.form);
            obj.set_taborder("2");
            obj.set_text("3");
            this.div_time.form.div_time.addChild(obj.name, obj);

            obj = new Button("btn_4","3","41","35","35",null,null,null,null,null,null,this.div_time.form.div_time.form);
            obj.set_taborder("3");
            obj.set_text("4");
            this.div_time.form.div_time.addChild(obj.name, obj);

            obj = new Button("btn_5","41","41","35","35",null,null,null,null,null,null,this.div_time.form.div_time.form);
            obj.set_taborder("4");
            obj.set_text("5");
            this.div_time.form.div_time.addChild(obj.name, obj);

            obj = new Button("btn_6","79","41","35","35",null,null,null,null,null,null,this.div_time.form.div_time.form);
            obj.set_taborder("5");
            obj.set_text("6");
            this.div_time.form.div_time.addChild(obj.name, obj);

            obj = new Button("btn_7","3","79","35","35",null,null,null,null,null,null,this.div_time.form.div_time.form);
            obj.set_taborder("6");
            obj.set_text("7");
            this.div_time.form.div_time.addChild(obj.name, obj);

            obj = new Button("btn_8","41","79","35","35",null,null,null,null,null,null,this.div_time.form.div_time.form);
            obj.set_taborder("7");
            obj.set_text("8");
            this.div_time.form.div_time.addChild(obj.name, obj);

            obj = new Button("btn_9","79","79","35","35",null,null,null,null,null,null,this.div_time.form.div_time.form);
            obj.set_taborder("8");
            obj.set_text("9");
            this.div_time.form.div_time.addChild(obj.name, obj);

            obj = new Button("btn_00","3","117","35","35",null,null,null,null,null,null,this.div_time.form.div_time.form);
            obj.set_taborder("9");
            obj.set_text("");
            this.div_time.form.div_time.addChild(obj.name, obj);

            obj = new Button("btn_0","41","117","35","35",null,null,null,null,null,null,this.div_time.form.div_time.form);
            obj.set_taborder("10");
            obj.set_text("0");
            this.div_time.form.div_time.addChild(obj.name, obj);

            obj = new Button("btn_cancle","79","117","35","35",null,null,null,null,null,null,this.div_time.form.div_time.form);
            obj.set_taborder("11");
            obj.set_text("취소");
            this.div_time.form.div_time.addChild(obj.name, obj);

            obj = new Button("btn_select","3","155",null,"35","3",null,null,null,null,null,this.div_time.form.div_time.form);
            obj.set_taborder("12");
            obj.set_text("확인");
            this.div_time.form.div_time.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1010,610,this,function(p){});
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

            obj = new BindItem("item19","div_cont.form.sta_no_value","text","ds_data","so_number");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.mae_date","value","ds_data","so_nalja");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.sta_manager_value1","text","ds_data","VIEW_MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.sta_body1_00","text","ds_data","so_name");
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

            obj = new BindItem("item55","div_cont.form.sta_body1_00_00","text","ds_data","so_code");
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

            obj = new BindItem("item31","div_cont.form.cmb_08","value","ds_data","체위시08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.cmb_09","value","ds_data","체위시09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.cmb_10","value","ds_data","체위시10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.cmb_11","value","ds_data","체위시11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.cmb_12","value","ds_data","체위시12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.cmb_13","value","ds_data","체위시13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.cmb_14","value","ds_data","체위시14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.cmb_15","value","ds_data","체위시15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.cmb_16","value","ds_data","체위시16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.cmb_17","value","ds_data","체위시17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.cmb_18","value","ds_data","체위시18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_cont.form.edt_min08","value","ds_data","smin8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_cont.form.edt_min09","value","ds_data","smin9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_cont.form.edt_min10","value","ds_data","smin10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_cont.form.edt_min11","value","ds_data","smin11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_cont.form.edt_min12","value","ds_data","smin12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_cont.form.edt_min13","value","ds_data","smin13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_cont.form.edt_min14","value","ds_data","smin14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_cont.form.edt_min15","value","ds_data","smin15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_cont.form.edt_min16","value","ds_data","smin16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_cont.form.edt_min17","value","ds_data","smin17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","div_cont.form.edt_min18","value","ds_data","smin18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","div_cont.form.edt_min08_00_00_00","value","ds_data","emin9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_cont.form.edt_min08_00_00_00_00","value","ds_data","emin10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_cont.form.edt_min08_00_00_00_01","value","ds_data","emin11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_cont.form.edt_min08_00_00_00_02","value","ds_data","emin12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_cont.form.edt_min08_00_00_00_03","value","ds_data","emin13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","div_cont.form.edt_min08_00_00_00_04","value","ds_data","emin14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","div_cont.form.edt_min08_00_00_00_05","value","ds_data","emin15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","div_cont.form.edt_min08_00_00_00_06","value","ds_data","emin16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","div_cont.form.edt_min08_00_00_00_07","value","ds_data","emin17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","div_cont.form.edt_min08_00_00_00_08","value","ds_data","emin18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","div_cont.form.edt_min08_00_00_00_09","value","ds_data","emin19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","div_cont.form.sta_manager18","text","ds_data","manager18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","div_cont.form.sta_manager17","text","ds_data","manager17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","div_cont.form.sta_manager16","text","ds_data","manager16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","div_cont.form.sta_manager15","text","ds_data","manager15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","div_cont.form.sta_manager14","text","ds_data","manager14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","div_cont.form.sta_manager13","text","ds_data","manager13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","div_cont.form.sta_manager12","text","ds_data","manager12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","div_cont.form.sta_manager10","text","ds_data","manager10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","div_cont.form.sta_manager09","text","ds_data","manager09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","div_cont.form.sta_manager08","text","ds_data","manager08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","div_cont.form.sta_manager11","text","ds_data","manager11");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00101_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00101_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00101_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00101_P01
         * 화면명   	: 자세변경기록
         * 화면설명 	: 자세변경기록 저장, 삭제
         * 작성일   	: 2022-05-23
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
        var fv_mineventid = ""; // 분 컴포넌트 id
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00101_P01";

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
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"so_number"))){ // 기록번호 없을시 rowtype 2(추가행)
        		this.ds_data.set_updatecontrol(false);
        		this.ds_data.setRowType(0,2);
        		this.ds_data.set_updatecontrol(true);
        	}

        	// 체위시분, 체위끝분 값 세팅
        	var stime = "      ";
        	var etime = "      ";
        	for(var i=0; i<11; i++){
        		stime += this.ds_data.getColumn(0,"smin"+(i+8));
        		etime += this.ds_data.getColumn(0,"emin"+(i+9));
        	}

        	this.ds_data.setColumn(0,"체위시분",stime);
        	this.ds_data.setColumn(0,"체위끝분",etime);

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

        	return true;
        }

        // 삭제 전 validation
        this.fn_delete_pre = function()
        {
        	// 기록번호 없을 시
        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0,"so_number")))
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
        				   + "sqlId='DAY00101_P01.DAY00101_P01_DS_DATA_S '";
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
        				   + "sqlId=DAY00101_P01.DAY00101_P01_DS_DATA_D ";

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

        		} else if(strSvcID == "record") // 전날 요양일지 조회
        		{
        			if(this.ds_record.rowcount > 0){
        				for(var i=0; i<11; i++){
        					if(i<2){
        						this.ds_data.setColumn(0,"체위시0"+(i+8),this.ds_record.getColumn(0,"체위시0"+(i+8)));
        						this.ds_data.setColumn(0,"담당자0"+(i+8),this.ds_record.getColumn(0,"담당자0"+(i+8)));
        						this.ds_data.setColumn(0,"담당코드0"+(i+8),this.ds_record.getColumn(0,"담당코드0"+(i+8)));
        						//if(Sct.Util.isEmpty(nexacro.trim(this.ds_record.getColumn(0,"담당자0"+(i+8))))){
        						var name = this.ds_record.getColumn(0,"담당자0"+(i+8)).trim();
        						var code = this.ds_record.getColumn(0,"담당코드0"+(i+8)).trim();
        						if(!Sct.Util.isEmpty(name)){
        							this.ds_data.setColumn(0,"manager0"+(i+8),name+"/"+code);
        						}
        					}else{
        						this.ds_data.setColumn(0,"체위시"+(i+8),this.ds_record.getColumn(0,"체위시"+(i+8)));
        						this.ds_data.setColumn(0,"담당자"+(i+8),this.ds_record.getColumn(0,"담당자"+(i+8)));
        						this.ds_data.setColumn(0,"담당코드"+(i+8),this.ds_record.getColumn(0,"담당코드"+(i+8)));
        						//if(Sct.Util.isEmpty(nexacro.trim(this.ds_record.getColumn(0,"담당자"+(i+8))))){
        						var name = this.ds_record.getColumn(0,"담당자"+(i+8)).trim();
        						var code = this.ds_record.getColumn(0,"담당코드"+(i+8)).trim();
        						if(!Sct.Util.isEmpty(name)){
        							this.ds_data.setColumn(0,"manager"+(i+8),name+"/"+code);
        						}
        					}
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
        	const svcId = "record";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_data ";
        	const outDatasets = "ds_record=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00101_P01.DAY00101_P01_DS_RECORD_S '";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
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
        	var sonum = this.ds_data.getColumn(0,"so_number");

        	//변경자 설정 로그인한 사람
        	var name = nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name"));
        	var id = nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid");

        	// 기록번호 존재
        	if(!Sct.Util.isEmpty(sonum)){
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

        		// 자세변경자 세팅
        		for(var i=0; i<11; i++){
        			var name1 = "";
        			var code1 = "";
        			if(i<2){
        				this.ds_data.addColumn("manager0"+(i+8),"STRING",256);
        				name1 = this.ds_data.getColumn(0,"담당자0"+(i+8)).trim();
        				code1 = this.ds_data.getColumn(0,"담당코드0"+(i+8)).trim();
        				if(!Sct.Util.isEmpty(name1)){ // 담당자가 빈값이 아니면 변경자 세팅
        					this.ds_data.setColumn(0,"manager0"+(i+8),name1 + "/" + code1);
        				}
        			}else{
        				this.ds_data.addColumn("manager"+(i+8),"STRING",256);
        				name1 = this.ds_data.getColumn(0,"담당자"+(i+8)).trim();
        				code1 = this.ds_data.getColumn(0,"담당코드"+(i+8)).trim();
        				if(!Sct.Util.isEmpty(name1)){ // 담당자가 빈값이 아니면 변경자 세팅
        					this.ds_data.setColumn(0,"manager"+(i+8),name1 + "/" + code1);
        				}
        			}
        		}

         	}else{ // 새로작성
        		this.ds_data.copyData(this.ds_datacopy);
        		this.ds_data.clearData();
        		var aRow = this.ds_data.addRow();
        		this.ds_data.setColumn(aRow,"sicode", fv_sicode);
        		this.ds_data.setColumn(aRow,"so_nalja", fv_date);
        		this.ds_data.setColumn(aRow,"so_code", fv_mcode);
        		this.ds_data.setColumn(aRow,"so_name", fv_name);
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

        		//체위시,시작분, 끝분 세팅
        		for(var i=0; i<11; i++){
        			if(i<2){
        				this.ds_data.setColumn(0,"체위시0"+(i+8),'0');
        			}else{
        				this.ds_data.setColumn(0,"체위시"+(i+8),'0');
        			}

        			this.ds_data.setColumn(0,"smin"+(i+8),'00');
        			this.ds_data.setColumn(0,"emin"+(i+9),'00');
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

        	var cnt = 0;
        	var managerArr = [];
        	var manager1 = "";
        	var manager2 = "";
        	// 변경후자세 횟수 세팅
        	for(var i=0; i<11; i++){
        		if(i < 2){
        			if(this.ds_data.getColumn(0,"체위시0"+(i+8)) != 0){
        				// 담당자 빈값이 아니면 배열에 담기
        				if(this.ds_data.getColumn(0,"담당자0"+(i+8))){
        					managerArr.push(this.ds_data.getColumn(0,"담당자0"+(i+8)));
        				}
        				cnt += 1;
        			}
        		}else{
        			if(this.ds_data.getColumn(0,"체위시"+(i+8)) != 0){
        				if(this.ds_data.getColumn(0,"담당자"+(i+8))){
        					managerArr.push(this.ds_data.getColumn(0,"담당자"+(i+8)));
        				}
        				cnt += 1;
        			}
        		}
        	}

        	// 배열 중복제거
        	// ele : 배열값, pos : 배열 인덱스
        	// 배열값의 인덱스 = 배열인덱스로 필터링
        	const filteredArray = managerArr.filter(function(ele , pos){
        // 		trace("ele : " + ele);
        // 		trace(">> "+managerArr.indexOf(ele));
        // 		trace("pos : " + pos);
        		return managerArr.indexOf(ele) == pos;
        	})

        	manager1 = filteredArray[0];
        	manager2 = filteredArray[1];

        	// 저장, 삭제
        	var aRow = this.ds_return.addRow();
        	if(type == "save"){
        		this.ds_return.setColumn(aRow, "cnt", cnt);
        		this.ds_return.setColumn(aRow, "manager1", manager1);
        		this.ds_return.setColumn(aRow, "manager2", manager2);
        	}else{
        		this.ds_return.setColumn(aRow, "cnt", "");
        		this.ds_return.setColumn(aRow, "manager1", "");
        		this.ds_return.setColumn(aRow, "manager2", "");
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
        		// 관찰자1
        		case "employee" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0,"c_name", name);
        				this.ds_data.setColumn(0,"c_staffid", staffid);
        				this.ds_data.setColumn(0, "VIEW_MANAGER", name + "/" + staffid);
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
        	var num = obj.id.substr(8);

        	switch(obj.id) {
        		case "btn_del" : // 전체지움
        			for(var i=0; i<11; i++){
        				this.ds_data.setColumn(0,"smin" + (i+8), "00");
        				this.ds_data.setColumn(0,"emin" + (i+8), "00");
        				if(i < 2){
        					this.ds_data.setColumn(0,"체위시0" + (i+8), "0");
        					this.ds_data.setColumn(0,"담당자0" + (i+8), "");
        					this.ds_data.setColumn(0,"담당자코드0" + (i+8), "");
        					this.ds_data.setColumn(0,"manager0" + (i+8), "");

        				}else{
        					this.ds_data.setColumn(0,"체위시" + (i+8), "0");
        					this.ds_data.setColumn(0,"담당자" + (i+8), "");
        					this.ds_data.setColumn(0,"담당자코드" + (i+8), "");
        					this.ds_data.setColumn(0,"manager" + (i+8), "");
        				}
        			}
        			break;
        		case "btn_time" + num : // 시간별 지움
        			this.ds_data.setColumn(0,"체위시" + num, "0");
        			this.ds_data.setColumn(0,"담당자" + num, "");
        			this.ds_data.setColumn(0,"담당자코드" + num, "");
        			this.ds_data.setColumn(0,"manager" + num, "");
        			break;
        	default:
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
          	this.div_time.set_visible(true);

        	fv_mineventid = obj.id // 분클릭 컴포넌트 id

        	switch(obj.id) {
        		case "edt_min08":
        			this.div_time.move(178,85);
        			break;
        		case "edt_min09":
        			this.div_time.move(178,127);
        			break;
        		case "edt_min10":
        			this.div_time.move(178,170);
        			break;
        		case "edt_min11":
        			this.div_time.move(178,213);
        			break;
        		case "edt_min12":
        			this.div_time.move(178,256);
        			break;
        		case "edt_min13":
        			this.div_time.move(178,299);
        			break;
        		case "edt_min14":
        			this.div_time.move(178,342);
        			break;
        		case "edt_min15":
        			this.div_time.move(178,362);
        			break;
        		case "edt_min16":
        			this.div_time.move(178,382);
        			break;
        		case "edt_min17":
        			this.div_time.move(178,392);
        			break;
        		case "edt_min18":
        			this.div_time.move(178,402);
        			break;
        		case "edt_min19":
        			this.div_time.move(178,412);
        			break;
        		case "edt_min20":
        			this.div_time.move(178,422);
        			break;
        		default:
        	}

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

        	fv_minclick = fv_minclick + 1; // 버튼 선택 횟수

        	if(eventid < 10){
        		eventid = eventid.substr(1);
        	}
        	//var eventid2 = nexacro.toNumber(eventid) + 1; // 끝시간 id

        	// 2자리 선택 또는 확인 선택 시 div 닫기
        	if(obj.id == "btn_select"){
        		this.div_time.set_visible(false);
        		if(this.ds_data.getColumn(0,"smin"+eventid) > 60){
        			this.ds_data.setColumn(0,"smin"+eventid, "00");
        			this.ds_data.setColumn(0,"emin"+eventid, "00");
        		}else{
        			this.ds_data.setColumn(0,"emin"+eventid, this.ds_data.getColumn(0,"smin"+eventid));
        		}
        		fv_minclick = 0;
        	}else if(obj.id == "btn_cancle"){ // 취소시 00으로 값 변경
        		this.div_time.set_visible(false);
        		this.ds_data.setColumn(0,"smin"+eventid, "00");
        		this.ds_data.setColumn(0,"emin"+eventid, "00");
        		fv_minclick = 0;
        	}else{
        		if(fv_minclick == 1){ // 앞자리 변경
        			setmin = objid + this.ds_data.getColumn(0,"smin"+eventid).substr(1,1);
        			this.ds_data.setColumn(0,"smin"+eventid, setmin);
        		}else if(fv_minclick == 2){ // 뒷자리 변경, 닫고 선택횟수 0으로 변경
        			setmin = this.ds_data.getColumn(0,"smin"+eventid).substr(0,1) + objid;
        			if(setmin > 60){ // 60 초과시 00으로 변경
        				this.ds_data.setColumn(0,"smin"+eventid, "00");
        				this.ds_data.setColumn(0,"emin"+eventid, "00");
        			}else{
        				this.ds_data.setColumn(0,"smin"+eventid, setmin);
        				this.ds_data.setColumn(0,"emin"+eventid, setmin);
        			}
        			this.div_time.set_visible(false);
        			fv_minclick = 0;
        		}
        	}

        };


        //변경 버튼 이벤트
        this.fn_manager_change = function(obj,e)
        {
        	var num = obj.id.substr(11);
        	const name = this.ds_data.getColumn(0,"c_name");
        	const staffid = this.ds_data.getColumn(0, "c_staffid");

        	switch(obj.id) {
        		case "btn_manager" + num:
        			this.ds_data.setColumn(0,"담당자"+num, name);
        			this.ds_data.setColumn(0,"담당코드"+num, staffid);
        			this.ds_data.setColumn(0,"manager"+num,name + "/" + staffid);

        			break;
        	default:
        	}
        };

        // 콤보박스 변경시 자세변경자 입력
        this.cmb_canitemchange = function(obj,e)
        {
        	var num = obj.id.substr(4);

        	const name = this.ds_data.getColumn(0,"c_name");
        	const staffid = this.ds_data.getColumn(0, "c_staffid");
        	trace(obj.id);
        	switch(obj.id) {
        		case "cmb_" + num:
        			this.ds_data.setColumn(0,"담당자"+num, name);
        			this.ds_data.setColumn(0,"담당코드"+num, staffid);
        			this.ds_data.setColumn(0,"manager"+num,name + "/" + staffid);
        			break;
        		default:
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.close,this);
            this.div_cont.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_cont.form.btn_del.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.sta_head1_01_01_01.addEventHandler("onclick",this.div_cont_sta_head1_01_01_01_onclick,this);
            this.div_cont.form.sta_body1_01_01_00.addEventHandler("onclick",this.div_cont_sta_body1_01_01_00_onclick,this);
            this.div_cont.form.btn_manager.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.cmb_08.addEventHandler("canitemchange",this.cmb_canitemchange,this);
            this.div_cont.form.btn_manager08.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_time08.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.cmb_09.addEventHandler("onitemchanged",this.div_cont_cmb_00_00_onitemchanged,this);
            this.div_cont.form.cmb_09.addEventHandler("canitemchange",this.cmb_canitemchange,this);
            this.div_cont.form.btn_manager09.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_time09.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.cmb_10.addEventHandler("canitemchange",this.cmb_canitemchange,this);
            this.div_cont.form.btn_manager10.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_time10.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.sta_manager11.addEventHandler("onclick",this.div_cont_sta_manager11_onclick,this);
            this.div_cont.form.cmb_11.addEventHandler("canitemchange",this.cmb_canitemchange,this);
            this.div_cont.form.btn_manager11.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_time11.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.cmb_12.addEventHandler("canitemchange",this.cmb_canitemchange,this);
            this.div_cont.form.btn_manager12.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_time12.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.cmb_13.addEventHandler("canitemchange",this.cmb_canitemchange,this);
            this.div_cont.form.btn_manager13.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_time13.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.cmb_14.addEventHandler("canitemchange",this.cmb_canitemchange,this);
            this.div_cont.form.btn_manager14.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_time14.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.cmb_15.addEventHandler("canitemchange",this.cmb_canitemchange,this);
            this.div_cont.form.btn_manager15.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_time15.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.cmb_16.addEventHandler("canitemchange",this.cmb_canitemchange,this);
            this.div_cont.form.btn_manager16.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_time16.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.cmb_17.addEventHandler("canitemchange",this.cmb_canitemchange,this);
            this.div_cont.form.btn_manager17.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_time17.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.cmb_18.addEventHandler("canitemchange",this.cmb_canitemchange,this);
            this.div_cont.form.btn_manager18.addEventHandler("onclick",this.fn_manager_change,this);
            this.div_cont.form.btn_time18.addEventHandler("onclick",this.btn_del,this);
            this.div_cont.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_cont.form.btn_record.addEventHandler("onclick",this.btn_record,this);
            this.div_cont.form.edt_min08_00.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_01.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_00_00.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_00_00.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_00_00.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_02.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_02.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_02.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min09.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min09.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_00.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_01_00.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_00.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_00_00_00.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_00_00_00.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_00_00_00.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_03.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_03.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_03.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min10.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min10.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_01.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_01_01.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_01.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_00_00_01.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_00_00_01.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_00_00_01.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_04.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_04.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_04.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min11.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min11.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_02.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_01_02.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_02.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_00_00_02.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_00_00_02.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_00_00_02.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_05.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_05.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_05.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min12.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min12.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_03.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_01_03.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_03.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_00_00_03.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_00_00_03.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_00_00_03.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_06.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_06.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_06.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min13.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min13.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_04.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_01_04.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_04.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_00_00_04.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_00_00_04.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_00_00_04.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_07.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_07.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_07.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min14.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min14.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_05.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_01_05.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_05.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_00_00_05.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_00_00_05.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_00_00_05.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_08.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_08.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_08.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min15.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min15.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_06.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_01_06.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_06.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_00_00_06.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_00_00_06.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_00_00_06.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_09.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_09.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_09.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min16.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min16.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_07.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_01_07.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_07.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_00_00_07.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_00_00_07.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_00_00_07.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_10.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_10.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_10.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min17.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min17.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_08.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_01_08.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_08.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_00_00_08.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_00_00_08.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_00_00_08.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_11.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_11.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_11.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min18.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min18.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_09.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_01_09.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_01_09.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
            this.div_cont.form.edt_min08_00_00_00_09.addEventHandler("onchanged",this.edt_min_onchanged,this);
            this.div_cont.form.edt_min08_00_00_00_09.addEventHandler("oneditclick",this.edit_oneditclick,this);
            this.div_cont.form.edt_min08_00_00_00_09.addEventHandler("onkillfocus",this.edt_min_onkillfocus,this);
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
            this.div_time.form.div_time.form.btn_1.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.div_time.form.btn_2.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.div_time.form.btn_3.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.div_time.form.btn_4.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.div_time.form.btn_5.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.div_time.form.btn_6.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.div_time.form.btn_7.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.div_time.form.btn_8.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.div_time.form.btn_9.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.div_time.form.btn_0.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.div_time.form.btn_cancle.addEventHandler("onclick",this.div_time_btn_onclick,this);
            this.div_time.form.div_time.form.btn_select.addEventHandler("onclick",this.div_time_btn_onclick,this);
        };
        this.loadIncludeScript("DAY00101_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
