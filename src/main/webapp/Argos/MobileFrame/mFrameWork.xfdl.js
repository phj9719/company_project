(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mFrameWork");
            this.set_titletext("Mobile Work Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,618);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_form","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,618,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("mFrameWork.xfdl","lib::sct_util.xjs");
        this.addIncludeScript("mFrameWork.xfdl","lib::mpgm_com.xjs");
        this.registerScript("mFrameWork.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: mFrameWork
         * 화면명   	: mFrameWork
         * 화면설명 	: 모바일 업무 화면을 반영한다.
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
         * Include
         ***********************************************************************/
        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/;
        this.executeIncludeScript("lib::mpgm_com.xjs"); /*include "lib::mpgm_com.xjs"*/;
        /***********************************************************************
         * Form Variables
         ***********************************************************************/
        this.winKey; //Window Key - 화면 ID
        this.menuId; //메뉴 ID
        this.menuUrl; //오픈할 Form Url
        this.menuTitle; //화면 제목 ( = 메뉴명)
        this.buttonAuth; //화면의 Button 권한
        this.param;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.mFrameWork_onload = function(obj,e)
        {
        	this.resetScroll();

        	this.winKey = this.getOwnerFrame().arguments["winKey"];
        	this.menuId = this.getOwnerFrame().arguments["menuId"];
        	this.menuUrl = this.getOwnerFrame().arguments["menuUrl"];
        	this.menuTitle = this.getOwnerFrame().arguments["menuTitle"];
        	this.buttonAuth = this.getOwnerFrame().arguments["buttonAuth"];

        	this.div_form.set_url(this.menuUrl);

        	nexacro.getApplication().gv_curId = this.winKey;

        	const pgmId = this.menuUrl.substring(this.menuUrl.lastIndexOf(":") + 1, this.menuUrl.indexOf("."));
        	nexacro.getApplication().gv_curWinKey = pgmId;

        	// 메뉴 open시 topFrame 변경
        	this.topFrameSetting();
        };

        this.mFrameWork_onsetfocus = function(obj,e)
        {
        	const pgmId = this.menuUrl.substring(this.menuUrl.lastIndexOf(":") + 1, this.menuUrl.indexOf("."));
        	nexacro.getApplication().gv_curId = this.winKey;
        	nexacro.getApplication().gv_curWinKey = pgmId;
        };

        this.mFrameWork_ondevicebuttonup = function(obj,e)
        {
        	// 뒤로가기 버튼
        	if(e.button == 2)
        	{
        		// 어플리케이션 종료
        		//nexacro.getApplication().exit();

        		this.makeStandardObject();
        		const param = {};
        		this.standardPlugin.callMethod("APPEXIT", param);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.mFrameWork_onload,this);
            this.addEventHandler("onsetfocus",this.mFrameWork_onsetfocus,this);
            this.addEventHandler("ondevicebuttonup",this.mFrameWork_ondevicebuttonup,this);
        };
        this.loadIncludeScript("mFrameWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
