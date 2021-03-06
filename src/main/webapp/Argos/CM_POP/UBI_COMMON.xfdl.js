(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("UbiReport");
            this.set_titletext("UbiReport");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new UbiReport("UbiViewer","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("UbiViewer");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("UBI_COMMON.xfdl", function() {
        /************************************************************************************
        * 뷰어 초기 설정
          : 뷰어 초기 설정은 함수 안에 포함되지 않고 전역으로 설정되어야 합니다.
        ************************************************************************************/
        const svcurl = "http://14.42.209.174:70/ubireport";

        /* html뷰어, nexacro browser 공통으로 설정해야 하는 변수  */
        // result디렉토리에 생성될 exportseq값
        this.UbiViewer.key = getRandomKey();
        // 리포트 통신을 담당할 URL
        this.UbiViewer.ubiserverurl = svcurl + "/UbiServer";
        // 리소스를 가져올 URL
        this.UbiViewer.resource = svcurl + "/ubi4/js";
        // 뷰어 스케일(?)
        this.UbiViewer.scale = "140";	//WholePage(쪽맞춤)/PageWidth(폭맞춤)/60~300
        //toolbar 안보이게
        //this.UbiViewer.toolbar = false;

        /* html 뷰어 사용시 설정해야 하는 변수 */
        // ubiservice.xml에 등록되어 있는 리소스 ID
        this.UbiViewer.resid = "nshjugan";

        /* nexacro browser 사용시 설정해야 하는 변수 */
        // 리포트 파일을 가져올 URL : 리포트 파일명을 제외한 디렉토리까지 정의
        this.UbiViewer.reporturl = svcurl + "/ubi4/work/nshjugan";
        //this.UbiViewer.fileurl = svcurl  + "/ubi4/resource";
        //this.UbiViewer.datasource = "Tutorial";


        // CommonUbiReport.xfdl 에서 넘어온 변수 설정
        var ubiDataType;
        var ubiReportFile;
        var ubiLocalDs;
        var ubiGridObj;
        var ubiArg;
        var ubiIsMul;
        var ubiMulCount;
        var ubiIsPdf;
        /************************************************************************************
        * 사용 가능한 이벤트
        this.UbiViewer.addEventHandler('PrintEnd', this.UbiPrintEnd, this);					// 인쇄 완료 후 실행되는 이벤트
        this.UbiViewer.addEventHandler('ExportEnd', this.UbiExportEnd, this);				// 저장 완료 후 실행되는 이벤트
        this.UbiViewer.addEventHandler('PrintClicked', this.UbiPrintClicked, this);			// 인쇄 버튼 클릭 후 실행되는 이벤트
        this.UbiViewer.addEventHandler('ExportClicked', this.UbiExportClicked, this);		// 저장 버튼 클릭 후 실행되는 이벤트

        * 자주 사용하는 API (자세한 내용은 UbiViewer4.0HTML.chm 참고)
        this.UbiViewer.setArgument(arg_name,arg_value);		// argument 설정
        this.UbiViewer.setVisibleToolbar(id,flag);			// 틀바 버튼 제거
        this.UbiViewer.print();								// direct Print (exe 방식)
        this.UbiViewer.printPDF(); 							// PDF Print
        thie.UbiViewer.excelSkipMasterItem = true; 			// excel-base type으로 저장 시, 마스터 페이지에 그려진 아이템 무시
        this.UbiViewer.excelOrgItemType = true; 			// excel 저장 시, 숫자 형태의 데이터를 문자형으로 저장
        ************************************************************************************/

        this.UbiReport_onload = function(obj, e)
        {

        }

        this.ubiPreview = function()
        {
        	if( this.parent instanceof Div )
        	{
        		trace("aa");
        		ubiDataType = this.parent.parent.ubiDataType;
        		ubiReportFile = this.parent.parent.ubiReportFile;
        		ubiLocalDs = this.parent.parent.ubiLocalDs;
        		ubiGridObj = this.parent.parent.ubiGridObj;
        		ubiArg = this.parent.parent.ubiArg;
        		ubiIsMul = this.parent.parent.ubiIsMul;
        		ubiMulCount = this.parent.parent.ubiMulCount;
        		ubiIsPdf = this.parent.parent.ubiIsPdf;
        	}
        	else
        	{
        		trace("bb");
        		ubiDataType = this.parent.ubiDataType;
        		ubiReportFile = this.parent.ubiReportFile;
        		ubiLocalDs = this.parent.ubiLocalDs;
        		ubiGridObj = this.parent.ubiGridObj;
        		ubiArg = this.parent.ubiArg;
        		ubiIsMul = this.parent.ubiIsMul;
        		ubiMulCount = this.parent.ubiMulCount;
        		ubiIsPdf = this.parent.ubiIsPdf;
        	}

        	// 리포트가 정의되지 않았을 경우 리턴
        	if( ubiReportFile == undefined )
        	{
        		//alert("리포트 파일명이 정의되지 않았습니다.");
        		return;
        	}

        	// 데이타 유형 ( 0:SQL, 1:Nexacro 데이터셋, 2:화면 내 Grid(자동리포트))
        	// 데이터 유형이 정의되지 않은 경우 0:SQL로 세팅
        	if (ubiDataType == undefined || ubiDataType == null)
        		ubiDataType = 0;

        	// Nexacro 데이터셋 정보가 정의되지 않은경우 null로 세팅
        	if (ubiLocalDs == undefined)
        		ubiLocalDs = null;

        	// 자동 리포트에서 사용하는 그리드 객체가 정의되지 않은경우 null로 세팅
        	if (ubiGridObj == undefined)
        		ubiGridObj = null;

        	// 멀티리포트 여부가 true 이면 멀티리포트로 사용
        	if (ubiIsMul)
        		this.UbiViewer.ismultireport = "true";
        	else
        		this.UbiViewer.ismultireport = "false";

        	// 멀티리포트의 반복횟수 설정
        	if (ubiMulCount != undefined && ubiMulCount != null)
        		this.UbiViewer.multicount = ubiMulCount;

        	// pdf 프린트를 바로 띄울지 여부 기본 true
        	if (ubiIsPdf == undefined)
        		ubiIsPdf = true;

        	trace("ubiDataType : " + ubiDataType);
        	trace("ubiReportFile : " + ubiReportFile);
        	trace("ubiLocalDs : " + ubiLocalDs);
        	trace("ubiGridObj : " + ubiGridObj);
        	trace("ubiArg : " + ubiArg);
        	trace("ubiIsMul : " + ubiIsMul);
        	trace("ubiMulCount : " + ubiMulCount);
        	trace("ubiIsPdf : " + ubiIsPdf);

        	// ---------------------------------------
        	// 리포트 파라미터 설정
        	// ---------------------------------------
        	this.UbiViewer.jrffile = ubiReportFile; 	// 리포트 파일 명
        	this.UbiViewer.arg = ubiArg;				// 아규먼트 설정

        	this.UbiViewer.runtimedata = "";

        	if( ubiDataType == 2 )	 //nexacro 그리드 사용
        	{
        		this.runtimeGrid(ubiGridObj);
        	}
        	else
        	{
        		if( ubiLocalDs != null )	 //nexacro Dataset 사용
        		{
        			for( var i = 0; i < ubiLocalDs.length; i++)
        			{
        				var data = ubiLocalDs[i];
        				this.UbiViewer.setDataset(data[0], data[1]);
        			}
        		}
        	}

        	this.UbiViewer.retrieve(this, "UbiPreviewEnd");
        };

        /************************************************************************************
        * 미리보기 완료 후 이벤트 처리
        ************************************************************************************/
        this.UbiPreviewEnd = function()
        {
        // 	this.UbiViewer.setVisibleToolbar("SAVE_ODT",false);
        // 	this.UbiViewer.setVisibleToolbar("SAVE_ODS",false);
        // 	this.UbiViewer.setVisibleToolbar("SAVE_ODP",false);

        	if (ubiIsPdf)
        		this.UbiViewer.printPDF(this, "UbiPrintEnd");
        }


        /************************************************************************************
        * 인쇄 완료 후 콜백
        ************************************************************************************/
        this.UbiPrintEnd = function(flag)
        {
        	// Runtime [0:성공, 1:실패, -999:취소]
        	if (nexacro.Browser == 'Runtime')
        	{
        		var status = this.UbiViewer.getPrintStatus();
        		//console.log('[Runtime] ' + status);
        	}
        	// HTML [true:성공, false:실패]
        	else
        	{
        		//console.log('[HTML] ' + flag);
        	}
        }

        /************************************************************************************
        * 저장 완료 후 콜백
        ************************************************************************************/
        this.UbiExportEnd = function(flag, fileName)
        {
        	// fileName : 저장된 파일명 반환
        	// Runtime [0:성공, 1:실패, -999:취소]
        	// HTML [true:성공, false:실패]


        }

        /************************************************************************************
        * 인쇄 버튼 클릭 후 콜백
        ************************************************************************************/
        this.UbiPrintClicked = function(flag) //PDF:PDF print, HTML:HTML print, UBI:UbiViewer print
        {

        }

        /************************************************************************************
        * 저장 버튼 클릭 후 콜백
        ************************************************************************************/
        this.UbiExportClicked = function(flag) // flag : 저장타입 ID
        {

        }


        /************************************************************************************
        * nexacro 그리드 사용할 때 리포트를 만드는 함수
        ************************************************************************************/
        this.runtimeGrid = function(ubiGridObj)
        {
        		var formatRowCount = ubiGridObj.getFormatRowCount();
        		var formatColCount = ubiGridObj.getFormatColCount();

        		var widthArray = new Array;
        		var heightArray = new Array;

        		var headBgColor = "230.230.230";	// 헤더 배경색
        		var summBgColor = "240.240.240";	// 합계 배경색
        		var i = 0;
        		var j = 0;
        		var k = 0;

        		// Grid의 Row의 높이를 도출
        		var subidx = 0;
        		var bandtype = "";
        		var prebandtype = "";
        		var bodyStartRow = 0;
        		var summStartRow = 0;

        		for( i = 0; i < formatRowCount; i++ )
        		{
        			bandtype = ubiGridObj.getFormatRowProperty(i, "band");
        			if( bandtype == prebandtype ) {

        				subidx++;
        			} else {

        				subidx = 0;
        			}
        			heightArray[i] = ubiGridObj.getRealRowSize(i, subidx, false);
        			prebandtype = bandtype;
        		}

        		// Grid의 Column 넓이 도출
        		for( i = 0; i < formatColCount; i++ )
        		{
        			widthArray[i] = ubiGridObj.getRealColSize(i);
        		}

        		var cellcount = 0;
        		var rowcount = 0;

        		// ------------------------------------------------------------
        		// 디자인정보를 담고있는 Dataset 생성
        		// ------------------------------------------------------------
        		var designDataset = this.UbiViewer.getDesignDataset(this);

        		prebandtype = "";
        		var bandRow = 0;
        		var nRow = 0;
        		var rowidx = 0;
        		var colidx = 0;
        		var colspan = 0;
        		var rowspan = 0;
        		var colwidth = 0;
        		var colheight = 0;
        		var startIdx = 0;
        		var endIdx = 0;
        		var bgcolor = "";

        		// 전체 높이와 넒이를 담은 Row 생성
        		nRow = designDataset.addRow();
        		designDataset.setColumn(nRow, "type", "widths");
        		designDataset.setColumn(nRow, "text", widthArray);
        		nRow = designDataset.addRow();
        		designDataset.setColumn(nRow, "type", "heights");
        		designDataset.setColumn(nRow, "text", heightArray);

        		for( i = 0; i < formatRowCount; i++ )
        		{
        			bandtype = ubiGridObj.getFormatRowProperty(i, "band");
        			if( bandtype != prebandtype )
        			{
        				if( bandtype == "head" )
        				{
        					bandRow = -1;
        					bgcolor = headBgColor;
        				}
        				else if( bandtype == "body" )
        				{
        					bandRow = 0;
        					bgcolor = "";
        				}
        				else if( bandtype == "summ" )
        				{
        					bandRow = -2;
        					bgcolor = summBgColor;
        				}

        				cellcount = ubiGridObj.getCellCount(bandtype);

        				for( j = 0; j < cellcount; j++ )
        				{
        					rowidx = ubiGridObj.getCellProperty(bandtype, j, "row");
        					colidx = ubiGridObj.getCellProperty(bandtype, j, "col");
        					rowspan = ubiGridObj.getCellProperty(bandtype, j, "rowspan");
        					colspan = ubiGridObj.getCellProperty(bandtype, j, "colspan");

        					nRow = designDataset.addRow();
        					designDataset.setColumn(nRow, "type", bandtype);
        					designDataset.setColumn(nRow, "row", rowidx);
        					designDataset.setColumn(nRow, "col", colidx);
        					designDataset.setColumn(nRow, "rowspan", rowspan);
        					designDataset.setColumn(nRow, "colspan", colspan);
        					designDataset.setColumn(nRow, "align", ubiGridObj.getCellProperty(bandtype, j, "align"));

        					if( bandRow != 0 )
        					{
        						designDataset.setColumn(nRow, "text", ubiGridObj.getCellText(bandRow, j));
        					}
        					designDataset.setColumn(nRow, "bgcolor", bgcolor);
        					designDataset.setColumn(nRow, "leftmargin", "3");
        					designDataset.setColumn(nRow, "rightmargin", "3");
        				}
        			}
        			prebandtype = bandtype;
        		}
        		this.addChild(designDataset.name, designDataset);

        		// ------------------------------------------------------------
        		// 그리드의 텍스트를 Dataset으로 생성
        		// ------------------------------------------------------------
        		cellcount = ubiGridObj.getCellCount("Body");
        		rowcount = ubiGridObj.rowcount;

        		var gridDataset = new Dataset("dsGrid", this);
        		this.addChild(gridDataset.name, gridDataset);

        		// column 생성
        		for( i = 0; i < cellcount; i++ )
        		{
        			gridDataset.addColumn("column" + i, "string");
        		}

        		// 그리드 데이터 입력
        		for( j = 0; j < rowcount; j++ )
        		{
        			gridDataset.addRow();
        			for( k = 0; k < cellcount; k++ )
        			{
        				gridDataset.setColumn(j, k, ubiGridObj.getCellText(j, k));
        			}
        		}
        		// ------------------------------------------------------------

        		// dataset SSV 전송에 필요한 정보 생성
        		this.UbiViewer.setRuntimeData(designDataset, gridDataset);

        		// 동적으로 생성된 Dataset 제거
        		this.removeChild(designDataset.name);
        		this.removeChild(gridDataset.name);

        }

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
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.UbiReport_onload,this);
        };
        this.loadIncludeScript("UBI_COMMON.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
