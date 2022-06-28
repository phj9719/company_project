(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00401");
            this.set_titletext("4-1 이동서비스 송영기록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ord1\" type=\"STRING\" size=\"256\"/><Column id=\"k_number\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"k_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"총시간\" type=\"STRING\" size=\"256\"/><Column id=\"시작코스\" type=\"STRING\" size=\"256\"/><Column id=\"시작차번호\" type=\"STRING\" size=\"256\"/><Column id=\"시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"시작거주지\" type=\"STRING\" size=\"256\"/><Column id=\"오전거리\" type=\"STRING\" size=\"256\"/><Column id=\"오전장소\" type=\"STRING\" size=\"256\"/><Column id=\"시작기사\" type=\"STRING\" size=\"256\"/><Column id=\"시작기코드\" type=\"STRING\" size=\"256\"/><Column id=\"시작동승\" type=\"STRING\" size=\"256\"/><Column id=\"종료코스\" type=\"STRING\" size=\"256\"/><Column id=\"종료차번호\" type=\"STRING\" size=\"256\"/><Column id=\"종료시간\" type=\"STRING\" size=\"256\"/><Column id=\"종료거주지\" type=\"STRING\" size=\"256\"/><Column id=\"오후거리\" type=\"STRING\" size=\"256\"/><Column id=\"오후장소\" type=\"STRING\" size=\"256\"/><Column id=\"종료기사\" type=\"STRING\" size=\"256\"/><Column id=\"종료기코드\" type=\"STRING\" size=\"256\"/><Column id=\"종료동승\" type=\"STRING\" size=\"256\"/><Column id=\"수정\" type=\"STRING\" size=\"256\"/><Column id=\"지움\" type=\"STRING\" size=\"256\"/><Column id=\"단기보호\" type=\"STRING\" size=\"256\"/><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"단기시간\" type=\"STRING\" size=\"256\"/><Column id=\"단기사유\" type=\"STRING\" size=\"256\"/><Column id=\"미입소\" type=\"STRING\" size=\"256\"/><Column id=\"인증비고a\" type=\"STRING\" size=\"256\"/><Column id=\"인증비고b\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"DATE\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_driver", this);
            obj._setContents("<ColumnInfo><Column id=\"시작기사\" type=\"STRING\" size=\"256\"/><Column id=\"시작기코드\" type=\"STRING\" size=\"256\"/><Column id=\"시작동승\" type=\"STRING\" size=\"256\"/><Column id=\"종료기사\" type=\"STRING\" size=\"256\"/><Column id=\"종료기코드\" type=\"STRING\" size=\"256\"/><Column id=\"종료동승\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_holy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"cdyon\" type=\"STRING\" size=\"256\"/><Column id=\"cdwol\" type=\"STRING\" size=\"256\"/><Column id=\"cdday01\" type=\"STRING\" size=\"256\"/><Column id=\"cdcont01\" type=\"STRING\" size=\"256\"/><Column id=\"cdday02\" type=\"STRING\" size=\"256\"/><Column id=\"cdcont02\" type=\"STRING\" size=\"256\"/><Column id=\"cdday03\" type=\"STRING\" size=\"256\"/><Column id=\"cdcont03\" type=\"STRING\" size=\"256\"/><Column id=\"cdday04\" type=\"STRING\" size=\"256\"/><Column id=\"cdcont04\" type=\"STRING\" size=\"256\"/><Column id=\"cdday05\" type=\"STRING\" size=\"256\"/><Column id=\"cdcont05\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_count", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"인원\" type=\"STRING\" size=\"256\"/><Column id=\"출석\" type=\"STRING\" size=\"256\"/><Column id=\"결석\" type=\"STRING\" size=\"256\"/><Column id=\"미이용\" type=\"STRING\" size=\"256\"/><Column id=\"단기\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"DATE\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ord1\" type=\"STRING\" size=\"256\"/><Column id=\"k_number\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"요일총시간\" type=\"STRING\" size=\"256\"/><Column id=\"요일시작차량\" type=\"STRING\" size=\"256\"/><Column id=\"요일시작차량번호\" type=\"STRING\" size=\"256\"/><Column id=\"요일시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"요일시작거주\" type=\"STRING\" size=\"256\"/><Column id=\"요일오전거리\" type=\"STRING\" size=\"256\"/><Column id=\"요일오전장소\" type=\"STRING\" size=\"256\"/><Column id=\"요일시작운전자\" type=\"STRING\" size=\"256\"/><Column id=\"요일시작운전코드\" type=\"STRING\" size=\"256\"/><Column id=\"요일종료차량\" type=\"STRING\" size=\"256\"/><Column id=\"요일종료차량번호\" type=\"STRING\" size=\"256\"/><Column id=\"요일종료시간\" type=\"STRING\" size=\"256\"/><Column id=\"요일종료거주\" type=\"STRING\" size=\"256\"/><Column id=\"요일오후거리\" type=\"STRING\" size=\"256\"/><Column id=\"요일오후장소\" type=\"STRING\" size=\"256\"/><Column id=\"요일종료운전자\" type=\"STRING\" size=\"256\"/><Column id=\"요일종료운전코드\" type=\"STRING\" size=\"256\"/><Column id=\"단기보호\" type=\"STRING\" size=\"256\"/><Column id=\"구분\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ord1\" type=\"STRING\" size=\"256\"/><Column id=\"k_number\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"k_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"총시간\" type=\"STRING\" size=\"256\"/><Column id=\"시작코스\" type=\"STRING\" size=\"256\"/><Column id=\"시작차번호\" type=\"STRING\" size=\"256\"/><Column id=\"시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"시작거주지\" type=\"STRING\" size=\"256\"/><Column id=\"오전거리\" type=\"STRING\" size=\"256\"/><Column id=\"오전장소\" type=\"STRING\" size=\"256\"/><Column id=\"시작기사\" type=\"STRING\" size=\"256\"/><Column id=\"시작기코드\" type=\"STRING\" size=\"256\"/><Column id=\"시작동승\" type=\"STRING\" size=\"256\"/><Column id=\"종료코스\" type=\"STRING\" size=\"256\"/><Column id=\"종료차번호\" type=\"STRING\" size=\"256\"/><Column id=\"종료시간\" type=\"STRING\" size=\"256\"/><Column id=\"종료거주지\" type=\"STRING\" size=\"256\"/><Column id=\"오후거리\" type=\"STRING\" size=\"256\"/><Column id=\"오후장소\" type=\"STRING\" size=\"256\"/><Column id=\"종료기사\" type=\"STRING\" size=\"256\"/><Column id=\"종료기코드\" type=\"STRING\" size=\"256\"/><Column id=\"종료동승\" type=\"STRING\" size=\"256\"/><Column id=\"단기보호\" type=\"STRING\" size=\"256\"/><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"단기시간\" type=\"STRING\" size=\"256\"/><Column id=\"단기사유\" type=\"STRING\" size=\"256\"/><Column id=\"미입소\" type=\"STRING\" size=\"256\"/><Column id=\"인증비고a\" type=\"STRING\" size=\"256\"/><Column id=\"인증비고b\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"rownum\" type=\"STRING\" size=\"256\"/><Column id=\"k_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"k_code\" type=\"STRING\" size=\"256\"/><Column id=\"k_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"시작코스\" type=\"STRING\" size=\"256\"/><Column id=\"시작차번호\" type=\"STRING\" size=\"256\"/><Column id=\"시작거주지\" type=\"STRING\" size=\"256\"/><Column id=\"시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"시작기사\" type=\"STRING\" size=\"256\"/><Column id=\"시작동승\" type=\"STRING\" size=\"256\"/><Column id=\"종료코스\" type=\"STRING\" size=\"256\"/><Column id=\"종료차번호\" type=\"STRING\" size=\"256\"/><Column id=\"종료거주지\" type=\"STRING\" size=\"256\"/><Column id=\"종료시간\" type=\"STRING\" size=\"256\"/><Column id=\"종료기사\" type=\"STRING\" size=\"256\"/><Column id=\"종료동승\" type=\"STRING\" size=\"256\"/><Column id=\"이용구분\" type=\"STRING\" size=\"256\"/><Column id=\"제공시간\" type=\"STRING\" size=\"256\"/><Column id=\"제공분\" type=\"STRING\" size=\"256\"/><Column id=\"k_number\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0","305","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pre_dt","0","3","80","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("◀ 전날");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date","85","3","110","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMMddddd");
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_buttonsize("0 0");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_next_dt","224","3","80","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("앞날 ▶");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","cal_date:-1","cal_date:-25","25","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","div_search:10","0",null,"31","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","295","3","85","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("운전자서명");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"3","70","25","0",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","390","3","130","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("송영일지(일반)");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2","525","3","130","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("송영일지(주소)");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_reportCar","660","3","140","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("차량별송영일지");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report3","805","3","145","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("구·송영일지(전체)");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report4","955","3","120","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_text("수급자출석부");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_excel_down","1080","3","150","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("7");
            obj.set_text("송영일지 다운로드");
            obj.set_cssclass("btn_excel");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_driver_select","1235","3","120","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("8");
            obj.set_text("운전자지정");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_holy","0","0","285","31",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_background("#4388d6");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_holy","0","5","50","25",null,null,null,null,null,null,this.div_func.form.div_holy.form);
            obj.set_taborder("0");
            obj.set_text("공휴일");
            obj.set_textAlign("right");
            obj.set_color("#ffffff");
            this.div_func.form.div_holy.addChild(obj.name, obj);

            obj = new Edit("edt_holy1","54","3","40","25",null,null,null,null,null,null,this.div_func.form.div_holy.form);
            obj.set_taborder("1");
            obj.set_textAlign("right");
            obj.set_color("red");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_func.form.div_holy.addChild(obj.name, obj);

            obj = new Edit("edt_holy2","99","3","40","25",null,null,null,null,null,null,this.div_func.form.div_holy.form);
            obj.set_taborder("2");
            obj.set_textAlign("right");
            obj.set_color("red");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_func.form.div_holy.addChild(obj.name, obj);

            obj = new Edit("edt_holy3","144","3","40","25",null,null,null,null,null,null,this.div_func.form.div_holy.form);
            obj.set_taborder("3");
            obj.set_textAlign("right");
            obj.set_color("red");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_func.form.div_holy.addChild(obj.name, obj);

            obj = new Edit("edt_holy4","189","3","40","25",null,null,null,null,null,null,this.div_func.form.div_holy.form);
            obj.set_taborder("4");
            obj.set_textAlign("right");
            obj.set_color("red");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_func.form.div_holy.addChild(obj.name, obj);

            obj = new Edit("edt_holy5","234","3","40","25",null,null,null,null,null,null,this.div_func.form.div_holy.form);
            obj.set_taborder("5");
            obj.set_textAlign("right");
            obj.set_color("red");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.div_func.form.div_holy.addChild(obj.name, obj);

            obj = new Div("div_func2","0","35",null,"70","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sDriver","0","0","110","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("0");
            obj.set_text("시작운전자");
            obj.set_cssclass("btn_worker");
            this.div_func2.addChild(obj.name, obj);

            obj = new Edit("edt_sDriver","115","0","100","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("1");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_sHelper","220","0","110","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("2");
            obj.set_text("시작동승자");
            obj.set_cssclass("btn_worker");
            this.div_func2.addChild(obj.name, obj);

            obj = new Edit("edt_sHelper","335","0","100","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("3");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_sHelperAll","440","0","130","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("4");
            obj.set_text("시작동승전체적용");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_sLiveY","575","0","130","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("5");
            obj.set_text("시작거주전체\'Y\'");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_eDriver","710","0","110","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("6");
            obj.set_text("종료운전자");
            obj.set_cssclass("btn_worker");
            this.div_func2.addChild(obj.name, obj);

            obj = new Edit("edt_eDriver","825","0","100","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("7");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_eHelper","930","0","110","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("8");
            obj.set_text("종료동승자");
            obj.set_cssclass("btn_worker");
            this.div_func2.addChild(obj.name, obj);

            obj = new Edit("edt_eHelper","1045","0","100","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("9");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_eHelperAll","1150","0","130","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("10");
            obj.set_text("종료동승전체적용");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_eLiveY","1285","0","130","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("11");
            obj.set_text("종료거주전체\'Y\'");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_startErase",null,"0","140","25","145",null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("12");
            obj.set_text("시작송영전체지움");
            obj.set_cssclass("btn_eraser");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_endErase",null,"0","140","25","0",null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("13");
            obj.set_text("종료송영전체지움");
            obj.set_cssclass("btn_eraser");
            this.div_func2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","845","37","230","25",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("14");
            obj.set_text("이동서비스 송영기록");
            obj.set_cssclass("lb01");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_dataLoad2",null,"38","130","25","135",null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("16");
            obj.set_text("전일송영불러오기");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_dataLoad1",null,"38","130","25","270",null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("15");
            obj.set_text("운행일정불러오기");
            this.div_func2.addChild(obj.name, obj);

            obj = new Static("sta_count_body","0","34","425","30",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_func2.addChild(obj.name, obj);

            obj = new Static("sta_total","9","38","35","22",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("18");
            obj.set_text("인원 : ");
            this.div_func2.addChild(obj.name, obj);

            obj = new Static("sta_totalValue","49","38","35","22",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("20");
            obj.set_text("0");
            this.div_func2.addChild(obj.name, obj);

            obj = new Static("sta_attend","89","38","35","22",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("21");
            obj.set_text("출석 : ");
            this.div_func2.addChild(obj.name, obj);

            obj = new Static("sta_attendValue","129","38","35","22",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("22");
            obj.set_text("0");
            obj.set_color("blue");
            this.div_func2.addChild(obj.name, obj);

            obj = new Static("sta_absence","169","38","35","22",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("23");
            obj.set_text("결석 : ");
            this.div_func2.addChild(obj.name, obj);

            obj = new Static("sta_absenceValue","209","38","35","22",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("24");
            obj.set_text("0");
            obj.set_color("red");
            this.div_func2.addChild(obj.name, obj);

            obj = new Static("sta_notin","249","38","50","22",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("25");
            obj.set_text("미이용 : ");
            this.div_func2.addChild(obj.name, obj);

            obj = new Static("sta_notinValue","299","38","35","22",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("26");
            obj.set_text("0");
            obj.set_color("red");
            this.div_func2.addChild(obj.name, obj);

            obj = new Static("sta_short","339","38","35","22",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("27");
            obj.set_text("단기 : ");
            this.div_func2.addChild(obj.name, obj);

            obj = new Static("sta_shortValue","379","38","35","22",null,null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("28");
            obj.set_text("0");
            obj.set_color("red");
            this.div_func2.addChild(obj.name, obj);

            obj = new Calendar("cal_temp_pic",null,"38","28","25","0",null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("29");
            this.div_func2.addChild(obj.name, obj);

            obj = new Button("btn_dataLoad3",null,"38","130","25","0",null,null,null,null,null,this.div_func2.form);
            obj.set_taborder("17");
            obj.set_text("지정일불러오기");
            this.div_func2.addChild(obj.name, obj);

            obj = new Div("div_main","0","110",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","40",null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"현황\"/><Cell col=\"1\" text=\"수급자명\"/><Cell col=\"2\" text=\"성별\"/><Cell col=\"3\" text=\"생활실\"/><Cell col=\"4\" text=\"총시간\"/><Cell col=\"5\" text=\"차순\"/><Cell col=\"6\" text=\"차번호\"/><Cell col=\"7\" text=\"시작시간\"/><Cell col=\"8\" text=\"실거주\"/><Cell col=\"9\" text=\"거리\"/><Cell col=\"10\" text=\"시작운전\"/><Cell col=\"11\" text=\"시작동승\"/><Cell col=\"12\" text=\"차순\"/><Cell col=\"13\" text=\"차번호\"/><Cell col=\"14\" text=\"종료시간\"/><Cell col=\"15\" text=\"실거주\"/><Cell col=\"16\" text=\"거리\"/><Cell col=\"17\" text=\"종료운전\"/><Cell col=\"18\" text=\"종료동승\"/><Cell col=\"19\" text=\"수정\"/><Cell col=\"20\" text=\"지움\"/><Cell col=\"21\" text=\"구분\"/><Cell col=\"22\" text=\"야간시간\"/><Cell col=\"23\" text=\"미이용\"/><Cell col=\"24\" text=\"비고A\"/><Cell col=\"25\" text=\"비고B\"/></Band><Band id=\"body\"><Cell text=\"bind:거주현황\"/><Cell col=\"1\" text=\"bind:m_name\" font=\"normal 700 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"2\" text=\"bind:성별\"/><Cell col=\"3\" text=\"bind:m_roomname\"/><Cell col=\"4\" text=\"bind:총시간\" color=\"blue\"/><Cell col=\"5\" text=\"bind:시작코스\"/><Cell col=\"6\" text=\"bind:시작차번호\"/><Cell col=\"7\" text=\"bind:시작시간\"/><Cell col=\"8\" text=\"bind:시작거주지\"/><Cell col=\"9\" text=\"bind:오전거리\" expr=\"dataset.getColumn(currow, '오전거리') == 0.0 ? '' : dataset.getColumn(currow, '오전거리')\"/><Cell col=\"10\" text=\"bind:시작기사\" cursor=\"pointer\"/><Cell col=\"11\" text=\"bind:시작동승\" cursor=\"pointer\"/><Cell col=\"12\" text=\"bind:종료코스\"/><Cell col=\"13\" text=\"bind:종료차번호\"/><Cell col=\"14\" text=\"bind:종료시간\"/><Cell col=\"15\" text=\"bind:종료거주지\"/><Cell col=\"16\" text=\"bind:오후거리\" expr=\"dataset.getColumn(currow, '오후거리') == 0.0 ? '' : dataset.getColumn(currow, '오후거리')\"/><Cell col=\"17\" text=\"bind:종료기사\" cursor=\"pointer\"/><Cell col=\"18\" text=\"bind:종료동승\" cursor=\"pointer\"/><Cell col=\"19\" expandimage=\"url('theme://images/ico_search.png')\" expandshow=\"show\" expandsize=\"50\" text=\"bind:수정\"/><Cell col=\"20\" expandchar=\"지움\" expandsize=\"50\" expandshow=\"show\" text=\"bind:지움\"/><Cell col=\"21\" text=\"bind:구분\"/><Cell col=\"22\" text=\"bind:단기시간\"/><Cell col=\"23\" text=\"bind:미입소\" cursor=\"pointer\"/><Cell col=\"24\" text=\"bind:인증비고a\" edittype=\"text\"/><Cell col=\"25\" text=\"bind:인증비고b\" edittype=\"text\"/></Band></Format></Formats>");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00","702","654","155","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_text("▲ 운전자 변경 \'더블클릭\'");
            obj.set_color("red");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_00_00","862","654","155","25",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_text("▲ 동승자 변경 \'더블클릭\'");
            obj.set_color("red");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_excel","-693","0","683","324",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_excel");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"연번\"/><Cell col=\"1\" text=\"k_nalja\"/><Cell col=\"2\" text=\"수급코드\"/><Cell col=\"3\" text=\"수급자명\"/><Cell col=\"4\" text=\"인정번호\"/><Cell col=\"5\" text=\"시작코스\"/><Cell col=\"6\" text=\"시작차번호\"/><Cell col=\"7\" text=\"시작거주지\"/><Cell col=\"8\" text=\"시작시간\"/><Cell col=\"9\" text=\"시작기사\"/><Cell col=\"10\" text=\"시작동승\"/><Cell col=\"11\" text=\"종료코스\"/><Cell col=\"12\" text=\"종료차번호\"/><Cell col=\"13\" text=\"종료거주지\"/><Cell col=\"14\" text=\"종료시간\"/><Cell col=\"15\" text=\"종료기사\"/><Cell col=\"16\" text=\"종료동승\"/><Cell col=\"17\" text=\"이용구분\"/><Cell col=\"18\" text=\"제공시간\"/><Cell col=\"19\" text=\"총제공분\"/><Cell col=\"20\" text=\"기록번호\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:k_nalja\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:k_code\"/><Cell col=\"3\" text=\"bind:k_name\"/><Cell col=\"4\" text=\"bind:m_regist\"/><Cell col=\"5\" text=\"bind:시작코스\"/><Cell col=\"6\" text=\"bind:시작차번호\"/><Cell col=\"7\" text=\"bind:시작거주지\"/><Cell col=\"8\" text=\"bind:시작시간\"/><Cell col=\"9\" text=\"bind:시작기사\"/><Cell col=\"10\" text=\"bind:시작동승\"/><Cell col=\"11\" text=\"bind:종료코스\"/><Cell col=\"12\" text=\"bind:종료차번호\"/><Cell col=\"13\" text=\"bind:종료거주지\"/><Cell col=\"14\" text=\"bind:종료시간\"/><Cell col=\"15\" text=\"bind:종료기사\"/><Cell col=\"16\" text=\"bind:종료동승\"/><Cell col=\"17\" text=\"bind:이용구분\"/><Cell col=\"18\" text=\"bind:제공시간\"/><Cell col=\"19\" text=\"bind:제공분\"/><Cell col=\"20\" text=\"bind:k_number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_func.form.chk_sign","value","ds_report","SIGN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_date_pic","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_func2.form.edt_sDriver","value","ds_driver","시작기사");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_func2.form.edt_sHelper","value","ds_driver","시작동승");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_func2.form.edt_eDriver","value","ds_driver","종료기사");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_func2.form.edt_eHelper","value","ds_driver","종료동승");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_func.form.div_holy.form.edt_holy1","value","ds_holy","cdday01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_func.form.div_holy.form.edt_holy2","value","ds_holy","cdday02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_func.form.div_holy.form.edt_holy3","value","ds_holy","cdday03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_func.form.div_holy.form.edt_holy4","value","ds_holy","cdday04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_func.form.div_holy.form.edt_holy5","value","ds_holy","cdday05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_func2.form.sta_totalValue","text","ds_count","인원");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_func2.form.sta_attendValue","text","ds_count","출석");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_func2.form.sta_absenceValue","text","ds_count","결석");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_func2.form.sta_notinValue","text","ds_count","미이용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_func2.form.sta_shortValue","text","ds_count","단기");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00401.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00401.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00401.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00401
         * 화면명   	: 이동서비스 송영기록
         * 화면설명 	: 송영기록을 관리하는 화면
         * 작성일   	: 2022-04-26
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용

         ***********************************************************************
         * 비고 : 1. 마이너스 좌표계에 엑셀 다운로드용 그리드 배치중
        		  2. 지정일 불러오기 버튼에 calendar 컴포넌트가 겹쳐져있음
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

        	const date = new Date();
        	const year = date.getFullYear();
        	const month = date.getMonth() + 1;

        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE", Sct.Util.getToday());
        	this.ds_search.setColumn(0, "YEAR", year);
        	this.ds_search.setColumn(0, "MONTH", month);

        	// 리포트 출력 초기화
        	this.ds_report.setColumn(0, "SIGN", 1);

        	this.fn_search();
        };

        // 그리드 css 적용
        this.initGrid = function(grid)
        {
        	const startTimeIdx = grid.getBindCellIndex("body", "시작시간");
        	const endTimeIdx = grid.getBindCellIndex("body", "종료시간");
        	// 미입소일 경우 배경 변경
        	for (let i = 2; i < grid.getCellCount("body"); i++)
        	{
        		if (i == startTimeIdx || i == endTimeIdx)
        		{
        			const timeCss = "expr:nexacro.trim(dataset.getColumn(currow, '시작시간')) != '' ? 'CellBLightSky' : ''";
        			grid.setCellProperty("body", i, "cssclass", timeCss);
        			continue;
        		}

        		const notCss = "expr:dataset.getColumn(currow, '미입소') != undefined ? "
        					 + "(dataset.getColumn(currow, '미입소').substr(0, 1) > 0 ? 'CellBNotIn' : '') "
        					 + ": ''";
        		grid.setCellProperty("body", i, "cssclass", notCss);
        	}

        	// 구분 값에 따라 색변경
        	const gubunIdx = grid.getBindCellIndex("body", "구분");
        	const gubunCss = "expr:dataset.getColumn(currow, '미입소') != undefined ? (dataset.getColumn(currow, '미입소').substr(0, 1) > 0 ? "
        				   + "(dataset.getColumn(currow, '단기보호') == '1' ? 'CellBNotInBlue' : 'CellBNotInRed') "
        				   + ": dataset.getColumn(currow, '단기보호') == '1' ? 'BlueFontCell' : 'RedFontCell') "
        				   + ": dataset.getColumn(currow, '단기보호') == '1' ? 'BlueFontCell' : 'RedFontCell'";
        	grid.setCellProperty("body", gubunIdx, "cssclass", gubunCss);

        	// 성별에 따라 이름 배경색 변경
        	const nameIdx = grid.getBindCellIndex("body", "m_name");
        	const nameCss = "expr:dataset.getColumn(currow, '성별') == '남' ? 'cellBMan' : 'cellBWoman'";
        	grid.setCellProperty("body", nameIdx, "cssclass", nameCss);
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

        	for (let i = 0; i < this.ds_list.rowcount; i++)
        	{
        		//trace("rowType : " + this.ds_list.getRowType(i));
        		const number = this.ds_list.getColumn(i, "k_number");
        		if (this.ds_list.getColumn(i, "미입소") != undefined)
        		{
        			if (this.ds_list.getColumn(i, "미입소").substr(0, 1) > 0)
        			{
        				if (Sct.Util.isEmpty(number))
        				{
        					this.ds_list.setColumn(i, "k_nalja", this.ds_search.getColumn(0, "DATE"));
        				}
        				continue;
        			}
        		}

        		const startGubun = this.ds_list.getColumn(i, "시작코스");
        		const startTime = this.ds_list.getColumn(i, "시작시간");
        		const endGubun = this.ds_list.getColumn(i, "종료코스");
        		const endTime = this.ds_list.getColumn(i, "종료시간");

        		// 시작시간이 입력된 경우 (00:00이 아닌경우)
        		if (!Sct.Util.isEmpty(startTime.trim()))
        		{
        			// 시작코스가 없는 경우
        			if (Sct.Util.isEmpty(startGubun))
        			{
        				//trace("시작시간이 있으나 시작코스가 없는 행 : " + i);
        				this.alert("시작코스 운행코스 표시가 정확하지 않은 항목이 있습니다.");
        				return false;
        			}
        		}

        		// 종료시간이 입력된 경우 (00:00이 아닌경우)
        		if (!Sct.Util.isEmpty(endTime))
        		{
        			// 종료코스가 없는 경우
        			if (Sct.Util.isEmpty(endGubun))
        			{
        				this.alert("종료코스 운행코스 표시가 정확하지 않은 항목이 있습니다.");
        				return false;
        			}
        		}

        		if (Sct.Util.isEmpty(number))
        		{
        			this.ds_list.setColumn(i, "k_nalja", this.ds_search.getColumn(0, "DATE"));
        		}
        	}

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

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
        	const inDatasets = "input1=ds_search input2=ds_search input3=ds_search";
        	const outDatasets = "ds_list=output1 ds_holy=output2 ds_count=output3";
        	const argument = "method=getList"
        				   + " sqlId='DAY00401.DAY00401_DS_LIST_S DAY00401.DAY00401_DS_HOLY_S DAY00401.DAY00401_DS_COUNT_S'";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 운행일정불러오기
        this.fn_search_temp = function()
        {
        	const svcId = "search_temp";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_temp_search";
        	const outDatasets = "ds_temp=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00401.DAY00401_DS_TEMP_S";

        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 전일송영, 지정일 불러오기
        this.fn_search_temp2 = function()
        {
        	const svcId = "search_temp2";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_temp_search";
        	const outDatasets = "ds_temp2=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00401.DAY00401_DS_LIST_S";

        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 엑셀 내용 조회
        this.fn_excel_search = function()
        {
        	const svcId = "excel_search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_excel=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00401.DAY00401_DS_EXCEL_S";

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
        			if (this.ds_count.rowcount > 0)
        			{
        				if (this.ds_count.getColumn(0, "인원") == "0")
        					this.ds_count.setColumn(0, "인원", "");
        				if (this.ds_count.getColumn(0, "출석") == "0")
        					this.ds_count.setColumn(0, "출석", "");
        				if (this.ds_count.getColumn(0, "결석") == "0")
        					this.ds_count.setColumn(0, "결석", "");
        				if (this.ds_count.getColumn(0, "미이용") == "0")
        					this.ds_count.setColumn(0, "미이용", "");
        				if (this.ds_count.getColumn(0, "단기") == "0")
        					this.ds_count.setColumn(0, "단기", "");
        			}

        			this.ds_list.set_updatecontrol(false);
        			this.ds_list.set_enableevent(false);
        			for (let i = 0; i < this.ds_list.rowcount; i++)
        			{
        				const number = this.ds_list.getColumn(i, "k_number");
        				if (Sct.Util.isEmpty(number))
        				{
        					this.ds_list.setRowType(i, Dataset.ROWTYPE_INSERT);
        				}
        			}
        			this.ds_list.set_enableevent(true);
        			this.ds_list.set_updatecontrol(true);

        			this.initGrid(this.div_main.form.grd_list);
        		}
        		else if (strSvcID == "search_temp")
        		{
        			const tempStr = "총시간=요일총시간,시작코스=요일시작차량,시작차번호=요일시작차량번호,시작시간=요일시작시간,시작거주지=요일시작거주"
        						  + ",오전거리=요일오전거리,시작기사=요일시작운전자,시작기코드=요일시작운전코드,종료코스=요일종료차량,종료차번호=요일종료차량번호"
        						  + ",종료시간=요일종료시간,종료거주지=요일종료거주,오후거리=요일오후거리,종료기사=요일종료운전자,종료기코드=요일종료운전코드";
        			if (this.ds_temp.rowcount > 0)
        			{
        				this.ds_list.set_enableevent(false);
        				for (let i = 0; i < this.ds_list.rowcount; i++)
        				{
        					if (this.ds_list.getColumn(i, "미입소") != undefined)
        					{
        						if (this.ds_list.getColumn(i, "미입소").substr(0, 1) > 0)
        							continue;
        					}

        					this.ds_list.copyRow(i, this.ds_temp, i, tempStr);
        				}
        				this.ds_list.set_enableevent(true);
        			}
        		}
        		else if (strSvcID == "search_temp2")
        		{
        			const tempStr2 = "총시간=총시간,시작코스=시작코스,시작차번호=시작차번호,시작시간=시작시간,시작거주지=시작거주지,오전거리=오전거리"
        						   + ",시작기사=시작기사,시작기코드=시작기코드,종료코스=종료코스,종료차번호=종료차번호,종료시간=종료시간,종료거주지=종료거주지"
        						   + ",오후거리=오후거리,종료기사=종료기사,종료기코드=종료기코드";
        			if (this.ds_temp2.rowcount > 0)
        			{
        				this.ds_list.set_enableevent(false);
        				for (let i = 0; i < this.ds_temp2.rowcount; i++)
        				{
        					const code = this.ds_temp2.getColumn(i, "m_code");
        					const fRow = this.ds_list.findRow("m_code", code);

        					if (fRow < 0) continue;

        					if (this.ds_list.getColumn(fRow, "미입소") != undefined)
        					{
        						if (this.ds_list.getColumn(fRow, "미입소").substr(0, 1) > 0)
        							continue;
        					}

        					this.ds_list.copyRow(fRow, this.ds_temp2, i, tempStr2);
        				}
        				this.ds_list.set_enableevent(true);
        			}
        		}
        		else if (strSvcID == "excel_search")
        		{
        			let strFileName = "송영일지_";
        			const date = this.ds_search.getColumn(0, "DATE");
        			const fDate = date.getFullYear() + ((date.getMonth() + 1) + "").padStart(2, '0') + (date.getDate() + "").padStart(2, '0');
        			strFileName += fDate;
        			Sct.Grid.exportExcel(this, this.grd_excel, strFileName);
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
        /* 함수 명 : fn_timeDiff
         * 시간 차이 구하기
         * 입력 : 	time1	비교 시작일자 ex)19901010115000
         *			time2	비교 종료일자
         * 반환 :  HH:MM 형식의 시간 차이
         */
        this.fn_timeDiff = function(time1, time2) {
        	// 문자열 날짜를 Date타입으로 변환
        	var date1 = Sct.Util.stringToDate(time1);
        	var date2 = Sct.Util.stringToDate(time2);

        	// 두 날짜의 간격을 구함(초단위)
        	var diff = (date2 - date1) / 1000;

        	// 간격 값을 시간 추출
        	var hour = diff / 3600;
        	// 시간의 자리수가 1자리일때 앞에 0 붙이기
        	if(0 <= hour && hour < 10) hour = "0" + Math.floor(hour);
        	// 시간이 음수일때 000으로
        	else if(hour < 0) hour = "00";
        	else hour = Math.floor(hour);

        	// 간격 값에서 분 추출
        	var minute = (diff % 3600) / 60;
        	if(0 <= minute && minute < 10) minute = "0" + Math.floor(minute);
        	else if(minute < 0) minute = "00";
        	else minute = Math.floor(minute);

        	// 간격 값에서 초 추출
        	var second = (diff % 3600) % 60;
        	if(0 <= second && second < 10) second = "0" + Math.floor(second);
        	else if(second < 0) second = "00";
        	else second = Math.floor(second);

        	// 간격 값이 음수일때
        	if(diff <= 0) diffTime = "00:00";

        	// HHMM 형식으로 붙임
        	var diffTime = hour + ":" + minute;

        	return diffTime;
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 출력
        this.fn_report = function(obj,e)
        {
        	if (obj.id != "btn_report4")
        	{
        		let count = 0;
        		for (let i = 0; i < this.ds_list.rowcount; i++)
        		{
        			const notIn = this.ds_list.getColumn(i, "미입소");
        			if (notIn != undefined)
        			{
        				if (notIn.substr(0, 1) > 0)
        					continue;
        			}

        			const startGubun = this.ds_list.getColumn(i, "시작코스");
        			const endGubun = this.ds_list.getColumn(i, "종료코스");
        			if (startGubun != undefined)
        			{
        				if (startGubun != '')
        					count++;
        			}
        			else if (endGubun != undefined)
        			{
        				if (endGubun != '')
        					count++;
        			}
        		}
        		//trace(count);
        		if (count < 1)
        		{
        			this.alert("이동서비스 기록을 조회할 수 없습니다.");
        			return;
        		}
        	}

        	let popupUrl = "";
        	let popupName = "";
        	switch(obj.id)
        	{
        		case "btn_report1" :
        			popupUrl = "DAY_POP::DAY00401_R01.xfdl";
        			popupName = "송영일지(일반)";
        			break;
        		case "btn_report2" :
        			popupUrl = "DAY_POP::DAY00401_R02.xfdl";
        			popupName = "송영일지(주소)";
        			break;
        		case "btn_report3" :
        			popupUrl = "DAY_POP::DAY00401_R05.xfdl";
        			popupName = "구·송영일지(전체)";
        			break;
        		case "btn_report4" :
        			popupUrl = "DAY_POP::DAY00401_R06.xfdl";
        			popupName = "수급자출석부";
        			break;
        		default:
        	}

        	let params;
        	const dicompNm = " ";

        	params = {
        		sicode : fv_sicode
        	,	date : this.ds_search.getColumn(0, "DATE")
        	,	dsign : this.ds_report.getColumn(0, "SIGN") + ''
        	,	flag : "1"
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 운전자 선택 팝업
        this.btn_driver_select = function(obj,e)
        {
        	let svcId = "";

        	switch(obj.id) {
        		case "btn_sDriver" :	// 시작운전자
        			svcId = "sDriver";
        			break;
        		case "btn_sHelper" :	// 시작동승자
        			svcId = "sHelper";
        			break;
        		case "btn_eDriver" :	// 종료운전자
        			svcId = "eDriver";
        			break;
        		case "btn_eHelper" :	// 종료동승자
        			svcId = "eHelper";
        			break;
        		default:
        	}

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_search.getColumn(0, "DATE")
        	};

        	Sct.popup(this, svcId, 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 차량별송영일지 버튼
        this.div_func_btn_reportCar_onclick = function(obj,e)
        {
        	let count;
        	count = this.ds_list.getCaseCount("시작코스 != undefined && 시작코스 != ''");
        	if (count == 0)
        	{
        		count = this.ds_list.getCaseCount("종료코스 != undefined && 종료코스 != ''")
        		if (count == 0)
        			count = 0;
        	}

        	if (count == 0)
        	{
        		this.alert("이동서비스 기록을 조회할 수 없습니다.");
        		return;
        	}

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_search.getColumn(0, "DATE")
        	};

        	Sct.popup(this, "car", 450, 400, "차량별 송영일지 출력", param, "DAY_POP::DAY00401_P03.xfdl", "fn_popCallback");
        };

        // 운전자지정 버튼
        this.div_func_btn_driver_select_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_search.getColumn(0, "DATE")
        	};

        	Sct.popup(this, "driverSelect", 450, 400, "차량별 송영일지 출력", param, "DAY_POP::DAY00401_P04.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if (popid != "notIn" && popid != "driverSelect")
        	{
        		if(Sct.Util.isEmpty(strDs)) return;
        	}
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "sDriver" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_driver.setColumn(0, "시작기사", nexacro.trim(objDs.getColumn(0, "c_name")));
        				this.ds_driver.setColumn(0, "시작기코드", objDs.getColumn(0, "c_staffid"));
        			}
        			else
        			{
        				this.ds_driver.setColumn(0, "시작기사", "");
        				this.ds_driver.setColumn(0, "시작기코드", "");
        			}
        			break;
        		case "sHelper" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_driver.setColumn(0, "시작동승", nexacro.trim(objDs.getColumn(0, "c_name")));
        			}
        			else
        			{
        				this.ds_driver.setColumn(0, "시작동승", "");
        			}
        			break;
        		case "eDriver" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_driver.setColumn(0, "종료기사", nexacro.trim(objDs.getColumn(0, "c_name")));
        				this.ds_driver.setColumn(0, "종료기코드", objDs.getColumn(0, "c_staffid"));
        			}
        			else
        			{
        				this.ds_driver.setColumn(0, "종료기사", "");
        				this.ds_driver.setColumn(0, "종료기코드", "");
        			}
        			break;
        		case "eHelper" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				this.ds_driver.setColumn(0, "종료동승", nexacro.trim(objDs.getColumn(0, "c_name")));
        			}
        			else
        			{
        				this.ds_driver.setColumn(0, "종료동승", "");
        			}
        			break;
        		case "update" :
        			const sno = objDs.getColumn(0, "시작차번호");
        			var stime = objDs.getColumn(0, "시작시간");
        			const eno = objDs.getColumn(0, "종료차번호");
        			var etime = objDs.getColumn(0, "종료시간");
        			var ntime = objDs.getColumn(0, "단기시간");
        			//trace("sno : " + sno);
        			//trace("eno : " + eno);

        			const stimeArr = stime.split(":");
        			const sFullTime = Sct.Util.getToday() + stimeArr[0] + stimeArr[1] + "00";
        			//trace("sFullTime : " + sFullTime);
        			const etimeArr = etime.split(":");
        			const eFullTime = Sct.Util.getToday() + etimeArr[0] + etimeArr[1] + "00";
        			//trace("eFullTime : " + eFullTime);
        			const diffTime = this.fn_timeDiff(sFullTime, eFullTime);
        			//trace("diffTime : " + diffTime);

        			if (diffTime == "00:00")
        				this.ds_list.setColumn(this.ds_list.rowposition, "총시간", "");
        			else
        				this.ds_list.setColumn(this.ds_list.rowposition, "총시간", diffTime);

        			this.ds_list.setColumn(this.ds_list.rowposition, "시작코스", objDs.getColumn(0, "시작코스"));
        			this.ds_list.setColumn(this.ds_list.rowposition, "시작차번호", sno);

        			if (stime == "00:00")
        				stime = "";
        			this.ds_list.setColumn(this.ds_list.rowposition, "시작시간", stime);

        			var slive = "";
        			if (sno != undefined)
        			{
        				if (sno.indexOf("미차량") > -1)
        					slive = "N";
        				else
        					slive = objDs.getColumn(0, "시작거주지");
        			}
        			this.ds_list.setColumn(this.ds_list.rowposition, "시작거주지", slive);

        			this.ds_list.setColumn(this.ds_list.rowposition, "시작기사", objDs.getColumn(0, "시작기사"));
        			this.ds_list.setColumn(this.ds_list.rowposition, "시작기코드", objDs.getColumn(0, "시작기코드"));
        			this.ds_list.setColumn(this.ds_list.rowposition, "시작동승", objDs.getColumn(0, "시작동승"));
        			this.ds_list.setColumn(this.ds_list.rowposition, "오전거리", objDs.getColumn(0, "오전거리"));
        			this.ds_list.setColumn(this.ds_list.rowposition, "오전장소", objDs.getColumn(0, "오전장소"));
        			this.ds_list.setColumn(this.ds_list.rowposition, "종료코스", objDs.getColumn(0, "종료코스"));
        			this.ds_list.setColumn(this.ds_list.rowposition, "종료차번호", eno);

        			if (etime == "00:00")
        				etime = "";
        			this.ds_list.setColumn(this.ds_list.rowposition, "종료시간", etime);

        			var elive = "";
        			if (eno != undefined)
        			{
        				if (eno.indexOf("미차량") > -1)
        					elive = "N";
        				else
        					elive = objDs.getColumn(0, "종료거주지");
        			}
        			this.ds_list.setColumn(this.ds_list.rowposition, "종료거주지", elive);

        			this.ds_list.setColumn(this.ds_list.rowposition, "종료기사", objDs.getColumn(0, "종료기사"));
        			this.ds_list.setColumn(this.ds_list.rowposition, "종료기코드", objDs.getColumn(0, "종료기코드"));
        			this.ds_list.setColumn(this.ds_list.rowposition, "종료동승", objDs.getColumn(0, "종료동승"));
        			this.ds_list.setColumn(this.ds_list.rowposition, "오후거리", objDs.getColumn(0, "오후거리"));
        			this.ds_list.setColumn(this.ds_list.rowposition, "오후장소", objDs.getColumn(0, "오후장소"));

        			if (ntime == "00:00-00:00")
        				ntime = "";
        			this.ds_list.setColumn(this.ds_list.rowposition, "단기시간", ntime);
        			this.ds_list.setColumn(this.ds_list.rowposition, "단기사유", objDs.getColumn(0, "단기사유"));
        			break;
        		case "notIn" :
        		case "driverSelect" :
        			this.fn_search();
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
        	this.ds_search.setColumn(0, "YEAR", searchDt.getFullYear());
        	this.ds_search.setColumn(0, "MONTH", searchDt.getMonth() + 1);
        	this.fn_search();
        };

        // 전날
        this.div_search_btn_pre_dt_onclick = function(obj,e)
        {
        	const searchDt = this.ds_search.getColumn(0, "DATE");
        	searchDt.setDate(searchDt.getDate() - 1);
        	this.ds_search.setColumn(0, "DATE", searchDt);
        	this.ds_search.setColumn(0, "YEAR", searchDt.getFullYear());
        	this.ds_search.setColumn(0, "MONTH", searchDt.getMonth() + 1);
        	this.fn_search();
        };

        // 날짜 변경 이벤트
        this.div_search_cal_date_pic_onchanged = function(obj,e)
        {
        	const searchDt = this.ds_search.getColumn(0, "DATE");
        	this.ds_search.setColumn(0, "YEAR", searchDt.getFullYear());
        	this.ds_search.setColumn(0, "MONTH", searchDt.getMonth() + 1);
        	this.fn_search();
        };

        // 동승전체적용
        this.btn_HelperAll_onclick = function(obj,e)
        {
        	let helper = "";
        	let str = "";

        	switch(obj.id) {
        		case "btn_sHelperAll" :
        			helper = this.ds_driver.getColumn(0, "시작동승");
        			str = "시작";
        			break;
        		case "btn_eHelperAll" :
        			helper = this.ds_driver.getColumn(0, "종료동승");
        			str = "종료";
        			break;
        		default:
        	}

        	if (Sct.Util.isEmpty(helper))
        	{
        		this.alert(str + "동승자를 지정해주세요");
        		return false;
        	}

        	for (let i = 0; i < this.ds_list.rowcount; i++)
        	{
        		if (this.ds_list.getColumn(i, "미입소").substr(0, 1) > 0)
        			continue;

        		if (Sct.Util.isEmpty(this.ds_list.getColumn(i, str + "동승")) && !Sct.Util.isEmpty(this.ds_list.getColumn(i, str + "코스")))
        		{
        			this.ds_list.setColumn(i, str + "동승", helper);
        		}
        	}
        };

        // 거주전체 'Y'
        this.btn_LiveY_onclick = function(obj,e)
        {
        	let str = "";

        	switch(obj.id) {
        		case "btn_sLiveY" :
        			str = "시작";
        			break;
        		case "btn_eLiveY" :
        			str = "종료";
        			break;
        		default:
        	}

        	for (let i = 0; i < this.ds_list.rowcount; i++)
        	{
        		if (this.ds_list.getColumn(i, "미입소").substr(0, 1) > 0
        			|| Sct.Util.isEmpty(nexacro.trim(this.ds_list.getColumn(i, str + "코스"))))
        			continue;

        		this.ds_list.setColumn(i, str + "거주지", "Y");
        	}
        };

        // 송영전체지움
        this.btn_Erase_onclick = function(obj,e)
        {
        	let str = "";
        	let str2 = "";

        	switch(obj.id) {
        		case "btn_startErase" :
        			str = "시작";
        			str2 = "오전";
        			break;
        		case "btn_endErase" :
        			str = "종료";
        			str2 = "오후";
        			break;
        		default:
        	}

        	this.ds_list.set_enableevent(false);
        	for (let i = 0; i < this.ds_list.rowcount; i++)
        	{
        		if(this.ds_list.getColumn(i, "미입소").substr(0, 1) > 0)
        			continue;

        		this.ds_list.setColumn(i, str + "코스", "");
        		this.ds_list.setColumn(i, str + "차번호", "");
        		this.ds_list.setColumn(i, str + "시간", "");
        		this.ds_list.setColumn(i, str + "거주지", "");
        		this.ds_list.setColumn(i, str2 + "거리", "");
        		this.ds_list.setColumn(i, str + "기사", "");
        		this.ds_list.setColumn(i, str + "기코드", "");
        		this.ds_list.setColumn(i, str + "동승", "");
        	}
        	this.ds_list.set_enableevent(true);
        };

        // 그리드 셀 더블클릭 이벤트
        this.div_main_grd_list_oncelldblclick = function(obj,e)
        {
        	const sDriverIdx = obj.getBindCellIndex("body", "시작기사");
        	const sHelperIdx = obj.getBindCellIndex("body", "시작동승");
        	const eDriverIdx = obj.getBindCellIndex("body", "종료기사");
        	const eHelperIdx = obj.getBindCellIndex("body", "종료동승");
        	const notInIdx = obj.getBindCellIndex("body", "미입소");
        	const sDriver = this.ds_driver.getColumn(0, "시작기사");
        	const sDriverCode = this.ds_driver.getColumn(0, "시작기코드");
        	const sHelper = this.ds_driver.getColumn(0, "시작동승");
        	const eDriver = this.ds_driver.getColumn(0, "종료기사");
        	const eDriverCode = this.ds_driver.getColumn(0, "종료기코드");
        	const eHelper = this.ds_driver.getColumn(0, "종료동승");

        	// 시작운전 변경
        	if (e.col == sDriverIdx)
        	{
        		if (Sct.Util.isEmpty(sDriver))
        		{
        			this.ds_list.setColumn(e.row, "시작기사", "");
        			this.ds_list.setColumn(e.row, "시작기코드", "");
        		}
        		else
        		{
        			this.ds_list.setColumn(e.row, "시작기사", sDriver);
        			this.ds_list.setColumn(e.row, "시작기코드", sDriverCode);
        		}
        	}

        	// 시작동승 변경
        	if (e.col == sHelperIdx)
        	{
        		if (Sct.Util.isEmpty(sHelper))
        			this.ds_list.setColumn(e.row, "시작동승", "");
        		else
        			this.ds_list.setColumn(e.row, "시작동승", sHelper);
        	}

        	// 종료운전 변경
        	if (e.col == eDriverIdx)
        	{
        		if (Sct.Util.isEmpty(eDriver))
        		{
        			this.ds_list.setColumn(e.row, "종료기사", "");
        			this.ds_list.setColumn(e.row, "종료기코드", "");
        		}
        		else
        		{
        			this.ds_list.setColumn(e.row, "종료기사", eDriver);
        			this.ds_list.setColumn(e.row, "종료기코드", eDriverCode);
        		}
        	}

        	// 종료동승 변경
        	if (e.col == eHelperIdx)
        	{
        		if (Sct.Util.isEmpty(eHelper))
        			this.ds_list.setColumn(e.row, "종료동승", "");
        		else
        			this.ds_list.setColumn(e.row, "종료동승", eHelper);
        	}

        	if (e.col == notInIdx)
        	{
        		const param = {
        			SICODE : fv_sicode
        		,	K_NUMBER : this.ds_list.getColumn(e.row, "k_number")
        		,	M_CODE : this.ds_list.getColumn(e.row, "m_code")
        		,	M_NAME : this.ds_list.getColumn(e.row, "m_name")
        		,	DATE : this.ds_search.getColumn(0, "DATE")
        		,	SEX : this.ds_list.getColumn(e.row, "성별")
        		};

        		Sct.popup(this, "notIn", 450, 400, "미이용일지정", param, "DAY_POP::DAY00401_P02.xfdl", "fn_popCallback");
        	}

        };

        // 그리드 확장버튼 클릭 이벤트
        this.div_main_grd_list_onexpandup = function(obj,e)
        {
        	const updateIdx = obj.getBindCellIndex("body", "수정");
        	const delIdx = obj.getBindCellIndex("body", "지움");
        	// 돋보기
        	if (e.col == updateIdx)
        	{
        		if (this.ds_list.getColumn(e.row, "미입소") != undefined)
        		{
        			if (this.ds_list.getColumn(e.row, "미입소").substr(0, 1) > 0)
        				return;
        		}

        		const param = {
        			SICODE : fv_sicode
        		,	K_NUMBER : this.ds_list.getColumn(e.row, "k_number")
        		,	M_CODE : this.ds_list.getColumn(e.row, "m_code")
        		,	M_NAME : this.ds_list.getColumn(e.row, "m_name")
        		,	DATE : this.ds_search.getColumn(0, "DATE")
        		};

        		Sct.popup(this, "update", 450, 400, "송영기록 조회·수정", param, "DAY_POP::DAY00401_P01.xfdl", "fn_popCallback");
        	}

        	// 지움
        	if (e.col == delIdx)
        	{
        		if (this.ds_list.getColumn(e.row, "미입소") != undefined)
        		{
        			if (this.ds_list.getColumn(e.row, "미입소").substr(0, 1) > 0)
        				return;
        		}

        		this.ds_list.setColumn(e.row, "총시간", "");
        		this.ds_list.setColumn(e.row, "시작코스", "");
        		this.ds_list.setColumn(e.row, "시작차번호", "");
        		this.ds_list.setColumn(e.row, "시작시간", "");
        		this.ds_list.setColumn(e.row, "시작거주지", "");
        		this.ds_list.setColumn(e.row, "오전거리", 0.0);
        		this.ds_list.setColumn(e.row, "오전장소", "");
        		this.ds_list.setColumn(e.row, "시작기사", "");
        		this.ds_list.setColumn(e.row, "시작기코드", "");
        		this.ds_list.setColumn(e.row, "시작동승", "");
        		this.ds_list.setColumn(e.row, "종료코스", "");
        		this.ds_list.setColumn(e.row, "종료차번호", "");
        		this.ds_list.setColumn(e.row, "종료시간", "");
        		this.ds_list.setColumn(e.row, "종료거주지", "");
        		this.ds_list.setColumn(e.row, "오후거리", 0.0);
        		this.ds_list.setColumn(e.row, "오후장소", "");
        		this.ds_list.setColumn(e.row, "종료기사", "");
        		this.ds_list.setColumn(e.row, "종료기코드", "");
        		this.ds_list.setColumn(e.row, "종료동승", "");
        	}
        };

        // 운행일정불러오기
        this.div_func2_btn_dataLoad1_onclick = function(obj,e)
        {
        	this.ds_temp_search.clearData();
        	this.ds_temp_search.copyData(this.ds_search);

        	this.fn_search_temp();
        };

        // 전일송영불러오기
        this.div_func2_btn_dataLoad2_onclick = function(obj,e)
        {
        	this.ds_temp_search.clearData();
        	const nRow = this.ds_temp_search.addRow();
        	const date = this.ds_search.getColumn(0, "DATE");
        	date.setDate(date.getDate() - 1);
        	this.ds_temp_search.setColumn(nRow, "SICODE", fv_sicode);
        	this.ds_temp_search.setColumn(nRow, "DATE", date);

        	this.fn_search_temp2();
        };

        // 지정일불러오기
        this.div_func2_btn_dataLoad3_onclick = function(obj,e)
        {
        	this.div_func2.form.cal_temp_pic.dropdown();
        };

        // 지정일불러오기 날짜선택
        this.div_func2_cal_temp_pic_ondayclick = function(obj,e)
        {
        	this.ds_temp_search.clearData();
        	const nRow = this.ds_temp_search.addRow();
        	this.ds_temp_search.setColumn(nRow, "SICODE", fv_sicode);
        	this.ds_temp_search.setColumn(nRow, "DATE", e.date);

        	this.fn_search_temp2();
        };

        // 송영일지 다운로드 (엑셀)
        this.div_func_btn_excel_down_onclick = function(obj,e)
        {
        	this.fn_excel_search();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.btn_pre_dt.addEventHandler("onclick",this.div_search_btn_pre_dt_onclick,this);
            this.div_search.form.cal_date.addEventHandler("onchanged",this.div_search_cal_sdate_onchanged,this);
            this.div_search.form.btn_next_dt.addEventHandler("onclick",this.div_search_btn_next_dt_onclick,this);
            this.div_search.form.cal_date_pic.addEventHandler("onchanged",this.div_search_cal_date_pic_onchanged,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_reportCar.addEventHandler("onclick",this.div_func_btn_reportCar_onclick,this);
            this.div_func.form.btn_report3.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report4.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_excel_down.addEventHandler("onclick",this.div_func_btn_excel_down_onclick,this);
            this.div_func.form.btn_driver_select.addEventHandler("onclick",this.div_func_btn_driver_select_onclick,this);
            this.div_func2.form.btn_sDriver.addEventHandler("onclick",this.btn_driver_select,this);
            this.div_func2.form.btn_sHelper.addEventHandler("onclick",this.btn_driver_select,this);
            this.div_func2.form.btn_sHelperAll.addEventHandler("onclick",this.btn_HelperAll_onclick,this);
            this.div_func2.form.btn_sLiveY.addEventHandler("onclick",this.btn_LiveY_onclick,this);
            this.div_func2.form.btn_eDriver.addEventHandler("onclick",this.btn_driver_select,this);
            this.div_func2.form.btn_eHelper.addEventHandler("onclick",this.btn_driver_select,this);
            this.div_func2.form.btn_eHelperAll.addEventHandler("onclick",this.btn_HelperAll_onclick,this);
            this.div_func2.form.btn_eLiveY.addEventHandler("onclick",this.btn_LiveY_onclick,this);
            this.div_func2.form.btn_startErase.addEventHandler("onclick",this.btn_Erase_onclick,this);
            this.div_func2.form.btn_endErase.addEventHandler("onclick",this.btn_Erase_onclick,this);
            this.div_func2.form.btn_dataLoad2.addEventHandler("onclick",this.div_func2_btn_dataLoad2_onclick,this);
            this.div_func2.form.btn_dataLoad1.addEventHandler("onclick",this.div_func2_btn_dataLoad1_onclick,this);
            this.div_func2.form.cal_temp_pic.addEventHandler("ondayclick",this.div_func2_cal_temp_pic_ondayclick,this);
            this.div_func2.form.btn_dataLoad3.addEventHandler("onclick",this.div_func2_btn_dataLoad3_onclick,this);
            this.div_main.form.grd_list.addEventHandler("oncelldblclick",this.div_main_grd_list_oncelldblclick,this);
            this.div_main.form.grd_list.addEventHandler("onexpandup",this.div_main_grd_list_onexpandup,this);
        };
        this.loadIncludeScript("DAY00401.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
