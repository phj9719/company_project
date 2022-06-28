(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00220");
            this.set_titletext("2-10 투약전달기록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"kmmark\" type=\"INT\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_autoid\" type=\"INT\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_grade\" type=\"INT\" size=\"256\"/><Column id=\"등급\" type=\"STRING\" size=\"256\"/><Column id=\"m_level\" type=\"INT\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"week_from_to\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"DATE\" size=\"256\"/><Column id=\"date_from\" type=\"DATE\" size=\"256\"/><Column id=\"date_to\" type=\"DATE\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"date_week_from\" type=\"DATE\" size=\"256\"/><Column id=\"date_week_to\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"sign\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"donumber\" type=\"INT\" size=\"256\"/><Column id=\"docoed\" type=\"STRING\" size=\"256\"/><Column id=\"doname\" type=\"STRING\" size=\"256\"/><Column id=\"donalja\" type=\"DATE\" size=\"256\"/><Column id=\"투약명\" type=\"STRING\" size=\"256\"/><Column id=\"투약량\" type=\"INT\" size=\"256\"/><Column id=\"투약증상\" type=\"STRING\" size=\"256\"/><Column id=\"투약방법\" type=\"STRING\" size=\"256\"/><Column id=\"투약담당\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/><Column id=\"b_01\" type=\"STRING\" size=\"256\"/><Column id=\"b_02\" type=\"STRING\" size=\"256\"/><Column id=\"l_01\" type=\"STRING\" size=\"256\"/><Column id=\"l_02\" type=\"STRING\" size=\"256\"/><Column id=\"d_01\" type=\"STRING\" size=\"256\"/><Column id=\"d_02\" type=\"STRING\" size=\"256\"/><Column id=\"e_01\" type=\"STRING\" size=\"256\"/><Column id=\"e_02\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_chk", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"kmmark\" type=\"INT\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_autoid\" type=\"INT\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"m_grade\" type=\"INT\" size=\"256\"/><Column id=\"등급\" type=\"STRING\" size=\"256\"/><Column id=\"m_level\" type=\"INT\" size=\"256\"/><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"week_from_to\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data_chk", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"donumber\" type=\"INT\" size=\"256\"/><Column id=\"docoed\" type=\"STRING\" size=\"256\"/><Column id=\"doname\" type=\"STRING\" size=\"256\"/><Column id=\"donalja\" type=\"DATE\" size=\"256\"/><Column id=\"투약명\" type=\"STRING\" size=\"256\"/><Column id=\"투약량\" type=\"INT\" size=\"256\"/><Column id=\"투약증상\" type=\"STRING\" size=\"256\"/><Column id=\"투약방법\" type=\"STRING\" size=\"256\"/><Column id=\"투약담당\" type=\"STRING\" size=\"256\"/><Column id=\"담당코드\" type=\"STRING\" size=\"256\"/><Column id=\"b_01\" type=\"STRING\" size=\"256\"/><Column id=\"b_02\" type=\"STRING\" size=\"256\"/><Column id=\"l_01\" type=\"STRING\" size=\"256\"/><Column id=\"l_02\" type=\"STRING\" size=\"256\"/><Column id=\"d_01\" type=\"STRING\" size=\"256\"/><Column id=\"d_02\" type=\"STRING\" size=\"256\"/><Column id=\"e_01\" type=\"STRING\" size=\"256\"/><Column id=\"e_02\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","50",null,null,"0.00%","0%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","450",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"30\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"112\"/><Column size=\"40\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cursor=\"pointer\"/><Cell col=\"1\" text=\"출력\"/><Cell col=\"2\" text=\"현황\"/><Cell col=\"3\" text=\"그룹\"/><Cell col=\"4\" text=\"수급자\"/><Cell col=\"5\" text=\"성별\"/><Cell col=\"6\" text=\"생활실\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cursor=\"pointer\" text=\"bind:chk\"/><Cell col=\"2\" text=\"bind:거주현황\"/><Cell col=\"3\" text=\"bind:m_group\"/><Cell col=\"4\" text=\"bind:m_name\" textAlign=\"left\" cssclass=\"cellBWoman\" cursor=\"pointer\" expandchar=\"dot\" font=\"normal bold 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"5\" text=\"bind:성별\"/><Cell col=\"6\" text=\"bind:m_roomname\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","460","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_data","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/></Columns><Rows><Row size=\"21\" band=\"head\"/><Row size=\"21\"/></Rows><Band id=\"head\"><Cell text=\"투약일\"/><Cell col=\"1\" text=\"수급자\"/><Cell col=\"2\" text=\"투약명\"/><Cell col=\"3\" text=\"투약량\"/><Cell col=\"4\" text=\"투약효능\"/><Cell col=\"5\" text=\"아침전\"/><Cell col=\"6\" text=\"아침후\"/><Cell col=\"7\" text=\"점심전\"/><Cell col=\"8\" text=\"점심후\"/><Cell col=\"9\" text=\"저녁전\"/><Cell col=\"10\" text=\"저녁후\"/><Cell col=\"11\" text=\"취침전\"/><Cell col=\"12\" text=\"필요시\"/><Cell col=\"13\" text=\"투약전달\"/></Band><Band id=\"body\"><Cell text=\"bind:donalja\" expandchar=\"dot\" displaytype=\"date\"/><Cell col=\"1\" text=\"bind:doname\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:투약명\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:투약량\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.00\"/><Cell col=\"4\" text=\"bind:투약증상\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:b_01\"/><Cell col=\"6\" text=\"bind:b_02\"/><Cell col=\"7\" text=\"bind:l_01\"/><Cell col=\"8\" text=\"bind:l_02\"/><Cell col=\"9\" text=\"bind:d_01\"/><Cell col=\"10\" text=\"bind:d_02\"/><Cell col=\"11\" text=\"bind:e_01\"/><Cell col=\"12\" text=\"bind:e_02\"/><Cell col=\"13\" text=\"bind:투약담당\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","450","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"14","70","26","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_e","216","14","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("E");
            obj.set_background("darkgray");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_d","176","14","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("D");
            obj.set_background("darkgray");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_c","136","14","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("C");
            obj.set_background("darkgray");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_b","96","14","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("B");
            obj.set_background("darkgray");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_a","56","14","35","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("A");
            obj.set_background("darkgray");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_grp_all","1","14","50","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("전체");
            obj.set_background("darkgray");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","260","14","90","26",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to_pic","349","14","25","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Div("div_func","460","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_report1","813","5","200","35",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("일일 투약전달일지");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report3","1232","5","198","35",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("수급자 월간 투약전달일지");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","10","14","250","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("투약전달 기록일지");
            obj.set_cssclass("lb01");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report2","1022","5","200","35",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("수급자 주간투약전달일지");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","cal_date_to","value","ds_search","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.cal_date_to_pic","value","ds_search","DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cal_date_to_pic","value","ds_search","date");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00220_copy0.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00220_copy0.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00220_copy0.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00210
         * 화면명   	: 2-10 투약기록일지
         * 화면설명 	:
         * 작성일   	: 2022-05-25
         * 작성자   	: 이동관
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	  20220620      이동관     10에서 20으로 변경
         ***********************************************************************/
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_list;
        this.fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        this.grp_btns = [];	// 그룹 버튼 A,B,C,D,E,전체 배열
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	//버튼 초기화
        	this.fn_make_grp_btns_array();
        	this.grp_btns[0].set_background("red");

        	//검색조건 초기화
        	this.ds_search.setColumn(0,"m_group", this.grp_btns[0].text);
        	this.ds_search.setColumn(0, "sicode", this.fv_sicode)
        	this.ds_search.setColumn(0, "date", Sct.Util.getToday());
        	this.initDate(Sct.Util.getToday());

        	// 그리드 설정
        	this.fn_setMainGrid();

        	this.fn_search();
        };

        this.fn_setMainGrid = function()
        {
        	var grdMain = this.div_cont.form.div_left.form.grd_list;

        	var nameIdx = grdMain.getBindCellIndex("body","m_name");
        	var snmIdx = grdMain.getBindCellIndex("body","거주현황");

        	var nameCss = "expr:dataset.getColumn(currow,'성별') == '남' ? 'cellBMan' : 'cellBWoman'";
        	var snmCss = "expr:dataset.getColumn(currow,'거주현황')== '퇴소자' ? 'cellBRetire': '' ";

        	grdMain.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grdMain.setCellProperty("body", snmIdx, "cssclass", snmCss);
        }

        this.fn_make_grp_btns_array = function()
        {
        	let button_a = this.div_search.form.btn_grp_a;
        	let button_b = this.div_search.form.btn_grp_b;
        	let button_c = this.div_search.form.btn_grp_c;
        	let button_d = this.div_search.form.btn_grp_d;
        	let button_e = this.div_search.form.btn_grp_e;
        	let button_all = this.div_search.form.btn_grp_all;

        	this.grp_btns = [button_all,button_a,button_b,button_c,button_d,button_e];
        }

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	// 검색조건 필수 체크 (컴포넌트 tooltiptext 값 넣을 것)
        	if (!this.gfn_findSnull(this.div_search)) return false;
        	return true;
        };


        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function ()
        {
        	//validation
        	if (!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search input2=ds_search";
        	const outDatasets = "ds_list=output1 ds_data=output2";
        	const argument = "method=getList "
        				   + "sqlId='DAY00220.DAY00220_DS_LIST_S DAY00220.DAY00210_DS_DATA_S' ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg){
        	if (nErrorCode == 0){
        		if (strSvcID == "search"){
        			this.div_cont.form.div_left.form.grd_list.setCellProperty("head", 0, "text", "0");
        		}
        	}
        	else{
        		this.alert(strErrorMsg);
        	}
        };
        /***********************************************************************
         * User Functions
         ***********************************************************************/
        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        //출력
        this.fn_report_pre = function()
        {
        	return true;
        }

        //일일 투약전달일지 리포트
        this.fn_report1 = function()
        {
        	if(Sct.Util.isEmpty(this.ds_search.getColumn(0, "date"))){
        		this.alert("출력할 내용이 없습니다.");
        		return false;
        	}

        	const svcId = "search";
        	const transactionParams = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_data_chk=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00220.DAY0020_DS_DATA_CHK_S' ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, transactionParams, inDatasets, outDatasets, argument, callbackFunc, null, false);

        	let mCode = "";

        	if(this.ds_data_chk.rowcount == 0){
        		this.alert("출력할 내용이 없습니다.");
        		return false;
        	}

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00220_R01.xfdl";
        	const popupName = "일일 투약전달일지";

        	params = {
        		sicode : this.ds_search.getColumn(0, "sicode")
        	,	date : this.ds_search.getColumn(0, "date")
        	,   sign : "1"

        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        }


        //수급자 주간투약전달일지 리포트
        this.fn_report2 = function(obj,e)
        {
        	if(Sct.Util.isEmpty(this.ds_search.getColumn(0, "date_week_from"))){
        		this.alert("출력할 내용이 없습니다.");
        		return false;
        	}

        	if(Sct.Util.isEmpty(this.ds_search.getColumn(0, "date_week_to"))){
        		this.alert("출력할 내용이 없습니다.");
        		return false;
        	}

        	let cnt = 0;

        	for(let i = 0; i<this.ds_list.rowcount; i++){
        		if(this.ds_list.getColumn(i, "chk") == 1){
        			cnt += 1;
        		}
        	}

        	if(cnt == 0){
        		alert("수급자를 선택해야합니다!");
        		return false;
        	}

        	const svcId = "search";
        	const transactionParams = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list_chk=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00220.DAY00220_DS_LIST_CHK_S' ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, transactionParams, inDatasets, outDatasets, argument, callbackFunc, null, false);

        	let mCode = "";

        	if(this.ds_list_chk.rowcount == 0){
        		this.alert("출력할 내용이 없습니다.");
        		return false;
        	}

        	for(let i = 0; i<this.ds_list_chk.rowcount; i++){
        		if(this.ds_list.getColumn(i, "chk") == 1){
        			let _code = this.ds_list.getColumn(i,"m_code");
        			mCode += (_code + ",");
        		}
        	}
        	mCode = mCode.substring(0,mCode.length-1);

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00220_R02.xfdl";
        	const popupName = "수급자 주간투약전달일지";

        	params = {
        		sicode : this.ds_search.getColumn(0, "sicode")
        	,	dateFrom : this.ds_search.getColumn(0, "date_week_from")
        	,	dateTo : this.ds_search.getColumn(0, "date_week_to")
        	,	mCode : mCode
        	,   sign : "1"

        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        //수급자 월간투약전달일지 리포트
        this.fn_report3 = function(obj,e)
        {
        	if(Sct.Util.isEmpty(this.ds_search.getColumn(0, "date_from"))){
        		this.alert("출력할 내용이 없습니다.");
        		return false;
        	}

        	if(Sct.Util.isEmpty(this.ds_search.getColumn(0, "date_to"))){
        		this.alert("출력할 내용이 없습니다.");
        		return false;
        	}

        	let cnt = 0;
        	let mCode = "";

        	for(let i = 0; i<this.ds_list.rowcount; i++){
        		if(this.ds_list.getColumn(i, "chk") == 1){
        			cnt += 1;
        			let _code = this.ds_list.getColumn(i,"m_code");
        			mCode += (_code + ",");
        		}
        	}
        	mCode = mCode.substring(0,mCode.length-1);

        	if(cnt == 0){
        		alert("수급자를 선택해야합니다!");
        		return false;
        	}

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00220_R03.xfdl";
        	const popupName = "수급자 주간투약전달일지";

        	params = {
        		sicode : this.ds_search.getColumn(0, "sicode")
        	,	dateFrom : this.ds_search.getColumn(0, "date_from")
        	,	dateTo : this.ds_search.getColumn(0, "date_to")
        	,	mCode : mCode
        	,   sign : "1"

        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };


        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid){
        		case "" :

        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        //날짜변경에 따른 검색조건 초기화 및 레포트 날짜 수정
        this.initDate = function(date){


        	const yyyymm = String(date).substr(0,6);
        	const dateFrom = yyyymm+"01";
        	const dateTo = Sct.Util.getLastDay(yyyymm);
        	const weekdate = new Date(Sct.Util.getDateFormat(date))
        	const thisWeek = this.fn_week_from_to(weekdate);

        	this.ds_search.setColumn(0, "date_from", dateFrom);
        	this.ds_search.setColumn(0, "date_to", dateTo);
        	this.ds_search.setColumn(0, "date_week_from", new Date(thisWeek[0]));
        	this.ds_search.setColumn(0, "date_week_to", new Date(thisWeek[6]));

        	//날짜형식 -에서 .로 변환
        	const day = Sct.Util.getDateFormat(date, ".");
        	const thisWeekSun = Sct.Util.getDateFormat(thisWeek[0].replaceAll('-',''), ".");
        	const thisWeekSat = Sct.Util.getDateFormat(thisWeek[6].replaceAll('-',''), ".");
        	const dotDateFrom = Sct.Util.getDateFormat(dateFrom, ".");
        	const dotDateTo = Sct.Util.getDateFormat(dateTo, ".");

        	this.div_func.form.btn_report1.set_text("일일 투약전달일지\n" + day);
        	this.div_func.form.btn_report2.set_text("수급자 주간투약전달일지\n" + thisWeekSun + "-" + thisWeekSat);
        	this.div_func.form.btn_report3.set_text("수급자 월간투약전달일지\n" + dotDateFrom + "-" + dotDateTo);
        }


        //기준일로부터 일주일 구하기
        this.fn_week_from_to = function (date){

        	let theYear = date.getFullYear();
        	let theMonth = date.getMonth();
        	let theDate  = date.getDate();
        	let theDayOfWeek = date.getDay();

        	let thisWeek = [];

        	for(let i=0; i<7; i++) {
        	  let resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek));
        	  let yyyy = resultDay.getFullYear();
        	  let mm = Number(resultDay.getMonth()) + 1;
        	  let dd = resultDay.getDate();

        	  mm = String(mm).length === 1 ? '0' + mm : mm;
        	  dd = String(dd).length === 1 ? '0' + dd : dd;

        	  thisWeek[i] = yyyy + '-' + mm + '-' + dd;
        	}

        	return thisWeek;
        };

        //날짜 변경
        this.cal_date_to_pic_onchanged = function(obj,e)
        {
        	this.initDate(e.postvalue);
        	//this.fn_search();
        };





        this.btn_group_onclick = function(obj,e)
        {
        	//데이터 초기화
        	this.ds_list.clearData();
        	this.ds_data.clearData();

        	//선택 버튼 빨간색으로, 그 외는 기본색으로
        	for(var i=0; i<this.grp_btns.length; i++) {
        		if (obj == this.grp_btns[i]) {
        			this.grp_btns[i].set_background("red");
        		} else {
        			this.grp_btns[i].set_background("darkgray");
        		}
        	}

        	// 선택된 버튼값 ds_search에 세팅
        	this.ds_search.setColumn(0,"m_group", obj.text);	// A,B,C,D,E,전체 중 하나

        	this.fn_search();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.btn_grp_e.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_d.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_c.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_b.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_a.addEventHandler("onclick",this.btn_group_onclick,this);
            this.div_search.form.btn_grp_all.addEventHandler("onclick",this.btn_group_onclick,this);
            this.cal_date_to_pic.addEventHandler("onchanged",this.cal_date_to_pic_onchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_report3.addEventHandler("onclick",this.fn_report3,this);
            this.div_func.form.btn_report2.addEventHandler("onclick",this.fn_report2,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00220_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
