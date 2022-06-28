(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_RD_Runtime");
            this.set_titletext("RD Runtime 실행");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Plugin("pln_CxViewer","10","71",null,null,"104","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_classid("{04931AA4-5D13-442f-AEE8-0F1184002BDD}");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","178","17","633","37",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Report View Sample for Runtime");
            obj.set_textAlign("center");
            obj.set_font("bold 18pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","779","30","105","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
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
        this.registerScript("Sample_RDView_Runtime.xfdl", function() {

        this.form_onload = function (obj, e)
        {
        	// 필수
        	// RD 설치확인 후 Cab파일 설치
        	this.pln_CxViewer.set_codebase(nexacro.getApplication().gv_RdCodebase);
        	this.pln_CxViewer.install();
        };


        this.Button00_onclick = function (obj, e)
        {
        	// 라이센스
        	this.pln_CxViewer.callMethod("ApplyLicense", nexacro.getApplication().gv_RdSvc);

        	// 보고서 미리보기.
        	this.pln_CxViewer.callMethod("Fileopen", nexacro.getApplication().gv_RdMrd + "/bs/cf/cm/emdv3_sample.mrd", "/rfn [" + nexacro.getApplication().gv_RdSvc + "] /rsn [sis_oracle] /rp [test][test1] /rv param1[test]param2[test1]");

        	// 직접 출력
        	// this.pln_CxViewer.callMethod ("CMPrint");
        }
        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Sample_RDView_Runtime.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
