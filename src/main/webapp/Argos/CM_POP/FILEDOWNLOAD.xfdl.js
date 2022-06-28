(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fileupdown");
            this.set_titletext("File Download");
            if (Form == this.constructor)
            {
                this._setFormPosition(540,280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDownload", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"INT\" size=\"1\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FiLE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid01","28","55","480","201",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsDownload");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FILE_NAME\"/><Cell col=\"1\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"1\" treelevel=\"bind:DEPTH\" text=\"bind:FILE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDonwload","408","17","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Download");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",540,280,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("FILEDOWNLOAD.xfdl","lib::sct_com.xjs");
        this.registerScript("FILEDOWNLOAD.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/

        /* service url : 사용경로 지정 */
        this.saveUrl = nexacro.getEnvironment().services["svcurl"].url + "/common/";
        this.folderName = "";	//file directory

        this.fullFilesize = 0;

        var fileDownTrans = new nexacro.FileDownTransfer( "fileDownTrans", this );
        var fileGroupId = "";

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	if (this.gfn_isNull(this.opener.fileGroupId)) {
        		this.close();
        		return;
        	} else {
        		fileGroupId = this.opener.fileGroupId;
        	}
        	if (!Sct.Util.isEmpty(this.parent.folderName)) {
        		this.folderName = this.parent.folderName;
        	}
        	fileDownTrans.addEventHandler("onerror", this.fileDownTrans_onerror, this);
        	fileDownTrans.addEventHandler("onsuccess", this.fileDownTrans_onsuccess, this);
        	this.search();
        };

        //리스트 불러오기
        this.btnSearch_onclick = function(obj,e) {
        	this.search();
        }

        this.search = function () {
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "dsDownload=output1";
        	var argument = "method=getList "
        		 + "sqlId=CM_FILE.SEARCH_FILE "
        		 + "FILE_GRP_ID=" + fileGroupId;
        	var callbackFunc = "fn_searchCallback";

        	this.dsDownload.clearData();
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);

        	//this.transaction("list", this.saveUrl + "fileDownload_servlet_list_XML.jsp", "", "dsDownload=dsList", "filefolder="+this.folderName, "callback_transaction", "false", "0")
        };

        // 조회 콜백함수
        this.fn_searchCallback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0) {
        		if (strSvcID == "search") {
        			//alert("success");
        		}
        	} else {
        		alert("error");
        	}
        };

        // 다운로드
        this.btnDonwload_onclick = function(obj,e)
        {
        	this.downloadfile(this.dsDownload.rowposition);
        };

        //upload Grid oncelldbclick
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	//단건 처리 필요 시 추가구현 : playnexacro 참조
        };

        //download Grid oncelldbclick
        this.Grid01_oncelldblclick = function(obj,e)
        {
        	this.downloadfile(e.row);
        };

        this.callback_transaction = function(svcId, errCode, errMsg) {
        	if(svcId == "list")
        	{
        		this.dsDownload.set_enableevent(false);
        		for(var i=0; i<this.dsDownload.getRowCount(); i++)
        		{
        			this.dsDownload.setColumn(i,"FiLE_SIZE",this.cutFileSize(this.dsDownload.getColumn(i,"FiLE_SIZE")));
        		}
        		this.dsDownload.set_enableevent(true);
        	}
        };

        this.fileDownTrans_onerror = function(obj,e)
        {
        	trace("error : " + e.errormsg);
        };

        this.fileDownTrans_onsuccess = function(obj,e)
        {
        	trace(e.targetfullpath);
        };

        this.cutFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
        	{
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        	}
        	return sOutput;
        };

        this.downloadfile = function(i) {

        	if (this.dsDownload.getRowCount() == 0) {
        		// TODO MSG Code
        		this.alert("파일이 없습니다.");
        		return;
        	}
        	//var i = this.dsDownload.rowposition;
        	fileDownTrans.clearPostDataList();
        	fileDownTrans.setPostData("fileRealName", this.dsDownload.getColumn(i, "FILE_REAL_NAME"));
        	fileDownTrans.setPostData("fileName", this.dsDownload.getColumn(i, "FILE_NAME"));
        	fileDownTrans.download(this.saveUrl+"fileDownload_postdatatestAll.jsp");
        }

        this.dsDownload_onrowposchanged = function(obj,e) {

        };

        /**************************************************************************
        *  공통 함수 처리 영역
           해당 함수의 경우 프로젝트 사용 시 프로젝트 공통함수로 전환을 권장 드립니다.
        **************************************************************************/
        /**
        * @description 파리미터 값이 Null 인지 체크하는 함수
        * @param {All} val – 체크할 문자열
        * @return {boolean} Val이 undefined, null, NaN, "", Array.length=0 인 경우 = true
        															  이 외의 경우 = false
        */
        this.gfnIsNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") return true;
        	if (Val == null) return true;
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) return true;
        	if (Val.length == 0) return true;

        	return false;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Grid01.addEventHandler("oncelldblclick",this.Grid01_oncelldblclick,this);
            this.btnDonwload.addEventHandler("onclick",this.btnDonwload_onclick,this);
            this.dsDownload.addEventHandler("onrowposchanged",this.dsDownload_onrowposchanged,this);
        };
        this.loadIncludeScript("FILEDOWNLOAD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
