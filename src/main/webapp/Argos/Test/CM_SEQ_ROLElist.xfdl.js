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
            obj._setContents("<ColumnInfo><Column id=\"KEY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"END_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"FORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","80",null,"214","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("div_WF_searchBg");
            obj.set_background("silver");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","9","13","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("키코드");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit00","112","13","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","9","54","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("키코드 설명");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit01","112","54","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","9","91","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("키시작번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit02","112","91","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","9","128","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("키끝번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit03","112","128","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","9","165","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("생성코드포맷");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit04","112","165","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","281","13","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new checkbox("checkbox05","384","13","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.getSetter("taborder").set("57");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_grid_top","0","312",null,"23","0",null,null,null,null,null,this);
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

            obj = new Button("btn_create",null,"0","57","23","128",null,null,null,null,null,this.div_grid_top.form);
            obj.set_taborder("10");
            obj.set_text("글쓰기");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_grid_top.addChild(obj.name, obj);

            obj = new Button("btn_create00",null,"0","57","23","188",null,null,null,null,null,this.div_grid_top.form);
            obj.set_taborder("11");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_background("crimson");
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

            obj = new Grid("grd_list","0","341",null,null,"0","99",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_list");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"800\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"키코드\"/><Cell col=\"1\" text=\"키코드 설명\"/><Cell col=\"2\" text=\"키시작번호\"/><Cell col=\"3\" text=\"키끝번호\"/><Cell col=\"4\" text=\"생성코드포맷\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" text=\"bind:KEY_CD\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:KEY_DESC\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:START_NUM\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:END_NUM\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" text=\"bind:FORMAT\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
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

            obj = new Static("Static00","0","27",null,"42","1178",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("CM_SEQ_ROLE");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("15pt \"Verdana\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1370,734,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.Edit00","value","ds_list","KEY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.Edit01","value","ds_list","KEY_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.Edit02","value","ds_list","START_NUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.Edit03","value","ds_list","END_NUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.Edit04","value","ds_list","FORMAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.checkbox05","value","ds_list","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CM_SEQ_ROLElist.xfdl","lib::comLib.xjs");
        this.registerScript("CM_SEQ_ROLElist.xfdl", function() {
        /***********************************************************************************
         AUTO-CREATE
         Refactored BY R
         DATE : 2017-00-08 12:00
         /***********************************************************************************
         * Common Library
         ***********************************************************************************/
        this.executeIncludeScript("lib::comLib.xjs"); /*include "lib::comLib.xjs"*/
        /***********************************************************************************
         * Form Event
         ***********************************************************************************/
        this.form_onload = function (obj, e)
        {
        	// 폼로드시 공통함수
        	Sct.onLoad(obj, e);
        };

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
        		// 에러메세지 출력부분
        		return alert("에러 : " + strErrorMsg);
        	}

        	if (strSvcId == "search")
        	{
        		// Service ID에 따른 후처리 부분
        		this.fn_search_post();
        	}

        	if (strSvcId == "save")
        	{
        		this.fn_search("noCon");
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
        	var con4 = this.div_search.form.Edit04.value;
        	var con5 = this.div_search.form.checkbox05.value;
        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		 + "sqlId=selectCM_SEQ_ROLEList ";
        	var callbackFunc = "fn_logincallback";
        	if (con0 != null || con1 != null || con2 != null || con3 != null || con4 != null || con5 != null)
        	{
        		argument += "KEY_CD=con0 ";
        		argument += "KEY_DESC=con1 ";
        		argument += "START_NUM=con2 ";
        		argument += "END_NUM=con3 ";
        		argument += "FORMAT=con4 ";
        		argument += "USE_YN=con5 ";
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
        	var params = "commonController.do";

        	var inDatasets = "input1=ds_list:U";
        	;
        	var outDatasets = "";
        	var argument = "method=save "
        		 + "sqlId=selectCM_SEQ_ROLEList ";
        	+"forceSqlFlag=N";

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
        		// alert
        		// alert("데이터를 선택해주세요");
        	}
        	if (nexacro.getApplication().confirm(nRow + "행의 데이터를 삭제하시겠습니까?"))
        	{
        		this.ds_list.deleteRow(nRow);
        		this.fn_save();
        	}
        };

        this.div_bottom_btn_save_onclick = function (obj, e)
        {
        	if (nexacro.getApplication().confirm("confirm", "Do you want to save?"))
        	{
        		this.fn_save();
        	}
        };

        this.div_grid_bottom_btn_excel_onclick = function (obj, e)
        {
        	// Ex.core.exportExcel(this.grd_list);
        };

        this.div_grid_bottom_btn_find_onclick = function (obj, e)
        {
        	// this.gfn_findPopup(this.grd_list);
        };

        this.div_grid_top_btn_create_onclick = function (obj, e)
        {
        	var args = {
        		arg : "arg1"
        	};

        	// var rtn = Ex.core.popup(this,"게시물 작성","comm::webeditor.xfdl",args,"");
        };

        // 팝업 Callback
        this.fn_popupAfter = function (sPopupId, Variant)
        {
        	var rtn = this.gfn_getPopupRtn();

        	if (!Eco.isEmpty(this.Edit00.value))
        	{
        		var sRow = this.ds_list.addRow();

        		this.ds_list.setColumn(sRow, "TITLE", rtn[0]);
        		this.ds_list.setColumn(sRow, "CONTENTS", rtn[1]);
        	}
        };

        this.grd_list_oncelldblclick = function (obj, e)
        {
        	var argTitle = this.ds_list.getColumn(this.ds_list.rowposition, "TITLE");

        	var argContents = this.ds_list.getColumn(this.ds_list.rowposition, "CONTENTS");



        	var args = {
        		argTitle : argTitle,
        		argContents : argContents
        	};



        	// var rtn = Ex.core.popup(this,"게시물 작성","comm::webeditor.xfdl",args,"");
        }
        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_grid_top.form.btn_add.addEventHandler("onclick",this.fn_add,this);
            this.div_grid_top.form.btn_delete.addEventHandler("onclick",this.fn_delete,this);
            this.div_grid_top.form.btn_create.addEventHandler("onclick",this.div_grid_top_btn_create_onclick,this);
            this.div_grid_top.form.btn_create00.addEventHandler("onclick",this.fn_search,this);
            this.div_grid_bottom.form.btn_find.addEventHandler("onclick",this.div_grid_bottom_btn_find_onclick,this);
            this.div_grid_bottom.form.btn_format.addEventHandler("onclick",this.div_grid_bottom00_btn_format_onclick,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.div_bottom.form.btn_save.addEventHandler("onclick",this.div_bottom_btn_save_onclick,this);
        };
        this.loadIncludeScript("CM_SEQ_ROLElist.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
