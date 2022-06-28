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
            this.set_titletext("File Upload");
            if (Form == this.constructor)
            {
                this._setFormPosition(540,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UPLOADED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GROUP_CNT\" type=\"INT\" size=\"256\"/><Column id=\"FILE_GROUP_CNT2\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGroupId", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsServer", this);
            obj._setContents("<ColumnInfo><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnAdd","261","37","67","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","331","37","67","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","28","71","480","201",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_nodatatext("파일을 드래그하여 첨부 할 수 있습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FILE_NAME\"/><Cell col=\"1\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_NAME\"/><Cell col=\"1\" text=\"bind:FILE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","401","37","107","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("전체 업로드");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","28","331","480","201",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj.set_nodatatext("no data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FILE_NAME\"/><Cell col=\"1\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"1\" treelevel=\"bind:DEPTH\" text=\"bind:FILE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00","28","46","160","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("로컬파일");
            obj.set_cssclass("sta_WF_SubTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","28","306","170","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("업로드파일");
            obj.set_cssclass("sta_WF_SubTitle1");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel00","440","297","67","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnDonwload","337","297","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("다운로드");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",540,570,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("FILEUPLOAD.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("FILEUPLOAD.xfdl","lib::pgm_com.xjs");
        this.registerScript("FILEUPLOAD.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/

        /* service url : 사용경로 지정 */
        this.saveUrl = nexacro.getEnvironment().services["svcurl"].url + "/common/";
        this.folderName = "";	//file directory

        this.fullFilesize = 0;
        var fv_Company = nexacro.getApplication().gds_userInfo.getColumn(0,"sicode");
        var fileUpTrans = new nexacro.FileUpTransfer( "fileUpTrans", this );
        var fileDownTrans = new nexacro.FileDownTransfer( "fileDownTrans", this );
        var fileGroupId = this.opener.fileGroupId;
        this.serverName = "";


        this.multiYn = "Y";  //멀티 업로드 가능 여부 멀티 "Y"  단일 "N"
        this.updateYn = "N"; // 변경여부
        this.cutYn = "N"; // 업로드 용량제한 대상
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e) {
        	this.form_onload_com(obj, e, false);

        	fileUpTrans.addEventHandler("onerror", this.fileUpTrans_onerror, this);
        	fileUpTrans.addEventHandler("onsuccess", this.fileUpTrans_onsuccess, this);
        	fileDownTrans.addEventHandler("onerror", this.fileDownTrans_onerror, this);
        	fileDownTrans.addEventHandler("onsuccess", this.fileDownTrans_onsuccess, this);


        	if (!Sct.Util.isEmpty(this.parent.folderName)) {
        		this.folderName = this.parent.folderName;
        	}

        	if (!Sct.Util.isEmpty(this.parent.multiYn)) {
        		this.multiYn = this.parent.multiYn;
        	}

        	if (!Sct.Util.isEmpty(this.parent.cutYn)) { // 50kb 용량제한대상
        		this.cutYn = this.parent.cutYn;
        	}

        	let fileFilter = "";
        	let accept = "";
        	if (!Sct.Util.isEmpty(this.parent.extName))
        	{
        		if (this.parent.extName == "image")
        		{
        			accept = ".png, .gif, .bmp, .jpeg, .jpg";
        			fileFilter = "Image Files(*.png,*.gif,*.bmp,*.jpeg)|*.png;*.gif;*.bmp;*.jpeg;*.jpg|All(*.*)|*.*|";
        		}
        		else
        		{
        			fileFilter = "All(*.*)|*.*|";
        		}
        		//trace(accept);
        		//trace(fileFilter);
        		this.fileDialog.set_filter(fileFilter);
        		this.fileDialog.set_accept(accept);
        	}

        	//trace(this.fileDialog.accept);

        	this.search();
        };
        //추가
        this.btnAdd_onclick = function(obj,e) {
        	//file dialog open

        	if(this.multiYn	== "N"){ //단일 첨부인 경우만
        		if(this.dsFile.rowcount >= 1){
        			alert("첨부는 1개만 가능합니다.");
        			return false;
        		}
        		if(this.dsUpload.rowcount>=1){
        			alert("첨부는 1개만 가능합니다.");
        			return false;
        		}
        		this.fileDialog.open('nexacro17', FileDialog.SAVE);
        	}else{
        		this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        	}
        };

        //삭제
        this.btnDel_onclick = function(obj,e) {
        	//selected file delete
        	var nRow = this.dsFile.rowposition;
        	this.dsFile.deleteRow(nRow);

        	var objFile = fileUpTrans.filelist[nRow];
        	fileUpTrans.removeFile(objFile.name);			//filelist remove
        };

        //저장
        this.btnSave_onclick = function(obj,e)
        {
        	//file upload 실행
        	if (this.dsFile.getRowCount() == 0) {
        		alert("전송할 파일이 없습니다.");
        		return;
        	}

        	if(this.multiYn	== "N"){ //단일 첨부인 경우만
        		if(this.dsUpload.getRowCount() > 0){
        			alert("업로드된 파일이 존재합니다. 업로드된 파일 삭제 후 업로드 해주세요.");
        			return  false;
        		}
        	}

        	if(this.cutYn == "Y"){
        		var fileSize = nexacro.replaceAll(this.dsFile.getColumn(this.dsFile.rowposition,"FILE_SIZE"), " KB", "" );
        		if(fileSize > 50){
        			this.alert("업로드 파일은 50KB를 초과할 수 없습니다.");
        			return;
        		}
        	}

        	this.uploadfile();
        };

        //upload Grid ondrop
        this.Grid00_ondrop = function(obj,e)
        {
        	if(this.multiYn	== "N"){ //단일 첨부인 경우만
        		if(this.dsFile.getRowCount() >= 1){
        			alert("첨부는 1개만 가능합니다.");
        			return false;
        		}

        		if(e.filelist.length > 1) {
        			alert("첨부는 1개만 가능합니다.");
        			return false;
        		}
        	}

        	if(e.datatype == "file")
        	{
        		this.addFileList(e.filelist);
        	}
        };

        this.fileDialog_onclose = function(obj,e)
        {
        	if(this.gfnIsNull(e.virtualfiles))
        	{
        		return;
        	}

        	this.addFileList(e.virtualfiles);
        };

        this.cutFileSize = function(filesize) {
        	var sOutput = filesize + " bytes";
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)  {
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        	}

        	return sOutput;
        };

        this.addFileList = function(filelists) {
        	//array type virtualfile List
        	var vFile;
        	var len = filelists.length;
        	for (var i = 0; i < len; i++) {

        		vFile = filelists[i];
        		fileUpTrans.addFile(vFile.name,vFile);

        		vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        		vFile.addEventHandler("onerror", this.fileList_onerror, this);

        		vFile.open(null, VirtualFile.openRead);
        		vFile.getFileSize();	//return file size
        		//this.dsFile.setColumn(i, "FILE_SIZE", String(size));
        		vFile.close();
        	}
        }

        this.uploadfile = function() {
        	//file upload
        	fileUpTrans.upload(this.saveUrl +"fileUpload_postdatatest.jsp?filefolder="+this.folderName);

        	this.updateYn = "Y";
        }

        this.fileUpTrans_onerror = function(obj,e) {
        	alert(e.errormsg);
        };

        this.fileUpTrans_onsuccess = function(obj,e) {
        	var objCallDs = e.datasets[0];
        	var sFileid = "";
        	fileUpTrans.clearFileList();
        	for(var i=0; i<objCallDs.getRowCount(); i++) {

        		sFileid = this.dsFile.getColumn(i,"FILE_ID");

        		this.dsFile.setColumn(i,"FILE_NAME",objCallDs.getColumn(i,"FILE_NAME"));
        		this.dsFile.setColumn(i,"FILE_REAL_NAME",objCallDs.getColumn(i,"FILE_REAL_NAME"));
        	}

        	this.saveFileInfo();
        };

        this.saveFileInfo = function() {

        	if (this.gfn_isNull(fileGroupId)) {
        		this.searchGroupId();
        	} else {
        		this.insertFileInfo();
        	}

        	// this.searchGroupId();
        }

        this.insertFileInfo = function() {
        	var svcId = "save";
        	var params = "/commonController.do";
        	var inDatasets = "input1=dsFile:U";
        	var outDatasets = "";
        	var argument = "method=insert sqlId='CM_FILE.INSERT_FILE' ";
        	var callbackFunc = "fn_searchCallback";

        	for (var i = 0; i < this.dsFile.getRowCount(); i++) {
        		this.dsFile.setRowType(i, Dataset.ROWTYPE_INSERT);
        		this.dsFile.setColumn(i, "COMPANY_CD", nexacro.getApplication().gv_company);
        		this.dsFile.setColumn(i, "FILE_GRP_ID", fileGroupId);
        		this.dsFile.setColumn(i, "UPLOADED_YN", "Y");
        	}

        	this.dsUpload.clearData();
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        this.fnGetPercent = function(nload,nTotal)
        {
        	//일부값 ÷ 전체값 X 100
        	var nCurPercent = (nload / nTotal) * 100;
        	return nCurPercent;
        };

        this.search = function () {
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "dsUpload=output1";
        	var argument = "method=getList "
        		 + "sqlId=CM_FILE.SEARCH_FILE "
        		 + "FILE_GRP_ID=" + fileGroupId + " "
        		 + "COMPANY_CD=" + fv_Company;
        	var callbackFunc = "fn_searchCallback";

        	this.dsFile.clearData();
        	this.dsUpload.clearData();
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };


        this.searchGroupId = function () {

        	var svcId = "searchGroup";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "dsGroupId=output1";
        	var argument = "method=getList "
        		 + "sqlId=CM_FILE.SEARCH_GROUP_ID "
        		 + "COMPANY_CD=" + fv_Company + " ";


        	var callbackFunc = "fn_searchCallback";

        	this.dsGroupId.clearData();
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 조회 콜백함수
        this.fn_searchCallback = function (strSvcID, nErrorCode, strErrorMsg) {
        	if (nErrorCode == 0) {
        		if (strSvcID == "search") {
        		} else if (strSvcID == "searchGroup") {
        			if (this.dsGroupId.getRowCount() > 0 && !Sct.Util.isEmpty(this.dsGroupId.getColumn(0, "FILE_GRP_ID"))) {
        				fileGroupId = this.dsGroupId.getColumn(0, "FILE_GRP_ID");
        			} else {
        				fileGroupId = "0";
        			}

        			this.opener.fileGroupId = fileGroupId;
        			this.insertFileInfo();
        		} else {
        			this.dsFile.clearData();
        			this.search();
        		}
        	} else {
        		alert("error");
        	}
        };

        this.fileList_onsuccess = function(obj, e)
        {
        	//getFileSize() call --> reason : 9
        	if (e.reason == 9) {
        		var nRowIdx = this.dsFile.addRow();
        		this.dsFile.setColumn(nRowIdx, "FILE_NAME", obj.filename);
        		this.dsFile.setColumn(nRowIdx, "FILE_SIZE", this.cutFileSize(e.filesize));
        	}
        }

        this.fileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        this.gfnIsNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") return true;
        	if (Val == null) return true;
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) return true;
        	if (Val.length == 0) return true;

        	return false;
        }

        this.btnDel00_onclick = function(obj,e)
        {
        	this.updateYn = "Y";
        	//selected file delete
        	var nRow = this.dsUpload.rowposition;
        	this.dsUpload.deleteRow(nRow);

        	var svcId = "save";
        	var params = "/commonController.do";
        	var inDatasets = "input1=dsUpload:U";
        	var outDatasets = "";
        	var argument = "method=delete "
        		 + "sqlId='CM_FILE.DELETE_FILE' ";
        	var callbackFunc = "fn_searchCallback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.downloadfile = function(i) {

        	if (this.dsUpload.getRowCount() == 0) {
        		// TODO MSG Code
        		this.alert("파일이 없습니다.");
        		return;
        	}

        	fileDownTrans.clearPostDataList();
        	fileDownTrans.setPostData("fileRealName", this.dsUpload.getColumn(i, "FILE_REAL_NAME"));
        	fileDownTrans.setPostData("fileName", this.dsUpload.getColumn(i, "FILE_NAME"));
        	fileDownTrans.download(this.saveUrl+"fileDownload_postdatatestAll.jsp");
        }

        this.btnDonwload_onclick = function(obj,e)
        {
        	this.downloadfile(this.dsUpload.rowposition);
        };


        this.fn_setData = function (obj, e) {

        	this.ds_return.copyData(this.dsUpload);
        	this.ds_return.clearData();

        	this.ds_return.addRow();
        	this.ds_return.copyRow(0, this.dsUpload, this.dsUpload.rowposition);

        	this.ds_return.addColumn("UPDATE_YN");
        	this.ds_return.setColumn(0,"UPDATE_YN",this.updateYn);


        	//trace(this.ds_return.saveXML());


        	this.close(this.ds_return.saveXML());
        };

        this.fileupdown_onclose = function(obj,e)
        {
        	this.fn_setData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.fileupdown_onclose,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.Grid00.addEventHandler("ondrop",this.Grid00_ondrop,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDel00.addEventHandler("onclick",this.btnDel00_onclick,this);
            this.btnDonwload.addEventHandler("onclick",this.btnDonwload_onclick,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
        };
        this.loadIncludeScript("FILEUPLOAD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
