(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mAgreeSuccess");
            this.set_titletext("Mobile Agree Success");
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
            obj.set_text("스마트 안심요양원\r\n회원가입완료");
            obj.set_font("bold 22pt/normal \"Noto Sans CJK KR Black\"");
            obj.set_color("#555555");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_back","4.17%",null,null,"54","4.38%","5%",null,null,null,null,this.div_login.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_basic");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("sta_txt","5%","130","426","150",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("2");
            obj.set_text("스마트 안심요양원 가입이\r\n완료되었습니다.");
            this.div_login.addChild(obj.name, obj);

            obj = new ImageViewer("img_fail","5%","315","112","103",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("3");
            obj.set_background("url(\'theme://images/ico_loginSuccess.png\') no-repeat center");
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
        this.addIncludeScript("mAgreeSuccess.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("mAgreeSuccess.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("mAgreeSuccess.xfdl","lib::mpgm_com.xjs");
        this.registerScript("mAgreeSuccess.xfdl", function() {
        /***********************************************************************
         * 화면ID   	: mAgreeSuccess
         * 화면명   	: 회원가입완료
         * 화면설명 	: 이용약관 및 개인정보취급방침에 동의하여
        				  가입이 성공적으로 완료되었다고 알려주는 화면
         * 작성일   	: 2021-09-02
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
        this.mAgreeSuccess_onload = function (obj, e)
        {
        	// topFrame 아래쪽 경계선
        	nexacro.getApplication().av_topFrame.set_border("1px solid transparent,1px solid transparent,1px solid #cccccc");
        };

        // 확인
        this.div_login_btn_back_onclick = function(obj,e)
        {
        	nexacro.getApplication().av_loginFrame.set_formurl("MobileFrame::mFrameLogin.xfdl");
        	nexacro.getApplication().av_topFrame.form.sta_top.set_text("로그인");
        	nexacro.getApplication().gds_mUserInfo.clearData();
        };

        // 모바일 디바이스 버튼 이벤트
        this.mAgreeSuccess_ondevicebuttonup = function(obj,e)
        {
        	// 뒤로가기 버튼
        	if(e.button == 2)
        	{
        		nexacro.getApplication().av_loginFrame.set_formurl("MobileFrame::mFrameLogin.xfdl");
        		nexacro.getApplication().av_topFrame.form.sta_top.set_text("로그인");
        		nexacro.getApplication().gds_mUserInfo.clearData();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.formClick,this);
            this.addEventHandler("ondevicebuttonup",this.mAgreeSuccess_ondevicebuttonup,this);
            this.addEventHandler("onload",this.mAgreeSuccess_onload,this);
            this.div_login.addEventHandler("onclick",this.formClick,this);
            this.div_login.form.sta_title.addEventHandler("onclick",this.formClick,this);
            this.div_login.form.btn_back.addEventHandler("onclick",this.div_login_btn_back_onclick,this);
        };
        this.loadIncludeScript("mAgreeSuccess.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
