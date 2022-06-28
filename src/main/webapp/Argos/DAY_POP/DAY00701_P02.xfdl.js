(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00701_P02");
            this.set_titletext("운영일지 업무내용");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"일지번호\" type=\"STRING\" size=\"256\"/><Column id=\"운영일\" type=\"STRING\" size=\"256\"/><Column id=\"업무제목01\" type=\"STRING\" size=\"256\"/><Column id=\"업무제목02\" type=\"STRING\" size=\"256\"/><Column id=\"업무제목03\" type=\"STRING\" size=\"256\"/><Column id=\"업무제목04\" type=\"STRING\" size=\"256\"/><Column id=\"업무내용01\" type=\"STRING\" size=\"256\"/><Column id=\"업무내용02\" type=\"STRING\" size=\"256\"/><Column id=\"업무내용03\" type=\"STRING\" size=\"256\"/><Column id=\"업무내용04\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Grid("grd_list","0","30",null,null,"0","0",null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"250\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"140\"/></Rows><Band id=\"head\"><Cell text=\"운영일\"/><Cell col=\"1\" text=\"업무내용①\"/><Cell col=\"2\" text=\"업무내용②\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" expandchar=\"dot\" text=\"bind:운영일\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"textareacontrol\" edittype=\"none\" text=\"bind:업무내용01\" textareascrolltype=\"vertical\" textareascrollbartype=\"fixed\" wordWrap=\"char\"/><Cell col=\"2\" edittype=\"none\" displaytype=\"textareacontrol\" text=\"bind:업무내용02\" textareascrolltype=\"vertical\" textareascrollbartype=\"fixed\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00","17","6","170","20",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("▼ 복사시 운영일 더블클릭 !");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,480,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00701_P02.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00701_P02.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00701_P02.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00701_P02
         * 화면명   	: 운영일지 업무내용 조회
         * 화면설명 	: 주야간 운영일지의 업무내용을 조회하여 일지에
        				  삽입하기위한 팝업
         * 작성일   	: 2022-03-21
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
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        // 온로드
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
        // 조회
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00701_P02.DAY00701_P02_DS_LIST_S ";
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
        // 그리드 더블클릭 이벤트
        this.div_cont_grd_list_oncelldblclick = function(obj,e)
        {
        	const dateIdx = obj.getBindCellIndex("body", "운영일");

        	if (e.col == dateIdx)
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
        this.loadIncludeScript("DAY00701_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
