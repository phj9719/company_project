(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testCommData");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("emp_list", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","96","158","853","258",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("emp_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"USER_NAME\"/><Cell col=\"1\" text=\"USER_ID\"/><Cell col=\"2\" text=\"DEPT_ID\"/><Cell col=\"3\" text=\"PASSWORD\"/><Cell col=\"4\" text=\"NUM\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:USER_NAME\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:USER_ID\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:DEPT_ID\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:PASSWORD\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:NUM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","682","126","54","27",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","753","126","54","27",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","824","126","54","27",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("삭제");
            obj.set_background("crimson");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","895","126","54","27",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("저장");
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
        this.registerScript("testCommData.xfdl", function() {

        this.search = function (obj, e)
        {
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "emp_list=output1";
        	var argument = "method=getList "
        		 + "sqlId=CommtestS ";

        	var callbackFunc = "";
        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };





        this.fn_save = function (obj, e)
        {
        	var svcId = "save";
        	var params = "/commonController.do";
        	var inDatasets = "input1=emp_list:U";
        	var outDatasets = "";
        	var argument = "method=save "
        		 + "sqlId=Commtest "
        		 + "forceSqlFlag=N "
        		 + "REG_PGM_ID=" + this.name;

        	var callbackFunc = "";
        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.Button01_onclick = function (obj, e)
        {
        	this.emp_list.addRow();
        };

        this.Button02_onclick = function (obj, e)
        {
        	var nRow = this.emp_list.rowposition;
        	if (nRow < 0)
        	{
        		// alert
        		alert("데이터를 선택해주세요");
        	}
        	if (nexacro.getApplication().confirm(nRow + "행의 데이터를 삭제하시겠습니까?"))
        	{
        		this.ds_list.deleteRow(nRow);
        		this.fn_save();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.search,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.fn_save,this);
        };
        this.loadIncludeScript("testCommData.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
