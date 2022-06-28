(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GridCopyAndPaste");
            this.set_titletext("그리드 복사/붙여넣기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1210,888);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bottom", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"A\" type=\"STRING\" size=\"256\"/><Column id=\"B\" type=\"STRING\" size=\"256\"/><Column id=\"C\" type=\"STRING\" size=\"256\"/><Column id=\"D\" type=\"STRING\" size=\"256\"/><Column id=\"E\" type=\"STRING\" size=\"256\"/><Column id=\"F\" type=\"STRING\" size=\"256\"/><Column id=\"G\" type=\"STRING\" size=\"256\"/><Column id=\"H\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row><Col id=\"B\">11</Col><Col id=\"C\">22</Col><Col id=\"D\">33</Col></Row><Row><Col id=\"B\">14.2</Col><Col id=\"C\">15.2</Col><Col id=\"D\">16.2</Col></Row><Row><Col id=\"B\">500</Col><Col id=\"C\">600</Col><Col id=\"D\">700</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_top", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"A\" type=\"STRING\" size=\"256\"/><Column id=\"B\" type=\"STRING\" size=\"256\"/><Column id=\"C\" type=\"STRING\" size=\"256\"/><Column id=\"D\" type=\"STRING\" size=\"256\"/><Column id=\"E\" type=\"STRING\" size=\"256\"/><Column id=\"F\" type=\"STRING\" size=\"256\"/><Column id=\"G\" type=\"STRING\" size=\"256\"/><Column id=\"H\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row><Col id=\"B\">1</Col><Col id=\"C\">2</Col><Col id=\"D\">3</Col></Row><Row><Col id=\"B\">4.2</Col><Col id=\"C\">5.2</Col><Col id=\"D\">6.2</Col></Row><Row><Col id=\"B\">100</Col><Col id=\"C\">200</Col><Col id=\"D\">300</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_top01", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"A\" type=\"STRING\" size=\"256\"/><Column id=\"B\" type=\"STRING\" size=\"256\"/><Column id=\"C\" type=\"STRING\" size=\"256\"/><Column id=\"D\" type=\"STRING\" size=\"256\"/><Column id=\"E\" type=\"STRING\" size=\"256\"/><Column id=\"F\" type=\"STRING\" size=\"256\"/><Column id=\"G\" type=\"STRING\" size=\"256\"/><Column id=\"H\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row><Col id=\"B\">1</Col><Col id=\"C\">2</Col><Col id=\"D\">3</Col></Row><Row><Col id=\"B\">4.2</Col><Col id=\"C\">5.2</Col><Col id=\"D\">6.2</Col></Row><Row><Col id=\"B\">A</Col><Col id=\"C\">B</Col><Col id=\"D\">C</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_bottom","24","319","582","201",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_bottom");
            obj.set_autofittype("col");
            obj.set_autoenter("none");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"A\"/><Cell col=\"1\" text=\"B\"/><Cell col=\"2\" text=\"C\"/><Cell col=\"3\" text=\"D\"/><Cell col=\"4\" text=\"E\"/><Cell col=\"5\" text=\"F\"/><Cell col=\"6\" text=\"G\"/><Cell col=\"7\" text=\"H\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:A\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:B\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:C\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:D\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:E\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:F\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:G\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:H\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_top","24","55","584","201",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_top");
            obj.set_selecttype("area");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"A\"/><Cell col=\"1\" text=\"B\"/><Cell col=\"2\" text=\"C\"/><Cell col=\"3\" text=\"D\"/><Cell col=\"4\" text=\"E\"/><Cell col=\"5\" text=\"F\"/><Cell col=\"6\" text=\"G\"/><Cell col=\"7\" text=\"H\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:A\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:B\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:C\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:D\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:E\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:F\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:G\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:H\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_msg","96","387","480","42",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("◀ cell > <b v=\'true\'>selectbackground</b>: EXPR((currow%2)?\'#e8f587ff\':\'#fdd695ff\')");
            obj.set_visible("false");
            obj.set_usedecorate("true");
            obj.set_background("yellow");
            obj.set_border("3px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_onOff","24","272","62","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("on / off");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","633","14","556","232",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab00);
            obj.set_text("tabpage1");
            obj.set_url("Test::GridCopyAndPasteSub.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab00);
            obj.set_text("tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("Div00","633","318","556","199",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_url("Test::GridCopyAndPasteSub.xfdl");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","632","291","105","21",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div");
            obj.set_font("bold 11pt \"Verdana\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1210,888,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Test::GridCopyAndPasteSub.xfdl");
        };
        
        // User Script
        this.registerScript("GridCopyAndPaste.xfdl", function() {
        // include "Example::GridCopyAndPaste.xjs";


        this.GridCopyAndPaste_onload = function (obj, e)
        {
        	var copyPaste = new Link.CellDataCopy(this, true, true);

        	copyPaste.addGrid(this.grd_top);
        	copyPaste.addGrid(this.grd_bottom, this.copyCallback, this.pasteCallback);
        };






        this.copyCallback = function (obj, e, area)
        {
        	// 복사 후 "후처리" 필요시 사용!!!
        	trace("this.copyCallback >>> " + obj.name + " 복사완료.");
        	trace("startrow=" + area.startrow + ",startcol=" + area.startcol + ",endrow=" + area.endrow + ",endcol=" + area.endcol);
        };


        this.pasteCallback = function (obj, e, area)
        {
        	// 붙여넣기 후 "후처리" 필요시 사용!!!
        	trace("this.pasteCallback >>> " + obj.name + " 붙여넣기 완료");
        	trace("startrow=" + area.startrow + ",startcol=" + area.startcol + ",endrow=" + area.endrow + ",endcol=" + area.endcol);
        };

        // this.ds_top_oncolumnchanged = function(obj:Dataset, e:nexacro.DSColChangeEventInfo)
        // {
        // trace("\t\t ds_top_oncolumnchanged colidx=" + e.colidx + ", col=" + e.col + ", columnid=" + e.columnid + ", row="  + e.row);
        // }
        //
        // this.ds_top_onrowposchanged = function(obj:Dataset, e:nexacro.DSRowPosChangeEventInfo)
        // {
        // trace("\t\t ds_top_onrowposchanged oldrow=" + e.oldrow + ", newrow="  + e.newrow + ", reason=" + e.reason);
        // }


        this.ds_bottom_oncolumnchanged = function (obj, e)
        {
        	trace("\t\t ds_bottom_oncolumnchanged colidx=" + e.colidx + ", col=" + e.col + ", columnid=" + e.columnid + ", row=" + e.row);
        };

        this.ds_bottom_onrowposchanged = function (obj, e)
        {
        	trace("\t\t ds_bottom_onrowposchanged oldrow=" + e.oldrow + ", newrow=" + e.newrow + ", reason=" + e.reason);
        };





        this.btn_onOff_onclick = function (obj, e)
        {
        	if (this.st_msg.visible)
        	{
        		this.st_msg.set_visible(false);
        	}
        	else
        	{
        		this.st_msg.set_visible(true);
        	}
        }
        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GridCopyAndPaste_onload,this);
            this.btn_onOff.addEventHandler("onclick",this.btn_onOff_onclick,this);
            this.ds_bottom.addEventHandler("oncolumnchanged",this.ds_bottom_oncolumnchanged,this);
            this.ds_bottom.addEventHandler("onrowposchanged",this.ds_bottom_onrowposchanged,this);
        };
        this.loadIncludeScript("GridCopyAndPaste.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
