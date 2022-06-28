(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00302");
            this.set_titletext("3-2 월간 물리(작업)치료 제공기록(삭제)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_grade\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"나이\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"입소일\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"퇴소일\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday1\" type=\"STRING\" size=\"256\"/><Column id=\"인정시작\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday2\" type=\"STRING\" size=\"256\"/><Column id=\"인정종료\" type=\"STRING\" size=\"256\"/><Column id=\"등급\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/><Column id=\"MON\" type=\"STRING\" size=\"256\"/><Column id=\"group\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_grade\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"나이\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"입소일\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"퇴소일\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday1\" type=\"STRING\" size=\"256\"/><Column id=\"인정시작\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday2\" type=\"STRING\" size=\"256\"/><Column id=\"인정종료\" type=\"STRING\" size=\"256\"/><Column id=\"등급\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"nalja\" type=\"STRING\" size=\"256\"/><Column id=\"mulday\" type=\"STRING\" size=\"256\"/><Column id=\"multime\" type=\"STRING\" size=\"256\"/><Column id=\"endtime\" type=\"STRING\" size=\"256\"/><Column id=\"치료시간\" type=\"STRING\" size=\"256\"/><Column id=\"치료01\" type=\"STRING\" size=\"256\"/><Column id=\"치료02\" type=\"STRING\" size=\"256\"/><Column id=\"치료03\" type=\"STRING\" size=\"256\"/><Column id=\"치료04\" type=\"STRING\" size=\"256\"/><Column id=\"치료05\" type=\"STRING\" size=\"256\"/><Column id=\"치료06\" type=\"STRING\" size=\"256\"/><Column id=\"치료07\" type=\"STRING\" size=\"256\"/><Column id=\"치료08\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/><Column id=\"작성자\" type=\"STRING\" size=\"256\"/><Column id=\"조회\" type=\"STRING\" size=\"256\"/><Column id=\"mulnumber\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_count", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","70",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","410",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_head");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"현황\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"생활실\"/></Band><Band id=\"body\"><Cell text=\"bind:거주현황\"/><Cell col=\"1\" text=\"bind:m_group\"/><Cell col=\"2\" text=\"bind:m_name\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\" cursor=\"pointer\"/><Cell col=\"3\" text=\"bind:성별\"/><Cell col=\"4\" text=\"bind:등급\"/><Cell col=\"5\" text=\"bind:m_roomname\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","div_left:10","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_main","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","1","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            obj.set_text("수급자명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","82","1",null,"34","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_1","400","1","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("3");
            obj.set_text("성별·나이");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","0","34","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("생 활 실");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","82","34",null,"34","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mate_code","171","9","79","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("6");
            obj.set_text("수급코드");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mate_name","92","9","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_text("수급자");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","0","67","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("주요질환");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","82","67",null,"34","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","105",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_detail");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"제공일\"/><Cell col=\"1\" text=\"시간\"/><Cell col=\"2\" text=\"치료①\"/><Cell col=\"3\" text=\"치료②\"/><Cell col=\"4\" text=\"치료③\"/><Cell col=\"5\" text=\"치료④\"/><Cell col=\"6\" text=\"치료⑤\"/><Cell col=\"7\" text=\"치료⑥\"/><Cell col=\"8\" text=\"치료⑦\"/><Cell col=\"9\" text=\"치료⑧\"/><Cell col=\"10\" text=\"비 고\"/><Cell col=\"11\" text=\"제공자\"/><Cell col=\"12\" text=\"조회\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" expandchar=\"dot\" text=\"bind:nalja\" cssclass=\"CellBf7fcff\"/><Cell col=\"1\" text=\"bind:치료시간\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:치료01\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:치료02\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"4\" textAlign=\"left\" text=\"bind:치료03\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:치료04\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"6\" textAlign=\"left\" text=\"bind:치료05\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:치료06\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"8\" textAlign=\"left\" text=\"bind:치료07\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"9\" textAlign=\"left\" text=\"bind:치료08\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"10\" textAlign=\"left\" editmaxlength=\"40\" text=\"bind:비고\"/><Cell col=\"11\" text=\"bind:작성자\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:조회\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"70\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sex","501","9","39","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_text("성");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_age","551","9","39","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_text("나이");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_2","740","1","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_text("입 소 일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_enday","841","9","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_text("yyyy.mm.dd");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_3","1110","1","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_text("인정번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_regist","1211","9","129","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_text("인정번호");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_1","400","34","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("케어그룹");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_2","740","34","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("퇴 소 일");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_3","1110","34","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("인정기간");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3_1","1110","67","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("인정등급");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_room_name","92","42","249","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_text("생활실");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_group","501","42","39","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_text("A");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_reday","841","42","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_text("yyyy.mm.dd");
            obj.set_color("red");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_liday1","1211","42","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_text("yyyy.mm.dd");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_li_con","1291","42","9","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_text("-");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_liday2","1311","42","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_text("yyyy.mm.dd");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_regist00","1211","75","129","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_text("등급");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_history","92","75","949","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("27");
            obj.set_text("주요질환");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","435","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","122","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","235","5","15","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","250","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","5","90","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("0");
            obj.getSetter("calendarfunc").set("month");
            obj.set_buttonsize("0 0");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","cal_date:-1","5","25","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("4");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"4","70","26","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","div_search:10","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_report1","0","4","145","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("물리치료제공기록");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_func2","0","35",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_all_filter","0","4","55","26",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("0");
            obj.set_text("전체");
            this.div_func2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle2","830","5","260","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("6");
            obj.set_text("월간 물리(작업)치료 제공기록작성");
            obj.set_cssclass("lb01");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_a_filter","60","4","25","26",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("1");
            obj.set_text("A");
            obj.set_font("normal 15pt/normal \"Noto Sans KR\"");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_b_filter","90","4","25","26",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("2");
            obj.set_text("B");
            obj.set_font("normal 15pt/normal \"Noto Sans KR\"");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_c_filter","120","4","25","26",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("3");
            obj.set_text("C");
            obj.set_font("normal 15pt/normal \"Noto Sans KR\"");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_d_filter","150","4","25","26",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("4");
            obj.set_text("D");
            obj.set_font("normal 15pt/normal \"Noto Sans KR\"");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_e_filter","180","4","25","26",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("5");
            obj.set_text("E");
            obj.set_font("normal 15pt/normal \"Noto Sans KR\"");
            this.div_func2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.cal_date_from","value","ds_search","DATE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_to","value","ds_search","DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cal_date_pic","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.sta_mate_name","text","ds_data","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.div_main.form.sta_mate_code","text","ds_data","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.sta_sex","text","ds_data","성별");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.sta_age","text","ds_data","나이");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.sta_enday","text","ds_data","입소일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.sta_regist","text","ds_data","m_regist");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.sta_room_name","text","ds_data","m_roomname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.sta_group","text","ds_data","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.sta_reday","text","ds_data","퇴소일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.sta_liday1","text","ds_data","인정시작");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.div_main.form.sta_liday2","text","ds_data","인정종료");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_main.form.sta_m_history","text","ds_data","m_history");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_main.form.sta_regist00","text","ds_data","등급");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00302.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00302.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00302.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00302
         * 화면명   	: 3-2 월간 물리(작업)치료 제공기록(삭제)
         * 화면설명 	: 물리(작업)치료 제공기록을 월별 수급자별로 조회하는 화면
         * 작성일   	: 2022-05-27
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
         ***********************************************************************
         * 비고 :
         */
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 날짜 세팅
        	const date = new Date();
        	const year = date.getFullYear();
        	const month = date.getMonth();
        	const firstDay = new Date(year, month, 1);
        	const lastDay = new Date(year, month + 1, 0);
        	const firstString = this.fn_getDateString(firstDay);
        	const lastString = this.fn_getDateString(lastDay);
        	const yearMon = year + ((month + 1) + "").padStart(2, '0');

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE", firstDay);
        	this.ds_search.setColumn(0, "DATE_FROM", firstString);
        	this.ds_search.setColumn(0, "DATE_TO", lastString);
        	this.ds_search.setColumn(0, "MON", yearMon);
        	this.ds_search.setColumn(0, "group", "");

        	// 리포트 결재란 체크박스 기본값 세팅
        	this.ds_report.setColumn(0, "SIGN", 1);

        	// 조회
        	this.fn_search();
        };

        // 그리드에 css 적용
        this.initGrid = function(grid)
        {
        	// 성별에 따라 이름 배경색 변경
        	const nameIdx = grid.getBindCellIndex("body", "m_name");
        	const nameCss = "expr:dataset.getColumn(currow, '성별') == '남' ? 'cellBMan' : 'cellBWoman'";
        	grid.setCellProperty("body", nameIdx, "cssclass", nameCss);

        	// 퇴사여부에 따라 근무상태 배경색 변경
        	const nowIdx = grid.getBindCellIndex("body", "거주현황");
        	const nowCss = "expr:dataset.getColumn(currow, '거주현황') == '퇴소자' ? 'cellBRetire' : ''";
        	grid.setCellProperty("body", nowIdx, "cssclass", nowCss);
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function()
        {
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_head=output1";
        	const argument = "method=getList"
        				   + " sqlId='DAY00302.DAY00302_DS_HEAD_S'";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 상세 조회
        this.fn_searchDetail = function(from, to, mon, code)
        {
        	const svcId = "searchDetail";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_detail=output1";
        	const argument = "method=getList"
        				   + " sqlId='DAY00302.DAY00302_DS_DETAIL_S'"
        				   + " SICODE=" + fv_sicode
        				   + " DATE_FROM=" + from
        				   + " DATE_TO=" + to
        				   + " MON=" + mon
        				   + " CODE=" + code;
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
        			this.ds_data.clearData();
        			this.ds_detail.clearData();
        			this.initGrid(this.div_cont.form.div_left.form.grd_head);
        		}
        		else if (strSvcID == "searchDetail")
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
        /* 날짜 스트링 만들기
         *
         * @param date DATE
         * @return String yyyyMMdd
         */
        this.fn_getDateString = function(date)
        {
        	const year = date.getFullYear() + "";
        	const month = ((date.getMonth() + 1) + "").padStart(2, '0');
        	const day = (date.getDate() + "").padStart(2, '0');

        	return year + month + day;
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if (popid != "del")
        	{
        		if(Sct.Util.isEmpty(strDs)) return;
        	}
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "del" :
        			const from = this.ds_search.getColumn(0, "DATE_FROM");
        			const to = this.ds_search.getColumn(0, "DATE_TO");
        			const mon = this.ds_search.getColumn(0, "MON");
        			const code = this.ds_data.getColumn(0, "m_code");
        			this.fn_searchDetail(from, to, mon, code);
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };

        // 리포트 출력
        this.fn_report = function(obj,e)
        {
        // 	if (this.ds_detail.rowcount == 0)
        // 	{
        // 		this.alert("해당되는 정보를 조회하지 못하였습니다.");
        // 		return;
        // 	}

        	let count = 0;
        	for (let i = 0; i < this.ds_detail.rowcount; i++)
        	{
        		if (!Sct.Util.isEmpty(this.ds_detail.getColumn(i, "mulnumber")))
        			count++;
        	}
        	//trace("count : " + count);
        	if (count == 0)
        	{
        		this.alert("해당되는 정보를 조회하지 못하였습니다.");
        		return;
        	}

        	const webHost = nexacro.getEnvironment().services["svcurl"].url;
        	const path = "/FILES/SIGN/";
        	const fullPath = webHost + path;

        	const jrfFile = "DAY00302_R01.jrf";

        	/*
        	 * ubireport 용 변수
        	 * this.ubiDataType : 리포트 데이타 유형 ( 0:SQL, 1:Nexacro 데이터셋, 2:화면 내 Grid(자동리포트) )
        	 *				  	  정의하지 않을경우 0으로 자동 세팅
        	 * this.ubiReportFile : 리포트 파일명
        	 * this.ubiLocalDs : Nexacro 데이터셋 정보 ( 데이터셋을 사용한 리포트 호출시 필요 )
        	 * this.ubiGridObj : 자동 리포트에서 사용하는 그리드 객체 ( 데이타 유형이 2일 경우 필요 )
        	 * this.ubiArg : 리포트 아규먼트 (세팅 예 : COMPANY#유비디시전#HOMEPAGE#http://www.ubireport.com# )
        	 * this.ubiIsMul : 멀티리포트 여부 ( 멀티리포트 사용시 true로 세팅 )
        	 * this.ubiMulCount : 멀티리포트 사용시 리포트 반복횟수 설정 숫자형태의 문자열
        	 * this.ubiIsPdf : pdf 프린트 바로 열기 여부 모달로 띄울시 false
        	 */
        	this.ubiArg = "P_SICODE#" + fv_sicode + "#"
        				+ "P_MON#" + this.ds_search.getColumn(0, "MON") + "#"
        				+ "P_CODE#" + this.ds_data.getColumn(0, "m_code") + "#"
        				+ "P_PATH#" + fullPath + "#";
        	this.ubiReportFile = jrfFile;

        	// 리포트 div 내용 갱신
        	this.components["UbiDiv"].form.ubiPreview();

        	// 모달로 열 경우
        // 	const popupName = "물리치료 제공기록";
        //
        //	// 팝업에 보낼 리포트 변수 세팅
        // 	const param = {
        // 		ubiReportFile : jrfFile
        // 	,	ubiArg : this.ubiArg
        // 	,	ubiIsPdf : false
        // 	}
        //
        // 	Sct.report(this, param, 815, 700, popupName);
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 검색 버튼
        this.fn_searchBtn = function(obj,e)
        {
        	this.fn_search();
        };

        // 저장 버튼
        this.fn_saveBtn = function()
        {
        	this.fn_save();
        };

        // 날짜 변경 이벤트
        this.div_search_cal_date_pic_onchanged = function(obj,e)
        {
        	// 선택월의 1일, 마지막일 구하기
        	const year = this.ds_search.getColumn(0, "DATE").substr(0,4);
        	const month = this.ds_search.getColumn(0, "DATE").substr(4);
        	const firstDay = new Date(year, month - 1 , 1);
        	const lastDay = new Date(year, month, 0);
        	const firstString = this.fn_getDateString(firstDay);
        	const lastString = this.fn_getDateString(lastDay);
        	const yearMonth = year + month;

        	// from to 날짜 셋팅
        	this.ds_search.setColumn(0, "DATE_FROM", firstString);
        	this.ds_search.setColumn(0, "DATE_TO", lastString);
        	this.ds_search.setColumn(0, "MON", yearMonth);

        	this.fn_search();
        };

        // 헤더 그리드 셀 클릭 이벤트
        this.div_cont_div_left_grd_head_oncellclick = function(obj,e)
        {
        	// 수급자명
        	const nameIdx = obj.getBindCellIndex("body", "m_name");
        	if (e.col == nameIdx)
        	{
        		this.ds_data.clearData();
        		const nRow = this.ds_data.addRow();
        		this.ds_data.copyRow(nRow, this.ds_head, e.row);

        		const from = this.ds_search.getColumn(0, "DATE_FROM");
        		const to = this.ds_search.getColumn(0, "DATE_TO");
        		const mon = this.ds_search.getColumn(0, "MON");
        		const code = this.ds_head.getColumn(e.row, "m_code");

        		this.fn_searchDetail(from, to, mon, code);
        	}
        };

        // 그룹 선택 버튼
        this.btn_filter_onclick = function(obj,e)
        {
        	switch(obj.id)
        	{
        		case "btn_all_filter" :
        			this.ds_search.setColumn(0, "group", "");
        			//this.ds_head.filter("");
        			break;
        		case "btn_a_filter" :
        			this.ds_search.setColumn(0, "group", "A");
        			//this.ds_head.filter("m_group == 'A'");
        			break;
        		case "btn_b_filter" :
        			this.ds_search.setColumn(0, "group", "B");
        			//this.ds_head.filter("m_group == 'B'");
        			break;
        		case "btn_c_filter" :
        			this.ds_search.setColumn(0, "group", "C");
        			//this.ds_head.filter("m_group == 'C'");
        			break;
        		case "btn_d_filter" :
        			this.ds_search.setColumn(0, "group", "D");
        			//this.ds_head.filter("m_group == 'D'");
        			break;
        		case "btn_e_filter" :
        			this.ds_search.setColumn(0, "group", "E");
        			//this.ds_head.filter("m_group == 'E'");
        			break;
        	}
        	this.fn_search();
        };

        // 상세그리드 확장버튼 클릭 이벤트
        this.div_cont_div_right_div_main_grd_detail_onexpandup = function(obj,e)
        {
        	const idx = obj.getBindCellIndex("body", "조회");
        	if (e.col == idx)
        	{
        		const mulnumber = this.ds_detail.getColumn(e.row, "mulnumber");
        		if (Sct.Util.isEmpty(mulnumber))
        		{
        			return;
        		}

        		const param = {
        			SICODE : fv_sicode
        		,	MULNUMBER : mulnumber
        		};

        		Sct.popup(this, "del", 450, 400, "", param, "DAY_POP::DAY00302_P01.xfdl", "fn_popCallback");
        	}
        };

        // 검색조건 데이터셋 컬럼 값 변경 이벤트
        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "group")
        	{
        		//const now = obj.getColumn(0, "NOW");
        		const btnArr = ["all", "a", "b", "c", "d", "e"];
        		let sBtn = "";
        		switch(e.newvalue)
        		{
        			case "" :
        				sBtn = "all";
        				break;
        			case "A" :
        				sBtn = "a";
        				break;
        			case "B" :
        				sBtn = "b";
        				break;
        			case "C" :
        				sBtn = "c";
        				break;
        			case "D" :
        				sBtn = "d";
        				break;
        			case "E" :
        				sBtn = "e";
        				break;
        			default:
        		}

        		for (let i = 0; i < btnArr.length; i++)
        		{
        			if (btnArr[i] == sBtn)
        				this.div_func2.form.components["btn_" + btnArr[i] + "_filter"].set_cssclass("btn_orange");
        			else
        				this.div_func2.form.components["btn_" + btnArr[i] + "_filter"].set_cssclass("btn_basic_gray");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_head.addEventHandler("oncellclick",this.div_cont_div_left_grd_head_oncellclick,this);
            this.div_cont.form.div_right.form.div_main.form.grd_detail.addEventHandler("onexpandup",this.div_cont_div_right_div_main_grd_detail_onexpandup,this);
            this.div_search.form.cal_date_pic.addEventHandler("onchanged",this.div_search_cal_date_pic_onchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
            this.div_func2.form.btn_all_filter.addEventHandler("onclick",this.btn_filter_onclick,this);
            this.div_func2.form.btn_a_filter.addEventHandler("onclick",this.btn_filter_onclick,this);
            this.div_func2.form.btn_b_filter.addEventHandler("onclick",this.btn_filter_onclick,this);
            this.div_func2.form.btn_c_filter.addEventHandler("onclick",this.btn_filter_onclick,this);
            this.div_func2.form.btn_d_filter.addEventHandler("onclick",this.btn_filter_onclick,this);
            this.div_func2.form.btn_e_filter.addEventHandler("onclick",this.btn_filter_onclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00302.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
