(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00701_P01");
            this.set_titletext("주야간운영일지 작성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1727,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"일지번호\" type=\"INT\" size=\"256\"/><Column id=\"운영일\" type=\"DATE\" size=\"256\"/><Column id=\"시설장\" type=\"STRING\" size=\"256\"/><Column id=\"일송영\" type=\"STRING\" size=\"256\"/><Column id=\"일송영V\" type=\"STRING\" size=\"256\"/><Column id=\"일남자\" type=\"STRING\" size=\"256\"/><Column id=\"일여자\" type=\"STRING\" size=\"256\"/><Column id=\"일등급\" type=\"STRING\" size=\"256\"/><Column id=\"이등급\" type=\"STRING\" size=\"256\"/><Column id=\"삼등급\" type=\"STRING\" size=\"256\"/><Column id=\"사등급\" type=\"STRING\" size=\"256\"/><Column id=\"오등급\" type=\"STRING\" size=\"256\"/><Column id=\"등외\" type=\"STRING\" size=\"256\"/><Column id=\"외출인원\" type=\"STRING\" size=\"256\"/><Column id=\"외박인원\" type=\"STRING\" size=\"256\"/><Column id=\"진료인원\" type=\"STRING\" size=\"256\"/><Column id=\"목욕인원\" type=\"STRING\" size=\"256\"/><Column id=\"입소인원\" type=\"STRING\" size=\"256\"/><Column id=\"퇴소인원\" type=\"STRING\" size=\"256\"/><Column id=\"연령통계\" type=\"STRING\" size=\"256\"/><Column id=\"연령60\" type=\"STRING\" size=\"256\"/><Column id=\"연령70\" type=\"STRING\" size=\"256\"/><Column id=\"연령80\" type=\"STRING\" size=\"256\"/><Column id=\"연령90\" type=\"STRING\" size=\"256\"/><Column id=\"거주남자\" type=\"STRING\" size=\"256\"/><Column id=\"거주여자\" type=\"STRING\" size=\"256\"/><Column id=\"거주자수\" type=\"STRING\" size=\"256\"/><Column id=\"거주자수V\" type=\"STRING\" size=\"256\"/><Column id=\"직원현황\" type=\"STRING\" size=\"256\"/><Column id=\"대표\" type=\"STRING\" size=\"256\"/><Column id=\"센터장\" type=\"STRING\" size=\"256\"/><Column id=\"사무국장\" type=\"STRING\" size=\"256\"/><Column id=\"사회복지사\" type=\"STRING\" size=\"256\"/><Column id=\"간호사조무사\" type=\"STRING\" size=\"256\"/><Column id=\"물리치료사\" type=\"STRING\" size=\"256\"/><Column id=\"요양보호사\" type=\"STRING\" size=\"256\"/><Column id=\"사무원\" type=\"STRING\" size=\"256\"/><Column id=\"영양사조리원\" type=\"STRING\" size=\"256\"/><Column id=\"관리원\" type=\"STRING\" size=\"256\"/><Column id=\"위생원\" type=\"STRING\" size=\"256\"/><Column id=\"대체복무\" type=\"STRING\" size=\"256\"/><Column id=\"환경원\" type=\"STRING\" size=\"256\"/><Column id=\"근무자\" type=\"STRING\" size=\"256\"/><Column id=\"휴가자\" type=\"STRING\" size=\"256\"/><Column id=\"봉사자\" type=\"STRING\" size=\"256\"/><Column id=\"직원남자\" type=\"STRING\" size=\"256\"/><Column id=\"직원여자\" type=\"STRING\" size=\"256\"/><Column id=\"직원수\" type=\"STRING\" size=\"256\"/><Column id=\"직원수V\" type=\"STRING\" size=\"256\"/><Column id=\"입퇴소내용\" type=\"STRING\" size=\"1000\"/><Column id=\"목욕자내용\" type=\"STRING\" size=\"1000\"/><Column id=\"외박내용\" type=\"STRING\" size=\"2000\"/><Column id=\"업무제목01\" type=\"STRING\" size=\"256\"/><Column id=\"업무제목02\" type=\"STRING\" size=\"256\"/><Column id=\"업무제목03\" type=\"STRING\" size=\"256\"/><Column id=\"업무제목04\" type=\"STRING\" size=\"256\"/><Column id=\"프로그램01\" type=\"STRING\" size=\"256\"/><Column id=\"프로그램02\" type=\"STRING\" size=\"256\"/><Column id=\"프로그램03\" type=\"STRING\" size=\"256\"/><Column id=\"아침식단\" type=\"STRING\" size=\"256\"/><Column id=\"점심식단\" type=\"STRING\" size=\"256\"/><Column id=\"저녁식단\" type=\"STRING\" size=\"256\"/><Column id=\"오전간식\" type=\"STRING\" size=\"256\"/><Column id=\"오후간식\" type=\"STRING\" size=\"256\"/><Column id=\"업무내용01\" type=\"STRING\" size=\"1000\"/><Column id=\"업무내용02\" type=\"STRING\" size=\"1000\"/><Column id=\"업무내용03\" type=\"STRING\" size=\"1000\"/><Column id=\"업무내용04\" type=\"STRING\" size=\"1000\"/><Column id=\"프로내용01\" type=\"STRING\" size=\"1000\"/><Column id=\"프로내용02\" type=\"STRING\" size=\"1000\"/><Column id=\"프로내용03\" type=\"STRING\" size=\"1000\"/><Column id=\"운전원\" type=\"STRING\" size=\"256\"/><Column id=\"인지\" type=\"STRING\" size=\"256\"/><Column id=\"일일알람\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"REPO1\" type=\"STRING\" size=\"256\"/><Column id=\"R1\" type=\"STRING\" size=\"256\"/><Column id=\"R1_1\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp1", this);
            obj._setContents("<ColumnInfo><Column id=\"tot\" type=\"STRING\" size=\"256\"/><Column id=\"totV\" type=\"STRING\" size=\"256\"/><Column id=\"m\" type=\"STRING\" size=\"256\"/><Column id=\"f\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp2", this);
            obj._setContents("<ColumnInfo><Column id=\"현재원\" type=\"STRING\" size=\"256\"/><Column id=\"현재원V\" type=\"STRING\" size=\"256\"/><Column id=\"일등급\" type=\"STRING\" size=\"256\"/><Column id=\"이등급\" type=\"STRING\" size=\"256\"/><Column id=\"삼등급\" type=\"STRING\" size=\"256\"/><Column id=\"사등급\" type=\"STRING\" size=\"256\"/><Column id=\"오등급\" type=\"STRING\" size=\"256\"/><Column id=\"인지\" type=\"STRING\" size=\"256\"/><Column id=\"등외\" type=\"STRING\" size=\"256\"/><Column id=\"입소자\" type=\"STRING\" size=\"256\"/><Column id=\"퇴소자\" type=\"STRING\" size=\"256\"/><Column id=\"연령60대이하\" type=\"STRING\" size=\"256\"/><Column id=\"연령70대\" type=\"STRING\" size=\"256\"/><Column id=\"연령80대\" type=\"STRING\" size=\"256\"/><Column id=\"연령90이상\" type=\"STRING\" size=\"256\"/><Column id=\"남\" type=\"STRING\" size=\"256\"/><Column id=\"여\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp3", this);
            obj._setContents("<ColumnInfo><Column id=\"현인원\" type=\"STRING\" size=\"256\"/><Column id=\"현인원V\" type=\"STRING\" size=\"256\"/><Column id=\"대표\" type=\"STRING\" size=\"256\"/><Column id=\"시설장\" type=\"STRING\" size=\"256\"/><Column id=\"사무국장\" type=\"STRING\" size=\"256\"/><Column id=\"복지사\" type=\"STRING\" size=\"256\"/><Column id=\"간호사\" type=\"STRING\" size=\"256\"/><Column id=\"치료사\" type=\"STRING\" size=\"256\"/><Column id=\"요양사\" type=\"STRING\" size=\"256\"/><Column id=\"사무원\" type=\"STRING\" size=\"256\"/><Column id=\"영양조리\" type=\"STRING\" size=\"256\"/><Column id=\"관리원\" type=\"STRING\" size=\"256\"/><Column id=\"위생원\" type=\"STRING\" size=\"256\"/><Column id=\"보조원\" type=\"STRING\" size=\"256\"/><Column id=\"대체복무\" type=\"STRING\" size=\"256\"/><Column id=\"남\" type=\"STRING\" size=\"256\"/><Column id=\"여\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp4", this);
            obj._setContents("<ColumnInfo><Column id=\"근무\" type=\"STRING\" size=\"256\"/><Column id=\"휴가\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp5", this);
            obj._setContents("<ColumnInfo><Column id=\"p_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp6", this);
            obj._setContents("<ColumnInfo><Column id=\"p_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp7", this);
            obj._setContents("<ColumnInfo><Column id=\"b_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp8", this);
            obj._setContents("<ColumnInfo><Column id=\"mor\" type=\"STRING\" size=\"256\"/><Column id=\"lun\" type=\"STRING\" size=\"256\"/><Column id=\"din\" type=\"STRING\" size=\"256\"/><Column id=\"sam\" type=\"STRING\" size=\"256\"/><Column id=\"spm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0","310","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pre_dt","15","5","80","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("◀ 전날");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_sdate","100","5","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMMddddd");
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_buttonsize("0 0");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_next_dt","215","5","80","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("앞날 ▶");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","div_search:20","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","355","5","65","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("결재란");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5","70","25","10",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_report_body","426","2","320","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_repo1","434","7","100","20",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("운영일지(1)");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_repo2","544","7","100","20",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("운영일지(2)");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","670","5","70","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("출력");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_refresh","0","5","170","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("운영일제공기록 재집계");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_con_search","179","5","133","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("업무내용 조회");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_main","0","40",null,"860","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","746","9","230","26",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("60");
            obj.set_text("주야간 운영일지");
            obj.set_cssclass("lb01");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no","24","14","60","22",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("61");
            obj.set_text("기록번호 : ");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no_value","87","14","60","22",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("62");
            obj.set_text("00000000");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","10","40",null,"2","10",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("63");
            obj.set_background("#000000");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_manager","196","9","80","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_text("시설장");
            obj.set_cssclass("btn_worker");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_manager_value","291","11","180","22",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("64");
            obj.set_text("너싱홈");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","20","50","181","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("65");
            obj.set_text("송영현황");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_1","20","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("66");
            obj.set_text("일송영");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_2","80","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("67");
            obj.set_text("남자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1_3","140","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("68");
            obj.set_text("여자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","20","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","80","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","140","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","200","50","721","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("72");
            obj.set_text("수  급  자  현  황");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_1","200","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("73");
            obj.set_text("현인원");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_2","260","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("74");
            obj.set_text("1등급");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_3","320","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("75");
            obj.set_text("2등급");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","200","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5","260","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6","320","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_4","380","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("79");
            obj.set_text("3등급");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_5","440","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("80");
            obj.set_text("4등급");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_6","500","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("81");
            obj.set_text("5등급");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body7","380","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body8","440","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body9","500","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_7","560","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("85");
            obj.set_text("인지");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_9","740","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("86");
            obj.set_text("입소");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_10","800","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("87");
            obj.set_text("퇴소");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body10","560","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body12","740","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body13","800","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_11","860","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("91");
            obj.set_text("목욕");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body14","860","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","920","50","241","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("93");
            obj.set_text("연 령 별 통 계");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3_1","920","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("94");
            obj.set_text("60-69");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3_2","980","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("95");
            obj.set_text("70-79");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3_3","1040","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("96");
            obj.set_text("80-89");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body15","920","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body16","980","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body17","1040","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3_4","1100","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("100");
            obj.set_text("90이상");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body18","1100","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","1160","50","121","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("102");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4_1","1160","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("103");
            obj.set_text("남");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4_2","1220","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("104");
            obj.set_text("여");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body19","1160","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body20","1220","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5","20","140","901","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("107");
            obj.set_text("직  원  현  황");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5_1","20","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("108");
            obj.set_text("현인원");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5_2","80","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("109");
            obj.set_text("대표");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5_3","140","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("110");
            obj.set_text("시설장");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body21","20","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body22","80","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body23","140","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5_4","200","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("114");
            obj.set_text("사무국장");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5_5","260","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("115");
            obj.set_text("복지사");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5_6","320","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("116");
            obj.set_text("간호사");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body24","200","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("117");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body25","260","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body26","320","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5_7","380","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("120");
            obj.set_text("치료사");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5_8","440","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("121");
            obj.set_text("요양사");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5_9","560","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("122");
            obj.set_text("영양조리");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body27","380","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("123");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body28","440","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("124");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body30","560","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("125");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5_10","620","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("126");
            obj.set_text("관리원");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5_11","680","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("127");
            obj.set_text("위생원");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5_12","740","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("128");
            obj.set_text("환경원");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body31","620","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body32","680","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("130");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body33","740","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5_13","800","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("132");
            obj.set_text("보조원");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body34","800","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("133");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_8","620","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("134");
            obj.set_text("등외");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body11","620","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5_13_00","860","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("136");
            obj.set_text("대체복무");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body35","860","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head6","920","140","241","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("138");
            obj.set_text("근 무 현 황");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head6_1","920","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("139");
            obj.set_text("근무자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head6_2","980","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("140");
            obj.set_text("휴가자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head6_3","1040","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("141");
            obj.set_text("자원봉사");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body36","920","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("142");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body37","980","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("143");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body38","1040","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("144");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head6_4","1100","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("145");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body39","1100","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("146");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head7","1160","140","121","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("147");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head7_1","1160","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("148");
            obj.set_text("남");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head7_2","1220","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("149");
            obj.set_text("여");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body40","1160","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("150");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body41","1220","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("151");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head8","20","240","841","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("152");
            obj.set_text("시  설  업  무");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body42","20","269","421","576",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body43","440","269","421","576",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("154");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body44","860","269","421","576",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("155");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head9","860","240","421","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("156");
            obj.set_text("프  로  그  램");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head10","1285","240",null,"30","20",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("157");
            obj.set_text("■ 외출/진료기록 현황");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_con_title1","27","275","406","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("38");
            obj.set_maxlength("60");
            obj.set_background("#fdfeff");
            this.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_content1","27","304","406","251",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("39");
            obj.set_maxlength("1000");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("fixed");
            obj.set_wordWrap("char");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_con_title3","27","559","406","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("42");
            obj.set_maxlength("60");
            obj.set_background("#fdfeff");
            this.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_content3","27","588","406","251",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("43");
            obj.set_maxlength("1000");
            obj.set_wordWrap("char");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_con_title2","447","275","406","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("40");
            obj.set_maxlength("60");
            obj.set_background("#fdfeff");
            this.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_content2","447","304","406","251",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("41");
            obj.set_maxlength("1000");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            obj.set_wordWrap("char");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_con_title4","447","559","406","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("44");
            obj.set_maxlength("60");
            obj.set_background("#fdfeff");
            this.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_content4","447","588","406","251",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("45");
            obj.set_maxlength("1000");
            obj.set_wordWrap("char");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("fixed");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_con_title5","867","275","406","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("46");
            obj.set_maxlength("60");
            obj.set_background("#fdfeff");
            this.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_content5","867","304","406","154",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("47");
            obj.set_wordWrap("char");
            obj.set_maxlength("1000");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("fixed");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_con_title6","867","463","406","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("48");
            obj.set_maxlength("60");
            obj.set_background("#fdfeff");
            this.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_content6","867","492","406","154",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("49");
            obj.set_wordWrap("char");
            obj.set_maxlength("1000");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_con_title7","867","651","406","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("50");
            obj.set_maxlength("60");
            obj.set_background("#fdfeff");
            this.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_content7","867","680","406","156",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("51");
            obj.set_wordWrap("char");
            obj.set_maxlength("1000");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            this.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_content8","1285","269","420","100",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("52");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            obj.set_wordWrap("char");
            obj.set_maxlength("2000");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head10_00","1285","373","420","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("158");
            obj.set_text("■ 수급자/직원 변동 현황");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_content9","1285","402","420","100",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("53");
            obj.set_maxlength("1000");
            obj.set_wordWrap("char");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("fixed");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head10_00_00","1285","507","420","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("159");
            obj.set_text("■ 금일 목욕자 명단");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_content10","1285","536","420","100",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("54");
            obj.set_maxlength("1000");
            obj.set_wordWrap("char");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head10_00_00_00","1285","640","420","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("160");
            obj.set_text("■ 금일 식단 메뉴");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body45","1285","669","420","176",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("161");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_mor","1293","677","403","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("55");
            obj.set_maxlength("180");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_lun","1293","706","403","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("56");
            obj.set_maxlength("180");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_din","1293","735","403","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("57");
            obj.set_maxlength("180");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_sam","1293","764","403","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("58");
            obj.set_maxlength("100");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_spm","1293","794","403","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("59");
            obj.set_maxlength("100");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00","1302","824","389","20",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("162");
            obj.set_text("# 저장이 안되는 경우 식단메뉴 내용중에 \'?\' 를 지우고 저장하세요");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5_9_00","500","169","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("163");
            obj.set_text("사무원");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body29","500","198","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("164");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in1","29","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("165");
            obj.set_readonly("true");
            obj.set_format("@@@");
            obj.set_limitbymask("both");
            obj.set_color("#ee3a00");
            obj.set_type("string");
            obj.set_maskchar(" ");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in2","88","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in3","148","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in4","208","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("166");
            obj.set_format("@@@");
            obj.set_readonly("true");
            obj.set_limitbymask("both");
            obj.set_color("#ee3a00");
            obj.set_type("string");
            obj.set_maskchar(" ");
            obj.set_displayinvalidtext("invalid value");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in5","268","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in6","328","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in7","388","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("5");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in8","448","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("6");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in9","508","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("7");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in10","568","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("8");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in11","628","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("9");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in13","748","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("10");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in14","808","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("11");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in15","868","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("12");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in16","928","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("13");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in17","988","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("14");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in18","1048","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("15");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in19","1108","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("16");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in20","1168","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("17");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in21","1228","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("18");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in22","28","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("167");
            obj.set_readonly("true");
            obj.set_format("@@@");
            obj.set_limitbymask("both");
            obj.set_color("#ee3a00");
            obj.set_type("string");
            obj.set_maskchar(" ");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in23","88","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("19");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in24","148","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("20");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in25","208","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("21");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in26","268","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("22");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in27","328","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("23");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in28","388","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("24");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in29","448","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("25");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in30","508","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("26");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in31","568","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("27");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in32","628","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("28");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in33","688","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("29");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in34","748","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("30");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in35","808","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("31");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in36","868","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("32");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in37","928","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("33");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in38","988","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("34");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in39","1048","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("35");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in41","1168","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("36");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in42","1228","202","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("37");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2_8_00","680","79","61","30",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("168");
            obj.set_text("외출");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_padding("0px");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body11_00","680","108","61","33",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("169");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_in12","688","112","44","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("170");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1727,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cal_sdate","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_main.form.sta_no_value","text","ds_list","일지번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_main.form.sta_manager_value","text","ds_list","시설장");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_func.form.chk_sign","value","ds_report","SIGN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_func.form.chk_repo1","value","ds_report","R1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_func.form.chk_repo2","value","ds_report","R1_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_main.form.mae_in1","value","ds_list","일송영V");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_main.form.mae_in2","value","ds_list","일남자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_main.form.mae_in3","value","ds_list","일여자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_main.form.mae_in4","value","ds_list","거주자수V");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_main.form.mae_in5","value","ds_list","일등급");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_main.form.mae_in6","value","ds_list","이등급");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_main.form.mae_in7","value","ds_list","삼등급");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_main.form.mae_in8","value","ds_list","사등급");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_main.form.mae_in9","value","ds_list","오등급");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_main.form.mae_in10","value","ds_list","인지");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_main.form.mae_in11","value","ds_list","등외");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_main.form.mae_in13","value","ds_list","입소인원");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_main.form.mae_in14","value","ds_list","퇴소인원");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_main.form.mae_in15","value","ds_list","목욕인원");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_main.form.mae_in16","value","ds_list","연령60");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_main.form.mae_in17","value","ds_list","연령70");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_main.form.mae_in18","value","ds_list","연령80");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_main.form.mae_in19","value","ds_list","연령90");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_main.form.mae_in20","value","ds_list","거주남자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_main.form.mae_in21","value","ds_list","거주여자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_main.form.mae_in22","value","ds_list","직원수V");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_main.form.mae_in23","value","ds_list","대표");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_main.form.mae_in24","value","ds_list","센터장");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_main.form.mae_in25","value","ds_list","사무국장");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_main.form.mae_in26","value","ds_list","사회복지사");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_main.form.mae_in27","value","ds_list","간호사조무사");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_main.form.mae_in28","value","ds_list","물리치료사");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_main.form.mae_in29","value","ds_list","요양보호사");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_main.form.mae_in30","value","ds_list","사무원");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_main.form.mae_in31","value","ds_list","영양사조리원");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_main.form.mae_in32","value","ds_list","관리원");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_main.form.mae_in33","value","ds_list","위생원");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_main.form.mae_in34","value","ds_list","환경원");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_main.form.mae_in35","value","ds_list","운전원");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_main.form.mae_in36","value","ds_list","대체복무");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_main.form.mae_in37","value","ds_list","근무자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_main.form.mae_in38","value","ds_list","휴가자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_main.form.mae_in39","value","ds_list","봉사자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_main.form.mae_in41","value","ds_list","직원남자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_main.form.mae_in42","value","ds_list","직원여자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_main.form.edt_con_title1","value","ds_list","업무제목01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_main.form.txt_content1","value","ds_list","업무내용01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_main.form.edt_con_title2","value","ds_list","업무제목02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_main.form.txt_content2","value","ds_list","업무내용02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_main.form.edt_con_title3","value","ds_list","업무제목03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_main.form.txt_content3","value","ds_list","업무내용03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_main.form.edt_con_title4","value","ds_list","업무제목04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_main.form.txt_content4","value","ds_list","업무내용04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_main.form.edt_con_title5","value","ds_list","프로그램01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_main.form.txt_content5","value","ds_list","프로내용01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_main.form.edt_con_title6","value","ds_list","프로그램02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_main.form.txt_content6","value","ds_list","프로내용02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_main.form.edt_con_title7","value","ds_list","프로그램03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_main.form.txt_content7","value","ds_list","프로내용03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_main.form.txt_content8","value","ds_list","외박내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_main.form.txt_content9","value","ds_list","입퇴소내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_main.form.txt_content10","value","ds_list","목욕자내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_main.form.edt_mor","value","ds_list","아침식단");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_main.form.edt_lun","value","ds_list","점심식단");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_main.form.edt_din","value","ds_list","저녁식단");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_main.form.edt_sam","value","ds_list","오전간식");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_main.form.edt_spm","value","ds_list","오후간식");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_main.form.mae_in12","value","ds_list","외출인원");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00701_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00701_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00701_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00701_P01
         * 화면명   	: 주야간운영일지 작성
         * 화면설명 	: 주야간운영일지를 작성하는 팝업
         * 작성일   	: 2022-03-17
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2022-04-07		조기종		단위테스트 오류 수정
         ***********************************************************************
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
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00701_P01";

        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE", fv_date);

        	// 리포트 출력 초기화
        	this.ds_report.setColumn(0, "REPO1", 1);
        	this.ds_report.setColumn(0, "R1", 1);
        	this.ds_report.setColumn(0, "SIGN", 1);

        	this.fn_search();
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	if (this.ds_list.rowcount == 0)
        	{
        		this.alert("저장할 항목이 없습니다.");
        		return false;
        	}

        	const tot1 = this.ds_list.getColumn(0, "거주자수");
        	const a60 = this.ds_list.getColumn(0, "연령60");
        	const a70 = this.ds_list.getColumn(0, "연령70");
        	const a80 = this.ds_list.getColumn(0, "연령80");
        	const a90 = this.ds_list.getColumn(0, "연령90");
        	const man1 = this.ds_list.getColumn(0, "거주남자");
        	const woman1 = this.ds_list.getColumn(0, "거주여자");
        	const tot2 = this.ds_list.getColumn(0, "직원수");
        	const emp1 = this.ds_list.getColumn(0, "대표");
        	const emp2 = this.ds_list.getColumn(0, "센터장");
        	const emp3 = this.ds_list.getColumn(0, "사무국장");
        	const emp4 = this.ds_list.getColumn(0, "사회복지사");
        	const emp5 = this.ds_list.getColumn(0, "간호사조무사");
        	const emp6 = this.ds_list.getColumn(0, "물리치료사");
        	const emp7 = this.ds_list.getColumn(0, "요양보호사");
        	const emp8 = this.ds_list.getColumn(0, "사무원");
        	const emp9 = this.ds_list.getColumn(0, "영양사조리원");
        	const emp10 = this.ds_list.getColumn(0, "관리원");
        	const emp11 = this.ds_list.getColumn(0, "위생원");
        	const emp12 = this.ds_list.getColumn(0, "대체복무");
        	const emp13 = this.ds_list.getColumn(0, "환경원");
        	const emp14 = this.ds_list.getColumn(0, "운전원");
        	const man2 = this.ds_list.getColumn(0, "직원남자");
        	const woman2 = this.ds_list.getColumn(0, "직원여자");

        	// 직원수 validation
        	if (parseInt(tot2) <= 0)
        	{
        		this.alert("직원 인원 정보가 정확하지 않습니다.");
        		return false;
        	}

        	if (parseInt(tot2) != (parseInt(man2) + parseInt(woman2)))
        	{
        		this.alert("직원 성별 통계가 정확하지 않습니다.");
        		this.div_main.form.mae_in40.setFocus();
        		return false;
        	}

        	// 수급자수 validation
        	if (parseInt(tot1) > 0)
        	{
        		if (parseInt(tot1) != (parseInt(a60) + parseInt(a70) + parseInt(a80) + parseInt(a90)))
        		{
        			this.alert("수급자 연령 통계가 정확하지 않습니다.");
        			return false;
        		}

        		if (parseInt(tot1) != (parseInt(man1) + parseInt(woman1)))
        		{
        			this.alert("수급자 성별 통계가 정확하지 않습니다.");
        			return false;
        		}
        	}

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

        	// 연령통계 문자열 만들기
        	let aStr = "";
        	aStr += a60.padStart(3, ' ');
        	aStr += a70.padStart(3, ' ');
        	aStr += a80.padStart(3, ' ');
        	aStr += a90.padStart(3, ' ');
        	this.ds_list.setColumn(0, "연령통계", aStr);

        	// 직원현황 문자열 만들기
        	let eStr = "";
        	eStr += emp2.padStart(3, ' ');
        	eStr += emp3.padStart(3, ' ');
        	eStr += emp4.padStart(3, ' ');
        	eStr += emp5.padStart(3, ' ');
        	eStr += emp6.padStart(3, ' ');
        	eStr += emp7.padStart(3, ' ');
        	eStr += emp8.padStart(3, ' ');
        	eStr += emp9.padStart(3, ' ');
        	eStr += emp10.padStart(3, ' ');
        	eStr += emp11.padStart(3, ' ');
        	eStr += '000';
        	eStr += emp1.padStart(3, ' ');
        	eStr += emp12.padStart(3, ' ');
        	eStr += emp13.padStart(3, ' ');
        	this.ds_list.setColumn(0, "직원현황", eStr);

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
        				   + "sqlId=DAY00701_P01.DAY00701_P01_DS_LIST_S ";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 운영일제공기록 재집계
        this.fn_search_temp = function()
        {
        	const svcId = "search_temp";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search input2=ds_search input3=ds_search input4=ds_search input5=ds_search input6=ds_search input7=ds_search input8=ds_search";
        	const outDatasets = "ds_temp1=output1 ds_temp2=output2 ds_temp3=output3 ds_temp4=output4 ds_temp5=output5 ds_temp6=output6 ds_temp7=output7 ds_temp8=output8";
        	const argument = "method=getList "
        				   + "sqlId='DAY00701_P01.DAY00701_P01_DS_TEMP1_S DAY00701_P01.DAY00701_P01_DS_TEMP2_S DAY00701_P01.DAY00701_P01_DS_TEMP3_S DAY00701_P01.DAY00701_P01_DS_TEMP4_S "
        				   + "DAY00701_P01.DAY00701_P01_DS_TEMP5_S DAY00701_P01.DAY00701_P01_DS_TEMP6_S DAY00701_P01.DAY00701_P01_DS_TEMP7_S DAY00701_P01.DAY00701_P01_DS_TEMP8_S '";

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

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			// 검색된 데이터가 없을 경우
        			if (this.ds_list.rowcount == 0)
        			{
        				// 삽입 초기화
        				const nRow = this.ds_list.addRow();
        				this.ds_list.setColumn(nRow, "sicode", nexacro.getApplication().gds_userInfo.getColumn(0, "sicode"));
        				this.ds_list.setColumn(nRow, "운영일", this.ds_search.getColumn(0, "DATE"));
        				this.ds_list.setColumn(nRow, "시설장", nexacro.getApplication().gds_userInfo.getColumn(0, "c_name"));
        				for (let i = 1; i <= 42; i++)
        				{
        					if (i == 1 || i == 4 || i == 22)
        						this.div_main.form.components["mae_in" + i].set_value("");
        					else if (i == 40)
        						continue;
        					else
        						this.div_main.form.components["mae_in" + i].set_value(0);
        				}
        				const initArr = ["외박내용", "입퇴소내용", "목욕자내용", "아침식단", "점심식단", "저녁식단", "오전간식", "오후간식"
        								, "업무제목01", "업무내용01", "업무제목02", "업무내용02", "업무제목03", "업무내용03", "업무제목04", "업무내용04"
        								, "프로그램01", "프로내용01", "프로그램02", "프로내용02", "프로그램03", "프로내용03"];
        				for (let i = 0; i < initArr.length; i++)
        				{
        					this.ds_list.setColumn(0, initArr[i], "");
        				}
        			}
        		}
        		else if (strSvcID == "search_temp")
        		{
        			// 재집계 내용 덮어쓰기
        			for (let i = 1; i <= 42; i++)
        			{
        				if (i == 1 || i == 4 || i == 22)
        					this.div_main.form.components["mae_in" + i].set_value("");
        				else if (i == 40)
        					continue;
        				else
        					this.div_main.form.components["mae_in" + i].set_value(0);
        			}
        			const tmpArr = ["외박내용", "입퇴소내용", "목욕자내용", "아침식단", "점심식단", "저녁식단", "오전간식", "오후간식"];
        			for (let i = 0; i < tmpArr.length; i++)
        			{
        				this.ds_list.setColumn(0, tmpArr[i], "");
        			}
        			if (this.ds_temp1.rowcount != 0)
        				this.ds_list.copyRow(0, this.ds_temp1, 0, "일송영=tot,일송영V=totV,일남자=m,일여자=f");
        			if (this.ds_temp2.rowcount != 0)
        			{
        				const str2 = "거주자수=현재원,거주자수V=현재원V,일등급=일등급,이등급=이등급,삼등급=삼등급,사등급=사등급,오등급=오등급,인지=인지,등외=등외"
        						   + ",입소인원=입소자,퇴소인원=퇴소자,연령60=연령60대이하,연령70=연령70대,연령80=연령80대,연령90=연령90이상"
        						   + ",거주남자=남,거주여자=여";
        				this.ds_list.copyRow(0, this.ds_temp2, 0, str2);
        			}
        			if (this.ds_temp3.rowcount != 0)
        			{
        				const str3 = "직원수=현인원,직원수V=현인원V,대표=대표,센터장=시설장,사무국장=사무국장,사회복지사=복지사,간호사조무사=간호사,물리치료사=치료사"
        						   + ",요양보호사=요양사,사무원=사무원,영양사조리원=영양조리,관리원=관리원,위생원=위생원,운전원=보조원,대체복무=대체복무"
        						   + ",직원남자=남,직원여자=여";
        				this.ds_list.copyRow(0, this.ds_temp3, 0, str3);
        			}
        			if (this.ds_temp4.rowcount != 0)
        			{
        				const str4 = "근무자=근무,휴가자=휴가";
        				this.ds_list.copyRow(0, this.ds_temp3, 0, str4);
        			}
        			if (this.ds_temp5.rowcount != 0)
        			{
        				const str5 = "외박내용=p_name";
        				this.ds_list.copyRow(0, this.ds_temp5, 0, str5);
        			}
        			if (this.ds_temp6.rowcount != 0)
        			{
        				const str6 = "입퇴소내용=p_name";
        				this.ds_list.copyRow(0, this.ds_temp6, 0, str6);
        			}
        			if (this.ds_temp7.rowcount != 0)
        			{
        				const str7 = "목욕자내용=b_name";
        				this.ds_list.copyRow(0, this.ds_temp7, 0, str7);
        			}
        			if (this.ds_temp8.rowcount != 0)
        			{
        				const str8 = "아침식단=mor,점심식단=lun,저녁식단=din,오전간식=sam,오후간식=spm";
        				this.ds_list.copyRow(0, this.ds_temp8, 0, str8);
        			}
        		}
        		else if (strSvcID == "save")
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

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 출력
        this.fn_report1 = function()
        {
        	if (this.ds_list.rowcount == 0)
        	{
        		this.alert("출력할 항목을 선택해주세요.");
        		return false;
        	}

        	if (this.ds_list.getRowType(0) == 2)
        	{
        		return false;
        	}

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00701_R01.xfdl";
        	const popupName = "주야간운영일지";

        	params = {
        		sicode : fv_sicode
        	,	date : this.ds_list.getColumn(0, "운영일")
        	,	sign : this.ds_report.getColumn(0, "SIGN") + ''
        	,	repo1 : this.ds_report.getColumn(0, "REPO1") + ''
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 시설장 선택 팝업
        this.btn_manager_onclick = function(obj,e)
        {
        	if (this.ds_list.rowcount < 1)
        		return;

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_list.getColumn(0, "운영일")
        		,	FLAG : "71"
        	};

        	Sct.popup(this, "emp", 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 업무내용 조회 팝업
        this.div_func_btn_con_search_onclick = function(obj,e)
        {
        	if (this.ds_list.rowcount < 1)
        		return;

        	const param = {
        			SICODE : fv_sicode
        	};

        	Sct.popup(this, "con", 450, 400, "", param, "DAY_POP::DAY00701_P02.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "emp" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				this.ds_list.setColumn(0, "시설장", name);
        			}
        			else
        			{
        				this.ds_list.setColumn(0, "시설장", "");
        			}
        			break;
        		case "con" :
        			this.ds_list.setColumn(0, "업무제목01", objDs.getColumn(0, "업무제목01"));
        			this.ds_list.setColumn(0, "업무제목02", objDs.getColumn(0, "업무제목02"));
        			this.ds_list.setColumn(0, "업무제목03", objDs.getColumn(0, "업무제목03"));
        			this.ds_list.setColumn(0, "업무제목04", objDs.getColumn(0, "업무제목04"));
        			this.ds_list.setColumn(0, "업무내용01", objDs.getColumn(0, "업무내용01"));
        			this.ds_list.setColumn(0, "업무내용02", objDs.getColumn(0, "업무내용02"));
        			this.ds_list.setColumn(0, "업무내용03", objDs.getColumn(0, "업무내용03"));
        			this.ds_list.setColumn(0, "업무내용04", objDs.getColumn(0, "업무내용04"));
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 저장 버튼
        this.fn_saveBtn = function(obj,e)
        {
        	this.fn_save();
        };

        // 앞날
        this.div_search_btn_next_dt_onclick = function(obj,e)
        {
        	const searchDt = this.ds_search.getColumn(0, "DATE");
        	searchDt.setDate(searchDt.getDate() + 1);
        	this.ds_search.setColumn(0, "DATE", searchDt);
        	this.fn_search();
        };

        // 전날
        this.div_search_btn_pre_dt_onclick = function(obj,e)
        {
        	const searchDt = this.ds_search.getColumn(0, "DATE");
        	searchDt.setDate(searchDt.getDate() - 1);
        	this.ds_search.setColumn(0, "DATE", searchDt);
        	this.fn_search();
        };

        // 리포트 회의록 체크박스 값 변경 이벤트
        this.chk_repo1_onchanged = function(obj,e)
        {
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

        // 운영일제공기록 재집계 버튼
        this.btn_refresh_onclick = function(obj,e)
        {
        	this.fn_search_temp();
        };

        // 송영현황 관련 항목 체인지 이벤트
        this.div_main_mae_in2_3_onchanged = function(obj,e)
        {
        	const valArr = ["일남자", "일여자"];
        	let totalValue = 0;
        	for (let i = 0; i < valArr.length; i++)
        	{
        		const value = this.ds_list.getColumn(0, valArr[i]);
        		if (Sct.Util.isEmpty(value))
        			totalValue += 0;
        		else
        			totalValue += parseInt(this.ds_list.getColumn(0, valArr[i]));
        	}

        	this.ds_list.setColumn(0, "일송영", totalValue);

        	if (totalValue > 999)
        		this.ds_list.setColumn(0, "일송영V", "***");
        	else if (totalValue == 0)
        		this.ds_list.setColumn(0, "일송영V", "");
        	else
        		this.ds_list.setColumn(0, "일송영", totalValue);
        };

        // 수급자 현황 현인원 관련 항목 체인지 이벤트
        this.div_main_mae_in5_11_onchanged = function(obj,e)
        {
        	const valArr = ["일등급", "이등급", "삼등급", "사등급", "오등급", "인지", "등외"];
        	let totalValue = 0;
        	for (let i = 0; i < valArr.length; i++)
        	{
        		const value = this.ds_list.getColumn(0, valArr[i]);
        		if (Sct.Util.isEmpty(value))
        			totalValue += 0;
        		else
        			totalValue += parseInt(this.ds_list.getColumn(0, valArr[i]));
        	}

        	this.ds_list.setColumn(0, "거주자수", totalValue);

        	if (totalValue > 999)
        		this.ds_list.setColumn(0, "거주자수V", "***");
        	else if (totalValue == 0)
        		this.ds_list.setColumn(0, "거주자수V", "");
        	else
        		this.ds_list.setColumn(0, "거주자수V", totalValue);
        };

        // 직원현황 현인원 관련 항목 체인지 이벤트
        this.div_main_mae_in22_35_onchanged = function(obj,e)
        {
        	const valArr = ["대표", "센터장", "사무국장", "사회복지사", "간호사조무사", "물리치료사", "요양보호사"
        					, "사무원", "영양사조리원", "관리원", "위생원", "대체복무", "환경원", "운전원"];
        	let totalValue = 0;
        	for (let i = 0; i < valArr.length; i++)
        	{
        		const value = this.ds_list.getColumn(0, valArr[i]);
        		if (Sct.Util.isEmpty(value))
        			totalValue += 0;
        		else
        			totalValue += parseInt(this.ds_list.getColumn(0, valArr[i]));
        	}

        	this.ds_list.setColumn(0, "직원수", totalValue);

        	if (totalValue > 999)
        		this.ds_list.setColumn(0, "직원수V", "***");
        	else if (totalValue == 0)
        		this.ds_list.setColumn(0, "직원수V", "");
        	else
        		this.ds_list.setColumn(0, "직원수V", totalValue);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.btn_pre_dt.addEventHandler("onclick",this.div_search_btn_pre_dt_onclick,this);
            this.div_search.form.cal_sdate.addEventHandler("onchanged",this.div_search_cal_sdate_onchanged,this);
            this.div_search.form.btn_next_dt.addEventHandler("onclick",this.div_search_btn_next_dt_onclick,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.chk_repo1.addEventHandler("onchanged",this.chk_repo1_onchanged,this);
            this.div_func.form.chk_repo2.addEventHandler("onchanged",this.chk_repo1_onchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_refresh.addEventHandler("onclick",this.btn_refresh_onclick,this);
            this.div_func.form.btn_con_search.addEventHandler("onclick",this.div_func_btn_con_search_onclick,this);
            this.div_main.form.btn_manager.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_main.form.mae_in2.addEventHandler("onchanged",this.div_main_mae_in2_3_onchanged,this);
            this.div_main.form.mae_in3.addEventHandler("onchanged",this.div_main_mae_in2_3_onchanged,this);
            this.div_main.form.mae_in5.addEventHandler("onchanged",this.div_main_mae_in5_11_onchanged,this);
            this.div_main.form.mae_in6.addEventHandler("onchanged",this.div_main_mae_in5_11_onchanged,this);
            this.div_main.form.mae_in7.addEventHandler("onchanged",this.div_main_mae_in5_11_onchanged,this);
            this.div_main.form.mae_in8.addEventHandler("onchanged",this.div_main_mae_in5_11_onchanged,this);
            this.div_main.form.mae_in9.addEventHandler("onchanged",this.div_main_mae_in5_11_onchanged,this);
            this.div_main.form.mae_in10.addEventHandler("onchanged",this.div_main_mae_in5_11_onchanged,this);
            this.div_main.form.mae_in11.addEventHandler("onchanged",this.div_main_mae_in5_11_onchanged,this);
            this.div_main.form.mae_in23.addEventHandler("onchanged",this.div_main_mae_in22_35_onchanged,this);
            this.div_main.form.mae_in24.addEventHandler("onchanged",this.div_main_mae_in22_35_onchanged,this);
            this.div_main.form.mae_in25.addEventHandler("onchanged",this.div_main_mae_in22_35_onchanged,this);
            this.div_main.form.mae_in26.addEventHandler("onchanged",this.div_main_mae_in22_35_onchanged,this);
            this.div_main.form.mae_in27.addEventHandler("onchanged",this.div_main_mae_in22_35_onchanged,this);
            this.div_main.form.mae_in28.addEventHandler("onchanged",this.div_main_mae_in22_35_onchanged,this);
            this.div_main.form.mae_in29.addEventHandler("onchanged",this.div_main_mae_in22_35_onchanged,this);
            this.div_main.form.mae_in30.addEventHandler("onchanged",this.div_main_mae_in22_35_onchanged,this);
            this.div_main.form.mae_in31.addEventHandler("onchanged",this.div_main_mae_in22_35_onchanged,this);
            this.div_main.form.mae_in32.addEventHandler("onchanged",this.div_main_mae_in22_35_onchanged,this);
            this.div_main.form.mae_in33.addEventHandler("onchanged",this.div_main_mae_in22_35_onchanged,this);
            this.div_main.form.mae_in34.addEventHandler("onchanged",this.div_main_mae_in22_35_onchanged,this);
            this.div_main.form.mae_in35.addEventHandler("onchanged",this.div_main_mae_in22_35_onchanged,this);
            this.div_main.form.mae_in36.addEventHandler("onchanged",this.div_main_mae_in22_35_onchanged,this);
        };
        this.loadIncludeScript("DAY00701_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
