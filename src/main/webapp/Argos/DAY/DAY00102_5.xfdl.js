(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00102_5");
            this.set_titletext("1-2 상태변화기록(매주)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"cbcode\" type=\"STRING\" size=\"256\"/><Column id=\"cbname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"p_chk\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"INT\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday1\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday2\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin2\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso1\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso2\" type=\"STRING\" size=\"256\"/><Column id=\"m_post\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname\" type=\"STRING\" size=\"256\"/><Column id=\"sajin\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"DATE\" size=\"256\"/><Column id=\"date_to\" type=\"DATE\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"p_chk\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday1\" type=\"STRING\" size=\"256\"/><Column id=\"m_liday2\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin2\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso1\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso2\" type=\"STRING\" size=\"256\"/><Column id=\"m_post\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname\" type=\"STRING\" size=\"256\"/><Column id=\"sajin\" type=\"STRING\" size=\"256\"/><Column id=\"생년월일\" type=\"STRING\" size=\"256\"/><Column id=\"상태변화\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_day", this);
            obj._setContents("<ColumnInfo><Column id=\"date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail_output", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"sc_number\" type=\"INT\" size=\"256\"/><Column id=\"sc_nalja\" type=\"DATE\" size=\"256\"/><Column id=\"요일\" type=\"STRING\" size=\"256\"/><Column id=\"sc_name\" type=\"STRING\" size=\"256\"/><Column id=\"sc_code\" type=\"STRING\" size=\"256\"/><Column id=\"상태변화\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"그룹\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail_input", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"sc_code\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_save", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"sc_number\" type=\"STRING\" size=\"256\"/><Column id=\"sc_nalja\" type=\"DATE\" size=\"256\"/><Column id=\"sc_name\" type=\"STRING\" size=\"256\"/><Column id=\"sc_code\" type=\"STRING\" size=\"256\"/><Column id=\"상태변화\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_writer", this);
            obj._setContents("<ColumnInfo><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/><Column id=\"view_writer\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_records_output", this);
            obj._setContents("<ColumnInfo><Column id=\"arr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_records_input", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"arg\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_log_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"k_code\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_log_list", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"k_name\" type=\"STRING\" size=\"256\"/><Column id=\"k_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"k_code\" type=\"STRING\" size=\"256\"/><Column id=\"kn_contents\" type=\"STRING\" size=\"256\"/><Column id=\"kr_contents\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search_menu","0","40","500","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_one_week","27","0","40","26",null,null,null,null,null,null,this.div_search_menu.form);
            obj.set_taborder("0");
            obj.set_text("1주일");
            this.div_search_menu.addChild(obj.name, obj);

            obj = new Button("btn_one_year","207","0","40","26",null,null,null,null,null,null,this.div_search_menu.form);
            obj.set_taborder("1");
            obj.set_text("1년");
            this.div_search_menu.addChild(obj.name, obj);

            obj = new Button("btn_all","422","0","68","26",null,null,null,null,null,null,this.div_search_menu.form);
            obj.set_taborder("2");
            obj.set_text("전체");
            obj.set_cssclass("btn_eldery");
            this.div_search_menu.addChild(obj.name, obj);

            obj = new Button("btn_half_of_month","72","0","40","26",null,null,null,null,null,null,this.div_search_menu.form);
            obj.set_taborder("3");
            obj.set_text("15일");
            this.div_search_menu.addChild(obj.name, obj);

            obj = new Button("btn_one_month","117","0","40","26",null,null,null,null,null,null,this.div_search_menu.form);
            obj.set_taborder("4");
            obj.set_text("1개월");
            this.div_search_menu.addChild(obj.name, obj);

            obj = new Button("btn_half_of_year","162","0","40","26",null,null,null,null,null,null,this.div_search_menu.form);
            obj.set_taborder("5");
            obj.set_text("6개월");
            this.div_search_menu.addChild(obj.name, obj);

            obj = new Button("btn_elder","252","0","80","26",null,null,null,null,null,null,this.div_search_menu.form);
            obj.set_taborder("6");
            obj.set_text("수급자");
            obj.set_cssclass("btn_eldery");
            this.div_search_menu.addChild(obj.name, obj);

            obj = new Button("btn_out_of_elder","337","0","80","26",null,null,null,null,null,null,this.div_search_menu.form);
            obj.set_taborder("7");
            obj.set_text("퇴소자");
            obj.set_cssclass("btn_eldery");
            this.div_search_menu.addChild(obj.name, obj);

            obj = new Div("div_list","0","80","500","700",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_elderlist","28","0","462","700",null,null,null,null,null,null,this.div_list.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"35\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"normal\" text=\"출력\" edittype=\"checkbox\"/></Cell><Cell col=\"2\" text=\"현황\"/><Cell col=\"3\" text=\"그룹\"/><Cell col=\"4\" text=\"수급자명\"/><Cell col=\"5\" text=\"성별\"/><Cell col=\"6\" text=\"등급\"/><Cell col=\"7\" text=\"생활실\"/></Band><Band id=\"body\"><Cell colspan=\"2\" text=\"bind:p_chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"2\" text=\"bind:s_nm\"/><Cell col=\"3\" text=\"bind:m_group\"/><Cell col=\"4\" text=\"bind:m_name\" cssclass=\"cellBWoman\"/><Cell col=\"5\" text=\"bind:sex_nm\"/><Cell col=\"6\" text=\"bind:grade_nm\"/><Cell col=\"7\" text=\"bind:m_roomname\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_newAndSave","530","0","1100","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","71","26","0",null,null,null,null,null,this.div_newAndSave.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_newAndSave.addChild(obj.name, obj);

            obj = new Button("btn_new","0","7","90","26",null,null,null,null,null,null,this.div_newAndSave.form);
            obj.set_taborder("1");
            obj.set_text("새로작성");
            obj.set_cssclass("btn_newdoc");
            this.div_newAndSave.addChild(obj.name, obj);

            obj = new Div("div_btnPrint","530","40","1100","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print4",null,"0","160","26","0",null,null,null,null,null,this.div_btnPrint.form);
            obj.set_taborder("4");
            obj.set_text("상태변화 기록(선택)");
            obj.set_cssclass("btn_print");
            this.div_btnPrint.addChild(obj.name, obj);

            obj = new Button("btn_search_log","0","0","152","26",null,null,null,null,null,null,this.div_btnPrint.form);
            obj.set_taborder("1");
            obj.set_text("요양.간호일지 조회");
            obj.set_cssclass("btn_search");
            this.div_btnPrint.addChild(obj.name, obj);

            obj = new Button("btn_print1","160","0","152","26",null,null,null,null,null,null,this.div_btnPrint.form);
            obj.set_taborder("2");
            obj.set_text("상태변화 기록서식");
            obj.set_cssclass("btn_print");
            this.div_btnPrint.addChild(obj.name, obj);

            obj = new Button("btn_print3",null,"0","160","26","165",null,null,null,null,null,this.div_btnPrint.form);
            obj.set_taborder("3");
            obj.set_text("기간별 상태변화기록");
            obj.set_cssclass("btn_print");
            this.div_btnPrint.addChild(obj.name, obj);

            obj = new Button("btn_print2",null,"0","160","26","330",null,null,null,null,null,this.div_btnPrint.form);
            obj.set_taborder("4");
            obj.set_text("수급자 상태변화기록");
            obj.set_cssclass("btn_print");
            this.div_btnPrint.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","540","0","66","25",null,null,null,null,null,null,this.div_btnPrint.form);
            obj.set_taborder("5");
            obj.set_text("결재란");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_btnPrint.addChild(obj.name, obj);

            obj = new Div("div_container","530","80","1100","700",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0","80","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("0");
            obj.set_text("수급자명");
            obj.set_textAlign("center");
            obj.set_border("1px solid gray");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","29","80","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("1");
            obj.set_text("생활실");
            obj.set_textAlign("center");
            obj.set_border("1px solid gray");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_01","0","59","80","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("2");
            obj.set_text("주요질환");
            obj.set_textAlign("center");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_02","0","89","80","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("3");
            obj.set_text("주소");
            obj.set_textAlign("center");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_03","80","0","200","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("4");
            obj.set_textAlign("left");
            obj.set_border("1px solid gray, 1px solid gray, 1px solid gray, 1px none gray");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","80","29","200","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("5");
            obj.set_textAlign("left");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray, 1px none gray");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_01_00","80","59","400","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("6");
            obj.set_textAlign("left");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray, 1px none gray");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_02_00","80","89","899","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("7");
            obj.set_textAlign("left");
            obj.set_border("1px none gray, 1px none gray, 1px solid gray");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_03_00","280","0","80","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("8");
            obj.set_text("성별 나이");
            obj.set_textAlign("center");
            obj.set_border("1px solid gray, 1px solid gray, 1px solid gray, 1px none gray");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00","280","29","80","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("9");
            obj.set_text("생년월일");
            obj.set_textAlign("center");
            obj.set_border("1px solid gray, 1px solid gray, 1px solid gray, 1px none gray");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_container.addChild(obj.name, obj);

            obj = new ImageViewer("imv_00",null,"0","120","119","1",null,null,null,null,null,this.div_container.form);
            obj.set_taborder("10");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00","360","29","120","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("11");
            obj.set_textAlign("center");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray, 1px none gray");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_03_00_00","360","0","120","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("12");
            obj.set_textAlign("center");
            obj.set_border("1px solid gray, 1px solid gray, 1px solid gray, 1px none gray");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01","90","0","50","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("13");
            obj.set_text("수급자");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01_00","150","0","40","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("14");
            obj.set_text("그룹");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00","200","0","72","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("15");
            obj.set_text("코드");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01_01","90","30","50","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("16");
            obj.set_text("생활실");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01_02","90","60","380","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("17");
            obj.set_text("주요질환");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01_02_00","90","90","860","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("18");
            obj.set_text("주소");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00","370","0","32","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("19");
            obj.set_text("여");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00","420","0","32","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("20");
            obj.set_text("나이");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_01","370","30","92","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("21");
            obj.set_text("36-10-05");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_03_00_01","480","0","80","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("22");
            obj.set_text("입소일");
            obj.set_textAlign("center");
            obj.set_border("1px solid gray, 1px solid gray, 1px solid gray, 1px none gray");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_01","480","29","80","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("23");
            obj.set_text("퇴소일");
            obj.set_textAlign("center");
            obj.set_border("1px solid gray, 1px solid gray, 1px solid gray, 1px none gray");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_01_00_00","480","59","80","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("24");
            obj.set_textAlign("center");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray, 1px none gray");
            obj.set_text("대리인");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_03_00_01_00","560","0","120","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("25");
            obj.set_textAlign("center");
            obj.set_border("1px solid gray, 1px solid gray, 1px solid gray, 1px none gray");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_01_00","560","29","120","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("26");
            obj.set_textAlign("center");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray, 1px none gray");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_01_00_00_00","560","59","120","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("27");
            obj.set_textAlign("center");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray, 1px none gray");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_02","570","0","102","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("28");
            obj.set_text("2021.11.10");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_02_00","570","30","102","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("29");
            obj.set_text("2021.11.10");
            obj.set_color("red");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_02_01","570","60","102","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("30");
            obj.set_text("이순애");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_03_00_01_01","680","0","80","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("31");
            obj.set_text("인정번호");
            obj.set_textAlign("center");
            obj.set_border("1px solid gray, 1px solid gray, 1px solid gray, 1px none gray");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_01_01","680","29","80","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("32");
            obj.set_text("인정기간");
            obj.set_textAlign("center");
            obj.set_border("1px solid gray, 1px solid gray, 1px solid gray, 1px none gray");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_01_00_00_01","680","59","80","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("33");
            obj.set_textAlign("center");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray, 1px none gray");
            obj.set_text("인정등급");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_03_00_01_00_00","760","0","220","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("34");
            obj.set_textAlign("center");
            obj.set_border("1px solid gray, 1px solid gray, 1px solid gray, 1px none gray");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_01_00_00","760","29","220","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("35");
            obj.set_textAlign("center");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray, 1px none gray");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_01_00_00_00_00","760","59","220","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("36");
            obj.set_textAlign("center");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray, 1px none gray");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_02_02","770","0","142","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("37");
            obj.set_text("L2106093441");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_02_02_00","770","30","72","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("38");
            obj.set_text("2022.05.24");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_02_02_00_00","870","30","72","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("39");
            obj.set_text("2100.01.01");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_02_02_00_01","770","60","72","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("40");
            obj.set_text("5등급");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_02_02_00_02","850","30","12","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("41");
            obj.set_text("-");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_04","0","130","80","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("42");
            obj.set_text("작성일");
            obj.set_textAlign("center");
            obj.set_border("1px solid gray");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_00_01","0","159","80","80",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("43");
            obj.set_text("상태변화");
            obj.set_textAlign("center");
            obj.set_border("1px solid gray");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_03_01","80","130","1019","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("44");
            obj.set_textAlign("left");
            obj.set_border("1px solid gray, 1px solid gray, 1px solid gray, 1px none gray");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_03_01_00","80","159","1019","80",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("45");
            obj.set_textAlign("left");
            obj.set_border("1px solid gray, 1px solid gray, 1px solid gray, 1px none gray");
            obj.set_enable("true");
            obj.set_text("");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_00_01_00","0","239","80","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("46");
            obj.set_textAlign("center");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00_03_01_00_00","80","239","1019","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("47");
            obj.set_textAlign("left");
            obj.set_border("1px none gray, 1px solid gray, 1px solid gray, 1px none gray");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01_02_01","90","240","120","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("48");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_01_02_01_00","490","240","270","30",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("49");
            obj.set_text("▲ 사소한 내용이라도 작성해야 합니다.");
            this.div_container.addChild(obj.name, obj);

            obj = new Button("btn_worker","3","240","74","26",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("50");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_container.addChild(obj.name, obj);

            obj = new Grid("grd_detail","1","287","1098","412",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("51");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("none");
            obj.set_binddataset("ds_detail_output");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"300\"/><Column size=\"50\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"60\"/></Rows><Band id=\"head\"><Cell text=\"작성일\"/><Cell col=\"1\" text=\"요일\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"상태변화\"/><Cell col=\"4\" text=\"작성자명\"/><Cell col=\"5\" text=\"내용복사\"/></Band><Band id=\"body\"><Cell calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\" text=\"bind:sc_nalja\" displaytype=\"date\" expandchar=\"dot\" cssclass=\"cellBWoman\"/><Cell col=\"1\" text=\"bind:요일\"/><Cell col=\"2\" text=\"bind:sc_name\"/><Cell col=\"3\" text=\"bind:상태변화\"/><Cell col=\"4\" text=\"bind:작성자명\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" text=\"복사\"/></Band></Format></Formats>");
            this.div_container.addChild(obj.name, obj);

            obj = new Calendar("cal_date","85","133","90","24",null,null,null,null,null,null,this.div_container.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("52");
            obj.set_cssclass("essential");
            obj.set_displayinvalidtext("invaild value");
            obj.set_tabstop("false");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0");
            obj.set_readonly("true");
            this.div_container.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","174","133","25","24",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("53");
            this.div_container.addChild(obj.name, obj);

            obj = new TextArea("txt_change","85","165","1008","65",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("54");
            this.div_container.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","500","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_year","27","7","80","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("cbcode");
            obj.set_datacolumn("cbname");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","115","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_displayinvalidtext("invaild value");
            obj.set_tabstop("false");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from_pic","cal_date_from:-1","cal_date_from:-26","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","255","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            obj.set_displayinvalidtext("invaild value");
            obj.set_tabstop("false");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic","cal_date_to:-1","cal_date_to:-26","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","236","10","13","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","70","26","10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cmb_year","value","ds_search","year");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_date_from","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_from_pic","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cal_date_to","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.cal_date_to_pic","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_container.form.sta_01","text","ds_data","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_container.form.sta_01_00","text","ds_data","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_container.form.sta_01_00_00","text","ds_data","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_container.form.sta_01_00_00_00","text","ds_data","sex_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_container.form.sta_01_00_00_00_00","text","ds_data","age");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_container.form.sta_01_00_00_00_02","text","ds_data","m_enday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_container.form.sta_01_00_00_00_02_00","text","ds_data","m_reday");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_container.form.sta_01_01","text","ds_data","m_roomname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_container.form.sta_01_00_00_00_01","text","ds_data","생년월일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_container.form.sta_01_02","text","ds_data","m_history");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_container.form.sta_01_02_00","text","ds_data","m_juso1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_container.form.sta_01_00_00_00_02_02","text","ds_data","m_regist");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_container.form.sta_01_00_00_00_02_02_00","text","ds_data","m_liday1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_container.form.sta_01_00_00_00_02_02_00_00","text","ds_data","m_liday2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_container.form.sta_01_00_00_00_02_02_00_01","text","ds_data","grade_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_container.form.sta_01_00_00_00_02_01","text","ds_data","m_conname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_container.form.cal_date","value","ds_day","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_container.form.cal_date_pic","value","ds_day","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_container.form.sta_01_02_01","text","ds_writer","view_writer");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00102_5.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("DAY00102_5.xfdl","lib::sct_com.xjs");
        this.registerScript("DAY00102_5.xfdl", function() {
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;

        //sicode
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        //m_code(sc_number) - 기록번호(고유번호)
        this.scnum = "";
        //onload 이벤트
        this.form_onload = function(obj,e)
        {
        	//화면로드시 초기화
        	this.form_onload_com(obj,e,false);

        	//현재 날짜
        	var now = new Date();
        	//현재 년도
        	var year = now.getFullYear();
        	//오늘 날짜
        	var today = this.getTodayNum();
        	//콤보박스 내부 데이터 제거
        	this.ds_year.clearData();
        	//현재년도+10년 추가
        	for(var i=0;i<10;i++) {
        			this.ds_year.addRow();
        			this.ds_year.setColumn(i,0,year+i);
        			this.ds_year.setColumn(i,1,year+i+"년");
        	}


        	//현재년도 -10년 추가
        	for(var i=1;i<11;i++) {
        			this.ds_year.insertRow();
        			this.ds_year.setColumn(0,0,year-i);
        			this.ds_year.setColumn(0,1,year-i+"년");
        	}

        	//초기 조건 설정
        	this.ds_search.setColumn(0,"sicode",fv_sicode);
        	this.ds_search.setColumn(0,"year",year);
        	this.ds_search.setColumn(0,"date_from", year+"0101" );
        	this.ds_search.setColumn(0,"date_to", today);
        	this.ds_search.setColumn(0,"s_nm", "사용중");
        	//버튼 css적용
        	this.div_search_menu.form.btn_elder.set_background("red");
        	this.div_search_menu.form.btn_out_of_elder.set_background("");
        	this.div_search_menu.form.btn_all.set_background("");

        	//그리드 css 적용
        	var grd = this.div_list.form.grd_elderlist;
        	var nameIdx = grd.getBindCellIndex("body","m_name");
        	var snmIdx = grd.getBindCellIndex("body","s_nm");

        	var nameCss = "expr:sex_nm=='남'?'cellBMan':'cellBWoman'";
        	var snmCss = "expr:s_nm=='퇴소자'?'cellBRetire':''";

        	grd.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grd.setCellProperty("body", snmIdx, "cssclass", snmCss);
        	//초기 조회
        	this.fn_search("search");
        };

        /************************************************************************
         *  Validation Check
         ************************************************************************/

        //조회 전 validation check
        this.fn_search_pre = function ()
        {
        	// 검색조건 필수 체크 (컴포넌트 tooltiptext 값 넣을 것)
        	if (!this.gfn_findSnull(this.div_search)) return false;
        	return true;
        };

        //저장 전 validation check
        this.fn_save_pre = function ()
        {
        	if (this.confirm("저장하시겠습니까?"))
        	{
        		return true;
        	}
        	else
        	{
        		return false;
        	}
        };

        //요양 간호일지 팝업 전 유효성 체크
        this.fn_log_pre = function ()
        {
        	//현재 날짜
        	var now = new Date();
        	//현재 년도
        	var year = now.getFullYear();
        	//현재 월
        	var month = now.getMonth()+1;

        	//이전 월
        	month = month == 1 ? 12 : month-1;
        	month = month <10 ? "0" + month.toString() : month;

        	//이전 월 초
        	var fdate = year.toString() + month.toString() + "01";
        	this.ds_log_search.clearData();
        	this.ds_log_search.addRow();
        	this.ds_log_search.setColumn(0,"sicode", fv_sicode);
        	this.ds_log_search.setColumn(0,"k_code", this.scnum);
        	this.ds_log_search.setColumn(0,"date_from", fdate);
        	//요양 간호일지 조회(for validation chk)
        	this.fn_log_search();
        };
        /************************************************************************
         * Transaction Func
         ************************************************************************/

        //조회
        this.fn_search = function(flag)
        {
        	//validation check
        	if (!this.fn_search_pre())
        	{
        		return;
        	}

        	var svcId = flag;
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        				 + "sqlId=DAY00102_5.DAY00102_5_DS_LIST_S ";
        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        //detail 조회
        this.fn_detail_search = function(flag)
        {
        	var svcId = flag;
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_detail_input";
        	var outDatasets = "ds_detail_output=output1";
        	var argument = "method=getList "
        				 + "sqlId=DAY00102_5.DAY00102_5_DS_DETAIL_LIST_S ";
        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        //체크박스 데이터 존재 여부 확인 조회
        //arg : m_code의 배열
        this.fn_search_record = function (arg , fdate, tdate)
        {
        	this.ds_records_input.clearData();
        	this.ds_records_input.addRow();
        	this.ds_records_input.setColumn(0,"sicode",fv_sicode);
        	//체크된 데이터를 배열로 전달
        	this.ds_records_input.setColumn(0,"arg",arg);
        	this.ds_records_input.setColumn(0,"date_from",fdate);
        	this.ds_records_input.setColumn(0,"date_to",tdate);

        	this.ds_records_output.clearData();
        	this.ds_records_output.addRow();

        	var svcId = "record";
        	var params = "/DAY00102_5Controller.do";
        	var inDatasets = "input1=ds_records_input";
        	var outDatasets = "ds_records_output=ds_arr";
        	var argument = "method=getArr "
        				 + "sqlId=DAY00102_5.DAY00102_5_DS_LIST_RECORDS_S ";
        	var callbackFunc = "fn_callback";
        	//동기
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };

        //요양.간호일지 조회
        this.fn_log_search = function()
        {
         	var svcId = "log_search";
         	var params = "/commonController.do";
         	var inDatasets = "input1=ds_log_search";
         	var outDatasets = "ds_log_list=output1";
         	var argument = "method=getList "
        				 + "sqlId=DAY00102_5_P01.DAY00102_5_P01_DS_LIST ";
         	var callbackFunc = "fn_callback";
         	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        //저장
        this.fn_save = function()
        {
        	//validation check
        	if (!this.fn_save_pre())
        	{
        		return;
        	}

         	var svcId = "save";
         	var params = "/DAY00102_5Controller.do";
         	var inDatasets = "input1=ds_save:U";
         	var outDatasets = "";
         	var argument = "method=save ";
         	var callbackFunc = "fn_callback";
         	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }
        //콜백
        this.fn_callback = function (strSvcId, nErrorCode, strErrorMsg)
        {	//0 이면 트랜잭션 성공
        	if (nErrorCode == 0)
        	{
        		if (strSvcId == "search")
        		{
        			//데이터셋 초기화
        			this.ds_data.clearData();
        			this.ds_detail_output.clearData();
        			//선택된 그리드 셀이 있으면 없앤다
        			this.ds_list.set_rowposition(-1);


        		}
        		else if(strSvcId == "detail")
        		{
        			//detail의 가장 위 작성자로 세팅
        			//기록이 없으면 clear
        			if (this.ds_detail_output.rowcount<1)
        			{
        				this.ds_writer.clearData();
        				return;
        			}
        			//작성자 세팅
        			var writer = this.ds_detail_output.getColumn(0,"작성자명");
        			var code = this.ds_detail_output.getColumn(0,"작성코드");
        			var view_writer = writer + "/" + code;
        			this.ds_writer.clearData();
        			this.ds_writer.addRow();
        			this.ds_writer.setColumn(0,"작성자명",writer);
        			this.ds_writer.setColumn(0,"작성코드",code);
        			this.ds_writer.setColumn(0,"view_writer", view_writer);
        		}
        		else if(strSvcId == "save")
        		{
        			this.alert("저장되었습니다");
        			this.div_container.form.txt_change.set_value("");
        			this.fn_search("search_save");
        		}
        		else if(strSvcId == "search_save")
        		{
        			//좌측 리스트상의 row 위치를 그대로 하고
        			this.fn_findCurrentRow(this.scnum);
        			//해당 row의 detail을 search한다
        			this.fn_detail_search("detail");
        		}
        		else if(strSvcId == "log_search")
        		{
        			if (this.ds_log_list.rowcount == 0)
        			{
        				this.alert("기록된 요양일지가 없습니다!");
        				return ;
        			} else {
        				//요양일지가 있으면 팝업창 오픈
        				this.fn_log_popup();
        			}
        		}
        	}
        	else
        	{
        		Sct.alert(this,"",strErrorMsg);
        	}
        };
        /************************************************************************
         * Util Func
         ************************************************************************/
        //오늘 날짜 구하기
        this.getToday = function ()
        {
        	//현재 날짜
        	var now = new Date();
        	//현재 년도
        	var year = now.getFullYear();
        	//현재 월
        	var month = now.getMonth()+1;

        	if (month<10)
        	{
        		month = "0" + month.toString();
        	}
        	//현재 일
        	var day = now.getDate();
        	if (day<10)
        	{
        		day = "0" + day.toString();
        	}

        	//yyyy-MM-dd의 형태, 오늘 날짜
        	var today = year.toString() + "-" + month.toString()+ "-" + day.toString();

        	return today;
        };

        //오늘 날짜(숫자만 있는 형태)
        this.getTodayNum = function ()
        {
        	var date = new Date();
        	var year = date.getFullYear();
        	var month = date.getMonth() + 1;
        	var day = date.getDate();
        	month = month >= 10 ? month : '0' + month.toString();
        	day = day >= 10 ? day : '0' + day.toString();
        	return year.toString() + month.toString() + day.toString() ;
        };

        //현재 월 말일 구하기
        this.getLastDay = function ()
        {
        	var now = new Date();
        	var year = now.getFullYear();
        	var month = now.getMonth()+1;

        	//월말 일 계산
        	var lastDate = new Date(year,month,0).getDate();

        	if (lastDate<10)
        	{
        		lastDate = "0" + lastDate.toString();
        	}
        	return lastDate;
        };

        //날짜 형태 변환 함수(yyyy.MM.dd)
        //dat : yyyyMMdd의 형태
        this.fn_date_format = function (dat)
        {

        	var date = dat.toString();
        	//date = 12345678
        	var str1 = date.substr(0,4);//1234
        	var str2 = date.substr(4,2);//56
        	var str3 = date.substr(6,2);//78

        	var str = str1.toString() + '.' + str2.toString() + '.' + str3.toString();
        	return str;
        };

        //날짜 형태 변환 함수(yyyy-MM-dd)
        //dat : yyyyMMdd의 형태
        this.fn_date_format_hyphen = function (dat)
        {

        	var date = dat.toString();
        	//date = 12345678
        	var str1 = date.substr(0,4);//1234
        	var str2 = date.substr(4,2);//56
        	var str3 = date.substr(6,2);//78

        	var str = str1.toString() + '-' + str2.toString() + '-' + str3.toString();
        	return str;
        };



        //그리드 현재 위치 찾기
        this.fn_findCurrentRow = function (scnum)
        {
        	//m_code값으로 현재 행을 찾는다
        	var fRow = this.ds_list.findRow("m_code",scnum);
        	this.ds_list.set_rowposition(fRow);

        };
        /************************************************************************
         * Component Events
         ************************************************************************/
        //콤보박스 체인지
        this.div_search_cmb_year_onitemchanged = function(obj,e)
        {
        	var year = e.postvalue;
        	this.ds_search.setColumn(0,"date_from",year + "0101");
        	this.ds_search.setColumn(0,"date_to",year + "1231");
        };
        //1주일 버튼 클릭
        this.div_search_menu_btn_one_week_onclick = function(obj,e)
        {
        	//현재 날짜
        	var now = new Date();
        	//현재 년도
        	var year = now.getFullYear();
        	//오늘 날짜
        	var today =this.getToday();
        	//Date를 사용
        	var d = new Date(today);
        	//오늘 날짜 -6
        	d.setDate(d.getDate()-6);
        	//ISO string으로 변환 후 substr으로 cut
        	//yyyy-MM-dd의 형태
        	var da = d.toISOString().substr(0,10);
        	//replace로 모든 '-' 를 빈 문자로 치환(정규표현식 사용)
        	var day = da.replace(/-/g,"");

        	//숫자로 된 오늘 날짜
        	var todayNum = this.getTodayNum();
        	this.ds_search.setColumn(0,"year", year);
        	this.ds_search.setColumn(0,"date_from", day);
        	this.ds_search.setColumn(0,"date_to", todayNum);
        };
        //15일 버튼 클릭
        this.div_search_menu_btn_half_of_month_onclick = function(obj,e)
        {
        	var now = new Date();
        	var year = now.getFullYear();
        	var today =this.getToday();

        	var d = new Date(today);
        	d.setDate(d.getDate()-14);
        	var da = d.toISOString().substr(0,10);
        	var day = da.replace(/-/g,"");
        	var todayNum = this.getTodayNum();
        	this.ds_search.setColumn(0,"year", year);
        	this.ds_search.setColumn(0,"date_from", day);
        	this.ds_search.setColumn(0,"date_to", todayNum);
        };
        //1개월 버튼
        this.div_search_menu_btn_one_month_onclick = function(obj,e)
        {

        	var now = new Date();
        	var year = now.getFullYear();
        	var month = now.getMonth()+1;
        	//월말 일 계산
        	var lastDate = this.getLastDay();
        	if (month<10)
        	{
        		month = "0" + month.toString();
        	}
        	var ym= year.toString() + month.toString();
        	this.ds_search.setColumn(0,"year", year);
        	this.ds_search.setColumn(0,"date_from", ym + "01");
        	this.ds_search.setColumn(0,"date_to", ym + lastDate);
        };
        //6개월 버튼
        this.div_search_menu_btn_half_of_year_onclick = function(obj,e)
        {
        	var now = new Date();

        	var fyear = now.getFullYear();

        	//date_from 계산: 현재월 -5개월전의 1일
        	//현재 월이 5보다 크면 그대로 계산
        	var fmonth = now.getMonth()+1;
        	if (fmonth>5)
        	{
        		fmonth = fmonth -5;
        	} else //5 이하라면 년도-1, 월+7 을 한다
        	{
        		fyear--;
        		fmonth = fmonth +7;
        	}

        	if (fmonth<10)
        	{
        		fmonth = "0" + fmonth.toString();
        	}
        	var ym= fyear.toString() + fmonth.toString();
        	this.ds_search.setColumn(0,"date_from", ym + "01");

        	//date_to 계산: 현재월의 말일 setting
        	var tyear = now.getFullYear();
        	var tmonth = now.getMonth()+1;
        	if (tmonth<10)
        	{
        		tmonth = "0" + tmonth.toString();
        	}
        	var lastDate = this.getLastDay();
        	ym= tyear.toString() + tmonth.toString();
        	this.ds_search.setColumn(0,"date_to", ym + lastDate);


        };
        //1년 버튼
        this.div_search_menu_btn_one_year_onclick = function(obj,e)
        {
        	var now = new Date();
        	var year = now.getFullYear();
        	this.ds_search.setColumn(0,"year", year);
        	this.ds_search.setColumn(0,"date_from", year + "0101");
        	this.ds_search.setColumn(0,"date_to", year + "1231");
        };

        //수급자 클릭
        this.div_search_menu_btn_elder_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"s_nm","사용중");
        	this.div_search_menu.form.btn_elder.set_background("red");
        	this.div_search_menu.form.btn_out_of_elder.set_background("");
        	this.div_search_menu.form.btn_all.set_background("");
        	this.fn_search("search");
        };
        //퇴소자 클릭
        this.div_search_menu_btn_out_of_elder_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"s_nm","퇴소자");
        	this.div_search_menu.form.btn_elder.set_background("");
        	this.div_search_menu.form.btn_out_of_elder.set_background("red");
        	this.div_search_menu.form.btn_all.set_background("");
        	this.fn_search("search");
        };
        //전체 클릭
        this.div_search_menu_btn_all_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"s_nm","");

        	this.div_search_menu.form.btn_elder.set_background("");
        	this.div_search_menu.form.btn_out_of_elder.set_background("");
        	this.div_search_menu.form.btn_all.set_background("red");

        	this.fn_search("search");
        };

        //조회 버튼
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	this.fn_search("search");
        };

        //새로작성 버튼 클릭
        this.div_newAndSave_btn_new_onclick = function(obj,e)
        {
        	//validation check
        	if (this.ds_list.rowposition < 0)
        	{
        		this.alert("수급자를 선택해주세요");
        		return ;
        	}
        	//상태변화 textarea reset
        	this.div_container.form.txt_change.set_value("");
        	//작성일을 오늘로
        	var today = this.getTodayNum();
        	this.ds_day.clearData();
        	this.ds_day.addRow();
        	this.ds_day.setColumn(0,"date", today);
        };

        //문자열을 바이트로 변환
        //String 객체의 prototype에 함수를 추가하여 모든 string에서 사용가능
        String.prototype.byteLength = function()
        {	//리턴할 바이트 수
        	let l = 0;
        	//여기서 this는 문자열 자신을 의미
        	for (let idx = 0; idx < this.length; idx++)
        	{	//escape : 한글,한자(2바이트)를 '%u16진수4자리'로 표시
        		//영문,숫자, 일부 특수문자등은 제외
        		//공백 등의 1바이트는 '%xx'의 형태가 됨
        		//charAt(idx) : idx 위치에 해당하는 문자1개 리턴
        		const c = escape(this.charAt(idx));

        		if (c.length == 1) l++;//영문, 숫자의 경우 +1byte
        		else if (c.indexOf("%u") != -1) l += 2;//한글,한자의 경우 +2byte
        		//그 외의 1바이트 문자의 경우 c=%xx 이므로 3글자/3인 +1byte
        		else if (c.indexOf("%") != -1) l += c.length/3;
        	}

        	return l;
        };
        //저장 버튼 클릭 이벤트
        this.div_newAndSave_btn_save_onclick = function(obj,e)
        {
        	//리스트가 선택되지 않으면 경고
        	if (this.ds_list.rowposition < 0)
        	{
        		this.alert("수급자를 선택해주세요");
        		return;
        	}

        	//상태변화 길이가 2글자보다 작으면 경고
        	var txtVal = this.div_container.form.txt_change.value.trim();
        	//4byte로 처리
        	var txtLen = txtVal.byteLength();
        	if (txtLen <4)
        	{
        		this.alert("상태변화를 2글자 이상 입력해주세요");
        		return;
        	}


        	//ds_save 초기화
          	this.ds_save.clearData();
          	this.ds_save.addRow();

        	this.ds_save.setColumn(0,"sicode",fv_sicode);

        	this.ds_save.setColumn(0,"sc_name",this.ds_detail_output.getColumn(0,"sc_name"));
        	this.ds_save.setColumn(0,"sc_code",this.ds_detail_output.getColumn(0,"sc_code"));

        	//작성일
        	var nalja = this.ds_day.getColumn(0,"date");

        	//작성일 세팅
        	//ds_save 데이터셋의 컬럼 sc_nalja를 DATE타입으로 바꿔준다
        	this.ds_save.setColumn(0,"sc_nalja",nalja);

        	//상태변화 컬럼 데이터 수정
        	this.ds_save.setColumn(0,"상태변화",this.div_container.form.txt_change.value);

        	//작성자명
        	var writer = this.ds_writer.getColumn(0,"작성자명");
        	this.ds_save.setColumn(0,"작성자명",writer);
        	//작성코드
        	var code = this.ds_writer.getColumn(0,"작성코드");
        	this.ds_save.setColumn(0,"작성코드",code);
        	//저장
        	this.fn_save();
        };
        /************************************************************************
         * Grid Cell Click
         ************************************************************************/

        //그리드 list 셀 클릭 이벤트
        this.div_list_grd_elderlist_oncellclick = function(obj,e)
        {
        	//수급자명 선택 시 상태변화기록 조회
        	//체크박스 때문에 merge 하여서 index가 1 작아졌다
        	if (e.col == obj.getBindCellIndex("body","m_name")+1)
        	{
        		//이벤트가 발생한 행을 ds_data에 copy한다
        		this.ds_data.clearData();
        		this.ds_data.addRow();
        		this.ds_data.copyRow(0,this.ds_list,e.row);
        		//선택한 행을 특정하는 고유값인 m_code를 세팅
        		this.scnum = this.ds_list.getColumn(e.row,"m_code");

        		//생년월일 세팅
        		//380506 주민번호 앞 6자리
        		var jumin1 = this.ds_data.getColumn(0,"m_jumin1");
        		var sub1 = jumin1.substr(0,2);//38
        		var sub2 = jumin1.substr(2,2);//05
        		var sub3 = jumin1.substr(4,2);//06
        		var str = sub1 + "-" + sub2 + "-" + sub3;
        		this.ds_data.setColumn(0,"생년월일", str);

        		//작성일 세팅(오늘이 초기값)
        		var today = this.getTodayNum();
        		this.ds_day.clearData();
        		this.ds_day.addRow();
        		this.ds_day.setColumn(0,"date", today);

        		//날짜 형태 세팅(yyyy.MM.dd)
        		var f_enday = this.fn_date_format(this.ds_data.getColumn(0,"m_enday"));
        		var f_reday = this.fn_date_format(this.ds_data.getColumn(0,"m_reday"));
        		var f_liday1 = this.fn_date_format(this.ds_data.getColumn(0,"m_liday1"));
        		var f_liday2 = this.fn_date_format(this.ds_data.getColumn(0,"m_liday2"));

        		this.ds_data.setColumn(0,"m_enday", f_enday);
        		this.ds_data.setColumn(0,"m_reday", f_reday);
        		this.ds_data.setColumn(0,"m_liday1", f_liday1);
        		this.ds_data.setColumn(0,"m_liday2", f_liday2);


        		//퇴소일 세팅(사용중이면 퇴소일 빈문자 세팅)
        		if (this.ds_data.getColumn(0,"s_nm") != "퇴소자")
        		{
        			this.ds_data.setColumn(0,"m_reday", " ");
        		}

        		//이미지 로드
        		this.fn_getSignImage();

        		//상태변화 textarea clear
        		this.div_container.form.txt_change.set_value("");


        		//detail 조회를 위한 파라미터 get
        		var sc_code = this.ds_list.getColumn(e.row,"m_code");
        		var date_from = this.ds_search.getColumn(0, "date_from");
        		var date_to = this.ds_search.getColumn(0, "date_to");
        		//ds_detail_input 데이터 셋을 이용하여 조회
        		this.ds_detail_input.clearData();
        		this.ds_detail_input.addRow();
        		this.ds_detail_input.setColumn(0,"sicode", fv_sicode);
        		this.ds_detail_input.setColumn(0,"sc_code", sc_code);
        		this.ds_detail_input.setColumn(0,"date_from", date_from);
        		this.ds_detail_input.setColumn(0,"date_to", date_to);
        		this.fn_detail_search("detail");
        	}
        };

        //그리드 detail 클릭 이벤트(수정 팝업,내용복사, 작성자 세팅)
        this.div_container_grd_detail_oncellclick = function(obj,e)
        {
        	//작성자 세팅
        	var writer = this.ds_detail_output.getColumn(e.row,"작성자명");
        	var code = this.ds_detail_output.getColumn(e.row,"작성코드");
        	var view_writer = writer + "/" + code;
        	this.ds_writer.clearData();
        	this.ds_writer.addRow();
        	this.ds_writer.setColumn(0,"작성자명",writer);
        	this.ds_writer.setColumn(0,"작성코드",code);
        	this.ds_writer.setColumn(0,"view_writer", view_writer);

        	//작성일 클릭 이벤트
        	if (e.col == obj.getBindCellIndex("body","sc_nalja"))
        	{
        		//수정 팝업 호출
        		this.fn_popUpdate(e.row);
        	}


        	//내용복사 컬럼 인덱스 = 작성자명 컬럼+1
         	if (e.col == obj.getBindCellIndex("body","작성자명") + 1 )
         	{
        		//복사 버튼을 클릭한 row의 상태변화 내용이 입력폼의 상태변화로 복사
        		var changedText = this.ds_detail_output.getColumn(e.row,"상태변화");
         		this.div_container.form.txt_change.set_value(changedText);

         	}
        };


        /************************************************************************
         * Popup
         ************************************************************************/
        // 수정,삭제 팝업
        this.fn_popUpdate = function (row)
        {
        	var sc_number = this.ds_detail_output.getColumn(row,"sc_number");
        	//sc_nalja가 date 타입으로 param으로 넘겨줄 때 에러발생
        	var sc_nalja = this.ds_detail_output.getColumn(row,"sc_nalja");
        	//string으로 변환
        	var nalja = sc_nalja.toString();
        	//앞의 8자리 숫자만 cut
        	var nal = nalja.substr(0,8);

        	var sc_name = this.ds_detail_output.getColumn(row,"sc_name");
        	var sc_code = this.ds_detail_output.getColumn(row,"sc_code");
        	var text = this.ds_detail_output.getColumn(row,"상태변화");
        	var writer = this.ds_detail_output.getColumn(row,"작성자명");
        	var wCode = this.ds_detail_output.getColumn(row,"작성코드");
        	var gender = this.ds_detail_output.getColumn(row,"성별");
        	var group = this.ds_detail_output.getColumn(row,"그룹");

        	//팝업창에 전달할 파라미터
        	const param = {
        		sicode : fv_sicode
        	,	sc_number : sc_number
        	,	sc_nalja : nal
        	,	sc_name : sc_name
        	,	sc_code : sc_code
        	,	text : text
        	,	writer : writer
        	,	wCode : wCode
        	,	gender: gender
        	,	group : group
        	,	date : this.ds_day.getColumn(0,"date")
        	}

        	Sct.popup(this, "stat", 450, 400, "상태변화기록 수정", param, "DAY_POP::DAY00102_5_P02.xfdl", "fn_popCallback");
        };

        //작성자 팝업
        this.div_container_btn_worker_onclick = function(obj,e)
        {
        	if (this.ds_list.rowposition < 0) {
        		return;
        	}


        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_day.getColumn(0, "date")
        	};

        	Sct.popup(this, "emp", 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_5_PP.xfdl", "fn_popCallback");
        };


        //요양 간호일지 조회 팝업
        this.div_btnPrint_btn_search_log_onclick = function(obj,e)
        {
        	//수급자 선택여부 체크
        	if (this.ds_list.rowposition < 0){
        		this.alert("수급자를 선택해주세요");
        		return;
        	}
        	//팝업 전 유효성 검사(데이터 존재 여부 체크)
        	this.fn_log_pre();
        };

        //요양 간호일지 조회 팝업창 오픈
        this.fn_log_popup = function ()
        {
        	//그리드 셀 클릭시 scnum에 m_code의 값이 할당된다
        	const param = {
        			SICODE : fv_sicode
        		,	K_CODE : this.scnum
        	};

        	Sct.popup(this, "log", 450, 400, "주간", param, "DAY_POP::DAY00102_5_P01.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return; //strDs의 데이터로 xml 파일이 옴

        	//부모에서 자식 데이터셋을 활용하기 위한 메소드
        	const objDs = this.gfn_createReturnDs(this, "ds_return", strDs);

        	switch(popid)
        	{	//수정창 팝업 콜백
        		case "stat" :
        			//수정된 row를 다시 조회하여 보여준다
        			this.fn_search("search_save");
        			break;
        		//요양.간호일지 팝업 콜백
        		case "log" :
        			//text컬럼의 데이터가 존재하면
        			if (objDs.getColumn(0,"text") != "")
        			{	//상태변화 textarea의 기존값에 새로운 str을 추가
        				var str = this.div_container.form.txt_change.value;
        				str += objDs.getColumn(0,"text");
        				this.div_container.form.txt_change.set_value(str);
        			}
        			break;
        		//작성자 팝업 콜백
        		case "emp":
        			//DEL컬럼:지움 버튼을 클릭하면 DEL이 1이된다
        			if (objDs.getColumn(0, "DEL") != "1")
        			{	//지움 버튼을 클릭하지 않은 경우 작성자 할당
        				//작성자명
        				const name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				//작성코드
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_writer.clearData();
        				this.ds_writer.addRow();
        				this.ds_writer.setColumn(0, "작성자명", name);
        				this.ds_writer.setColumn(0, "작성코드", staffid);

        				this.ds_writer.setColumn(0, "view_writer", name + "/" + staffid);
        			}
        			else//지움 버튼을 클릭하면 view_writer의 값이 없어짐
        			{
        				this.ds_writer.setColumn(0, "작성자명", "");
        				this.ds_writer.setColumn(0, "작성코드", "");

        				this.ds_writer.setColumn(0, "view_writer", "");
        			}
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_return", strDs);
        	}
        };

        //상태변화 기록서식 리포트 팝업 버튼
        this.div_btnPrint_btn_print1_onclick = function(obj,e)
        {
        	this.fn_report_stat();
        };
        //상태변화 기록서식 리포트 팝업
        this.fn_report_stat = function()
        {
        	//그리드가 클릭되지 않으면 경고 및 false
        	if (this.ds_data.rowcount == 0)
        	{
        		this.alert("출력할 항목을 선택해주세요.");
        		return false;
        	}


        	let params;
        	const dicompNm = " ";
        	//popup되는 넥사크로 파일 경로
        	const popupUrl = "DAY_POP::DAY00102_5_R01.xfdl";
        	//리포트 제목
        	const popupName = "상태변화기록";

        	//팝업 창에 전달할 파라미터(key,value)
        	//리포트 팝업 onload시 this.parent.pParam으로 접근
        	params = {
        		sicode : fv_sicode
        	,	m_code : this.ds_data.getColumn(0, "m_code")
        	};
        	//리포트 팝업 메소드
        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };



        //수급자 상태변화기록 리포트 팝업
        this.div_btnPrint_btn_print2_onclick = function(obj,e)
        {
        	this.fn_report_recipient();
        };
        //수급자 상태변화기록 리포트 팝업 함수
        this.fn_report_recipient = function()
        {
        	//그리드가 클릭되지 않으면 경고 및 false
        	if (this.ds_data.rowcount == 0)
        	{
        		this.alert("수급자를 선택해주세요.");
        		return false;
        	}
        	//데이터가 없으면 경고 및 false
        	if (this.ds_detail_output.rowcount == 0)
        	{
        		this.alert("출력할 데이터가 없습니다.");
        		return false;
        	}
        	let params;
        	const dicompNm = " ";
        	//popup되는 넥사크로 파일 경로
        	const popupUrl = "DAY_POP::DAY00102_5_R02.xfdl";
        	//리포트 제목
        	const popupName = "수급자 상태변화기록";

        	var sign;
         	//결재란 체크 유무 확인
         	if (this.div_btnPrint.form.chk_sign.isChecked())
         	{
         		sign = 1;
         	} else
        	{
        		sign = 0;
        	}
        	//flag로 리포트에서 멀티리포트인지 체크(1이면 멀티리포트)
        	var flag = "0";
        	//조회하는 날짜 from,to 를 리포트에 아규먼트로 전달(1234.56.78의 형태)
        	var fdate_ = this.ds_search.getColumn(0, "date_from");
        	var tdate_ = this.ds_search.getColumn(0, "date_to");
        	var fdate = this.fn_date_format(fdate_);
        	var tdate = this.fn_date_format(tdate_);
        	//팝업 창에 전달할 파라미터(key,value)
        	//리포트 팝업 onload시 this.parent.pParam으로 접근
        	params = {
        		sicode : fv_sicode
        	,	m_code : this.ds_data.getColumn(0, "m_code")
        	,	fdate : fdate
        	,	tdate : tdate
        	,	sign : sign
        	,	flag : flag
        	};
        	//리포트 팝업 메소드
        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        //기간별 상태변화기록 리포트 팝업
        this.div_btnPrint_btn_print3_onclick = function(obj,e)
        {
        	this.fn_report_period();
        };
        //기간별 상태변화기록 리포트 팝업
        this.fn_report_period = function()
        {
        	//185일(6개월) 이내 데이터만 출력 가능
        	var fdate_ = this.ds_search.getColumn(0, "date_from");
        	var tdate_ = this.ds_search.getColumn(0, "date_to");

        	//하이픈이 있는 형태로 변형
        	var fdate_h = this.fn_date_format_hyphen(fdate_);
        	var tdate_h = this.fn_date_format_hyphen(tdate_);
        	//date 타입의 데이터로 변환
        	var fday = new Date(fdate_h);
        	var tday = new Date(tdate_h);
        	//두 날짜의 차를 계산
        	var diff = tday.getTime() - fday.getTime();

        	//일 수로 계산 - 하루의 밀리초(1000* 3600 * 24) 를 나눠서 계산
        	//abs로 절대값 계산
        	var diffDate = Math.abs(diff / (1000 * 3600 * 24));

         	if (diffDate>185)
         	{
        		this.alert("6개월 이내만 출력해주세요");
         		return false;
         	}

        	//그리드가 클릭되지 않으면 경고 및 false
        	if (this.ds_data.rowcount == 0)
        	{
        		this.alert("수급자를 선택해주세요.");
        		return false;
        	}
        	//데이터가 없으면 경고 및 false
        	if (this.ds_detail_output.rowcount == 0)
        	{
        		this.alert("출력할 데이터가 없습니다.");
        		return false;
        	}
        	let params;
        	const dicompNm = " ";
        	//popup되는 넥사크로 파일 경로
        	const popupUrl = "DAY_POP::DAY00102_5_R03.xfdl";
        	//리포트 제목
        	const popupName = "기간별 상태변화기록";

        	var sign;
         	//결재란 체크 유무 확인
         	if (this.div_btnPrint.form.chk_sign.isChecked())
         	{
         		sign = 1;
         	} else
        	{
        		sign = 0;
        	}

        	//조회하는 날짜 from,to 를 리포트에 아규먼트로 전달(1234.56.78의 형태)
        	var fdate = this.fn_date_format(fdate_);
        	var tdate = this.fn_date_format(tdate_);

        	//팝업 창에 전달할 파라미터(key,value)
        	//리포트 팝업 onload시 this.parent.pParam으로 접근
        	params = {
        		sicode : fv_sicode
        	,	m_code : this.ds_data.getColumn(0, "m_code")
        	,	fdate : fdate
        	,	tdate : tdate
        	,	sign : sign
        	};
        	//리포트 팝업 메소드
        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        //상태변화기록(선택) 리포트 팝업
        this.div_btnPrint_btn_print4_onclick = function(obj,e)
        {
        	this.fn_report_list();
        };
        //상태변화기록(선택) 리포트 팝업 함수
        this.fn_report_list = function()
        {
        	//그리드 체크가 되지 않으면 경고 및 false
        	//출력 체크박스에 체크된 수 확인
        	var chkCnt = this.ds_list.getCaseCount("p_chk == 1");
        	if (chkCnt<1)
        	{
        		this.alert("출력 체크를 해주세요.");
        		return false;
        	}

        	//m_code를 배열로 전달해야 할 것임
        	var arg = new Array();
        	var j=0;
        	//ds_list중에 체크 된 데이터만 복사
        	for(let i=0;i<this.ds_list.getRowCount();i++) {
        		if(this.ds_list.getColumn(i,"p_chk") == 1){
        			arg[j++] = this.ds_list.getColumn(i,"m_code");
        		}
        	}


        	var flag = "1";
        	let params;
        	const dicompNm = " ";
        	//popup되는 넥사크로 파일 경로
        	const popupUrl = "DAY_POP::DAY00102_5_R02.xfdl";
        	//리포트 제목
        	const popupName = "수급자 상태변화기록";

        	var sign;
         	//결재란 체크 유무 확인
         	if (this.div_btnPrint.form.chk_sign.isChecked())
         	{
         		sign = 1;
         	} else
        	{
        		sign = 0;
        	}

        	//조회하는 날짜 from,to 를 리포트에 아규먼트로 전달(1234.56.78의 형태)
        	var fdate_ = this.ds_search.getColumn(0, "date_from");
        	var tdate_ = this.ds_search.getColumn(0, "date_to");
        	var fdate = this.fn_date_format(fdate_);
        	var tdate = this.fn_date_format(tdate_);

        	//배열에 담긴 m_code 데이터에 해당하는 수급자중 detail정보가 없으면 제외
        	//ds_records_output 데이터셋에 가공된 배열이 문자열로 저장
        	//문자열 : A123456 , B234556, ...., D3455677
        	this.fn_search_record(arg,fdate_,tdate_);

        	//데이터가 존재하는 m_code만 문자열로 가져옴
        	var arrStr = this.ds_records_output.getColumn(0,0);
        	//배열의 값이 빈 문자열인 경우 경고(데이터가 없는 경우)
        	if (arrStr == "" || arrStr == null)
        	{
        		this.alert("출력할 데이터가 없습니다");
        		return ;
        	}

        	//arrStr을 배열로 변환
        	var arr = new Array();
        	//split 함수는 문자열을 구분자에 따라 구분하여 배열로 리턴
        	arr = arrStr.split(",");

        	//팝업 창에 전달할 파라미터(key,value)
        	//리포트 팝업 onload시 this.parent.pParam으로 접근
        	params = {
        		sicode : fv_sicode
        	,	m_code : arr
        	,	fdate : fdate
        	,	tdate : tdate
        	,	sign : sign
        	,   flag : flag
        	};
        	//리포트 팝업 메소드
        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        //이미지 로드 함수
        this.fn_getSignImage = function ()
        {
        	let imgUrl = "";
        	const fileName = this.ds_data.getColumn(0, "sajin");

        	if(!Sct.Util.isEmpty(fileName))
        	{
        		//localhost:8080
        		const webHost = nexacro.getEnvironment().services["svcurl"].url;
        		const path = "/FILES/";
        		imgUrl = webHost + path + fileName;
        		//this.alert(imgUrl);
        	}
        	this.div_container.form.imv_00.set_image(imgUrl);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search_menu.form.btn_one_week.addEventHandler("onclick",this.div_search_menu_btn_one_week_onclick,this);
            this.div_search_menu.form.btn_one_year.addEventHandler("onclick",this.div_search_menu_btn_one_year_onclick,this);
            this.div_search_menu.form.btn_all.addEventHandler("onclick",this.div_search_menu_btn_all_onclick,this);
            this.div_search_menu.form.btn_half_of_month.addEventHandler("onclick",this.div_search_menu_btn_half_of_month_onclick,this);
            this.div_search_menu.form.btn_one_month.addEventHandler("onclick",this.div_search_menu_btn_one_month_onclick,this);
            this.div_search_menu.form.btn_half_of_year.addEventHandler("onclick",this.div_search_menu_btn_half_of_year_onclick,this);
            this.div_search_menu.form.btn_elder.addEventHandler("onclick",this.div_search_menu_btn_elder_onclick,this);
            this.div_search_menu.form.btn_out_of_elder.addEventHandler("onclick",this.div_search_menu_btn_out_of_elder_onclick,this);
            this.div_list.form.grd_elderlist.addEventHandler("oncellclick",this.div_list_grd_elderlist_oncellclick,this);
            this.div_newAndSave.form.btn_save.addEventHandler("onclick",this.div_newAndSave_btn_save_onclick,this);
            this.div_newAndSave.form.btn_new.addEventHandler("onclick",this.div_newAndSave_btn_new_onclick,this);
            this.div_btnPrint.form.btn_print4.addEventHandler("onclick",this.div_btnPrint_btn_print4_onclick,this);
            this.div_btnPrint.form.btn_search_log.addEventHandler("onclick",this.div_btnPrint_btn_search_log_onclick,this);
            this.div_btnPrint.form.btn_print1.addEventHandler("onclick",this.div_btnPrint_btn_print1_onclick,this);
            this.div_btnPrint.form.btn_print3.addEventHandler("onclick",this.div_btnPrint_btn_print3_onclick,this);
            this.div_btnPrint.form.btn_print2.addEventHandler("onclick",this.div_btnPrint_btn_print2_onclick,this);
            this.div_container.form.sta_00_03.addEventHandler("onclick",this.div_btnPrint00_sta_00_03_onclick,this);
            this.div_container.form.sta_00_03_01.addEventHandler("onclick",this.div_btnPrint00_sta_00_03_onclick,this);
            this.div_container.form.sta_00_03_01_00.addEventHandler("onclick",this.div_btnPrint00_sta_00_03_onclick,this);
            this.div_container.form.sta_00_03_01_00_00.addEventHandler("onclick",this.div_btnPrint00_sta_00_03_onclick,this);
            this.div_container.form.btn_worker.addEventHandler("onclick",this.div_container_btn_worker_onclick,this);
            this.div_container.form.grd_detail.addEventHandler("oncellclick",this.div_container_grd_detail_oncellclick,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.div_search_cmb_year_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.div_search_btn_search_onclick,this);
        };
        this.loadIncludeScript("DAY00102_5.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
