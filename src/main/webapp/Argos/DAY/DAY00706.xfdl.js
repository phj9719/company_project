(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00706");
            this.set_titletext("7-6 식품위생관리 일일점검표");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,800);
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
            obj._setContents("<ColumnInfo><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"KP_sicode\" type=\"STRING\" size=\"256\"/><Column id=\"식중독번호\" type=\"INT\" size=\"256\"/><Column id=\"작성\" type=\"STRING\" size=\"256\"/><Column id=\"점검일\" type=\"DATE\" size=\"256\"/><Column id=\"점검요일\" type=\"STRING\" size=\"256\"/><Column id=\"담당자명\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/><Column id=\"점검자의견\" type=\"STRING\" size=\"256\"/><Column id=\"항목01\" type=\"STRING\" size=\"256\"/><Column id=\"항목02\" type=\"STRING\" size=\"256\"/><Column id=\"항목03\" type=\"STRING\" size=\"256\"/><Column id=\"항목04\" type=\"STRING\" size=\"256\"/><Column id=\"항목05\" type=\"STRING\" size=\"256\"/><Column id=\"항목06\" type=\"STRING\" size=\"256\"/><Column id=\"항목07\" type=\"STRING\" size=\"256\"/><Column id=\"항목08\" type=\"STRING\" size=\"256\"/><Column id=\"항목09\" type=\"STRING\" size=\"256\"/><Column id=\"항목10\" type=\"STRING\" size=\"256\"/><Column id=\"항목11\" type=\"STRING\" size=\"256\"/><Column id=\"항목12\" type=\"STRING\" size=\"256\"/><Column id=\"항목13\" type=\"STRING\" size=\"256\"/><Column id=\"항목14\" type=\"STRING\" size=\"256\"/><Column id=\"항목15\" type=\"STRING\" size=\"256\"/><Column id=\"항목16\" type=\"STRING\" size=\"256\"/><Column id=\"항목17\" type=\"STRING\" size=\"256\"/><Column id=\"항목18\" type=\"STRING\" size=\"256\"/><Column id=\"항목19\" type=\"STRING\" size=\"256\"/><Column id=\"항목20\" type=\"STRING\" size=\"256\"/><Column id=\"항목21\" type=\"STRING\" size=\"256\"/><Column id=\"항목22\" type=\"STRING\" size=\"256\"/><Column id=\"항목23\" type=\"STRING\" size=\"256\"/><Column id=\"org_식중독번호\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_meal", this);
            obj._setContents("<ColumnInfo><Column id=\"조식일반식\" type=\"STRING\" size=\"256\"/><Column id=\"조식죽식\" type=\"STRING\" size=\"256\"/><Column id=\"조식유동식\" type=\"STRING\" size=\"256\"/><Column id=\"중식일반식\" type=\"STRING\" size=\"256\"/><Column id=\"중식죽식\" type=\"STRING\" size=\"256\"/><Column id=\"중식유동식\" type=\"STRING\" size=\"256\"/><Column id=\"석식일반식\" type=\"STRING\" size=\"256\"/><Column id=\"석식죽식\" type=\"STRING\" size=\"256\"/><Column id=\"석식유동식\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"KP_sicode\" type=\"STRING\" size=\"256\"/><Column id=\"식중독번호\" type=\"INT\" size=\"256\"/><Column id=\"점검일\" type=\"DATE\" size=\"256\"/><Column id=\"점검요일\" type=\"STRING\" size=\"256\"/><Column id=\"담당자명\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/><Column id=\"점검자의견\" type=\"STRING\" size=\"256\"/><Column id=\"항목01\" type=\"STRING\" size=\"256\"/><Column id=\"항목02\" type=\"STRING\" size=\"256\"/><Column id=\"항목03\" type=\"STRING\" size=\"256\"/><Column id=\"항목04\" type=\"STRING\" size=\"256\"/><Column id=\"항목05\" type=\"STRING\" size=\"256\"/><Column id=\"항목06\" type=\"STRING\" size=\"256\"/><Column id=\"항목07\" type=\"STRING\" size=\"256\"/><Column id=\"항목08\" type=\"STRING\" size=\"256\"/><Column id=\"항목09\" type=\"STRING\" size=\"256\"/><Column id=\"항목10\" type=\"STRING\" size=\"256\"/><Column id=\"항목11\" type=\"STRING\" size=\"256\"/><Column id=\"항목12\" type=\"STRING\" size=\"256\"/><Column id=\"항목13\" type=\"STRING\" size=\"256\"/><Column id=\"항목14\" type=\"STRING\" size=\"256\"/><Column id=\"항목15\" type=\"STRING\" size=\"256\"/><Column id=\"항목16\" type=\"STRING\" size=\"256\"/><Column id=\"항목17\" type=\"STRING\" size=\"256\"/><Column id=\"항목18\" type=\"STRING\" size=\"256\"/><Column id=\"항목19\" type=\"STRING\" size=\"256\"/><Column id=\"항목20\" type=\"STRING\" size=\"256\"/><Column id=\"항목21\" type=\"STRING\" size=\"256\"/><Column id=\"항목22\" type=\"STRING\" size=\"256\"/><Column id=\"항목23\" type=\"STRING\" size=\"256\"/><Column id=\"org_식중독번호\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","450",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0","450","740",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"30\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"80\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cursor=\"pointer\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"0\"/><Cell col=\"1\" text=\"출력\" expandchar=\"rno\"/></Cell><Cell col=\"2\" text=\"식품점검일\"/><Cell col=\"3\" text=\"요일\"/><Cell col=\"4\" text=\"작성자\"/><Cell col=\"5\" text=\"작성(O)\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"2\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dot\" cssclass=\"cellBWoman\" text=\"bind:점검일\"/><Cell col=\"3\" text=\"bind:점검요일\"/><Cell col=\"4\" text=\"bind:담당자명\"/><Cell col=\"5\" text=\"bind:작성\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","470","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_main","0","0","849","740",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e2e2e2");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","329","7","190","24",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("48");
            obj.set_text("식품위생관리 일일점검표");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no","24","10","60","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("49");
            obj.set_text("기록번호 : ");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_no_value","87","10","60","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("50");
            obj.set_text("00000000");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_line","20","40",null,"1","20",null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("51");
            obj.set_background("#e2e2e2");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head1","20","88","120","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("55");
            obj.set_text("구   분");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num1","20","117","120","151",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("58");
            obj.set_text(" 1. 개인 위생");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_date","24","52","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("52");
            obj.set_text("식품점검일");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Calendar("cal_date","94","52","90","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("53");
            obj.set_tooltiptext("점검일");
            obj.set_readonly("true");
            obj.set_buttonsize("0 0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Button("btn_manager","214","52","80","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("0");
            obj.set_text("점검자");
            obj.set_cssclass("btn_worker");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_manager_value","304","52","174","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("54");
            obj.set_text("너싱홈/ 요양보호사 / 20210007");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num2","20","267","120","201",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("60");
            obj.set_text(" 2. 원료 및 조리 ·\r\n    가공식품취급");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num3","20","467","120","151",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("59");
            obj.set_text(" 3. 조리 · 가공\r\n    설비 및 시설");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_opn1","138","692","689","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_opn1","143","695","679","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("47");
            obj.set_maxlength("80");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num5","20","692","120","28",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("62");
            obj.set_text(" 5. 점검자의견");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_num4","20","617","120","76",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("61");
            obj.set_text(" 4. 기타 준수\r\n    사항 이행");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("left");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head2","139","88","550","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("56");
            obj.set_text("점 검 사 항");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_head3","688","88","139","30",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("57");
            obj.set_text("점검결과");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body1","139","117","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("63");
            obj.set_text("○ 설사 · 발열 · 구토 및 화농성질환 여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o01","688","117","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x01","757","117","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o01","700","120","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("1");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x01","770","120","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("2");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body2","139","142","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("64");
            obj.set_text("○ 가족 및 동거인의 상기 질환 여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body4","139","192","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("66");
            obj.set_text("○ 손세척 및 소독의 필요 숙지여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body3","139","167","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("65");
            obj.set_text("○ 위생모 · 위생복 · 작업화 등의 청결여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body7","139","267","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("69");
            obj.set_text("○ 부패 · 변질 및 무신고(허가), 무표시제품등 사용여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body6","139","242","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("68");
            obj.set_text("○ 종업원의 심리적 안정상태 여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body5","139","217","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("67");
            obj.set_text("○ 손톱의 청결 및 장신구(반지등) 착용여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body13","139","417","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("75");
            obj.set_text("○ 과채류 등 원료의 절단시 세척 선행 여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body12","139","392","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("74");
            obj.set_text("○ 가열조리식품의 신속냉각 및 적정 보관 여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body11","139","367","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("73");
            obj.set_text("○ 가열조리식품과 비가열조리식품의 구분 여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body10","139","342","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("72");
            obj.set_text("○ 적정보관 온도 준수 여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body9","139","317","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("71");
            obj.set_text("○ 교차오염 방지를 위한 구분보관 여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body8","139","292","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("70");
            obj.set_text("○ 저장조건, 포장 · 용기 등의 적정상태");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body14","139","442","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("76");
            obj.set_text("○ 식품 제조 · 가공 · 조리시 마스크 착용여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body15","139","467","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("77");
            obj.set_text("○ 오염구역, 청결구역, 준청결구역 구분여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body16","139","492","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("78");
            obj.set_text("○ 방충, 방서 및 이물혼입 방지 여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body17","139","517","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("79");
            obj.set_text("○ 육류, 채소류 등 원료별 조리기구의 구분 및 사용 여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body18","139","542","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("80");
            obj.set_text("○ 칼·도마·행주 등 조리기구 및 설비 등의 적정 세척, 소독여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body19","139","567","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("81");
            obj.set_text("○ 작업장내 수세시설 및 소독시설의 구비 및 작동여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body20","139","592","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("82");
            obj.set_text("○ 작업장 바닥의 물고임 방지 및 배수구 개폐용이 여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body23","139","667","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("86");
            obj.set_text("○ 쓰레기 및 쓰레기장의 청결관리 여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body22","139","642","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("84");
            obj.set_text("○ 유통기한이 경과된 제품 진열·보관 또는 조리·가공 등 재사용여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_body21","139","617","550","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("83");
            obj.set_text("○ 수돗물이 아닌물을 사용시 먹는물 수질검사 여부");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o02","688","142","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x02","757","142","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o02","700","145","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("3");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x02","770","145","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("4");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o03","688","167","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x03","757","167","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o03","700","170","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("5");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x03","770","170","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("6");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o04","688","192","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x04","757","192","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o04","700","195","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("7");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x04","770","195","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("8");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o05","688","217","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x05","757","217","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o05","700","220","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("9");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x05","770","220","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("10");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o06","688","242","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x06","757","242","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o06","700","245","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("11");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x06","770","245","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("12");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o07","688","267","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x07","757","267","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o07","700","270","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("13");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x07","770","270","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("14");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o08","688","292","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x08","757","292","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o08","700","295","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("15");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x08","770","295","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("16");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o09","688","317","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x09","757","317","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o09","700","320","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("17");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x09","770","320","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("18");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o10","688","342","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x10","757","342","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o10","700","345","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("19");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x10","770","345","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("20");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o11","688","367","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x11","757","367","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o11","700","370","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("21");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x11","770","370","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("22");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o12","688","392","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("109");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x12","757","392","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o12","700","395","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("23");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x12","770","395","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("24");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o13","688","417","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x13","757","417","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o13","700","420","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("25");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x13","770","420","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("26");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o14","688","442","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x14","757","442","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o14","700","445","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("27");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x14","770","445","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("28");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o15","688","467","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x15","757","467","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("116");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o15","700","470","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("29");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x15","770","470","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("30");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o16","688","492","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("117");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x16","757","492","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o16","700","495","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("31");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x16","770","495","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("32");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o17","688","517","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x17","757","517","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o17","700","520","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("33");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x17","770","520","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("34");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o18","688","542","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("121");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x18","757","542","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("122");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o18","700","545","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("35");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x18","770","545","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("36");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o19","688","567","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("123");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x19","757","567","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("124");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o19","700","570","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("37");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x19","770","570","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("38");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o20","688","592","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("125");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x20","757","592","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("126");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o20","700","595","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("39");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x20","770","595","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("40");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o21","688","617","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("127");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x21","757","617","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o21","700","620","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("41");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x21","770","620","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("42");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o22","688","642","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x22","757","642","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("130");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o22","700","645","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("43");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x22","770","645","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("44");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_o23","688","667","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new Static("sta_x23","757","667","70","26",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("132");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_textAlign("center");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_o23","700","670","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("45");
            obj.set_text("   적");
            obj.set_cssclass("chk_o");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_cont.form.div_right.form.div_main.addChild(obj.name, obj);

            obj = new CheckBox("chk_x23","770","670","45","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_main.form);
            obj.set_taborder("46");
            obj.set_text("   부");
            obj.set_cssclass("chk_x");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
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

            obj = new Static("sta_00","267","8","8","25",null,null,null,null,null,null,this.div_search.form);
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

            obj = new Button("btn_search","380","7","70","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_yyyymm_pic","cal_yyyymm:-1","7","26","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMM");
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","470","0","849","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sign","0","7","65","26",null,null,null,null,null,null,this.div_func.form);
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

            obj = new Static("sta_report_body","65","5","260","30",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailLabel02");
            obj.set_text("");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report1","249","7","70","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("출력");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_repo2","146","7","110","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("점검표(선택)");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);

            obj = new CheckBox("chk_repo1","69","7","90","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("6");
            obj.set_text("점검표");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1500,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_cont.form.div_right.form.div_main.form.sta_no_value","text","ds_data","식중독번호");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_right.form.div_main.form.cal_date","value","ds_data","점검일");
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

            obj = new BindItem("item227","div_cont.form.div_right.form.div_main.form.edt_opn1","value","ds_data","점검자의견");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_right.form.div_main.form.chk_o01","value","ds_data","항목01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.div_right.form.div_main.form.chk_x01","value","ds_data","항목01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_cont.form.div_right.form.div_main.form.chk_o02","value","ds_data","항목02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_cont.form.div_right.form.div_main.form.chk_x02","value","ds_data","항목02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_cont.form.div_right.form.div_main.form.chk_o03","value","ds_data","항목03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_cont.form.div_right.form.div_main.form.chk_x03","value","ds_data","항목03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_cont.form.div_right.form.div_main.form.chk_o04","value","ds_data","항목04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_cont.form.div_right.form.div_main.form.chk_x04","value","ds_data","항목04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_cont.form.div_right.form.div_main.form.chk_o05","value","ds_data","항목05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_cont.form.div_right.form.div_main.form.chk_x05","value","ds_data","항목05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_cont.form.div_right.form.div_main.form.chk_o06","value","ds_data","항목06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_cont.form.div_right.form.div_main.form.chk_x06","value","ds_data","항목06");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_cont.form.div_right.form.div_main.form.chk_o07","value","ds_data","항목07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_cont.form.div_right.form.div_main.form.chk_x07","value","ds_data","항목07");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_cont.form.div_right.form.div_main.form.chk_o08","value","ds_data","항목08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_cont.form.div_right.form.div_main.form.chk_x08","value","ds_data","항목08");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_cont.form.div_right.form.div_main.form.chk_o09","value","ds_data","항목09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_cont.form.div_right.form.div_main.form.chk_x09","value","ds_data","항목09");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_cont.form.div_right.form.div_main.form.chk_o10","value","ds_data","항목10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_cont.form.div_right.form.div_main.form.chk_x10","value","ds_data","항목10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_cont.form.div_right.form.div_main.form.chk_o11","value","ds_data","항목11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_cont.form.div_right.form.div_main.form.chk_x11","value","ds_data","항목11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_cont.form.div_right.form.div_main.form.chk_o12","value","ds_data","항목12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_cont.form.div_right.form.div_main.form.chk_x12","value","ds_data","항목12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_cont.form.div_right.form.div_main.form.chk_o13","value","ds_data","항목13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_cont.form.div_right.form.div_main.form.chk_x13","value","ds_data","항목13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_cont.form.div_right.form.div_main.form.chk_o14","value","ds_data","항목14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_cont.form.div_right.form.div_main.form.chk_x14","value","ds_data","항목14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_cont.form.div_right.form.div_main.form.chk_o15","value","ds_data","항목15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_cont.form.div_right.form.div_main.form.chk_x15","value","ds_data","항목15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_cont.form.div_right.form.div_main.form.chk_o16","value","ds_data","항목16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_cont.form.div_right.form.div_main.form.chk_x16","value","ds_data","항목16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_cont.form.div_right.form.div_main.form.chk_o17","value","ds_data","항목17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_cont.form.div_right.form.div_main.form.chk_x17","value","ds_data","항목17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_cont.form.div_right.form.div_main.form.chk_o18","value","ds_data","항목18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_cont.form.div_right.form.div_main.form.chk_x18","value","ds_data","항목18");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_cont.form.div_right.form.div_main.form.chk_o19","value","ds_data","항목19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_cont.form.div_right.form.div_main.form.chk_x19","value","ds_data","항목19");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_cont.form.div_right.form.div_main.form.chk_o20","value","ds_data","항목20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_cont.form.div_right.form.div_main.form.chk_x20","value","ds_data","항목20");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_cont.form.div_right.form.div_main.form.chk_o21","value","ds_data","항목21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_cont.form.div_right.form.div_main.form.chk_x21","value","ds_data","항목21");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_cont.form.div_right.form.div_main.form.chk_o22","value","ds_data","항목22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","div_cont.form.div_right.form.div_main.form.chk_x22","value","ds_data","항목22");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","div_cont.form.div_right.form.div_main.form.chk_o23","value","ds_data","항목23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_cont.form.div_right.form.div_main.form.chk_x23","value","ds_data","항목23");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.cal_yyyymm_pic","value","ds_search","YYYYMM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00706.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00706.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00706.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00706
         * 화면명   	: 7-6 식품위생관리 일일점검표
         * 화면설명 	: 식품위생관리 점검표를 작성하는 화면
         * 작성일   	: 2022-03-17
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
        	this.div_func.form.chk_repo1.set_value(1); // 점검표 체크

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
        	if (Sct.Util.isEmpty(this.ds_data.getColumn(0, "담당코드")))
        	{
        		this.alert("점검직원을 지정해야합니다.");
        		return false;
        	}

        	if (!this.confirm("저장 하시겠습니까?"))
        		return false;

        	this.reSearchData = this.ds_data.getColumn(0, "점검일");

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
        				   + "sqlId=DAY00706.DAY00706_DS_LIST_S "
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
        				   + "sqlId=DAY00706.DAY00706_DS_DATA_D ";

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

        	const managerStr = this.ds_data.getColumn(nRow, "담당자명")
        					 + "/"
        					 + this.ds_data.getColumn(nRow, "담당코드");

        	this.ds_data.setColumn(nRow, "VIEW_MANAGER", managerStr);

        	this.ds_data.set_updatecontrol(false);
        	this.ds_data.setRowType(nRow, 1);
        	this.ds_data.set_updatecontrol(true);
        };

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo) {
        	const sFindRow = this.ds_list.findRow("점검일", fv_saveRefNo);
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

        		if(this.ds_data.getColumn(0,"식중독번호") == null || this.ds_data.getColumn(0,"식중독번호") == ""){
        			this.alert("식품위생 일지 저장 후 출력해주세요.");
        			return false;
        		}
        		arrDate.push(this.ds_data.getColumn(0,"점검일"));
        	}else{
        		// 리스트 row 수만큼 for문 돌려서 체크된 row 찾기
        		for(var i=0; i < this.ds_list.rowcount; i++){

        			if(this.ds_list.getColumn(i,"CHK") == 1){ // 체크된 급식일 배열에 담기
        				var sdate = this.ds_list.getColumn(i,"점검일").toString(); // 날짜를 string으로 변환

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
        		this.alert("출력할 항목을 선택해주세요");
        		return false;
        	}

        	var popupUrl = "DAY_POP::DAY00706_R01.xfdl";
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
        		,	DATE : this.ds_data.getColumn(0, "점검일")
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
        				this.ds_data.setColumn(0, "담당자명", name);
        				this.ds_data.setColumn(0, "담당코드", staffid);
        				this.ds_data.setColumn(0, "VIEW_MANAGER", name + "/" + staffid);
        			}else{
        				this.ds_data.setColumn(0, "담당자명", "");
        				this.ds_data.setColumn(0, "담당코드", "");
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
        	const dateIdx = obj.getBindCellIndex("body", "점검일") + 1;
        	// 점검일 선택
        	if (e.col == dateIdx)
        	{
        		if(this.ds_list.getColumn(e.row, "작성") == "O"){ // 작성 O이면 데이터셋 복사
        			// 입력, 수정용 데이터셋에 데이터 복사
        			this.fn_dataCopy(e.row);

        		}else{ // 작성 빈값이면 새로작성
        			this.ds_data.clearData();
        			const nRow = this.ds_data.addRow();

        			this.ds_data.setColumn(nRow, "sicode", this.ds_list.getColumn(e.row, "sicode"));
        			this.ds_data.setColumn(nRow, "점검일", this.ds_list.getColumn(e.row, "점검일"));
        			this.ds_data.setColumn(nRow, "담당자명", nexacro.trim(nexacro.getApplication().gds_userInfo.getColumn(0, "c_name")));
        			this.ds_data.setColumn(nRow, "담당코드", nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid"));
        			const managerStr = this.ds_data.getColumn(0, "담당자명")
        							+ "/"
        							+ this.ds_data.getColumn(0, "담당코드");
        			this.ds_data.setColumn(nRow, "VIEW_MANAGER", managerStr);

        			this.ds_data.setColumn(nRow, "점검자의견", "");

        			for(var i=1; i<24; i++){
        				if(i<10){
        					this.ds_data.setColumn(nRow, "항목0"+i, 1);
        				}else{
        					this.ds_data.setColumn(nRow, "항목"+i, 1);
        				}
        			}

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

        // 체크박스 변경 이벤트
        this.mainChk_onchanged = function(obj,e)
        {
        	const num = obj.id.substr(5); // obj.id 마지막 숫자

        	const value = e.postvalue; // 변경값

        	switch (obj.id)
        	{
        		case "chk_o" + num : // ex)
        			if(value == 1)
        			{
        				this.div_cont.form.div_right.form.div_main.form.components["chk_x" + num].set_value(0);
        				this.ds_data.setColumn(0,"항목"+num, 1);
        			}
        			break;
        		case "chk_x" + num :
        			if(value == 2)
        			{
        				this.div_cont.form.div_right.form.div_main.form.components["chk_o" + num].set_value(0);
        				this.ds_data.setColumn(0,"항목"+num, 2);
        			}
        			break;
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_cont.form.div_right.form.div_main.form.btn_manager.addEventHandler("onclick",this.div_cont_div_right_div_main_btn_manager_onclick,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o01.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x01.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o02.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x02.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o03.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x03.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o04.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x04.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o05.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x05.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o06.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x06.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o07.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x07.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o08.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x08.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o09.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x09.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o10.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x10.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o11.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x11.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o12.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x12.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o13.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x13.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o14.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x14.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o15.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x15.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o16.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x16.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o17.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x17.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o18.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x18.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o19.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x19.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o20.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x20.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o21.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x21.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o22.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x22.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_o23.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_cont.form.div_right.form.div_main.form.chk_x23.addEventHandler("onchanged",this.mainChk_onchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.cal_yyyymm_pic.addEventHandler("onchanged",this.div_search_cal_yyyymm_pic_onchanged,this);
            this.div_func.form.btn_delete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_func.form.btn_save.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.chk_repo2.addEventHandler("canchange",this.chk_repo_canchange,this);
            this.div_func.form.chk_repo1.addEventHandler("canchange",this.chk_repo_canchange,this);
            this.div_func.form.chk_repo1.addEventHandler("onclick",this.div_func_chk_repo1_onclick,this);
        };
        this.loadIncludeScript("DAY00706.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
