(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_RDView_Comm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","38","29","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("HTML5");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","38","60","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Runtime");
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
        this.addIncludeScript("Sample_RDView_Comm.xfdl","Lib::CommLib.xjs");
        this.registerScript("Sample_RDView_Comm.xfdl", function() {
        this.executeIncludeScript("Lib::CommLib.xjs"); /*include "Lib::CommLib.xjs"*/

        this.Button00_onclick = function (obj, e)
        {
        	this.gfn_SetRDView("HTML5", "/bs/cf/cm/emdv3_sample.mrd", "/rsn [sis_oracle] /rp [param1][param2] /rv param1[AAA]param2[B]");
        };

        this.Button01_onclick = function (obj, e)
        {
        	this.gfn_SetRDView("Runtime", "/bs/cf/cm/emdv3_sample.mrd", "/rsn [sis_oracle] /rp [test][test1] /rv param1[test]param2[test1]");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("Sample_RDView_Comm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
