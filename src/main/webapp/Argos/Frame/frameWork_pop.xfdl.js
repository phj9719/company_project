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
            if (Form == this.constructor)
            {
                this._setFormPosition(1112,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_head","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Head Area");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_border("1px solid rgba(229,229,229,1), 0px solid rgba(213,213,213,1), 0px solid rgba(213,213,213,1), 0px solid rgba(166,166,169,1)");
            obj.set_color("#444444");
            this.addChild(obj.name, obj);

            obj = new Static("sta_navi","20","11","907","17",null,null,null,null,null,null,this.div_head.form);
            obj.set_taborder("0");
            obj.set_text("sta_navi");
            obj.set_background("url(\'imagerc::icon_home.png\') no-repeat left center transparent");
            obj.set_padding("0px 0px 0px 12px");
            this.div_head.addChild(obj.name, obj);

            obj = new Div("div_foot","0",null,null,"31","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Foot Area");
            obj.set_background("rgba(240,240,240,1)");
            obj.set_border("1px solid rgba(255,255,255,1), 0px solid rgba(213,213,213,1), 0px solid rgba(213,213,213,1), 0px solid rgba(166,166,169,1)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_message","20",null,null,"31","30.04%","0",null,null,null,null,this.div_foot.form);
            obj.set_taborder("4");
            obj.set_background("url(\'imagerc::accept.png\') no-repeat left center transparent");
            obj.set_border("1px solid rgba(213,213,213,1), 0px solid rgba(213,213,213,1), 0px solid rgba(194,194,194,1), 0px solid rgba(166,166,169,1)");
            obj.set_padding("0px 0px 0px 20px");
            this.div_foot.addChild(obj.name, obj);

            obj = new Static("sta_message00","75%",null,null,"31","0%","0",null,null,null,null,this.div_foot.form);
            obj.set_taborder("5");
            obj.set_text(" SCT ??? copyright reserved");
            obj.set_color("rgba(153,153,153,1)");
            obj.set_padding("0px 15px 2px 0px");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_foot.addChild(obj.name, obj);

            obj = new Div("div_form","20","40",null,null,"15","31",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Work Form Area");
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
        this.addIncludeScript("frameWork_pop.xfdl","lib::sct_util.xjs");
        this.registerScript("frameWork_pop.xfdl", function() {
        /***********************************************************************
         * ??????ID   : frameWork
         * ?????????   : Work Frame
         * ???????????? : ?????? ????????? ????????????.
         * ?????????   : 2017.04
         * ?????????   : ?????????
         * ???????????? :
         ***********************************************************************
         *     ?????????     ?????????   ??????
         ***********************************************************************
         ***********************************************************************
         */

        /***********************************************************************
         * Include
         ***********************************************************************/

        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.winKey; //Window Key - ?????? ID
        this.menuId; //?????? ID
        this.menuUrl; //????????? Form Url
        this.menuTitle; //?????? ?????? ( = ?????????)
        this.buttonAuth; //????????? Button ??????
        this.param; //????????? ????????? ????????????
        this.isBookmark = false; //My Menu ??????
        this.isResetForm = false; //Reset Form ?????? ??????
        this.xlsAuth = "0"; //?????? ??????

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.frameWork_onload = function (obj, e)
        {
        	this.fn_initForm();
        	var url = this.parent.pUrl;

        	// this.winKey = this.getOwnerFrame().arguments["winKey"];
        	trace("menuID : " + url.substring(url.lastIndexOf(":"), url.indexOf(".")));
        	this.menuId = url.substring(url.lastIndexOf(":"), url.indexOf("."));
        	this.menuUrl = this.parent.pUrl;

        	this.menuTitle = url.substring(url.lastIndexOf(":"), url.indexOf("."));
        	// ?????? ?????????????????? ????????? ??????????????? ????????? ??????.
        	this.buttonAuth = "1111111";
        	// this.buttonAuth = this.getOwnerFrame().arguments["buttonAuth"];

        	// this.param = this.getOwnerFrame().arguments["param"];
        	// this.xlsAuth = this.buttonAuth.toString().substr(4, 1);
        	this.xlsAuth = "1";
        	this.buttonAuth = this.buttonAuth.substr(0, 4) + this.buttonAuth.substr(5); //cls + search + add + del + save + prn + appv
        	this.buttonAuth = "1111111"; //?????? ????????? ???????????? ????????? ?????? ????????? ???.
        	this.fn_drawButtons(this.buttonAuth);

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

        	// application.av_mdiFrame.form.fn_addTabpage(this.winKey, this.menuTitle);

        	Sct.addOpenMenu(this.menuId, this.winKey);
        	// application.gv_curWinKey = this.winKey;

        	this.set_titletext(this.menuTitle);
        	this.div_head.set_text(this.menuTitle);
        	this.div_head.form.sta_navi.set_text(this.fn_getMenuNavi(this.menuId));
        	var pgmid = this.menuUrl.substring(this.menuUrl.lastIndexOf(":") + 1, this.menuUrl.indexOf("."));
        	nexacro.getApplication().gv_curWinKey = pgmid;
        	trace("PGMID : " + nexacro.getApplication().gv_curWinKey);
        };

        this.frameWork_onsetfocus = function (obj, e)
        {
        	var pgmid = this.menuUrl.substring(this.menuUrl.lastIndexOf(":") + 1, this.menuUrl.indexOf("."));
        	nexacro.getApplication().gv_curWinKey = pgmid;
        	var idx = nexacro.getApplication().gds_openMenu.findRow("WIN_KEY", this.winKey);
        	// application.av_mdiFrame.form.tab_mdi.set_tabindex(idx);

        	nexacro.getApplication().gv_isBookmark = this.fn_isBookmark();
        	nexacro.getApplication().av_topFrame.form.fn_setBookmark(nexacro.getApplication().gv_isBookmark);

        	var fRow = nexacro.getApplication().gds_gridMenu.findRow("DOMAINCD", "EXPORTXLS");
        	if (fRow >= 0)
        	{
        		nexacro.getApplication().gds_gridMenu.setColumn(fRow, "USEYN", this.xlsAuth);
        	}
        };

        this.frameWork_onclose = function (obj, e)
        {
        	if (this.isResetForm)
        	{
        		return false;
        	}

        	var nRow = nexacro.getApplication().gds_openMenu.findRow("WIN_KEY", this.winKey);
        	if (nRow < 0)
        	{
        		return;
        	}
        	nexacro.getApplication().gds_openMenu.deleteRow(nRow);
        	// application.av_mdiFrame.form.tab_mdi.removeTabpage(nRow);

        	if (nexacro.getApplication().gds_openMenu.rowcount == 0)
        	{
        		nexacro.getApplication().av_homeFrame.set_visible(true);
        		nexacro.getApplication().av_homeFrame.set_showtitlebar(false);
        		nexacro.getApplication().av_homeFrame.set_dragmovetype("none");
        		nexacro.getApplication().av_homeFrame.style.set_border("0 none #808080ff");
        		nexacro.getApplication().av_homeFrame.set_openstatus("maximize");
        	}
        	else
        	{
        		// var idx = application.av_mdiFrame.form.tab_mdi.tabindex;
        		// var winKey = application.av_mdiFrame.form.tab_mdi.tabpages[idx].name;

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
        	// // Width??? 1184 ?????? ????????? ??????, Division??? Width??? 1164??? ???????????????.
        	// if(this.width <= 1184) {
        	// this.div_head.set_width(1164);
        	// this.div_form.set_width(1164);
        	// } else {
        	// this.div_head.set_right(0);
        	// this.div_form.set_right(0);
        	// }
        	//
        	// // Height??? 677 ?????? ????????? ??????, Division??? Height??? 624??? ???????????????.
        	// if(this.height <= 677) {
        	// this.div_form.set_height(624);
        	// } else {
        	// this.div_form.set_bottom(20);
        	// }

        	// Scroll??? ?????????
        	this.resetScroll();
        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // ??????????????? ?????? ??????
        this.div_head_btn_resetForm_onclick = function (obj, e)
        {
        	this.isResetForm = true;
        	trace("URL :: " + this.parent.pUrl);
        	var url = this.parent.pUrl;
        	this.div_form.set_url("");
        	this.div_form.set_url(url);
        	this.div_form.form.resetScroll();
        	Sct.alert(this, "000175", "0|");
        	this.isResetForm = false;
        };

        // ??????????????? ?????? ??????
        this.div_head_btn_search_onclick = function (obj, e)
        {
        	if (this.div_form.fn_searchBtn)
        	{
        		this.div_form.fn_searchBtn();
        	}
        };

        // ??????????????? ?????? ??????
        this.div_head_btn_add_onclick = function (obj, e)
        {
        	if (this.div_form.fn_addRowBtn)
        	{
        		this.div_form.fn_addRowBtn();
        	}
        };

        // ??????????????? ?????? ??????
        this.div_head_btn_delete_onclick = function (obj, e)
        {
        	if (this.div_form.fn_delRowBtn)
        	{
        		this.div_form.fn_delRowBtn();
        	}
        };

        // ??????????????? ?????? ????????????
        this.div_head_btn_excel_onclick = function (obj, e)
        {
        	if (this.div_form.fn_exportXlsBtn)
        	{
        		this.div_form.fn_exportXlsBtn();
        	}
        };

        // ??????????????? ?????? ??????
        this.div_head_btn_save_onclick = function (obj, e)
        {
        	if (this.div_form.fn_saveBtn)
        	{
        		this.div_form.fn_saveBtn();
        	}
        };

        // ??????????????? ????????? ??????
        this.div_head_btn_report_onclick = function (obj, e)
        {
        	if (this.div_form.fn_reportBtn)
        	{
        		this.div_form.fn_reportBtn();
        	}
        };

        // ??????????????? ?????? ??????
        this.div_head_btn_approve_onclick = function (obj, e)
        {
        	if (this.div_form.fn_approveBtn)
        	{
        		this.div_form.fn_approveBtn();
        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        /**
         * ?????? 	: ???????????? ????????? ????????????.
         * params  	: ??????
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

        // ????????? ?????? ???????????? ?????????.
        this.fn_drawButtons = function (authSet)
        {
        	if (Sct.Util.isEmpty(authSet))
        	{
        		authSet = "0000000";
        	}

        	this.fn_destroyButtons(this.div_head);

        	var arrBtnId = ["btn_resetForm", "btn_search", "btn_add", "btn_delete", "btn_save", "btn_report", "btn_approve"];
        	var arrBtnTxt = ["?????????", "??????", "??????", "??????", "??????", "?????????", "??????"];
        	var authForDraw = "";

        	for (var i = 0; i < this.buttonAuth.length; i++)
        	{
        		var unitSum = parseInt(this.buttonAuth.charAt(i)) + parseInt(authSet.charAt(i));
        		unitSum = (unitSum == 2 ? 1 : 0);
        		authForDraw += unitSum.toString();
        	}

        	var prevRight = 0;
        	var prevWidth = 0;
        	var right = 20;
        	var width = 45;
        	var gap = 3;
        	var rw;
        	for (var j = (authForDraw.length - 1); j >= 0; --j)
        	{
        		var tf = authForDraw.charAt(j);
        		if (tf == "1")
        		{
        			rw = this.fn_drawButton(arrBtnId[j], arrBtnTxt[j], right);

        			prevRight = parseInt(rw.right);
        			prevWidth = parseInt(rw.width);
        			right = prevRight + prevWidth + gap;
        		}
        	}

        	Sct.Domain.setMultiLangTitle(this.div_head, "no");
        };

        // ????????? ????????? ????????? ????????????.
        this.fn_drawButton = function (id, text, right)
        {
        	var top = 2;
        	var height = 25;

        	var button = new Button();

        	button.init(id, "absolute", null, top, width, height, right, null);
        	// button.set_text(text);

        	var bgText = "";
        	switch (text)
        	{
        		case "?????????":
        			bgText = "@gradation URL('imagerc::reset.png') center middle";
        			break;
        		case "??????":
        			bgText = "@gradation URL('imagerc::zoom.png') center middle";
        			break;
        		case "??????":
        			bgText = "@gradation URL('imagerc::plus.png') center middle";
        			break;
        		case "??????":
        			bgText = "@gradation URL('imagerc::minus.png') center middle";
        			break;
        		case "??????":
        			bgText = "@gradation URL('imagerc::save.png') center middle";
        			break;
        		case "?????????":
        			bgText = "@gradation URL('imagerc::issue.png') center middle";
        			break;
        		case "??????":
        			bgText = "@gradation URL('imagerc::tick.png') center middle";
        			break;
        	}
        	button.style.set_background(bgText);

        	// var width = parseInt(Sct.Util.getTextSize(text, button)[0]) + 11;
        	var width = 30;
        	// width = this.fn_getWidthForButton(width);
        	button.set_width(width);
        	button.set_cssclass("btn_WF_CRUD");
        	button.addEventHandler("onclick", eval("this.div_head_" + id + "_onclick"), this);
        	// this.Button00.addEventHandler("onclick", this.Button01_onclick, this);
        	var rowidx = nexacro.getApplication().gds_multiDic.findRow("PROPERTY_NM", text);
        	var tiptext = nexacro.getApplication().gds_multiDic.getColumn(rowidx, "LANG_FULL0");
        	nexacro.getApplication().gds_multiDic.filter("");


        	this.div_head.form.addChild(id, button);
        	button.show();
        	button.set_tooltiptext(tiptext);

        	var rtn = {
        		right : button.right,
        		width : button.width
        	};
        	return rtn;
        };

        // Button??? ????????? ???????????? ?????? ?????? Width??? ???????????? ????????????.
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

        // ????????? ???????????? ????????????.
        this.fn_destroyButtons = function (obj)
        {
        	comps = obj.components;

        	for (var i = (comps.length - 1); i >= 0; --i)
        	{
        		var comp = comps[i];

        		if (comp instanceof Button)
        		{
        			if (comp.name != "btn_bookmark")
        			{
        				comp.destroy();
        				comp = null;
        			}
        		}
        	}
        };

        /**
         * ?????? 	: ?????? ????????? ????????????.
         * params  	: menuId - ?????? CD
         * return Type 	: String(?????? ??????)
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frameWork_onload,this);
            this.addEventHandler("onsetfocus",this.frameWork_onsetfocus,this);
            this.div_foot.form.sta_message.addEventHandler("onclick",this.sta_message_onclick,this);
        };
        this.loadIncludeScript("frameWork_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
