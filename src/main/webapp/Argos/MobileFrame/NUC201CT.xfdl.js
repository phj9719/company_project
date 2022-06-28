(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NUC201CT");
            this.set_titletext("직접방문예약");
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
            obj.set_border("0px none,0px none,5px solid #082c71");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            this.div_btnDiv.addChild(obj.name, obj);

            obj = new Button("btn_phone","33%","2","33%",null,null,"0",null,null,null,null,this.div_btnDiv.form);
            obj.set_taborder("1");
            obj.set_text("영상통화");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_border("0px none,0px none,3px solid #cccccc");
            obj.set_color("#cccccc");
            this.div_btnDiv.addChild(obj.name, obj);

            obj = new Button("btn_list","66%","2","34%",null,null,"0",null,null,null,null,this.div_btnDiv.form);
            obj.set_taborder("2");
            obj.set_text("예약목록");
            obj.set_font("normal 700 15pt/normal \"Noto Sans KR\"");
            obj.set_color("#cccccc");
            obj.set_border("0px none,0px none,3px solid #cccccc");
            this.div_btnDiv.addChild(obj.name, obj);

            obj = new Static("sta_title","5%","180",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("방문정보");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dateSelect","5.00%","223",null,"35","5.00%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("방문일시 선택");
            obj.set_font("normal 700 17pt/normal \"Noto Sans KR\"");
            obj.set_color("#7d7f97");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date","5.00%","260","43.13%","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_displaynulltext("방문일자");
            obj.set_cssclass("calendar2");
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

            obj = new Edit("edt_famName","5.00%","345","20.00%","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_displaynulltext("신청자명");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_vis_relation","27.92%","345","40.00%","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_displaynulltext("어르신과의 관계");
            obj.set_innerdataset("ds_nu_res_relation");
            obj.set_datacolumn("CMNM");
            obj.set_codecolumn("CMCD");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_vis_cnt","72.71%","345","20.00%","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_displaynulltext("방문자수");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("sta_remark1","5.00%","392",null,"30","5.00%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("※ 신청자 포함 최대 4명까지 동시에 방문 가능합니다.");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_remark2","5.00%","427",null,"30","5%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("※ 코로나 방역지침에 따라 인원 및 방문이 제한될 수 있습니다.");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_remark3","5.00%","454",null,"70","5.00%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_txt");
            obj.set_text("※ 현재 코로나 19 집단감염 예방을 위해 방문 시\r\n비대면 면회신청서를 방문객별로 작성하고 있습니다.");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_collect_yn","5.00%","537",null,"35","5.00%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("(필수) 수집항목 및 이용 목적");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.addChild(obj.name, obj);

            obj = new Div("div_collect_list","5.00%","578",null,"250","5.00%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0%","0","27%","40",null,null,null,null,null,null,this.div_collect_list.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("divsta2_mDataHForm1");
            this.div_collect_list.addChild(obj.name, obj);

            obj = new Div("Div00",null,"0","1","40","0",null,null,null,null,null,this.div_collect_list.form.Div00.form);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            this.div_collect_list.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","200","26.96%","50",null,null,null,null,null,null,this.div_collect_list.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("divsta2_mDataBForm1");
            this.div_collect_list.addChild(obj.name, obj);

            obj = new Static("sta_item_cctv","0","0","100%","50",null,null,null,null,null,null,this.div_collect_list.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("CCTV 영상정보");
            obj.set_cssclass("sta2_mDataBForm3");
            obj.set_wordWrap("char");
            obj.set_padding("5px 4px");
            this.div_collect_list.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div00",null,"0","1","50","0",null,null,null,null,null,this.div_collect_list.form.Div01.form);
            obj.set_taborder("1");
            obj.set_background("#cccccc");
            this.div_collect_list.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_itemH","0%","0","27%","40",null,null,null,null,null,null,this.div_collect_list.form);
            obj.set_taborder("2");
            obj.set_text("항목");
            obj.set_cssclass("sta2_mDataHForm1");
            this.div_collect_list.addChild(obj.name, obj);

            obj = new Static("sta_purposeH","27%","0","52%","40",null,null,null,null,null,null,this.div_collect_list.form);
            obj.set_taborder("3");
            obj.set_text("이용목적");
            obj.set_cssclass("sta2_mDataHForm2");
            this.div_collect_list.addChild(obj.name, obj);

            obj = new Static("sta_periodH","79%","0","21%","40",null,null,null,null,null,null,this.div_collect_list.form);
            obj.set_taborder("4");
            obj.set_text("보유기간");
            obj.set_cssclass("sta2_mDataHForm3");
            this.div_collect_list.addChild(obj.name, obj);

            obj = new Static("sta_item_name","0","40","27%","40",null,null,null,null,null,null,this.div_collect_list.form);
            obj.set_taborder("5");
            obj.set_text("이름");
            obj.set_cssclass("sta2_mDataBForm1");
            obj.set_wordWrap("char");
            obj.set_padding("5px 4px");
            this.div_collect_list.addChild(obj.name, obj);

            obj = new Static("sta_purpose1","27%","40","52%","80",null,null,null,null,null,null,this.div_collect_list.form);
            obj.set_taborder("6");
            obj.set_text("방문 예약 및 재방문 확인 등 출입관리, 제한구역 출입허가 및 등록");
            obj.set_cssclass("sta2_mDataBForm1");
            obj.set_wordWrap("char");
            obj.set_textAlign("left");
            obj.set_padding("5px 4px");
            this.div_collect_list.addChild(obj.name, obj);

            obj = new Static("sta_purpose_cctv","27%","200","52%","50",null,null,null,null,null,null,this.div_collect_list.form);
            obj.set_taborder("7");
            obj.set_text("시설안전 및 범죄예방");
            obj.set_cssclass("sta2_mDataBForm4");
            obj.set_wordWrap("char");
            obj.set_textAlign("left");
            obj.set_padding("5px 4px");
            this.div_collect_list.addChild(obj.name, obj);

            obj = new Static("sta_periodB","79%","40","21%","210",null,null,null,null,null,null,this.div_collect_list.form);
            obj.set_taborder("8");
            obj.set_text("최종 방문일로부터 1년");
            obj.set_cssclass("sta2_mDataBForm5");
            obj.set_wordWrap("char");
            obj.set_padding("5px 4px");
            this.div_collect_list.addChild(obj.name, obj);

            obj = new Static("sta_item_company","0","80","27%","40",null,null,null,null,null,null,this.div_collect_list.form);
            obj.set_taborder("9");
            obj.set_text("소속회사");
            obj.set_cssclass("sta2_mDataBForm1");
            obj.set_wordWrap("char");
            obj.set_padding("5px 4px");
            this.div_collect_list.addChild(obj.name, obj);

            obj = new Static("sta_item_phone","0","120","27%","80",null,null,null,null,null,null,this.div_collect_list.form);
            obj.set_taborder("10");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta2_mDataBForm1");
            obj.set_wordWrap("char");
            obj.set_padding("5px 4px");
            this.div_collect_list.addChild(obj.name, obj);

            obj = new Static("sta_purpose_phone","27%","120","52%","80",null,null,null,null,null,null,this.div_collect_list.form);
            obj.set_taborder("11");
            obj.set_text("출입증 분실, 방문 확인 등을 위한 연락(방문 예약 SMS 발송)");
            obj.set_cssclass("sta2_mDataBForm1");
            obj.set_wordWrap("char");
            obj.set_textAlign("left");
            obj.set_padding("5px 4px");
            this.div_collect_list.addChild(obj.name, obj);

            obj = new Button("btn_request","5.00%","849",null,"54","5.00%",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("방문예약신청");
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

            obj = new BindItem("item3","edt_vis_cnt","value","ds_list","VIS_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","chk_collect_yn","value","ds_list","COLLECT_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("NUC201CT.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("NUC201CT.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("NUC201CT.xfdl","lib::mpgm_com.xjs");
        this.registerScript("NUC201CT.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: NUC201CT
         * 화면명   	: 직접방문예약
         * 화면설명 	: 모바일에서 보호자가 방문예약을 하는 화면
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
        this.NUC201CT_onload = function(obj,e)
        {
        	this.form_onload_com(obj, e);

        	const famName = nexacro.getApplication().gds_mUserInfo.getColumn(0, "FAM_NM");

        	// 신청자명 세팅
        	this.edt_famName.set_value(famName);

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
        	const collect = this.chk_collect_yn.value;
        	const visCnt = this.edt_vis_cnt.value;

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
        	else if(Sct.Util.isEmpty(visCnt))
        	{
        		Sct.alert(this, "000033", "방문자수");
        		return false;
        	}
        	else if(collect != "Y")
        	{
        		alert("수집항목 및 이용목적 동의를 해주세요.");
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
        		+ "sqlId=NUC201CT.NUC201CT_DS_LIST_S ";

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
        				this.ds_list.setColumn(nRow, "VIS_TP", 10);
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
        	trace("NUC201CT on_standardPlugin_callback");
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

        // 방문예약신청
        this.btn_request_onclick = function(obj,e)
        {
        	const apply = this.ds_list.getColumn(0, "VIS_APPLY");
        	if(apply == "20")
        	{
        		alert("방문예약이 승인되어서 수정 하실 수 없습니다.");
        		return;
        	}
        	else if(apply == "30")
        	{
        		alert("방문예약이 승인취소되어서 이날은 방문예약을 할 수 없습니다.");
        		return;
        	}
        	else
        	{
        		if(!this.fn_save_pre()) return;

        		const param = {str : "직접방문"};

        		Sct.tPopup(this, "NUC_VISIT_SUCCESS_POP", 350, 300, param, "MobilePOP::NUC_VISIT_SUCCESS_POP.xfdl", "fn_popCallback");
        	}
        };

        // 날짜변경시 검색
        this.cal_date_onchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "VIS_DT", e.postvalue);
        	this.fn_search();
        };

        // 영상통화
        this.div_btnDiv_btn_phone_onclick = function(obj,e)
        {
        	const id = "NUC202CT";
        	const url = "MobileFrame::NUC202CT.xfdl";
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
            this.addEventHandler("onload",this.NUC201CT_onload,this);
            this.sta_mainTitle.addEventHandler("onclick",this.formClick,this);
            this.sta_mainText.addEventHandler("onclick",this.formClick,this);
            this.div_btnDiv.form.btn_phone.addEventHandler("onclick",this.div_btnDiv_btn_phone_onclick,this);
            this.div_btnDiv.form.btn_list.addEventHandler("onclick",this.div_btnDiv_btn_list_onclick,this);
            this.sta_title.addEventHandler("onclick",this.formClick,this);
            this.sta_dateSelect.addEventHandler("onclick",this.formClick,this);
            this.cal_date.addEventHandler("onchanged",this.cal_date_onchanged,this);
            this.mdt_vis_time.addEventHandler("oneditclick",this.medt_oneditclick,this);
            this.sta_visitor.addEventHandler("onclick",this.formClick,this);
            this.sta_remark1.addEventHandler("onclick",this.formClick,this);
            this.sta_remark2.addEventHandler("onclick",this.formClick,this);
            this.sta_remark3.addEventHandler("onclick",this.formClick,this);
            this.div_collect_list.form.Div01.form.sta_item_cctv.addEventHandler("onclick",this.formClick,this);
            this.div_collect_list.form.sta_itemH.addEventHandler("onclick",this.formClick,this);
            this.div_collect_list.form.sta_purposeH.addEventHandler("onclick",this.formClick,this);
            this.div_collect_list.form.sta_periodH.addEventHandler("onclick",this.formClick,this);
            this.div_collect_list.form.sta_item_name.addEventHandler("onclick",this.formClick,this);
            this.div_collect_list.form.sta_purpose1.addEventHandler("onclick",this.formClick,this);
            this.div_collect_list.form.sta_purpose_cctv.addEventHandler("onclick",this.formClick,this);
            this.div_collect_list.form.sta_periodB.addEventHandler("onclick",this.formClick,this);
            this.div_collect_list.form.sta_item_company.addEventHandler("onclick",this.formClick,this);
            this.div_collect_list.form.sta_item_phone.addEventHandler("onclick",this.formClick,this);
            this.div_collect_list.form.sta_purpose_phone.addEventHandler("onclick",this.formClick,this);
            this.btn_request.addEventHandler("onclick",this.btn_request_onclick,this);
        };
        this.loadIncludeScript("NUC201CT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
