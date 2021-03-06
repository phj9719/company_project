(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mFrameBottom");
            this.set_titletext("Mobile Bottom Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,90);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SHOW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEAR_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"PRN_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"APPV_AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_menuControl","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid #cccccc,0px none,0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,90,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("mFrameBottom.xfdl","lib::sct_util.xjs");
        this.addIncludeScript("mFrameBottom.xfdl","lib::sct_com.xjs");
        this.registerScript("mFrameBottom.xfdl", function() {
        /***********************************************************************
         * ??????ID   	: mFrameBottom
         * ?????????   	: mFrameBottom
         * ???????????? 	: ????????? ????????? ????????? ????????????.
         * ?????????   	: 2021-07-06
         * ?????????   	: ?????????
         * ???????????? 	: ?????????????????????
         ***********************************************************************
         *     ?????????     ?????????   ??????
         ***********************************************************************
         *
         ***********************************************************************
         */

        /***********************************************************************
         * Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_btnArr = new Array();
        this.fv_menuIdx = 1;

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.mFrameBottom_onload = function(obj,e)
        {
        	this.fn_initDataset();
        	this.fn_makeMenuButton(this.ds_menu);
        	for(let i = 0; i < this.div_menuControl.form.components.length; i++)
        	{
        		this.fv_btnArr.push(this.div_menuControl.form.components[i]);
        	}
        	this.fn_setBtnImg();

        	//??????????????? ????????? ??????
        	obj.addEventHandler("onkeyup", this.fn_openDebugPopup, this);

        	this.div_menuControl.form.resetScroll();

        	this.div_menuControl.form.components[1].setFocus();
        	this.div_menuControl.form.components[1].click();
        };

        /***********************************************************************
         * Form Initialize Functions
         ***********************************************************************/
        /**
         * ?????? 	: Dataset??? ???????????????.
         * params  	: None
         * return Type 	: None
         */
        this.fn_initDataset = function ()
        {
        	nexacro.getApplication().gds_menu.set_enableevent(false);
        	this.ds_menu.clearData();
        	nexacro.getApplication().gds_menu.filter("MENU_LEVEL==0");
        	this.ds_menu.copyData(nexacro.getApplication().gds_menu, true);
        	nexacro.getApplication().gds_menu.filter("");
        	nexacro.getApplication().gds_menu.set_enableevent(true);
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        /**
         * ?????? 	: 0?????? ?????? ????????? ????????????.
         * params  	: 1. ds - ?????? Dataset
         * return Type 	: None
         */
        this.fn_makeMenuButton = function (ds)
        {
        	const nRowCnt = ds.rowcount;

        	const width = 119;
        	const height = 98;
        	let left = 0;
        	const top = 0;
        	const right = null;
        	const bottom = null;

        	for (let i = 0; i < nRowCnt; i++)
        	{
        		const sId = "btn_" + ds.getColumn(i, "MENU_CD");
        		const sName = ds.getColumn(i, "MENU_NM");
        		left = left + (i == 0 ? 0 : width);
        		this._makeButton(sId, sName, left, top, width, height, right, bottom);
        	}
        };

        /**
         * ?????? 	: ?????? ????????? ?????????.
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
        	objButton.set_cssclass("mMainMenu");
        	objButton.__menuid = id.replace("btn_", "");
        	objButton.addEventHandler("onclick", this.__menu_onclick, this);
        	objButton.addEventHandler("onsetfocus", this.__menu_onsetfocus, this);

        	this.div_menuControl.form.addChild(id, objButton);
        	objButton.show();
        };

        /**
         * ?????? 	: Menu Button Click Event.
         * params  	: 1. obj
         2. e
         * return Type 	: None
         */
        this.__menu_onclick = function (obj, e)
        {
        	const id = obj.__menuid;
        	const ds = nexacro.getApplication().gds_menu;
        	const nRow = ds.findRow("MENU_CD", id);
        	const grp = this.ds_menu.lookup("MENU_CD", id, "MENU_GRP");
        	const url = this.ds_menu.lookup("MENU_CD", id, "PAGE_URL");
        	const title = this.ds_menu.lookup("MENU_CD", id, "MENU_NM");
        	const buttonAuth = Sct.getButtonAuth(ds, nRow);
        	const winKey = id + "_" + nexacro.getApplication().gds_openMenu.rowcount + "_" + parseInt(Math.random() * 100);

        	const openMenuRow = nexacro.getApplication().gds_openMenu.findRow("MENU_CD", id);

        	if(openMenuRow >= 0)
        	{
        		const openWinKey = nexacro.getApplication().gds_openMenu.getColumn(openMenuRow, "WIN_KEY");
        		nexacro.getApplication().av_workFrameSet[openWinKey].setFocus();
        		return;
        	}

        	for(let i = 0; i < nexacro.getApplication().av_workFrameSet.frames.length; i++)
        	{
        		nexacro.getApplication().av_workFrameSet.frames[i].destroy();
        	}

        	const objNewWin = new ChildFrame;
        		  objNewWin.init(winKey, 0, 0, null, null);
        		  objNewWin.set_formurl("MobileFrame::mFrameWork.xfdl");
        		  objNewWin.arguments = [];

        		  objNewWin.arguments["winKey"] = winKey;
        		  objNewWin.arguments["menuId"] = id;
        		  objNewWin.arguments["menuUrl"] = url;
        		  objNewWin.arguments["menuTitle"] = title;
        		  objNewWin.arguments["buttonAuth"] = buttonAuth;

        	nexacro.getApplication().av_workFrameSet.addChild(winKey, objNewWin);

        	objNewWin.set_dragmovetype("none");
        	objNewWin.set_showtitlebar(false);
        	objNewWin.set_resizable(false);
        	objNewWin.set_border("0 none #808080");
        	objNewWin.set_openstatus("maximize");

        	objNewWin.show();

        	// ????????? ????????? ????????? topFrame??? ?????? ???????????? ????????? ???????????????.
        	try
        	{
        		nexacro.getApplication().av_topFrame.form.sta_top.set_text(title);
        	}
        	catch(e)
        	{
        		trace("????????? ?????? ??????");
        	}


        	if(title == "????????????")
        	{
        		nexacro.getApplication().av_topFrame.form.formId = "";
        		nexacro.getApplication().av_topFrame.form.preUrl = "";
        		nexacro.getApplication().av_topFrame.form.preTitle = "";
        	}
        	else
        	{
        		const tRow = ds.findRow("MENU_NM", "????????????");
        		const tId = ds.getColumn(tRow, "MENU_CD");
        		const tUrl = ds.getColumn(tRow, "PAGE_URL");
        		const tTitle = ds.getColumn(tRow, "MENU_NM");

        		nexacro.getApplication().av_topFrame.form.formId = tId;
        		nexacro.getApplication().av_topFrame.form.preUrl = tUrl;
        		nexacro.getApplication().av_topFrame.form.preTitle = tTitle;
        	}
        };

        // ?????? ?????? focus ?????????
        this.__menu_onsetfocus = function(obj, e)
        {
        	this.fn_menuNonSelect();

        	const anyIcon = obj.icon;
        	const arAnyIcon = anyIcon.split("_");
        	const anyIcon2 = arAnyIcon[0] + "_on.png')";

        	obj.set_icon(anyIcon2);
        	obj.set_color("#234381");
        	obj.set_background("#ebebeb");
        };

        // ?????? ?????? ????????? ????????? ??????
        this.fn_menuNonSelect = function()
        {
        	for(let i = 0; i < this.fv_btnArr.length; i++) {
        		const anyIcon = this.div_menuControl.form.all[this.fv_btnArr[i].name].icon;
        		this.div_menuControl.form.all[this.fv_btnArr[i].name].set_background("");
        		if(anyIcon.indexOf("_on") != -1) {
        			const arAnyIcon = anyIcon.split("_");
        			const anyIcon2 = arAnyIcon[0] + "_off.png')";
        			this.div_menuControl.form.all[this.fv_btnArr[i].name].set_icon(anyIcon2);
        			this.div_menuControl.form.all[this.fv_btnArr[i].name].set_color("#999999");
        		}
        	}
        };

        // ?????? ????????? ??????
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
        			case '????????????' :
        				imgFileNm = "menu1_off.png";
        				break;
        			case '????????????' :
        				imgFileNm = "menu2_off.png";
        				break;
        			case '????????????' :
        				imgFileNm = "menu3_off.png";
        				break;
        			case '???????????????' :
        				imgFileNm = "menu4_off.png";
        				break;
        		}
        		const name = this.fv_btnArr[i].name;
        		this.div_menuControl.form.all[name].set_icon("url('theme://images/" + imgFileNm + "')");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.mFrameBottom_onload,this);
        };
        this.loadIncludeScript("mFrameBottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
