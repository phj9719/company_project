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
            this.set_titletext("νμΌμμ ");
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
         νλ©΄μ€λͺ :	 νμΌ μ,λ€μ΄ μ μ© λ°©λ²
         μμ±μ	  :  κΉμ λ‘
         ============================================
         */


        /***********************************************************************
         * Include
         ***********************************************************************/
        /*======================[1λ²]============================*/
        /*νμΌ μλ€μ΄ ν¨μ λͺ¨μ¬μλ js νμΌ μΈν΄λ£¨λ*/
        this.executeIncludeScript("lib::lib_File.xjs"); /*include "lib::lib_File.xjs"*/
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS;
        /*======================[2λ²]============================*/
        /*μ μ₯λ  ν΄λλͺ μ μ₯ν  νΌ λ³μ μ μΈ */
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
        	/*======================[3λ²]============================*/
        	/*Onload μ΄λ²€νΈμ λ°μ μ½λ μΆκ°*/
        	this.gfn_initUpload(this.ds_files, this.fv_folder, "");
        };

        // μ­μ  λ²νΌ
        this.fn_delRowBtn = function ()
        {
        	var objBindDs = this.fv_currentDS;
        	if (!Sct.Util.isEmpty(objBindDs))
        	{
        		/*======================[4λ²]============================*/
        		/*νμΌ μ¬λΌκ°μλλ° ν μ­μ μ λ©μΈμ§ λμ°λ μ½λ,
        		 κΈ°λ³Έ νμ

        		 var grpid = this.ds_list.getColumn(this.ds_list.rowposition,"ATTACH_NO");
        		 if(grpid != null){
        		 var bool = this.confirm("μ­μ νμλ €λ λ°μ΄ν°μ νμΌμ΄ μ‘΄μ¬ν©λλ€. κ·Έλλ μ­μ νμκ² μ΅λκΉ?","Caution");
        		 if(bool){
        		 Sct.Grid.deleteRow(objBindDs);
        		 this.fn_save("","fn_delAll",grpid);
        		 }else{
        		 return;
        		 }
        		 }else{
        		 Sct.Grid.deleteRow(objBindDs);
        		 }
        		 μ΄κ³  , μ΄λ―Έ λ€λ₯Έ λ‘μ§μ΄ μλκ²½μ° μ μ ν μ?μ΄μ μ½λ©
        		 ATTACH_NO λ νΌ λ°μ΄ν°μ(μ΄νλ©΄μ κ²½μ° ds_list)μ ν νμ νμΌ μμ΄λ λ₯Ό λ΄κ³  μλ μ»¬λΌμ΄λ€,
        		 λ§μΆμ΄ μ μ© μν€λ©΄ λ¨.
        		 fn_saveμ κ²½μ° 13λ² μ°Έκ³ νμ¬ μΈμμ²λ¦¬

        		 */
        		if (objBindDs.name == "ds_list")
        		{
        			var grpid = this.ds_list.getColumn(this.ds_list.rowposition, "ATTACH_NO");
        			if (grpid != null)
        			{
        				var bool = this.confirm("μ­μ νμλ €λ λ°μ΄ν°μ νμΌμ΄ μ‘΄μ¬ν©λλ€. κ·Έλλ μ­μ νμκ² μ΅λκΉ?", "Caution");
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


        // μ μ₯ λ²νΌ
        this.fn_saveBtn = function ()
        {
        	/*======================[5λ²]============================*/
        	/*μ¬μ©μ μ μ μ μ₯ ν¨μ λ§κ³  μ μ₯λ²νΌμ μλ ν¨μ νΈμΆ*/
        	this.fn_save01();
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/

        /*======================[13λ²]============================*/
        /*μ¬μ©μ μ μ saveν¨μ, μΈμλ‘
         callback,grpid 2κ° λ°μμ€μΌ ν¨,
         μ΄ νλ©΄μ κ²½μ° sqlId λμ  μ²λ¦¬λ₯Ό μν΄ μΈμκ° 1κ° λμμ§λ§
         κ·Έλ΄ νμκ° μλ κ²½μ° 2κ°λ‘ μ²λ¦¬,
         */

        // Data μ μ₯
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

        // μ‘°ν μ½λ°±ν¨μ
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (strErrorMsg == "NODATA")
        	{
        		// this.fv_currentDS.clearData();
        		alert("λ°μ΄ν°κ° μ‘΄μ¬νμ§ μμ΅λλ€.");
        	}
        };


        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/

        // μν΄λ¦­μ κ²μ¬.
        this.fn_detailselect = function (obj, e)
        {
        	/*======================[14λ²]============================*/
        	/* κ·Έλ¦¬λμ μ¨ν΄λ¦­ μ΄λ²€νΈ ν¨μμ μλ μ½λ μΆκ° λ€λ₯Έ λ‘μ§ μμ κ²½μ°
        	 μ?μ΄μ μ²λ¦¬, κΈ°λ³Έ νμ μλμ κ°μ , ATTACH_NOλν νλ©΄μ λ§κ² μ²λ¦¬
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
        /*======================[15λ²]============================*/
        /*  νμΌ μ,λ€μ΄ νμ ν¨μ μΆκ°
         */
        // νμΌμλ‘λ νμ
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

        // νμΌ λ€μ΄λ‘λ νμ
        this.fn_dpopup = function (grpId)
        {
        	if (grpId == null)
        	{
        		alert("νμΌμ΄ μ‘΄μ¬νμ§ μμ΅λλ€.");
        		return;
        	}
        	var param = {
        		pForm : this,
        		grpId : grpId,
        		folder : "test"
        	};
        	Sct.popup(this, "popupDownloadFiles", 800, 250, "Download Files", param, "Common::commDownloadPopup.xfdl", "popupDownloadFilesCallback");
        };

        /*======================[6λ²]============================*/
        /*μλ μ½λ κ·Έλλ‘ μΆκ°	ATTACH_NOμ λ€λ₯Όκ²½μ° λ°κΏμ£Όμ΄μΌν¨
         fn_saveμ κ²½μ° 13λ² μ°Έκ³ νμ¬ μΈμ μ²λ¦¬,
         */

        this.fn_save01 = function ()
        {
        	// ds_listμ λ°μ΄ν°λ₯Ό μ μ₯ ν λ μ¬λ €μ§ νμΌμ΄ μμ κ²½μ° κ·Έλ₯ μ μ₯
        	if (this.ds_files.rowcount == 0)
        	{
        		this.fn_save("", "fn_callback", "search");
        	}
        	else
        	{
        		var objBindDs = this.fv_currentDS;
        		var grpId;
        		// μ μ₯ νκΈ° μ .. νμ¬ rowμ grpId κ° μλ€λ©΄ ..(νμΌμ΄ μλλ° FILE_GRP_IDκ° μλκ²½μ°) DBμμ κ°μ Έμ€κΈ°
        		if (objBindDs.getColumn(objBindDs.rowposition, "ATTACH_NO") == null)
        		{
        			var svcId = "search";
        			var params = "/commonController.do";
        			var inDatasets = "";
        			var outDatasets = "ds_fileGrpId=output1";
        			var argument = "method=getList "
        				 + "sqlId=getFILEGRP ";
        			// κ·Έν μμν  ν¨μ μ½λ°±μΌλ‘ νΈμΆ
        			var callbackFunc = "fn_grpcallback";

        			this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        		}
        		else
        		{
        			// rowμ grpIdκ° μλ€λ©΄ κ°μ Έμμ νμ²λ¦¬ ν¨μ νΈμΆ
        			grpId = objBindDs.getColumn(objBindDs.rowposition, "ATTACH_NO");
        			this.fn_grpcallback("", "", "", grpId);
        		}
        	}
        };

        /*======================[7λ²]============================*/
        /*μλ μ½λ κ·Έλλ‘ μΆκ°	ATTACH_NOμ λ€λ₯Όκ²½μ° λ°κΏμ£Όμ΄μΌν¨
         fn_saveμ κ²½μ° 13λ² μ°Έκ³ νμ¬ μΈμ μ²λ¦¬,
         */

        this.fn_grpcallback = function (strSvcID, nErrorCode, strErrorMsg, grpId)
        {
        	// νλΌλ―Έν°λ‘ μ¨ grpIdκ° μμΌλ©΄ ..
        	if (grpId == null)
        	{
        		grpId = this.ds_fileGrpId.getColumn(0, "FILE_GRP_ID");
        	}
        	// νλ©΄ λ°μ΄ν°μ grp_id μν
        	this.ds_list.setColumn(this.ds_list.rowposition, "ATTACH_NO", grpId);

        	// ds_filesμ grp_id μν
        	for (var i = 0; i < this.ds_files.rowcount; i++)
        	{
        		this.ds_files.setColumn(i, "FILE_GRP_ID", grpId);
        	}
        	// μ μ₯ ν¨μ νΈμΆ
        	this.fn_save("", "fn_filecallback", "");
        };

        /*======================[8λ²]============================*/
        /*μλ μ½λ κ·Έλλ‘ μΆκ°	ATTACH_NOμ λ€λ₯Όκ²½μ° λ°κΏμ£Όμ΄μΌν¨*/
        this.fn_filecallback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	var grpId = this.ds_list.getColumn(this.ds_list.rowposition, "ATTACH_NO");
        	var extArr = new Array();
        	for (var i = 0; i < this.ds_files.rowcount; i++)
        	{
        		var fileid = this.ds_files.getColumn(i, "FILE_ID");
        		// 000000000001_0001.ext μμΌλ‘ μν
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
        	// ds_files μ΄κΈ°ν νλ μ½λ°±ν¨μ νΈμΆ
        	var callbackFunc = "fn_dsclear";

        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);

        	trace(this.ds_fileGrpId.saveXML());

        	// μ€μ  νμΌ μλ‘λ
        	this.gfn_uploadFiles(this.fup_upload, this.ds_files, this.fv_folder, lastIdx, extArr);
        };
        /*======================[9λ²]============================*/
        /*μλ μ½λ κ·Έλλ‘ μΆκ°*/
        // ds_files μ΄κΈ°ν
        this.fn_dsclear = function ()
        {
        	this.ds_files.clearData();
        };

        /*======================[10λ²]============================*/
        /*μλ μ½λ κ·Έλλ‘ μΆκ°*/

        // ν΄λΉ rowμ­μ μ μ°κ΄λ νμΌ μμ κ²½μ° μ²λ¦¬νλ ν¨μ
        // λ¨Όμ  DBμ λ°μ΄ν°λΆν° μ­μ νν μ½λ°±μμ μ€μ  νμΌ μ­μ  μ²λ¦¬
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

        /*======================[11λ²]============================*/
        /*μλ μ½λ κ·Έλλ‘ μΆκ°*/
        this.fn_delAllfile = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	// fn_delAll μμ method = getListλ‘ ν΅μ μ μ‘°νλλ κ²°κ³Όκ° μμ΄μ μλ¬λμ§
        	if (strErrorMsg == "NODATA")
        	{
        		alert(strErrorMsg);
        		var svcId = "search";
        		// test λΆλΆ ----> νμ λμ μΌλ‘ μ²λ¦¬(fn_delAllμμ svcIdλ‘ ν΄λ λκ²¨λ°κΈ°)
        		var params = "/FileDelAll.do?savePath=repository/test";
        		var inDatasets = "";
        		var outDatasets = "";
        		var argument = "";
        		var callbackFunc = "fn_DellAllcallback";

        		this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        	}
        };
        /*======================[12λ²]============================*/
        /*μλ μ½λ κ·Έλλ‘ μΆκ°*/
        this.fn_DellAllcallback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		alert("μ μμ μΌλ‘ μ­μ  λμμ΅λλ€.");
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
