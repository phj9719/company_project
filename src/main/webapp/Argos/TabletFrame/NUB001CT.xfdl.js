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
            this.set_titletext("호실 입소자 선택");
            this.set_background("#f4f9fc");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_resident", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ARE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_TP\" type=\"STRING\" size=\"256\"/><Column id=\"UES_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_menuTitle","2.5%","20",null,"50","3.5%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("호실/입소자 선택");
            obj.set_cssclass("sta_tMenuTitle");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_room_select","2.5%","92",null,null,"2.50%","4%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("50");
            obj.set_tabbuttonwidth("150");
            obj.set_showextrabutton("false");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage0",this.tab_room_select);
            obj.set_text("호실 선택");
            this.tab_room_select.addChild(obj.name, obj);

            obj = new Div("div_room","2%","3%",null,null,"2%","3%",null,null,null,null,this.tab_room_select.Tabpage0.form);
            obj.set_taborder("0");
            this.tab_room_select.Tabpage0.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_room_select);
            obj.set_text("입소자 선택");
            this.tab_room_select.addChild(obj.name, obj);

            obj = new Div("div_resident","2%","3%",null,null,"2%","3%",null,null,null,null,this.tab_room_select.Tabpage1.form);
            obj.set_taborder("0");
            this.tab_room_select.Tabpage1.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",1280,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB001CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB001CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB001CT.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB001CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUB001CT
         * 화면명   	: 호실/입소자 선택
         * 화면설명 	: 호실이나 입소자를 선택하여
        				  호실현황에서 선택한 호실(입소자가 속한) 현황을
        				  보여준다.
         * 작성일    	: ?
         * 작성자   	: ?
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2021-07-21		박한준		1차수정
         ***********************************************************************
         ***********************************************************************
         */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = "";
        this.fv_currentGrid = "";
        this.fv_Company = nexacro.getApplication().gv_company;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e);

        	this.fn_search();

        	this.fn_room_select(); // 호실 선택

        	this.fn_resident_select(); // 입소자 선택
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_area=output1 ds_resident=output2";
        	const argument = "method=getList "
        				   + "sqlId='NUB001CT.NUB001CT_DS_AREA_S NUB001CT.NUB001CT_DS_RESIDENT_S' "
        				   + "COMPANY_CD=" + this.fv_Company + " ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false, false);
        };

        // 생활실 조회
        this.fn_search_room = function(aCode)
        {
        	//var areCd = this.ds_area.getColumn(this.ds_area.rowposition, "ARE_CD");
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_location=output1";
        	const argument = "method=getList "
        				   + "sqlId='NUB001CT.NUB001CT_DS_LOCATION_S' "
        				   + "COMPANY_CD=" + this.fv_Company + " "
        				   + "ARE_CD=" + aCode + " ";
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

        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };
        /***********************************************************************
         * User Functions
         ***********************************************************************/
        //
        this.fn_room_select = function()
        {
        	let top = 20;
        	let width = 140;
        	let height = 50;
        	let hgap = 20;		// 가로간격
        	let vgap = 0;		// 세로간격

        	for(let i = 0; i < this.ds_area.rowcount; i++)
        	{
        		let left = 30;

        		// 층 표시
        		const staId = "sta_loc" + i;
        		const aCode = this.ds_area.getColumn(i, "ARE_CD");
        		const aName = this.ds_area.getColumn(i, "ARE_NM");
        		const objSize = nexacro.getTextSize(aName, "normal 700 22pt/normal 'Noto Sans KR'");
        		const objaa = Sct.Util.appendComma(objSize.nx, 0);
        		const staWidth = parseInt(objaa) + 20;
        		vgap = 10;
        		top = top + (i == 0 ? 0 : height) + (i == 0 ? 0 : vgap);
        		this.fn_makeStatic(staId, aName, left, top, staWidth, height);

        		// 구분선 표시
        		top = top + height + vgap;
        		const divId = "div_line" + i;
        		this.fn_makeDiv(divId, top);

        		// 생활실 선택 버튼 생성
        		this.fn_search_room(aCode);
        		vgap = 25;
        		top = top + vgap;
        		for(let j = 0; j < this.ds_location.rowcount; j++)
        		{
        			const btnName = this.ds_location.getColumn(j, "LOC_NM");
        			const btnId = "btn_loc" + i + "_room_" + j;
        			const lCode = this.ds_location.getColumn(j, "LOC_CD");
        			if(left > 900)
        			{
        				left = 30;
        				vgap = 20;
        				top = top + height + vgap;
        			}else
        			{
        				left = left + (j == 0 ? 0 : width) + (j == 0 ? 0 : hgap);
        			}
        			//this.fn_makeButton(btnId, btnName, staName, left, top, width, height);
        			this.fn_makeButton(btnId, btnName, aCode, aName, lCode, btnName, left, top, width, height);
        		}
        		vgap = 50;
        		top = top + vgap;
        	}

        	const objDummy = new Div();
        	objDummy.init("div_dummy", 50, top + 50, "95%", 5);
        	this.tab_room_select.Tabpage0.form.div_room.addChild("div_dummy", objDummy);
        	objDummy.show();

        	this.tab_room_select.Tabpage0.form.div_room.form.resetScroll();
        };

        // 입소자 선택 버튼 생성
        this.fn_resident_select = function()
        {
        	let top = 20;
        	let width = 140;
        	let height = 50;
        	let hgap = 20;		// 가로간격
        	let vgap = 0;		// 세로간격
        	let left = 30;

        	for(let j = 0; j < this.ds_resident.rowcount; j++)
        	{
        		const staId = "sta_name" + j;
        		const aCode = this.ds_resident.getColumn(j, "AREA"); 		// 선택한 입소자 층코드
        		const aName = this.ds_resident.getColumn(j, "AREA_NM"); 	// 선택한 입소자 층명
        		const lCode = this.ds_resident.getColumn(j, "LOCATION"); 	// 선택한 입소자 호실코드
        		const lName = this.ds_resident.getColumn(j, "LOCATION_NM"); // 선택한 입소자 호실명
        		const btnName = this.ds_resident.getColumn(j, "NAME");		// 버튼 성명
        		//const btnId = "btn_name" + j;
        		const btnId = this.ds_resident.getColumn(j, "RES_ID");		// 버튼 ID

        		if(left > 900) // left 900 초과시 줄바꿈
        		{
        			left = 30;
        			vgap = 20;
        			top = top + height + vgap;
        		}else
        		{
        			left = left + (j == 0 ? 0 : width) + (j == 0 ? 0 : hgap);
        		}

        		//버튼 생성
        		this.fn_makeButton2(btnId, btnName, aCode, aName, lCode, lName, left, top, width, height);
        	}
        	vgap = 50;
        	top = top + vgap;


        	const objDummy = new Div();
        	objDummy.init("div_dummy", 50, top + 50, "95%", 5);
        	this.tab_room_select.Tabpage1.form.div_resident.addChild("div_dummy", objDummy);
        	objDummy.show();

        	this.tab_room_select.Tabpage1.form.div_resident.form.resetScroll();
        };

        // 층 스태틱 생성
        this.fn_makeStatic = function(id, name, left, top, width, height)
        {
        	const objSta = new Static();
        	objSta.init(id, left, top, width, height);
        	objSta.set_text(name);
        	objSta.set_color("#4594cd");
        	objSta.set_font("normal 700 22pt/normal 'Noto Sans KR'");
        	objSta.set_textAlign("left");
        	objSta.set_verticalAlign("middle");

        	this.tab_room_select.Tabpage0.form.div_room.addChild(id, objSta);

        	objSta.show();
        };

        // 구분선 표시
        this.fn_makeDiv = function(id, top)
        {
        	const left = 30;
        	const width = "95%";
        	const height = 3;
        	const objDiv = new Div();
        	objDiv.init(id, left, top, width, height);
        	objDiv.set_background("#47afe1");

        	this.tab_room_select.Tabpage0.form.div_room.addChild(id, objDiv);

        	objDiv.show();
        };

        // 호실선택 - 생활실 버튼 생성
        this.fn_makeButton = function(id, name,  aCode, aName, lCode, lName, left, top, width, height)
        {
        	const objButton = new Button();
        	objButton.init(id, left, top, width, height);
        	objButton.set_text(name);
        	objButton.set_cssclass("btn_tSelectRoom");
        	/*objButton.set_background("#cccccc");
        	objButton.set_textAlign("center");
        	objButton.set_verticalAlign("middle");*/
        	objButton._aCode = aCode;
        	objButton._aName = aName;
        	objButton._lCode = lCode;
        	objButton._lName = lName;
        	objButton.addEventHandler("onclick", this.btn_select_onclick, this);

        	this.tab_room_select.Tabpage0.form.div_room.addChild(id, objButton);
        	//this.tab_room_select.Tabpage1.form.div_resident.addChild(id, objButton);

        	objButton.show();
        };

        // 입소자선택 - 입소자 버튼 생성
        this.fn_makeButton2 = function(id, name,  aCode, aName, lCode, lName, left, top, width, height)
        {
        	const objButton = new Button();
        	objButton.init(id, left, top, width, height);
        	objButton.set_text(name);
        	objButton.set_cssclass("btn_tSelectRoom");
        	/*objButton.set_background("#cccccc");
        	objButton.set_textAlign("center");
        	objButton.set_verticalAlign("middle");*/
        	objButton._aCode = aCode;
        	objButton._aName = aName;
        	objButton._lCode = lCode;
        	objButton._lName = lName;
        	objButton._idCode = id;
        	objButton._idName = name;
        	objButton.addEventHandler("onclick", this.btn_select_onclick, this);

        	this.tab_room_select.Tabpage1.form.div_resident.addChild(id, objButton);

        	objButton.show();
        };
         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.btn_select_onclick = function(obj,e)
        {
        	nexacro.getApplication().av_mainMenu.set_formurl("TabletFrame::tFrameMainMenu.xfdl");
        	nexacro.getApplication().av_subMenu.set_formurl("TabletFrame::tFrameSubMenu.xfdl");
        	nexacro.getApplication().av_vFrameSet00.set_separatesize(nexacro.getApplication().av_mainModeSize);
        	nexacro.getApplication().gds_taCurRes.setColumn(0, "AREA", obj._aCode);
        	nexacro.getApplication().gds_taCurRes.setColumn(0, "LOCATION", obj._lCode);
        	nexacro.getApplication().gds_taCurRes.setColumn(0, "RES_ID", obj._idCode);
        	nexacro.getApplication().gv_curAreCode = obj._aCode;
        	nexacro.getApplication().gv_curAreName = obj._aName;
        	nexacro.getApplication().gv_curLocCode = obj._lCode;
        	nexacro.getApplication().gv_curLocName = obj._lName;

        };

        this.form_ondevicebuttonup = function(obj,e)
        {
        	if(e.button == 2)
        	{
        		const param = {};
        		//this.makeStandardObject();
        		//this.standardPlugin.callMethod("APPEXIT", param);

        		Sct.tPopup(this, "NUB_APPEXIT_POP", 350, 350, param, "TabletPOP::NUB_APPEXIT_POP.xfdl", "fn_popCallback");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("ondevicebuttonup",this.form_ondevicebuttonup,this);
            this.sta_menuTitle.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("NUB001CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
