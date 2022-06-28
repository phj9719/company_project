(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUA800CT");
            this.set_titletext("모니터링지역설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1112,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mon_area", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mon_location", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","22",null,"74","0.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("s01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_are_nm","15","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("모니터링명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_are_nm","110","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_use_yn","255","25","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("사용유무");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_use_yn","350","25","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_innerdataset("ds_cm_use_yn");
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

            obj = new Grid("grd_mon_area","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_mon_area");
            obj.set_autoenter("select");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"98\"/><Column size=\"95\"/><Column size=\"99\"/><Column size=\"91\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"모니터링코드\" cssclass=\"CellEssential\"/><Cell col=\"4\" text=\"모니터링명\" cssclass=\"CellEssential\"/><Cell col=\"5\" text=\"비고\"/><Cell col=\"6\" text=\"사용유무\" cssclass=\"CellEssential\"/><Cell col=\"7\" text=\"등록자ID\"/><Cell col=\"8\" text=\"등록자명\"/><Cell col=\"9\" text=\"등록일자\"/><Cell col=\"10\" text=\"수정자명\"/><Cell col=\"11\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" text=\"bind:ARE_CD\" textAlign=\"center\" combodataset=\"gds_company\" combodatacol=\"COMPANY_NM\" combocodecol=\"COMPANY_CD\" edittype=\"expr:dataset.getRowType(currow) == 2 ? 'normal' : 'none'\"/><Cell col=\"4\" text=\"bind:ARE_NM\" edittype=\"normal\" combodataset=\"ds_cm_service_tp\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"5\" text=\"bind:REMARK\" textareaacceptsenter=\"true\" textareaautoselect=\"true\" edittype=\"textarea\" displaytype=\"textareacontrol\"/><Cell col=\"6\" text=\"bind:USE_YN\" textAlign=\"center\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"7\" text=\"bind:REG_USER\"/><Cell col=\"8\" text=\"bind:REG_USER_NM\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:REG_DT\"/><Cell col=\"10\" text=\"bind:MOD_USER_NM\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","6","194","20",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("모니터링 지역 목록");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("sta_alert","160","11","250","18",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("3");
            obj.set_text("※모니터링 지역을 먼저 저장하세요");
            obj.set_cssclass("sta_alert");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_addrow_mon_area",null,"0","80","29","0",null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_com_add");
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

            obj = new Grid("grd_location","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_location");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"52\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"96\"/><Column size=\"90\"/><Column size=\"94\"/><Column size=\"88\"/><Column size=\"92\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"층\"/><Cell col=\"3\" text=\"생활실코드\"/><Cell col=\"4\" text=\"생활실명\"/><Cell col=\"5\" text=\"등록자ID\"/><Cell col=\"6\" text=\"등록자명\"/><Cell col=\"7\" text=\"등록일자\"/><Cell col=\"8\" text=\"수정자명\"/><Cell col=\"9\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"expr:currow + 1\"/><Cell col=\"2\" text=\"bind:ARE_NM\"/><Cell col=\"3\" text=\"bind:LOC_CD\"/><Cell col=\"4\" text=\"bind:LOC_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:REG_USER\"/><Cell col=\"6\" text=\"bind:REG_USER_NM\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:REG_DT\"/><Cell col=\"8\" text=\"bind:MOD_USER_NM\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","6","194","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("1");
            obj.set_text("생활실 목록");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Button("btn_addrow_location",null,"0","195","29","0",null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("2");
            obj.set_text("모니터링 생활실 목록 추가");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Static("sta_alert","109","11","250","18",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_up.form);
            obj.set_taborder("3");
            obj.set_text("※더블 클릭시 아래로 추가됩니다.");
            obj.set_cssclass("sta_alert");
            this.div_cont.form.div_right.form.div_up.addChild(obj.name, obj);

            obj = new Div("div_down","0","240",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_mon_location","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_mon_location");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"81\"/><Column size=\"85\"/><Column size=\"82\"/><Column size=\"83\"/><Column size=\"81\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"층\"/><Cell col=\"4\" text=\"생활실코드\"/><Cell col=\"5\" text=\"생활실명\"/><Cell col=\"6\" text=\"사용유무\" cssclass=\"CellEssential\"/><Cell col=\"7\" text=\"등록자ID\"/><Cell col=\"8\" text=\"등록자명\"/><Cell col=\"9\" text=\"등록일자\"/><Cell col=\"10\" text=\"수정자명\"/><Cell col=\"11\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" text=\"bind:ARE_NM\"/><Cell col=\"4\" text=\"bind:LOC_CD\"/><Cell col=\"5\" text=\"bind:LOC_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:USE_YN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"7\" text=\"bind:REG_USER\"/><Cell col=\"8\" text=\"bind:REG_USER_NM\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:REG_DT\"/><Cell col=\"10\" text=\"bind:MOD_USER_NM\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","6","194","20",null,null,null,null,null,null,this.div_cont.form.div_right.form.div_down.form);
            obj.set_taborder("1");
            obj.set_text("모니터링 생활실 목록");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.form.div_down.addChild(obj.name, obj);

            obj = new Static("Static60","0","-1","120","22",null,null,null,null,null,null,this);
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
            obj = new BindItem("item0","div_search.form.cmb_use_yn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_are_nm","value","ds_search","ARE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUA800CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUA800CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("NUA800CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUA800CT
         * 화면명   	: 모니터링지역설정
         * 화면설명 	: 모니터링할 생활실을 결정하는 화면
         * 작성일    	: 2021-08-23
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         *     	수정일   	수정자   	내용
         *
         ***********************************************************************
         ***********************************************************************
        */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = this.ds_mon_area;
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_mon_area;
        this.fv_rowidx;

        this.nMoveX;
        this.nMoveY;
        this.fv_flag = false;
        this.outvar = "";

        const fv_Company = nexacro.getApplication().gds_userInfo.getColumn(0,"COMPANY_CD"); // 회사코드
        const fv_ServiceTp = nexacro.getApplication().gds_userInfo.getColumn(0,"SERVICE_TP");
        const fv_appTp = nexacro.getApplication().gv_applicationTp;

        this.pgmId = nexacro.getApplication().gv_curWinKey;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e);

        	this.ds_search.setColumn(0, "COMPANY_CD", fv_Company);
        	this.ds_search.setColumn(0, "SERVICE_TP", fv_ServiceTp);
        	this.ds_search.setColumn(0, "APPLICATION_TP", fv_appTp);

        	//drag 버튼 활성화
        	this.gfn_setDivDrag(this.div_cont.form.btn_gHMove, this.div_cont.form.div_left, this.div_cont.form.div_right);
        	this.gfn_setDivDrag(this.div_cont.form.div_right.form.btn_gVMove, this.div_cont.form.div_right.form.div_up, this.div_cont.form.div_right.form.div_down);

        	// 화면 오픈시 조회
        	this.fn_search();

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.edt_are_nm.setFocus();
        };

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
        	if(Sct.Grid.isUpdate(this.div_cont.form.div_right.form.div_down.form.grd_mon_location)
        		|| Sct.Grid.isUpdate(this.div_cont.form.div_left.form.grd_mon_area))
        	{
        		//메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
        		if(!Sct.confirm(this,"000171","")){
        			this.div_cont.form.div_left.form.grd_mon_area.setFocus();
                    return false;
        		}
        	}

        	//조회조건 필수여부확인
        	 if(!this.gfn_findSnull(this.div_search)) return false;

        	 //디테일 초기화
        	 this.ds_location.clearData();
        	 this.ds_mon_location.clearData();
        	 return true;
        };

        //저장 전 validation
        this.fn_save_pre = function ()
        {
        	//저장여부
        	if (!Sct.Grid.hasInsertAndUpdateRow(this.ds_mon_area) && !Sct.Grid.hasInsertAndUpdateRow(this.ds_mon_location))
        	{
        		Sct.alert(this, "000240"); //추가나 수정한 데이터가 없습니다.
        		return false;
        	}

        	//입력 필수여부체크
        	if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;

        	//입력한값 중복 여부 체크
        	var keyArr ;
        	if(this.fv_currentDS.name == "ds_head")	keyArr = ["COMPANY_CD", "ARE_CD"];
        	else									keyArr = ["COMPANY_CD", "ARE_CD", "LOC_SEQ"];
        	if(!this.gfn_duplicateCheck(this.fv_currentDS, keyArr)) return false;

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

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_mon_area=output1";
        	const argument = "method=getList "
        		+ "sqlId=NUA800CT.NUA800CT_DS_MON_AREA_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //Detail 조회
        this.fn_searchDetail = function ()
        {
        	const nRow = this.ds_mon_area.rowposition;
        	const areCd = this.ds_mon_area.getColumn(nRow, "ARE_CD");
        	const comCd = this.ds_mon_area.getColumn(nRow, "COMPANY_CD");

        	const svcId = "searchDetail";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_location=output1 ds_mon_location=output2";
        	const argument = "method=getList "
        		+ "sqlId='NUA800CT.NUA800CT_DS_LOCATION_S NUA800CT.NUA800CT_DS_MON_LOCATION_S' "
        		+ "ARE_CD=" + areCd + " "
        		+ "COMPANY_CD=" + comCd + " ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //저장
        this.fn_save = function ()
        {
        	if(!this.fn_save_pre()) return;

        	const svcId = "save";
        	const inDs = "ds_mon_area,ds_mon_location";
        	this.fn_save_com(svcId, inDs);
        };

        //삭제
        this.fn_delete = function ()
        {
        	//validation
        	if(!this.fn_delete_pre()) return;

        	let sqlId = "";
        	if(this.fv_currentDS.name == "ds_mon_area")	sqlId = "NUA800CT.NUA800CT_DS_MON_AREA_D";
        	else										sqlId = "NUA800CT.NUA800CT_DS_MON_LOCATION_D";

        	const svcId = "delete";
        	const params = "/commonController.do";
        	const inDatasets = "input1=" + this.fv_currentDS.name + ":U";
        	const outDatasets = "";
        	const argument = "method=delete "
        		+ "sqlId=" + sqlId + " ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };


        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		let count;
        		if(strSvcID == "search")
        		{
        			count = this.ds_mon_area.rowcount;
        			Sct.alert(this, "000175", count + "|");

        			//저장후 조회후 변경된 row로 rowposition 설정
        			this.gfn_saveAfterFindRow(this.ds_mon_area);
        		}
        		else if(strSvcID == "searchDetail")
        		{
        			count = this.ds_mon_location.rowcount;
        			Sct.alert(this, "000175", count + "|");

        			//저장후 조회후 변경된 row로 rowposition 설정
        			this.gfn_saveAfterFindRow(this.ds_mon_location, this.ds_mon_location);
        		}
        		else if(strSvcID == "save")
        		{
        			Sct.alert(this, "000050");	// 정상적으로 저장되었습니다.

        			if(this.fv_currentDS.name == "ds_mon_area")	this.fn_search();
        			else										this.fn_searchDetail();

        			//저장후 조회후 변경된 row로 rowposition 설정
        			this.gfn_saveAfterFindRow(this.ds_mon_area, this.ds_mon_area);
        		}
        		else if(strSvcID == "delete")
        		{
        			Sct.alert(this, "000052");	// 정상적으로 삭제되었습니다.

        			if(this.fv_currentDS.name == "ds_mon_area")	this.fn_search();
        			else										this.fn_searchDetail();
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
        // 모니터링 지역 목록 행추가
        this.div_cont_div_left_btn_addrow_mon_area_onclick = function(obj,e)
        {
        	const nRow = this.ds_mon_area.addRow();
        	// 초기화
        	this.ds_mon_area.setColumn(nRow, "COMPANY_CD", this.ds_search.getColumn(0, "COMPANY_CD"));
        	this.ds_mon_area.setColumn(nRow, "USE_YN", "Y");

        	//포커스
        	this.gfn_SetCellPos(this.div_cont.form.div_left.form.grd_mon_area, "ARE_CD");
        };

        this.ds_mon_area_onrowposchanged = function(obj,e)
        {
        	// 생활실 목록 체크박스 HEAD 0 초기화
        	const grdLocation = this.div_cont.form.div_right.form.div_up.form.grd_location;
        	grdLocation.setCellProperty("head", grdLocation.getBindCellIndex("body", "CHK"), "text", "0");

        	const nRow = this.ds_mon_area.rowposition;
        	const areCd = this.ds_mon_area.getColumn(nRow, "ARE_CD");

        	// 생활실 목록, 모니터링 생활실 목록 조회
        	if(!Sct.Util.isEmpty(areCd)) this.fn_searchDetail();
        	else
        	{
        		this.ds_location.clearData();
        		this.ds_mon_location.clearData();
        	}

        };

        // 생활실 목록 그리드 헤더클릭 이벤트
        this.div_cont_div_right_div_up_grd_location_onheadclick = function(obj,e)
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
        		for(var i=0; i<this.ds_location.rowcount; i++) this.ds_location.setColumn(i, "CHK", chk);
        	}
        };


        // 모니터링 생활실 목록 추가 버튼
        this.div_cont_div_right_div_up_btn_addrow_location_onclick = function(obj,e)
        {
        	const fRow = this.ds_location.findRow("CHK", "1");
        	if(fRow < 0)
        	{
        		Sct.alert(this, "000119"); // 선택된 데이터가 없습니다.
        		return ;
        	}

        	// 모니터링 지역 목록이 추가행일경우
        	if(this.ds_mon_area.getRowType(this.ds_mon_area.rowposition) == Dataset.ROWTYPE_INSERT)
        	{
        		Sct.alert(this, "000179"); // 저장 후 행추가 해주시기 바랍니다.
        		return ;
        	}

        	const areCd = this.ds_mon_area.getColumn(this.ds_mon_area.rowposition, "ARE_CD");
        	const companyCd = this.ds_mon_area.getColumn(this.ds_mon_area.rowposition, "COMPANY_CD");

        	for(var i=0; i<this.ds_location.rowcount; i++)
        	{
        		// 생활실 목록 -> 모니터링 생활실 목록 (ds_location -> ds_mon_location)
        		if(this.ds_location.getColumn(i, "CHK") == "1")
        		{
        			const nRow = this.ds_mon_location.addRow();
        			this.ds_mon_location.copyRow(nRow, this.ds_location, i);
        			this.ds_mon_location.setColumn(nRow, "ARE_CD", areCd);
        			this.ds_mon_location.setColumn(nRow, "USE_YN", "Y");
        			this.ds_location.deleteRow(i);
        			i--;
        		}
        	}

        	this.div_cont.form.div_right.form.div_down.form.grd_mon_location.setFocus();
        };

        // 생활실 목록 그리드 더블클릭 이벤트
        this.div_cont_div_right_div_up_grd_location_oncelldblclick = function(obj,e)
        {
        	// 모니터링 지역 목록이 추가행일경우
        	if(this.ds_mon_area.getRowType(this.ds_mon_area.rowposition) == Dataset.ROWTYPE_INSERT)
        	{
        		Sct.alert(this, "000179"); // 저장 후 행추가 해주시기 바랍니다.
        		return ;
        	}

        	// 생활실 목록 -> 모니터링 생활실 목록 (ds_location -> ds_mon_location)
        	const areCd = this.ds_mon_area.getColumn(this.ds_mon_area.rowposition, "ARE_CD");
        	const nRow = this.ds_mon_location.addRow();
        	this.ds_mon_location.copyRow(nRow, this.ds_location, e.row);
        	this.ds_mon_location.setColumn(nRow, "ARE_CD", areCd);
        	this.ds_mon_location.setColumn(nRow, "USE_YN", "Y");
        	this.ds_location.deleteRow(e.row);
        	this.div_cont.form.div_right.form.div_down.form.grd_mon_location.setFocus();
        };

        this.ds_mon_location_cancolumnchange = function(obj,e)
        {
        	//삭제버튼 check event
        	if(e.columnid == "DEL_CHECKBOX")
        	{
        		//추가된row 삭제컬럼 체크시
        		if(obj.getRowType(e.row) == Dataset.ROWTYPE_INSERT)
        		{
        			// 모니터링 생활실 목록 -> 생활실 목록 (ds_mon_location -> ds_location)
        			const nRow = this.ds_location.addRow();
        			this.ds_location.copyRow(nRow, obj, e.row);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.div_cont.form.div_left.form.grd_mon_area.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.btn_addrow_mon_area.addEventHandler("onclick",this.div_cont_div_left_btn_addrow_mon_area_onclick,this);
            this.div_cont.form.div_right.form.div_up.form.grd_location.addEventHandler("onheadclick",this.div_cont_div_right_div_up_grd_location_onheadclick,this);
            this.div_cont.form.div_right.form.div_up.form.grd_location.addEventHandler("oncelldblclick",this.div_cont_div_right_div_up_grd_location_oncelldblclick,this);
            this.div_cont.form.div_right.form.div_up.form.btn_addrow_location.addEventHandler("onclick",this.div_cont_div_right_div_up_btn_addrow_location_onclick,this);
            this.div_cont.form.div_right.form.div_down.form.grd_mon_location.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_mon_area.addEventHandler("onrowposchanged",this.ds_mon_area_onrowposchanged,this);
            this.ds_mon_area.addEventHandler("onrowsetchanged",this.ds_mon_area_onrowsetchanged,this);
            this.ds_mon_location.addEventHandler("cancolumnchange",this.ds_mon_location_cancolumnchange,this);
        };
        this.loadIncludeScript("NUA800CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
