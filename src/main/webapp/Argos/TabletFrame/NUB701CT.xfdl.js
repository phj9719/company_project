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
            this.set_titletext("챗봇에게 질문하기");
            this.set_background("#f4f9fc");
            if (Form == this.constructor)
            {
                this._setFormPosition(1180,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_test1", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TIME\" type=\"STRING\" size=\"256\"/><Column id=\"P1\" type=\"STRING\" size=\"256\"/><Column id=\"BP\" type=\"STRING\" size=\"256\"/><Column id=\"PULSE\" type=\"STRING\" size=\"256\"/><Column id=\"P2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"TIME\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P2\" type=\"STRING\" size=\"256\"/><Column id=\"DES\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_menuTitle","2.5%","10",null,"30","3.5%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_tMenuTitle");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","2.46%","62",null,null,"40","5%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("50");
            obj.set_tabbuttonwidth("150");
            obj.set_showextrabutton("false");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage0",this.Tab00);
            obj.set_text("요양보호사");
            this.Tab00.addChild(obj.name, obj);

            obj = new Webbrowser("web_bot","0%","0%",null,"100%","3.5%",null,null,null,null,null,this.Tab00.Tabpage0.form);
            obj.set_taborder("0");
            obj.set_url("http://192.168.100.172:8080/common/index.html");
            this.Tab00.Tabpage0.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("간호사");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("물리치료사");
            this.Tab00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",1180,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB701CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB701CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB701CT.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB701CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: CMA001CT
         * 화면명   	:
         * 화면설명 	:
         * 작성일    	: 2020-07-08
         * 작성자   	: 배영걸
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
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = "";
        this.fv_currentGrid = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e);

        	this.sta_menuTitle.set_text(this.getOwnerFrame().arguments["menuTitle"]);

        	let botName = this.Tab00.Tabpage0.text;
        	let userName = nexacro.getApplication().gds_userInfo.getColumn(0, "USER_NM_KOR");

        // 	const urlMain = "http://192.168.100.61:8081/"
        // 	const param = "?botName=" + botName + "&userName=" + userName;
        // 	this.Tab00.Tabpage0.form.web_bot.set_url(urlMain + param);
        };

        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // 검색 버튼
        this.fn_searchBtn = function ()
        {
        	//this.fn_search(this.fv_currentDS);
        };

        // 저장 버튼
        this.fn_saveBtn = function ()
        {
        	//this.fn_save(this.fv_currentDS);
        };

        //삭제 버튼
        this.fn_deleteBtn = function ()
        {
        	//this.fn_delete(this.fv_currentDS);
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        // 검색 전 validation
        this.fn_search_pre = function()
        {
        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	return true;
        };

        // 삭제 전 validation
        this.fn_delete_pre = function()
        {
        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 검색
        this.fn_search = function(ds)
        {
        	if(!this.fn_search_pre()) return;

        	let outDs = "";
        	let sqlId = "";
        	if(ds != null && ds != "")
        	{
        		if(ds.name == "ds_test1")
        		{
        			outDs = ds.name + "=output1";
        			sqlId = "sqlId='TEST3.TEST3_DS_TEST_S' ";
        		}
        	}

        	let svcId = "search";
        	let params = "/commonController.do";
        	let inDatasets = "input1=ds_search";
        	let outDatasets = outDs;
        	let argument = "method=getList ";
        		argument += sqlId;

        	let callbackFunc = "fn_callback";
        	//Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function(ds)
        {
        	if(!this.fn_save_pre()) return;

        	let inDs = "";
        	if(ds != null && ds != "")
        	{
        		if(ds.name == "ds_test1")
        		{
        			let nRow = ds.addRow();
        			ds.setColumn(nRow, "", "");
        			inDs = ds.name;
        		}
        	}

        	let svcId = "save";
        	//this.fn_save_com(svcId, inDs);
        };

        // 삭제
        this.fn_delete = function(ds)
        {
        	if(!this.fn_delete_pre()) return;

        	let sqlId = "";
        	let inDs = "";
        	if(ds != null && ds != "")
        	{
        		if(ds.name == "ds_test1")
        		{
        			inDs = ds.name;
        			sqlId = "sqlId='TEST3.TEST3_DS_TEST_D' ";
        		}
        	}

        	let svcId = "delete";
        	let params = "/commonController.do";
        	let inDatasets = "input1=" + inDs + ":U";
        	let outDatasets = "";
        	let argument = "method=delete ";
        		argument += sqlId;

        	let callbackFunc = "fn_callback";
        	//Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{

        		}
        		else if(strSvcID == "save" || strSvcID == "delete")
        		{
        			//this.fn_search();
        		}
        	}
        	else
        	{

        	}
        };
        /***********************************************************************
         * User Functions
         ***********************************************************************/

         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 탭 변경시 fv_currentGrid, fv_currentDS 바꾸기(div_cont에 그리드가 있는경우)
        // this.Tab00_onchanged = function(obj:nexacro.Tab,e:nexacro.TabIndexChangeEventInfo)
        // {
        // 	let i = e.postindex;
        //
        // 	for(let j = 0; j < obj.tabpages[i].form.div_cont.form.components.length; j++)
        // 	{
        // 		if(obj.tabpages[i].form.div_cont.form.components[j] == "[object Grid]")
        // 		{
        // 			this.fv_currentGrid = obj.tabpages[i].form.div_cont.form.components[j];
        // 			if(this.fv_currentGrid.getBindDataset() != undefined)
        // 			{
        // 				this.fv_currentDS = this.fv_currentGrid.getBindDataset();
        // 			}
        // 		}
        // 	}
        // };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.sta_menuTitle.addEventHandler("onclick",this.formClick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
        };
        this.loadIncludeScript("NUB701CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
