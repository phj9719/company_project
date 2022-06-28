(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAY00110");
            this.set_titletext("1-10 수급자 상태설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"date_from\" type=\"STRING\" size=\"256\"/><Column id=\"date_to\" type=\"STRING\" size=\"256\"/><Column id=\"row\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_age\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"meal_type\" type=\"STRING\" size=\"256\"/><Column id=\"기능장애\" type=\"STRING\" size=\"256\"/><Column id=\"변의장애\" type=\"STRING\" size=\"256\"/><Column id=\"뇨의장애\" type=\"STRING\" size=\"256\"/><Column id=\"보조기구\" type=\"STRING\" size=\"256\"/><Column id=\"투약전달시간\" type=\"STRING\" size=\"256\"/><Column id=\"신장\" type=\"STRING\" size=\"256\"/><Column id=\"체중\" type=\"STRING\" size=\"256\"/><Column id=\"혈액형\" type=\"STRING\" size=\"256\"/><Column id=\"상급침실\" type=\"STRING\" size=\"256\"/><Column id=\"종교\" type=\"STRING\" size=\"256\"/><Column id=\"조회\" type=\"STRING\" size=\"256\"/><Column id=\"바이탈\" type=\"STRING\" size=\"256\"/><Column id=\"투약관리\" type=\"STRING\" size=\"256\"/><Column id=\"욕창간호\" type=\"STRING\" size=\"256\"/><Column id=\"배설간호\" type=\"STRING\" size=\"256\"/><Column id=\"비위관\" type=\"STRING\" size=\"256\"/><Column id=\"도뇨관\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"sicode\" type=\"STRING\" size=\"256\"/><Column id=\"m_code\" type=\"STRING\" size=\"256\"/><Column id=\"m_group\" type=\"STRING\" size=\"256\"/><Column id=\"m_name\" type=\"STRING\" size=\"256\"/><Column id=\"m_age\" type=\"STRING\" size=\"256\"/><Column id=\"sex_nm\" type=\"STRING\" size=\"256\"/><Column id=\"meal_type\" type=\"STRING\" size=\"256\"/><Column id=\"to_type_06\" type=\"STRING\" size=\"256\"/><Column id=\"기능장애\" type=\"STRING\" size=\"256\"/><Column id=\"변의장애\" type=\"STRING\" size=\"256\"/><Column id=\"뇨의장애\" type=\"STRING\" size=\"256\"/><Column id=\"보조기구\" type=\"STRING\" size=\"256\"/><Column id=\"투약전달시간\" type=\"STRING\" size=\"256\"/><Column id=\"신장\" type=\"STRING\" size=\"256\"/><Column id=\"체중\" type=\"STRING\" size=\"256\"/><Column id=\"혈액형\" type=\"STRING\" size=\"256\"/><Column id=\"상급침실\" type=\"STRING\" size=\"256\"/><Column id=\"종교\" type=\"STRING\" size=\"256\"/><Column id=\"조회\" type=\"STRING\" size=\"256\"/><Column id=\"바이탈\" type=\"STRING\" size=\"256\"/><Column id=\"투약관리\" type=\"STRING\" size=\"256\"/><Column id=\"욕창간호\" type=\"STRING\" size=\"256\"/><Column id=\"배설간호\" type=\"STRING\" size=\"256\"/><Column id=\"비위관\" type=\"STRING\" size=\"256\"/><Column id=\"도뇨관\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_00","0","0","1800","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print","1620","7","180","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_text("수급자 상태현황 리스트");
            obj.set_cssclass("btn_print");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_00","0","7","130","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("수급자 상태설정");
            obj.set_textAlign("left");
            obj.set_cssclass("lb01");
            this.div_00.addChild(obj.name, obj);

            obj = new Div("div_01","0","40","1800","760",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd","0","0","1800","750",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"85\"/><Column size=\"45\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"110\"/><Column size=\"360\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"75\"/><Column size=\"65\"/><Column size=\"115\"/><Column size=\"70\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"그룹\"/><Cell col=\"1\" text=\"수급자명\"/><Cell col=\"2\" text=\"성별\"/><Cell col=\"3\" text=\"식사종류\"/><Cell col=\"4\" text=\"기능장애\"/><Cell col=\"5\" text=\"변의장애\"/><Cell col=\"6\" text=\"뇨의장애\"/><Cell col=\"7\" text=\"보조기구\"/><Cell col=\"8\" text=\"투약전달시간\"/><Cell col=\"9\" text=\"신장\"/><Cell col=\"10\" text=\"체중\"/><Cell col=\"11\" text=\"혈액형\"/><Cell col=\"12\" text=\"상급침실\"/><Cell col=\"13\" text=\"종교\"/><Cell col=\"14\" text=\"조회\"/><Cell col=\"15\" text=\"바이탈\"/><Cell col=\"16\" text=\"투약관리\"/><Cell col=\"17\" text=\"욕창간호\"/><Cell col=\"18\" text=\"배설간호\"/><Cell col=\"19\" text=\"비위관\"/><Cell col=\"20\" text=\"도뇨관\"/></Band><Band id=\"body\"><Cell text=\"bind:m_group\" font=\"normal bold 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"1\" text=\"bind:m_name\" textAlign=\"left\" font=\"normal bold 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"2\" text=\"bind:sex_nm\"/><Cell col=\"3\" text=\"bind:meal_type\" font=\"normal bold 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"4\" text=\"bind:기능장애\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:변의장애\"/><Cell col=\"6\" text=\"bind:뇨의장애\"/><Cell col=\"7\" text=\"bind:보조기구\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:투약전달시간\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:신장\" font=\"normal bold 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"10\" text=\"bind:체중\" font=\"normal bold 10pt/normal &quot;Noto Sans KR&quot;\"/><Cell col=\"11\" text=\"bind:혈액형\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:상급침실\"/><Cell col=\"13\" text=\"bind:종교\" textAlign=\"left\"/><Cell col=\"14\" textAlign=\"center\" expandshow=\"show\" expandimage=\"url('theme://images/ico_search.png')\" expandsize=\"70\" text=\"bind:조회\"/><Cell col=\"15\" text=\"bind:바이탈\"/><Cell col=\"16\" text=\"bind:투약관리\"/><Cell col=\"17\" text=\"bind:욕창간호\"/><Cell col=\"18\" text=\"bind:배설간호\"/><Cell col=\"19\" text=\"bind:비위관\"/><Cell col=\"20\" text=\"bind:도뇨관\"/></Band></Format></Formats>");
            this.div_01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DAY00110.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("DAY00110.xfdl","lib::pgm_com.xjs");
        this.registerScript("DAY00110.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: DAY00110
         * 화면명   	: 1-10 수급자 상태설정
         * 화면설명 	:
         * 작성일   	: 2022-06-10
         * 작성자   	: 이성탄
         * 수정이력 	:
         ***********************************************************************
         ***********************************************************************
         *     수정일     	수정자   	내용
         *
         ***********************************************************************/
         /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;

        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = this.ds_list;
        this.fv_currentGrid = this.div_01.form.grd;
        const fv_sicode = nexacro.getApplication().gds_userInfo.getColumn(0, "sicode");
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
         //온로드
        this.form_onload = function(obj,e)
        {
        		this.form_onload_com(obj,e,false);

        		this.ds_search.setColumn(0, "sicode", fv_sicode);

        		this.fn_setGrid();

        		this.fn_search();

        }


        //그리드 색 구분
        this.fn_setGrid = function()
        {
        	const grdMain = this.div_01.form.grd;

        	const nameIdx = grdMain.getBindCellIndex("body","m_name");
        	const cr_1Idx = grdMain.getBindCellIndex("body","변의장애");
        	const cr_2Idx = grdMain.getBindCellIndex("body","뇨의장애");
        	const cr_3Idx = grdMain.getBindCellIndex("body","보조기구");
        	const roomIdx = grdMain.getBindCellIndex("body","상급침실");

        	const nameCss = "expr:dataset.getColumn(currow,'sex_nm')=='남'?'cellBMan':'cellBWoman'";
        	const cr_1Css = "expr:dataset.getColumn(currow,'변의장애')=='있다'?'RedFontCell':''";
        	const cr_2Css = "expr:dataset.getColumn(currow,'뇨의장애')=='있다'?'RedFontCell':''";
        	const cr_3Css = "expr:dataset.getColumn(currow,'보조기구')==''?'RedFontCell':'RedFontCell'";
        	const roomCss = "expr:dataset.getColumn(currow,'상급침실')=='상급'?'txtbold':''";

        	grdMain.setCellProperty("body", nameIdx, "cssclass", nameCss);
        	grdMain.setCellProperty("body", cr_1Idx, "cssclass", cr_1Css);
        	grdMain.setCellProperty("body", cr_2Idx, "cssclass", cr_2Css);
        	grdMain.setCellProperty("body", cr_3Idx, "cssclass", cr_3Css);
        	grdMain.setCellProperty("body", roomIdx, "cssclass", roomCss);
        }



        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        //this.fn_search_pre = function ()
        //{
        //	// 검색조건 필수 체크 (컴포넌트 tooltiptext 값 넣을 것)
        //	if (!this.gfn_findSnull(this.div_search)) return false;
        //
        //	return true;
        //};

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        				   + "sqlId=DAY00110.DAY00110_DS_LIST_S ";

        	const callbackFunc = "fn_callback";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        }

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if (strSvcID == "search")
        		{
        			this.ds_list.set_rowposition(parseInt(this.ds_search.getColumn(0, "row")));
        		}
        	}
        	else
        	{
        		this.alert(strErrorMsg);
        		return false;
        	}
        };

        /***********************************************************************
         * Popup Functions
         ***********************************************************************/
        //수급자 상태현황 리스트
        this.fn_report = function()
        {
        	let params;
        	const dicompNm = " ";
        	const popupUrl = "DAY_POP::DAY00110_R01.xfdl";
        	const popupName = "";

        	params = {
        		sicode : fv_sicode
        		,date : Sct.Util.today()
        	};

        	this.gfn_openPopup(popupUrl, "", "", dicompNm, popupName, params, "", "");
        }

        //그리드 셀 팝업
        this.div_01.form.grd_oncellclick = function (obj,e)
        {
        	this.ds_search.setColumn(0, "row", e.row);
        	const look = obj.getCellText(-1,e.col);
        	if (look == "조회")
        	{
        		const param = {
        					SICODE : this.ds_list.getColumn(e.row, "sicode")
        				,	M_CODE : this.ds_list.getColumn(e.row, "m_code")
        	}

        	Sct.popup(this, "look", 450, 400, "", param, "DAY_POP::DAY00110_P01.xfdl", "fn_popCallback")
        	}

        };

        //팝업 콜백
        this.fn_popCallback = function (popid, strDs)
        {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_return", strDs);
        	switch(popid)
        	{
        		case "look" : this.fn_search();
        		break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_00.form.btn_print.addEventHandler("onclick",this.fn_report,this);
            this.div_00.form.sta_00.addEventHandler("onclick",this.div_00_sta_00_onclick,this);
            this.div_01.form.grd.addEventHandler("oncellclick",this.div_01.form.grd_oncellclick,this);
        };
        this.loadIncludeScript("DAY00110.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
