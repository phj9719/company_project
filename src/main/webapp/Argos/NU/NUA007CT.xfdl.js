(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMA003CT");
            this.set_titletext("구역설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1112,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cm_service_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_sex", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_room", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"INT\" size=\"256\"/><Column id=\"SCH_GRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_machine_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_area_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","22",null,"74","0.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("s01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_are_nm","2","26","100","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("층/구역명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_loc_nm","245","26","110","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("생활실/위치명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_are_nm","112","26","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_text("ㄴㅇㄴㅇ");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_loc_nm","362","26","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_text("ㄴㅇㄴㅇ");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_use_yn","495","26","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_use_yn","590","26","60","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cm_use_yn");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0","120",null,null,"0.00%","0.00%",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_gHMove","540","40%","25","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","540",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","7","194","22",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_text("층/구역 목록");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","31",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_readonly("false");
            obj.set_binddataset("ds_head");
            obj.set_extendsizetype("row");
            obj.set_border("3px solid rgba(119,119,119,1), 1px solid rgba(229,229,229,1), 1px solid rgba(229,229,229,1), 1px solid rgba(229,229,229,1)");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"층/구역코드\" cssclass=\"CellEssential\"/><Cell col=\"4\" text=\"층/구역명\"/><Cell col=\"5\" text=\"유형\"/><Cell col=\"6\" text=\"비고\"/><Cell col=\"7\" text=\"사용유무\"/><Cell col=\"8\" text=\"등록자ID\"/><Cell col=\"9\" text=\"등록자명\"/><Cell col=\"10\" text=\"등록일자\"/><Cell col=\"11\" text=\"수정자명\"/><Cell col=\"12\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"expr:currow+1\"/><Cell col=\"3\" text=\"bind:ARE_CD\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot; ? 'normal' : 'none'\"/><Cell col=\"4\" text=\"bind:ARE_NM\" edittype=\"normal\"/><Cell col=\"5\" edittype=\"combo\" combocodecol=\"CMCD\" combodatacol=\"CMNM\" combodataset=\"ds_nu_area_tp\" text=\"bind:ARE_TP\" displaytype=\"combotext\"/><Cell col=\"6\" edittype=\"textarea\" wordWrap=\"char\" textAlign=\"left\" textareaacceptsenter=\"true\" textareaautoselect=\"true\" text=\"bind:REMARK\"/><Cell col=\"7\" text=\"bind:USE_YN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"8\" text=\"bind:REG_USER\"/><Cell col=\"9\" text=\"bind:REG_USER_NM\"/><Cell col=\"10\" text=\"bind:REG_DT\" displaytype=\"date\"/><Cell col=\"11\" text=\"bind:MOD_USER_NM\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_alert","110","11","363","22",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("3");
            obj.set_text("※ 유형을 생활실로 설정하시면 입소자의 층과 생활실에 적용됩니다.");
            obj.set_font("normal 8pt/normal \"Arial\"");
            obj.set_cssclass("sta_alert");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_paging","0",null,null,"30","214","3",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_url("CM_POP::CM_PAGING_DIV.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"1","80","29","0",null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("4");
            obj.set_text("행추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","565","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","7","220","22",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("생활실/위치 목록");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"1","80","29","0",null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","31",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_detail");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_extendsizetype("row");
            obj.set_border("3px solid rgba(119,119,119,1), 1px solid rgba(229,229,229,1), 1px solid rgba(229,229,229,1), 1px solid rgba(229,229,229,1)");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"층/구역코드\" cssclass=\"CellEssential\"/><Cell col=\"4\" text=\"생활실/위치코드\" cssclass=\"CellEssential\"/><Cell col=\"5\" text=\"생활실/위치명\" cssclass=\"CellEssential\"/><Cell col=\"6\" text=\"유형\"/><Cell col=\"7\" text=\"비고\"/><Cell col=\"8\" text=\"사용유무\"/><Cell col=\"9\" text=\"등록자ID\"/><Cell col=\"10\" text=\"등록자명\"/><Cell col=\"11\" text=\"등록일자\"/><Cell col=\"12\" text=\"수정자명\"/><Cell col=\"13\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:ARE_CD\" combodataset=\"ds_cm_machine_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"4\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot; ? 'normal' : 'none'\" text=\"bind:LOC_CD\"/><Cell col=\"5\" text=\"bind:LOC_NM\" edittype=\"normal\"/><Cell col=\"6\" edittype=\"combo\" text=\"bind:LOC_TP\" combocodecol=\"CMCD\" combodatacol=\"CMNM\" combodataset=\"ds_nu_area_tp\" displaytype=\"combotext\"/><Cell col=\"7\" text=\"bind:REMARK\" edittype=\"textarea\" displaytype=\"normal\" wordWrap=\"char\" textareaacceptsenter=\"true\" textareaautoselect=\"true\" verticalAlign=\"middle\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:USE_YN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"9\" text=\"bind:REG_USER\" edittype=\"none\"/><Cell col=\"10\" text=\"bind:REG_USER_NM\" edittype=\"none\"/><Cell col=\"11\" text=\"bind:REG_DT\" displaytype=\"date\" edittype=\"none\"/><Cell col=\"12\" text=\"bind:MOD_USER_NM\" edittype=\"none\"/><Cell col=\"13\" displaytype=\"date\" text=\"bind:MOD_DT\" edittype=\"none\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static60","0","-1","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sMove","44.60%","96",null,"16","44.60%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::search_open.png\') no-repeat transparent");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1112,620,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_search.form.edt_are_nm","value","ds_search","ARE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.edt_loc_nm","value","ds_search","LOC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cmb_use_yn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM_POP::CM_PAGING_DIV.xfdl");
        };
        
        // User Script
        this.addIncludeScript("NUA007CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA007CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA007CT.xfdl", function() {
        /***********************************************************************
         * 화면ID   : NUA007CT.xfdl
         * 화면명   :
         * 화면설명 : 입소자별 기기등록
         * 작성일   : 2021-06-16 10:32
         * 작성자   : SOOIM
         * 수정이력 :
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2021.06.16		SOOIM		최초작성
         ***********************************************************************
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/
        /***********************************************************************
         * Form Variables
         ***********************************************************************/

        var fv_Company = nexacro.getApplication().gds_userInfo.getColumn(0,"COMPANY_CD");
        var fv_ServiceTp = nexacro.getApplication().gds_userInfo.getColumn(0,"SERVICE_TP");
        var fv_appTp = nexacro.getApplication().gv_applicationTp;

        this.fv_currentDS = this.ds_detail;
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_head;

        this.fileGroupId = "";
        this.fv_currentTab = 0;
        this.gv_NextEmpNo = "";

        this.saveUrl = nexacro.getEnvironment().services["svcurl"].url + "/common/";

        this.fv_saveRefNo = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.setColumn(0,"COMPANY_CD",fv_Company);
        	this.ds_search.setColumn(0,"SERVICE_TP",fv_ServiceTp);
        	this.ds_search.setColumn(0,"APPLICATION_TP",fv_appTp);

        	//rowTypeValidation 설정
        	var dsArr = ["ds_detail"];
        	this.gfn_rowTypeValidationDs(dsArr);

        	//페이징 처리 초기화
        	//this.fn_initPageSet();

        	//drag 버튼 활성화
        	this.fn_setDivDrag();

        	// 오픈시 전체 조회
        	this.fn_search();

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.edt_are_nm.setFocus();
        };

        //페이징 처리 초기화
        this.fn_initPageSet = function()
        {
        	//페이징처리 초기화
        	this.ds_head.pageRowCount		= 50;											//조회될 row 갯수 (page Size)
            this.ds_head.pageCount			= 10;											//최대 페이지 갯수 (page Scale)
            this.ds_head.pageTotalVisible	= false;										//하단 page Size, pageScale 등 입력 div show YN
        	this.ds_head.pageNo				= 1;											//최초조회시 default 페이지 번호
        	this.ds_head.pageFunctionName	= "fn_search";									//페이지 버튼(1,2,3...)클릭시 조회할 function name
        	this.div_cont.form.div_left.form.div_paging.form.fn_init(this, this.ds_head);	//페이지 form 초기화

        }

        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 조회 버튼
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
        	this.fn_delete();
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
             //조회전 그리드에 변경된 데이터가 있을경우 ..
             if(Sct.Grid.isUpdate(this.ds_detail)
        		//|| Sct.Grid.isUpdate(this.ds_schdl)
        		){
                 //메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
                 if(!Sct.confirm(this,"000171","")){
                     return false;
                 }
             }

             //조회조건 필수여부확인
        	 if(!this.gfn_findSnull(this.div_search)) return false;


        	 return true;
        };

        //저장 전 validation
        this.fn_save_pre = function ()
        {
        	//저장여부
        	if (!Sct.Grid.hasInsertAndUpdateRow(this.fv_currentDS))
        	{
        		Sct.alert(this, "000240"); //추가나 수정한 데이터가 없습니다.
        		return false;
        	}

        	//입력 필수여부체크
        	if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;

        	//입력한값 중복 여부 체크
        	var keyArr ;
        	if(this.fv_currentDS.name == "ds_head"){
        		keyArr = ["COMPANY_CD", "ARE_CD"];
        	}
        	if(this.fv_currentDS.name == "ds_detail"){
        		keyArr = ["COMPANY_CD", "LOC_CD"];
        	}
        	if(!this.gfn_duplicateCheck(this.fv_currentDS, keyArr)) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	//데이터 저장전 저장할 key 값 dataset 변수에 저장
        	this.gfn_saveKeyArr(this.fv_currentDS, keyArr);
        	this.fv_saveRefNo = this.ds_head.getColumn(this.ds_head.rowposition, "ARE_CD");
        	return true;
        };


        // 삭제 전 validation
        this.fn_delete_pre = function ()
        {
        	if (!Sct.Grid.hasDeletedRow(this.fv_currentDS))
        	{
        		Sct.alert(this, "000150"); //삭제할 데이터가 없습니다.
        		return false;
        	}
        	//삭제하시겠습니까?
        	if(!Sct.confirm(this, "000152", "")) return false;

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

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_head=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA007CT.NUA007CT_DS_HEAD_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        //저장
        this.fn_save = function ()
        {
        	//입력 필수여부체크
        	if(!this.fn_save_pre()) return false;

        	let svcId = "save";
        	let inDs = "ds_head,ds_detail"
        	this.fn_save_com(svcId, inDs);
        };
        //삭제
        this.fn_delete = function ()
        {
        	//validation
        	if(!this.fn_delete_pre()) return;

        	var sqlId = "";
        	if(this.fv_currentDS.name == "ds_head")	sqlId = "NUA007CT.NUA007CT_DS_HEAD_D";
        	if(this.fv_currentDS.name == "ds_detail")	sqlId = "NUA007CT.NUA007CT_DS_DETAIL_D";

        	var svcId = "delete";
        	var params = "/commonController.do";
        	var inDatasets = "input1=" +  this.fv_currentDS.name + ":U";
        	var outDatasets = "";
        	var argument = "method=delete "
        		+ "sqlId=" + sqlId + " ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        this.fn_searchDetail = function ()
        {
        	var companyCd = this.ds_head.getColumn(this.ds_head.rowposition, "COMPANY_CD");
        	var areCd = this.ds_head.getColumn(this.ds_head.rowposition,"ARE_CD");
        	var svcId = "searchDetail";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_detail=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA007CT.NUA007CT_DS_DETAIL_S "
        		+ "COMPANY_CD=" + companyCd + " "
        		+ "ARE_CD=" + areCd + " ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };
        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			var count = this.ds_head.rowcount;
        			Sct.alert(this, "000175", count + "|");

        			//서비스 조회 시 return 받은 block count와 총 row 수 전달
        			//this.div_cont.form.div_left.form.div_paging.form.fn_callAfter();
        			//저장후 조회후 변경된 row로 rowposition 설정
        			//this.gfn_saveAfterFindRow(this.ds_head);
        			this.fn_findMstRow(this.fv_saveRefNo);

        		}else if(strSvcID == "save" || strSvcID == "delete")
        		{
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

        // 작업후 작업 정보 조회
        this.fn_findMstRow = function(fv_saveRefNo) {
        	var sFindRow = this.ds_head.findRow("ARE_CD", fv_saveRefNo);
        	if(sFindRow > -1) {
        		this.ds_head.set_rowposition(sFindRow);
        	}
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/


        //코드 팝업 CALLBACK
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        };


        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        //drag 버튼 활성화
        this.fn_setDivDrag = function()
        {
        	//divCont
        	this.gfn_setDivDrag(this.div_cont.form.btn_gHMove, this.div_cont.form.div_left, this.div_cont.form.div_right);
        }

        this.ds_head_onrowposchanged = function(obj,e)
        {
        	this.fn_searchDetail();
        };

        //---------------------------------------행추가---------------------------------------------


        this.div_cont_div_left_btn_add_onclick = function(obj,e)
        {
        	var nRow = this.ds_head.addRow();
        	this.ds_head.setColumn(nRow, "COMPANY_CD",fv_Company);
        	this.ds_head.setColumn(nRow, "USE_YN",'Y');
        	this.ds_head.setColumn(nRow, "ARE_TP",'10');
        };

        this.div_cont_div_right_btn_add_onclick = function(obj,e)
        {
        	//헤더가 추가행일경우
        	if(this.ds_head.getRowType(this.ds_head.rowposition) == Dataset.ROWTYPE_INSERT)
        	{
        		Sct.alert(this, "000179"); //저장 후 행추가 해주시기 바랍니다.
        		return ;
        	}

        	var nRow = this.ds_detail.addRow();
        	this.ds_detail.setColumn(nRow, "COMPANY_CD",fv_Company);
        	this.ds_detail.setColumn(nRow, "ARE_CD",this.ds_head.getColumn(this.ds_head.rowposition,"ARE_CD"));
        	this.ds_detail.setColumn(nRow, "USE_YN",'Y');
        	this.ds_detail.setColumn(nRow, "LOC_TP",'10');
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.div_search.form.cmb_use_yn.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_left.form.grd_head.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.grd_head.addEventHandler("oncelldblclick",this.div_cont_grd_head_oncelldblclick,this);
            this.div_cont.form.div_left.form.btn_add.addEventHandler("onclick",this.div_cont_div_left_btn_add_onclick,this);
            this.div_cont.form.div_right.form.btn_add.addEventHandler("onclick",this.div_cont_div_right_btn_add_onclick,this);
            this.div_cont.form.div_right.form.grd_detail.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_detail.addEventHandler("onexpandup",this.div_cont_grd_list_onexpandup,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_head.addEventHandler("oncolumnchanged",this.ds_head_oncolumnchanged,this);
            this.ds_head.addEventHandler("onrowposchanged",this.ds_head_onrowposchanged,this);
            this.ds_detail.addEventHandler("oncolumnchanged",this.ds_detail_oncolumnchanged,this);
            this.ds_detail.addEventHandler("cancolumnchange",this.ds_detail_cancolumnchange,this);
        };
        this.loadIncludeScript("NUA007CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
