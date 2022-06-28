(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00709");
            this.set_titletext("7-9 수급자교육(훈련) 일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"교육번호\" type=\"INT\" size=\"256\"/><Column id=\"교육일\" type=\"DATE\" size=\"256\"/><Column id=\"교육시간\" type=\"STRING\" size=\"256\"/><Column id=\"강사\" type=\"STRING\" size=\"256\"/><Column id=\"교육정원\" type=\"INT\" size=\"256\"/><Column id=\"출석정원\" type=\"INT\" size=\"256\"/><Column id=\"교육명\" type=\"STRING\" size=\"256\"/><Column id=\"교육방법\" type=\"INT\" size=\"256\"/><Column id=\"교육내용\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"작성자코드\" type=\"STRING\" size=\"256\"/><Column id=\"daysajin\" type=\"STRING\" size=\"256\"/><Column id=\"참석명단\" type=\"STRING\" size=\"256\"/><Column id=\"직원명단\" type=\"STRING\" size=\"256\"/><Column id=\"참석직종\" type=\"STRING\" size=\"256\"/><Column id=\"출석직원\" type=\"INT\" size=\"256\"/><Column id=\"교육장소\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">2021</Col><Col id=\"CMNM\">2021년</Col></Row><Row><Col id=\"CMCD\">2022</Col><Col id=\"CMNM\">2022년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"교육번호\" type=\"INT\" size=\"256\"/><Column id=\"교육일\" type=\"DATE\" size=\"256\"/><Column id=\"교육시간\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"TO_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"강사\" type=\"STRING\" size=\"256\"/><Column id=\"교육정원\" type=\"INT\" size=\"256\"/><Column id=\"출석정원\" type=\"INT\" size=\"256\"/><Column id=\"교육명\" type=\"STRING\" size=\"256\"/><Column id=\"교육방법\" type=\"INT\" size=\"256\"/><Column id=\"방법1\" type=\"INT\" size=\"256\"/><Column id=\"방법2\" type=\"INT\" size=\"256\"/><Column id=\"교육내용\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"작성자코드\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"daysajin\" type=\"STRING\" size=\"256\"/><Column id=\"참석명단\" type=\"STRING\" size=\"256\"/><Column id=\"참석직종\" type=\"STRING\" size=\"256\"/><Column id=\"교육장소\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID_O\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"직원명단\" type=\"STRING\" size=\"256\"/><Column id=\"출석직원\" type=\"INT\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_edu", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">욕창예방</Col><Col id=\"CMNM\">욕창예방</Col></Row><Row><Col id=\"CMCD\">낙상예방</Col><Col id=\"CMNM\">낙상예방</Col></Row><Row><Col id=\"CMCD\">탈수예방</Col><Col id=\"CMNM\">탈수예방</Col></Row><Row><Col id=\"CMCD\">배변도움</Col><Col id=\"CMNM\">배변도움</Col></Row><Row><Col id=\"CMCD\">관절구축예방</Col><Col id=\"CMNM\">관절구축예방</Col></Row><Row><Col id=\"CMCD\">치매예방</Col><Col id=\"CMNM\">치매예방</Col></Row><Row><Col id=\"CMCD\">노인인권보호</Col><Col id=\"CMNM\">노인인권보호</Col></Row><Row><Col id=\"CMCD\">재난대피훈련</Col><Col id=\"CMNM\">재난대피훈련</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"c_staffid\" type=\"STRING\" size=\"256\"/><Column id=\"c_group\" type=\"STRING\" size=\"256\"/><Column id=\"c_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"c_become\" type=\"STRING\" size=\"256\"/><Column id=\"c_dutyname\" type=\"STRING\" size=\"256\"/><Column id=\"담당직종\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mate", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_autoid\" type=\"INT\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_grade\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"수급생일\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"REPO1\" type=\"STRING\" size=\"256\"/><Column id=\"R1\" type=\"STRING\" size=\"256\"/><Column id=\"R1_1\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_print", this);
            obj._setContents("<ColumnInfo><Column id=\"TP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","450",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0","450","748",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"170\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"교육일\"/><Cell col=\"1\" text=\"교육명\"/><Cell col=\"2\" text=\"강사\"/></Band><Band id=\"body\"><Cell text=\"bind:교육일\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dot\" cssclass=\"cellBWoman\"/><Cell col=\"1\" text=\"bind:교육명\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:강사\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","470","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_main","0","0","1401","748",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e2e2e2");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","620","7","160","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_text("수급자 교육(훈련) 일지");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no","24","10","58","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("27");
            obj.set_text("기록번호 : ");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no_value","87","10","60","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("28");
            obj.set_text("00000000");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","20","40",null,"1","20",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("29");
            obj.set_background("#e2e2e2");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","20","52","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("30");
            obj.set_text("교육일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","sta_head1:-1","sta_head1:-34","570","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date","sta_body1:-565","sta_body1:-30","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_tooltiptext("점검일");
            obj.set_buttonsize("0 0");
            obj.set_locale("ko_KR");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","cal_date:0","cal_date:-25","25","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_from_hour","cal_date_pic:5","sta_body1:-30","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            obj.set_format("##시");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_value("00");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Spin("spn_from_hour","mae_from_hour:-1","sta_body1:-30","23","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_increment("1");
            obj.set_buttonposition("right");
            obj.set_type("spinonly");
            obj.set_min("0");
            obj.set_max("23");
            obj.set_value("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_from_min","spn_from_hour:2","sta_body1:-30","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("3");
            obj.set_format("##분");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_value("00");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Spin("spn_from_min","mae_from_min:-1","sta_body1:-30","23","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_increment("1");
            obj.set_buttonposition("right");
            obj.set_type("spinonly");
            obj.set_min("0");
            obj.set_max("59");
            obj.set_value("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_time_from","spn_from_min:6","sta_body1:-27","30","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("32");
            obj.set_text("부터");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_to_hour","sta_time_from:6","sta_body1:-30","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_format("##시");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_value("00");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Spin("spn_to_hour","mae_to_hour:-1","sta_body1:-30","23","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("6");
            obj.set_increment("1");
            obj.set_buttonposition("right");
            obj.set_type("spinonly");
            obj.set_min("0");
            obj.set_max("23");
            obj.set_value("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_to_min","spn_to_hour:2","sta_body1:-30","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_format("##분");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_value("00");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Spin("spn_to_min","mae_to_min:-1","sta_body1:-30","23","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_increment("1");
            obj.set_buttonposition("right");
            obj.set_type("spinonly");
            obj.set_min("0");
            obj.set_max("59");
            obj.set_value("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_time_to","spn_to_min:6","sta_body1:-27","30","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("33");
            obj.set_text("까지");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_reset","sta_time_to:25","sta_body1:-30","84","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_text("새로고침");
            obj.set_cssclass("btn_refresh");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","20","sta_head1:-1","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("34");
            obj.set_text("교육장소");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","sta_head2:-1","sta_body1:-1","570","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","20","sta_head2:-1","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("36");
            obj.set_text("강사");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","sta_head3:-1","sta_body2:-1","570","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","20","sta_head3:-1","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("38");
            obj.set_text("교육명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","sta_head4:-1","sta_body3:-1","570","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5","20","sta_head4:-1","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("40");
            obj.set_text("교육인원");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5","sta_head5:-1","sta_body4:-1","570","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head6","20","sta_head5:-1","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("42");
            obj.set_text("교육방법");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6","sta_head6:-1","sta_body5:-1","570","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head7","20","sta_head6:-1","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body7","sta_head7:-1","sta_body6:-1","570","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head8","20","sta_head7:-1","83","394",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("교육내용");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body8","sta_head8:-1","sta_body7:-1","570","394",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_place","sta_body2:-565","sta_body2:-30","444","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_cssclass("essential");
            obj.set_maxlength("30");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_load","edt_place:5","sta_body2:-30","110","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_text("일지불러오기");
            obj.set_cssclass("btn_note");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_teacher","sta_body3:-565","sta_body3:-30","559","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_cssclass("essential");
            obj.set_maxlength("30");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_edu_title","107","155","384","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_cssclass("essential");
            obj.set_maxlength("80");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Combo("cmb_edu_title","edt_edu_title:5","155","170","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_edu");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_confirm1","531","184","88","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("50");
            obj.set_text("▲교육항목 확인 !\r\n자료실 공지사항");
            obj.set_fittocontents("none");
            obj.set_cssclass("sta_comm");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_edu_tp1","sta_body6:-565","sta_body6:-30","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_text("개별교육");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_edu_tp2","chk_edu_tp1:30","sta_body6:-30","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_text("단체교육");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_manager","sta_head7:-78","sta_head7:-30","73","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_manager_value","112","256","180","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("51");
            obj.set_text("너싱홈/20220001");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_content","sta_body8:-565","sta_body8:-390","560","385",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_maxlength("4000");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            obj.set_wordWrap("char");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("imv_pic","681","52","400","185",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("52");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_pic","imv_pic:-400","imv_pic:3","210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("53");
            obj.set_readonly("true");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_pic","edt_pic:5","imv_pic:3","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_text("사진첨부");
            obj.set_cssclass("btn_addimage");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_emp","1031","277","160","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("54");
            obj.set_text("■ 직원 참석명단(30명)");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_emp",null,"sta_emp:-25","90","25","20",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_text("직원조회");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_emp","sta_emp:-158","sta_emp:3","346","374",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"연번\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"직원명\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"지움\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:c_group\"/><Cell col=\"2\" text=\"bind:c_name\"/><Cell col=\"3\" text=\"bind:성별\"/><Cell col=\"4\" expandsize=\"70\" expandshow=\"show\" expandchar=\"지움\" expandimage=\"url('theme://images/ico_eraser.png')\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_edu","107","189","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_textAlign("center");
            obj.set_inputtype("number");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_unit2","421","191","15","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("48");
            obj.set_text("명");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_att","377","189","40","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_textAlign("center");
            obj.set_inputtype("number");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_unit1","152","192","15","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("49");
            obj.set_text("명");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5_1","290","184","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("55");
            obj.set_text("참여인원");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mate","681","277","174","23",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("56");
            obj.set_text("■ 수급자 참석명단(75명)");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_mate",null,"sta_mate:-25","105","25","371",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_text("수급자조회");
            obj.set_cssclass("btn_eldery");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_mate","sta_mate:-174","sta_mate:3","347","374",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("57");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_mate");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"연번\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"참석자\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"지움\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:m_group\"/><Cell col=\"2\" text=\"bind:m_name\"/><Cell col=\"3\" text=\"bind:성별\"/><Cell col=\"4\" expandsize=\"70\" expandshow=\"show\" expandchar=\"지움\" expandimage=\"url('theme://images/ico_eraser.png')\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mate_rmk","grd_mate:-332","grd_mate:4","320","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("58");
            obj.set_text("▲ 참석 수급자는 급여제공기록지에 출력됩니다.");
            obj.set_cssclass("sta_comm");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_pic_del","btn_pic:5","btn_pic:-25","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("59");
            obj.set_text("사진지움");
            obj.set_cssclass("btn_deleteimage");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","450","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_year","16","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","70","26","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","116","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","234","12","8","17",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","246","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from_pic","cal_date_from:-1","7","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic","cal_date_to:-1","7","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","470","0","1401","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new","0","7","90","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("새로작성");
            obj.set_cssclass("btn_newdoc");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","126","7","55","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("결재란");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"7","70","26","0",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","70","26","btn_delete:5",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2","314","7","175","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("연간 수급자 교육 리스트");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","189","7","120","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("교육일지출력");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cmb_year","value","ds_search","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_date_from","value","ds_search","DATE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_to","value","ds_search","DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_cont.form.div_right.form.div_main.form.sta_no_value","text","ds_data","교육번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.cal_date","value","ds_data","교육일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.div_main.form.mae_from_hour","value","ds_data","FROM_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.mae_from_min","value","ds_data","FROM_MIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.mae_to_hour","value","ds_data","TO_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.mae_to_min","value","ds_data","TO_MIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.edt_place","value","ds_data","교육장소");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.edt_teacher","value","ds_data","강사");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.edt_edu_title","value","ds_data","교육명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.div_main.form.chk_edu_tp1","value","ds_data","방법1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_main.form.chk_edu_tp2","value","ds_data","방법2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_main.form.sta_manager_value","text","ds_data","VIEW_MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_main.form.txt_content","value","ds_data","교육내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.div_main.form.edt_pic","value","ds_data","daysajin");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_func.form.chk_sign","value","ds_report","SIGN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_right.form.div_main.form.edt_edu","value","ds_data","출석정원");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_right.form.div_main.form.edt_att","value","ds_data","출석직원");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_search.form.cal_date_from_pic","value","ds_search","DATE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_search.form.cal_date_to_pic","value","ds_search","DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.div_main.form.cal_date_pic","value","ds_data","교육일");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00709.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00709.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00709.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00707
         * 화면명   	: 7-9 수급자교육(훈련)일지
         * 화면설명 	: 수급자교육(훈련) 내역을 작성하는 화면
         * 작성일   	: 2022-03-11
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2022-04-04		조기종		단위테스트 오류 수정
         *	2022-04-07		조기종		파일 관련 로직 수정
         ***********************************************************************/
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
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_list;
        this.reSearchData = "";
        this.searchFlag = "";
        this.fileGroupId = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 현재 년도 구하기
        	const date = new Date();
        	const year = date.getFullYear();

        	// 년도 콤보박스 세팅
        	this.ds_year.set_enableevent(false);
        	this.ds_year.clearData();
        	let nRow;
        	for (let i = 10; i > 0; i--)
        	{
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year - i);
        		this.ds_year.setColumn(nRow, "CMNM", (year - i) + "년");
        	}
        	for (let i = 0; i < 11; i++)
        	{
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year + i);
        		this.ds_year.setColumn(nRow, "CMNM", (year + i) + "년");
        	}
        	this.ds_year.set_enableevent(true);

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "YEAR", year);
        	this.ds_search.setColumn(0, "DATE_FROM", year + '0101');
        	this.ds_search.setColumn(0, "DATE_TO", year + '1231');

        	// 리포트 출력 초기화
        	this.ds_report.setColumn(0, "REPO1", 1);
        	this.ds_report.setColumn(0, "R1", 1);
        	this.ds_report.setColumn(0, "SIGN", 1);

        	// 오픈시 조회
        	this.fn_search("search");
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
        		this.reSearchData = this.ds_data.getColumn(0, "교육번호");

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

        	// validation
        	const valiArr = ["교육장소", "강사", "교육명"];
        	for (let i = 0; i < valiArr.length; i++)
        	{
        		if (this.ds_data.getColumn(0, valiArr[i]).length < 2)
        		{
        			this.alert(valiArr[i] + "는 2글자 이상이어야 합니다.");
        			return false;
        		}
        	}

        	// 작성자가 지정되지 않은 경우
        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "작성자코드")))
        	{
        		this.alert("작성직원을 지정해야합니다.");
        		return false;
        	}

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

        	// 교육시간 세팅
        	const fHour = this.ds_data.getColumn(0, "FROM_HOUR");
        	const fMin = this.ds_data.getColumn(0, "FROM_MIN");
        	const tHour = this.ds_data.getColumn(0, "TO_HOUR");
        	const tMin = this.ds_data.getColumn(0, "TO_MIN");
        	const timeStr = fHour + ":" + fMin + "-" + tHour + ":" + tMin;
        	this.ds_data.setColumn(0, "교육시간", timeStr);

        	// 참석명단 세팅
        	let eduStr = "";
        	for (let i = 0; i < this.ds_mate.rowcount; i++)
        	{
        		const mCode = this.ds_mate.getColumn(i, "m_code");
        		const mName = this.ds_mate.getColumn(i, "m_name");
        		const mSex = this.ds_mate.getColumn(i, "성별");
        		const mGroup = this.ds_mate.getColumn(i, "m_group");

        		eduStr += Sct.Util.fn_bytePadEnd(mCode, 10);
        		eduStr += Sct.Util.fn_bytePadEnd(mName, 12);
        		eduStr += mSex;
        		eduStr += mGroup;
        		eduStr += "\r\n";
        	}
        	this.ds_data.setColumn(0, "참석명단", eduStr);

        	// 직원명단, 참석직종 세팅
        	let attStr = "";
        	let attDuty = "";
        	for (let i = 0; i < this.ds_emp.rowcount; i++)
        	{
        		const staffid = this.ds_emp.getColumn(i, "c_staffid");
        		const name = this.ds_emp.getColumn(i, "c_name");
        		const sex = this.ds_emp.getColumn(i, "성별");
        		const group = this.ds_emp.getColumn(i, "c_group");
        		const duty = this.ds_emp.getColumn(i, "c_dutyname");

        		attStr += Sct.Util.fn_bytePadEnd(staffid, 10);
        		attStr += Sct.Util.fn_bytePadEnd(name, 12);
        		attStr += sex;
        		attStr += group;
        		attStr += "\r\n";

        		attDuty += Sct.Util.fn_bytePadEnd(duty, 14) + "\r\n";
        	}
        	this.ds_data.setColumn(0, "직원명단", attStr);
        	this.ds_data.setColumn(0, "참석직종", attDuty);

        	if (this.ds_data.getRowType(0) == 2)
        	{
        		this.searchFlag = "I";
        		this.reSearchData = "";
        	}

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

        	// 데이터셋 상태가 추가상태이면 데이터셋 비우기
        	if(this.ds_data.getRowType(0) == 2)
        	{
        		this.ds_data.clearData();
        		this.div_cont.form.div_right.form.div_main.form.cal_date_pic.set_enable(false);
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
        //조회
        this.fn_search = function (flag)
        {
        	//validation
        	if (!this.fn_search_pre()) return;

        	const svcId = flag;
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00709.DAY00709_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	// validation
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
        	const params = "/DAY00709Controller.do";
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
        	const params = "/DAY00709Controller.do";
        	const inDatasets = "input1=ds_data:U";
        	const outDatasets = "";
        	const argument = "method=delete";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 리포트 종류 조회
        this.fn_print_search = function(no)
        {
        	const svcId = "print";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_print=output1";
        	const argument = "method=getList"
        				   + " sqlId=DAY00709.DAY00709_DS_PRINT_S"
        				   + " SICODE=" + fv_sicode
        				   + " NO=" + no;

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
        			this.ds_data.clearData();
        			this.ds_list.set_rowposition(-1);
        		}
        		else if (strSvcID == "search_save")
        		{
        			const sRow = this.fn_findMstRow(this.reSearchData, this.searchFlag);
        			this.searchFlag = "";
        		}
        		else if (strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");
        			this.fn_search("search_save");
        		}
        		else if (strSvcID == "delete")
        		{
        			this.alert("삭제되었습니다.");
        			this.div_cont.form.div_right.form.div_main.form.imv_pic.set_image("");
        			this.ds_data.clearData();
        			this.ds_emp.clearData();
        			this.ds_mate.clearData();
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
         * DB입력용 String 만들기
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

        // 입력, 수정용 데이터셋에 데이터 복사
        this.fn_dataCopy = function(row)
        {
        	this.ds_data.clearData();
        	const nRow = this.ds_data.addRow();
        	this.ds_data.copyRow(nRow, this.ds_list, row);

        	// 교육일 달력 비활성화
        	this.div_cont.form.div_right.form.div_main.form.cal_date_pic.set_enable(false);

        	// 교육시간
        	const timeStr = this.ds_data.getColumn(nRow, "교육시간");
        	this.ds_data.setColumn(nRow, "FROM_HOUR", timeStr.substr(0, 2));
        	this.ds_data.setColumn(nRow, "FROM_MIN", timeStr.substr(3, 2));
        	this.ds_data.setColumn(nRow, "TO_HOUR", timeStr.substr(6, 2));
        	this.ds_data.setColumn(nRow, "TO_MIN", timeStr.substr(9, 2));
        	// 스핀에도 값 세팅
        	this.div_cont.form.div_right.form.div_main.form.spn_from_hour.set_value(parseInt(timeStr.substr(0, 2)));
        	this.div_cont.form.div_right.form.div_main.form.spn_from_min.set_value(parseInt(timeStr.substr(3, 2)));
        	this.div_cont.form.div_right.form.div_main.form.spn_to_hour.set_value(parseInt(timeStr.substr(6, 2)));
        	this.div_cont.form.div_right.form.div_main.form.spn_to_min.set_value(parseInt(timeStr.substr(9, 2)));

        	// 교육 방법
        	const tpStr = this.ds_data.getColumn(nRow, "교육방법");
        	if (tpStr == 1)
        	{
        		this.ds_data.setColumn(nRow, "방법1", 1);
        		this.ds_report.setColumn(0, "REPO1", 1);
        	}
        	else if (tpStr == 2)
        	{
        		this.ds_data.setColumn(nRow, "방법2", 2);
        		this.ds_report.setColumn(0, "REPO1", 2);
        	}

        	// 작성자
        	const managerStr = this.ds_data.getColumn(nRow, "작성자명")
        					 + "/"
        					 + this.ds_data.getColumn(nRow, "작성자코드");
        	this.ds_data.setColumn(nRow, "VIEW_MANAGER", managerStr);

        	// 사진 로딩
        	this.fn_getSignImage();
        	this.ds_data.setColumn(nRow, "FILE_GRP_ID_O", this.ds_data.getColumn(nRow, "FILE_GRP_ID"));

        	// 수급자 명단
        	this.div_cont.form.div_right.form.div_main.form.grd_mate.set_enableevent(false);
        	this.div_cont.form.div_right.form.div_main.form.grd_mate.set_enableredraw(false);
        	this.ds_mate.set_enableevent(false);

        	this.ds_mate.clearData();
        	const eduStr = this.ds_data.getColumn(nRow, "참석명단");
        	const eduStrArray = eduStr.split("\r");
        	for (let i = 0; i < eduStrArray.length; i++)
        	{
        		if (i == eduStrArray.length - 1)
        			continue;

        		const fullEduStr = nexacro.trim(eduStrArray[i], "\n");
        		const mCode = fullEduStr.substr(0, 10);
        		const mName = fullEduStr.substr(10);
        		const byteMName = Sct.Util.fn_cutByteLength(mName, 12);
        		const mSex = fullEduStr.substr(-2, 1);
        		const mGroup = fullEduStr.substr(-1, 1);

        		const mnRow = this.ds_mate.addRow();
        		this.ds_mate.setColumn(mnRow, "m_code", nexacro.trim(mCode));
        		this.ds_mate.setColumn(mnRow, "m_name", nexacro.trim(byteMName));
        		this.ds_mate.setColumn(mnRow, "성별", mSex);
        		this.ds_mate.setColumn(mnRow, "m_group", mGroup);
        	}

        	this.ds_mate.set_keystring("S:+m_name");

        	this.ds_mate.set_enableevent(true);
        	this.div_cont.form.div_right.form.div_main.form.grd_mate.set_enableredraw(true);
        	this.div_cont.form.div_right.form.div_main.form.grd_mate.set_enableevent(true);

        	// 직원 명단
        	this.div_cont.form.div_right.form.div_main.form.grd_emp.set_enableevent(false);
        	this.div_cont.form.div_right.form.div_main.form.grd_emp.set_enableredraw(false);
        	this.ds_emp.set_enableevent(false);

        	this.ds_emp.clearData();
        	const attStr = this.ds_data.getColumn(nRow, "직원명단");
        	const attStrArray = attStr.split("\r");
        	for (let i = 0; i < attStrArray.length; i++)
        	{
        		if (i == attStrArray.length - 1)
        			continue;

        		const fullStr = nexacro.trim(attStrArray[i], "\n");
        		const id = fullStr.substr(0, 10);
        		const name = fullStr.substr(10);
        		const byteCName = Sct.Util.fn_cutByteLength(name, 12);
        		const sex = fullStr.substr(-2, 1);
        		const group = fullStr.substr(-1, 1);

        		const snRow = this.ds_emp.addRow();
        		this.ds_emp.setColumn(snRow, "c_staffid", nexacro.trim(id));
        		this.ds_emp.setColumn(snRow, "c_name", nexacro.trim(byteCName));
        		this.ds_emp.setColumn(snRow, "성별", sex);
        		this.ds_emp.setColumn(snRow, "c_group", group);
        	}
        	// 직원 직종 추가
        	const attDutyStr = this.ds_data.getColumn(nRow, "참석직종");
        	const attDutyArray = attDutyStr.split("\r");
        	for (let i = 0; i < attDutyArray.length; i++)
        	{
        		if (i == attDutyArray.length - 1)
        			continue;

        		const dutyStr = nexacro.trim(attDutyArray[i], "\n");
        		this.ds_emp.setColumn(i, "c_dutyname", nexacro.trim(dutyStr));
        	}

        	this.ds_emp.set_keystring("S:+c_name");

        	this.ds_emp.set_enableevent(true);
        	this.div_cont.form.div_right.form.div_main.form.grd_emp.set_enableredraw(true);
        	this.div_cont.form.div_right.form.div_main.form.grd_emp.set_enableevent(true);

        	// 데이터셋 add -> nomal 상태로 만들기
        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(nRow, 1);
        	this.ds_data.set_updatecontrol(true);
        };

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo, flag) {
        	let sFindRow = this.ds_list.findRow("교육번호", fv_saveRefNo);

        	if (flag == "I")
        		sFindRow = this.ds_list.findRow("교육번호", this.ds_list.getMax("교육번호"));

        	if (sFindRow > -1) {
        		this.ds_list.set_rowposition(sFindRow);
        		this.fn_dataCopy(sFindRow);
        	}

        	return sFindRow;
        };

        //이미지 조회
        this.fn_getSignImage = function ()
        {
        	let imgUrl = "";
        	const fileGrp = this.ds_data.getColumn(0, "FILE_REAL_NAME");

        	if(!Sct.Util.isEmpty(fileGrp))
        	{
        		const webHost = nexacro.getEnvironment().services["svcurl"].url;
        		const path = "/FILES";
        		imgUrl = webHost + path + fileGrp;
        	}

        	this.div_cont.form.div_right.form.div_main.form.imv_pic.set_image(imgUrl);
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

        	const no = this.ds_data.getColumn(0, "교육번호");
        	this.fn_print_search(no);

        	const repo = this.ds_print.getColumn(0, "TP");

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00709_R01.xfdl";
        	const popupName = "직원교육(훈련)일지";

        	const fileGrp = this.ds_data.getColumn(0, "FILE_REAL_NAME");

        	params = {
        		sicode : fv_sicode
        	,	no : no
        	,	sign : this.ds_report.getColumn(0, "SIGN")
        	,	repo1 : repo
        	,	fileGrp : fileGrp
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 연간 직원 교육 리스트
        this.fn_report2 = function()
        {
        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00709_R03.xfdl";
        	const popupName = "연간 직원 교육 리스트";

        	params = {
        		sicode : fv_sicode
        	,	dateFrom : this.ds_search.getColumn(0, "DATE_FROM")
        	,	dateTo : this.ds_search.getColumn(0, "DATE_TO")
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 일지불러오기 버튼
        this.btn_load_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount < 1 || this.ds_data.getRowType(0) != 2)
        		return;

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_data.getColumn(0, "교육일")
        		,	FLAG : "MATE"
        	};

        	Sct.popup(this, "eduList", 800, 500, "직원교육일지 리스트", param, "DAY_POP::DAYEDULIST_PP.xfdl", "fn_popCallback");
        };

        // 작성자 선택 팝업
        this.btn_manager_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount < 1)
        		return;

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_data.getColumn(0, "교육일")
        	};

        	Sct.popup(this, "emp", 450, 400, "작성자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 사진첨부
        this.div_cont_div_right_div_main_btn_pic_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount == 0)
        		return;

        	//fileGroupId 설정
        	this.fileGroupId = Sct.Util.isEmpty(this.ds_data.getColumn(0, "FILE_GRP_ID")) ? "" : this.ds_data.getColumn(0, "FILE_GRP_ID");

        	const param = {
        		folderName:"DAY/DAY00709"
        	,	multiYn : "N"
        	,	extName : "image"
        	};
        	Sct.popup(this, "imgFILEUPLOAD", 326, 226, "", param, "CM_POP::FILEUPLOAD.xfdl", "fn_popCallback");
        };

        this.btn_mate_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount < 1)
        		return;

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_data.getColumn(0, "교육일")
        	};

        	Sct.popup(this, "matechk", 450, 400, "수급자 선택", param, "DAY_POP::DAYMATECHK_PP.xfdl", "fn_popCallback");
        };

        // 직원 선택 팝업
        this.btn_emp_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount < 1)
        		return;

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_data.getColumn(0, "교육일")
        	};

        	Sct.popup(this, "empchk", 450, 400, "직원 선택", param, "DAY_POP::DAYEMPCHK_PP.xfdl", "fn_popCallback");
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
        				this.ds_data.setColumn(0, "작성자명", name);
        				this.ds_data.setColumn(0, "작성자코드", staffid);
        				this.ds_data.setColumn(0, "VIEW_MANAGER", name + "/" + staffid);
        			}
        			else
        			{
        				this.ds_data.setColumn(0, "작성자명", "");
        				this.ds_data.setColumn(0, "작성자코드", "");
        				this.ds_data.setColumn(0, "VIEW_MANAGER", "");
        			}
        			break;
        		// 수급자 명단
        		case "matechk" :
        			for (let i = 0; i < objDs.rowcount; i++)
        			{
        				const mCount = 75;
        				if (this.ds_mate.rowcount == mCount)
        				{
        					this.alert("수급자 참석자수는 " + mCount + "명을 넘을 수 없습니다.");
        					return false;
        				}

        				const mfRow = this.ds_mate.findRow("m_code", objDs.getColumn(i, "m_code"));
        				if (mfRow > -1)
        					continue;
        				else
        				{
        					this.div_cont.form.div_right.form.div_main.form.grd_mate.set_enableevent(false);
        					this.div_cont.form.div_right.form.div_main.form.grd_mate.set_enableredraw(false);
        					this.ds_mate.set_enableevent(false);

        					const mnRow = this.ds_mate.addRow();
        					this.ds_mate.setColumn(mnRow, "m_code", objDs.getColumn(i, "m_code"));
        					this.ds_mate.setColumn(mnRow, "m_name", objDs.getColumn(i, "m_name"));
        					this.ds_mate.setColumn(mnRow, "성별", objDs.getColumn(i, "성별"));
        					this.ds_mate.setColumn(mnRow, "m_group", objDs.getColumn(i, "m_group"));

        					this.ds_mate.set_keystring("S:+m_name");

        					this.ds_mate.set_enableevent(true);
        					this.div_cont.form.div_right.form.div_main.form.grd_mate.set_enableredraw(true);
        					this.div_cont.form.div_right.form.div_main.form.grd_mate.set_enableevent(true);
        				}
        			}

        			this.ds_data.setColumn(0, "출석정원", this.ds_mate.rowcount);

        			break;
        		// 직원 명단
        		case "empchk" :
        			for (let i = 0; i < objDs.rowcount; i++)
        			{
        				const eCount = 30;
        				if (this.ds_emp.rowcount == eCount)
        				{
        					this.alert("직원 참석자수는 " + eCount + "명을 넘을 수 없습니다.");
        					return false;
        				}

        				const fRow = this.ds_emp.findRow("c_staffid", objDs.getColumn(i, "c_staffid"));
        				if (fRow > -1)
        					continue;
        				else
        				{
        					this.div_cont.form.div_right.form.div_main.form.grd_emp.set_enableevent(false);
        					this.div_cont.form.div_right.form.div_main.form.grd_emp.set_enableredraw(false);
        					this.ds_emp.set_enableevent(false);

        					const snRow = this.ds_emp.addRow();
        					this.ds_emp.setColumn(snRow, "c_staffid", objDs.getColumn(i, "c_staffid"));
        					this.ds_emp.setColumn(snRow, "c_name", nexacro.trim(objDs.getColumn(i, "c_name")));
        					this.ds_emp.setColumn(snRow, "성별", objDs.getColumn(i, "성별"));
        					this.ds_emp.setColumn(snRow, "c_group", objDs.getColumn(i, "c_group"));
        					this.ds_emp.setColumn(snRow, "c_dutyname", nexacro.trim(objDs.getColumn(i, "c_dutyname")));

        					this.ds_emp.set_keystring("S:+c_name");

        					this.ds_emp.set_enableevent(true);
        					this.div_cont.form.div_right.form.div_main.form.grd_emp.set_enableredraw(true);
        					this.div_cont.form.div_right.form.div_main.form.grd_emp.set_enableevent(true);
        				}
        			}

        			this.ds_data.setColumn(0, "출석직원", this.ds_emp.rowcount);

        			break;
        		// 일지 불러오기
        		case "eduList" :
        			this.ds_data.setColumn(0, "교육내용", objDs.getColumn(0, "교육내용"));
        			break;
        		// 사진첨부
        		case "imgFILEUPLOAD" :
        			const dataGrpId = this.ds_data.getColumn(0, "FILE_GRP_ID");

        			if (this.ds_data.getColumn(0, "FILE_REAL_NAME") != objDs.getColumn(0, "FILE_REAL_NAME"))
        			{
        				this.ds_data.setColumn(0, "FILE_GRP_ID", objDs.getColumn(0, "FILE_GRP_ID"));
        				this.ds_data.setColumn(0, "FILE_REAL_NAME", objDs.getColumn(0, "FILE_REAL_NAME"));
        				this.ds_data.setColumn(0, "daysajin", Sct.Util.isEmpty(objDs.getColumn(0, "FILE_NAME")) ? "" : objDs.getColumn(0, "FILE_NAME"));
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
        this.fn_searchBtn = function ()
        {
        	this.fn_search("search");
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

        // 리포트 버튼
        this.fn_reportBtn = function()
        {
        	this.fn_report();
        };

        // 조회조건 년도 값 변경 이벤트
        this.div_search_cmb_year_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "DATE_FROM", e.postvalue + '0101');
        	this.ds_search.setColumn(0, "DATE_TO", e.postvalue + '1231');
        	this.div_search.form.cal_date_from_pic.set_value(e.postvalue + "0101");
        	this.div_search.form.cal_date_to_pic.set_value(e.postvalue + "1231");

        	// 값 변경시 조회
        	this.fn_search("search");
        };

        // 검색조건 날짜 변경 이벤트
        this.cal_date_pic_onchanged = function(obj,e)
        {
        	// 캘린더 범위가 콤보 박스의 년도를 넘지 못하도록 하기
        	const nYear = this.ds_search.getColumn(0, "YEAR");
        	switch(obj.id)
        	{
        		case "cal_date_from_pic" :
        			if (e.postvalue < nYear + "0101")
        			{
        				this.ds_search.setColumn(0, "DATE_FROM", nYear + '0101');
        			}
        			break;
        		case "cal_date_to_pic" :
        			if (e.postvalue > nYear + "1231")
        			{
        				this.ds_search.setColumn(0, "DATE_TO", nYear + '1231');
        			}
        			break;
        		default:
        	}
        };

        // 리포트 체크박스 값 변경 이벤트
        this.chk_repo_onchanged = function(obj,e)
        {
        	switch(e.postvalue)
        	{
        		case "0" :
        			obj.set_value(e.prevalue);
        			break;
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

        // 그리드 셀클릭 이벤트
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	const dateIdx = obj.getBindCellIndex("body", "교육일");
        	// 교육일 선택
        	if (e.col == dateIdx)
        	{
        		// 입력, 수정용 데이터셋에 데이터 복사
        		this.fn_dataCopy(e.row);
        	}
        };

        // 새로작성
        this.div_func_btn_new_onclick = function(obj,e)
        {
        	this.ds_list.set_rowposition(-1);
        	this.ds_data.clearData();
        	const nRow = this.ds_data.addRow();

        	// 시설코드
        	this.ds_data.setColumn(nRow, "sicode", fv_sicode);

        	// 교육일
        	const today = Sct.Util.getToday();
        	this.ds_data.setColumn(nRow, "교육일", today);
        	this.div_cont.form.div_right.form.div_main.form.cal_date_pic.set_enable(true);	// 달력 활성화

        	// 교육시간
        	this.ds_data.setColumn(nRow, "교육시간", "10:00-11:00");
        	const timeStr = this.ds_data.getColumn(nRow, "교육시간");
        	this.ds_data.setColumn(nRow, "FROM_HOUR", timeStr.substr(0, 2));
        	this.ds_data.setColumn(nRow, "FROM_MIN", timeStr.substr(3, 2));
        	this.ds_data.setColumn(nRow, "TO_HOUR", timeStr.substr(6, 2));
        	this.ds_data.setColumn(nRow, "TO_MIN", timeStr.substr(9, 2));
        	// 스핀에도 값 세팅
        	this.div_cont.form.div_right.form.div_main.form.spn_from_hour.set_value(parseInt(timeStr.substr(0, 2)));
        	this.div_cont.form.div_right.form.div_main.form.spn_from_min.set_value(parseInt(timeStr.substr(3, 2)));
        	this.div_cont.form.div_right.form.div_main.form.spn_to_hour.set_value(parseInt(timeStr.substr(6, 2)));
        	this.div_cont.form.div_right.form.div_main.form.spn_to_min.set_value(parseInt(timeStr.substr(9, 2)));

        	this.ds_data.setColumn(nRow, "교육장소", "");
        	this.ds_data.setColumn(nRow, "강사", "");
        	this.ds_data.setColumn(nRow, "출석정원", 0);
        	this.ds_data.setColumn(nRow, "출석직원", 0);
        	this.ds_data.setColumn(nRow, "교육명", "");

        	// 교육방법 개별교육으로 세팅
        	this.ds_data.setColumn(nRow, "교육방법", 1);
        	this.ds_data.setColumn(nRow, "방법1", 1);

        	// 작성자
        	this.ds_data.setColumn(nRow, "작성자명", nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name")));
        	this.ds_data.setColumn(nRow, "작성자코드", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid"));
        	const managerStr = this.ds_data.getColumn(nRow, "작성자명")
        					 + "/"
        					 + this.ds_data.getColumn(nRow, "작성자코드");
        	this.ds_data.setColumn(nRow, "VIEW_MANAGER", managerStr);

        	this.ds_data.setColumn(nRow, "교육내용", "");

        	// 사진 초기화
        	this.div_cont.form.div_right.form.div_main.form.imv_pic.set_image("");
        	this.ds_data.setColumn(nRow, "daysajin", "");

        	// 수급자 명단
        	this.ds_mate.clearData();
        	this.ds_data.setColumn(nRow, "참석명단", "");

        	// 직원 명단
        	this.ds_emp.clearData();
        	this.ds_data.setColumn(nRow, "직원명단", "");
        	this.ds_data.setColumn(nRow, "참석직종", "");

        };

        // 시간 스핀 이벤트
        // 스핀의 id와 스핀의 값이 세팅될 컴포넌트의 id는 앞의 네글자 ex)mae_를 제외하고 같아야 한다.
        this.spn_onspin = function(obj,e)
        {
        	const idStr = obj.id.substr(4);
        	const value = "" + e.postvalue;
        	let rtnVal = "";
        	if (value.length == 1)
        	{
        		rtnVal = "0" + value;
        	}
        	else
        	{
        		rtnVal = value;
        	}

        	this.div_cont.form.div_right.form.div_main.form.components["mae_" + idStr].set_value(rtnVal);

        	let cRow;
        	const offset = 0;
        	const str1 = this.ds_data.getColumn(0, "교육시간");

        	switch (idStr)
        	{
        		case "from_hour":
        			cRow = 0;
        			break;
        		case "from_min":
        			cRow = 3;
        			break;
        		case "to_hour":
        			cRow = 6;
        			break;
        		case "to_min":
        			cRow = 9;
        			break;
        	}

        	this.fn_valueSet(cRow, str1, "교육시간", rtnVal, offset, this.ds_data);
        };

        // 시 변경 이벤트
        this.mae_hour_onchanged = function(obj,e)
        {
        	if (e.postvalue > "23" || e.postvalue == "")
        	{
        		obj.set_value("00");
        	}
        	else if (nexacro.trim(e.postvalue).length == 1)
        	{
        		obj.set_value("0" + e.postvalue);
        	}

        	const idStr = obj.id.substr(4);
        	this.div_cont.form.div_right.form.div_main.form.components["spn_" + idStr].set_value(e.postvalue);

        	let cRow;
        	const offset = 0;
        	const value = obj.value;
        	const str1 = this.ds_data.getColumn(0, "교육시간");

        	switch (obj.id)
        	{
        		case "mae_from_hour":
        			cRow = 0;
        			break;
        		case "mae_to_hour":
        			cRow = 6;
        			break;
        	}

        	this.fn_valueSet(cRow, str1, "교육시간", value, offset, this.ds_data);
        };

        // 시 키 업 이벤트
        this.mae_hour_onkeydown = function(obj,e)
        {
        	let rtnVal;
        	const idStr = obj.id.substr(4);
        	// ↑ ↓
        	if (e.keycode == 38 || e.keycode == 40)
        	{
        		// ↑
        		if (e.keycode == 38)
        		{
        			if (obj.value < "23")
        			{
        				rtnVal = "" + (parseInt(obj.value) + 1);
        			}
        			else if (obj.value == "23")
        			{
        				rtnVal = "23";
        			}
        		}

        		// ↓
        		if (e.keycode == 40)
        		{
        			if (obj.value == "00")
        			{
        				rtnVal = "00";
        			}
        			else if (obj.value > "00" && obj.value < "24")
        			{
        				rtnVal = "" + (parseInt(obj.value) - 1);
        			}
        		}

        		obj.set_value(rtnVal.padStart(2, '0'));

        		this.div_cont.form.div_right.form.div_main.form.components["spn_" + idStr].set_value(rtnVal);

        		let cRow;
        		const offset = 0;
        		const value = obj.value;
        		const str1 = this.ds_data.getColumn(0, "교육시간");

        		switch (obj.id)
        		{
        			case "mae_from_hour":
        				cRow = 0;
        				break;
        			case "mae_to_hour":
        				cRow = 6;
        				break;
        		}

        		this.fn_valueSet(cRow, str1, "교육시간", value, offset, this.ds_data);
        	}
        };

        // 분 변경 이벤트
        this.mae_min_onchanged = function(obj,e)
        {
        	if (e.postvalue > "59" || e.postvalue == "")
        	{
        		obj.set_value("00");
        	}
        	else if (nexacro.trim(e.postvalue).length == 1)
        	{
        		obj.set_value("0" + e.postvalue);
        	}

        	const idStr = obj.id.substr(4);
        	this.div_cont.form.div_right.form.div_main.form.components["spn_" + idStr].set_value(e.postvalue);

        	let cRow;
        	const offset = 0;
        	const value = obj.value;
        	const str1 = this.ds_data.getColumn(0, "교육시간");

        	switch (obj.id)
        	{
        		case "mae_from_min":
        			cRow = 3;
        			break;
        		case "mae_to_min":
        			cRow = 9;
        			break;
        	}

        	this.fn_valueSet(cRow, str1, "교육시간", value, offset, this.ds_data);
        };

        // 분 키 업 이벤트
        this.mae_min_onkeydown = function(obj,e)
        {
        	let rtnVal;
        	const idStr = obj.id.substr(4);
        	// ↑ ↓
        	if (e.keycode == 38 || e.keycode == 40)
        	{
        		// ↑
        		if (e.keycode == 38)
        		{
        			if (obj.value < "59")
        			{
        				rtnVal = "" + (parseInt(obj.value) + 1);
        			}
        			else if (obj.value == "59")
        			{
        				rtnVal = "59";
        			}
        		}

        		// ↓
        		if (e.keycode == 40)
        		{
        			if (obj.value == "00")
        			{
        				rtnVal = "00";
        			}
        			else if (obj.value > "00" && obj.value < "60")
        			{
        				rtnVal = "" + (parseInt(obj.value) - 1);
        			}
        		}

        		obj.set_value(rtnVal.padStart(2, '0'));

        		this.div_cont.form.div_right.form.div_main.form.components["spn_" + idStr].set_value(rtnVal);

        		let cRow;
        		const offset = 0;
        		const value = obj.value;
        		const str1 = this.ds_data.getColumn(0, "교육시간");

        		switch (obj.id)
        		{
        			case "mae_from_min":
        				cRow = 3;
        				break;
        			case "mae_to_min":
        				cRow = 9;
        				break;
        		}

        		this.fn_valueSet(cRow, str1, "교육시간", value, offset, this.ds_data);
        	}
        };

        // 새로고침 버튼
        this.btn_reset_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount == 0)
        		return false;

        	if (this.ds_data.getRowType(0) == 2)
        		this.div_func_btn_new_onclick();
        	else
        		this.fn_search("search_save");
        };

        // 교육명 콤보 값 변경 이벤트
        this.div_cont_div_right_div_main_cmb_edu_title_onitemchanged = function(obj,e)
        {
        	if (this.ds_data.rowcount == 0)
        		return false;

        	this.ds_data.setColumn(0, "교육명", e.posttext);
        };

        // 교육방법 체크박스 값 변경 이벤트
        this.chk_edu_tp_onchanged = function(obj,e)
        {
        	switch(e.postvalue) {
        		case "0" :
        			obj.set_value(e.prevalue);
        			break;
        		case "1" :
        			this.ds_data.setColumn(0, "방법2", 0);
        			this.ds_data.setColumn(0, "교육방법", e.postvalue);
        			this.ds_report.setColumn(0, "REPO1", e.postvalue);
        			break;
        		case "2" :
        			this.ds_data.setColumn(0, "방법1", 0);
        			this.ds_data.setColumn(0, "교육방법", e.postvalue);
        			this.ds_report.setColumn(0, "REPO1", e.postvalue);
        			break;
        		default:
        	}
        };

        // 참석 직원명단 그리드 확장 버튼 이벤트
        this.div_cont_div_right_div_main_grd_emp_onexpandup = function(obj,e)
        {
        	// 지움 버튼
        	if (e.col == 4)
        	{
        		this.ds_emp.deleteRow(e.row);
        	}
        };

        // 참석 수급자명단 그리드 확장 버튼 이벤트
        this.div_cont_div_right_div_main_grd_mate_onexpandup = function(obj,e)
        {
        	// 지움 버튼
        	if (e.col == 4)
        	{
        		this.ds_mate.deleteRow(e.row);
        	}
        };

        // 사진 지움
        this.div_cont_div_right_div_main_btn_pic_del_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount == 0)
        		return false;

        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "FILE_REAL_NAME")))
        	{
        		return false;
        	}

        	if (!this.confirm("수급자교육(훈련) 사진을 삭제하시겠습니까?"))
        		return;

        	this.ds_data.setColumn(0, "FILE_GRP_ID", "");
        	this.ds_data.setColumn(0, "daysajin", "");
        	this.div_cont.form.div_right.form.div_main.form.imv_pic.set_image("");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_right.form.div_main.form.mae_from_hour.addEventHandler("onchanged",this.mae_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.mae_from_hour.addEventHandler("onkeydown",this.mae_hour_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.spn_from_hour.addEventHandler("onspin",this.spn_onspin,this);
            this.div_cont.form.div_right.form.div_main.form.mae_from_min.addEventHandler("onchanged",this.mae_min_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.mae_from_min.addEventHandler("onkeydown",this.mae_min_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.spn_from_min.addEventHandler("onspin",this.spn_onspin,this);
            this.div_cont.form.div_right.form.div_main.form.mae_to_hour.addEventHandler("onchanged",this.mae_hour_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.mae_to_hour.addEventHandler("onkeydown",this.mae_hour_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.spn_to_hour.addEventHandler("onspin",this.spn_onspin,this);
            this.div_cont.form.div_right.form.div_main.form.mae_to_min.addEventHandler("onchanged",this.mae_min_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.mae_to_min.addEventHandler("onkeydown",this.mae_min_onkeydown,this);
            this.div_cont.form.div_right.form.div_main.form.spn_to_min.addEventHandler("onspin",this.spn_onspin,this);
            this.div_cont.form.div_right.form.div_main.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_load.addEventHandler("onclick",this.btn_load_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.cmb_edu_title.addEventHandler("onitemchanged",this.div_cont_div_right_div_main_cmb_edu_title_onitemchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_edu_tp1.addEventHandler("onchanged",this.chk_edu_tp_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_edu_tp2.addEventHandler("onchanged",this.chk_edu_tp_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.btn_manager.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_pic.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_pic_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_emp.addEventHandler("onclick",this.btn_emp_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.grd_emp.addEventHandler("onexpandup",this.div_cont_div_right_div_main_grd_emp_onexpandup,this);
            this.div_cont.form.div_right.form.div_main.form.btn_mate.addEventHandler("onclick",this.btn_mate_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.grd_mate.addEventHandler("onexpandup",this.div_cont_div_right_div_main_grd_mate_onexpandup,this);
            this.div_cont.form.div_right.form.div_main.form.btn_pic_del.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_pic_del_onclick,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.div_search_cmb_year_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.cal_date_from_pic.addEventHandler("onchanged",this.cal_date_pic_onchanged,this);
            this.div_search.form.cal_date_to_pic.addEventHandler("onchanged",this.cal_date_pic_onchanged,this);
            this.div_func.form.btn_new.addEventHandler("onclick",this.div_func_btn_new_onclick,this);
            this.div_func.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.fn_report2,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report1,this);
        };
        this.loadIncludeScript("DAY00709.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
