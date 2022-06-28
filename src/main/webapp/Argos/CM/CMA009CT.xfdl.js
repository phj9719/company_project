(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SMA080CT");
            this.set_titletext("메세지관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1112,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_head", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_msg_type", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_locale", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_trans_chk", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT1\" type=\"STRING\" size=\"256\"/><Column id=\"CNT2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_service_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_company_cd_s", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","22",null,"74","0%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("s01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_msg_id","495","11","100","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("메세지 아이디");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_msg_id","600","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_title","740","11","100","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("메세지 타이틀");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_title","845","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_description","5","41","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("메세지 내용");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_description","100","41","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_company","5","11","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("법인명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_serv_tp","245","11","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_msg_type","245","41","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("메세지 유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_msg_type","340","41","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_msg_type");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_company","100","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_company_cd_s");
            obj.set_codecolumn("COMPANY_CD");
            obj.set_datacolumn("COMPANY_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_serv_tp","340","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cm_service_tp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0","114",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_gHMove","635","40.00%","25","50",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_icon("URL(\'imagerc::grid_horizontal.png\')");
            obj.set_background("transparent");
            obj.set_borderRadius("10px");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_left","0","0","635",null,null,"0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","32",null,null,"0","0",null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_head");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"법인코드\"/><Cell col=\"4\" text=\"서비스유형\"/><Cell col=\"5\" text=\"메세지 ID\" cssclass=\"CellEssential\"/><Cell col=\"6\" text=\"메세지 유형\" cssclass=\"CellEssential\"/><Cell col=\"7\" text=\"메세지 제목\"/><Cell col=\"8\" text=\"등록자ID\"/><Cell col=\"9\" text=\"등록자명\"/><Cell col=\"10\" text=\"등록일자\"/><Cell col=\"11\" text=\"수정자명\"/><Cell col=\"12\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" text=\"bind:COMPANY_CD\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:SERVICE_TP\" combodataset=\"ds_cm_service_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"5\" text=\"bind:MSG_ID\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:MSG_TYPE\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_msg_type\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"7\" text=\"bind:TITLE\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"8\" text=\"bind:REG_USER\"/><Cell col=\"9\" text=\"bind:REG_USER_NM\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:REG_DT\"/><Cell col=\"11\" text=\"bind:MOD_USER_NM\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","6","194","22",null,null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("1");
            obj.set_text("메세지 리스트");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Button("btn_addrow_grp",null,"2","80","29","0",null,null,null,null,null,this.div_cont.form.div_left.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_left.addChild(obj.name, obj);

            obj = new Div("div_right","660","0",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","6","194","22",null,null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("0");
            obj.set_text("메세지 상세 리스트");
            obj.set_cssclass("lb01");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Button("btn_addrow_code",null,"2","80","29","0",null,null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_com_add");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","32",null,null,"0","0",null,null,null,null,this.div_cont.form.div_right.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_detail");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"언어타입\" cssclass=\"CellEssential\"/><Cell col=\"4\" text=\"메세지 내용\"/><Cell col=\"5\" text=\"등록자ID\"/><Cell col=\"6\" text=\"등록자명\"/><Cell col=\"7\" text=\"등록일자\"/><Cell col=\"8\" text=\"수정자명\"/><Cell col=\"9\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" text=\"bind:LANG_CD\" displaytype=\"combotext\" edittype=\"expr:dataset.getRowType(currow) == 2 ? 'combo' : 'none'\" combodataset=\"ds_locale\" combodatacol=\"CMNM\" combocodecol=\"CMCD\" comboautoselect=\"false\" combotype=\"filterlike\"/><Cell col=\"4\" text=\"bind:DESCRIPTION\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:REG_USER\"/><Cell col=\"6\" text=\"bind:REG_USER_NM\"/><Cell col=\"7\" text=\"bind:REG_DT\" displaytype=\"date\"/><Cell col=\"8\" text=\"bind:MOD_USER_NM\"/><Cell col=\"9\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.form.div_right.addChild(obj.name, obj);

            obj = new Static("Static60","0","-1","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sMove","45%","96",null,"16","45%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("0px solid");
            obj.set_background("url(\'imagerc::search_open.png\') no-repeat transparent");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1112,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.edt_menu_id00","value","ds_search","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_menu_id00_00","value","ds_search","MENU_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_msg_id","value","ds_search","MSG_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_title","value","ds_search","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edt_description","value","ds_search","DESCRIPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.cmb_msg_type","value","ds_search","MSG_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cmb_company","value","ds_search","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cmb_serv_tp","value","ds_search","SERVICE_TP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMA009CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("CMA009CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("CMA009CT.xfdl", function() {
        /***********************************************************************
         * 화면ID 	 : SMA080CT
         * 화면명   : 메세지관리
         * 화면설명 : 화면에서 사용되는 메세지 목록을 관리하는 화면
         * 작성일 	 : 2017-07-27 10:11
         * 작성자   : SOOIM
         * 수정이력 :
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2020-06-25		배영걸		17 버전업
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
        this.fv_currentDS = this.head;
        this.fv_currentGrid = this.div_cont.form.div_left.form.grd_head;
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
        	//동기방식 3번째param : false(공통코드 호출후 필터링 목적)
        	this.form_onload_com(obj, e, false);
        	this.fv_form = obj;
        	this.fn_setComboDs(obj);
        	//키값 추가행일경우만 입력가능
        	var msgIdColIdx = this.div_cont.form.div_left.form.grd_head.getBindCellIndex("body", "MSG_ID");
        	this.div_cont.form.div_left.form.grd_head.setCellProperty("body", msgIdColIdx, "edittype", "expr:dataset.getRowType(currow) == 2 ? 'normal' : 'none'");

        	//rowTypeValidation 설정
        	var dsArr = ["ds_head", "ds_detail"];
        	this.gfn_rowTypeValidationDs(dsArr);

        	//drag 버튼 활성화
        	this.gfn_setDivDrag(this.div_cont.form.btn_gHMove, this.div_cont.form.div_left, this.div_cont.form.div_right);

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
        	if(Sct.Grid.isUpdate(this.div_cont.form.div_left.form.grd_head)
        		|| Sct.Grid.isUpdate(this.div_cont.form.div_right.form.grd_detail))
        	{
        		//메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
        		if(!Sct.confirm(this,"000171","")){
        			this.div_cont.form.div_left.form.grd_head.setFocus();
                    return false;
        		}
        	}
        	 if(!this.gfn_findSnull(this.div_search)) return false;
        	 //디테일 초기화
        	 this.ds_detail.clearData();
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
        	if(this.fv_currentDS.name == "ds_head")	keyArr = ["MSG_ID","SERVICE_TP"];
        	else									keyArr = ["MSG_ID", "LANG_CD","SERVICE_TP"];
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
        		+ "sqlId=CMA009CT.CMA009CT_DS_HEAD_S ";
        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //그룹코드세부항목 조회
        this.fn_searchDetail = function ()
        {
        	var msgId = this.ds_head.getColumn(this.ds_head.rowposition, "MSG_ID");
        	const companyCd = this.ds_head.getColumn(this.ds_head.rowposition, "COMPANY_CD");

        	var svcId = "searchDetail";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_detail=output1";
        	var argument = "method=getList "
        		+ "sqlId=CMA009CT.CMA009CT_DS_DETAIL_S "
        		+ "MSG_ID=" + msgId + " "
        		+ "COMPANY_CD=" + companyCd + " ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };

        //삭제
        this.fn_delete = function ()
        {
        	//validation
        	if(!this.fn_delete_pre()) return;

        	var sqlId = "";
        	if(this.fv_currentDS.name == "ds_head")	sqlId = "CMA009CT.CMA009CT_DS_HEAD_D";
        	else									sqlId = "CMA009CT.CMA009CT_DS_DETAIL_D";

        	var svcId = "delete";
        	var params = "/commonController.do";
        	var inDatasets = "input1=" +  this.fv_currentDS.name + ":U";
        	var outDatasets = "";
        	var argument = "method=delete "
        		+ "sqlId=" + sqlId + " ";

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

        			//저장후 조회후 변경된 row로 rowposition 설정
        			this.gfn_saveAfterFindRow(this.ds_detail);
        		}
        		else if(strSvcID == "save" ||strSvcID == "delete")
        		{
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

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.ds_head_onrowposchanged = function(obj,e)
        {
        	this.fn_searchDetail();
        };

        //헤더 행추가
        this.div_cont_div_left_btn_addrow_grp_onclick = function(obj,e)
        {
        	if(!this.gfn_findSnull(this.div_search)) return false;
        	var cnt = this.ds_head.getCaseCount("dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT");
        	if(cnt > 0)
        	{
        		Sct.alert(this, "000179"); //저장 후 행추가 해주시기 바랍니다.
        		return ;
        	}
        	//초기화
        	var nRow = this.ds_head.addRow();
        	this.ds_head.setColumn(nRow, "COMPANY_CD", this.ds_search.getColumn(0,"COMPANY_CD"));
        	this.ds_head.setColumn(nRow, "SERVICE_TP", this.ds_search.getColumn(0,"SERVICE_TP"));
        	//포커스
        	this.gfn_SetCellPos(this.div_cont.form.div_left.form.grd_head, "MSG_ID");
        };

        //디테일 행추가
        this.div_cont_div_right_btn_addrow_code_onclick = function(obj,e)
        {
        	var cnt = this.ds_head.getCaseCount("dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT");
        	if(cnt > 0)
        	{
        		Sct.alert(this, "000179"); //저장 후 행추가 해주시기 바랍니다.
        		return ;
        	}
        	//초기화
        	var nRow = this.ds_detail.addRow();
        	var hRow = this.ds_head.rowposition;
        	this.ds_detail.setColumn(nRow, "COMPANY_CD", this.ds_head.getColumn(hRow, "COMPANY_CD"));
        	this.ds_detail.setColumn(nRow, "MSG_ID", this.ds_head.getColumn(hRow, "MSG_ID"));
        	this.ds_detail.setColumn(nRow, "SERVICE_TP", this.ds_head.getColumn(hRow, "SERVICE_TP"));

        	//포커스
        	this.gfn_SetCellPos(this.div_cont.form.div_right.form.grd_detail, "LANG_CD");
        };


        this.div_search_cmb_company_onitemchanged = function(obj,e)
        {
        	//그리드에 변경된 데이터가 있을경우
           if(Sct.Grid.isUpdate(this.div_cont.form.div_left.form.grd_head)||Sct.Grid.isUpdate(this.div_cont.form.div_right.form.grd_detail)){
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
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.div_search.form.cmb_company.addEventHandler("onitemchanged",this.div_search_cmb_company_onitemchanged,this);
            this.div_cont.form.div_left.form.grd_head.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_left.form.btn_addrow_grp.addEventHandler("onclick",this.div_cont_div_left_btn_addrow_grp_onclick,this);
            this.div_cont.form.div_right.form.btn_addrow_code.addEventHandler("onclick",this.div_cont_div_right_btn_addrow_code_onclick,this);
            this.div_cont.form.div_right.form.grd_detail.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_head.addEventHandler("onrowposchanged",this.ds_head_onrowposchanged,this);
        };
        this.loadIncludeScript("CMA009CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
