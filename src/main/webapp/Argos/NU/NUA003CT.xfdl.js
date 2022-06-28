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
            this.set_titletext("(고객용)공통코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1112,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GRPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"USER_VISIBLE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE1\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE2\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE3\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE4\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE5\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE6\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE7\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE8\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE9\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE10\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/><Column id=\"STR4\" type=\"STRING\" size=\"256\"/><Column id=\"STR5\" type=\"STRING\" size=\"256\"/><Column id=\"STR6\" type=\"STRING\" size=\"256\"/><Column id=\"STR7\" type=\"STRING\" size=\"256\"/><Column id=\"STR8\" type=\"STRING\" size=\"256\"/><Column id=\"STR9\" type=\"STRING\" size=\"256\"/><Column id=\"STR10\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GRPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/><Column id=\"STR4\" type=\"STRING\" size=\"256\"/><Column id=\"STR5\" type=\"STRING\" size=\"256\"/><Column id=\"STR6\" type=\"STRING\" size=\"256\"/><Column id=\"STR7\" type=\"STRING\" size=\"256\"/><Column id=\"STR8\" type=\"STRING\" size=\"256\"/><Column id=\"STR9\" type=\"STRING\" size=\"256\"/><Column id=\"STR10\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail_temp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"INT\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/><Column id=\"STR4\" type=\"STRING\" size=\"256\"/><Column id=\"STR5\" type=\"STRING\" size=\"256\"/><Column id=\"STR6\" type=\"STRING\" size=\"256\"/><Column id=\"STR7\" type=\"STRING\" size=\"256\"/><Column id=\"STR8\" type=\"STRING\" size=\"256\"/><Column id=\"STR9\" type=\"STRING\" size=\"256\"/><Column id=\"STR10\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_service_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GRPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","22",null,"74","0.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("s01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_grp_cd","4","11","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("그룹코드");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_grp_cd00","229","11","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("그룹명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_grpnm","329","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_use_yn","99","42","50","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cm_use_yn");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_use_yn","4","42","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("사용유무");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_grp_cd","99","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_textAlign("right");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0","120",null,null,"0.00%","0.00%",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_gHMove","634","40%","25","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","634",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_head");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"141\"/><Column size=\"131\"/><Column size=\"140\"/><Column size=\"250\"/><Column size=\"132\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"NO\"/><Cell col=\"3\" text=\"법인코드\"/><Cell col=\"4\" text=\"법인명\"/><Cell col=\"5\" text=\"서비스유형\" cssclass=\"CellEssential\"/><Cell col=\"6\" text=\"그룹코드\" cssclass=\"CellEssential\"/><Cell col=\"7\" text=\"그룹명\" cssclass=\"CellEssential\"/><Cell col=\"8\" text=\"상세설명\"/><Cell col=\"9\" text=\"고객공통코드조회부\"/><Cell col=\"10\" text=\"사용여부\"/><Cell col=\"11\" text=\"TITLE1\"/><Cell col=\"12\" text=\"TITLE2\"/><Cell col=\"13\" text=\"TITLE3\"/><Cell col=\"14\" text=\"TITLE4\"/><Cell col=\"15\" text=\"TITLE5\"/><Cell col=\"16\" text=\"TITLE6\"/><Cell col=\"17\" text=\"TITLE7\"/><Cell col=\"18\" text=\"TITLE8\"/><Cell col=\"19\" text=\"TITLE9\"/><Cell col=\"20\" text=\"TITLE10\"/><Cell col=\"21\" text=\"STR1\"/><Cell col=\"22\" text=\"STR2\"/><Cell col=\"23\" text=\"STR3\"/><Cell col=\"24\" text=\"STR4\"/><Cell col=\"25\" text=\"STR5\"/><Cell col=\"26\" text=\"STR6\"/><Cell col=\"27\" text=\"STR7\"/><Cell col=\"28\" text=\"STR8\"/><Cell col=\"29\" text=\"STR9\"/><Cell col=\"30\" text=\"STR10\"/><Cell col=\"31\" text=\"등록자ID\"/><Cell col=\"32\" text=\"등록자명\"/><Cell col=\"33\" text=\"등록일자\"/><Cell col=\"34\" text=\"수정자명\"/><Cell col=\"35\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" text=\"bind:COMPANY_CD\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:COMPANY_NM\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:SERVICE_TP\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_cm_service_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"6\" text=\"bind:GRP_CD\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:GRPNM\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:REMARK\" displaytype=\"normal\" edittype=\"none\" combodataset=\"ds_menu_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:USER_VISIBLE_YN\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_cm_use_yn\" combocodecol=\"CMCD\" combodatacol=\"CMCD\"/><Cell col=\"10\" text=\"bind:USE_YN\" displaytype=\"combotext\" edittype=\"none\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" combodataset=\"ds_cm_use_yn\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"11\" text=\"bind:TITLE1\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"12\" text=\"bind:TITLE2\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"13\" text=\"bind:TITLE3\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"14\" text=\"bind:TITLE4\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"15\" text=\"bind:TITLE5\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"16\" text=\"bind:TITLE6\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"17\" text=\"bind:TITLE7\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"18\" text=\"bind:TITLE8\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"19\" text=\"bind:TITLE9\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"20\" text=\"bind:TITLE10\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"21\" text=\"bind:STR1\" edittype=\"none\"/><Cell col=\"22\" text=\"bind:STR2\" edittype=\"none\"/><Cell col=\"23\" text=\"bind:STR3\" edittype=\"none\"/><Cell col=\"24\" text=\"bind:STR4\" edittype=\"none\"/><Cell col=\"25\" text=\"bind:STR5\" edittype=\"none\"/><Cell col=\"26\" text=\"bind:STR6\" edittype=\"none\"/><Cell col=\"27\" text=\"bind:STR7\" edittype=\"none\"/><Cell col=\"28\" text=\"bind:STR8\" edittype=\"none\"/><Cell col=\"29\" text=\"bind:STR9\" edittype=\"none\"/><Cell col=\"30\" text=\"bind:STR10\" edittype=\"none\"/><Cell col=\"31\" text=\"bind:REG_USER\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"32\" text=\"bind:REG_USER_NM\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"33\" text=\"bind:REG_DT\" displaytype=\"date\" edittype=\"none\"/><Cell col=\"34\" text=\"bind:MOD_USER_NM\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"35\" text=\"bind:MOD_DT\" displaytype=\"date\" edittype=\"none\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","7","194","22",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("그룹코드조회");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","660","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","7","220","22",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("공통코드관리");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_addrow_code",null,"0","80","29","0",null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_detail");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"NO\"/><Cell col=\"3\" text=\"공통코드\" cssclass=\"CellEssential\"/><Cell col=\"4\" text=\"공통코드명\" cssclass=\"CellEssential\"/><Cell col=\"5\" text=\"사용여부\"/><Cell col=\"6\" text=\"STR1\"/><Cell col=\"7\" text=\"STR2\"/><Cell col=\"8\" text=\"STR3\"/><Cell col=\"9\" text=\"STR4\"/><Cell col=\"10\" text=\"STR5\"/><Cell col=\"11\" text=\"STR6\"/><Cell col=\"12\" text=\"STR7\"/><Cell col=\"13\" text=\"STR8\"/><Cell col=\"14\" text=\"STR9\"/><Cell col=\"15\" text=\"STR10\"/><Cell col=\"16\" text=\"등록자ID\"/><Cell col=\"17\" text=\"등록자명\"/><Cell col=\"18\" text=\"등록일자\"/><Cell col=\"19\" text=\"수정자명\"/><Cell col=\"20\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" text=\"bind:CMCD\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:CMNM\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:USEYN\" displaytype=\"combotext\" edittype=\"combo\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\" combodataset=\"ds_cm_use_yn\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"6\" text=\"bind:STR1\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:STR2\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:STR3\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:STR4\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:STR5\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:STR6\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:STR7\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:STR8\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:STR9\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:STR10\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:REG_USER\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:REG_USER_NM\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:REG_DT\" displaytype=\"date\"/><Cell col=\"19\" text=\"bind:MOD_USER_NM\" textAlign=\"center\"/><Cell col=\"20\" text=\"bind:MOD_DT\" displaytype=\"date\"/></Band></Format></Formats>");
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
            obj = new BindItem("item2","div_search.form.cmb_use_yn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_grp_cd","value","ds_search","GRP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_grpnm","value","ds_search","GRPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUA003CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA003CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA003CT.xfdl", function() {
        /***********************************************************************
         * 화면ID   : NUA003CT
         * 화면명   : 일반코드그룹관리(고객용)
         * 화면설명 :
         * 작성일   : 2021-06-15 10:32
         * 작성자   : SOOIM
         * 수정이력 :
         ***********************************************************************
         *     수정일     	수정자   	내용
         *  2021-06-15    	SOOIM		최초작성
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
        this.fv_currentDS = this.head;
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_head;
        this.fv_rowidx;

        this.nMoveX;
        this.nMoveY;
        this.fv_flag = false;
        this.outvar = "";

        var fv_Company = nexacro.getApplication().gds_userInfo.getColumn(0,"COMPANY_CD");
        var fv_ServiceTp = nexacro.getApplication().gds_userInfo.getColumn(0,"SERVICE_TP");

        this.pgmId = nexacro.getApplication().gv_curWinKey;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e);
        	this.ds_search.setColumn(0,"COMPANY_CD",fv_Company);
        	this.ds_search.setColumn(0,"SERVICE_TP",fv_ServiceTp);

        	this.div_search.form.cmb_use_yn.set_value("Y");
        	//키값 추가행일경우만 입력가능
        	var grpCdColIdx = this.div_cont.form.div_left.form.grd_head.getBindCellIndex("body", "GRP_CD");
        	this.div_cont.form.div_left.form.grd_head.setCellProperty("body", grpCdColIdx, "edittype", "expr:dataset.getRowType(currow) == 2 ? 'normal' : 'none'");

        	//상태삭제순번컬럼 고정
        	this.div_cont.form.div_left.form.grd_head.setFormatColProperty(2, "band", "left");
        	this.div_cont.form.div_right.form.grd_detail.setFormatColProperty(2, "band", "left");

        	//rowTypeValidation 설정
        	var dsArr = ["ds_head", "ds_detail"];
        	this.gfn_rowTypeValidationDs(dsArr);

        	//drag 버튼 활성화
        	this.gfn_setDivDrag(this.div_cont.form.btn_gHMove, this.div_cont.form.div_left, this.div_cont.form.div_right);

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.edt_grp_cd.setFocus();
        };


        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };

        // 추가 버튼
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
        	if(Sct.Grid.isUpdate(this.div_cont.form.div_left.form.grd_head)
        		|| Sct.Grid.isUpdate(this.div_cont.form.div_right.form.grd_detail))
        	{
        		//메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
        		if(!Sct.confirm(this,"000171","")){
        			this.div_cont.form.div_left.form.grd_head.setFocus();
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
        	if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;

        	//입력한값 중복 여부 체크
        	var keyArr ;
        	if(this.fv_currentDS.name == "ds_head")	keyArr = ["COMPANY_CD", "GRP_CD", "SERVICE_TP"];
        	else									keyArr = ["COMPANY_CD", "GRP_CD", "CMCD", "SERVICE_TP"];
        	if(!this.gfn_duplicateCheck(this.fv_currentDS, keyArr)) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	//데이터 저장전 저장할 key 값 dataset 변수에 저장
        	this.gfn_saveKeyArr(this.fv_currentDS, keyArr);

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
        	var outDatasets = "ds_head=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA003CT.NUA003CT_DS_HEAD_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //그룹코드세부항목 조회
        this.fn_searchDetail = function ()
        {
        	var grpCd = this.ds_head.getColumn(this.ds_head.rowposition, "GRP_CD");
        	var serviceTp = this.ds_head.getColumn(this.ds_head.rowposition, "SERVICE_TP");

        	var svcId = "searchDetail";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_detail=output1";
        	var argument = "method=getList "
        		+ "sqlId=NUA003CT.NUA003CT_DS_DETAIL_S "
        		+ "COMPANY_CD=" + fv_Company + " "
        		+ "SERVICE_TP=" + serviceTp + " "
        		+ "GRP_CD=" + grpCd + " ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
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
        	if(this.fv_currentDS.name == "ds_head")	sqlId = "NUA003CT.NUA003CT_DS_HEAD_D";
        	else									sqlId = "NUA003CT.NUA003CT_DS_DETAIL_D";

        	var svcId = "delete";
        	var params = "/commonController.do";
        	var inDatasets = "input1=" +  this.fv_currentDS.name + ":U";
        	var outDatasets = "";
        	var argument = "method=delete "
        		+ "sqlId=" + sqlId + " ";

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

        			//저장후 조회후 변경된 row로 rowposition 설정
        			this.gfn_saveAfterFindRow(this.ds_head);
        		}
        		else if(strSvcID == "searchDetail")
        		{
        			var count = this.ds_detail.rowcount;
        			Sct.alert(this, "000175", count + "|");
        			//디테일조회 STR1~STR10 그리드 헤더 TEXT 수정
        			this.fn_detailSetHead();

        			//저장후 조회후 변경된 row로 rowposition 설정
        			this.gfn_saveAfterFindRow(this.ds_detail);
        		}
        		else if(strSvcID == "save" || strSvcID == "delete")
        		{
        			if(this.fv_currentDS.name == "ds_head")	this.fn_search();
        			else									this.fn_searchDetail();
        		}
        		else if(strSvcID == "send")
        		{
        			Sct.alert(this, "000533"); // 전송할 데이터를 등록하였습니다.
        			this.fn_search();
        		}
        		else if(strSvcID == "save_com")
        		{
        			this.alert("저장 테스트 콜백");
        			if(this.fv_currentDS.name == "ds_head")	this.fn_search();
        			else									this.fn_searchDetail();
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
        //디테일조회 STR1~STR10 그리드 헤더 TEXT 수정
        this.fn_detailSetHead = function()
        {
        	var hRow = this.ds_head.rowposition;
        	for(var i=1; i<=10; i++)
        	{
        		var title = eval("this.ds_head.getColumn(hRow, 'TITLE"+i+"')");
        		var colIdx = this.div_cont.form.div_right.form.grd_detail.getBindCellIndex("body", "STR"+i);
        		if(Sct.Util.isEmpty(title))	title = "STR"+i;
        		this.div_cont.form.div_right.form.grd_detail.setCellProperty("head", colIdx, "text", title);
        	}
        }

        //sort 정렬
        this.fn_setCodeSort = function()
        {
        	var sort = 1;
        	for(var i=0; i<this.ds_detail.rowcount; i++)
        	{
        		this.ds_detail.setColumn(i, "SORT", sort);
        		sort ++;
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.ds_head_onrowposchanged = function(obj,e)
        {
        	this.fn_searchDetail();
        };

        //디테일 행추가
        this.div_cont_div_right_btn_addrow_code_onclick = function(obj,e)
        {

        	//초기화
        	var nRow = this.ds_detail.addRow();
        	var hRow = this.ds_head.rowposition;
        	this.ds_detail.setColumn(nRow, "COMPANY_CD", this.ds_head.getColumn(this.ds_head.rowposition, "COMPANY_CD"));
        	this.ds_detail.setColumn(nRow, "USEYN", "Y");
        	this.ds_detail.setColumn(nRow, "GRP_CD", this.ds_head.getColumn(hRow, "GRP_CD"));
        	this.ds_detail.setColumn(nRow, "SERVICE_TP", this.ds_head.getColumn(hRow, "SERVICE_TP"));

        	//포커스
        	this.gfn_SetCellPos(this.div_cont.form.div_right.form.grd_detail, "CMCD");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.div_search.form.cmb_use_yn.addEventHandler("onitemchanged",this.div_search_cmb_carkind_onitemchanged,this);
            this.div_cont.form.div_left.form.grd_head.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_right.form.btn_addrow_code.addEventHandler("onclick",this.div_cont_div_right_btn_addrow_code_onclick,this);
            this.div_cont.form.div_right.form.grd_detail.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_head.addEventHandler("onrowposchanged",this.ds_head_onrowposchanged,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
        };
        this.loadIncludeScript("NUA003CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
