(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mFrameTop");
            this.set_titletext("Mobile Top Frame");
            this.set_scrolltype("none");
            this.set_stepalign("center middle");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,60);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_top","0","0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("로그인");
            obj.set_textAlign("center");
            obj.set_font("normal 700 20pt/normal \"Noto Sans KR\"");
            obj.set_color("#082c71");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_back","11","9","44","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_icon("url(\'theme://images/ico_back1.png\')");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,60,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("mFrameTop.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("mFrameTop.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("mFrameTop.xfdl","lib::mpgm_com.xjs");
        this.registerScript("mFrameTop.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: mFrameTop
         * 화면명   	: mFrameTop
         * 화면설명 	: 모바일 위쪽에 현재 화면 명과 상황에 따라
        				  뒤로가기 버튼을 표시한다.
         * 작성일   	: 2021-07-06
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
        this.formId;
        this.preUrl;
        this.preTitle;
        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        this.mFrameTop_onload = function(obj,e)
        {
        	trace("탑 온로드");

        	// 쿠키로 로그인할 경우 첫화면 제목 세팅
        	let firstTitle;
        	if(nexacro.getApplication().av_workFrameSet.frames[0] != undefined)
        	{
        		firstTitle = nexacro.getApplication().av_workFrameSet.frames[0].form.getOwnerFrame().arguments["menuTitle"];
        		this.sta_top.set_text(firstTitle);
        	}
        };

        this.btn_back_onclick = function(obj,e)
        {
        	this.mMenuOpen(this.formId, this.preUrl, this.preTitle);

        	this.btn_back.set_visible(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.mFrameTop_onload,this);
            this.btn_back.addEventHandler("onclick",this.btn_back_onclick,this);
        };
        this.loadIncludeScript("mFrameTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
