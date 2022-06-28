(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testCalendar");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"DATE\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">20170414</Col><Col id=\"Column1\">1000000000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("Calendar00","16","14","163","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_datecolumn("DATECOLUMN");
            obj.set_textcolorcolumn("TEXTCOLORCOLUMN");
            obj.set_backgroundcolumn("BACKGROUNDCOLUMN");
            obj.set_bordercolumn("BORDERCOLUMN");
            obj.set_innerdataset("gds_calendar");
            obj.set_value("null");
            obj.set_dateformat("SHORTDATE");
            obj.set_locale("en_US");
            obj.set_editformat("SHORTDATE");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","144","104","200","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","200","23","201","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("1000000000");
            obj.set_locale("ko_KR");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","80","220","377","166",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset00");
            obj.set_locale("ko_KR");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"165\"/><Column size=\"178\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell celltype=\"none\" displaytype=\"date\" edittype=\"date\" text=\"bind:Column0\" mask=\"SHORTDATE\" locale=\"ko_KR\"/><Cell col=\"1\" displaytype=\"currency\" text=\"bind:Column1\" locale=\"ko_KR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","516","100","182","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"143\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"currency\" edittype=\"masknumber\" text=\"bind:Column1\" locale=\"en_US\" textAlign=\"right\" verticalAlign=\"middle\"/></Band></Format></Formats>");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("testCalendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
