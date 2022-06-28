(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUB_MANAGER_POP");
            this.set_titletext("처리자 조회 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_manager", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_pop_main","0","0","800","600",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#FFFFFF");
            obj.set_borderRadius("20px");
            obj.set_visible("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_manager","50","230",null,null,"5.00%","5%",null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Edit("edt_name","329","165","205","50",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("이름 입력");
            obj.set_font("normal 700 20pt/normal \"Noto Sans KR\"");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_search","550","165","160","50",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_tDefaultSkyblue2");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_all","63","72","80","50",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("4");
            obj.set_text("전체");
            obj.set_cssclass("btn_tDefaultSkyblue3");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_nur","148","72","150","50",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("5");
            obj.set_text("간호(조무)사");
            obj.set_cssclass("btn_tDefaultSkyblue3");
            obj.set_background("");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_care","303","72","140","50",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("6");
            obj.set_text("요양보호사");
            obj.set_cssclass("btn_tDefaultSkyblue3");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_social","448","72","140","50",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("7");
            obj.set_text("사회복지사");
            obj.set_cssclass("btn_tDefaultSkyblue3");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_etc","593","72","140","50",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("8");
            obj.set_text("그 외(기타)");
            obj.set_cssclass("btn_tDefaultSkyblue3");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Div("Div00_00","5.00%","142",null,"3","5.00%",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("#47afe1");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"4.33%","24","24","6%",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("9");
            obj.set_background("url(\'theme://images/ico_popclose.png\') 0px 0px");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_popTitle","330","16","150","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("처리자 조회");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB_MANAGER_POP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB_MANAGER_POP.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB_MANAGER_POP.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB_MANAGER_POP.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;

        var fv_Company = this.parent.COMPANY_CD;

        // 온로드
        this.NUB_MANAGER_POP_onload = function(obj,e)
        {
        	// 온로드시 전체 조회
        	this.ds_search.setColumn(0, "COMPANY_CD", fv_Company);
        	this.div_pop_main.form.btn_all.click();
        };

        // 디바이스 버튼
        this.NUB_MANAGER_POP_ondevicebuttonup = function(obj,e)
        {
        	// 뒤로가기 버튼
        	if (e.button == 2)
        	{
        		this.close();
        	}
        };

        // 처리자 조회 전
        this.fn_search_pre = function()
        {
        	// 처리자 선택 버튼 모두 제거
        	for (let i = this.div_pop_main.form.div_manager.form.components.length - 1; i >= 0; i--)
        	{
        		const rmBtn = this.div_pop_main.form.div_manager.removeChild(this.div_pop_main.form.div_manager.form.components[i].id);
        		rmBtn.destroy();
        	}
        };

        // 처리자 조회
        this.fn_search = function()
        {
        	this.fn_search_pre();

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_manager=output1";
        	const argument = "method=getList "
        				   + "sqlId='NUB_MANAGER_PP.NUB_MANAGER_PP_DS_MANAGER_S' ";

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
        			this.fn_manager_select();
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        // 처리자 선택 버튼 생성
        this.fn_manager_select = function()
        {
        	let top = 20;
        	const width = 140;
        	const height = 50;
        	const hgap = 20;		// 가로간격
        	let vgap = 0;		// 세로간격
        	let left = 40;

        	for (let j = 0; j < this.ds_manager.rowcount; j++)
        	{
        		const staId = "sta_btnName" + j;
        		const btnName = this.ds_manager.getColumn(j, "USER_NM_KOR");		// 버튼 성명
        		const btnId = this.ds_manager.getColumn(j, "USER_ID");		// 버튼 ID
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
        		this.fn_makeButton2(staId, btnId, btnName, left, top, width, height);
        	}
        	vgap = 50;
        	top = top + vgap;


        	const objDummy = new Div();
        	objDummy.init("div_dummy", 50, top + 50, "80%", 5);
        	this.div_pop_main.form.div_manager.addChild("div_dummy", objDummy);
        	objDummy.show();

        	this.div_pop_main.form.div_manager.form.resetScroll();
        };

        // 처리자선택 - 처리자 버튼 생성
        this.fn_makeButton2 = function(btnId, id, name, left, top, width, height)
        {
        	const objButton = new Button();
        	objButton.init(btnId, left, top, width, height);
        	objButton.set_text(name);
        	objButton.set_cssclass("btn_tSelectRoom");
        	objButton._idCode = id;
        	objButton._idName = name;
        	objButton.addEventHandler("onclick", this.btn_select_onclick, this);

        	this.div_pop_main.form.div_manager.addChild(btnId, objButton);

        	objButton.show();
        };

        // 처리자 버튼 선택 이벤트
        this.btn_select_onclick = function(obj,e)
        {
        	this.ds_return.clearData();
        	this.ds_return.addRow();
        	this.ds_return.setColumn(0, "USER_ID", obj._idCode);
        	this.ds_return.setColumn(0, "NAME", obj._idName);

        	this.close(this.ds_return.saveXML());
        };

        // 조회 버튼
        this.div_pop_main_btn_search_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0, "RANK_CD", "");

        	this.fn_search();
        };

        // 상단 버튼
        this.rank_search = function(obj,e)
        {
        	// 상단 버튼 비선택 상태로 만들기
        	this.fn_rankNonSelect();

        	if (obj.id == "btn_nur")
        	{
        		this.ds_search.setColumn(0, "RANK_CD", "7");
        		this.fn_searchShow(false);
        	}
        	else if (obj.id == "btn_care")
        	{
        		this.ds_search.setColumn(0, "RANK_CD", "8");
        		this.fn_searchShow(false);
        	}
        	else if (obj.id == "btn_social")
        	{
        		this.ds_search.setColumn(0, "RANK_CD", "4");
        		this.fn_searchShow(false);
        	}
        	else if (obj.id == "btn_etc")
        	{
        		this.ds_search.setColumn(0, "RANK_CD", "O");
        		this.fn_searchShow(false);
        	}
        	else if (obj.id == "btn_all")
        	{
        		this.ds_search.setColumn(0, "RANK_CD", "");
        		this.fn_searchShow(true);
        	}

        	// 선택된 버튼 색 바꾸기
        	obj.set_background("#47afe1");
        	obj.set_color("#ffffff");

        	this.ds_search.setColumn(0, "NAME", "");

        	this.fn_search();
        };

        // X 버튼 (닫기)
        this.div_pop_main_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        // 상단 버튼 비선택 상태로 만들기
        this.fn_rankNonSelect = function()
        {
        	const rank = [
        			this.div_pop_main.form.btn_all
        		,	this.div_pop_main.form.btn_nur
        		,	this.div_pop_main.form.btn_care
        		,	this.div_pop_main.form.btn_social
        		,	this.div_pop_main.form.btn_etc
        	];

        	for (let i = 0; i < rank.length; i++)
        	{
        		rank[i].set_background("transparent");
        		rank[i].set_color("#777777");
        	}
        };

        // 검색 영역 보이기/숨기기 flag값 : true, false
        this.fn_searchShow = function(flag)
        {
        	if (flag)
        	{
        		this.div_pop_main.form.edt_name.set_visible(true);
        		this.div_pop_main.form.btn_search.set_visible(true);
        		this.div_pop_main.form.div_manager.set_top(230);
        	}
        	else
        	{
        		this.div_pop_main.form.edt_name.set_visible(false);
        		this.div_pop_main.form.btn_search.set_visible(false);
        		this.div_pop_main.form.div_manager.set_top(165);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NUB_MANAGER_POP_onload,this);
            this.addEventHandler("onclick",this.formClick,this);
            this.addEventHandler("ondevicebuttonup",this.NUB_MANAGER_POP_ondevicebuttonup,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.div_pop_main.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.btn_search.addEventHandler("onclick",this.div_pop_main_btn_search_onclick,this);
            this.div_pop_main.form.btn_all.addEventHandler("onclick",this.rank_search,this);
            this.div_pop_main.form.btn_nur.addEventHandler("onclick",this.rank_search,this);
            this.div_pop_main.form.btn_care.addEventHandler("onclick",this.rank_search,this);
            this.div_pop_main.form.btn_social.addEventHandler("onclick",this.rank_search,this);
            this.div_pop_main.form.btn_etc.addEventHandler("onclick",this.rank_search,this);
            this.div_pop_main.form.btn_close.addEventHandler("onclick",this.div_pop_main_btn_close_onclick,this);
            this.sta_popTitle.addEventHandler("onclick",this.formClick,this);
        };
        this.loadIncludeScript("NUB_MANAGER_POP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
