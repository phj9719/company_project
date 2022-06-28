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
            this.set_titletext("서비스기기등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1112,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEST_COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MAC_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEST_COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_service_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_machine_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cm_use_yn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mac_chk", this);
            obj._setContents("<ColumnInfo><Column id=\"MAC_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_company_cd_s", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","22",null,"74","0%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("s01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mach_nm","15","41","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("기기명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mach_nm","110","41","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_text("ㄴㅇㄴㅇ");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_company_cd","15","11","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("법인명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_service_tp","255","11","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("서비스유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_mac_add","495","11","124","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("맥어드레스");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_dest_comp_cd","255","41","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("배송대상법인");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dest_comp_cd","350","41","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_text("ㄴㅇㄴㅇ");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_mach_use_yn","529","41","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("현장사용중");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mac_add","625","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_text("ㄴㅇㄴㅇ");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_mach_no","769","11","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("기기번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_color("rgba(34,34,34,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mach_no","865","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_text("ㄴㅇㄴㅇ");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_mach_use_yn","625","41","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_cm_use_yn");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_company_cd","110","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_company_cd_s");
            obj.set_codecolumn("COMPANY_CD");
            obj.set_datacolumn("COMPANY_NM");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_service_tp","350","11","130","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cm_service_tp");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_type("filterlike");
            obj.set_cssclass("essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_cont","0","120",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("15");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj.set_border("3px solid rgba(119,119,119,1), 1px solid rgba(229,229,229,1), 1px solid rgba(229,229,229,1), 1px solid rgba(229,229,229,1)");
            obj.set_autofittype("none");
            obj.set_extendsizetype("row");
            obj.set_selecttype("cell");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell expandchar=\"status\"/><Cell col=\"1\" expandchar=\"delete\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"법인코드\" cssclass=\"CellEssential\"/><Cell col=\"4\" text=\"서비스유형\" cssclass=\"CellEssential\"/><Cell col=\"5\" text=\"기기유형\" cssclass=\"CellEssential\"/><Cell col=\"6\" text=\"맥어드레스\"/><Cell col=\"7\" text=\"기기번호\" cssclass=\"CellEssential\"/><Cell col=\"8\" text=\"기기명\" cssclass=\"CellEssential\"/><Cell col=\"9\" text=\"S/N\"/><Cell col=\"10\" text=\"제조사\"/><Cell col=\"11\" text=\"현장사용중 Y/N\" cssclass=\"CellEssential\"/><Cell col=\"12\" text=\"배송대상법인\" cssclass=\"CellEssential\"/><Cell col=\"13\" text=\"비고\"/><Cell col=\"14\" text=\"등록자ID\"/><Cell col=\"15\" text=\"등록자명\"/><Cell col=\"16\" text=\"등록일자\"/><Cell col=\"17\" text=\"수정자명\"/><Cell col=\"18\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" text=\"bind:COMPANY_CD\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:SERVICE_TP\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_cm_service_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"5\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:MACH_TP\" combodataset=\"ds_cm_machine_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"6\" edittype=\"expr:dataset.getRowType(currow) == 2 ? 'normal' : 'none'\" text=\"bind:MAC_ADD\" editautoselect=\"true\" editinputmode=\"normal\" editinputtype=\"number,english,symbol\" editinputfilter=\"comma,dot,sign,space\" editmaxlength=\"17\"/><Cell col=\"7\" text=\"bind:MACH_NO\" edittype=\"normal\"/><Cell col=\"8\" text=\"bind:MACH_NM\" edittype=\"normal\"/><Cell col=\"9\" edittype=\"text\" text=\"bind:SN_NO\"/><Cell col=\"10\" text=\"bind:PRODUCT_NM\" edittype=\"normal\"/><Cell col=\"11\" text=\"bind:MACH_USE_YN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_cm_use_yn\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"12\" text=\"bind:DEST_COMP_CD\" edittype=\"normal\"/><Cell col=\"13\" text=\"bind:REMARK\" edittype=\"textarea\" wordWrap=\"char\" textareaacceptsenter=\"true\" displaytype=\"textareacontrol\" textareascrolltype=\"none\" textareaautoselect=\"true\"/><Cell col=\"14\" text=\"bind:REG_USER\"/><Cell col=\"15\" text=\"bind:REG_USER_NM\"/><Cell col=\"16\" text=\"bind:REG_DT\" displaytype=\"date\"/><Cell col=\"17\" text=\"bind:MOD_USER_NM\"/><Cell col=\"18\" displaytype=\"date\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static_mid_label_left01","0","7","194","22",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("서비스 기기등록");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_addrow",null,"0","80","29","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_com_add");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_alert","130","11","422","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("※ 맥어드레스는 빈값이 아닐경우 중복체크 합니다.");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_sMove","45%","96",null,"16","45%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("url(\'imagerc::search_open.png\') no-repeat transparent");
            obj.set_border("0px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","0","-1","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1112,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_search.form.cmb_mach_use_yn","value","ds_search","MACH_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_mac_add","value","ds_search","MAC_ADD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_mach_no","value","ds_search","MACH_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_mach_nm","value","ds_search","MACH_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edt_dest_comp_cd","value","ds_search","DEST_COMP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cmb_company_cd","value","ds_search","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cmb_service_tp","value","ds_search","SERVICE_TP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMA012CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("CMA012CT.xfdl","lib::pgm_com.xjs");
        this.registerScript("CMA012CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    : CMA005CT
         * 화면명   : 즐겨찾기 관리
         * 화면설명 :
         * 작성일    : 2021-06-09 05:22
         * 작성자   : SOOIM
         * 수정이력 :
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2021-06-09		SOOIM`		1차수정
         *
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
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.grd_list;
        this.nMoveY;
        this.fv_flag;
        this.fv_form;
        // 서비스 단에서 받는 variable, 초기화 필요함
        this.outvar = "";

        var fv_ServiceTp = nexacro.getApplication().gds_userInfo.getColumn(0,"SERVICE_TP");
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e);
        	this.fv_form = obj;
        	this.fn_setComboDs(obj);
        	//상태삭제순번컬럼 고정
        	this.div_cont.form.grd_list.setFormatColProperty(2, "band", "left");

        	//rowTypeValidation 설정
        	var dsArr = ["ds_list"];
        	this.gfn_rowTypeValidationDs(dsArr);

        	// 오픈시 검색조건 첫 항목에 커서 이동
        	this.div_search.form.cmb_company_cd.setFocus();
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
             if(Sct.Grid.isUpdate(this.div_cont.form.grd_list)){
                 //메세지로 변경된 데이터 여부와 상관없이 조회 할지 확인
                 if(!Sct.confirm(this,"000171","")){
        			this.div_cont.form.grd_list.setFocus();
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
        	if(this.fv_currentDS.name == "ds_list")	keyArr = ["COMPANY_CD", "MACH_TP","MAC_ADD","SERVICE_TP"];

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
        	if (!Sct.Grid.hasDeletedRow(this.ds_list))
        	{
        		Sct.alert(this, "000150"); //삭제할 데이터가 없습니다.
        		return false;
        	}

        	//다른상태값 존재여부
        	if(!Sct.Grid.hasDifferentRowType(this.ds_list, Dataset.ROWTYPE_DELETE))
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
        //조회
        this.fn_search = function ()
        {
        	//validation
        	if(!this.fn_search_pre()) return;

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		+ "sqlId=CMA012CT.CMA012CT_DS_LIST_S ";
        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //저장
        this.fn_save = function ()
        {
        	if(!this.fn_save_pre()) return false;

        	let svcId = "save";
        	let inDs = "ds_list"
        	this.fn_save_com(svcId, inDs);
        };

        //삭제
        this.fn_delete = function ()
        {
        	//validation
        	if(!this.fn_delete_pre()) return;

        	var svcId = "delete";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_list:U";
        	var outDatasets = "";
        	var argument = "method=delete "
        		+ "sqlId=CMA012CT_DS_LIST_D ";

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
        			var count = this.ds_list.rowcount;
        			Sct.alert(this, "000175", count + "|");
        			//저장후 조회후 변경된 row로 rowposition 설정
        			this.gfn_saveAfterFindRow(this.ds_list);
        		}
        		else if(strSvcID == "save"||strSvcID == "delete")
        		{
        			this.fn_search();
        		}else if(strSvcID == "macChk"){
        			var macChk = this.ds_mac_chk.getColumn(0,"MAC_CHK");
        			if(macChk != 'N'){
        				if(macChk=='Y'){
        					Sct.alert(this, "000566");  // mac주소 중복
        				}
        				if(macChk=='ERR'){
        					Sct.alert(this, "000567");  // MAC주소 중복 및 중첩된 데이터 다수 존재. 유일해야함.
        				}
        				this.ds_list.setColumn(this.ds_list.rowposition,"MAC_ADD",null);
        			}
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

        /***********************************************************************
         * User Functions
         ***********************************************************************/


         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
         //행추가
        this.fn_addRow = function(obj,e)
        {
        	if(!this.gfn_findSnull(this.div_search)) return false;
        	var nRow = this.ds_list.addRow();
        	this.ds_list.setColumn(nRow, "COMPANY_CD",this.ds_search.getColumn(0,"COMPANY_CD"));
        	this.ds_list.setColumn(nRow, "SERVICE_TP",this.ds_search.getColumn(0,"SERVICE_TP"));
        	this.ds_list.setColumn(nRow, "DEST_COMP_CD",this.ds_search.getColumn(0,"DEST_COMP_CD"));
        	this.ds_list.setColumn(nRow, "MACH_USE_YN",'N');
        	this.ds_list.setColumn(nRow, "USE_YN",'Y');
        };

        this.ds_list_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "MAC_ADD" && e.newvalue != null){
        		if(e.newvalue.length!=17){
        			Sct.alert(this, "000568");  // MAC주소 17자리를 입력해주세요.
        			obj.setColumn(e.row,"MAC_ADD",e.oldvalue);
        			return;
        		}
        		this.ds_mac_chk.clearData();
        		var svcId = "macChk";
        		var params = "/commonController.do";
        		var inDatasets = "";
        		var outDatasets = "ds_mac_chk=output1";
        		var argument = "method=getList "
        			+ "sqlId=NUA009CT.NUA009CT_DS_MAC_CHK_S "
        			+ "MAC_ADD=" + e.newvalue + " ";
        		var callbackFunc = "fn_callback";
        		Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        	}
        };

        this.div_search_cmb_company_onitemchanged = function(obj,e)
        {
        	//그리드에 변경된 데이터가 있을경우
           if(Sct.Grid.isUpdate(this.div_cont.form.grd_list)){
              //메세지로 변경된 데이터 여부와 상관없이 변경할지 확인
              if(!Sct.confirm(this,"000171","")){
                 this.ds_search.setColumn(0, "COMPANY_CD", e.prevalue);
                 return;
              }
           }

           Sct.commCodeTran2(this.fv_form, this.ds_search.getColumn(0,"COMPANY_CD"),fv_ServiceTp, true);
           this.ds_list.clearData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.div_search.form.cmb_company_cd.addEventHandler("onitemchanged",this.div_search_cmb_company_onitemchanged,this);
            this.div_cont.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.grd_list.addEventHandler("onexpandup",this.div_cont_grd_list_onexpandup,this);
            this.div_cont.form.btn_addrow.addEventHandler("onclick",this.fn_addRow,this);
            this.btn_sMove.addEventHandler("onclick",this.search_reset,this);
            this.btn_sMove.addEventHandler("ondrag",this.search_resize,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("CMA012CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
