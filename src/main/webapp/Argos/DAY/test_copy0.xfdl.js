(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"kmmark\" type=\"STRING\" size=\"256\"/><Column id=\"c_autoid\" type=\"STRING\" size=\"256\"/><Column id=\"c_systempa\" type=\"STRING\" size=\"256\"/><Column id=\"c_staffid\" type=\"STRING\" size=\"256\"/><Column id=\"c_group\" type=\"STRING\" size=\"256\"/><Column id=\"c_name\" type=\"STRING\" size=\"256\"/><Column id=\"c_jumin1\" type=\"STRING\" size=\"256\"/><Column id=\"c_jumin2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">AAA</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">BBB</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"chk1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_00","27","22","146","56",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn_00");
            obj.set_cssclass("btn_addimage");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","32","121","600","389",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"sicode\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"그룹\"/><Cell col=\"3\" text=\"주민1\"/><Cell col=\"4\" text=\"주민2\"/></Band><Band id=\"body\"><Cell text=\"bind:sicode\"/><Cell col=\"1\" text=\"bind:c_name\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:c_group\"/><Cell col=\"3\" text=\"bind:c_jumin1\"/><Cell col=\"4\" text=\"bind:c_jumin2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02","400","30","136","52",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_00","576","28","96","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("cmb_00");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_00","636","84","57","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("O");
            obj.set_textPadding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","656","141","121","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00","664","180","126","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_00","662","234","202","114",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_00","656","376","232","120",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_00);
            obj.set_text("Tabpage1");
            this.tab_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_00);
            obj.set_text("Tabpage2");
            this.tab_00.addChild(obj.name, obj);

            obj = new ImageViewer("imv_00","729","33","87","83",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("imv_00");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_00","822","142","163","44",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00","840","24","128","37",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","844","74","124","42",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("가나다");
            obj.set_cssclass("lb01");
            this.addChild(obj.name, obj);

            obj = new Webbrowser("wb_00","917","110","208","151",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","205","22","165","65",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","993","30","112","42",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02","1115","33","130","45",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("sta_02");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","chk_00","value","ds_data","chk1");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("test_copy0.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("test_copy0.xfdl","lib::pgm_com.xjs");
        this.registerScript("test_copy0.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        var fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        this.test_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e, false);

        	this.ds_search.setColumn(0, "sicode", fv_sicode);
        };

        this.btn_00_onclick = function(obj,e)
        {
        	this.alert("hi");
        };

        this.btn_01_onclick = function(obj,e)
        {
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        				   + "sqlId=TEST.TEST_DS_LIST_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.btn_02_onclick = function(obj,e)
        {
        	var svcId = "save";
        	var inDS = "ds_list";

        	this.fn_save_com(svcId, inDS);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			this.alert("조회완료");
        		}
        		else if(strSvcID == "save")
        		{
        			this.alert("저장완료");
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        	}
        };



        this.grd_00_oncellclick = function(obj,e)
        {
        	if (e.col == 1)
        	{
        	this.ds_list.getColumn(e.row, "점검일")
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.test_onload,this);
            this.btn_00.addEventHandler("onclick",this.btn_00_onclick,this);
            this.grd_00.addEventHandler("oncellclick",this.grd_00_oncellclick,this);
            this.btn_02.addEventHandler("onclick",this.btn_02_onclick,this);
            this.btn_01.addEventHandler("onclick",this.btn_01_onclick,this);
        };
        this.loadIncludeScript("test_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
