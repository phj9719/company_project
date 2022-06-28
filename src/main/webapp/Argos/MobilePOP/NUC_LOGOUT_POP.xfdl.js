(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUC_LOGOUT_POP");
            this.set_titletext("모바일 로그아웃 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_pop_main","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_borderRadius("24px");
            obj.set_background("#FFFFFF");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0","20%","100%","50",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("0");
            obj.set_text("로그아웃");
            obj.set_cssclass("sta_pop_title");
            obj.set_textAlign("center");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Static("sta_text","0","45%","100%","30",null,null,null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("1");
            obj.set_text("로그아웃 하시겠습니까?");
            obj.set_cssclass("sta_pop_txt");
            obj.set_textAlign("center");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_cancel","0",null,"175","60",null,"0",null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.div_pop_main.addChild(obj.name, obj);

            obj = new Button("btn_logout",null,null,"175","60","0","0",null,null,null,null,this.div_pop_main.form);
            obj.set_taborder("3");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_pop_yes");
            this.div_pop_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",350,300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUC_LOGOUT_POP.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUC_LOGOUT_POP.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUC_LOGOUT_POP.xfdl","lib::mpgm_com.xjs");
        this.registerScript("NUC_LOGOUT_POP.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: NUC_LOGOUT_POP
         * 화면명   	: 로그아웃
         * 화면설명 	: 모바일 로그아웃 팝업
         * 작성일   	: 2021-07-14
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


        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.NUC_LOGOUT_POP_onload = function(obj,e)
        {

        };

        /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 취소
        this.div_pop_main_btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        // 로그아웃
        this.div_pop_main_btn_logout_onclick = function(obj,e)
        {
        	this.mLogout();
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NUC_LOGOUT_POP_onload,this);
            this.div_pop_main.form.btn_cancel.addEventHandler("onclick",this.div_pop_main_btn_cancel_onclick,this);
            this.div_pop_main.form.btn_logout.addEventHandler("onclick",this.div_pop_main_btn_logout_onclick,this);
        };
        this.loadIncludeScript("NUC_LOGOUT_POP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
