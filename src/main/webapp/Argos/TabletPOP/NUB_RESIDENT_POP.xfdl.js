(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUB_RESIDENT_POP");
            this.set_titletext("입소자 조회 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resident", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_pop_main","0","0","800","600",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#FFFFFF");
            obj.set_borderRadius("20px");
            obj.set_visible("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","5.00%","72",null,"3","5.00%",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("#47afe1");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Div("div_resident","50","250",null,null,"5.00%","5%",null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Edit("edt_name","62","95","324","50",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("이름 입력");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"95","160","50","238",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_tDefaultSkyblue2");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_all_search",null,"95","160","50","62",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("4");
            obj.set_text("전체 조회");
            obj.set_cssclass("btn_tDefaultSkyblue2");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Combo("cmb_area","62","161","136","50",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("5");
            obj.set_displaynulltext("층");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Combo("cmb_location","214","161","172","50",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("6");
            obj.set_displaynulltext("생활실");
            obj.set_innerdataset("ds_location");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_data_yn","410","169","114","34",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("7");
            obj.set_text("당일입력 유무");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_color("#555555");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Radio("rdo_data_yn","534","167","205","38",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_color("#555555");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            var div_pop_main_form_rdo_data_yn_innerdataset = new nexacro.NormalDataset("div_pop_main_form_rdo_data_yn_innerdataset", obj);
            div_pop_main_form_rdo_data_yn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">ALL</Col></Row></Rows>");
            obj.set_innerdataset(div_pop_main_form_rdo_data_yn_innerdataset);
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Div("Div00_00","5.00%","231",null,"3","5.00%",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_background("#47afe1");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"4.33%","24","24","6.00%",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("10");
            obj.set_edge("url(\'theme://images/ico_popclose.png\') 0px 0px");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_popTitle","320","16","150","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("수급자 조회");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_tPopupTitle");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_pop_main.form.edt_name","value","ds_search","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_pop_main.form.cmb_area","value","ds_search","AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_pop_main.form.cmb_location","value","ds_search","LOCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_pop_main.form.rdo_data_yn","value","ds_search","DATA_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB_RESIDENT_POP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB_RESIDENT_POP.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB_RESIDENT_POP.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB_RESIDENT_POP.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;

        var fv_Company = this.parent.COMPANY_CD;
        var fv_Flag = this.parent.FLAG;
        var fv_area = this.parent.AREA;
        var fv_location = this.parent.LOCATION;
        var	date = this.parent.DATE;

        // 온로드
        this.NUB_RESIDENT_POP_onload = function(obj,e)
        {
        	this.ds_search.setColumn(0, "COMPANY_CD", fv_Company);
        	this.ds_search.setColumn(0, "DATE", date);
        	this.ds_search.setColumn(0, "DATA_YN", "A");

        	if (fv_area != null && fv_area != "")
        		this.ds_search.setColumn(0, "AREA", fv_area);
        	if (fv_location != null && fv_location != "")
        		this.ds_search.setColumn(0, "LOCATION", fv_location);

        	// 검색 조건 콤보박스 쿼리로 세팅하기
        	const comboDsParamArr = [
        			{outDsName : "ds_area", sqlId : "NUB_COMMON.NUB_COMMON_DS_AREA_S", param : this.ds_search, bEmptyRow : true}
        		,	{outDsName : "ds_location", sqlId : "NUB_COMMON.NUB_COMMON_DS_LOCATION_S", param : this.ds_search, bEmptyRow : true}
        	];
        	this.gfn_setComboDs(obj, comboDsParamArr);

        	// 층, 생활실 값 여부에 따라 검색 하기
        	if (fv_area != null && fv_area != "" && fv_location != null && fv_location != "")
        		this.fn_search();
        	else if (fv_area != null && fv_area != "")
        		this.fn_search();
        	else
        		this.fn_searchAll();
        };

        // 디바이스 버튼
        this.NUB_RESIDENT_POP_ondevicebuttonup = function(obj,e)
        {
        	// 뒤로가기 버튼
        	if (e.button == 2)
        	{
        		this.close();
        	}
        };

        // 검색 전
        this.fn_search_pre = function()
        {
        	// 입소자 선택 버튼 모두 제거
        	for (let i = this.div_pop_main.form.div_resident.form.components.length - 1; i >= 0; i--)
        	{
        		const rmBtn = this.div_pop_main.form.div_resident.removeChild(this.div_pop_main.form.div_resident.form.components[i].id);
        		rmBtn.destroy();
        	}
        };

        // 검색
        this.fn_search = function()
        {
        	this.fn_search_pre();

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_resident=output1";
        	const argument = "method=getList "
        				   + "sqlId='NUB_RESIDENT_PP." + fv_Flag + "_RESIDENT_PP_DS_RESIDENT_S' "

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };

        // 전체 검색
        this.fn_searchAll = function()
        {
        	this.fn_search_pre();

        	const svcId = "searchAll";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_resident=output1";
        	const argument = "method=getList "
        				   + "sqlId='NUB_RESIDENT_PP." + fv_Flag + "_RESIDENT_PP_DS_RESIDENT_S' "
        				   + "COMPANY_CD=" + fv_Company + " "
        				   + "DATE=" + date + " ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };

        // 콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			this.fn_resident_select();
        		}
        		else if (strSvcID == "searchAll")
        		{
        			this.fn_resident_select();
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        // 입소자 선택 버튼 생성
        this.fn_resident_select = function()
        {
        	let top = 20;
        	const width = 140;
        	const height = 50;
        	const hgap = 20;		// 가로간격
        	let vgap = 0;		// 세로간격
        	let left = 40;

        	//trace("dataset rowcount : " + this.ds_resident.rowcount);
        	for (let j = 0; j < this.ds_resident.rowcount; j++)
        	{
        		const staId = "sta_btnName" + j;
        		const aCode = this.ds_resident.getColumn(j, "AREA"); 		// 선택한 입소자 층코드
        		const lCode = this.ds_resident.getColumn(j, "LOCATION"); 	// 선택한 입소자 호실코드
        		const btnName = this.ds_resident.getColumn(j, "NAME");		// 버튼 성명
        		//const btnId = "btn_name" + j;
        		const btnId = this.ds_resident.getColumn(j, "RES_ID");		// 버튼 ID
        		const dataYn = this.ds_resident.getColumn(j, "DATA_YN");
        		//trace("manager left : " + left);
        		if (left > 450) // left 450 초과시 줄바꿈
        		{
        			left = 40;
        			vgap = 20;
        			top = top + height + vgap;
        		}else
        		{
        			left = left + (j == 0 ? 0 : width) + (j == 0 ? 0 : hgap);
        		}

        		//버튼 생성
        		this.fn_makeButton2(staId, btnId, btnName, left, top, width, height, dataYn, aCode, lCode);
        	}
        	vgap = 50;
        	top = top + vgap;


        	const objDummy = new Div();
        	objDummy.init("div_dummy", 50, top + 50, "80%", 5);
        	this.div_pop_main.form.div_resident.addChild("div_dummy", objDummy);
        	objDummy.show();

        	this.div_pop_main.form.div_resident.form.resetScroll();
        };

        // 입소자선택 - 입소자 버튼 생성
        this.fn_makeButton2 = function(btnId, id, name, left, top, width, height, data, aCode, lCode)
        {
        	const objButton = new Button();
        	objButton.init(btnId, left, top, width, height);
        	objButton.set_text(name + " (" + data + ")");
        	objButton.set_cssclass("btn_tSelectRoom");
        	/*objButton.set_background("#cccccc");
        	objButton.set_textAlign("center");
        	objButton.set_verticalAlign("middle");*/
        	objButton._aCode = aCode;
        	objButton._lCode = lCode;
        	objButton._idCode = id;
        	objButton._idName = name;
        	objButton.addEventHandler("onclick", this.btn_select_onclick, this);

        	this.div_pop_main.form.div_resident.addChild(btnId, objButton);

        	objButton.show();
        };

        // 입소자 버튼 선택 이벤트
        this.btn_select_onclick = function(obj,e)
        {
        	this.ds_return.clearData();
        	this.ds_return.addRow();
        	this.ds_return.setColumn(0, "RES_ID", obj._idCode);
        	this.ds_return.setColumn(0, "AREA", obj._aCode);
        	this.ds_return.setColumn(0, "LOCATION", obj._lCode);
        	//this.ds_return.setColumn(0, "NAME", obj._idName);

        	this.close(this.ds_return.saveXML());
        };

        // 조회 버튼
        this.div_pop_main_btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        // 전체 조회 버튼
        this.div_pop_main_btn_all_search_onclick = function(obj,e)
        {
        	this.fn_searchAll();
        };

        // 층 선택 콤보 체인지이벤트
        this.cmb_area_onitemchanged = function(obj, e)
        {
        	const cmbDsParam = [{outDsName : "ds_location", sqlId : "NUB_COMMON.NUB_COMMON_DS_LOCATION_S", param : this.ds_search, bEmptyRow : true}];

        	if(Sct.Util.isEmpty(e.postvalue)) { // 빈값 선택시 데이터셋 클리어 및 LOCATION, RES_ID 빈값 처리
        		this.ds_location.clear();
        		this.ds_resident.clear();
        		this.ds_search.setColumn(0, "LOCATION", "");
        		this.ds_search.setColumn(0, "RES_ID", "");
        	}else{ // 층에 해당하는 생활실 조회
        		this.ds_location.clear();
        		this.ds_resident.clear();
        		this.ds_search.setColumn(0, "LOCATION", "");
        		this.ds_search.setColumn(0, "RES_ID", "");
        		this.gfn_setComboDs(this, cmbDsParam);
        	}
        };

        // X 버튼 (닫기)
        this.div_pop_main_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.formClick,this);
            this.addEventHandler("ondevicebuttonup",this.NUB_RESIDENT_POP_ondevicebuttonup,this);
            this.addEventHandler("onload",this.NUB_RESIDENT_POP_onload,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.div_pop_main.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.btn_search.addEventHandler("onclick",this.div_pop_main_btn_search_onclick,this);
            this.div_pop_main.form.btn_all_search.addEventHandler("onclick",this.div_pop_main_btn_all_search_onclick,this);
            this.div_pop_main.form.cmb_area.addEventHandler("onitemchanged",this.cmb_area_onitemchanged,this);
            this.div_pop_main.form.btn_close.addEventHandler("onclick",this.div_pop_main_btn_close_onclick,this);
            this.sta_popTitle.addEventHandler("onclick",this.formClick,this);
        };
        this.loadIncludeScript("NUB_RESIDENT_POP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
