(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00710");
            this.set_titletext("7-10 자원봉사활동일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"활동번호\" type=\"INT\" size=\"256\"/><Column id=\"봉사자명\" type=\"STRING\" size=\"256\"/><Column id=\"봉사자번호\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"소속\" type=\"STRING\" size=\"256\"/><Column id=\"활동일\" type=\"DATE\" size=\"256\"/><Column id=\"활동시간\" type=\"STRING\" size=\"256\"/><Column id=\"활동내용\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"작성자코드\" type=\"STRING\" size=\"256\"/><Column id=\"bongsajin\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">2021</Col><Col id=\"CMNM\">2021년</Col></Row><Row><Col id=\"CMCD\">2022</Col><Col id=\"CMNM\">2022년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"활동번호\" type=\"INT\" size=\"256\"/><Column id=\"봉사자명\" type=\"STRING\" size=\"256\"/><Column id=\"봉사자번호\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"소속\" type=\"STRING\" size=\"256\"/><Column id=\"활동일\" type=\"DATE\" size=\"256\"/><Column id=\"활동시간\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"TO_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"활동내용\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"작성자코드\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"bongsajin\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID_O\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_vol", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"봉사자번호\" type=\"STRING\" size=\"256\"/><Column id=\"봉사자명\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"생일\" type=\"STRING\" size=\"256\"/><Column id=\"연락처1\" type=\"STRING\" size=\"256\"/><Column id=\"연락처2\" type=\"STRING\" size=\"256\"/><Column id=\"소속\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"세부주소\" type=\"STRING\" size=\"256\"/><Column id=\"우편번호\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"REPO1\" type=\"STRING\" size=\"256\"/><Column id=\"R1\" type=\"STRING\" size=\"256\"/><Column id=\"R1_1\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"170\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"활동일\"/><Cell col=\"1\" text=\"봉사자명\"/></Band><Band id=\"body\"><Cell text=\"bind:활동일\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dot\" cssclass=\"cellBWoman\"/><Cell col=\"1\" text=\"bind:봉사자명\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","470","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_main","0","0","1110","748",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e2e2e2");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","492","7","126","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_text("자원봉사활동일지");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no","24","10","58","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_text("기록번호 : ");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no_value","87","10","60","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_text("00000000");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","20","40",null,"1","20",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_background("#e2e2e2");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","20","52","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_text("활동일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","sta_head1:-1","sta_head1:-34","570","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date","sta_body1:-565","sta_body1:-30","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_tooltiptext("점검일");
            obj.set_buttonsize("0 0");
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
            obj.set_taborder("27");
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
            obj.set_taborder("28");
            obj.set_text("까지");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_reset","sta_time_to:25","sta_body1:-30","84","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_text("새로고침");
            obj.set_cssclass("btn_refresh");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","20","sta_head1:-1","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","sta_head2:-1","sta_body1:-1","570","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","20","sta_head2:-1","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("31");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","sta_head3:-1","sta_body2:-1","570","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","20","150","83","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","sta_head4:-1","150","570","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5","20","sta_head4:-1","83","504",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            obj.set_text("활동내용");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5","sta_head5:-1","sta_body4:-1","570","504",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_vol_name","sta_body2:-565","sta_body2:-30","454","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            obj.set_maxlength("30");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_att","sta_body3:-565","sta_body3:-30","559","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_maxlength("40");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_manager","sta_head4:-78","sta_head4:-30","73","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_text("작성자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_manager_value","sta_body4:-560","sta_body4:-28","180","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("37");
            obj.set_text("너싱홈/20220001");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_content","sta_body5:-565","sta_body5:-500","560","495",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_maxlength("2000");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            obj.set_wordWrap("char");
            obj.set_cssclass("essential");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("imv_pic","681","52","400","195",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("38");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_pic","imv_pic:-400","imv_pic:3","210","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("39");
            obj.set_readonly("true");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_pic","edt_pic:5","imv_pic:3","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_text("사진첨부");
            obj.set_cssclass("btn_addimage");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_vol","681","285","160","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_text("자원봉사자 추가등록");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_vol","btn_vol:-160","btn_vol:3","400","374",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_vol");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"봉사_No\"/><Cell col=\"1\" text=\"봉사자명\"/><Cell col=\"2\" text=\"소속\"/></Band><Band id=\"body\"><Cell text=\"bind:봉사자번호\"/><Cell col=\"1\" text=\"bind:봉사자명\"/><Cell col=\"2\" text=\"bind:소속\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_volunteer","sta_head2:-78","sta_head2:-30","73","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_text("봉사자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_vol_no","566","89","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_pic_del","btn_pic:5","btn_pic:-25","90","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
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

            obj = new Div("div_func","470","0","1110","40",null,null,null,null,null,null,this);
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
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","70","26","btn_delete:5",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2","445","7","190","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("연간 자원봉사 활동 리스트");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_report_body","188","5","255","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_repo1","191","7","100","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("활동일지(사진)");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_repo2","300","7","80","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("활동일지");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","370","7","70","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("출력");
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

            obj = new BindItem("item3","div_cont.form.div_right.form.div_main.form.sta_no_value","text","ds_data","활동번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.cal_date","value","ds_data","활동일");
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

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.edt_vol_name","value","ds_data","봉사자명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.edt_att","value","ds_data","소속");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_main.form.sta_manager_value","text","ds_data","VIEW_MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_main.form.txt_content","value","ds_data","활동내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.div_main.form.edt_pic","value","ds_data","bongsajin");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.edt_vol_no","value","ds_data","봉사자번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_func.form.chk_repo1","value","ds_report","R1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_func.form.chk_repo2","value","ds_report","R1_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_func.form.chk_sign","value","ds_report","SIGN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_search.form.cal_date_from_pic","value","ds_search","DATE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_search.form.cal_date_to_pic","value","ds_search","DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_right.form.div_main.form.cal_date_pic","value","ds_data","활동일");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00710.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00710.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00710.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00710
         * 화면명   	: 7-10 자원봉사활동일지
         * 화면설명 	: 자원봉사활동 내역을 작성하는 화면
         * 작성일   	: 2022-03-14
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
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
        	this.ds_report.setColumn(0, "REPO2", 1);
        	this.ds_report.setColumn(0, "SIGN", 1);

        	// 오픈시 조회
        	this.fn_search("search");
        	this.fn_search2();
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
        		this.reSearchData = this.ds_data.getColumn(0, "활동번호");

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

        	// 봉사자가 지정되지 않은 경우
        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "봉사자번호")))
        	{
        		this.alert("봉사자를 지정해야합니다.");
        		return false;
        	}

        	// validation
        	const valiArr = ["활동내용"];
        	for (let i = 0; i < valiArr.length; i++)
        	{
        		if (this.ds_data.getColumn(0, valiArr[i]).length < 10)
        		{
        			this.alert(valiArr[i] + "는 10글자 이상이어야 합니다.");
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


        	const fHour = this.ds_data.getColumn(0, "FROM_HOUR");
        	const fMin = this.ds_data.getColumn(0, "FROM_MIN");
        	const tHour = this.ds_data.getColumn(0, "TO_HOUR");
        	const tMin = this.ds_data.getColumn(0, "TO_MIN");
        	const timeStr = fHour + ":" + fMin + "-" + tHour + ":" + tMin;
        	this.ds_data.setColumn(0, "활동시간", timeStr);


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
        				   + "sqlId=DAY00710.DAY00710_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 봉사자 조회
        this.fn_search2 = function()
        {
        	const svcId = "search2";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_vol=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00710.DAY00710_DS_VOL_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	// validation
        	if (!this.fn_save_pre()) return;

        	const svcId = "save";
        	const params = "/DAY00710Controller.do";
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
        	const params = "/DAY00710Controller.do";
        	const inDatasets = "input1=ds_data:U";
        	const outDatasets = "";
        	const argument = "method=delete";

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
        			this.ds_data.clearData();
        			this.ds_list.set_rowposition(-1);
        		}
        		else if (strSvcID == "search_save")
        		{
        			const sRow = this.fn_findMstRow(this.reSearchData, this.searchFlag);
        			this.searchFlag = "";
        		}
        		else if (strSvcID == "search2")
        		{

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

        // 입력, 수정용 데이터셋에 데이터 복사
        this.fn_dataCopy = function(row)
        {
        	this.ds_data.clearData();
        	const nRow = this.ds_data.addRow();
        	this.ds_data.copyRow(nRow, this.ds_list, row);

        	// 활동일
        	this.div_cont.form.div_right.form.div_main.form.cal_date_pic.set_enable(false);

        	// 활동시간
        	const timeStr = this.ds_data.getColumn(nRow, "활동시간");
        	this.ds_data.setColumn(nRow, "FROM_HOUR", timeStr.substr(0, 2));
        	this.ds_data.setColumn(nRow, "FROM_MIN", timeStr.substr(3, 2));
        	this.ds_data.setColumn(nRow, "TO_HOUR", timeStr.substr(6, 2));
        	this.ds_data.setColumn(nRow, "TO_MIN", timeStr.substr(9, 2));
        	// 스핀에도 값 세팅
        	this.div_cont.form.div_right.form.div_main.form.spn_from_hour.set_value(parseInt(timeStr.substr(0, 2)));
        	this.div_cont.form.div_right.form.div_main.form.spn_from_min.set_value(parseInt(timeStr.substr(3, 2)));
        	this.div_cont.form.div_right.form.div_main.form.spn_to_hour.set_value(parseInt(timeStr.substr(6, 2)));
        	this.div_cont.form.div_right.form.div_main.form.spn_to_min.set_value(parseInt(timeStr.substr(9, 2)));

        	// 작성자
        	const managerStr = this.ds_data.getColumn(nRow, "작성자명")
        					 + "/"
        					 + this.ds_data.getColumn(nRow, "작성자코드");
        	this.ds_data.setColumn(nRow, "VIEW_MANAGER", managerStr);

        	// 파일 이미지
        	this.fn_getSignImage();
        	this.ds_data.setColumn(nRow, "FILE_GRP_ID_O", this.ds_data.getColumn(nRow, "FILE_GRP_ID"));

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(nRow, 1);
        	this.ds_data.set_updatecontrol(true);
        };

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo, flag) {
        	let sFindRow = this.ds_list.findRow("활동번호", fv_saveRefNo);

        	if (flag == "I")
        		sFindRow = this.ds_list.findRow("활동번호", this.ds_list.getMax("활동번호"));

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

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00710_R01.xfdl";
        	const popupName = "자원봉사활동일지";

        	const fileGrp = this.ds_data.getColumn(0, "FILE_REAL_NAME");

        	params = {
        		sicode : fv_sicode
        	,	no : this.ds_data.getColumn(0, "활동번호")
        	,	sign : this.ds_report.getColumn(0, "SIGN")
        	,	repo1 : this.ds_report.getColumn(0, "REPO1")
        	,	fileGrp : fileGrp
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 연간 자원봉사 활동 리스트
        this.fn_report2 = function()
        {
        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00710_R03.xfdl";
        	const popupName = "연간 자원봉사 활동 리스트";

        	params = {
        		sicode : fv_sicode
        	,	dateFrom : this.ds_search.getColumn(0, "DATE_FROM")
        	,	dateTo : this.ds_search.getColumn(0, "DATE_TO")
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 봉사자 선택 팝업
        this.btn_volunteer_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount < 1)
        		return;

        	const param = {
        			SICODE : fv_sicode
        	};

        	Sct.popup(this, "vol", 450, 400, "봉사자 선택", param, "DAY_POP::DAY00710_P01.xfdl", "fn_popCallback");
        };

        // 작성자 선택 팝업
        this.btn_manager_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount < 1)
        		return;

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_data.getColumn(0, "활동일")
        	};

        	Sct.popup(this, "emp", 450, 400, "작성자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 자원봉사자 추가등록 팝업
        this.btn_vol_onclick = function(obj,e)
        {
        	const param = {
        			SICODE : fv_sicode
        	};

        	Sct.popup(this, "volList", 450, 400, "봉사자 관리", param, "DAY_POP::DAY00710_P02.xfdl", "fn_popCallback");
        };

        // 사진첨부
        this.div_cont_div_right_div_main_btn_pic_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount == 0)
        		return;

        	//fileGroupId 설정
        	this.fileGroupId = Sct.Util.isEmpty(this.ds_data.getColumn(0, "FILE_GRP_ID")) ? "" : this.ds_data.getColumn(0, "FILE_GRP_ID");

        	const param = {
        		folderName:"DAY/DAY00710"
        	,	multiYn : "N"
        	,	extName : "image"
        	};
        	Sct.popup(this, "imgFILEUPLOAD", 326, 226, "", param, "CM_POP::FILEUPLOAD.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if (popid != "volList")
        	{
        		if(Sct.Util.isEmpty(strDs)) return;
        	}
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		// 봉사자 선택
        		case "vol" :
        			this.ds_data.setColumn(0, "봉사자명", objDs.getColumn(0, "봉사자명"));
        			this.ds_data.setColumn(0, "봉사자번호", parseInt(objDs.getColumn(0, "봉사자번호")));
        			this.ds_data.setColumn(0, "소속", objDs.getColumn(0, "소속"));
        			break;
        		// 작성자 선택
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
        		// 사진첨부
        		case "imgFILEUPLOAD" :
        			const dataGrpId = this.ds_data.getColumn(0, "FILE_GRP_ID");

        			if (this.ds_data.getColumn(0, "FILE_REAL_NAME") != objDs.getColumn(0, "FILE_REAL_NAME"))
        			{
        				this.ds_data.setColumn(0, "FILE_GRP_ID", objDs.getColumn(0, "FILE_GRP_ID"));
        				this.ds_data.setColumn(0, "FILE_REAL_NAME", objDs.getColumn(0, "FILE_REAL_NAME"));
        				this.ds_data.setColumn(0, "bongsajin", Sct.Util.isEmpty(objDs.getColumn(0, "FILE_NAME")) ? "" : objDs.getColumn(0, "FILE_NAME"));
        				this.fn_getSignImage();
        			}
        			break;
        		// 봉사자 추가등록
        		case "volList" :
        			this.fn_search2();
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
        	const dateIdx = obj.getBindCellIndex("body", "활동일");
        	// 활동일 선택
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

        	// 활동일
        	const today = Sct.Util.getToday();
        	this.ds_data.setColumn(nRow, "활동일", today);
        	this.div_cont.form.div_right.form.div_main.form.cal_date_pic.set_enable(true);

        	// 활동시간
        	this.ds_data.setColumn(nRow, "활동시간", "10:00-17:00");
        	const timeStr = this.ds_data.getColumn(nRow, "활동시간");
        	this.ds_data.setColumn(nRow, "FROM_HOUR", timeStr.substr(0, 2));
        	this.ds_data.setColumn(nRow, "FROM_MIN", timeStr.substr(3, 2));
        	this.ds_data.setColumn(nRow, "TO_HOUR", timeStr.substr(6, 2));
        	this.ds_data.setColumn(nRow, "TO_MIN", timeStr.substr(9, 2));
        	// 스핀에도 값 세팅
        	this.div_cont.form.div_right.form.div_main.form.spn_from_hour.set_value(parseInt(timeStr.substr(0, 2)));
        	this.div_cont.form.div_right.form.div_main.form.spn_from_min.set_value(parseInt(timeStr.substr(3, 2)));
        	this.div_cont.form.div_right.form.div_main.form.spn_to_hour.set_value(parseInt(timeStr.substr(6, 2)));
        	this.div_cont.form.div_right.form.div_main.form.spn_to_min.set_value(parseInt(timeStr.substr(9, 2)));

        	this.ds_data.setColumn(nRow, "봉사자명", "");
        	this.ds_data.setColumn(nRow, "봉사자번호", "");
        	this.ds_data.setColumn(nRow, "성별", "");
        	this.ds_data.setColumn(nRow, "소속", "");

        	// 작성자
        	this.ds_data.setColumn(nRow, "작성자명", nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name")));
        	this.ds_data.setColumn(nRow, "작성자코드", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid"));
        	const managerStr = this.ds_data.getColumn(nRow, "작성자명")
        					 + "/"
        					 + this.ds_data.getColumn(nRow, "작성자코드");
        	this.ds_data.setColumn(nRow, "VIEW_MANAGER", managerStr);

        	this.ds_data.setColumn(nRow, "활동내용", "");

        	// 사진 초기화
        	this.div_cont.form.div_right.form.div_main.form.imv_pic.set_image("");
        	this.ds_data.setColumn(nRow, "bongsajin", "");

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
        	const str1 = this.ds_data.getColumn(0, "활동시간");

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

        	this.fn_valueSet(cRow, str1, "활동시간", rtnVal, offset, this.ds_data);
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
        	const str1 = this.ds_data.getColumn(0, "활동시간");

        	switch (obj.id)
        	{
        		case "mae_from_hour":
        			cRow = 0;
        			break;
        		case "mae_to_hour":
        			cRow = 6;
        			break;
        	}

        	this.fn_valueSet(cRow, str1, "활동시간", value, offset, this.ds_data);
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
        		const str1 = this.ds_data.getColumn(0, "활동시간");

        		switch (obj.id)
        		{
        			case "mae_from_hour":
        				cRow = 0;
        				break;
        			case "mae_to_hour":
        				cRow = 6;
        				break;
        		}

        		this.fn_valueSet(cRow, str1, "활동시간", value, offset, this.ds_data);
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
        	const str1 = this.ds_data.getColumn(0, "활동시간");

        	switch (obj.id)
        	{
        		case "mae_from_min":
        			cRow = 3;
        			break;
        		case "mae_to_min":
        			cRow = 9;
        			break;
        	}

        	this.fn_valueSet(cRow, str1, "활동시간", value, offset, this.ds_data);
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
        		const str1 = this.ds_data.getColumn(0, "활동시간");

        		switch (obj.id)
        		{
        			case "mae_from_min":
        				cRow = 3;
        				break;
        			case "mae_to_min":
        				cRow = 9;
        				break;
        		}

        		this.fn_valueSet(cRow, str1, "활동시간", value, offset, this.ds_data);
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

        // 사진 지움
        this.div_cont_div_right_div_main_btn_pic_del_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount == 0)
        		return false;

        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "FILE_REAL_NAME")))
        	{
        		return false;
        	}

        	if (!this.confirm("자원봉사활동 사진을 삭제하시겠습니까?"))
        		return;

        	this.ds_data.setColumn(0, "FILE_GRP_ID", "");
        	this.ds_data.setColumn(0, "bongsajin", "");
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
            this.div_cont.form.div_right.form.div_main.form.btn_manager.addEventHandler("onclick",this.btn_manager_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_pic.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_pic_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_vol.addEventHandler("onclick",this.btn_vol_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_volunteer.addEventHandler("onclick",this.btn_volunteer_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_pic_del.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_pic_del_onclick,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.div_search_cmb_year_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.cal_date_from_pic.addEventHandler("onchanged",this.cal_date_pic_onchanged,this);
            this.div_search.form.cal_date_to_pic.addEventHandler("onchanged",this.cal_date_pic_onchanged,this);
            this.div_func.form.btn_new.addEventHandler("onclick",this.div_func_btn_new_onclick,this);
            this.div_func.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.fn_report2,this);
            this.div_func.form.chk_repo1.addEventHandler("onchanged",this.chk_repo_onchanged,this);
            this.div_func.form.chk_repo2.addEventHandler("onchanged",this.chk_repo_onchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report1,this);
        };
        this.loadIncludeScript("DAY00710.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
