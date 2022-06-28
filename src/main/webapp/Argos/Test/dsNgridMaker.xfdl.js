(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DSnGridMaker");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tbnm", this);
            obj._setContents("<ColumnInfo><Column id=\"TNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("Combo00","8","8","123","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_tbnm");
            obj.set_codecolumn("TNM");
            obj.set_datacolumn("TNM");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","137","8","71","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("만들기");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","8","66","999","306",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","8","398","999","306",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","39","567","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("데이터셋 : 소스에 전부 붙여넣으면 됩니다.");
            obj.set_color("forestgreen");
            obj.set_font("bold italic 15pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","8","373","1037","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("그리드 : 그리드 생성후 <Format></Format> 사이에 붙여넣으면 됩니다. 그리드 자체에 바인딩은 직접 해야 합니다.");
            obj.set_color("forestgreen");
            obj.set_font("bold italic 14pt \"arial\"");
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
        this.registerScript("dsNgridMaker.xfdl", function() {

        this.DSnGridMaker_onload = function (obj, e)
        {
        	this.fn_search();
        };

        this.fn_search = function (pGubun)
        {
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_tbnm=output1";
        	var argument = "method=getList "
        		 + "sqlId=DSGRIDMAKE ";
        	var callbackFunc = "";
        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };
        this.Button00_onclick = function (obj, e)
        {
        	this.TextArea00.set_value("");
        	this.TextArea01.set_value("");

        	var tnm = this.Combo00.value;
        	trace(tnm);
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_ds=output1 ds_grid=output2";
        	var argument = "method=getList "
        		 + "sqlId='DSMAKE GRIDMAKE' "
        		 + "TNM=" + tnm + " ";
        	var callbackFunc = "fn_callback";
        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_callback = function ()
        {
        	var ds = "<ColumnInfo> \n"
        		 + "\t <Column id=\"CHK\" type=\"STRING\" size=\"256\"/> \n";
        	for (var i = 0; i < this.ds_ds.rowcount; i++)
        	{
        		var column = this.ds_ds.getColumn(i, "CNM");
        		ds += "\t <Column id=\"" + column + "\" type=\"STRING\" size=\"256\"/> \n";
        		trace("ds : " + ds);
        	}
        	var last = "</ColumnInfo>";
        	ds += last;
        	this.TextArea00.insertText(ds);


        	var grid = "<Columns> \n"
        		 + "\t <Column size=\"30\" /> \n";
        	var size;
        	for (var i = 0; i < this.ds_grid.rowcount; i++)
        	{
        		var gcolumn = this.ds_grid.getColumn(i, "CNM");
        		grid += "\t <Column size=\"80\" /> \n";
        	}
        	grid += "</Columns> \n";

        	var band = "<Rows> \n"
        		 + "\t <Row size=\"24\" band=\"head\" /> \n"
        		 + "\t <Row size=\"24\" /> \n"
        		 + "</Rows> \n"
        		 + "<Band id=\"head\"> \n"
        		 + "\t <Cell displaytype=\"checkbox\" edittype=\"checkbox\"/> \n";
        	for (var i = 0; i < this.ds_grid.rowcount; i++)
        	{
        		var text = this.ds_grid.getColumn(i, "CNM");
        		band += "\t <Cell col=\"" + (i + 1) + "\" text=\"" + text + "\"/> \n";
        		trace("band : " + band);
        	}
        	band += "</Band> \n";

        	var bindinfo = "<Band id=\"body\"> \n"
        		 + "\t <Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/> \n";
        	var bind;
        	for (var i = 0; i < this.ds_ds.rowcount; i++)
        	{
        		var bindcol = this.ds_ds.getColumn(i, "CNM");
        		bindinfo += "\t <Cell col=\"" + (i + 1) + "\" edittype=\"none\" text=\"bind:" + bindcol + "\"/> \n";
        		trace("bindinfo : " + bindinfo);
        	}
        	bindinfo += "</Band>";
        	grid += band + bindinfo;
        	this.TextArea01.insertText(grid);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DSnGridMaker_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("dsNgridMaker.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
