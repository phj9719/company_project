(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUC203QR");
            this.set_titletext("예약목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"VIS_DT_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"VIS_TP\" type=\"STRING\" size=\"256\"/><Column id=\"VIS_APPLY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_visit_tp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_reservation", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_mainTitle","5.00%","20",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("비대면 예약 서비스");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mainText","5.00%","62",null,"30","5.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("요양원 직접방문 / 영상통화 예약 및 예약상태 확인");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Div("div_btnDiv","0%","110",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_visit","0","2","33%",null,null,"0",null,null,null,null,this.div_btnDiv.form);
            obj.set_taborder("0");
            obj.set_text("직접방문");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_border("0px none,0px none,3px solid #cccccc");
            obj.set_color("#cccccc");
            this.div_btnDiv.addChild(obj.name, obj);

            obj = new Button("btn_phone","33%","2","33%",null,null,"0",null,null,null,null,this.div_btnDiv.form);
            obj.set_taborder("1");
            obj.set_text("영상통화");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_border("0px none,0px none,3px solid #cccccc");
            obj.set_color("#cccccc");
            this.div_btnDiv.addChild(obj.name, obj);

            obj = new Button("btn_list","66%","2","34%",null,null,"0",null,null,null,null,this.div_btnDiv.form);
            obj.set_taborder("2");
            obj.set_text("예약목록");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_border("0px none,0px none,5px solid #082c71");
            this.div_btnDiv.addChild(obj.name, obj);

            obj = new Grid("grd_list","5.00%","180",null,null,"5.00%","22",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_cssclass("grid2");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"170\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"일시\"/><Cell col=\"1\" text=\"신청내역\"/><Cell col=\"2\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:VIS_DT_TIME\"/><Cell col=\"1\" text=\"bind:VIS_TP\" displaytype=\"combotext\" combodataset=\"ds_nu_visit_tp\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/><Cell col=\"2\" text=\"bind:VIS_APPLY\" displaytype=\"combotext\" combodataset=\"ds_nu_reservation\" combodatacol=\"CMNM\" combocodecol=\"CMCD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,1000,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUC203QR.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUC203QR.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUC203QR.xfdl","lib::mpgm_com.xjs");
        this.registerScript("NUC203QR.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUC203QR
         * 화면명   	: 예약목록
         * 화면설명 	: 모바일에서 보호자가 예약한 내역을 조회
         * 작성일    	: 2021-09-06
         * 작성자   	: 조기종
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2021-09-27		조기종		DB변경으로 인한 FAM_ID 삭제
         ***********************************************************************
         ***********************************************************************
         */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::mpgm_com.xjs"); /*include "lib::mpgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = "";
        this.fv_currentGrid = "";
        this.nMoveY;
        this.fv_flag;
        // 서비스 단에서 받는 variable, 초기화 필요함
        this.outvar = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.NUC203QR_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e);

        	// 조회조건
        	this.ds_search.setColumn(0, "COMPANY_CD", nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD"));
        	this.ds_search.setColumn(0, "RES_ID", nexacro.getApplication().gds_mUserInfo.getColumn(0, "RES_ID"));

        	this.fn_search();
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
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

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        		+ "sqlId=NUC203QR.NUC203QR_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
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
        // 영상통화
        this.div_btnDiv_btn_phone_onclick = function(obj,e)
        {
        	const id = "NUC202CT";
        	const url = "MobileFrame::NUC202CT.xfdl";
        	const title = "예약하기";

        	this.mMenuOpen(id, url, title);
        };

        // 직접방문
        this.div_btnDiv_btn_visit_onclick = function(obj,e)
        {
        	const id = "NUC201CT";
        	const url = "MobileFrame::NUC201CT.xfdl";
        	const title = "예약하기";

        	this.mMenuOpen(id, url, title);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("onclick",this.formClick,this);
            this.addEventHandler("onload",this.NUC203QR_onload,this);
            this.sta_mainTitle.addEventHandler("onclick",this.formClick,this);
            this.sta_mainText.addEventHandler("onclick",this.formClick,this);
            this.div_btnDiv.form.btn_visit.addEventHandler("onclick",this.div_btnDiv_btn_visit_onclick,this);
            this.div_btnDiv.form.btn_phone.addEventHandler("onclick",this.div_btnDiv_btn_phone_onclick,this);
        };
        this.loadIncludeScript("NUC203QR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
