(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00102_1_P01");
            this.set_titletext("실습 팝업01");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"copy_text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"k_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"k_code\" type=\"STRING\" size=\"256\"/><Column id=\"k_name\" type=\"STRING\" size=\"256\"/><Column id=\"kr_contents\" type=\"STRING\" size=\"256\"/><Column id=\"kn_contents\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cont","0","13","800","633",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","15","0","327","41",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("0");
            obj.set_text("수급자 요양.간호일지");
            obj.set_cssclass("lb01");
            this.div_cont.addChild(obj.name, obj);

            obj = new Grid("grd_list","15","50","770","550",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"315\"/><Column size=\"315\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"70\"/></Rows><Band id=\"head\"><Cell text=\"작성일\"/><Cell col=\"1\" text=\"요양일지\"/><Cell col=\"2\" text=\"간호일지\"/></Band><Band id=\"body\"><Cell text=\"bind:k_nalja\"/><Cell col=\"1\" text=\"bind:kr_contents\" edittype=\"readonly\" displaytype=\"textareacontrol\"/><Cell col=\"2\" text=\"bind:kn_contents\" edittype=\"readonly\" displaytype=\"textareacontrol\"/></Band></Format></Formats>");
            this.div_cont.addChild(obj.name, obj);

            obj = new Static("sta_00","135","600","290","28",null,null,null,null,null,null,this.div_cont.form);
            obj.set_taborder("2");
            obj.set_text("▲ 복사시 내용드래그 후 Ctrl+C 또는 더블클릭!");
            this.div_cont.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00102_1_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00102_1_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00102_1_P01.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00102_1_P01
         * 화면명   	: 요양,간호일지 조회 실습
         * 화면설명 	:
         * 작성일   	: 2022-06-02
         * 작성자   	: 김언정
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *	2022-00-00
         ***********************************************************************
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/

        //const fv_flag = this.parent.FLAG;

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
         this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.set_enableevent(false);
        	this.ds_search.setColumn(0, "sicode", this.parent.SICODE);
        	this.ds_search.setColumn(0, "m_code", this.parent.M_CODE);
        	this.ds_search.setColumn(0, "date_from", this.parent.DATE_FROM);
        	this.ds_search.setColumn(0, "date_to", this.parent.DATE_TO);
        	this.ds_search.set_enableevent(true);

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
        				   + "sqlId=DAY00102_P01.DAY00102_P01_DS_LIST_S ";
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
        			var name = this.ds_list.getColumn(0,"k_name");
        			this.div_cont.form.sta_title.set_text(name.trim() + " " + this.div_cont.form.sta_title.text);
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 요양일지 or 간호일지 셀 내용 더블클릭시 해당 내용을 메인화면으로 복사
        this.grd_list_oncelldblclick = function(obj,e)
        {
        	var kr_idx = this.div_cont.form.grd_list.getBindCellIndex("body","kr_contents"); // 1
        	var kn_idx = this.div_cont.form.grd_list.getBindCellIndex("body","kn_contents"); // 2

        	if (e.col != kr_idx && e.col != kn_idx) return;

        	var str = (e.col==kr_idx)? this.ds_list.getColumn(e.row,"kr_contents")
        							  :this.ds_list.getColumn(e.row,"kn_contents");

        	if (nexacro.trim(str) == "") return;

        	this.ds_return.clearData();
        	this.ds_return.addRow();
        	this.ds_return.setColumn(0, "copy_text", str);

        	this.close(this.ds_return.saveXML());
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cont.form.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
        };
        this.loadIncludeScript("DAY00102_1_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
