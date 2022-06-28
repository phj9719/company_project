(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAYEDULIST_PP");
            this.set_titletext("교육일지 리스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"교육일\" type=\"DATE\" size=\"256\"/><Column id=\"교육명\" type=\"STRING\" size=\"256\"/><Column id=\"교육강사\" type=\"STRING\" size=\"256\"/><Column id=\"교육내용\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"140\"/></Rows><Band id=\"head\"><Cell text=\"교육일\"/><Cell col=\"1\" text=\"교육명\"/><Cell col=\"2\" text=\"교육강사\"/><Cell col=\"3\" text=\"교육내용\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" expandchar=\"dot\" text=\"bind:교육일\"/><Cell col=\"1\" text=\"bind:교육명\" cursor=\"pointer\"/><Cell col=\"2\" text=\"bind:교육강사\"/><Cell col=\"3\" text=\"bind:교육내용\" displaytype=\"textareacontrol\" edittype=\"readonly\" textAlign=\"left\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00","297","6","170","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_text("직원 교육(훈련) 일지 리스트");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_01","171","grd_list:6","200","18",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("▲  불러오기 - 교육명 (더블클릭)");
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
        this.addIncludeScript("DAYEDULIST_PP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAYEDULIST_PP.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAYEDULIST_PP.xfdl", function() {
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
         ***********************************************************************
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        const fv_sicode = this.parent.SICODE;
        const fv_date = this.parent.DATE;
        const fv_flag = this.parent.FLAG;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.setColumn(0, "SICODE", fv_sicode);
        	this.ds_search.setColumn(0, "DATE", fv_date);

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
        				   + "sqlId=DAYEDULIST_PP.DAYEDULIST_" + fv_flag + "_PP_DS_LIST_S ";
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
        	const nameIdx = obj.getBindCellIndex("body", "교육명");

        	if (e.col == nameIdx)
        	{
        		this.fn_setData(this.ds_list, e.row);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.grd_list.addEventHandler("oncelldblclick",this.div_cont_grd_list_oncelldblclick,this);
        };
        this.loadIncludeScript("DAYEDULIST_PP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
