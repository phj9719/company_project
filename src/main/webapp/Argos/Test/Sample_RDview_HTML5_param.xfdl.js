(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_RDview_HTML_param");
            this.set_titletext("RD 파라메터 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","178","17","614","37",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Report View Sample for HTML5");
            obj.set_textAlign("center");
            obj.set_font("bold 18pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","10","64",null,null,"104","10",null,null,null,null,this);
            obj.getSetter("taborder").set("1");
            obj.getSetter("onloadcompleted").set("Sample_RDview_HTML5_onload");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","779","30","105","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("리포트 보기");
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
        this.registerScript("Sample_RDview_HTML5_param.xfdl", function() {

        this.bIsLoaded = false; //페이지 오픈 여부

        this.Sample_RDview_HTML5_onload = function (obj, e)
        {
        	var objWeb = this.WebBrowser00;

        	if (this.bIsLoaded)
        	{
        		objWeb.callMethod("mrdPath", nexacro.getApplication().gv_RdMrd + "/bs/cf/cm/emdv3_param_sample.mrd");
        		objWeb.callMethod("mrdparam", "/rfn [" + nexacro.getApplication().gv_RdSvc + "] /rsn [sis_oracle] /rp [param1][param2] /rv param1[AAA]param2[B]");
        		return;
        	}
        };


        this.Button00_onclick = function (obj, e)
        {
        	var objWeb = this.WebBrowser00;
        	// 샘플
        	objWeb.set_url(nexacro.getApplication().gv_RdViwer);
        	this.bIsLoaded = true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Sample_RDview_HTML5_param.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
