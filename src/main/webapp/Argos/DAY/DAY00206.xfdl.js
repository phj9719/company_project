(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00205");
            this.set_titletext("2-06 의료페기물대장");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"w_number\" type=\"STRING\" size=\"256\"/><Column id=\"w_date\" type=\"DATE\" size=\"256\"/><Column id=\"폐기물종류\" type=\"STRING\" size=\"256\"/><Column id=\"성상\" type=\"STRING\" size=\"256\"/><Column id=\"배출중량\" type=\"STRING\" size=\"256\"/><Column id=\"배출수량\" type=\"STRING\" size=\"256\"/><Column id=\"확인자\" type=\"STRING\" size=\"256\"/><Column id=\"확인코드\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/><Column id=\"org_기록번호\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"DATE\" size=\"256\"/><Column id=\"date_to\" type=\"DATE\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kind", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">1</Col><Col id=\"CMNM\">일반의료폐기물</Col></Row><Row><Col id=\"CMCD\">2</Col><Col id=\"CMNM\">손상성폐기물</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"기록번호\" type=\"STRING\" size=\"256\"/><Column id=\"배출일\" type=\"DATE\" size=\"256\"/><Column id=\"폐기물종류\" type=\"STRING\" size=\"256\"/><Column id=\"성상\" type=\"STRING\" size=\"256\"/><Column id=\"배출중량\" type=\"STRING\" size=\"256\"/><Column id=\"배출수량\" type=\"STRING\" size=\"256\"/><Column id=\"확인자\" type=\"STRING\" size=\"256\"/><Column id=\"확인코드\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/><Column id=\"org_기록번호\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data_chk", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"소독일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","450",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"작성일자\"/><Cell col=\"1\" text=\"폐기물종류\"/><Cell col=\"2\" text=\"성상\"/><Cell col=\"3\" text=\"배출중량\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"작성자\"/></Band><Band id=\"body\"><Cell text=\"bind:w_date\" displaytype=\"date\" expandchar=\"dot\"/><Cell col=\"1\" text=\"bind:폐기물종류\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:성상\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:배출중량\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:배출수량\"/><Cell col=\"5\" text=\"bind:확인자\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","450","0","1230",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_up","20","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_body1","0","0","1210","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","0","100","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("0");
            obj.set_text("점검일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Button("btn_manager","657","0","100","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("2");
            obj.set_text("점검자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_manager_value","767","5","198","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("3");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","199","5","25","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Calendar("cal_date","110","5","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("5");
            obj.set_buttonsize("0 0");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_body1_00","0","33","1210","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00","0","66","1210","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_body1_00_00_00","0","99","1210","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","0","33","100","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("9");
            obj.set_text("폐기물 종류");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00","0","66","100","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("10");
            obj.set_text("배출중량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_00_00","0","99","100","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("11");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01","658","33","100","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("12");
            obj.set_text("성상");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_head1_00_01_00","658","66","100","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("13");
            obj.set_text("배출수량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Edit("edt_00_01","110","37","250","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("14");
            obj.set_textAlign("left");
            obj.set_maxlength("20");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00","110","70","150","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("15");
            obj.set_textAlign("left");
            obj.set_maxlength("10");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00","110","103","548","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("16");
            obj.set_textAlign("left");
            obj.set_maxlength("40");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_01_00","767","37","150","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("17");
            obj.set_textAlign("left");
            obj.set_maxlength("8");
            obj.set_text("[01]");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Combo("cmb_00","367","37","150","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_kind");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Spin("spn_00","767","71","150","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("19");
            obj.set_min("0");
            obj.set_max("99");
            obj.set_value("");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_manager_value00","924","38","130","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("20");
            obj.set_text("◀ 고상, 액상");
            obj.set_color("red");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","580","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","508","7","70","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","227","12","8","17",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_year","10","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","108","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from_pic","197","7","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","238","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic","327","7","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_firstHalf","360","7","70","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("전반기");
            obj.set_background("orchid");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_secondHalf","434","7","70","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("후반기");
            obj.set_background("orchid");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","580","0","1230","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","445","7","65","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("결재란");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","510","7","150","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("의료폐기 관리대장");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_no_value","75","8","80","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_no","10","8","58","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("기록번호 : ");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save","955","7","70","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_delete","1030","7","70","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_new","855","7","95","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_text("새로작성");
            obj.set_cssclass("btn_newdoc");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2","665","7","185","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("7");
            obj.set_text("의료폐기 관리대장(월간)");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cmb_year","value","ds_search","year");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_func.form.sta_no_value","text","ds_data","기록번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_up.form.div_right.form.sta_body1_m_name","text","ds_data","수급자명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_up.form.div_right.form.sta_body1_m_code","text","ds_data","수급코드");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_up.form.div_right.form.sta_body1_m_group","text","ds_data","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_up.form.div_right.form.sta_body1_sex_nm","text","ds_list_copy","sex_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_up.form.div_right.form.sta_body1_age","text","ds_data","성별");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_up.form.div_right.form.sta_body1_grade_nm","text","ds_data","grade_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_up.form.div_right.form.sta_body1_m_enday","text","ds_data","입소일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_up.form.div_right.form.sta_body1_age00","text","ds_data","생일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_up.form.sta_manager_value","text","ds_data","VIEW_MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","div_cont.form.div_right.form.div_up.form.cal_date_pic","value","ds_data","배출일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","div_cont.form.div_right.form.div_up.form.cal_date","value","ds_data","배출일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","div_search.form.cal_date_pic","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_date_from","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_from_pic","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_search.form.cal_date_to","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_search.form.cal_date_to_pic","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병08_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병08_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병09_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_down.form.tab.tab_page1.form.div_main.form.chk_cr1_o8_01_00_00_01_01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","질병09_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.div_down.form.edt_00_01_00","value","ds_data","기기명02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00","value","ds_data","기기명03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00","value","ds_data","기기명04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00","value","ds_data","기기명05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00","value","ds_data","기기명06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00","value","ds_data","기기명07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00","value","ds_data","기기명08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00","value","ds_data","기기명09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00","value","ds_data","기기명10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","기기명20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_right.form.div_down.form.edt_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","value","ds_data","점검비고");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_up.form.edt_00_01","value","ds_data","폐기물종류");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_right.form.div_up.form.edt_00_01_00","value","ds_data","배출중량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_right.form.div_up.form.edt_00_01_00_00","value","ds_data","비고");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_right.form.div_up.form.edt_00_01_00_01_00","value","ds_data","성상");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_right.form.div_up.form.spn_00","value","ds_data","배출수량");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00206.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00206.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00206.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00205
         * 화면명   	: 2-06 의료기기점검
         * 화면설명 	:
         * 작성일   	: 2022-06-22
         * 작성자   	: 이동관
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
        this.fv_staff_dutyname = nexacro.getApplication().gds_userInfo.getColumn(0, "c_dutyname");
        this.row = 0;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 현재 년도 구하기
        	const date = new Date();
        	const year = 2012;
        	const thisYear = date.getFullYear();

        	// 년도 콤보박스 세팅 (현재년 기준 ~ 19?20?년 후까지)
        	this.ds_year.set_enableevent(false);
        	this.ds_year.clearData();
        	let nRow;
        	for (let i = 0; i <= (thisYear-year) + 9; i++){
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year + i);
        		this.ds_year.setColumn(nRow, "CMNM", (year + i) + "년");
        	}
        	this.ds_year.set_enableevent(true);

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "year", thisYear);
        	this.ds_search.setColumn(0, "date_from", thisYear + '0101');
        	this.ds_search.setColumn(0, "date_to", thisYear + '1231');

        	// 오픈시 조회
        	this.fn_search();

        };

        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };

        this.fn_saveBtn = function(obj,e)
        {
        	this.fn_save();
        };

        this.fn_deleteBtn = function(obj,e)
        {
        	this.fn_delete();
        };

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

        this.fn_save_pre = function (){

        	if(Sct.Util.isEmpty(this.ds_data.getColumn(this.ds_data.rowposition, "배출일"))){
        		alert("작성일은 필수사항입니다!");
        		return false;
        	}
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(this.ds_data.rowposition, "확인자"))){
        		alert("점검자는 필수사항입니다!");
        		return false;
        	}

        	if(this.ds_data.getRowType(this.ds_data.rowposition) == 2){
        		const svcId = "searchChk";
        		const params = "/commonController.do";
        		const inDatasets = "";
        		const outDatasets = "ds_data_chk=output1";
        		const argument = "method=getList "
        					   + "sqlId=DAY00206.DAY00206_DS_DATA_CHK "
        					   + "sicode=" + this.ds_data.getColumn(0, "sicode") + " "
        					   + "w_date=" + this.ds_data.getColumn(0, "배출일") + " ";

        		const callbackFunc = "fn_callback";
        		Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);

        		if(this.ds_data_chk.rowcount > 0){
        			alert("기록되어있습니다. 배출일을 수정하세요!");
        			return false;
        		}
        	}
        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function(){

        	// 소독번호 없을 시
        	if(Sct.Util.isEmpty(this.ds_data.getColumn(0,"점검번호"))){
        		this.alert("삭제할 항목이 없습니다.");
        		return false;
        	}

        	if(!this.confirm("삭제 하시겠습니까?")) return false;

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(0, Dataset.ROWTYPE_DELETE);
        	this.ds_data.set_updatecontrol(true);

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
        				   + "sqlId=DAY00206.DAY00206_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_searchDetail = function (row){

        	const svcId = "searchDetail";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_data=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00206.DAY00206_DS_DATA_S' "
        				   + "sicode=" + this.ds_list.getColumn(row, "sicode") + " "
        				   + "w_number=" + this.ds_list.getColumn(row, "w_number") + " "
        				   + "w_date=" + this.ds_list.getColumn(row, "w_date") + " ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_save = function(){

        	// validation
        	if(!this.fn_save_pre()) return;

        	const svcId = "save";
         	const inDs = "ds_data";
        	this.fn_save_com(svcId, inDs);

        }

        // 삭제
        this.fn_delete = function(){

        	// validation
        	if (!this.fn_delete_pre()) return;

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_data:U";
        	const outDatasets = "";
        	const argument = "method=delete "
        				   + "sqlId=DAY00206.DAY00206_DS_DATA_D ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search"){
        			this.div_cont.form.div_right.form.div_up.form.cal_date_pic.set_readonly(true);
        			this.fn_searchDetail(this.row);
        			this.row = 0;
        		}else if (strSvcID == "searchDetail"){
        			const name = this.ds_data.getColumn(0, "확인자");
        			const id = this.ds_data.getColumn(0, "확인코드");
        			//const dutyname = this.ds_data.getColumn(0, "점검직종");
        			this.ds_data.setColumn(0, "VIEW_MANAGER", name + "/" + id);
        		}else if(strSvcID == "save"){
        			this.div_cont.form.div_right.form.div_up.form.cal_date_pic.set_readonly(true);
        			this.fn_search();
        			this.row = 0;
        		}else if(strSvcID == "delete"){
        			this.fn_search();
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
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "employee" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name1 = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid1 = objDs.getColumn(0, "c_staffid");
        				const dutyname1 = objDs.getColumn(0, "담당직종");
        				this.ds_data.setColumn(0, "확인자", name1);
        				this.ds_data.setColumn(0, "확인코드", staffid1);
        				//this.ds_data.setColumn(0, "점검직종", dutyname1);
        				this.ds_data.setColumn(0, "VIEW_MANAGER", name1 + "/" + staffid1);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "확인자", "");
        				this.ds_data.setColumn(0, "확인코드", "");
        				//this.ds_data.setColumn(0, "점검직종", "");
        				this.ds_data.setColumn(0, "VIEW_MANAGER", "");
        			}
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
         this.div_search_cmb_year_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "date_from", e.postvalue + '0101');
        	this.ds_search.setColumn(0, "date_to", e.postvalue + '1231');
        	this.ds_list.clearData();

        	this.fn_search();
        };

        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	if(this.ds_data.getRowType(this.ds_data.rowposition) == 2){
        		return;
        	}
        	this.fn_searchDetail(e.row);
        	this.row = e.row;
        };

        this.div_func_btn_new_onclick = function(obj,e)
        {
        	this.ds_data.clearData();
        	this.div_cont.form.div_right.form.div_up.form.cal_date_pic.set_readonly(false);
        	const aRow = this.ds_data.addRow();
        	this.ds_data.setColumn(aRow, "sicode", fv_sicode);
        	this.ds_data.setColumn(aRow, "배출일", Sct.Util.getToday());
        	this.ds_data.setColumn(aRow, "확인자", this.fv_staff_name);
        	this.ds_data.setColumn(aRow, "확인코드", this.fv_staff_id);
        	this.ds_data.setColumn(aRow, "VIEW_MANAGER", this.fv_staff_name + "/" + this.fv_staff_id);

        };

        this.btn_manager_onclick = function(obj,e){

        	if(this.ds_data.rowcount < 1){
        		return;
        	}

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_data.getColumn(0, "소독일")
        	};

        	Sct.popup(this, "employee", 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");

        };

        this.div_func_btn_report1_onclick = function(obj,e)
        {
        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00205_R01.xfdl";
        	const popupName = "의료기기 점검일지l";

        	params = {
        		sicode : fv_sicode
        	,	sign : this.div_func.form.chk_sign.value
        	,	chknum : this.ds_data.getColumn(0, "점검번호")
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };


        this.div_search_btn_firstHalf_onclick = function(obj,e)
        {
        	const date = new Date();
        	const thisYear = date.getFullYear();

        	this.ds_search.setColumn(0, "date_from", thisYear + '0101');
        	this.ds_search.setColumn(0, "date_to", thisYear + '0630');
        	this.ds_list.clearData();

        	this.fn_search();
        };

        this.div_search_btn_secondHalf_onclick = function(obj,e)
        {
        	const date = new Date();
        	const thisYear = date.getFullYear();

        	this.ds_search.setColumn(0, "date_from", thisYear + '0701');
        	this.ds_search.setColumn(0, "date_to", thisYear + '1231');
        	this.ds_list.clearData();

        	this.fn_search();
        };

        this.div_cont_div_right_div_down_cmb_00_onitemchanged = function(obj,e)
        {
        	this.ds_data.setColumn(0, "폐기물종류", String(e.posttext))
        };

        // 의료폐기물 관리대장
        this.div_func_btn_report1_onclick = function(obj,e)
        {
        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00206_R01.xfdl";
        	const popupName = "의료페기 관리대장";

        	params = {
        		sicode : fv_sicode
        	,	sign : this.div_func.form.chk_sign.value
        	,	date_from : this.ds_search.getColumn(0, "date_from")
        	,	date_to : this.ds_search.getColumn(0, "date_to")
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 의료폐기물 관리대장(월간)
        this.div_func_btn_report2_onclick = function(obj,e)
        {
        	if (this.ds_data.getRowCount() < 1) return;

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00206_R02.xfdl";
        	const popupName = "의료페기 관리대장(월간)";

        	params = {
        		sicode : fv_sicode
        	,	sign : this.div_func.form.chk_sign.value
        	,	date : this.ds_data.getColumn(0, "배출일")
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_right.form.div_up.form.btn_manager.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.div_right.form.div_up.form.cmb_00.addEventHandler("onitemchanged",this.div_cont_div_right_div_down_cmb_00_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.div_search_cmb_year_onitemchanged,this);
            this.div_search.form.btn_firstHalf.addEventHandler("onclick",this.div_search_btn_firstHalf_onclick,this);
            this.div_search.form.btn_secondHalf.addEventHandler("onclick",this.div_search_btn_secondHalf_onclick,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.div_func_btn_report1_onclick,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_func.form.btn_new.addEventHandler("onclick",this.div_func_btn_new_onclick,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.div_func_btn_report2_onclick,this);
            this.ds_data.addEventHandler("oncolumnchanged",this.ds_data_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00206.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
