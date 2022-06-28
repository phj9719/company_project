(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUB307CT");
            this.set_titletext("수면상태");
            this.set_background("#f4f9fc");
            if (Form == this.constructor)
            {
                this._setFormPosition(1180,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resident", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SLE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"SLE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SLE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SLEEP_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_manager", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_AGE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_minute", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_posture", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_sleep_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","2.12%","14",null,"40","3.39%",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","0","160","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_locale("ko_KR");
            obj.set_displaynulltext("일자");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","170","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_displaynulltext("층(생활실)");
            obj.set_readonly("false");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","300","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_location");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("호실");
            obj.set_readonly("false");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","560","0","80","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_cssclass("btn_tSearch");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tDelete",null,"0","90","40","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_tDelete");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave",null,"0","90","40","100",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_tSave");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_resident","430","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_resident");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("입소자명");
            obj.set_buttonsize("0 0");
            obj.set_popupsize("0 0");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tReset",null,"0","100","40","200",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_cssclass("btn_tReset");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","2.12%","65",null,null,"3.39%","4.29%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sle_timeB","0","0","130","120",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_tDataBForm2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sleep_tpB","130","0","185","120",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_tDataBForm2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sleep_tpH","130","0","185","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("수면상태");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sleep_remarkB","0","128",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_tDataBForm2");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_sleep_remark","15","180",null,null,"20","15",null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_font("normal 500 16pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sleep_managerIdB","315","0","185","120",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_tDataBForm2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_managerId","327","62","160","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_manager");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_itemheight("36");
            obj.set_buttonsize("0 0");
            obj.set_type("search");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sle_timeH","0","0","130","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("기상시간");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sleep_remarkH","0","128",null,"40","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_text("비고");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_sleep_managerIdH","315","0","185","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("처리자");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_tRecord_sleep","587","136","60","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_tRecord");
            this.div_cont.addChild(obj.name, obj);

            obj = new MaskEdit("mae_sle_time","10","62","110","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("11");
            obj.set_format("## : ##");
            obj.set_type("string");
            obj.set_cssclass("medt_clock");
            obj.set_readonly("true");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_sleep_tp","145","62","160","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_nu_sleep_tp");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_itemheight("40");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",1180,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cmb_resident","value","ds_search","RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_cont.form.txt_sleep_remark","value","ds_list","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_cont.form.cmb_managerId","value","ds_list","MANAGER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_cont.form.mae_sle_time","value","ds_list","SLE_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_cont.form.cmb_sleep_tp","value","ds_list","SLEEP_TP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB307CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB307CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB307CT.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB307CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUB307CT
         * 화면명   	: 수면상태
         * 화면설명 	: 태블릿 입소자별 당일 수면상태 기록
         * 작성일    	: 2021-11-18
         * 작성자   	: 이승규
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *
         ***********************************************************************
         ***********************************************************************
         */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = "";
        this.fv_currentGrid = "";
        this.tranFlag = "";
        this.searchFlag = "";	// 검색 플래그 1 : 새벽, 2 : 주간, 3 : 야간
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.NUB307CT_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 검색조건 세팅
        	this.taSearchDataSetting(obj);

        	// 관찰자, 층, 호실 콤보 초기화
        	this.fn_setComboDs(obj);

        	this.ds_location.filter("ARE_CD == '" + this.ds_search.getColumn(0, "AREA") + "'");

        	// 로드 완료후 검색
        	this.fn_search();
        };

        // 콤보 데이터 세팅
        this.fn_setComboDs = function(obj)
        {
        	const comboDsParamArr = [
        		{ outDsName : "ds_manager", sqlId : "NUB_COMMON.NUB_COMMON_DS_MANAGER_S", param : this.ds_search, bEmptyRow : true }
        		,{ outDsName : "ds_location", sqlId : "NUB_COMMON.NUB_COMMON_DS_LOCATION_ALL_S", param : this.ds_search, bEmptyRow : true }
        		,{ outDsName : "ds_resident", sqlId : "NUB_COMMON.NUB_COMMON_DS_RESIDENT_ALL_S", param : this.ds_search, bEmptyRow : true }
        	];
        	this.gfn_setComboDs(obj, comboDsParamArr);
        };

        // 그리드 컬럼에 색입히기
        this.fn_initGrid = function(grid)
        {
        	const pMinIdx = grid.getBindCellIndex("body", "POS_MIN");
        	const pMinCss = "expr: dataset.getColumn(currow, 'POS_HOUR') < 110 ? 'blueFont' : 'orangeFont'";
        	grid.setCellProperty("body", pMinIdx, "cssclass", pMinCss);
        };
        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 검색 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };

        // 초기화 버튼
        this.fn_resetBtn = function ()
        {
        	this.fn_search();
        };

        // 저장 버튼
        this.fn_saveBtn = function ()
        {
        	this.fn_save();
        };

        //삭제 버튼
        this.fn_deleteBtn = function ()
        {
        	this.fn_delete();
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	const resident = this.ds_search.getColumn(0, "RES_ID");
        	if (resident == undefined || resident == "" || resident == null)
        	{
        		alert("입소자를 선택해 주세요");
        		return false;
        	}
        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function ()
        {
        	const resident = this.ds_search.getColumn(0, "RES_ID");
        	if (resident == undefined || resident == "" || resident == null)
        	{
        		alert("입소자를 선택해 주세요");
        		return false;
        	}
        	// 저장 내용 체크
        	if(!Sct.Grid.hasInsertAndUpdateRow(this.ds_list))
        	{
        		Sct.alert(this, "000569", "저장");	// {0}할 내용이 없습니다.
        		return false;
        	}

        	// 저장하시겠습니까?
        	if(!Sct.confirm(this, "000038")) return false;

        	const nRow = this.ds_list.rowposition;

        	if(this.ds_list.getRowType(nRow) == 2) this.tranFlag = "I";
        	else if(this.ds_list.getRowType(nRow) == 4) this.tranFlag = "U";

        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function()
        {
        	const resident = this.ds_search.getColumn(0, "RES_ID");
        	if (resident == undefined || resident == "" || resident == null)
        	{
        		alert("입소자를 선택해 주세요");
        		return false;
        	}
        	// 데이터셋 상태가 추가상태이면 삭제 못함
        	if(this.ds_list.getRowType(this.ds_list.rowposition) == 2)
        	{
        		Sct.alert(this, "000569", "삭제");	// {0}할 내용이 없습니다.
        		return false;
        	}

        	// 삭제하시겠습니까?
        	if(Sct.confirm(this, "000083", "삭제"))
        	{
        		const nRow = this.ds_list.rowposition;
        		this.ds_list.set_updatecontrol(false);
        		this.ds_list.setRowType(nRow, Dataset.ROWTYPE_DELETE);
        		this.ds_list.set_updatecontrol(true);
        	}
        	else
        	{
        		return false;
        	}

        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 검색
        this.fn_search = function ()
        {
        	// validation
        	if(!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        		+ "sqlId='NUB307CT.NUB307CT_DS_LIST_S' ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function ()
        {
        	if(!this.fn_save_pre()) return;

         	const svcId = "save";
         	const inDs = "ds_list";
         	this.fn_save_com(svcId, inDs);
        };

        // 삭제
        this.fn_delete = function()
        {
        	if(!this.fn_delete_pre()) return;

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_list:U";
        	const outDatasets = "";
         	const argument = "method=delete "
         				   + "sqlId=NUB307CT.NUB307CT_DS_LIST_D ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		// 검색 콜백
        		if(strSvcID == "search")
        		{
        			// 검색조건 유지를 위해 글로벌 데이터셋에 조건 세팅
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "AREA", this.ds_search.getColumn(0,"AREA"));
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "LOCATION", this.ds_search.getColumn(0,"LOCATION"));
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "RES_ID", this.ds_search.getColumn(0,"RES_ID"));

        			// 검색결과가 없을경우
        			if(this.ds_list.rowcount < 1)
        			{
        				// 행추가
        				nRow = this.ds_list.addRow();
        				// 초기화
        				this.ds_list.setColumn(nRow, "COMPANY_CD", this.ds_search.getColumn(0, "COMPANY_CD"));
        				this.ds_list.setColumn(nRow, "RES_ID", this.ds_search.getColumn(0, "RES_ID"));

        				// 처리자에 접속자 세팅
        				this.ds_list.setColumn(nRow, "MANAGER_ID", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID"));
        			}
        			else
        			{
        				// 처리자에 접속자 세팅
        				this.ds_list.setColumn(0, "MANAGER_ID", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID"));
        			}
        		}
        		// 저장 콜백
        		else if(strSvcID == "save")
        		{
        			if(this.tranFlag == "I")
        			{
        				Sct.alert(this, "000570", "등록");	// {0} 되었습니다.
        			}
        			else if(this.tranFlag == "U")
        			{
        				Sct.alert(this, "000570", "수정");	// {0} 되었습니다.
        			}
        			this.tranFlag = "";

        			this.fn_search();
        		}
        		// 삭제 콜백
        		else if(strSvcID == "delete")
        		{
        			Sct.alert(this, "000570", "삭제");	// {0} 되었습니다.
        			this.fn_search();
        		}
        	}
        	else
        	{
        		this.tranFlag = "";
        		Sct.alert(this, "", strErrorMsg);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	const nowRow = this.ds_list.rowposition;
        	const cRow = parseInt(this.ds_list.getColumn(nowRow, "ROW"));
        	const iRow = this.ds_list.findRow("ROW", cRow);
        	switch(popid)
        	{
        		case "pop2" : // 입소자
        // 			this.ds_search.setColumn(0, "RES_ID", objDs.getColumn(0, "RES_ID"));
        // 			this.ds_search.setColumn(0, "AREA", objDs.getColumn(0, "AREA"));
        // 			this.ds_search.setColumn(0, "LOCATION", objDs.getColumn(0, "LOCATION"));
        			this.ds_location.filter("ARE_CD == '"+objDs.getColumn(0, "AREA")+"'");
        			this.ds_resident.filter("");
        			this.div_search.form.cmb_area.set_value(objDs.getColumn(0, "AREA"));
        			this.div_search.form.cmb_location.set_value(objDs.getColumn(0, "LOCATION"));
        			this.div_search.form.cmb_resident.set_value(objDs.getColumn(0, "RES_ID"));
        			this.fn_search();
        			break;
        		case "pop3" : // 분 선택
        			this.ds_list.setColumn(iRow, "POS_MIN", objDs.getColumn(0, "MIN"));
        			break;
        		case "pop4" : // 처리자
        			this.ds_list.setColumn(0, "MANAGER_ID", objDs.getColumn(0, "USER_ID"));
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };

        // 입소자 조회 팝업
        this.div_search_cmb_resident_oneditclick = function(obj,e)
        {
        	const param = {
        			COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")
        		,	FLAG : "NUB307CT"
        		,   AREA : this.ds_search.getColumn(0, "AREA")
        		,   LOCATION : this.ds_search.getColumn(0, "LOCATION")
        		,	DATE : this.ds_search.getColumn(0, "DATE")
        	};

        	Sct.tPopup(this, "pop2", 350, 350, param, "TabletPOP::NUB_RESIDENT_POP.xfdl", "fn_popCallback");
        };

        // 음성인식
        this.btn_tRecord_onclick = function(obj,e)
        {
        	trace(obj.id);
        	let param;
        	this.makeStandardObject();

        	// 수면상태 비고
        	param = {arg1 : "3"};

        	this.standardPlugin.callMethod("VOICE", param);
        };

        // standardObject 안드로이드 네이티브 통신 callback
        this.on_standardPlugin_callback = function(obj, e)
        {
        	trace("this.on_callback ::: " + e.svcid);
        	trace("this.on_callback ::: " + e.reason);
        	trace("this.on_callback ::: " + e.returnvalue);

        	// 수면상태 비고 STT
        	if(e.svcid == "VOICE3")
        	{
        		if(e.reason == 0)
        		{
        			let rmkValue = this.div_cont.form.txt_sleep_remark.value;
        			if (rmkValue == undefined)
        			{
        				this.div_cont.form.txt_sleep_remark.set_value(e.returnvalue);
        			}
        			else
        			{
        				this.div_cont.form.txt_sleep_remark.set_value(rmkValue + " " + e.returnvalue);
        			}
        		}
        	}
        	// 수면상태 기상시간 timepicker
        	else if(e.svcid == "TIMEPICKER1")
        	{
        		if(e.reason == 0)
        		{
        			this.div_cont.form.mae_sle_time.set_value(e.returnvalue);
        		}
        	}
        };

        this.on_standardPlugin_permission_result = function(obj, e)
        {
        	trace("this.on_permission_result ::: " + e.svcid);
        	trace("this.on_permission_result ::: " + e.reason);
        	trace("this.on_permission_result ::: " + e.returnvalue);

        	if (e.reason == -9)
        	{
        		this.alert("권한허용이 되지 않았습니다.");
        	}
        };

        // TIMEPICKER
        this.msk_oneditclick = function(obj,e)
        {
        	let param;
        	this.makeStandardObject();
        	// 수면상태 기상시간 timepicker
        	param = {arg1 : "1"
        		,	hour : Sct.Util.getHour()
        		,	min : Sct.Util.getMin()
        	};
        	this.standardPlugin.callMethod("TIMEPICKER", param);
        };

        // 처리자 선택
        this.cmb_manager_oneditclick = function(obj,e)
        {
        	let param;
        	param = {COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")};

        	Sct.tPopup(this, "pop4", 350, 350, param, "TabletPOP::NUB_MANAGER_POP.xfdl", "fn_popCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("onclick",this.formClick,this);
            this.addEventHandler("onload",this.NUB307CT_onload,this);
            this.div_search.addEventHandler("onclick",this.formClick,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.cmb_area_onitemchanged2,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_location_onitemchanged2,this);
            this.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.btn_tDelete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_search.form.btn_tSave.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_search.form.cmb_resident.addEventHandler("oneditclick",this.div_search_cmb_resident_oneditclick,this);
            this.div_search.form.btn_tReset.addEventHandler("onclick",this.fn_resetBtn,this);
            this.div_cont.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_sle_timeB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_sleep_tpB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_sleep_tpH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_sleep_remarkB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_sleep_managerIdB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.cmb_managerId.addEventHandler("oneditclick",this.cmb_manager_oneditclick,this);
            this.div_cont.form.sta_sle_timeH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_sleep_remarkH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_sleep_managerIdH.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.btn_tRecord_sleep.addEventHandler("onclick",this.btn_tRecord_onclick,this);
            this.div_cont.form.mae_sle_time.addEventHandler("oneditclick",this.msk_oneditclick,this);
        };
        this.loadIncludeScript("NUB307CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
