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
            this.set_titletext("로봇인지훈련");
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


            obj = new Dataset("ds_nu_bomi_cont", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_bomi_level", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOM_SEQ\" type=\"STRING\" size=\"0\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"0\"/><Column id=\"BOM_DT\" type=\"STRING\" size=\"0\"/><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"0\"/><Column id=\"PROGRAM_NM\" type=\"STRING\" size=\"0\"/><Column id=\"PROG_TIME_ID\" type=\"STRING\" size=\"0\"/><Column id=\"PROG_TIME_NM\" type=\"STRING\" size=\"0\"/><Column id=\"CONTENT_ID\" type=\"STRING\" size=\"0\"/><Column id=\"CONTENT_NM\" type=\"STRING\" size=\"0\"/><Column id=\"CONT_LVL\" type=\"STRING\" size=\"0\"/><Column id=\"CONT_PT\" type=\"STRING\" size=\"0\"/><Column id=\"CORR_PT\" type=\"STRING\" size=\"0\"/><Column id=\"FRONTAL_PT\" type=\"STRING\" size=\"0\"/><Column id=\"PARIETAL_PT\" type=\"STRING\" size=\"0\"/><Column id=\"TEMPORAL_PT\" type=\"STRING\" size=\"0\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"0\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"0\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"0\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"0\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"0\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"0\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"0\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"0\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"0\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"0\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"0\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"0\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"0\"/><Column id=\"KEYVALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bomi_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOM_SEQ\" type=\"STRING\" size=\"0\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"0\"/><Column id=\"BOM_DT\" type=\"STRING\" size=\"0\"/><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"0\"/><Column id=\"PROGRAM_NM\" type=\"STRING\" size=\"0\"/><Column id=\"PROG_TIME_ID\" type=\"STRING\" size=\"0\"/><Column id=\"PROG_TIME_NM\" type=\"STRING\" size=\"0\"/><Column id=\"CONTENT_ID\" type=\"STRING\" size=\"0\"/><Column id=\"CONTENT_NM\" type=\"STRING\" size=\"0\"/><Column id=\"CONT_LVL\" type=\"STRING\" size=\"0\"/><Column id=\"CONT_PT\" type=\"STRING\" size=\"0\"/><Column id=\"CORR_PT\" type=\"STRING\" size=\"0\"/><Column id=\"FRONTAL_PT\" type=\"STRING\" size=\"0\"/><Column id=\"PARIETAL_PT\" type=\"STRING\" size=\"0\"/><Column id=\"TEMPORAL_PT\" type=\"STRING\" size=\"0\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"0\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"0\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"0\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"0\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"0\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"0\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"0\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"0\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"0\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"0\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"0\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"0\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"0\"/><Column id=\"KEYVALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_AGE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_tReset",null,"0","100","40","100",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_tReset");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave00",null,"0","90","40","0",null,null,null,null,null,this.div_search.form);
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

            obj = new Div("div_cont","2.46%","67",null,null,"3.39%","4.29%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","5","610","150",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02","0","5","610","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("프로그램");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","610","5","250","150",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_tDataBForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01","610","5","250","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("점수(성취율)");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_cont","18","65","570","70",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_itemheight("36");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_nu_bomi_cont");
            obj.set_buttonsize("0 0");
            obj.set_value("");
            obj.set_index("-1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","860","5","250","150",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_00_00","860","5","250","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_text("처리자");
            obj.set_cssclass("sta_tDataHForm2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","170",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_cssclass("grd_DataList_h2");
            obj.set_autosizingtype("row");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"170\"/><Column size=\"270\"/><Column size=\"200\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"일자\"/><Cell col=\"2\" text=\"프로그램\"/><Cell col=\"3\" text=\"점수(성취율)\"/><Cell col=\"4\" text=\"처리자\"/><Cell col=\"5\" expandchar=\"tEdit\"/><Cell col=\"6\" expandchar=\"tDelete\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:BOM_DT\" displaytype=\"date\"/><Cell col=\"2\" combocodecol=\"CMCD\" combodatacol=\"CMNM\" combodataset=\"ds_nu_bomi_cont\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:PROGRAM_NM\"/><Cell col=\"3\" text=\"bind:CONT_PT\"/><Cell col=\"4\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"CMCD\" combodatacol=\"CMNM\" combodataset=\"ds_manager\" text=\"bind:MANAGER_ID\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_manager","880","65","210","70",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_itemheight("36");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_innerdataset("ds_manager");
            obj.set_buttonsize("0 0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Edit("edt_contPt","630","65","210","70",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("9");
            obj.set_inputtype("number");
            obj.set_inputfilter("alpha,comma,dot,sign,symbol,space");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("center");
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

            obj = new BindItem("item4","div_cont.form.cmb_cont","value","ds_bomi_input","PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.edt_contPt","value","ds_bomi_input","CONT_PT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.cmb_manager","value","ds_bomi_input","MANAGER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Tab00.Tabpage0.form.div_cont.form.sta_residentVal","text","ds_resInfo","NAME_AGE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB501CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB501CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB501CT.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB501CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    : NUB501CT
         * 화면명   :
         * 화면설명 :
         * 작성일    : 2021-10-07
         * 작성자   :  박한준
         * 수정이력 :
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

        // 처리자 콤보
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
        	//this.fn_delete();
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
        	if(Sct.Util.isEmpty(this.ds_bomi_input.getColumn(0,"COMPANY_CD")))
        	{
        		Sct.alert(this, "000569", "저장");	// {0}할 내용이 없습니다.
        		return false;
        	}

        	var companyCd = this.ds_bomi_input.getColumn(0, "COMPANY_CD");
        	var resId = this.ds_bomi_input.getColumn(0, "RES_ID");
        	var bomDt = this.ds_bomi_input.getColumn(0, "BOM_DT");
        	var programNm = this.ds_bomi_input.getColumn(0, "PROGRAM_NM");
        	//var contLvl = this.ds_bomi_input.getColumn(0, "CONT_LVL");
        	var keyvalue = companyCd + "_" + resId + "_" + bomDt + "_" + programNm;

        	// 저장하시겠습니까?
        	if(!Sct.confirm(this, "000038")) return false;

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

        	// 삭제하시겠습니까?
        	if(!Sct.confirm(this, "000083", "삭제")) return false;

        	var nRow = this.ds_list.rowposition;
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

        	this.ds_bomi_input.clearData(); // INPUT 데이터셋 클리어
        	this.ds_bomi_input.addRow();

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search input2=ds_search";
        	var outDatasets = "ds_list=output1 ds_resInfo=output2";
        	var argument = "method=getList "
        		+ "sqlId='NUB501CT.NUB501CT_DS_LIST_S NUB_COMMON.NUB_COMMON_DS_RESINFO_S'";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //저장
        this.fn_save = function ()
        {
        	//validation
        	if(!this.fn_save_pre()) return;

        	//입력 필수여부체크
        	//if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;
        	let svcId = "save";
        	let inDs = "ds_bomi_input"
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

        	let inDatasets = "input1=ds_list:U";
        	let argument = "method=delete ";
        		argument += "sqlId=NUB501CT.NUB501CT_DS_LIST_D ";

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
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "AREA", this.ds_search.getColumn(0,"AREA"));
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "LOCATION", this.ds_search.getColumn(0,"LOCATION"));
        			nexacro.getApplication().gds_taCurRes.setColumn(0, "RES_ID", this.ds_search.getColumn(0,"RES_ID"));

        			if(this.ds_list.rowcount < 1){ // 조회된 데이터가 없으면 작성일 빈값
        				this.div_cont.form.mae_dateVal.set_value("");
        			}else{
        				var date = this.ds_search.getColumn(0,"DATE");
        				this.div_cont.form.mae_dateVal.set_value(date);
        			}
        		}
        		else if(strSvcID == "save")
        		{
        			Sct.alert(this, "000570", "저장");	// {0} 되었습니다.
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
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/

        /***********************************************************************
        * Component Event Functions
        ***********************************************************************/
        // editbox 클릭 이벤트
        this.fn_onsetfocus = function()
        {
        	//if(this.fv_currentDS_i.getRowType(0) !=2 || this.fv_currentDS_i.getRowType(0) !=2 ){ // 행추가나 수정상태값이 아닌 경우
        	if(this.ds_bomi_input.getRowType(0) == 1 || this.ds_bomi_input.getRowType(0) == 2){ // 노멀 또는 행추가 상태이면 세팅
        		if(Sct.Util.isEmpty(this.ds_bomi_input.getColumn(0,"COMPANY_CD"))){ // 법인코드가 빈값이면 세팅

        			this.ds_bomi_input.setColumn(0, "COMPANY_CD", this.ds_resInfo.getColumn(0,"COMPANY_CD"));
        			this.ds_bomi_input.setColumn(0, "RES_ID", this.ds_resInfo.getColumn(0,"RES_ID"));
        			this.ds_bomi_input.setColumn(0, "BOM_DT", this.ds_resInfo.getColumn(0,"DATE"));

        			// 처리자에 접속자 세팅
        			var userId = nexacro.getApplication().gds_userInfo.getColumn(0,"USER_ID");
        			this.ds_bomi_input.setColumn(0, "MANAGER_ID", userId);

        		}

        	}

        };

        // 그리드 확장버튼
        this.fn_grid_onexpandup = function(obj,e)
        {
        	// 수정버튼 클릭
        	if(obj.getBindCellIndex("body", "EDIT_COL") == e.col)
        	{
        		this.ds_bomi_input.copyRow(0, this.ds_list, e.row);
        		this.ds_bomi_input.set_updatecontrol(false);
        		this.ds_bomi_input.setRowType(0, Dataset.ROWTYPE_UPDATE);
        		this.ds_bomi_input.set_updatecontrol(true);
        	}

        	// 삭제버튼 클릭
        	if(obj.getBindCellIndex("body", "DEL_COL") == e.col)
        	{
        		this.ds_list.set_rowposition(e.row);
        		this.fn_delete();
        	}
        };

        // 처리자 선택
        this.cmb_manager_oneditclick = function(obj,e)
        {
        	const param = {COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")};

        	Sct.tPopup(this, "pop1", 350, 350, param, "TabletPOP::NUB_MANAGER_POP.xfdl", "fn_popCallback");
        };

        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "pop1" :
        			this.ds_bomi_input.setColumn(0, "MANAGER_ID", objDs.getColumn(0,"USER_ID"));
        			break;
        		case "pop2" :
        			this.ds_bomi_input.setColumn(0, "PROGRAM_NM", objDs.getColumn(0, "CMCD"));
        			break;
        		case "pop3" :
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

        // 프로그램 선택
        this.div_cont_cmb_cont_oneditclick = function(obj,e)
        {
        	const param = {COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")
        			,	DATASET : this.ds_nu_bomi_cont
        	};

        	Sct.tPopup(this, "pop2", 350, 350, param, "TabletPOP::NUB_BOMI_CONT_POP.xfdl", "fn_popCallback");
        };

        // 입소자 선택
        this.div_search_cmb_resident_oneditclick = function(obj,e)
        {
        	const param = {
        			COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")
        		,	FLAG : "NUB501CT"
        		,	AREA : this.ds_search.getColumn(0, "AREA")
        		,	LOCATION : this.ds_search.getColumn(0, "LOCATION")
        		,	DATE : this.ds_search.getColumn(0, "DATE")
        	};

        	Sct.tPopup(this, "pop3", 350, 350, param, "TabletPOP::NUB_RESIDENT_POP.xfdl", "fn_popCallback");
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
            this.div_cont.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static01_00_00_01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_00_00_01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.cmb_cont.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.div_cont.form.cmb_cont.addEventHandler("oneditclick",this.div_cont_cmb_cont_oneditclick,this);
            this.div_cont.form.Static01_00_00_01_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.Static02_00_00_01_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.grd_list.addEventHandler("onexpandup",this.fn_grid_onexpandup,this);
            this.div_cont.form.cmb_manager.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.div_cont.form.cmb_manager.addEventHandler("oneditclick",this.cmb_manager_oneditclick,this);
            this.div_cont.form.edt_contPt.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.div_cont.form.edt_contPt.addEventHandler("oneditclick",this.edt_oneditclick,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
            this.ds_bomi_input.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("NUB501CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
