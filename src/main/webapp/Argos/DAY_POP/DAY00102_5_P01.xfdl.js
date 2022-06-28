(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00102_5_P01");
            this.set_titletext("요양.간호일지 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"k_code\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"k_nalja\" type=\"STRING\" size=\"256\"/><Column id=\"k_code\" type=\"STRING\" size=\"256\"/><Column id=\"k_name\" type=\"STRING\" size=\"256\"/><Column id=\"kr_contents\" type=\"STRING\" size=\"256\"/><Column id=\"kn_contents\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_title","0","0","700","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","252","0","48","40",null,null,null,null,null,null,this.div_title.form);
            obj.set_taborder("0");
            obj.set_text("강춘녀");
            obj.set_font("normal 700 12pt/normal \"Arial\"");
            this.div_title.addChild(obj.name, obj);

            obj = new Static("sta_00_00","306","0","153","40",null,null,null,null,null,null,this.div_title.form);
            obj.set_taborder("1");
            obj.set_text("수급자 요양.간호일지");
            obj.set_font("normal 700 12pt/normal \"Arial\"");
            this.div_title.addChild(obj.name, obj);

            obj = new Div("div_container","0","50","700","700",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","0","700","700",null,null,null,null,null,null,this.div_container.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"52\"/><Column size=\"146\"/><Column size=\"169\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"70\"/></Rows><Band id=\"head\"><Cell text=\"작성일\" calendardateformat=\"yyyy.MM.dd\"/><Cell col=\"1\" text=\"요양일지\"/><Cell col=\"2\" text=\"간호일지\"/></Band><Band id=\"body\"><Cell text=\"bind:k_nalja\" calendardateformat=\"yyyy.MM.dd\" color=\"blue\"/><Cell col=\"1\" text=\"bind:kr_contents\" displaytype=\"textareacontrol\" edittype=\"readonly\" wordWrap=\"char\"/><Cell col=\"2\" text=\"bind:kn_contents\" edittype=\"readonly\" displaytype=\"textareacontrol\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.div_container.addChild(obj.name, obj);

            obj = new Static("sta_00","127","757","320","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("▲복사시 내용 드래그 후 Ctrl+C 또는 더블클릭 !");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_title.form.sta_00","text","ds_list","k_name");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00102_5_P01.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00102_5_P01.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00102_5_P01.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;

        //onload 이벤트
        this.form_onload = function(obj,e)
        {
        	this.form_onload_com(obj,e,false);

        	//현재 날짜
        	var now = new Date();
        	//현재 년도
        	var year = now.getFullYear();
        	//현재 월
        	var month = now.getMonth()+1;

        	//이전 월
        	month = month == 1 ? 12 : month-1;
        	month = month <10 ? "0" + month.toString() : month;

        	//이전 월 초
        	var fdate = year.toString() + month.toString() + "01";

        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	var sicode = this.parent.SICODE;
        	var k_code = this.parent.K_CODE;
        	this.ds_search.setColumn(0,"sicode", sicode);
        	this.ds_search.setColumn(0,"k_code", k_code);
        	this.ds_search.setColumn(0,"date_from", fdate);
        	this.fn_search();

        };

        /************************************************************************
         * Transaction Func
         ************************************************************************/
        //조회
        this.fn_search = function()
        {
         	var svcId = "search";
         	var params = "/commonController.do";
         	var inDatasets = "input1=ds_search";
         	var outDatasets = "ds_list=output1";
         	var argument = "method=getList "
        				 + "sqlId=DAY00102_5_P01.DAY00102_5_P01_DS_LIST ";
         	var callbackFunc = "fn_callback";
         	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        //콜백
        this.fn_callback = function (strSvcId, nErrorCode, strErrorMsg)
        {	//0 이면 트랜잭션 성공
        	if (nErrorCode == 0)
        	{
        		if (strSvcId == "search")
        		{

        		}
        	}
        	else
        	{
        		Sct.alert(this,"",strErrorMsg);
        	}
        };

        /************************************************************************
         * Component Event
         ************************************************************************/
        //그리드 더블클릭시 복사 이벤트
        this.div_container_grd_00_oncelldblclick = function(obj,e)
        {
        	if (e.col == obj.getBindCellIndex("body","kr_contents"))
        	{
        		var str = "";
        		//이벤트가 발생한 행의 kr_contents컬럼 데이터를 가져옴
        		str = this.ds_list.getColumn(e.row,"kr_contents");
        		str += " ";
        		this.ds_return.clearData();
        		//데이터셋에 text컬럼을 STRING 타입으로 추가
        		this.ds_return.addColumn("text", "STRING");
        		var nRow = this.ds_return.addRow();
        		this.ds_return.setColumn(nRow, "text", str);

        		this.close(this.ds_return.saveXML());
        	}

        	if (e.col == obj.getBindCellIndex("body","kn_contents"))
        	{
        		var str = "";
        		str = this.ds_list.getColumn(e.row,"kn_contents");
        		str += " ";
        		this.ds_return.clearData();
        		this.ds_return.addColumn("text", "STRING");
        		var nRow = this.ds_return.addRow();
        		this.ds_return.setColumn(nRow, "text", str);

        		this.close(this.ds_return.saveXML());
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_container.form.grd_00.addEventHandler("oncelldblclick",this.div_container_grd_00_oncelldblclick,this);
        };
        this.loadIncludeScript("DAY00102_5_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
