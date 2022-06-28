(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Grid_Sort_Multi_Pop");
            this.set_titletext("Multi Sort");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"col_id\" type=\"STRING\" size=\"256\"/><Column id=\"col_text\" type=\"STRING\" size=\"256\"/><Column id=\"col_sort\" type=\"STRING\" size=\"256\"/><Column id=\"col_seq\" type=\"STRING\" size=\"256\"/><Column id=\"col_nm\" type=\"STRING\" size=\"256\"/><Column id=\"col_index\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sortType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">ascending</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">descending</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_colInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"INT\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_TEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sortInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"INT\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_sort",null,null,"52","25","68","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Sort");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,null,"52","25","12","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Cancel");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_sort","8","44","282","260",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_sortInfo");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"158\"/><Column size=\"108\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"항목\"/><Cell col=\"1\" text=\"정렬\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" text=\"bind:COL_ID\" combodataset=\"ds_colInfo\" combocodecol=\"COL_ID\" combodatacol=\"COL_TEXT\" combodisplay=\"display\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:SORT_TYPE\" combodataset=\"ds_sortType\" combocodecol=\"code\" combodatacol=\"name\" combodisplay=\"display\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","240","14","24","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("+");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","266","14","24","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","13","148","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("** 정렬");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Grid_Sort_Multi_Pop.xfdl", function() {
        this.fv_order = 1;
        this.rowC = 0;
        this.argstr = undefined;

        this.Grid_Sort_Multi_Pop_onload = function (obj, e)
        {
        	this.rowC = obj.getOwnerFrame().rowC;
        	this.argstr = obj.getOwnerFrame().argstr;

        	for (var i = 0; i < this.rowC; i++)
        	{
        		this.ds_colInfo.addRow();
        		this.ds_colInfo.setColumn(i, "SEQ", parseInt(this.argstr[i].split(":")[0]));
        		this.ds_colInfo.setColumn(i, "COL_ID", this.argstr[i].split(":")[1]);
        		this.ds_colInfo.setColumn(i, "COL_TEXT", this.argstr[i].split(":")[2]);
        	}
        };

        this.btn_add_onclick = function (obj, e)
        {
        	var nRow = this.ds_sortInfo.addRow();
        	this.ds_sortInfo.setColumn(nRow, "SORT_TYPE", "1");
        };

        this.btn_del_onclick = function (obj, e)
        {
        	if (this.ds_sortInfo.rowposition < 0)
        	{
        		return;
        	}

        	this.ds_sortInfo.deleteRow(this.ds_sortInfo.rowposition);
        };

        this.ds_sortInfo_oncolumnchanged = function (obj, e)
        {
        	if (e.columnid != "COL_ID")
        	{
        		return;
        	}

        	var row = this.ds_colInfo.findRow("COL_ID", e.newvalue);
        	var seq = this.ds_colInfo.getColumn(row, "SEQ");
        	var text = this.ds_colInfo.getColumn(row, "COL_TEXT");

        	obj.setColumn(e.row, "SEQ", seq);
        	obj.setColumn(e.row, "COL_TEXT", text);
        };

        this.btn_sort_onclick = function (obj, e)
        {
        	this.close(this.ds_sortInfo.saveXML());
        };

        this.btn_cancel_onclick = function (obj, e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Grid_Sort_Multi_Pop_onload,this);
            this.btn_sort.addEventHandler("onclick",this.btn_sort_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.Dataset00.addEventHandler("oncolumnchanged",this.Dataset00_oncolumnchanged,this);
            this.ds_sortInfo.addEventHandler("oncolumnchanged",this.ds_sortInfo_oncolumnchanged,this);
        };
        this.loadIncludeScript("Grid_Sort_Multi_Pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
