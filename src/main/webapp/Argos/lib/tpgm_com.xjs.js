//XJS=tpgm_com.xjs
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
        this.executeIncludeScript("lib::sct_util.xjs"); /*include "lib::sct_util.xjs"*/

        /************************************************************************
         * Functions
         ************************************************************************/
        /***
         * 태블릿 검색조건 공통부분 세팅하는 함수
         * 호실현황에서 선택한 입소자의 정보를 검색조건에 바로 세팅하는 함수입니다.
         * 검색조건의 오늘날짜, 동(생활실), 호실, 입소자의 정보를 세팅해 줍니다.
         * 각 컴포넌트에 ds_search 데이터셋이 바인딩 되어있어야 합니다.
         * ds_search에 COMPANY_CD, SERVICE_TP, APPLICATON_TP, DATE, LOCATION, ROOM, RES_ID 컬럼이 있어야 합니다.
         * ds_area, ds_location, ds_resident 데이터셋(컬럼은 트랜잭션에서 설정한 컬럼)이 각 콤보박스에 바인딩 되어있어야 합니다.
         * ds_area : 층 콤보박스
         * ds_location : 생활실 콤보박스
         * ds_resident : 입소자 콤보박스
         * onload 함수안에 함수를 넣어주면 된다.
         * @code{form_onload_com} 함수를 사용할 경우 세번재 인자가 false여야 합니다.
         *
         * @param obj 업무화면 form
         *
         */
        this.taSearchDataSetting = function(obj)
        {
        	// ds_search 데이터셋에 값 입력
        	this.ds_search.setColumn(0, "COMPANY_CD", nexacro.getApplication().gds_taCurRes.getColumn(0, "COMPANY_CD"));
        	this.ds_search.setColumn(0, "SERVICE_TP", nexacro.getApplication().gv_serviceTp);
        	this.ds_search.setColumn(0, "APPLICATION_TP", nexacro.getApplication().gv_applicationTp);
        	this.ds_search.setColumn(0, "DATE", Sct.Util.getToday());
        	this.ds_search.setColumn(0, "AREA", nexacro.getApplication().gds_taCurRes.getColumn(0, "AREA"));
        	this.ds_search.setColumn(0, "LOCATION", nexacro.getApplication().gds_taCurRes.getColumn(0, "LOCATION"));
        	this.ds_search.setColumn(0, "RES_ID", nexacro.getApplication().gds_taCurRes.getColumn(0, "RES_ID"));
        	//this.ds_search.setColumn(0, "NAME", nexacro.getApplication().gds_taCurRes.getColumn(0, "NAME"));

        	// 검색 조건 콤보박스 쿼리로 세팅하기
        	const comboDsParamArr = [
        			{outDsName : "ds_area", sqlId : "NUB_COMMON.NUB_COMMON_DS_AREA_S", param : this.ds_search, bEmptyRow : true}
        		,	{outDsName : "ds_location", sqlId : "NUB_COMMON.NUB_COMMON_DS_LOCATION_S", param : this.ds_search, bEmptyRow : false}
        		,	{outDsName : "ds_resident", sqlId : "NUB_COMMON.NUB_COMMON_DS_RESIDENT_S", param : this.ds_search, bEmptyRow : false}
        	];
        	this.gfn_setComboDs(obj, comboDsParamArr);
        };

        /***
         * 검색조건 동(생활실) 콤보박스 onitemchanged 함수
         * 동(생활실) 콤보박스의 아이템이 변경될 때마다 호실 콤보박스가
         * 동(생활실)에 속한 호실만 보이도록 바뀝니다.
         * 콤보박스 onitemchanged 이벤트에 이 함수명을 적어서 사용합니다.
         * ds_area, ds_location, ds_resident Dataset의 useclientlayout을 false로 설정해야합니다.
         *
         * @param obj:nexacro.Combo 넥사크로 콤보 오브젝트
         * @param e:nexacro.ItemChangeEventInfo 넥사크로 아이템 변경 이벤트
         *
         */
        this.cmb_area_onitemchanged = function(obj, e)
        {
        	const cmbDsParam = [{outDsName : "ds_location", sqlId : "NUB_COMMON.NUB_COMMON_DS_LOCATION_S", param : this.ds_search, bEmptyRow : false}];

        	if(Sct.Util.isEmpty(e.postvalue)) { // 빈값 선택시 데이터셋 클리어 및 LOCATION, RES_ID 빈값 처리
        		this.ds_location.clear();
        		this.ds_resident.clear();
        		this.ds_search.setColumn(0, "LOCATION", "");
        		this.ds_search.setColumn(0, "RES_ID", "");
        	}else{ // 층에 해당하는 생활실 조회
        		this.ds_location.clear();
        		this.ds_resident.clear();
        		this.ds_search.setColumn(0, "LOCATION", "");
        		this.ds_search.setColumn(0, "RES_ID", "");
        		this.gfn_setComboDs(this, cmbDsParam);
        	}
        };

        // 검색조건 층 변경
        this.cmb_area_onitemchanged2 = function(obj,e)
        {
        	if(Sct.Util.isEmpty(e.postvalue)) { // 빈값 선택시 데이터셋 클리어 및 LOCATION, RES_ID 빈값 처리
        		this.ds_search.setColumn(0, "LOCATION", null);
        		this.ds_search.setColumn(0, "RES_ID", null);
        	}else{ // 층에 해당하는 생활실 필터링
        		this.ds_location.filter("ARE_CD == '" + e.postvalue + "'");
        		this.ds_search.setColumn(0, "LOCATION", null);
        		this.ds_search.setColumn(0, "RES_ID", null);
        	}
        };

        /***
         * 검색조건 호실 콤보박스 onitemchanged 함수
         * 호실 콤보박스의 아이템이 변경될 때마다 입소자 콤보박스가
         * 호실에 속한 사람만 보이도록 바뀝니다.
         * 콤보박스 onitemchanged 이벤트에 이 함수명을 적어서 사용합니다.
         * ds_area, ds_location, ds_resident Dataset의 useclientlayout을 false로 설정해야합니다.
         *
         * @param obj:nexacro.Combo 넥사크로 콤보 오브젝트
         * @param e:nexacro.ItemChangeEventInfo 넥사크로 아이템 변경 이벤트
         *
         */
        this.cmb_location_onitemchanged = function(obj, e)
        {
        	const cmbDsParam = [{outDsName : "ds_resident", sqlId : "NUB_COMMON.NUB_COMMON_DS_RESIDENT_S", param : this.ds_search, bEmptyRow : false}];
        	this.ds_search.setColumn(0, "RES_ID", null);
        	this.gfn_setComboDs(this, cmbDsParam);
        };

        // 검색조건 호실 변경
        this.cmb_location_onitemchanged2 = function(obj, e)
        {
        	this.ds_search.setColumn(0, "RES_ID", null);
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
        	if(this.getFocus().toString() == "[object Edit]" || this.getFocus().toString() == "[object TextArea]" || this.getFocus().toString() == "[object MaskEdit]" || this.getFocus().toString() == "[object Combo]")
        	{
        		//trace("iii");
        		this.setFocus(false, false);
        	}
        };

        /***
         * 필수 항목 검사 함수
         * Static을 div처럼 만든 화면에서 사용할 것(head, body 형태)
         * div 안에 Static과 입력 컴포넌트가 쌍을 이루어야한다.
         * Static의 id는 sta_#####H
         * 입력 컴포넌트의 id는 xxx_#####
         * 형식이어야 한다.
         *
         * @param div:Div 필수 항목 검사할 div
         * @return true / false
         *
         */
        this.gfn_findNull_t1 = function (div)
        {
        	for (let i = 0; i < div.form.components.length; i++)
        	{
        		const objTarget = div.form.components[i];

        		if (objTarget instanceof Combo || objTarget instanceof Edit || objTarget instanceof Radio || objTarget instanceof Calendar || objTarget instanceof MaskEdit)
        		{
        			if (objTarget.cssclass == "essential")
        			{
        				if(objTarget.value == "" || objTarget.value == null)
        				{
        					const sStaId = "sta_"+objTarget.name.substr(4) + "H";
        					const sStaText = div.form.components[sStaId].text;
        					Sct.alert(this,"000076",sStaText+"|");	// {0} 항목은 필수 입력값입니다.
        					objTarget.setFocus();
        					return false;
        				}
        			}
        		}
        	}
        	return true;
        };

        /***
         * 태블릿 로그아웃
         */
        this.tLogout = function()
        {
        	const loginSize = "0,0,*";

        	const objSrv = nexacro.getEnvironment().services["svcurl"];
        	const svcUrl = objSrv.url + "" + "/logout.do";

        	nexacro.getApplication().transaction("logout", svcUrl, "", "", "", "");

        	nexacro.getApplication().av_mainMenu.set_formurl("");
        	nexacro.getApplication().av_subMenu.set_formurl("");

        	nexacro.getApplication().gds_userInfo.clearData();
        	nexacro.getApplication().gds_company.clearData();
        	nexacro.getApplication().gds_message.clearData();
        	nexacro.getApplication().gds_menu.clearData();
        	nexacro.getApplication().gds_bookmark.clearData();

        	const frameCnt = nexacro.getApplication().av_workFrameSet.frames.length;
        	if (frameCnt > 0)
        	{
        		for (let i = 0; i < frameCnt; i++)
        		{
        			nexacro.getApplication().av_workFrameSet.frames[i].destroy();
        		}
        	}

        	nexacro.getApplication().av_vFrameSet00.set_separatesize(loginSize);
        	nexacro.getApplication().av_login.set_formurl("TabletFrame::tFrameLogin.xfdl");
        };

        /***
         * 파일이 실제 있는지 없는지 체크
         *
         * @param val 파일경로
         * @return HTTP 상태값
         */
        this.fileCheck = function(val)
        {
        	const req = new XMLHttpRequest();
        	req.open('GET', val, false);
        	req.send(null);
        	const headers = req.status;
        	return headers;
        };

        // 에디트 커서 뒤로 이동시키기
        this.edt_oneditclick = function(obj,e)
        {
        	obj.setCaretPos(-1);
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
