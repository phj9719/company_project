(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameMDI");
            this.set_titletext("MDI Frame");
            this.set_cssclass("tab_MDI");
            this.set_background("rgba(255,255,255,1)");
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            this.set_border("1px solid #cccccc,0px solid #cccccc,0px solid #cccccc");
            if (Form == this.constructor)
            {
                this._setFormPosition(1666,60);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("tab_mdi","30",null,null,"32","276","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_cssclass("tab_MDI");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.tab_mdi);
            obj.set_text("tabpage1");
            this.tab_mdi.addChild(obj.name, obj);

            obj = new Button("btn_closeAll",null,"5","40","40","67",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MDI_AllClose");
            obj.set_tooltiptext("Close All");
            obj.set_visible("true");
            obj.set_cursor("pointer");
            obj.set_border("1px solid transparent");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cascade",null,"5","40","40","185",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_tooltiptext("창모드");
            obj.set_background("url(\'imagerc::window_small.png\') no-repeat center center");
            obj.set_cursor("pointer");
            obj.set_border("1px solid transparent");
            this.addChild(obj.name, obj);

            obj = new Button("btn_maximize",null,"5","40","40","225",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_tooltiptext("최대화");
            obj.set_background("url(\'imagerc::window_big.png\') no-repeat center center");
            obj.set_cursor("pointer");
            obj.set_border("1px solid transparent");
            this.addChild(obj.name, obj);

            obj = new Button("btn_vertical",null,"5","40","40","146",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("true");
            obj.set_tooltiptext("세로분할");
            obj.set_background("url(\'imagerc::window_col.png\') no-repeat center center");
            obj.set_cursor("pointer");
            obj.set_border("1px solid transparent");
            this.addChild(obj.name, obj);

            obj = new Button("btn_horizontal",null,"5","40","40","107",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("true");
            obj.set_tooltiptext("가로분할");
            obj.set_background("url(\'imagerc::window_row.png\') no-repeat center center");
            obj.set_cursor("pointer");
            obj.set_border("1px solid transparent");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeFrame",null,"0","40","20","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cursor("pointer");
            obj.set_text("▲");
            obj.set_borderRadius("0px 0px 2px 2px");
            obj.set_background("#ffffff");
            obj.set_color("#999999");
            obj.set_font("8pt/normal \"Noto Sans CJK KR Regular\"");
            obj.set_border("1px solid transparent,1px solid #d9d9d9,1px solid #d9d9d9");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1666,60,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameMDI.xfdl", function() {
        /***********************************************************************
         * 화면ID   : frmWork
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

        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.fv_isOpen = true;

        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.frameMDI_onload = function (obj, e)
        {
        	this.fn_removeAllPages();
        	var btnSpinUp = this.tab_mdi.spinupbutton;
        	var btnSpinDown = this.tab_mdi.spindownbutton;

        	// btnSpinUp.set_cssclass("btn_MDI_TabSpinup");
        	// btnSpinDown.set_cssclass("btn_MDI_TabSpindown");

        	// btnSpinUp.set_visible(false);
        	// btnSpinDown.set_visible(false);
        };

        /***********************************************************************
         * Form Initialize Functions
         ***********************************************************************/

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.tab_mdi_onchanged = function (obj, e)
        {
        	var winKey = obj.tabpages[e.postindex].name;

        	nexacro.getApplication().av_workFrameSet[winKey].setFocus();
        	if (nexacro.getApplication().gds_bookmark.findRow("MENU_CD", winKey.substring(0, winKey.indexOf("_"))) != -1)
        	{
        	}
        	else
        	{
        	}
        };

        this.tab_mdi_onextrabuttonclick = function (obj, e)
        {
        	Sct.closeForm(obj, e.index);
        	if(this.tab_mdi.getTabpageCount() == 0){
        		nexacro.getApplication().av_homeFrame.set_formurl("");
        		nexacro.getApplication().av_homeFrame.set_formurl("Frame::frameHome.xfdl");
        	}
        };

        this.btn_closeAll_onclick = function (obj, e)
        {
        	for (var i = (this.tab_mdi.getTabpageCount() - 1); i >= 0; --i)
        	{
        		Sct.closeForm(this.tab_mdi, i);
        		if(i == 0){
        			nexacro.getApplication().av_homeFrame.set_formurl("");
        			nexacro.getApplication().av_homeFrame.set_formurl("Frame::frameHome.xfdl");
        		}
        	}

        	this.fn_showButtons(false);

        };

        this.btn_cascade_onclick = function (obj, e)
        {
        	if (nexacro.getApplication().av_homeFrame.visible)
        	{
        		return;
        	}

        	if (nexacro.getApplication().av_workFrameSet.frames.length == 1)
        	{
        		return;
        	}

        	for (var i = 0; i < nexacro.getApplication().av_workFrameSet.frames.length; i++)
        	{
        		var frame = nexacro.getApplication().av_workFrameSet.frames[i];
        		frame.set_openstatus("normal");
        		frame.set_showtitlebar(true);
        		frame.set_titlebarheight("25px");
        		frame.set_showtitleicon(false);
        		frame.set_dragmovetype("normal");
        		frame.set_border("2px solid #808080ff");
        	}
        	nexacro.getApplication().av_workFrameSet.arrange("cascade");
        };

        this.btn_maximize_onclick = function (obj, e)
        {
        	if (nexacro.getApplication().av_homeFrame.visible)
        	{
        		return;
        	}

        	if (nexacro.getApplication().av_workFrameSet.frames.length == 1)
        	{
        		return;
        	}

        	var curFormId = this.tab_mdi.tabpages[this.tab_mdi.tabindex].name;
        	for (var i = 0; i < nexacro.getApplication().av_workFrameSet.frames.length; i++)
        	{
        		var frame = nexacro.getApplication().av_workFrameSet.frames[i];
        		frame.set_openstatus("maximize");
        		frame.set_showtitlebar(false);
        		frame.set_dragmovetype("none");
        		frame.set_border("0px none #808080");
        	}

        	var idx = this.tab_mdi.tabindex;
        	if (idx == 0)
        	{
        		this.tab_mdi.set_tabindex(this.tab_mdi.getTabpageCount() - 1);
        	}
        	else
        	{
        		this.tab_mdi.set_tabindex(0);
        	}
        	this.tab_mdi.set_tabindex(idx);

        	// application.av_workFrameSet.frames[application.gv_curWinKey].setFocus();
        	nexacro.getApplication().av_workFrameSet.frames[curFormId].setFocus();
        };

        this.btn_vertical_onclick = function (obj, e)
        {
        	if (nexacro.getApplication().av_homeFrame.visible)
        	{
        		return;
        	}

        	if (nexacro.getApplication().av_workFrameSet.frames.length == 1)
        	{
        		return;
        	}

        	for (var i = 0; i < nexacro.getApplication().av_workFrameSet.frames.length; i++)
        	{
        		var frame = nexacro.getApplication().av_workFrameSet.frames[i];
        		frame.set_openstatus("normal");
        		frame.set_showtitlebar(true);
        		frame.set_titlebarheight("25px");
        		frame.set_showtitleicon(false);
        		frame.set_dragmovetype("normal");
        		frame.set_border("2px solid #808080");
        	}
        	nexacro.getApplication().av_workFrameSet.arrange("tilevertical");
        };

        this.btn_horizontal_onclick = function (obj, e)
        {
        	if (nexacro.getApplication().av_homeFrame.visible)
        	{
        		return;
        	}

        	if (nexacro.getApplication().av_workFrameSet.frames.length == 1)
        	{
        		return;
        	}

        	for (var i = 0; i < nexacro.getApplication().av_workFrameSet.frames.length; i++)
        	{
        		var frame = nexacro.getApplication().av_workFrameSet.frames[i];
        		frame.set_openstatus("normal");
        		frame.set_showtitlebar(true);
        		frame.set_titlebarheight("25px");
        		frame.set_showtitleicon(false);
        		frame.set_dragmovetype("normal");
        		frame.set_border("2px solid #808080");
        	}
        	nexacro.getApplication().av_workFrameSet.arrange("tilehorizontal");
        };

        this.tab_mdi_onsetfocus = function (obj, e)
        {
        	this.fn_showButtons(true);
        	//nexacro.getApplication().av_homeFrame.set_visible(false);
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
        // 생성된 TabPage를 모두 삭제한다.
        this.fn_removeAllPages = function ()
        {
        	var tabPages = this.tab_mdi.tabpages;
        	var nCnt = tabPages.length;

        	for (var i = nCnt; i > 0; --i)
        	{
        		this.tab_mdi.removeTabpage(i - 1);
        	}
        };

        // TabPage를 생성한다. (메뉴 선택 시)
        this.fn_addTabpage = function (pageId, title)
        {
        	// this.btn_home.set_cssclass("btn_MDI_MDIList");

        	var tabPages = this.tab_mdi.tabpages;
        	var nCnt = tabPages.length;

        	var nIndex = this.tab_mdi.insertTabpage(pageId, nCnt, "", title);

        	// var rtn = this.tab_mdi.tabpages[nIndex].addEventHandler("onclick", this.tabPage_onclick, this);
        };

        // 오른쪽 버튼들의 Visible 상태 변경
        this.fn_showButtons = function (tf)
        {
        	tf = true;

        	this.btn_cascade.set_visible(tf);
        	this.btn_closeAll.set_visible(tf);
        	this.btn_horizontal.set_visible(tf);
        	this.btn_maximize.set_visible(tf);
        	this.btn_vertical.set_visible(tf);
        };

        /**
         * 설명 	: Top 프레임을 닫는다.
         * params  	: None
         * return Type 	: None
         */
        this.fn_closeFrame = function ()
        {
        	nexacro.getApplication().av_vFrameSet0.set_separatesize(nexacro.getApplication().av_hideTopModeSize);
        	// this.sta_hideBar.set_visible(true);
        	this.btn_closeFrame.set_text("▼");
        };

        /**
         * 설명 	: Top 프레임을 연다.
         * params  	: None
         * return Type 	: None
         */
        this.fn_openFrame = function ()
        {
        	nexacro.getApplication().av_vFrameSet0.set_separatesize(nexacro.getApplication().av_showTopModeSize);
        	// this.sta_hideBar.set_visible(false);
        	this.btn_closeFrame.set_text("▲");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frameMDI_onload,this);
            this.tab_mdi.addEventHandler("onextrabuttonclick",this.tab_mdi_onextrabuttonclick,this);
            this.tab_mdi.addEventHandler("onsetfocus",this.tab_mdi_onsetfocus,this);
            this.tab_mdi.addEventHandler("onchanged",this.tab_mdi_onchanged,this);
            this.btn_closeAll.addEventHandler("onclick",this.btn_closeAll_onclick,this);
            this.btn_cascade.addEventHandler("onclick",this.btn_cascade_onclick,this);
            this.btn_maximize.addEventHandler("onclick",this.btn_maximize_onclick,this);
            this.btn_vertical.addEventHandler("onclick",this.btn_vertical_onclick,this);
            this.btn_horizontal.addEventHandler("onclick",this.btn_horizontal_onclick,this);
            this.btn_closeFrame.addEventHandler("onclick",this.btn_closeFrame_onclick,this);
        };
        this.loadIncludeScript("frameMDI.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
