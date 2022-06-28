(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testCommCode");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_commCode00", this);
            obj._setContents("<ColumnInfo><Column id=\"MAIN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNM\" type=\"STRING\" size=\"256\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/><Column id=\"STR4\" type=\"STRING\" size=\"256\"/><Column id=\"STR5\" type=\"STRING\" size=\"256\"/><Column id=\"NUM1\" type=\"STRING\" size=\"256\"/><Column id=\"NUM2\" type=\"STRING\" size=\"256\"/><Column id=\"NUM3\" type=\"STRING\" size=\"256\"/><Column id=\"NUM4\" type=\"STRING\" size=\"256\"/><Column id=\"NUM5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MAIN_CD\">01</Col><Col id=\"SUBCD\">01</Col><Col id=\"SUBNM\">공통코드_01_01</Col><Col id=\"USEYN\">1</Col></Row><Row><Col id=\"MAIN_CD\">01</Col><Col id=\"SUBCD\">02</Col><Col id=\"SUBNM\">공통코드_01_02</Col><Col id=\"USEYN\">1</Col><Col id=\"STR1\"/><Col id=\"STR2\"/><Col id=\"STR3\"/><Col id=\"STR4\"/><Col id=\"STR5\"/><Col id=\"NUM1\"/><Col id=\"NUM2\"/><Col id=\"NUM3\"/><Col id=\"NUM4\"/><Col id=\"NUM5\"/></Row><Row><Col id=\"MAIN_CD\">01</Col><Col id=\"SUBCD\">03</Col><Col id=\"SUBNM\">공통코드_01_03</Col><Col id=\"USEYN\">1</Col><Col id=\"STR1\"/><Col id=\"STR2\"/><Col id=\"STR3\"/><Col id=\"STR4\"/><Col id=\"STR5\"/><Col id=\"NUM1\"/><Col id=\"NUM2\"/><Col id=\"NUM3\"/><Col id=\"NUM4\"/><Col id=\"NUM5\"/></Row><Row><Col id=\"MAIN_CD\">01</Col><Col id=\"SUBCD\">04</Col><Col id=\"SUBNM\">공통코드_01_04</Col><Col id=\"USEYN\">1</Col><Col id=\"STR1\"/><Col id=\"STR2\"/><Col id=\"STR3\"/><Col id=\"STR4\"/><Col id=\"STR5\"/><Col id=\"NUM1\"/><Col id=\"NUM2\"/><Col id=\"NUM3\"/><Col id=\"NUM4\"/><Col id=\"NUM5\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_commCode01", this);
            obj._setContents("<ColumnInfo><Column id=\"MAIN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNM\" type=\"STRING\" size=\"256\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/><Column id=\"STR4\" type=\"STRING\" size=\"256\"/><Column id=\"STR5\" type=\"STRING\" size=\"256\"/><Column id=\"NUM1\" type=\"STRING\" size=\"256\"/><Column id=\"NUM2\" type=\"STRING\" size=\"256\"/><Column id=\"NUM3\" type=\"STRING\" size=\"256\"/><Column id=\"NUM4\" type=\"STRING\" size=\"256\"/><Column id=\"NUM5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_commCode02", this);
            obj._setContents("<ColumnInfo><Column id=\"MAIN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNM\" type=\"STRING\" size=\"256\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/><Column id=\"STR4\" type=\"STRING\" size=\"256\"/><Column id=\"STR5\" type=\"STRING\" size=\"256\"/><Column id=\"NUM1\" type=\"STRING\" size=\"256\"/><Column id=\"NUM2\" type=\"STRING\" size=\"256\"/><Column id=\"NUM3\" type=\"STRING\" size=\"256\"/><Column id=\"NUM4\" type=\"STRING\" size=\"256\"/><Column id=\"NUM5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("Combo00","32","16","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_commCode00");
            obj.set_codecolumn("SUBCD");
            obj.set_datacolumn("SUBNM");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","32","56","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_commCode01");
            obj.set_codecolumn("SUBCD");
            obj.set_datacolumn("SUBNM");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","32","96","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_commCode02");
            obj.set_codecolumn("SUBCD");
            obj.set_datacolumn("SUBNM");
            obj.set_text("Combo02");
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
        this.loadIncludeScript("testCommCode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
