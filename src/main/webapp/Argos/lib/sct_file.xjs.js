//XJS=sct_file.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        this.lv_fileConfig = {
        	host : nexacro.getEnvironment().services["svcurl"].url,
        	uploadUrl : "BlobFileUpload.do",
        	downloadUrl : "FileController.do?flag=download&savePath=repository/",
        	folder : "",
        	grpId : "",
        	fileId : "",
        	downImage : "",
        	delImage : "",
        	allowTypes : ["jpg", "jpeg", "gif", "png", "bmp", "txt", "zip", "7z", "gzip", "doc", "docx", "ppt", "pptx", "xls", "xlsx", "pdf", "hwp", "mp4"],
        	maxCount : 3,
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
        this.selFunNm;
        this.extUp = undefined;
        this.extDown;

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
        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/
        this.gfn_initUpload = function (ds, closeFlag)
        {
        	if (Sct.Util.isEmpty(closeFlag))
        	{
        		closeFlag = false;
        	}
        	this.lv_fileDs = ds;
        	this.lv_closeFlag = closeFlag;

        	// 파일 업로드 컴포넌트 생성 및 설정
        	var name = "fup_upload";
        	//var extUp = new nexacro.ExtFileUpload(name, this);
        	var extUp = new nexacro.FileUpload(name, this);
        	this.addChild(extUp.name, extUp);
        	extUp.set_multiselect(true);
        	extUp.show();

        	this.extUp = extUp;

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
        	trace("_items : " + this._items);
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

        			// 최대 파일첨부가능 건수 또는 size 에러.
        		}
        		else if (valid == -1)
        		{
        			obj.removeFile(fileId);
        			return;
        		}

        		var findRow = ds.findRow("FILE_NM", fileName);

        		if (findRow > -1)
        		{
        			Sct.alert(this, "000155", fileName);
        			obj.removeFile(fileId);
        			return;
        		}

        		var addidx = ds.addRow();
        		ds.setColumn(addidx, "ROWIDX", this.rowidx);
        		ds.setColumn(addidx, "FILE_GRP_ID", this.grpID);
        		ds.setColumn(addidx, "FILE_NAME", fileName);
        		ds.setColumn(addidx, "FILE_SIZE", fileSize);
        		ds.setColumn(addidx, "FILE_ID", this.fv_currentDS.name);


        		// 업로드 파일 정보 데이타 구성
        		var pds = this.fv_currentDS;
        		trace("부모창 ds : " + pds.name);
        		trace("팝업오픈 컬럼명 : " + this.colNm);
        		var pdsVal = pds.getColumn(pds.rowposition, this.colNm);
        		if (pdsVal == null || pdsVal == "")
        		{
        			pdsVal = "NEWFILEGRP";
        		}
        		pds.setColumn(pds.rowposition, this.colNm, pdsVal + "/" + fileName);
        	}
        };

        this.fup_upload_onerror = function (obj, e)
        {
        	Sct.alert(this, "000160", e.index + "|" + e.errortype + "|" + e.statuscode + "|" + e.requesturi);
        };

        this.fup_upload_onreadystatechange = function (obj, e)
        {
        	trace("extUpload_onsuccess errorcode=" + e.errorcode + ", errormsg=" + e.errormsg + ", datasets=" + e.datasets + ", url=" + e.url + ", fileId=" + e.fileId);
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
        			// 정상적으로 등록되었습니다.
        			// Sct.alert(this, "000174", "");
        			if (this.lv_closeFlag)
        			{
        				this.close(true);
        			}
        			// this.fn_search();
        			this.fn_callback("FILESVC", 0, 0);
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
        	trace(e.datasets);
        	// gfn_showWaitStatic(this, false);
        	// Sct.alert(this, "000174", "", "_gfnFileAlertCallback");
        	// Sct.alert(this, "000174", ""); // 파일을 정상적으로 업로드하였습니다.
        };

        /**
         * 업로드 할 대상 파일을 추출하고, 업로드 처리한다.
         */
        this.gfn_uploadFiles = function (extUp, inDs, outDs, sqlId, methodName, uploadUrl)
        {
        	var i,len,rowtype,type,fileid,addFileLen,ds_files = this.lv_fileDs;

        	var url;
        	addFileLen = extUp.getAddedFileLength() || 0;

        	if (addFileLen >= 0)
        	{
        		if (!extUp.support.XHR2 || !extUp.support.FileAPI)
        		{
        		}

        		if (uploadUrl == null || uploadUrl == "")
        		{
        			url = this.lv_fileConfig.host + this.lv_fileConfig.uploadUrl + "?SQLID=" + sqlId + "&method=" + methodName;
        		}
        		else
        		{
        			url = this.lv_fileConfig.host + uploadUrl + "?SQLID=" + sqlId + "&method=" + methodName;
        		}

        		extUp.upload(url, inDs, outDs, this.lv_transferType, 0);
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
        				Sct.alert(this, "000157", this.lv_fileConfig.maxCount + "");
        				rtn = -1;
        				return false;
        			}
        		}
        		else if (prop == "size")
        		{
        			if (!isNaN(val) && (val >= this.gfn_sizeToByte(this.lv_fileConfig.maxSize)))
        			{
        				// alert(this.fileConfig.maxSize + " 이상의 파일 업로드는 허용되지 않습니다.");
        				Sct.alert(this, "000159", this.lv_fileConfig.maxSize + "");
        				rtn = -1;
        				return false;
        			}
        		}
        		else if (prop == "totalSize")
        		{
        			if (!isNaN(val) && (val >= this.gfn_sizeToByte(this.lv_fileConfig.maxTotalSize)))
        			{
        				// alert(this.fileConfig.maxTotalSize + " 이상의 파일 업로드는 허용되지 않습니다.");
        				Sct.alert(this, "000156", this.lv_fileConfig.maxTotalSize + "");
        				rtn = -1;
        				return false;
        			}
        		}
        	}, this);

        	return rtn;
        };

        /**************************************
         *파일 다운로드 컴포넌트 관련 함수*
         **************************************/
        this.gfn_makeDownComp = function (colnm)
        {
        	// ==============================================
        	// 파일 다운로드 컴포넌트 생성 및 설정
        	// ==============================================
        	var name = Eco.getUniqueId("extDownload_");
        	var extDown = new nexacro.ExtFileDownload(name, this);
        	this.addChild(extDown.name, extDown);
        	this.extDown = extDown;
        	this.colNm = colnm;
        	// == Event 설정 ==
        	// 통신 성공시에 발생하는 이벤트입니다
        	extDown.addEventHandler("onsuccess", this.extDownload_onsuccess, this);

        	// 통신 오류 시 발생하는 이벤트입니다.
        	extDown.addEventHandler("onerror", this.extDownload_onerror, this);

        	// HTML5 Only : XMLHttpRequest가 데이터를 보내거나 받는 동안 서버에서 정의된 간격으로 발생합니다.
        	extDown.addEventHandler("onprogress", this.extDownload_onprogress, this);

        	extDown.show();
        };

        // 에러발생시 실행 항수
        this.extDownload_onerror = function (obj, e)
        {
        	// 런타임에서 e.errortype; <-- 원하는 type이 아닌 error object 가 전송됨.

        	// gfn_showWaitStatic(this, false);
        	// alert("An error occurred: extDownload_onerror index=" + e.index  + ", errortype=" + e.errortype   + "\n, statuscode=" + e.statuscode + ", requesturi=" + e.requesturi);
        	Sct.alert(this, "000160", e.index + "|" + e.errortype + "|" + e.statuscode + "|" + e.requesturi);

        	this.gfn_resetTranFilesInfo();

        	// if (this.img_loading.visible)
        	// {
        	// this.img_loading.set_visible(false);
        	// }
        };

        // 다운로드 성공시 실행 함수
        this.extDownload_onsuccess = function (obj, e)
        {
        	// trace("	 ★ extFileDownload_onsuccess url=" + e.url);
        	this.gfn_resetTranFilesInfo();

        	// if (this.img_loading.visible)
        	// {
        	// this.img_loading.set_visible(false);
        	// }

        	if (!Sct.Util.isEmpty(e.url))
        	{
        		Sct.alert(this, "000162", "");
        	}
        	else
        	{
        		// alert("다운로드 실패");
        		Sct.alert(this, "000161", "");
        	}
        };

        /**
         * [HTML5 Only] XMLHttpRequest가 데이터를 보내거나 받는 동안 서버에서 정의된 간격으로 발생합니다.
         * file upload & download 진행시 progress bar 처리용
         * @param {ExtFileUpload} obj ExtFileUpload
         * @param {ExtFileProgress} e ExtFileProgress
         */
        this.extDownload_onprogress = function (obj, e)
        {
        	trace("extDownload_onprogress " + e.type + "," + e.loaded);
        	if (e.lengthComputable)
        	{
        		var status,currentFileSize,transferCurrentFileSize,downFiles = this.lv_tranFiles.downloaded,currentRow = -1,ds_download = this.ds_download;

        		// status = Math.floor((e.loaded / e.total) * 100);

        		// currentFileSize = downFiles[0].size;
        		// currentRow = downFiles[0].row;

        		// transferCurrentFileSize = Math.floor(currentFileSize * (status / 100));

        		// trace(" download 진행: prog=" + status + ",tranfilesize="+transferCurrentFileSize+", filesize="+  currentFileSize);
        		// ds_download.setColumn(currentRow, "prog", status);
        		// ds_download.setColumn(currentRow, "FILE_SIZE", currentFileSize);
        		// ds_download.setColumn(currentRow, "tranfilesize", transferCurrentFileSize);

        		// if(parseInt(status) == 100) gfn_showWaitStatic(this, false);
        	}
        };


        // 업로드 컴포넌트에 담긴 파일 삭제(DB X)
        this.gfn_removeFile = function ()
        {
        	var dsFiles = this.fds_files;

        	for (var i = (dsFiles.rowcount - 1); i >= 0; --i)
        	{
        		var chk = dsFiles.getColumn(i, "CHK");

        		if (chk == "1")
        		{
        			// 해당 row의 rowtype이 normal이면 서버에서 삭제로직 추가.
        			// 업로드가 성공한 후에는 ExtFileUpload에 존재하는 파일 정보가 사라진 상태.

        			// 수정된 상태
        			if (dsFiles.getRowType(i) == 2)
        			{
        				var fileId = dsFiles.getColumn(i, "FILE_ID");

        				trace("★ removeFile fileId=" + fileId + ", row=" + i);

        				// ExtFileUpDownload에서 내부적으로 가지고 있는 file정보 삭제.
        				this.ffup_extUp.removeFile(fileId);
        				dsFiles.deleteRow(i);
        			}
        			else
        			{
        				dsFiles.deleteRow(i);
        				// 업로드된 파일은 서버에서 삭제하기 위한 별도처리 필요.
        				// alert("업로드된 파일을 서버에서 삭제하기 위한 별도처리 필요.");
        			}
        		}
        	}

        	// this.grd_files.redraw(); //그리드 갱신이 안되는 버그로 인해 redraw 처리. 2014.09.03 버전
        };

        this.gfn_cancelFiles = function ()
        {
        	// this.attFileCnt = this.fds_files.rowcount;
        	var dsFiles = this.fds_files;

        	// 기추가된 파일을 제외하고, 추후 추가된 파일만을 삭제처리.
        	for (var i = (dsFiles.rowcount - 1); i > (this.attFileCnt - 1); --i)
        	{
        		var fileId = dsFiles.getColumn(i, "FILE_ID");

        		trace("★ removeFile fileId=" + fileId + ", row=" + i);

        		// ExtFileUpDownload에서 내부적으로 가지고 있는 file정보 삭제.
        		this.ffup_extUp.removeFile(fileId);
        		dsFiles.deleteRow(i);
        	}

        	// this.grd_files.redraw(); //그리드 갱신이 안되는 버그로 인해 redraw 처리. 2014.09.03 버전
        };

        // 다운로드할 파일 정보를 Reset
        this.gfn_resetTranFilesInfo = function ()
        {
        	var downFiles = this.lv_tranFiles.downloaded;

        	Eco.array.removeAt(downFiles, 0); //다운 파일 삭제
        	this.lv_tranFiles.downloaded = [];
        };

        this.gfn_download = function (grpId, fileId, fileName, compcd)
        {
        	this.extDown.download("http://localhost/BlobFileDown.do?GRP=" + grpId + "&FILEID=" + fileId + "&COMPANY=" + compcd, fileName);
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

        // 파일목록 분할하여 갯수 리턴
        this.gfn_getFileCnt = function (str)
        {
        	var strArr = str.substring(1, str.length).split(" ");
        	trace("파일 수 : " + strArr.length);
        	return strArr.length;
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
