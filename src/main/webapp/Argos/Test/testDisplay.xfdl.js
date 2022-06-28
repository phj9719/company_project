(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testDisplay");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TP\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEAR_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"PRN_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"APPV_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("USEYN", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("MenuTP", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","17","22","1146","57",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","11","113","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("업무구분");
            obj.set_font("12pt \"Malgun Gothic\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","136","11","142","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","291","11","113","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("화면코드");
            obj.set_font("12pt \"Malgun Gothic\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","624","11","113","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("화면명");
            obj.set_font("12pt \"Malgun Gothic\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","417","11","194","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","750","11","194","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","1047","11","85","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_background("lightblue");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","13","84","183","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("화면별 테이블 컴포넌트 목록");
            obj.set_font("10pt \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","17","119","1146","619",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"화면코드\"/><Cell col=\"1\" text=\"화면명\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"업무구분\"/><Cell col=\"3\" text=\"초기화 권한\"/><Cell col=\"4\" text=\"조회 권한\"/><Cell col=\"5\" text=\"행추가 권한\"/><Cell col=\"6\" text=\"삭제 권한\"/><Cell col=\"7\" text=\"엑셀 권한\"/><Cell col=\"8\" text=\"저장 권한\"/><Cell col=\"9\" text=\"발행 권한\"/><Cell col=\"10\" text=\"승인 권한\"/><Cell col=\"11\" text=\"MENU_PARAM\"/><Cell col=\"12\" text=\"메뉴 상태\"/><Cell col=\"13\" text=\"화면 설명\"/><Cell col=\"14\" text=\"사용 여부\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" text=\"bind:MENU_ID\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:MENU_ID_NM\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:MENU_TP\" combodataset=\"MenuTP\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CLS_AUTH\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:SEAR_AUTH\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ADD_AUTH\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DEL_AUTH\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:XLS_AUTH\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:SAVE_AUTH\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:PRN_AUTH\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:APPV_AUTH\"/><Cell col=\"11\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:MENU_PARAM\"/><Cell col=\"12\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:MENU_STATUS\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:DESCRIPTION\"/><Cell col=\"14\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:USE_YN\" combodataset=\"USEYN\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","753","90","98","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("행복사");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","857","90","98","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","1065","90","98","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","961","90","98","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("testDisplay.xfdl", function() {
        // 조회버튼클
        this.Div00_Button00_onclick = function (obj, e)
        {
        	this.fn_search();
        };

        // 조회
        this.fn_search = function ()
        {
        	var con1 = this.Div00.form.Combo00.value;
        	var con2 = this.Div00.form.Edit00.value;
        	var con3 = this.Div00.form.Edit01.value;

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		 + "sqlId=getMENUID ";
        	var callbackFunc = "";

        	if (con1 != null || con2 != null || con3 != null)
        	{
        		argument += "MENU_ID=" + con2 + " "
        			 + "MENU_ID_NM=" + con3;
        	}
        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_save = function ()
        {
        	alert(this.ds_list.getColumn(0, 3));
        	var svcId = "save";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_list:U";
        	var outDatasets = "";
        	var argument = "method=save "
        		 + "sqlId=saveMENUID "
        		 + "forceSqlFlag=N "
        		 + "REG_PGM_ID=" + this.name + " ";
        	var callbackFunc = "";

        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 행복사
        this.Button00_onclick = function (obj, e)
        {
        	if (this.ds_list.rowposition == -1)
        	{
        		alert("복사할 행이 없습니다.");
        	}
        	else
        	{
        		var rowidx = this.ds_list.rowposition + 1;
        		this.ds_list.insertRow(rowidx);
        		this.ds_list.copyRow(rowidx, this.ds_list, rowidx - 1);
        		this.ds_list.set_rowposition(rowidx - 1);
        	}
        };

        // 행추가
        this.Button01_onclick = function (obj, e)
        {
        	this.ds_list.addRow();
        	// this.ds_list.setColumn(this.ds_list.rowposition,3,0);
        	// this.ds_list.setColumn(this.ds_list.rowposition,4,0);
        	// this.ds_list.setColumn(this.ds_list.rowposition,5,0);
        	// this.ds_list.setColumn(this.ds_list.rowposition,6,0);
        	// this.ds_list.setColumn(this.ds_list.rowposition,7,0);
        	// this.ds_list.setColumn(this.ds_list.rowposition,8,0);
        	// this.ds_list.setColumn(this.ds_list.rowposition,9,0);
        	// this.ds_list.setColumn(this.ds_list.rowposition,10,0);
        };

        this.Button02_onclick = function (obj, e)
        {
        	this.fn_save();
        };



        this.testDisplay_onload = function (obj, e)
        {
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "MenuTP=output1 USEYN=output2";
        	var argument = "method=getList "
        		 + "sqlId='getMENUTP getUSEYN'";
        	var callbackFunc = "";

        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_deleteRow = function (obj, e)
        {
        	this.ds_list.deleteRow(this.ds_list.rowposition);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.testDisplay_onload,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.fn_deleteRow,this);
        };
        this.loadIncludeScript("testDisplay.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
