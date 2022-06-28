(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testMultiLang");
            this.set_titletext("Multi Language");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","200","0","5",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","408","0","5",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","616","0","5",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","11","10","184","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Full Text");
            obj.set_color("darkmagenta");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","219","10","184","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Short Text");
            obj.set_color("darkmagenta");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","427","10","184","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Full Text 1");
            obj.set_color("darkmagenta");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","635","10","184","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Short Text 1");
            obj.set_color("darkmagenta");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","35",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","10","48","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Static :");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name","80","48","113","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","10","78","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Button :");
            this.addChild(obj.name, obj);

            obj = new Button("btn_name","80","78","113","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","10","118","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Calendar :");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","80","118","113","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd ddd");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","10","168","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Tab :");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_sample","11","198","179","142",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_border("1px solid rgba(0,148,135,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.tab_sample);
            obj.set_text("코드");
            this.tab_sample.addChild(obj.name, obj);

            obj = new Static("sta_code","20","32","139","41",null,null,null,null,null,null,this.tab_sample.tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("코드");
            this.tab_sample.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.tab_sample);
            obj.set_text("이름");
            this.tab_sample.addChild(obj.name, obj);

            obj = new Static("sta_name","26","35","121","43",null,null,null,null,null,null,this.tab_sample.tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("이름");
            this.tab_sample.tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12","10","368","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Grid :");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","12","400","178","126",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"이름\"/></Band><Band id=\"body\"><Cell text=\"bind:CD\"/><Cell col=\"1\" text=\"bind:NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","218","48","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Static :");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name00","288","48","113","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Button("btn_name00","288","78","113","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","218","78","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Button :");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","218","118","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Calendar :");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","288","118","113","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd ddd");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","218","168","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Tab :");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_sample00","219","198","179","142",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_border("1px solid rgba(0,148,135,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.tab_sample00);
            obj.set_text("코드");
            this.tab_sample00.addChild(obj.name, obj);

            obj = new Static("sta_code","20","32","139","41",null,null,null,null,null,null,this.tab_sample00.tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("코드");
            this.tab_sample00.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.tab_sample00);
            obj.set_text("이름");
            this.tab_sample00.addChild(obj.name, obj);

            obj = new Static("sta_name","26","35","121","43",null,null,null,null,null,null,this.tab_sample00.tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("이름");
            this.tab_sample00.tabpage2.addChild(obj.name, obj);

            obj = new Static("Static17","218","368","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Grid :");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","220","400","178","126",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"이름\"/></Band><Band id=\"body\"><Cell text=\"bind:CD\"/><Cell col=\"1\" text=\"bind:NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","426","48","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Static :");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name01","496","48","113","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Button("btn_name01","496","78","113","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","426","78","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Button :");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","426","118","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Calendar :");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","496","118","113","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","426","168","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Tab :");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_sample01","427","198","179","142",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_border("1px solid rgba(0,148,135,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.tab_sample01);
            obj.set_text("코드");
            this.tab_sample01.addChild(obj.name, obj);

            obj = new Static("sta_code","20","32","139","41",null,null,null,null,null,null,this.tab_sample01.tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("코드");
            this.tab_sample01.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.tab_sample01);
            obj.set_text("이름");
            this.tab_sample01.addChild(obj.name, obj);

            obj = new Static("sta_name","26","35","121","43",null,null,null,null,null,null,this.tab_sample01.tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("이름");
            this.tab_sample01.tabpage2.addChild(obj.name, obj);

            obj = new Static("Static22","426","368","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Grid :");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","428","400","178","126",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"이름\"/></Band><Band id=\"body\"><Cell text=\"bind:CD\"/><Cell col=\"1\" text=\"bind:NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","634","48","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Static :");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name02","704","48","113","22",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Button("btn_name02","704","78","113","28",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","634","78","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("Button :");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","634","118","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("Calendar :");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar03","704","118","113","28",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","634","168","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("Tab :");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_sample02","635","198","179","142",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_border("1px solid rgba(0,148,135,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.tab_sample02);
            obj.set_text("코드");
            this.tab_sample02.addChild(obj.name, obj);

            obj = new Static("sta_code","20","32","139","41",null,null,null,null,null,null,this.tab_sample02.tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("코드");
            this.tab_sample02.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.tab_sample02);
            obj.set_text("이름");
            this.tab_sample02.addChild(obj.name, obj);

            obj = new Static("sta_name","26","35","121","43",null,null,null,null,null,null,this.tab_sample02.tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("이름");
            this.tab_sample02.tabpage2.addChild(obj.name, obj);

            obj = new Static("Static27","634","368","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("Grid :");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","636","400","178","126",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"이름\"/></Band><Band id=\"body\"><Cell text=\"bind:CD\"/><Cell col=\"1\" text=\"bind:NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("testMultiLang.xfdl", function() {
        this.testMultiLang_onload = function (obj, e)
        {
        	// 이 부분은 공통 프레임워크 쪽에서 처리됩니다.
        	// 화면에서 코딩할 필요는 없습니다.
        	// ==================================================
        	trace(nexacro.getApplication().gds_multiDic.saveXML());
        	nexacro.getApplication().gv_langType = "en_US";
        	Sct.Domain.setMultiLangTitle(this);
        	// ==================================================
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.testMultiLang_onload,this);
        };
        this.loadIncludeScript("testMultiLang.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
