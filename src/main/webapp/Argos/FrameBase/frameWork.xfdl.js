(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameWork");
            this.set_titletext("Work Frame");
            this.set_background("rgba(255,255,255,1)");
            this.set_border("1px solid transparent,0px none,0px none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1112,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_form","20","0",null,null,"15","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Work Form Area");
            obj.set_background("transparent");
            obj.set_border("0px solid rgba(213,213,213,1), 0px solid rgba(213,213,213,1), 1px solid rgba(213,213,213,1), 0px solid rgba(166,166,169,1)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1112,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("frameWork.xfdl","lib::sct_util.xjs");
        this.registerScript("frameWork.xfdl", function() {
        /***********************************************************************
         * 화면ID   : frameWork
         * 화면명   : Work Frame
         * 화면설명 : 업무 화면을 반영한다.
         * 작성일   : 2017.04
         * 작성자   : 송금준
         * 수정이력 :
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         ***********************************************************************
         */

        /***********************************************************************
         * Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.winKey; //Window Key - 화면 ID
        this.menuId; //메뉴 ID
        this.menuUrl; //오픈할 Form Url
        this.menuTitle; //화면 제목 ( = 메뉴명)
        this.buttonAuth; //화면의 Button 권한
        this.param; //화면에 전달된 파라미터
        this.isBookmark = false; //My Menu 여부
        this.isResetForm = false; //Reset Form 동작 여부
        this.xlsAuth = "0"; //엑셀 권한
        this.fv_isOpen = true;

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.frameWork_onload = function (obj, e)
        {
        	this.fn_initForm();

        	this.winKey = this.getOwnerFrame().arguments["winKey"];
        	this.menuId = this.getOwnerFrame().arguments["menuId"];
        	this.menuUrl = this.getOwnerFrame().arguments["menuUrl"];
        	this.menuTitle = this.getOwnerFrame().arguments["menuTitle"];
        	//this.buttonAuth = this.getOwnerFrame().arguments["buttonAuth"];
        	this.param = this.getOwnerFrame().arguments["param"];
        	// this.xlsAuth = this.buttonAuth.toString().substr(4, 1);
        	this.xlsAuth = "1";
        // 	var uid = nexacro.getApplication().gds_userInfo.getColumn(0, "USER_ID");
        // 	if (uid == "sysadmin")
        // 	{
        // 		this.buttonAuth = "1111111";
        // 	}
        	// this.buttonAuth = "1111111"; // 버튼 그리기 테스트를 위하여 값을 강제로 줌.
        	//this.fn_drawButtons(this.buttonAuth);

        	// this.isBookmark = this.fn_checkBookmark();
        	//
        	// if(this.isBookmark) {
        	// this.div_head.btn_bookmark.set_cssclass("btn_WF_BookMark_S");
        	// } else {
        	// this.div_head.btn_bookmark.set_cssclass("btn_WF_BookMark");
        	// }
        	//
        	// this.div_head.sta_title.set_text(this.menuTitle);
        	this.div_form.set_url(this.menuUrl);

        	nexacro.getApplication().av_mdiFrame.form.fn_addTabpage(this.winKey, this.menuTitle);

        	//Sct.addOpenMenu(this.menuId, this.winKey);
        	Sct.addOpenMenu2(this.menuId, this.menuTitle, this.menuUrl, this.winKey);
        	nexacro.getApplication().gv_curId = this.winKey;

        	this.set_titletext(this.menuTitle);
        	//this.div_head.set_text(this.menuTitle);
        	//this.div_head.form.edt_navi.set_value(this.fn_getMenuNavi(this.menuId));
        	//this.div_head.form.edt_navi.setFocus(false);
        	var pgmid = this.menuUrl.substring(this.menuUrl.lastIndexOf(":") + 1, this.menuUrl.indexOf("."));
        	nexacro.getApplication().gv_curWinKey = pgmid;
        	trace("PGMID : " + nexacro.getApplication().gv_curWinKey);
        };

        this.frameWork_onsetfocus = function (obj, e)
        {
        	var pgmid = this.menuUrl.substring(this.menuUrl.lastIndexOf(":") + 1, this.menuUrl.indexOf("."));
        	nexacro.getApplication().gv_curId = this.winKey;
        	nexacro.getApplication().gv_curWinKey = pgmid;
        	var idx = nexacro.getApplication().gds_openMenu.findRow("WIN_KEY", this.winKey);
        	nexacro.getApplication().av_mdiFrame.form.tab_mdi.set_tabindex(idx);

        	//nexacro.getApplication().gv_isBookmark = this.fn_isBookmark();
        	//nexacro.getApplication().av_topFrame.form.fn_setBookmark(nexacro.getApplication().gv_isBookmark);

        // 	var fRow = nexacro.getApplication().gds_gridMenu.findRow("DOMAINCD", "EXPORTXLS");
        // 	if (fRow >= 0)
        // 	{
        // 		nexacro.getApplication().gds_gridMenu.setColumn(fRow, "USEYN", this.xlsAuth);
        // 	}
        };

        this.frameWork_onclose = function (obj, e)
        {
        	if (this.isResetForm)
        	{
        		return false;
        	}

        	var nRow = nexacro.getApplication().gds_openMenu.findRow("WIN_KEY", this.winKey);
        	trace("frameWork nRow : " + nRow);
        	if (nRow < 0)
        	{
        		return;
        	}
        	var bool = nexacro.getApplication().gds_openMenu.deleteRow(nRow);
        	trace("openMenu 행 삭제 성공? : " + bool);
        	nexacro.getApplication().av_mdiFrame.form.tab_mdi.removeTabpage(nRow);

        	if (nexacro.getApplication().gds_openMenu.rowcount == 0)
        	{
        		nexacro.getApplication().av_homeFrame.set_visible(true);
        		nexacro.getApplication().av_homeFrame.set_showtitlebar(false);
        		nexacro.getApplication().av_homeFrame.set_dragmovetype("none");
        		nexacro.getApplication().av_homeFrame.set_border("0 none #808080ff");
        		nexacro.getApplication().av_homeFrame.set_openstatus("maximize");
        	}
        	else
        	{
        		var idx = nexacro.getApplication().av_mdiFrame.form.tab_mdi.tabindex;
        		var winKey = nexacro.getApplication().av_mdiFrame.form.tab_mdi.tabpages[idx].name;

        		if (idx == 0)
        		{
        			var chgIdx = nexacro.getApplication().av_mdiFrame.form.tab_mdi.getTabpageCount() - 1;
        			nexacro.getApplication().av_mdiFrame.form.tab_mdi.set_tabindex(chgIdx);
        		}
        		else
        		{
        			nexacro.getApplication().av_mdiFrame.form.tab_mdi.set_tabindex(0);
        		}
        		nexacro.getApplication().av_mdiFrame.form.tab_mdi.set_tabindex(idx);
        		// application.av_workFrameSet[winKey].setFocus();
        	}
        };

        /***********************************************************************
         * Form Initialize Functions
         ***********************************************************************/
        this.fn_initForm = function ()
        {
        	// // Width가 1184 보다 작아질 경우, Division의 Width를 1164로 고정시킨다.
        	// if(this.width <= 1184) {
        	// this.div_head.set_width(1164);
        	// this.div_form.set_width(1164);
        	// } else {
        	// this.div_head.set_right(0);
        	// this.div_form.set_right(0);
        	// }
        	//
        	// // Height가 677 보다 작아질 경우, Division의 Height를 624로 고정시킨다.
        	// if(this.height <= 677) {
        	// this.div_form.set_height(624);
        	// } else {
        	// this.div_form.set_bottom(20);
        	// }

        	// Scroll을 재정립
        	this.resetScroll();
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 업무화면의 리셋 처리
        this.div_head_btn_resetForm_onclick = function (obj, e)
        {
        	this.isResetForm = true;
        	var url = this.div_form.url;
        	this.div_form.set_url("");
        	this.div_form.set_url(url);
        	this.div_form.form.resetScroll();
        	Sct.alert(this, "000175", "0|");
        	this.isResetForm = false;
        };

        // 업무화면의 조회 처리
        this.div_head_btn_search_onclick = function (obj, e)
        {
        	if (this.div_form.form.fn_searchBtn)
        	{
        		this.div_form.form.fn_searchBtn();
        	}
        };

        // 업무화면의 추가 처리
        this.div_head_btn_insert_onclick = function (obj, e)
        {
        	if (this.div_form.form.fn_insertBtn)
        	{
        		this.div_form.form.fn_insertBtn();
        	}
        };

        // 업무화면의 삭제 처리
        this.div_head_btn_delete_onclick = function (obj, e)
        {
        	if (this.div_form.form.fn_deleteBtn)
        	{
        		this.div_form.form.fn_deleteBtn();
        	}
        };

        // 업무화면의 엑셀 내보내기
        this.div_head_btn_excel_onclick = function (obj, e)
        {
        	if (this.div_form.form.fn_exportXlsBtn)
        	{
        		this.div_form.form.fn_exportXlsBtn();
        	}
        };

        // 업무화면의 저장 처리
        this.div_head_btn_save_onclick = function (obj, e)
        {
        	if (this.div_form.form.fn_saveBtn)
        	{
        		this.div_form.form.fn_saveBtn();
        	}else if(this.div_form.form.fn_updateBtn)
        	{
        		this.div_form.form.fn_updateBtn();
        	}
        };

        // 업무화면의 리포트 출력
        this.div_head_btn_report_onclick = function (obj, e)
        {
        	if (this.div_form.form.fn_reportBtn)
        	{
        		this.div_form.form.fn_reportBtn();
        	}
        };

        // 업무화면의 승인 처리
        this.div_head_btn_approve_onclick = function (obj, e)
        {
        	if (this.div_form.form.fn_approveBtn)
        	{
        		this.div_form.form.fn_approveBtn();
        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        /**
         * 설명 	: 즐겨찾기 여부를 반환한다.
         * params  	: 없음
         * return Type 	: true/false
         */
        this.fn_isBookmark = function ()
        {
        	var row = nexacro.getApplication().gds_bookmark.findRow("MENU_CD", this.menuId);

        	if (row >= 0)
        	{
        		return true;
        	}
        	else
        	{
        		return false;
        	}
        };

        // 권한이 있는 버튼들만 그린다.
        this.fn_drawButtons = function (authSet)
        {
        	if (Sct.Util.isEmpty(authSet))
        	{
        		authSet = "0000000";
        	}

        	this.fn_destroyButtons(this.div_head);

        	var arrBtnId = ["btn_resetForm", "btn_search", "btn_insert", "btn_save", "btn_delete", "btn_report", "btn_approve"];
        	var arrBtnTxt = ["초기화", "검색", "등록", "저장", "삭제", "발행", "승인"];
        	var authForDraw = "";

        	for (var i = 0; i < this.buttonAuth.length; i++)
        	{
        		var unitSum = parseInt(this.buttonAuth.charAt(i)) + parseInt(authSet.charAt(i));
        		unitSum = (unitSum == 2 ? 1 : 0);
        		authForDraw += unitSum.toString();
        	}

        	var prevRight = 0;
        	var prevWidth = 0;
        	var right = 5;
        	var width = 45;
        	var gap = 3;
        	var rw;
        	for (var j = (authForDraw.length - 1); j >= 0; --j)
        	{
        		var tf = authForDraw.charAt(j);
        		if (tf == "1")
        		{
        			//trace(arrBtnId[j]);
        			// 등록버튼 추가하지 않기
        			if(arrBtnId[j] == "btn_insert") continue;
        			rw = this.fn_drawButton(arrBtnId[j], arrBtnTxt[j], right);

        			prevRight = parseInt(rw.right);
        			prevWidth = parseInt(rw.width);
        			right = prevRight + prevWidth + gap;
        		}
        	}

        	Sct.Domain.setMultiLangTitle(this.div_head, "no");
        };

        // 실제로 화면에 버튼을 생성한다.
        this.fn_drawButton = function (id, text, right)
        {
        	var top = 6;
        	var height = 28;
        	var width = 67;

        	var button = new Button();

        	button.init(id, null, top, width, height, right);

        	var cssClassText = "";
        /*
        	switch (text)
        	{
        		case "초기화":
        			bgText = " URL('imagerc::reset.png') center middle";
        			break;
        		case "조회":
        			bgText = " URL('imagerc::zoom.png') center middle";
        			break;
        		case "등록":
        			bgText = " URL('imagerc::plus.png')";
        			break;
        		case "삭제":
        			bgText = " URL('imagerc::minus.png')";
        			break;
        		case "수정":
        			bgText = " URL('imagerc::save.png')";
        			break;
        		case "발행":
        			bgText = " URL('imagerc::issue.png')";
        			break;
        		case "승인":
        			bgText = " URL('imagerc::tick.png')";
        			break;
        	}
        */

        	button.set_cssclass("btn_WF_CRUD");

        	if (text == "초기화") {
        		cssClassText = "btn_com_reset";
        		width = 77;
        	} else if (text ==  "검색") {
        		cssClassText = "btn_com_search";
        		width = 63;
        	} else if (text ==  "등록") {
        		cssClassText = "btn_com_insert";
        	} else if (text == "저장") {
        		cssClassText = "btn_com_update";
        	} else if (text == "삭제") {
        		cssClassText = "btn_com_delete";
        	} else if (text == "발행") {
        		cssClassText = "btn_com_report";
        	} else if (text == "승인") {
        		cssClassText = "btn_com_approve";
        	}

        	button.set_cssclass(cssClassText);

        	button.set_width(width);
        	button.set_text(text);
        	button.set_cursor("pointer");
        	button.addEventHandler("onclick", eval("this.div_head_" + id + "_onclick"), this);
        	// this.Button00.addEventHandler("onclick", this.Button01_onclick, this);
        	//var rowidx = nexacro.getApplication().gds_multiDic.findRow("PROPERTY_NM", text);
        	//var tiptext = nexacro.getApplication().gds_multiDic.getColumn(rowidx, "LANG_FULL0");
        	//nexacro.getApplication().gds_multiDic.filter("");

        	this.div_head.form.addChild(id, button);
        	button.show();
        	button.set_tooltiptext(tiptext);

        	var rtn = {
        		right : button.right,
        		width : button.width
        	};
        	return rtn;
        };

        // Button에 표시할 텍스트에 따른 버튼 Width를 산출하여 가져온다.
        this.fn_getWidthForButton = function (width)
        {
        	var widthSet = [45, 58, 71, 84, 97, 110, 123, 136, 149, 162, 175];

        	for (var i = 0; i < widthSet.length; i++)
        	{
        		if (width > widthSet[i])
        		{
        			continue;
        		}
        		else
        		{
        			return widthSet[i];
        		}
        	}

        	return width;
        };

        // 생성된 버튼들을 삭제한다.
        this.fn_destroyButtons = function (obj)
        {
        	comps = obj.form.components;

        	for (var i = (comps.length - 1); i >= 0; --i)
        	{
        		var comp = comps[i];

        		if (comp instanceof Button)
        		{
        			if (comp.name != "btn_bookmark" && comp.name != "btn_closeFrame")
        			{
        				comp.destroy();
        				comp = null;
        			}
        		}
        	}
        };

        /**
         * 설명 	: 메뉴 경로를 가져온다.
         * params  	: menuId - 메뉴 CD
         * return Type 	: String(메뉴 경로)
         */
        this.fn_getMenuNavi = function (menuId)
        {
        	if (Sct.Util.isEmpty(menuId))
        	{
        		menuId = this.menuId;
        	}
        	var foundRow = nexacro.getApplication().gds_menu.findRow("MENU_CD", menuId);

        	if (foundRow >= 0)
        	{
        		var menuLvl = nexacro.getApplication().gds_menu.getColumn(foundRow, "MENU_LEVEL");
        		var menuNm = nexacro.getApplication().gds_menu.getColumn(foundRow, "MENU_NM");
        		if (menuLvl == 0)
        		{
        			return "Home > " + menuNm;
        		}
        		else
        		{
        			var highMenuId = nexacro.getApplication().gds_menu.getColumn(foundRow, "HIGH_MENU_CD");
        			return (this.fn_getMenuNavi(highMenuId) + " > " + (menuId == this.menuId ? (menuNm + " (" + this.div_form.url + ")") : menuNm));
        		}
        	}
        };

        /**
         * 설명 	: 메뉴 프레임을 닫는다.
         * params  	: None
         * return Type 	: None
         */
        this.fn_closeFrame = function ()
        {
        	nexacro.getApplication().av_hFrameSet0.set_separatesize(nexacro.getApplication().av_hideMenuModeSize);
        	//this.sta_hideBar.set_visible(true);
        	//this.btn_closeFrame.set_text(">");1
        	nexacro.getApplication().av_hFrameSet0.menuFrame.form.sta_hideBar.set_visible(true);
        	this.div_head.form.btn_closeFrame.set_background("url('imagerc::menubtn_open.png') no-repeat right center transparent");
        	//this.btn_closeFrame.style.set_background_image("url('imagerc::menubtn_open.png')");
        };

        /**
         * 설명 	: 메뉴 프레임을 연다.
         * params  	: None
         * return Type 	: None
         */
        this.fn_openFrame = function ()
        {
        	nexacro.getApplication().av_hFrameSet0.set_separatesize(nexacro.getApplication().av_showMenuModeSize);
        	//this.sta_hideBar.set_visible(false);
        	//this.btn_closeFrame.set_text("<");
        	nexacro.getApplication().av_hFrameSet0.menuFrame.form.sta_hideBar.set_visible(false);
        	this.div_head.form.btn_closeFrame.set_background("url('imagerc::menubtn_close.png') no-repeat right center transparent");
        	//this.btn_closeFrame.style.set_background_image("url('imagerc::menubtn_close.png')");
        };

        this.btn_closeFrame_onclick = function (obj, e)
        {
        	if (this.fv_isOpen)
        	{
        		this.fn_closeFrame();
        		this.fv_isOpen = false;
        	}
        	else
        	{
        		this.fn_openFrame();
        		this.fv_isOpen = true;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frameWork_onload,this);
            this.addEventHandler("onsetfocus",this.frameWork_onsetfocus,this);
            this.addEventHandler("onclose",this.frameWork_onclose,this);
        };
        this.loadIncludeScript("frameWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
