(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("tFrameSubMenu");
            this.set_titletext("SubMenu");
            this.set_background("#ffffff");
            this.set_border("0px none, 0px none, 1px solid #dbdbdb");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tSubMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"INT\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SHOW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEAR_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"PRN_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"APPV_AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_logo","0",null,"100","99",null,"1",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#4594cd");
            obj.set_text("");
            obj.set_border("1px solid transparent");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("logo","18","21","66","59",null,null,null,null,null,null,this.div_logo.form);
            obj.set_taborder("0");
            obj.set_background("url(\'theme://images/logo.png\') no-repeat");
            obj.set_border("1px solid transparent");
            this.div_logo.addChild(obj.name, obj);

            obj = new Div("div_subMenuControl","100",null,null,"99","300","1",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_TF_userInfo",null,null,"300","99","0","1",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_border("1px solid transparent");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv_TF_profile",null,"26.80%","46","46","41",null,null,null,null,null,this.div_TF_userInfo.form);
            obj.set_taborder("0");
            obj.set_borderRadius("50px");
            this.div_TF_userInfo.addChild(obj.name, obj);

            obj = new Static("sta_TF_userNm",null,"48","80","23","107",null,null,null,null,null,this.div_TF_userInfo.form);
            obj.set_taborder("1");
            obj.set_text("김효성");
            obj.set_color("#4594cd");
            obj.set_textAlign("right");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            this.div_TF_userInfo.addChild(obj.name, obj);

            obj = new Static("sta_TF_rankCd",null,"21","140","23","107",null,null,null,null,null,this.div_TF_userInfo.form);
            obj.set_taborder("2");
            obj.set_text("물리치료사님");
            obj.set_color("#5d5d5d");
            obj.set_font("normal 700 16pt/normal \"Noto Sans KR\"");
            obj.set_textAlign("right");
            this.div_TF_userInfo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",1280,100,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("tFrameSubMenu.xfdl","lib::sct_util.xjs");
        this.addIncludeScript("tFrameSubMenu.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("tFrameSubMenu.xfdl","lib::tpgm_com.xjs");
        this.registerScript("tFrameSubMenu.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: tFrameSubMenu
         * 화면명   	: tFrameSubMenu
         * 화면설명 	: 태블릿 위쪽 서브 메뉴
         * 작성일   	: 2021-05-26
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *
         ***********************************************************************
         */

        /***********************************************************************
         * Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/;
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_sBtnArr = new Array();
        this.fv_sMenuIdx = 1;

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.tFrameSubMenu_onload = function(obj,e)
        {
        	//trace("SubMenu Onload");
        	const group = nexacro.getApplication().gds_menu.getColumn(0, "MENU_GRP");

        	const usrName = nexacro.getApplication().gds_userInfo.getColumn(0, "USER_NM_KOR");
        	const rankName = nexacro.getApplication().gds_userInfo.getColumn(0, "RANK_NM");
        	const usrNameSize = nexacro.getTextSize(usrName, "normal 700 16pt/normal 'Noto Sans KR'");//15
        	const rankNameSize = nexacro.getTextSize(rankName, "normal 900 16pt/normal 'Noto Sans KR'");//15

        	this.fn_getSignImage();
        	this.div_TF_userInfo.form.sta_TF_userNm.set_text(usrName);
        	this.div_TF_userInfo.form.sta_TF_rankCd.set_text(rankName);
        	this.div_TF_userInfo.form.sta_TF_userNm.set_width(usrNameSize.nx);
        	this.div_TF_userInfo.form.sta_TF_rankCd.set_width(rankNameSize.nx);

        	if(nexacro.getApplication().av_mainMenu.form.div_mainMenuControl.form.components.length < 1)
        	{
        		alert("지금은 볼수 있는 메뉴가 없습니다. 관리자웹에서 권한을 할당받아주세요.");
        		nexacro.getApplication().exit();
        	}

        	try
        	{
        		nexacro.getApplication().av_mainMenu.form.div_mainMenuControl.form.components[0].click();
        		nexacro.getApplication().av_mainMenu.form.div_mainMenuControl.form.components[0].setFocus();
        	}
        	catch(e)
        	{
        		trace("서브메뉴 온로드 에러 (메인메뉴 첫번째 것 클릭)");
        	}

        	this.resetScroll();
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        /**
         * 설명 	: 해당 메뉴를 구성한다.
         * params  	: 1. grp - 메뉴 그룹
         * return Type 	: None
         */
        this.fn_makeSubMenu = function (grp)
        {
        	// 서브메뉴 데이터셋 클리어
        	this.ds_tSubMenu.clearData();

        	// 서브메뉴에 그려진 버튼 제거
        	for(let i = this.div_subMenuControl.form.components.length -1; i >= 0; i--)
        	{
        		rmBtn = this.div_subMenuControl.removeChild(this.div_subMenuControl.form.components[i].name);
        		rmBtn.destroy();
        	}

        	nexacro.getApplication().gds_menu.set_enableevent(false);
        	nexacro.getApplication().gds_menu.filter("MENU_GRP==" + nexacro.wrapQuote(grp)+" && SHOW_YN=='Y' && MENU_LEVEL!='0'");
        	this.ds_tSubMenu.copyData(nexacro.getApplication().gds_menu, true);
        	this.ds_tSubMenu.addColumn("SEARCH_FLAG", "string", 1);
        	nexacro.getApplication().gds_menu.filter("");
        	nexacro.getApplication().gds_menu.set_enableevent(true);

        	this.fn_makeSubMenuButton(this.ds_tSubMenu);

        	this.div_subMenuControl.form.resetScroll();
        };

        /**
         * 설명 	: 0레벨 메뉴 버튼을 생성한다.
         * params  	: 1. ds - 메뉴 Dataset
         * return Type 	: None
         */
        this.fn_makeSubMenuButton = function (ds)
        {
        	const nRowCnt = ds.rowcount;

        	let width;
        	const height = 42;//40
        	let left = 12;//6
        	const top = "30%";
        	const right = null;
        	const bottom = null;
        	const gap = 0;//20

        	for (let i = 0; i < nRowCnt; i++)
        	{
        		const sId = "btn_" + ds.getColumn(i, "MENU_CD");
        		const sName = ds.getColumn(i, "MENU_NM");
        		// 문자열 길이에 따른 사이즈 구하기
        		const objSize = nexacro.getTextSize(sName, "normal 700 16pt/normal 'Noto Sans KR'");//15
        		// 소수점 이하 자리 자르기
        		const objaa = Sct.Util.appendComma(objSize.nx, 0);
        		left = left + (i == 0 ? 0 : width) + gap;
        		width = parseInt(objaa) + 42;//50
        		this._makeSubButton(sId, sName, left, top, width, height, right, bottom);
        	}
        };

        /**
         * 설명 	: 메뉴 버튼을 그린다.
         * params  	: 1. id - Button ID
         2. name - Button Text
         3. left
         4. top
         5. width
         6. height
         7. right
         8. bottom
         * return Type 	: None
         */
        this._makeSubButton = function (id, name, left, top, width, height, right, bottom)
        {
        	const objButton = new Button();
        	objButton.init(id, left, top, width, height, right, bottom);
        	objButton.set_text(name);
        	objButton.set_cssclass("tSubMenu");
        	objButton.__menuid = id.replace("btn_", "");
        	objButton.addEventHandler("onclick", this.__subMenu_onclick, this);
        	objButton.addEventHandler("onsetfocus", this.__subMenu_onsetfocus, this);

        	this.div_subMenuControl.form.addChild(id, objButton);
        	objButton.show();
        };

        /**
         * 설명 	: Menu Button Click Event.
         * params  	: 1. obj
         2. e
         * return Type 	: None
         */
        this.__subMenu_onclick = function (obj, e)
        {
        	const id = obj.__menuid;
        	const ds = nexacro.getApplication().gds_menu;
        	const nRow = ds.findRow("MENU_CD", id);
        	const grp = this.ds_tSubMenu.lookup("MENU_CD", id, "MENU_GRP");
        	const url = this.ds_tSubMenu.lookup("MENU_CD", id, "PAGE_URL");
        	const title = this.ds_tSubMenu.lookup("MENU_CD", id, "MENU_NM");
        	const buttonAuth = Sct.getButtonAuth(ds, nRow);
        	const winKey = id + "_" + nexacro.getApplication().gds_openMenu.rowcount + "_" + parseInt(Math.random() * 100);

        	const openMenuRow = nexacro.getApplication().gds_openMenu.findRow("MENU_CD", id);

        	const frameCnt = nexacro.getApplication().av_workFrameSet.frames.length;
        	if(frameCnt > 0)
        	{
        		for(let i = 0; i < frameCnt; i++)
        		{
        			nexacro.getApplication().av_workFrameSet.frames[i].destroy();
        		}
        	}

        	if(openMenuRow >= 0)
        	{
        		const openWinKey = nexacro.getApplication().gds_openMenu.getColumn(openMenuRow, "WIN_KEY");
        		nexacro.getApplication().av_workFrameSet[openWinKey].setFocus();
        		return;
        	}

        	const objNewWin = new ChildFrame;
        		objNewWin.init(winKey, 0, 0, null, null);
        		objNewWin.set_formurl("TabletFrame::tFrameWork.xfdl");
        		objNewWin.arguments = [];

        		objNewWin.arguments["winKey"]   	= winKey;
        		objNewWin.arguments["menuId"]   	= id;
        		objNewWin.arguments["menuUrl"]   	= url;
        		objNewWin.arguments["menuTitle"] 	= title;
        		objNewWin.arguments["buttonAuth"]   = buttonAuth;

        	nexacro.getApplication().av_workFrameSet.addChild(winKey, objNewWin);

        	objNewWin.set_dragmovetype("none");
        	objNewWin.set_showtitlebar(false);
        	objNewWin.set_resizable(false);
        	objNewWin.set_border("0 none #808080");
        	objNewWin.set_openstatus("maximize");

        	objNewWin.show();

        };

        // 서브메뉴 버튼 focus 이벤트
        this.__subMenu_onsetfocus = function(obj, e)
        {
        	this.fn_sMenuNonSelect();

        	obj.set_color("#ffffff");
        	obj.set_background("#47afe1");
        };

        // 메뉴 전체 비활성 색으로 세팅
        this.fn_sMenuNonSelect = function()
        {
        	for(let i = this.div_subMenuControl.form.components.length -1; i >= 0; i--)
        	{
        		this.div_subMenuControl.form.components[i].set_background("transparent");
        		this.div_subMenuControl.form.components[i].set_color("#777777");
        	}
        };

        // 로고 클릭시 호실선택 창으로 이동
        this.div_logo_logo_onclick = function(obj,e)
        {
        	const frameCnt = nexacro.getApplication().av_workFrameSet.frames.length;
        	if(frameCnt > 0)
        	{
        		for(let i = 0; i < frameCnt; i++)
        		{
        			nexacro.getApplication().av_workFrameSet.frames[i].destroy();
        		}
        	}

        	nexacro.getApplication().gds_taCurRes.setColumn(0, "RES_ID", "");
        	nexacro.getApplication().gds_taCurRes.setColumn(0, "NAME", "");
        	nexacro.getApplication().av_mainMenu.set_formurl("");
        	nexacro.getApplication().av_subMenu.set_formurl("");
        	nexacro.getApplication().av_vFrameSet00.set_separatesize(nexacro.getApplication().av_loginModeSize);
        };

        /***********************************************************************
         * FILE
         ***********************************************************************/
        //이미지 조회
        this.fn_getSignImage = function ()
        {
        	let imgUrl = "";
        	const fileGrp2 = nexacro.getApplication().gds_userInfo.getColumn(0, "FILE_REAL_NAME2");
        	if(!Sct.Util.isEmpty(fileGrp2))
        	{
        		const webHost = nexacro.getEnvironment().services["svcurl"].url;
        		const path = "/Argos/FILES";
        		imgUrl = webHost + path + fileGrp2;
        		const chk = this.fileCheck(imgUrl);
        		if(chk == "404")
        		{
        			//this.div_TF_userInfo.form.imv_TF_profile.set_image("theme://images/imv_profile_e.png");
        			//this.div_TF_userInfo.form.imv_TF_profile.set_stretch("fit");
        			this.div_TF_userInfo.form.imv_TF_profile.set_edge("URL('theme://images/imv_profile_e.png') 0px 0px");
        		}
        		else if (chk == "400")
        		{
        			this.div_TF_userInfo.form.imv_TF_profile.set_edge("URL('theme://images/imv_profile_e.png') 0px 0px");
        		}
        		else
        		{
        			this.div_TF_userInfo.form.imv_TF_profile.set_edge("URL('" + imgUrl + "')");
        			//this.div_TF_userInfo.form.imv_TF_profile.set_image("url('" + imgUrl + "')");
        			//this.div_TF_userInfo.form.imv_TF_profile.set_stretch("fit");
        		}
        	}
        	else
        	{
        		this.div_TF_userInfo.form.imv_TF_profile.set_edge("URL('theme://images/imv_profile_e.png') 0px 0px");
        		//this.div_TF_userInfo.form.imv_TF_profile.set_image("theme://images/imv_profile_e.png");
        		//this.div_TF_userInfo.form.imv_TF_profile.set_stretch("fit");
        	}
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.logoutButton = function()
        {
        	const param = {};

        	Sct.tPopup(this, "NUC_LOGOUT_POP", 350, 250, param, "TabletPOP::NUB_LOGOUT_POP.xfdl", "");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.tFrameSubMenu_onload,this);
            this.div_logo.form.logo.addEventHandler("onclick",this.div_logo_logo_onclick,this);
            this.div_TF_userInfo.addEventHandler("onclick",this.logoutButton,this);
            this.div_TF_userInfo.form.imv_TF_profile.addEventHandler("onclick",this.logoutButton,this);
            this.div_TF_userInfo.form.sta_TF_userNm.addEventHandler("onclick",this.logoutButton,this);
            this.div_TF_userInfo.form.sta_TF_rankCd.addEventHandler("onclick",this.logoutButton,this);
        };
        this.loadIncludeScript("tFrameSubMenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
