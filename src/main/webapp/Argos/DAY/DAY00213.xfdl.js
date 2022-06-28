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
            this.set_titletext("2-14 감염예방일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"c_staffid\" type=\"STRING\" size=\"256\"/><Column id=\"b_manager\" type=\"STRING\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"DATE\" size=\"256\"/><Column id=\"date_to\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"b_offname\" type=\"STRING\" size=\"256\"/><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"m_roomname\" type=\"STRING\" size=\"256\"/><Column id=\"n_number1\" type=\"STRING\" size=\"256\"/><Column id=\"사정일1\" type=\"STRING\" size=\"256\"/><Column id=\"사정시작1\" type=\"STRING\" size=\"256\"/><Column id=\"사정종료1\" type=\"STRING\" size=\"256\"/><Column id=\"적용기간1\" type=\"STRING\" size=\"256\"/><Column id=\"tot_point1\" type=\"STRING\" size=\"256\"/><Column id=\"작성자1\" type=\"STRING\" size=\"256\"/><Column id=\"n_number2\" type=\"STRING\" size=\"256\"/><Column id=\"사정일2\" type=\"STRING\" size=\"256\"/><Column id=\"사정시작2\" type=\"STRING\" size=\"256\"/><Column id=\"사정종료2\" type=\"STRING\" size=\"256\"/><Column id=\"적용기간2\" type=\"STRING\" size=\"256\"/><Column id=\"tot_point2\" type=\"STRING\" size=\"256\"/><Column id=\"작성자2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel_data", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"s_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_enday\" type=\"STRING\" size=\"256\"/><Column id=\"m_reday\" type=\"STRING\" size=\"256\"/><Column id=\"n_number1\" type=\"STRING\" size=\"256\"/><Column id=\"사정일1\" type=\"STRING\" size=\"256\"/><Column id=\"적용기간1\" type=\"STRING\" size=\"256\"/><Column id=\"tot_point1\" type=\"STRING\" size=\"256\"/><Column id=\"작성자1\" type=\"STRING\" size=\"256\"/><Column id=\"n_number2\" type=\"STRING\" size=\"256\"/><Column id=\"사정일2\" type=\"STRING\" size=\"256\"/><Column id=\"적용기간2\" type=\"STRING\" size=\"256\"/><Column id=\"tot_point2\" type=\"STRING\" size=\"256\"/><Column id=\"작성자2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"거주현황\" type=\"STRING\" size=\"256\"/><Column id=\"그룹\" type=\"STRING\" size=\"256\"/><Column id=\"수급자코드\" type=\"STRING\" size=\"256\"/><Column id=\"수급자명\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"입소일\" type=\"STRING\" size=\"256\"/><Column id=\"퇴소일\" type=\"STRING\" size=\"256\"/><Column id=\"사정일01\" type=\"STRING\" size=\"256\"/><Column id=\"사정기간01\" type=\"STRING\" size=\"256\"/><Column id=\"총점01\" type=\"STRING\" size=\"256\"/><Column id=\"사정번호01\" type=\"STRING\" size=\"256\"/><Column id=\"작성자01\" type=\"STRING\" size=\"256\"/><Column id=\"사정일02\" type=\"STRING\" size=\"256\"/><Column id=\"사정기간03\" type=\"STRING\" size=\"256\"/><Column id=\"총점02\" type=\"STRING\" size=\"256\"/><Column id=\"사정번호02\" type=\"STRING\" size=\"256\"/><Column id=\"작성자02\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","40",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","22",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"30\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"출력\"/></Cell><Cell col=\"2\" text=\"현황\"/><Cell col=\"3\" text=\"그룹\"/><Cell col=\"4\" text=\"대상자명\"/><Cell col=\"5\" text=\"성별\"/><Cell col=\"6\" text=\"입소일\"/><Cell col=\"7\" text=\"퇴소일\"/><Cell col=\"8\" text=\"작성일①\"/><Cell col=\"9\" text=\"적용기간①\"/><Cell col=\"10\" text=\"총점①\"/><Cell col=\"11\" text=\"작성자①\"/><Cell col=\"12\" text=\"기록①\"/><Cell col=\"13\" text=\"작성일②\"/><Cell col=\"14\" text=\"적용기간②\"/><Cell col=\"15\" text=\"총점②\"/><Cell col=\"16\" text=\"작성자②\"/><Cell col=\"17\" text=\"기록②\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"checkboxcontrol\" cursor=\"pointer\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:s_nm\" combodataset=\"ds_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\" displaytype=\"normal\"/><Cell col=\"3\" text=\"bind:m_group\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"4\" text=\"bind:m_name\" displaytype=\"normal\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:sex_nm\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:m_enday\" displaytype=\"date\" expandchar=\"dot\"/><Cell col=\"7\" text=\"bind:m_reday\" displaytype=\"date\" expandchar=\"dot\" color=\"red\"/><Cell col=\"8\" text=\"bind:사정일1\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dot\" font=\"normal bold 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"9\" text=\"bind:적용기간1\" displaytype=\"normal\"/><Cell col=\"10\" text=\"bind:tot_point1\" displaytype=\"normal\"/><Cell col=\"11\" text=\"bind:작성자1\" displaytype=\"normal\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:n_number1\"/><Cell col=\"13\" text=\"bind:사정일2\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dot\" font=\"normal bold 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"14\" text=\"bind:적용기간2\" displaytype=\"normal\"/><Cell col=\"15\" text=\"bind:tot_point2\" displaytype=\"normal\"/><Cell col=\"16\" text=\"bind:작성자2\" displaytype=\"normal\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:n_number2\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","230","26",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("간호.건강수준 평가현황");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_subdisc",null,"0","290","26","6",null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("간호.건강수준평가 기록조회시 작성일 클릭!");
            obj.set_color("red");
            obj.set_textAlign("right");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","450","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"5","70","26","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_year","10","5","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_from","112","5","110","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("시작날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date_to","240","5","110","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("종료날짜");
            obj.set_buttonsize("0 0");
            obj.set_tabstop("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","226","5","10","25",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_func","470","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_report1","1110","5","140","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("간호사정 리스트");
            obj.set_cssclass("btn_print");
            this.div_func.addChild(obj.name, obj);

            obj = new Button("btn_formdown","1255","5","165","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("간호사정리스트Excel");
            obj.set_cssclass("btn_excel");
            this.div_func.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.cmb_year","value","ds_search","year");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cal_date_from","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_date_to","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00213.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00213.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00213.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00213
         * 화면명   	: 2-13 간호평가현황
         * 화면설명 	:
         * 작성일   	:
         * 작성자   	: 이동관
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
        this.fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        this.fv_staff_id = nexacro.getApplication().gds_userInfo.getColumn(0, "c_staffid");
        this.fv_staff_name = nexacro.getApplication().gds_userInfo.getColumn(0, "c_name").trim();
        this.fv_staff_dutyname = nexacro.getApplication().gds_userInfo.getColumn(0, "c_dutyname");
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_list;
        this.reSearchData = "";
        this.searchFlag = "";
        this.fileGroupId = "";
        const fileDownTrans = new nexacro.FileDownTransfer( "fileDownTrans", this );
        const downUrl = nexacro.getEnvironment().services["svcurl"].url + "/common/";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 현재 년도 구하기
        	const date = new Date();
        	const year = 2012;
        	const thisYear = date.getFullYear();

        	// 년도 콤보박스 세팅 (현재년 기준 ~ 19?20?년 후까지)
        	this.ds_year.set_enableevent(false);
        	this.ds_year.clearData();
        	let nRow;
        	for (let i = 0; i <= (thisYear-year) + 9; i++){
        		nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow, "CMCD", year + i);
        		this.ds_year.setColumn(nRow, "CMNM", (year + i) + "년");
        	}
        	this.ds_year.set_enableevent(true);

        	this.fn_setMainGrid();

        	// 검색조건 세팅 ds_seerch의 oncolumchage이벤트가 this.initGrid 보다 먼저 실행되는지는 모름 렌덤이면 고쳐야함
        	this.ds_search.setColumn(0, "sicode", this.fv_sicode);
        	this.ds_search.setColumn(0, "year", thisYear);

        	this.fn_search();

        };

        this.fn_setMainGrid = function()
        {
        	var grdMain = this.div_cont.form.div_left.form.grd_list;

        	var nameIdx = grdMain.getBindCellIndex("body","m_name");
        	var snmIdx = grdMain.getBindCellIndex("body","s_nm");

        	var nameCss = "expr:dataset.getColumn(currow,'sex_nm') == '남' ? 'cellBMan' : 'cellBWoman'";
        	var snmCss = "expr:dataset.getColumn(currow,'s_nm')== '퇴소자' ? 'cellBRetire': '' ";

        	grdMain.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grdMain.setCellProperty("body", snmIdx, "cssclass", snmCss);
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
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00213.DAY00213_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search"){

        		}
        		else if(strSvcID == "excel"){
        			fileDownTrans.clearPostDataList();
        			fileDownTrans.setPostData("fileRealName", this.ds_excel.getColumn(0, "FILE_REAL_NAME"));
        			fileDownTrans.setPostData("fileName", this.ds_excel.getColumn(0, "FILE_NAME"));
        			fileDownTrans.download(downUrl + "fileDownload_postdatatestAll.jsp");

        			this.ds_excel.clearData();
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
        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "" :
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

        //검색조건 변경 시
        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "year"){
        		this.ds_search.setColumn(0, "date_from", e.newvalue + '0101');
        		this.ds_search.setColumn(0, "date_to", e.newvalue + '1231');
        		this.ds_list.clearData();
        	}
        };

        this.fn_chk = function(){
        	let chk = 0;

        	// 리스트 row 수만큼 for문 돌려서 체크된 row 찾기
        	for(let i=0; i < this.ds_list.rowcount; i++){
        		chk = (parseInt(this.ds_list.getColumn(i,"chk")) == 1 )? chk + 1 : chk; // 체크된 경우 1 더한다.
        	}

        	// 체크박스 체크된 수급자가 없는 경우
        	if(chk == 0){
        		alert("수급자를 선택하세요!");
        		return false;
        	}

        	return true;
        }

        this.fn_report1 = function(obj,e)
        {
        	if(!this.fn_chk()) return;

        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00213_R01.xfdl";
        	const popupName = "간호.건강수준평가 리스트";

        	let year = this.ds_search.getColumn(0,"year");
        	let date_from = this.ds_search.getColumn(0,"date_from");
        	let date_to= this.ds_search.getColumn(0,"date_to");

        	let mCode = "";

        	// 리스트 row 수만큼 for문 돌려서 체크된 row 찾기
        	for(var i=0; i < this.ds_list.rowcount; i++){
        		if(this.ds_list.getColumn(i,"chk") == 1){ // 체크된 수급자 코드 문자열로 이어붙이기
        			let _code = this.ds_list.getColumn(i,"m_code");
        			mCode += (_code + ",");
        		}
        	}

        	// 마지막 콤마 제거
        	mCode = mCode.substring(0,mCode.length-1);

        	console.log(this.fv_sicode)
        	params = {
        		SICODE : this.fv_sicode
        	,	M_CODE : mCode
        	,   YEAR : year
        	,	DATE_FROM : date_from
        	,	DATE_TO : date_to
        	,   SIGN : "0"
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        };

        this.div_func_btn_formdown_onclick = function(obj,e)
        {
        	if(!this.fn_chk()) return;

        	for(var i=0; i < this.ds_list.rowcount; i++){
        		if(this.ds_list.getColumn(i,"chk") == 1){ // 체크된 수급자 코드 문자열로 이어붙이기
        			let aRow = this.ds_excel_data.addRow();
        			this.ds_excel_data.copyRow(aRow, this.ds_list, i)
        		}
        	}

        	let sheetStr = "간호사정리스트";

        	const svcId = "excel";
        	const params = "/DAY00213EXCEL.do";
        	const inDatasets = "input1=ds_excel_head input2=ds_excel_data";
        	const outDatasets = "ds_excel=output1";
        	const argument = "method=excelDown "
        				   + "SHEET_NAME=" + sheetStr + " "
        				   + "YEAR=" + this.ds_search.getColumn(0,"year") + " ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);

        };

        this.div_cont_div_left_grd_list_oncellclick = function(obj,e)
        {
        	if(e.col == 8){
        		let param = {
        				SICODE : this.fv_sicode
        			,	M_CODE : this.ds_list.getColumn(this.ds_list.rowposition, "m_code")
        			,   N_NUMBER : this.ds_list.getColumn(this.ds_list.rowposition, "n_number1")
        			,   FLAG : true
        			};

        		Sct.popup(this, "evaluation", 450, 400, "간호.건강수준평가", param, "DAY_POP::DAY00212_P01.xfdl", "fn_popCallback");
        	}

        	if(e.col == 13){
        		let param = {
        				SICODE : this.fv_sicode
        			,	M_CODE : this.ds_list.getColumn(this.ds_list.rowposition, "m_code")
        			,   N_NUMBER : this.ds_list.getColumn(this.ds_list.rowposition, "n_number2")
        			,   FLAG : true
        			};

        		Sct.popup(this, "evaluation", 450, 400, "간호.건강수준평가", param, "DAY_POP::DAY00212_P01.xfdl", "fn_popCallback");
        	}
        };

        this.div_search_cmb_year_onitemchanged = function(obj,e)
        {
        	this.fn_search();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_left_grd_list_oncellclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.cmb_year.addEventHandler("onitemchanged",this.div_search_cmb_year_onitemchanged,this);
            this.div_func.form.btn_report1.addEventHandler("onclick",this.fn_report1,this);
            this.div_func.form.btn_formdown.addEventHandler("onclick",this.div_func_btn_formdown_onclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAY00213.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
