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
            this.set_titletext("버전정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_title","5.00%","27",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("버전정보");
            obj.set_verticalAlign("top");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt","5%","42%",null,"80","5%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("앱 버전을 확인하는 중입니다.");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update","5%","86%",null,"54","5%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("업데이트");
            obj.set_cssclass("btn_basic");
            obj.set_visible("false");
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
        this.addIncludeScript("mTest12.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("mTest12.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("mTest12.xfdl","lib::mpgm_com.xjs");
        this.registerScript("mTest12.xfdl", function() {
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

        	const standard = this.makeStandardObject();

        	if(standard)
        	{
        		const param = {};
        		this.standardPlugin.callMethod("versionCheck", param);
        	}
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
        // 앱에서 _oncallback의 callback 호출시
        this.on_standardPlugin_callback = function(obj, e)
        {
        	trace("this.on_callback ::: " + e.svcid);
        	trace("this.on_callback ::: " + e.reason);
        	trace("this.on_callback ::: " + e.returnvalue);


        	if(e.svcid == "versionCheck")
        	{
        		if(e.reason == 0)
        		{
        			trace("this.on_callback ::: " + JSON.stringify(e.returnvalue));
        			let txt;
        			const json = e.returnvalue;
        			const curVer = json.curVersion;
        			const makVer = json.makVersion;
        			const curVerRe = curVer.replace(/\./g, "");
        			const makVerRe = makVer.replace(/\./g, "");
        			trace("replace CurrentVersion : " + curVerRe);
        			trace("replace MaketVersion : " + makVerRe);
        			const intCurVer = parseInt(curVerRe);
        			const intMakVer = parseInt(makVerRe);
        			if(intCurVer < intMakVer)
        			{
        				txt = "새로운 버전이 출시되었습니다.\n\n";
        				txt += "최신버전 " + makVer + "\n";
        				txt += "현재버전 " + curVer;

        				this.btn_update.set_visible(true);
        			}
        			else
        			{
        				txt = "현재 최신 버전 이용중입니다.\n\n";
        				txt += "현재 버전 " + curVer;

        				this.btn_update.set_visible(false);
        			}

        			this.sta_txt.set_text(txt);
        		}
        		else if(e.reason == -1)
        		{
        			let txt = "버전 확인에 실패하였습니다.";

        			this.sta_txt.set_text(txt);
        		}
        	}
        };


        this.btn_update_onclick = function(obj,e)
        {
        	const param = {};
        	this.standardPlugin.callMethod("appUpdate", param);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.btn_update.addEventHandler("onclick",this.btn_update_onclick,this);
        };
        this.loadIncludeScript("mTest12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
