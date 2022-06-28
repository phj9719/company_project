(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GridCopyAndPasteSub");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(634,276);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_subTop", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"A\" type=\"STRING\" size=\"256\"/><Column id=\"B\" type=\"STRING\" size=\"256\"/><Column id=\"C\" type=\"STRING\" size=\"256\"/><Column id=\"D\" type=\"STRING\" size=\"256\"/><Column id=\"E\" type=\"STRING\" size=\"256\"/><Column id=\"F\" type=\"STRING\" size=\"256\"/><Column id=\"G\" type=\"STRING\" size=\"256\"/><Column id=\"H\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"B\">456</Col><Col id=\"A\">123</Col></Row><Row><Col id=\"A\">789</Col><Col id=\"B\">10</Col></Row><Row><Col id=\"B\"/><Col id=\"C\"/><Col id=\"D\"/></Row><Row><Col id=\"B\"/><Col id=\"C\"/><Col id=\"D\"/></Row><Row><Col id=\"B\"/><Col id=\"C\"/><Col id=\"D\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_subBottom", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"A\" type=\"STRING\" size=\"256\"/><Column id=\"B\" type=\"STRING\" size=\"256\"/><Column id=\"C\" type=\"STRING\" size=\"256\"/><Column id=\"D\" type=\"STRING\" size=\"256\"/><Column id=\"E\" type=\"STRING\" size=\"256\"/><Column id=\"F\" type=\"STRING\" size=\"256\"/><Column id=\"G\" type=\"STRING\" size=\"256\"/><Column id=\"H\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"B\">852</Col><Col id=\"A\">741</Col><Col id=\"C\">963</Col></Row><Row><Col id=\"A\"/><Col id=\"B\"/></Row><Row><Col id=\"B\"/><Col id=\"C\"/><Col id=\"D\"/></Row><Row><Col id=\"B\"/><Col id=\"C\"/><Col id=\"D\"/></Row><Row><Col id=\"B\"/><Col id=\"C\"/><Col id=\"D\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_subTop","8","7","235","177",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_subTop");
            obj.set_selecttype("area");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"A\"/><Cell col=\"1\" text=\"B\"/><Cell col=\"2\" text=\"C\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:A\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:B\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:C\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_subBottom","280","7","235","177",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_subBottom");
            obj.set_selecttype("area");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"A\"/><Cell col=\"1\" text=\"B\"/><Cell col=\"2\" text=\"C\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:A\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:B\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:C\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",634,276,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("GridCopyAndPasteSub.xfdl", function() {
        // include "Example::GridCopyAndPaste.xjs";

        this.GridCopyAndPasteSub_onload = function (obj, e)
        {
        	var copyPaste = new Link.CellDataCopy(this, true, true);

        	copyPaste.addGrid(this.grd_subTop);
        	copyPaste.addGrid(this.grd_subBottom);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GridCopyAndPasteSub_onload,this);
        };
        this.loadIncludeScript("GridCopyAndPasteSub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
