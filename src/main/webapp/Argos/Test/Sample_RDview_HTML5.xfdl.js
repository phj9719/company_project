(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_RDview_HTML5");
            this.set_titletext("RD Html5 보기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00","10","64",null,null,"104","10",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("onloadcompleted").set("WebBrowser00_onloadcompleted");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","178","17","614","37",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Report View Sample for HTML5");
            obj.set_textAlign("center");
            obj.set_font("bold 18pt \"arial\"");
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
        this.registerScript("Sample_RDview_HTML5.xfdl", function() {
        this.bIsLoaded = false; //페이지 오픈 여부

        this.Sample_RDview_HTML5_onload = function (obj, e)
        {
        	var objWeb = this.WebBrowser00;

        	if (this.bIsLoaded)
        	{
        		alert(nexacro.getApplication().gv_RdMrd);
        		objWeb.callMethod("mrdPath", nexacro.getApplication().gv_RdMrd + "/bs/cf/cm/emdv3_sample.mrd");
        		objWeb.callMethod("mrdparam", "/rfn [" + nexacro.getApplication().gv_RdSvc + "] /rsn [sis_oracle] /rp [param1][param2] /rv param1[AAA]param2[B]");
        		return;
        	}

        	objWeb.set_url(nexacro.getApplication().gv_RdViwer);
        };


        this.Button00_onclick = function (obj, e)
        {
        	var objWeb = this.WebBrowser00;
        	// 샘플
        	objWeb.set_url(nexacro.getApplication().gv_RdViwer); //html 파일 내부에 하위 함수들이 정의되어 있음.
        	this.bIsLoaded = true;
        };

        this.WebBrowser00_onloadcompleted = function (obj, e)
        {
        	if (!this.bIsLoaded)
        	{
        		obj.callMethod("mrdPath", nexacro.getApplication().gv_RdMrd + "/bs/cf/cm/emdv3_sample.mrd");
        		obj.callMethod("mrdparam", "/rfn [" + nexacro.getApplication().gv_RdSvc + "] /rsn [sis_oracle] /rp [param1][param2] /rv param1[AAA]param2[B]");
        		this.bIsLoaded = true;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Sample_RDview_HTML5_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Sample_RDview_HTML5.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
