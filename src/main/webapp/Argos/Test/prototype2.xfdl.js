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
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORDSTAT\" type=\"STRING\" size=\"256\"/><Column id=\"ORDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ORDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDBILL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"16\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"키\"/><Cell col=\"1\" text=\"제품코드\"/><Cell col=\"2\" text=\"수주상태\"/><Cell col=\"3\" text=\"수주번호\"/><Cell col=\"4\" text=\"수주일자\"/><Cell col=\"5\" text=\"결제처리\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" text=\"bind:NO\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:ITEMCD\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" combodataset=\"ds_list\" combocodecol=\"ORDSTAT\" combodatacol=\"ORDSTAT\" combodisplayrowcount=\"0\" combodisplay=\"display\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:ORDNUM\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:ORDDATE\" maskchar=\"####-##-##\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ORDBILL\"/></Band></Format></Formats>");
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

            obj = new Static("Static00","0.22%","22",null,"42","85.84%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("AC_TEST");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("15pt \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","80",null,"214","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("div_WF_searchBg");
            obj.set_background("silver");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","9","13","96","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("107");
            obj.set_text("sta01");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit00","112","13","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("108");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","9","54","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("109");
            obj.set_text("sta02");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit01","112","54",null,"21","1096",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("110");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","9","91","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("111");
            obj.set_text("sta03");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","112","91",null,"21","1096",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("112");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","281","13","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("113");
            obj.set_text("sta06");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit03","384","13",null,"21","822",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("114");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","281","54","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("115");
            obj.set_text("sta07");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","384","54","164","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("116");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static08","281","91","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("117");
            obj.set_text("sta08");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("Combo05","384","91","164","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("118");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static11","555","13","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("119");
            obj.set_text("sta11");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit06","658","13","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("120");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static12","555","54","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("121");
            obj.set_text("sta12");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit07","658","54",null,"21","550",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("122");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","555","91","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("123");
            obj.set_text("sta13");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("Combo08","658","91",null,"21","550",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("124");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static16","829","13","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("125");
            obj.set_text("sta16");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("Calendar09","932","13","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("126");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static17","829","54","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("127");
            obj.set_text("sta17");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox010","932","54",null,"21","276",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("128");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static18","829","91","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("129");
            obj.set_text("sta18");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit011","932","91","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("130");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static21","1104","14","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("131");
            obj.set_text("sta21");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","1207","14","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("132");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static22","1104","55","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("133");
            obj.set_text("sta22");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","1207","55",null,"21","1",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("134");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static23","1104","92","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("135");
            obj.set_text("sta23");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit02","1207","92","162","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("136");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","9","128","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("137");
            obj.set_text("sta04");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit04","112","128",null,"21","1096",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("138");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","112","165",null,"21","1096",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("139");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","9","165","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("140");
            obj.set_text("sta05");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","384","165",null,"21","824",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("141");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10","281","165","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("142");
            obj.set_text("sta10");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09","281","128","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("143");
            obj.set_text("sta09");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit05","384","128",null,"21","824",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("144");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05","658","165",null,"21","550",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("145");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static15","555","165","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("146");
            obj.set_text("sta15");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static14","555","128","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("147");
            obj.set_text("sta14");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit08","658","128",null,"21","550",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("148");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox06","932","165",null,"21","276",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("149");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static20","829","165","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("150");
            obj.set_text("sta20");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static19","829","128","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("151");
            obj.set_text("sta19");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit10","932","128",null,"21","276",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("152");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox07","1207","165",null,"21","1",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("153");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static25","1104","165","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("154");
            obj.set_text("sta25");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static24","1104","128","98","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("155");
            obj.set_text("sta24");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit11","1207","128",null,"21","1",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("156");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1370,734,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("prototype2.xfdl", function() {
        /***********************************************************************************
         AUTO-CREATE
         Refactored BY R
         DATE : 2017-52-18 08:52
         /***********************************************************************************
         * Common Library
         ***********************************************************************************/
        // include "";
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
        		// Service ID에 따른 후처리 부분 기술
        		this.fn_search_post();
        	}

        	if (strSvcId == "save")
        	{
        		// Service ID에 따른 후처리 부분 기술
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
        this.fn_search = function (noCon)
        {
        	// var con0 = this.div_search.Edit00.value;
        	var con1 = this.div_search.form.Edit01.value;
        	// var con2 = this.div_search.Combo02.value;
        	var con3 = this.div_search.form.Edit03.value;
        	var con4 = this.div_search.Calendar04.value;
        	var con5 = this.div_search.form.CheckBox05.value;

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		 + "sqlId=selectAC_TESTList ";

        	var callbackFunc = "fn_logincallback";
        	if (con1 != null || con3 != null || con4 != null || con5 != null)
        	{
        		argument += "";

        		this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        	}
        	else if (noCon == "noCon")
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
        		 + "sqlId=modyfyAC_TEST "
        		 + "forceSqlFlag=N";
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
        		// 삭제확인 메세지 부분
        		// ExtNx.core.comMsg("alert","msg.err.grid.noselect");
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
        	Ex.core.exportExcel(this.grd_list);
        };

        this.div_grid_bottom_btn_find_onclick = function (obj, e)
        {
        	this.gfn_findPopup(this.grd_list);
        };

        this.div_grid_top_btn_create_onclick = function (obj, e)
        {
        	var args = {
        		arg : "arg1"
        	};

        	var rtn = Ex.core.popup(this, "게시물 작성", "comm::webeditor.xfdl", args, "");
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



        	var rtn = Ex.core.popup(this, "게시물 작성", "comm::webeditor.xfdl", args, "");
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
            this.div_search.form.Static01.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static02.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static03.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static06.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static07.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static08.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static11.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static12.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static13.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static16.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static17.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static18.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static21.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static22.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static23.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static04.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static05.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static10.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static09.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static15.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static14.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static20.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static19.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static25.addEventHandler("onclick",this.div_search_Static23_onclick,this);
            this.div_search.form.Static24.addEventHandler("onclick",this.div_search_Static23_onclick,this);
        };
        this.loadIncludeScript("prototype2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
