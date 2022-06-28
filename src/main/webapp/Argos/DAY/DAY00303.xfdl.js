(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00303");
            this.set_titletext("3-3 물리치료·기능회복훈련 급여계획");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_grade\" type=\"STRING\" size=\"256\"/><Column id=\"등급\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"plan_day\" type=\"STRING\" size=\"256\"/><Column id=\"나이\" type=\"STRING\" size=\"256\"/><Column id=\"생일\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"입소일\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"퇴소일\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/><Column id=\"NOW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_grade\" type=\"STRING\" size=\"256\"/><Column id=\"등급\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"plan_day\" type=\"STRING\" size=\"256\"/><Column id=\"나이\" type=\"STRING\" size=\"256\"/><Column id=\"생일\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"입소일\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"퇴소일\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"대상자코드\" type=\"STRING\" size=\"256\"/><Column id=\"평가일\" type=\"STRING\" size=\"256\"/><Column id=\"평가자명\" type=\"STRING\" size=\"256\"/><Column id=\"치료그룹\" type=\"STRING\" size=\"256\"/><Column id=\"계획시작\" type=\"STRING\" size=\"256\"/><Column id=\"계획종료\" type=\"STRING\" size=\"256\"/><Column id=\"계획기간\" type=\"STRING\" size=\"256\"/><Column id=\"치료시간\" type=\"STRING\" size=\"256\"/><Column id=\"월요일\" type=\"STRING\" size=\"256\"/><Column id=\"화요일\" type=\"STRING\" size=\"256\"/><Column id=\"수요일\" type=\"STRING\" size=\"256\"/><Column id=\"목요일\" type=\"STRING\" size=\"256\"/><Column id=\"금요일\" type=\"STRING\" size=\"256\"/><Column id=\"토요일\" type=\"STRING\" size=\"256\"/><Column id=\"일요일\" type=\"STRING\" size=\"256\"/><Column id=\"신체기능\" type=\"STRING\" size=\"256\"/><Column id=\"기본동작\" type=\"STRING\" size=\"256\"/><Column id=\"일상생활\" type=\"STRING\" size=\"256\"/><Column id=\"ha_number\" type=\"STRING\" size=\"256\"/><Column id=\"작성번호\" type=\"STRING\" size=\"256\"/><Column id=\"조회\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("div_left","0","0","560",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_head");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"현황\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"생활실\"/><Cell col=\"6\" text=\"최근계획기간\"/></Band><Band id=\"body\"><Cell text=\"bind:거주현황\"/><Cell col=\"1\" text=\"bind:m_group\"/><Cell col=\"2\" text=\"bind:m_name\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\" cursor=\"pointer\"/><Cell col=\"3\" text=\"bind:성별\"/><Cell col=\"4\" text=\"bind:등급\"/><Cell col=\"5\" text=\"bind:m_roomname\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:plan_day\"/></Band></Format></Formats>");
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

            obj = new Static("sta_head1_1","300","1","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
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
            obj.set_text("");
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
            obj.set_text("케어그룹");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","82","67",null,"34","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","135",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_detail");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"작성일\"/><Cell col=\"1\" text=\"작성자명\"/><Cell col=\"2\" text=\"그룹\"/><Cell col=\"3\" text=\"계획기간\"/><Cell col=\"4\" text=\"치료시간\"/><Cell col=\"5\" text=\"(월)\"/><Cell col=\"6\" text=\"(화)\"/><Cell col=\"7\" text=\"(수)\"/><Cell col=\"8\" text=\"(목)\"/><Cell col=\"9\" text=\"(금)\"/><Cell col=\"10\" text=\"(토)\"/><Cell col=\"11\" text=\"(일)\"/><Cell col=\"12\" text=\"신체기능\"/><Cell col=\"13\" text=\"기본동작\"/><Cell col=\"14\" text=\"일상생활\"/><Cell col=\"15\" text=\"작성번호\"/><Cell col=\"16\" text=\"조회\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" expandchar=\"dot\" text=\"bind:평가일\" cssclass=\"CellBf7fcff\"/><Cell col=\"1\" text=\"bind:평가자명\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:치료그룹\"/><Cell col=\"3\" text=\"bind:계획기간\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:치료시간\" color=\"blue\"/><Cell col=\"5\" textAlign=\"center\" text=\"bind:월요일\" expr=\"dataset.getColumn(currow, '월요일') == 1 ? '●' : ''\"/><Cell col=\"6\" textAlign=\"center\" text=\"bind:화요일\" expr=\"dataset.getColumn(currow, '화요일') == 1 ? '●' : ''\"/><Cell col=\"7\" textAlign=\"center\" text=\"bind:수요일\" expr=\"dataset.getColumn(currow, '수요일') == 1 ? '●' : ''\"/><Cell col=\"8\" textAlign=\"center\" text=\"bind:목요일\" expr=\"dataset.getColumn(currow, '목요일') == 1 ? '●' : ''\"/><Cell col=\"9\" textAlign=\"center\" text=\"bind:금요일\" expr=\"dataset.getColumn(currow, '금요일') == 1 ? '●' : ''\" color=\"blue\"/><Cell col=\"10\" textAlign=\"center\" editmaxlength=\"40\" text=\"bind:토요일\" expr=\"dataset.getColumn(currow, '토요일') == 1 ? '●' : ''\" color=\"red\"/><Cell col=\"11\" text=\"bind:일요일\" textAlign=\"center\" expr=\"dataset.getColumn(currow, '일요일') == 1 ? '●' : ''\"/><Cell col=\"12\" text=\"bind:신체기능\"/><Cell col=\"13\" text=\"bind:기본동작\"/><Cell col=\"14\" text=\"bind:일상생활\"/><Cell col=\"15\" text=\"bind:작성번호\"/><Cell col=\"16\" text=\"bind:조회\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"70\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sex","401","9","39","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_text("성");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_age","451","9","39","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_text("나이");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_2","640","1","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_text("입 소 일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_enday","741","9","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_text("yyyy.mm.dd");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_3","1010","1","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_text("인정등급");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_grade","1111","9","129","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_text("인정등급");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_1","300","34","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("생년월일");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_2","640","34","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("퇴 소 일");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_3","1010","34","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("인정번호");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3_1","300","67","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("주요질환");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_room_name","92","42","179","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_text("생활실");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_birth","401","42","89","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_text("생년월일");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_reday","741","42","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_text("yyyy.mm.dd");
            obj.set_color("red");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_regist","1111","42","149","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_text("인정번호");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_group","91","75","129","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_text("그룹");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_m_history","402","75",null,"19","20",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_text("주요질환");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_subTitle2","525","105","300","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_text("물리(작업)치료·기능회복 급여계획리스트");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_new","0","105","354","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("27");
            obj.set_text("⑤ 물리(작업)치료 ⑥ 기능회복훈련계획서 새로작성");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","435","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"4","70","26","110",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from_pic","89","4","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","118","9","8","17",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","130","4","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic","219","4","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","0","4","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","div_search:10","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Div("div_func2","0","35",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mate","0","4","80","26",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("0");
            obj.set_text("수급자");
            obj.set_cssclass("btn_eldery");
            this.div_func2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle2","830","5","260","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("1");
            obj.set_text("물리(작업)치료·기능회복훈련 계획");
            obj.set_cssclass("lb01");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_mate_retire","85","4","80","26",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("2");
            obj.set_text("퇴소자");
            obj.set_cssclass("btn_eldery");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_mate_all","170","4","70","26",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("3");
            obj.set_text("전체");
            obj.set_cssclass("btn_eldery");
            this.div_func2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cal_date_from_pic","value","ds_search","DATE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_date_to","value","ds_search","DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_to_pic","value","ds_search","DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cal_date_from","value","ds_search","DATE_FROM");
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

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.sta_grade","text","ds_data","등급");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.sta_room_name","text","ds_data","m_roomname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.sta_birth","text","ds_data","생일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.sta_reday","text","ds_data","퇴소일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.sta_regist","text","ds_data","m_regist");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.div_main.form.sta_group","text","ds_data","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_main.form.sta_m_history","text","ds_data","m_history");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00303.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00303.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00303.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00303
         * 화면명   	: 3-3 물리치료·기능회복훈련 급여계획
         * 화면설명 	: 수급자별 물리치료·기능회복훈련 급여계획을 조회하는 화면
         * 작성일   	: 2022-06-07
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

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE_FROM", year + '0101');
        	this.ds_search.setColumn(0, "DATE_TO", year + '1231');
        	this.ds_search.setColumn(0, "NOW", "사용중");

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
        				   + " sqlId='DAY00303.DAY00303_DS_HEAD_S'";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 상세 조회
        this.fn_searchDetail = function(code)
        {
        	const svcId = "searchDetail";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_detail=output1";
        	const argument = "method=getList"
        				   + " sqlId='DAY00303.DAY00303_DS_DETAIL_S'"
        				   + " SICODE=" + fv_sicode
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

        			//this.ds_head.filter("거주현황 == '사용중'");
        			//this.ds_head.set_keystring("S:+m_name");
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
        	if (popid != "pop")
        	{
        		if(Sct.Util.isEmpty(strDs)) return;
        	}
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "pop" :
        			const code = this.ds_data.getColumn(0, "m_code");
        			this.fn_searchDetail(code);
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
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
        		const code = this.ds_head.getColumn(e.row, "m_code");

        		this.fn_searchDetail(code);
        	}
        };

        // 그룹 선택 버튼
        this.btn_filter_onclick = function(obj,e)
        {
        	switch(obj.id)
        	{
        		case "btn_mate" :
        			this.ds_search.setColumn(0, "NOW", "사용중");
        			//this.ds_head.filter("거주현황 == '사용중'");
        			//this.ds_head.set_keystring("");
        			break;
        		case "btn_mate_retire" :
        			this.ds_search.setColumn(0, "NOW", "퇴소자");
        			//this.ds_head.filter("거주현황 == '퇴소자'");
        			//this.ds_head.set_keystring("");
        			break;
        		case "btn_mate_all" :
        			this.ds_search.setColumn(0, "NOW", "");
        			//this.ds_head.filter("");
        			//this.ds_head.set_keystring("");
        			break;
        	}
        	this.fn_search();
        };

        // 상세그리드 확장버튼 클릭 이벤트
        this.div_cont_div_right_div_main_grd_detail_onexpandup = function(obj,e)
        {
        	const idx = obj.getBindCellIndex("body", "조회");
        // 	trace("idx : " + idx);
        // 	trace("e.cell : " + e.cell);
        // 	trace("e.col : " + e.col);
        	if (e.cell == idx)
        	{
        		const mulnumber = this.ds_detail.getColumn(e.row, "ha_number");
        		const code = this.ds_detail.getColumn(e.row, "대상자코드");
        		if (Sct.Util.isEmpty(mulnumber))
        		{
        			return;
        		}

        		const param = {
        			SICODE : fv_sicode
        		,	NUMBER : mulnumber
        		,	CODE : code
        		};

        		Sct.popup(this, "pop", 450, 400, "", param, "DAY_POP::DAY00303_P01.xfdl", "fn_popCallback");
        	}
        };

        // ⑤ 물리(작업)치료 ⑥ 기능회복훈련계획서 새로작성 버튼 클릭
        this.div_cont_div_right_div_main_btn_new_onclick = function(obj,e)
        {
        	const code = this.ds_data.getColumn(e.row, "m_code");

        	if (Sct.Util.isEmpty(code))
        	{
        		this.alert("수급자를 선택해주세요");
        		return;
        	}

        	const param = {
        		SICODE : fv_sicode
        	,	CODE : code
        	};

        	Sct.popup(this, "pop", 450, 400, "", param, "DAY_POP::DAY00303_P01.xfdl", "fn_popCallback");
        };

        // 검색조건 데이터셋 컬럼 값 변경 이벤트
        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "NOW")
        	{
        		//const now = obj.getColumn(0, "NOW");
        		switch(e.newvalue)
        		{
        			case "" :
        				this.div_func2.form.btn_mate_all.set_cssclass("btn_eldery2");
        				this.div_func2.form.btn_mate.set_cssclass("btn_eldery");
        				this.div_func2.form.btn_mate_retire.set_cssclass("btn_eldery");
        				break;
        			case "사용중" :
        				this.div_func2.form.btn_mate_all.set_cssclass("btn_eldery");
        				this.div_func2.form.btn_mate.set_cssclass("btn_eldery2");
        				this.div_func2.form.btn_mate_retire.set_cssclass("btn_eldery");
        				break;
        			case "퇴소자" :
        				this.div_func2.form.btn_mate_all.set_cssclass("btn_eldery");
        				this.div_func2.form.btn_mate.set_cssclass("btn_eldery");
        				this.div_func2.form.btn_mate_retire.set_cssclass("btn_eldery2");
        				break;
        			default:
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
            this.div_cont.form.div_right.form.div_main.form.btn_new.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_new_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_func2.form.btn_mate.addEventHandler("onclick",this.btn_filter_onclick,this);
            this.div_func2.form.btn_mate_retire.addEventHandler("onclick",this.btn_filter_onclick,this);
            this.div_func2.form.btn_mate_all.addEventHandler("onclick",this.btn_filter_onclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00303.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
