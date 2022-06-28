(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mAgreeFail");
            this.set_titletext("Mobile Agree Fail");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,708);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_login","0.00%","3.65%",null,null,"0.00%","0%",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Login Division");
            obj.set_background("transparent");
            obj.set_border("0px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","5.00%","0","360","100",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("0");
            obj.set_text("스마트 안심요양원\r\n회원가입미완료");
            obj.set_font("bold 22pt/normal \"Noto Sans CJK KR Black\"");
            obj.set_color("#555555");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_back","3.75%",null,null,"54","3.75%","5%",null,null,null,null,this.div_login.form);
            obj.set_taborder("1");
            obj.set_text("돌아가기");
            obj.set_cssclass("btn_basic");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("sta_txt","5%","130","426","150",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("2");
            obj.set_text("서비스이용약관 및 개인정보취급방침에\r\n동의하지 않아 로그인되지 않았습니다.\r\n스마트 안심요양원 사용을 위해\r\n해당 내용에 동의해 주세요.");
            this.div_login.addChild(obj.name, obj);

            obj = new ImageViewer("img_fail","5%","315","112","103",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("3");
            obj.set_background("url(\'theme://images/ico_loginfailed.png\') no-repeat center");
            this.div_login.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,708,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("mAgreeFail.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("mAgreeFail.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("mAgreeFail.xfdl","lib::mpgm_com.xjs");
        this.registerScript("mAgreeFail.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: mAgreeFail
         * 화면명   	: 회원가입 미완료
         * 화면설명 	: 이용약관 및 개인정보취급방침 동의를 하지 않아
        				  가입이 되지 않았음을 알려주는 화면
         * 작성일   	: 2021-07-05
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
        this.executeIncludeScript("lib::sct_com.xjs"); /*include "lib::sct_com.xjs"*/;
        this.executeIncludeScript("lib::pgm_com.xjs"); /*include "lib::pgm_com.xjs"*/;
        this.executeIncludeScript("lib::mpgm_com.xjs"); /*include "lib::mpgm_com.xjs"*/;
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.mAgreeFail_onload = function (obj, e)
        {

        	//this.form_onload_com(obj, e,false);

        	// topFrame 아래쪽 경계선
        	nexacro.getApplication().av_topFrame.set_border("1px solid transparent,1px solid transparent,1px solid #cccccc");

        };

        // 돌아가기
        this.div_login_btn_back_onclick = function(obj,e)
        {
        	nexacro.getApplication().av_loginFrame.set_formurl("MobileFrame::mFrameLogin.xfdl");
        	nexacro.getApplication().av_topFrame.form.sta_top.set_text("로그인");
        };

        // 모바일 디바이스 버튼 이벤트
        this.mAgreeFail_ondevicebuttonup = function(obj,e)
        {
        	// 뒤로가기 버튼
        	if(e.button == 2)
        	{
        		nexacro.getApplication().av_loginFrame.set_formurl("MobileFrame::mFrameLogin.xfdl");
        		nexacro.getApplication().av_topFrame.form.sta_top.set_text("로그인");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.formClick,this);
            this.addEventHandler("onload",this.mAgreeFail_onload,this);
            this.addEventHandler("ondevicebuttonup",this.mAgreeFail_ondevicebuttonup,this);
            this.div_login.addEventHandler("onclick",this.formClick,this);
            this.div_login.form.sta_title.addEventHandler("onclick",this.formClick,this);
            this.div_login.form.btn_back.addEventHandler("onclick",this.div_login_btn_back_onclick,this);
        };
        this.loadIncludeScript("mAgreeFail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
