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
                this._setFormPosition(400,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"예방번호\" type=\"STRING\" size=\"256\"/><Column id=\"예방일\" type=\"DATE\" size=\"256\"/><Column id=\"예방요일\" type=\"STRING\" size=\"256\"/><Column id=\"환기시행\" type=\"STRING\" size=\"256\"/><Column id=\"방역여부\" type=\"STRING\" size=\"256\"/><Column id=\"미비사항1\" type=\"STRING\" size=\"256\"/><Column id=\"조치사항1\" type=\"STRING\" size=\"200\"/><Column id=\"조치여부1\" type=\"STRING\" size=\"256\"/><Column id=\"미비사항2\" type=\"STRING\" size=\"256\"/><Column id=\"조치사항2\" type=\"STRING\" size=\"256\"/><Column id=\"조치여부2\" type=\"STRING\" size=\"256\"/><Column id=\"예방자명\" type=\"STRING\" size=\"256\"/><Column id=\"예방직종\" type=\"STRING\" size=\"256\"/><Column id=\"예방코드\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Static("sta_subdisc","236","9","140","26",null,null,null,null,null,null,this.div_func.form);
            obj.set_taborder("1");
            obj.set_text("선택시 예방일자 Click!");
            obj.set_color("purple");
            obj.set_textAlign("right");
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
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"275\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"예방일\"/><Cell col=\"1\" text=\"환기시행\"/><Cell col=\"2\" text=\"관리자\"/></Band><Band id=\"body\"><Cell text=\"bind:예방일\" cursor=\"pointer\" displaytype=\"date\" expandchar=\"dot\"/><Cell col=\"1\" text=\"bind:환기시행\"/><Cell col=\"2\" text=\"bind:예방자명\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cont.form.div_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00214_P03.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00214_P03.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00214_P03.xfdl", function() {
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
        	nexacro.getApplication().gv_curWinKey = "DAY00214_P03";

        	this.fv_sicode = this.parent.SICODE;
        	this.fv_date_from = this.parent.DATE;

        	this.ds_search.setColumn(0, "sicode", this.fv_sicode);
        	this.ds_search.setColumn(0, "date", this.fv_date_from);

        	this.fn_search();
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
        				   + "sqlId='DAY00214_P03.DAY00214_P03_DS_LIST_S' ";

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
        		case "" :
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

        this.div_cont_div_main_grd_list_oncellclick = function(obj,e)
        {
        	const 예방일Idx = obj.getBindCellIndex("body", "예방일");

        	if(e.col == 예방일Idx){

        		this.ds_return.copyData(this.ds_list);
        		this.ds_return.clearData();
        		var nRow = this.ds_return.addRow();
        		this.ds_return.copyRow(0, this.ds_list, this.ds_list.rowposition);

        		this.close(this.ds_return.saveXML());

        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.div_main.form.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.div_cont.form.div_main.form.grd_list.addEventHandler("oncellclick",this.div_cont_div_main_grd_list_oncellclick,this);
        };
        this.loadIncludeScript("DAY00214_P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
