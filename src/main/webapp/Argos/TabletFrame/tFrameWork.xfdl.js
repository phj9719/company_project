(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("tFrameWork");
            this.set_titletext("Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1180,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_form","0%","0%",null,null,"0%","0%",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",1180,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("tFrameWork.xfdl","lib::sct_util.xjs");
        this.addIncludeScript("tFrameWork.xfdl","lib::tpgm_com.xjs");
        this.registerScript("tFrameWork.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: tFrameWork
         * 화면명   	: tFrameWork
         * 화면설명 	: 태블릿 업무 화면을 반영한다.
         * 작성일   	: 2021-05-27
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
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;
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
        this.tFrameWork_onload = function(obj,e)
        {
        	this.resetScroll();

        	this.winKey = this.getOwnerFrame().arguments["winKey"];
        	this.menuId = this.getOwnerFrame().arguments["menuId"];
        	this.menuUrl = this.getOwnerFrame().arguments["menuUrl"];
        	this.menuTitle = this.getOwnerFrame().arguments["menuTitle"];
        	this.buttonAuth = this.getOwnerFrame().arguments["buttonAuth"];

        	this.div_form.set_url(this.menuUrl);

        	//Sct.addOpenMenu(this.menuId, this.winKey);
        	nexacro.getApplication().gv_curId = this.winKey;

        	const pgmId = this.menuUrl.substring(this.menuUrl.lastIndexOf(":") + 1, this.menuUrl.indexOf("."));
        	nexacro.getApplication().gv_curWinKey = pgmId;

        };

        this.tFrameWork_onsetfocus = function(obj,e)
        {
        	const pgmId = this.menuUrl.substring(this.menuUrl.lastIndexOf(":") + 1, this.menuUrl.indexOf("."));
        	nexacro.getApplication().gv_curId = this.winKey;
        	nexacro.getApplication().gv_curWinKey = pgmId;
        };

        this.tFrameWork_ondevicebuttonup = function(obj,e)
        {
        	if(e.button == 2)
        	{
        		//nexacro.getApplication().exit();

        		const param = {};
        		//this.makeStandardObject();
        		//this.standardPlugin.callMethod("APPEXIT", param);

        		Sct.tPopup(this, "NUB_APPEXIT_POP", 350, 350, param, "TabletPOP::NUB_APPEXIT_POP.xfdl", "fn_popCallback");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.tFrameWork_onload,this);
            this.addEventHandler("onsetfocus",this.tFrameWork_onsetfocus,this);
            this.addEventHandler("ondevicebuttonup",this.tFrameWork_ondevicebuttonup,this);
            this.addEventHandler("onclick",this.formClick,this);
            this.div_form.addEventHandler("onclick",this.formClick,this);
        };
        this.loadIncludeScript("tFrameWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
