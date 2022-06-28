(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUC001CT");
            this.set_titletext("이용약관 개인정보취급방침 동의");
            if (Form == this.constructor)
            {
                this._setFormPosition(460,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOS_TP\" type=\"STRING\" size=\"256\"/><Column id=\"TOS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TOS_SUB_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TOS_SUB_DATA_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TOS_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CELLPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_SYS_FAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_agree",null,"33","120","43","35",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("동의하기");
            obj.set_cssclass("btn_basic");
            this.addChild(obj.name, obj);

            obj = new Div("div_popMain","25","90",null,null,"25","25",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Div("div_terms","10","20",null,null,"10","20",null,null,null,null,this.div_popMain.form);
            obj.set_taborder("0");
            this.div_popMain.addChild(obj.name, obj);

            obj = new Static("sta_warning","20","0",null,"69","20",null,null,null,null,null,this.div_popMain.form.div_terms.form);
            obj.set_taborder("0");
            obj.set_text("※스마트 안심요양원 이용을 위해 서비스이용약관 및 개인정보 취급방침에 동의해 주세요.(동의하지 않으실 경우 서비스 이용이 불가합니다.)");
            obj.set_wordWrap("char");
            obj.set_cssclass("sta_pop_title");
            obj.set_font("normal 12pt/normal \'Noto Sans KR\'");
            this.div_popMain.form.div_terms.addChild(obj.name, obj);

            obj = new Static("sta_main","20","74",null,"36","20",null,null,null,null,null,this.div_popMain.form.div_terms.form);
            obj.set_taborder("1");
            obj.set_text("서비스이용약관 및 개인정보취급방침");
            obj.set_font("normal 900 16pt/normal \"Noto Sans KR\"");
            this.div_popMain.form.div_terms.addChild(obj.name, obj);

            obj = new ImageViewer("imv_close","27","25","68","58",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'theme://images/btn_close.png\')");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",460,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUC001CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUC001CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUC001CT.xfdl","lib::mpgm_com.xjs");
        this.registerScript("NUC001CT.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: NUC001CT
         * 화면명   	: 이용약관 개인정보취급방침 동의(팝업)
         * 화면설명 	: 모바일 로그인시 이용약관 및 개인정보취급방침
        				  동의를 요구하는 팝업이다.
         * 작성일   	: 2021-09-02
         * 작성자   	: 조기종
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *
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


        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.NUC001CT_onload = function(obj,e)
        {
        	//obj.addEventHandler("onkeyup", this.fn_openDebugPopup, this);

        	// 배경을 투명하게 하기 위하여 childFrame의 배경을 없앤 cssclass적용
        	//this.getOwnerFrame().set_cssclass("mpop");

        	// 업데이트를 위해 gv_curWinKey에 화면아이디 세팅
        	nexacro.getApplication().gv_curWinKey = "NUC001CT";

        	// 업데이트를 위한 데이터셋 복사
        	this.ds_input.copyData(nexacro.getApplication().gds_mUserInfo);

        	this.fn_search();
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        // 이용약관 및 개인정보취급방침 내용 조회
        this.fn_search = function()
        {
        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "";
        	const outDatasets = "ds_list=output1";
        	let argument = "method=getList ";
        		argument += "sqlId=NUC001CT.NUC001CT_DS_LIST_S ";
        		argument += "COMPANY_CD=" + nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD") + " ";

        	const callbackFunc = "fn_callback";
        	this.gfn_transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        // 동의하기
        this.fn_update = function()
        {
         	const svcId = "update";
        	const inDs = "ds_input";

        	this.fn_save_com(svcId, inDs);
        };

        // 콜백
        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			this.fn_drawData();
        			this.div_popMain.form.div_terms.form.resetScroll();
        		}
        		else if(strSvcID == "update")
        		{
        			nexacro.getApplication().av_loginFrame.set_formurl("MobileFrame::mAgreeSuccess.xfdl");
        			nexacro.getApplication().av_topFrame.form.sta_top.set_text("회원가입");
        			this.close();
        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 이용약관 및 개인정보취급방침 내용 그리기
        this.fn_drawData = function()
        {
        	const left = 20;
        	const right = 20;
        	let top = 150;
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
        		font = "normal bold 15pt/normal 'Noto Sans KR'";
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
        		font = "normal bold 15pt/normal 'Noto Sans KR'";
        		objSize = nexacro.getTextSize(text, font, 340, "char");
        		align = "left";
        		color = "#000000";
        		top = top + height + gap;
        		height = objSize.ny + gap;
        		this.fn_makeStatic(staId, text, left, top, height, right, font, align, color);

        		// 내용
        		staId = "sta_data" + i;
        		text = this.ds_list.getColumn(i, "TOS_DATA");
        		font = "normal 500 12pt/normal 'Noto Sans KR'";
        		objSize = nexacro.getTextSize(text, font, 340, "char");
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

        	this.div_popMain.form.div_terms.addChild(id, objStatic);

        	objStatic.show();
        };

        // 동의하기 버튼 클릭
        this.btn_agree_onclick = function(obj,e)
        {
        	// 업데이트를 위한 데이터셋 상태 바꾸기
        	this.ds_input.set_updatecontrol(false);
        	this.ds_input.setRowType(this.ds_input.rowposition, Dataset.ROWTYPE_UPDATE);
        	this.ds_input.set_updatecontrol(true);
        	this.fn_update();
        };

        // 취소
        this.imv_close_onclick = function(obj,e)
        {
        	nexacro.getApplication().av_loginFrame.set_formurl("MobileFrame::mAgreeFail.xfdl");
        	nexacro.getApplication().av_topFrame.form.sta_top.set_text("회원가입");
        	this.close();
        };


        this.NUC001CT_ondevicebuttonup = function(obj,e)
        {
        	if(e.button == 2)
        	{
        		nexacro.getApplication().av_loginFrame.set_formurl("MobileFrame::mAgreeFail.xfdl");
        		nexacro.getApplication().av_topFrame.form.sta_top.set_text("회원가입");
        		this.close();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NUC001CT_onload,this);
            this.addEventHandler("ondevicebuttonup",this.NUC001CT_ondevicebuttonup,this);
            this.btn_agree.addEventHandler("onclick",this.btn_agree_onclick,this);
            this.imv_close.addEventHandler("onclick",this.imv_close_onclick,this);
        };
        this.loadIncludeScript("NUC001CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
