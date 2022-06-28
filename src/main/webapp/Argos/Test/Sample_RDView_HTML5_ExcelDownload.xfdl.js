(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_RD_HTML5");
            this.set_titletext("RD Html ExcelDownload");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","24","134","84","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("엑셀출력");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","1035","2",null,null,"-95","745",null,null,null,null,this);
            obj.getSetter("taborder").set("1");
            obj.getSetter("onloadcompleted").set("WebBrowser00_onloadcompleted");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","34","17","874","37",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Report Excel download Sample for HTML5");
            obj.set_textAlign("center");
            obj.set_font("bold 18pt \"arial\"");
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
        this.registerScript("Sample_RDView_HTML5_ExcelDownload.xfdl", function() {
        this.bIsLoaded = false; //페이지 오픈 여부

        this.WebBrowser00_onloadcompleted = function (obj, e)
        {
        	var objWeb = this.WebBrowser00;
        	// 샘플
        	objWeb.callMethod("mrdPath", nexacro.getApplication().gv_RdMrd + "/bs/cf/cm/emdv3_sample.mrd");
        	objWeb.callMethod("mrdparam", "/rfn [" + nexacro.getApplication().gv_RdSvc + "] /rsn [sis_oracle] /rp [test][test1] /rv param1[test]param2[test1] /rwait");
        	this.bIsLoaded = true;
        };


        this.Button00_onclick = function (obj, e)
        {
        	var objWeb = this.WebBrowser00;

        	objWeb.set_url(nexacro.getApplication().gv_RdExDw); //html 파일 내부에 하위 함수들이 정의되어 있음.
        }


        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("Sample_RDView_HTML5_ExcelDownload.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
