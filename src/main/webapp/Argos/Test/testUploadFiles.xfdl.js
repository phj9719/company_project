(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testUploadFiles");
            this.set_titletext("Upload Test");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_fileGrp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FILE_GRP_ID\" type=\"string\" size=\"12\"/><Column id=\"FILE_GRP_NM\" type=\"string\" size=\"100\"/><Column id=\"FILE_FOLDER\" type=\"string\" size=\"10\"/><Column id=\"REG_USER\" type=\"string\" size=\"32\"/><Column id=\"REG_DTM\" type=\"date\" size=\"7\"/><Column id=\"MOD_USER\" type=\"string\" size=\"32\"/><Column id=\"MOD_DTM\" type=\"date\" size=\"7\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_files", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"FAC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_FOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_EXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileGrpId", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FILE_GRP_ID\" type=\"string\" size=\"12\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TP\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEAR_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"PRN_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"APPV_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("USEYN", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ExtFileUpload("fup_upload","10","49","133","21",null,null,null,null,null,null,this);
            obj.getSetter("onchange").set("fup_upload_onchange");
            obj.getSetter("onerror").set("fup_upload_onerror");
            obj.getSetter("onprogress").set("fup_upload_onprogress");
            obj.getSetter("onsuccess").set("fup_upload_onsuccess");
            obj.getSetter("onreadystatechange").set("fup_upload_onreadystatechange");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ref","10","10","133","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cref","122","10","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_AllClear");
            obj.set_font("9pt \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ref","145","10","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Attach");
            obj.set_font("9pt \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_transfer","173","10","74","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("??????");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","265","10","74","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("??????");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","360","8","151","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","3","75","1180","619",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_list");
            obj.set_selecttype("multirow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"35\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"61\"/><Column size=\"59\"/><Column size=\"52\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"56\"/><Column size=\"32\"/><Column size=\"27\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"????????????\"/><Cell col=\"3\" text=\"?????????\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"????????????\"/><Cell col=\"5\" text=\"????????? ??????\"/><Cell col=\"6\" text=\"?????? ??????\"/><Cell col=\"7\" text=\"????????? ??????\"/><Cell col=\"8\" text=\"?????? ??????\"/><Cell col=\"9\" text=\"?????? ??????\"/><Cell col=\"10\" text=\"?????? ??????\"/><Cell col=\"11\" text=\"?????? ??????\"/><Cell col=\"12\" text=\"?????? ??????\"/><Cell col=\"13\" text=\"MENU_PARAM\"/><Cell col=\"14\" text=\"?????? ??????\"/><Cell col=\"15\" text=\"?????? ??????\"/><Cell col=\"16\" colspan=\"3\" text=\"????????????\"/><Cell col=\"19\" text=\"?????? ??????\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:MENU_ID\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:MENU_ID_NM\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:MENU_TP\" combodataset=\"MenuTP\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CLS_AUTH\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:SEAR_AUTH\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ADD_AUTH\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DEL_AUTH\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:XLS_AUTH\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:SAVE_AUTH\"/><Cell col=\"11\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:PRN_AUTH\"/><Cell col=\"12\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:APPV_AUTH\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:MENU_PARAM\"/><Cell col=\"14\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:MENU_STATUS\"/><Cell col=\"15\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:DESCRIPTION\"/><Cell col=\"16\" text=\"bind:FILE_GRP_ID\"/><Cell col=\"17\" displaytype=\"button\"/><Cell col=\"18\" displaytype=\"button\" color=\"aquamarine\"/><Cell col=\"19\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:USE_YN\" combodataset=\"USEYN\" combocodecol=\"CMCD\" combodatacol=\"CMNM\"/></Band></Format></Formats>");
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
        this.addIncludeScript("testUploadFiles.xfdl","lib::lib_File.xjs");
        this.addIncludeScript("testUploadFiles.xfdl","lib::sct_util.xjs");
        this.registerScript("testUploadFiles.xfdl", function() {
        this.executeIncludeScript("lib::lib_File.xjs"); /*include "lib::lib_File.xjs"*/
        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/

        var fv_folder = "test";

        this.testUploadFiles_onload = function (obj, e)
        {
        	this.gfn_initUpload(this.fup_upload, this.ds_files, fv_folder, "");
        };

        // this.btn_ref_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        // {
        // var param = {
        // pForm : this,
        // dsFiles : this.ds_files,
        // fup : this.fup_upload
        // };
        //
        // Sct.popup(this, "popupUploadFiles", 800, 250, "Upload Files", param, "Common::commUploadPopup.xfdl", "popupUploadFilesCallback");
        // }

        this.popupUploadFilesCallback = function (sid, rtn)
        {
        	// alert("popupUploadFilesCallback / lv_fileConfig.folder : " + lv_fileConfig.folder);
        };

        this.btn_transfer_onclick = function (obj, e)
        {
        	this.gfn_uploadFiles(this.fup_upload, this.ds_files);
        };

        // this.btn_save_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        // {
        // var row;
        // if(this.ds_fileGrp.rowcount == 0)
        // {
        // row = this.ds_fileGrp.addRow();
        // }
        //
        // this.ds_fileGrp.setColumn(row, "FILE_FOLDER", fv_folder);
        //
        // this.fn_save();
        // }





        // this.edt_ref_oneditclick = function(obj:Edit,  e:nexacro.EditClickEventInfo)
        // {
        // // 000000000001
        // var param = {
        // pForm : this,
        // fileGrpId : "000000000001"
        // };
        //
        // Sct.popup(this, "popupDownloadFiles", 800, 250, "Download Files", param, "Common::commDownloadPopup.xfdl", "popupDownloadFilesCallback");
        //
        // }

        this.popupDownloadFilesCallback = function (sid, rtn)
        {
        	// TODO
        };

        this.Button00_onclick = function (obj, e)
        {
        };


        // ====================================================================================
        // ====================================================================================
        // ====================================================================================
        // Custom


        this.fv_currentDS = this.ds_list;


        this.grd_list_onsetfocus = function (obj, e)
        {
        	this.fv_currentDS = obj.getBindDataset();
        };

        /***********************************************************************
         * Common Button Functions
         ************************************************************************/
        // ?????? ??????
        this.fn_searchBtn = function ()
        {
        	this.fn_search();
        };

        // ?????? ??????
        this.fn_addRowBtn = function ()
        {
        	var objBindDs = this.fv_currentDS;
        	if (!Sct.Util.isEmpty(objBindDs))
        	{
        		objBindDs.addRow();
        	}
        };

        // ?????? ??????
        this.fn_delRowBtn = function ()
        {
        	var objBindDs = this.fv_currentDS;
        	if (!Sct.Util.isEmpty(objBindDs))
        	{
        		// objBindDs.deleteRow(objBindDs.rowposition);
        		// ?????? ?????? ????????? ??? ???????????? ???????????? FILE_GRP_ID??? ????????? ????????? ????????????..
        		if (objBindDs.name == "ds_list")
        		{
        			var grpid = this.ds_list.getColumn(this.ds_list.rowposition, "FILE_GRP_ID");
        			if (grpid != null)
        			{
        				var bool = this.confirm("?????????????????? ???????????? ????????? ???????????????. ????????? ?????????????????????????", "Caution");
        				if (bool)
        				{
        					Sct.Grid.deleteRow(objBindDs);
        					this.fn_saveLF("fn_delAll", grpid);
        				}
        				else
        				{
        					return;
        				}
        			}
        		}
        		else
        		{
        			// ????????? ?????? ??????
        			Sct.Grid.deleteRow(objBindDs);
        		}
        	}
        };

        // ?????? ???????????? ??????
        this.fn_exportXlsBtn = function ()
        {
        };

        // ?????? ??????
        this.fn_saveBtn = function ()
        {
        	this.fn_save();
        };

        // ????????? ?????? ??????
        this.fn_reportBtn = function ()
        {
        };

        // ?????? ??????
        this.fn_approveBtn = function ()
        {
        };


        this.fn_search = function ()
        {
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		 + "sqlId=getMENUID ";
        	var callbackFunc = "";

        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };


        this.grd_list_oncellclick = function (obj, e)
        {
        	if (e.col == 17)
        	{
        		if (this.ds_list.getColumn(e.row, "FILE_GRP_ID") == null)
        		{
        			this.fn_fpopup();
        		}
        		else
        		{
        			var grpId = this.ds_list.getColumn(e.row, "FILE_GRP_ID");
        			this.fn_fpopup(grpId);
        		}
        	}
        	else if (e.col == 18)
        	{
        		var grpId = this.ds_list.getColumn(e.row, "FILE_GRP_ID");
        		this.fn_dpopup(grpId);
        	}
        };
        this.fn_save = function ()
        {
        	// ds_list??? ???????????? ?????? ?????? ????????? ????????? ?????? ?????? ?????? ??????
        	if (this.ds_files.rowcount == 0)
        	{
        		this.fn_saveLF();
        	}
        	else
        	{
        		var objBindDs = this.fv_currentDS;
        		var grpId;
        		// ?????? ?????? ???.. ?????? row??? grpId ??? ????????? ..(????????? ????????? FILE_GRP_ID??? ????????????) DB?????? ????????????
        		if (objBindDs.getColumn(objBindDs.rowposition, "FILE_GRP_ID") == null)
        		{
        			var svcId = "search";
        			var params = "/commonController.do";
        			var inDatasets = "";
        			var outDatasets = "ds_fileGrpId=output1";
        			var argument = "method=getList "
        				 + "sqlId=getFILEGRP ";
        			// ?????? ????????? ?????? ???????????? ??????
        			var callbackFunc = "fn_grpcallback";

        			this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        		}
        		else
        		{
        			// row??? grpId??? ????????? ???????????? ????????? ?????? ??????
        			grpId = objBindDs.getColumn(objBindDs.rowposition, "FILE_GRP_ID");
        			this.fn_grpcallback("", "", "", grpId);
        		}
        	}
        };

        this.fn_grpcallback = function (strSvcID, nErrorCode, strErrorMsg, grpId)
        {
        	// ??????????????? ??? grpId??? ????????? ..
        	if (grpId == null)
        	{
        		grpId = this.ds_fileGrpId.getColumn(0, "FILE_GRP_ID");
        	}
        	// ?????? ???????????? grp_id ??????
        	this.ds_list.setColumn(this.ds_list.rowposition, "FILE_GRP_ID", grpId);

        	// ds_files??? grp_id ??????
        	for (var i = 0; i < this.ds_files.rowcount; i++)
        	{
        		this.ds_files.setColumn(i, "FILE_GRP_ID", grpId);
        	}
        	// ?????? ?????? ??????
        	this.fn_saveLF("fn_callback");
        };

        this.fn_saveLF = function (callback, grpid)
        {
        	// if(grpid == null){
        	// grpid = "";
        	// }
        	var svcId = grpid;
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_list:U";
        	var outDatasets = "";
        	var argument = "method=save "
        		 + "sqlId=saveMENUID "
        		 + "forceSqlFlag=N";
        	var callbackFunc = callback;

        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // FILE_GRP_ID?????? ???????????? ?????? ?????? ????????? ???????????? ??????
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	var grpId = this.ds_list.getColumn(this.ds_list.rowposition, "FILE_GRP_ID");
        	var extArr = new Array();
        	for (var i = 0; i < this.ds_files.rowcount; i++)
        	{
        		var fileid = this.ds_files.getColumn(i, "FILE_ID");
        		// 000000000001_0001.ext ????????? ??????
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
        	// ds_files ????????? ?????? ???????????? ??????
        	var callbackFunc = "fn_dsclear";

        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);


        	trace(this.ds_fileGrpId.saveXML());
        	// ?????? ?????????
        	this.gfn_uploadFiles(this.fup_upload, this.ds_files, fv_folder, lastIdx, extArr);
        };

        this.fn_dsclear = function ()
        {
        	this.ds_files.clearData();
        };


        // ?????? row????????? ????????? ?????? ?????? ?????? ???????????? ??????
        // ?????? DB??? ??????????????? ???????????? ???????????? ?????? ?????? ?????? ??????
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

        this.fn_delAllfile = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	// fn_delAll ?????? method = getList??? ????????? ???????????? ????????? ????????? ????????????
        	if (strErrorMsg == "NODATA")
        	{
        		alert(strErrorMsg);
        		var svcId = "search";
        		// test ?????? ----> ?????? ???????????? ??????(fn_delAll?????? svcId??? ?????? ????????????)
        		var params = "/FileDelAll.do?savePath=repository/test";
        		var inDatasets = "";
        		var outDatasets = "";
        		var argument = "";
        		var callbackFunc = "fn_DellAllcallback";

        		this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        	}
        };

        this.fn_DellAllcallback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		alert("??????????????? ?????? ???????????????.");
        	}
        	else
        	{
        		alert("ERROR : " + strErrorMsg);
        	}
        };




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

        this.fn_dpopup = function (grpId)
        {
        	if (grpId == null)
        	{
        		alert("????????? ???????????? ????????????.");
        		return;
        	}
        	// 000000000001
        	var param = {
        		pForm : this,
        		grpId : grpId,
        		folder : "test"
        	};

        	Sct.popup(this, "popupDownloadFiles", 800, 250, "Download Files", param, "Common::commDownloadPopup.xfdl", "popupDownloadFilesCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.testUploadFiles_onload,this);
            this.edt_ref.addEventHandler("oneditclick",this.edt_ref_oneditclick,this);
            this.btn_cref.addEventHandler("onclick",this.fn_clearAll,this);
            this.btn_ref.addEventHandler("onclick",this.btn_ref_onclick,this);
            this.btn_transfer.addEventHandler("onclick",this.btn_transfer_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.grd_list.addEventHandler("onsetfocus",this.grd_list_onsetfocus,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
        };
        this.loadIncludeScript("testUploadFiles.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
