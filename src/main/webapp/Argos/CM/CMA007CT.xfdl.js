(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMA007CT");
            this.set_titletext("권한관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1112,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_user", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_group", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_role", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_application_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_service_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_KOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_company_cd_s", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","22",null,"74","0.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("s01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_user_id","15","41","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("사용자ID");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_user_id","110","41","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_user_nm_kor","254","41","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("사원명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_user_nm_kor","349","41","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_company","15","11","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("법인명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_serv_tp","255","11","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_menu_tp","495","11","124","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("응용프로그램유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_company","110","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_company_cd_s");
            obj.set_codecolumn("COMPANY_CD");
            obj.set_datacolumn("COMPANY_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_serv_tp","350","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cm_service_tp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_menu_tp","625","11","160","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cm_application_tp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_cssclass("essential");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0","120",null,null,"0.00%","0.00%",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_gHMove","645","40%","25","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","645",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_user","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_user");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"127\"/><Column size=\"128\"/><Column size=\"109\"/><Column size=\"106\"/><Column size=\"80\"/><Column size=\"98\"/><Column size=\"95\"/><Column size=\"99\"/><Column size=\"91\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"법인명\"/><Cell col=\"2\" text=\"서비스유형\"/><Cell col=\"3\" text=\"사용자ID\"/><Cell col=\"4\" text=\"사용자명\"/><Cell col=\"5\" text=\"부서명\"/><Cell col=\"6\" text=\"등록자ID\"/><Cell col=\"7\" text=\"등록자명\"/><Cell col=\"8\" text=\"등록일자\"/><Cell col=\"9\" text=\"수정자명\"/><Cell col=\"10\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:COMPANY_CD\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"gds_company\" combodatacol=\"COMPANY_NM\" combocodecol=\"COMPANY_CD\"/><Cell col=\"2\" text=\"bind:SERVICE_TP\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_cm_service_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"3\" text=\"bind:USER_ID\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:USER_NM_KOR\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:REG_USER\"/><Cell col=\"7\" text=\"bind:REG_USER_NM\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:REG_DT\"/><Cell col=\"9\" text=\"bind:MOD_USER_NM\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","7","194","22",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("사용자 리스트");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","670","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_gVMove","40%","217","50","25",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_icon("URL(\'imagerc::grid_vertical.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Div("div_up","0","0",null,"217","0",null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_group","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_group");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"96\"/><Column size=\"90\"/><Column size=\"94\"/><Column size=\"88\"/><Column size=\"92\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"레벨\"/><Cell col=\"3\" text=\"역할코드\"/><Cell col=\"4\" text=\"역할명\"/><Cell col=\"5\" text=\"설명\"/><Cell col=\"6\" text=\"등록자ID\"/><Cell col=\"7\" text=\"등록자명\"/><Cell col=\"8\" text=\"등록일자\"/><Cell col=\"9\" text=\"수정자명\"/><Cell col=\"10\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"expr:currow + 1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"bind:GRP_CD\"/><Cell col=\"4\" text=\"bind:GRP_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:GRP_DESC\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:REG_USER\"/><Cell col=\"7\" text=\"bind:REG_USER_NM\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:REG_DT\"/><Cell col=\"9\" text=\"bind:MOD_USER_NM\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","7","194","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("1");
            obj.set_text("역할 리스트");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Button("btn_addrow",null,"0","148","29","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("2");
            obj.set_text("사용자별 역할 추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Div("div_down","0","239",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_role","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_role");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"81\"/><Column size=\"85\"/><Column size=\"82\"/><Column size=\"83\"/><Column size=\"81\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"NO\"/><Cell col=\"3\" text=\"역할코드\"/><Cell col=\"4\" text=\"역할명\"/><Cell col=\"5\" text=\"설명\"/><Cell col=\"6\" text=\"등록자ID\"/><Cell col=\"7\" text=\"등록자명\"/><Cell col=\"8\" text=\"등록일자\"/><Cell col=\"9\" text=\"수정자명\"/><Cell col=\"10\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" text=\"bind:GRP_CD\"/><Cell col=\"4\" text=\"bind:GRP_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:GRP_DESC\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:REG_USER\"/><Cell col=\"7\" text=\"bind:REG_USER_NM\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:REG_DT\"/><Cell col=\"9\" text=\"bind:MOD_USER_NM\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","7","194","22",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("1");
            obj.set_text("사용자별 역할 리스트");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("Static60","0","0","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sMove","44.78%","96",null,"16","44.78%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::search_open.png\') no-repeat transparent");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1112,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_search.form.edt_user_id","value","ds_search","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_user_nm_kor","value","ds_search","USER_NM_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cmb_company","value","ds_search","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cmb_serv_tp","value","ds_search","SERVICE_TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cmb_menu_tp","value","ds_search","APPLICATION_TP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMA007CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("CMA007CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("CMA007CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    : SMD040CT
         * 화면명   : 사용자별 권한관리
         * 화면설명 :  사용자별 권한관리 화면.
         * 작성일    : 2017-07-31 11:59
         * 작성자   : 김정록
         * 수정이력 :
         ***********************************************************************
         *     	수정일   	수정자   	내용
         *		2020-06-22 	배영걸		17 버전업
         *		2021-11-02		SOOIM		1차수정
         ***********************************************************************
         ***********************************************************************
        */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = this.ds_role;
        this.fv_currentGrid = this.div_cont.form.div_right.form.div_down.form.grd_role;
        this.fv_rowidx;
        this.fv_form;
        this.nMoveX;
        this.nMoveY;
        this.fv_flag = false;
        this.outvar = "";

        var fv_Company = nexacro.getApplication().gv_company; // 회사코드
        var fv_ServiceTp = nexacro.getApplication().gds_userInfo.getColumn(0,"SERVICE_TP");
        this.pgmId = nexacro.getApplication().gv_curWinKey;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e);
        	this.fv_form = obj;
        	this.fn_setComboDs(obj);
        	this.div_cont.form.div_right.form.div_up.form.btn_addrow.set_visible(true);

        	//drag 버튼 활성화
        	this.gfn_setDivDrag(this.div_cont.form.btn_gHMove, this.div_cont.form.div_left, this.div_cont.form.div_right);
        	this.gfn_setDivDrag(this.div_cont.form.div_right.form.btn_gVMove, this.div_cont.form.div_right.form.div_up, this.div_cont.form.div_right.form.div_down);

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.cmb_company.setFocus();
        };

        this.fn_setComboDs = function(obj)
        {
             var comboDsParamArr = [
        					    { outDsName : "ds_company_cd_s", sqlId : "CMA002CT.CMA002CT_COMPANY_CD_S",param : "", bEmptyRow : true}
                            ];
           this.gfn_setComboDs(obj, comboDsParamArr);
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
        	if(Sct.Grid.isUpdate(this.div_cont.form.div_right.form.div_down.form.grd_role))
        	{
        		//메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
        		if(!Sct.confirm(this,"000171","")){
        			this.div_cont.form.div_right.form.div_down.form.grd_role.setFocus();
                    return false;
        		}
        	}

        	//조회조건 필수여부확인
        	 if(!this.gfn_findSnull(this.div_search)) return false;

        	 //디테일 초기화
        	 this.ds_group.clearData();
        	 this.ds_role.clearData();
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

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function ()
        {
        	//변경여부
        	if (!Sct.Grid.hasDeletedRow(this.fv_currentDS))
        	{
        		Sct.alert(this, "000150"); //삭제할 데이터가 없습니다.
        		return false;
        	}

        	//다른상태값 존재여부
        	if(!Sct.Grid.hasDifferentRowType(this.fv_currentDS, Dataset.ROWTYPE_DELETE))
        	{
        		Sct.alert(this, "000239"); //삭제작업 외 다른 작업상태가 존재합니다.
        		return false;
        	}

        	//삭제하시겠습니까?
        	if(!Sct.confirm(this, "000152", "")) return false;

        	return true;
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //Header 조회
        this.fn_search = function ()
        {
        	//validation
        	if(!this.fn_search_pre()) return;

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_user=output1";
        	var argument = "method=getList "
        		+ "sqlId=CMA007CT.CMA007CT_DS_USER_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //Detail 조회
        this.fn_searchDetail = function ()
        {
        	var nRow = this.ds_user.rowposition;
        	var userId = this.ds_user.getColumn(nRow, "USER_ID");
        	var comCd = this.ds_user.getColumn(nRow, "COMPANY_CD");
        	var appTp = this.div_search.form.cmb_menu_tp.value;
        	var svcTp = this.ds_user.getColumn(nRow, "SERVICE_TP");

        	var svcId = "searchDetail";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_group=output1 ds_role=output2";
        	var argument = "method=getList "
        		+ "sqlId='CMA007CT.CMA007CT_DS_GROUP_S CMA007CT.CMA007CT_DS_ROLE_S' "
        		+ "USER_ID=" + userId + " "
        		+ "COMPANY_CD=" + comCd + " "
        		+ "SERVICE_TP=" + svcTp + " "
        		+ "APPLICATION_TP=" + appTp;

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //저장
        this.fn_save = function ()
        {
        	if(!this.fn_save_pre()) return;

        	let svcId = "save";
        	let inDs = "ds_role"
        	this.fn_save_com(svcId, inDs);
        };

        //삭제
        this.fn_delete = function ()
        {
        	//validation
        	if(!this.fn_delete_pre()) return;

        	var svcId = "delete";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_role:U";
        	var outDatasets = "";
        	var argument = "method=delete "
        		+ "sqlId=CMA007CT.CMA007CT_DS_ROLE_D ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };


        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			var count = this.ds_user.rowcount;
        			Sct.alert(this, "000175", count + "|");
        		}
        		else if(strSvcID == "searchDetail")
        		{
        			var count = this.ds_role.rowcount;
        			Sct.alert(this, "000175", count + "|");
        		}
        		else if(strSvcID == "save" || strSvcID == "delete")
        		{
        			this.fn_searchDetail();
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
        this.ds_user_onrowposchanged = function(obj,e)
        {
        	//menugrid 체크박스 HEAD 0 초기화
        	var grdGroup = this.div_cont.form.div_right.form.div_up.form.grd_group;
        	grdGroup.setCellProperty("head", grdGroup.getBindCellIndex("body", "CHK"), "text", "0");

        	//detail 조회
        	this.fn_searchDetail();
        };

        //역할 그리드 헤더클릭 이벤트
        this.div_cont_div_right_div_up_grd_menu_onheadclick = function(obj,e)
        {
        	//체크박스 헤더클릭시 이벤트
        	if(e.col == obj.getBindCellIndex("body", "CHK"))
        	{
        		var chkValue = obj.getCellProperty("head", e.col, "text");
        		var chk = "";
        		if(chkValue != "1")	chk = "1";
        		else				chk = "0";

        		//체크박스 설정
        		obj.setCellProperty("head", e.col, "text", chk);
        		for(var i=0; i<this.ds_group.rowcount; i++) this.ds_group.setColumn(i, "CHK", chk);
        	}
        };


        //Role 추가 버튼
        this.div_cont_div_right_div_up_btn_addrow_onclick = function(obj,e)
        {
        	var fRow = this.ds_group.findRow("CHK", "1");
        	if(fRow < 0)
        	{
        		Sct.alert(this, "000119"); //선택된 데이터가 없습니다.
        		return ;
        	}

        	var userId = this.ds_user.getColumn(this.ds_user.rowposition, "USER_ID");
        	var servTp = this.ds_user.getColumn(this.ds_user.rowposition, "SERVICE_TP");

        	for(var i=0; i<this.ds_group.rowcount; i++)
        	{
        		//역할 -> Role Desc (ds_group -> ds_role)
        		if(this.ds_group.getColumn(i, "CHK") == "1")
        		{
        			var nRow = this.ds_role.addRow();
        			this.ds_role.copyRow(nRow, this.ds_group, i);
        			this.ds_role.setColumn(nRow, "USER_ID", userId);
        			this.ds_role.setColumn(nRow, "SERVICE_TP", servTp);
        			this.ds_group.deleteRow(i);
        			i--;
        		}
        	}
        };

        //역할그리드 더블클릭 이벤트
        this.div_cont_div_right_div_up_grd_group_oncelldblclick = function(obj,e)
        {
        	//역할 -> Role (ds_group -> ds_role)
        	var userId = this.ds_user.getColumn(this.ds_user.rowposition, "USER_ID");
        	var nRow = this.ds_role.addRow();
        	this.ds_role.copyRow(nRow, this.ds_group, e.row);
        	this.ds_role.setColumn(nRow, "USER_ID", userId);
        	this.ds_group.deleteRow(e.row);
        };

        this.ds_role_cancolumnchange = function(obj,e)
        {
        	//삭제버튼 check event
        	if(e.columnid == "DEL_CHECKBOX")
        	{
        		//추가된row 삭제컬럼 체크시
        		if(obj.getRowType(e.row) == Dataset.ROWTYPE_INSERT)
        		{
        			//Role -> 역할 (ds_role -> ds_group;)
        			var nRow = this.ds_group.addRow();
        			this.ds_group.copyRow(nRow, this.ds_role, e.row);
        		}
        	}
        };

        this.div_search_cmb_company_onitemchanged = function(obj,e)
        {
        				//그리드에 변경된 데이터가 있을경우
           if(Sct.Grid.isUpdate(this.div_cont.form.div_right.form.div_up.form.grd_group)||Sct.Grid.isUpdate(this.div_cont.form.div_right.form.div_down.form.grd_role)){
              //메세지로 변경된 데이터 여부와 상관없이 변경할지 확인
              if(!Sct.confirm(this,"000171","")){
                 this.ds_search.setColumn(0, "COMPANY_CD", e.prevalue);
                 return;
              }
           }

           Sct.commCodeTran2(this.fv_form, this.ds_search.getColumn(0,"COMPANY_CD"),fv_ServiceTp, true);
           this.ds_user.clearData();
           this.ds_group.clearData();
           this.ds_role.clearData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.div_search.form.cmb_company.addEventHandler("onitemchanged",this.div_search_cmb_company_onitemchanged,this);
            this.div_cont.form.div_right.form.div_up.form.grd_group.addEventHandler("onheadclick",this.div_cont_div_right_div_up_grd_menu_onheadclick,this);
            this.div_cont.form.div_right.form.div_up.form.grd_group.addEventHandler("oncelldblclick",this.div_cont_div_right_div_up_grd_group_oncelldblclick,this);
            this.div_cont.form.div_right.form.div_up.form.btn_addrow.addEventHandler("onclick",this.div_cont_div_right_div_up_btn_addrow_onclick,this);
            this.div_cont.form.div_right.form.div_down.form.grd_role.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_user.addEventHandler("onrowposchanged",this.ds_user_onrowposchanged,this);
            this.ds_group.addEventHandler("cancolumnchange",this.ds_detail_cancolumnchange,this);
            this.ds_role.addEventHandler("cancolumnchange",this.ds_role_cancolumnchange,this);
        };
        this.loadIncludeScript("CMA007CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
