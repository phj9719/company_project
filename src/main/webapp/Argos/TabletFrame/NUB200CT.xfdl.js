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
            this.set_titletext("건강측정 기기연결");
            this.set_background("#f4f9fc");
            if (Form == this.constructor)
            {
                this._setFormPosition(1180,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SN_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_head", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEST_COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_CHECKBOX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CON_MACH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SN_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_machine_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchMach", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","2.12%","65",null,null,"3.39%","4.29%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_main","1.43%","0",null,null,"1.43%","0%",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","50","520",null,null,"0",null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_head");
            obj.set_cssclass("grd_DataList_h2");
            obj.set_cellclickbound("cell");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"기기유형\"/><Cell col=\"3\" text=\"기기번호\"/><Cell col=\"4\" text=\"기기명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:MACH_TP\" displaytype=\"combotext\" combodataset=\"ds_cm_machine_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"3\" text=\"bind:MACH_NO\"/><Cell col=\"4\" text=\"bind:MACH_NM\"/></Band></Format></Formats>");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("Static01","2","0","180","40",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("1");
            obj.set_text("건강측정 기기목록");
            obj.set_font("normal 500 15pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_detail","533","50",null,null,"0.09%","0",null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_DataList_h2");
            obj.set_binddataset("ds_detail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"70\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"기기유형\"/><Cell col=\"2\" text=\"기기번호\"/><Cell col=\"3\" text=\"기기명\"/><Cell col=\"4\" expandchar=\"tDelete\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combotext\" combodataset=\"ds_cm_machine_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\" text=\"bind:MACH_TP\"/><Cell col=\"2\" text=\"bind:MACH_NO\"/><Cell col=\"3\" text=\"bind:MACH_NM\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Static("Static01_00","535","0","200","40",null,null,null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("3");
            obj.set_text("연결된 측정 기기목록");
            obj.set_font("normal 500 15pt/normal \"Noto Sans KR\"");
            this.div_cont.form.div_main.addChild(obj.name, obj);

            obj = new Div("div_search","2.12%","14",null,"40","3.39%",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","390","0","80","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("검색");
            obj.set_cssclass("btn_tSearch");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave",null,"0","90","40","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_tSave");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tReset",null,"0","100","40","100",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_tReset");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("입력기기");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_conn","480","0","430","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_font("normal 500 12pt/normal \"Noto Sans KR\"");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_tabNo","130","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_tabNm","260","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",1180,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edt_tabNo","value","ds_search","MACH_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_tabNm","value","ds_search","MACH_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB200CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB200CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB200CT.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB200CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUB200CT
         * 화면명   	: 건강측정 기기연결
         * 화면설명 	: 태블릿별 건강측정 기기연결
         * 작성일    	: 2021-08-09
         * 작성자   	: 박한준
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
        var fv_Company = nexacro.getApplication().gds_userInfo.getColumn(0,"COMPANY_CD");
        var fv_ServiceTp = nexacro.getApplication().gds_userInfo.getColumn(0,"SERVICE_TP");
        // var fv_appTp = nexacro.getApplication().gv_applicationTp;
        this.fv_currentDS = "";
        this.fv_currentGrid = "";
        this.tranFlag = "";
        this.fv_tabSNo = ""; // 태블릿 시리얼번호
        this.fv_tabNo = ""; // 기기번호
        this.fv_tabNm = ""; // 기기명
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e, false);

        	// 태블릿 정보 가져오기
        //	const param = {};
        //	const standard = this.makeStandardObject();

        // 	this.standardPlugin.callMethod("TabInfo", param);

        	// 웹테스트
         	//this.fv_tabSNo = "daaf291927074b1a";
         	this.fv_tabSNo = nexacro.getApplication().gds_taCurRes.getColumn(0, "TAB_MACADD");
         	this.fn_searchCnt(); // 등록된 태블릿인지 조회
        };
        /* 2021-11-23 삭제, 로그인시 AndroidID 가져옴
        // 앱에서 _oncallback의 callback 호출시
        this.on_standardPlugin_callback = function(obj, e)
        {
        	trace("this.on_callback ::: " + e.svcid);
        	trace("this.on_callback ::: " + e.reason);
        	trace("this.on_callback ::: " + e.returnvalue);

        	if(e.svcid == "TabInfo")
        	{
        		if(e.reason == 0)
        		{
        			trace("this.on_callback ::: " + JSON.stringify(e.returnvalue));
        			const json = e.returnvalue;
        			const manufacturer = json.manufacturer; // 제조사
        			const model = json.model; //  모델명
        			const androidID = json.androidID; // Android ID

        			trace("manufacturer ::: " + manufacturer);
        			trace("model ::: " + model);
        			trace("androidID ::: " + androidID);

        			this.fv_tabSNo = androidID; // 태블릿ID

        			// 등록된 태블릿 기기인지 조회
        			this.fn_searchCnt();

        		}
        		else if(e.reason == -1)
        		{
        			this.alert("입력기기 정보를 가져오는데 실패하였습니다.");
        		}
        	}
        };

        // 앱에서 _onresume 의 callback 호출시
        this.on_standardPlugin_resume = function(obj, e)
        {
        	let str = "";
        	str += "\nthis.on_resume svcid ::: " + e.svcid;
        	str += "\nthis.on_resume reason ::: " + e.reason;
        	str += "\nthis.on_resume returnvalue ::: " + e.returnvalue;

        };

        // 앱에서 _onpermissionresult 의 callback 호출시
        this.on_standardPlugin_permission_result = function(obj, e)
        {
        	let str = "";
        	str += "\nthis.on_permission_result svcid ::: " + e.svcid;
        	str += "\nthis.on_permission_result reason ::: " + e.reason;
        	str += "\nthis.on_permission_result returnvalue ::: " + e.returnvalue;

        }; */

        //검색조건 세팅
        this.fn_serachSet = function ()
        {
        	nexacro.getApplication().gds_taCurRes.setColumn(0, "TAB_MACADD", this.fv_tabSNo);
        	nexacro.getApplication().gds_taCurRes.setColumn(0, "TAB_NO", this.fv_tabNo);
        	nexacro.getApplication().gds_taCurRes.setColumn(0, "TAB_NM", this.fv_tabNm);

        	this.ds_search.setColumn(0,"COMPANY_CD", fv_Company);
        	this.ds_search.setColumn(0,"SERVICE_TP", fv_ServiceTp);
        	this.ds_search.setColumn(0,"SN_NO", this.fv_tabSNo);
        	this.ds_search.setColumn(0,"MACH_NO", this.fv_tabNo);
        	this.ds_search.setColumn(0,"MACH_NM", this.fv_tabNm);
        };
        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 검색, 초기화 버튼
        this.fn_searchBtn = function ()
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

        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	var schCnt = this.ds_searchCnt.rowcount;

        	if(schCnt < 1){
        		this.div_search.form.sta_conn.set_text("※ 등록되지 않은 입력기기이므로 측정 기기연결을 할 수 없습니다.");
        		Sct.alert(this, "000573"); // 등록되지 않은 태블릿으로 기기연결을 할 수 없습니다.
        		return false;
        	}else{
        		this.div_search.form.sta_conn.set_text("※ 등록된 입력기기이므로 측정 기기연결을 할 수 있습니다.");
        		this.fv_tabNo = this.ds_searchCnt.getColumn(0, "MACH_NO"); // 기기번호
        		this.fv_tabNm = this.ds_searchCnt.getColumn(0, "MACH_NM"); // 기기명
        	}

        	// 검색조건 세팅
        	this.fn_serachSet();

        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function ()
        {
        	// 저장 내용 체크
        	if(!Sct.Grid.hasInsertAndUpdateRow(this.ds_head))
        	{
        		Sct.alert(this, "000569", "저장");	// {0}할 내용이 없습니다.
        		return false;
        	}

        	// 저장하시겠습니까?
        	if(!Sct.confirm(this, "000038")) return false;

        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function()
        {
        	//삭제하시겠습니까?
        	if(!Sct.confirm(this, "000152", "")){ // 취소
        		//취소시 ROWTYPE NORMAL TYPE으로 변경
        		this.ds_detail.set_enableevent(false);
        		this.ds_detail.set_updatecontrol(false);
        		this.ds_detail.setRowType(nRow, Dataset.ROWTYPE_NORMAL);
        		this.ds_detail.set_updatecontrol(true);
        		this.ds_detail.set_enableevent(true);
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
        	const inDatasets = "input1=ds_search input2=ds_search";
        	const outDatasets = "ds_head=output1 ds_detail=output2";
        	const argument = "method=getList "
        		+ "sqlId='NUB200CT.NUB200CT_DS_HEAD_S NUB200CT.NUB200CT_DS_DETAIL_S' ";

        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function ()
        {
        	if(!this.fn_save_pre()) return;

        	const svcId = "save";
        	const params = "/NUB200CTController.do";
        	const inDatasets = "input1=ds_head:U";
        	const outDatasets = "";
        	const argument = "method=save "
        		+ "SN_NO="+this.fv_tabSNo;

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);

        };

        // 삭제
        this.fn_delete = function()
        {
        	if(!this.fn_delete_pre()) return;

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_detail:U";
        	const outDatasets = "";
        	const argument = "method=delete "
        				   + "sqlId=NUB200CT.NUB200CT_DS_DETAIL_D ";

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

        		//글로벌변수 초기화
        			nexacro.getApplication().gds_taCurRes.setColumn(0,"CON_PRE_MACADD", "");
        			nexacro.getApplication().gds_taCurRes.setColumn(0,"CON_SUG_MACADD", "");
        			nexacro.getApplication().gds_taCurRes.setColumn(0,"CON_TEM_MACADD", "");
        			nexacro.getApplication().gds_taCurRes.setColumn(0,"CON_COM_MACADD", "");

        			for(var i=0; i<this.ds_detail.rowcount; i++){
        				// 000000000000 > 00:00:00:00:00:00로 변경
        				var macAdd = this.ds_detail.getColumn(i,"MAC_ADD");
        // 				macAdd = macAdd.toString();
        // 				macAdd = macAdd.match(/.{2}/g).join(':');

        				if(this.ds_detail.getColumn(i, "MACH_TP") == "0300"){ // 혈압계
        					nexacro.getApplication().gds_taCurRes.setColumn(0,"CON_PRE_MACADD", macAdd);
        				}else if(this.ds_detail.getColumn(i, "MACH_TP") == "0400"){ // 혈당계
        					nexacro.getApplication().gds_taCurRes.setColumn(0,"CON_SUG_MACADD", macAdd);
        				}else if(this.ds_detail.getColumn(i, "MACH_TP") == "0500"){ // 체온계
        					nexacro.getApplication().gds_taCurRes.setColumn(0,"CON_TEM_MACADD", macAdd);
        				}else if(this.ds_detail.getColumn(i, "MACH_TP") == "0600"){ // 체성분분석기
        					nexacro.getApplication().gds_taCurRes.setColumn(0,"CON_COM_MACADD", macAdd);
        				}
        			}

        		}
        		// 등록기기조회 콜백
        		if(strSvcID == "searchCnt")
        		{
        			this.fn_search();
        		}
        		// 저장 콜백
        		else if(strSvcID == "save")
        		{
        			Sct.alert(this, "000570", "저장");	// {0} 되었습니다.

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
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        // 등록된 태블릿 기기인지조회
        this.fn_searchCnt = function ()
        {
        	const svcId = "searchCnt";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_searchCnt=output1";
        	const argument = "method=getList "
        		+ "sqlId='NUB200CT.NUB200CT_DS_SEARCH_CNT_S'"
        		+ " COMPANY_CD="+ fv_Company
        		+ " SERVICE_TP="+ fv_ServiceTp
        		+ " SN_NO=" + this.fv_tabSNo + " ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 삭제버튼 클릭 이벤트
        this.div_cont_div_main_grd_detail_onexpandup = function(obj,e)
        {
        	if(obj.getBindCellIndex("body", "DEL_COL") == e.col){

        		//삭제버튼 클릭시 rowtype 변경
         		this.ds_detail.set_updatecontrol(false);
         		this.ds_detail.setRowType(e.row, Dataset.ROWTYPE_DELETE);
         		this.ds_detail.set_updatecontrol(true);

        		this.fn_delete();
        	}
        };

        // 기기목록 선택이벤트
        this.ds_head_oncolumnchanged = function(obj,e)
        {
        	var macSeq = this.ds_head.getColumn(e.row, "MAC_SEQ");

        	const svcId = "searchMach";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_searchMach=output1";
        	const argument = "method=getList "
        		+ "sqlId='NUB200CT.NUB200CT_DS_SEARCH_MACH_S '"
        		+ " COMPANY_CD="+fv_Company
        		+ " MAC_SEQ="+macSeq;
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);

        	var machCnt = this.ds_searchMach.getColumn(0,"CNT");

        	if(machCnt > 0){
        		Sct.alert(this, "000572");	// 이미 연결된 기기가 있습니다. 확인 후 다시 연결하시기 바랍니다.
        		this.ds_head.setColumn(e.row,"CHK","0");
        	}

        	if(e.columnid == "CHK" && e.newvalue == "1"){
        		if(this.ds_head.getColumn(e.row, "MACH_TP") == "0300"){ // 혈압계
        			for(var i = 0; i<this.ds_head.rowcount; i++) { // 데이터셋 전체 확인
        				if(this.ds_head.getColumn(i, "MACH_TP") == "0300" && e.row != i){
        					this.ds_head.setColumn(i,"CHK","0");
        				}
        			}
        		}else if(this.ds_head.getColumn(e.row, "MACH_TP") == "0400"){ // 혈당계
        			for(var i = 0; i<this.ds_head.rowcount; i++) { // 데이터셋 전체 확인
        				if(this.ds_head.getColumn(i, "MACH_TP") == "0400" && e.row != i){
        					this.ds_head.setColumn(i,"CHK","0");
        				}
        			}
        		}else if(this.ds_head.getColumn(e.row, "MACH_TP") == "0500"){ // 체온계
        			for(var i = 0; i<this.ds_head.rowcount; i++) { // 데이터셋 전체 확인
        				if(this.ds_head.getColumn(i, "MACH_TP") == "0500" && e.row != i){
        					this.ds_head.setColumn(i,"CHK","0");
        				}
        			}
        		}else if(this.ds_head.getColumn(e.row, "MACH_TP") == "0600"){ // 체성분분석기
        			for(var i = 0; i<this.ds_head.rowcount; i++) { // 데이터셋 전체 확인
        				if(this.ds_head.getColumn(i, "MACH_TP") == "0600" && e.row != i){
        					this.ds_head.setColumn(i,"CHK","0");
        				}
        			}
        		}
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
            this.addEventHandler("onclick",this.formClick,this);
            this.div_cont.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.div_main.form.Static01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.div_main.form.grd_detail.addEventHandler("onexpandup",this.div_cont_div_main_grd_detail_onexpandup,this);
            this.div_cont.form.div_main.form.Static01_00.addEventHandler("onclick",this.formClick,this);
            this.div_search.addEventHandler("onclick",this.formClick,this);
            this.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.btn_tSave.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_search.form.btn_tReset.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.Static01.addEventHandler("onclick",this.formClick,this);
            this.div_search.form.sta_conn.addEventHandler("onclick",this.formClick,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
            this.ds_head.addEventHandler("cancolumnchange",this.ds_head_cancolumnchange,this);
            this.ds_head.addEventHandler("oncolumnchanged",this.ds_head_oncolumnchanged,this);
        };
        this.loadIncludeScript("NUB200CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
