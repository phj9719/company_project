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
            this.set_titletext("식사");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRESIDENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SMM\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"BFM\" type=\"STRING\" size=\"256\"/><Column id=\"BFB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATE\">2021.06.10</Col><Col id=\"SMM\">28kg</Col><Col id=\"WEIGHT\">70kg</Col><Col id=\"HEIGHT\">175cm</Col><Col id=\"BFM\">30kg</Col><Col id=\"BFB\">30%</Col></Row><Row><Col id=\"DATE\">2021.05.10</Col><Col id=\"SMM\">30kg</Col><Col id=\"WEIGHT\">68kg</Col><Col id=\"HEIGHT\">175cm</Col><Col id=\"BFM\">29kg</Col><Col id=\"BFB\">29%</Col></Row><Row><Col id=\"DATE\">2021.04.10</Col><Col id=\"SMM\">27kg</Col><Col id=\"WEIGHT\">65kg</Col><Col id=\"HEIGHT\">176cm</Col><Col id=\"BFM\">27kg</Col><Col id=\"BFB\">25%</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SMM\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"BFM\" type=\"STRING\" size=\"256\"/><Column id=\"BFB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATE\">04.10</Col><Col id=\"SMM\">27</Col><Col id=\"WEIGHT\">65</Col><Col id=\"HEIGHT\">176</Col><Col id=\"BFM\">27</Col><Col id=\"BFB\">25</Col></Row><Row><Col id=\"DATE\">05.10</Col><Col id=\"SMM\">30</Col><Col id=\"WEIGHT\">68</Col><Col id=\"HEIGHT\">175</Col><Col id=\"BFM\">29</Col><Col id=\"BFB\">29</Col></Row><Row><Col id=\"DATE\">06.10</Col><Col id=\"SMM\">28</Col><Col id=\"WEIGHT\">70</Col><Col id=\"HEIGHT\">175</Col><Col id=\"BFM\">30</Col><Col id=\"BFB\">30</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","5.00%","120",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("식단정보");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","5.00%","161",null,"30","5.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("식단정보는 일주일 단위로 업데이트 됩니다.");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","5.00%","20",null,"90","5.00%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_background("#8cdd75");
            obj.set_borderRadius("6px");
            obj.set_formscrolltype("both");
            obj.set_formscrollbartype("indicator");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","4%","12","85","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("홍길동");
            obj.set_textAlign("left");
            obj.set_color("#ffffff");
            obj.set_font("bold 17pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_verticalAlign("top");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","104","14","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("어르신 식사현황");
            obj.set_color("#cbeec2");
            obj.set_font("bold 16pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_verticalAlign("top");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","4%","43",null,null,"4%","14%",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("7/1, 조식O  중식O  석식O  오전간식X  오후간식O");
            obj.set_textAlign("right");
            obj.set_color("#ffffff");
            obj.set_font("bold 16pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_letterSpacing("-1px");
            obj.set_verticalAlign("bottom");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","5.00%","190",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2021.06.28(월)");
            obj.set_font("bold 17pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("center");
            obj.set_color("#082c71");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","5.00%","234",null,"200","5.00%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","28%","40",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("divsta1_mDataHForm1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0.00%","0","100.00%","40",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조식");
            obj.set_cssclass("sta1_mDataHForm1");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00",null,"0","1","40","0",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_background("#f3fbf3");
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0%","40","28%","160",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("divsta1_mDataBForm1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0.00%","0","100%","100.00%",null,null,null,null,null,null,this.Div01.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("백미보리밥\r\n누룽지탕\r\n돼지고기불고기\r\n부추겉절이\r\n포기김치");
            obj.set_cssclass("sta1_mDataBForm1");
            obj.set_wordWrap("char");
            obj.set_padding("5px 2px");
            this.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div00",null,"0","1","160","0",null,null,null,null,null,this.Div01.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("#9ee2a9");
            this.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","28%","0","28%","40",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("중식");
            obj.set_cssclass("sta1_mDataHForm2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","28%","40","28%","160",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("백미보리밥\r\n누룽지탕\r\n돼지고기불고기\r\n부추겉절이\r\n포기김치");
            obj.set_cssclass("sta1_mDataBForm2");
            obj.set_wordWrap("char");
            obj.set_padding("5px 2px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","55.79%","0","28%","40",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("석식");
            obj.set_cssclass("sta1_mDataHForm2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","56%","40","27.78%","160",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("백미보리밥\r\n누룽지탕\r\n돼지고기불고기\r\n부추겉절이\r\n포기김치");
            obj.set_cssclass("sta1_mDataBForm2");
            obj.set_wordWrap("char");
            obj.set_padding("5px 2px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","84%","0","16%","40",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("간식");
            obj.set_cssclass("sta1_mDataHForm3");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05","84%","40","16%","80",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("제조딸기요플레");
            obj.set_cssclass("sta1_mDataBForm3");
            obj.set_wordWrap("char");
            obj.set_padding("3px 2px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","84%","120","16%","80",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("찰토마토");
            obj.set_cssclass("sta1_mDataBForm4");
            obj.set_wordWrap("char");
            obj.set_padding("3px 2px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","4.38%","443",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("2021.06.29(화)");
            obj.set_font("bold 17pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("center");
            obj.set_color("#082c71");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","5.00%","486",null,"200","5.00%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div01");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","28%","40",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("divsta1_mDataHForm1");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00","0.00%","0","100%","40",null,null,null,null,null,null,this.Div01_00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조식");
            obj.set_cssclass("sta1_mDataHForm1");
            this.Div01_00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00",null,"0","1","40","0",null,null,null,null,null,this.Div01_00.form.Div00.form);
            obj.set_background("#f3fbf3");
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.Div01_00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0%","40","28%","160",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("divsta1_mDataBForm1");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00","0%","0","100%","160",null,null,null,null,null,null,this.Div01_00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("백미보리밥\r\n누룽지탕\r\n돼지고기불고기\r\n부추겉절이\r\n포기김치");
            obj.set_cssclass("sta1_mDataBForm1");
            obj.set_wordWrap("char");
            obj.set_padding("5px 2px");
            this.Div01_00.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div00",null,"0","1","160","0",null,null,null,null,null,this.Div01_00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("#9ee2a9");
            this.Div01_00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","28%","0","28%","40",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("중식");
            obj.set_cssclass("sta1_mDataHForm2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01","28%","40","28%","160",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("백미보리밥\r\n누룽지탕\r\n돼지고기불고기\r\n부추겉절이\r\n포기김치");
            obj.set_cssclass("sta1_mDataBForm2");
            obj.set_wordWrap("char");
            obj.set_padding("5px 2px");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02","56%","0","28%","40",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("석식");
            obj.set_cssclass("sta1_mDataHForm2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static03","56%","40","28%","160",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            obj.set_text("백미보리밥\r\n누룽지탕\r\n돼지고기불고기\r\n부추겉절이\r\n포기김치");
            obj.set_cssclass("sta1_mDataBForm2");
            obj.set_wordWrap("char");
            obj.set_padding("5px 2px");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static04","84%","0","16%","40",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("6");
            obj.set_text("간식");
            obj.set_cssclass("sta1_mDataHForm3");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static05","84%","40","16%","80",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("7");
            obj.set_text("제조딸기요플레");
            obj.set_cssclass("sta1_mDataBForm3");
            obj.set_wordWrap("char");
            obj.set_padding("3px 2px");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static06","84%","120","16%","80",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("8");
            obj.set_text("찰토마토");
            obj.set_cssclass("sta1_mDataBForm4");
            obj.set_wordWrap("char");
            obj.set_padding("3px 2px");
            this.Div01_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,768,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("mTest5.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("mTest5.xfdl","lib::pgm_com.xjs");
        this.registerScript("mTest5.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: mTest
         * 화면명   	:
         * 화면설명 	:
         * 작성일    	: 2021-07-06
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2020-07-08		배영걸		1차수정
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
        this.fv_currentDS = "";
        this.fv_currentGrid = "";
        this.nMoveY;
        this.fv_flag;
        // 서비스 단에서 받는 variable, 초기화 필요함
        this.outvar = "";
        this.fileGroupId = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e);

        	//조회조건
        	//this.div_search.form.cmb_use_yn.set_value("Y")

        	//조회
        	//this.fn_search();
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	//조회전 그리드에 변경된 데이터가 있을경우 ..
        	if(Sct.Grid.isUpdate(this.ds_notice) || Sct.Grid.isUpdate(this.ds_read_user)){
        		if(!Sct.confirm(this,"000171","")){ //변경된 데이터가 있습니다. 무시하겠습니까?
        			return;
        		}
        	}

        	//조회조건 필수여부확인
        	if(!this.gfn_findSnull(this.div_search)) return false;

        	return true;
        };

        //추가 전 validation
        this.fn_insert_pre = function ()
        {
        	//변경여부
        	if (!Sct.Grid.hasInsertedRow(this.ds_notice))
        	{
        		Sct.alert(this, "000240"); //추가한 데이터가 없습니다.
        		return false;
        	}

        	//다른상태값 존재여부
        	if(!Sct.Grid.hasDifferentRowType(this.ds_notice, Dataset.ROWTYPE_INSERT))
        	{
        		Sct.alert(this, "000237"); //추가작업 외 다른 작업상태가 존재합니다.
        		return false;
        	}

        	//입력 필수여부체크
        	if(!this.gfn_findSnull(this.div_cont.form.div_edit)) return false;

        	//수신인 저장시 validation
        	if(!this.fn_readUserValidation()) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	return true;
        };

        // 수정 전 validation
        this.fn_update_pre = function ()
        {
        	//변경여부
        	if (!Sct.Grid.hasUpdatedRow(this.ds_notice) && !Sct.Grid.isUpdate(this.ds_read_user))
        	{
        		Sct.alert(this, "000118"); //변경된 데이터가 없습니다.
        		return false;
        	}

        	//입력 필수여부체크
        	if(!this.gfn_findSnull(this.div_cont.form.div_edit)) return false;

        	//수신인 저장시 validation
        	if(!this.fn_readUserValidation()) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

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
        		+ "sqlId=CMA001CT.CMA001CT_DS_HEAD_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //detail 조회
        this.fn_searchDetail = function ()
        {
        	var companyCd = this.ds_head.getColumn(this.ds_head.rowposition, "COMPANY_CD");

        	var svcId = "searchDetail";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_detail=output1";
        	var argument = "method=getList "
        		+ "sqlId=CMA001CT.CMA001CT_DS_DETAIL_S ";

        	if(!Sct.Util.isEmpty(companyCd)) argument += "COMPANY_CD=" + companyCd + " ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false);
        };

        //저장
        this.fn_save = function ()
        {
        	//입력 필수여부체크
        	if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;

        	let svcId = "save";
        	let inDs = "ds_head"
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
        		}
        		else if(strSvcID == "insert" || strSvcID == "update" || strSvcID == "delete")
        		{
        			this.fn_search();
        		}
        		else if(strSvcID == "readUserInfoUpdate")
        		{
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
        };
        this.loadIncludeScript("mTest5.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
