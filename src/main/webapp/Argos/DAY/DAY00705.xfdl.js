(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00705");
            this.set_titletext("7-5 일일식사평가");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"DATE_TO\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">2021</Col><Col id=\"CMNM\">2021년</Col></Row><Row><Col id=\"CMCD\">2022</Col><Col id=\"CMNM\">2022년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"c_staffid\" type=\"STRING\" size=\"256\"/><Column id=\"c_group\" type=\"STRING\" size=\"256\"/><Column id=\"c_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"c_become\" type=\"STRING\" size=\"256\"/><Column id=\"c_dutyname\" type=\"STRING\" size=\"256\"/><Column id=\"담당직종\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"KM_sicode\" type=\"STRING\" size=\"256\"/><Column id=\"식사번호\" type=\"INT\" size=\"256\"/><Column id=\"작성\" type=\"STRING\" size=\"256\"/><Column id=\"식사일\" type=\"DATE\" size=\"256\"/><Column id=\"식사요일\" type=\"STRING\" size=\"256\"/><Column id=\"평가자\" type=\"STRING\" size=\"256\"/><Column id=\"평가코드\" type=\"STRING\" size=\"256\"/><Column id=\"mor01\" type=\"STRING\" size=\"256\"/><Column id=\"mor02\" type=\"STRING\" size=\"256\"/><Column id=\"mor03\" type=\"STRING\" size=\"256\"/><Column id=\"mor04\" type=\"STRING\" size=\"256\"/><Column id=\"mor05\" type=\"STRING\" size=\"256\"/><Column id=\"mor06\" type=\"STRING\" size=\"256\"/><Column id=\"lun01\" type=\"STRING\" size=\"256\"/><Column id=\"lun02\" type=\"STRING\" size=\"256\"/><Column id=\"lun03\" type=\"STRING\" size=\"256\"/><Column id=\"lun04\" type=\"STRING\" size=\"256\"/><Column id=\"lun05\" type=\"STRING\" size=\"256\"/><Column id=\"lun06\" type=\"STRING\" size=\"256\"/><Column id=\"din01\" type=\"STRING\" size=\"256\"/><Column id=\"din02\" type=\"STRING\" size=\"256\"/><Column id=\"din03\" type=\"STRING\" size=\"256\"/><Column id=\"din04\" type=\"STRING\" size=\"256\"/><Column id=\"din05\" type=\"STRING\" size=\"256\"/><Column id=\"din06\" type=\"STRING\" size=\"256\"/><Column id=\"sna1\" type=\"STRING\" size=\"256\"/><Column id=\"sna2\" type=\"STRING\" size=\"256\"/><Column id=\"아침구성\" type=\"STRING\" size=\"256\"/><Column id=\"아침기호\" type=\"STRING\" size=\"256\"/><Column id=\"아침염도\" type=\"STRING\" size=\"256\"/><Column id=\"점심구성\" type=\"STRING\" size=\"256\"/><Column id=\"점심기호\" type=\"STRING\" size=\"256\"/><Column id=\"점심염도\" type=\"STRING\" size=\"256\"/><Column id=\"저녁구성\" type=\"STRING\" size=\"256\"/><Column id=\"저녁기호\" type=\"STRING\" size=\"256\"/><Column id=\"저녁염도\" type=\"STRING\" size=\"256\"/><Column id=\"간식구성\" type=\"STRING\" size=\"256\"/><Column id=\"간식기호\" type=\"STRING\" size=\"256\"/><Column id=\"간식염도\" type=\"STRING\" size=\"256\"/><Column id=\"아침의견\" type=\"STRING\" size=\"256\"/><Column id=\"점심의견\" type=\"STRING\" size=\"256\"/><Column id=\"저녁의견\" type=\"STRING\" size=\"256\"/><Column id=\"간식의견\" type=\"STRING\" size=\"256\"/><Column id=\"org_식사번호\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_meal", this);
            obj._setContents("<ColumnInfo><Column id=\"조식일반식\" type=\"STRING\" size=\"256\"/><Column id=\"조식죽식\" type=\"STRING\" size=\"256\"/><Column id=\"조식유동식\" type=\"STRING\" size=\"256\"/><Column id=\"중식일반식\" type=\"STRING\" size=\"256\"/><Column id=\"중식죽식\" type=\"STRING\" size=\"256\"/><Column id=\"중식유동식\" type=\"STRING\" size=\"256\"/><Column id=\"석식일반식\" type=\"STRING\" size=\"256\"/><Column id=\"석식죽식\" type=\"STRING\" size=\"256\"/><Column id=\"석식유동식\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"KM_sicode\" type=\"STRING\" size=\"256\"/><Column id=\"식사번호\" type=\"INT\" size=\"256\"/><Column id=\"작성\" type=\"STRING\" size=\"256\"/><Column id=\"식사일\" type=\"DATE\" size=\"256\"/><Column id=\"식사요일\" type=\"STRING\" size=\"256\"/><Column id=\"평가자\" type=\"STRING\" size=\"256\"/><Column id=\"평가코드\" type=\"STRING\" size=\"256\"/><Column id=\"mor01\" type=\"STRING\" size=\"256\"/><Column id=\"mor02\" type=\"STRING\" size=\"256\"/><Column id=\"mor03\" type=\"STRING\" size=\"256\"/><Column id=\"mor04\" type=\"STRING\" size=\"256\"/><Column id=\"mor05\" type=\"STRING\" size=\"256\"/><Column id=\"mor06\" type=\"STRING\" size=\"256\"/><Column id=\"lun01\" type=\"STRING\" size=\"256\"/><Column id=\"lun02\" type=\"STRING\" size=\"256\"/><Column id=\"lun03\" type=\"STRING\" size=\"256\"/><Column id=\"lun04\" type=\"STRING\" size=\"256\"/><Column id=\"lun05\" type=\"STRING\" size=\"256\"/><Column id=\"lun06\" type=\"STRING\" size=\"256\"/><Column id=\"din01\" type=\"STRING\" size=\"256\"/><Column id=\"din02\" type=\"STRING\" size=\"256\"/><Column id=\"din03\" type=\"STRING\" size=\"256\"/><Column id=\"din04\" type=\"STRING\" size=\"256\"/><Column id=\"din05\" type=\"STRING\" size=\"256\"/><Column id=\"din06\" type=\"STRING\" size=\"256\"/><Column id=\"sna1\" type=\"STRING\" size=\"256\"/><Column id=\"sna2\" type=\"STRING\" size=\"256\"/><Column id=\"아침구성\" type=\"STRING\" size=\"256\"/><Column id=\"아침구성1\" type=\"STRING\" size=\"256\"/><Column id=\"아침구성2\" type=\"STRING\" size=\"256\"/><Column id=\"아침구성3\" type=\"STRING\" size=\"256\"/><Column id=\"아침구성4\" type=\"STRING\" size=\"256\"/><Column id=\"아침구성5\" type=\"STRING\" size=\"256\"/><Column id=\"아침구성6\" type=\"STRING\" size=\"256\"/><Column id=\"아침기호\" type=\"STRING\" size=\"256\"/><Column id=\"아침기호1\" type=\"STRING\" size=\"256\"/><Column id=\"아침기호2\" type=\"STRING\" size=\"256\"/><Column id=\"아침기호3\" type=\"STRING\" size=\"256\"/><Column id=\"아침기호4\" type=\"STRING\" size=\"256\"/><Column id=\"아침기호5\" type=\"STRING\" size=\"256\"/><Column id=\"아침기호6\" type=\"STRING\" size=\"256\"/><Column id=\"아침염도\" type=\"STRING\" size=\"256\"/><Column id=\"아침염도1\" type=\"STRING\" size=\"256\"/><Column id=\"아침염도2\" type=\"STRING\" size=\"256\"/><Column id=\"아침염도3\" type=\"STRING\" size=\"256\"/><Column id=\"아침염도4\" type=\"STRING\" size=\"256\"/><Column id=\"아침염도5\" type=\"STRING\" size=\"256\"/><Column id=\"아침염도6\" type=\"STRING\" size=\"256\"/><Column id=\"점심구성\" type=\"STRING\" size=\"256\"/><Column id=\"점심구성1\" type=\"STRING\" size=\"256\"/><Column id=\"점심구성2\" type=\"STRING\" size=\"256\"/><Column id=\"점심구성3\" type=\"STRING\" size=\"256\"/><Column id=\"점심구성4\" type=\"STRING\" size=\"256\"/><Column id=\"점심구성5\" type=\"STRING\" size=\"256\"/><Column id=\"점심구성6\" type=\"STRING\" size=\"256\"/><Column id=\"점심기호\" type=\"STRING\" size=\"256\"/><Column id=\"점심기호1\" type=\"STRING\" size=\"256\"/><Column id=\"점심기호2\" type=\"STRING\" size=\"256\"/><Column id=\"점심기호3\" type=\"STRING\" size=\"256\"/><Column id=\"점심기호4\" type=\"STRING\" size=\"256\"/><Column id=\"점심기호5\" type=\"STRING\" size=\"256\"/><Column id=\"점심기호6\" type=\"STRING\" size=\"256\"/><Column id=\"점심염도\" type=\"STRING\" size=\"256\"/><Column id=\"점심염도1\" type=\"STRING\" size=\"256\"/><Column id=\"점심염도2\" type=\"STRING\" size=\"256\"/><Column id=\"점심염도3\" type=\"STRING\" size=\"256\"/><Column id=\"점심염도4\" type=\"STRING\" size=\"256\"/><Column id=\"점심염도5\" type=\"STRING\" size=\"256\"/><Column id=\"점심염도6\" type=\"STRING\" size=\"256\"/><Column id=\"저녁구성\" type=\"STRING\" size=\"256\"/><Column id=\"저녁구성1\" type=\"STRING\" size=\"256\"/><Column id=\"저녁구성2\" type=\"STRING\" size=\"256\"/><Column id=\"저녁구성3\" type=\"STRING\" size=\"256\"/><Column id=\"저녁구성4\" type=\"STRING\" size=\"256\"/><Column id=\"저녁구성5\" type=\"STRING\" size=\"256\"/><Column id=\"저녁구성6\" type=\"STRING\" size=\"256\"/><Column id=\"저녁기호\" type=\"STRING\" size=\"256\"/><Column id=\"저녁기호1\" type=\"STRING\" size=\"256\"/><Column id=\"저녁기호2\" type=\"STRING\" size=\"256\"/><Column id=\"저녁기호3\" type=\"STRING\" size=\"256\"/><Column id=\"저녁기호4\" type=\"STRING\" size=\"256\"/><Column id=\"저녁기호5\" type=\"STRING\" size=\"256\"/><Column id=\"저녁기호6\" type=\"STRING\" size=\"256\"/><Column id=\"저녁염도\" type=\"STRING\" size=\"256\"/><Column id=\"저녁염도1\" type=\"STRING\" size=\"256\"/><Column id=\"저녁염도2\" type=\"STRING\" size=\"256\"/><Column id=\"저녁염도3\" type=\"STRING\" size=\"256\"/><Column id=\"저녁염도4\" type=\"STRING\" size=\"256\"/><Column id=\"저녁염도5\" type=\"STRING\" size=\"256\"/><Column id=\"저녁염도6\" type=\"STRING\" size=\"256\"/><Column id=\"간식구성\" type=\"STRING\" size=\"256\"/><Column id=\"간식구성1\" type=\"STRING\" size=\"256\"/><Column id=\"간식구성2\" type=\"STRING\" size=\"256\"/><Column id=\"간식기호\" type=\"STRING\" size=\"256\"/><Column id=\"간식기호1\" type=\"STRING\" size=\"256\"/><Column id=\"간식기호2\" type=\"STRING\" size=\"256\"/><Column id=\"간식염도\" type=\"STRING\" size=\"256\"/><Column id=\"간식염도1\" type=\"STRING\" size=\"256\"/><Column id=\"간식염도2\" type=\"STRING\" size=\"256\"/><Column id=\"아침의견\" type=\"STRING\" size=\"256\"/><Column id=\"점심의견\" type=\"STRING\" size=\"256\"/><Column id=\"저녁의견\" type=\"STRING\" size=\"256\"/><Column id=\"간식의견\" type=\"STRING\" size=\"256\"/><Column id=\"org_식사번호\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"30\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"80\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cursor=\"pointer\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"0\"/><Cell col=\"1\" text=\"출력\" expandchar=\"rno\"/></Cell><Cell col=\"2\" text=\"식사평가일\"/><Cell col=\"3\" text=\"요일\"/><Cell col=\"4\" text=\"작성자\"/><Cell col=\"5\" text=\"작성(O)\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"2\" text=\"bind:식사일\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dot\" cssclass=\"cellBWoman\"/><Cell col=\"3\" text=\"bind:식사요일\"/><Cell col=\"4\" text=\"bind:평가자\"/><Cell col=\"5\" text=\"bind:작성\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","470","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_main","0","0","971","748",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e2e2e2");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","458","7","97","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("185");
            obj.set_text("일일식사평가");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no","24","10","58","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("186");
            obj.set_text("기록번호 : ");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no_value","87","10","60","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("187");
            obj.set_text("00000000");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","20","40",null,"1","20",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("188");
            obj.set_background("#e2e2e2");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","20","89","60","50",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("193");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","79","89","249","50",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("194");
            obj.set_text("식 단 내 용");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num1","20","138","60","172",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("207");
            obj.set_text("아  침");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_info1","20","44","212","48",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("189");
            obj.set_cssclass("sta_SearchTxt");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_date","24","52","60","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("190");
            obj.set_text("식사평가일");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date","94","52","90","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("191");
            obj.set_tooltiptext("점검일");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_manager","214","52","80","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_text("평가자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_manager_value","304","52","174","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("192");
            obj.set_text("너싱홈/ 요양보호사 / 20210007");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mor1","148","138","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("211");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mor2","148","162","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("212");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mor3","148","186","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("213");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mor4","148","210","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("214");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mor5","148","234","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("215");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_mor6","148","258","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("216");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_opn1","148","282","801","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("217");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_opn1","153","285","791","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("0");
            obj.set_maxlength("80");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num4","79","282","70","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("210");
            obj.set_text("아침의견");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num2","79","138","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("208");
            obj.set_text("주식");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num3","79","162","70","121",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("209");
            obj.set_text("부식");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1","327","138","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("218");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_s_o1","339","140","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1","396","138","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("224");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_s_v1","409","140","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("6");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1","465","138","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("230");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_s_x1","478","140","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00","534","138","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("236");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_g_o1","546","140","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("65");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00","603","138","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("242");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_g_v1","616","140","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("66");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00","672","138","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("248");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_g_x1","685","140","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("67");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00","741","138","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("409");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_y_o1","753","140","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("125");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00","810","138","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("415");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_y_v1","823","140","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("126");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00","879","138","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("421");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_y_x1","892","140","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("127");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","327","89","208","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("195");
            obj.set_text("식단구성");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","327","114","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("196");
            obj.set_text("양호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5","396","114","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("197");
            obj.set_text("보통");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head6","465","114","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("198");
            obj.set_text("보완");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head7","534","89","208","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("199");
            obj.set_text("기 호 도");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head8","534","114","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("200");
            obj.set_text("양호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head9","603","114","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("201");
            obj.set_text("보통");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head10","672","114","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("202");
            obj.set_text("보완");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head11","741","89","208","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("203");
            obj.set_text("염 도");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head12","741","114","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("204");
            obj.set_text("양호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head13","810","114","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("205");
            obj.set_text("보통");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head14","879","114","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("206");
            obj.set_text("보완");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_01","327","162","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("219");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_s_o2","339","164","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_01","396","162","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("225");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_s_v2","409","164","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_01","465","162","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("231");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_s_x2","478","164","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_01","534","162","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("237");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_g_o2","546","164","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("68");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_01","603","162","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("243");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_g_v2","616","164","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("69");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_01","672","162","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("249");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_g_x2","685","164","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("70");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_00","741","162","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("410");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_y_o2","753","164","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("128");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_00","810","162","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("416");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_y_v2","823","164","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("129");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_00","879","162","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("422");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_y_x2","892","164","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("130");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_02","327","186","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("220");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_s_o3","339","188","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_02","396","186","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("226");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_s_v3","409","188","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_02","465","186","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("232");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_s_x3","478","188","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_02","534","186","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("238");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_g_o3","546","188","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("71");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_02","603","186","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("244");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_g_v3","616","188","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("72");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_02","672","186","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("250");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_g_x3","685","188","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("73");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_01","741","186","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("411");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_y_o3","753","188","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("131");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_01","810","186","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("417");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_y_v3","823","188","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("132");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_01","879","186","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("423");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_y_x3","892","188","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("133");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_03","327","210","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("221");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_s_o4","339","212","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_03","396","210","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("227");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_s_v4","409","212","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_03","465","210","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("233");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_s_x4","478","212","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_03","534","210","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("239");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_g_o4","546","212","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("74");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_03","603","210","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("245");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_g_v4","616","212","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("75");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_03","672","210","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("251");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_g_x4","685","212","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("76");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_02","741","210","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("412");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_y_o4","753","212","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("134");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_02","810","210","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("418");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_y_v4","823","212","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("135");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_02","879","210","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("424");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_y_x4","892","212","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("136");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_04","327","234","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("222");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_s_o5","339","236","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_04","396","234","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("228");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_s_v5","409","236","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_04","465","234","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("234");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_s_x5","478","236","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_04","534","234","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("240");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_g_o5","546","236","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("77");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_04","603","234","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("246");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_g_v5","616","236","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("78");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_04","672","234","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("252");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_g_x5","685","236","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("79");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_03","741","234","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("413");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_y_o5","753","236","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("137");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_03","810","234","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("419");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_y_v5","823","236","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("138");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_03","879","234","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("425");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_y_x5","892","236","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("139");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_05","327","258","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("223");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_s_o6","339","260","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_05","396","258","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("229");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_s_v6","409","260","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_05","465","258","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("235");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_s_x6","478","260","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_05","534","258","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("241");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_g_o6","546","260","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("80");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_05","603","258","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("247");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_g_v6","616","260","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("81");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_05","672","258","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("253");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_g_x6","685","260","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("82");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_04","741","258","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("414");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_y_o6","753","260","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("140");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_04","810","258","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("420");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_y_v6","823","260","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("141");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_04","879","258","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("426");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_m_y_x6","892","260","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("142");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num5","20","309","60","172",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("254");
            obj.set_text("점  심");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_lun1","148","309","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("258");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_lun2","148","333","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("259");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_lun3","148","357","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("260");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_lun4","148","381","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("261");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_lun5","148","405","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("262");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_lun6","148","429","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("263");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_opn2","148","453","801","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("264");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_opn2","153","456","791","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            obj.set_maxlength("80");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num8","79","453","70","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("257");
            obj.set_text("점심의견");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num6","79","309","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("255");
            obj.set_text("주식");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num7","79","333","70","121",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("256");
            obj.set_text("부식");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_06","327","309","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("265");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_s_o1","339","311","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_06","396","309","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("271");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_s_v1","409","311","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_06","465","309","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("277");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_s_x1","478","311","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_06","534","309","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("283");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_g_o1","546","311","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("83");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_06","603","309","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("289");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_g_v1","616","311","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("84");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_06","672","309","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("295");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_g_x1","685","311","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("85");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_05","741","309","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("301");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_y_o1","753","311","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("143");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_05","810","309","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("307");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_y_v1","823","311","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("144");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_05","879","309","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("313");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_y_x1","892","311","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("145");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_01_00","327","333","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("266");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_s_o2","339","335","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_01_00","396","333","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("272");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_s_v2","409","335","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("27");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_01_00","465","333","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("278");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_s_x2","478","335","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("28");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_01_00","534","333","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("284");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_g_o2","546","335","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("86");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_01_00","603","333","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("290");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_g_v2","616","335","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("87");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_01_00","672","333","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("296");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_g_x2","685","335","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("88");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_00_00","741","333","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("302");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_y_o2","753","335","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("146");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_00_00","810","333","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("308");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_y_v2","823","335","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("147");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_00_00","879","333","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("314");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_y_x2","892","335","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("148");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_02_00","327","357","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("267");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_s_o3","339","359","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("29");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_02_00","396","357","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("273");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_s_v3","409","359","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("30");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_02_00","465","357","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("279");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_s_x3","478","359","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("31");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_02_00","534","357","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("285");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_g_o3","546","359","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("89");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_02_00","603","357","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("291");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_g_v3","616","359","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("90");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_02_00","672","357","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("297");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_g_x3","685","359","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("91");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_01_00","741","357","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("303");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_y_o3","753","359","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("149");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_01_00","810","357","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("309");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_y_v3","823","359","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("150");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_01_00","879","357","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("315");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_y_x3","892","359","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("151");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_03_00","327","381","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("268");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_s_o4","339","383","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("32");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_03_00","396","381","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("274");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_s_v4","409","383","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("33");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_03_00","465","381","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("280");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_s_x4","478","383","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("34");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_03_00","534","381","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("286");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_g_o4","546","383","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("92");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_03_00","603","381","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("292");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_g_v4","616","383","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("93");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_03_00","672","381","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("298");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_g_x4","685","383","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("94");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_02_00","741","381","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("304");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_y_o4","753","383","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("152");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_02_00","810","381","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("310");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_y_v4","823","383","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("153");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_02_00","879","381","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("316");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_y_x4","892","383","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("154");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_04_00","327","405","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("269");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_s_o5","339","407","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("35");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_04_00","396","405","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("275");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_s_v5","409","407","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("36");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_04_00","465","405","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("281");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_s_x5","478","407","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("37");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_04_00","534","405","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("287");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_g_o5","546","407","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("95");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_04_00","603","405","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("293");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_g_v5","616","407","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("96");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_04_00","672","405","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("299");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_g_x5","685","407","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("97");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_03_00","741","405","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("305");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_y_o5","753","407","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("155");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_03_00","810","405","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("311");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_y_v5","823","407","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("156");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_03_00","879","405","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("317");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_y_x5","892","407","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("157");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_05_00","327","429","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("270");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_s_o6","339","431","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("38");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_05_00","396","429","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("276");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_s_v6","409","431","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("39");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_05_00","465","429","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("282");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_s_x6","478","431","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("40");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_05_00","534","429","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("288");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_g_o6","546","431","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("98");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_05_00","603","429","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("294");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_g_v6","616","431","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("99");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_05_00","672","429","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("300");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_g_x6","685","431","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("100");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_04_00","741","429","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("306");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_y_o6","753","431","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("158");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_04_00","810","429","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("312");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_y_v6","823","431","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("159");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_04_00","879","429","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("318");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_l_y_x6","892","431","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("160");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num9","20","480","60","172",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("319");
            obj.set_text("저  녁");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_din1","148","480","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("323");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_din2","148","504","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("324");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_din3","148","528","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("325");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_din4","148","552","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("326");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_din5","148","576","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("327");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_din6","148","600","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("328");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_opn3","148","624","801","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("329");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_opn3","153","627","791","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_maxlength("80");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num12","79","624","70","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("322");
            obj.set_text("저녁의견");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num10","79","480","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("320");
            obj.set_text("주식");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num11","79","504","70","121",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("321");
            obj.set_text("부식");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_07","327","480","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("330");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_s_o1","339","482","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("41");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_07","396","480","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("336");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_s_v1","409","482","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("42");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_07","465","480","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("342");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_s_x1","478","482","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("43");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_07","534","480","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("348");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_g_o1","546","482","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("101");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_07","603","480","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("354");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_g_v1","616","482","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("102");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_07","672","480","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("360");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_g_x1","685","482","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("103");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_06","741","480","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("366");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_y_o1","753","482","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("161");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_06","810","480","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("372");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_y_v1","823","482","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("162");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_06","879","480","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("378");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_y_x1","892","482","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("163");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_01_01","327","504","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("331");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_s_o2","339","506","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("44");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_01_01","396","504","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("337");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_s_v2","409","506","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("45");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_01_01","465","504","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("343");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_s_x2","478","506","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("46");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_01_01","534","504","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("349");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_g_o2","546","506","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("104");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_01_01","603","504","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("355");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_g_v2","616","506","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("105");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_01_01","672","504","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("361");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_g_x2","685","506","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("106");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_00_01","741","504","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("367");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_y_o2","753","506","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("164");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_00_01","810","504","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("373");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_y_v2","823","506","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("165");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_00_01","879","504","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("379");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_y_x2","892","506","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("166");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_02_01","327","528","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("332");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_s_o3","339","530","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("47");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_02_01","396","528","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("338");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_s_v3","409","530","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("48");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_02_01","465","528","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("344");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_s_x3","478","530","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("49");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_02_01","534","528","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("350");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_g_o3","546","530","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("107");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_02_01","603","528","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("356");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_g_v3","616","530","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("108");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_02_01","672","528","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("362");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_g_x3","685","530","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("109");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_01_01","741","528","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("368");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_y_o3","753","530","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("167");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_01_01","810","528","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("374");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_y_v3","823","530","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("168");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_01_01","879","528","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("380");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_y_x3","892","530","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("169");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_03_01","327","552","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("333");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_s_o4","339","554","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("50");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_03_01","396","552","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("339");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_s_v4","409","554","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("51");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_03_01","465","552","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("345");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_s_x4","478","554","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("52");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_03_01","534","552","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("351");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_g_o4","546","554","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("110");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_03_01","603","552","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("357");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_g_v4","616","554","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("111");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_03_01","672","552","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("363");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_g_x4","685","554","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("112");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_02_01","741","552","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("369");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_y_o4","753","554","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("170");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_02_01","810","552","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("375");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_y_v4","823","554","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("171");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_02_01","879","552","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("381");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_y_x4","892","554","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("172");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_04_01","327","576","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("334");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_s_o5","339","578","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("53");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_04_01","396","576","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("340");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_s_v5","409","578","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("54");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_04_01","465","576","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("346");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_s_x5","478","578","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("55");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_04_01","534","576","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("352");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_g_o5","546","578","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("113");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_04_01","603","576","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("358");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_g_v5","616","578","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("114");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_04_01","672","576","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("364");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_g_x5","685","578","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("115");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_03_01","741","576","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("370");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_y_o5","753","578","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("173");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_03_01","810","576","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("376");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_y_v5","823","578","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("174");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_03_01","879","576","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("382");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_y_x5","892","578","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("175");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_05_01","327","600","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("335");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_s_o6","339","602","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("56");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_05_01","396","600","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("341");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_s_v6","409","602","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("57");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_05_01","465","600","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("347");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_s_x6","478","602","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("58");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_05_01","534","600","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("353");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_g_o6","546","602","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("116");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_05_01","603","600","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("359");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_g_v6","616","602","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("117");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_05_01","672","600","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("365");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_g_x6","685","602","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("118");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_04_01","741","600","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("371");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_y_o6","753","602","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("176");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_04_01","810","600","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("377");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_y_v6","823","602","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("177");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_04_01","879","600","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("383");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_d_y_x6","892","602","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("178");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sna1","148","651","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("388");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_sna2","148","675","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("389");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_opn4","148","699","801","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("390");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_opn4","153","702","791","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("3");
            obj.set_maxlength("40");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num16","79","699","70","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("387");
            obj.set_text("간식의견");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_04_01_00","327","651","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("391");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_s_s_o1","339","653","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("59");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_04_01_00","396","651","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("393");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_s_s_v1","409","653","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("60");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_04_01_00","465","651","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("395");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_s_s_x1","478","653","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("61");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_04_01_00","534","651","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("397");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_s_g_o1","546","653","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("119");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_04_01_00","603","651","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("399");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_s_g_v1","616","653","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("120");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_04_01_00","672","651","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("401");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_s_g_x1","685","653","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("121");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_03_01_00","741","651","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("403");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_s_y_o1","753","653","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("179");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_03_01_00","810","651","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("405");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_s_y_v1","823","653","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("180");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_03_01_00","879","651","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("407");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_s_y_x1","892","653","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("181");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_05_01_00","327","675","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("392");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_s_s_o2","339","677","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("62");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_05_01_00","396","675","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("394");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_s_s_v2","409","677","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("63");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_05_01_00","465","675","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("396");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_s_s_x2","478","677","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("64");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_05_01_00","534","675","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("398");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_s_g_o2","546","677","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("122");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_05_01_00","603","675","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("400");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_s_g_v2","616","677","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("123");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_05_01_00","672","675","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("402");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_s_g_x2","685","677","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("124");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o1_00_00_04_01_00","741","675","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("404");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_s_y_o2","753","677","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("182");
            obj.set_text("   O");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_v1_00_00_04_01_00","810","675","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("406");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_s_y_v2","823","677","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("183");
            obj.set_text("  △");
            obj.set_cssclass("chk_v");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x1_00_00_04_01_00","879","675","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("408");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_s_y_x2","892","677","45","21",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("184");
            obj.set_text("   V");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num14","79","651","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("385");
            obj.set_text("오전간식");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num15","79","675","70","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("386");
            obj.set_text("오후간식");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num13","20","651","60","76",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("384");
            obj.set_text("간  식");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","450","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_yyyymm","41","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.getSetter("calendarfunc").set("month");
            obj.set_buttonsize("0 0");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","174","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","267","12","8","17",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","280","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","70","26","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_yyyymm_pic","cal_yyyymm:-1","7","26","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","470","0","971","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","0","7","55","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("결재란");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"7","70","26","0",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","70","26","btn_delete:5",null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_save");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_report_body","76","2","320","40",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_SearchTxt");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_report_body00","64","5","270","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_repo1","69","7","77","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("평가일지");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_repo2","146","7","110","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("평가일지(선택)");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","258","7","70","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_text("출력");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_cont.form.div_right.form.div_main.form.sta_no_value","text","ds_data","식사번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.cal_date","value","ds_data","식사일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_right.form.div_main.form.sta_manager_value","text","ds_data","VIEW_MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.div_right.form.div_main.form.chk_o3","value","ds_data","항목03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.div_right.form.div_main.form.chk_x3","value","ds_data","항목03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_cont.form.div_right.form.div_main.form.chk_o4","value","ds_data","항목04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_cont.form.div_right.form.div_main.form.chk_x4","value","ds_data","항목04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_cont.form.div_right.form.div_main.form.chk_o5","value","ds_data","항목05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_cont.form.div_right.form.div_main.form.chk_x5","value","ds_data","항목05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_cont.form.div_right.form.div_main.form.chk_o6","value","ds_data","항목06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_cont.form.div_right.form.div_main.form.chk_x6","value","ds_data","항목06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_cont.form.div_right.form.div_main.form.chk_o7","value","ds_data","항목07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_cont.form.div_right.form.div_main.form.chk_x7","value","ds_data","항목07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_cont.form.div_right.form.div_main.form.chk_o8","value","ds_data","항목08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_cont.form.div_right.form.div_main.form.chk_x8","value","ds_data","항목08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_cont.form.div_right.form.div_main.form.chk_v3","value","ds_data","항목03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_cont.form.div_right.form.div_main.form.chk_v4","value","ds_data","항목04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_cont.form.div_right.form.div_main.form.chk_v5","value","ds_data","항목05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_cont.form.div_right.form.div_main.form.chk_v6","value","ds_data","항목06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_cont.form.div_right.form.div_main.form.chk_v7","value","ds_data","항목07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_cont.form.div_right.form.div_main.form.chk_v8","value","ds_data","항목08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_cont.form.div_right.form.div_main.form.chk_v9","value","ds_data","항목09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cal_yyyymm","value","ds_search","YYYYMM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_date_from","value","ds_search","DATE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_to","value","ds_search","DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.sta_mor1","text","ds_data","mor01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.sta_mor2","text","ds_data","mor02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.sta_mor3","text","ds_data","mor03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.sta_mor4","text","ds_data","mor04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.div_main.form.sta_mor5","text","ds_data","mor05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.div_main.form.sta_mor6","text","ds_data","mor06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.div_right.form.div_main.form.chk_m_s_o1","value","ds_data","아침구성1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.div_right.form.div_main.form.chk_m_s_v1","value","ds_data","아침구성1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.div_right.form.div_main.form.chk_m_s_x1","value","ds_data","아침구성1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.div_right.form.div_main.form.chk_m_g_o1","value","ds_data","아침기호1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.div_right.form.div_main.form.chk_m_g_v1","value","ds_data","아침기호1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.div_right.form.div_main.form.chk_m_g_x1","value","ds_data","아침기호1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.div_right.form.div_main.form.chk_m_y_o1","value","ds_data","아침염도1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.div_right.form.div_main.form.chk_m_y_v1","value","ds_data","아침염도1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.div_right.form.div_main.form.chk_m_y_x1","value","ds_data","아침염도1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.div_right.form.div_main.form.chk_m_s_o2","value","ds_data","아침구성2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.div_right.form.div_main.form.chk_m_s_v2","value","ds_data","아침구성2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.div_right.form.div_main.form.chk_m_s_x2","value","ds_data","아침구성2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.div_right.form.div_main.form.chk_m_g_o2","value","ds_data","아침기호2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_cont.form.div_right.form.div_main.form.chk_m_g_v2","value","ds_data","아침기호2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_cont.form.div_right.form.div_main.form.chk_m_g_x2","value","ds_data","아침기호2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_cont.form.div_right.form.div_main.form.chk_m_y_o2","value","ds_data","아침염도2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_cont.form.div_right.form.div_main.form.chk_m_y_v2","value","ds_data","아침염도2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_cont.form.div_right.form.div_main.form.chk_m_y_x2","value","ds_data","아침염도2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_cont.form.div_right.form.div_main.form.chk_m_s_o3","value","ds_data","아침구성3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_cont.form.div_right.form.div_main.form.chk_m_s_v3","value","ds_data","아침구성3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_cont.form.div_right.form.div_main.form.chk_m_s_x3","value","ds_data","아침구성3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_cont.form.div_right.form.div_main.form.chk_m_g_o3","value","ds_data","아침기호3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_cont.form.div_right.form.div_main.form.chk_m_g_v3","value","ds_data","아침기호3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","div_cont.form.div_right.form.div_main.form.chk_m_g_x3","value","ds_data","아침기호3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","div_cont.form.div_right.form.div_main.form.chk_m_y_o3","value","ds_data","아침염도3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_cont.form.div_right.form.div_main.form.chk_m_y_v3","value","ds_data","아침염도3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_cont.form.div_right.form.div_main.form.chk_m_y_x3","value","ds_data","아침염도3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_cont.form.div_right.form.div_main.form.chk_m_s_o4","value","ds_data","아침구성4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_cont.form.div_right.form.div_main.form.chk_m_s_v4","value","ds_data","아침구성4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","div_cont.form.div_right.form.div_main.form.chk_m_s_x4","value","ds_data","아침구성4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","div_cont.form.div_right.form.div_main.form.chk_m_g_o4","value","ds_data","아침기호4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","div_cont.form.div_right.form.div_main.form.chk_m_g_v4","value","ds_data","아침기호4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","div_cont.form.div_right.form.div_main.form.chk_m_g_x4","value","ds_data","아침기호4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","div_cont.form.div_right.form.div_main.form.chk_m_y_o4","value","ds_data","아침염도4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","div_cont.form.div_right.form.div_main.form.chk_m_y_v4","value","ds_data","아침염도4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","div_cont.form.div_right.form.div_main.form.chk_m_y_x4","value","ds_data","아침염도4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","div_cont.form.div_right.form.div_main.form.chk_m_s_o5","value","ds_data","아침구성5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","div_cont.form.div_right.form.div_main.form.chk_m_s_v5","value","ds_data","아침구성5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","div_cont.form.div_right.form.div_main.form.chk_m_s_x5","value","ds_data","아침구성5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","div_cont.form.div_right.form.div_main.form.chk_m_g_o5","value","ds_data","아침기호5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","div_cont.form.div_right.form.div_main.form.chk_m_g_v5","value","ds_data","아침기호5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","div_cont.form.div_right.form.div_main.form.chk_m_g_x5","value","ds_data","아침기호5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","div_cont.form.div_right.form.div_main.form.chk_m_y_o5","value","ds_data","아침염도5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","div_cont.form.div_right.form.div_main.form.chk_m_y_v5","value","ds_data","아침염도5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","div_cont.form.div_right.form.div_main.form.chk_m_y_x5","value","ds_data","아침염도5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","div_cont.form.div_right.form.div_main.form.chk_m_s_o6","value","ds_data","아침구성6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","div_cont.form.div_right.form.div_main.form.chk_m_s_v6","value","ds_data","아침구성6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","div_cont.form.div_right.form.div_main.form.chk_m_s_x6","value","ds_data","아침구성6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","div_cont.form.div_right.form.div_main.form.chk_m_g_o6","value","ds_data","아침기호6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","div_cont.form.div_right.form.div_main.form.chk_m_g_v6","value","ds_data","아침기호6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","div_cont.form.div_right.form.div_main.form.chk_m_g_x6","value","ds_data","아침기호6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","div_cont.form.div_right.form.div_main.form.chk_m_y_o6","value","ds_data","아침염도6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","div_cont.form.div_right.form.div_main.form.chk_m_y_v6","value","ds_data","아침염도6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","div_cont.form.div_right.form.div_main.form.chk_m_y_x6","value","ds_data","아침염도6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.div_main.form.sta_lun1","text","ds_data","lun01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_right.form.div_main.form.sta_lun2","text","ds_data","lun02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.div_main.form.sta_lun3","text","ds_data","lun03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.div_main.form.sta_lun4","text","ds_data","lun04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_right.form.div_main.form.sta_lun5","text","ds_data","lun05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_right.form.div_main.form.sta_lun6","text","ds_data","lun06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.div_main.form.chk_l_s_o1","value","ds_data","점심구성1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.div_main.form.chk_l_s_v1","value","ds_data","점심구성1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_right.form.div_main.form.chk_l_s_x1","value","ds_data","점심구성1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_right.form.div_main.form.chk_l_g_o1","value","ds_data","점심기호1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.div_main.form.chk_l_g_v1","value","ds_data","점심기호1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_right.form.div_main.form.chk_l_g_x1","value","ds_data","점심기호1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_right.form.div_main.form.chk_l_y_o1","value","ds_data","점심염도1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_right.form.div_main.form.chk_l_y_v1","value","ds_data","점심염도1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.div_main.form.chk_l_y_x1","value","ds_data","점심염도1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.div_main.form.chk_l_s_o2","value","ds_data","점심구성2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.div_right.form.div_main.form.chk_l_s_v2","value","ds_data","점심구성2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.div_right.form.div_main.form.chk_l_s_x2","value","ds_data","점심구성2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","div_cont.form.div_right.form.div_main.form.chk_l_g_o2","value","ds_data","점심기호2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","div_cont.form.div_right.form.div_main.form.chk_l_g_v2","value","ds_data","점심기호2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","div_cont.form.div_right.form.div_main.form.chk_l_g_x2","value","ds_data","점심기호2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","div_cont.form.div_right.form.div_main.form.chk_l_y_o2","value","ds_data","점심염도2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","div_cont.form.div_right.form.div_main.form.chk_l_y_v2","value","ds_data","점심염도2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","div_cont.form.div_right.form.div_main.form.chk_l_y_x2","value","ds_data","점심염도2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","div_cont.form.div_right.form.div_main.form.chk_l_s_o3","value","ds_data","점심구성3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","div_cont.form.div_right.form.div_main.form.chk_l_s_v3","value","ds_data","점심구성3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","div_cont.form.div_right.form.div_main.form.chk_l_s_x3","value","ds_data","점심구성3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","div_cont.form.div_right.form.div_main.form.chk_l_g_o3","value","ds_data","점심기호3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","div_cont.form.div_right.form.div_main.form.chk_l_g_v3","value","ds_data","점심기호3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","div_cont.form.div_right.form.div_main.form.chk_l_g_x3","value","ds_data","점심기호3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","div_cont.form.div_right.form.div_main.form.chk_l_y_o3","value","ds_data","점심염도3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item116","div_cont.form.div_right.form.div_main.form.chk_l_y_v3","value","ds_data","점심염도3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item117","div_cont.form.div_right.form.div_main.form.chk_l_y_x3","value","ds_data","점심염도3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item118","div_cont.form.div_right.form.div_main.form.chk_l_s_o4","value","ds_data","점심구성4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item119","div_cont.form.div_right.form.div_main.form.chk_l_s_v4","value","ds_data","점심구성4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item120","div_cont.form.div_right.form.div_main.form.chk_l_s_x4","value","ds_data","점심구성4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item121","div_cont.form.div_right.form.div_main.form.chk_l_g_o4","value","ds_data","점심기호4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item122","div_cont.form.div_right.form.div_main.form.chk_l_g_v4","value","ds_data","점심기호4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item123","div_cont.form.div_right.form.div_main.form.chk_l_g_x4","value","ds_data","점심기호4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item124","div_cont.form.div_right.form.div_main.form.chk_l_y_o4","value","ds_data","점심염도4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item125","div_cont.form.div_right.form.div_main.form.chk_l_y_v4","value","ds_data","점심염도4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item126","div_cont.form.div_right.form.div_main.form.chk_l_y_x4","value","ds_data","점심염도4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item127","div_cont.form.div_right.form.div_main.form.chk_l_s_o5","value","ds_data","점심구성5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item128","div_cont.form.div_right.form.div_main.form.chk_l_s_v5","value","ds_data","점심구성5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item129","div_cont.form.div_right.form.div_main.form.chk_l_s_x5","value","ds_data","점심구성5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item130","div_cont.form.div_right.form.div_main.form.chk_l_g_o5","value","ds_data","점심기호5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item131","div_cont.form.div_right.form.div_main.form.chk_l_g_v5","value","ds_data","점심기호5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item132","div_cont.form.div_right.form.div_main.form.chk_l_g_x5","value","ds_data","점심기호5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item133","div_cont.form.div_right.form.div_main.form.chk_l_y_o5","value","ds_data","점심염도5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item134","div_cont.form.div_right.form.div_main.form.chk_l_y_v5","value","ds_data","점심염도5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item135","div_cont.form.div_right.form.div_main.form.chk_l_y_x5","value","ds_data","점심염도5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item136","div_cont.form.div_right.form.div_main.form.chk_l_s_o6","value","ds_data","점심구성6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item137","div_cont.form.div_right.form.div_main.form.chk_l_s_v6","value","ds_data","점심구성6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item138","div_cont.form.div_right.form.div_main.form.chk_l_s_x6","value","ds_data","점심구성6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item139","div_cont.form.div_right.form.div_main.form.chk_l_g_o6","value","ds_data","점심기호6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item140","div_cont.form.div_right.form.div_main.form.chk_l_g_v6","value","ds_data","점심기호6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item141","div_cont.form.div_right.form.div_main.form.chk_l_g_x6","value","ds_data","점심기호6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item142","div_cont.form.div_right.form.div_main.form.chk_l_y_o6","value","ds_data","점심염도6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item143","div_cont.form.div_right.form.div_main.form.chk_l_y_v6","value","ds_data","점심염도6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item144","div_cont.form.div_right.form.div_main.form.chk_l_y_x6","value","ds_data","점심염도6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item145","div_cont.form.div_right.form.div_main.form.sta_din1","text","ds_data","din01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item146","div_cont.form.div_right.form.div_main.form.sta_din2","text","ds_data","din02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item147","div_cont.form.div_right.form.div_main.form.sta_din3","text","ds_data","din03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item148","div_cont.form.div_right.form.div_main.form.sta_din4","text","ds_data","din04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item149","div_cont.form.div_right.form.div_main.form.sta_din5","text","ds_data","din05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item150","div_cont.form.div_right.form.div_main.form.sta_din6","text","ds_data","din06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item151","div_cont.form.div_right.form.div_main.form.chk_d_s_o1","value","ds_data","저녁구성1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item152","div_cont.form.div_right.form.div_main.form.chk_d_s_v1","value","ds_data","저녁구성1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item153","div_cont.form.div_right.form.div_main.form.chk_d_s_x1","value","ds_data","저녁구성1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item154","div_cont.form.div_right.form.div_main.form.chk_d_g_o1","value","ds_data","저녁기호1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item155","div_cont.form.div_right.form.div_main.form.chk_d_g_v1","value","ds_data","저녁기호1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item156","div_cont.form.div_right.form.div_main.form.chk_d_g_x1","value","ds_data","저녁기호1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item157","div_cont.form.div_right.form.div_main.form.chk_d_y_o1","value","ds_data","저녁염도1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item158","div_cont.form.div_right.form.div_main.form.chk_d_y_v1","value","ds_data","저녁염도1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item159","div_cont.form.div_right.form.div_main.form.chk_d_y_x1","value","ds_data","저녁염도1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item160","div_cont.form.div_right.form.div_main.form.chk_d_s_o2","value","ds_data","저녁구성2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item161","div_cont.form.div_right.form.div_main.form.chk_d_s_v2","value","ds_data","저녁구성2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item162","div_cont.form.div_right.form.div_main.form.chk_d_s_x2","value","ds_data","저녁구성2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item163","div_cont.form.div_right.form.div_main.form.chk_d_g_o2","value","ds_data","저녁기호2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item164","div_cont.form.div_right.form.div_main.form.chk_d_g_v2","value","ds_data","저녁기호2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item165","div_cont.form.div_right.form.div_main.form.chk_d_g_x2","value","ds_data","저녁기호2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item166","div_cont.form.div_right.form.div_main.form.chk_d_y_o2","value","ds_data","저녁염도2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item167","div_cont.form.div_right.form.div_main.form.chk_d_y_v2","value","ds_data","저녁염도2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item168","div_cont.form.div_right.form.div_main.form.chk_d_y_x2","value","ds_data","저녁염도2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item169","div_cont.form.div_right.form.div_main.form.chk_d_s_o3","value","ds_data","저녁구성3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item170","div_cont.form.div_right.form.div_main.form.chk_d_s_v3","value","ds_data","저녁구성3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item171","div_cont.form.div_right.form.div_main.form.chk_d_s_x3","value","ds_data","저녁구성3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item172","div_cont.form.div_right.form.div_main.form.chk_d_g_o3","value","ds_data","저녁기호3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item173","div_cont.form.div_right.form.div_main.form.chk_d_g_v3","value","ds_data","저녁기호3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item174","div_cont.form.div_right.form.div_main.form.chk_d_g_x3","value","ds_data","저녁기호3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item175","div_cont.form.div_right.form.div_main.form.chk_d_y_o3","value","ds_data","저녁염도3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item176","div_cont.form.div_right.form.div_main.form.chk_d_y_v3","value","ds_data","저녁염도3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item177","div_cont.form.div_right.form.div_main.form.chk_d_y_x3","value","ds_data","저녁염도3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item178","div_cont.form.div_right.form.div_main.form.chk_d_s_o4","value","ds_data","저녁구성4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item179","div_cont.form.div_right.form.div_main.form.chk_d_s_v4","value","ds_data","저녁구성4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item180","div_cont.form.div_right.form.div_main.form.chk_d_s_x4","value","ds_data","저녁구성4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item181","div_cont.form.div_right.form.div_main.form.chk_d_g_o4","value","ds_data","저녁기호4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item182","div_cont.form.div_right.form.div_main.form.chk_d_g_v4","value","ds_data","저녁기호4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item183","div_cont.form.div_right.form.div_main.form.chk_d_g_x4","value","ds_data","저녁기호4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item184","div_cont.form.div_right.form.div_main.form.chk_d_y_o4","value","ds_data","저녁염도4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item185","div_cont.form.div_right.form.div_main.form.chk_d_y_v4","value","ds_data","저녁염도4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item186","div_cont.form.div_right.form.div_main.form.chk_d_y_x4","value","ds_data","저녁염도4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item187","div_cont.form.div_right.form.div_main.form.chk_d_s_o5","value","ds_data","저녁구성5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item188","div_cont.form.div_right.form.div_main.form.chk_d_s_v5","value","ds_data","저녁구성5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item189","div_cont.form.div_right.form.div_main.form.chk_d_s_x5","value","ds_data","저녁구성5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item190","div_cont.form.div_right.form.div_main.form.chk_d_g_o5","value","ds_data","저녁기호5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item191","div_cont.form.div_right.form.div_main.form.chk_d_g_v5","value","ds_data","저녁기호5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item192","div_cont.form.div_right.form.div_main.form.chk_d_g_x5","value","ds_data","저녁기호5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item193","div_cont.form.div_right.form.div_main.form.chk_d_y_o5","value","ds_data","저녁염도5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item194","div_cont.form.div_right.form.div_main.form.chk_d_y_v5","value","ds_data","저녁염도5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item195","div_cont.form.div_right.form.div_main.form.chk_d_y_x5","value","ds_data","저녁염도5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item196","div_cont.form.div_right.form.div_main.form.chk_d_s_o6","value","ds_data","저녁구성6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item197","div_cont.form.div_right.form.div_main.form.chk_d_s_v6","value","ds_data","저녁구성6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item198","div_cont.form.div_right.form.div_main.form.chk_d_s_x6","value","ds_data","저녁구성6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item199","div_cont.form.div_right.form.div_main.form.chk_d_g_o6","value","ds_data","저녁기호6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item200","div_cont.form.div_right.form.div_main.form.chk_d_g_v6","value","ds_data","저녁기호6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item201","div_cont.form.div_right.form.div_main.form.chk_d_g_x6","value","ds_data","저녁기호6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item202","div_cont.form.div_right.form.div_main.form.chk_d_y_o6","value","ds_data","저녁염도6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item203","div_cont.form.div_right.form.div_main.form.chk_d_y_v6","value","ds_data","저녁염도6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item204","div_cont.form.div_right.form.div_main.form.chk_d_y_x6","value","ds_data","저녁염도6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item205","div_cont.form.div_right.form.div_main.form.sta_sna1","text","ds_data","sna1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item206","div_cont.form.div_right.form.div_main.form.sta_sna2","text","ds_data","sna2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item207","div_cont.form.div_right.form.div_main.form.chk_s_s_o1","value","ds_data","간식구성1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item208","div_cont.form.div_right.form.div_main.form.chk_s_s_v1","value","ds_data","간식구성1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item209","div_cont.form.div_right.form.div_main.form.chk_s_s_x1","value","ds_data","간식구성1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item210","div_cont.form.div_right.form.div_main.form.chk_s_g_o1","value","ds_data","간식기호1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item211","div_cont.form.div_right.form.div_main.form.chk_s_g_v1","value","ds_data","간식기호1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item212","div_cont.form.div_right.form.div_main.form.chk_s_g_x1","value","ds_data","간식기호1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item213","div_cont.form.div_right.form.div_main.form.chk_s_y_o1","value","ds_data","간식염도1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item214","div_cont.form.div_right.form.div_main.form.chk_s_y_v1","value","ds_data","간식염도1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item215","div_cont.form.div_right.form.div_main.form.chk_s_y_x1","value","ds_data","간식염도1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item216","div_cont.form.div_right.form.div_main.form.chk_s_s_o2","value","ds_data","간식구성2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item217","div_cont.form.div_right.form.div_main.form.chk_s_s_v2","value","ds_data","간식구성2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item218","div_cont.form.div_right.form.div_main.form.chk_s_s_x2","value","ds_data","간식구성2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item219","div_cont.form.div_right.form.div_main.form.chk_s_g_o2","value","ds_data","간식기호2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item220","div_cont.form.div_right.form.div_main.form.chk_s_g_v2","value","ds_data","간식기호2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item221","div_cont.form.div_right.form.div_main.form.chk_s_g_x2","value","ds_data","간식기호2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item222","div_cont.form.div_right.form.div_main.form.chk_s_y_o2","value","ds_data","간식염도2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item223","div_cont.form.div_right.form.div_main.form.chk_s_y_v2","value","ds_data","간식염도2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item224","div_cont.form.div_right.form.div_main.form.chk_s_y_x2","value","ds_data","간식염도2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item225","div_cont.form.div_right.form.div_main.form.edt_opn1","value","ds_data","아침의견");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item226","div_cont.form.div_right.form.div_main.form.edt_opn2","value","ds_data","점심의견");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item227","div_cont.form.div_right.form.div_main.form.edt_opn4","value","ds_data","간식의견");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item228","div_cont.form.div_right.form.div_main.form.edt_opn3","value","ds_data","저녁의견");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item229","div_search.form.cal_yyyymm_pic","value","ds_search","YYYYMM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00705.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00705.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00705.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00705
         * 화면명   	: 7-5 일일식사평가
         * 화면설명 	: 일일식사평가를 작성하는 화면
         * 작성일   	: 2022-03-15
         * 작성자   	: 박한준
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2022-04-05		조기종		단위테스트 오류 수정
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
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 현재월의 1일, 마지막일 구하기
        	const date = new Date();
        	const year = date.getFullYear();
        	const month = date.getMonth();
        	var firstDay = new Date(year, month, 1);
        	var lastDay = new Date(year, month + 1, 0);

        	var yymm = date.getFullYear() + ((date.getMonth() + 1) + "").padLeft(2, '0');

        	// 검색조건 세팅
        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	//this.ds_search.setColumn(0, "YYYYMM", yymm);
        	this.div_search.form.cal_yyyymm.set_value(yymm);
        	this.ds_search.setColumn(0, "DATE_FROM", firstDay);
        	this.ds_search.setColumn(0, "DATE_TO", lastDay);

        	this.div_func.form.chk_sign.set_value(1); // 결재란 체크
        	this.div_func.form.chk_repo1.set_value(1); // 평가일지 체크

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

        // 	if (this.ds_data.rowcount > 0)
        // 		this.reSearchData = this.ds_data.getColumn(0, "급식일");

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

        	// 작성자가 지정되지 않은 경우
        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "평가코드")))
        	{
        		this.alert("점검직원을 지정해야합니다.");
        		return false;
        	}

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

        // 	let str2String = "";
        // 	for (let i = 0; i < 13; i++)
        // 	{
        // 		str2String += this.ds_data.getColumn(0, "조치" + (i + 1)) + "\r\n";
        // 	}
        // 	this.ds_data.setColumn(0, "조치사항", str2String);

        	this.reSearchData = this.ds_data.getColumn(0, "식사일");

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
        		return false;
        	}

        	if (!this.confirm("삭제 하시겠습니까?"))
        		return false;

        	this.reSearchData = "";

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

        	var datefrom = this.ds_search.getColumn(0,"DATE_FROM");
        	var dateto = this.ds_search.getColumn(0,"DATE_TO");
        	var dfrom = new Date(+datefrom + 3240 * 10000).toISOString().split("T")[0];
        	var dto = new Date(+dateto + 3240 * 10000).toISOString().split("T")[0];

        	const svcId = flag;
        	const params = "/commonController.do";
        	//const inDatasets = "input1=ds_search";
        	const inDatasets = "";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00705.DAY00705_DS_LIST_S "
        				   + "SICODE="+this.ds_search.getColumn(0,"SICODE")
        				   + " DATE_FROM="+dfrom
         				   + " DATE_TO="+dto;

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	// validation
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
        				   + "sqlId=DAY00705.DAY00705_DS_DATA_D ";

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
        		else if (strSvcID == "save")
        		{
        			this.alert("저장되었습니다.");
        			this.fn_search("search_save");
        		}
        		else if (strSvcID == "delete")
        		{
        			this.alert("삭제되었습니다.");
        			this.fn_search("search");
        		}
        		else if (strSvcID == "search_save")
        		{
        			const sRow = this.fn_findMstRow(this.reSearchData);
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
        // 입력, 수정용 데이터셋에 데이터 복사
        this.fn_dataCopy = function(row)
        {
        	this.ds_data.clearData();
        	const nRow = this.ds_data.addRow();
        	this.ds_data.copyRow(nRow, this.ds_list, row);

        	const managerStr = this.ds_data.getColumn(nRow, "평가자")
        					 + "/"
        					 + this.ds_data.getColumn(nRow, "평가코드");

        	this.ds_data.setColumn(nRow, "VIEW_MANAGER", managerStr);

        // 	var str1 = this.ds_list.getColumn(row,"아침구성");
        //
        // 	for(var i=0; i < 6; i++){
        // 		const val = str1.substr(i, 1);
        //
        // 		if(val == 1) this.ds_data.setColumn(nRow, "아침구성" + (i+1), 1);
        // 		else if(val == 2) this.ds_data.setColumn(nRow, "아침구성" + (i+1), 2);
        // 		else if(val == 3) this.ds_data.setColumn(nRow, "아침구성" + (i+1), 3);
        // 	}
        	this.fn_chkds(this.ds_list.getColumn(row,"아침구성"), nRow, "아침구성");
        	this.fn_chkds(this.ds_list.getColumn(row,"아침기호"), nRow, "아침기호");
        	this.fn_chkds(this.ds_list.getColumn(row,"아침염도"), nRow, "아침염도");
        	this.fn_chkds(this.ds_list.getColumn(row,"점심구성"), nRow, "점심구성");
        	this.fn_chkds(this.ds_list.getColumn(row,"점심기호"), nRow, "점심기호");
        	this.fn_chkds(this.ds_list.getColumn(row,"점심염도"), nRow, "점심염도");
        	this.fn_chkds(this.ds_list.getColumn(row,"저녁구성"), nRow, "저녁구성");
        	this.fn_chkds(this.ds_list.getColumn(row,"저녁기호"), nRow, "저녁기호");
        	this.fn_chkds(this.ds_list.getColumn(row,"저녁염도"), nRow, "저녁염도");
        	this.fn_chkds(this.ds_list.getColumn(row,"간식구성"), nRow, "간식구성");
        	this.fn_chkds(this.ds_list.getColumn(row,"간식기호"), nRow, "간식기호");
        	this.fn_chkds(this.ds_list.getColumn(row,"간식염도"), nRow, "간식염도");

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(nRow, 1);
        	this.ds_data.set_updatecontrol(true);
        };

        // 기존 데이터셋 체크박스 이벤트, ex) 아침구성 111111 잘라서 데이터셋에 담기
        // str : 자를 데이터
        // row : 변경할 로우
        // column : 변경할 컬럼명
        this.fn_chkds = function (str, row, column){
        	for(var i=0; i < str.length; i++){
        		const val = str.substr(i, 1);

        		if(val == 1) this.ds_data.setColumn(row, column + (i+1), 1);
        		else if(val == 2) this.ds_data.setColumn(row, column + (i+1), 2);
        		else if(val == 3) this.ds_data.setColumn(row, column + (i+1), 3);
        		else this.ds_data.setColumn(row, column + (i+1), 0);
        	}
        };

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo) {
        	const sFindRow = this.ds_list.findRow("식사일", fv_saveRefNo);
        	if (sFindRow > -1) {
        		this.ds_list.set_rowposition(sFindRow);
        		this.fn_dataCopy(sFindRow);
        	}

        	return sFindRow;
        };
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 리포트 팝업
        this.fn_report = function()
        {
        	var repo1 = this.div_func.form.chk_repo1.value; // 평가일지
        	var repo2 = this.div_func.form.chk_repo2.value; // 평가일지(선택)

        	var chk = 0; // 체크된 갯수 확인
        	var arrDate = []; // 선택된 평가일 (파라미터)

         	if(repo1 != 1 && repo2 != 1 ){ // 평가일지
         		this.alert("출력할 레포트를 선택해주세요.")
        		return false;
         	}

        	if(repo1 == 1){
        		if(this.ds_data.rowcount < 1) return false;

        		if(this.ds_data.getColumn(0,"식사번호") == null || this.ds_data.getColumn(0,"식사번호") == ""){
        			this.alert("식사 평가일지 저장 후 출력해주세요.");
        			return false;
        		}
        		arrDate.push(this.ds_data.getColumn(0,"식사일"));
        	}else{
        		// 리스트 row 수만큼 for문 돌려서 체크된 row 찾기
        		for(var i=0; i < this.ds_list.rowcount; i++){
        			//chk += parseInt(this.ds_list.getColumn(i,"CHK")); // 체크된거 + 1 더한다.

        			if(this.ds_list.getColumn(i,"CHK") == 1){ // 체크된 급식일 배열에 담기
        				var sdate = this.ds_list.getColumn(i,"식사일").toString(); // 날짜를 string으로 변환

        				if(repo2 == 1){ // 평가일지는 체크되있더라도 작성된것만 배열에 담기
        					if(this.ds_list.getColumn(i, "작성") == "O"){
        						arrDate.push(sdate); // arrDate 배열에 담기
        					}
        				}
        			}
        		}
        	}

        	// 체크된게 없으면 메시지 출력
        	if (arrDate.length < 1){
        		this.alert("작성된 항목을 선택해주세요");
        		return false;
        	}

        	var popupUrl = "DAY_POP::DAY00705_R01.xfdl";
        	var popupName = "평가일지";
        	let params;
        	const dicompNm = " ";

        	// 레포트의 시작날짜와 끝날짜도 넘김
        	params = {
        		sicode : fv_sicode
        	,	date : arrDate
        	,	sign : this.div_func.form.chk_sign.value
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        // 점검자 선택 팝업
        this.div_cont_div_right_div_main_btn_manager_onclick = function(obj,e)
        {
        	if (this.ds_data.rowcount < 1)
        		return;

        	const param = {
        			SICODE : fv_sicode
        		,	DATE : this.ds_data.getColumn(0, "식사일")
        	};

        	Sct.popup(this, "emp", 450, 400, "입력담당자 선택", param, "DAY_POP::DAYEMP_PP.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "emp" :
        			if (objDs.getColumn(0, "DEL") != "1"){
        				const name = nexacro.trim(objDs.getColumn(0, "c_name"));
        				const dutyname = objDs.getColumn(0, "담당직종");
        				const staffid = objDs.getColumn(0, "c_staffid");
        				this.ds_data.setColumn(0, "평가자", name);
        				this.ds_data.setColumn(0, "평가코드", staffid);
        				this.ds_data.setColumn(0, "VIEW_MANAGER", name + "/" + staffid);
        			}else{
        				this.ds_data.setColumn(0, "평가자", "");
        				this.ds_data.setColumn(0, "평가코드", "");
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

        // 그리드 셀클릭 이벤트
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	const dateIdx = obj.getBindCellIndex("body", "식사일") + 1;
        	// 식사일 선택
        	if (e.col == dateIdx)
        	{
        		if(this.ds_list.getColumn(e.row, "작성") == "O"){ // 작성 O이면 데이터셋 복사
        			// 입력, 수정용 데이터셋에 데이터 복사
        			this.fn_dataCopy(e.row);

        		}else{ // 작성 빈값이면 새로작성
        			this.ds_data.clearData();
        			const nRow = this.ds_data.addRow();

        			this.ds_data.setColumn(nRow, "sicode", this.ds_list.getColumn(e.row, "sicode"));
        			this.ds_data.setColumn(nRow, "식사일", this.ds_list.getColumn(e.row, "식사일"));
        			this.ds_data.setColumn(nRow, "평가자", nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name")));
        			this.ds_data.setColumn(nRow, "평가코드", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid"));
        			const managerStr = this.ds_data.getColumn(0, "평가자")
        							+ "/"
        							+ this.ds_data.getColumn(0, "평가코드");
        			this.ds_data.setColumn(nRow, "VIEW_MANAGER", managerStr);

        			this.ds_data.setColumn(nRow, "아침의견", "");
        			this.ds_data.setColumn(nRow, "점심의견", "");
        			this.ds_data.setColumn(nRow, "저녁의견", "");
        			this.ds_data.setColumn(nRow, "간식의견", "");

        			// 식단메뉴
        			for(var i=1; i<7; i++){
        				this.ds_data.setColumn(nRow,"mor0" + i, this.ds_list.getColumn(e.row,"mor0" + i));
        				this.ds_data.setColumn(nRow,"lun0" + i, this.ds_list.getColumn(e.row,"lun0" + i));
        				this.ds_data.setColumn(nRow,"din0" + i, this.ds_list.getColumn(e.row,"din0" + i));
        			}
        			this.ds_data.setColumn(nRow,"sna1", this.ds_list.getColumn(e.row,"sna1"));
        			this.ds_data.setColumn(nRow,"sna2", this.ds_list.getColumn(e.row,"sna2"));

        			this.ds_data.setColumn(nRow,"아침구성", "000000");
        			this.ds_data.setColumn(nRow,"아침기호", "000000");
        			this.ds_data.setColumn(nRow,"아침염도", "000000");
        			this.ds_data.setColumn(nRow,"점심구성", "000000");
        			this.ds_data.setColumn(nRow,"점심기호", "000000");
        			this.ds_data.setColumn(nRow,"점심염도", "000000");
        			this.ds_data.setColumn(nRow,"저녁구성", "000000");
        			this.ds_data.setColumn(nRow,"저녁기호", "000000");
        			this.ds_data.setColumn(nRow,"저녁염도", "000000");
        			this.ds_data.setColumn(nRow,"간식구성", "00");
        			this.ds_data.setColumn(nRow,"간식기호", "00");
        			this.ds_data.setColumn(nRow,"간식염도", "00");

        			this.fn_chkds(this.ds_data.getColumn(0,"아침구성"), nRow, "아침구성");
        			this.fn_chkds(this.ds_data.getColumn(0,"아침기호"), nRow, "아침기호");
        			this.fn_chkds(this.ds_data.getColumn(0,"아침염도"), nRow, "아침염도");
        			this.fn_chkds(this.ds_data.getColumn(0,"점심구성"), nRow, "점심구성");
        			this.fn_chkds(this.ds_data.getColumn(0,"점심기호"), nRow, "점심기호");
        			this.fn_chkds(this.ds_data.getColumn(0,"점심염도"), nRow, "점심염도");
        			this.fn_chkds(this.ds_data.getColumn(0,"저녁구성"), nRow, "저녁구성");
        			this.fn_chkds(this.ds_data.getColumn(0,"저녁기호"), nRow, "저녁기호");
        			this.fn_chkds(this.ds_data.getColumn(0,"저녁염도"), nRow, "저녁염도");
        			this.fn_chkds(this.ds_data.getColumn(0,"간식구성"), nRow, "간식구성");
        			this.fn_chkds(this.ds_data.getColumn(0,"간식기호"), nRow, "간식기호");
        			this.fn_chkds(this.ds_data.getColumn(0,"간식염도"), nRow, "간식염도");

        		}

        	}

        };


        // 캘린더 변경 이벤트
        this.div_search_cal_yyyymm_pic_onchanged = function(obj,e)
        {
        	// 선택월의 1일, 마지막일 구하기
        	var year = this.ds_search.getColumn(0,"YYYYMM").substr(0,4);
        	var month = this.ds_search.getColumn(0,"YYYYMM").substr(4);
        	var firstDay = new Date(year, month-1 , 1);
        	var lastDay = new Date(year, month, 0);

        	// from to 날짜 셋팅
        	this.ds_search.setColumn(0, "DATE_FROM", firstDay);
        	this.ds_search.setColumn(0, "DATE_TO", lastDay);

        	this.ds_data.clearData();
        	//조회
        	this.fn_search("search");
        };

        // 출력 체크박스 이벤트
        this.chk_repo_canchange = function(obj,e)
        {
        // 	var repo1 = this.div_func.form.chk_repo1.value;
        // 	var repo2 = this.div_func.form.chk_repo2.value;
        	if(e.postvalue == 1){ //
        		switch (obj.id)
        		{
        			case "chk_repo1":
        				this.div_func.form.chk_repo2.set_value(0);
        				break;
        			case "chk_repo2":
        				this.div_func.form.chk_repo1.set_value(0);
        				break;
        		}
        	}

        };

        /***********************************************************************
         * Dataset Event Functions
         ***********************************************************************/
        // 체크박스 변경 이벤트
        this.mainChk_onchanged = function(obj,e)
        {
        	const num = obj.id.substr(9); // obj.id 마지막 숫자

        	const value = e.postvalue; // 변경값

        	var chkid = ""; // 컬럼명 변수
        	var chkdata = ""; // 체크된 데이터 담는 변수
        	var chkobjid = obj.id.substr(0,7); // chk_m_s_o1 에서 7자리 자르기

        	// obj.id를 값을 통한 데이터셋 컬럼id 설정
        	switch (chkobjid){
        		case "chk_m_s" : chkid = "아침구성"; break;
        		case "chk_m_g" : chkid = "아침기호"; break;
        		case "chk_m_y" : chkid = "아침염도"; break;
        		case "chk_l_s" : chkid = "점심구성"; break;
        		case "chk_l_g" : chkid = "점심기호"; break;
        		case "chk_l_y" : chkid = "점심염도"; break;
        		case "chk_d_s" : chkid = "저녁구성"; break;
        		case "chk_d_g" : chkid = "저녁기호"; break;
        		case "chk_d_y" : chkid = "저녁염도"; break;
        		case "chk_s_s" : chkid = "간식구성"; break;
        		case "chk_s_g" : chkid = "간식기호"; break;
        		case "chk_s_y" : chkid = "간식염도"; break;
        	}

        	switch (obj.id)
        	{
        		case chkobjid + "_o" + num : // ex) chk_m_s + _o + 1
        			if(value == 1)
        			{
        				this.div_cont.form.div_right.form.div_main.form.components[chkobjid + "_v" + num].set_value(0);
        				this.div_cont.form.div_right.form.div_main.form.components[chkobjid + "_x" + num].set_value(0);
        				this.ds_data.setColumn(0,chkid+num, 1);
        			}
        			break;
        		case chkobjid + "_v" + num :
        			if(value == 2)
        			{
        				this.div_cont.form.div_right.form.div_main.form.components[chkobjid + "_o" + num].set_value(0);
        				this.div_cont.form.div_right.form.div_main.form.components[chkobjid + "_x" + num].set_value(0);
        				this.ds_data.setColumn(0,chkid+num, 2);
        			}
        			break;
        		case chkobjid + "_x" + num :
        			if(value == 3)
        			{
        				this.div_cont.form.div_right.form.div_main.form.components[chkobjid + "_o" + num].set_value(0);
        				this.div_cont.form.div_right.form.div_main.form.components[chkobjid + "_v" + num].set_value(0);
        				this.ds_data.setColumn(0,chkid+num, 3);
        			}
        			break;
        	}

        	// 변경된 데이터 변수에 담기
        	// ex) 아침구성 111111 > 211111
        	var chklength = 0; // 변경컬럼 길이
        	if(chkid == "간식구성" || chkid == "간식기호" || chkid == "간식염도"){
        		chklength = 2;
        	}else{
        		chklength = 6;
        	}

        	//
        	for(var i=1; i <= chklength; i++){
        		chkdata += this.ds_data.getColumn(0,chkid+i);
        	}

        	this.ds_data.setColumn(0,chkid,chkdata);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_manager.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_manager_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_s_o1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_s_v1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_s_x1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_g_o1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_g_v1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_g_x1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_y_o1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_y_v1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_y_x1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_s_o2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_s_v2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_s_x2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_g_o2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_g_v2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_g_x2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_y_o2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_y_v2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_y_x2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_s_o3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_s_v3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_s_x3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_g_o3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_g_v3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_g_x3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_y_o3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_y_v3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_y_x3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_s_o4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_s_v4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_s_x4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_g_o4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_g_v4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_g_x4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_y_o4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_y_v4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_y_x4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_s_o5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_s_v5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_s_x5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_g_o5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_g_v5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_g_x5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_y_o5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_y_v5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_y_x5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_s_o6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_s_v6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_s_x6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_g_o6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_g_v6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_g_x6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_y_o6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_y_v6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_m_y_x6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_s_o1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_s_v1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_s_x1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_g_o1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_g_v1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_g_x1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_y_o1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_y_v1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_y_x1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_s_o2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_s_v2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_s_x2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_g_o2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_g_v2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_g_x2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_y_o2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_y_v2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_y_x2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_s_o3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_s_v3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_s_x3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_g_o3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_g_v3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_g_x3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_y_o3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_y_v3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_y_x3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_s_o4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_s_v4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_s_x4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_g_o4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_g_v4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_g_x4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_y_o4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_y_v4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_y_x4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_s_o5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_s_v5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_s_x5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_g_o5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_g_v5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_g_x5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_y_o5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_y_v5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_y_x5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_s_o6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_s_v6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_s_x6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_g_o6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_g_v6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_g_x6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_y_o6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_y_v6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_l_y_x6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_s_o1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_s_v1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_s_x1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_g_o1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_g_v1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_g_x1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_y_o1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_y_v1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_y_x1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_s_o2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_s_v2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_s_x2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_g_o2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_g_v2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_g_x2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_y_o2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_y_v2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_y_x2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_s_o3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_s_v3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_s_x3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_g_o3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_g_v3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_g_x3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_y_o3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_y_v3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_y_x3.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_s_o4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_s_v4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_s_x4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_g_o4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_g_v4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_g_x4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_y_o4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_y_v4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_y_x4.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_s_o5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_s_v5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_s_x5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_g_o5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_g_v5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_g_x5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_y_o5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_y_v5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_y_x5.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_s_o6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_s_v6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_s_x6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_g_o6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_g_v6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_g_x6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_y_o6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_y_v6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_d_y_x6.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_s_s_o1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_s_s_v1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_s_s_x1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_s_g_o1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_s_g_v1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_s_g_x1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_s_y_o1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_s_y_v1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_s_y_x1.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_s_s_o2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_s_s_v2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_s_s_x2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_s_g_o2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_s_g_v2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_s_g_x2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_s_y_o2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_s_y_v2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_s_y_x2.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.cal_yyyymm_pic.addEventHandler("onchanged",this.div_search_cal_yyyymm_pic_onchanged,this);
            this.div_func.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.chk_repo1.addEventHandler("canchange",this.chk_repo_canchange,this);
            this.div_func.form.chk_repo1.addEventHandler("onclick",this.div_func_chk_repo1_onclick,this);
            this.div_func.form.chk_repo2.addEventHandler("canchange",this.chk_repo_canchange,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
        };
        this.loadIncludeScript("DAY00705.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
