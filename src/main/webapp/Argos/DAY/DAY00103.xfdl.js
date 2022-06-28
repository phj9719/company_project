(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00103");
            this.set_titletext("1-3 일별 요양서비스 제공현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"DATE\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_type\" type=\"STRING\" size=\"256\"/><Column id=\"m_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_GB\" type=\"STRING\" size=\"256\"/><Column id=\"mr_move\" type=\"STRING\" size=\"256\"/><Column id=\"ba_time\" type=\"STRING\" size=\"256\"/><Column id=\"out_time\" type=\"STRING\" size=\"256\"/><Column id=\"kr_contents\" type=\"STRING\" size=\"256\"/><Column id=\"food_kind\" type=\"STRING\" size=\"256\"/><Column id=\"food_sub_kind\" type=\"STRING\" size=\"256\"/><Column id=\"kr_state\" type=\"STRING\" size=\"256\"/><Column id=\"cr_u_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"cr_b_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"t_abc_contents\" type=\"STRING\" size=\"256\"/><Column id=\"ba_contents\" type=\"STRING\" size=\"256\"/><Column id=\"sc0100_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"sc0200_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"sc0300_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"sc0400_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"sc0500_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"sc0700_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"so_contents\" type=\"STRING\" size=\"256\"/><Column id=\"sc0900_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"sc1000_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"sc2400_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"sc2500_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"kmc_contents\" type=\"STRING\" size=\"256\"/><Column id=\"bi_contents\" type=\"STRING\" size=\"256\"/><Column id=\"move_contents\" type=\"STRING\" size=\"256\"/><Column id=\"move_yn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report_chk", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/><Column id=\"cr_u_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"cr_b_cnt\" type=\"STRING\" size=\"256\"/><Column id=\"cr_c_cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","1700",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","38",null,"718","28",null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"78\"/><Column size=\"50\"/><Column size=\"112\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"현황\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"수급자명\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"송영시간\"/><Cell col=\"5\" text=\"목욕시간\"/><Cell col=\"6\" text=\"외출기록\"/><Cell col=\"7\" text=\"일지\"/><Cell col=\"8\" text=\"식사\"/><Cell col=\"9\" text=\"간식\"/><Cell col=\"10\" text=\"구강\"/><Cell col=\"11\" text=\"배뇨\"/><Cell col=\"12\" text=\"배변\"/><Cell col=\"13\" text=\"일지조회\"/><Cell col=\"14\" text=\"기능훈련\"/><Cell col=\"15\" text=\"인.지\"/><Cell col=\"16\" text=\"세면\"/><Cell col=\"17\" text=\"구강\"/><Cell col=\"18\" text=\"머리\"/><Cell col=\"19\" text=\"몸단장\"/><Cell col=\"20\" text=\"옷입기\"/><Cell col=\"21\" text=\"식.도\"/><Cell col=\"22\" text=\"자세\"/><Cell col=\"23\" text=\"이동\"/><Cell col=\"24\" text=\"신.유\"/><Cell col=\"25\" text=\"산책\"/><Cell col=\"26\" text=\"의사\"/><Cell col=\"27\" text=\"상.변\"/><Cell col=\"28\" text=\"신.보\"/><Cell col=\"29\" text=\"배설기록\"/><Cell col=\"30\" text=\"미이용\"/></Band><Band id=\"body\"><Cell text=\"bind:m_type\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:m_group\" combodataset=\"ds_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"2\" text=\"bind:m_name\" textAlign=\"center\" expandchar=\"dot\"/><Cell col=\"3\" text=\"bind:SEX_GB\"/><Cell col=\"4\" text=\"bind:mr_move\"/><Cell col=\"5\" text=\"bind:ba_time\"/><Cell col=\"6\" text=\"bind:out_time\"/><Cell col=\"7\" text=\"bind:kr_contents\" cursor=\"pointer\"/><Cell col=\"8\" text=\"bind:food_kind\"/><Cell col=\"9\" text=\"bind:food_sub_kind\"/><Cell col=\"10\" text=\"bind:kr_state\"/><Cell col=\"11\" text=\"bind:cr_u_cnt\"/><Cell col=\"12\" text=\"bind:cr_b_cnt\"/><Cell col=\"13\" expandimage=\"url('theme://images/ico_search.png')\" displaytype=\"buttoncontrol\" expandshow=\"show\" imagestretch=\"fixaspectratio\" edittype=\"button\" expandsize=\"60\" cursor=\"pointer\"/><Cell col=\"14\" text=\"bind:t_abc_contents\" cursor=\"pointer\"/><Cell col=\"15\" text=\"bind:ba_contents\" cursor=\"pointer\"/><Cell col=\"16\" text=\"bind:sc0100_cnt\"/><Cell col=\"17\" text=\"bind:sc0200_cnt\"/><Cell col=\"18\" text=\"bind:sc0300_cnt\"/><Cell col=\"19\" text=\"bind:sc0400_cnt\"/><Cell col=\"20\" text=\"bind:sc0500_cnt\"/><Cell col=\"21\" text=\"bind:sc0700_cnt\"/><Cell col=\"22\" text=\"bind:so_contents\"/><Cell col=\"23\" text=\"bind:sc0900_cnt\"/><Cell col=\"24\" text=\"bind:sc1000_cnt\"/><Cell col=\"25\" text=\"bind:sc2400_cnt\"/><Cell col=\"26\" text=\"bind:sc2500_cnt\"/><Cell col=\"27\" text=\"bind:kmc_contents\"/><Cell col=\"28\" text=\"bind:bi_contents\"/><Cell col=\"29\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"배설기록\" cursor=\"pointer\"/><Cell col=\"30\" text=\"bind:move_contents\" color=\"red\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","10","3","230","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("일별 요양서비스 제공현황");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_subdisc","1442","3","230","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("일지, 기능훈련, 인.지 항목 더블클릭!");
            obj.set_color("red");
            obj.set_textAlign("right");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","450","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","320","7","70","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_pic","205","7","25","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_pre_dt","10","7","80","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("◀ 전날");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date","95","7","110","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_yyyyMMddddd");
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            obj.set_buttonsize("0 0");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_next_dt","235","7","80","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("앞날 ▶");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","470","0","1230","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_report05","902","7","150","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("집중배설관찰기록");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report01","347","7","100","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("요양일지");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report02","457","7","130","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("2");
            obj.set_text("요양일지(3단)");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report03","597","7","125","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("식사도움기록");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report04","732","7","160","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("4");
            obj.set_text("식사.배설 관찰기록");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_report06","1062","7","140","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("5");
            obj.set_text("기저귀 교체기록");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cal_date","value","ds_search","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_date_pic","value","ds_search","date");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00103.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00103.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00103.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00103
         * 화면명   	: 1-3 일별 요양서비스 제공현황
         * 화면설명 	:
         * 작성일   	: 2022-04-27
         * 작성자   	: 박한준
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
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_list;
        this.fv_staff_id = nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid");
        this.fv_staff_name = nexacro.getApplication().gds_userInfo.getColumn(0, "b_manager");
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

        	// 검색조건 세팅
        	let today = Sct.Util.getToday();

        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        	this.ds_search.setColumn(0, "date", today);

        	// 오픈시 조회
        	this.fn_search();
        };

        // 현황, 수급자, 미이용 백그라운드 설정
        this.initGrid = function(grid)
        {
        	const nameIdx = grid.getBindCellIndex("body", "m_name");
        	const nowIdx = grid.getBindCellIndex("body", "m_type");

        	const nameCss = "expr:dataset.getColumn(currow, 'SEX_GB') == '남' ? 'cellBMan' : 'cellBWoman'";
        	const nowCss = "expr:dataset.getColumn(currow, 'm_type') == '퇴소자' ? 'cellBRetire' : ''";

        	grid.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grid.setCellProperty("body", nowIdx, "cssclass", nowCss);

         	//미이용자 백그라운드
        	const moveArr = ["m_group", "SEX_GB", "mr_move", "ba_time", "out_time", "kr_contents", "food_kind", "food_sub_kind", "kr_state", "cr_u_cnt", "cr_b_cnt", "t_abc_contents", "ba_contents", "sc0100_cnt", "sc0200_cnt", "sc0300_cnt", "sc0400_cnt", "sc0500_cnt", "sc0700_cnt", "so_contents", "sc0900_cnt", "sc1000_cnt", "sc2400_cnt", "sc2500_cnt", "kmc_contents", "bi_contents", "move_contents"];
        	for (let i = 0; i < moveArr.length; i++)
        	{
        		const moveIdx = grid.getBindCellIndex("body", moveArr[i]);
        		const moveCss = "expr:dataset.getColumn(currow, 'move_yn') == 'Y' ? 'cellBRetire' : ''";

        		grid.setCellProperty("body", moveIdx, "cssclass", moveCss);
        	}

        };
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

        //출력 전 validation
        this.fn_report_pre = function ()
        {
        	var cnt = this.ds_report_chk.getColumn(0, "cnt");
        	var ucnt = this.ds_report_chk.getColumn(0, "cr_u_cnt");
        	var bcnt = this.ds_report_chk.getColumn(0, "cr_b_cnt");
        	var ccnt = this.ds_report_chk.getColumn(0, "cr_c_cnt");
        };

        // 레포트 데이터 유무 조회
        this.fn_report_chk = function (objid)
        {
        	var sqlid = "";

        	if(objid == "btn_report01" || objid == "btn_report02"){ // 요양일지, 요양일지(3단)
        		sqlid = "DAY00103_REPORT01_CHK_S";
        	}else if(objid == "btn_report03"){ // 식사도움기록
        		sqlid = "DAY00103_REPORT03_CHK_S";
        	}else if(objid == "btn_report04"){ // 식사.배설 관찰기록
        		sqlid = "DAY00103_REPORT04_CHK_S";
        	}else if(objid == "btn_report05"){ // 집중배설관찰기록
        		sqlid = "DAY00103_REPORT05_CHK_S";
        	}else if(objid == "btn_report06"){ // 기저귀 교체기록
        		sqlid = "DAY00103_REPORT06_CHK_S";
        	}

        	const svcId = "report_chk";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_report_chk=output1";
        	const argument = "method=getList "
        				   + "sqlId=" + sqlid + " ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
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
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00103.DAY00103_DS_LIST_S ";

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
        			this.initGrid(this.div_cont.form.div_left.form.grd_list);
        		}else if (strSvcID == "report_chk")
        		{

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

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 출력
        this.fn_report = function(obj,e)
        {
        	if (this.ds_list.rowcount == 0)
        	{
        		return false;
        	}

        	var objid = obj.id;
         	var popupUrl = "";
         	var popupName = "";

        	// 데이터 유무 조회
        	this.fn_report_chk(objid);

        	var cnt = this.ds_report_chk.getColumn(0, "cnt");
        	var ucnt = this.ds_report_chk.getColumn(0, "cr_u_cnt");
        	var bcnt = this.ds_report_chk.getColumn(0, "cr_b_cnt");
        	var ccnt = this.ds_report_chk.getColumn(0, "cr_c_cnt");

        	if(objid == "btn_report05"){
        		if(ucnt < 1 && bcnt < 1 && ccnt < 1){
        			this.alert("데이터가 존재하지 않습니다.");
        			return false;
        		}
        	}else{
        		if(cnt < 1){
        			this.alert("데이터가 존재하지 않습니다.");
        			return false;
        		}
        	}


        	if(objid == "btn_report01"){ // 요양일지
        		popupUrl = "DAY_POP::DAY00103_R01.xfdl";
        	}else if(objid == "btn_report02"){ // 요양일지(3단)
        		popupUrl = "DAY_POP::DAY00103_R02.xfdl";
        	}else if(objid == "btn_report03"){ // 식사도움기록
        		popupUrl = "DAY_POP::DAY00103_R03.xfdl";
        	}else if(objid == "btn_report04"){ // 식사.배설 관찰기록
        		popupUrl = "DAY_POP::DAY00103_R04.xfdl";
        	}else if(objid == "btn_report05"){ // 집중배설관찰기록
        		popupUrl = "DAY_POP::DAY00103_R05.xfdl";
        	}else if(objid == "btn_report06"){ // 기저귀 교체기록
        		popupUrl = "DAY_POP::DAY00103_R06.xfdl";
        	}
         	let params;
         	const dicompNm = " ";
        // 	const popupUrl = "DAY_POP::DAY00102_R01.xfdl";
        // 	const popupName = "상태변화 기록서식";
        //
        	params = {
        		sicode : fv_sicode
        	,	date : this.ds_search.getColumn(0,"date")
        	,   sign : "1"
        	};

         	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        }


        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		// 식사도움관찰기록(일지)
        		case "mealhelp" :
        			this.fn_search();
        			break;

        		// 기능훈련
        		case "training" :
        			this.fn_search();
        			break;

        		// 인지관리지원
        		case "observe" :
        			this.fn_search();
        			break;

        		// 배설관찰일지
        		case "excretion" :
        			this.fn_search();
        			break;

        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };

        // 앞날
        this.div_search_btn_next_dt_onclick = function(obj,e)
        {
        	const searchDt = this.ds_search.getColumn(0, "date");
        	searchDt.setDate(searchDt.getDate() + 1);
        	this.ds_search.setColumn(0, "date", searchDt);
        	this.ds_list.clearData();
        	this.fn_search();
        };

        // 전날
        this.div_search_btn_pre_dt_onclick = function(obj,e)
        {
        	const searchDt = this.ds_search.getColumn(0, "date");
        	searchDt.setDate(searchDt.getDate() - 1);
        	this.ds_search.setColumn(0, "date", searchDt);
        	this.ds_list.clearData();
        	this.fn_search();
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function ()
        {
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

        // 일자 변경 시 데이터셋 클리어, 조회
        this.div_search_cal_date_pic_onchanged = function(obj,e)
        {
        	this.ds_list.clearData();
        	this.fn_search();
        };

        // 셀 더블클릭
        this.div_cont_div_left_grd_list_oncelldblclick = function(obj,e)
        {
        	/*
        	col7 일지팝업
        	col13 일지팝업
        	col14 기능훈련팝업
        	col15 인지팝업
        	col29 배설팝업
        	*/

        	// 미이용 시 팝업 호출 불가
        	if(this.ds_list.getColumn(e.row,"move_yn") == "Y"){
        		return false;
        	}

        	//일지, 기능훈련 송영시간 유무 확인
        	if (e.col == "7" || e.col == "13" || e.col == "14"){
        		if(Sct.Util.isEmpty(this.ds_list.getColumn(e.row,"mr_move"))){
        			this.alert("송영 시작시간이 존재하지 않습니다.");
        			return false;
        		}
        	}

        	// 인지, 배설기록 kmrecord 유무 확인
        	if(e.col == "15"){
        		if(Sct.Util.isEmpty(this.ds_list.getColumn(e.row,"k_number"))){
        			this.alert("요양급여기록이 존재하지 않습니다.");
        			return false;
        		}
        	}

        	// 식사도움관찰기록 팝업
        	if (e.col == "7" || e.col == "13")
        	{
        		var param = {
        				SICODE : fv_sicode
        			,	DATE : this.ds_search.getColumn(0,"date")
        			,   MCODE : this.ds_list.getColumn(e.row, "m_code")
        		};

        		Sct.popup(this, "mealhelp", 450, 400, "", param, "DAY_POP::DAY00103_P01.xfdl", "fn_popCallback");
        	}

        	// 기능훈련 팝업
        	if (e.col == "14")
        	{
        		var param = {
        				SICODE : fv_sicode
        			,	DATE : this.ds_search.getColumn(0,"date")
        			,   MCODE : this.ds_list.getColumn(e.row, "m_code")
        		};

        		Sct.popup(this, "training", 450, 400, "", param, "DAY_POP::DAY00101_P09.xfdl", "fn_popCallback");
        	}

        	// 인지관리지원, 인지활동지원 팝업
        	if (e.col == "15")
        	{
        		var param = {
        				SICODE : fv_sicode
        			,	DATE : this.ds_search.getColumn(0,"date")
        			,   NAME : this.ds_list.getColumn(e.row,"m_name")
        			,   MGROUP : this.ds_list.getColumn(e.row,"m_group")
        			,   MCODE : this.ds_list.getColumn(e.row, "m_code")
        		};

        		Sct.popup(this, "observe", 450, 400, "", param, "DAY_POP::DAY00101_P10.xfdl", "fn_popCallback");
        	}
        };


        // 일지조회, 배설기록 버튼 클릭
        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	//일지조회 송영시간 유무 확인
        	if (e.col == "13"){
        		if(Sct.Util.isEmpty(this.ds_list.getColumn(e.row,"mr_move"))){
        			this.alert("송영 시작시간이 존재하지 않습니다.");
        			return false;
        		}
        	}

        	// 인지, 배설기록 kmrecord 유무 확인
        	if(e.col == "29"){
        		if(Sct.Util.isEmpty(this.ds_list.getColumn(e.row,"k_number"))){
        			this.alert("요양급여기록이 존재하지 않습니다.");
        			return false;
        		}
        	}

        	// 일지조회, 식사도움관찰기록 팝업
        	if (e.col == "13")
        	{
        		var param = {
        				SICODE : fv_sicode
        			,	DATE : this.ds_search.getColumn(0,"date")
        			,   MCODE : this.ds_list.getColumn(e.row, "m_code")
        		};

        		Sct.popup(this, "mealhelp", 450, 400, "", param, "DAY_POP::DAY00103_P01.xfdl", "fn_popCallback");
        	}

        	// 배설관찰일지
        	if (e.col == "29")
        	{
        		var param = {
        				SICODE : fv_sicode
        			,	DATE : this.ds_search.getColumn(0,"date")
        			,   NAME : this.ds_list.getColumn(e.row,"m_name")
        			,   MJUMIN : this.ds_list.getColumn(e.row,"m_jumin1")
        			,   SEXGB : this.ds_list.getColumn(e.row,"SEX_GB")
        			,   MCODE : this.ds_list.getColumn(e.row, "m_code")
        		};

        		Sct.popup(this, "excretion", 450, 400, "", param, "DAY_POP::DAY00101_P02.xfdl", "fn_popCallback");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncelldblclick",this.div_cont_div_left_grd_list_oncelldblclick,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.cal_date_pic.addEventHandler("onchanged",this.div_search_cal_date_pic_onchanged,this);
            this.div_search.form.btn_pre_dt.addEventHandler("onclick",this.div_search_btn_pre_dt_onclick,this);
            this.div_search.form.cal_date.addEventHandler("onchanged",this.div_search_cal_date_onchanged,this);
            this.div_search.form.btn_next_dt.addEventHandler("onclick",this.div_search_btn_next_dt_onclick,this);
            this.div_func.form.btn_report05.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report01.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report02.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report03.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report04.addEventHandler("onclick",this.fn_report,this);
            this.div_func.form.btn_report06.addEventHandler("onclick",this.fn_report,this);
        };
        this.loadIncludeScript("DAY00103.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
