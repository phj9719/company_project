(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_RD_Runtime_Etc");
            this.set_titletext("RD Runtime ExcelDownload");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Print", this);
            obj._setContents("<ColumnInfo><Column id=\"printNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Plugin("pln_CxViewer","1030","0",null,null,"-90","747",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_classid("{04931AA4-5D13-442f-AEE8-0F1184002BDD}");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"10","84","21","590",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("출력");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","70","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("프린트 정보");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","80","9","250","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_Print");
            obj.set_codecolumn("printNm");
            obj.set_datacolumn("printNm");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","10","80","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀출력");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","10","120","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("바로프린트");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","178","1000","203",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("프린트 리스트는 Runtime에서만 가능하며 nexacro에서 제공하는 ExtCommonV13.dll을 사용합니다.\r\n\r\ndll은 차후에 배포될 때 같이 배포가 되도록 설정되어 있으나 개발자 자리에서 테스트 하려면\r\n\r\nC:\\app_luna\\workspaces\\lotte\\EMDV3\\src\\main\\webapp\\install\\Download 폴더에 있는 ExtCommonV13.dll 파일을\r\n\r\n복사하여 C:\\Users\\사용자ID\\AppData\\LocalLow\\nexacro\\14\\Component 폴더에 붙혀넣는다.\r\n\r\n\r\n* 프린트 리스트 버튼을 클릭하면 Combo에 리스트가 나온다.");
            obj.set_color("red");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            obj.set_font("bold 12pt \"Dotum\"");
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
        this.registerScript("Sample_RDView_Runtime_DirectPrint.xfdl", function() {
        this.form_onload = function (obj, e)
        {
        	// 필수
        	// RD 설치확인 후 Cab파일 설치
        	this.pln_CxViewer.set_codebase(nexacro.getApplication().gv_RdCodebase);
        	this.pln_CxViewer.install();

        	// 프린트 리스트
        	this.fn_GetPrintList();
        };

        // 프린트리스트
        this.fn_GetPrintList = function ()
        {
        	// 필수
        	var Extension = {
        	};
        	// alert( " path = " + system.convertRealPath("%Component%") );
        	var sExtPath = system.convertRealPath("%Component%") + "/ExtCommonV13.dll";
        	nexacro._addExtensionModule(Extension, sExtPath);

        	// 프린트리스트
        	var arrPrintList = Extension._ext_getPrintList();
        	var nRow;

        	for (var i = 0; i < arrPrintList.length; i++)
        	{
        		nRow = this.ds_Print.addRow();
        		this.ds_Print.setColumn(nRow, "printNm", arrPrintList[i]);
        	}

        	this.Combo00.set_index(0);
        };





        // 프린트 선택 후 출력
        this.Button00_onclick = function (obj, e)
        {
        	// 라이센스
        	this.pln_CxViewer.callMethod("ApplyLicense", nexacro.getApplication().gv_RdSvc);

        	// 샘플
        	this.pln_CxViewer.callMethod("Fileopen", nexacro.getApplication().gv_RdMrd + "/bs/cf/cm/emdv3_sample.mrd", "");

        	// 프린터 드라이버 이름: HP LaserJet 8150 PCL 6, 인쇄매수:2, 한부씩인쇄:1, 인쇄시 뜨는 대화상자 모두 숨김: 4
        	this.pln_CxViewer.callMethod("SetPrintInfo", this.Combo00.value, 2, 1, 4);
        	// 직접 출력
        	this.pln_CxViewer.callMethod("CMPrint"); //인쇄 시작
        };




        // Excel로 저장
        this.Button01_onclick = function (obj, e)
        {
        	// 라이센스
        	this.pln_CxViewer.callMethod("ApplyLicense", nexacro.getApplication().gv_RdSvc);

        	// 샘플
        	this.pln_CxViewer.callMethod("Fileopen", nexacro.getApplication().gv_RdMrd + "/bs/cf/cm/emdv3_sample.mrd", "");

        	this.pln_CxViewer.callMethod("SaveAsXlsFile", "C:\\a.xls"); //this.pln_CxViewer.callMethod("CMPrint"); //인쇄 시작
        };




        // 바로 프린트
        this.Button02_onclick = function (obj, e)
        {
        	// 라이센스
        	this.pln_CxViewer.callMethod("ApplyLicense", nexacro.getApplication().gv_RdSvc);

        	// 샘플
        	this.pln_CxViewer.callMethod("Fileopen", nexacro.getApplication().gv_RdMrd + "/bs/cf/cm/emdv3_sample.mrd", "");

        	// 프린터 드라이버 이름: iR-ADV 4045, 인쇄매수:2, 한부씩인쇄:1, 인쇄시 뜨는 대화상자 모두 숨김: 4
        	this.pln_CxViewer.callMethod("SetPrintInfo", "iR-ADV 4045", "1", "1", "4");

        	this.pln_CxViewer.callMethod("CMPrint"); //인쇄 시작
        };

        this.pln_CxViewer_PrintFinished = function ()
        {
        	// HTML인 경우
        	// <SCRIPT LANGUAGE=JavaScript FOR=Cxviewer EVENT="PrintFinished()">
        	// <!--
        	// alert("PrintFinished");
        	// -->
        	// </SCRIPT>
        	// Properties에서 pln_CxViewer를 선택하고 "PrintFinished" "이벤트에 등록합니다.
        	alert("End print ! ");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("Sample_RDView_Runtime_DirectPrint.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
