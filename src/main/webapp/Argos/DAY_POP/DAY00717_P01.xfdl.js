(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00717_P01");
            this.set_titletext("실내 ·외 소독일지 출력(월)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1590,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"소독번호\" type=\"STRING\" size=\"256\"/><Column id=\"소독일\" type=\"DATE\" size=\"256\"/><Column id=\"소독제품\" type=\"STRING\" size=\"256\"/><Column id=\"소독장소\" type=\"STRING\" size=\"256\"/><Column id=\"소독자명\" type=\"STRING\" size=\"256\"/><Column id=\"소독코드\" type=\"STRING\" size=\"200\"/><Column id=\"소독직종\" type=\"STRING\" size=\"256\"/><Column id=\"소독차량\" type=\"STRING\" size=\"256\"/><Column id=\"작성\" type=\"STRING\" size=\"256\"/><Column id=\"germsajin1\" type=\"STRING\" size=\"256\"/><Column id=\"germsajin2\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME2\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"소독번호\" type=\"INT\" size=\"256\"/><Column id=\"소독일\" type=\"DATE\" size=\"256\"/><Column id=\"소독제품\" type=\"STRING\" size=\"256\"/><Column id=\"소독장소\" type=\"STRING\" size=\"256\"/><Column id=\"소독자명\" type=\"STRING\" size=\"256\"/><Column id=\"소독코드\" type=\"STRING\" size=\"256\"/><Column id=\"소독직종\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"소독차량\" type=\"STRING\" size=\"256\"/><Column id=\"germsajin1\" type=\"STRING\" size=\"256\"/><Column id=\"germsajin2\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID_O\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID2_O\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME2\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"소독번호\" type=\"STRING\" size=\"256\"/><Column id=\"소독일\" type=\"STRING\" size=\"256\"/><Column id=\"소독제품\" type=\"STRING\" size=\"256\"/><Column id=\"소독장소\" type=\"STRING\" size=\"256\"/><Column id=\"소독자명\" type=\"STRING\" size=\"256\"/><Column id=\"소독코드\" type=\"STRING\" size=\"256\"/><Column id=\"소독직종\" type=\"STRING\" size=\"256\"/><Column id=\"소독차량\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_tabstop("false");
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
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_report_body","401","2","340","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_repo1","sta_report_body:-332","sta_report_body:-25","100","20",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("소독일지(일)");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_repo2","chk_repo1:10","chk_repo1:-20","120","20",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("소독일지(일)사진");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","chk_repo2:26","sta_report_body:-27","70","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("출력");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"5","70","26","10",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_reportMon","65","5","115","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("소독일지(월)");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_excel","187","5","200","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("소독일지(월) 엑셀다운로드");
            obj.set_cssclass("btn_excel");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_load","747","5","145","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_text("소독기록 가져오기");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_cont","10","40",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","30","870",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list2","0","0",null,null,"0","12",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list2");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소독일\"/><Cell col=\"1\" text=\"소독자명\"/><Cell col=\"2\" text=\"소독제품\"/><Cell col=\"3\" text=\"소독장소\"/><Cell col=\"4\" text=\"소독차량\"/></Band><Band id=\"body\"><Cell text=\"bind:소독일\" displaytype=\"date\"/><Cell col=\"1\" text=\"bind:소독자명\"/><Cell col=\"2\" text=\"bind:소독제품\"/><Cell col=\"3\" text=\"bind:소독장소\"/><Cell col=\"4\" text=\"bind:소독차량\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","12",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"90\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"60\"/></Rows><Band id=\"head\"><Cell text=\"소독일\"/><Cell col=\"1\" text=\"소독장소\"/><Cell col=\"2\" text=\"소독제품\"/><Cell col=\"3\" text=\"소독자\"/><Cell col=\"4\" text=\"기록\"/></Band><Band id=\"body\"><Cell text=\"bind:date\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dotd\" cssclass=\"cellBWoman\"/><Cell col=\"1\" text=\"bind:소독장소\" displaytype=\"textareacontrol\" textAlign=\"left\" wordWrap=\"char\" edittype=\"readonly\"/><Cell col=\"2\" text=\"bind:소독제품\" wordWrap=\"char\" textAlign=\"left\" displaytype=\"textareacontrol\" edittype=\"readonly\"/><Cell col=\"3\" text=\"bind:소독자명\"/><Cell col=\"4\" text=\"bind:소독번호\"/></Band></Format></Formats>");
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

            obj = new Static("sta_subTitle","240","9","170","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_text("실내·외 정기소독일지");
            obj.set_cssclass("lb01");
            obj.set_fittocontents("none");
            obj.set_background("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no","24","10","58","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_text("기록번호 : ");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no_value","87","10","60","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_text("00000000");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","20","40",null,"1","20",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_background("#e2e2e2");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","20","91","90","130",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_text("소독제품");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","sta_head1:-1","91",null,"130","20",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_info1","12","52","182","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_SearchTxt");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_date","24","52","55","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_text("점검일자");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date","93","52","110","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_tooltiptext("점검일");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_manager","225","52","80","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            obj.set_text("소독자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_manager_value","306","52","180","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_text("너싱홈 / 요양보호사 / 20210007");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_ManagerInfo");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_remark","118","98","510","115",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("3");
            obj.set_wordWrap("char");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("fixed");
            obj.set_maxlength("500");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","20","220","90","120",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_text("소독장소");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","109","220",null,"120","20",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_remark00","118","227","510","105",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_wordWrap("char");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("fixed");
            obj.set_maxlength("500");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","20","339","90","90",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_text("소독차량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","109","339",null,"90","20",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_remark00_00","118","346","510","75",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_wordWrap("char");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("fixed");
            obj.set_maxlength("300");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","20","428","90","250",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_text("소독사진");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4_1","109","428","264","250",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4_2","372","428","264","250",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("imv_pic1","120","443","242","162",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("imv_pic2","383","443","242","162",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_00","120","609","242","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","383","609","242","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_pic1","120","638","119","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_text("사진① 첨부");
            obj.set_cssclass("btn_addimage");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_pic1_del","243","638","119","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_text("사진① 지움");
            obj.set_cssclass("btn_deleteimage");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_pic2","383","638","119","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_text("사진② 첨부");
            obj.set_cssclass("btn_addimage");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_pic2_del","506","638","119","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_text("사진② 지움");
            obj.set_cssclass("btn_deleteimage");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","3","500","26",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("실내·외 정기소독일지 출력");
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
            obj = new Layout("default","",1590,800,this,function(p){});
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

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.sta_no_value","text","ds_data","소독번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.cal_date","value","ds_data","소독일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.sta_manager_value","text","ds_data","VIEW_MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.txt_remark","value","ds_data","소독제품");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.txt_remark00","value","ds_data","소독장소");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.txt_remark00_00","value","ds_data","소독차량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.edt_00","value","ds_data","germsajin1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.div_main.form.edt_00_00","value","ds_data","germsajin2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00717_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00717_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00717_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00717_P01
         * 화면명   	: 실내·외 소독일지 출력
         * 화면설명 	: 실내·외 소독일지를 조회, 삽입, 수정, 삭제 하고
        				  리포트를 출력하는 화면
         * 작성일   	: 2022-03-24
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
        	nexacro.getApplication().gv_curWinKey = "DAY00717_P01";

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
        		this.reSearchData = this.ds_data.getColumn(0, "소독일");

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

        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "소독코드")))
        	{
        		this.alert("소독자를 지정하세요 !");
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
        	const inDatasets = "input1=ds_search input2=ds_search";
        	const outDatasets = "ds_list=output1 ds_list2=output2";
        	const argument = "method=getList"
        				   + " sqlId='DAY00717_P01.DAY00717_P01_DS_LIST_S DAY00717_P01.DAY00717_P01_DS_LIST2_S'";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
        	const params = "/DAY00717Controller.do";
        	const inDatasets = "input1=ds_data:U";
        	const outDatasets = "";
        	const argument = "method=save";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 삭제
        this.fn_delete = function()
        {
        	// validation
        	if (!this.fn_delete_pre()) return;

        	const svcId = "delete";
        	const params = "/DAY00717Controller.do";
        	const inDatasets = "input1=ds_data:U";
        	const outDatasets = "";
        	const argument = "method=delete";

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
        			this.div_cont.form.div_right.form.div_main.form.imv_pic1.set_image("");
        			this.div_cont.form.div_right.form.div_main.form.imv_pic2.set_image("");
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

        	const subTitleText = "실내·외 정기소독일지 출력 ( " + dateStr + " )";
        	this.div_cont.form.sta_subTitle.set_text(subTitleText);
        };

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo) {
        	const sFindRow = this.ds_list.findRow("소독일", fv_saveRefNo);
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

        	const managerStr = this.ds_data.getColumn(nRow, "소독자명")
        					 + "/"
        					 + this.ds_data.getColumn(nRow, "소독직종")
        					 + "/"
        					 + this.ds_data.getColumn(nRow, "소독코드");
        	this.ds_data.setColumn(nRow, "VIEW_MANAGER", managerStr);

        	this.fn_getSignImage();

        	this.ds_data.setColumn(nRow, "FILE_GRP_ID_O", this.ds_data.getColumn(nRow, "FILE_GRP_ID"));
        	this.ds_data.setColumn(nRow, "FILE_GRP_ID2_O", this.ds_data.getColumn(nRow, "FILE_GRP_ID2"));

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

        	this.ds_data.setColumn(nRow, "소독일", nDay);

        	this.ds_data.setColumn(nRow, "소독자명", nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name")));
        	this.ds_data.setColumn(nRow, "소독직종", nexacro.getApplication().gds_userInfo.getColumn(0, "c_dutyname"));
        	this.ds_data.setColumn(nRow, "소독코드", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid"));

        	const managerStr = this.ds_data.getColumn(nRow, "소독자명")
        					 + "/"
        					 + this.ds_data.getColumn(nRow, "소독직종")
        					 + "/"
        					 + this.ds_data.getColumn(nRow, "소독코드");
        	this.ds_data.setColumn(nRow, "VIEW_MANAGER", managerStr);

        	this.ds_data.setColumn(nRow, "소독제품", "");
        	this.ds_data.setColumn(nRow, "소독장소", "");
        	this.ds_data.setColumn(nRow, "소독차량", "");

        	// 사진 초기화
        	this.div_cont.form.div_right.form.div_main.form.imv_pic1.set_image("");
        	this.ds_data.setColumn(nRow, "germsajin1", "");
        	this.div_cont.form.div_right.form.div_main.form.imv_pic2.set_image("");
        	this.ds_data.setColumn(nRow, "germsajin2", "");
        };

        //이미지 조회
        this.fn_getSignImage = function ()
        {
        	let imgUrl = "";
        	const fileGrp = this.ds_data.getColumn(0, "FILE_REAL_NAME");
        	const fileGrp2 = this.ds_data.getColumn(0, "FILE_REAL_NAME2");
        	const webHost = nexacro.getEnvironment().services["svcurl"].url;
        	const path = "/FILES";

        	if(!Sct.Util.isEmpty(fileGrp))
        	{
        		imgUrl = webHost + path + fileGrp;
        	}
        	this.div_cont.form.div_right.form.div_main.form.imv_pic1.set_image(imgUrl);

        	imgUrl = "";
        	if (!Sct.Util.isEmpty(fileGrp2))
        	{
        		imgUrl = webHost + path + fileGrp2;
        	}
        	this.div_cont.form.div_right.form.div_main.form.imv_pic2.set_image(imgUrl);


        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 출력
        this.fn_report1 = function()
        {
        	if (this.ds_data.rowcount == 0)
        	{
        		this.alert("출력할 항목을 선택해주세요.");
        		return false;
        	}

        	if (this.ds_data.getRowType(0) == 2)
        	{
        		return false;
        	}

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00717_R01.xfdl";
        	const popupName = "실내·외 소독일지";
        	const fileGrp = this.ds_data.getColumn(0, "FILE_REAL_NAME");
        	const fileGrp2 = this.ds_data.getColumn(0, "FILE_REAL_NAME2");

        	params = {
        		sicode : fv_sicode
        	,	date : this.ds_data.getColumn(0, "소독일")
        	,	sign : this.ds_report.getColumn(0, "SIGN") + ''
        	,	repo1 : this.ds_report.getColumn(0, "REPO1") + ''
        	,	fileGrp : fileGrp
        	,	fileGrp2 : fileGrp2
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 소독일지(월)
        this.fn_report2 = function()
        {
        	if (this.ds_list.rowcount == 0)
        	{
        		this.alert("출력할 내용이 없습니다.");
        		return false;
        	}

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00717_R03.xfdl";
        	const popupName = "월간 실내·외 소독일지";

        	params = {
        		sicode : fv_sicode
        	,	date : this.ds_list.getColumn(0, "소독일")
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
        		,	DATE : this.ds_data.getColumn(0, "소독일")
        	};

        	Sct.popup(this, "emp", 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 소독기록 가져오기
        this.btn_load_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount < 1)
        		return;

        	const param = {
        		SICODE : fv_sicode
        	,	DATE : this.ds_data.getColumn(0, "소독일")
        	};

        	Sct.popup(this, "loadList", 800, 500, "실내·외 정기소독일지", param, "DAY_POP::DAY00717_P02.xfdl", "fn_popCallback");
        };

        // 사진① 첨부
        this.div_cont_div_right_div_main_btn_pic1_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount == 0)
        		return;

        	//fileGroupId 설정
        	this.fileGroupId = Sct.Util.isEmpty(this.ds_data.getColumn(0, "FILE_GRP_ID")) ? "" : this.ds_data.getColumn(0, "FILE_GRP_ID");

        	const param = {
        		folderName:"DAY/DAY00717/P01"
        	,	multiYn : "N"
        	,	extName : "image"
        	};
        	Sct.popup(this, "imgFILEUPLOAD", 326, 226, "", param, "CM_POP::FILEUPLOAD.xfdl", "fn_popCallback");
        };

        // 사진② 첨부
        this.div_cont_div_right_div_main_btn_pic2_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount == 0)
        		return;

        	//fileGroupId 설정
        	this.fileGroupId = Sct.Util.isEmpty(this.ds_data.getColumn(0, "FILE_GRP_ID2")) ? "" : this.ds_data.getColumn(0, "FILE_GRP_ID2");

        	const param = {
        		folderName:"DAY/DAY00717/P02"
        	,	multiYn : "N"
        	,	extName : "image"
        	};
        	Sct.popup(this, "imgFILEUPLOAD2", 326, 226, "", param, "CM_POP::FILEUPLOAD.xfdl", "fn_popCallback");
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
        				const dutyname = objDs.getColumn(0, "담당직종");
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "소독자명", name);
        				this.ds_data.setColumn(0, "소독직종", dutyname);
        				this.ds_data.setColumn(0, "소독코드", staffid);
        				this.ds_data.setColumn(0, "VIEW_MANAGER", name + "/" + dutyname + "/" + staffid);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "소독자명", "");
        				this.ds_data.setColumn(0, "소독직종", "");
        				this.ds_data.setColumn(0, "소독코드", "");
        				this.ds_data.setColumn(0, "VIEW_MANAGER", "");
        			}
        			break;
        		// 소독기록 가져오기
        		case "loadList" :
        			this.ds_data.setColumn(0, "소독제품", objDs.getColumn(0, "소독제품"));
        			this.ds_data.setColumn(0, "소독장소", objDs.getColumn(0, "소독장소"));
        			break;
        		// 사진① 첨부
        		case "imgFILEUPLOAD" :
        			const dataGrpId = this.ds_data.getColumn(0, "FILE_GRP_ID");

        			if (this.ds_data.getColumn(0, "FILE_REAL_NAME") != objDs.getColumn(0, "FILE_REAL_NAME"))
        			{
        				this.ds_data.setColumn(0, "FILE_GRP_ID", objDs.getColumn(0, "FILE_GRP_ID"));
        				this.ds_data.setColumn(0, "FILE_REAL_NAME", objDs.getColumn(0, "FILE_REAL_NAME"));
        				this.ds_data.setColumn(0, "germsajin1", Sct.Util.isEmpty(objDs.getColumn(0, "FILE_NAME")) ? "" : objDs.getColumn(0, "FILE_NAME"));
        				this.fn_getSignImage();
        			}
        			break;
        		// 사진② 첨부
        		case "imgFILEUPLOAD2" :
        			const dataGrpId2 = this.ds_data.getColumn(0, "FILE_GRP_ID2");

        			if (this.ds_data.getColumn(0, "FILE_REAL_NAME2") != objDs.getColumn(0, "FILE_REAL_NAME"))
        			{
        				this.ds_data.setColumn(0, "FILE_GRP_ID2", objDs.getColumn(0, "FILE_GRP_ID"));
        				this.ds_data.setColumn(0, "FILE_REAL_NAME2", objDs.getColumn(0, "FILE_REAL_NAME"));
        				this.ds_data.setColumn(0, "germsajin2", Sct.Util.isEmpty(objDs.getColumn(0, "FILE_NAME")) ? "" : objDs.getColumn(0, "FILE_NAME"));
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

        // 사진① 지움
        this.div_cont_div_right_div_main_btn_pic1_del_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount == 0)
        		return false;

        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "germsajin1")))
        	{
        		return false;
        	}

        	if (!this.confirm("사진①을 삭제하시겠습니까?"))
        		return;

        	this.ds_data.setColumn(0, "FILE_GRP_ID", "");
        	this.ds_data.setColumn(0, "germsajin1", "");
        	this.div_cont.form.div_right.form.div_main.form.imv_pic1.set_image("");

        };

        // 사진② 지움
        this.div_cont_div_right_div_main_btn_pic2_del_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount == 0)
        		return false;

        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "germsajin2")))
        	{
        		return false;
        	}

        	if (!this.confirm("사진②를 삭제하시겠습니까?"))
        		return;

        	this.ds_data.setColumn(0, "FILE_GRP_ID2", "");
        	this.ds_data.setColumn(0, "germsajin2", "");
        	this.div_cont.form.div_right.form.div_main.form.imv_pic2.set_image("");

        };

        // 소독일지(월) 엑셀다운로드
        this.div_func_btn_excel_onclick = function(obj,e)
        {
        	let strFileName= "소독일지";

        	const dateFromCol = this.ds_search.getColumn(0, "DATE_FROM");
        	const yyyyFrom = dateFromCol.getFullYear();
        	const mmFrom = (dateFromCol.getMonth() + 1) + "";
        	const ddFrom = dateFromCol.getDate() + "";
        	const dateToCol = this.ds_search.getColumn(0, "DATE_TO");
        	const yyyyTo = dateToCol.getFullYear();
        	const mmTo = (dateToCol.getMonth() + 1) + "";
        	const ddTo = dateToCol.getDate() + "";

        	const delimiter = "_";

        	const dateFrom = yyyyFrom + mmFrom.padStart(2, "0") + ddFrom.padStart(2, "0");
        	const dateTo = yyyyTo + mmTo.padStart(2, "0") + ddTo.padStart(2, "0");

        	const rtnDate = dateFrom + delimiter + dateTo;

        	strFileName += "_" + rtnDate;

        	Sct.Grid.exportExcel(this, this.div_cont.form.div_left.form.grd_list2, strFileName);
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
            this.div_func.form.btn_reportMon.addEventHandler("onclick",this.fn_report2,this);
            this.div_func.form.btn_excel.addEventHandler("onclick",this.div_func_btn_excel_onclick,this);
            this.div_func.form.btn_load.addEventHandler("onclick",this.btn_load_onclick,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_manager.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_pic1.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_pic1_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_pic1_del.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_pic1_del_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_pic2.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_pic2_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_pic2_del.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_pic2_del_onclick,this);
        };
        this.loadIncludeScript("DAY00717_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
