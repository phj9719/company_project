(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00102");
            this.set_titletext("1-2 상태변화기록(매주)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday1\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday2\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso1\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso2\" type=\"STRING\" size=\"256\"/><Column id=\"m_post\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"INT\" size=\"256\"/><Column id=\"b_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">2021</Col><Col id=\"CMNM\">2021년</Col></Row><Row><Col id=\"CMCD\">2022</Col><Col id=\"CMNM\">2022년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"회의번호\" type=\"INT\" size=\"256\"/><Column id=\"회의일자\" type=\"DATE\" size=\"256\"/><Column id=\"회의구분\" type=\"INT\" size=\"256\"/><Column id=\"구분1\" type=\"INT\" size=\"256\"/><Column id=\"구분2\" type=\"INT\" size=\"256\"/><Column id=\"회의명\" type=\"STRING\" size=\"256\"/><Column id=\"회의시간\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"TO_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"회의장소\" type=\"STRING\" size=\"256\"/><Column id=\"재적인원\" type=\"INT\" size=\"256\"/><Column id=\"출석인원\" type=\"INT\" size=\"256\"/><Column id=\"출석위원\" type=\"STRING\" size=\"256\"/><Column id=\"불참위원\" type=\"STRING\" size=\"256\"/><Column id=\"회의안건\" type=\"STRING\" size=\"256\"/><Column id=\"회의결과\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"작성자코드\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"daysajin\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GPR_ID_O\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"sign\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">운영</Col></Row><Row><Col id=\"CMCD\">2</Col><Col id=\"CMNM\">보호</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"sc_number\" type=\"STRING\" size=\"256\"/><Column id=\"sc_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"sc_name\" type=\"STRING\" size=\"256\"/><Column id=\"sc_code\" type=\"STRING\" size=\"256\"/><Column id=\"sc_change\" type=\"STRING\" size=\"256\"/><Column id=\"create_nm\" type=\"STRING\" size=\"256\"/><Column id=\"create_code\" type=\"STRING\" size=\"256\"/><Column id=\"org_sc_number\" type=\"STRING\" size=\"256\"/><Column id=\"week\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/><Column id=\"sc_code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_state_desc", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"sc_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"sc_code\" type=\"STRING\" size=\"256\"/><Column id=\"sc_name\" type=\"STRING\" size=\"256\"/><Column id=\"상태변화\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/><Column id=\"view_manager\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_copy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"p_chk\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday1\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday2\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso1\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso2\" type=\"STRING\" size=\"256\"/><Column id=\"m_post\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"INT\" size=\"256\"/><Column id=\"b_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nurse_cnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_record_cnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","450",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","38","450","718",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"23\"/><Column size=\"32\"/><Column size=\"78\"/><Column size=\"50\"/><Column size=\"112\"/><Column size=\"48\"/><Column size=\"60\"/><Column size=\"84\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"출력\" expandchar=\"rno\"/></Cell><Cell col=\"2\" text=\"현황\"/><Cell col=\"3\" text=\"그룹\"/><Cell col=\"4\" text=\"수급자명\"/><Cell col=\"5\" text=\"성별\"/><Cell col=\"6\" text=\"등급\"/><Cell col=\"7\" text=\"생활실\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"2\" text=\"bind:s_nm\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:m_group\" combodataset=\"ds_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"4\" text=\"bind:m_name\" textAlign=\"center\" cssclass=\"cellBWoman\" cursor=\"pointer\" expandchar=\"dot\"/><Cell col=\"5\" text=\"bind:sex_nm\"/><Cell col=\"6\" text=\"bind:grade_nm\"/><Cell col=\"7\" text=\"bind:m_roomname\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_week","1","3","43","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("1주일");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_half_month","47","3","43","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("15일");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_month","93","3","43","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("3");
            obj.set_text("1개월");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_six_month","139","3","43","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("4");
            obj.set_text("6개월");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_year","185","3","43","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("5");
            obj.set_text("1년");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_mate","231","3","75","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("6");
            obj.set_text("수급자");
            obj.set_cssclass("btn_eldery");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_retiree","309","3","75","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("7");
            obj.set_text("퇴소자");
            obj.set_cssclass("btn_eldery");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_all","387","3","62","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("8");
            obj.set_text("전체");
            obj.set_cssclass("btn_eldery");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","460","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_main","0","0","1230","350",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1","22","38","1049","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","22","sta_body1:-1","1049","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","22","sta_body2:-1","1049","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","22","137","1049","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6","22","181","1180","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body10","102","214","1100","100",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("imv_pic","1070","38","132","133",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_content2","107","218","1091","91",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            obj.set_maxlength("500");
            obj.set_wordWrap("char");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_all","20","3","150","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_text("요양.간호일지 조회");
            obj.set_cssclass("btn_search");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_report1","175","3","150","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_text("상태변화 기록서식");
            obj.set_cssclass("btn_print");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","636","3","65","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_text("결재란");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_report2","707","3","160","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_text("수급자 상태변화기록");
            obj.set_cssclass("btn_print");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_repo_term","872","3","165","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_text("기간별  상태변화기록");
            obj.set_cssclass("btn_print");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_report_chk","1042","3","160","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_text("상태변화 기록(선택)");
            obj.set_cssclass("btn_print");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00","107","42","81","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","228","42","81","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00","191","42","34","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","20","38","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","20","71","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_text("생활실");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","20","104","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("6");
            obj.set_text("주요질환");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","20","137","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_text("주    소");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head6","20","181","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head10","20","214","83","100",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("상태변화");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","322","38","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("27");
            obj.set_text("성별 나이");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01","409","42","35","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("28");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00_00","448","42","55","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("29");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00","322","71","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("30");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01","526","38","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("31");
            obj.set_text("입소일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00","526","71","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("32");
            obj.set_text("퇴소일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00_00","526","104","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("33");
            obj.set_text("대리인");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_00","613","109","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("34");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01_00","730","38","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("35");
            obj.set_text("인정번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01_00_00","730","71","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("36");
            obj.set_text("인정기간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01_00_00_00","730","104","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("37");
            obj.set_text("인정등급");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_01_00","817","42","250","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("38");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_01_01","817","109","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("39");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_01_00","903","76","15","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("40");
            obj.set_text("-");
            obj.set_textAlign("center");
            obj.set_padding("0px");
            obj.set_verticalAlign("middle");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_02","107","76","212","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("41");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_02_00","107","109","416","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("42");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","107","186","104","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic","210","186","25","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("44");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body8","22","313","1180","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head8","20","313","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_manager","24","317","75","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("0");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_remark","445","319","250","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_text("▲ 사소한 내용이라도 작성해야 합니다.");
            obj.set_cssclass("sta_comm");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_01","107","317","160","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("45");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_02_00_00","107","142","560","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("46");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_02_00_01","671","142","278","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("47");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_02_00_01_00","953","142","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("48");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_00_00","409","76","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("49");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_00_00_00","613","42","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("50");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_00_00_00_00","613","76","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("51");
            obj.set_color("red");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_00_00_00_01","817","76","84","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("52");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_01_00_00_00_00_00_01_00","928","76","114","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("53");
            obj.set_padding("0px 0px 0px 5px");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_down","0","355","1230",null,null,"0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_detail","20","2","1182","399",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"763\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"74\"/></Rows><Band id=\"head\"><Cell text=\"작성일\"/><Cell col=\"1\" text=\"요일\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"상태변화기록\"/><Cell col=\"4\" text=\"작성자명\"/><Cell col=\"5\" text=\"내용복사\"/></Band><Band id=\"body\"><Cell text=\"bind:sc_nalja\" cssclass=\"cellBWoman\" cursor=\"pointer\" calendardateformat=\"yyyy.MM.dd\"/><Cell col=\"1\" text=\"bind:week\"/><Cell col=\"2\" text=\"bind:sc_name\"/><Cell col=\"3\" text=\"bind:sc_change\" textAlign=\"left\" displaytype=\"textareacontrol\" textareascrollbartype=\"default\" edittype=\"readonly\" textareascrolltype=\"vertical\" textareascrollbarsize=\"15\"/><Cell col=\"4\" text=\"bind:create_nm\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" text=\"복 사\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","450","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_year","1","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","70","26","1",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","101","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","219","12","8","17",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","231","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from_pic","190","7","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic","320","7","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","460","0","1230","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new","20","7","90","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("새로작성");
            obj.set_cssclass("btn_newdoc");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","70","26","28",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cmb_year","value","ds_search","year");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_date_from","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_to","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.txt_content2","value","ds_state_desc","상태변화");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_search.form.cal_date_from_pic","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_search.form.cal_date_to_pic","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_right.form.div_main.form.chk_sign","value","ds_report","sign");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.sta_body1_00","text","ds_list_copy","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_main.form.sta_body1_00_00","text","ds_list_copy","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_00","text","ds_list_copy","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_main.form.sta_body1_00_01","text","ds_list_copy","sex_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_00_00","text","ds_list_copy","age");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.div_main.form.sta_body1_00_02","text","ds_list_copy","m_roomname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.div_main.form.sta_body1_00_02_00","text","ds_list_copy","m_history");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_right.form.div_main.form.sta_body1_00_02_00_00","text","ds_list_copy","m_juso1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.div_main.form.sta_body1_00_02_00_01","text","ds_list_copy","m_juso2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.div_main.form.sta_body1_00_02_00_01_00","text","ds_list_copy","m_post");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_right.form.div_main.form.cal_date_to","value","ds_state_desc","sc_nalja");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_right.form.div_main.form.cal_date_to_pic","value","ds_state_desc","sc_nalja");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00","text","ds_list_copy","m_enday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00_00","text","ds_list_copy","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00","text","ds_list_copy","b_date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00_01","text","ds_list_copy","m_liday1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00_00_00_01_00","text","ds_list_copy","m_liday2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_00","text","ds_list_copy","m_conname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01_01","text","ds_list_copy","grade_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_00_00_01_00","text","ds_list_copy","m_regist");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.div_main.form.sta_body1_00_00_01_01","text","ds_state_desc","view_manager");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00102.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00102.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00102.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00102
         * 화면명   	: 1-2 상태변화기록(매주)
         * 화면설명 	:
         * 작성일   	: 2022-04-18
         * 작성자   	: 박영주
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
         ***********************************************************************/
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_list;
        this.fv_staff_id = nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid");
        this.fv_staff_name = nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name"));
        this.reSearchData = "";
        this.searchFlag = "";
        this.fileGroupId = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 현재 년도 구하기
        	const date = new Date();
        	const year = date.getFullYear();

        	// 년도 콤보박스 세팅 (현재년 기준 8년 전 ~ 1년 후까지)
        	this.ds_year.set_enableevent(false);
        	this.ds_year.clearData();
        	let nRow;
        	for (let i = -8; i <= 1; i++)
        	{
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year + i);
        		this.ds_year.setColumn(nRow, "CMNM", (year + i) + "년");
        	}

        	this.ds_year.set_enableevent(true);

        	// 검색조건 세팅
        	let today = Sct.Util.getToday();
        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "year", year);
        	this.ds_search.setColumn(0, "date_from", year + '0101');
        	this.ds_search.setColumn(0, "date_to", today);
        	this.ds_search.setColumn(0,"s_nm","사용중");	// 초기값은 수급자만 리스팅

        	// 화면 우측 작성일 세팅
        	//this.ds_state_desc.setColumn(0, "sc_nalja", today);

        	// 그리드 설정
        	this.fn_setMainGrid();
        	this.fn_setDetailGrid();

        	// 리포트 출력 초기화
        	this.ds_report.setColumn(0, "sign", 1);

        	// 오픈시 조회
        	this.fn_search();
        };


        this.fn_setMainGrid = function()
        {
        	var grdMain = this.div_cont.form.div_left.form.grd_list;

        	var nameIdx = grdMain.getBindCellIndex("body","m_name");
        	var snmIdx = grdMain.getBindCellIndex("body","s_nm");

        	var nameCss = "expr:dataset.getColumn(currow,'sex_nm')=='남'?'cellBMan':'cellBWoman'";
        	var snmCss = "expr:dataset.getColumn(currow,'s_nm')=='퇴소자'?'cellBRetire':''";

        	grdMain.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grdMain.setCellProperty("body", snmIdx, "cssclass", snmCss);
        }


        this.fn_setDetailGrid = function()
        {
        	var grdDetail = this.div_cont.form.div_right.form.div_down.form.grd_detail;
        	var  index = -1;

        	index = grdDetail.getBindCellIndex("body", "week");
        	grdDetail.setCellProperty("body", index, "cssclass", "expr:week=='(토)'?'BlueFontCell':week=='(일)'?'RedFontCell':" +Sct.Grid.getCellDefaultCss()); //ok
        }
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	// 검색조건 필수 체크 (컴포넌트 tooltiptext 값 넣을 것)
        	if (!this.gfn_findSnull(this.div_search)) return false;

        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	if (this.ds_state_desc.rowcount == 0)
        	{
        		this.alert("저장할 항목이 없습니다.");
        		return false;
        	}

        	if (Sct.Util.isEmpty(this.ds_state_desc.getColumn(0, "상태변화")))
        	{
        		this.alert("상태변화에 내용을 입력하세요.");
        		return false;
        	}

        	// 작성자가 지정되지 않은 경우
        	if (Sct.Util.isEmpty(this.ds_state_desc.getColumn(0, "작성코드")))
        	{
        		this.alert("작성직원을 지정해야합니다.");
        		return false;
        	}

        	// 한글기준 2글자 이상인지 체크(영문,숫자 4글자)
        	var stateText = this.ds_state_desc.getColumn(0,"상태변화");
        	stateText = nexacro.trim(stateText);
        	this.ds_state_desc.setColumn(0,"상태변화",stateText);
        	var txtLen = stateText.byteLength();
        	if (txtLen < 4) {
        		this.alert("상태변화 기록을 2글자 이상 입력하세요");
        		return false;
        	}

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

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
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00102.DAY00102_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_searchDetail = function ()
        {
        	//validation
        	//if (!this.fn_searchDetail_pre()) return;

        	const svcId = "searchDetail";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search_detail";
        	const outDatasets = "ds_detail=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00102.DAY00102_DS_DETAIL_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	// validation
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
        	const params = "/DAY00102Controller.do";
        	const inDatasets = "input1=ds_state_desc";
        	const outDatasets = "";
        	const argument = "method=save";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };


        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			this.ds_list.set_rowposition(-1);
        		}
        		else if (strSvcID == "searchDetail")
        		{
        			this.ds_detail.set_rowposition(-1);
        		}
        		else if (strSvcID == "save")
        		{
        			this.alert("상태변화 기록 저장완료.");
        			this.ds_state_desc.setColumn(0,"상태변화","");
        			this.fn_searchDetail();
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
        /**
         * 특정위치의 문자열 바꾸기
         *
         * @param str 원본 문자열
         * @param character 바꿀 문자값
         * @param index 바꿀 위치
         */
        this.stringReplaceAt = function(str, character, index)
        {
        	return str.substr(0, index) + character + str.substr(index + character.length);
        };


        //이미지 조회
        this.fn_getSignImage = function ()
        {
        	let imgUrl = "";
        	const fileGrp = this.ds_data.getColumn(0, "FILE_REAL_NAME");

        	if(!Sct.Util.isEmpty(fileGrp))
        	{
        		const webHost = nexacro.getEnvironment().services["svcurl"].url;
        		const path = "/FILES";
        		imgUrl = webHost + path + fileGrp;
        	}

        	this.div_cont.form.div_right.form.div_main.form.imv_pic.set_image(imgUrl);
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 출력
        // 상태변화기록 서식 리포트
        this.fn_report1 = function()
        {
        	if (this.ds_list_copy.rowcount == 0)
        	{
        		alert("수급자를 선택하세요");	// as-is에서는 아무 메세지 없음
        		return false;
        	}

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00102_R01.xfdl";
        	const popupName = "";

        	params = {
        		sicode : fv_sicode
        	,	m_code : this.ds_list_copy.getColumn(0, "m_code")
        	,	date_to : this.ds_search.getColumn(0,"date_to")
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        }

        //수급자 상태변화기록 리포트
        this.fn_report_mate = function(obj,e)
        {
        	if (this.ds_list_copy.rowcount == 0)
        	{
        		alert("수급자를 선택하세요");	// as-is에서는 아무 메세지 없음
        		return false;
        	}

        	this.fn_call_report2("mate");
        };

        this.fn_call_report2 = function(arg)
        {
        	let pam = arg;
        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00102_R02.xfdl";
        	const popupName = "";

        	var mCodeStr = "";

        	// 수급자 한명 출력시
        	if (pam=="mate") {
        		let _code = this.ds_list_copy.getColumn(0, "m_code");
        		mCodeStr += _code;
        	// 체크박스로 선택된 수급자 여러명 출력시
        	} else if (pam=="chk") {
        		// 리스트 row 수만큼 for문 돌려서 체크된 row 찾기
        		for(var i=0; i < this.ds_list.rowcount; i++){
        			if(this.ds_list.getColumn(i,"chk") == 1){ // 체크된 수급자 코드 문자열로 이어붙이기
        				let _code = this.ds_list.getColumn(i,"m_code");
        				mCodeStr += (_code + ",");
        			}
        		}
        		// 마지막 콤마 제거
        		mCodeStr = mCodeStr.substring(0,mCodeStr.length-1);
        	}

        	if (!this.fn_record_exist(mCodeStr)) {
        		alert("선택된 수급자에 대해 조회 기간의 상태변화 기록이 존재하지 않습니다.");
        		return;
        	}

        	params = {
        		sicode : fv_sicode
        	,	m_code : mCodeStr
        	,	date_from : this.ds_search.getColumn(0,"date_from")
        	,	date_to : this.ds_search.getColumn(0,"date_to")
        	,	sign : this.ds_report.getColumn(0,"sign")
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        }

        // 상태변화기록(선택) 리포트
        this.fn_report_chk = function(obj,e)
        {
        	if (this.ds_list.rowcount < 1) {
        		alert("출력할 수급자를 선택하세요!");
        		return;
        	}

        	var chk = 0;

        	// 리스트 row 수만큼 for문 돌려서 체크된 row 찾기
        	for(var i=0; i < this.ds_list.rowcount; i++){
        		chk = (parseInt(this.ds_list.getColumn(i,"chk"))==1)? chk+1 : chk; // 체크된 경우 1 더한다.
        	}

        	// 체크박스 체크된 수급자가 없는 경우
        	if (chk == 0) {
        		alert("출력할 수급자를 선택하세요!");
        		return;
        	}

        	this.fn_call_report2("chk");
        };

        // 선택된 복수의 수급자 또는 한 명의 수급자에 대해
        // 검색조건 기간에 상태변화기록이 존재하는지 여부를 반환
        // 매개값 : 수급자 코드. 두명 이상일 경우 콤마로 구분됨
        this.fn_record_exist = function(m_codes)
        {
        	const svcId = "record_cnt";
        	const params = "/DAY00102Controller.do";
        	const inDatasets = "";
        	const outDatasets = "ds_record_cnt=output1";
        	const argument = "method=getRecordCnt "
        				   + "sqlId=DAY00102.DAY00102_DS_RECORD_CNT "
        				   + "sicode=" + fv_sicode + " "
        				   + "m_codes=" + m_codes + " "
        				   + "date_from=" + this.ds_search.getColumn(0,"date_from") + " "
        				   + "date_to=" + this.ds_search.getColumn(0,"date_to") + " "
        				   ;

        	const callbackFunc = "fn_callback";
        	const async = false;
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, async);

        	if (this.ds_record_cnt.getColumn(0,"CNT")<1) return false;

        	return true;

        }

        // 기간별 상태변화기록 리포트
        this.fn_report3 = function(obj,e)
        {
        	const date_from = this.ds_search.getColumn(0,"date_from");
        	const date_to = this.ds_search.getColumn(0,"date_to");
        	const diff = Sct.Util.getDayDiff(date_from, date_to);

        	if (diff > 185) {	// as-is 시스템 기준
        		alert("출력기간은 6개월 이내입니다!");
        		return;
        	}

        	let params;
        	const dicompNm = " ";	// ""인 경우 params 전달 안되므로 주의!
        	const popupUrl = "DAY_POP::DAY00102_R03.xfdl";
        	const popupName = "";
        	console.log("fv_sicode: " + fv_sicode);

        	params = {
        		sicode : fv_sicode
        	,	date_from : date_from
        	,	date_to : date_to
        	,	sign : this.ds_report.getColumn(0,"sign")
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 작성자 선택 팝업
        this.btn_manager_onclick = function(obj,e)
        {
         	if (this.ds_list_copy.rowcount < 1) {
        		alert("먼저 수급자를 선택해 주세요.");
        		return;
        	}

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_state_desc.getColumn(0, "sc_nalja")
        		,	FLAG : ""
        	};

        	Sct.popup(this, "employee", 450, 400, "작성자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };


        // 상태변화기록 조회/수정 팝업
        this.fn_st_change_pop = function(obj,e)
        {
        	var nRow = this.ds_detail.rowposition;
        	const param = {
        			SICODE : this.ds_detail.getColumn(nRow, "sicode")
        		,	SC_NUMBER : this.ds_detail.getColumn(nRow, "sc_number")
        		,	DATE : this.ds_detail.getColumn(nRow, "sc_nalja")
        		,	SC_CODE : this.ds_detail.getColumn(nRow, "sc_code")
        		,	SC_NAME : this.ds_detail.getColumn(nRow, "sc_name")
        		,	SC_CHANGE : this.ds_detail.getColumn(nRow, "sc_change")
        		,	CREATE_NM : this.ds_detail.getColumn(nRow, "create_nm")
        		,	CREATE_CODE : this.ds_detail.getColumn(nRow, "create_code")
        		,	M_GROUP : this.ds_list_copy.getColumn(0, "m_group")
        		,	SEX_NM : this.ds_list_copy.getColumn(0, "sex_nm")
        		,	VIEW_MANAGER : this.ds_detail.getColumn(nRow, "create_nm") + "/" + this.ds_detail.getColumn(nRow, "create_code")
        	};

        	Sct.popup(this, "state_change", 450, 400, "", param, "DAY_POP::DAY00102_P02.xfdl", "fn_popCallback");
        };

        //요양,간호일지 조회 팝업
        //검색기간은 시스템 날짜 기준 지난달 1일부터 ~ 오늘까지로 설정(검색기간 설정은 쿼리에서)
        this.btn_nurse_onclick = function(obj,e)
        {
        	if (this.ds_list_copy.rowcount == 0)
        	{
        		alert("수급자를 선택하세요");	// as-is에서는 아무 메세지 없음
        		return false;
        	}

        	this. fn_chk_nurse_cnt();
        	if (this.ds_nurse_cnt.getColumn(0,"CNT")<1) {
        		alert("기록된 요양일지가 없습니다.");
        		return false;
        	}

        	const param = {
        			SICODE : this.ds_list_copy.getColumn(0, "sicode")
        		,	M_CODE : this.ds_list_copy.getColumn(0, "m_code")
        	};
        	Sct.popup(this, "nurse", 450, 400, "", param, "DAY_POP::DAY00102_P01.xfdl", "fn_popCallback");
        };

        this.fn_chk_nurse_cnt = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_nurse_cnt=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00102_P01.DAY00102_P01_DS_LIST_CNT_S "
        				   + "sicode=" + this.ds_list_copy.getColumn(0, "sicode") + " "
        				   + "m_code=" + this.ds_list_copy.getColumn(0, "m_code") + " ";
        	const callbackFunc = "fn_callback";

        	const async = false;
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, async);
        }

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
        				const name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_state_desc.setColumn(0, "작성자명", name);
        				this.ds_state_desc.setColumn(0, "작성코드", staffid);
        				this.ds_state_desc.setColumn(0, "view_manager", name + "/" + staffid);
        			}
        			else
        			{
        				this.ds_state_desc.setColumn(0, "작성자명", "");
        				this.ds_state_desc.setColumn(0, "작성코드", "");
        				this.ds_state_desc.setColumn(0, "view_manager", "");
        			}
        			break;
        		case "state_change" :
        			if (objDs.getColumn(0, "REFRESH") == "Y")
        			{
        				this.fn_searchDetail();
        			}
        			break;
        		case "nurse" :	// 팝업에서 가져온 내용을 기존 내용과 이어붙이기. MAX 500 문자열 길이값 체크
        			var copyStr = objDs.getColumn(0,"copy_text");
        			var oldStr = this.ds_state_desc.getColumn(0,"상태변화");
        			if ((oldStr + copyStr).length > 500) {
        				alert("상태변화 입력란에 입력할 수 있는 문자열 길이를 초과하여 가져올 수 없습니다.");
        			} else {
        				this.ds_state_desc.setColumn(0,"상태변화", oldStr + copyStr);
        			}
        			break;
        		// 사진첨부
        		case "imgFILEUPLOAD" :
        			const dataGrpId = this.ds_data.getColumn(0, "FILE_GRP_ID");

        			if (this.ds_data.getColumn(0, "FILE_REAL_NAME") != objDs.getColumn(0, "FILE_REAL_NAME"))
        			{
        				this.ds_data.setColumn(0, "FILE_GRP_ID", objDs.getColumn(0, "FILE_GRP_ID"));
        				this.ds_data.setColumn(0, "FILE_REAL_NAME", objDs.getColumn(0, "FILE_REAL_NAME"));
        				this.ds_data.setColumn(0, "daysajin", Sct.Util.isEmpty(objDs.getColumn(0, "FILE_NAME")) ? "" : objDs.getColumn(0, "FILE_NAME"));
        				this.fn_getSignImage();
        			}
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.ds_list_copy.clearData();
        	this.ds_state_desc.clearData();
        	this.ds_detail.clearData();

        	this.ds_search.setColumn(0,"s_nm","사용중");	// 초기값은 수급자만 리스팅
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


        // 캘린더에서 값 변경시 date_from
        this.div_search_cal_date_from_pic_onchanged = function(obj,e)
        {
        	this.clearAndSearch();
        };

        // 캘린더에서 값 변경시 date_to
        this.div_search_cal_date_to_pic_onchanged = function(obj,e)
        {
        	this.clearAndSearch();
        };

        // 조회조건 년도 값 변경 이벤트
        this.div_search_cmb_year_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "date_from", e.postvalue + '0101');
        	this.ds_search.setColumn(0, "date_to", e.postvalue + '1231');
        	this.div_search.form.cal_date_from_pic.set_value(e.postvalue + "0101");
        	this.div_search.form.cal_date_to_pic.set_value(e.postvalue + "1231");

        	// 값 변경시 조회
        	this.clearAndSearch();
        };

        // 1주일 버튼
        this.btn_week_onclick = function(obj,e)
        {
        	let today = Sct.Util.getToday();
        	let firstDay = Sct.Util.addDate(today, -6);

        	this.set_ds_search_date(firstDay, today);

        	// 년도 콤보에도 값 적용
        	this.combo_set_year(firstDay);

        	this.clearAndSearch();
        };

        // 15일 버튼
        this.btn_half_month_onclick = function(obj,e)
        {
        	let today = Sct.Util.getToday();
        	let firstDay = Sct.Util.addDate(today, -14);

        	this.set_ds_search_date(firstDay, today);

        	// 년도 콤보에도 값 적용
        	this.combo_set_year(firstDay);

        	this.clearAndSearch();
        };


        // 1개월 버튼
        this.btn_month_onclick = function(obj,e)
        {
        	let thisMonth = Sct.Util.getMm();	// YYYYMM
        	let firstDay = thisMonth + "01";
        	let lastDay = Sct.Util.getLastDay(thisMonth);

        	this.set_ds_search_date(firstDay, lastDay);

        	// 년도 콤보에도 값 적용
        	this.combo_set_year(firstDay);

        	this.clearAndSearch();
        };

        // 6개월 버튼
        this.btn_six_month_onclick = function(obj,e)
        {
        	let today = Sct.Util.getToday();
        	let thisMonth = Sct.Util.getMm();	// YYYYMM
        	let temp = Sct.Util.addMonth(today, -5);
        	let firstDay = temp.substr(0,6) + "01";
        	let lastDay = Sct.Util.getLastDay(thisMonth);

        	this.set_ds_search_date(firstDay, lastDay);

        	// 년도 콤보에도 값 적용
        	this.combo_set_year(firstDay);

        	this.clearAndSearch();
        };

        // 1년 버튼
        // 다른 기간 설정 버튼과 달리
        // 오늘일자 기준이 아니라 콤보에 선택된 년도 기준
        this.btn_year_onclick = function(obj,e)
        {
        	let year = this.div_search.form.cmb_year.value;
        	let firstDay = year + "0101";
        	let lastDay = year + "1231";

        	this.set_ds_search_date(firstDay, lastDay);

        	// 년도 콤보에도 값 적용
        	//this.combo_set_year(firstDay);

        	this.clearAndSearch();
        };

        // ds_search에 시작일, 종료일 받아서 세팅
        this.set_ds_search_date = function(from_d, to_d)
        {
        	this.ds_search.setColumn(0, "date_from", from_d);
        	this.ds_search.setColumn(0, "date_to", to_d);
        }

        // 년도 콤보에 년도값 적용
        this.combo_set_year = function (fDay)
        {
        	var yearStr = fDay.substr(0,4);
        	this.div_search.form.cmb_year.set_value(yearStr);
        }




        // 수급자 버튼
        this.btn_mate_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"s_nm","사용중");
        	this.clearAndSearch();
        };

        // 퇴소자 버튼
        this.btn_retiree_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"s_nm","퇴소자");
        	this.clearAndSearch();
        };

        // 전체 버튼
        this.btn_all_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"s_nm","");
        	this.clearAndSearch();
        };

        this.clearAndSearch = function()
        {
        	this.ds_list_copy.clearData();
        	this.ds_detail.clearData();

        	this.fn_search();
        }

        // 그리드 셀클릭 이벤트
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	const selIdx = obj.getBindCellIndex("body", "m_name");

        	// 수급자명 컬럼인 경우
        	if (e.col == 4)
        	{
        		var selRow = this.ds_list.rowposition;
        		var m_code = this.ds_list.getColumn(selRow,"m_code");

        		// 우상단 수급자 조회 div 내용표시
        		this.ds_list_copy.clearData();
        		this.ds_list_copy.addRow();
        		this.ds_list_copy.copyRow(0,this.ds_list,selRow);

        		// 우중간 상태변화 기록 입력 초기화 세팅
        		this.fn_set_new_state_change();

        		// 우하단 상태변화 기록 검색
        		this.ds_search_detail.copyRow(0,this.ds_search,0);
        		this.ds_search_detail.setColumn(0,"sc_code", m_code);
        		this.fn_searchDetail();
        	}
        };

        // 새로작성
        this.div_func_btn_new_onclick = function(obj,e)
        {
        	let m_code = this.ds_list_copy.getColumn(0,"m_code");
        	if (m_code == null || m_code == "") {
        		alert("먼저 수급자를 선택하시오");
        		return false;
        	}

        	this.fn_set_new_state_change();
        };

        this.fn_set_new_state_change = function()
        {
        	var sicode = this.ds_list_copy.getColumn(0,"sicode");
        	var m_code = this.ds_list_copy.getColumn(0,"m_code");
        	var m_name = this.ds_list_copy.getColumn(0,"m_name");
        	let today = Sct.Util.getToday();
        	if (this.ds_state_desc.rowcount == 0) {
        		this.ds_state_desc.addRow();
        	}
        	this.ds_state_desc.setColumn(0, "sc_nalja", today);
        	this.ds_state_desc.setColumn(0,"sicode", sicode);
        	this.ds_state_desc.setColumn(0,"sc_code", m_code); // base_mate 테이블의 m_code가 kmstchange 테이블에서는 sc_code
        	this.ds_state_desc.setColumn(0,"sc_name", m_name);
        	this.ds_state_desc.setColumn(0, "상태변화", "");
        	this.ds_state_desc.setColumn(0, "작성자명", this.fv_staff_name); //작성자를 로그인 사용자로
        	this.ds_state_desc.setColumn(0, "작성코드", this.fv_staff_id);	  //로그인 아이디
        	this.ds_state_desc.setColumn(0, "view_manager", this.fv_staff_name + "/" + this.fv_staff_id);
        }


        // DETAIL 그리드 클릭
        this.grd_detail_oncellclick = function(obj,e)
        {
        	var headText = obj.getCellText(-1,e.col);

        	// 내용복사 컬럼의 복사 버튼 클릭
        	if (headText=="내용복사") {
        		var content = this.ds_detail.getColumn(e.row, "sc_change");
        		this.ds_state_desc.setColumn(0, "상태변화", content);
        	// 작성일 컬럼 클릭
        	} else if (headText=="작성일") {
        		this.fn_st_change_pop();	// 팝업창
        	}
        };

        // 수급자,퇴소자,전체 버튼 선택에 따라 버튼 배경색 바꾸기
        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid != "s_nm") return;

        	let s_nm = this.ds_search.getColumn(0,"s_nm");
        	let btn_all = this.div_cont.form.div_left.form.btn_all;
        	let btn_mate = this.div_cont.form.div_left.form.btn_mate;
        	let btn_retiree = this.div_cont.form.div_left.form.btn_retiree;

        	switch (s_nm) {
        		case "" :
        			btn_all.set_cssclass("btn_eldery2");
        			btn_mate.set_cssclass("btn_eldery");
        			btn_retiree.set_cssclass("btn_eldery");
        			break;
        		case "사용중" :
        			btn_all.set_cssclass("btn_eldery");
        			btn_mate.set_cssclass("btn_eldery2");
        			btn_retiree.set_cssclass("btn_eldery");
        			break;
        		case "퇴소자" :
        			btn_all.set_cssclass("btn_eldery");
        			btn_mate.set_cssclass("btn_eldery");
        			btn_retiree.set_cssclass("btn_eldery2");
        			break;

        		default:
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_left.form.btn_week.addEventHandler("onclick",this.btn_week_onclick,this);
            this.div_cont.form.div_left.form.btn_half_month.addEventHandler("onclick",this.btn_half_month_onclick,this);
            this.div_cont.form.div_left.form.btn_month.addEventHandler("onclick",this.btn_month_onclick,this);
            this.div_cont.form.div_left.form.btn_six_month.addEventHandler("onclick",this.btn_six_month_onclick,this);
            this.div_cont.form.div_left.form.btn_year.addEventHandler("onclick",this.btn_year_onclick,this);
            this.div_cont.form.div_left.form.btn_mate.addEventHandler("onclick",this.btn_mate_onclick,this);
            this.div_cont.form.div_left.form.btn_retiree.addEventHandler("onclick",this.btn_retiree_onclick,this);
            this.div_cont.form.div_left.form.btn_all.addEventHandler("onclick",this.btn_all_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_all.addEventHandler("onclick",this.btn_nurse_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_report1.addEventHandler("onclick",this.fn_report1,this);
            this.div_cont.form.div_right.form.div_main.form.btn_report2.addEventHandler("onclick",this.fn_report_mate,this);
            this.div_cont.form.div_right.form.div_main.form.btn_repo_term.addEventHandler("onclick",this.fn_report3,this);
            this.div_cont.form.div_right.form.div_main.form.btn_report_chk.addEventHandler("onclick",this.fn_report_chk,this);
            this.div_cont.form.div_right.form.div_main.form.cal_date_to_pic.addEventHandler("onchanged",this.cal_date_pic_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.btn_manager.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.div_right.form.div_down.form.grd_detail.addEventHandler("oncellclick",this.grd_detail_oncellclick,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.div_search_cmb_year_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.cal_date_from_pic.addEventHandler("onchanged",this.div_search_cal_date_from_pic_onchanged,this);
            this.div_search.form.cal_date_to_pic.addEventHandler("onchanged",this.div_search_cal_date_to_pic_onchanged,this);
            this.div_func.form.btn_new.addEventHandler("onclick",this.div_func_btn_new_onclick,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00102.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
