(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameTop");
            this.set_titletext("Top Frame");
            this.set_background("#ffffff");
            this.set_border("0px none rgba(128,128,128,1)");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            this.set_color("#a8a8a8");
            if (Form == this.constructor)
            {
                this._setFormPosition(1901,80);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_topMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"INT\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SHOW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEAR_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"PRN_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"APPV_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"C_MENU_GRP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_camera360", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SET_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"STR1\" type=\"STRING\" size=\"256\"/><Column id=\"STR2\" type=\"STRING\" size=\"256\"/><Column id=\"STR3\" type=\"STRING\" size=\"256\"/><Column id=\"STR4\" type=\"STRING\" size=\"256\"/><Column id=\"STR5\" type=\"STRING\" size=\"256\"/><Column id=\"STR6\" type=\"STRING\" size=\"256\"/><Column id=\"STR7\" type=\"STRING\" size=\"256\"/><Column id=\"STR8\" type=\"STRING\" size=\"256\"/><Column id=\"STR9\" type=\"STRING\" size=\"256\"/><Column id=\"STR10\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("logoBg","0","0","250",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#2d5dbb");
            obj.set_color("#ffffff");
            obj.set_font("20pt/normal \"나눔스퀘어 ExtraBold\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv_logo","24","30","195","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_stretch("fixaspectratio");
            obj.set_border("none");
            obj.set_background("url(\'imagerc::logo_new.png\') transparent");
            obj.set_text("");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_user",null,"0","420",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_border("0px none");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_myPage",null,"41","90","20","171",null,null,null,null,null,this.div_user.form);
            obj.set_taborder("0");
            obj.set_textAlign("right");
            obj.set_text("마이페이지");
            obj.set_font("normal 700 8pt/normal \"Noto Sans KR\"");
            this.div_user.addChild(obj.name, obj);

            obj = new Static("sta_userNm",null,"13","90","25","170",null,null,null,null,null,this.div_user.form);
            obj.set_taborder("1");
            obj.set_textAlign("right");
            obj.set_text("성명");
            obj.set_font("normal 500 15pt/normal \"Noto Sans KR\"");
            obj.set_color("#2d5dbb");
            obj.set_padding("0px 5px 0px 0px");
            this.div_user.addChild(obj.name, obj);

            obj = new ImageViewer("imv_profile",null,"17","40","40","120",null,null,null,null,null,this.div_user.form);
            obj.set_taborder("2");
            obj.set_stretch("fit");
            obj.set_borderRadius("50px");
            this.div_user.addChild(obj.name, obj);

            obj = new Button("btn_bookmark",null,"18","40","40","74",null,null,null,null,null,this.div_user.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_gnb");
            obj.set_background("url(\'imagerc::btn_bookmark_off.png\') no-repeat transparent");
            obj.set_border("0px solid rgba(153,153,153,1)");
            obj.set_cursor("pointer");
            obj.set_text("");
            this.div_user.addChild(obj.name, obj);

            obj = new Button("btn_logout",null,"18","40","40","30",null,null,null,null,null,this.div_user.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_gnb");
            obj.set_background("url(\'imagerc::gnb_06.png\') no-repeat transparent");
            obj.set_border("0px solid rgba(153,153,153,1)");
            obj.set_cursor("pointer");
            this.div_user.addChild(obj.name, obj);

            obj = new Button("btn_gMove","10","6","1","61",null,null,null,null,null,null,this.div_user.form);
            obj.set_taborder("5");
            obj.set_background("#d9d9d9");
            this.div_user.addChild(obj.name, obj);

            obj = new Button("btn_360","93","10","57","50",null,null,null,null,null,null,this.div_user.form);
            obj.set_taborder("6");
            obj.set_background("url(\'imagerc::btn_360camera.png\') no-repeat center center transparent");
            this.div_user.addChild(obj.name, obj);

            obj = new Button("btn_chatbot","26","10","57","50",null,null,null,null,null,null,this.div_user.form);
            obj.set_taborder("7");
            obj.set_background("url(\'imagerc::btn_chatbot.png\') no-repeat center center transparent");
            this.div_user.addChild(obj.name, obj);

            obj = new Div("div_menu_control","250","0",null,null,"div_user:0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_border("0px none");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Div("div_topMenu","0.86%","15",null,"45","7.03%",null,null,null,null,null,this.div_menu_control.form);
            obj.set_taborder("0");
            obj.set_text("Top Menu Buttons");
            obj.set_formscrolltype("none");
            obj.set_color("#00000000");
            this.div_menu_control.addChild(obj.name, obj);

            obj = new Button("btn_menu_right",null,"21","32","32","8",null,null,null,null,null,this.div_menu_control.form);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::btn_menu_right.png\') repeat");
            obj.set_border("0px solid rgba(55,56,66,1)");
            obj.set_color("white");
            obj.set_font("15pt \"Malgun Gothic\"");
            obj.set_cursor("pointer");
            obj.set_borderRadius("0px");
            this.div_menu_control.addChild(obj.name, obj);

            obj = new Button("btn_menu_left",null,"21","32","32","41",null,null,null,null,null,this.div_menu_control.form);
            obj.set_taborder("2");
            obj.set_background("url(\'imagerc::btn_menu_left.png\') repeat");
            obj.set_border("0px solid rgba(55,56,66,1)");
            obj.set_font("15pt \"Malgun Gothic\"");
            obj.set_cursor("pointer");
            obj.set_borderRadius("0px");
            this.div_menu_control.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1901,80,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("frameTop.xfdl","lib::sct_util.xjs");
        this.addIncludeScript("frameTop.xfdl","lib::sct_com.xjs");
        this.registerScript("frameTop.xfdl", function() {
        /***********************************************************************
         * 화면ID   : frameTop
         * 화면명   : Top Frame
         * 화면설명 :
         * 작성일   : 2017.04
         * 작성자   : 송금준
         * 수정이력 :
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *  2018-02-19     김정록
         ***********************************************************************
         */

        /***********************************************************************
         * Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/;
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_btnArr = new Array();
        this.fv_menuIdx = 1;
        this.fv_leftCnt = 120;

        var cameraYn =nexacro.getApplication().gds_userInfo.getColumn(0,"CAMERA_YN");
        var cameraId =nexacro.getApplication().gds_userInfo.getColumn(0,"CAMERA_ID");
        var cameraPw =nexacro.getApplication().gds_userInfo.getColumn(0,"CAMERA_PW");
        var chatBot =nexacro.getApplication().gds_userInfo.getColumn(0,"CHATBOT");
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.frameTop_onload = function (obj, e)
        {
        	this.fn_initForm();
        	this.fn_initDataset();
        	this.fn_makeTopMenuButton(this.ds_topMenu);
        	for (var i = 0; i < this.div_menu_control.form.div_topMenu.form.components.length; i++)
        	{
        		this.fv_btnArr.push(this.div_menu_control.form.div_topMenu.form.components[i]);
        	}
        	this.fn_setBtnImg();
        	const usrName = nexacro.getApplication().gds_userInfo.getColumn(0, "USER_NM_KOR");
        	//const rankName = nexacro.getApplication().gds_userInfo.getColumn(0, "RANK_NM");
        	const usrNameSize = nexacro.getTextSize(usrName, "normal 500 15pt/normal 'Noto Sans KR'");
        	//const rankNameSize = nexacro.getTextSize(rankName, "normal 500 13pt/normal 'Noto Sans KR'");

        	this.div_user.form.sta_userNm.set_text(usrName);
        	//this.div_user.form.sta_rankCd.set_text(rankName);
        	this.div_user.form.sta_userNm.set_width(usrNameSize.nx);
        	//this.div_user.form.sta_rankCd.set_width(rankNameSize.nx);

        	this.div_user.form.imv_profile.set_border("1px none #ffffff");
        	this.fn_getSignImage();

        	this.imv_logo.set_image('url("' + nexacro.getApplication().gds_company.getColumn(nexacro.getApplication().gds_company.findRow("COMPANY_CD", nexacro.getApplication().gv_company), "IMG_SRC") + '")');

        	if(cameraYn !="Y"){
        		this.div_user.form.btn_360.set_visible(false);
        	}else{
        		this.div_user.form.btn_360.set_visible(true);
        	}
        	if(chatBot == null){
        		this.div_user.form.btn_chatbot.set_visible(false);
        	}else{
        		this.div_user.form.btn_chatbot.set_visible(true);
        	}
        	Sct.Domain.setMultiLangTitle(obj);
        };

        /***********************************************************************
         * Form Initialize Functions
         ***********************************************************************/
        /**
         * 함수명  : fn_initForm
         * 설명 	: Form을 초기화한다.
         * params  	: None
         * return Type 	: None
         */
        this.fn_initForm = function ()
        {
        };

        /**
         * 설명 	: Dataset을 초기화한다.
         * params  	: None
         * return Type 	: None
         */
        this.fn_initDataset = function ()
        {
        	nexacro.getApplication().gds_menu.set_enableevent(false);
        	this.ds_topMenu.clearData();
        	nexacro.getApplication().gds_menu.filter("MENU_LEVEL==0");
        	this.ds_topMenu.copyData(nexacro.getApplication().gds_menu, true);
        	nexacro.getApplication().gds_menu.filter("");
        	nexacro.getApplication().gds_menu.set_enableevent(true);
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        /**
         * 설명 	: 즐겨찾기를 저장한다.
         * params  	: None
         * return Type 	: None
         */
        this.fn_insertBookmark = function ()
        {
        	var svcId = "insert";
        	var params = "/commonController.do";
        	var inDatasets = "input1=gds_bookmark:U";
        	var outDatasets = "";
        	var argument = "method=insert "
        		 + "sqlId=CM_FVR_MENU_S_I ";
        	var callbackFunc = "";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        /**
         * 설명 	: 즐겨찾기를 저장한다.
         * params  	: None
         * return Type 	: None
         */
        this.fn_deleteBookmark = function ()
        {
        	var svcId = "delete";
        	var params = "/commonController.do";
        	var inDatasets = "input1=gds_bookmark:U";
        	var outDatasets = "";
        	var argument = "method=delete "
        		 + "sqlId=CM_FVR_MENU_S_D ";
        	var callbackFunc = "";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.btn_bookmark_onclick = function (obj, e)
        {
        	/*
        	 this.winKey = this.getOwnerFrame().arguments["winKey"];
        	 this.menuId = this.getOwnerFrame().arguments["menuId"];
        	 this.menuUrl = this.getOwnerFrame().arguments["menuUrl"];
        	 this.menuTitle = this.getOwnerFrame().arguments["menuTitle"];
        	 this.buttonAuth = this.getOwnerFrame().arguments["buttonAuth"];
        	 this.param = this.getOwnerFrame().arguments["param"];
        	 */
        	//trace("isBookMakr? : " + nexacro.getApplication().gv_isBookmark);

        	if(Sct.Util.isEmpty(nexacro.getApplication().av_workFrameSet[nexacro.getApplication().gv_curId])) return; //메뉴가 open 되있는 상황이 아니면 return;

        	if (!nexacro.getApplication().gv_isBookmark)
        	{
        		// 즐겨찾기 추가
        		this.div_user.form.btn_bookmark.set_background("url('imagerc::btn_bookmark_on.png') no-repeat transparent");
        		var menuCd = nexacro.getApplication().av_workFrameSet[nexacro.getApplication().gv_curId].form.menuId;
        		var menuNm = nexacro.getApplication().av_workFrameSet[nexacro.getApplication().gv_curId].form.menuTitle;
        		if (menuNm.indexOf("*") != -1)
        		{
        			menuNm = menuNm.replace("*", "");
        		}
        		var row = nexacro.getApplication().gds_bookmark.addRow();
        		//trace("bookgds addrow result : " + row);
        		nexacro.getApplication().gds_bookmark.setColumn(row, "COMPANY_CD", nexacro.getApplication().gv_company);
        		nexacro.getApplication().gds_bookmark.setColumn(row, "SERVICE_TP", nexacro.getApplication().gv_serviceTp);
        		nexacro.getApplication().gds_bookmark.setColumn(row, "APPLICATION_TP", nexacro.getApplication().gv_applicationTp);
        		nexacro.getApplication().gds_bookmark.setColumn(row, "MENU_CD", menuCd);
        		nexacro.getApplication().gds_bookmark.setColumn(row, "MENU_NM", menuNm);
        		nexacro.getApplication().gds_bookmark.setColumn(row, "USER_ID", nexacro.getApplication().gv_userId);


        		this.fn_setBookmark(true);
        		nexacro.getApplication().gv_isBookmark = true;
        		this.fn_insertBookmark();
        	}
        	else
        	{
        		// 즐겨찾기 삭제
        		this.div_user.form.btn_bookmark.set_background("url('imagerc::btn_bookmark_off.png') no-repeat transparent");
        		var menuCd = nexacro.getApplication().av_workFrameSet[nexacro.getApplication().gv_curId].form.menuId;
        		var fRow = nexacro.getApplication().gds_bookmark.findRow("MENU_CD", menuCd);
        		if (fRow >= 0)
        		{
        			nexacro.getApplication().gds_bookmark.deleteRow(fRow);
        		}

        		this.fn_setBookmark(false);
        		nexacro.getApplication().gv_isBookmark = false;
        		this.fn_deleteBookmark();
        	}
        };

        this.btn_exit_onclick = function (obj, e)
        {
        	Sct.logout();
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        /**
         * 설명 	: 0레벨 메뉴 버튼을 생성한다.
         * params  	: 1. ds - 메뉴 Dataset
         * return Type 	: None
         */
        this.fn_makeTopMenuButton = function (ds)
        {
        	var nRowCnt = ds.rowcount;

        	var width;
        	var height = 45;
        	var left = 7;
        	var top = 0;
        	var right = null;
        	var bottom = null;
        	var gap = 5;

        	for (var i = 0; i < nRowCnt; i++)
        	{
        		var sId = "btn_" + ds.getColumn(i, "MENU_CD") + "_" + ds.getColumn(i, "COMPANY_CD");
        		var sName = ds.getColumn(i, "MENU_NM");
        		let objSize = nexacro.getTextSize(sName, "13pt/normal 'Noto Sans CJK KR Medium'");
        		let objaa = Sct.Util.appendComma(objSize.nx, 0);
        		left = left + (i == 0 ? 0 : width) + gap;
        		width = parseInt(objaa) + 50;
        		this._makeButton(sId, sName, left, top, width, height, right, bottom);
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
        this._makeButton = function (id, name, left, top, width, height, right, bottom)
        {
        	var objButton = new Button();
        	objButton.init(id, left, top, width, height, right, bottom);
        	objButton.set_text(name);
        	objButton.set_cssclass("topmenucss");
        	let arId = id.split("_");
        	objButton.__menuid = arId[1];
        	//trace(objButton.__menuid);
        	objButton.addEventHandler("onclick", this.__menu_onclick, this);
        	objButton.addEventHandler("onmouseenter", this.__menu_mouseenter, this);
        	objButton.addEventHandler("onmouseleave", this.__menu_mouseleave, this);

        	this.div_menu_control.form.div_topMenu.form.addChild(id, objButton);
        	objButton.multilang = "full0";
        	objButton.show();
        };

        /**
         * 설명 	: Menu Button Click Event.
         * params  	: 1. obj
         2. e
         * return Type 	: None
         */
        this.__menu_onclick = function (obj, e)
        {
        	let id = obj.__menuid;
        	let grp = this.ds_topMenu.lookup("MENU_CD", id, "C_MENU_GRP");
        	let icon = obj.icon;
        	let arIcon;

        	// 대메뉴 버튼을 클릭할 경우
        	if(obj.icon.indexOf("_m") != -1) {
        		arIcon = icon.split("_");
        	// 왼쪽의 Menu 버튼을 클릭할 경우
        	}else {
        		arIcon = icon.split(".");
        	}

        	// 왼쪽메뉴의 아이콘 세팅
        	let icon2 = arIcon[0] + "_w.png')";

        	// 메뉴 전체 비선택 색으로 세팅
        	this.fn_menuNonSelect();

        	// 선택한 대메뉴 선택 색 입히기
        	let icon3 = arIcon[0] + "_m.png')";
        	obj.set_icon(icon3);
        	obj.set_color("#2d5dbb");

        	// 왼쪽 메뉴에 메뉴 만들기
        	nexacro.getApplication().av_menuFrame.form.fn_makeMenu(grp, obj.text, icon2);
        };

        // 메뉴 전체 비활성 색으로 세팅
        this.fn_menuNonSelect = function()
        {
        	for(let i = 0; i < this.fv_btnArr.length; i++) {
        		let anyIcon = this.div_menu_control.form.div_topMenu.form.all[this.fv_btnArr[i].name].icon;
        		if(anyIcon.indexOf("_m") != -1) {
        			let arAnyIcon = anyIcon.split("_");
        			let anyIcon2 = arAnyIcon[0] + ".png')";
        			this.div_menu_control.form.div_topMenu.form.all[this.fv_btnArr[i].name].set_icon(anyIcon2);
        			this.div_menu_control.form.div_topMenu.form.all[this.fv_btnArr[i].name].set_color("");
        		}
        	}
        };

        // 대메뉴 버튼에 마우스커서가 이동될때 이벤트
        // 대메뉴 색바꾸기
        this.__menu_mouseenter = function (obj, e)
        {
        	let name = obj.name;
         	let icon = obj.icon;
        	let arIcon = icon.split(".");
        	let icon2 = arIcon[0] + "_m.png')";
        	let text = nexacro.getApplication().av_menuFrame.form.div_title.form.sta_title.text;

        	// 선택된 메뉴일 경우 색 유지하기
        	if(text == obj.text) {
        		this.div_menu_control.form.div_topMenu.form.all[name].set_icon(icon);
        	}else {
        		this.div_menu_control.form.div_topMenu.form.all[name].set_icon(icon2);
        	}
        };

        // 대메뉴 버튼에서 마우스커서가 빠져나갈때 이벤트
        // 대매뉴 색바꾸기
        this.__menu_mouseleave = function (obj, e)
        {
        	let name = obj.name;
        	let icon = obj.icon;
        	let arIcon = icon.split("_");
        	let icon2 = arIcon[0] + ".png')";
        	let text = nexacro.getApplication().av_menuFrame.form.div_title.form.sta_title.text;

        	// 선택된 메뉴일 경우 색 유지하기
        	if(text == obj.text) {
        		this.div_menu_control.form.div_topMenu.form.all[name].set_icon(icon);
        	}else {
        		this.div_menu_control.form.div_topMenu.form.all[name].set_icon(icon2);
        	}
        };

        /**
         * 설명 	: Bookmark를 켜거나 끈다.
         * params  	: 1. flag - true/false
         * return Type 	: None
         */
        this.fn_setBookmark = function (flag)
        {
        	if (flag)
        	{
        		this.div_user.form.btn_bookmark.set_background("url('imagerc::btn_bookmark_on.png') no-repeat transparent");
        	}
        	else
        	{
        		this.div_user.form.btn_bookmark.set_background("url('imagerc::btn_bookmark_off.png') no-repeat transparent");
        	}
        };

        // 로그인 성공시 세션 타임아웃 카운트 시작하는 함수.
        // Alert 처럼 멈추는 함수에선 시간카운트가 제대로 안됨..
        this.fn_startTimer = function ()
        {
        	this.wbr_timer.callMethod("Start", "30:00");
        };

        this.Webbrowser00_onusernotify = function (obj, e)
        {
        	if (e.userdata == "KEEPSESSION")
        	{
        		this.fn_renewSession();
        	}
        	else
        	{
        		alert(e.userdata);
        	}
        };

        this.fn_renewSession = function ()
        {
        	var svcId = "renewSession";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "";
        	var argument = "method=renewSession";
        	var callbackFunc = "fn_renewSessioncallback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        this.fn_renewSessioncallback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode != -1)
        	{
        		// 2번째 파라미터 일단 하드코딩.
        		this.wbr_timer.callMethod("Stop");
        		this.wbr_timer.callMethod("Start", "30:00");
        	}
        	else
        	{
        		alert("세션 초기화 에러 : " + strErrorMsg);
        	}
        };

        this.fn_moveMenuRight = function (obj, e)
        {
        	this.setTimer(1, 1);
        };

        this.fn_moveMenuLeft = function (obj, e)
        {
        	this.setTimer(2, 1);
        };

        this.fn_setBtnImg = function ()
        {
        	//trace("fn_setBtnImg");

        	for (let i = 0; i < this.fv_btnArr.length; i++)
        	{
        		//trace("btn : " + this.fv_btnArr[i].name);
        		//trace("btnText : " + this.fv_btnArr[i].text);
        		let imgFileNm = "";
        		const btnText = this.fv_btnArr[i].text;
        		switch (btnText) {
        			case '입소자관리' :
        				imgFileNm = "m01.png";
        				break;
        			case '간호관리' :
        				imgFileNm = "m02.png";
        				break;
        			case '요양관리' :
        				imgFileNm = "m03.png";
        				break;
        			case '재활관리' :
        				imgFileNm = "m04.png";
        				break;
        			case '인지훈련' :
        				imgFileNm = "m05.png";
        				break;
        			case '촉탁의료관리' :
        				imgFileNm = "m06.png";
        				break;
        			case '공지 및 방문예약' :
        				imgFileNm = "m07.png";
        				break;
        			case '모니터링' :
        				imgFileNm = "m08.png";
        				break;
        			case '공통관리' :
        				imgFileNm = "m09.png";
        				break;
        			case '시스템관리' :
        				imgFileNm = "m10.png";
        				break;
        			case '서비스관리' :
        				imgFileNm = "m10.png";
        				break;
        		}

        		const name = this.fv_btnArr[i].name;
        		this.div_menu_control.form.div_topMenu.form.all[name].set_icon("url('imagerc::" + imgFileNm + "')");
        		this.div_menu_control.form.div_topMenu.form.all[name].set_background("#ffffff");
        	}
        };
        this.fn_timer = function (obj, e)
        {
        	var flag = false;
        	//trace(this.fv_menuIdx);
        	if (e.timerid == 1)
        	{
        		if (this.fv_menuIdx != this.fv_btnArr.length - 1)
        		{
        			for(let i = 0; i < this.fv_btnArr.length; i++) {
        				let name = this.fv_btnArr[i].name;
        				this.div_menu_control.form.div_topMenu.form.all[name].set_left(nexacro.toNumber(this.div_menu_control.form.div_topMenu.form.all[name].left) -2);
        			}

        			this.fv_leftCnt = this.fv_leftCnt - 2;
        			if (this.fv_leftCnt == 0)
        			{
        				this.fv_menuIdx += 1;
        				this.fv_leftCnt = 120;
        				this.killTimer(1);
        			}
        		}
        		else
        		{
        			this.killTimer(1);
        		}
        	}
        	else if (e.timerid == 2)
        	{
        		if (this.fv_menuIdx != 1)
        		{
        			for(let i = 0; i < this.fv_btnArr.length; i++) {
        				let name = this.fv_btnArr[i].name;
        				this.div_menu_control.form.div_topMenu.form.all[name].set_left(nexacro.toNumber(this.div_menu_control.form.div_topMenu.form.all[name].left) + 2);
        			}

        			this.fv_leftCnt = this.fv_leftCnt - 2;
        			if (this.fv_leftCnt == 0)
        			{
        				this.fv_menuIdx -= 1;
        				this.fv_leftCnt = 120;
        				this.killTimer(2);
        			}
        		}
        		else
        		{
        			this.killTimer(2);
        		}
        	}
        };

        this.fn_setMain = function (obj, e)
        {
        	nexacro.getApplication().av_homeFrame.set_visible(true);
        	nexacro.getApplication().av_homeFrame.set_showtitlebar(false);
        	nexacro.getApplication().av_homeFrame.set_dragmovetype("none");
        	nexacro.getApplication().av_homeFrame.set_border("0 none #808080ff");
        	nexacro.getApplication().av_homeFrame.set_openstatus("maximize");
        	nexacro.getApplication().av_mdiFrame.form.fn_showButtons(false);
        };

        this.frameTop_onsize = function(obj,e)
        {
        	//trace("topFrame x : " + e.cx);
        	if(e.cx <= 1500)
        	{
        		//this.div_menu_control.set_right("0%");
        	}
        	else
        	{
        		this.div_menu_control.set_right("div_user:0");
        	}
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
        		const webHost = location.origin; //http://localhost:8080
        		const path = "/Argos/FILES";
        		imgUrl = webHost + path + fileGrp2;
        		const chk = this.fileCheck(imgUrl);
        		if(chk == "404")
        		{
        			this.div_user.form.imv_profile.set_image("URL('imagerc::user_name_e.png')");
        		}
        		else
        		{
        			this.div_user.form.imv_profile.set_image("URL('" + imgUrl + "')");
        		}
        	}
        	else
        	{
        		this.div_user.form.imv_profile.set_image("URL('imagerc::user_name_e.png')");
        	}
        };

        // 파일 존재 유무 체크
        this.fileCheck = function(val)
        {
        	const req = new XMLHttpRequest();
        	req.open('GET', val, false);
        	req.send(null);

        	const headers = req.status;
        	return headers;
        };

        // 설정값 조회
        this.fn_camera_search = function ()
        {
        	//법인코드, 서비스유형, 코드값으로 조회
        	var company = nexacro.getApplication().gv_company;
        	var serviceTp = nexacro.getApplication().gv_serviceTp;
        	var code = "camera360";

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_camera360=output1";
        	var argument = "method=getList "
        		 + "sqlId=CMA008CT.CMA008CT_DS_LIST_S "
        		 + "COMPANY_CD="+company
        		 + " SERVICE_TP="+serviceTp
        		 + " CODE="+code;
        	var callbackFunc = "";

        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, null, false);
        };

        //낙상카메라 클릭 이벤트
        this.div_user_btn_360_onclick = function(obj,e)
        {
        	this.fn_camera_search();
        	var url = this.ds_camera360.getColumn(0,"SET_VALUE")+cameraId+"/"+cameraPw;

        	var title = this.ds_camera360.getColumn(0,"CODE");
        	window.open(url, title, "location=yes toolbar=yes,scrollbars=yes,resizable=yes"+',height=' + screen.height + ',width=' + screen.width + 'fullscreen=yes');
        };

        // 마이페이지
        this.myPageOpen = function()
        {
        	var param = {};
        	Sct.popup(this, "MYPAGE", 700, 400, "", param, "CM_POP::CM_MYPAGE_PP.xfdl", "fn_popCallback");
        };

        this.fn_popCallback = function (popid) {

        };

        this.div_user_btn_chatbot_onclick = function(obj,e)
        {
        	window.open(chatBot, "챗봇", "location=yes toolbar=yes,scrollbars=yes,resizable=yes"+',height=' + 600 + ',width=' + 770 + 'fullscreen=no');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frameTop_onload,this);
            this.addEventHandler("ontimer",this.fn_timer,this);
            this.addEventHandler("onsize",this.frameTop_onsize,this);
            this.imv_logo.addEventHandler("onclick",this.fn_setMain,this);
            this.div_user.form.sta_myPage.addEventHandler("onclick",this.myPageOpen,this);
            this.div_user.form.sta_userNm.addEventHandler("onclick",this.myPageOpen,this);
            this.div_user.form.btn_bookmark.addEventHandler("onclick",this.btn_bookmark_onclick,this);
            this.div_user.form.btn_logout.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.div_user.form.btn_360.addEventHandler("onclick",this.div_user_btn_360_onclick,this);
            this.div_user.form.btn_chatbot.addEventHandler("onclick",this.div_user_btn_chatbot_onclick,this);
            this.div_menu_control.form.btn_menu_right.addEventHandler("onclick",this.fn_moveMenuRight,this);
            this.div_menu_control.form.btn_menu_left.addEventHandler("onclick",this.fn_moveMenuLeft,this);
        };
        this.loadIncludeScript("frameTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
