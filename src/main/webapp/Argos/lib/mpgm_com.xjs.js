//XJS=mpgm_com.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"lib::sct_util.xjs");
        this.registerScript(path, function() {
        /************************************************************************
         * Library Include
         ************************************************************************/
        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/;

        /************************************************************************
         * Functions
         ************************************************************************/
        /***
         * 모바일 업무화면 호출 함수(?)
         */
        this.mMenuOpen = function(id, url, title)
        {
        	// topFrame의 뒤로가기 버튼을 누른게 아닌 경우
        	if(this.getOwnerFrame().id != "TopFrame")
        	{
        		nexacro.getApplication().av_topFrame.form.formId = this.getOwnerFrame().arguments["menuId"];
        		nexacro.getApplication().av_topFrame.form.preUrl = this.getOwnerFrame().arguments["menuUrl"];
        		nexacro.getApplication().av_topFrame.form.preTitle = this.getOwnerFrame().arguments["menuTitle"];
        	}

        	// 열려있는 업무화면 닫기
        	for(let i = 0; i < nexacro.getApplication().av_workFrameSet.frames.length; i++)
        	{
        		nexacro.getApplication().av_workFrameSet.frames[i].destroy();
        	}

        	// 업무화면 생성
        	const objNewWin = new ChildFrame;
        		  objNewWin.init(id, 0, 0, null, null);
        		  objNewWin.set_formurl("MobileFrame::mFrameWork.xfdl");
        		  objNewWin.arguments = [];

        		  objNewWin.arguments["winKey"] = "";
        		  objNewWin.arguments["menuId"] = id;
        		  objNewWin.arguments["menuUrl"] = url;
        		  objNewWin.arguments["menuTitle"] = title;
        		  objNewWin.arguments["buttonAuth"] = "";

        	nexacro.getApplication().av_workFrameSet.addChild(id, objNewWin);

        	objNewWin.set_dragmovetype("none");
        	objNewWin.set_showtitlebar(false);
        	objNewWin.set_resizable(false);
        	objNewWin.set_border("0 none #808080");
        	objNewWin.set_openstatus("maximize");

        	objNewWin.show();

        	// topFrame에 업무화면명 세팅
        	nexacro.getApplication().av_topFrame.form.sta_top.set_text(title);
        };

        /***
         *
         */
        this.topFrameSetting = function()
        {
        	const title = this.getOwnerFrame().arguments["menuTitle"];
        	const id = this.getOwnerFrame().arguments["menuId"];

        	const tRow = nexacro.getApplication().gds_menu.findRow("MENU_NM", "마이페이지");
        	const tId = nexacro.getApplication().gds_menu.getColumn(tRow, "MENU_CD");

        	if(title == "생활현황")
        	{
        		nexacro.getApplication().av_topFrame.form.btn_back.set_visible(false);
        		nexacro.getApplication().av_topFrame.form.sta_top.set_color("#082c71");
        		nexacro.getApplication().av_topFrame.set_background("#ffffff");
        		nexacro.getApplication().av_topFrame.set_border("1px solid transparent,1px solid transparent,1px solid #cccccc");

        		// 메인메뉴 포커스 추가
        		nexacro.getApplication().av_bottomFrame.form.div_menuControl.form.components[1].setFocus();
        	}
        	else if(id == tId)
        	{
        		nexacro.getApplication().av_topFrame.set_background("#172959");
        		nexacro.getApplication().av_topFrame.set_border("1px solid #172959");
        		nexacro.getApplication().av_topFrame.form.btn_back.set_background("#172959");
        		nexacro.getApplication().av_topFrame.form.btn_back.set_icon("theme://images/ico_back2.png");
        		nexacro.getApplication().av_topFrame.form.sta_top.set_color("#ffffff");
        		nexacro.getApplication().av_topFrame.form.btn_back.set_visible(false);
        	}
        	else if(title == "공지사항" || title == "예약하기")
        	{
        		nexacro.getApplication().av_topFrame.set_background("#ffffff");
        		nexacro.getApplication().av_topFrame.set_border("1px solid transparent,1px solid transparent,1px solid #cccccc");
        		nexacro.getApplication().av_topFrame.form.sta_top.set_color("#082c71");
        		nexacro.getApplication().av_topFrame.form.btn_back.set_visible(false);
        	}
        	else
        	{
        		nexacro.getApplication().av_topFrame.set_background("#ffffff");
        		nexacro.getApplication().av_topFrame.set_border("1px solid transparent,1px solid transparent,1px solid #cccccc");
        		nexacro.getApplication().av_topFrame.form.sta_top.set_color("#082c71");
        		nexacro.getApplication().av_topFrame.form.btn_back.set_background("#ffffff");
        		nexacro.getApplication().av_topFrame.form.btn_back.set_icon("theme://images/ico_back1.png");
        		nexacro.getApplication().av_topFrame.form.btn_back.set_visible(true);
        	}
        };

        /***
         *
         */
        this.mLogout = function()
        {
        	const loginSize = "60,0,0,*";
        	nexacro.setPrivateProfile("M_ID", "");

        	const objSrv = nexacro.getEnvironment().services["svcurl"];
        	const svcUrl = objSrv.url + "" + "/logout.do";

        	nexacro.getApplication().transaction("logout", svcUrl, "", "", "", "");

        	nexacro.getApplication().av_topFrame.set_background("#ffffff");
        	nexacro.getApplication().av_topFrame.set_border("1px solid transparent,1px solid transparent,1px solid #cccccc");
        	nexacro.getApplication().av_topFrame.form.sta_top.set_color("#082c71");
        	nexacro.getApplication().av_topFrame.form.sta_top.set_text("로그인");
        	nexacro.getApplication().av_topFrame.form.btn_back.set_visible(false);

        	nexacro.getApplication().gds_mUserInfo.clearData();
        	nexacro.getApplication().gds_message.clearData();
        	nexacro.getApplication().gds_menu.clearData();

        	nexacro.getApplication().mainframe.FrameSet.set_separatesize(loginSize);
        	nexacro.getApplication().av_bottomFrame.set_formurl("");
        	nexacro.getApplication().mainframe.FrameSet.LoginFrame.form.reload();
        };

        /***
         * 넥사크로와 안드로이드 네이티브와 통신하는 Standard Object 생성
         * play nexacro에서 standard Object를 다운로드 받아서 Object 추가를 해줘야 합니다.
         * standard Object는 안드로이드 앱에서만 동작합니다.
         * 화면에 콜백 함수 구현해줘야 합니다.
         *
         * @return Object가 성공적으로 생성되면 true를 반환합니다.
         *
         */
        this.makeStandardObject = function()
        {
        	// Android 앱이면
        	if(system.navigatorname == "nexacro" && system.osversion.toUpperCase().indexOf("WINDOWS") == -1)
        	{
        		// standard Object가 이미 생성되어있으면 생성 되지 않도록 플래그 조정
        		let makeFlag = true;
        		for(let i = 0; i < this.all.length; i++)
        		{
        			trace(this.all[i].id);
        			if(this.all[i].id == "standardPlugin")
        			{
        				makeFlag = false;
        			}
        		}
        		// standard Object가 생성되어 있지 않으면
        		if(makeFlag)
        		{
        			trace("make standardObject");
        			// Standard Object 생성
        			// Android StandardObject Class > init 메소드 발생
        			this.addChild("standardPlugin", new nexacro.Standard());

        			/*
        			 * Standard Object 가 제공하는 이벤트 추가
        			 */
        			// Android StandardObject Class 에서 _oncallback 의 callback 호출시
        			this.standardPlugin.addEventHandler("on_callback", this.on_standardPlugin_callback, this);
        			// Android StandardObject Class 에서 _onresume 의 callback 호출시
        			this.standardPlugin.addEventHandler("on_resume", this.on_standardPlugin_resume, this);
        			// Android StandardObject Class 에서 _onpermissionresult 의 callback 호출시
        			this.standardPlugin.addEventHandler("on_permission_result", this.on_standardPlugin_permission_result, this);
        		}
        		return true;
        	}
        	else
        	{
        		//alert("현재 브라우저에서는 지원하지 않습니다.");
        		return false;
        	}
        };

        /***
         * Edit, TextArea Component를 제외한 부분을 클릭했을때 Edit, TextArea의 포커스를 없애는 함수
         * 클릭되는 Component onClick 이벤트에 이 함수가 있어야 한다.
         */
        this.formClick = function(obj, e)
        {
        	//trace(this.getFocus());
        	if(this.getFocus() instanceof Edit || this.getFocus() instanceof TextArea)
        	{
        		//trace("iii");
        		this.setFocus(false, false);
        	}
        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
