(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00209");
            this.set_titletext("2-9 수급자 병의원진료기록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"DATE\" size=\"256\"/><Column id=\"date_to\" type=\"DATE\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_person", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"bm_grade_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_log", this);
            obj._setContents("<ColumnInfo><Column id=\"진료청구명\" type=\"STRING\" size=\"256\"/><Column id=\"투약청구명\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"진료번호\" type=\"STRING\" size=\"256\"/><Column id=\"거주자명\" type=\"STRING\" size=\"256\"/><Column id=\"거주코드\" type=\"STRING\" size=\"256\"/><Column id=\"진료일\" type=\"DATE\" size=\"256\"/><Column id=\"진료시간\" type=\"STRING\" size=\"256\"/><Column id=\"병의원명\" type=\"STRING\" size=\"256\"/><Column id=\"병원번호\" type=\"STRING\" size=\"256\"/><Column id=\"진료내용\" type=\"STRING\" size=\"256\"/><Column id=\"진료금액\" type=\"STRING\" size=\"256\"/><Column id=\"진료청구\" type=\"STRING\" size=\"256\"/><Column id=\"투약금액\" type=\"STRING\" size=\"256\"/><Column id=\"투약청구\" type=\"STRING\" size=\"256\"/><Column id=\"담당자명\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/><Column id=\"첨부파일번호\" type=\"STRING\" size=\"256\"/><Column id=\"filename1\" type=\"STRING\" size=\"256\"/><Column id=\"org_진료번호\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"cbcode\" type=\"STRING\" size=\"256\"/><Column id=\"cbname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sort", this);
            obj._setContents("<ColumnInfo><Column id=\"cbcode\" type=\"STRING\" size=\"256\"/><Column id=\"cbname\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cbcode\">진료일</Col><Col id=\"cbname\">1-진료일순</Col></Row><Row><Col id=\"cbcode\">거주자명</Col><Col id=\"cbname\">2-수급자명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sort_out", this);
            obj._setContents("<ColumnInfo><Column id=\"sort\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_valid", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rowdupl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"주민번호\" type=\"STRING\" size=\"256\"/><Column id=\"수급자명\" type=\"STRING\" size=\"256\"/><Column id=\"수납일자\" type=\"STRING\" size=\"256\"/><Column id=\"수납금액\" type=\"STRING\" size=\"256\"/><Column id=\"수납소계\" type=\"STRING\" size=\"256\"/><Column id=\"납부구분\" type=\"STRING\" size=\"256\"/><Column id=\"의료구분\" type=\"STRING\" size=\"256\"/><Column id=\"기관기호\" type=\"STRING\" size=\"256\"/><Column id=\"기관명\" type=\"STRING\" size=\"256\"/><Column id=\"수급코드\" type=\"STRING\" size=\"256\"/><Column id=\"그룹\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0","1840","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","100","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            obj.set_displayinvalidtext("invaild value");
            obj.set_tabstop("false");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","240","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_displayinvalidtext("invaild value");
            obj.set_tabstop("false");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from_pic","189","7","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic","329","7","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","70","26","1405",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_one_week","540","7","40","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("1주일");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_half_of_month","585","7","40","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("15일");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_one_month","630","7","40","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("1개월");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_three_month","675","7","40","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("3개월");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prev","450","7","40","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("전월");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_now","495","7","40","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("당월");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_q1","765","7","40","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("1분기");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_q2","810","7","40","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("2분기");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_q3","855","7","40","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("3분기");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_q4","900","7","40","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("4분기");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_sort","1001","7","100","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_sort");
            obj.set_codecolumn("cbcode");
            obj.set_datacolumn("cbname");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_report2","1210","7","150","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_text("수급자별 진료기록");
            obj.set_cssclass("btn_print");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_report3","1370","7","150","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_text("수급자별 청구기록");
            obj.set_cssclass("btn_print");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_report4","1530","7","140","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_text("청구기록리스트");
            obj.set_cssclass("btn_print");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_excel","1680","7","160","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("청구의료비(년_청구)");
            obj.set_cssclass("btn_excel");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_report1","1110","7","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_text("진료기록");
            obj.set_cssclass("btn_print");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_year","10","7","80","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("cbcode");
            obj.set_datacolumn("cbname");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","221","11","13","18",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_half_of_year","720","7","40","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_text("6개월");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_grd","0","40","1840","730",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_person","10","0","600","700",null,null,null,null,null,null,this.div_grd.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list_person");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"18\"/><Column size=\"25\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell border=\"1px solid #cccccc, 1px none #cccccc, 1px solid #cccccc, 1px solid #cccccc\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"출력\"/><Cell col=\"2\" text=\"현황\"/><Cell col=\"3\" text=\"그룹\"/><Cell col=\"4\" text=\"수급자명\"/><Cell col=\"5\" text=\"성별\"/><Cell col=\"6\" text=\"등급\"/><Cell col=\"7\" text=\"생활실\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" border=\"1px solid #e2e2e2\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:chk\"/><Cell col=\"2\" text=\"bind:s_nm\"/><Cell col=\"3\" text=\"bind:m_group\"/><Cell col=\"4\" text=\"bind:m_name\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:sex_nm\"/><Cell col=\"6\" text=\"bind:bm_grade_nm\"/><Cell col=\"7\" text=\"bind:m_roomname\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_grd.addChild(obj.name, obj);

            obj = new Grid("grd_log","620","0","1220","700",null,null,null,null,null,null,this.div_grd.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list_log");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"진료일\"/><Cell col=\"1\" text=\"진료시간\"/><Cell col=\"2\" text=\"그룹\"/><Cell col=\"3\" text=\"수급자명\"/><Cell col=\"4\" text=\"병의원명\"/><Cell col=\"5\" text=\"진료내용\"/><Cell col=\"6\" text=\"진료비\"/><Cell col=\"7\" text=\"구분\"/><Cell col=\"8\" text=\"약제비\"/><Cell col=\"9\" text=\"구분\"/></Band><Band id=\"body\"><Cell text=\"bind:진료일\" calendardateformat=\"yyyy.MM.dd\"/><Cell col=\"1\" text=\"bind:진료시간\"/><Cell col=\"2\" text=\"bind:m_group\"/><Cell col=\"3\" text=\"bind:거주자명\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:병의원명\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:진료내용\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:진료금액\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:진료청구명\"/><Cell col=\"8\" text=\"bind:투약금액\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:투약청구명\"/></Band></Format></Formats>");
            this.div_grd.addChild(obj.name, obj);

            obj = new Grid("grd_excel","-475","20","439","200",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_excel");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"105\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"225\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"주민번호\" background=\"white\" textAlign=\"left\"/><Cell col=\"1\" text=\"수급자명\" background=\"white\" textAlign=\"left\"/><Cell col=\"2\" text=\"수납일자\" background=\"white\" textAlign=\"left\"/><Cell col=\"3\" text=\"수납금액\" background=\"white\" textAlign=\"left\"/><Cell col=\"4\" text=\"수급자소계\" background=\"white\" textAlign=\"left\"/><Cell col=\"5\" text=\"납부구분\" background=\"white\" textAlign=\"left\"/><Cell col=\"6\" text=\"의료구분\" background=\"white\" textAlign=\"left\"/><Cell col=\"7\" text=\"기관기호\" background=\"white\" textAlign=\"left\"/><Cell col=\"8\" text=\"기관명\" background=\"white\" textAlign=\"left\"/><Cell col=\"9\" text=\"수급코드\" background=\"white\" textAlign=\"left\"/><Cell col=\"10\" text=\"그룹\" background=\"white\" textAlign=\"left\"/><Cell col=\"11\" text=\"성별\" background=\"white\" textAlign=\"left\"/><Cell col=\"12\" text=\"작성자명\" background=\"white\" textAlign=\"left\"/></Band><Band id=\"body\"><Cell text=\"bind:주민번호\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:수급자명\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:수납일자\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:수납금액\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:수납소계\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:납부구분\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:의료구분\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:기관기호\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:기관명\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:수급코드\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:그룹\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:성별\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:작성자명\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.cal_date_from","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_to","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cal_date_from_pic","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.cal_date_to_pic","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cmb_year","value","ds_search","year");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.cmb_sort","value","ds_sort_out","sort");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00209.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00209.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00209.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00202
         * 화면명   	: 2-9 수급자 병의원진료기록
         * 화면설명 	: 수급자 진료기록 조회
         * 작성일   	: 2022-06-15
         * 작성자   	: 정준우
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
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // onload
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);
        	//현재 날짜
        	const now = new Date();
        	//현재 년도
        	const year = now.getFullYear();
        	//현재 월
        	let month = now.getMonth()+1;
        	if (month<10)
        	{
        		month = "0" + month.toString();
        	}


        	//콤보박스 내부 데이터 제거
        	this.ds_year.clearData();
        	//현재년도+10년 추가
        	for(var i=0;i<10;i++) {
        			this.ds_year.addRow();
        			this.ds_year.setColumn(i,0,year+i);
        			this.ds_year.setColumn(i,1,year+i+"년");
        	}

        	//sort 초기값 설정
        	this.ds_sort.clearData();
        	this.ds_sort.addRow();
        	this.ds_sort.setColumn(0,0,'진료일');
        	this.ds_sort.setColumn(0,1,'1-진료일순');

        	this.ds_sort.addRow();
        	this.ds_sort.setColumn(1,0,'거주자명');
        	this.ds_sort.setColumn(1,1,'2-수급자명');

        	this.ds_sort_out.clearData();
        	this.ds_sort_out.addRow();
        	this.ds_sort_out.setColumn(0,0,'진료일');
        	//현재년도 -10년 추가
        	for(var i=1;i<11;i++) {
        			this.ds_year.insertRow();
        			this.ds_year.setColumn(0,0,year-i);
        			this.ds_year.setColumn(0,1,year-i+"년");
        	}
        	//현재 날짜
        	let today = Sct.Util.getToday();
        	let ym = today.substr(0,6);

        	//말일
        	let lastDay = Sct.Util.getLastDay(ym);

        	//초기 조건 설정
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0,"sicode",fv_sicode);
        	this.ds_search.setColumn(0,"year",year);
        	this.ds_search.setColumn(0,"date_from",ym+"01" );
        	this.ds_search.setColumn(0,"date_to", lastDay);


        	//그리드(수급자) 적용
        	var grd = this.div_grd.form.grd_person;
        	var nameIdx = grd.getBindCellIndex("body","m_name");
        	var snmIdx = grd.getBindCellIndex("body","s_nm");
        	var nameCss = "expr:sex_nm=='남'?'cellBMan':'cellBWoman'";
        	var snmCss = "expr:s_nm=='퇴소자'?'cellBRetire':''";
        	grd.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grd.setCellProperty("body", snmIdx, "cssclass", snmCss);

        	let chkExpr = "expr:chk==0? '' : 'cellBWoman'";
        	grd.setCellProperty("body", 0, "cssclass", chkExpr);
        	//그리드(진료기록) 적용
        	let grdLog = this.div_grd.form.grd_log;
        	let mediIdx = grdLog.getBindCellIndex("body", "진료청구명");
        	let drugIdx = grdLog.getBindCellIndex("body", "투약청구명");
        	let mediCss = "expr:진료청구명 == '월별청구' ? 'RedFontCell' : ''";
        	let drugCss = "expr:투약청구명 == '월별청구' ? 'RedFontCell' : ''";
        	grdLog.setCellProperty("body", mediIdx, "cssclass", mediCss);
        	grdLog.setCellProperty("body", drugIdx, "cssclass", drugCss);

        	let mediExIdx = grdLog.getBindCellIndex("body", "진료금액");
        	let drugExIdx = grdLog.getBindCellIndex("body", "투약금액");
        	let mediEx = "expr:진료금액 == 0 ? 'none' : 'normal'";
        	let drugEx = "expr:투약금액 == 0 ? 'none' : 'normal'";
        	grdLog.setCellProperty("body", mediExIdx, "displaytype", mediEx);
        	grdLog.setCellProperty("body", drugExIdx, "displaytype", drugEx);

        	//조회
        	this.fn_search("search");
        	this.fn_search_log("searchLog");
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
        	return true;
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
         	var outDatasets = "ds_list_person=output1";
         	var argument = "method=getList "
         				 + "sqlId=DAY00209.DAY00209_DS_LIST_PERSON_S ";
         	var callbackFunc = "fn_callback";
         	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }
        //진료기록조회
        this.fn_search_log = function (flag)
        {
        	if (!this.fn_search_pre())
         	{
         		return;
         	}

         	var svcId = flag;
         	var params = "/commonController.do";
         	var inDatasets = "input1=ds_search";
         	var outDatasets = "ds_list_log=output1";
         	var argument = "method=getList "
         				 + "sqlId=DAY00209.DAY00209_DS_LIST_LOG_S ";
         	var callbackFunc = "fn_callback";
         	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //엑셀 조회(다운로드)
        this.div_search_btn_excel_onclick = function(obj,e)
        {
        	var svcId = "excel";
         	var params = "/commonController.do";
         	var inDatasets = "input1=ds_search";
         	var outDatasets = "ds_excel=output1";
         	var argument = "method=getList "
         				 + "sqlId=DAY00209.DAY00209_DS_EXCEL_S ";
         	var callbackFunc = "fn_callback";
         	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };


        //콜백
        this.fn_callback = function (strSvcId, nErrorCode, strErrorMsg)
        {	//0 이면 트랜잭션 성공
        	if (nErrorCode == 0)
        	{
        		if (strSvcId == "search")
        		{

        		}
        		else if(strSvcId == "searchLog")
        		{
        			if(this.ds_list_log.rowcount <1)
        			{
        				this.alert("정보를 조회하지 못했습니다 !");
        				return ;
        			}
        		}
        		else if (strSvcId == "excel")
        		{
        			let strFileName = "청구의료비_";
        			const date = this.ds_search.getColumn(0, "year");

        			strFileName += (date + "년");
        			Sct.Grid.exportExcel(this, this.grd_excel, strFileName);
        		}
        	}
        	else
        	{
        		Sct.alert(this,"",strErrorMsg);
        	}
        };
        /************************************************************************
         * Component Event
         ************************************************************************/

        //콤보박스 체인지 이벤트
        this.div_search_cmb_year_onitemchanged = function(obj,e)
        {
        	let dateF = e.postvalue + "0101";
        	let dateT = e.postvalue + "1231";
        	this.ds_search.setColumn(0,"date_from", dateF);
        	this.ds_search.setColumn(0,"date_to", dateT);
        	this.fn_search("search");
        	this.fn_search_log("searchLog");
        };

        //달력 체인지 이벤트
        this.div_search_cal_date_from_pic_onchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0,"date_from", e.postvalue);
        };
        this.div_search_cal_date_to_pic_onchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0,"date_to", e.postvalue);
        };

        //조회버튼
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	this.ds_list_person.clearData();
        	this.ds_list_log.clearData();
        	//date 타입 데이터
        	let fday = this.ds_search.getColumn(0,"date_from");
        	let tday = this.ds_search.getColumn(0,"date_to");
        	//두 날짜의 차를 계산
        	let diff = tday.getTime() - fday.getTime();

        	//일 수로 계산 - 하루의 밀리초(1000* 3600 * 24) 를 나눠서 계산
        	//abs로 절대값 계산
        	let diffDate = Math.abs(diff / (1000 * 3600 * 24));

        	if (diffDate > 365 )
        	{
        		this.alert("조회기간은 1년 이내입니다. !");
        		return;
        	}
        	this.fn_search("search");
        	this.fn_search_log("searchLog");
        };
        //전월
        this.div_search_btn_prev_onclick = function(obj,e)
        {
        	let today = Sct.Util.getToday();
        	let month = Sct.Util.addMonth(today,-1);//1개월 전
        	let ym = month.substr(0,6);
        	let lastDay = Sct.Util.getLastDay(ym);

        	this.ds_search.setColumn(0,"date_from", ym + '01');
        	this.ds_search.setColumn(0,"date_to", lastDay);
        	this.ds_search.setColumn(0,"year", today.substr(0,4));

        	this.ds_list_person.clearData();
        	this.ds_list_log.clearData();
        	this.fn_search("search");
        	this.fn_search_log("searchLog");
        };
        //당월
        this.div_search_btn_now_onclick = function(obj,e)
        {
        	let today = Sct.Util.getToday();
        	let ym = today.substr(0,6);
        	let lastDay = Sct.Util.getLastDay(ym);

        	this.ds_search.setColumn(0,"date_from", ym + '01');
        	this.ds_search.setColumn(0,"date_to", lastDay);
        	this.ds_search.setColumn(0,"year", today.substr(0,4));

        	this.ds_list_person.clearData();
        	this.ds_list_log.clearData();
        	this.fn_search("search");
        	this.fn_search_log("searchLog");
        };
        //1주일
        this.div_search_btn_one_week_onclick = function(obj,e)
        {
        	let today = Sct.Util.getToday();
        	let dateF = Sct.Util.getWeekDay(today,0);
        	let dateT = Sct.Util.getWeekDay(today,6);

        	this.ds_search.setColumn(0,"date_from", dateF);
        	this.ds_search.setColumn(0,"date_to", dateT);
        	this.ds_search.setColumn(0,"year", today.substr(0,4));

        	this.ds_list_person.clearData();
        	this.ds_list_log.clearData();
        	this.fn_search("search");
        	this.fn_search_log("searchLog");
        };
        //15일
        this.div_search_btn_half_of_month_onclick = function(obj,e)
        {
        	let today = Sct.Util.getToday();
        	let dateF = Sct.Util.addDate(today,-14);

        	this.ds_search.setColumn(0,"date_from", dateF);
        	this.ds_search.setColumn(0,"date_to", today);
        	this.ds_search.setColumn(0,"year", today.substr(0,4));

        	this.ds_list_person.clearData();
        	this.ds_list_log.clearData();
        	this.fn_search("search");
        	this.fn_search_log("searchLog");
        };
        //1개월
        this.div_search_btn_one_month_onclick = function(obj,e)
        {
        	let today = Sct.Util.getToday();
        	let ym =today.substr(0,6);
        	let dateF = ym+'01';
        	let dateT = Sct.Util.getLastDay(ym);

        	this.ds_search.setColumn(0,"date_from", dateF);
        	this.ds_search.setColumn(0,"date_to", dateT);
        	this.ds_search.setColumn(0,"year", today.substr(0,4));

        	this.ds_list_person.clearData();
        	this.ds_list_log.clearData();
        	this.fn_search("search");
        	this.fn_search_log("searchLog");
        };
        //3개월
        this.div_search_btn_three_month_onclick = function(obj,e)
        {
        	let today = Sct.Util.getToday();
        	let _ym = today.substr(0,6);
        	let month = Sct.Util.addMonth(today,-2);
        	let ym =month.substr(0,6);

        	let dateF = ym+'01';
        	let dateT = Sct.Util.getLastDay(_ym);

        	this.ds_search.setColumn(0,"date_from", dateF);
        	this.ds_search.setColumn(0,"date_to", dateT);
        	this.ds_search.setColumn(0,"year", today.substr(0,4));

        	this.ds_list_person.clearData();
        	this.ds_list_log.clearData();
        	this.fn_search("search");
        	this.fn_search_log("searchLog");
        };
        //6개월
        this.div_search_btn_half_of_year_onclick = function(obj,e)
        {
        	let today = Sct.Util.getToday();
        	let _ym = today.substr(0,6);
        	let month = Sct.Util.addMonth(today,-5);
        	let ym =month.substr(0,6);

        	let dateF = ym+'01';
        	let dateT = Sct.Util.getLastDay(_ym);

        	this.ds_search.setColumn(0,"date_from", dateF);
        	this.ds_search.setColumn(0,"date_to", dateT);
        	this.ds_search.setColumn(0,"year", today.substr(0,4));

        	this.ds_list_person.clearData();
        	this.ds_list_log.clearData();
        	this.fn_search("search");
        	this.fn_search_log("searchLog");
        };
        //1분기
        this.div_search_btn_q1_onclick = function(obj,e)
        {
        	let year = this.ds_search.getColumn(0,"year");
        	let dateF = year + '0101';
        	let dateT = year + '0331';

        	this.ds_search.setColumn(0,"date_from", dateF);
        	this.ds_search.setColumn(0,"date_to", dateT);

        	this.ds_list_person.clearData();
        	this.ds_list_log.clearData();
        	this.fn_search("search");
        	this.fn_search_log("searchLog");
        };
        //2분기
        this.div_search_btn_q2_onclick = function(obj,e)
        {
        	let year = this.ds_search.getColumn(0,"year");
        	let dateF = year + '0401';
        	let dateT = year + '0630';

        	this.ds_search.setColumn(0,"date_from", dateF);
        	this.ds_search.setColumn(0,"date_to", dateT);

        	this.ds_list_person.clearData();
        	this.ds_list_log.clearData();
        	this.fn_search("search");
        	this.fn_search_log("searchLog");
        };
        //3분기
        this.div_search_btn_q3_onclick = function(obj,e)
        {
        	let year = this.ds_search.getColumn(0,"year");
        	let dateF = year + '0701';
        	let dateT = year + '0930';

        	this.ds_search.setColumn(0,"date_from", dateF);
        	this.ds_search.setColumn(0,"date_to", dateT);

        	this.ds_list_person.clearData();
        	this.ds_list_log.clearData();
        	this.fn_search("search");
        	this.fn_search_log("searchLog");
        };
        //4분기
        this.div_search_btn_q4_onclick = function(obj,e)
        {
        	let year = this.ds_search.getColumn(0,"year");
        	let dateF = year + '1001';
        	let dateT = year + '1231';

        	this.ds_search.setColumn(0,"date_from", dateF);
        	this.ds_search.setColumn(0,"date_to", dateT);

        	this.ds_list_person.clearData();
        	this.ds_list_log.clearData();
        	this.fn_search("search");
        	this.fn_search_log("searchLog");
        };

        /************************************************************************
         * Report Func
         ************************************************************************/
        //chk box
        this.fn_chkValid = function ()
        {
        	let rows = new Array();
        	let j=0;
        	for(let i=0;i<this.ds_list_person.rowcount;i++)
        	{
        		if (this.ds_list_person.getColumn(i,"chk") == 1)
        			rows[j++] = i;
        	}
        	if (rows.length < 1)
        	{
        		this.alert("정보를 조회하지 못했습니다. !");
        		return;
        	}
        	return rows;
        };

        //진료기록
        this.div_search_btn_report1_onclick = function(obj,e)
        {
        	//체크박스 선택 없으면 출력x
        	let rows = this.fn_chkValid();
        	let mCodes = new Array();
        	let j=0;
        	for(let i=0;i<rows.length;i++)
        		mCodes[j++] = this.ds_list_person.getColumn(rows[i],"m_code");
        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00209_R01.xfdl";
        	const popupName = "진료기록";

        	//결재란 항상 존재
        	let sign = 1;

        	params = {
        		sicode : fv_sicode
        	,	dateF : this.ds_search.getColumn(0, "date_from")
        	,	dateT : this.ds_search.getColumn(0, "date_to")
        	,	sort : this.ds_sort_out.getColumn(0,"sort")
        	,	mCodes : mCodes
        	,	sign : sign
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };
        //수급자별 진료기록
        this.div_search_btn_report2_onclick = function(obj,e)
        {
        	//체크박스 선택 없으면 출력x
        	let rows = this.fn_chkValid();
        	let mCodes = new Array();
        	let j=0;
        	for(let i=0;i<rows.length;i++)
        		mCodes[j++] = this.ds_list_person.getColumn(rows[i],"m_code");
        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00209_R02.xfdl";
        	const popupName = "진료기록";

        	//결재란 항상 존재
        	let sign = 1;

        	params = {
        		sicode : fv_sicode
        	,	dateF : this.ds_search.getColumn(0, "date_from")
        	,	dateT : this.ds_search.getColumn(0, "date_to")
        	,	sort : this.ds_sort_out.getColumn(0,"sort")
        	,	mCodes : mCodes
        	,	sign : sign
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };
        //수급자별 청구기록
        this.div_search_btn_report3_onclick = function(obj,e)
        {
        	//체크박스 선택 없으면 출력x
        	let rows = this.fn_chkValid();
        	let mCodes = new Array();
        	let j=0;
        	for(let i=0;i<rows.length;i++)
        		mCodes[j++] = this.ds_list_person.getColumn(rows[i],"m_code");

        	//월별청구 체크
        	this.ds_rowdupl.copyData(this.ds_list_log);
        	this.ds_rowdupl.clearData();
        	this.ds_rowdupl.addRow();
        	this.ds_valid.copyData(this.ds_list_log);
        	this.ds_valid.clearData();

        	for(let i=0;i<mCodes.length;i++){
        		for(let k=0;k<this.ds_list_log.rowcount;k++){
        			if (mCodes[i] == this.ds_list_log.getColumn(k,"거주코드"))
        			{
        				this.ds_rowdupl.copyRow(0,this.ds_list_log,k);
        				this.ds_valid.appendData(this.ds_rowdupl);
        			}
        		}
        	}
        	let mCodesVal = new Array();
        	let k=0;
        	for(let i=0;i<this.ds_valid.rowcount;i++){
        		if (this.ds_valid.getColumn(i,"진료청구") == 2 || this.ds_valid.getColumn(i,"투약청구") == 2 )
        		{
        			mCodesVal[k++] = this.ds_valid.getColumn(i,"거주코드");
        		}
        	}
        	if (mCodesVal.length < 1)
        	{
        		this.alert("정보를 조회하지 못했습니다. !");
        		return;
        	}

        	let mCodesArr = Array.from(new Set(mCodesVal))

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00209_R03.xfdl";
        	const popupName = "진료기록";

        	//결재란 항상 존재
        	let sign = 1;

        	params = {
        		sicode : fv_sicode
        	,	dateF : this.ds_search.getColumn(0, "date_from")
        	,	dateT : this.ds_search.getColumn(0, "date_to")
        	,	sort : this.ds_sort_out.getColumn(0,"sort")
        	,	mCodes : mCodesArr
        	,	sign : sign
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };
        //청구기록 리스트
        this.div_search_btn_report4_onclick = function(obj,e)
        {
        	//체크박스 선택 없으면 출력x
        	let rows = this.fn_chkValid();
        	let mCodes = new Array();
        	let j=0;
        	for(let i=0;i<rows.length;i++)
        		mCodes[j++] = this.ds_list_person.getColumn(rows[i],"m_code");

        	//월별청구 체크
        	this.ds_rowdupl.copyData(this.ds_list_log);
        	this.ds_rowdupl.clearData();
        	this.ds_rowdupl.addRow();
        	this.ds_valid.copyData(this.ds_list_log);
        	this.ds_valid.clearData();

        	for(let i=0;i<mCodes.length;i++){
        		for(let k=0;k<this.ds_list_log.rowcount;k++){
        			if (mCodes[i] == this.ds_list_log.getColumn(k,"거주코드"))
        			{
        				this.ds_rowdupl.copyRow(0,this.ds_list_log,k);
        				this.ds_valid.appendData(this.ds_rowdupl);
        			}
        		}
        	}
        	let mCodesVal = new Array();
        	let k=0;
        	for(let i=0;i<this.ds_valid.rowcount;i++){
        		if (this.ds_valid.getColumn(i,"진료청구") == 2 || this.ds_valid.getColumn(i,"투약청구") == 2 )
        		{
        			mCodesVal[k++] = this.ds_valid.getColumn(i,"거주코드");
        		}
        	}
        	if (mCodesVal.length < 1)
        	{
        		this.alert("정보를 조회하지 못했습니다. !");
        		return;
        	}

        	let mCodesArr = Array.from(new Set(mCodesVal))

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00209_R04.xfdl";
        	const popupName = "진료기록";

        	//결재란 항상 존재
        	let sign = 1;

        	params = {
        		sicode : fv_sicode
        	,	dateF : this.ds_search.getColumn(0, "date_from")
        	,	dateT : this.ds_search.getColumn(0, "date_to")
        	,	sort : this.ds_sort_out.getColumn(0,"sort")
        	,	mCodes : mCodesArr
        	,	sign : sign
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.cal_date_from_pic.addEventHandler("onchanged",this.div_search_cal_date_from_pic_onchanged,this);
            this.div_search.form.cal_date_to_pic.addEventHandler("onchanged",this.div_search_cal_date_to_pic_onchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.div_search_btn_search_onclick,this);
            this.div_search.form.btn_one_week.addEventHandler("onclick",this.div_search_btn_one_week_onclick,this);
            this.div_search.form.btn_half_of_month.addEventHandler("onclick",this.div_search_btn_half_of_month_onclick,this);
            this.div_search.form.btn_one_month.addEventHandler("onclick",this.div_search_btn_one_month_onclick,this);
            this.div_search.form.btn_three_month.addEventHandler("onclick",this.div_search_btn_three_month_onclick,this);
            this.div_search.form.btn_prev.addEventHandler("onclick",this.div_search_btn_prev_onclick,this);
            this.div_search.form.btn_now.addEventHandler("onclick",this.div_search_btn_now_onclick,this);
            this.div_search.form.btn_q1.addEventHandler("onclick",this.div_search_btn_q1_onclick,this);
            this.div_search.form.btn_q2.addEventHandler("onclick",this.div_search_btn_q2_onclick,this);
            this.div_search.form.btn_q3.addEventHandler("onclick",this.div_search_btn_q3_onclick,this);
            this.div_search.form.btn_q4.addEventHandler("onclick",this.div_search_btn_q4_onclick,this);
            this.div_search.form.btn_report2.addEventHandler("onclick",this.div_search_btn_report2_onclick,this);
            this.div_search.form.btn_report3.addEventHandler("onclick",this.div_search_btn_report3_onclick,this);
            this.div_search.form.btn_report4.addEventHandler("onclick",this.div_search_btn_report4_onclick,this);
            this.div_search.form.btn_excel.addEventHandler("onclick",this.div_search_btn_excel_onclick,this);
            this.div_search.form.btn_report1.addEventHandler("onclick",this.div_search_btn_report1_onclick,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.div_search_cmb_year_onitemchanged,this);
            this.div_search.form.btn_half_of_year.addEventHandler("onclick",this.div_search_btn_half_of_year_onclick,this);
        };
        this.loadIncludeScript("DAY00209.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
