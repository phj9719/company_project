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
            this.set_titletext("이용약관");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","5.00%","26",null,"60","5.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("스마트안심요양원\r\n서비스이용약관 및 개인정보처리방침");
            obj.set_verticalAlign("top");
            obj.set_cssclass("sta_title");
            obj.set_font("bold 18pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_letterSpacing("-1px");
            obj.set_color("#082c71");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","5.00%","117",null,"645","5.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("스마트안심요양원 이용약관\r\n주식회사 에스씨티(이하 \"회사\"라 함)는 개인정보보호 관한 법률을 준수하며 회원님의 개인정보가 어떠한 목적과 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지를 알려드립니다.\r\n\r\n본 개인정보처리방침은 관련볍령의 개정이나 당사 내부방침에 의해 변경될 수 있으며, 이를 개정하는 경우 회사는 변경사항에 대하여 서비스 화면에 게시합니다. 회원님께서는 사이트 방문시 수시로 확인하시기 바랍니다.\r\n\r\n1. 개인정보 처리 목적\r\n회사는 이용자의 개인정보를 다음의 목적 이외의 용도로는 이용하지 않으며, 이용 목적이 변경될 경우에는 동의를 받아 처리하겠습니다.\r\n\r\n[회원 관리]\r\n회원제 서비스 이용에 따른 본인확인, 개인식별, 부정이용 방지, 가입의사 확인, 문의사항 또는 불만처리 등 민원 처리, 분쟁조정 해결을 위한 기록 보존, 고지사항 전달\r\n\r\n[서비스 제공에 관한 계약의 이행 및 요금정산]\r\n콘텐츠 제공, 구매 및 요금 결제, 물품 배송, 구매 및 요금 결제\r\n\r\n2. 개인정보 수집 항목 및 방법\r\n회원 가입 또는 서비스 제공을 위해 필요한 최소한의 개인정보를 수집하고 있습니다.");
            obj.set_cssclass("sta_txt");
            obj.set_wordWrap("char");
            obj.set_verticalAlign("top");
            obj.set_color("#7d7f97");
            obj.set_font("14.5pt/normal \"Noto Sans CJK KR Regular\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("mTest11.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("mTest11.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("mTest11.xfdl","lib::mpgm_com.xjs");
        this.registerScript("mTest11.xfdl", function() {
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
        this.fileGroupId = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e);

        	//조회조건
        	//this.ds_search.setColumn(0, "COMPANY_CD", nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD"));

        	//조회
        	//this.fn_search();

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

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		+ "sqlId=mTest7.mTest7_DS_LIST_S ";

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
        			this.fnMakeAccordionForm(this.div_acco, this.ds_list);
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
        this.loadIncludeScript("mTest11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
