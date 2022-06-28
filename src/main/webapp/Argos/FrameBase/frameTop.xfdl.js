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
                this._setFormPosition(1900,90);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_topMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"INT\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SHOW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEAR_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"PRN_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"APPV_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"C_MENU_GRP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"INT\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SHOW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEAR_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"PRN_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"APPV_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"POP_LEVEL\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_user","0","50",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_border("0px none");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_company","50","6","245","28",null,null,null,null,null,null,this.div_user.form);
            obj.set_taborder("0");
            obj.set_text("재가노인복지센터");
            obj.set_textAlign("left");
            obj.set_font("normal 700 11pt/normal \"Noto Sans KR\"");
            obj.set_verticalAlign("middle");
            this.div_user.addChild(obj.name, obj);

            obj = new Button("btn_logout",null,"6","90","28","10",null,null,null,null,null,this.div_user.form);
            obj.set_taborder("1");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_logout");
            this.div_user.addChild(obj.name, obj);

            obj = new Button("btn_00_00_00",null,"6","90","28","105",null,null,null,null,null,this.div_user.form);
            obj.set_taborder("2");
            obj.set_text("원격지원");
            obj.set_cssclass("btn_remote");
            this.div_user.addChild(obj.name, obj);

            obj = new Button("btn_manual",null,"6","75","28","200",null,null,null,null,null,this.div_user.form);
            obj.set_taborder("3");
            obj.set_text("메뉴얼");
            obj.set_cssclass("btn_manual");
            this.div_user.addChild(obj.name, obj);

            obj = new Static("sta_user",null,"6","155","28","280",null,null,null,null,null,this.div_user.form);
            obj.set_taborder("4");
            obj.set_text("요양보호사 너싱홈님");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_User");
            this.div_user.addChild(obj.name, obj);

            obj = new Static("sta_clock",null,"6","170","28","470",null,null,null,null,null,this.div_user.form);
            obj.set_taborder("5");
            obj.set_text("clock");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_user.addChild(obj.name, obj);

            obj = new Div("div_menu_control","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_border("0px none,0px none,1px solid #e2e2e2");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Div("div_topMenu","0","0",null,null,"100","0",null,null,null,null,this.div_menu_control.form);
            obj.set_taborder("0");
            obj.set_text("Top Menu Buttons");
            obj.set_formscrolltype("none");
            obj.set_color("#111111");
            this.div_menu_control.addChild(obj.name, obj);

            obj = new ImageViewer("imv_home","30","16","120","17",null,null,null,null,null,null,this.div_menu_control.form.div_topMenu.form);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/logo.png\')");
            obj.set_border("0px solid transparent");
            obj.set_text("");
            this.div_menu_control.form.div_topMenu.addChild(obj.name, obj);

            obj = new Button("btn_menu_left",null,"6","32","32","46",null,null,null,null,null,this.div_menu_control.form);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::btn_menu_left.png\') repeat");
            obj.set_border("0px solid rgba(55,56,66,1)");
            obj.set_font("15pt \"Malgun Gothic\"");
            obj.set_cursor("pointer");
            obj.set_borderRadius("0px");
            this.div_menu_control.addChild(obj.name, obj);

            obj = new Button("btn_menu_right",null,"6","32","32","10",null,null,null,null,null,this.div_menu_control.form);
            obj.set_taborder("2");
            obj.set_background("url(\'imagerc::btn_menu_right.png\') repeat");
            obj.set_border("0px solid rgba(55,56,66,1)");
            obj.set_color("white");
            obj.set_font("15pt \"Malgun Gothic\"");
            obj.set_cursor("pointer");
            obj.set_borderRadius("0px");
            this.div_menu_control.addChild(obj.name, obj);

            obj = new PopupMenu("pme_popMenu","-380","-30","300","260",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_popMenu");
            obj.set_captioncolumn("MENU_NM");
            obj.set_levelcolumn("POP_LEVEL");
            obj.set_idcolumn("MENU_CD");
            obj.set_borderRadius("8px");
            obj.set_border("5px solid #60a8f3");
            obj.set_boxShadow("0px 0px 5px rgba(0,0,0,0.50)");
            obj.set_cssclass("pme1");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1900,90,this,function(p){});
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
         * 화면ID   	: frameTop
         * 화면명   	: Top Frame
         * 화면설명 	:
         * 작성일   	: 2017.04
         * 작성자   	: 송금준
         * 수정이력 	:
         ***********************************************************************
         *     	수정일     	수정자   	내용
         ***********************************************************************
         *  	2018-02-19     	김정록
         *		2022-02-10		조기종		너싱홈 컨셉으로 수정
         ***********************************************************************
         비고 : - 좌표계에 팝업 메뉴 컴포넌트 배치중
         */

        /***********************************************************************
         * Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/;
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_btnArr = new Array();	// 메뉴 글로벌 데이터셋에서 대메뉴 버튼을 담을 배열
        this.fv_menuIdx = 1;
        this.fv_leftCnt = 120;

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.frameTop_onload = function (obj, e)
        {
        	//this.fn_initForm();
        	this.fn_initDataset();

        	// 대메뉴 버튼 생성
        	this.fn_makeTopMenuButton(this.ds_topMenu);
        	for (var i = 0; i < this.div_menu_control.form.div_topMenu.form.components.length; i++)
        	{
        		this.fv_btnArr.push(this.div_menu_control.form.div_topMenu.form.components[i]);
        	}

        // 	this.fn_setBtnImg();
        	const usrName = nexacro.getApplication().gds_userInfo.getColumn(0, "c_name");
        	const rankName = nexacro.getApplication().gds_userInfo.getColumn(0, "c_dutyname");
        	const companyName = nexacro.getApplication().gds_userInfo.getColumn(0, "b_offname");
        	//const usrNameSize = nexacro.getTextSize(usrName, "normal 500 15pt/normal 'Noto Sans KR'");
        	//const rankNameSize = nexacro.getTextSize(rankName, "normal 500 13pt/normal 'Noto Sans KR'");

        	this.div_user.form.sta_company.set_text(companyName);
        	this.div_user.form.sta_clock.set_text(this.fn_ASCClock());	// 시계 타이머가 실행되는데 1초가 걸려서 로드시 시계 세팅
        	this.div_user.form.sta_user.set_text(rankName + " " + nexacro.trim(usrName) + "님");

        	this.setTimer(3, 1000); // 시계 동작

        	//this.div_user.form.sta_userNm.set_text(usrName);
        	//this.div_user.form.sta_rankCd.set_text(rankName);
        	//this.div_user.form.sta_userNm.set_width(usrNameSize.nx);
        	//this.div_user.form.sta_rankCd.set_width(rankNameSize.nx);

        	//this.div_user.form.imv_profile.set_border("1px none #ffffff");
        	//this.fn_getSignImage();

        	//this.imv_logo.set_image('url("' + nexacro.getApplication().gds_company.getColumn(nexacro.getApplication().gds_company.findRow("COMPANY_CD", nexacro.getApplication().gv_company), "IMG_SRC") + '")');

        	//Sct.Domain.setMultiLangTitle(obj);
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
        	// 메뉴 글로벌 데이터셋에서 대메뉴 데이터를 대메뉴 데이터셋으로 복사
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

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.btn_logout_onclick = function (obj, e)
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
        	const nRowCnt = ds.rowcount;

        	let width;
        	const height = 30;
        	let left =190;
        	const top = 9;
        	const right = null;
        	const bottom = null;
        	const gap = 5;

        	for (var i = 0; i < nRowCnt; i++)
        	{
        		const sId = "btn_" + ds.getColumn(i, "MENU_CD");
        		const sName = ds.getColumn(i, "MENU_NM");
        		const objSize = nexacro.getTextSize(sName, "13pt/normal 'Noto Sans CJK KR Medium'");
        		const objaa = Sct.Util.appendComma(objSize.nx, 0);
        		left = left + (i == 0 ? 0 : width) + gap;
        		width = parseInt(objaa) + 20;
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
        	const objButton = new Button();
        	objButton.init(id, left, top, width, height, right, bottom);
        	objButton.set_text(name);
        	objButton.set_cssclass("topmenucss");
        	const arId = id.split("_");
        	objButton.__menuid = arId[1];
        	//trace(objButton.__menuid);
        	objButton.addEventHandler("onclick", this.__menu_onclick, this);
        	//objButton.addEventHandler("onmouseenter", this.__menu_mouseenter, this);
        	//objButton.addEventHandler("onmouseleave", this.__menu_mouseleave, this);

        	this.div_menu_control.form.div_topMenu.form.addChild(id, objButton);
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
        	const id = obj.__menuid;
        	const grp = this.ds_topMenu.lookup("MENU_CD", id, "MENU_GRP");
        	//let icon = obj.icon;
        	//let arIcon;

        // 	// 대메뉴 버튼을 클릭할 경우
        // 	if(obj.icon.indexOf("_m") != -1) {
        // 		arIcon = icon.split("_");
        // 	// 왼쪽의 Menu 버튼을 클릭할 경우
        // 	}else {
        // 		arIcon = icon.split(".");
        // 	}
        //
        // 	// 왼쪽메뉴의 아이콘 세팅
        // 	let icon2 = arIcon[0] + "_w.png')";
        //
        // 	// 메뉴 전체 비선택 색으로 세팅
        // 	this.fn_menuNonSelect();
        //
        // 	// 선택한 대메뉴 선택 색 입히기
        // 	let icon3 = arIcon[0] + "_m.png')";
        // 	obj.set_icon(icon3);
        // 	obj.set_color("#2d5dbb");

        	// 왼쪽 메뉴에 메뉴 만들기
        	//nexacro.getApplication().av_menuFrame.form.fn_makeMenu(grp, obj.text, icon2);

        	nexacro.getApplication().gds_menu.set_enableevent(false);
        	nexacro.getApplication().gds_menu.filter("MENU_GRP == " + nexacro.wrapQuote(grp) + " && MENU_LEVEL > 0");
        	this.ds_popMenu.copyData(nexacro.getApplication().gds_menu, true);
        	this.ds_popMenu.addColumn("POP_LEVEL", "INT", 256);
        	nexacro.getApplication().gds_menu.filter("");
        	nexacro.getApplication().gds_menu.set_enableevent(true);

        	for (let i = 0; i < this.ds_popMenu.rowcount; i++)
        		this.ds_popMenu.setColumn(i, "POP_LEVEL", 0);

        	this.pme_popMenu.trackPopupByComponent(obj, 0, obj.height);
        };

        // 소메뉴 클릭 이벤트
        this.pme_popMenu_onmenuclick = function(obj,e)
        {
        	//obj.set_enableevent(false);

        	const objDs = obj.getInnerDataset();
        	//trace(e.id);
        	const nRow = objDs.findRow("MENU_CD", e.id);
        	//trace("nRow : " + nRow);
        	const sUrl = objDs.getColumn(nRow, "PAGE_URL");
        	//trace("sUrl : " + sUrl);

        	if (Sct.Util.isEmpty(sUrl))
        	{
        		//obj.set_enableevent(true);
        		return;
        	}

        	if (Sct.Util.getLength(sUrl) > 0)
        	{
        		Sct.chkOpenMenu(objDs.getColumn(nRow, "MENU_CD"), null, false);
        	}
        	else
        	{
        		// TODO
        	}

        	//obj.set_enableevent(true);
        };

        // 메뉴 전체 비활성 색으로 세팅
        this.fn_menuNonSelect = function()
        {
        	for (let i = 0; i < this.fv_btnArr.length; i++) {
        		const anyIcon = this.div_menu_control.form.div_topMenu.form.all[this.fv_btnArr[i].name].icon;
        		if (anyIcon.indexOf("_m") != -1) {
        			const arAnyIcon = anyIcon.split("_");
        			const anyIcon2 = arAnyIcon[0] + ".png')";
        			this.div_menu_control.form.div_topMenu.form.all[this.fv_btnArr[i].name].set_icon(anyIcon2);
        			this.div_menu_control.form.div_topMenu.form.all[this.fv_btnArr[i].name].set_color("");
        		}
        	}
        };

        // 대메뉴 버튼에 마우스커서가 이동될때 이벤트
        // 대메뉴 색바꾸기
        this.__menu_mouseenter = function (obj, e)
        {
        	const name = obj.name;
         	const icon = obj.icon;
        	const arIcon = icon.split(".");
        	const icon2 = arIcon[0] + "_m.png')";
        	const text = nexacro.getApplication().av_menuFrame.form.div_title.form.sta_title.text;

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
        	const name = obj.name;
        	const icon = obj.icon;
        	const arIcon = icon.split("_");
        	const icon2 = arIcon[0] + ".png')";
        	const text = nexacro.getApplication().av_menuFrame.form.div_title.form.sta_title.text;

        	// 선택된 메뉴일 경우 색 유지하기
        	if(text == obj.text) {
        		this.div_menu_control.form.div_topMenu.form.all[name].set_icon(icon);
        	}else {
        		this.div_menu_control.form.div_topMenu.form.all[name].set_icon(icon2);
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

        // 대메뉴 버튼 이미지 세팅
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

        // 타이머 이벤트
        this.fn_timer = function (obj, e)
        {
        	let flag = false;
        	// 대메뉴 왼쪽 이동 (deprecate)
        	if (e.timerid == 1)
        	{
        		if (this.fv_menuIdx != this.fv_btnArr.length - 1)
        		{
        			for (let i = 0; i < this.fv_btnArr.length; i++) {
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
        	// 대메뉴 오른쪽 이동 (deprecate)
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
        	// 시계
        	else if (e.timerid == 3)
        	{
        		this.div_user.form.sta_clock.set_text(this.fn_ASCClock());
        	}
        };

        // 홈버튼 클릭 이벤트
        this.fn_setMain = function (obj, e)
        {
        	nexacro.getApplication().av_homeFrame.set_visible(true);
        	nexacro.getApplication().av_homeFrame.set_showtitlebar(false);
        	nexacro.getApplication().av_homeFrame.set_dragmovetype("none");
        	nexacro.getApplication().av_homeFrame.set_border("0 none #808080ff");
        	nexacro.getApplication().av_homeFrame.set_openstatus("maximize");
        	nexacro.getApplication().av_mdiFrame.form.fn_showButtons(false);
        };

        // Time processing function
        this.fn_ASCClock = function ()
        {
        	const date_str = Sct.Util.getTodayFull();			// 시간까지 포함한 날짜
        	const date_ko_str = Sct.Util.koGetToday("ddd");		// 요일이 붙은 날짜

        	// 날짜
        	const tY = date_ko_str.substr(0, 4);
        	const tM = date_ko_str.substr(4, 2);
        	const tD = date_ko_str.substr(6, 2);
        	const tDdd = date_ko_str.substr(8, 3);

        	// 시간
        	const hh = date_str.substr(8, 2);
        	const mi = date_str.substr(10, 2);
        	const ss = date_str.substr(12, 2);

        	return tY + "." + tM + "." + tD + tDdd + " " + hh + ":" + mi;
        };
        /***********************************************************************
         * FILE
         ***********************************************************************/
        //이미지 조회
        this.fn_getSignImage = function ()
        {
        	let imgUrl = "";
        	const fileGrp2 = nexacro.getApplication().gds_userInfo.getColumn(0, "FILE_REAL_NAME2");
        	if (!Sct.Util.isEmpty(fileGrp2))
        	{
        		const webHost = location.origin; //http://localhost:8080
        		const path = "/Argos/FILES";
        		imgUrl = webHost + path + fileGrp2;
        		const chk = this.fileCheck(imgUrl);
        		if (chk == "404")
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frameTop_onload,this);
            this.addEventHandler("ontimer",this.fn_timer,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.div_user.form.btn_logout.addEventHandler("onclick",this.btn_logout_onclick,this);
            this.div_menu_control.form.btn_menu_left.addEventHandler("onclick",this.fn_moveMenuLeft,this);
            this.div_menu_control.form.btn_menu_right.addEventHandler("onclick",this.fn_moveMenuRight,this);
            this.pme_popMenu.addEventHandler("onmenuclick",this.pme_popMenu_onmenuclick,this);
        };
        this.loadIncludeScript("frameTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
