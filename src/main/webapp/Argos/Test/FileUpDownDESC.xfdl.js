(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FileUpDownDESC");
            this.set_titletext("파일예제");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_KEY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_KEY_SEQ1\" type=\"STRING\" size=\"256\"/><Column id=\"WH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"INVEST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_KEY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_KEY_SEQ1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_KEY_SEQ2\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WGT\" type=\"STRING\" size=\"256\"/><Column id=\"WGT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_WGT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_LOCAT\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_ROUTING\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_YYMM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACCT\" type=\"STRING\" size=\"256\"/><Column id=\"EXP_ACCT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_KEY_SEQ1\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_USER\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_files", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"FAC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_FOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_EXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileGrpId", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FILE_GRP_ID\" type=\"string\" size=\"12\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize

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
        this.addIncludeScript("FileUpDownDESC.xfdl","lib::sct_util.xjs");
        this.addIncludeScript("FileUpDownDESC.xfdl","lib::lib_File.xjs");
        this.registerScript("FileUpDownDESC.xfdl", function() {

        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/

        /*
         ============================================
         화면설명 :	 파일 업,다운 적용 방법
         작성자	  :  김정록
         ============================================
         */


        /***********************************************************************
         * Include
         ***********************************************************************/
        /*======================[1번]============================*/
        /*파일 업다운 함수 모여있는 js 파일 인클루드*/
        this.executeIncludeScript("lib::lib_File.xjs"); /*include "lib::lib_File.xjs"*/
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS;
        /*======================[2번]============================*/
        /*저장될 폴더명 저장할 폼 변수 선언 */
        this.fv_folder = "test";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	Sct.onLoad(obj, e);
        	this.fn_initForm();
        	this.fn_initDataset();
        	this.fv_currentDS = this.ds_list;
        	/*======================[3번]============================*/
        	/*Onload 이벤트에 밑의 코드 추가*/
        	this.gfn_initUpload(this.ds_files, this.fv_folder, "");
        };

        // 삭제 버튼
        this.fn_delRowBtn = function ()
        {
        	var objBindDs = this.fv_currentDS;
        	if (!Sct.Util.isEmpty(objBindDs))
        	{
        		/*======================[4번]============================*/
        		/*파일 올라가있는데 행 삭제시 메세지 띄우는 코드,
        		 기본 틀은

        		 var grpid = this.ds_list.getColumn(this.ds_list.rowposition,"ATTACH_NO");
        		 if(grpid != null){
        		 var bool = this.confirm("삭제하시려는 데이터에 파일이 존재합니다. 그래도 삭제하시겠습니까?","Caution");
        		 if(bool){
        		 Sct.Grid.deleteRow(objBindDs);
        		 this.fn_save("","fn_delAll",grpid);
        		 }else{
        		 return;
        		 }
        		 }else{
        		 Sct.Grid.deleteRow(objBindDs);
        		 }
        		 이고 , 이미 다른 로직이 있는경우 적절히 엮어서 코딩
        		 ATTACH_NO 는 폼 데이터셋(이화면의 경우 ds_list)의 한 행의 파일 아이디 를 담고 있는 컬럼이다,
        		 맞추어 적용 시키면 됨.
        		 fn_save의 경우 13번 참고하여 인자처리

        		 */
        		if (objBindDs.name == "ds_list")
        		{
        			var grpid = this.ds_list.getColumn(this.ds_list.rowposition, "ATTACH_NO");
        			if (grpid != null)
        			{
        				var bool = this.confirm("삭제하시려는 데이터에 파일이 존재합니다. 그래도 삭제하시겠습니까?", "Caution");
        				if (bool)
        				{
        					Sct.Grid.deleteRow(objBindDs);
        					this.fn_save("", "fn_delAll", grpid);
        				}
        				else
        				{
        					return;
        				}
        			}
        			else
        			{
        				Sct.Grid.deleteRow(objBindDs);
        			}
        		}
        	}
        	// this.fn_save();
        };


        // 저장 버튼
        this.fn_saveBtn = function ()
        {
        	/*======================[5번]============================*/
        	/*사용자 정의 저장 함수 말고 저장버튼시 아래 함수 호출*/
        	this.fn_save01();
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/

        /*======================[13번]============================*/
        /*사용자 정의 save함수, 인자로
         callback,grpid 2개 받아줘야 함,
         이 화면의 경우 sqlId 동적 처리를 위해 인자가 1개 더있지만
         그럴 필요가 없는 경우 2개로 처리,
         */

        // Data 저장
        this.fn_save = function (sqlID, callback, grpid)
        {
        	var sqlid;
        	var svcId;
        	if (sqlID == "")
        	{
        		if (this.fv_currentDS.name == "ds_list")
        		{
        			sqlid = "MMC001CT_M ";
        			svcId = "master";
        		}
        		else if (this.fv_currentDS.name == "ds_detail")
        		{
        			sqlid = "MMC001CT_D ";
        			svcId = "detail";
        		}
        	}
        	else
        	{
        		sqlid = sqlID;
        		svcId = grpid;
        	}
        	trace("SQLID :::: " + sqlid);
        	var params = "/commonController.do";
        	var inDatasets = "input1=" + this.fv_currentDS.name + ":U";
        	var outDatasets = "";
        	var argument = "method=save "
        		 + "sqlId=" + sqlid
        		 + "forceSqlFlag=N ";
        	var callbackFunc = callback;

        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 조회 콜백함수
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (strErrorMsg == "NODATA")
        	{
        		// this.fv_currentDS.clearData();
        		alert("데이터가 존재하지 않습니다.");
        	}
        };


        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/

        // 셀클릭시 검사.
        this.fn_detailselect = function (obj, e)
        {
        	/*======================[14번]============================*/
        	/* 그리드에 온클릭 이벤트 함수에 아래 코드 추가 다른 로직 있을 경우
        	 엮어서 처리, 기본 틀은 아래와 같음 , ATTACH_NO또한 화면에 맞게 처리
        	 if(e.col == 17){
        	 if(this.ds_list.getColumn(e.row,"ATTACH_NO") == null){
        	 this.fn_fpopup();
        	 }else{
        	 var grpId = this.ds_list.getColumn(e.row,"ATTACH_NO");
        	 this.fn_fpopup(grpId);
        	 }
        	 }else if(e.col == 18){
        	 var grpId = this.ds_list.getColumn(e.row,"ATTACH_NO");
        	 this.fn_dpopup(grpId);


        	 */
        	if (e.col == 17)
        	{
        		if (this.ds_list.getColumn(e.row, "ATTACH_NO") == null)
        		{
        			this.fn_fpopup();
        		}
        		else
        		{
        			var grpId = this.ds_list.getColumn(e.row, "ATTACH_NO");
        			this.fn_fpopup(grpId);
        		}
        	}
        	else if (e.col == 18)
        	{
        		var grpId = this.ds_list.getColumn(e.row, "ATTACH_NO");
        		this.fn_dpopup(grpId);
        	}
        };

        /***********************************************************************
         * FILE UPLOAD
         ***********************************************************************/
        /*======================[15번]============================*/
        /*  파일 업,다운 팝업 함수 추가
         */
        // 파일업로드 팝업
        this.fn_fpopup = function (grpId)
        {
        	var param = {
        		pForm : this,
        		dsFiles : this.ds_files,
        		fup : this.fup_upload,
        		grpId : grpId
        	};
        	Sct.popup(this, "popupUploadFiles", 800, 250, "Upload Files", param, "Common::commUploadPopup.xfdl", "popupUploadFilesCallback");
        };

        // 파일 다운로드 팝업
        this.fn_dpopup = function (grpId)
        {
        	if (grpId == null)
        	{
        		alert("파일이 존재하지 않습니다.");
        		return;
        	}
        	var param = {
        		pForm : this,
        		grpId : grpId,
        		folder : "test"
        	};
        	Sct.popup(this, "popupDownloadFiles", 800, 250, "Download Files", param, "Common::commDownloadPopup.xfdl", "popupDownloadFilesCallback");
        };

        /*======================[6번]============================*/
        /*아래 코드 그대로 추가	ATTACH_NO은 다를경우 바꿔주어야함
         fn_save의 경우 13번 참고하여 인자 처리,
         */

        this.fn_save01 = function ()
        {
        	// ds_list의 데이터를 저장 할때 올려진 파일이 없을 경우 그냥 저장
        	if (this.ds_files.rowcount == 0)
        	{
        		this.fn_save("", "fn_callback", "search");
        	}
        	else
        	{
        		var objBindDs = this.fv_currentDS;
        		var grpId;
        		// 저장 하기 전.. 현재 row의 grpId 가 없다면 ..(파일이 있는데 FILE_GRP_ID가 없는경우) DB에서 가져오기
        		if (objBindDs.getColumn(objBindDs.rowposition, "ATTACH_NO") == null)
        		{
        			var svcId = "search";
        			var params = "/commonController.do";
        			var inDatasets = "";
        			var outDatasets = "ds_fileGrpId=output1";
        			var argument = "method=getList "
        				 + "sqlId=getFILEGRP ";
        			// 그후 작업할 함수 콜백으로 호출
        			var callbackFunc = "fn_grpcallback";

        			this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        		}
        		else
        		{
        			// row의 grpId가 있다면 가져와서 후처리 함수 호출
        			grpId = objBindDs.getColumn(objBindDs.rowposition, "ATTACH_NO");
        			this.fn_grpcallback("", "", "", grpId);
        		}
        	}
        };

        /*======================[7번]============================*/
        /*아래 코드 그대로 추가	ATTACH_NO은 다를경우 바꿔주어야함
         fn_save의 경우 13번 참고하여 인자 처리,
         */

        this.fn_grpcallback = function (strSvcID, nErrorCode, strErrorMsg, grpId)
        {
        	// 파라미터로 온 grpId가 없으면 ..
        	if (grpId == null)
        	{
        		grpId = this.ds_fileGrpId.getColumn(0, "FILE_GRP_ID");
        	}
        	// 화면 데이터의 grp_id 셋팅
        	this.ds_list.setColumn(this.ds_list.rowposition, "ATTACH_NO", grpId);

        	// ds_files의 grp_id 셋팅
        	for (var i = 0; i < this.ds_files.rowcount; i++)
        	{
        		this.ds_files.setColumn(i, "FILE_GRP_ID", grpId);
        	}
        	// 저장 함수 호출
        	this.fn_save("", "fn_filecallback", "");
        };

        /*======================[8번]============================*/
        /*아래 코드 그대로 추가	ATTACH_NO은 다를경우 바꿔주어야함*/
        this.fn_filecallback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	var grpId = this.ds_list.getColumn(this.ds_list.rowposition, "ATTACH_NO");
        	var extArr = new Array();
        	for (var i = 0; i < this.ds_files.rowcount; i++)
        	{
        		var fileid = this.ds_files.getColumn(i, "FILE_ID");
        		// 000000000001_0001.ext 식으로 셋팅
        		this.ds_files.setColumn(i, "FILE_NAME", grpId + "_" + fileid);
        		extArr.push(this.ds_files.getColumn(i, "FILE_EXT"));
        	}
        	var lastIdx = this.ds_files.getColumn(0, "FILE_NAME");


        	var svcId = "save";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_files:U";
        	var outDatasets = "";
        	var argument = "method=save "
        		 + "sqlId=getFILELIST_S "
        		 + "forceSqlFlag=N ";
        	// ds_files 초기화 하는 콜백함수 호출
        	var callbackFunc = "fn_dsclear";

        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);

        	trace(this.ds_fileGrpId.saveXML());

        	// 실제 파일 업로드
        	this.gfn_uploadFiles(this.fup_upload, this.ds_files, this.fv_folder, lastIdx, extArr);
        };
        /*======================[9번]============================*/
        /*아래 코드 그대로 추가*/
        // ds_files 초기화
        this.fn_dsclear = function ()
        {
        	this.ds_files.clearData();
        };

        /*======================[10번]============================*/
        /*아래 코드 그대로 추가*/

        // 해당 row삭제시 연관된 파일 있을 경우 처리하는 함수
        // 먼저 DB의 데이터부터 삭제한후 콜백에서 실제 파일 삭제 처리
        this.fn_delAll = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	var grpid = strSvcID;
        	var svcId = grpid;
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "";
        	var argument = "method=getList "
        		 + "sqlId=FILE_DELALL "
        		 + "FILE_GRP_ID=" + grpid;
        	var callbackFunc = "fn_delAllfile";

        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        /*======================[11번]============================*/
        /*아래 코드 그대로 추가*/
        this.fn_delAllfile = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	// fn_delAll 에서 method = getList로 통신시 조회되는 결과가 없어서 에러던짐
        	if (strErrorMsg == "NODATA")
        	{
        		alert(strErrorMsg);
        		var svcId = "search";
        		// test 부분 ----> 후에 동적으로 처리(fn_delAll에서 svcId로 폴더 넘겨받기)
        		var params = "/FileDelAll.do?savePath=repository/test";
        		var inDatasets = "";
        		var outDatasets = "";
        		var argument = "";
        		var callbackFunc = "fn_DellAllcallback";

        		this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        	}
        };
        /*======================[12번]============================*/
        /*아래 코드 그대로 추가*/
        this.fn_DellAllcallback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		alert("정상적으로 삭제 되었습니다.");
        	}
        	else
        	{
        		alert("ERROR : " + strErrorMsg);
        	}
        }
        	/***********************************************************************
         * END FILE UPLOAD
         ***********************************************************************/;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("FileUpDownDESC.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
