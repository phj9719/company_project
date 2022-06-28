(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("게시판");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,734);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"ORIFILE\" type=\"STRING\" size=\"256\"/><Column id=\"SAVEFILE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/><Column id=\"tranfilesize\" type=\"INT\" size=\"256\"/><Column id=\"prog\" type=\"INT\" size=\"256\"/><Column id=\"rowidx\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","57",null,"154","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","828","13","93",null,null,"120",null,null,null,null,this.div_search.form);
            obj.set_taborder("55");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_schArea");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static23","20","13","25","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("56");
            obj.set_text("NO");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit00","123","13","150","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","20","54","87","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("58");
            obj.set_text("CONTENT");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit01","123","54","150","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("66");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","20","91","75","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("59");
            obj.set_text("원본파일이름");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit02","123","91","150","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("63");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","332","13","75","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("60");
            obj.set_text("저장파일이름");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit03","435","13","150","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("64");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00","436","54","250","35",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("67");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("Button00","686","54","93","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("68");
            obj.set_text("업로드");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit04","52.19%","55",null,"18","47.23%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("69");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","593","13","93","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("70");
            obj.set_text("다운로드");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("Button01","707","13","93","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("71");
            obj.set_text("파일삭제하기");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_grid_top","0","440",null,"23","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","50","3","132","16",null,null,null,null,null,null,this.div_grid_top.form);
            obj.set_taborder("5");
            obj.set_text("Records Found");
            obj.set_cssclass("sta_WF_GridFound2");
            this.div_grid_top.addChild(obj.name, obj);

            obj = new Static("sta_total_cnt","0","3","46","16",null,null,null,null,null,null,this.div_grid_top.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_GridFound");
            obj.set_text("0");
            this.div_grid_top.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"0","58","23","68",null,null,null,null,null,this.div_grid_top.form);
            obj.set_taborder("8");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_grid_top.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"0","58","23","8",null,null,null,null,null,this.div_grid_top.form);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_grid_top.addChild(obj.name, obj);

            obj = new Div("div_grid_bottom","0",null,null,"20","0","30",null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bg","0","0",null,null,"0","0",null,null,null,null,this.div_grid_bottom.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_GridDis");
            this.div_grid_bottom.addChild(obj.name, obj);

            obj = new Static("sta_grid_cnt",null,"0","90","20","0",null,null,null,null,null,this.div_grid_bottom.form);
            obj.set_taborder("19");
            obj.set_text("Rows : 0");
            this.div_grid_bottom.addChild(obj.name, obj);

            obj = new Static("sta_msg","6","0",null,"20","137",null,null,null,null,null,this.div_grid_bottom.form);
            obj.set_taborder("20");
            obj.set_text("There is no data.");
            obj.set_color("rgba(68,68,68,1)");
            this.div_grid_bottom.addChild(obj.name, obj);

            obj = new Button("btn_find",null,"2","29","16","132",null,null,null,null,null,this.div_grid_bottom.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_find");
            this.div_grid_bottom.addChild(obj.name, obj);

            obj = new Button("btn_format",null,"2","29","16","164",null,null,null,null,null,this.div_grid_bottom.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_format");
            this.div_grid_bottom.addChild(obj.name, obj);

            obj = new Button("btn_excel00",null,"2","29","16","100",null,null,null,null,null,this.div_grid_bottom.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_xls");
            this.div_grid_bottom.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","472",null,null,"0","59",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_list");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"CONTENT\"/><Cell col=\"2\" text=\"원본파일이름\"/><Cell col=\"3\" text=\"저장파일이름\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" text=\"bind:NO\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:CONTENT\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" text=\"bind:ORIFILE\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" text=\"bind:SAVEFILE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_bottom","0",null,null,"24","0","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","60","24","15",null,null,null,null,null,this.div_bottom.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_bottom.addChild(obj.name, obj);

            obj = new Static("Static00","0.22%","6",null,"42","85.84%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("FILE_TEST");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("15pt \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0.22%","222",null,"164","35.99%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" text=\"Column0\"/><Cell col=\"1\" text=\"fileid\"/><Cell col=\"2\" text=\"fileimg\"/><Cell col=\"3\" text=\"filename\"/><Cell col=\"4\" text=\"filesize\"/><Cell col=\"5\" text=\"tranfilesize\"/><Cell col=\"6\" text=\"prog\"/><Cell col=\"7\" text=\"no\"/></Band><Band id=\"body\"><Cell col=\"0\" text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:fileid\"/><Cell col=\"2\" text=\"bind:fileimg\"/><Cell col=\"3\" text=\"bind:filename\"/><Cell col=\"4\" text=\"bind:filesize\"/><Cell col=\"5\" text=\"bind:tranfilesize\"/><Cell col=\"6\" text=\"bind:prog\"/><Cell col=\"7\" text=\"bind:no\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1370,734,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.Edit00","value","ds_list","NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.Edit01","value","ds_list","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.Edit02","value","ds_list","ORIFILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.Edit03","value","ds_list","SAVEFILE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("testFileUpDown.xfdl","lib::comLib.xjs");
        this.registerScript("testFileUpDown.xfdl", function() {
        /***********************************************************************************
         AUTO-CREATE
         Refactored BY R
         DATE : 2017-29-21 12:29
         /***********************************************************************************
         * Common Library
         ***********************************************************************************/
        this.executeIncludeScript("lib::comLib.xjs"); /*include "lib::comLib.xjs"*/
        /***********************************************************************************
         * Form Event
         ***********************************************************************************/


        // 사용자 정의 폼 로드 함수(form_init 고정)
        this.form_init = function (obj)
        {
        	this.fn_search();
        };

        /***********************************************************************************
         * Form Function
         ***********************************************************************************/
        /* callBack함수(strSvcId - 서비스 아이디, nErrorCode - 에러코드, strErrorMsg - 에러메시지) */
        this.fn_callBack = function (strSvcId, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode < 0)
        	{
        		alert("에러 : " + strErrorMsg);
        	}

        	if (strSvcId == "search")
        	{
        		this.fn_search_post();
        	}

        	if (strSvcId == "save")
        	{
        		this.fn_search();
        	}
        };

        // 팝업 후처리 작업
        this.fn_popupAfter = function (sPopupId, val)
        {
        };

        // 페이징 후처리 작업
        this.fn_pageAfter = function (sObjId, nViewPage)
        {
        };

        /***********************************************************************************
         * User Function
         ***********************************************************************************/
        // 목록조회 Search
        this.fn_search = function ()
        {
        	var con0 = this.div_search.form.Edit00.value;
        	var con1 = this.div_search.form.Edit01.value;
        	var con2 = this.div_search.form.Edit02.value;
        	var con3 = this.div_search.form.Edit03.value;


        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		 + "sqlId='selectFILE_TESTList' ";
        	var callbackFunc = "";
        	if (con0 != null || con1 != null || con2 != null || con3 != null)
        	{
        		argument += "NO=" + con0 + " "
        			 + "CONTENT=" + con1 + " "
        			 + "ORIFILE=" + con2 + " "
        			 + "SAVEFILE=" + con3;
        		this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        	}
        	else
        	{
        		this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        	}
        };

        // 저장
        this.fn_save = function ()
        {
        	var svcId = "save";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_list:U";
        	var outDatasets = "";
        	var argument = "method=save "
        		 + "sqlId=modifyFILE_TEST "
        		 + "forceSqlFlag=N";
        	var callbackFunc = "";
        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 조회 후처리
        this.fn_search_post = function ()
        {
        	// 페이징 없는 경우
        	var nTotalCnt = this.ds_list.rowcount;
        	var nCnt = this.ds_list.rowcount;

        	this.div_grid_top.form.sta_total_cnt.set_text(nTotalCnt);
        	this.div_grid_bottom.form.sta_msg.set_text("Select has been complted successfully.");
        	this.div_grid_bottom.form.sta_grid_cnt.set_text("Rows : " + nCnt);
        };

        this.fn_onkeyup = function (obj, e)
        {
        	if (e.keycode == 13)
        	{
        		this.fn_search();
        	}
        };

        /***********************************************************************************
         * Component Event
         ***********************************************************************************/
        this.div_search_btn_search_onclick = function (obj, e)
        {
        	this.fn_search();
        };



        // 그룹 추가 버튼 클릭시 이벤트 처리
        this.fn_add = function (obj, e)
        {
        	var nRow = this.ds_list.addRow();
        };


        // 게시판 글목록 삭제 버튼 클릭시 이벤트 처리
        this.fn_delete = function (obj, e)
        {
        	var nRow = this.ds_list.rowposition;
        	trace(this.ds_list.rowposition);
        	trace(nRow);
        	if (nRow < 0)
        	{
        		alert("삭제하실 행을 선택해 주세요");
        	}
        	if (nexacro.getApplication().confirm(nRow + "행의 데이터를 삭제하시겠습니까?"))
        	{
        		this.ds_list.deleteRow(nRow);
        		this.fn_save();
        	}
        };

        this.div_bottom_btn_save_onclick = function (obj, e)
        {
        	if (nexacro.getApplication().confirm("Do you want to save?"))
        	{
        		this.fn_save();
        	}
        };



        this.div_search_Button00_onclick = function (obj, e)
        {
        	// 파일 선택안하고 업로드시 조건걸어야함.
        	var rowidx = this.div_search.form.Edit04.value;
        	var strUrl = "http://localhost/sharp/saveFile.jsp?path=test&rowidx=" + rowidx;
        	this.div_search.form.FileUpload00.upload(strUrl);
        	// http://localhost/sharp/file/saveFile.jsp
        };

        this.div_search_FileUpload00_onsuccess = function (obj, e)
        {
        	if (e.datasets == null)
        	{
        		this.alert("업로드실패");
        	}
        	else
        	{
        		alert("업로드 성공");
        		this.ds_list.setColumn(e.datasets[0].getColumn(0, "rowidx"), "ORIFILE", e.datasets[0].getColumn(0, "filename"));
        		this.ds_list.setColumn(e.datasets[0].getColumn(0, "rowidx"), "SAVEFILE", e.datasets[0].getColumn(0, "renamedfile"));
        	}
        };

        this.grd_list_oncellclick = function (obj, e)
        {
        	var rowidx = e.row;
        	this.div_search.form.Edit04.set_value(rowidx);
        };

        this.div_search_FileDownload00_onclick = function (obj, e)
        {
        	var filename = this.div_search.form.Edit03.value;
        	// var encodefile = encodeURI(filename);
        	// alert(encodefile);
        	alert("setURL");
        	this.div_search.form.FileDownload00.set_downloadurl("http://localhost/sharp/downloadFile.jsp?path=test&filename=" + filename);
        	alert("download");
        	this.div_search.form.FileDownload00.download();
        };

        this.div_search_FileDownload00_onsuccess = function (obj, e)
        {
        	alert("다운로드 성공");
        };

        this.div_search_Button01_onclick = function (obj, e)
        {
        	var filename = this.div_search.form.Edit03.value;
        	this.div_search.form.FileDownload00.set_downloadurl("http://localhost/sharp/deleteFile.jsp?path=test&filename=" + filename);
        	this.div_search.form.FileDownload00.download();
        }
        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.div_search_btn_search_onclick,this);
            this.div_search.form.Static23.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static00.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static01.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static02.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.FileUpload00.addEventHandler("onsuccess",this.div_search_FileUpload00_onsuccess,this);
            this.div_search.form.Button00.addEventHandler("onclick",this.div_search_Button00_onclick,this);
            this.div_search.form.FileDownload00.addEventHandler("onclick",this.div_search_FileDownload00_onclick,this);
            this.div_search.form.FileDownload00.addEventHandler("onsuccess",this.div_search_FileDownload00_onsuccess,this);
            this.div_search.form.Button01.addEventHandler("onclick",this.div_search_Button01_onclick,this);
            this.div_grid_top.form.btn_add.addEventHandler("onclick",this.fn_add,this);
            this.div_grid_top.form.btn_delete.addEventHandler("onclick",this.fn_delete,this);
            this.div_grid_bottom.form.btn_find.addEventHandler("onclick",this.div_grid_bottom_btn_find_onclick,this);
            this.div_grid_bottom.form.btn_format.addEventHandler("onclick",this.div_grid_bottom00_btn_format_onclick,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.div_bottom.form.btn_save.addEventHandler("onclick",this.div_bottom_btn_save_onclick,this);
        };
        this.loadIncludeScript("testFileUpDown.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
