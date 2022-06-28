(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testSHA256");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edt_pwd","129","20","269","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","125","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("패스워드 (원문) : ");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","58","125","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("패스워드 (암호) : ");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pwd2","129","58","629","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","407","20","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("암호화");
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
        this.addIncludeScript("testSHA256.xfdl","lib::lib_SHA256.xjs");
        this.registerScript("testSHA256.xfdl", function() {
        this.executeIncludeScript("lib::lib_SHA256.xjs"); /*include "lib::lib_SHA256.xjs"*/
        this.Button00_onclick = function (obj, e)
        {
        	var encPwd = sha256_digest(this.edt_pwd.value);
        	this.edt_pwd2.set_value(encPwd);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("testSHA256.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
