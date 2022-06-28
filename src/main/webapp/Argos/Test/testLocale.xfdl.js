(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testLocale");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_locale_set", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMCD\">ko_KR</Col><Col id=\"CMNM\">ko_KR</Col></Row><Row><Col id=\"CMCD\">en_GB</Col><Col id=\"CMNM\">en_GB</Col></Row><Row><Col id=\"CMCD\">en_US</Col><Col id=\"CMNM\">en_US</Col></Row><Row><Col id=\"CMCD\">fr_FR</Col><Col id=\"CMNM\">fr_FR</Col></Row><Row><Col id=\"CMCD\">de_DE</Col><Col id=\"CMNM\">de_DE</Col></Row><Row><Col id=\"CMCD\">ja_JP</Col><Col id=\"CMNM\">ja_JP</Col></Row><Row><Col id=\"CMCD\">zh_CN</Col><Col id=\"CMNM\">zh_CN</Col></Row><Row><Col id=\"CMCD\">ml_IN</Col><Col id=\"CMNM\">ml_IN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MONEY\" type=\"STRING\" size=\"256\"/><Column id=\"NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATE\">20170516</Col><Col id=\"MONEY\">1000000</Col><Col id=\"NUMBER\">1000000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("Calendar00","64","77","109","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_locale("de_AT");
            obj.set_value("20170516");
            obj.set_dateformat("SHORTDATE");
            obj.set_editformat("SHORTDATE");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","23","77","41","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("날짜 : ");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","199","77","41","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("금액 : ");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","240","77","170","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_locale("ko_KR");
            obj.set_value("1000000");
            obj.getSetter("mask").set("#,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","431","77","41","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("숫자 : ");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","472","77","170","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_locale("ko_KR");
            obj.set_value("1000000");
            obj.getSetter("mask").set("#,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","22","12","81","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("로케일 선택");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_locale_set","101","14","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_locale_set");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            obj.set_text("ko_KR");
            obj.set_value("ko_KR");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","22","140","620","292",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DATE\"/><Cell col=\"1\" text=\"MONEY\"/><Cell col=\"2\" text=\"NUMBER\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"date\" text=\"bind:DATE\" mask=\"SHORTDATE\" locale=\"ko_KR\"/><Cell col=\"1\" displaytype=\"currency\" edittype=\"normal\" editfilter=\"number\" text=\"bind:MONEY\" locale=\"ko_KR\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" text=\"bind:NUMBER\" locale=\"ko_KR\"/></Band></Format></Formats>");
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
        this.registerScript("testLocale.xfdl", function() {

        this.testLocale_onload = function (obj, e)
        {
        	Sct.onLoad(obj, e);
        };

        this.cmb_locale_onitemchanged = function (obj, e)
        {
        	nexacro.getApplication().gv_locale = e.postvalue;
        	// application.set_locale(e.postvalue);
        	// this.reload();
        	Sct._initComponent(this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.testLocale_onload,this);
            this.cmb_locale_set.addEventHandler("onitemchanged",this.cmb_locale_onitemchanged,this);
        };
        this.loadIncludeScript("testLocale.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
