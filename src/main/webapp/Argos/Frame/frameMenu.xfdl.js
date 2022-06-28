(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameMenu");
            this.set_titletext("Menu Frame");
            this.set_background("rgba(255,255,255,1)");
            if (Form == this.constructor)
            {
                this._setFormPosition(270,815);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TP\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"INT\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SHOW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEAR_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"PRN_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"APPV_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"C_MENU_GRP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_menu","0","0","125","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Menu");
            obj.set_cssclass("left_tbtn");
            obj.set_background("#2d5dbb");
            obj.set_color("#ffffff");
            obj.set_borderRadius("0px");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_cursor("pointer");
            obj.set_border("1px solid #c0cfeb,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_menu","0","114","250",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_menu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_border("#e5e5e5");
            obj.set_treeuseimage("false");
            obj.set_treeusebutton("noclick");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"193\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:MENU_NM\" treelevel=\"bind:MENU_LEVEL\" cssclass=\"expr:dataset.getColumn(currow, &quot;MENU_LEVEL&quot;)==0?'treeMenuBlack':dataset.rowposition==currow?'treeMenuBlue':'treeMenuDefault'\"/><Cell col=\"1\" text=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bookmark","125","0","125","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("My Menu");
            obj.set_cssclass("right_tbtn");
            obj.set_background("#2d5dbb");
            obj.set_color("#ffffff");
            obj.set_borderRadius("0px");
            obj.set_font("normal 700 13pt/normal \"Noto Sans KR\"");
            obj.set_cursor("pointer");
            obj.set_border("1px solid #c0cfeb,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Div("div_title","0.00%","50","250","64",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#6c8dcf");
            obj.set_border("1px solid #c0cfeb, 0px none, 0px none");
            obj.set_font("bold 20pt \"맑은 고딕\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","24.80%","11",null,"44","6.00%",null,null,null,null,null,this.div_title.form);
            obj.set_taborder("2");
            obj.set_font("normal 700 14pt/normal \"Noto Sans KR\"");
            obj.set_color("#ffffff");
            obj.set_text("ARGOS");
            this.div_title.addChild(obj.name, obj);

            obj = new ImageViewer("img_titleicon","5.20%","12",null,"39","71.60%",null,null,null,null,null,this.div_title.form);
            obj.set_taborder("3");
            obj.set_background("transparent");
            obj.set_border("1px none rgba(229,229,229,1)");
            this.div_title.addChild(obj.name, obj);

            obj = new Grid("grd_bookmark","0","114","250",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("gds_bookmark");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_visible("false");
            obj.set_border("0px none rgba(128,128,128,1)");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"193\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_hideBar",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_border("0px solid rgba(128,128,128,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","124","5","1","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_background("#7fa6ed");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeFrame",null,"50","20","50","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("url(\'imagerc::menubtn_close.png\') no-repeat right center transparent");
            obj.set_border("0px solid rgba(128,128,128,1)");
            obj.set_cursor("pointer");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","125","5","1","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div01");
            obj.set_background("#c0cfeb");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",270,815,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("frameMenu.xfdl","lib::sct_util.xjs");
        this.registerScript("frameMenu.xfdl", function() {
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
         * 2018 02 10     김정록
         ***********************************************************************
         */

        /***********************************************************************
         * Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_isOpen = true;
        this.fv_monitor_flag;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.frameMenu_onload = function (obj, e)
        {
        	const group = nexacro.getApplication().gds_menu.getColumn(0, "MENU_GRP");
        	//this.fn_makeMenu(group);
        	trace("frameMenu ONLOAD");
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
        };

        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.btn_menu_onclick = function (obj, e)
        {
        	const mCd = this.ds_menu.getColumn(0, "MENU_CD");
        	const mCom = this.ds_menu.getColumn(0, "COMPANY_CD");
        	const bId = "btn_" + mCd + "_" + mCom;
        	const button = nexacro.getApplication().av_topFrame.form.div_menu_control.form.div_topMenu.form.all[bId];
        	nexacro.getApplication().av_topFrame.form.__menu_onclick(button, e);
        	this.grd_menu.set_visible(true);
        	this.grd_bookmark.set_visible(false);
        };

        this.btn_bookmark_onclick = function (obj, e)
        {
        	const txt = "My Menu";
        	this.div_title.form.sta_title.set_text(txt);
        	this.div_title.form.img_titleicon.set_image("");
        	nexacro.getApplication().av_topFrame.form.fn_menuNonSelect();
        	this.grd_menu.set_visible(false);
        	this.grd_bookmark.set_visible(true);
        };

        this.grd_menu_oncellclick = function (obj, e)
        {
        	obj.set_enableevent(false);

        	const objDs = obj.getBindDataset();
        	const nRow = e.row;
        	const sUrl = objDs.getColumn(nRow, "PAGE_URL");

        	if (Sct.Util.isEmpty(sUrl))
        	{
        		//트리구조 MENU_LEVEL 하드코딩, MENU_LEVEL 4 이상이면 수정 해줘야함

        // 		for(var i = 0; i < obj.rowcount; i ++)
        // 		{
        // 			if(Number(this.grd_menu.getCellValue(i,1)) == 1)
        // 			{
        // 				if(i != this.grd_menu.getTreeRow(e.row)){
        // 					this.grd_menu.setTreeStatus(i, false);
        // 				}else{
        // 					if(this.grd_menu.getTreeStatus(i)){
        // 						this.grd_menu.setTreeStatus(i, false);
        // 					}else{
        // 						this.grd_menu.setTreeStatus(i, true);
        // 					}
        // 				}
        // 			}
        // 			else if(Number(this.grd_menu.getCellValue(i,1)) == 2){
        // 				if(this.grd_menu.isTreeLeafRow(i,false) == false){
        // 					this.grd_menu.setTreeStatus(i, true);
        // 				}
        // 			}
        // 		}

        		obj.set_enableevent(true);
        		return;
        	}

        	if (Sct.Util.getLength(sUrl) > 0)
        	{
        		if(sUrl != "NU::NUA803QR.xfdl" && sUrl != "NU::NUA804QR.xfdl"
        			&& sUrl != "NU::NUA801QR.xfdl" && sUrl != "NU::NUA808QR.xfdl"
        			&& sUrl != "NU::NUA803QR_D.xfdl" && sUrl != "NU::NUA808QR_D.xfdl"){
        			Sct.chkOpenMenu(objDs.getColumn(nRow, "MENU_CD"), null, false);
        		}else{
        			const param = {
        					MULTI_YN : "N"
        				};
        			if(sUrl == "NU::NUA803QR.xfdl"){
        				Sct.monitorPopup(this, "MONITOR", 500, 226, "", param, "CM_POP::CM_MONITOR_PP.xfdl", "fn_popCallback");
        			}
        			if(sUrl == "NU::NUA804QR.xfdl"){
        				Sct.monitorPopup(this, "MONITOR", 500, 226, "", param, "CM_POP::CM_MONITOR_4DIV_PP.xfdl", "fn_popCallback");
        			}
        			if(sUrl == "NU::NUA801QR.xfdl"){
        				Sct.monitorPopup(this, "MONITOR", 500, 226, "", param, "NU::NUA801QR.xfdl", "fn_popCallback");
        			}
        			if (sUrl == "NU::NUA808QR.xfdl")
        			{
        				Sct.monitorPopup(this, "MONITOR", 500, 226, "", param, "NU::NUA808QR.xfdl", "fn_popCallback");
        			}
        			if (sUrl == "NU::NUA803QR_D.xfdl")
        			{
        				Sct.monitorPopup(this, "MONITOR", 500, 226, "", param, "NU::NUA803QR_D.xfdl", "fn_popCallback");
        			}
        			if (sUrl == "NU::NUA808QR_D.xfdl")
        			{
        				Sct.monitorPopup(this, "MONITOR", 500, 226, "", param, "NU::NUA808QR_D.xfdl", "fn_popCallback");
        			}
        		}
        		if (nexacro.getApplication().gds_bookmark.findRow("MENU_CD", objDs.getColumn(nRow, "MENU_CD")) != -1)
        		{
        			nexacro.getApplication().av_topFrame.form.div_user.form.btn_bookmark.set_background("url('imagerc::btn_bookmark_on.png') no-repeat transparent");
        		}
        		else
        		{
        			nexacro.getApplication().av_topFrame.form.div_user.form.btn_bookmark.set_background("url('imagerc::btn_bookmark_off.png') no-repeat transparent");
        		}
        	}
        	else
        	{
        		// TODO
        	}

        	obj.set_enableevent(true);

        };

        this.grd_bookmark_oncellclick = function (obj, e)
        {
        	obj.set_enableevent(false);

        	const menuCd = nexacro.getApplication().gds_bookmark.getColumn(e.row, "MENU_CD");
        	const fRow = nexacro.getApplication().gds_menu.findRow("MENU_CD", menuCd);

        	if (fRow < 0)
        	{
        		return;
        	}

        	const sUrl = nexacro.getApplication().gds_menu.getColumn(fRow, "PAGE_URL");

        	if (Sct.Util.isEmpty(sUrl))
        	{
        		obj.set_enableevent(true);
        		return;
        	}

        	if (Sct.Util.getLength(sUrl) > 0)
        	{
        		Sct.chkOpenMenu(menuCd, null, false);
        		if (nexacro.getApplication().gds_bookmark.findRow("MENU_CD", menuCd) != -1)
        		{
        			nexacro.getApplication().av_topFrame.form.div_user.form.btn_bookmark.set_background("url('imagerc::btn_bookmark_on.png') no-repeat transparent");
        // 			nexacro.getApplication().av_topFrame.form.div_globalNav.form.gnb_04.set_background("transparent URL('imagerc::btn_WF_Bookmark_O.png') no-repeat");
        // 			nexacro.getApplication().av_topFrame.form.div_globalNav.form.gnb_04.set_top(3);
        		}
        		else
        		{
        			nexacro.getApplication().av_topFrame.form.div_user.form.btn_bookmark.set_background("url('imagerc::btn_bookmark_off.png') no-repeat transparent");
        // 			nexacro.getApplication().av_topFrame.form.div_globalNav.form.gnb_04.set_background("transparent URL('imagerc::gnb_04.png') no-repeat");
        // 			nexacro.getApplication().av_topFrame.form.div_globalNav.form.gnb_04.set_top(6);
        		}
        	}
        	else
        	{
        		// TODO
        	}

        	obj.set_enableevent(true);
        };

        this.fv_searchRow = -1;
        this.btn_search_onclick = function (obj, e)
        {
        	this.grd_menu.set_treeinitstatus("expand,all");
        	this.ds_menu.set_enableevent(false);

        	let firstRow = -1;
        	for (let i = (this.fv_searchRow + 1); i < this.ds_menu.rowcount; i++)
        	{
        		const name = this.ds_menu.getColumn(i, "MENU_NM");
        		if (Sct.Util.isEmpty(this.edt_search.value.toString().trim()))
        		{
        			this.ds_menu.setColumn(i, "SEARCH_FLAG", 0);
        		}
        		else
        		{
        			if (name.indexOf(this.edt_search.value.toString().trim()) >= 0)
        			{
        				this.ds_menu.setColumn(i, "SEARCH_FLAG", 1);
        				if (firstRow == -1)
        				{
        					this.fv_searchRow = i;
        					firstRow = i;
        				}
        			}
        			else
        			{
        				this.ds_menu.setColumn(i, "SEARCH_FLAG", 0);
        			}
        		}
        	}
        	this.ds_menu.set_enableevent(true);
        	if (firstRow != -1)
        	{
        		this.ds_menu.set_rowposition(firstRow);
        	}
        };

        this.edt_search_onchanged = function (obj, e)
        {
        	this.fv_searchRow = -1;
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

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        /**
         * 설명 	: 해당 메뉴를 구성한다.
         * params  	: 1. grp - 메뉴 그룹
         * return Type 	: None
         */
        this.fn_makeMenu = function (grp, txt, icon)
        {
        	if (txt == null)
        	{
        		txt = "ARGOS";
        	}
        	if (this.grd_bookmark.visible == true)
        	{
        		this.grd_bookmark.set_visible(false);
        		this.grd_menu.set_visible(true);
        	}
        	this.div_title.form.img_titleicon.set_image(icon);
        	this.div_title.form.sta_title.set_text(txt);
        	this.ds_menu.clearData();

        	nexacro.getApplication().gds_menu.set_enableevent(false);
        	//보이기여부 +" && SHOW_YN=='Y' "
        	//nexacro.getApplication().gds_menu.filter("MENU_GRP==" + nexacro.wrapQuote(grp)+" && SHOW_YN=='Y' && MENU_LEVEL!='0'");
        	nexacro.getApplication().gds_menu.filter("C_MENU_GRP==" + nexacro.wrapQuote(grp));
        	this.ds_menu.copyData(nexacro.getApplication().gds_menu, true);
        	this.ds_menu.addColumn("SEARCH_FLAG", "string", 1);
        	nexacro.getApplication().gds_menu.filter("");
        	nexacro.getApplication().gds_menu.set_enableevent(true);

        };

        /**
         * 설명 	: 메뉴 프레임을 닫는다.
         * params  	: None
         * return Type 	: None
         */
        this.fn_closeFrame = function ()
        {
        	nexacro.getApplication().av_hFrameSet0.set_separatesize(nexacro.getApplication().av_hideMenuModeSize);
        	this.sta_hideBar.set_visible(true);
        	//this.btn_closeFrame.set_text(">");1
        	this.btn_closeFrame.set_background("url('imagerc::menubtn_open.png') no-repeat right center transparent");
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
        	this.sta_hideBar.set_visible(false);
        	//this.btn_closeFrame.set_text("<");
        	this.btn_closeFrame.set_background("url('imagerc::menubtn_close.png') no-repeat right center transparent");
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
            this.addEventHandler("onload",this.frameMenu_onload,this);
            this.btn_menu.addEventHandler("onclick",this.btn_menu_onclick,this);
            this.grd_menu.addEventHandler("oncellclick",this.grd_menu_oncellclick,this);
            this.btn_bookmark.addEventHandler("onclick",this.btn_bookmark_onclick,this);
            this.grd_bookmark.addEventHandler("oncellclick",this.grd_bookmark_oncellclick,this);
            this.btn_closeFrame.addEventHandler("onclick",this.btn_closeFrame_onclick,this);
        };
        this.loadIncludeScript("frameMenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
