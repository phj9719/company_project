(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00207_P01");
            this.set_titletext("병·의원명 지정");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"병원번호\" type=\"STRING\" size=\"256\"/><Column id=\"병의원명\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"전화번호\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SICODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","1","0","447","600",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","5","8","345","22",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("■ 선택시 병·의원명을 더블클릭 하세요.");
            obj.set_color("purple");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","21","30","403","540",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"148\"/><Column size=\"89\"/><Column size=\"107\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"병의원명\"/><Cell col=\"2\" text=\"전화번호\"/><Cell col=\"3\" text=\"주 소\"/></Band><Band id=\"body\"><Cell text=\"bind:병원번호\"/><Cell col=\"1\" text=\"bind:병의원명\" cssclass=\"cellBWoman\" cursor=\"pointer\"/><Cell col=\"2\" text=\"bind:전화번호\"/><Cell col=\"3\" text=\"bind:주소\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",450,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00207_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00207_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00207_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00207_P01
         * 화면명   	: 병·의원명 지정
         * 화면설명 	:
         * 작성일   	: 2022-06-09
         * 작성자   	: 성재영
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용

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
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.clearData();
        	this.ds_search.addRow();
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
        				   + "sqlId=DAY00207_P01.DAY00207_P01_DS_LIST_S ";
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
        // 그리드 셀 더블클릭 이벤트
        this.div_cont_grd_list_oncelldblclick = function(obj,e)
        {
        	const nameIdx = obj.getBindCellIndex("body", "병의원명");

        	// 직원성명
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
            this.div_cont.form.sta_00.addEventHandler("onclick",this.div_cont_sta_00_onclick,this);
            this.div_cont.form.grd_list.addEventHandler("oncelldblclick",this.div_cont_grd_list_oncelldblclick,this);
        };
        this.loadIncludeScript("DAY00207_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
