(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00716_P01");
            this.set_titletext("비상구점검일지 출력(월)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1690,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"date\" type=\"DATE\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"순찰번호\" type=\"STRING\" size=\"256\"/><Column id=\"순찰일\" type=\"DATE\" size=\"256\"/><Column id=\"비상항목\" type=\"STRING\" size=\"256\"/><Column id=\"비상작성\" type=\"STRING\" size=\"256\"/><Column id=\"비상코드\" type=\"STRING\" size=\"256\"/><Column id=\"비상사항\" type=\"STRING\" size=\"200\"/><Column id=\"작성\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_DAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"REPO1\" type=\"STRING\" size=\"256\"/><Column id=\"R1\" type=\"STRING\" size=\"256\"/><Column id=\"R1_1\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"순찰번호\" type=\"INT\" size=\"256\"/><Column id=\"순찰일\" type=\"DATE\" size=\"256\"/><Column id=\"비상항목\" type=\"STRING\" size=\"256\"/><Column id=\"O1\" type=\"STRING\" size=\"256\"/><Column id=\"X1\" type=\"STRING\" size=\"256\"/><Column id=\"T1\" type=\"STRING\" size=\"256\"/><Column id=\"O2\" type=\"STRING\" size=\"256\"/><Column id=\"X2\" type=\"STRING\" size=\"256\"/><Column id=\"T2\" type=\"STRING\" size=\"256\"/><Column id=\"O3\" type=\"STRING\" size=\"256\"/><Column id=\"X3\" type=\"STRING\" size=\"256\"/><Column id=\"T3\" type=\"STRING\" size=\"256\"/><Column id=\"O4\" type=\"STRING\" size=\"256\"/><Column id=\"X4\" type=\"STRING\" size=\"256\"/><Column id=\"T4\" type=\"STRING\" size=\"256\"/><Column id=\"O5\" type=\"STRING\" size=\"256\"/><Column id=\"X5\" type=\"STRING\" size=\"256\"/><Column id=\"T5\" type=\"STRING\" size=\"256\"/><Column id=\"O6\" type=\"STRING\" size=\"256\"/><Column id=\"X6\" type=\"STRING\" size=\"256\"/><Column id=\"T6\" type=\"STRING\" size=\"256\"/><Column id=\"O7\" type=\"STRING\" size=\"256\"/><Column id=\"X7\" type=\"STRING\" size=\"256\"/><Column id=\"T7\" type=\"STRING\" size=\"256\"/><Column id=\"비상작성\" type=\"STRING\" size=\"256\"/><Column id=\"비상코드\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"비상사항\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0","450","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","380","5","70","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","132","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","245","5","15","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","260","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date","10","5","90","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("0");
            obj.getSetter("calendarfunc").set("month");
            obj.set_buttonsize("0 0");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","cal_date:-1","5","25","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","div_search:20","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","0","5","65","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("결재란");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5","70","25","85",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_report_body","chk_sign:6","chk_sign:-28","320","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_repo1","sta_report_body:-312","sta_report_body:-25","100","20",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("점검일지");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_repo2","chk_repo1:10","chk_repo1:-20","100","20",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("점검서식");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","chk_repo2:26","sta_report_body:-27","70","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("출력");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"5","70","26","10",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_cont","0","40",null,null,"0","0%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","10","30","860",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","12",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"110\"/><Column size=\"350\"/><Column size=\"90\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"점검일\"/><Cell col=\"1\" text=\"점검항목\"/><Cell col=\"2\" text=\"조치사항\"/><Cell col=\"3\" text=\"점검자\"/><Cell col=\"4\" text=\"기록\"/></Band><Band id=\"body\"><Cell text=\"bind:date\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dotd\" cssclass=\"cellBWoman\"/><Cell col=\"1\" text=\"bind:비상항목\"/><Cell col=\"2\" text=\"bind:비상사항\" wordWrap=\"char\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:비상작성\"/><Cell col=\"4\" text=\"bind:순찰번호\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","912","30",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_main","0","0",null,null,"10","12",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e2e2e2");
            obj.set_text("");
            obj.set_cssclass("chk_s1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","358","9","152","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_text("비상구점검일지");
            obj.set_cssclass("lb01");
            obj.set_fittocontents("none");
            obj.set_background("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no","24","10","58","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_text("기록번호 : ");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no_value","87","10","60","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_text("00000000");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","20","40",null,"1","20",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("27");
            obj.set_background("#e2e2e2");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","20","89","90","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("30");
            obj.set_text("번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","sta_head1:-1","89","430","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("31");
            obj.set_text("점 검 내 용");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","sta_head2:-1","89","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("32");
            obj.set_text("양호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","sta_head3:-1","89","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("33");
            obj.set_text("불량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num1","20","128","90","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("34");
            obj.set_text("1");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","sta_num1:-1","128","430","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("35");
            obj.set_text("○ 상시개방 여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1","sta_body1:-1","128","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1","sta_o1:-1","128","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o1","sta_o1:-57","137","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_text("양호");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x1","sta_x1:-57","137","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("3");
            obj.set_text("불량");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num2","20","167","90","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("38");
            obj.set_text("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","sta_num2:-1","167","430","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("39");
            obj.set_text("○ 유도등 정상작동 유무");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o2","sta_body2:-1","167","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x2","sta_o2:-1","167","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o2","sta_o2:-57","176","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_text("양호");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x2","sta_x2:-57","176","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("6");
            obj.set_text("불량");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num3","20","206","90","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("42");
            obj.set_text("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","sta_num3:-1","206","430","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("43");
            obj.set_text("○ 자동개폐장치 정상작동 유무");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o3","sta_body3:-1","206","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x3","sta_o3:-1","206","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o3","sta_o3:-57","215","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_text("양호");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x3","sta_x3:-57","215","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_text("불량");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num4","20","245","90","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("46");
            obj.set_text("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","sta_num4:-1","245","430","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("47");
            obj.set_text("○ 주변 장애물 적치 및 방치여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o4","sta_body4:-1","245","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x4","sta_o4:-1","245","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o4","sta_o4:-57","254","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_text("양호");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x4","sta_x4:-57","254","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_text("불량");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num5","20","284","90","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("50");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5","sta_num5:-1","284","430","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("51");
            obj.set_text("○ 시건(잠금)장치 및 열쇠보관 여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o5","sta_body5:-1","284","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x5","sta_o5:-1","284","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o5","sta_o5:-57","293","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_text("양호");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x5","sta_x5:-57","293","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_text("불량");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num6","20","323","90","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("54");
            obj.set_text("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6","sta_num6:-1","323","430","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("55");
            obj.set_text("○ 비상문 훼손, 파손, 변형 등 여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o6","sta_body6:-1","323","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x6","sta_o6:-1","323","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o6","sta_o6:-57","332","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_text("양호");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x6","sta_x6:-57","332","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_text("불량");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num7","20","362","90","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("58");
            obj.set_text("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body7","sta_num7:-1","362","430","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("59");
            obj.set_text("○ 비상구 주위에 적재물 제거여부(주변장애물 및 구조물확인)");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o7","sta_body7:-1","362","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x7","sta_o7:-1","362","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o7","sta_o7:-57","371","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_text("양호");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x7","sta_x7:-57","371","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_text("불량");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num8","20","401","90","70",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("62");
            obj.set_text("조치사항");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body8","sta_num8:-1","401","430","70",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_blank","sta_body8:-1","401","208","70",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_info1","12","52","182","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_SearchTxt");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_info2","200","52","322","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_SearchTxt");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_date","24","52","55","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("28");
            obj.set_text("점검일자");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date","93","52","110","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_tooltiptext("점검일");
            obj.set_buttonsize("0 0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_manager","225","52","80","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            obj.set_text("점검자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_manager_value","306","52","180","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("29");
            obj.set_text("너싱홈 / 요양보호사 / 20210007");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_ManagerInfo");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5","sta_head4:-1","89","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("67");
            obj.set_text("교체");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_t1","sta_x1:-1","128","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_t1","sta_t1:-58","137","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_text("교체");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_t2","sta_x2:-1","167","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_t2","sta_t2:-58","176","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_text("교체");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_t3","sta_x3:-1","206","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_t3","sta_t3:-58","215","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_text("교체");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_t4","sta_x4:-1","245","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_t4","sta_t4:-58","254","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_text("교체");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_t5","sta_x5:-1","284","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_t5","sta_t5:-58","293","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_text("교체");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_t6","sta_x6:-1","323","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_t6","sta_t6:-58","332","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_text("교체");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_t7","sta_x7:-1","362","70","40",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_t7","sta_t7:-58","371","45","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_text("교체");
            obj.set_cssclass("chk_s1");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_remark","118","407","410","55",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_wordWrap("char");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("fixed");
            obj.set_maxlength("200");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","11","3","500","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("비상구점검일지 출력");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_gMove","878","48.15%","25","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1690,580,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_date_pic","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_from","value","ds_search","DATE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cal_date_to","value","ds_search","DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_func.form.chk_sign","value","ds_report","SIGN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_func.form.chk_repo1","value","ds_report","R1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_func.form.chk_repo2","value","ds_report","R1_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.sta_no_value","text","ds_data","순찰번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.cal_date","value","ds_data","순찰일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.sta_manager_value","text","ds_data","VIEW_MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.chk_o1","value","ds_data","O1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.chk_o2","value","ds_data","O2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.chk_o3","value","ds_data","O3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.chk_o4","value","ds_data","O4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.div_main.form.chk_o5","value","ds_data","O5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_main.form.chk_o6","value","ds_data","O6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_main.form.chk_o7","value","ds_data","O7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_main.form.chk_x1","value","ds_data","X1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.div_main.form.chk_x2","value","ds_data","X2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.div_main.form.chk_x3","value","ds_data","X3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_right.form.div_main.form.chk_x4","value","ds_data","X4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_right.form.div_main.form.chk_x5","value","ds_data","X5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.div_main.form.chk_x6","value","ds_data","X6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.div_main.form.chk_x7","value","ds_data","X7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.div_main.form.chk_t1","value","ds_data","T1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_right.form.div_main.form.chk_t2","value","ds_data","T2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.div_main.form.chk_t3","value","ds_data","T3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.div_main.form.chk_t4","value","ds_data","T4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_right.form.div_main.form.chk_t5","value","ds_data","T5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_right.form.div_main.form.chk_t6","value","ds_data","T6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.div_main.form.chk_t7","value","ds_data","T7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.div_main.form.txt_remark","value","ds_data","비상사항");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00716_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00716_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00716_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00716_P01
         * 화면명   	: 비상구점검일지 출력
         * 화면설명 	: 비상구점검일지를 조회, 삽입, 수정, 삭제 하고
        				  리포트를 출력하는 화면
         * 작성일   	: 2022-03-23
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2022-04-06		조기종		단위테스트 오류 수정
         ***********************************************************************/
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_sicode = this.parent.SICODE;
        const fv_date = this.parent.DATE;
        const fv_sDay = this.parent.sDATE;
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_list;
        this.reSearchData = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00716_P01";

        	const date = fv_date;
        	const year = date.getFullYear();
        	const month = date.getMonth();
        	const firstDay = new Date(year, month, 1);
        	const lastDay = new Date(year, month + 1, 0);

        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE", fv_date);
        	this.ds_search.setColumn(0, "DATE_FROM", firstDay);
        	this.ds_search.setColumn(0, "DATE_TO", lastDay);
        	this.ds_search.setColumn(0, "DATE_DAY", fv_sDay);

        	// 리포트 출력 초기화
        	this.ds_report.setColumn(0, "REPO1", 1);
        	this.ds_report.setColumn(0, "R1", 1);
        	this.ds_report.setColumn(0, "SIGN", 1);

        	//drag 버튼 활성화
        	this.fn_setDivDrag();

        	this.fn_search("open_search");
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	// 검색조건 필수 체크 (컴포넌트 tooltiptext 값 넣을 것)
        	if (!this.gfn_findSnull(this.div_search)) return false;

        	if (this.ds_data.rowcount > 0)
        		this.reSearchData = this.ds_data.getColumn(0, "순찰일");

        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	if (this.ds_data.rowcount == 0)
        	{
        		this.alert("저장할 항목이 없습니다.");
        		return false;
        	}

        	// 저장 내용 체크
        	if (!Sct.Grid.hasInsertAndUpdateRow(this.ds_data))
        	{
        		this.alert("저장할 내용이 없습니다.");
        		return false;
        	}

        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "비상코드")))
        	{
        		this.alert("점검 관리자를 입력해야 합니다.");
        		return false;
        	}

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function()
        {
        	if (this.ds_data.rowcount == 0)
        	{
        		this.alert("삭제할 항목이 없습니다.");
        		return false;
        	}

        	if(this.ds_data.getRowType(0) == 2)
        	{
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
        this.fn_search = function(flag)
        {
        	const svcId = flag;
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00716_P01.DAY00716_P01_DS_LIST_S ";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
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
        				   + "sqlId=DAY00716_P01.DAY00716_P01_DS_DATA_D ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "open_search")
        		{
        			if (!Sct.Util.isEmpty(fv_sDay))
        			{
        				this.reSearchData = this.ds_search.getColumn(0, "DATE_DAY");
        				this.fn_findMstRow(this.reSearchData);
        			}
        			else
        			{
        				this.ds_list.set_rowposition(-1);
        			}

        			this.fn_dateStrSet();
        		}
        		else if (strSvcID == "search")
        		{
        			this.ds_data.clearData();
        			this.ds_list.set_rowposition(-1);
        			this.fn_dateStrSet();
        		}
        		else if (strSvcID == "search_save")
        		{
        			const sRow = this.fn_findMstRow(this.reSearchData);
        			this.fn_dateStrSet();
        		}
        		else if (strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");
        			this.fn_search("search_save");
        		}
        		else if (strSvcID == "delete")
        		{
        			this.alert("삭제되었습니다.");
        			this.ds_data.clearData();
        			this.fn_search("search");
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

        /**
         * 집중배설관찰 DB입력용 String 만들기
         *
         * @param cRow 바꿀 문자 index
         * @param str1 원본 문자열
         * @param col 데이터셋 컬럼명
         * @param value 바꿀 문자값
         * @param offset 문자 간격
         * @ds dataset 데이터셋
         */
        this.fn_valueSet = function(cRow, str1, col, value, offset, ds)
        {
        	let index;
        	if(offset == null || offset == 0)
        	{
        		str1 = this.stringReplaceAt(str1, value, cRow);
        		ds.setColumn(0, col, str1);
        	}
        	else
        	{
        		index = cRow * offset;
        		str1 = this.stringReplaceAt(str1, value, index);
        		ds.setColumn(0, col, str1);
        	}
        };

        //drag 버튼 활성화
        this.fn_setDivDrag = function()
        {
        	//divCont
        	this.gfn_setDivDrag(this.div_cont.form.btn_gMove, this.div_cont.form.div_left, this.div_cont.form.div_right);
        };

        /*
         * from, to YYYY.MM.DD ~ YYYY.MM.DD 문장 만들기
         *
         * @param from DATE from 날짜
         * @param to DATE to 날짜
         * @param deli str 구분자 ex) "-", "~" 안넣을 경우 "~"
         */
        this.fn_from_to_text = function(from, to, deli)
        {
        	const dateFromCol = from;
        	const yyyyFrom = dateFromCol.getFullYear();
        	const mmFrom = (dateFromCol.getMonth() + 1) + "";
        	const ddFrom = dateFromCol.getDate() + "";
        	const dateToCol = to;
        	const yyyyTo = dateToCol.getFullYear();
        	const mmTo = (dateToCol.getMonth() + 1) + "";
        	const ddTo = dateToCol.getDate() + "";

        	let delimiter = "";
        	if (!Sct.Util.isEmpty(deli))
        		delimiter = " " + deli + " ";
        	else
        		delimiter = " ~ ";

        	const dateFrom = yyyyFrom + "." + mmFrom.padStart(2, "0") + "." + ddFrom.padStart(2, "0");
        	const dateTo = yyyyTo + "." + mmTo.padStart(2, "0") + "." + ddTo.padStart(2, "0");

        	const rtnDate = dateFrom + delimiter + dateTo;
        	return rtnDate;
        };

        // 그리드 제목의 날짜 세팅
        this.fn_dateStrSet = function()
        {
        	const dateFromCol = this.ds_search.getColumn(0, "DATE_FROM");
        	const dateToCol = this.ds_search.getColumn(0, "DATE_TO");

        	// from, to YYYY.MM.DD ~ YYYY.MM.DD 문장 만들기
        	const dateStr = this.fn_from_to_text(dateFromCol, dateToCol, "-");

        	const subTitleText = "비상구점검일지 출력 ( " + dateStr + " )";
        	this.div_cont.form.sta_subTitle.set_text(subTitleText);
        };

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo) {
        	const sFindRow = this.ds_list.findRow("순찰일", fv_saveRefNo);
        	if (sFindRow > -1) {
        		this.ds_list.set_rowposition(sFindRow);
        		this.fn_dataCopy(sFindRow);
        	}
        	else
        	{
        		const fRow = this.ds_list.findRow("DATE", this.ds_search.getColumn(0, "DATE_DAY"));
        		this.ds_list.set_rowposition(fRow);
        		this.fn_dataNew();
        	}

        	return sFindRow;
        };

        // 입력, 수정용 데이터셋에 데이터 복사
        this.fn_dataCopy = function(row)
        {
        	this.ds_data.clearData();
        	const nRow = this.ds_data.addRow();
        	this.ds_data.copyRow(nRow, this.ds_list, row);

        	const managerStr = this.ds_data.getColumn(nRow, "비상작성")
        					 + "/"
        					 + this.ds_data.getColumn(nRow, "비상코드");
        	this.ds_data.setColumn(nRow, "VIEW_MANAGER", managerStr);

        	const str1 = this.ds_data.getColumn(nRow, "비상항목");
        	for (let i = 0; i < 11; i++)
        	{
        		const val = str1.substr(i, 1);
        		if (val == 1)
        		{
        			this.ds_data.setColumn(nRow, "O" + (i + 1), 1);
        		}
        		else if (val == 2)
        		{
        			this.ds_data.setColumn(nRow, "X" + (i + 1), 2);
        		}
        		else
        		{
        			this.ds_data.setColumn(nRow, "T" + (i + 1), 3);
        		}
        	}

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(nRow, 1);
        	this.ds_data.set_updatecontrol(true);
        };

        // 새로작성
        this.fn_dataNew = function(day)
        {
        	let nDay;
        	if (Sct.Util.isEmpty(day))
        		nDay = fv_sDay;
        	else
        		nDay = day;

        	//this.ds_list.set_rowposition(-1);
        	this.ds_data.clearData();
        	const nRow = this.ds_data.addRow();

        	this.ds_data.setColumn(nRow, "sicode", fv_sicode);

        	this.ds_data.setColumn(nRow, "순찰일", nDay);

        	this.ds_data.setColumn(nRow, "비상작성", nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name")));
        	this.ds_data.setColumn(nRow, "비상코드", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid"));

        	const managerStr = this.ds_data.getColumn(nRow, "비상작성")
        					 + "/"
        					 + this.ds_data.getColumn(nRow, "비상코드");
        	this.ds_data.setColumn(nRow, "VIEW_MANAGER", managerStr);

        	this.ds_data.setColumn(nRow, "비상항목", "1111111");
        	const str1 = this.ds_data.getColumn(nRow, "비상항목");
        	for (let i = 0; i < 11; i++)
        	{
        		const val = str1.substr(i, 1);
        		if (val == 1)
        		{
        			this.ds_data.setColumn(nRow, "O" + (i + 1), 1);
        		}
        		else if (val == 2)
        		{
        			this.ds_data.setColumn(nRow, "X" + (i + 1), 2);
        		}
        		else
        		{
        			this.ds_data.setColumn(nRow, "T" + (i + 1), 3);
        		}
        	}

        	this.ds_data.setColumn(nRow, "비상사항", "");
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 출력
        this.fn_report1 = function()
        {
        	if (this.ds_report.getColumn(0, "REPO1") != "2")
        	{
        		if (this.ds_list.rowcount == 0)
        		{
        			this.alert("출력할 내용이 없습니다.");
        			return false;
        		}
        	}

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00716_R01.xfdl";
        	const popupName = "비상구점검일지";

        	params = {
        		sicode : fv_sicode
        	,	date : this.ds_search.getColumn(0, "DATE_DAY")
        	,	sign : this.ds_report.getColumn(0, "SIGN") + ''
        	,	repo1 : this.ds_report.getColumn(0, "REPO1") + ''
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 점검자 선택 팝업
        this.btn_manager_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount < 1)
        		return;

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_data.getColumn(0, "순찰일")
        	};

        	Sct.popup(this, "emp", 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		// 작성자
        		case "emp" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "비상작성", name);
        				this.ds_data.setColumn(0, "비상코드", staffid);
        				this.ds_data.setColumn(0, "VIEW_MANAGER", name + "/" + staffid);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "비상작성", "");
        				this.ds_data.setColumn(0, "비상코드", "");
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
        // 조회 버튼
        this.fn_searchBtn = function(obj,e)
        {
        	this.fn_search("search");
        };

        // 저장 버튼
        this.fn_saveBtn = function(obj,e)
        {
        	this.fn_save();
        };

        // 삭제 버튼
        this.fn_deleteBtn = function(obj,e)
        {
        	this.fn_delete();
        };

        // 월 변경 이벤트
        this.div_search_cal_date_pic_onchanged = function(obj,e)
        {
        	// 선택월의 1일, 마지막일 구하기
        	const year = this.ds_search.getColumn(0,"DATE").substr(0,4);
        	const month = this.ds_search.getColumn(0,"DATE").substr(4);
        	const firstDay = new Date(year, month - 1 , 1);
        	const lastDay = new Date(year, month, 0);

        	// from to 날짜 셋팅
        	this.ds_search.setColumn(0, "DATE_FROM", firstDay);
        	this.ds_search.setColumn(0, "DATE_TO", lastDay);

        	// 값 변경후 검색
        	this.fn_search("search");
        };

        // 리포트 회의록 체크박스 값 변경 이벤트
        this.chk_repo1_onchanged = function(obj,e)
        {
        	// 점검일지, 점검서식
        	switch(e.postvalue)
        	{
        		case "1" :
        			this.ds_report.setColumn(0, "R1_1", 0);
        			this.ds_report.setColumn(0, "REPO1", e.postvalue);
        			break;
        		case "2" :
        			this.ds_report.setColumn(0, "R1", 0);
        			this.ds_report.setColumn(0, "REPO1", e.postvalue);
        			break;
        		default:
        	}
        };

        // 그리드 셀 클릭 이벤트
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	const dateIdx = obj.getBindCellIndex("body", "DATE");
        	// 점검일 선택
        	if (e.col == dateIdx)
        	{
        		if (this.ds_list.getColumn(e.row, "작성") == "O")
        		{
        			// 입력, 수정용 데이터셋에 데이터 복사
        			this.fn_dataCopy(e.row);
        		}
        		else
        		{
        			// 새로 작성
        			this.fn_dataNew(this.ds_list.getColumn(e.row, "DATE"));
        		}
        	}
        };

        // 양호, 불량, 교체 체크박스 값 변경 이벤트
        this.mainChk_onchanged = function(obj,e)
        {
        	const num = obj.id.substr(5);
        	const cRow = parseInt(num) - 1;
        	const offset = 0;
        	const value = e.postvalue;
        	const str1 = this.ds_data.getColumn(0, "비상항목");

        	// 체크 해제 안되도록 하기
        	if (value == 0)
        	{
        		obj.set_value(e.prevalue);
        		return;
        	}

        	switch (obj.id)
        	{
        		// 양호
        		case "chk_o" + num:
        			if (value == 1)
        			{
        				this.div_cont.form.div_right.form.div_main.form.components["chk_x" + num].set_value(0);
        				this.div_cont.form.div_right.form.div_main.form.components["chk_t" + num].set_value(0);
        				this.fn_valueSet(cRow, str1, "비상항목", value, offset, this.ds_data);
        			}
        			break;
        		// 불량
        		case "chk_x" + num:
        			if (value == 2)
        			{
        				this.div_cont.form.div_right.form.div_main.form.components["chk_o" + num].set_value(0);
        				this.div_cont.form.div_right.form.div_main.form.components["chk_t" + num].set_value(0);
        				this.fn_valueSet(cRow, str1, "비상항목", value, offset, this.ds_data);
        			}
        			break;
        		// 교체
        		case "chk_t" + num :
        			if (value == 3)
        			{
        				this.div_cont.form.div_right.form.div_main.form.components["chk_o" + num].set_value(0);
        				this.div_cont.form.div_right.form.div_main.form.components["chk_x" + num].set_value(0);
        				this.fn_valueSet(cRow, str1, "비상항목", value, offset, this.ds_data);
        			}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.cal_date_pic.addEventHandler("onchanged",this.div_search_cal_date_pic_onchanged,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.chk_repo1.addEventHandler("onchanged",this.chk_repo1_onchanged,this);
            this.div_func.form.chk_repo2.addEventHandler("onchanged",this.chk_repo1_onchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o7.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x7.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.btn_manager.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.chk_t1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_t2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_t3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_t4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_t5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_t6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_t7.addEventHandler("onchanged",this.mainChk_onchanged,this);
        };
        this.loadIncludeScript("DAY00716_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
