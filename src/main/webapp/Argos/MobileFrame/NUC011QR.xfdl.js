(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUC011QR");
            this.set_titletext("이용약관 개인정보취급방침");
            this.set_background("#");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOS_TP\" type=\"STRING\" size=\"256\"/><Column id=\"TOS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TOS_SUB_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TOS_SUB_DATA_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TOS_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_main_title","5.00%","26",null,"60","5.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("스마트안심요양원\r\n서비스이용약관 및 개인정보처리방침");
            obj.set_verticalAlign("top");
            obj.set_cssclass("sta_title");
            obj.set_letterSpacing("-1px");
            obj.set_color("#082c71");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUC011QR.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUC011QR.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUC011QR.xfdl","lib::mpgm_com.xjs");
        this.registerScript("NUC011QR.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUC011QR
         * 화면명   	: 이용약관 개인정보취급방침
         * 화면설명 	: 이용약관 및 개인정보취급방침을 확인하는 화면
         * 작성일    	: 2021-09-02
         * 작성자   	: 조기종
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *
         ***********************************************************************
         ***********************************************************************
         */

        /***********************************************************************
         * Library Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::mpgm_com.xjs"); /*include "lib::mpgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_currentDS = "";
        this.fv_currentGrid = "";
        this.nMoveY;
        this.fv_flag;
        // 서비스 단에서 받는 variable, 초기화 필요함
        this.outvar = "";
        this.fileGroupId = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.NUC011QR_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e);

        	//조회조건
        	this.ds_search.setColumn(0, "COMPANY_CD", nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD"));

        	//조회
        	this.fn_search();
        };

        // 모바일 디바이스 버튼 이벤트
        this.NUC011QR_ondevicebuttonup = function(obj,e)
        {
        	if(e.button == 2)
        	{
        		nexacro.getApplication().av_topFrame.form.btn_back.click();
        	}
        };
        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	return true;
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function ()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	let argument = "method=getList ";
        		argument += "sqlId=NUC011QR.NUC011QR_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			// 조회후 내용 그리기
        			this.fn_drawData();
        			this.resetScroll();
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

         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 이용약관 및 개인정보취급방침 내용 그리기
        this.fn_drawData = function()
        {
        	const left = "5%";
        	const right = "5%";
        	let top = 120;
        	let height;
        	let gap;	// 간격

        	for(let i = 0; i < this.ds_list.rowcount; i++)
        	{
        		let staId;		// static id
        		let text;		// 내용
        		let objSize;	// 내용 사이즈 구하기
        		let font;		// 폰트
        		let align;		// 정렬
        		let color;		// 색

        		// 제목
        		staId = "sta_title" + i;
        		text = this.ds_list.getColumn(i, "TOS_TITLE");
        		font = "normal 700 16pt/normal 'Noto Sans KR'";
        		objSize = nexacro.getTextSize(text, font);
        		align = "center";
        		color = "#082c71";
        		gap = 10;
        		top = top + (i == 0 ? 0 : height) + (i == 0 ? 0 : gap);
        		height = objSize.ny + gap;
        		this.fn_makeStatic(staId, text, left, top, height, right, font, align, color);

        		// 부제목
        		staId = "sta_sub_title" + i;
        		text = this.ds_list.getColumn(i, "TOS_SUB_TITLE");
        		font = "normal 500 12pt/normal 'Noto Sans KR'";
        		objSize = nexacro.getTextSize(text, font);
        		align = "center";
        		color = "#7d7f97";
        		top = top + height + gap;
        		height = objSize.ny + gap;
        		this.fn_makeStatic(staId, text, left, top, height, right, font, align, color);

        		// 보조내용제목
        		staId = "sta_sub_data_title" + i;
        		text = this.ds_list.getColumn(i, "TOS_SUB_DATA_TITLE");
        		font = "normal 700 16pt/normal 'Noto Sans KR'";
        		objSize = nexacro.getTextSize(text, font, 420, "char");
        		align = "left";
        		color = "#000000";
        		top = top + height + gap;
        		height = objSize.ny + gap;
        		this.fn_makeStatic(staId, text, left, top, height, right, font, align, color);

        		// 내용
        		staId = "sta_data" + i;
        		text = this.ds_list.getColumn(i, "TOS_DATA");
        		font = "normal 500 12pt/normal 'Noto Sans KR'";
        		objSize = nexacro.getTextSize(text, font, 420, "char");
        		align = "left";
        		color = "#000000";
        		top = top + height + gap;
        		height = objSize.ny;
        		this.fn_makeStatic(staId, text, left, top, height, right, font, align, color);
        	}
        };

        // 스태틱 생성
        this.fn_makeStatic = function(id, text, left, top, height, right, font, align, color)
        {
        	const objStatic = new Static();
        	objStatic.init(id, left, top, null, height, right, null);
        	objStatic.set_text(text);
        	objStatic.set_color(color);
        	objStatic.set_font(font);
        	objStatic.set_usedecorate(true);
        	objStatic.set_wordWrap("char");
        	objStatic.set_letterSpacing("-1px");
        	objStatic.set_verticalAlign("top");
        	objStatic.set_textAlign(align);

        	this.addChild(id, objStatic);

        	objStatic.show();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("onload",this.NUC011QR_onload,this);
            this.addEventHandler("ondevicebuttonup",this.NUC011QR_ondevicebuttonup,this);
        };
        this.loadIncludeScript("NUC011QR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
