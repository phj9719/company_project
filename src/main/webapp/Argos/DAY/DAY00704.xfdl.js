(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00704");
            this.set_titletext("7-4 급식운영일지");
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
            obj._setContents("<ColumnInfo><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"KM_sicode\" type=\"STRING\" size=\"256\"/><Column id=\"급식번호\" type=\"INT\" size=\"256\"/><Column id=\"작성\" type=\"STRING\" size=\"256\"/><Column id=\"급식일\" type=\"DATE\" size=\"256\"/><Column id=\"급식요일\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/><Column id=\"mor01\" type=\"STRING\" size=\"256\"/><Column id=\"mor02\" type=\"STRING\" size=\"256\"/><Column id=\"mor03\" type=\"STRING\" size=\"256\"/><Column id=\"mor04\" type=\"STRING\" size=\"256\"/><Column id=\"mor05\" type=\"STRING\" size=\"256\"/><Column id=\"mor06\" type=\"STRING\" size=\"256\"/><Column id=\"lun01\" type=\"STRING\" size=\"256\"/><Column id=\"lun02\" type=\"STRING\" size=\"256\"/><Column id=\"lun03\" type=\"STRING\" size=\"256\"/><Column id=\"lun04\" type=\"STRING\" size=\"256\"/><Column id=\"lun05\" type=\"STRING\" size=\"256\"/><Column id=\"lun06\" type=\"STRING\" size=\"256\"/><Column id=\"din01\" type=\"STRING\" size=\"256\"/><Column id=\"din02\" type=\"STRING\" size=\"256\"/><Column id=\"din03\" type=\"STRING\" size=\"256\"/><Column id=\"din04\" type=\"STRING\" size=\"256\"/><Column id=\"din05\" type=\"STRING\" size=\"256\"/><Column id=\"din06\" type=\"STRING\" size=\"256\"/><Column id=\"sna01\" type=\"STRING\" size=\"256\"/><Column id=\"sna02\" type=\"STRING\" size=\"256\"/><Column id=\"sna03\" type=\"STRING\" size=\"256\"/><Column id=\"sna04\" type=\"STRING\" size=\"256\"/><Column id=\"sna05\" type=\"STRING\" size=\"256\"/><Column id=\"sna06\" type=\"STRING\" size=\"256\"/><Column id=\"조식거주\" type=\"STRING\" size=\"256\"/><Column id=\"조식직원\" type=\"STRING\" size=\"256\"/><Column id=\"조식일반\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_조식다진\" type=\"STRING\" size=\"256\"/><Column id=\"조식죽식\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_조식당뇨\" type=\"STRING\" size=\"256\"/><Column id=\"조식경관\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_조식저염\" type=\"STRING\" size=\"256\"/><Column id=\"중식거주\" type=\"STRING\" size=\"256\"/><Column id=\"중식직원\" type=\"STRING\" size=\"256\"/><Column id=\"중식일반\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_중식다진\" type=\"STRING\" size=\"256\"/><Column id=\"중식죽식\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_중식당뇨\" type=\"STRING\" size=\"256\"/><Column id=\"중식경관\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_중식저염\" type=\"STRING\" size=\"256\"/><Column id=\"석식거주\" type=\"STRING\" size=\"256\"/><Column id=\"석식직원\" type=\"INT\" size=\"256\"/><Column id=\"석식일반\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_석식다진\" type=\"STRING\" size=\"256\"/><Column id=\"석식죽식\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_석식당뇨\" type=\"STRING\" size=\"256\"/><Column id=\"석식경관\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_석식저염\" type=\"STRING\" size=\"256\"/><Column id=\"조식열량\" type=\"STRING\" size=\"256\"/><Column id=\"중식열량\" type=\"STRING\" size=\"256\"/><Column id=\"석식열량\" type=\"STRING\" size=\"256\"/><Column id=\"근무자\" type=\"STRING\" size=\"256\"/><Column id=\"휴무자\" type=\"STRING\" size=\"256\"/><Column id=\"업무내용\" type=\"STRING\" size=\"1000\"/><Column id=\"폐기일\" type=\"STRING\" size=\"256\"/><Column id=\"조치사항\" type=\"STRING\" size=\"1000\"/><Column id=\"org_급식번호\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"KM_sicode\" type=\"STRING\" size=\"256\"/><Column id=\"급식번호\" type=\"INT\" size=\"256\"/><Column id=\"작성\" type=\"STRING\" size=\"256\"/><Column id=\"급식일\" type=\"DATE\" size=\"256\"/><Column id=\"급식요일\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"작성코드\" type=\"STRING\" size=\"256\"/><Column id=\"mor01\" type=\"STRING\" size=\"256\"/><Column id=\"mor02\" type=\"STRING\" size=\"256\"/><Column id=\"mor03\" type=\"STRING\" size=\"256\"/><Column id=\"mor04\" type=\"STRING\" size=\"256\"/><Column id=\"mor05\" type=\"STRING\" size=\"256\"/><Column id=\"mor06\" type=\"STRING\" size=\"256\"/><Column id=\"lun01\" type=\"STRING\" size=\"256\"/><Column id=\"lun02\" type=\"STRING\" size=\"256\"/><Column id=\"lun03\" type=\"STRING\" size=\"256\"/><Column id=\"lun04\" type=\"STRING\" size=\"256\"/><Column id=\"lun05\" type=\"STRING\" size=\"256\"/><Column id=\"lun06\" type=\"STRING\" size=\"256\"/><Column id=\"din01\" type=\"STRING\" size=\"256\"/><Column id=\"din02\" type=\"STRING\" size=\"256\"/><Column id=\"din03\" type=\"STRING\" size=\"256\"/><Column id=\"din04\" type=\"STRING\" size=\"256\"/><Column id=\"din05\" type=\"STRING\" size=\"256\"/><Column id=\"din06\" type=\"STRING\" size=\"256\"/><Column id=\"sna01\" type=\"STRING\" size=\"256\"/><Column id=\"sna02\" type=\"STRING\" size=\"256\"/><Column id=\"sna03\" type=\"STRING\" size=\"256\"/><Column id=\"sna04\" type=\"STRING\" size=\"256\"/><Column id=\"sna05\" type=\"STRING\" size=\"256\"/><Column id=\"sna06\" type=\"STRING\" size=\"256\"/><Column id=\"조식거주\" type=\"STRING\" size=\"256\"/><Column id=\"조식직원\" type=\"STRING\" size=\"256\"/><Column id=\"조식일반\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_조식다진\" type=\"STRING\" size=\"256\"/><Column id=\"조식죽식\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_조식당뇨\" type=\"STRING\" size=\"256\"/><Column id=\"조식경관\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_조식저염\" type=\"STRING\" size=\"256\"/><Column id=\"중식거주\" type=\"STRING\" size=\"256\"/><Column id=\"중식직원\" type=\"STRING\" size=\"256\"/><Column id=\"중식일반\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_중식다진\" type=\"STRING\" size=\"256\"/><Column id=\"중식죽식\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_중식당뇨\" type=\"STRING\" size=\"256\"/><Column id=\"중식경관\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_중식저염\" type=\"STRING\" size=\"256\"/><Column id=\"석식거주\" type=\"STRING\" size=\"256\"/><Column id=\"석식직원\" type=\"INT\" size=\"256\"/><Column id=\"석식일반\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_석식다진\" type=\"STRING\" size=\"256\"/><Column id=\"석식죽식\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_석식당뇨\" type=\"STRING\" size=\"256\"/><Column id=\"석식경관\" type=\"STRING\" size=\"256\"/><Column id=\"xxx_석식저염\" type=\"STRING\" size=\"256\"/><Column id=\"조식열량\" type=\"STRING\" size=\"256\"/><Column id=\"중식열량\" type=\"STRING\" size=\"256\"/><Column id=\"석식열량\" type=\"STRING\" size=\"256\"/><Column id=\"근무자\" type=\"STRING\" size=\"256\"/><Column id=\"휴무자\" type=\"STRING\" size=\"256\"/><Column id=\"업무내용\" type=\"STRING\" size=\"1000\"/><Column id=\"폐기일\" type=\"DATE\" size=\"256\"/><Column id=\"조치사항\" type=\"STRING\" size=\"1000\"/><Column id=\"org_급식번호\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_meal", this);
            obj._setContents("<ColumnInfo><Column id=\"조식일반식\" type=\"STRING\" size=\"256\"/><Column id=\"조식죽식\" type=\"STRING\" size=\"256\"/><Column id=\"조식유동식\" type=\"STRING\" size=\"256\"/><Column id=\"중식일반식\" type=\"STRING\" size=\"256\"/><Column id=\"중식죽식\" type=\"STRING\" size=\"256\"/><Column id=\"중식유동식\" type=\"STRING\" size=\"256\"/><Column id=\"석식일반식\" type=\"STRING\" size=\"256\"/><Column id=\"석식죽식\" type=\"STRING\" size=\"256\"/><Column id=\"석식유동식\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_work", this);
            obj._setContents("<ColumnInfo><Column id=\"mor_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"lun_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"din_cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"30\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"80\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cursor=\"pointer\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"0\"/><Cell col=\"1\" text=\"출력\" expandchar=\"rno\"/></Cell><Cell col=\"2\" text=\"급식운영일\"/><Cell col=\"3\" text=\"요일\"/><Cell col=\"4\" text=\"작성자\"/><Cell col=\"5\" text=\"작성(O)\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"2\" text=\"bind:급식일\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dot\" cssclass=\"cellBWoman\"/><Cell col=\"3\" text=\"bind:급식요일\"/><Cell col=\"4\" text=\"bind:작성자명\"/><Cell col=\"5\" text=\"bind:작성\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","470","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_main","0","0","858","748",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e2e2e2");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","382","7","97","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("52");
            obj.set_text("급식운영일지");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no","24","10","58","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("53");
            obj.set_text("기록번호 : ");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no_value","87","10","60","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("54");
            obj.set_text("00000000");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","20","40",null,"1","20",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("55");
            obj.set_background("#e2e2e2");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","20","89","100","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("59");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","119","89","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("60");
            obj.set_text("조   식");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","298","89","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("61");
            obj.set_text("중   식");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num1","20","113","100","160",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("64");
            obj.set_text("식단메뉴");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num2","20","272","100","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("69");
            obj.set_text("열량(kcal)");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body28","119","272","180","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("70");
            obj.set_text("kcal          ");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body31","119","299","180","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("74");
            obj.set_text("명             ");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body34","119","326","180","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("78");
            obj.set_text("명             ");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_info1","20","44","212","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_SearchTxt");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_date","24","52","60","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("57");
            obj.set_text("급식운영일");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date","94","52","90","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_tooltiptext("점검일");
            obj.set_buttonsize("0 0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_manager","214","52","80","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            obj.set_text("점검자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_manager_value","304","52","174","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("58");
            obj.set_text("너싱홈/ 요양보호사 / 20210007");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num6","20","380","100","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("85");
            obj.set_text("수급자인원");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body43","119","407","180","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("90");
            obj.set_text("명             ");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body46","119","434","538","110",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("95");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body48","119","632","538","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body49","119","659","538","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body50","119","686","538","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num10","20","632","100","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("98");
            obj.set_text("급식근무자");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num11","20","659","100","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("100");
            obj.set_text("급식휴무자");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num12","20","686","100","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("101");
            obj.set_text("음식폐기일");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num3","20","299","100","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("73");
            obj.set_text("일반식");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num4","20","326","100","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("77");
            obj.set_text("죽식");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num5","20","353","100","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("81");
            obj.set_text("유동식(미음)");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num7","20","407","100","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("89");
            obj.set_text("직원인원");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body37","119","353","180","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("명             ");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body40","119","380","180","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("86");
            obj.set_text("명             ");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num8","20","434","100","110",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("94");
            obj.set_text("업무내용");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body47","119","543","538","90",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("97");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num9","20","543","100","90",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("96");
            obj.set_text("음식물섭취량\r\n조치사항");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head4","477","89","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("62");
            obj.set_text("석   식");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head5","656","89","180","25",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("63");
            obj.set_text("간   식");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body0","119","113","180","160",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("65");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","124","116","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","124","142","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","124","168","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","124","194","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5","124","220","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6","124","246","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_1","124","439","528","100",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("44");
            obj.set_wordWrap("char");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("fixed");
            obj.set_maxlength("1000");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body7","298","113","180","160",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("66");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body8","303","116","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body9","303","142","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body10","303","168","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body11","303","194","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body12","303","220","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body13","303","246","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body29","298","272","180","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("71");
            obj.set_text("kcal          ");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body32","298","299","180","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("75");
            obj.set_text("명             ");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body35","298","326","180","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("79");
            obj.set_text("명             ");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body44","298","407","180","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("91");
            obj.set_text("명             ");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body38","298","353","180","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("명             ");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body41","298","380","180","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("87");
            obj.set_text("명             ");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body14","477","113","180","160",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("67");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body15","482","116","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body16","482","142","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body17","482","168","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body18","482","194","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body19","482","220","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body20","482","246","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body30","477","272","180","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("72");
            obj.set_text("kcal          ");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body33","477","299","180","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("76");
            obj.set_text("명             ");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body36","477","326","180","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("80");
            obj.set_text("명             ");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body45","477","407","180","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("92");
            obj.set_text("명             ");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body39","477","353","180","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("명             ");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body42","477","380","180","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("88");
            obj.set_text("명             ");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("right");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body21","656","113","180","160",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("68");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body22","661","116","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body23","661","142","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body24","661","168","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body25","661","194","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body26","661","220","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body27","661","246","170","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body51","656","272","180","442",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("93");
            obj.set_text("* 직원조식 - 08:00 이전\r\n* 직원중식 - 12:00 전후\r\n* 직원석식 - 18:00 이후");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new TextArea("txt_2","124","548","528","80",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("45");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            obj.set_maxlength("1000");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_19","124","635","528","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("46");
            obj.set_maxlength("80");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_20","124","662","528","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("47");
            obj.set_maxlength("80");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","124","689","110","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("48");
            obj.set_readonly("false");
            obj.set_tooltiptext("시작날짜");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_info4","512","44","324","34",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("103");
            obj.set_cssclass("sta_SearchTxt");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_record1","611","52","110","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("49");
            obj.set_text("근무기록적용");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_record2","726","52","110","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("50");
            obj.set_text("식사기록적용");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_1","162","275","65","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_format("###,#");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_2","341","275","65","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("27");
            obj.set_format("###,#");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_1_01","520","275","65","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("28");
            obj.set_format("###,#");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_mor1","172","303","55","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("29");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_mor2","172","329","55","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("32");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_mor3","172","356","55","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("35");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_mor4","172","383","55","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("38");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_1_00_04","172","410","55","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("41");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lun1","351","302","55","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("30");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lun2","351","329","55","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("33");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lun3","351","356","55","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("36");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_lun4","351","383","55","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("39");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_1_00_04_00","351","410","55","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("42");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_din1","530","302","55","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("31");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_din2","530","329","55","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("34");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_din3","530","356","55","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("37");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_din4","530","383","55","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("40");
            obj.set_format("###");
            obj.set_limitbymask("both");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new MaskEdit("mae_1_00_04_00_00","530","410","55","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("43");
            obj.set_format("###");
            obj.set_limitbymask("both");
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
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
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

            obj = new Div("div_func","470","0","858","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
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

            obj = new Static("sta_report_body","76","3","320","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_SearchTxt");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2","348","7","120","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("7");
            obj.set_text("보존식기록표");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_report_body00","64","5","280","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_repo1","69","7","79","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("급식일지");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("sta_SearchTxt");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_repo2","159","7","110","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("급식일지(선택)");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","268","7","70","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_text("출력");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_cont.form.div_right.form.div_main.form.sta_no_value","text","ds_data","급식번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.cal_date","value","ds_data","급식일");
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

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.sta_body1","text","ds_data","mor01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_right.form.div_main.form.sta_body2","text","ds_data","mor02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.div_main.form.sta_body16","text","ds_data","din02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.div_main.form.sta_body8","text","ds_data","lun01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_right.form.div_main.form.sta_body9","text","ds_data","lun02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.div_right.form.div_main.form.sta_body3","text","ds_data","mor03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.sta_body4","text","ds_data","mor04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_cont.form.div_right.form.div_main.form.sta_body5","text","ds_data","mor05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_cont.form.div_right.form.div_main.form.sta_body6","text","ds_data","mor06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.div_main.form.sta_body10","text","ds_data","lun03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.div_main.form.sta_body11","text","ds_data","lun04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_right.form.div_main.form.sta_body12","text","ds_data","lun05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_right.form.div_main.form.sta_body13","text","ds_data","lun06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.div_main.form.sta_body15","text","ds_data","din01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_right.form.div_main.form.sta_body17","text","ds_data","din03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_right.form.div_main.form.sta_body18","text","ds_data","din04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.div_main.form.sta_body19","text","ds_data","din05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_right.form.div_main.form.sta_body20","text","ds_data","din06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_right.form.div_main.form.sta_body22","text","ds_data","sna01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_right.form.div_main.form.sta_body23","text","ds_data","sna02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.div_main.form.sta_body24","text","ds_data","sna03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.div_main.form.sta_body25","text","ds_data","sna04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.div_right.form.div_main.form.sta_body26","text","ds_data","sna05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.div_right.form.div_main.form.sta_body27","text","ds_data","sna06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_cont.form.div_right.form.div_main.form.txt_1","value","ds_data","업무내용");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_cont.form.div_right.form.div_main.form.txt_2","value","ds_data","조치사항");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","div_cont.form.div_right.form.div_main.form.cal_date_from","value","ds_data","폐기일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_cont.form.div_right.form.div_main.form.mae_1","value","ds_data","조식열량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.div_right.form.div_main.form.mae_2","value","ds_data","중식열량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.div_right.form.div_main.form.mae_1_01","value","ds_data","석식열량");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.div_right.form.div_main.form.edt_19","value","ds_data","근무자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.div_right.form.div_main.form.edt_20","value","ds_data","휴무자");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_cont.form.div_right.form.div_main.form.mae_mor1","value","ds_data","조식일반");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_cont.form.div_right.form.div_main.form.mae_mor2","value","ds_data","조식죽식");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_cont.form.div_right.form.div_main.form.mae_mor3","value","ds_data","조식경관");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_cont.form.div_right.form.div_main.form.mae_mor4","value","ds_data","조식거주");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_cont.form.div_right.form.div_main.form.mae_1_00_04","value","ds_data","조식직원");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.div_right.form.div_main.form.mae_lun1","value","ds_data","중식일반");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.div_right.form.div_main.form.mae_lun2","value","ds_data","중식죽식");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.div_right.form.div_main.form.mae_lun3","value","ds_data","중식경관");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.div_right.form.div_main.form.mae_lun4","value","ds_data","중식거주");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.div_right.form.div_main.form.mae_1_00_04_00","value","ds_data","중식직원");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.div_right.form.div_main.form.mae_din1","value","ds_data","석식일반");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.div_right.form.div_main.form.mae_din2","value","ds_data","석식죽식");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.div_right.form.div_main.form.mae_din3","value","ds_data","석식경관");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.div_right.form.div_main.form.mae_din4","value","ds_data","석식거주");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_cont.form.div_right.form.div_main.form.mae_1_00_04_00_00","value","ds_data","석식직원");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_search.form.cal_yyyymm_pic","value","ds_search","YYYYMM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00704.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00704.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00704.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00704
         * 화면명   	: 7-4 급식운영일지
         * 화면설명 	: 급식운영일지를 작성하는 화면
         * 작성일   	: 2022-03-11
         * 작성자   	: 박한준
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2022-04-04		조기종		단위테스트 오류 수정
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
        	this.div_func.form.chk_repo1.set_value(1); // 보존기록표 체크

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
        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "작성코드")))
        	{
        		this.alert("점검직원을 지정해야합니다.");
        		return false;
        	}

        	// 근무자 2글자 이상 입력해야함.
        	var worker = this.ds_data.getColumn(0, "근무자");

        	if(worker.length < 2){
        		this.alert("근무자를 기록해야 합니다.");
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

        	this.reSearchData = this.ds_data.getColumn(0, "급식일");

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
        				   + "sqlId=DAY00704.DAY00704_DS_LIST_S "
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
        				   + "sqlId=DAY00704.DAY00704_DS_DATA_D ";

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
        			//this.ds_data.clearData();
        			this.fn_search("serach");
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

        // 식사기록 조회
        this.fn_mealRecord = function()
        {
        	this.ds_meal.clear();

        	const svcId = "mealrecord";
        	const params = "/commonController.do";
        	//const inDatasets = "input1=ds_search";
        	const inDatasets = "";
        	const outDatasets = "ds_meal=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00704.DAY00704_DS_MEAL_S "
        				   + "SICODE="+this.ds_search.getColumn(0,"SICODE")
        				   + " NALJA="+this.ds_data.getColumn(0,"급식일");

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };

        // 근무기록 조회
        this.fn_workRecord = function()
        {
        	this.ds_work.clear();

        	const svcId = "workrecord";
        	const params = "/commonController.do";
        	//const inDatasets = "input1=ds_search";
        	const inDatasets = "";
        	const outDatasets = "ds_work=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00704.DAY00704_DS_WORK_S "
        				   + "SICODE="+this.ds_search.getColumn(0,"SICODE")
        				   + " WORKDATE="+this.ds_data.getColumn(0,"급식일");

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
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

        	const managerStr = this.ds_data.getColumn(nRow, "작성자명")
        					 + "/"
        					 + this.ds_data.getColumn(nRow, "작성코드");

        	this.ds_data.setColumn(nRow, "VIEW_MANAGER", managerStr);

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(nRow, 1);
        	this.ds_data.set_updatecontrol(true);
        };

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo) {
        	const sFindRow = this.ds_list.findRow("급식일", fv_saveRefNo);
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
        		var repo1 = this.div_func.form.chk_repo1.value; // 급식일지
        	var repo2 = this.div_func.form.chk_repo2.value; // 급식일지(선택)

        	var arrDate = []; // 선택된 급식일 (파라미터)

        	if(repo1 != 1 && repo2 != 1 ){ // 평가일지
         		this.alert("출력할 레포트를 선택해주세요.")
        		return false;
         	}

         	if(repo1 == 1){ // 급식일지
        		if(this.ds_data.rowcount < 1) return false;

        		if(this.ds_data.getColumn(0,"급식번호") == null || this.ds_data.getColumn(0,"급식번호") == ""){
        			this.alert("급식운영일지 저장 후 출력해주세요.");
        			return false;
        		}
        		arrDate.push(this.ds_data.getColumn(0,"급식일"));

         	}else if(repo2 == 1){ // 급식일지(선택)
        		// 리스트 row 수만큼 for문 돌려서 체크된 row 찾기
        		for(var i=0; i < this.ds_list.rowcount; i++){

        			if(this.ds_list.getColumn(i,"CHK") == 1){ // 체크된 급식일 배열에 담기
        				var sdate = this.ds_list.getColumn(i,"급식일").toString(); // 날짜를 string으로 변환

        				if(this.ds_list.getColumn(i, "작성") == "O"){
        					arrDate.push(sdate); // arrDate 배열에 담기
        				}
        			}
        		}
        	}

        	// 체크된게 없으면 메시지 출력
        	if (arrDate.length < 1){
        		this.alert("출력할 항목을 선택해주세요");
        		return false;
        	}

        	var popupUrl = "DAY_POP::DAY00704_R01.xfdl";
        	var popupName = "급식운영일지";
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
        		,	DATE : this.ds_data.getColumn(0, "급식일")
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
        				this.ds_data.setColumn(0, "작성자명", name);
        				this.ds_data.setColumn(0, "작성코드", staffid);
        				this.ds_data.setColumn(0, "VIEW_MANAGER", name + "/" + staffid);
        			}else{
        				this.ds_data.setColumn(0, "작성자명", "");
        				this.ds_data.setColumn(0, "작성코드", "");
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
        	const dateIdx = obj.getBindCellIndex("body", "급식일") + 1;
        	// 급식일 선택
        	if (e.col == dateIdx)
        	{
        		if(this.ds_list.getColumn(e.row, "작성") == "O"){ // 작성 O이면 데이터셋 복사
        			// 입력, 수정용 데이터셋에 데이터 복사
        			this.ds_data.set_enableevent(false);
        			this.fn_dataCopy(e.row);
        			this.ds_data.set_enableevent(true);
        		}else{ // 작성 빈값이면 새로작성
        			this.ds_data.clearData();
        			const nRow = this.ds_data.addRow();
        			this.ds_data.set_enableevent(false);
        			this.ds_data.setColumn(nRow, "sicode", this.ds_list.getColumn(e.row, "sicode"));
        			this.ds_data.setColumn(nRow, "급식일", this.ds_list.getColumn(e.row, "급식일"));
        			this.ds_data.setColumn(nRow, "작성자명", nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name")));
        			this.ds_data.setColumn(nRow, "작성코드", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid"));
        			const managerStr = this.ds_data.getColumn(0, "작성자명")
        							+ "/"
        							+ this.ds_data.getColumn(0, "작성코드");
        			this.ds_data.setColumn(0, "VIEW_MANAGER", managerStr);

        			// 식단메뉴
        			for(var i=1; i<7; i++){
        				this.ds_data.setColumn(nRow,"mor0" + i, this.ds_list.getColumn(e.row,"mor0" + i));
        				this.ds_data.setColumn(nRow,"lun0" + i, this.ds_list.getColumn(e.row,"lun0" + i));
        				this.ds_data.setColumn(nRow,"din0" + i, this.ds_list.getColumn(e.row,"din0" + i));
        				this.ds_data.setColumn(nRow,"sna0" + i, this.ds_list.getColumn(e.row,"sna0" + i));
        			}

        			this.ds_data.setColumn(nRow,"조식거주", 0);
        			this.ds_data.setColumn(nRow,"조식직원", 0);
        			this.ds_data.setColumn(nRow,"조식일반", 0);
        			this.ds_data.setColumn(nRow,"xxx_조식다진", 0);
        			this.ds_data.setColumn(nRow,"조식죽식", 0);
        			this.ds_data.setColumn(nRow,"xxx_조식당뇨", 0);
        			this.ds_data.setColumn(nRow,"조식경관", 0);
        			this.ds_data.setColumn(nRow,"xxx_조식저염", 0);
        			this.ds_data.setColumn(nRow,"중식거주", 0);
        			this.ds_data.setColumn(nRow,"중식직원", 0);
        			this.ds_data.setColumn(nRow,"중식일반", 0);
        			this.ds_data.setColumn(nRow,"xxx_중식다진", 0);
        			this.ds_data.setColumn(nRow,"중식죽식", 0);
        			this.ds_data.setColumn(nRow,"xxx_중식당뇨", 0);
        			this.ds_data.setColumn(nRow,"중식경관", 0);
        			this.ds_data.setColumn(nRow,"xxx_중식저염", 0);
        			this.ds_data.setColumn(nRow,"석식거주", 0);
        			this.ds_data.setColumn(nRow,"석식직원", 0);
        			this.ds_data.setColumn(nRow,"석식일반", 0);
        			this.ds_data.setColumn(nRow,"xxx_석식다진", 0);
        			this.ds_data.setColumn(nRow,"석식죽식", 0);
        			this.ds_data.setColumn(nRow,"xxx_석식당뇨", 0);
        			this.ds_data.setColumn(nRow,"석식경관", 0);
        			this.ds_data.setColumn(nRow,"xxx_석식저염", 0);
        			this.ds_data.setColumn(nRow,"조식열량", 0);
        			this.ds_data.setColumn(nRow,"중식열량", 0);
        			this.ds_data.setColumn(nRow,"석식열량", 0);

        			this.ds_data.setColumn(nRow,"근무자", "");
        			this.ds_data.setColumn(nRow,"휴무자", "");
        			this.ds_data.setColumn(nRow,"업무내용", "");
        			this.ds_data.setColumn(nRow,"조치사항", "");
        			//음식폐기일은 급식일 + 6일
        			var tDate = this.ds_data.getColumn(0,"급식일");
        			tDate.setDate(tDate.getDate() + 6);
        			this.ds_data.setColumn(0, "폐기일", tDate);
        			this.ds_data.set_enableevent(true);
        		}

        	}

        };

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
        this.chk_repo_onchanged = function(obj,e)
        {
        	if(e.postvalue == 1)
        	{
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
        	else if (e.postvalue == 0)
        	{
        		obj.set_value(e.prevalue);
        	}
        };


        // 수급자인원 자동 계산 이벤트
        this.ds_data_oncolumnchanged = function(obj,e)
        {
        	//trace(">> " + e.col);
        	var person = 0;

        	if(e.columnid == "조식일반" || e.columnid == "조식죽식" || e.columnid == "조식경관"){
        		person += nexacro.toNumber(obj.getColumn(e.row,"조식일반"));
        		person += nexacro.toNumber(obj.getColumn(e.row,"조식죽식"));
        		person += nexacro.toNumber(obj.getColumn(e.row,"조식경관"));

        		if(person > 999) person = 0; // 합계가 1000이상이면 값을 0으로 변경
        		this.ds_data.setColumn(0, "조식거주" ,person);
        	}else if(e.columnid == "중식일반" || e.columnid == "중식죽식" || e.columnid == "중식경관"){
        		person += nexacro.toNumber(obj.getColumn(e.row,"중식일반"));
        		person += nexacro.toNumber(obj.getColumn(e.row,"중식죽식"));
        		person += nexacro.toNumber(obj.getColumn(e.row,"중식경관"));
        		if(person > 999) person = 0;
        		this.ds_data.setColumn(0, "중식거주" ,person);
        	}else if(e.columnid == "석식일반" || e.columnid == "석식죽식" || e.columnid == "석식경관"){
        		person += nexacro.toNumber(obj.getColumn(e.row,"석식일반"));
        		person += nexacro.toNumber(obj.getColumn(e.row,"석식죽식"));
        		person += nexacro.toNumber(obj.getColumn(e.row,"석식경관"));
        		if(person > 999) person = 0;
        		this.ds_data.setColumn(0, "석식거주" ,person);
        	}

        };

        // 식사기록적용 버튼 이벤트
        this.div_cont_div_right_div_main_btn_record2_onclick = function(obj,e)
        {
        	if(this.ds_data.rowcount < 1) return false;

        	this.fn_mealRecord();

        	this.ds_data.setColumn(0,"조식일반", this.ds_meal.getColumn(0,"조식일반식"));
        	this.ds_data.setColumn(0,"조식죽식", this.ds_meal.getColumn(0,"조식죽식"));
        	this.ds_data.setColumn(0,"조식경관", this.ds_meal.getColumn(0,"조식유동식"));
        	this.ds_data.setColumn(0,"중식일반", this.ds_meal.getColumn(0,"중식일반식"));
        	this.ds_data.setColumn(0,"중식죽식", this.ds_meal.getColumn(0,"중식죽식"));
        	this.ds_data.setColumn(0,"중식경관", this.ds_meal.getColumn(0,"중식유동식"));
        	this.ds_data.setColumn(0,"석식일반", this.ds_meal.getColumn(0,"석식일반식"));
        	this.ds_data.setColumn(0,"석식죽식", this.ds_meal.getColumn(0,"석식죽식"));
        	this.ds_data.setColumn(0,"석식경관", this.ds_meal.getColumn(0,"석식유동식"));

        };

        // 근무기록적용 버튼 이벤트
        this.div_cont_div_right_div_main_btn_record1_onclick = function(obj,e)
        {
        	if(this.ds_data.rowcount < 1) return false;

        	this.fn_workRecord();

        	this.ds_data.setColumn(0,"조식직원",this.ds_work.getColumn(0,"mor_cnt"));
        	this.ds_data.setColumn(0,"중식직원",this.ds_work.getColumn(0,"lun_cnt"));
        	this.ds_data.setColumn(0,"석식직원",this.ds_work.getColumn(0,"din_cnt"));
        };

        // 보존식기록표 클릭 이벤트
        this.div_func_btn_report2_onclick = function(obj,e)
        {
        	var arrDate = []; // 선택된 급식일 (파라미터)

        	// 리스트 row 수만큼 for문 돌려서 체크된 row 찾기
        	for(var i=0; i < this.ds_list.rowcount; i++){
        		if(this.ds_list.getColumn(i,"CHK") == 1){ // 체크된 급식일 배열에 담기
        			var sdate = this.ds_list.getColumn(i,"급식일").toString(); // 날짜를 string으로 변환
        			arrDate.push(sdate); // arrDate 배열에 담기
        		}
        	}

        	// 체크된게 없으면 메시지 출력
        	if (arrDate.length < 1){
        		this.alert("출력할 항목을 선택해주세요");
        		return false;
        	}

        	var popupUrl = "DAY_POP::DAY00704_R02.xfdl";
        	var popupName = "보존기록표";
        	let params;
        	const dicompNm = " ";

        	// 레포트의 시작날짜와 끝날짜도 넘김
        	params = {
        		sicode : fv_sicode
        	,	date : arrDate
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_manager.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_manager_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.sta_num11.addEventHandler("onclick",this.div_cont_div_right_div_main_sta_body13_02_00_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_record1.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_record1_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_record2.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_record2_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.mae_mor1.addEventHandler("onchanged",this.edt_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.mae_mor2.addEventHandler("onchanged",this.edt_onchanged,this);
            this.div_search.form.cal_yyyymm.addEventHandler("onchanged",this.div_search_cal_yyyymm_onchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.cal_yyyymm_pic.addEventHandler("onchanged",this.div_search_cal_yyyymm_pic_onchanged,this);
            this.div_func.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.div_func_btn_report2_onclick,this);
            this.div_func.form.chk_repo1.addEventHandler("onchanged",this.chk_repo_onchanged,this);
            this.div_func.form.chk_repo2.addEventHandler("onchanged",this.chk_repo_onchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
            this.ds_data.addEventHandler("oncolumnchanged",this.ds_data_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00704.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
