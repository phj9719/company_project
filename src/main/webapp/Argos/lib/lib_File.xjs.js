//XJS=lib_File.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"lib::sct_util.xjs");
        this.registerScript(path, function() {

        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/
        this.lv_fileConfig = {
        	host : nexacro.getEnvironment().services["svcurl"].url,
        	// uploadUrl : "FileController.do?flag=upload&savePath=repository/",
        	uploadUrl : "sharp/file/saveFile.jsp?path=repository/",
        	downloadUrl : "FileController.do?flag=download&savePath=repository/",
        	folder : "",
        	grpId : "",
        	fileId : "",
        	downImage : "",
        	delImage : "",
        	allowTypes : ["jpg", "jpeg", "gif", "png", "bmp", "txt", "zip", "7z", "gzip", "doc", "docx", "ppt", "pptx", "xls", "xlsx", "pdf", "hwp"],
        	maxCount : 10,
        	maxSize : "200MB",
        	maxTotalSize : "200MB"
        };

        // 아이콘별 확장자 목록.
        this.lv_iconInfo = {
        	file_icon_ZIP : ["zip", "rar", "7z"],
        	file_icon_IMG : ["jpg", "jpeg", "gif", "png", "bmp"],
        	file_icon_TXT : ["txt", "xml"],
        	file_icon_DOC : ["doc", "docx"],
        	file_icon_XLS : ["xls", "xlsx"],
        	file_icon_PPT : ["ppt", "pptx"],
        	file_icon_PDF : ["pdf"],
        	file_icon_ETC : ["etc"]// 위 확장자 목록에 일치하지 않을 경우. default icon
        };

        // 확장자별 아이콘 정보
        // extToIcon = {};

        // XHR2 진행처리용
        this.lv_tranFiles = {
        	added : [], // 업로드 파일 정보
        	downloaded : [], // 다운로드 파일 정보
        	transferFileSize : 0, // 현재까지 전송된 파일 크기
        	transferFileIndex : 0, // 현재 전송중인 파일 인덱스
        	preFileSizeSum : 0// 현재까지 전송된 파일크기 합계
        };

        this.lv_transferType = "all";

        this.lv_fileDs;
        this.lv_fileDsup;
        this.lv_dataDs;
        this.lv_fileGrpIdCol;
        this.lv_closeFlag = false;

        this.extUp = undefined;

        /*****************************************************************************************
         * 함  수  명	:	gfn_initUpload
         * 입      력	:	1. extUp : Upload Component
         2. ds : File Dataset
         3. folder : Upload Folder
         4. grpId : File Group ID
         5. closeFlag : Close Flag
         * 반      환	:
         * 기      능	:	Upload 관련 초기화
         *****************************************************************************************/
        // 단건 파일 처리 (팝업 활용)
        // this.gfn_initUpload = function (form:Form, extUp:nexacro.ExtFileUpload, ds:Dataset, folder, grpId, closeFlag)
        // this.gfn_initUpload = function (extUp:nexacro.ExtFileUpload, ds:Dataset,folder, grpId, closeFlag)
        this.gfn_initUpload = function (ds, folder, grpId, closeFlag)
        {
        	if (Sct.Util.isEmpty(closeFlag))
        	{
        		closeFlag = false;
        	}

        	this.lv_closeFlag = closeFlag;

        	// extUp.removeAll();
        	ds.clearData();
        	this.lv_fileDs = ds;
        	this.lv_fileConfig.folder = folder;
        	// this.lv_fileConfig.grpId = grpId;
        	// ==============================================
        	// 파일 업로드 컴포넌트 생성 및 설정
        	// ==============================================
        	// var name = Eco.getUniqueId("extUpload_");
        	var name = "fup_upload";
        	var extUp = new nexacro.ExtFileUpload(name, this);
        	this.addChild(extUp.name, extUp);
        	extUp.set_multiselect(true);
        	extUp.show();

        	this.extUp = extUp;

        	// extUp.setResponseZone(this, this.st_helpMessage, this.grd_files);

        	// == Event 설정 ==
        	// 파일 다이얼로그를 통해 파일을 선택했을 때 발생하는 이벤트입니다
        	extUp.setEventHandler("onchange", this.fup_upload_onchange, this);

        	// 통신 성공시에 발생하는 이벤트입니다
        	extUp.setEventHandler("onsuccess", this.fup_upload_onsuccess, this);

        	// 통신 오류 시 발생하는 이벤트입니다.
        	extUp.setEventHandler("onerror", this.fup_upload_onerror, this);

        	// HTML5 Only : XMLHttpRequest가 데이터를 보내거나 받는 동안 서버에서 정의된 간격으로 발생합니다.
        	extUp.setEventHandler("onprogress", this.fup_upload_onprogress, this);

        	// HTML5 Only : XMLHttpRequest 통신시 readystate 속성 변경 event
        	extUp.setEventHandler("onreadystatechange", this.fup_upload_onreadystatechange, this);
        };

        // 단건 파일 처리 (팝업 활용)
        this.fup_upload_onchange = function (obj, e)
        {
        	var ds = this.lv_fileDs;
        	var index = e.index;
        	var fileList = e.files;
        	var fileCount = fileList.length;
        	var fileSupport = (obj.support.XHR2 && obj.support.FileAPI);

        	for (var i = 0; i < fileCount; i++)
        	{
        		var file = fileList[i];
        		var fileId = "";
        		var fileName = file.name;
        		var fileSize = file.size;
        		var fileType = file.type;
        		var fileFullpath = file.fullpath;
        		trace("   fileId=" + fileId + ",fileName=" + fileName + ",fileSize=" + fileSize + ",fileType=" + fileType + ",fileFullpath=" + fileFullpath);

        		var dsCount = ds.getRowCount();
        		var cond;
        		if (fileSupport)
        		{
        			var totalSize = ds.getSum("filesize") + fileSize;
        			cond = {
        				"name" : fileName,
        				"length" : dsCount,
        				"size" : fileSize,
        				"totalSize" : totalSize
        			};
        		}
        		else
        		{
        			cond = {
        				"name" : fileName,
        				"length" : dsCount
        			};
        		}

        		var valid = this.gfn_validateFile(cond);

        		// 파일 유형 에러
        		if (valid == 0)
        		{
        			obj.removeFile(fileId);
        			return;
        		}
        		else if (valid == -1)
        		{
        			// 최대 파일첨부가능 건수 또는 size 에러.
        			obj.removeFile(fileId);
        			return;
        		}

        		var findRow = ds.findRow("FILE_NM", fileName);

        		if (findRow > -1)
        		{
        			// alert("Duplicate name exists." + fileName);
        			Sct.alert(this, "000155", fileName);
        			obj.removeFile(fileId);
        			return;
        		}

        		// 업로드 파일 정보 데이타 구성
        		var addidx = ds.addRow();
        		ds.setColumn(addidx, "COM_KEY", "001");
        		ds.setColumn(addidx, "FAC_KEY", "SCT");
        		ds.setColumn(addidx, "FILE_GRP_ID", "");
        		ds.setColumn(addidx, "FILE_ID", "");
        		ds.setColumn(addidx, "FILE_NAME", fileName);
        		ds.setColumn(addidx, "FILE_REAL_NAME", fileName);
        		ds.setColumn(addidx, "FILE_FOLDER", this.lv_fileConfig.folder);
        		ds.setColumn(addidx, "FILE_SIZE", fileSize);

        		if (fileSize > 0)
        		{
        			ds.setColumn(addidx, "FILE_SIZE", fileSize);
        		}

        		var fileExtArr = fileName.split(".");
        		var fileExt = fileExtArr[fileExtArr.length - 1];

        		ds.setColumn(addidx, "FILE_EXT", fileExt);
        	}
        };

        this.fup_upload_onerror = function (obj, e)
        {
        	// alert("FileError");
        	// 런타임에서 e.errortype; <-- 원하는 type이 아닌 error object 가 전송됨.
        	// gfn_showWaitStatic(this, false);
        	// alert("An error occurred: extUpload_onerror index=" + e.index  + ", errortype=" + e.errortype   + "\n, statuscode=" + e.statuscode + ", requesturi=" + e.requesturi);
        	Sct.alert(this, "000160", e.index + "|" + e.errortype + "|" + e.statuscode + "|" + e.requesturi);
        };

        this.fup_upload_onreadystatechange = function (obj, e)
        {
        	// trace("extUpload_onreadystatechange readyState=" + e.readyState + ", status=" + e.status);

        	if (e.readyState == 4)
        	{
        		if (e.status != 200)
        		{
        			// trace("extUpload_onreadystatechange > Fail request!!");
        			// TODO
        			// 에러 발생에 따른 UI 처리

        			var ds = this.lv_fileDs;
        			var count = ds.rowcount;
        			for (var i = 0; i < count; i++)
        			{
        				ds.setColumn(i, "PROG", -1);
        			}
        		}
        		else if (e.status == 200)
        		{
        			// trace("Success request.");
        			var ds = this.lv_fileDs;
        			obj.removeAll();
        			ds.clearData();
        			Sct.alert(this, "000174", "");
        			if (this.lv_closeFlag)
        			{
        				this.close(true);
        			}
        		}
        	}
        };

        this._gfnFileAlertCallback = function (sid, rtn)
        {
        	if (this.lv_closeFlag)
        	{
        		this.close(true);
        	}
        };

        this.fup_upload_onprogress = function (obj, e)
        {
        	var addedFile = obj.getAddedFile(),addedFileLength = addedFile.length || 0;

        	if (e.lengthComputable && (addedFileLength > 0))
        	{
        		// 개별파일 전송시. "each"
        		var fileId = e.fileId;
        		if (fileId)
        		{
        			var currentFileSize = e.loaded;
        			var totalFileSize = e.total;
        			var ds = this.lv_fileDs;
        			var row = ds.findRow("FILE_NM", fileId);
        			var transferFileRate = Math.floor((currentFileSize / totalFileSize) * 100);
        			// trace("\n### extUpload_onprogress " + transferFileRate + "%, e.loaded=" + e.loaded + ",e.total=" +e.total +", e.fileId=" + e.fileId);
        			ds.setColumn(row, "PROG", transferFileRate);
        			ds.setColumn(row, "FILE_SIZE", totalFileSize);
        			ds.setColumn(row, "TRAN_FILE_SIZE", currentFileSize);

        			return;
        		}

        		var transferFileSize,transferFileRate,transferFile,currentFileId,currentFileSize,currentFileName,ds_files = this.lv_fileDs,dsRow = -1;

        		var tranFiles = this.lv_tranFiles;
        		// 현재까지 전송된 전체 사이즈
        		tranFiles.transferFileSize = e.loaded;

        		// 현재까지 전송된 크기가 이전파일 크기 합계보다 크면 진행바 상태 표시를 반복 수행
        		while ((tranFiles.transferFileSize > tranFiles.preFileSizeSum) && (tranFiles.transferFileIndex < addedFileLength))
        		{
        			currentFileId = addedFile[tranFiles.transferFileIndex].id;
        			dsRow = ds_files.findRow("FILE_ID", currentFileId);

        			transferFile = addedFile[tranFiles.transferFileIndex].file;
        			currentFileSize = transferFile.size;
        			currentFileName = transferFile.name;

        			ds_files.setColumn(dsRow, "FILE_SIZE", currentFileSize);

        			transferFileSize = tranFiles.transferFileSize - tranFiles.preFileSizeSum;
        			transferFileRate = Math.floor((transferFileSize / currentFileSize) * 100);

        			// trace("@@@@ transferFileRate="+transferFileRate + ", e.loaded="+e.loaded + ",e.total="+e.total + ",transferFileSize="+transferFileSize);

        			// 현재 파일 전송이 완료되지 않은 경우는 다음 onStatus 이벤트 호출 대기
        			if (transferFileRate < 100)
        			{
        				ds_files.setColumn(dsRow, "PROG", transferFileRate);
        				ds_files.setColumn(dsRow, "TRAN_FILE_SIZE", transferFileSize);

        				break;
        			}

        			// 현재 파일 전송 완료 또는 초과하는 경우는 현재 전송파일 완료 진행 처리후 while 반복문 로직 수행
        			if (transferFileRate >= 100)
        			{
        				transferFileSize = currentFileSize; //현재 파일 전송 사이즈
        				transferFileRate = 100; //현재 파일 전송 진행율

        				ds_files.setColumn(dsRow, "PROG", transferFileRate);
        				ds_files.setColumn(dsRow, "FILE_SIZE", currentFileSize);
        				ds_files.setColumn(dsRow, "TRAN_FILE_SIZE", transferFileSize);

        				// 다음 전송 파일 정보 설정
        				tranFiles.preFileSizeSum += currentFileSize; //이전 파일 사이즈 합계
        				tranFiles.transferFileIndex++;

        				if (tranFiles.transferFileIndex >= addedFileLength)
        				{
        					break;
        				}
        			}
        		}
        	}
        };

        this.fup_upload_onsuccess = function (obj, e)
        {
        	// trace("extUpload_onsuccess errorcode=" + e.errorcode + ", errormsg=" + e.errormsg   + ", datasets=" + e.datasets + ", url=" + e.url  + ", fileId=" + e.fileId );

        	// lv_fileDs.applyChange();
        	this.lv_fileDs.clearData();
        	obj.removeAll();

        	// gfn_showWaitStatic(this, false);
        	// Sct.alert(this, "000174", "", "_gfnFileAlertCallback");
        	Sct.alert(this, "000174", ""); //파일을 정상적으로 업로드하였습니다.
        };

        /**
         * 업로드 할 대상 파일을 추출하고, 업로드 처리한다.
         */
        // this.gfn_uploadFiles = function(form, extUp, dsFiles:Dataset, folder)
        this.gfn_uploadFiles = function (extUp, dsFiles, folder, lastIdx, extArr)
        {
        	// var fileidx = 0;
        	// if(this.ds_download.rowcount != 0){
        	// fileidx = this.ds_download.rowcount;
        	// }
        	// for(var i=1; i<=this.dsfiles.rowcount; i++){
        	// var fileIdx = fileidx+i+"";
        	// var mfileIdx = fileIdx.padLeft(4,"0");
        	// var bool = this.dsfiles.setColumn(i-1,"FILE_ID",mfileIdx);
        	//
        	// }

        	var i,len,rowtype,type,fileid,addFileLen,ds_files = this.lv_fileDs;

        	addFileLen = extUp.getAddedFileLength() || 0;

        	// trace("\n\n== START uploadFiles addFileLen:" + addFileLen);

        	if (addFileLen > 0)
        	{
        		if (!extUp.support.XHR2 || !extUp.support.FileAPI)
        		{
        			// if (!this.img_loading.visible)
        			// {
        			// var topform = Eco.XComp.getTopLevelForm(this);
        			// var l = Math.round((topform.getOffsetWidth() - this.img_loading.getOffsetWidth())/2);
        			// var t = Math.round((topform.getOffsetHeight() - this.img_loading.getOffsetHeight())/2);
        			//
        			// // 				this.img_loading.move(l, t, this.img_loading.getOffsetWidth(), this.img_loading.getOffsetHeight());
        			// // 				this.img_loading.set_visible(true);
        			// }
        		}

        		// this.initProgressbar("upload");
        		var url = this.lv_fileConfig.host + this.lv_fileConfig.uploadUrl + folder + "&rowidx=" + lastIdx + "&extArr=" + extArr;

        		/*
        		 런타임에서는 url parameter 설정만 가능!

        		 HTML5는 아래 내용 참고
        		 //  upload files
        		 //  @param {=string} path upload url 정보. default는 상단의 extUp.set_uploadurl()에서 설정한 정보.
        		 //  @param {string} inDatasetsParam input dataset 정보
        		 //  @param {string} outDatasetsParam output dataset 정보
        		 //  @param {string} transferType 전송유형.(all: 대상파일을 한번에 전송(defalut), each: 개별 전송)
        		 //  @param {number} datatype data 전송방식. 0:XML, 1:Binary(Runtime only), 2:SSV

        		 ds_download에 output dataset 결과는 extUpload_onsuccess 이벤트의 e.datasets에서 수신한다.
        		 */
        		// gfn_showWaitStatic(form, true);
        		// [전체전송]
        		// extUp.upload(url, "ds_input=ds_input ds_temp=ds_temp", "", this.transferType, 0);

        		extUp.upload(url, "ds_input=" + dsFiles.name, "", this.lv_transferType, 0);

        		// trace("dsFiles.name : " + dsFiles.name);
        		// [개별전송]
        		// this.transferType = "all";
        		// extUp.upload(url, "ds_input=ds_input","", this.transferType, 0);
        	}
        };

        /**
         * 파일 추가시 validate 체크
         * @param {object} cond 체크 대상
         */
        this.gfn_validateFile = function (cond)
        {
        	var rtn = 1;
        	Eco.object.Each(cond, function (prop, val, object)
        	{
        		var result = "";
        		if (prop == "name")
        		{
        			var fileExt = val.slice(val.lastIndexOf(".") + 1).toLowerCase();
        			if (!Eco.array.contains(this.lv_fileConfig.allowTypes, fileExt))
        			{
        				// alert("'" + fileExt + "' 유형의 파일은 업로드가 불가능합니다. [" + val + "]");
        				Sct.alert(this, "000158", fileExt + "|" + val);
        				rtn = 0;
        				return false;
        			}
        			/* fileAPI file.type, mime type  - http://www.iana.org/assignments/media-types
        			 console.log("file.type:" + file.type);
        			 if(!file.type.match("image.*"))
        			 {
        			 return 0;
        			 }
        			 */
        		}
        		else if (prop == "length")
        		{
        			if (val >= this.lv_fileConfig.maxCount)
        			{
        				// alert(this.fileConfig.maxCount + "건 이상의 파일 업로드는 허용되지 않습니다.");
        				Sct.alert(lv_form, "000157", this.lv_fileConfig.maxCount);
        				rtn = -1;
        				return false;
        			}
        		}
        		else if (prop == "size")
        		{
        			if (!isNaN(val) && (val >= this.gfn_sizeToByte(this.lv_fileConfig.maxSize)))
        			{
        				// alert(this.fileConfig.maxSize + " 이상의 파일 업로드는 허용되지 않습니다.");
        				Sct.alert(this, "000159", this.lv_fileConfig.maxSize);
        				rtn = -1;
        				return false;
        			}
        		}
        		else if (prop == "totalSize")
        		{
        			if (!isNaN(val) && (val >= this.gfn_sizeToByte(this.lv_fileConfig.maxTotalSize)))
        			{
        				// alert(this.fileConfig.maxTotalSize + " 이상의 파일 업로드는 허용되지 않습니다.");
        				Sct.alert(this, "000156", this.lv_fileConfig.maxTotalSize);
        				rtn = -1;
        				return false;
        			}
        		}
        	}, this);

        	return rtn;
        };

        /**
         * File Group ID를 구하여 반환한다.
         * @param {string}  Prefix
         * @return {string} FileGrpId
         */
        this.gfn_getFileGrpId = function (preId)
        {
        	var grpId;

        	if (Sct.Util.isEmpty(preId))
        	{
        		grpId = Sct.Util.getMilliSec();
        	}
        	else
        	{
        		grpId = preId + "_" + Sct.Util.getMilliSec();
        	}

        	return grpId;
        };

        /**
         * File Group ID를 세팅한다.
         * @param {string}  Prefix
         * @return none
         */
        this.gfn_setFileGrpId = function (gprId, fileId)
        {
        	// var fileGrpId = this.gfn_getFileGrpId(prefix);

        	this.lv_fileConfig.grpId = grpId;
        	this.lv_fileConfig.fileId = fileId;
        };

        /**
         * size를 byte로 변환처리한다.
         * @param {number} fileSize file size
         * @return {number} file size
         */
        this.gfn_sizeToByte = function (fileSize)
        {
        	var unit = fileSize.match(/[^\d]+/g),size = fileSize.match(/\d+/);

        	unit = unit ? unit[0].toLowerCase() : "";
        	size = size ? size[0] : fileSize;

        	if (unit == "mb")
        	{
        		return size * 1024 * 1024;
        	}
        	else if (unit == "gb")
        	{
        		return size * 1024 * 1024 * 1024;
        	}
        	else if (unit == "tb")
        	{
        		return size * 1024 * 1024 * 1024 * 1024;
        	}
        	else if (unit == "")
        	{
        		return size;
        	}
        	else
        	{
        		return fileSize;
        	}
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
