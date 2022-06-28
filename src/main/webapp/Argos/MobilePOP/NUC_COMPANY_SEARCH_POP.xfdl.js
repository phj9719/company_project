(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUC_COMPANY_SEARCH_POP");
            this.set_titletext("모바일 시설검색 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(460,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_popMain","25","90",null,null,"25","25",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_companyNm","6.10%","47","300","58",null,null,null,null,null,null,this.div_popMain.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("시설이름을 입력해주세요");
            this.div_popMain.addChild(obj.name, obj);

            obj = new Grid("grd_list","4.88%","120",null,"341","4.88%",null,null,null,null,null,this.div_popMain.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"시설이름\"/></Band><Band id=\"body\"><Cell text=\"bind:COMPANY_NM\"/></Band></Format></Formats>");
            this.div_popMain.addChild(obj.name, obj);

            obj = new ImageViewer("imv_search",null,"54","50","50","4.15%",null,null,null,null,null,this.div_popMain.form);
            obj.set_taborder("1");
            obj.set_image("url(\'theme://images/btn_sear.png\')");
            obj.set_stretch("fit");
            this.div_popMain.addChild(obj.name, obj);

            obj = new Static("Static00","-4","0","414","48",null,null,null,null,null,null,this.div_popMain.form);
            obj.set_taborder("3");
            obj.set_text("시설검색");
            obj.set_textAlign("center");
            obj.set_borderRadius("10px 10px 0px 0px");
            obj.set_background("#81a0da");
            obj.set_color("#ffffff");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            this.div_popMain.addChild(obj.name, obj);

            obj = new ImageViewer("imv_close","27","25","68","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/btn_close.png\')");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",460,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUC_COMPANY_SEARCH_POP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUC_COMPANY_SEARCH_POP.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUC_COMPANY_SEARCH_POP.xfdl","lib::mpgm_com.xjs");
        this.registerScript("NUC_COMPANY_SEARCH_POP.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: NUC_COMPANY_SEARCH_POP
         * 화면명   	: 모바일 시설검색 팝업
         * 화면설명 	: 모바일 로그인 전에 시설을 선택하는 팝업
         * 작성일   	: 2021-09-10
         * 작성자   	: 조기종
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *
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


        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.NUC_COMPANY_SEARCH_POP_onload = function(obj,e)
        {
        	obj.addEventHandler("onkeyup", this.fn_openDebugPopup, this);

        	this.div_popMain.form.imv_search.setFocus(true);

        	// 배경을 투명하게 하기 위하여 childFrame의 배경을 없앤 cssclass적용
        	//this.getOwnerFrame().set_cssclass("mpop");
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 시설 검색
        this.fn_search = function()
        {
        	const svcId = "searchCompany";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "gds_company=output1";
        	let argument = "method=getList ";
        		argument += "sqlId=CM_USER_CHECK.getCompany ";
        		argument += "SERVICE_TP='100' ";

        	if(this.div_popMain.form.edt_companyNm.value != undefined)
        	{
        		argument += "COMPANY_NM=" + this.div_popMain.form.edt_companyNm.value;
        	}

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "searchCompany")
        		{
        			this.ds_list.copyData(nexacro.getApplication().gds_company);
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 돋보기
        this.div_popMain_imv_search_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        // 취소
        this.imv_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.NUC_COMPANY_SEARCH_POP_ondevicebuttonup = function(obj,e)
        {
        	if(e.button == 2)
        	{
        		this.close();
        	}
        };

        this.div_popMain_grd_list_oncellclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		const rIdx = e.row;
        		const companyNm = this.ds_list.getColumn(rIdx, "COMPANY_NM");
        		let alertTxt = "시설이름 : \n";
        			alertTxt += companyNm + " \n";
        			alertTxt += "이 시설을 선택하시겠습니까?";

        		if(confirm(alertTxt))
        		{
        			this.ds_return.copyRow(0, this.ds_list, rIdx);
        			this.close(this.ds_return.saveXML());
        		}
        	}
        };

        this.div_popMain_edt_companyNm_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		if(obj.id == "edt_companyNm")
        		{
        			this.div_popMain.form.imv_search.setFocus(true);
        			this.fn_search();
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NUC_COMPANY_SEARCH_POP_onload,this);
            this.addEventHandler("ondevicebuttonup",this.NUC_COMPANY_SEARCH_POP_ondevicebuttonup,this);
            this.addEventHandler("onclick",this.formClick,this);
            this.div_popMain.addEventHandler("onclick",this.formClick,this);
            this.div_popMain.form.edt_companyNm.addEventHandler("onkeyup",this.div_popMain_edt_companyNm_onkeyup,this);
            this.div_popMain.form.grd_list.addEventHandler("oncellclick",this.div_popMain_grd_list_oncellclick,this);
            this.div_popMain.form.imv_search.addEventHandler("onclick",this.div_popMain_imv_search_onclick,this);
            this.imv_close.addEventHandler("onclick",this.imv_close_onclick,this);
        };
        this.loadIncludeScript("NUC_COMPANY_SEARCH_POP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
