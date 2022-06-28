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
            this.set_titletext("체성분분석");
            this.set_background("#f4f9fc");
            if (Form == this.constructor)
            {
                this._setFormPosition(1180,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_MACADD\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_TP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resident", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_compos", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"BMI\" type=\"STRING\" size=\"256\"/><Column id=\"SMM\" type=\"STRING\" size=\"256\"/><Column id=\"BFM\" type=\"STRING\" size=\"256\"/><Column id=\"FAT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PBF\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_AGE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_DT\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_DT2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_COMP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_manager", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_connlist", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CON_MACH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MACH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"DEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","2.12%","84",null,null,"3.39%","4.29%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_formscrolltype("vertical");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name01","-495","11","80","25",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("7");
            obj.set_text("| 입소일 :");
            obj.set_cssclass("sta_tTxt1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_head","0.00%","45",null,"125","0.00%",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("Static02","0","45","160","80",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","480","45","160","80",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_smm","480","5","160","40",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("2");
            obj.set_text("골격근량(kg)");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_height","0","5","160","40",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("3");
            obj.set_text("신장");
            obj.set_cssclass("sta_tDataHForm4");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_weight","160","5","160","40",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("4");
            obj.set_text("체중");
            obj.set_cssclass("sta_tDataHForm4");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00","160","45","160","80",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_bmi","320","5","160","40",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("6");
            obj.set_text("체지방율(%)");
            obj.set_cssclass("sta_tDataHForm4");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_01","320","45","160","80",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("sta_fat","640","5","160","40",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("8");
            obj.set_text("내장지방레벨");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01","640","45","160","80",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new MaskEdit("mae_height","20","65","120","40",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #dbdbdb");
            obj.set_format("##0.#");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_cssclass("essential");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new MaskEdit("mae_weight","180","65","120","40",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #dbdbdb");
            obj.set_format("##0.#");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_cssclass("essential");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new MaskEdit("mae_bmi","340","65","120","40",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("12");
            obj.set_border("1px solid #dbdbdb");
            obj.set_format("##0.#");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_cssclass("essential");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new MaskEdit("mae_smm","500","65","120","40",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("13");
            obj.set_border("1px solid #dbdbdb");
            obj.set_format("##0.#");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_cssclass("essential");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new MaskEdit("mae_fat","660","65","120","40",null,null,null,null,null,null,this.div_cont.form.div_head.form);
            obj.set_taborder("14");
            obj.set_border("1px solid #dbdbdb");
            obj.set_format("##0.#");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_cssclass("essential");
            this.div_cont.form.div_head.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","0","220",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_tDataBForm3");
            this.div_cont.addChild(obj.name, obj);

            obj = new TextArea("txt_remark","20","240",null,null,"20","20",null,null,null,null,this.div_cont.form);
            obj.set_taborder("5");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_remark","0","180",null,"40","0",null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("3");
            obj.set_text("비고");
            obj.set_cssclass("sta_tDataHForm2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Button("btn_tRecord4","52.47%","190","40","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_tRecord");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_observe_managerIdB","164","0","245","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_tDataBForm2");
            this.div_cont.addChild(obj.name, obj);

            obj = new Combo("cmb_manager","166","2","240","36",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_manager");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_itemheight("36");
            obj.set_buttonsize("0 0");
            obj.set_type("search");
            obj.set_usesoftkeyboard("false");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_manager","0","0","165","40",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("처리자");
            obj.set_cssclass("sta_tDataHForm1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Div("div_search","2.12%","14",null,"40","3.39%",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tSearch","560","0","80","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_tSearch");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tSave",null,"0","90","40","100",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_tSave");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tMeasure",null,"0","90","40","200",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("측정");
            obj.set_cssclass("btn_tMeasure");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tReset",null,"0","100","40","300",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.set_cssclass("btn_tReset");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_date","0","0","160","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_locale("ko_KR");
            obj.set_displaynulltext("일자");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_area","170","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_itemheight("36");
            obj.set_displaynulltext("층(생활실)");
            obj.set_readonly("false");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_location","300","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_location");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("호실");
            obj.set_readonly("false");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_resident","430","0","120","40",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_itemheight("36");
            obj.set_innerdataset("ds_resident");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_displaynulltext("입소자명");
            obj.set_buttonsize("0 0");
            obj.set_popupsize("0 0");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_tDelete",null,"0","90","40","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_cssclass("btn_tDelete");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",1180,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_cont.form.div_head.form.mae_height","value","ds_compos","HEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_cont.form.div_head.form.mae_weight","value","ds_compos","WEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_cont.form.div_head.form.mae_bmi","value","ds_compos","PBF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_cont.form.div_head.form.mae_smm","value","ds_compos","SMM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_cont.form.div_head.form.mae_fat","value","ds_compos","FAT_LVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.cal_date","value","ds_search","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_search.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.cmb_resident","value","ds_search","RES_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_cont.form.txt_remark","value","ds_compos","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_cont.form.cmb_manager","value","ds_compos","MANAGER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB206CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB206CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB206CT.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB206CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUB206CT
         * 화면명   	: 체성분분석
         * 화면설명 	: 체성분을 블루투스 기기를 이용
        				  하여 측정 or 수기로 작성하여 기록하는 화면
         * 작성일    	: ?
         * 작성자   	: ?
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2021-07-26		박한준		1차수정
         *		2021-09-15		조기종		건강기록일지에서 바로가기 버튼으로 화면
        									오픈시 측정 바로 하지 않도록 수정
         *		2021-11-19		이승규		NUB202CT 탭 분리
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
        this.fv_currentDS = this.ds_compos;
        this.fv_currentGrid = "";
        this.tabFlag = nexacro.getApplication().gv_measureFlag;
        var tabMacAdd = nexacro.getApplication().gds_taCurRes.getColumn(0, "TAB_MACADD"); // 탭 맥어드레스
        var comMacAdd = nexacro.getApplication().gds_taCurRes.getColumn(0, "CON_COM_MACADD"); // 체성분측정기 맥어드레스
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e, false);

        	// 검색조건 세팅
        	this.taSearchDataSetting(obj);
        	// 처리자 콤보 세팅
        	this.fn_setComboDs(obj);

        	this.ds_location.filter("ARE_CD == '" + this.ds_search.getColumn(0, "AREA") + "'");

        	this.ds_search.setColumn(0,"TAB_MACADD", tabMacAdd);

        	this.fn_search();

        };

        this.fn_setComboDs = function(obj)
        {
             var comboDsParamArr = [
        		 { outDsName : "ds_manager", sqlId : "NUB_COMMON.NUB_COMMON_DS_MANAGER_S",param : this.ds_search, bEmptyRow : true}
        		,{ outDsName : "ds_location", sqlId : "NUB_COMMON.NUB_COMMON_DS_LOCATION_ALL_S", param : this.ds_search, bEmptyRow : true }
        		,{ outDsName : "ds_resident", sqlId : "NUB_COMMON.NUB_COMMON_DS_RESIDENT_ALL_S", param : this.ds_search, bEmptyRow : true }
             ];
           this.gfn_setComboDs(obj, comboDsParamArr);
        }

        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 검색 버튼
        this.fn_searchBtn = function ()
        {
        	this.fn_search(this.fv_currentDS);
        	//this.fn_search(this.fv_currentDS);

        };

        // 저장 버튼
        this.fn_saveBtn = function ()
        {
        	if(!this.fn_save_pre()) return;
        	this.fn_save();
        };

        //삭제 버튼
        this.fn_deleteBtn = function ()
        {
        	this.fn_delete(this.fv_currentDS);
        };

        // 초기화 버튼
        this.fn_resetBtn = function ()
        {
        	this.fn_reset();
        }
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        // 검색 전 validation
        this.fn_search_pre = function()
        {
        	if(Sct.Util.isEmpty(this.ds_search.getColumn(0,"RES_ID"))) { // 입소자성명이 빈값이면 리턴
        		//this.alert("입소자를 선택하여 주십시오.");
        		return false;
        	}
        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	// 입력 데이터셋에 법인코드(COMPANY_CD) 값이 없으면 저장
        	if(Sct.Util.isEmpty(this.ds_compos.getColumn(0,"COMPANY_CD"))){
        		Sct.alert(this, "000569", "저장");	// {0}할 내용이 없습니다.
        		return false;
        	}else{ // 법인코드 값이 있으면 필수체크
        		if(!this.gfn_findSnull(this.div_cont.form.div_head)) return false;
        	}
        	//입력 필수여부체크
        	//if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;

        	//입력한값 중복 여부 체크
        	var keyArr = ["COMPANY_CD", "COM_SEQ"];

        	if(!this.gfn_duplicateCheck(this.fv_currentDS, keyArr)) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function(ds, row)
        {
        	const resident = this.ds_search.getColumn(0, "RES_ID");
        	if (resident == undefined || resident == "" || resident == null)
        	{
        		alert("입소자를 선택해 주세요");
        		return false;
        	}

        	// 데이터셋 상태가 추가상태이면 삭제 못함
        	if(this.ds_compos.getRowType(this.ds_compos.rowposition) == 2)
        	{
        		Sct.alert(this, "000569", "삭제");	// {0}할 내용이 없습니다.
        		return false;
        	}

        	// 삭제하시겠습니까?
        	if(Sct.confirm(this, "000083", "삭제"))
        	{
        		const nRow = this.ds_compos.rowposition;
        		this.ds_compos.set_updatecontrol(false);
        		this.ds_compos.setRowType(nRow, Dataset.ROWTYPE_DELETE);
        		this.ds_compos.set_updatecontrol(true);
        	}
        	else
        	{
        		return false;
        	}

        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 검색
        this.fn_search = function(ds)
        {
        	if(!this.fn_search_pre()) return;

        	let svcId = "search";
        	let params = "/commonController.do";
        	let inDatasets = "input1=ds_search input2=ds_search";
        	let outDatasets = "ds_resInfo=output1 ds_compos=output2";
        	let argument = "method=getList ";
        		argument += "sqlId='NUB206CT.NUB206CT_DS_RESINFO_S NUB206CT.NUB206CT_DS_COMPOS_S'";

        	let callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        //저장
        this.fn_save = function ()
        {
         	const svcId = "save";
         	const inDs = "ds_compos";
         	this.fn_save_com(svcId, inDs);
        };

        // 삭제
        this.fn_delete = function(ds, row)
        {
        	if(!this.fn_delete_pre(ds, row)) return;

        	let sqlId = "";
        	let inDs = "";
        	if(!Sct.Util.isEmpty(ds))
        	{
        		if(ds.name == "ds_compos"){
        			inDs = ds.name;
        			sqlId = "sqlId='NUB206CT.NUB206CT_DS_COMPOS_D' ";
        		}
        	}

        	let svcId = "delete";
        	let params = "/commonController.do";
        	let inDatasets = "input1=" + inDs + ":U";
        	let outDatasets = "";
        	let argument = "method=delete ";
        		argument += sqlId;

        	let callbackFunc = "fn_callback";
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

        			// 검색결과가 없을경우
        			if(this.ds_compos.rowcount < 1)
        			{
        				// 행추가
        				nRow = this.ds_compos.addRow();
        				console.log("nRow : " + nRow);
        				// 초기화
        				this.ds_compos.setColumn(nRow, "COMPANY_CD", this.ds_search.getColumn(0, "COMPANY_CD"));
        				this.ds_compos.setColumn(nRow, "RES_ID", this.ds_search.getColumn(0, "RES_ID"));

        				// 처리자에 접속자 세팅
        				this.ds_compos.setColumn(nRow, "MANAGER_ID", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID"));

        				//현재시간
        				const time = Sct.Util.getHour()+Sct.Util.getMin();

        				//초기값 설정
        				this.ds_compos.setColumn(nRow, "COM_DT", this.ds_resInfo.getColumn(0,"PRE_DT"));
        				this.ds_compos.setColumn(nRow, "HEIGHT", 0);
        				this.ds_compos.setColumn(nRow, "WEIGHT", 0);
        				this.ds_compos.setColumn(nRow, "PBF", 0);
        				this.ds_compos.setColumn(nRow, "SMM", 0);
        				this.ds_compos.setColumn(nRow, "FAT_LVL", 0);
        			}
        			else
        			{
        				// 처리자에 접속자 세팅
        				this.ds_list.setColumn(0, "MANAGER_ID", nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID"));
        			}
        		}
        		else if(strSvcID == "save")
        		{
        			Sct.alert(this, "000570", "저장");	// {0} 되었습니다.
        			this.fn_search(this.fv_currentDS);
        			//this.fn_search();
        		}
        		else if(strSvcID == "delete")
        		{
        			Sct.alert(this, "000570", "삭제");	// {0} 되었습니다.
        			this.fn_search(this.fv_currentDS);
        			//this.fn_search();
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        // 연결된 기기조회
        this.fn_connnSearch = function (machTp)
        {
        	this.ds_search.setColumn(0,"MACH_TP", machTp);
        	const svcId = "connsearch";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_connlist=output1";
        	const argument = "method=getList "
        		+ "sqlId='NUB202CT.NUB202CT_DS_CONNLIST_S' ";

        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        //초기화
        this.fn_reset = function() {
        	this.ds_search.setColumn(0, "DATE", Sct.Util.getToday()); // 오늘
        	this.fn_search(this.fv_currentDS);
        	//this.fn_search();
        }

        // 연결된 기기 조회
        this.fn_connList = function (machTp)
        {
        	this.fn_connnSearch(machTp);

        	if(this.ds_connlist.rowcount < 1){
        		//this.alert("연결된 기기가 없습니다. 기기 연결 후 측정하시기 바랍니다.");
        		Sct.alert(this, "000583"); // 연결된 기기가 없습니다. 건강측정 기기연결 화면 이동 후 기기 연결하시기 바랍니다.
        		return false;
        	}
        	return true;
        };
         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 체성분 측정 팝업
        this.tab_head_Tabpage3_div_search_btn_tMeasure_onclick = function(obj,e)
        {
        	if(!this.fn_connList("0600")) return false; // 연결된 체성분분석기 조회

        	var param = {mac : comMacAdd};

        	Sct.tPopup(this, "pop4", 350, 500, param, "TabletPOP::NUB_WEIGHT_POP.xfdl", "fn_popCallback");
        };

        // 측정팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "pop4" : // 체성분
        			this.ds_compos.setColumn(0, "HEIGHT", objDs.getColumn(0,"HEIGHT"));
        			this.ds_compos.setColumn(0, "WEIGHT", objDs.getColumn(0,"WEIGHT"));
        			this.ds_compos.setColumn(0, "PBF", objDs.getColumn(0,"PBF"));
        			this.ds_compos.setColumn(0, "SMM", objDs.getColumn(0,"SMM"));
        			this.ds_compos.setColumn(0, "FAT_LVL", objDs.getColumn(0,"FAT_LVL"));
        			this.fn_save(this.ds_compos);
        			break;
        		case "pop5" :	// 처리자
        			this.ds_compos.setColumn(0, "MANAGER_ID", objDs.getColumn(0,"USER_ID"));
        			break;
        		case "pop6" : // 입소자
        			this.ds_location.filter("ARE_CD == '"+objDs.getColumn(0, "AREA")+"'");
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

        // 그리드 수정, 삭제 클릭 이벤트
        this.fn_onexpandup = function(obj,e)
        {
        	if(obj.getBindCellIndex("body", "EDIT_COL") == e.col){
        		this.fv_currentDS.setColumn(e.row, "Y");
        		this.fv_currentDS_i.copyRow(0, this.fv_currentDS, e.row);

        		const userId = nexacro.getApplication().gds_userInfo.getColumn(0,"USER_ID");
        		this.fv_currentDS_i.setColumn(0, "MANAGER_ID", userId);
        	}

        	if(obj.getBindCellIndex("body", "DEL_COL") == e.col){

        		//삭제버튼 클릭시 rowtype 변경
        		this.fv_currentDS.set_updatecontrol(false);
        		this.fv_currentDS.setRowType(e.row, Dataset.ROWTYPE_DELETE);
        		this.fv_currentDS.set_updatecontrol(true);

        		this.fn_delete(this.fv_currentDS, e.row);
        	}

        };

        this.btn_tRecord_onclick = function(obj,e)
        {
        	let param;
        	param = {arg1 : "4"};

        	this.makeStandardObject();
        	this.standardPlugin.callMethod("VOICE", param);
        };

        // 앱에서 _oncallback의 callback 호출시
        this.on_standardPlugin_callback = function(obj, e)
        {
        	trace("this.on_callback ::: " + e.svcid);
        	trace("this.on_callback ::: " + e.reason);
        	trace("this.on_callback ::: " + e.returnvalue);

        	// 탭별 비고 콜백
        	if(e.svcid == "VOICE4")
        	{
        		if(e.reason == 0)
        		{
        			let rmkValue = this.div_cont.form.txt_remark.value;
        			if (rmkValue == undefined)
        			{
        				this.div_cont.form.txt_remark.set_value(e.returnvalue);
        			}
        			else
        			{
        				this.div_cont.form.txt_remark.set_value(rmkValue + " " + e.returnvalue);
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

        this.cmb_manager_oneditclick = function(obj,e)
        {
        	const param = {COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")};

        	Sct.tPopup(this, "pop5", 350, 350, param, "TabletPOP::NUB_MANAGER_POP.xfdl", "fn_popCallback");
        };

        // 입소자 조회 팝업
        this.div_search_cmb_resident_oneditclick = function(obj,e)
        {
        	const param = {
        			COMPANY_CD : nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD")
        		,	FLAG : "NUB206CT"
        		,   AREA : this.ds_search.getColumn(0, "AREA")
        		,   LOCATION : this.ds_search.getColumn(0, "LOCATION")
        		,	DATE : this.ds_search.getColumn(0, "DATE")
        	};

        	Sct.tPopup(this, "pop6", 350, 350, param, "TabletPOP::NUB_RESIDENT_POP.xfdl", "fn_popCallback");
        };


        this.div_search_btn_tMeasure_onclick = function(obj,e)
        {
        	if(!this.fn_connList("0600")) return false; // 연결된 체성분분석기 조회

        	var param = {mac : comMacAdd};

        	Sct.tPopup(this, "pop4", 350, 500, param, "TabletPOP::NUB_WEIGHT_POP.xfdl", "fn_popCallback");
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
            this.div_cont.form.sta_name01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.div_head.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.div_head.form.Static02.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.div_head.form.Static02_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.div_head.form.sta_smm.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.div_head.form.sta_height.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.div_head.form.sta_weight.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.div_head.form.Static02_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.div_head.form.sta_bmi.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.div_head.form.Static02_00_01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.div_head.form.sta_fat.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.div_head.form.Static02_00_00_01.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.div_head.form.mae_height.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.div_cont.form.div_head.form.mae_weight.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.div_cont.form.div_head.form.mae_bmi.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.div_cont.form.div_head.form.mae_smm.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.div_cont.form.div_head.form.mae_fat.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.div_cont.form.Static02_00_00_00.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.txt_remark.addEventHandler("onsetfocus",this.fn_onsetfocus,this);
            this.div_cont.form.sta_remark.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.btn_tRecord4.addEventHandler("onclick",this.btn_tRecord_onclick,this);
            this.div_cont.form.sta_observe_managerIdB.addEventHandler("onclick",this.formClick,this);
            this.div_cont.form.cmb_manager.addEventHandler("oneditclick",this.cmb_manager_oneditclick,this);
            this.div_cont.form.sta_manager.addEventHandler("onclick",this.formClick,this);
            this.div_search.addEventHandler("onclick",this.formClick,this);
            this.div_search.form.btn_tSearch.addEventHandler("onclick",this.fn_searchBtn,this);
            this.div_search.form.btn_tSave.addEventHandler("onclick",this.fn_saveBtn,this);
            this.div_search.form.btn_tMeasure.addEventHandler("onclick",this.div_search_btn_tMeasure_onclick,this);
            this.div_search.form.btn_tReset.addEventHandler("onclick",this.fn_resetBtn,this);
            this.div_search.form.cmb_area.addEventHandler("onitemchanged",this.cmb_area_onitemchanged2,this);
            this.div_search.form.cmb_location.addEventHandler("onitemchanged",this.cmb_location_onitemchanged2,this);
            this.div_search.form.cmb_resident.addEventHandler("oneditclick",this.div_search_cmb_resident_oneditclick,this);
            this.div_search.form.btn_tDelete.addEventHandler("onclick",this.fn_deleteBtn,this);
        };
        this.loadIncludeScript("NUB206CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
