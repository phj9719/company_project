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
            this.set_titletext("메뉴관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1112,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ORDER\" type=\"INT\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SHOW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LEAF_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dup", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ORDER\" type=\"INT\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SHOW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"LEAF_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail_temp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ORDER\" type=\"INT\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SHOW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LEAF_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_application_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_service_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_company_cd_s", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0.00%","120",null,null,"0.00%","0.00%",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","235",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_binddataset("ds_head");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"메뉴명\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:MENU_NM\" treelevel=\"bind:MENU_LEVEL\" treestartlevel=\"-1\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","1","194","34",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("메뉴 리스트");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","260","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_detail");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_border("3px solid rgba(119,119,119,1), 1px solid rgba(229,229,229,1), 1px solid rgba(229,229,229,1), 1px solid rgba(229,229,229,1)");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"48\"/><Column size=\"105\"/><Column size=\"100\"/><Column size=\"138\"/><Column size=\"134\"/><Column size=\"104\"/><Column size=\"143\"/><Column size=\"110\"/><Column size=\"201\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"NO\"/><Cell col=\"3\" text=\"법인코드\" cssclass=\"CellEssential\"/><Cell col=\"4\" text=\"서비스유형\" cssclass=\"CellEssential\"/><Cell col=\"5\" text=\"응용프로그램 유형\" cssclass=\"CellEssential\"/><Cell col=\"6\" text=\"상위 메뉴코드\" cssclass=\"CellEssential\"/><Cell col=\"7\" text=\"메뉴코드\" cssclass=\"CellEssential\"/><Cell col=\"8\" text=\"메뉴명\" cssclass=\"CellEssential\"/><Cell col=\"9\" text=\"화면아이디\"/><Cell col=\"10\" text=\"PAGE_URL\"/><Cell col=\"11\" text=\"사용여부\"/><Cell col=\"12\" text=\"보이기여부\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" text=\"bind:COMPANY_CD\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"4\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_cm_service_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\" text=\"bind:SERVICE_TP\" comboautoselect=\"true\"/><Cell col=\"5\" combodataset=\"ds_cm_application_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\" edittype=\"none\" displaytype=\"combotext\" text=\"bind:APPLICATION_TP\" comboautoselect=\"true\"/><Cell col=\"6\" text=\"bind:HIGH_MENU_CD\" expandshow=\"hide\" edittype=\"none\" editautoselect=\"true\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:MENU_CD\" editautoselect=\"true\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:MENU_NM\" textAlign=\"left\" verticalAlign=\"middle\" editautoselect=\"true\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:MENU_ID\" expandshow=\"show\" editautoselect=\"true\"/><Cell col=\"10\" text=\"bind:PAGE_URL\" expandimage=\"URL('imagerc::btn_WF_SearchSmall_O.png')\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"11\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:USE_YN\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"12\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:SHOW_YN\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left00","0","1","194","34",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_text("하위 메뉴 조회");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_addrow",null,"0","80","29","0",null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_gMove","235","40.00%","25","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static60","0","-1","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","22",null,"74","0.00%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("s01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_company","15","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("법인명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_service_tp","255","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_menu_tp","495","25","124","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("응용프로그램유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_company","110","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_company_cd_s");
            obj.set_codecolumn("COMPANY_CD");
            obj.set_datacolumn("COMPANY_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_service_tp","350","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cm_service_tp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_menu_tp","625","25","160","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cm_application_tp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_cssclass("essential");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_sMove","44.42%","96",null,"16","44.42%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::search_open.png\') no-repeat transparent");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1112,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cmb_company","value","ds_search","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cmb_service_tp","value","ds_search","SERVICE_TP");
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
        this.addIncludeScript("CMA005CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("CMA005CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("CMA005CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    : SMD020CT
         * 화면명   : 메뉴관리
         * 화면설명 : 메뉴의 화면명, URL맵핑 등을 관리하는 프로그램
         * 작성일    : 2017-08-02 05:22
         * 작성자   : SOOIM
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2020-06-18		배영걸		17 버전업
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
        this.fv_currentDS = this.ds_detail;
        this.fv_currentGrid = this.div_cont.form.div_right.form.grd_detail;
        this.nMoveY;
        this.fv_flag;
        this.fv_form;
        // 서비스 단에서 받는 variable, 초기화 필요함
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
        	//rowTypeValidation 설정
        	var dsArr = ["ds_detail"];
        	this.gfn_rowTypeValidationDs(dsArr);

        	//drag 버튼 활성화
        	this.gfn_setDivDrag(this.div_cont.form.btn_gMove, this.div_cont.form.div_left, this.div_cont.form.div_right);

        	//조회
        	//this.fn_search();

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
        	this.fn_deleteDetail();
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
             //조회전 그리드에 변경된 데이터가 있을경우 ..
             if(Sct.Grid.isUpdate(this.div_cont.form.div_right.form.grd_detail)){
                 //메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
                 if(!Sct.confirm(this,"000171","")){
        			this.div_cont.form.div_right.form.grd_detail.setFocus();
                     return false;
                 }
             }

        	//조회조건 필수여부확인
        	if(!this.gfn_findSnull(this.div_search)) return false;

        	 //디테일 초기화
        	 this.ds_detail.clearData();
        	 return true;
        };

        //추가 전 validation
        this.fn_save_pre = function ()
        {
        	//저장여부
        	if (!Sct.Grid.hasInsertAndUpdateRow(this.fv_currentDS))
        	{
        		Sct.alert(this, "000240"); //추가나 수정한 데이터가 없습니다.
        		return false;
        	}

        	//입력 필수여부체크
        	if(!this.gfn_chkGridEssential(this.div_cont.form.div_right.form.grd_detail)) return false;

        	//입력한값 중복 여부 체크
        	var keyArr = ["COMPANY_CD", "MENU_CD","SERVICE_TP","APPLICATION_TP"];
        	if(!this.gfn_duplicateCheck(this.ds_detail, keyArr)) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	//데이터 저장전 저장할 key 값 dataset 변수에 저장
        	this.gfn_saveKeyArr(this.ds_detail, keyArr);

        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function ()
        {
        	//변경여부
        	if (!Sct.Grid.hasDeletedRow(this.ds_detail))
        	{
        		Sct.alert(this, "000150"); //삭제할 데이터가 없습니다.
        		return false;
        	}

        	//다른상태값 존재여부
        	if(!Sct.Grid.hasDifferentRowType(this.ds_detail, Dataset.ROWTYPE_DELETE))
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
        	var outDatasets = "ds_head=output1";
        	var argument = "method=getList "
        		+ "sqlId=CMA005CT.CMA005CT_DS_LIST_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //detail 조회
        this.fn_searchDetail = function ()
        {
        	//validation
        	if(!this.fn_search_pre()) return;

        	var menuCd = this.ds_head.getColumn(this.ds_head.rowposition, "MENU_CD");
        	var appTp = this.div_search.form.cmb_menu_tp.value;
        	var serviceTp = this.div_search.form.cmb_service_tp.value;
        	var companyCd = this.div_search.form.cmb_company.value;

        	var svcId = "searchDetail";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_detail=output1";
        	var argument = "method=getList "
        		+ "sqlId=CMA005CT.CMA005CT_DS_LIST_S "
        		+ "HIGH_MENU_CD=" + menuCd + " "
        		+ "SERVICE_TP=" + serviceTp + " "
        		+ "APPLICATION_TP=" + appTp + " "
        		+ "COMPANY_CD=" + companyCd + " ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        //저장
        this.fn_save = function ()
        {
        	if(!this.fn_save_pre()) return false;
        	let svcId = "save";
        	let inDs = "ds_detail"
        	this.fn_save_com(svcId, inDs);
        };

        //detail 삭제
        this.fn_deleteDetail = function ()
        {
        	//validation
        	if(!this.fn_delete_pre()) return;

        	var svcId = "delete";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_detail:U";
        	var outDatasets = "";
        	var argument = "method=delete "
        		+ "sqlId=CMA005CT.CMA005CT_DS_LIST_D ";

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
        			var count = this.ds_head.rowcount;
        			Sct.alert(this, "000175", count + "|");

        			//최상위 level 추가
        			var nRow = this.ds_head.insertRow(0);
        			this.ds_head.setColumn(nRow, "MENU_CD", "00000000");
        			this.ds_head.setColumn(nRow, "MENU_NM", "Top-Level");
        			this.ds_head.setColumn(nRow, "MENU_LEVEL", "-1");
        			this.ds_head.setColumn(nRow, "MENU_GRP", "");

        			//저장후 조회후 변경된 row로 rowposition 설정
        			this.ds_head.keyExprStr = this.ds_detail.keyExprStr;
        			this.ds_head.findBoolean = this.ds_detail.findBoolean;
        			this.ds_detail.findBoolean = false;
        			this.gfn_saveAfterFindRow(this.ds_head);

        			//행추가후 디테일 재조회
        			this.fn_searchDetail();
        		}
        		else if(strSvcID == "searchDetail")
        		{
        			var count = this.ds_detail.rowcount;
        			Sct.alert(this, "000175", count + "|");
        		}
        		else if(strSvcID == "save" || strSvcID == "delete")
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
         * Popup Functions
         ***********************************************************************/
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "highMenuSearch" :
        			var sRow = this.ds_detail.rowposition;
        			this.ds_detail.setColumn(sRow, "HIGH_MENU_CD", objDs.getColumn(0, "CD_VAL"));
        			break;
        		case "menuIdSearch" :
        			var sRow = this.ds_detail.rowposition;
        			this.ds_detail.setColumn(sRow, "MENU_ID", objDs.getColumn(0, "CD_VAL"));
        			this.ds_detail.setColumn(sRow, "PAGE_URL", objDs.getColumn(0, "PAGE_URL"));
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        //sort 정렬
        this.fn_setMenuSort = function()
        {
        	var sort = 1;
        	var highMenuCd = this.ds_head.getColumn(this.ds_head.rowposition, "MENU_CD");
        	for(var i=0; i<this.ds_detail.rowcount; i++)
        	{
        		//상위메뉴 변경 된 row들 제외한 나머지 행들만 sort 설정
        		if(highMenuCd == this.ds_detail.getColumn(i, "HIGH_MENU_CD"))
        		{
        			this.ds_detail.setColumn(i, "MENU_ORDER", sort);
        			sort ++;
        		}
        	}
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.ds_head_onrowposchanged = function(obj,e)
        {
        	var leafYn = obj.getColumn(e.newrow, "LEAF_YN");
        	if(leafYn != "Y") 	this.fn_searchDetail();
        	else				this.ds_detail.clearData();
        };

        //팝업 Event
        this.div_cont_grd_detail_onexpandup = function(obj,e)
        {
        	//상위메뉴 팝업
        	if(e.col == obj.getBindCellIndex("body", "HIGH_MENU_CD"))
        	{
        		var param = {
        			CD_VAL	: this.ds_detail.getColumn(e.row, "HIGH_MENU_CD"),
        			CD_NAME	: "",
        			SQL_ID	: "CM_POPUP.getMenu",
        			PARAM1	: "Y",	//최하위노드를 제외하는 옵션
        			PARAM2	: "",
        			PARAM3	: ""
        		};
        		Sct.popup(this, "highMenuSearch", 326, 226, "", param, "CM_POP::CM_CODE_PP.xfdl", "fn_popCallback");
        	}
        	//화면 ID 팝업
        	else if(e.col == obj.getBindCellIndex("body", "MENU_ID"))
        	{
        		var param = {
        			CD_VAL	: this.ds_detail.getColumn(e.row, "MENU_ID"),
        			CD_NAME	: "",
        			SQL_ID	: "CMA005CT.CMA005CT_SEARCH_MENU_ID_POPUP",
        			PARAM1	: nexacro.getApplication().gv_company,
        			PARAM2	: "",
        			PARAM3	: ""
        		};
        		Sct.popup(this, "menuIdSearch", 326, 226, "", param, "CM_POP::CM_CODE_PP.xfdl", "fn_popCallback");
        	}
        };

        //행추가
        this.fn_addRow = function(obj,e)
        {
        	if(!this.gfn_findSnull(this.div_search)) return false;
        	var nRow 		= this.ds_detail.addRow();
        	var hRow 		= this.ds_head.rowposition;
        	var headMenuCd	= this.ds_head.getColumn(hRow, "MENU_CD");
        	var headMenuLvl	= this.ds_head.getColumn(hRow, "MENU_LEVEL");
        	var menuLvl		= nexacro.toNumber(headMenuLvl) + 1; //선택한 메뉴 뎁스 1증가

        	//초기화
        	this.ds_detail.setColumn(nRow, "COMPANY_CD", this.ds_search.getColumn(0,"COMPANY_CD"));
        	this.ds_detail.setColumn(nRow, "HIGH_MENU_CD", headMenuCd);
        	this.ds_detail.setColumn(nRow, "MENU_LEVEL", menuLvl);
        	this.ds_detail.setColumn(nRow, "USE_YN", "Y");		//사용여부
        	this.ds_detail.setColumn(nRow, "SHOW_YN", "Y");		//보이기여부
        	this.ds_detail.setColumn(nRow, "SERVICE_TP", this.ds_search.getColumn(0,"SERVICE_TP"));
        	this.ds_detail.setColumn(nRow, "APPLICATION_TP", this.ds_search.getColumn(0,"APPLICATION_TP"));

        	//포커스
        	this.gfn_SetCellPos(this.div_cont.form.div_right.form.grd_detail, "MENU_CD");
        };

        this.div_search_cmb_company_onitemchanged = function(obj,e)
        {
        		//그리드에 변경된 데이터가 있을경우
           if(Sct.Grid.isUpdate(this.div_cont.form.div_right.form.grd_detail)){
              //메세지로 변경된 데이터 여부와 상관없이 변경할지 확인
              if(!Sct.confirm(this,"000171","")){
                 this.ds_search.setColumn(0, "COMPANY_CD", e.prevalue);
                 return;
              }
           }

           Sct.commCodeTran2(this.fv_form, this.ds_search.getColumn(0,"COMPANY_CD"),fv_ServiceTp, true);
           this.ds_head.clearData();
           this.ds_detail.clearData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.div_cont.form.div_right.form.grd_detail.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.grd_detail.addEventHandler("onexpandup",this.div_cont_grd_detail_onexpandup,this);
            this.div_cont.form.div_right.form.btn_addrow.addEventHandler("onclick",this.fn_addRow,this);
            this.div_search.form.cmb_company.addEventHandler("onitemchanged",this.div_search_cmb_company_onitemchanged,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_head.addEventHandler("onrowposchanged",this.ds_head_onrowposchanged,this);
        };
        this.loadIncludeScript("CMA005CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
