(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUC202CT");
            this.set_titletext("영상통화예약");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"VIS_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nu_res_relation", this);
            obj._setContents("<ColumnInfo><Column id=\"CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"CMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VIS_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"VIS_TP\" type=\"STRING\" size=\"256\"/><Column id=\"FAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"VIS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"VIS_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"VIS_RELATION\" type=\"STRING\" size=\"256\"/><Column id=\"VIS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"VIS_APPLY\" type=\"STRING\" size=\"256\"/><Column id=\"VIS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COLLECT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_mainTitle","5.00%","20",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("비대면 예약 서비스");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mainText","5.00%","62",null,"30","5.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("요양원 직접방문 / 영상통화 예약 및 예약상태 확인");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Div("div_btnDiv","0%","110",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_visit","0","2","33%",null,null,"0",null,null,null,null,this.div_btnDiv.form);
            obj.set_taborder("0");
            obj.set_text("직접방문");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_border("0px none,0px none,3px solid #cccccc");
            obj.set_color("#cccccc");
            this.div_btnDiv.addChild(obj.name, obj);

            obj = new Button("btn_phone","33%","2","33%",null,null,"0",null,null,null,null,this.div_btnDiv.form);
            obj.set_taborder("1");
            obj.set_text("영상통화");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_border("0px none,0px none,5px solid #082c71");
            this.div_btnDiv.addChild(obj.name, obj);

            obj = new Button("btn_list","66%","2","34%",null,null,"0",null,null,null,null,this.div_btnDiv.form);
            obj.set_taborder("2");
            obj.set_text("예약목록");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_border("0px none,0px none,3px solid #cccccc");
            obj.set_color("#cccccc");
            this.div_btnDiv.addChild(obj.name, obj);

            obj = new Static("sta_title","5%","180",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("영상통화정보");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("sta_select","5.00%","223",null,"35","5.00%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("영상통화일시 선택");
            obj.set_color("#7d7f97");
            obj.set_font("normal 700 17pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date","5.00%","260","43.13%","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_displaynulltext("통화예정일");
            obj.set_cssclass("calendar2");
            obj.set_color("#7d7f97");
            obj.set_font("normal 500 16pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdt_vis_time","53.13%","260","43.13%","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_format("## : ##");
            obj.set_type("string");
            obj.set_displaynulltext("방문시간");
            obj.set_readonly("true");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("sta_visitor","5.00%","310",null,"35","5.00%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("신청자명");
            obj.set_font("normal 700 17pt/normal \"Noto Sans KR\"");
            obj.set_color("#7d7f97");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_famName","5.00%","345","43.13%","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_displaynulltext("신청자명");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_vis_relation",null,"345","43.13%","35","5.00%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_displaynulltext("어르신과의 관계");
            obj.set_innerdataset("ds_nu_res_relation");
            obj.set_codecolumn("CMCD");
            obj.set_datacolumn("CMNM");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone","5.00%","395",null,"35","5.00%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_displaynulltext("신청자연락처");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_remark","5%","440",null,"70","5%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("※ 요양원으로 영상통화를 거실 날짜와 시간을 선택해 주시기\r\n    바랍니다.");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_remark2","5%","492",null,"70","5%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("※ 신청자 연락처에는 영상통화를 거실 휴대폰번호를 입력해\r\n    주시기 바랍니다.");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Button("btn_request","5.00%","579",null,"54","5.00%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("영상통화 예약신청");
            obj.set_cssclass("btn_basic");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,1000,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cal_date","value","ds_list","VIS_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","mdt_vis_time","value","ds_list","VIS_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cmb_vis_relation","value","ds_list","VIS_RELATION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUC202CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUC202CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUC202CT.xfdl","lib::mpgm_com.xjs");
        this.registerScript("NUC202CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUC202CT
         * 화면명   	: 영상통화예약
         * 화면설명 	: 모바일에서 보호자가 영상통화를 예약하는 화면
         * 작성일    	: 2021-09-06
         * 작성자   	: 조기종
         * 수정이력 	: ↓↓↓↓↓↓↓
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2021-09-23		조기종		DB변경으로 인한 FAM_ID 삭제
         ***********************************************************************
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
        this.fv_currentDS = "";
        this.fv_currentGrid = "";
        this.nMoveY;
        this.fv_flag;
        // 서비스 단에서 받는 variable, 초기화 필요함
        this.outvar = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.NUC202CT_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e);

        	const famName = nexacro.getApplication().gds_mUserInfo.getColumn(0, "FAM_NM");
        	const cellphone = nexacro.getApplication().gds_mUserInfo.getColumn(0, "FAM_TEL1");

        	let cellphoneStr;
        	if (cellphone != null && cellphone != "")
        	{
        		trace("phone length : " + cellphone.length);
        		if (cellphone.substr(0, 1) == 0 && cellphone.length == 11)
        		{
        			cellphoneStr = cellphone.substr(0, 3) + "-" + cellphone.substr(3, 4) + "-" + cellphone.substr(7, 4);
        		}
        		else if (cellphone.substr(0, 1) == 0 && cellphone.length == 10)
        		{
        			cellphoneStr = cellphone.substr(0, 3) + "-" + cellphone.substr(3, 3) + "-" + cellphone.substr(6, 4);
        		}
        		else
        		{
        			cellphoneStr = cellphone;
        		}
        	}

        	// 신청자명, 연락처 세팅
        	this.edt_famName.set_value(famName);
        	this.edt_phone.set_value(cellphoneStr);

        	// 조회조건
        	this.ds_search.setColumn(0, "COMPANY_CD", nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD"));
        	this.ds_search.setColumn(0, "RES_ID", nexacro.getApplication().gds_mUserInfo.getColumn(0, "RES_ID"));
        	this.ds_search.setColumn(0, "VIS_DT", Sct.Util.getToday());

        	if(system.navigatorname == "nexacro" && system.osversion.toUpperCase().indexOf("WINDOWS") == -1)
        	{
        		this.mdt_vis_time.set_readonly(true);
        	}
        	else
        	{
        		this.mdt_vis_time.set_readonly(false);
        	}

        	// 안드로이드 네이티브 통신 오브젝트 생성(timepicker를 사용하기 위함)
        	this.makeStandardObject();

        	//조회
        	this.fn_search();
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	return true;
        };

        // 저장 전 validation
        this.fn_save_pre = function()
        {
        	const date = this.cal_date.value;
        	const time = this.mdt_vis_time.value;

        	if(Sct.Util.isEmpty(date))
        	{
        		Sct.alert(this, "000033", "방문일자");
        		return false;
        	}
        	else if(Sct.Util.isEmpty(time))
        	{
        		Sct.alert(this, "000033", "방문시간");
        		return false;
        	}

        	return true;
        };
        /***********************************************************************
         * Data Transaction Functions
         ************************************************************************/
        //조회
        this.fn_search = function ()
        {
        	//validation
        	if(!this.fn_search_pre()) return;

        	const svcId = "search";
        	const params = "/commonController.do";
        	const inDatasets = "input1=ds_search";
        	const outDatasets = "ds_list=output1";
        	const argument = "method=getList "
        		+ "sqlId=NUC202CT.NUC202CT_DS_LIST_S ";

        	const callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        // 저장
        this.fn_save = function()
        {
        	const svcId = "save";
        	const inDs = "ds_list";

        	this.fn_save_com(svcId, inDs);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
        		{
        			if(this.ds_list.rowcount < 1)
        			{
        				const nRow = this.ds_list.addRow();
        				// 초기화
        				this.ds_list.setColumn(nRow, "COMPANY_CD", nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD"));
        				this.ds_list.setColumn(nRow, "VIS_TP", 20);
        				this.ds_list.setColumn(nRow, "RES_ID", nexacro.getApplication().gds_mUserInfo.getColumn(0, "RES_ID"));
        				this.ds_list.setColumn(nRow, "VIS_DT", this.ds_search.getColumn(0, "VIS_DT"));
        				this.ds_list.setColumn(nRow, "VIS_CNT", 1);
        				this.ds_list.setColumn(nRow, "VIS_APPLY", 10);
        				this.ds_list.setColumn(nRow, "VIS_YN", "N");
        			}
        		}
        		else if(strSvcID == "save")
        		{

        		}
        	}
        	else
        	{
        		Sct.alert(this, "", strErrorMsg);
        	}
        };

        /***********************************************************************
         * User Functions
         ***********************************************************************/
        // 팝업 콜백
        this.fn_popCallback = function (popid, strDs) {
        	if(Sct.Util.isEmpty(strDs)) return;
        	const objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "NUC_VISIT_SUCCESS_POP" :
        			const flag = objDs.getColumn(0, "FLAG");
        			if(flag == "1")
        			{
        				nexacro.getApplication().gv_curWinKey = this.name;
        				nexacro.getApplication().gv_curId = this.name;
        				this.fn_save();
        			}
        			break;
        	}
        };
         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // timepicker
        this.medt_oneditclick = function(obj,e)
        {
        	if(obj.id == "mdt_vis_time")
        	{
        		const param = {arg1 : "1"};
        		this.standardPlugin.callMethod("TIMEPICKER", param);
        	}
        };

        // 앱에서 _oncallback의 callback 호출시
        this.on_standardPlugin_callback = function(obj, e)
        {
        	trace("NUC202CT on_standardPlugin_callback");
        	trace("this.on_callback ::: " + e.svcid);
        	trace("this.on_callback ::: " + e.reason);
        	trace("this.on_callback ::: " + e.returnvalue);

        	if(e.svcid == "TIMEPICKER1")
        	{
        		if(e.reason == 0)
        		{
        			this.mdt_vis_time.set_value(e.returnvalue);
        		}
        	}
        };

        // 영상통화 예약신청
        this.btn_request_onclick = function(obj,e)
        {
        	const apply = this.ds_list.getColumn(0, "VIS_APPLY");
        	if(apply == "20")
        	{
        		alert("영상통화 예약이 승인되어서 수정 하실 수 없습니다.");
        		return;
        	}
        	else if(apply == "30")
        	{
        		alert("영상통화 예약이 승인취소되어서 이날은 방문예약을 할 수 없습니다.");
        		return;
        	}
        	else
        	{
        		if(!this.fn_save_pre()) return;

        		const param = {str : "영상통화"};

        		Sct.tPopup(this, "NUC_VISIT_SUCCESS_POP", 350, 300, param, "MobilePOP::NUC_VISIT_SUCCESS_POP.xfdl", "fn_popCallback");
        	}
        };

        // 날짜변경시 검색
        this.cal_date_onchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "VIS_DT", e.postvalue);
        	this.fn_search();
        };

        // 직접방문
        this.div_btnDiv_btn_visit_onclick = function(obj,e)
        {
        	const id = "NUC201CT";
        	const url = "MobileFrame::NUC201CT.xfdl";
        	const title = "예약하기";

        	this.mMenuOpen(id, url, title);
        };

        // 예약목록
        this.div_btnDiv_btn_list_onclick = function(obj,e)
        {
        	const id = "NUC203QR";
        	const url = "MobileFrame::NUC203QR.xfdl";
        	const title = "예약하기";

        	this.mMenuOpen(id, url, title);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("onclick",this.formClick,this);
            this.addEventHandler("onload",this.NUC202CT_onload,this);
            this.sta_mainTitle.addEventHandler("onclick",this.formClick,this);
            this.sta_mainText.addEventHandler("onclick",this.formClick,this);
            this.div_btnDiv.form.btn_visit.addEventHandler("onclick",this.div_btnDiv_btn_visit_onclick,this);
            this.div_btnDiv.form.btn_list.addEventHandler("onclick",this.div_btnDiv_btn_list_onclick,this);
            this.sta_title.addEventHandler("onclick",this.formClick,this);
            this.sta_select.addEventHandler("onclick",this.formClick,this);
            this.cal_date.addEventHandler("onchanged",this.cal_date_onchanged,this);
            this.mdt_vis_time.addEventHandler("oneditclick",this.medt_oneditclick,this);
            this.sta_visitor.addEventHandler("onclick",this.formClick,this);
            this.sta_remark.addEventHandler("onclick",this.formClick,this);
            this.sta_remark2.addEventHandler("onclick",this.formClick,this);
            this.btn_request.addEventHandler("onclick",this.btn_request_onclick,this);
        };
        this.loadIncludeScript("NUC202CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
