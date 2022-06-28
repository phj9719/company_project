(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00708_P01");
            this.set_titletext("직원회의록 리스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"회의일자\" type=\"DATE\" size=\"256\"/><Column id=\"회의명\" type=\"STRING\" size=\"256\"/><Column id=\"회의내용\" type=\"STRING\" size=\"256\"/><Column id=\"회의결과\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","30",null,null,"0","30",null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"140\"/></Rows><Band id=\"head\"><Cell text=\"회의일자\"/><Cell col=\"1\" text=\"회의명\"/><Cell col=\"2\" text=\"회의내용\"/><Cell col=\"3\" text=\"회의결과\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" expandchar=\"dot\" text=\"bind:회의일자\"/><Cell col=\"1\" text=\"bind:회의명\" cursor=\"pointer\"/><Cell col=\"2\" text=\"bind:회의내용\" displaytype=\"textareacontrol\" edittype=\"readonly\" textAlign=\"left\" wordWrap=\"char\"/><Cell col=\"3\" text=\"bind:회의결과\" displaytype=\"textareacontrol\" edittype=\"readonly\" textAlign=\"left\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00","327","6","120","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("직원회의록 리스트");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01","171","grd_list:6","200","18",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("▲  불러오기 - 회의명 (더블클릭)");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00708_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00708_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00708_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAYEMP_PP
         * 화면명   	: 담당자 선택
         * 화면설명 	: 각 화면에서 입력 담당자를 선택하는 팝업
         * 작성일   	: 2022-02-28
         * 작성자   	: 조기종
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
        const fv_sicode = this.parent.SICODE;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.DAYEMP_PP_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.setColumn(0, "SICODE", fv_sicode);

        	this.fn_search();
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00708_P01.DAY00708_P01_DS_LIST_S ";
        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
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
        this.fn_setData = function(ds, row)
        {
        	this.ds_return.copyData(ds);
        	this.ds_return.clearData();

        	this.ds_return.addRow();
        	this.ds_return.copyRow(0, ds, row);

        	this.close(this.ds_return.saveXML());
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.div_cont_grd_list_oncelldblclick = function(obj,e)
        {
        	const nameIdx = obj.getBindCellIndex("body", "회의명");

        	if (e.col == nameIdx)
        	{
        		this.fn_setData(this.ds_list, e.row);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DAYEMP_PP_onload,this);
            this.div_cont.form.grd_list.addEventHandler("oncelldblclick",this.div_cont_grd_list_oncelldblclick,this);
        };
        this.loadIncludeScript("DAY00708_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
