(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testReport");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_report","164","109","145","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Report");
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
        this.registerScript("testReport.xfdl", function() {

        this.btn_report_onclick = function (obj, e)
        {
        	Sct.report(this, "test.mrd", "param=[1]", 1024, 768);
        }//
        	// this.fn_report = function (obj, mrdName, mrdParam, w, h)
        	// {
        	// if(Sct.Util.isEmpty(w)) w = 1024;
        	// if(Sct.Util.isEmpty(h)) h = 768;
        	//
        	// var param = {
        	// pForm : this,
        	// mrdName : mrdName,
        	// mrdParam : mrdParam
        	// };
        	//
        	// Sct.popup(this, "popupReport", w, h, "Report", param, "Common::commReportPopup.xfdl", "", false);
        	// }
        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_report.addEventHandler("onclick",this.btn_report_onclick,this);
        };
        this.loadIncludeScript("testReport.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
