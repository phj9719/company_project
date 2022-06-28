(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00307");
            this.set_titletext("3-7 물리(작업)치료 제공기록 오류확인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"제공일\" type=\"DATE\" size=\"256\"/><Column id=\"제공일자\" type=\"STRING\" size=\"256\"/><Column id=\"제공그룹\" type=\"STRING\" size=\"256\"/><Column id=\"group_a\" type=\"STRING\" size=\"256\"/><Column id=\"group_b\" type=\"STRING\" size=\"256\"/><Column id=\"담당자01\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드01\" type=\"STRING\" size=\"256\"/><Column id=\"근무내용\" type=\"STRING\" size=\"256\"/><Column id=\"특이사항\" type=\"STRING\" size=\"256\"/><Column id=\"km_number\" type=\"STRING\" size=\"256\"/><Column id=\"기록번호\" type=\"STRING\" size=\"256\"/><Column id=\"count_all\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/><Column id=\"MON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"km_number\" type=\"STRING\" size=\"256\"/><Column id=\"기록번호\" type=\"STRING\" size=\"256\"/><Column id=\"제공일\" type=\"DATE\" size=\"256\"/><Column id=\"제공일자\" type=\"STRING\" size=\"256\"/><Column id=\"제공그룹\" type=\"STRING\" size=\"256\"/><Column id=\"group_a\" type=\"STRING\" size=\"256\"/><Column id=\"group_b\" type=\"STRING\" size=\"256\"/><Column id=\"담당자01\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드01\" type=\"STRING\" size=\"256\"/><Column id=\"근무내용\" type=\"STRING\" size=\"256\"/><Column id=\"특이사항\" type=\"STRING\" size=\"256\"/><Column id=\"count_all\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"mulnumber\" type=\"STRING\" size=\"256\"/><Column id=\"mulgroup\" type=\"STRING\" size=\"256\"/><Column id=\"mulname\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"serv_time\" type=\"STRING\" size=\"256\"/><Column id=\"치료01\" type=\"STRING\" size=\"256\"/><Column id=\"치료02\" type=\"STRING\" size=\"256\"/><Column id=\"치료03\" type=\"STRING\" size=\"256\"/><Column id=\"치료04\" type=\"STRING\" size=\"256\"/><Column id=\"치료05\" type=\"STRING\" size=\"256\"/><Column id=\"치료06\" type=\"STRING\" size=\"256\"/><Column id=\"치료07\" type=\"STRING\" size=\"256\"/><Column id=\"치료08\" type=\"STRING\" size=\"256\"/><Column id=\"참여01\" type=\"STRING\" size=\"256\"/><Column id=\"참여02\" type=\"STRING\" size=\"256\"/><Column id=\"참여03\" type=\"STRING\" size=\"256\"/><Column id=\"참여04\" type=\"STRING\" size=\"256\"/><Column id=\"참여05\" type=\"STRING\" size=\"256\"/><Column id=\"참여06\" type=\"STRING\" size=\"256\"/><Column id=\"참여07\" type=\"STRING\" size=\"256\"/><Column id=\"참여08\" type=\"STRING\" size=\"256\"/><Column id=\"치료명01\" type=\"STRING\" size=\"256\"/><Column id=\"치료명02\" type=\"STRING\" size=\"256\"/><Column id=\"치료명03\" type=\"STRING\" size=\"256\"/><Column id=\"치료명04\" type=\"STRING\" size=\"256\"/><Column id=\"치료명05\" type=\"STRING\" size=\"256\"/><Column id=\"치료명06\" type=\"STRING\" size=\"256\"/><Column id=\"치료명07\" type=\"STRING\" size=\"256\"/><Column id=\"치료명08\" type=\"STRING\" size=\"256\"/><Column id=\"plan_reason\" type=\"STRING\" size=\"256\"/><Column id=\"out_reason\" type=\"STRING\" size=\"256\"/><Column id=\"mat_reason\" type=\"STRING\" size=\"256\"/><Column id=\"조회\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"SIGN\" type=\"STRING\" size=\"256\"/><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_count", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","310",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_head");
            obj.set_cellclickbound("cell");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"제공일\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"작성자\"/><Cell col=\"3\" text=\"일지번호\"/></Band><Band id=\"body\"><Cell text=\"bind:제공일\" displaytype=\"date\" expandchar=\"dot\" cursor=\"pointer\" cssclass=\"CellBf7fcff\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"1\" text=\"bind:제공그룹\"/><Cell col=\"2\" text=\"bind:담당자01\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:기록번호\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","div_left:10","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_main","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_subTitle2","650","0","260","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_text("물리(작업)치료 제공기록 오류확인");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no","4","0","58","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("6");
            obj.set_text("기록번호 : ");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no_value","67","0","60","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_text("00000000");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","0","30",null,"1","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_background("#e2e2e2");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","37","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_text("제공일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","82","37","640","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","280","37","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_text("치료그룹");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","0","70","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("운영내용");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","82","70","640","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","0","103","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("작성자명");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","82","103","640","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_work","90","75","574","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("0");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","0","136","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","82","136","640","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_count1","92","144","65","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_text("평가인원 : ");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_count1","162","141","64","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_background("#ecffec");
            obj.set_textAlign("right");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_displaynulltext("0");
            obj.set_text("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_count2","252","144","65","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_text("제공인원 :");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_count2","322","141","64","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_background("#ecffec");
            obj.set_textAlign("right");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_displaynulltext("0");
            obj.set_text("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5","721","37","83","133",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("특이사항");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5","803","37",null,"133","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_rmk","810","45",null,"117","10",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none fixed");
            obj.set_maxlength("65535");
            obj.set_readonly("true");
            obj.set_wordWrap("char");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","175",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_detail");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"그룹\"/><Cell col=\"1\" text=\"수급자명\"/><Cell col=\"2\" text=\"성별\"/><Cell col=\"3\" text=\"치료시간\"/><Cell col=\"4\" text=\"치료①\"/><Cell col=\"5\" text=\"치료②\"/><Cell col=\"6\" text=\"치료③\"/><Cell col=\"7\" text=\"치료④\"/><Cell col=\"8\" text=\"치료⑤\"/><Cell col=\"9\" text=\"치료⑥\"/><Cell col=\"10\" text=\"치료⑦\"/><Cell col=\"11\" text=\"치료⑧\"/><Cell col=\"12\" text=\"계획기간확인\"/><Cell col=\"13\" text=\"외출기록확인\"/><Cell col=\"14\" text=\"입·퇴소확인\"/><Cell col=\"15\" text=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:mulgroup\"/><Cell col=\"1\" text=\"bind:mulname\"/><Cell col=\"2\" text=\"bind:성별\"/><Cell col=\"3\" text=\"bind:serv_time\"/><Cell col=\"4\" text=\"bind:치료명01\"/><Cell col=\"5\" text=\"bind:치료명02\"/><Cell col=\"6\" text=\"bind:치료명03\"/><Cell col=\"7\" text=\"bind:치료명04\"/><Cell col=\"8\" text=\"bind:치료명05\"/><Cell col=\"9\" text=\"bind:치료명06\"/><Cell col=\"10\" text=\"bind:치료명07\"/><Cell col=\"11\" text=\"bind:치료명08\"/><Cell col=\"12\" text=\"bind:plan_reason\" color=\"red\"/><Cell col=\"13\" text=\"bind:out_reason\" color=\"red\"/><Cell col=\"14\" text=\"bind:mat_reason\" color=\"blue\"/><Cell col=\"15\" expandshow=\"show\" expandsize=\"60\" expandimage=\"url('theme://images/ico_search.png')\" text=\"bind:조회\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_worker_code","171","111","79","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_text("작성코드");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_worker_name","92","111","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_text("작성자");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_date","92","45","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_text("yyyy.mm.dd");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_group1","371","43","60","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_text("A 그룹");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_d9ffb3");
            obj.set_readonly("true");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_group2","451","43","60","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_text("B 그룹");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_d9ffb3");
            obj.set_readonly("true");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","365","35",null,null,null,null,null,null,this);
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

            obj = new Div("div_func","div_search:10","0",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);
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

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.sta_no_value","text","ds_data","기록번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.div_main.form.sta_date","text","ds_data","제공일자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.edt_work","value","ds_data","근무내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.sta_worker_name","text","ds_data","담당자01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.sta_worker_code","text","ds_data","담당코드01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.txt_rmk","value","ds_data","특이사항");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.edt_count1","value","ds_data","count_all");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.edt_count2","value","ds_data","count");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.chk_group1","value","ds_data","group_a");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.chk_group2","value","ds_data","group_b");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00307.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00307.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00307.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00307
         * 화면명   	: 3-7 물리(작업)치료 제공기록 오류확인
         * 화면설명 	: 물리(작업)치료 제공기록의 오류를 확인하는 화면
         * 작성일   	: 2022-06-02
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

        	// 조회
        	this.fn_search();
        };

        // 그리드에 css 적용
        this.initGrid = function(grid)
        {
        	for (let i = 1; i <= 8; i++)
        	{
        		const idx = grid.getBindCellIndex("body", "치료명0" + i);
        		// 체크박스에 체크가 되어있고 치료명이 있는경우에 CSS 변경
        		const cssStr = "expr:dataset.getColumn(currow, '참여0" + i + "') == '1' && dataset.getColumn(currow, '치료명0" + i + "') != undefined ? 'CellBd9ffb3' : ''";
        		grid.setCellProperty("body", idx, "cssclass", cssStr);
        	}
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
        				   + " sqlId='DAY00307.DAY00307_DS_HEAD_S '";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 상세 조회
        this.fn_searchDetail = function(date, group)
        {
        	const svcId = "searchDetail";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_detail=output1";
        	const argument = "method=getList"
        				   + " sqlId='DAY00307.DAY00307_DS_DETAIL_S'"
        				   + " SICODE=" + fv_sicode
        				   + " DATE=" + date
        				   + " GROUP=" + group;
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
        			this.ds_head.set_rowposition(-1);
        		}
        		else if (strSvcID == "searchDetail")
        		{
        			if (this.ds_detail.rowcount != 0)
        			{
        				// 그리드 체크 박스 변경시 CSS 변경
        				this.initGrid(this.div_cont.form.div_right.form.div_main.form.grd_detail);

        				// 행 선택 해제
        				this.ds_detail.set_rowposition(-1);

        				// 평가인원 세팅
        				this.ds_data.setColumn(0, "count_all", this.ds_detail.rowcount);

        				// 제공인원 세팅
        				let count = 0;
        				for (let i = 0; i < this.ds_detail.rowcount; i++)
        				{
        					for (let j = 1; j <= 8; j++)
        					{
        						const chkVal = parseInt(this.ds_detail.getColumn(i, "참여0" + j));
        						if (chkVal == 1)
        						{
        							count++;
        							break;
        						}
        					}
        				}
        				//trace(count);
        				this.ds_data.setColumn(0, "count", count);
        			}
        			else
        			{
        				this.alert("참여수급자가 없습니다 !");
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
        			const group = this.ds_data.getColumn(0, "제공그룹");
        			const date = this.ds_data.getColumn(0, "제공일");
        			this.fn_searchDetail(date, group);
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
        	this.ds_head.set_rowposition(-1);
        	// 운영일
        	const dateIdx = obj.getBindCellIndex("body", "제공일")
        	if (e.cell == dateIdx)
        	{
        		this.ds_data.clearData();
        		const nRow = this.ds_data.addRow();
        		this.ds_data.copyRow(nRow, this.ds_head, e.row);

        		const date = this.ds_head.getColumn(e.row, "제공일");
        		const group = this.ds_head.getColumn(e.row, "제공그룹");

        		this.fn_searchDetail(date, group);
        	}
        };

        // 상세 그리드 셀 클릭 이벤트
        this.div_cont_div_right_div_main_grd_detail_oncellclick = function(obj,e)
        {
        	this.ds_detail.set_rowposition(-1);
        };

        // 상세 그리드 확장 버튼 클릭 이벤트
        this.div_cont_div_right_div_main_grd_detail_onexpandup = function(obj,e)
        {
        	const searchIdx = obj.getBindCellIndex("body", "조회");
        	if (e.cell == searchIdx)
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

        		Sct.popup(this, "del", 450, 400, "", param, "DAY_POP::DAY00307_P01.xfdl", "fn_popCallback");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_head.addEventHandler("oncellclick",this.div_cont_div_left_grd_head_oncellclick,this);
            this.div_cont.form.div_right.form.div_main.form.grd_detail.addEventHandler("onexpandup",this.div_cont_div_right_div_main_grd_detail_onexpandup,this);
            this.div_cont.form.div_right.form.div_main.form.grd_detail.addEventHandler("oncellclick",this.div_cont_div_right_div_main_grd_detail_oncellclick,this);
            this.div_cont.form.div_right.form.div_main.form.chk_group1.addEventHandler("onchanged",this.chk_group_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_group2.addEventHandler("onchanged",this.chk_group_onchanged,this);
            this.div_search.form.cal_date_pic.addEventHandler("onchanged",this.div_search_cal_date_pic_onchanged,this);
        };
        this.loadIncludeScript("DAY00307.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
