(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00702_R03");
            this.set_titletext("월간식단표(점심,저녁)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new UbiReport("UbiViewer","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("UbiViewer");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,900,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAY00702_R03.xfdl", function() {
        /************************************************************************************
        * 뷰어 초기 설정
        ************************************************************************************/
        const rowIdx = nexacro.getApplication().gds_systemproperty.findRow("CODE", "UBIREPORT4URL");
        const reportUrl = nexacro.getApplication().gds_systemproperty.getColumn(rowIdx, "SET_VALUE");

        //const svcurl = reportUrl;
        const svcurl = "http://14.42.209.174:70/ubireport";

        // result디렉토리에 생성될 exportseq값
        this.UbiViewer.key = getRandomKey();
        // 리포트 통신을 담당할 URL
        this.UbiViewer.ubiserverurl = svcurl + "/UbiServer";
        // 리소스를 가져올 URL
        this.UbiViewer.resource = svcurl + "/ubi4/js";
        // 리포트 파일을 가져올 URL : 리포트 파일명을 제외한 디렉토리까지 정의
        this.UbiViewer.reporturl = svcurl + "/ubi4/work/nshjugan";
        // ubiservice.xml에 등록되어 있는 리소스 ID
        this.UbiViewer.resid = "nshjugan";
        // 뷰어 스케일(?)
        this.UbiViewer.scale = "140";
        //toolbar 안보이게
        //this.UbiViewer.toolbar = false;
        const form = this;


        /************************************************************************************
        * DB
        ************************************************************************************/

        /************************************************************************************
        * 저장 완료 후 콜백
        ************************************************************************************/
        this.UbiExportEnd = function(flag,fileName)
        {

        };

        /************************************************************************************
        * 리포트 로딩 완료 후 콜백
        ************************************************************************************/
        this.UbiPreviewEnd = function()
        {
        	//this.UbiViewer.setPrintMenu("PDF");
        	//this.UbiViewer.printPDF(this, "UbiPrintEnd");
        };

        /************************************************************************************
        * 인쇄 완료 후 콜백
        ************************************************************************************/
        this.UbiPrintEnd = function(flag)
        {
        	//form.close();
        };


        this.DAY00712_R01_onload = function(obj,e)
        {
        	// UbiReport Argument 세팅
        	const sicode = this.parent.pParam.sicode;
        	const date = this.parent.pParam.date;
        	const sign = this.parent.pParam.sign;
        	const caterer = this.parent.pParam.caterer;		// 식단제공처
        	const origin1 = this.parent.pParam.origin1;		// 원산지안내1
        	const origin2 = this.parent.pParam.origin2;		// 원산지안내2

        	this.UbiViewer.setArgument("P_SICODE", sicode);
        	this.UbiViewer.setArgument("P_DATE", date);
        	this.UbiViewer.setArgument("P_SIGN", sign);
        	this.UbiViewer.setArgument("P_CATERER", caterer);
        	this.UbiViewer.setArgument("P_ORIGIN1", origin1);
        	this.UbiViewer.setArgument("P_ORIGIN2", origin2);

        	// 리포트 파일명
            this.UbiViewer.jrffile = "DAY00702_R03.jrf";
        	// 설정된 값을 이용하여 UbiReport 출력
        	this.UbiViewer.retrieve(this, "UbiPreviewEnd");
        	this.UbiViewer.addEventHandler('ExportEnd',this.UbiExportEnd, this);
        	this.UbiViewer.addEventHandler("PrintEnd", this.UbiPrintEnd, this);
        };

        /************************************************************************************
        * 랜덤 Key 생성 함수(유틸)
        ************************************************************************************/
        function getRandomKey()
        {
        	var key = "";
        	var nowdate = new Date();
        	var year  = nowdate.getFullYear();
        	var month = nowdate.getMonth() + 1;
        	var day   = nowdate.getDate();
        	var hour  = nowdate.getHours();
        	var min   = nowdate.getMinutes();
        	var sec   = nowdate.getSeconds();
        	var milsec = nowdate.getMilliseconds();

        	if (("" + month).length == 1) { month = "0" + month; }
        	if (("" + day).length   == 1) { day   = "0" + day;   }
        	if (("" + hour).length  == 1) { hour  = "0" + hour;  }
        	if (("" + min).length   == 1) { min   = "0" + min;   }
        	if (("" + sec).length   == 1) { sec   = "0" + sec;   }

        	key = ('' + year + month + day + hour + min + sec + milsec) + '_' + ((Math.random() * (1 << 30)).toString(16).replace('.', ''));

        	return key;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DAY00712_R01_onload,this);
        };
        this.loadIncludeScript("DAY00702_R03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
