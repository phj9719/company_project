(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("우울 검사");
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


            obj = new Dataset("ds_manager", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_AGE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SGD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SGD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PT\" type=\"INT\" size=\"256\"/><Column id=\"PT_MAX\" type=\"INT\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sgds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SGD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SGD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PT\" type=\"INT\" size=\"256\"/><Column id=\"PT_MAX\" type=\"INT\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_cist_pt", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_sgd_pt", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","2.46%","14",null,"40","3.39%",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","560","0","80","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("검색");
            obj.set_cssclass("btn_tSearch");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tReset",null,"0","100","40","200",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_tReset");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave00",null,"0","90","40","100",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_tSave");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","0","160","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_locale("ko_KR");
            obj.set_displaynulltext("일자");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","170","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_displaynulltext("층(생활실)");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","300","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_location");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("호실");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_resident","430","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_resident");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("입소자명");
            obj.set_buttonsize("0 0");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tDelete",null,"0","90","40","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_tDelete");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","2.46%","67",null,null,"3.39%","4.29%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","75","420","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_pt","0","75","151","100",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("우울 점수\r\n(15/15)");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00","0","200",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_remark","0","195",null,"40","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("비고");
            obj.set_cssclass("sta_tDataHForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_pt","162","88","245","70",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_inputtype("number");
            obj.set_inputfilter("comma,alpha,dot,sign,space,symbol");
            obj.set_textAlign("center");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_tRecord","54.91%","202","60","24",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_tRecord");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","0","5","420","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_manager","162","10","245","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_itemheight("36");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_manager");
            obj.set_buttonsize("0 0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager","0","5","151","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("처리자");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_remark","15","250",null,null,"15","20",null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_font("normal 500 16pt/normal \"Noto Sans KR\"");
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

            obj = new BindItem("item8","Tab00.Tabpage0.form.div_cont.form.sta_residentVal","text","ds_resInfo","NAME_AGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.edt_pt","value","ds_list","PT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.cmb_manager","value","ds_list","MANAGER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.txt_remark","value","ds_list","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB503CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB503CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB503CT.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB503CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    : NUB503CT
         * 화면명   :
         * 화면설명 :
         * 작성일    : 2021-10-12
         * 작성자   :  박한준
         * 수정이력 :
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2021-11-23		조기종		화면 UI && 입소자 선택 변경
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
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e, false);

        	// 검색조건 세팅
        	this.taSearchDataSetting(obj);

        	this.fn_setComboDs(obj);

        	this.ds_location.filter("ARE_CD == '" + this.ds_search.getColumn(0, "AREA") + "'");

        	this.fn_search();
        };

        // 처리자 콤보(간호사, 요양보호사, 사회복지사)
        this.fn_setComboDs = function(obj)
        {
        	const comboDsParamArr = [
        		{ outDsName : "ds_manager", sqlId : "NUB_COMMON.NUB_COMMON_DS_MANAGER_S", param : this.ds_search, bEmptyRow : true }
        		,{outDsName : "ds_location", sqlId : "NUB_COMMON.NUB_COMMON_DS_LOCATION_ALL_S", param : this.ds_search, bEmptyRow : true}
        		,{outDsName : "ds_resident", sqlId : "NUB_COMMON.NUB_COMMON_DS_RESIDENT_ALL_S", param : this.ds_search, bEmptyRow : true}
        	];
        	this.gfn_setComboDs(obj, comboDsParamArr);
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
        	this.fn_reset();
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
        this.fn_delete_pre = function ()
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
        	if(!Sct.confirm(this, "000083", "삭제")) return false;

        	const nRow = this.ds_list.rowposition;
        	this.ds_list.set_updatecontrol(false);
        	this.ds_list.setRowType(nRow, Dataset.ROWTYPE_DELETE);
        	this.ds_list.set_updatecontrol(true);

        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function ()
        {
        	//validation
        	if(!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search input2=ds_search";
        	const outDatasets = "ds_list=output1 ds_resInfo=output2";
        	const argument = "method=getList "
        		+ "sqlId='NUB503CT.NUB503CT_DS_LIST_S NUB_COMMON.NUB_COMMON_DS_RESINFO_S'";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //저장
        this.fn_save = function ()
        {
        	//validation
        	if(!this.fn_save_pre()) return;

        	const svcId = "save";
        	const inDs = "ds_list";
        	this.fn_save_com(svcId, inDs);
        };

        //초기화
        this.fn_reset = function ()
        {
        	this.ds_search.setColumn(0, "DATE", Sct.Util.getToday()); // 오늘
        	this.fn_search();
        }
        //삭제
        this.fn_delete = function ()
        {
        	if(!this.fn_delete_pre()) return;

        	const inDatasets = "input1=ds_list:U";
        	let argument = "method=delete ";
        		argument += "sqlId=NUB503CT.NUB503CT_DS_LIST_D ";

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const outDatasets = "";
        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "AREA", this.ds_resInfo.getColumn(0,"AREA"));
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "LOCATION", this.ds_resInfo.getColumn(0,"LOCATION"));
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "RES_ID", this.ds_resInfo.getColumn(0,"RES_ID"));

        			if (this.ds_list.rowcount < 1)
        			{
        				const nRow = this.ds_list.addRow();
        				this.ds_list.setColumn(nRow, "COMPANY_CD", this.ds_resInfo.getColumn(0,"COMPANY_CD"));
        				this.ds_list.setColumn(nRow, "RES_ID", this.ds_resInfo.getColumn(0,"RES_ID"));
        				this.ds_list.setColumn(nRow, "SGD_DT", this.ds_resInfo.getColumn(0,"DATE"));
        				this.ds_list.setColumn(nRow, "PT", 0);
        				const mRow = this.ds_nu_sgd_pt.findRow("CMCD", '10');
        				this.ds_list.setColumn(nRow, "PT_MAX", this.ds_nu_sgd_pt.getColumn(mRow, "STR1"));

        				// 처리자에 접속자 세팅
        				const userId = nexacro.getApplication().gds_userInfo.getColumn(0,"USER_ID");
        				this.ds_list.setColumn(nRow, "MANAGER_ID", userId);
        			}
        			else
        			{

        			}
        		}
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
         * User Functions
         ***********************************************************************/
        // 안드로이드 네이티브 통신 콜백
        this.on_standardPlugin_callback = function(obj, e)
        {
        // 	trace("this.on_callback ::: " + e.svcid);
        // 	trace("this.on_callback ::: " + e.reason);
        // 	trace("this.on_callback ::: " + e.returnvalue);

        	// STT
        	if(e.svcid == "VOICE1")
        	{
        		if(e.reason == 0)
        		{
        			let rmkValue = this.ds_list.getColumn(0, "REMARK");
        			if (rmkValue == undefined)
        			{
        				this.ds_list.setColumn(0, "REMARK", e.returnvalue);
        			}
        			else
        			{
        				this.ds_list.setColumn(0, "REMARK", rmkValue + " " + e.returnvalue);
        			}
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
        /***********************************************************************
        * Component Event Functions
        ***********************************************************************/
        // 우울점수 값 변경 이벤트
        this.fn_pt_onchanged = function(obj,e)
        {
        	if (e.postvalue > this.ds_list.getColumn(0, "PT_MAX"))
        	{
        		Sct.alert(this, "000580", "'" + this.ds_list.getColumn(0, "PT_MAX") + "'");	// 해당점수는 {0}점을 초과할 수 없습니다.
        		obj.set_value(e.prevalue);
        		return;
        	}
        };

        // 처리자 선택
        this.cmb_manager_oneditclick = function(obj,e)
        {
        	const param = {COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")};

        	Sct.tPopup(this, "pop1", 350, 350, param, "TabletPOP::NUB_MANAGER_POP.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs)
        {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "pop1" :
        			this.ds_list.setColumn(0, "MANAGER_ID", objDs.getColumn(0,"USER_ID"));
        			break;
        		case "pop2" :
        			this.ds_location.filter("ARE_CD == '" + objDs.getColumn(0, "AREA") + "'");
        			this.ds_resident.filter("");
        			this.div_search.form.cmb_area.set_value(objDs.getColumn(0, "AREA"));
        			this.div_search.form.cmb_location.set_value(objDs.getColumn(0, "LOCATION"));
        			this.div_search.form.cmb_resident.set_value(objDs.getColumn(0, "RES_ID"));
        			this.fn_search();
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };

        // 입소자 선택
        this.div_search_cmb_resident_oneditclick = function(obj,e)
        {
        	const param = {
        			COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")
        		,	FLAG : "NUB503CT"
        		,	AREA : this.ds_search.getColumn(0, "AREA")
        		,	LOCATION : this.ds_search.getColumn(0, "LOCATION")
        		,	DATE : this.ds_search.getColumn(0, "DATE")
        	};

        	Sct.tPopup(this, "pop2", 350, 350, param, "TabletPOP::NUB_RESIDENT_POP.xfdl", "fn_popCallback");
        };

        // 비고
        this.btn_tRecord_onclick = function(obj,e)
        {
        	const param = {arg1 : "1"};
        	const stObj = this.makeStandardObject();
        	if(stObj)
        	{
        		this.standardPlugin.callMethod("VOICE", param);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.div_search.addEventHandler("onclick",this.formClick,this);
            this.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.btn_tReset.addEventHandler("onclick",this.fn_resetBtn,this);
            this.div_search.form.btn_tSave00.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.cmb_area_onitemchanged2,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_location_onitemchanged2,this);
            this.div_search.form.cmb_resident.addEventHandler("oneditclick",this.div_search_cmb_resident_oneditclick,this);
            this.div_search.form.btn_tDelete.addEventHandler("onclick",this.fn_deleteBtn,this);
            this.div_cont.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_pt.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_00_00_00_00_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.sta_remark.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.edt_pt.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.div_cont.form.edt_pt.addEventHandler("onchanged",this.fn_pt_onchanged,this);
            this.div_cont.form.edt_pt.addEventHandler("oneditclick",this.edt_oneditclick,this);
            this.div_cont.form.btn_tRecord.addEventHandler("onclick",this.btn_tRecord_onclick,this);
            this.div_cont.form.Static01_00_00_01_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.cmb_manager.addEventHandler("oneditclick",this.cmb_manager_oneditclick,this);
            this.div_cont.form.sta_manager.addEventHandler("onclick",this.formClick,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
            this.ds_sgds_input.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("NUB503CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
