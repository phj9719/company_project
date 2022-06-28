(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUB_LOGOUT_POP");
            this.set_titletext("앱종료 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_pop_main","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#FFFFFF");
            obj.set_borderRadius("20px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_popTitle","30","26",null,"50","30",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("0");
            obj.set_text("로그아웃");
            obj.set_textAlign("center");
            obj.set_visible("true");
            obj.set_font("normal 700 30pt/normal \"Noto Sans KR\"");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Div("div_btn","30","220",null,"100","30",null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("1");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_close","25","15","160","70",null,null,null,null,null,null,this.div_pop_main.form.div_btn.form);
            obj.set_taborder("0");
            obj.set_text("아니오");
            obj.set_cssclass("btn_tDefaultGray");
            obj.set_visible("true");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            this.div_pop_main.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_ok","210","15","160","70",null,null,null,null,null,null,this.div_pop_main.form.div_btn.form);
            obj.set_taborder("1");
            obj.set_text("네");
            obj.set_cssclass("btn_tDefaultSkyblue");
            obj.set_visible("true");
            obj.set_font("normal 700 25pt/normal \"Noto Sans KR\"");
            this.div_pop_main.form.div_btn.addChild(obj.name, obj);

            obj = new Static("sta_text","56","145","345","50",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("2");
            obj.set_text("로그아웃 하시겠습니까?");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_tPopupText");
            obj.set_wordWrap("char");
            obj.set_visible("true");
            obj.set_font("normal 700 20pt/normal \"Noto Sans KR\"");
            this.div_pop_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Tablet",450,350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUB_LOGOUT_POP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUB_LOGOUT_POP.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUB_LOGOUT_POP.xfdl","lib::tpgm_com.xjs");
        this.registerScript("NUB_LOGOUT_POP.xfdl", function() {
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::tpgm_com.xjs"); /*include "lib::tpgm_com.xjs"*/;

        this.NUB_LOGOUT_POP_onload = function(obj,e)
        {

        };

        // 디바이스 버튼 이벤트
        this.NUB_LOGOUT_POP_ondevicebuttonup = function(obj,e)
        {
        	if(e.button ==2)
        	{
        		this.close();
        	}
        };

        // 네
        this.div_pop_main_div_btn_btn_ok_onclick = function(obj,e)
        {
        	this.close();
        	this.tLogout();
        };

        // 아니오
        this.div_pop_main_div_btn_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.formClick,this);
            this.addEventHandler("ondevicebuttonup",this.NUB_LOGOUT_POP_ondevicebuttonup,this);
            this.addEventHandler("onload",this.NUB_LOGOUT_POP_onload,this);
            this.div_pop_main.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.sta_popTitle.addEventHandler("onclick",this.formClick,this);
            this.div_pop_main.form.div_btn.form.btn_close.addEventHandler("onclick",this.div_pop_main_div_btn_btn_close_onclick,this);
            this.div_pop_main.form.div_btn.form.btn_ok.addEventHandler("onclick",this.div_pop_main_div_btn_btn_ok_onclick,this);
            this.div_pop_main.form.sta_text.addEventHandler("onclick",this.formClick,this);
        };
        this.loadIncludeScript("NUB_LOGOUT_POP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
