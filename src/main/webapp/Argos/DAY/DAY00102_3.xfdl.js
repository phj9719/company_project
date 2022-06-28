(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00102_3");
            this.set_titletext("New form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin2\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"등급\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"입소일\" type=\"STRING\" size=\"256\"/><Column id=\"퇴소일\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/><Column id=\"인정기간\" type=\"STRING\" size=\"256\"/><Column id=\"인정기간2\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso1\" type=\"STRING\" size=\"256\"/><Column id=\"m_juso2\" type=\"STRING\" size=\"256\"/><Column id=\"m_post\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname\" type=\"STRING\" size=\"256\"/><Column id=\"나이\" type=\"STRING\" size=\"256\"/><Column id=\"생년월일\" type=\"STRING\" size=\"256\"/><Column id=\"체크\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">2021</Col><Col id=\"CMNM\">2021년</Col></Row><Row><Col id=\"CMCD\">2022</Col><Col id=\"CMNM\">2022년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/><Column id=\"date_year\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"나이\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"생년월일\" type=\"STRING\" size=\"256\"/><Column id=\"입소일\" type=\"STRING\" size=\"256\"/><Column id=\"퇴소일\" type=\"STRING\" size=\"256\"/><Column id=\"m_regist\" type=\"STRING\" size=\"256\"/><Column id=\"인정기간\" type=\"STRING\" size=\"256\"/><Column id=\"인정기간2\" type=\"STRING\" size=\"256\"/><Column id=\"m_history\" type=\"STRING\" size=\"256\"/><Column id=\"m_conname\" type=\"STRING\" size=\"256\"/><Column id=\"등급\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"view_manager\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data2", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"sc_number\" type=\"STRING\" size=\"256\"/><Column id=\"sc_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"sc_name\" type=\"STRING\" size=\"256\"/><Column id=\"sc_code\" type=\"STRING\" size=\"256\"/><Column id=\"상태변화\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/><Column id=\"org_sc_number\" type=\"STRING\" size=\"256\"/><Column id=\"요일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_data2", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/><Column id=\"date_year\" type=\"STRING\" size=\"256\"/><Column id=\"sc_code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_state_desc", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"sc_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"sc_code\" type=\"STRING\" size=\"256\"/><Column id=\"sc_name\" type=\"STRING\" size=\"256\"/><Column id=\"상태변화\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/><Column id=\"view_manager\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"sign\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_record_cnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nurse_cnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_00","0","0","450","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_year","0","10","80","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_text("cmb_00");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("cal_fom","90","10","90","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_buttonsize("0 0");
            obj.set_readonly("true");
            obj.set_tabstop("true");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("cal_from_pic","180","10","30","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("cal_to","230","10","90","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_buttonsize("0 0");
            obj.set_readonly("true");
            obj.set_tabstop("true");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("cal_to_pic","320","10","30","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_search","380","10","70","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_00","215","10","10","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("6");
            obj.set_text("~");
            this.div_00.addChild(obj.name, obj);

            obj = new Div("div_01","0","45","450","705",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_left","0","35","450","670",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"65\"/><Column size=\"40\"/><Column size=\"85\"/><Column size=\"40\"/><Column size=\"65\"/><Column size=\"75\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"출력\" expandchar=\"rno\"/></Cell><Cell col=\"2\" text=\"현황\"/><Cell col=\"3\" text=\"그룹\"/><Cell col=\"4\" text=\"수금자명\"/><Cell col=\"5\" text=\"성별\"/><Cell col=\"6\" text=\"등급\"/><Cell col=\"7\" text=\"생활실\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:체크\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"2\" text=\"bind:s_nm\"/><Cell col=\"3\" text=\"bind:m_group\"/><Cell col=\"4\" text=\"bind:m_name\" expandchar=\"dot\" cssclass=\"cellBWoman\" cursor=\"pointer\"/><Cell col=\"5\" text=\"bind:성별\"/><Cell col=\"6\" text=\"bind:등급\"/><Cell col=\"7\" text=\"bind:m_roomname\"/></Band></Format></Formats>");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_week","0","5","38","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("1주일");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_15day","43","5","38","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("15일");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_month","86","5","38","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_text("1개월");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_6month","129","5","38","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_text("6개월");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_use","215","5","75","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            obj.set_text("수급자");
            obj.set_cssclass("btn_eldery");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_end","295","5","75","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("6");
            obj.set_text("퇴소자");
            obj.set_cssclass("btn_eldery");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_year","172","5","38","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("7");
            obj.set_text("1년");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_all","375","5","75","25",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("8");
            obj.set_text("전체");
            obj.set_cssclass("btn_eldery");
            this.div_01.addChild(obj.name, obj);

            obj = new Div("div_02","470","0","1300","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new","5","10","90","25",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("0");
            obj.set_text("새로작성");
            obj.set_cssclass("btn_newdoc");
            this.div_02.addChild(obj.name, obj);

            obj = new Button("btn_01","1190","10","70","25",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_02.addChild(obj.name, obj);

            obj = new Div("div_03","470","45","1300","350",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_03");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","5","35","90","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("0");
            obj.set_text("수급자명");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_04","420","35","90","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("4");
            obj.set_text("성별 나이");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_07","640","35","90","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("7");
            obj.set_text("입소일");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_08","730","35","130","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("8");
            obj.set_text("입소일");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_09","860","35","90","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("9");
            obj.set_text("인정번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_10","950","35","180","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("regist");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_11","5","70","90","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("11");
            obj.set_text("생활실");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_12","95","70","325","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("12");
            obj.set_text("생활실");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_13","420","70","90","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("13");
            obj.set_text("생년월일");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_14","510","70","130","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("14");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_15","640","70","90","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("15");
            obj.set_text("퇴소일");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_16","730","70","130","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("16");
            obj.set_text("퇴소일");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_17","860","70","90","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("17");
            obj.set_text("인정기간");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_19","5","105","90","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("19");
            obj.set_text("주요질환");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_20","95","105","545","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("20");
            obj.set_text("히스토리");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_22","640","105","90","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("21");
            obj.set_text("대리인");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_23","730","105","130","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("22");
            obj.set_text("conname");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_24","860","105","90","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("23");
            obj.set_text("인정등급");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_25","950","105","180","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("24");
            obj.set_text("등급");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_26","5","140","90","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("25");
            obj.set_text("주소");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_27","95","140","1035","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("26");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_28","5","180","90","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("27");
            obj.set_text("작성일");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_29","95","180","1165","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_30","5","215","90","100",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("29");
            obj.set_text("상태변화");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_31","95","215","1165","100",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("30");
            obj.set_text("sta_00");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_03.addChild(obj.name, obj);

            obj = new Button("btn_00","5","5","160","25",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("31");
            obj.set_text("요양·간호일지 조회");
            obj.set_cssclass("btn_search");
            this.div_03.addChild(obj.name, obj);

            obj = new Button("btn_01","170","5","160","25",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("32");
            obj.set_text("상태변화 기록서식");
            obj.set_cssclass("btn_print");
            this.div_03.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","705","5","60","25",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("33");
            obj.set_text("결재란");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_03.addChild(obj.name, obj);

            obj = new Button("btn_02","770","5","160","25",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("34");
            obj.set_text("수급자 상태변화기록");
            obj.set_cssclass("btn_print");
            this.div_03.addChild(obj.name, obj);

            obj = new Button("btn_03","935","5","160","25",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("35");
            obj.set_text("기간별 상태변화기록");
            obj.set_cssclass("btn_print");
            this.div_03.addChild(obj.name, obj);

            obj = new Button("btn_04","1100","5","160","25",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("36");
            obj.set_text("상태변화 기록(선택)");
            obj.set_cssclass("btn_print");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_32","5","315","90","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("38");
            obj.set_text("sta_01");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_33","95","315","1165","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_03.addChild(obj.name, obj);

            obj = new Button("btn_manager","10","320","80","25",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("37");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_03.addChild(obj.name, obj);

            obj = new ImageViewer("imv_00","1130","35","130","140",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("40");
            obj.set_text("imv_00");
            this.div_03.addChild(obj.name, obj);

            obj = new Calendar("cal_00","100","185","90","25",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("41");
            obj.set_buttonsize("0 0");
            obj.set_readonly("true");
            obj.set_displayinvalidtext("invalid value");
            obj.set_accessibilityrole("calendar");
            this.div_03.addChild(obj.name, obj);

            obj = new Calendar("cal_01","cal_00:0","185","30","25",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("42");
            this.div_03.addChild(obj.name, obj);

            obj = new TextArea("txt_00","100","220","1155","90",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("43");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_34","380","315","500","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("44");
            obj.set_text("▲ 사소한 내용이라도 작성해야 합니다.");
            obj.set_textAlign("center");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_35","545","47","23","18",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("45");
            obj.set_text("sta_35");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_12_00","95","35","325","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_01","95","35","130","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("1");
            obj.set_text("이름");
            obj.set_padding("8px");
            obj.set_color("#333333");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_02","225","35","65","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("2");
            obj.set_text("그룹");
            obj.set_padding("8px");
            obj.set_color("#333333");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_03","290","35","130","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("3");
            obj.set_text("코드");
            obj.set_padding("8px");
            obj.set_color("#333333");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_14_00","510","35","130","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_05","510","35","65","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("5");
            obj.set_text("성별");
            obj.set_padding("8px");
            obj.set_color("#333333");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_06","550","35","65","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("6");
            obj.set_text("나이");
            obj.set_padding("8px");
            obj.set_color("#333333");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_21","950","70","180","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_18","950","70","90","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("18");
            obj.set_text("인정기간");
            obj.set_padding("8px");
            obj.set_color("#333333");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_18_00","1040","70","90","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("48");
            obj.set_text("인정기간2");
            obj.set_padding("8px");
            obj.set_color("#333333");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_36","1025","70","20","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("50");
            obj.set_text("~");
            obj.set_padding("8px");
            obj.set_color("#333333");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("sta_37","95","315","255","35",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("51");
            obj.set_color("#333333");
            obj.set_padding("8px");
            obj.set_text("");
            this.div_03.addChild(obj.name, obj);

            obj = new Div("div_04","470","400","1300","350",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div_04");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_right","5","5","1255","345",null,null,null,null,null,null,this.div_04.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_data2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"750\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"작성일\"/><Cell col=\"1\" text=\"요일\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"상태변화기록\"/><Cell col=\"4\" text=\"작성자명\"/><Cell col=\"5\" text=\"내용복사\"/></Band><Band id=\"body\"><Cell text=\"bind:sc_nalja\" cssclass=\"cellBWoman\" calendardateformat=\"yyyy.MM.dd\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:요일\"/><Cell col=\"2\" text=\"bind:sc_name\"/><Cell col=\"3\" text=\"bind:상태변화\" displaytype=\"textareacontrol\" edittype=\"readonly\"/><Cell col=\"4\" text=\"bind:작성자명\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" text=\"복 사\"/></Band></Format></Formats>");
            this.div_04.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_00.form.cmb_year","value","ds_search","date_year");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_00.form.cal_fom","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_00.form.cal_from_pic","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_00.form.cal_to","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_00.form.cal_to_pic","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_03.form.sta_01","text","ds_data","m_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_03.form.sta_02","text","ds_data","m_group");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_03.form.sta_03","text","ds_data","m_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_03.form.sta_05","text","ds_data","성별");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_03.form.sta_06","text","ds_data","나이");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_03.form.sta_08","text","ds_data","입소일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_03.form.sta_16","text","ds_data","퇴소일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_03.form.sta_10","text","ds_data","m_regist");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_03.form.sta_12","text","ds_data","m_roomname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_03.form.sta_14","text","ds_data","생년월일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_03.form.sta_18","text","ds_data","인정기간");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_03.form.sta_18_00","text","ds_data","인정기간2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_03.form.sta_20","text","ds_data","m_history");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_03.form.sta_23","text","ds_data","m_conname");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_03.form.sta_25","text","ds_data","등급");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_03.form.sta_27","text","ds_data","주소");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_03.form.cal_00","value","ds_state_desc","sc_nalja");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_03.form.sta_37","text","ds_state_desc","view_manager");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_03.form.txt_00","value","ds_state_desc","상태변화");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_03.form.cal_01","value","ds_state_desc","sc_nalja");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_03.form.chk_sign","value","ds_report","sign");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00102_3.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00102_3.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00102_3.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        var fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        this.fv_staff_id = nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid");
        this.fv_staff_name = nexacro.getApplication().gds_userInfo.getColumn(0, "c_name");

        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_01.form.grd_left;
        this.reSearchData = "";
        this.searchFlag = "";
        this.fileGroupId = "";

        //온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	//년도,날짜
        	const date = new Date();
        	const year = date.getFullYear();
        	// -10년 +2년
        	this.ds_year.clearData();
        	let nRow;
        	for (let i = 10; i > 0; i--)
        	{
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year - i);
        		this.ds_year.setColumn(nRow, "CMNM", (year - i) + "년");
        	}
        	for (let i = 0; i < 2; i++)
        	{
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year + i);
        		this.ds_year.setColumn(nRow, "CMNM", (year + i) + "년");
        	}

        	let today = Sct.Util.getToday(); //오늘 날짜
        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "date_from", year + '0101');
        	this.ds_search.setColumn(0, "date_to", today);
        	this.ds_search.setColumn(0, "date_year", year);
        	this.ds_search.setColumn(0, "s_nm", "사용중");

        	// 화면 우측 작성일 세팅
        	this.ds_state_desc.setColumn(0, "sc_nalja", today);

        	this.fn_setLeftGrid();
        	this.fn_setRightGrid();

        	this.ds_report.setColumn(0, "sign", 1);

        	this.fn_search();
        };

        //콤보박스 변경
        this.div_00_cmb_year_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "date_from", e.postvalue + '0101');
        	this.ds_search.setColumn(0, "date_to", e.postvalue + '1231');
        	this.div_00.form.cal_from_pic.set_value(e.postvalue + "0101");
        	this.div_00.form.cal_to_pic.set_value(e.postvalue + "1231");

        	this.fn_search("search");

        };

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
        	if (this.ds_state_desc.rowcount == 0)
        	{
        		this.alert("저장할 항목이 없습니다.");
        		return false;
        	}

        	if (Sct.Util.isEmpty(this.ds_state_desc.getColumn(0, "상태변화")))
        	{
        		this.alert("상태변화에 내용을 입력하세요.");
        		return false;
        	}

        	// 작성자가 지정되지 않은 경우
        	if (Sct.Util.isEmpty(this.ds_state_desc.getColumn(0, "작성코드")))
        	{
        		this.alert("작성직원을 지정해야합니다.");
        		return false;
        	}

        	// 한글기준 2글자 이상인지 체크(영문,숫자 4글자)
        	var stateText = this.ds_state_desc.getColumn(0,"상태변화");
        	stateText = nexacro.trim(stateText);
        	this.ds_state_desc.setColumn(0,"상태변화",stateText);
        	var txtLen = stateText.byteLength();
        	if (txtLen < 4) {
        		this.alert("상태변화 기록을 2글자 이상 입력하세요");
        		return false;
        	}

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

        	return true;
        };


        //조회
        this.fn_search = function()
        {
        	//validation
        	//if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00102_3.DAY00102_3_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_searchData2 = function ()
        {
        	//validation
        	//if (!this.fn_searchData2_pre()) return;

        	const svcId = "searchData2";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search_data2";
        	const outDatasets = "ds_data2=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00102_3.DAY00102_3_DS_DATA2_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };


        // 저장
        this.fn_save = function()
        {
        	// validation
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
        	const params = "/DAY00102_3Controller.do";
        	const inDatasets = "input1=ds_state_desc";
        	const outDatasets = "";
        	const argument = "method=save";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			this.ds_list.set_rowposition(-1);
        		}
        		else if (strSvcID == "searchData2")
        		{
        			this.ds_data2.set_rowposition(-1);
        		}
        		else if (strSvcID == "save")
        		{
        			this.alert("상태변화 기록 저장완료.");
        			this.ds_state_desc.setColumn(0,"상태변화","");
        			this.fn_searchData2();
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };

        //조회 버튼
        this.fn_btn_search = function(obj,e)
        {
        	this.ds_data.clearData();
        	this.ds_data2.clearData();
        	this.ds_state_desc.clearData();

        	this.ds_search.setColumn(0,"s_nm","사용중");	// 초기값은 수급자만 리스팅

        	this.fn_search();
        };

        // 저장 버튼
        this.fn_saveBtn = function()
        {
        	this.fn_save();
        };

        // 삭제 버튼
        this.fn_deleteBtn = function()
        {
        	this.fn_delete();
        };


        // 새로작성
        this.div_02.form.btn_new_onclick = function(obj,e)
        {
        	let m_code = this.ds_data.getColumn(0,"m_code");
        	if (m_code == null || m_code == "") {
        		alert("먼저 수급자를 선택하시오");
        		return false;
        	}

        	this.fn_set_new_state_change();
        };

        this.fn_set_new_state_change = function()
        {
        	var sicode = this.ds_data.getColumn(0,"sicode");
        	var m_code = this.ds_data.getColumn(0,"m_code");
        	var m_name = this.ds_data.getColumn(0,"m_name");
        	let today = Sct.Util.getToday();
        	if (this.ds_state_desc.rowcount == 0) {
        		this.ds_state_desc.addRow();
        	}
        	this.ds_state_desc.setColumn(0, "sc_nalja", today);
        	this.ds_state_desc.setColumn(0,"sicode", sicode);
        	this.ds_state_desc.setColumn(0,"sc_code", m_code); // base_mate 테이블의 m_code가 kmstchange 테이블에서는 sc_code
        	this.ds_state_desc.setColumn(0,"sc_name", m_name);
        	this.ds_state_desc.setColumn(0, "상태변화", "");
        	this.ds_state_desc.setColumn(0, "작성자명", this.fv_staff_name); //작성자를 로그인 사용자로
        	this.ds_state_desc.setColumn(0, "작성코드", this.fv_staff_id);	  //로그인 아이디
        	this.ds_state_desc.setColumn(0, "view_manager", this.fv_staff_name + "/" + this.fv_staff_id);
        }


        // 1주일 버튼
        this.btn_week_onclick = function(obj,e)
        {
        	let today = Sct.Util.getToday();
        	let firstDay = Sct.Util.addDate(today, -6);

        	this.set_ds_search_date(firstDay, today);

        	// 년도 콤보에도 값 적용
        	this.combo_set_year(firstDay);

        	this.clearAndSearch();
        };

        // 15일 버튼
        this.btn_15day_onclick = function(obj,e)
        {
        	let today = Sct.Util.getToday();
        	let firstDay = Sct.Util.addDate(today, -14);

        	this.set_ds_search_date(firstDay, today);

        	// 년도 콤보에도 값 적용
        	this.combo_set_year(firstDay);

        	this.clearAndSearch();
        };


        // 1개월 버튼
        this.btn_month_onclick = function(obj,e)
        {
        	let thisMonth = Sct.Util.getMm();	// YYYYMM
        	let firstDay = thisMonth + "01";
        	let lastDay = Sct.Util.getLastDay(thisMonth);

        	this.set_ds_search_date(firstDay, lastDay);

        	// 년도 콤보에도 값 적용
        	this.combo_set_year(firstDay);

        	this.clearAndSearch();
        };

        // 6개월 버튼
        this.btn_6month_onclick = function(obj,e)
        {
        	let today = Sct.Util.getToday();
        	let thisMonth = Sct.Util.getMm();	// YYYYMM
        	let temp = Sct.Util.addMonth(today, -5);
        	let firstDay = temp.substr(0,6) + "01";
        	let lastDay = Sct.Util.getLastDay(thisMonth);

        	this.set_ds_search_date(firstDay, lastDay);

        	// 년도 콤보에도 값 적용
        	this.combo_set_year(firstDay);

        	this.clearAndSearch();
        };

        // 1년 버튼
        // 다른 기간 설정 버튼과 달리
        // 오늘일자 기준이 아니라 콤보에 선택된 년도 기준
        this.btn_year_onclick = function(obj,e)
        {
        	let year = this.div_00.form.cmb_year.value;
        	let firstDay = year + "0101";
        	let lastDay = year + "1231";

        	this.set_ds_search_date(firstDay, lastDay);

        	// 년도 콤보에도 값 적용
        	//this.combo_set_year(firstDay);

        	this.clearAndSearch();
        };

        // ds_search에 시작일, 종료일 받아서 세팅
        this.set_ds_search_date = function(from_d, to_d)
        {
        	this.ds_search.setColumn(0, "date_from", from_d);
        	this.ds_search.setColumn(0, "date_to", to_d);
        }

        // 년도 콤보에 년도값 적용
        this.combo_set_year = function (fDay)
        {
        	var yearStr = fDay.substr(0,4);
        	this.div_00.form.cmb_year.set_value(yearStr);
        }

        this.clearAndSearch = function()
        {
        	this.ds_data.clearData();
        	this.ds_data2.clearData();

        	this.fn_search();
        }

        // 수급자 버튼
        this.btn_use_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"s_nm","사용중");
        	this.clearAndSearch();
        };

        // 퇴소자 버튼
        this.btn_end_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"s_nm","퇴소자");
        	this.clearAndSearch();
        };

        // 전체 버튼
        this.btn_all_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0, "s_nm" , "");
        	this.clearAndSearch();
        };

        //왼쪽 그리드셀
        this.div_01.form.grd_left_oncellclick = function(obj,e)
        {
        	const selIdx = obj.getBindCellIndex("body", "m_name");

        	// 수급자명 컬럼인 경우
        	if (e.col == 4)
        	{
        		var selRow = this.ds_list.rowposition;
        		var m_code = this.ds_list.getColumn(selRow,"m_code");

        		// 수급자 조회 div 내용표시
        		this.ds_data.clearData();
        		this.ds_data.addRow();
        		this.ds_data.copyRow(0,this.ds_list,selRow);

        		// 중간 상태변화 기록 입력 초기화 세팅
        		//this.fn_set_new_state_change();

        		// 상태변화 기록 검색
        		this.ds_search_data2.copyRow(0,this.ds_search,0);
        		this.ds_search_data2.setColumn(0,"sc_code", m_code);
        		this.fn_searchData2();
        	}

        };

        //그리드 성별 색 구분
        this.fn_setLeftGrid = function()
        {
        	var grdLeft = this.div_01.form.grd_left;

        	var nameIdx = grdLeft.getBindCellIndex("body","m_name");
        	var snmIdx = grdLeft.getBindCellIndex("body","s_nm");

        	var nameCss = "expr:dataset.getColumn(currow,'성별')=='남'?'cellBMan':'cellBWoman'";
        	var snmCss = "expr:dataset.getColumn(currow,'s_nm')=='퇴소자'?'cellBRetire':''";

        	grdLeft.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grdLeft.setCellProperty("body", snmIdx, "cssclass", snmCss);
        }

        // 오른쪽 그리드 클릭
        this.div_04.form.grd_right_oncellclick = function(obj,e)
        {
        	var headText = obj.getCellText(-1,e.col);

        	// 내용복사 컬럼의 복사 버튼 클릭
        	if (headText=="내용복사") {
        		var content = this.ds_data2.getColumn(e.row, "상태변화");
        		this.ds_state_desc.setColumn(0, "상태변화", content);
        	// 작성일 컬럼 클릭
        	} else if (headText=="작성일") {
        		this.fn_st_change_pop();	// 팝업창
        	}
        };

        //요일 별 색 변경
        this.fn_setRightGrid = function()
        {
        	var grdRight = this.div_04.form.grd_right;
        	var  index = -1;

        	index = grdRight.getBindCellIndex("body", "요일");
        	grdRight.setCellProperty("body", index, "cssclass", "expr:요일=='(토)'?'BlueFontCell':요일=='(일)'?'CellRed_B':" +Sct.Grid.getCellDefaultCss()); //ok
        }

        //버튼 색 변경 (데이터셋에 이벤트 해주기)
        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid != "s_nm") return;

        	let s_nm = this.ds_search.getColumn(0,"s_nm");
        	let btn_all = this.div_01.form.btn_all;
        	let btn_use = this.div_01.form.btn_use;
        	let btn_end = this.div_01.form.btn_end;

        	switch (s_nm) {
        		case "" :
        			btn_all.set_background("red");
        			btn_use.set_background("");
        			btn_end.set_background("");
        			break;
        		case "사용중" :
        			btn_all.set_background("");
        			btn_use.set_background("red");
        			btn_end.set_background("");
        			break;
        		case "퇴소자" :
        			btn_all.set_background("");
        			btn_use.set_background("");
        			btn_end.set_background("red");
        			break;

        		default:
        	}
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 출력
        // 상태변화기록 서식 리포트
        this.fn_report1 = function()
        {
        	if (this.ds_data.rowcount == 0)
        	{
        		alert("수급자를 선택하세요");	// as-is에서는 아무 메세지 없음
        		return false;
        	}

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00102_3_R01.xfdl";
        	const popupName = "";

        	params = {
        		sicode : fv_sicode
        	,	m_code : this.ds_data.getColumn(0, "m_code")
        	,	date_to : this.ds_search.getColumn(0,"date_to")
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        }

        //수급자 상태변화기록 리포트
        this.fn_report_use = function(obj,e)
        {
        	if (this.ds_data.rowcount == 0)
        	{
        		alert("수급자를 선택하세요");	// as-is에서는 아무 메세지 없음
        		return false;
        	}

        	this.fn_call_report2("use");
        };

        this.fn_call_report2 = function(arg)
        {
        	let pam = arg;
        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00102_3_R02.xfdl";
        	const popupName = "";

        	var mCodeStr = "";

        	// 수급자 한명 출력시
        	if (pam=="use") {
        		let _code = this.ds_data.getColumn(0, "m_code");
        		mCodeStr += _code;
        	// 체크박스로 선택된 수급자 여러명 출력시
        	} else if (pam=="체크") {
        		// 리스트 row 수만큼 for문 돌려서 체크된 row 찾기
        		for(var i=0; i < this.ds_list.rowcount; i++){
        			if(this.ds_list.getColumn(i,"체크") == 1){ // 체크된 수급자 코드 문자열로 이어붙이기
        				let _code = this.ds_list.getColumn(i,"m_code");
        				mCodeStr += (_code + ",");
        			}
        		}
        		// 마지막 콤마 제거
        		mCodeStr = mCodeStr.substring(0,mCodeStr.length-1);
        	}

        	if (!this.fn_record_end(mCodeStr)) {
        		alert("선택된 수급자에 대해 조회 기간의 상태변화 기록이 존재하지 않습니다.");
        		return;
        	}

        	params = {
        		sicode : fv_sicode
        	,	m_code : mCodeStr
        	,	date_from : this.ds_search.getColumn(0,"date_from")
        	,	date_to : this.ds_search.getColumn(0,"date_to")
        	,	sign : this.ds_report.getColumn(0,"sign")
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        }

        // 상태변화기록(선택) 리포트
        this.fn_report_chk = function(obj,e)
        {
        	if (this.ds_list.rowcount < 1) {
        		alert("출력할 수급자를 선택하세요!");
        		return;
        	}

        	var chk = 0;

        	// 리스트 row 수만큼 for문 돌려서 체크된 row 찾기
        	for(var i=0; i < this.ds_list.rowcount; i++){
        		chk = (parseInt(this.ds_list.getColumn(i,"체크"))==1)? chk+1 : chk; // 체크된 경우 1 더한다.
        	}

        	// 체크박스 체크된 수급자가 없는 경우
        	if (chk == 0) {
        		alert("출력할 수급자를 선택하세요!");
        		return;
        	}

        	this.fn_call_report2("체크");
        };

        // 선택된 복수의 수급자 또는 한 명의 수급자에 대해
        // 검색조건 기간에 상태변화기록이 존재하는지 여부를 반환
        // 매개값 : 수급자 코드. 두명 이상일 경우 콤마로 구분됨
        this.fn_record_end = function(m_codes)
        {
        	const svcId = "record_cnt";
        	const params = "/DAY00102_3Controller.do";
        	const inDatasets = "";
        	const outDatasets = "ds_record_cnt=output1";
        	const argument = "method=getRecordCnt "
        				   + "sqlId=DAY00102_3.DAY00102_3_DS_RECORD_CNT "
        				   + "sicode=" + fv_sicode + " "
        				   + "m_codes=" + m_codes + " "
        				   + "date_from=" + this.ds_search.getColumn(0,"date_from") + " "
        				   + "date_to=" + this.ds_search.getColumn(0,"date_to") + " "
        				   ;

        	const callbackFunc = "fn_callback";
        	const async = false;
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, async);

        	if (this.ds_record_cnt.getColumn(0,"CNT")<1) return false;

        	return true;

        }

        // 기간별 상태변화기록 리포트
        this.fn_report3 = function(obj,e)
        {
        	const date_from = this.ds_search.getColumn(0,"date_from");
        	const date_to = this.ds_search.getColumn(0,"date_to");
        	const diff = Sct.Util.getDayDiff(date_from, date_to);

        	if (diff > 185) {	// as-is 시스템 기준
        		alert("출력기간은 6개월 이내입니다!");
        		return;
        	}

        	let params;
        	const dicompNm = " ";	// ""인 경우 params 전달 안되므로 주의!
        	const popupUrl = "DAY_POP::DAY00102_3_R03.xfdl";
        	const popupName = "";
        	console.log("fv_sicode: " + fv_sicode);

        	params = {
        		sicode : fv_sicode
        	,	date_from : date_from
        	,	date_to : date_to
        	,	sign : this.ds_report.getColumn(0,"sign")
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 작성자 선택 팝업
        this.btn_manager_onclick = function(obj,e)
        {
         	if (this.ds_data.rowcount < 1) {
        		alert("먼저 수급자를 선택해 주세요.");
        		return;
        	}

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_state_desc.getColumn(0, "sc_nalja")
        		,	FLAG : ""
        	};

        	Sct.popup(this, "employee", 450, 400, "작성자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };


        // 상태변화기록 조회/수정 팝업
        this.fn_st_change_pop = function(obj,e)
        {
        	var nRow = this.ds_data2.rowposition;
        	const param = {
        			SICODE : this.ds_data2.getColumn(nRow, "sicode")
        		,	SC_NUMBER : this.ds_data2.getColumn(nRow, "sc_number")
        		,	DATE : this.ds_data2.getColumn(nRow, "sc_nalja")
        		,	SC_CODE : this.ds_data2.getColumn(nRow, "sc_code")
        		,	SC_NAME : this.ds_data2.getColumn(nRow, "sc_name")
        		,	SC_CHANGE : this.ds_data2.getColumn(nRow, "상태변화")
        		,	CREATE_NM : this.ds_data2.getColumn(nRow, "작성자명")
        		,	CREATE_CODE : this.ds_data2.getColumn(nRow, "작성코드")
        		,	M_GROUP : this.ds_data.getColumn(0, "m_group")
        		,	SEX_NM : this.ds_data.getColumn(0, "성별")
        		,	VIEW_MANAGER : this.ds_data2.getColumn(nRow, "작성자명") + "/" + this.ds_data2.getColumn(nRow, "작성코드")
        	};

        	Sct.popup(this, "state_change", 450, 400, "", param, "DAY_POP::DAY00102_3_P02.xfdl", "fn_popCallback");
        };

        //요양,간호일지 조회 팝업
        //검색기간은 시스템 날짜 기준 지난달 1일부터 ~ 오늘까지로 설정(검색기간 설정은 쿼리에서)
        this.btn_nurse_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount == 0)
        	{
        		alert("수급자를 선택하세요");	// as-is에서는 아무 메세지 없음
        		return false;
        	}

        	this. fn_chk_nurse_cnt();
        	if (this.ds_nurse_cnt.getColumn(0,"CNT")<1) {
        		alert("기록된 요양일지가 없습니다.");
        		return false;
        	}

        	const param = {
        			SICODE : this.ds_data.getColumn(0, "sicode")
        		,	M_CODE : this.ds_data.getColumn(0, "m_code")
        	};
        	Sct.popup(this, "nurse", 450, 400, "", param, "DAY_POP::DAY00102_3_P01.xfdl", "fn_popCallback");
        };

        this.fn_chk_nurse_cnt = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_nurse_cnt=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00102_3_P01.DAY00102_3_P01_DS_LIST_CNT_S "
        				   + "sicode=" + this.ds_data.getColumn(0, "sicode") + " "
        				   + "m_code=" + this.ds_data.getColumn(0, "m_code") + " ";
        	const callbackFunc = "fn_callback";

        	const async = false;
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, async);
        }

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		// 작성자
        		case "employee" :
        			if (objDs.getColumn(0, "DEL") != "1")
        			{
        				const name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_state_desc.setColumn(0, "작성자명", name);
        				this.ds_state_desc.setColumn(0, "작성코드", staffid);
        				this.ds_state_desc.setColumn(0, "view_manager", name + "/" + staffid);
        			}
        			else
        			{
        				this.ds_state_desc.setColumn(0, "작성자명", "");
        				this.ds_state_desc.setColumn(0, "작성코드", "");
        				this.ds_state_desc.setColumn(0, "view_manager", "");
        			}
        			break;
        		case "state_change" :
        			if (objDs.getColumn(0, "REFRESH") == "Y")
        			{
        				this.fn_searchData2();
        			}
        			break;
        		case "nurse" :	// 팝업에서 가져온 내용을 기존 내용과 이어붙이기. MAX 500 문자열 길이값 체크
        			var copyStr = objDs.getColumn(0,"copy_text");
        			var oldStr = this.ds_state_desc.getColumn(0,"상태변화");
        			if ((oldStr + copyStr).length > 500) {
        				alert("상태변화 입력란에 입력할 수 있는 문자열 길이를 초과하여 가져올 수 없습니다.");
        			} else {
        				this.ds_state_desc.setColumn(0,"상태변화", oldStr + copyStr);
        			}
        			break;
        		// 사진첨부
        		//case "imgFILEUPLOAD" :
        		//	const dataGrpId = this.ds_data.getColumn(0, "FILE_GRP_ID");
        		//
        		//	if (this.ds_data.getColumn(0, "FILE_REAL_NAME") != objDs.getColumn(0, "FILE_REAL_NAME"))
        		//	{
        		//		this.ds_data.setColumn(0, "FILE_GRP_ID", objDs.getColumn(0, "FILE_GRP_ID"));
        		//		this.ds_data.setColumn(0, "FILE_REAL_NAME", objDs.getColumn(0, "FILE_REAL_NAME"));
        		//		this.ds_data.setColumn(0, "daysajin", Sct.Util.isEmpty(objDs.getColumn(0, "FILE_NAME")) ? "" : objDs.getColumn(0, "FILE_NAME"));
        		//		this.fn_getSignImage();
        		//	}
        		//	break;
        		//default :
        		//	this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };

        //이미지 조회
        //this.fn_getSignImage = function ()
        //{
        //	let imgUrl = "";
        //	const fileGrp = this.ds_data.getColumn(0, "FILE_REAL_NAME");
        //
        //	if(!Sct.Util.isEmpty(fileGrp))
        //	{
        //		const webHost = nexacro.getEnvironment().services["svcurl"].url;
        //		const path = "/FILES";
        //		imgUrl = webHost + path + fileGrp;
        //	}
        //
        //	this.div_03.form.imv_00.set_image(imgUrl);
        //};

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





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_00.form.cmb_year.addEventHandler("onitemchanged",this.div_00_cmb_year_onitemchanged,this);
            this.div_00.form.btn_search.addEventHandler("onclick",this.fn_btn_search,this);
            this.div_01.form.grd_left.addEventHandler("oncellclick",this.div_01.form.grd_left_oncellclick,this);
            this.div_01.form.btn_week.addEventHandler("onclick",this.btn_week_onclick,this);
            this.div_01.form.btn_15day.addEventHandler("onclick",this.btn_15day_onclick,this);
            this.div_01.form.btn_month.addEventHandler("onclick",this.btn_month_onclick,this);
            this.div_01.form.btn_6month.addEventHandler("onclick",this.btn_6month_onclick,this);
            this.div_01.form.btn_use.addEventHandler("onclick",this.btn_use_onclick,this);
            this.div_01.form.btn_end.addEventHandler("onclick",this.btn_end_onclick,this);
            this.div_01.form.btn_year.addEventHandler("onclick",this.btn_year_onclick,this);
            this.div_01.form.btn_all.addEventHandler("onclick",this.btn_all_onclick,this);
            this.div_02.form.btn_new.addEventHandler("onclick",this.div_02.form.btn_new_onclick,this);
            this.div_02.form.btn_01.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_03.form.sta_00.addEventHandler("onclick",this.div_03_sta_00_onclick,this);
            this.div_03.form.sta_31.addEventHandler("onclick",this.div_03_sta_00_00_02_00_00_00_00_onclick,this);
            this.div_03.form.btn_00.addEventHandler("onclick",this.btn_nurse_onclick,this);
            this.div_03.form.btn_01.addEventHandler("onclick",this.fn_report1,this);
            this.div_03.form.btn_02.addEventHandler("onclick",this.fn_report_use,this);
            this.div_03.form.btn_03.addEventHandler("onclick",this.fn_report3,this);
            this.div_03.form.btn_04.addEventHandler("onclick",this.fn_report_chk,this);
            this.div_03.form.btn_manager.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_03.form.sta_01.addEventHandler("onclick",this.div_03_sta_01_onclick,this);
            this.div_03.form.sta_18_00.addEventHandler("onclick",this.div_03_sta_18_00_onclick,this);
            this.div_04.form.grd_right.addEventHandler("oncellclick",this.div_04.form.grd_right_oncellclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00102_3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
