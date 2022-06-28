(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00214_P01");
            this.set_titletext("일별 감염예방일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"예방번호\" type=\"STRING\" size=\"256\"/><Column id=\"예방일\" type=\"DATE\" size=\"256\"/><Column id=\"환기시행\" type=\"STRING\" size=\"256\"/><Column id=\"방역여부\" type=\"STRING\" size=\"256\"/><Column id=\"미비사항1\" type=\"STRING\" size=\"256\"/><Column id=\"조치사항1\" type=\"STRING\" size=\"200\"/><Column id=\"조치여부1\" type=\"STRING\" size=\"256\"/><Column id=\"미비사항2\" type=\"STRING\" size=\"256\"/><Column id=\"조치사항2\" type=\"STRING\" size=\"256\"/><Column id=\"조치여부2\" type=\"STRING\" size=\"256\"/><Column id=\"예방자명\" type=\"STRING\" size=\"256\"/><Column id=\"예방직종\" type=\"STRING\" size=\"256\"/><Column id=\"예방코드\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"예방일\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_func","0","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5","70","25","85",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report",null,"5","150","25","311",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("감염예방일지출력");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"5","70","26","10",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"5","145","25","160",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("감염예방기록조회");
            obj.set_cssclass("btn_search");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_no_value","87","5","60","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("00000000");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_no","24","5","58","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("기록번호 : ");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_cont","10","40",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_main","10","0",null,null,"10","5",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e2e2e2");
            obj.set_text("");
            obj.set_cssclass("chk_s1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_body6_01_00","353","308","295","70",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6_01","58","308","295","70",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","15","193","928","86",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_info1","7","47","182","26",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_SearchTxt");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","15","35","928","30",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_방역여부","19","200","919","70",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("0");
            obj.set_wordWrap("char");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("fixed");
            obj.set_maxlength("300");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_manager","14","4","80","25",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("3");
            obj.set_text("관리자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_manager_value","116","4","198","25",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("4");
            obj.set_text("너싱홈 / 요양보호사 / 20210007");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_예방일자","315","4","55","25",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("5");
            obj.set_text("예방일자");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_환기여부","25","35","174","25",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("6");
            obj.set_text("시설 환기 시행 여부 점검");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_readonly("true");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","15","63","928","85",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_환기시행","19","70","918","70",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("8");
            obj.set_wordWrap("char");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("fixed");
            obj.set_maxlength("500");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","15","148","928","45",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_방역여부","25","147","174","25",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("11");
            obj.set_text("시설 방역 진행 여부 점검");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_readonly("true");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5","15","279","928","30",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_00_00_00","25","280","119","25",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("13");
            obj.set_text("방역 자체 점검");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_readonly("true");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6","15","308","43","70",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head8","58","308","295","30",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("15");
            obj.set_text("방역 미비사항");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head8_00","15","308","43","30",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("16");
            obj.set_text("연번");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head8_02","353","308","295","30",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("18");
            obj.set_text("조치사항");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6_00","15","378","43","130",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("①");
            obj.set_textAlign("center");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6_00_00","15","508","43","130",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("②");
            obj.set_textAlign("center");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6_01_00_00","648","308","295","70",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head8_01","648","308","295","30",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("17");
            obj.set_text("조치여부(일자)");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6_00_01","58","378","295","130",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6_00_01_00","353","378","295","130",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6_00_01_00_00","648","378","295","130",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6_00_01_01","58","508","295","130",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6_00_01_00_01","353","508","295","130",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6_00_01_00_00_00","648","508","295","130",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_미비사항1","63","383","285","120",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("30");
            obj.set_wordWrap("char");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("fixed");
            obj.set_maxlength("500");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_미비사항2","62","513","285","120",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("31");
            obj.set_wordWrap("char");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("fixed");
            obj.set_maxlength("500");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_조치사항1","358","383","285","120",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("32");
            obj.set_wordWrap("char");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("fixed");
            obj.set_maxlength("500");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_조치사항2","358","513","285","120",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("33");
            obj.set_wordWrap("char");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("fixed");
            obj.set_maxlength("500");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_조치여부1","653","383","285","120",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("34");
            obj.set_wordWrap("char");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("fixed");
            obj.set_maxlength("500");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_조치여부2","652","513","285","120",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("35");
            obj.set_wordWrap("char");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("fixed");
            obj.set_maxlength("500");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00","199","37","119","25",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("36");
            obj.set_text("(환기시간, 횟수기재)");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00_00","199","149","175","25",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("37");
            obj.set_text("(진행방식, 진행시간 등 기재)");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","137","282","307","25",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("38");
            obj.set_text("(방역 미비사항 및 감염 가능 경로에 대한 조치기재)");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00_01","569","37","325","25",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("39");
            obj.set_text("(환기시간, 횟수기재) (예시) 총 3회 (10:00, 12:00, 16:00)");
            obj.set_color("purple");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00_01_00","569","149","325","41",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("40");
            obj.set_text("(예시1) 외주(ㅇㅇㅇㅇ환경) 진행, 14:00 ~ 15:00\r\n(예시2) 금주 목욕일 외주방역진행, 생활방역 지속실시");
            obj.set_color("purple");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00_01_00_00","59","338","294","41",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("41");
            obj.set_color("purple");
            obj.set_text("(예시) 식사장소 칸막이 미설치에 따른\r\n        감염 전파 우려");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00_01_00_00_00","356","338","294","41",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("42");
            obj.set_color("purple");
            obj.set_text("(예시) 식사장소 칸막이 설치시까지 식사 중\r\n        입소자간 철저한 거리 확보");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00_01_00_00_00_00","650","338","294","26",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("43");
            obj.set_color("purple");
            obj.set_text("(예시) 22.00.00 칸막이 설치 완료");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_예방일","373","3","110","26",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_tooltiptext("점검일");
            obj.set_buttonsize("0 0");
            this.div_cont.form.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item8","div_func.form.sta_no_value","text","ds_list","예방번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_cont.form.div_main.form.txt_환기시행","value","ds_list","환기시행");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.div_main.form.txt_방역여부","value","ds_list","방역여부");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_cont.form.div_main.form.txt_미비사항1","value","ds_list","미비사항1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_main.form.txt_조치사항1","value","ds_list","조치사항1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_main.form.txt_조치여부1","value","ds_list","조치여부1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_main.form.txt_미비사항2","value","ds_list","미비사항2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_main.form.txt_조치사항2","value","ds_list","조치사항2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_main.form.txt_조치여부2","value","ds_list","조치여부2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_main.form.sta_manager_value","text","ds_list","VIEW_MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_main.form.cal_예방일","value","ds_list","예방일");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00214_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00214_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00214_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00214_P01
         * 화면명   	: 일별 감염예방일지
         * 화면설명 	:
         * 작성일   	: 2022-05-23
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
        const fv_date_final = this.parent.DATE;
        this.fv_currentDS = this.ds_list;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);
        	this.fv_sicode = this.parent.SICODE;
        	this.fv_date = this.parent.DATE;

        	//DAY00214_P02로 올 경우
        	if(!Sct.Util.isEmpty(this.parent.STAFF_ID)){
        		this.fv_staff_id = this.parent.STAFF_ID;
        	}
        	if(!Sct.Util.isEmpty(this.parent.STAFF_NAME)){
        		this.fv_staff_name = this.parent.STAFF_NAME.trim();
        	}
        	if(!Sct.Util.isEmpty(this.parent.STAFF_DUTYNAME)){
        		this.fv_staff_dutyname = this.parent.STAFF_DUTYNAME;
        	}

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00214_P01";

        	this.ds_search.setColumn(0, "sicode", this.fv_sicode);
        	this.ds_search.setColumn(0, "예방일", this.fv_date);

        	this.fn_search();
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

        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	if(this.ds_list.rowcount == 0){
        		this.alert("저장할 항목이 없습니다.");
        		return false;
        	}

        	// 저장 내용 체크
        	if(!Sct.Grid.hasInsertAndUpdateRow(this.ds_list)){
        		this.alert("저장할 내용이 없습니다.");
        		return false;
        	}

        	if(Sct.Util.isEmpty(this.ds_list.getColumn(this.ds_list.rowposition, "sicode"))){
        		this.alert("시설코드를 기재해야 합니다!");
        		return false;
        	}

        	if(Sct.Util.isEmpty(this.ds_list.getColumn(this.ds_list.rowposition, "예방일"))){
        		this.alert("예방일을 기재해야 합니다!");
        		return false;
        	}

        	if(Sct.Util.isEmpty(this.ds_list.getColumn(this.ds_list.rowposition, "예방자명"))){
        		this.alert("예방자명을 기재해야 합니다!");
        		return false;
        	}

        	if(Sct.Util.isEmpty(this.ds_list.getColumn(this.ds_list.rowposition, "예방직종"))){
        		this.alert("예방직종을 기재해야 합니다!");
        		return false;
        	}

        	if(Sct.Util.isEmpty(this.ds_list.getColumn(this.ds_list.rowposition, "예방코드"))){
        		this.alert("예방코드를 기재해야 합니다!");
        		return false;
        	}

        	if(Sct.Util.isEmpty(this.ds_list.getColumn(this.ds_list.rowposition, "환기시행"))){
        		this.alert("시설 환기 시행 여부를 기재해야 합니다!");
        		return false;
        	}else{
        		if(this.ds_list.getColumn(this.ds_list.rowposition, "환기시행").byteLength() < 4){
        		this.alert("시설 환기 시행 여부를 기재해야 합니다!");
        		return false;
        		}
        	}

        	if(Sct.Util.isEmpty(this.ds_list.getColumn(this.ds_list.rowposition, "방역여부"))){
        		this.alert("시설 방역 진행 여부를 기재해야 합니다!");
        		return false;
        	}else{
        		if(this.ds_list.getColumn(this.ds_list.rowposition, "방역여부").byteLength() < 4){
        			this.alert("시설 방역 진행 여부를 기재해야 합니다!");
        			return false;
        		}
        	}

        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function()
        {
        	if(this.ds_list.rowcount == 0 || Sct.Util.isEmpty(this.ds_list.getColumn(this.ds_list.rowposition, "예방번호")))
        	{
        		this.alert("삭제할 항목이 없습니다.");
        		return false;
        	}

        	if(this.ds_list.getRowType(this.ds_list.rowposition) == 2)
        	{
        		return false;
        	}

        	if(!this.confirm("삭제 하시겠습니까?")){
        		return false;
        	}

        	this.ds_list.set_updatecontrol(false);
        	this.ds_list.setRowType(0, Dataset.ROWTYPE_DELETE);
        	this.ds_list.set_updatecontrol(true);

        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00214_P01.DAY00214_P01_DS_LIST_S' ";

        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
         	const inDs = "ds_list";
        	this.fn_save_com(svcId, inDs);
        };

        // 삭제
        this.fn_delete = function()
        {
        	// validation
        	if (!this.fn_delete_pre()) return;

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_list:U";
        	const outDatasets = "";
        	const argument = "method=delete "
        				   + "sqlId=DAY00214_P01.DAY00214_P01_DS_LIST_D ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			//일자로 조회했을 시 데이터가 없을경우 행추가
        			if(this.ds_list.rowcount < 1){

        				const aRow = this.ds_list.addRow();
        				this.ds_list.setColumn(aRow, "sicode", this.fv_sicode);
        				this.ds_list.setColumn(aRow, "예방자명", this.fv_staff_name);
        				this.ds_list.setColumn(aRow, "예방직종", this.fv_staff_dutyname);
        				this.ds_list.setColumn(aRow, "예방코드", this.fv_staff_id);
        				this.ds_list.setColumn(aRow, "예방일", this.fv_date);
        				this.ds_list.setColumn(aRow, "미비사항1", "");
        				this.ds_list.setColumn(aRow, "조치사항1", "");
        				this.ds_list.setColumn(aRow, "조치여부1", "");
        				this.ds_list.setColumn(aRow, "미비사항2", "");
        				this.ds_list.setColumn(aRow, "조치사항2", "");
        				this.ds_list.setColumn(aRow, "조치여부2", "");
        				this.ds_list.setColumn(aRow, "VIEW_MANAGER", this.fv_staff_name + "/" + this.fv_staff_dutyname + "/" + this.fv_staff_id);

        			}else {
        				this.ds_list.setColumn(this.ds_list.rowposition, "VIEW_MANAGER",
        									   this.ds_list.getColumn(this.ds_list.rowposition, "예방자명") + "/" +
        									   this.ds_list.getColumn(this.ds_list.rowposition, "예방직종") + "/" +
        									   this.ds_list.getColumn(this.ds_list.rowposition, "예방코드"));
        			}
        		}
        		else if (strSvcID == "save")
        		{
        			alert("상태기록 저장완료!");
        			this.ds_return.clearData();
        			this.ds_return.addColumn("REFRESH", "STRING");
        			var nRow = this.ds_return.addRow();
        			this.ds_return.setColumn(nRow, "REFRESH", "Y");

        			this.close(this.ds_return.saveXML());
        		}
        		else if (strSvcID == "delete")
        		{
        			alert("상태기록 삭제완료!");
        			this.ds_return.clearData();
        			this.ds_return.addColumn("REFRESH", "STRING");
        			var nRow = this.ds_return.addRow();
        			this.ds_return.setColumn(nRow, "REFRESH", "Y");

        			this.close(this.ds_return.saveXML());
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
        // 출력
        this.fn_report = function()
        {
        	if(Sct.Util.isEmpty(this.ds_list.getColumn(0, "예방번호"))){
        		this.alert("출력할 내용이 없습니다.");
        		return false;
        	}

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00214_R01.xfdl";
        	const popupName = "감염예방일지";

        	params = {
        		sicode : this.ds_list.getColumn(0, "sicode")
        	,   preventionNo : this.ds_list.getColumn(0, "예방번호")
        	,	date : this.ds_list.getColumn(0, "예방일")
        	,   sign : "1"

        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 점검자 선택 팝업
        this.btn_manager_onclick = function(obj,e)
        {
        	if (this.ds_list.rowcount < 1)
        		return;

        	const param = {
        			SICODE : this.fv_sicode
        		,	DATE : this.ds_list.getColumn(0, "예방일")
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
        				const dutyname = objDs.getColumn(0, "담당직종");
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_list.setColumn(0, "소독자명", name);
        				this.ds_list.setColumn(0, "소독직종", dutyname);
        				this.ds_list.setColumn(0, "소독코드", staffid);
        				this.ds_list.setColumn(0, "VIEW_MANAGER", name + "/" + dutyname + "/" + staffid);
        			}
        			else
        			{
        				this.ds_list.setColumn(0, "소독자명", "");
        				this.ds_list.setColumn(0, "소독직종", "");
        				this.ds_list.setColumn(0, "소독코드", "");
        				this.ds_list.setColumn(0, "VIEW_MANAGER", "");
        			}
        			break;
        		case "dayRecordSearch" :
        			this.ds_search.setColumn(0, "sicode",  objDs.getColumn(0, "sicode"));
        			this.ds_search.setColumn(0, "예방일",  objDs.getColumn(0, "예방일"));
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
        this.fn_searchBtn = function(obj,e)
        {
        	this.fn_search();
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


        this.DAY00214_P01_onclose = function(obj,e)
        {
        	this.ds_return.clearData();
        	this.ds_return.addColumn("REFRESH", "STRING");
        	var nRow = this.ds_return.addRow();
        	this.ds_return.setColumn(nRow, "REFRESH", "Y");

        	this.close(this.ds_return.saveXML());
        };

        this.div_func_btn_search_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : this.fv_sicode
        		,	DATE : fv_date_final
        	};

        	Sct.popup(this, "dayRecordSearch", 450, 400, "", param, "DAY_POP::DAY00214_P03.xfdl", "fn_popCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.DAY00214_P01_onclose,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_report.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_func.form.btn_search.addEventHandler("onclick",this.div_func_btn_search_onclick,this);
            this.div_cont.form.div_main.form.btn_manager.addEventHandler("onclick",this.btn_manager_onclick,this);
        };
        this.loadIncludeScript("DAY00214_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
