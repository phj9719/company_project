(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CM_DEBUG_POPUP");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1032,655);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dslist", this);
            obj._setContents("<ColumnInfo><Column id=\"DS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dsCol", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_global", this);
            obj._setContents("<ColumnInfo><Column id=\"GDS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_head","0","28","197","380",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_dslist");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FormDS\"/></Band><Band id=\"body\"><Cell text=\"bind:DS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_detail","205","0","1787",null,null,"0%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats/>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_detail2","0","408","197","222",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_global");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"GlobalDS\"/></Band><Band id=\"body\"><Cell text=\"bind:GDS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","71","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_icon("url(\'imagerc::reset.png\')");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1032,655,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CM_DEBUG_POPUP.xfdl", function() {

        this.CM_DEBUG_POPUP_onload = function (obj, e)
        {
        	for (var i = 0; i < this.opener.objects.length; i++)
        	{
        		var idx = this.ds_dslist.addRow();
        		this.ds_dslist.setColumn(idx, "DS", this.opener.objects[i].name);
        	}
        	for (var a = 0; a < nexacro.getApplication().all.length; a++)
        	{
        		if (nexacro.getApplication().all[a] != null)
        		{
        			trace("not null : " + nexacro.getApplication().all[a].name);
        			// if(application.all[a] instanceof Dataset){
        			if (nexacro.getApplication().all[a] == "[object Dataset]")
        			{
        				var cidx = this.ds_global.addRow();
        				this.ds_global.setColumn(cidx, "GDS", nexacro.getApplication().all[a].name);
        			}
        		}
        	}
        };

        this.Grid00_oncellclick = function (obj, e)
        {
        	var dsnm;
        	var ds;
        	if (this.grd_detail.getBindDataset() != null)
        	{
        		this.ds_dsCol.clear();
        	}
        	if (obj == this.grd_head)
        	{
        		dsnm = this.ds_dslist.getColumn(e.row, "DS");
        		ds = eval("this.opener." + dsnm + ";");
        	}
        	else
        	{
        		dsnm = this.ds_global.getColumn(e.row, "GDS");
        		ds = eval("nexacro.getApplication()." + dsnm + ";");
        	}
        	if (this.parent.isModal == false)
        	{
        		this.ds_dsCol.assign(ds);
        		this.grd_detail.setBindDataset(this.ds_dsCol);
        		this.grd_detail.createFormat();
        		// this.grd_detail.set_autofittype("col");
        		this.grd_detail.set_autosizebandtype("allband");
        		this.grd_detail.set_autosizingtype("col");
        	}
        	else
        	{
        		this.grd_detail.setBindDataset(ds);
        		this.grd_detail.createFormat();
        		// this.grd_detail.set_autofittype("col");
        		this.grd_detail.set_autosizebandtype("allband");
        		this.grd_detail.set_autosizingtype("col");
        	}




        	// Modaless - algorithm
        	// var dsnm = this.ds_dslist.getColumn(e.row,"DS");
        	// var ds = eval("this.opener."+dsnm+";");
        	// trace(ds.name);
        	// if(this.grd_detail.getBindDataset() != null){
        	// this.ds_dsCol.clear();
        	// }
        	// var colidx = ds.getColCount();
        	// for(var i=0; i<colidx; i++){
        	// this.ds_dsCol.addColumn(ds.getColID(i),"string",100);
        	// }
        	// this.grd_detail.setBindDataset(this.ds_dsCol);
        	// this.grd_detail.createFormat();
        	// this.grd_detail.set_autofittype("col");
        	// var rowcnt = ds.rowcount;
        	// for(var z=0; z<rowcnt; z++){
        	// var idx = this.ds_dsCol.addRow();
        	// for(var s=0; s<colidx; s++){
        	// this.ds_dsCol.setColumn(idx,ds.getColID(s),ds.getColumn(z,ds.getColID(s)));
        	// }
        	// }

        	// modal
        	// var ds = eval("this.opener."+dsnm+";");
        	// var obj = this.grd_detail.setBindDataset(ds);
        	// this.grd_detail.createFormat();
        };

        this.Button00_onclick = function (obj, e)
        {
        	this.reload();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CM_DEBUG_POPUP_onload,this);
            this.grd_head.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.grd_detail2.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("CM_DEBUG_POPUP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
