(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00702");
            this.set_titletext("7-2  주간식단표");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rnum\" type=\"STRING\" size=\"256\"/><Column id=\"color\" type=\"STRING\" size=\"256\"/><Column id=\"식단제공\" type=\"STRING\" size=\"256\"/><Column id=\"DAY1\" type=\"STRING\" size=\"256\"/><Column id=\"DAY2\" type=\"STRING\" size=\"256\"/><Column id=\"DAY3\" type=\"STRING\" size=\"256\"/><Column id=\"DAY4\" type=\"STRING\" size=\"256\"/><Column id=\"DAY5\" type=\"STRING\" size=\"256\"/><Column id=\"DAY6\" type=\"STRING\" size=\"256\"/><Column id=\"DAY7\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_diet_chk", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_week", this);
            obj._setContents("<ColumnInfo><Column id=\"SUN\" type=\"STRING\" size=\"256\"/><Column id=\"MON\" type=\"STRING\" size=\"256\"/><Column id=\"TUE\" type=\"STRING\" size=\"256\"/><Column id=\"WED\" type=\"STRING\" size=\"256\"/><Column id=\"THU\" type=\"STRING\" size=\"256\"/><Column id=\"FRI\" type=\"STRING\" size=\"256\"/><Column id=\"SAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel_chk", this);
            obj._setContents("<ColumnInfo><Column id=\"DOWN\" type=\"STRING\" size=\"256\"/><Column id=\"D1\" type=\"STRING\" size=\"256\"/><Column id=\"D2\" type=\"STRING\" size=\"256\"/><Column id=\"U_DOWN\" type=\"STRING\" size=\"256\"/><Column id=\"U_D1\" type=\"STRING\" size=\"256\"/><Column id=\"U_D2\" type=\"STRING\" size=\"256\"/><Column id=\"UP\" type=\"STRING\" size=\"256\"/><Column id=\"U1\" type=\"STRING\" size=\"256\"/><Column id=\"U2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel_day", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"Date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel_insert", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"f_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"mor01\" type=\"STRING\" size=\"256\"/><Column id=\"mor02\" type=\"STRING\" size=\"256\"/><Column id=\"mor03\" type=\"STRING\" size=\"256\"/><Column id=\"mor04\" type=\"STRING\" size=\"256\"/><Column id=\"mor05\" type=\"STRING\" size=\"256\"/><Column id=\"mor06\" type=\"STRING\" size=\"256\"/><Column id=\"lun01\" type=\"STRING\" size=\"256\"/><Column id=\"lun02\" type=\"STRING\" size=\"256\"/><Column id=\"lun03\" type=\"STRING\" size=\"256\"/><Column id=\"lun04\" type=\"STRING\" size=\"256\"/><Column id=\"lun05\" type=\"STRING\" size=\"256\"/><Column id=\"lun06\" type=\"STRING\" size=\"256\"/><Column id=\"din01\" type=\"STRING\" size=\"256\"/><Column id=\"din02\" type=\"STRING\" size=\"256\"/><Column id=\"din03\" type=\"STRING\" size=\"256\"/><Column id=\"din04\" type=\"STRING\" size=\"256\"/><Column id=\"din05\" type=\"STRING\" size=\"256\"/><Column id=\"din06\" type=\"STRING\" size=\"256\"/><Column id=\"sna01\" type=\"STRING\" size=\"256\"/><Column id=\"sna02\" type=\"STRING\" size=\"256\"/><Column id=\"sna03\" type=\"STRING\" size=\"256\"/><Column id=\"sna04\" type=\"STRING\" size=\"256\"/><Column id=\"sna05\" type=\"STRING\" size=\"256\"/><Column id=\"sna06\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"f_name1\" type=\"STRING\" size=\"256\"/><Column id=\"f_name2\" type=\"STRING\" size=\"256\"/><Column id=\"f_name3\" type=\"STRING\" size=\"256\"/><Column id=\"f_name4\" type=\"STRING\" size=\"256\"/><Column id=\"f_name5\" type=\"STRING\" size=\"256\"/><Column id=\"f_name6\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel_delete", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel_impo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"b_offname\" type=\"STRING\" size=\"256\"/><Column id=\"firstday\" type=\"STRING\" size=\"256\"/><Column id=\"lastday\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"MON\" type=\"STRING\" size=\"256\"/><Column id=\"식단제공\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"Date\" type=\"STRING\" size=\"256\"/><Column id=\"식단요일\" type=\"STRING\" size=\"256\"/><Column id=\"diff1\" type=\"STRING\" size=\"256\"/><Column id=\"diff2\" type=\"STRING\" size=\"256\"/><Column id=\"mor01\" type=\"STRING\" size=\"256\"/><Column id=\"mor02\" type=\"STRING\" size=\"256\"/><Column id=\"mor03\" type=\"STRING\" size=\"256\"/><Column id=\"mor04\" type=\"STRING\" size=\"256\"/><Column id=\"mor05\" type=\"STRING\" size=\"256\"/><Column id=\"mor06\" type=\"STRING\" size=\"256\"/><Column id=\"lun01\" type=\"STRING\" size=\"256\"/><Column id=\"lun02\" type=\"STRING\" size=\"256\"/><Column id=\"lun03\" type=\"STRING\" size=\"256\"/><Column id=\"lun04\" type=\"STRING\" size=\"256\"/><Column id=\"lun05\" type=\"STRING\" size=\"256\"/><Column id=\"lun06\" type=\"STRING\" size=\"256\"/><Column id=\"din01\" type=\"STRING\" size=\"256\"/><Column id=\"din02\" type=\"STRING\" size=\"256\"/><Column id=\"din03\" type=\"STRING\" size=\"256\"/><Column id=\"din04\" type=\"STRING\" size=\"256\"/><Column id=\"din05\" type=\"STRING\" size=\"256\"/><Column id=\"din06\" type=\"STRING\" size=\"256\"/><Column id=\"sna01\" type=\"STRING\" size=\"256\"/><Column id=\"sna02\" type=\"STRING\" size=\"256\"/><Column id=\"sna03\" type=\"STRING\" size=\"256\"/><Column id=\"sna04\" type=\"STRING\" size=\"256\"/><Column id=\"sna05\" type=\"STRING\" size=\"256\"/><Column id=\"sna06\" type=\"STRING\" size=\"256\"/><Column id=\"f_name1\" type=\"STRING\" size=\"256\"/><Column id=\"f_name2\" type=\"STRING\" size=\"256\"/><Column id=\"f_name3\" type=\"STRING\" size=\"256\"/><Column id=\"f_name4\" type=\"STRING\" size=\"256\"/><Column id=\"f_name5\" type=\"STRING\" size=\"256\"/><Column id=\"f_name6\" type=\"STRING\" size=\"256\"/><Column id=\"식단제공\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","80","1201",null,null,"0.00%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e2e2e2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","126","60","1053","634",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"21\"/></Rows><Band id=\"body\"><Cell text=\"bind:DAY1\"/><Cell col=\"1\" text=\"bind:DAY2\"/><Cell col=\"2\" text=\"bind:DAY3\"/><Cell col=\"3\" text=\"bind:DAY4\"/><Cell col=\"4\" text=\"bind:DAY5\"/><Cell col=\"5\" text=\"bind:DAY6\"/><Cell col=\"6\" text=\"bind:DAY7\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_date","20","7","68","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("주간식단일");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","97","7","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00","190","12","8","17",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","203","7","90","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_diet","310","7","68","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_text("식단제공처");
            obj.set_textAlign("center");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_diet","390","7","150","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","594","7","117","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("주간식단표");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_head","20","39","107","655",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.set_enableevent("false");
            obj.set_enable("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"35\"/></Columns><Rows><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"구분\" background=\"#ffffff\" border=\"1px solid #cccccc,1px solid #cccccc,1px solid #696969\"/><Cell col=\"1\" text=\"행\" background=\"#ffffff\" border=\"1px solid #cccccc,1px solid #cccccc,1px solid #696969\"/><Cell row=\"1\" rowspan=\"6\" text=\"아침식단\" background=\"#ffffff\"/><Cell row=\"1\" col=\"1\" text=\"1\" background=\"#ffffff\"/><Cell row=\"2\" col=\"1\" text=\"2\" background=\"#ffffff\"/><Cell row=\"3\" col=\"1\" text=\"3\" background=\"#ffffff\"/><Cell row=\"4\" col=\"1\" text=\"4\" background=\"#ffffff\"/><Cell row=\"5\" col=\"1\" text=\"5\" background=\"#ffffff\"/><Cell row=\"6\" col=\"1\" text=\"6\" background=\"#ffffff\"/><Cell row=\"7\" rowspan=\"6\" text=\"점심식단\" background=\"#e6e6fa\"/><Cell row=\"7\" col=\"1\" text=\"1\" background=\"#e6e6fa\"/><Cell row=\"8\" col=\"1\" text=\"2\" background=\"#e6e6fa\"/><Cell row=\"9\" col=\"1\" text=\"3\" background=\"#e6e6fa\"/><Cell row=\"10\" col=\"1\" text=\"4\" background=\"#e6e6fa\"/><Cell row=\"11\" col=\"1\" text=\"5\" background=\"#e6e6fa\"/><Cell row=\"12\" col=\"1\" text=\"6\" background=\"#e6e6fa\"/><Cell row=\"13\" rowspan=\"6\" text=\"저녁식단\" background=\"#ffffff\"/><Cell row=\"13\" col=\"1\" text=\"1\" background=\"#ffffff\"/><Cell row=\"14\" col=\"1\" text=\"2\" background=\"#ffffff\"/><Cell row=\"15\" col=\"1\" text=\"3\" background=\"#ffffff\"/><Cell row=\"16\" col=\"1\" text=\"4\" background=\"#ffffff\"/><Cell row=\"17\" col=\"1\" text=\"5\" background=\"#ffffff\"/><Cell row=\"18\" col=\"1\" text=\"6\" background=\"#ffffff\"/><Cell row=\"19\" rowspan=\"3\" text=\"오전간식\" background=\"#e6e6fa\"/><Cell row=\"19\" col=\"1\" text=\"1\" background=\"#e6e6fa\"/><Cell row=\"20\" col=\"1\" text=\"2\" background=\"#e6e6fa\"/><Cell row=\"21\" col=\"1\" text=\"3\" background=\"#e6e6fa\"/><Cell row=\"22\" rowspan=\"3\" text=\"오후간식\" background=\"#ffffff\"/><Cell row=\"22\" col=\"1\" text=\"1\" background=\"#ffffff\"/><Cell row=\"23\" col=\"1\" text=\"2\" background=\"#ffffff\"/><Cell row=\"24\" col=\"1\" text=\"3\" background=\"#ffffff\"/><Cell row=\"25\" rowspan=\"3\" text=\"기능식이\" background=\"#e6e6fa\"/><Cell row=\"25\" col=\"1\" text=\"1\" background=\"#e6e6fa\"/><Cell row=\"26\" col=\"1\" text=\"2\" background=\"#e6e6fa\"/><Cell row=\"27\" col=\"1\" text=\"3\" background=\"#e6e6fa\"/><Cell row=\"28\" text=\"당뇨\" background=\"#ffffff\"/><Cell row=\"28\" col=\"1\" text=\"1\" background=\"#ffffff\"/><Cell row=\"29\" text=\"유동\" background=\"#ffffff\"/><Cell row=\"29\" col=\"1\" text=\"1\" background=\"#ffffff\"/><Cell row=\"30\" text=\"저염\" background=\"#ffffff\"/><Cell row=\"30\" col=\"1\" text=\"1\" background=\"#ffffff\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_week","126","39","1053","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_week");
            obj.set_enableevent("false");
            obj.set_enable("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"21\"/></Rows><Band id=\"body\"><Cell text=\"bind:SUN\" color=\"red\"/><Cell col=\"1\" text=\"bind:MON\"/><Cell col=\"2\" text=\"bind:TUE\"/><Cell col=\"3\" text=\"bind:WED\"/><Cell col=\"4\" text=\"bind:THU\"/><Cell col=\"5\" text=\"bind:FRI\"/><Cell col=\"6\" text=\"bind:SAT\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_func","0","0","1201","80",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","198","7","55","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("결재란");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_report_body","274","2","310","40",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_SearchTxt");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_report_body00","352","5","275","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_weekly1","357","7","87","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("주간(일-토)");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_weekly2","454","7","87","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("주간(월-일)");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_weekreport","551","7","70","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("출력");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_workreport","262","7","80","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_text("일식단");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_report_body00_00","632","5","569","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_monthly1","642","7","90","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("8");
            obj.set_text("월간(전체)");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_monthly2","742","7","120","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("9");
            obj.set_text("월간(점심,저녁)");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_monthreport","1110","7","70","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("10");
            obj.set_text("출력");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_monthly3","872","7","90","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("11");
            obj.set_text("월간(점심)");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_monthly4","972","7","90","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("12");
            obj.set_text("월간(간식)");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_00","20","7","48","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("13");
            obj.set_text("기준일");
            obj.set_textAlign("center");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_line","0","39",null,"2","0",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("14");
            obj.set_background("#e2e2e2");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_report_body00_01","0","45","291","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_down1","20","47","60","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("15");
            obj.set_text("주간");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_down2","90","47","60","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("16");
            obj.set_text("월간");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_down","160","47","125","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("17");
            obj.set_text("식단 다운로드");
            obj.set_cssclass("btn_excel");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_report_body00_01_00","295","45","332","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_formdown1","305","47","60","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("20");
            obj.set_text("주간");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_formdown2","375","47","60","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("21");
            obj.set_text("월간");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_formdown","451","47","170","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("22");
            obj.set_text("업로드 서식 다운로드");
            obj.set_cssclass("btn_excel");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_report_body00_01_01","632","45","569","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_upload1","642","47","57","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("24");
            obj.set_text("주간");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_upload2","712","47","57","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("25");
            obj.set_text("월간");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_upload","782","47","110","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("26");
            obj.set_text("식단 업로드");
            obj.set_cssclass("btn_excel");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_tempset","905","47","130","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("27");
            obj.set_text("식단 템플릿 설정");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_easyinput","1040","47","140","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("28");
            obj.set_text("주간식단 간편입력");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_date","74","7","90","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","163","7","25","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("30");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_func.form.chk_down1","value","ds_excel_chk","D1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_func.form.chk_down2","value","ds_excel_chk","D2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_func.form.chk_formdown1","value","ds_excel_chk","U_D1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_func.form.chk_formdown2","value","ds_excel_chk","U_D2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_func.form.chk_upload1","value","ds_excel_chk","U1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_func.form.chk_upload2","value","ds_excel_chk","U2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_func.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_func.form.cal_date_pic","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00702.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00702.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00702.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00702
         * 화면명   	: 7-2 주간식단표
         * 화면설명 	: 주간식단표를 작성하는 화면
         * 작성일   	: 2022-03-28
         * 작성자   	: 박한준
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2022-04-01		조기종		엑셀 업·다운로드 추가
         ***********************************************************************
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
        this.fv_currentGrid = this.div_cont.form.grd_list;
        this.reSearchData = "";
        const fileDownTrans = new nexacro.FileDownTransfer( "fileDownTrans", this );
        const downUrl = nexacro.getEnvironment().services["svcurl"].url + "/common/";
        this.objExcelImport = null;
        const excelUrl = nexacro.getEnvironment().services["svcurl"].url + "/XExportImport";
        this.fDateSearch = "";
        this.tDateSearch = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	/*
        	 * ExcelImportObject 생성
        	 */
        	this.objExcelImport = new nexacro.ExcelImportObject("ExcelImportObject00", this);
        	// 생성한 오브젝트에 이벤트 추가
        	this.objExcelImport.addEventHandler("onsuccess", this.ExcelImportObject00_onsuccess, this);
        	this.objExcelImport.addEventHandler("onerror", this.ExcelImportObject00_onerror, this);

        	this.objExcelImport.set_importtype(nexacro.ImportTypes.EXCEL);
        	this.objExcelImport.set_importurl(excelUrl);

        	this.addChild("ExcelImportObject00", this.objExcelImport);

        	// 현재 년도 구하기
        	const date = new Date();

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE", date);

        	this.div_func.form.chk_sign.set_value(1); // 결재란
        	this.div_func.form.chk_weekly1.set_value(1); // 주간(일토)
        	this.div_func.form.chk_monthly1.set_value(1); // 월간(전체)

        	// 엑셀 체크박스 세팅
        	this.ds_excel_chk.setColumn(0, "DOWN", 1);
        	this.ds_excel_chk.setColumn(0, "D1", 1);
        	this.ds_excel_chk.setColumn(0, "U_DOWN", 1);
        	this.ds_excel_chk.setColumn(0, "U_D1", 1);
        	this.ds_excel_chk.setColumn(0, "UP", 1);
        	this.ds_excel_chk.setColumn(0, "U1", 1);

        	// 오픈시 조회
        	this.fn_search();
        };

        // 그리드 css 적용
        this.initGrid = function(grid)
        {
        	// 점심식단, 오전간식, 기능식이 background - ligtblue

        	const monArr = ["DAY1", "DAY2", "DAY3", "DAY4", "DAY5", "DAY6", "DAY7"];
        	for (let i = 0; i < monArr.length; i++)
        	{
        		const monIdx = grid.getBindCellIndex("body", monArr[i]);
        		const monCss = "expr:dataset.getColumn(currow, 'color') == '1' ? 'liteBlue' : ''";

        		grid.setCellProperty("body", monIdx, "cssclass", monCss);
        	}

        	// #e6e6fa
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	// 검색조건 필수 체크 (컴포넌트 tooltiptext 값 넣을 것)
        	if (!this.gfn_findSnull(this.div_func)) return false;

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

        	var date = this.ds_search.getColumn(0,"DATE").substr(0,8);
        	this.ds_search.setColumn(0, "DATE", date);
        	//var dfrom = new Date(+date + 3240 * 10000).toISOString().split("T")[0];
        	//trace("date : "+date);
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search input2=ds_search";
        	const outDatasets = "ds_list=output1 ds_week=output2";
        	const argument = "method=getList "
        				   + "sqlId='DAY00702.DAY00702_DS_LIST_S DAY00702.DAY00702_DS_WEEK_S '";
        				   //+ "SICODE="+this.ds_search.getColumn(0,"SICODE")
        				   //+ " DATE="+date;

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 일식단 정보 조회
        this.fn_diet_search = function ()
        {
        	var date = this.ds_search.getColumn(0,"DATE").substr(0,8);

        	const svcId = "diet_search";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_diet_chk=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00702.DAY00702_DS_DIET_CHK_S "
        				   + "SICODE="+this.ds_search.getColumn(0,"SICODE")
        				   + " DATE="+date;

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };

        // 엑셀 업로드를 위한 해당 주간 검색
        this.fn_day_search = function(flag)
        {
        	const svcId = "excel_search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_excel_day=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00702_EXCEL.DAY00702_EXCEL_DS_EXCEL_DAY_" + flag + "_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };

        // 엑셀 업로드를 위한 삭제
        this.fn_excel_delete = function(fDate, tDate)
        {
        	this.ds_excel_delete.clearData();
        	const dnRow = this.ds_excel_delete.addRow();
        	this.ds_excel_delete.setColumn(dnRow, "sicode", fv_sicode);
        	this.ds_excel_delete.setColumn(dnRow, "DATE_FROM", fDate);
        	this.ds_excel_delete.setColumn(dnRow, "DATE_TO", tDate);

        	this.ds_excel_delete.set_updatecontrol(false);
        	this.ds_excel_delete.setRowType(dnRow, Dataset.ROWTYPE_DELETE);
        	this.ds_excel_delete.set_updatecontrol(true);

        	const svcId = "excel_delete";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_excel_delete:U";
        	const outDatasets = "";
        	const argument = "method=delete "
        				   + "sqlId=DAY00702_EXCEL.DAY00702_EXCEL_D ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };

        // 엑셀 업로드 삽입
        this.fn_excel_insert = function()
        {
        	const svcId = "excel_insert";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_excel_insert:U";
        	const outDatasets = "";
        	const argument = "method=insert "
        				   + "sqlId=DAY00702_EXCEL.DAY00702_EXCEL_I ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };

        // 엑셀 다운로드 검색
        this.fn_excel_search = function(week, month)
        {
        	let weekly = 0;
        	let monthly = 0;
        	if (Sct.Util.isEmpty(week))
        		weekly = 1;
        	else
        		weekly = week;

        	if (Sct.Util.isEmpty(month))
        		monthly = 1;
        	else
        		monthly = month;

        	const svcId = "excel_down_search";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_excel_head=output1 ds_excel_data=output2";
        	const argument = "method=getList"
        				   + " sqlId='DAY00702_EXCEL.DAY00702_EXCEL_DS_EXCEL_HEAD_S DAY00702_EXCEL.DAY00702_EXCEL_DS_EXCEL_DATA_S'"
        				   + " SICODE=" + fv_sicode
        				   + " DATE=" + this.ds_search.getColumn(0, "DATE")
        				   + " WEEKLY=" + weekly
        				   + " MONTHLY=" + monthly;

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			// 주간식단일 시작일, 종료일
        			var sday = this.ds_week.getColumn(0, "SUN");
        			var eday = this.ds_week.getColumn(0, "SAT");

        			this.div_cont.form.cal_date_from.set_value(sday);
        			this.div_cont.form.cal_date_to.set_value(eday);
        			this.ds_week.set_rowposition(-1);
        			this.ds_list.set_rowposition(-1);
        			this.div_cont.form.edt_diet.set_value(this.ds_list.getColumn(0,"식단제공"));
        			//trace("rowcount : " + this.ds_list.rowcount);
        			//this.div_cont.form.sta_subTitle.set_text(gTitleStr);

        			// 그리드 css 적용
        			this.initGrid(this.div_cont.form.grd_list);

        		}
        		else if (strSvcID == "excelform" || strSvcID == "excelDown")
        		{
        			fileDownTrans.clearPostDataList();
        			fileDownTrans.setPostData("fileRealName", this.ds_excel.getColumn(0, "FILE_REAL_NAME"));
        			fileDownTrans.setPostData("fileName", this.ds_excel.getColumn(0, "FILE_NAME"));
        			fileDownTrans.download(downUrl + "fileDownload_postdatatestAll.jsp");

        			this.ds_excel.clearData();
        		}
        		else if (strSvcID == "excel_insert")
        		{
        			this.alert("저장되었습니다.");
        			this.fn_search();
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        		return false;
        	}
        };
        /***********************************************************************
         * User Functions
         ***********************************************************************/
        // 리포트 버튼
        this.fn_reportBtn = function()
        {
        	this.fn_report();
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 리포트 팝업
        this.fn_report = function(obj,e)
        {
        	var popupUrl = "";
         	var popupName = "";
        	var weekly = ""; // 주간 구분 값(일토 1, 월일 2)
        	var monthly = ""; // 주간,월간 구분 값(주간 1, 월간 2)
        	const caterer = nexacro.getApplication().gds_userInfo.getColumn(0, "식단제공");
        	const origin = nexacro.getApplication().gds_userInfo.getColumn(0, "원산지안내");
        	const origin1 = Sct.Util.fn_cutByteLength(origin, 60);
        	const origin2 = origin.replace(origin1, '');

        	if(obj.id == "btn_workreport"){ // 일식단표
        		this.fn_diet_search();
        		var chk = this.ds_diet_chk.getColumn(0,"CNT");
        		if(chk < 1){
        			this.alert("정보를 조회하지 못했습니다.");
        			return false;
        		}
        		popupUrl = "DAY_POP::DAY00702_R01.xfdl";
        		popupName = "일식단표";
        	}else if(obj.id == "btn_weekreport"){ // 주간식단표
        		var chk_weekly1 = this.div_func.form.chk_weekly1.value; // 주간(일-토)
        		var chk_weekly2 = this.div_func.form.chk_weekly2.value; // 주간(월-일)

        		if(chk_weekly1 != 1 && chk_weekly2 != 1){
        			this.alert("출력할 레포트를 선택해주세요");
        			return false;
        		}else{
        			monthly = 1;
        			if(chk_weekly1 == 1){ // 주간(일-토) 레포트
        				weekly = 1;
        			}else{
        				weekly = 2;
        			}
        			popupUrl = "DAY_POP::DAY00702_R02.xfdl";
        			popupName = "주간 식단표";
        		}

        	}else if(obj.id == "btn_monthreport"){ // 월간식단표
        		var chk_monthly1 = this.div_func.form.chk_monthly1.value; // 월간 전체
        		var chk_monthly2 = this.div_func.form.chk_monthly2.value; // 월간(점심,저녁)
        		var chk_monthly3 = this.div_func.form.chk_monthly3.value; // 월간(점심)
        		var chk_monthly4 = this.div_func.form.chk_monthly4.value; // 월간(간식)

        		if(chk_monthly1 != 1 && chk_monthly2 != 1 && chk_monthly3 != 1 && chk_monthly4 != 1){
        			this.alert("출력할 레포트를 선택해주세요");
        			return false;
        		}

        		if(chk_monthly1 == 1){
        			monthly = 2;
        			weekly = 1;
        			popupUrl = "DAY_POP::DAY00702_R02.xfdl";
        			popupName = "월간 식단표";
        		}else if(chk_monthly2 == 1){
        			popupUrl = "DAY_POP::DAY00702_R03.xfdl";
        			popupName = "월간(점심,저녁) 식단표";
        		}else if(chk_monthly3 == 1){
        			popupUrl = "DAY_POP::DAY00702_R04.xfdl";
        			popupName = "월간(점심) 식단표";
        		}else if(chk_monthly4 == 1){
        			popupUrl = "DAY_POP::DAY00702_R05.xfdl";
        			popupName = "월간(간식) 식단표";
        		}

        	}

         	let params;
         	const dicompNm = " ";

        	var date = this.ds_search.getColumn(0,"DATE").substr(0,8);

        	params = {
        		sicode : fv_sicode
        	,	date : date
        	,   weekly : weekly
        	,   monthly : monthly
        	,	sign : this.div_func.form.chk_sign.value
        	,	caterer : caterer
        	,	origin1 : origin1
        	,	origin2 : origin2
        	};

         	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;

        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "easyinput" :
        			this.ds_search.setColumn(0,"DATE",objDs.getColumn(0,"DATE"));
        			this.fn_search();
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
        	this.fn_search();
        };

        // 캘린더 변경 이벤트
        this.div_func_cal_date_onchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0,"DATE",e.postvalue);
        	//조회
        	this.fn_search();
        };

        // 레포트 체크박스 이벤트
        this.chk_repo_canchange = function(obj,e)
        {
        	if(e.postvalue == 1){ //
        		switch (obj.id)
        		{
        			case "chk_weekly1":
        				this.div_func.form.chk_weekly2.set_value(0);
        				break;
        			case "chk_weekly2":
        				this.div_func.form.chk_weekly1.set_value(0);
        				break;
        			case "chk_monthly1":
        				this.div_func.form.chk_monthly2.set_value(0);
        				this.div_func.form.chk_monthly3.set_value(0);
        				this.div_func.form.chk_monthly4.set_value(0);
        				break;
        			case "chk_monthly2":
        				this.div_func.form.chk_monthly1.set_value(0);
        				this.div_func.form.chk_monthly3.set_value(0);
        				this.div_func.form.chk_monthly4.set_value(0);
        				break;
        			case "chk_monthly3":
        				this.div_func.form.chk_monthly1.set_value(0);
        				this.div_func.form.chk_monthly2.set_value(0);
        				this.div_func.form.chk_monthly4.set_value(0);
        				break;
        			case "chk_monthly4":
        				this.div_func.form.chk_monthly1.set_value(0);
        				this.div_func.form.chk_monthly2.set_value(0);
        				this.div_func.form.chk_monthly3.set_value(0);
        				break;
        		}
        	}
        };

        // 식단 템플릿 설정 클릭 이벤트
        this.div_func_btn_tempset_onclick = function(obj,e)
        {
        	const param = {
        				SICODE : fv_sicode
        		};
        	Sct.popup(this, "record", 450, 400, "7-2 식단 템플릿 설정", param, "DAY_POP::DAY00702_P01.xfdl", "fn_popCallback");
        };

        // 주간식단 간편입력 클릭 이벤트
        this.div_func_btn_easyinput_onclick = function(obj,e)
        {
        	const param = {
        				SICODE : fv_sicode
        			,	DATE : this.ds_search.getColumn(0, "DATE")
        		};
        	Sct.popup(this, "easyinput", 450, 400, "", param, "DAY_POP::DAY00702_P03.xfdl", "fn_popCallback");
        };

        // 식단 다운로드 체그박스 체인지 이벤트
        this.div_func_chk_down_onchanged = function(obj,e)
        {
        	switch(e.postvalue)
        	{
        		case "0" :
        			obj.set_value(e.prevalue);
        			break;
        		case "1" :
        			this.ds_excel_chk.setColumn(0, "D2", 0);
        			this.ds_excel_chk.setColumn(0, "DOWN", e.postvalue);
        			break;
        		case "2" :
        			this.ds_excel_chk.setColumn(0, "D1", 0);
        			this.ds_excel_chk.setColumn(0, "DOWN", e.postvalue);
        			break;
        		default:
        	}
        };

        // 업로드 서식 다운로드 체크박스 체인지 이벤트
        this.div_func_chk_formdown_onchanged = function(obj,e)
        {
        	switch(e.postvalue)
        	{
        		case "0" :
        			obj.set_value(e.prevalue);
        			break;
        		case "1" :
        			this.ds_excel_chk.setColumn(0, "U_D2", 0);
        			this.ds_excel_chk.setColumn(0, "U_DOWN", e.postvalue);
        			break;
        		case "2" :
        			this.ds_excel_chk.setColumn(0, "U_D1", 0);
        			this.ds_excel_chk.setColumn(0, "U_DOWN", e.postvalue);
        			break;
        		default:
        	}
        };

        // 식단 업로드 체크박스 체인지 이벤트
        this.div_func_chk_upload_onchanged = function(obj,e)
        {
        	switch(e.postvalue)
        	{
        		case "0" :
        			obj.set_value(e.prevalue);
        			break;
        		case "1" :
        			this.ds_excel_chk.setColumn(0, "U2", 0);
        			this.ds_excel_chk.setColumn(0, "UP", e.postvalue);
        			break;
        		case "2" :
        			this.ds_excel_chk.setColumn(0, "U1", 0);
        			this.ds_excel_chk.setColumn(0, "UP", e.postvalue);
        			break;
        		default:
        	}
        };

        // 식단 다운로드
        this.div_func_btn_down_onclick = function(obj,e)
        {
        	let sheetStr = "";
        	if (this.ds_excel_chk.getColumn(0, "DOWN") == "1")
        	{
        		sheetStr = "주간";
        		this.fn_excel_search(1, 1);
        	}
        	else
        	{
        		sheetStr = "월간";
        		this.fn_excel_search(1, 2);
        	}

        	this.ds_excel.clearData();

        	const svcId = "excelDown";
        	const params = "/DAY00702EXCEL.do";
        	const inDatasets = "input1=ds_excel_head input2=ds_excel_data";
        	const outDatasets = "ds_excel=output1";
        	const argument = "method=excelDown"
        				   + " SHEET_NAME=" + sheetStr;

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 업로드 서식 다운로드
        this.div_func_btn_formdown_onclick = function(obj,e)
        {
        	this.ds_excel.clearData();

        	let sheetStr = "";
        	if (this.ds_excel_chk.getColumn(0, "U_DOWN") == "1")
        	{
        		sheetStr = "주간식단";
        		this.fn_day_search("WEEK");
        	}
        	else
        	{
        		sheetStr = "월간식단";
        		this.fn_day_search("MONTH");
        	}

        	const svcId = "excelform";
        	const params = "/DAY00702EXCEL.do";
        	const inDatasets = "input1=ds_excel_day";
        	const outDatasets = "ds_excel=output1";
        	const argument = "method=formDown "
        				   + "SHEET_NAME=" + sheetStr + " ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 식단 업로드
        this.div_func_btn_upload_onclick = function(obj,e)
        {
        	if (this.ds_excel_chk.getColumn(0, "UP") == "1")
        	{
        		this.fn_day_search("WEEK");
        	}
        	else
        	{
        		this.fn_day_search("MONTH");
        	}

        	let sParam = "";
        	const sParam2 = "ds_excel_impo=output1";
        	if (this.ds_excel_chk.getColumn(0, "UP") == "1")
        	{
        		sParam = "[command=getsheetdata;output=output1;body=주간식단!A2]";
        	}
        	else
        	{
        		sParam = "[command=getsheetdata;output=output1;body=월간식단!A2]";
        	}

        	this.objExcelImport.importData("", sParam, sParam2);
        };

        // Import 성공시
        this.ExcelImportObject00_onsuccess = function(obj,e)
        {
        	//trace(e.url);
        	//trace(this.ds_excel_impo.saveXML());

        	this.ds_excel_insert.clearData();

        	const colCount = this.ds_excel_impo.getColCount();
        	let rNum = 0;
        	try
        	{
        		for (let i = 0; i < this.ds_excel_day.rowcount; i++)
        		{
        			rNum = 0;
        			const nRow = this.ds_excel_insert.addRow();
        			this.ds_excel_insert.setColumn(nRow, "sicode", fv_sicode);
        			this.ds_excel_insert.setColumn(nRow, "f_nalja", this.ds_excel_day.getColumn(i, "Date"));
        			this.ds_excel_insert.setColumn(nRow, "mor01", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "mor02", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "mor03", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "mor04", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "mor05", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "mor06", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "lun01", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "lun02", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "lun03", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "lun04", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "lun05", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "lun06", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "din01", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "din02", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "din03", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "din04", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "din05", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "din06", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "sna01", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "sna02", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "sna03", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "sna04", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "sna05", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "sna06", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "f_name1", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "f_name2", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "f_name3", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "f_name4", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "f_name5", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        			this.ds_excel_insert.setColumn(nRow, "f_name6", this.ds_excel_impo.getColumn(rNum++, "Column" + (i + 2)));
        		}

        		for (let i = 0; i < this.ds_excel_insert.rowcount; i++)
        		{
        			let gubunStr = "";
        			for (let j = 2; j < 26; j++)
        			{
        				if (j == this.ds_excel_insert.getColIndex("GUBUN"))
        					continue;

        				const colVal = this.ds_excel_insert.getColumn(i, j);
        				if (colVal != null && colVal != "")
        					gubunStr += "G99";
        				else
        					gubunStr += "   ";
        			}
        			this.ds_excel_insert.setColumn(i, "GUBUN", gubunStr);
        		}
        	}
        	catch (e)
        	{
        		trace(e);
        		//this.alert("업로드 된 엑셀 양식에 문제가 있습니다. 업로드하는 엑셀 파일을 확인해주세요.");
        		return false;
        	}

        	const fromDate = this.ds_excel_day.getColumn(0, "Date");
        	const toDate = this.ds_excel_day.getColumn(this.ds_excel_day.rowcount - 1, "Date");

        	const fDateArr = fromDate.split("-");
        	const tDateArr = toDate.split("-");

        	if (this.ds_excel_chk.getColumn(0, "UP") == "1")
        	{
        		const fDateString = fDateArr[0] + "년 " + fDateArr[1] + "월 " + fDateArr[2] + "일";
        		const tDateString = tDateArr[0] + "년 " + tDateArr[1] + "월 " + tDateArr[2] + "일";

        		if (!this.confirm(fDateString + " 부터 " + tDateString + "까지 데이터를 모두 삭제하고 식단을 업로드 하시겠습니까?"))
        			return false;
        	}
        	else
        	{
        		const mDate = this.ds_search.getColumn(0, "DATE");
        		const mDateString = mDate.substr(0, 4) + "년 " + mDate.substr(4, 2) + "월";

        		if (!this.confirm(mDateString + "데이터를 모두 삭제하고 식단을 업로드 하시겠습니까?"))
        			return false;
        	}

        	this.fDateSearch = "";
        	for (let i = 0; i < fDateArr.length; i++)
        		this.fDateSearch += fDateArr[i];

        	this.tDateSearch = "";
        	for (let i = 0; i < tDateArr.length; i++)
        		this.tDateSearch += tDateArr[i];

        	this.fn_excel_delete(this.fDateSearch, this.tDateSearch);

        	this.fn_excel_insert();
        };

        // Import 에러시
        this.ExcelImportObject00_onerror = function(obj,e)
        {
        	//this.alert("업로드 실패");
        	trace("========== onerror event start ==========");
        	trace("e.eventid : " + e.eventid);
        	trace("e.fromobject : " + e.fromobject);
        	trace("e.fromreferenceobject : " + e.fromreferenceobject);
        	trace("e.errorcode : " + e.statuscode);
        	trace("e.errormsg : " + e.errormsg);

        	if (e.statuscode == 9901)
        	{
        		this.alert("업로드할 시트의 이름이 일치하지 않습니다.\n"
        					 + "주간식단 업로드의 경우 시트이름이 주간시트 \n"
        					 + "월간식단 업로드의 경우 시트이름이 월간시트 \n"
        					 + "여야 합니다.\n"
        					 + "시트이름은 엑셀파일을 열었을때 화면 하단에서 확인할 수 있습니다.");
        		return false;
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_func.form.chk_weekly1.addEventHandler("canchange",this.chk_repo_canchange,this);
            this.div_func.form.chk_weekly2.addEventHandler("canchange",this.chk_repo_canchange,this);
            this.div_func.form.btn_weekreport.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_workreport.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.chk_monthly1.addEventHandler("canchange",this.chk_repo_canchange,this);
            this.div_func.form.chk_monthly2.addEventHandler("canchange",this.chk_repo_canchange,this);
            this.div_func.form.btn_monthreport.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.chk_monthly3.addEventHandler("canchange",this.chk_repo_canchange,this);
            this.div_func.form.chk_monthly4.addEventHandler("canchange",this.chk_repo_canchange,this);
            this.div_func.form.chk_down1.addEventHandler("onchanged",this.div_func_chk_down_onchanged,this);
            this.div_func.form.chk_down2.addEventHandler("onchanged",this.div_func_chk_down_onchanged,this);
            this.div_func.form.btn_down.addEventHandler("onclick",this.div_func_btn_down_onclick,this);
            this.div_func.form.chk_formdown1.addEventHandler("onchanged",this.div_func_chk_formdown_onchanged,this);
            this.div_func.form.chk_formdown2.addEventHandler("onchanged",this.div_func_chk_formdown_onchanged,this);
            this.div_func.form.btn_formdown.addEventHandler("onclick",this.div_func_btn_formdown_onclick,this);
            this.div_func.form.chk_upload1.addEventHandler("onchanged",this.div_func_chk_upload_onchanged,this);
            this.div_func.form.chk_upload2.addEventHandler("onchanged",this.div_func_chk_upload_onchanged,this);
            this.div_func.form.btn_upload.addEventHandler("onclick",this.div_func_btn_upload_onclick,this);
            this.div_func.form.btn_tempset.addEventHandler("onclick",this.div_func_btn_tempset_onclick,this);
            this.div_func.form.btn_easyinput.addEventHandler("onclick",this.div_func_btn_easyinput_onclick,this);
            this.div_func.form.cal_date.addEventHandler("onchanged",this.div_func_cal_date_onchanged,this);
            this.div_func.form.cal_date_pic.addEventHandler("onchanged",this.div_func_cal_date_onchanged,this);
        };
        this.loadIncludeScript("DAY00702.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
