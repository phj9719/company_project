(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00305");
            this.set_titletext("3-5 물리치료 운영일지 일괄출력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"제공일\" type=\"DATE\" size=\"256\"/><Column id=\"운영일\" type=\"STRING\" size=\"256\"/><Column id=\"제공그룹\" type=\"STRING\" size=\"256\"/><Column id=\"치료그룹\" type=\"STRING\" size=\"256\"/><Column id=\"담당자01\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드01\" type=\"STRING\" size=\"256\"/><Column id=\"근무내용\" type=\"STRING\" size=\"256\"/><Column id=\"특이사항\" type=\"STRING\" size=\"256\"/><Column id=\"km_number\" type=\"STRING\" size=\"256\"/><Column id=\"기록번호\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/><Column id=\"MON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"km_number\" type=\"STRING\" size=\"256\"/><Column id=\"기록번호\" type=\"STRING\" size=\"256\"/><Column id=\"제공일\" type=\"DATE\" size=\"256\"/><Column id=\"운영일\" type=\"STRING\" size=\"256\"/><Column id=\"제공그룹\" type=\"STRING\" size=\"256\"/><Column id=\"치료그룹\" type=\"STRING\" size=\"256\"/><Column id=\"담당자01\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드01\" type=\"STRING\" size=\"256\"/><Column id=\"근무내용\" type=\"STRING\" size=\"256\"/><Column id=\"특이사항\" type=\"STRING\" size=\"256\"/><Column id=\"count_all\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"mulnumber\" type=\"STRING\" size=\"256\"/><Column id=\"mulday\" type=\"DATE\" size=\"256\"/><Column id=\"수급자명\" type=\"STRING\" size=\"256\"/><Column id=\"수급코드\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"종료시간\" type=\"STRING\" size=\"256\"/><Column id=\"치료01\" type=\"STRING\" size=\"256\"/><Column id=\"치료02\" type=\"STRING\" size=\"256\"/><Column id=\"치료03\" type=\"STRING\" size=\"256\"/><Column id=\"치료04\" type=\"STRING\" size=\"256\"/><Column id=\"치료05\" type=\"STRING\" size=\"256\"/><Column id=\"치료06\" type=\"STRING\" size=\"256\"/><Column id=\"치료07\" type=\"STRING\" size=\"256\"/><Column id=\"치료08\" type=\"STRING\" size=\"256\"/><Column id=\"참여01\" type=\"STRING\" size=\"256\"/><Column id=\"참여02\" type=\"STRING\" size=\"256\"/><Column id=\"참여03\" type=\"STRING\" size=\"256\"/><Column id=\"참여04\" type=\"STRING\" size=\"256\"/><Column id=\"참여05\" type=\"STRING\" size=\"256\"/><Column id=\"참여06\" type=\"STRING\" size=\"256\"/><Column id=\"참여07\" type=\"STRING\" size=\"256\"/><Column id=\"참여08\" type=\"STRING\" size=\"256\"/><Column id=\"치료명01\" type=\"STRING\" size=\"256\"/><Column id=\"치료명02\" type=\"STRING\" size=\"256\"/><Column id=\"치료명03\" type=\"STRING\" size=\"256\"/><Column id=\"치료명04\" type=\"STRING\" size=\"256\"/><Column id=\"치료명05\" type=\"STRING\" size=\"256\"/><Column id=\"치료명06\" type=\"STRING\" size=\"256\"/><Column id=\"치료명07\" type=\"STRING\" size=\"256\"/><Column id=\"치료명08\" type=\"STRING\" size=\"256\"/><Column id=\"제공비고\" type=\"STRING\" size=\"256\"/><Column id=\"그룹\" type=\"STRING\" size=\"256\"/><Column id=\"ha_number\" type=\"STRING\" size=\"256\"/><Column id=\"작성자\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("div_left","0","0","370",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_head");
            obj.set_cellclickbound("cell");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" cursor=\"pointer\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"출력\" expandchar=\"rno\"/></Cell><Cell col=\"2\" text=\"운영일\"/><Cell col=\"3\" text=\"그룹\"/><Cell col=\"4\" text=\"작성자\"/><Cell col=\"5\" text=\"일지번호\"/></Band><Band id=\"body\"><Cell colspan=\"2\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cursor=\"pointer\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"선택\" expandchar=\"rno\"/></Cell><Cell col=\"2\" text=\"bind:제공일\" displaytype=\"date\" expandchar=\"dot\" cursor=\"pointer\" cssclass=\"CellBf7fcff\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"3\" text=\"bind:제공그룹\"/><Cell col=\"4\" text=\"bind:담당자01\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:기록번호\"/></Band></Format></Formats>");
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
            obj.set_text("물리(작업)치료 운영일지 일괄출력");
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
            obj.set_text("운 영 일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","82","37","600","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
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

            obj = new Static("sta_body2","82","70","600","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","0","103","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("작성자명");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","82","103","600","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_work","90","75","534","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("0");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","0","136","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","82","136","600","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
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

            obj = new Static("sta_head5","681","37","83","133",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("특이사항");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5","763","37",null,"133","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_rmk","770","45",null,"117","10",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"250\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"수급자\"/><Cell col=\"1\" text=\"성별\"/><Cell col=\"2\" text=\"시작시\"/><Cell col=\"3\" text=\"종료시\"/><Cell col=\"4\" text=\"①\"/><Cell col=\"5\" text=\"치료①\"/><Cell col=\"6\" text=\"②\"/><Cell col=\"7\" text=\"치료②\"/><Cell col=\"8\" text=\"③\"/><Cell col=\"9\" text=\"치료③\"/><Cell col=\"10\" text=\"④\"/><Cell col=\"11\" text=\"치료④\"/><Cell col=\"12\" text=\"⑤\"/><Cell col=\"13\" text=\"치료⑤\"/><Cell col=\"14\" text=\"⑥\"/><Cell col=\"15\" text=\"치료⑥\"/><Cell col=\"16\" text=\"⑦\"/><Cell col=\"17\" text=\"치료⑦\"/><Cell col=\"18\" text=\"⑧\"/><Cell col=\"19\" text=\"치료⑧\"/><Cell col=\"20\" text=\"비 고\"/><Cell col=\"21\" text=\"그룹\"/></Band><Band id=\"body\"><Cell font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" text=\"bind:수급자명\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:성별\"/><Cell col=\"2\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" color=\"blue\" text=\"bind:시작시간\"/><Cell col=\"3\" color=\"blue\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" text=\"bind:종료시간\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"none\" text=\"bind:참여01\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"5\" text=\"bind:치료명01\" textAlign=\"left\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" text=\"bind:참여02\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"7\" text=\"bind:치료명02\" textAlign=\"left\"/><Cell col=\"8\" displaytype=\"checkboxcontrol\" text=\"bind:참여03\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"9\" text=\"bind:치료명03\" textAlign=\"left\"/><Cell col=\"10\" displaytype=\"checkboxcontrol\" text=\"bind:참여04\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"11\" text=\"bind:치료명04\" textAlign=\"left\"/><Cell col=\"12\" displaytype=\"checkboxcontrol\" text=\"bind:참여05\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"13\" text=\"bind:치료명05\" textAlign=\"left\"/><Cell col=\"14\" displaytype=\"checkboxcontrol\" text=\"bind:참여06\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"15\" text=\"bind:치료명06\" textAlign=\"left\"/><Cell col=\"16\" displaytype=\"checkboxcontrol\" text=\"bind:참여07\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"17\" text=\"bind:치료명07\" textAlign=\"left\"/><Cell col=\"18\" displaytype=\"checkboxcontrol\" text=\"bind:참여08\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"19\" text=\"bind:치료명08\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:제공비고\" textAlign=\"left\" editmaxlength=\"40\"/><Cell col=\"21\" text=\"bind:그룹\"/></Band></Format></Formats>");
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

            obj = new Static("sta_group","374","45","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_text("그룹");
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

            obj = new Button("btn_report1","0","4","180","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("물리치료운영일지(선택)");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2","185","4","145","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("물리치료운영일지");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);
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

            obj = new BindItem("item5","div_cont.form.div_right.form.div_main.form.sta_date","text","ds_data","운영일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.sta_group","text","ds_data","치료그룹");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00305.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00305.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00305.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00305
         * 화면명   	: 3-5 물리치료 운영일지 일괄출력
         * 화면설명 	: 물리치료 운영일지를 조회하고 출력하기 위한 화면
         * 작성일   	: 2022-05-31
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
        		const cssStr = "expr:dataset.getColumn(currow, '참여0" + i + "') == '1' && dataset.getColumn(currow, '치료명0" + i + "') != undefined ? 'CellBd9ffb3B' : ''";
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
        				   + " sqlId='DAY00305.DAY00305_DS_HEAD_S '";
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
        				   + " sqlId='DAY00305.DAY00305_DS_DETAIL_S'"
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
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };

        // 물리치료운영일지(선택) 출력
        this.fn_report = function(obj,e)
        {
        	let chk = 0;
        	let dateArr = [];
        	let groupArr = [];

        	for (let i = 0; i < this.ds_head.rowcount; i++)
        	{
        		let chkVal = parseInt(this.ds_head.getColumn(i, "CHK"));
        		if (this.ds_head.getColumn(i, "CHK") == undefined)
        			chkVal = 0;

        		chk += chkVal;

        		if (this.ds_head.getColumn(i, "CHK") == 1)
        		{
        			dateArr.push(this.ds_head.getColumn(i, "제공일"));
        			groupArr.push(this.ds_head.getColumn(i, "제공그룹"));
        		}
        	}

        	if (chk < 1)
        	{
        		this.alert("출력할 운영일지를 선택하세요 !");
        		return;
        	}

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
        	this.ubiIsMul = true;
        	this.ubiMulCount = chk + "";
        	trace("this.ubiMulCount : " + this.ubiMulCount);

        	this.ubiArg = "P_SICODE#" + fv_sicode + "#";
        	for (let i = 0; i < dateArr.length; i++)
        	{
        		this.ubiArg += "P_DATE." + (i + 1) + "#" + dateArr[i] + "#";
        		this.ubiArg += "P_GROUP." + (i + 1) + "#" + groupArr[i] + "#";
        	}

        	this.ubiReportFile = "DAY00301_R01.jrf";

        	// 리포트 div 내용 갱신
        	this.components["UbiDiv"].form.ubiPreview();
        };

        // 물리치료운영일지 출력
        this.fn_report2 = function(obj,e)
        {
        	if (this.ds_data.rowcount == 0
        		|| (this.ds_data.getColumn(0, "km_number") != undefined
        			&& this.ds_data.getColumn(0, "km_number").trim() == ""))
        	{
        		this.alert("운영일을 선택하여 일지를 조회해주세요.");
        		return;
        	}

        	this.ubiArg = "P_SICODE#" + fv_sicode + "#"
        				+ "P_DATE#" + this.ds_data.getColumn(0, "제공일") + "#"
        				+ "P_GROUP#" + this.ds_data.getColumn(0, "제공그룹") + "#";

        	this.ubiReportFile = "DAY00301_R01.jrf";

        	// 리포트 div 내용 갱신
        	this.components["UbiDiv"].form.ubiPreview();
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_head.addEventHandler("oncellclick",this.div_cont_div_left_grd_head_oncellclick,this);
            this.div_cont.form.div_right.form.div_main.form.grd_detail.addEventHandler("oncellclick",this.div_cont_div_right_div_main_grd_detail_oncellclick,this);
            this.div_search.form.cal_date_pic.addEventHandler("onchanged",this.div_search_cal_date_pic_onchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.fn_report2,this);
        };
        this.loadIncludeScript("DAY00305.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
