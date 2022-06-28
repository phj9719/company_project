(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00301");
            this.set_titletext("3-1 물리(작업)치료일지·제공기록 작성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"제공일\" type=\"DATE\" size=\"256\"/><Column id=\"제공그룹\" type=\"STRING\" size=\"256\"/><Column id=\"담당자01\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드01\" type=\"STRING\" size=\"256\"/><Column id=\"km_number\" type=\"STRING\" size=\"256\"/><Column id=\"일지번호\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/><Column id=\"MON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"km_number\" type=\"STRING\" size=\"256\"/><Column id=\"기록번호\" type=\"STRING\" size=\"256\"/><Column id=\"제공일\" type=\"DATE\" size=\"256\"/><Column id=\"제공그룹\" type=\"STRING\" size=\"256\"/><Column id=\"group_a\" type=\"STRING\" size=\"256\"/><Column id=\"group_b\" type=\"STRING\" size=\"256\"/><Column id=\"담당자01\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드01\" type=\"STRING\" size=\"256\"/><Column id=\"근무내용\" type=\"STRING\" size=\"256\"/><Column id=\"특이사항\" type=\"STRING\" size=\"256\"/><Column id=\"count_all\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"mulnumber\" type=\"STRING\" size=\"256\"/><Column id=\"mulday\" type=\"DATE\" size=\"256\"/><Column id=\"수급자명\" type=\"STRING\" size=\"256\"/><Column id=\"수급코드\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"종료시간\" type=\"STRING\" size=\"256\"/><Column id=\"치료01\" type=\"STRING\" size=\"256\"/><Column id=\"치료02\" type=\"STRING\" size=\"256\"/><Column id=\"치료03\" type=\"STRING\" size=\"256\"/><Column id=\"치료04\" type=\"STRING\" size=\"256\"/><Column id=\"치료05\" type=\"STRING\" size=\"256\"/><Column id=\"치료06\" type=\"STRING\" size=\"256\"/><Column id=\"치료07\" type=\"STRING\" size=\"256\"/><Column id=\"치료08\" type=\"STRING\" size=\"256\"/><Column id=\"참여01\" type=\"STRING\" size=\"256\"/><Column id=\"참여02\" type=\"STRING\" size=\"256\"/><Column id=\"참여03\" type=\"STRING\" size=\"256\"/><Column id=\"참여04\" type=\"STRING\" size=\"256\"/><Column id=\"참여05\" type=\"STRING\" size=\"256\"/><Column id=\"참여06\" type=\"STRING\" size=\"256\"/><Column id=\"참여07\" type=\"STRING\" size=\"256\"/><Column id=\"참여08\" type=\"STRING\" size=\"256\"/><Column id=\"치료명01\" type=\"STRING\" size=\"256\"/><Column id=\"치료명02\" type=\"STRING\" size=\"256\"/><Column id=\"치료명03\" type=\"STRING\" size=\"256\"/><Column id=\"치료명04\" type=\"STRING\" size=\"256\"/><Column id=\"치료명05\" type=\"STRING\" size=\"256\"/><Column id=\"치료명06\" type=\"STRING\" size=\"256\"/><Column id=\"치료명07\" type=\"STRING\" size=\"256\"/><Column id=\"치료명08\" type=\"STRING\" size=\"256\"/><Column id=\"제공비고\" type=\"STRING\" size=\"256\"/><Column id=\"그룹\" type=\"STRING\" size=\"256\"/><Column id=\"ha_number\" type=\"STRING\" size=\"256\"/><Column id=\"작성자\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_count", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","350",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_head");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"운영일\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"작성자\"/><Cell col=\"3\" text=\"일지번호\"/></Band><Band id=\"body\"><Cell text=\"bind:제공일\" displaytype=\"date\" expandchar=\"dot\" cursor=\"pointer\" cssclass=\"CellBf7fcff\"/><Cell col=\"1\" text=\"bind:제공그룹\"/><Cell col=\"2\" text=\"bind:담당자01\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:일지번호\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","div_left:10","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_main","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_subTitle2","635","0","290","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_text("물리(작업)치료 운영일지·제공기록 작성");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no","4","0","58","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_text("기록번호 : ");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no_value","67","0","60","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_text("00000000");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","0","30",null,"1","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_background("#e2e2e2");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","0","37","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","82","37",null,"34","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date_new","90","41","90","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date_new_pic","179","41","25","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_00","280","37","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_text("치료그룹");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_group1","371","43","60","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_text("A 그룹");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_d9ffb3");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_group2","451","43","60","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("3");
            obj.set_text("B 그룹");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            obj.set_cssclass("chk_d9ffb3");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_new","558","42","235","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_text("물리(작업)치료운영일지 새로생성");
            obj.set_cssclass("btn_newdoc");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","0","70","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_worker","5","74","73","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","82","70","550","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_worker_code","171","78","79","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("28");
            obj.set_text("작성코드");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_worker_name","92","78","69","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("29");
            obj.set_text("작성자");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","0","103","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("운영내용");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","82","103","550","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_work","90","108","534","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("6");
            obj.set_maxlength("100");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","0","136","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","82","136","550","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_count1","92","144","65","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("34");
            obj.set_text("평가인원 : ");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_count1","162","141","64","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_background("#ecffec");
            obj.set_textAlign("right");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_displaynulltext("0");
            obj.set_text("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_count2","252","144","65","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("35");
            obj.set_text("제공인원 :");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_count2","322","141","64","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_background("#ecffec");
            obj.set_textAlign("right");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_displaynulltext("0");
            obj.set_text("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5","631","70","83","100",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("특이사항");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5","713","70",null,"100","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_rmk","720","75",null,"67","10",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none fixed");
            obj.set_maxlength("65535");
            obj.set_wordWrap("char");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_rmk","734","147","293","19",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("38");
            obj.set_text("▲ 4문장 내외로 작성. 저장후 운영일 변경 불가");
            obj.set_color("red");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_heal1","93","178","110","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_text("치료1전체표시");
            obj.set_color("blue");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_heal2","213","178","110","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_text("치료2전체표시");
            obj.set_color("blue");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_heal3","333","178","110","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_text("치료3전체표시");
            obj.set_color("blue");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_heal4","453","178","110","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_text("치료4전체표시");
            obj.set_color("blue");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_heal5","573","178","110","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_text("치료5전체표시");
            obj.set_color("blue");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_heal6","693","178","110","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_text("치료6전체표시");
            obj.set_color("blue");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_heal7","813","178","110","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_text("치료7전체표시");
            obj.set_color("blue");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_heal8","933","178","110","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_text("치료8전체표시");
            obj.set_color("blue");
            obj.set_font("normal 700 10pt/normal \"Noto Sans KR\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","210",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_detail");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"250\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"수급자\"/><Cell col=\"1\" text=\"성별\"/><Cell col=\"2\" text=\"시작시\"/><Cell col=\"3\" text=\"종료시\"/><Cell col=\"4\" text=\"①\"/><Cell col=\"5\" text=\"치료①\"/><Cell col=\"6\" text=\"②\"/><Cell col=\"7\" text=\"치료②\"/><Cell col=\"8\" text=\"③\"/><Cell col=\"9\" text=\"치료③\"/><Cell col=\"10\" text=\"④\"/><Cell col=\"11\" text=\"치료④\"/><Cell col=\"12\" text=\"⑤\"/><Cell col=\"13\" text=\"치료⑤\"/><Cell col=\"14\" text=\"⑥\"/><Cell col=\"15\" text=\"치료⑥\"/><Cell col=\"16\" text=\"⑦\"/><Cell col=\"17\" text=\"치료⑦\"/><Cell col=\"18\" text=\"⑧\"/><Cell col=\"19\" text=\"치료⑧\"/><Cell col=\"20\" text=\"비 고 (↓ 기록가능)\"/><Cell col=\"21\" text=\"그룹\"/></Band><Band id=\"body\"><Cell font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" text=\"bind:수급자명\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:성별\"/><Cell col=\"2\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" color=\"blue\" text=\"bind:시작시간\"/><Cell col=\"3\" color=\"blue\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\" text=\"bind:종료시간\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:참여01\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"5\" text=\"bind:치료명01\" textAlign=\"left\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:참여02\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"7\" text=\"bind:치료명02\" textAlign=\"left\"/><Cell col=\"8\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:참여03\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"9\" text=\"bind:치료명03\" textAlign=\"left\"/><Cell col=\"10\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:참여04\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"11\" text=\"bind:치료명04\" textAlign=\"left\"/><Cell col=\"12\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:참여05\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"13\" text=\"bind:치료명05\" textAlign=\"left\"/><Cell col=\"14\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:참여06\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"15\" text=\"bind:치료명06\" textAlign=\"left\"/><Cell col=\"16\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:참여07\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"17\" text=\"bind:치료명07\" textAlign=\"left\"/><Cell col=\"18\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:참여08\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"19\" text=\"bind:치료명08\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:제공비고\" edittype=\"text\" textAlign=\"left\" editmaxlength=\"40\"/><Cell col=\"21\" text=\"bind:그룹\"/></Band></Format></Formats>");
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

            obj = new Div("div_func","div_search:10","0",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_report1","100","4","145","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("물리치료운영일지");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","0","5","85","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("결재란표시");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"3","70","25","0",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_time_from","-200","23","165","340",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_time_from");
            obj.set_url("DAY_POP::DAY00301_P01.xfdl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_time_to","-373","22","110","200",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div_time_to");
            obj.set_url("DAY_POP::DAY00301_P02.xfdl");
            obj.set_visible("false");
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

            obj = new BindItem("item5","div_cont.form.div_right.form.div_main.form.cal_date_new","value","ds_data","제공일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.cal_date_new_pic","value","ds_data","제공일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.sta_worker_name","text","ds_data","담당자01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.sta_worker_code","text","ds_data","담당코드01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.edt_work","value","ds_data","근무내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.txt_rmk","value","ds_data","특이사항");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.edt_count1","value","ds_data","count_all");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.edt_count2","value","ds_data","count");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_func.form.chk_sign","value","ds_report","SIGN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_main.form.sta_no_value","text","ds_data","기록번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_main.form.chk_group1","value","ds_data","group_a");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.chk_group2","value","ds_data","group_b");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","DAY_POP::DAY00301_P01.xfdl");
            this._addPreloadList("fdl","DAY_POP::DAY00301_P02.xfdl");
        };
        
        // User Script
        this.addIncludeScript("DAY00301.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00301.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00301.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00301
         * 화면명   	: 3-1 물리(작업)치료일지·제공기록 작성
         * 화면설명 	: 물리(작업)치료일지·제공기록을 입력하는 화면
         * 작성일   	: 2022-05-23
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
         ***********************************************************************
         * 비고 : 마이너스 좌표계에 시간 팝업 div들 배치중
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
        this.newFlag = true;	// 일지 새로생성용 플래그
        this.dbFlag = "";		// 저장용 플래그 I : 삽입, U : 수정
        this.reSearchData = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 팝업 div __form 변수에 현재화면 넣기
        	this.div_time_from.__form = this;
        	this.div_time_to.__form = this;

        	// 팝업 div 위치 이동시키기
        	this.div_time_from.move(680, 360);
        	this.div_time_to.move(680, 360);

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

        	// 작성 패널 초기화
        	this.fn_dsDataInit();
        	this.ds_data.setColumn(0, "sicode", fv_sicode);
        	this.ds_data.setColumn(0, "제공일", Sct.Util.getToday());
        	this.ds_data.setColumn(0, "제공그룹", "A");
        	this.ds_data.setColumn(0, "group_a", 1);

        	// 리포트 결재란 체크박스 기본값 세팅
        	this.ds_report.setColumn(0, "SIGN", 1);

        	// 조회
        	this.fn_search("search");
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

        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	// 상세 그리드에 내용이 없을 경우 저장 안됨
        	if (this.ds_detail.rowcount == 0)
        	{
        		this.alert("물리(작업)치료 운영일지 새로작성 실행후 저장하세요");
        		return false;
        	}

        	// 작성자가 지정되지 않은경우 저장 안됨
        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "담당코드01")))
        	{
        		this.alert("작성자를 지정해주세요.");
        		return false;
        	}

        	//trace("dbFlag : " + this.dbFlag);

        	// 상세그리드에 작성자, 작성코드, 작성일 세팅
        	this.ds_detail.set_updatecontrol(false);
        	for (let i = 0; i < this.ds_detail.rowcount; i++)
        	{
        		this.ds_detail.setColumn(i, "sicode", fv_sicode);
        		this.ds_detail.setColumn(i, "작성자", this.ds_data.getColumn(0, "담당자01"));
        		this.ds_detail.setColumn(i, "작성코드", this.ds_data.getColumn(0, "담당코드01"));
        		this.ds_detail.setColumn(i, "mulday", this.ds_data.getColumn(0, "제공일"));
        		//trace("mulday : " + this.ds_detail.getColumn(i, "mulday"));
        		if (Sct.Util.isEmpty(this.ds_detail.getColumn(i, "mulnumber")))
        			this.ds_detail.setColumn(i, "mulnumber", "");

        		// 자바단에서 행 인식을 시키기 위해서 수정행으로 세팅
        		this.ds_detail.setRowType(i, 4);

        		//trace("detail rowType : " + this.ds_detail.getRowType(i));
        	}
        	this.ds_detail.set_updatecontrol(true);

        	// 새로 작성인 경우 입력 패널 데이터셋 rowType 추가 상태로 변경
        	this.ds_data.set_updatecontrol(false);
        	if (this.dbFlag == "I")
        		this.ds_data.setRowType(0, 2);
        	else
        		this.ds_data.setRowType(0, 4);
        	this.ds_data.set_updatecontrol(true);

        	//trace("ds_data rowType : " + this.ds_data.getRowType(0));

        	this.reSearchData = this.ds_data.getColumn(0, "제공일");

        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function(flag)
        {
        	if (!this.fn_search_pre()) return;

        	const svcId = flag;
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_head=output1";
        	const argument = "method=getList"
        				   + " sqlId='DAY00301.DAY00301_DS_HEAD_S '";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 상세 조회
        this.fn_searchDetail = function(date, group)
        {
        	const svcId = "searchDetail";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_data=output1 ds_detail=output2";
        	const argument = "method=getList"
        				   + " sqlId='DAY00301.DAY00301_DS_DATA_S DAY00301.DAY00301_DS_DETAIL_S'"
        				   + " SICODE=" + fv_sicode
        				   + " DATE=" + date
        				   + " GROUP=" + group;
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 새로작성시 데이터 유무 확인
        this.fn_searchData = function(date, group)
        {
        	const svcId = "searchData";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_count=output1";
        	const argument = "method=getList"
        				   + " sqlId='DAY00301.DAY00301_DS_COUNT_S'"
        				   + " SICODE=" + fv_sicode
        				   + " DATE=" + date
        				   + " GROUP=" + group;
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };

        // 새로작성 조회
        this.fn_searchNew = function(date, group)
        {
        	const svcId = "searchNew";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_detail=output1";
        	const argument = "method=getList"
        				   + " sqlId='DAY00301.DAY00301_DS_NEW_S'"
        				   + " SICODE=" + fv_sicode
        				   + " DATE=" + date
        				   + " GROUP=" + group;
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
        	const params = "/DAY00301Controller.do";
        	const inDatasets = "input1=ds_data:U input2=ds_detail:U";
        	const outDatasets = "";
        	const argument = "method=save";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			// 작성패널 일부 초기화
        			this.fn_dsDataInit();
        			this.ds_data.setColumn(0, "제공일", Sct.Util.getToday());
        			this.ds_data.setColumn(0, "제공그룹", "A");
        			this.ds_data.setColumn(0, "group_a", 1);
        			this.ds_data.setColumn(0, "group_b", 0);

        			this.div_time_from.set_visible(false);
        		}
        		else if (strSvcID == "searchDetail" || strSvcID == "searchNew")
        		{
        			if (this.ds_detail.rowcount != 0)
        			{
        				switch(strSvcID) {
        					case "searchDetail" :
        						this.dbFlag = "U";
        						break;
        					case "searchNew" :
        						this.dbFlag = "I";
        						this.ds_data.setColumn(0, "km_number", "");
        						this.ds_data.setColumn(0, "기록번호", "");
        						break;
        					default:
        				}

        				// 치료명 전체 선택 체크박스 텍스트 세팅
        				for (let i = 1; i <= 8; i++)
        				{
        					const heal = this.ds_detail.getColumn(0, "치료명0" + i);
        					this.div_cont.form.div_right.form.div_main.form.components["chk_heal" + i].set_text(heal);
        				}

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

        			this.div_time_from.set_visible(false);
        		}
        		else if (strSvcID == "searchData")
        		{
        			if (this.ds_count.rowcount != 0)
        			{
        				// 일지 작성유무에 따른 작성 플래그 조정
        				const count = parseInt(this.ds_count.getColumn(0, "count"));
        				if (count > 0)
        				{
        					this.alert("물리치료제공일지가 이미작성되어 있습니다.");
        					this.newFlag = false;
        					return;
        				}
        				else
        					this.newFlag = true;
        			}
        		}
        		else if (strSvcID == "search_save")
        		{
        			const sRow = this.fn_findMstRow(this.reSearchData);
        		}
        		else if (strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");
        			this.fn_search("search_save");
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

        // 작성 패널 일부 초기화
        this.fn_dsDataInit = function()
        {
        	this.ds_detail.clearData();
        	this.ds_data.setColumn(0, "담당자01", nexacro.getApplication().gds_userInfo.getColumn(0, "c_name").trim());
        	this.ds_data.setColumn(0, "담당코드01", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid").trim());
        	this.ds_data.setColumn(0, "근무내용", "");
        	this.ds_data.setColumn(0, "특이사항", "");
        	this.ds_data.setColumn(0, "count_all", 0);
        	this.ds_data.setColumn(0, "count", 0);
        };

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo)
        {
        	const sFindRow = this.ds_head.findRow("제공일", fv_saveRefNo);
        	if (sFindRow > -1)
        	{
        		this.ds_head.set_rowposition(sFindRow);
        		const date = this.ds_head.getColumn(sFindRow, "제공일");
        		const group = this.ds_head.getColumn(sFindRow, "제공그룹");
        		this.fn_searchDetail(date, group);
        	}

        	return sFindRow;
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 작성자 버튼 클릭
        this.div_cont_div_right_div_main_btn_worker_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount < 1)
        		return;

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_data.getColumn(0, "제공일")
        	};

        	Sct.popup(this, "emp", 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if (popid != "del")
        	{
        		if(Sct.Util.isEmpty(strDs)) return;
        	}
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "emp" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "담당자01", name);
        				this.ds_data.setColumn(0, "담당코드01", staffid);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "담당자01", "");
        				this.ds_data.setColumn(0, "담당코드01", "");
        			}
        			break;
        		case "del" :
        			this.fn_search("search");
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };

        // 리포트 출력
        this.fn_report = function(obj,e)
        {
        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "km_number")))
        	{
        		this.alert("일지를 선택해주세요.");
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

        	this.ubiReportFile = "DAY00301_R01.jrf";
        	this.ubiArg = "P_SICODE#" + fv_sicode + "#"
        				+ "P_DATE#" + this.ds_data.getColumn(0, "제공일") + "#"
        				+ "P_GROUP#" + this.ds_data.getColumn(0, "제공그룹") + "#"
        				+ "P_SIGN#" + this.ds_report.getColumn(0, "SIGN") + "#";

        	// 리포트 div 내용 갱신
        	this.components["UbiDiv"].form.ubiPreview();
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 검색 버튼
        this.fn_searchBtn = function(obj,e)
        {
        	this.fn_search("search");
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

        	this.fn_search("search");
        };

        // 헤더 그리드 셀 클릭 이벤트
        this.div_cont_div_left_grd_head_oncellclick = function(obj,e)
        {
        	// 운영일
        	const dateIdx = obj.getBindCellIndex("body", "제공일")
        	if (e.col == dateIdx)
        	{
        		const date = this.ds_head.getColumn(e.row, "제공일");
        		const group = this.ds_head.getColumn(e.row, "제공그룹");

        		this.fn_searchDetail(date, group);
        	}
        };

        // 헤더 그리드 셀 더블클릭 이벤트
        this.div_cont_div_left_grd_head_oncelldblclick = function(obj,e)
        {
        	const noIdx = obj.getBindCellIndex("body", "일지번호");
        	if (e.col == noIdx)
        	{
        		const param = {
        			SICODE : fv_sicode
        		,	KM_NUMBER : this.ds_head.getColumn(e.row, "km_number")
        		};

        		Sct.popup(this, "del", 450, 400, "", param, "DAY_POP::DAY00301_P03.xfdl", "fn_popCallback");
        	}
        };

        // 작성일 변경 이벤트
        this.div_cont_div_right_div_main_cal_date_new_pic_onchanged = function(obj,e)
        {
        	// 작성 패널 일부 초기화
        	this.fn_dsDataInit();
        };

        // 치료그룹 체크박스 체인지 이벤트
        this.chk_group_onchanged = function(obj,e)
        {
        	switch(e.postvalue)
        	{
        		case "0" :
        			obj.set_value(e.prevalue);
        			break;
        		case "1" :
        			this.ds_data.setColumn(0, "group_b", 0);
        			this.ds_data.setColumn(0, "제공그룹", "A");
        			break;
        		case "2" :
        			this.ds_data.setColumn(0, "group_a", 0);
        			this.ds_data.setColumn(0, "제공그룹", "B");
        			break;
        		default:
        	}

        	// 작성패널 일부 초기화
        	this.fn_dsDataInit();
        };

        // 물리(작업)치료운영일지 새로생성 버튼 클릭
        this.div_cont_div_right_div_main_btn_new_onclick = function(obj,e)
        {
        	const date = this.ds_data.getColumn(0, "제공일");
        	const group = this.ds_data.getColumn(0, "제공그룹");

        	// 일지 중복여부 확인
        	this.fn_searchData(date, group);

        	// 일지 중복이 없으면
        	if (this.newFlag)
        	{
        		// 일지 새로작성 조회
        		this.fn_searchNew(date, group);
        	}
        };

        // 치료명 체크박스 체인지 이벤트
        this.chk_heal_onchanged = function(obj,e)
        {
        	// 상세그리드에 내용이 없으면 체크박스 선택 안되도록 하기
        	if (this.ds_detail.rowcount == 0)
        	{
        		obj.set_value(0);
        		return;
        	}

        	// 체크박스 텍스트값이 유효하지 않으면 선택 안되도록 하기
        	if (obj.text.trim() == "")
        	{
        		obj.set_value(0);
        		return;
        	}

        	// 해당 항목 전체 선택 or 전체 해제
        	const mainTxt = obj.text.trim();
        	for (let i = 0; i < this.ds_detail.rowcount; i++)
        	{
        		for (let j = 1; j <= 8; j++)
        		{
        			const txt = this.ds_detail.getColumn(i, "치료명0" + j);
        			if (mainTxt == txt)
        			{
        				this.ds_detail.setColumn(i, "참여0" + j, e.postvalue);
        			}
        		}
        	}
        };

        // 상세 그리드 데이터셋 컬럼 체인지 이벤트
        this.ds_detail_oncolumnchanged = function(obj,e)
        {
        	// 치료명이 없는경우 체크박스 선택 안되도록 하기
        	switch(e.columnid)
        	{
        		case "참여01":
        			if (Sct.Util.isEmpty(obj.getColumn(e.row, "치료명01")))
        				obj.setColumn(e.row, "참여01", 0);
        			break;
        		case "참여02":
        			if (Sct.Util.isEmpty(obj.getColumn(e.row, "치료명02")))
        				obj.setColumn(e.row, "참여02", 0);
        			break;
        		case "참여03":
        			if (Sct.Util.isEmpty(obj.getColumn(e.row, "치료명03")))
        				obj.setColumn(e.row, "참여03", 0);
        			break;
        		case "참여04":
        			if (Sct.Util.isEmpty(obj.getColumn(e.row, "치료명04")))
        				obj.setColumn(e.row, "참여04", 0);
        			break;
        		case "참여05":
        			if (Sct.Util.isEmpty(obj.getColumn(e.row, "치료명05")))
        				obj.setColumn(e.row, "참여05", 0);
        			break;
        		case "참여06":
        			if (Sct.Util.isEmpty(obj.getColumn(e.row, "치료명06")))
        				obj.setColumn(e.row, "참여06", 0);
        			break;
        		case "참여07":
        			if (Sct.Util.isEmpty(obj.getColumn(e.row, "치료명07")))
        				obj.setColumn(e.row, "참여07", 0);
        			break;
        		case "참여08":
        			if (Sct.Util.isEmpty(obj.getColumn(e.row, "치료명08")))
        				obj.setColumn(e.row, "참여08", 0);
        			break;
        		default:
        	}
        };

        // 상세 그리드 셀 클릭 이벤트
        this.div_cont_div_right_div_main_grd_detail_oncellclick = function(obj,e)
        {
        	const hourIdx = obj.getBindCellIndex("body", "시작시간");
        	const endIdx = obj.getBindCellIndex("body", "종료시간");

        	// 시작시
        	if (e.col == hourIdx)
        	{
        		this.div_time_from.__row = e.row;
        		this.div_time_from.__col = "시작시간";
        		this.div_time_from.__col2 = "종료시간";
        		this.div_time_from.__ds = "ds_detail";
        		this.div_time_from.set_visible(true);
        		this.div_time_from.setFocus();
        		this.div_time_to.set_visible(false);
        	}

        	// 종료시
        	if (e.col == endIdx)
        	{
        		this.div_time_to.__row = e.row;
        		this.div_time_to.__col = "종료시간";
        		this.div_time_to.__col2 = "시작시간";
        		this.div_time_to.__ds = "ds_detail";
        		this.div_time_to.set_visible(true);
        		this.div_time_to.setFocus();
        		this.div_time_from.set_visible(false);
        	}
        };

        // 시작시간 선택 팝업 킬 포커스 이벤트
        this.div_time_from_onkillfocus = function(obj,e)
        {
        	obj.set_visible(false);
        };

        // 종료시간 선택 팝업 킬 포커스 이벤트
        this.div_time_to_onkillfocus = function(obj,e)
        {
        	obj.set_visible(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_head.addEventHandler("oncellclick",this.div_cont_div_left_grd_head_oncellclick,this);
            this.div_cont.form.div_left.form.grd_head.addEventHandler("oncelldblclick",this.div_cont_div_left_grd_head_oncelldblclick,this);
            this.div_cont.form.div_right.form.div_main.form.cal_date_new_pic.addEventHandler("onchanged",this.div_cont_div_right_div_main_cal_date_new_pic_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_group1.addEventHandler("onchanged",this.chk_group_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_group2.addEventHandler("onchanged",this.chk_group_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.btn_new.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_new_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_worker.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_worker_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.chk_heal1.addEventHandler("onchanged",this.chk_heal_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_heal2.addEventHandler("onchanged",this.chk_heal_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_heal3.addEventHandler("onchanged",this.chk_heal_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_heal4.addEventHandler("onchanged",this.chk_heal_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_heal5.addEventHandler("onchanged",this.chk_heal_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_heal6.addEventHandler("onchanged",this.chk_heal_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_heal7.addEventHandler("onchanged",this.chk_heal_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_heal8.addEventHandler("onchanged",this.chk_heal_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.grd_detail.addEventHandler("oncellclick",this.div_cont_div_right_div_main_grd_detail_oncellclick,this);
            this.div_search.form.cal_date_pic.addEventHandler("onchanged",this.div_search_cal_date_pic_onchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_time_from.addEventHandler("onkillfocus",this.div_time_from_onkillfocus,this);
            this.div_time_to.addEventHandler("onkillfocus",this.div_time_to_onkillfocus,this);
            this.ds_detail.addEventHandler("oncolumnchanged",this.ds_detail_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00301.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
