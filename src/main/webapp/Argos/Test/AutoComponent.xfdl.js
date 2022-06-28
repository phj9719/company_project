(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AutoComponent");
            this.set_titletext("컴포넌트 자동생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1112,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tbnm", this);
            obj._setContents("<ColumnInfo><Column id=\"TNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_top", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"STATICCOMP\" type=\"STRING\" size=\"256\"/><Column id=\"NOTSTATIC\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mid", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"STATICCOMP\" type=\"STRING\" size=\"256\"/><Column id=\"NOTSTATIC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bottom", this);
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"STATICCOMP\" type=\"STRING\" size=\"256\"/><Column id=\"NOTSTATIC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bind", this);
            obj._setContents("<ColumnInfo><Column id=\"BIND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("bnt_exe","916","3","162","58",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("EXCUTE");
            obj.set_background("aqua");
            obj.set_border("2px solid rgba(170,170,170,1)");
            obj.set_color("black");
            obj.set_font("11pt \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_input","6","5","902","83",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_border("2px solid crimson");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rowCnt","470","5","47","25",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("0");
            this.div_input.addChild(obj.name, obj);

            obj = new Static("sta_tableName00","302","7","170","21",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("1");
            obj.set_text("row에 표시할 라벨 수(static)");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_input.addChild(obj.name, obj);

            obj = new Edit("edt_height","546","38","77","25",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("2");
            this.div_input.addChild(obj.name, obj);

            obj = new Static("sta_tableName04","487","38","57","25",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("3");
            obj.set_text("Height");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_input.addChild(obj.name, obj);

            obj = new Edit("edt_width","387","38","72","25",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("4");
            this.div_input.addChild(obj.name, obj);

            obj = new Edit("edt_left","217","38","72","25",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("5");
            this.div_input.addChild(obj.name, obj);

            obj = new Static("sta_tableName03","336","40","52","21",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("6");
            obj.set_text("Width");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_input.addChild(obj.name, obj);

            obj = new Combo("cmb_tableName","98","5","190","25",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_tbnm");
            obj.set_codecolumn("TNM");
            obj.set_datacolumn("TNM");
            this.div_input.addChild(obj.name, obj);

            obj = new Static("sta_tableName","6","7","87","21",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("8");
            obj.set_text("Table Name");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_input.addChild(obj.name, obj);

            obj = new Static("sta_tableName01","9","40","42","21",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("9");
            obj.set_text("Top");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_input.addChild(obj.name, obj);

            obj = new Edit("edt_top","55","38","72","25",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("10");
            this.div_input.addChild(obj.name, obj);

            obj = new Static("sta_tableName02","173","40","42","21",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("11");
            obj.set_text("Left");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_input.addChild(obj.name, obj);

            obj = new Static("sta_tableName05","630","38","67","25",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("12");
            obj.set_text("compid");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_input.addChild(obj.name, obj);

            obj = new Edit("edt_compid","698","40","193","25",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("13");
            this.div_input.addChild(obj.name, obj);

            obj = new Grid("grd_top","6","572","150","82",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("ds_top");
            obj.set_visible("false");
            obj.set_nodatatext("No Data (ds_top)");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"1086\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"GB\"/><Cell col=\"1\" text=\"RN\"/><Cell col=\"2\" text=\"STATIC 백그라운드\"/><Cell col=\"3\" text=\"NOTSTATIC\"/></Band><Band id=\"body\"><Cell text=\"bind:GB\"/><Cell col=\"1\" text=\"bind:RN\"/><Cell col=\"2\" text=\"bind:STATICCOMP\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell col=\"3\" text=\"bind:NOTSTATIC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mid","314","585","153","57",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_mid");
            obj.set_cellclickbound("cell");
            obj.set_selecttype("row");
            obj.set_nodatatext("No Data (ds_mid)");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"1090\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"GB\"/><Cell col=\"1\" text=\"RN\"/><Cell col=\"2\" text=\"STATIC라벨\"/><Cell col=\"3\" text=\"NOTSTATIC\"/></Band><Band id=\"body\"><Cell text=\"bind:GB\"/><Cell col=\"1\" text=\"bind:RN\"/><Cell col=\"2\" text=\"bind:STATICCOMP\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell col=\"3\" text=\"bind:NOTSTATIC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_bottom","164","585","153","57",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("ds_bottom");
            obj.set_cellclickbound("cell");
            obj.set_selecttype("row");
            obj.set_nodatatext("No Data(ds_bottom)");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"1090\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"GB\"/><Cell col=\"1\" text=\"RN\"/><Cell col=\"2\" text=\"STATICCOMP\"/><Cell col=\"3\" text=\"EDIT,COMBO,RADIOBUTTON 등등..\"/></Band><Band id=\"body\"><Cell text=\"bind:GB\"/><Cell col=\"1\" text=\"bind:RN\"/><Cell col=\"2\" text=\"bind:STATICCOMP\"/><Cell col=\"3\" text=\"bind:NOTSTATIC\" textAlign=\"left\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("textarea_top","6","131","250","433",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new TextArea("textarea_mid","266","131","250","433",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new TextArea("textarea_bottom","526","131","250","433",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new TextArea("textarea_bind","786","131","250","433",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","100","240","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("컴포넌트 백그라운드 레이아웃");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","268","100","240","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("static 속성");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","528","100","240","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("combo,edit 등등");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","789","100","240","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("bind info");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1112,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AutoComponent.xfdl","lib::sct_com.xjs");
        this.registerScript("AutoComponent.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/

        this.AutoComponent_onload = function (obj, e)
        {
        	this.fn_search();

        	this.div_input.form.edt_top.set_value('89');
        	this.div_input.form.edt_left.set_value('41');
        	this.div_input.form.edt_width.set_value('120');
        	this.div_input.form.edt_height.set_value('29');
        	this.div_input.form.edt_rowCnt.set_value('2');

        	var copyPaste = new Link.CellDataCopy(this, true, true);

        	copyPaste.addGrid(this.grd_top);
        };

        this.fn_search = function (pGubun)
        {
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_tbnm=output1";
        	var argument = "method=getList "
        		 + "sqlId=SEARCH_TABLE ";
        	var callbackFunc = "";
        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        this.bnt_exe_onclick = function (obj, e)
        {
        	var flag = true;

        	if (this.div_input.form.cmb_tableName.value == null || this.div_input.form.cmb_tableName.value == "")
        	{
        		alert("TableName을 입력하세요");
        		flag = false;
        	}
        	else if (this.div_input.form.edt_rowCnt.value == null || this.div_input.form.edt_rowCnt.value == "")
        	{
        		alert("row에 표시할 라벨 수(static)을 입력하세요");
        		flag = false;
        	}
        	else if (this.div_input.form.edt_top.value == null || this.div_input.form.edt_top.value == "")
        	{
        		alert("top을 입력하세요");
        		flag = false;
        	}
        	else if (this.div_input.form.edt_left.value == null || this.div_input.form.edt_left.value == "")
        	{
        		alert("left를 입력하세요");
        		flag = false;
        	}
        	else if (this.div_input.form.edt_width.value == null || this.div_input.form.edt_width.value == "")
        	{
        		alert("width를 입력하세요");
        		flag = false;
        	}
        	else if (this.div_input.form.edt_height.value == null || this.div_input.form.edt_height.value == "")
        	{
        		alert("height를 입력하세요");
        		flag = false;
        	}

        	if (flag == true)
        	{
        		this.textarea_top.set_value("");
        		this.textarea_mid.set_value("");
        		this.textarea_bottom.set_value("");
        		this.textarea_bind.set_value("");

        		var TableName = this.div_input.form.cmb_tableName.value;
        		var left = this.div_input.form.edt_left.value;
        		var top = this.div_input.form.edt_top.value;
        		var width = this.div_input.form.edt_width.value;
        		var height = this.div_input.form.edt_height.value;
        		var cnt = this.div_input.form.edt_rowCnt.value;
        		var compid = this.div_input.form.edt_compid.value;

        		if (compid == null || compid == "")
        		{
        			compid = "";
        		}


        		var svcId = "search";
        		var params = "/commonController.do";
        		var inDatasets = "";
        		var outDatasets = "ds_top=output1 ds_mid=output2 ds_bottom=output3 ds_bind=output4";
        		var argument = "method=getList "
        			 + "sqlId='TEST_AUTOCOMPONENTS01 TEST_AUTOCOMPONENTS02 TEST_AUTOCOMPONENTS02 TEST_AUTOCOMPONENTSBIND' "
        			 + "TABLENAME=" + TableName + " "
        			 + "AS_TOP=" + top + " "
        			 + "AS_LEFT=" + left + " "
        			 + "AS_WIDTH=" + width + " "
        			 + "AS_HEIGHT=" + height + " "
        			 + "AS_CNT=" + cnt + " "
        			 + "AS_COMPID=" + compid + " ";
        		var callbackFunc = "fn_callback";
        		this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        	}
        };
        this.fn_callback = function ()
        {
        	var textArea_TOP = "";
        	var textArea_MID = "";
        	var textArea_BOTTOM = "";
        	var textArea_BIND = "";
        	var topRowcount = 0;
        	var midRowcount = 0;
        	var bottomRowcount = 0;
        	var bindRowcount = 0;
        	topRowcount = this.ds_top.rowcount;
        	midRowcount = this.ds_mid.rowcount;
        	bottomRowcount = this.ds_bottom.rowcount;
        	bindRowcount = this.ds_bind.rowcount;
        	// static라벨 뒤의 background static
        	if (topRowcount > 0)
        	{
        		for (var i = 0; i < topRowcount; i++)
        		{
        			textArea_TOP += this.ds_top.getColumn(i, "STATICCOMP") + "\n";
        		}
        		this.textarea_top.insertText(textArea_TOP);
        	}
        	// static라벨
        	if (midRowcount > 0)
        	{
        		for (var i = 0; i < midRowcount; i++)
        		{
        			textArea_MID += this.ds_mid.getColumn(i, "STATICCOMP") + "\n";
        		}
        		this.textarea_mid.insertText(textArea_MID);
        	}
        	// static 라벨 옆에 edit,combo,radio 등등의 컴포넌트
        	if (bottomRowcount > 0)
        	{
        		for (var i = 0; i < bottomRowcount; i++)
        		{
        			textArea_BOTTOM += this.ds_bottom.getColumn(i, "NOTSTATIC") + "\n";
        		}
        		this.textarea_bottom.insertText(textArea_BOTTOM);
        	}
        	// bind info
        	if (bindRowcount > 0)
        	{
        		for (var i = 0; i < bindRowcount; i++)
        		{
        			textArea_BIND += this.ds_bind.getColumn(i, "BIND") + "\n";
        		}
        		this.textarea_bind.insertText(textArea_BIND);
        	}
        }
        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AutoComponent_onload,this);
            this.bnt_exe.addEventHandler("onclick",this.bnt_exe_onclick,this);
            this.grd_top.addEventHandler("onheadclick",this.grd_top_onheadclick,this);
            this.grd_top.addEventHandler("onkeyup",this.grd_top_onkeyup,this);
            this.textarea_top.addEventHandler("oneditclick",this.textarea_top_oneditclick,this);
        };
        this.loadIncludeScript("AutoComponent.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
