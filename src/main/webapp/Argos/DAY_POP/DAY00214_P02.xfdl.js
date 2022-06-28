(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00214_P02");
            this.set_titletext("월간 감염예방일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"예방번호\" type=\"STRING\" size=\"256\"/><Column id=\"예방일\" type=\"DATE\" size=\"256\"/><Column id=\"wd\" type=\"STRING\" size=\"256\"/><Column id=\"예방요일\" type=\"STRING\" size=\"256\"/><Column id=\"환기시행\" type=\"STRING\" size=\"256\"/><Column id=\"방역여부\" type=\"STRING\" size=\"256\"/><Column id=\"미비사항1\" type=\"STRING\" size=\"256\"/><Column id=\"조치사항1\" type=\"STRING\" size=\"200\"/><Column id=\"조치여부1\" type=\"STRING\" size=\"256\"/><Column id=\"미비사항2\" type=\"STRING\" size=\"256\"/><Column id=\"조치사항2\" type=\"STRING\" size=\"256\"/><Column id=\"조치여부2\" type=\"STRING\" size=\"256\"/><Column id=\"예방자명\" type=\"STRING\" size=\"256\"/><Column id=\"예방직종\" type=\"STRING\" size=\"256\"/><Column id=\"예방코드\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"DATE\" size=\"256\"/><Column id=\"date_to\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_func","0","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","20","9","230","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("0");
            obj.set_text("감염예방일지");
            obj.set_cssclass("lb01");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_예방일자","675","11","55","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("예방기간");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_예방일","733","9","110","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_tooltiptext("점검일");
            obj.set_buttonsize("0 0");
            this.div_func.addChild(obj.name, obj);

            obj = new Static("sta_00","846","11","10","25",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_func.addChild(obj.name, obj);

            obj = new Calendar("cal_예방일00","863","9","110","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_initvalueid("iv_cal_dot");
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_tooltiptext("점검일");
            obj.set_buttonsize("0 0");
            this.div_func.addChild(obj.name, obj);

            obj = new Div("div_cont","10","40",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_main","10","0",null,null,"10","5",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e2e2e2");
            obj.set_text("");
            obj.set_cssclass("chk_s1");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","0",null,null,null,null,this.div_cont.form.div_main.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"40\"/><Column size=\"299\"/><Column size=\"299\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"예방일\"/><Cell col=\"1\" text=\"요일\"/><Cell col=\"2\" text=\"환기시행\"/><Cell col=\"3\" text=\"방역여부\"/><Cell col=\"4\" text=\"관리자\"/><Cell col=\"5\" text=\"조회\"/><Cell col=\"6\" text=\"기록\"/></Band><Band id=\"body\"><Cell text=\"bind:예방일\" displaytype=\"date\" expandchar=\"dot\"/><Cell col=\"1\" text=\"bind:예방요일\"/><Cell col=\"2\" text=\"bind:환기시행\" displaytype=\"textareacontrol\" edittype=\"readonly\" textareaacceptsenter=\"true\" textareascrolltype=\"vertical\" textareascrollbartype=\"default\"/><Cell col=\"3\" text=\"bind:방역여부\" wordWrap=\"char\" textAlign=\"left\" displaytype=\"textareacontrol\" edittype=\"readonly\"/><Cell col=\"4\" text=\"bind:예방자명\" textAlign=\"left\"/><Cell col=\"5\" expandshow=\"show\" expandsize=\"60\" expandimage=\"url('theme://images/ico_search.png')\" cursor=\"pointer\"/><Cell col=\"6\" text=\"bind:예방번호\"/></Band></Format></Formats>");
            this.div_cont.form.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_func.form.cal_예방일","value","ds_search","date_from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_func.form.cal_예방일00","value","ds_search","date_to");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00214_P02.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00214_P02.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00214_P02.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00214_P01
         * 화면명   	: 월별 감염예방일지
         * 화면설명 	:
         * 작성일   	: 2022-05-24
         * 작성자   	: 이동관
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
         ***********************************************************************/
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_cont.form.div_main.form.grd_list;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	// 삽입, 수정 공통 함수를 사용하기 위해 gv_curWinKey를 세팅
        	nexacro.getApplication().gv_curWinKey = "DAY00214_P02";

        	// 그리드 세팅
        	this.initCssGrid(this.div_cont.form.div_main.form.grd_list);

        	this.fv_sicode = this.parent.SICODE;
        	this.fv_date_from = this.parent.DATE_FROM;
        	this.fv_date_to = this.parent.DATE_TO;

        	this.ds_search.setColumn(0, "sicode", this.fv_sicode);
        	this.ds_search.setColumn(0, "date_from", this.fv_date_from);
        	this.ds_search.setColumn(0, "date_to", this.fv_date_to);

        	this.fn_search();
        };

        //그리드 head 버튼, body 토요일 파란색 일요일 빨간색
        this.initCssGrid = function(grid){

        	const monIdx = grid.getBindCellIndex("body", "예방일");
        	const monIdx2 = grid.getBindCellIndex("body", "예방요일");
        	const monCss = "expr:dataset.getColumn(currow, 'wd') == '6' ? 'BlueFontCell' : "
        				 + "dataset.getColumn(currow, 'wd') == '0' ? 'RedFontCell' : ''";

        	grid.setCellProperty("body", monIdx, "cssclass", monCss);
        	grid.setCellProperty("body", monIdx2, "cssclass", monCss);
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	// 검색조건 필수 체크 (컴포넌트 tooltiptext 값 넣을 것)
        	if (!this.gfn_findSnull(this.div_search)) return false;

        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 조회
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId='DAY00214_P02.DAY00214_P02_DS_LIST_S' ";

        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		// 작성자
        		case "record" :
        			if (objDs.getColumn(0, "REFRESH") == "Y"){
        				this.fn_search();
        			}
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 조회 버튼
        this.fn_searchBtn = function(obj,e)
        {
        	this.fn_search();
        };

        this.div_cont_div_main_grd_list_onexpandup = function(obj,e)
        {
        	const param = {
        			SICODE : this.fv_sicode
        		,	DATE : this.ds_list.getColumn(this.ds_list.rowposition, "예방일")
        	};
        	Sct.popup(this, "record", 450, 400, "", param, "DAY_POP::DAY00214_P01.xfdl", "fn_popCallback");
        };

        this.DAY00214_P02_onclose = function(obj,e)
        {
        	this.ds_return.clearData();
        	this.ds_return.addColumn("REFRESH", "STRING");
        	var nRow = this.ds_return.addRow();
        	this.ds_return.setColumn(nRow, "REFRESH", "Y");

        	this.close(this.ds_return.saveXML());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.DAY00214_P02_onclose,this);
            this.div_cont.form.div_main.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_main.form.grd_list.addEventHandler("onexpandup",this.div_cont_div_main_grd_list_onexpandup,this);
        };
        this.loadIncludeScript("DAY00214_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
