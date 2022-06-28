(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("예약하기");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_REAL_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","5.00%","20",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("비대면 예약 서비스");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","5.00%","62",null,"30","5.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("요양원 직접방문 / 영상통화 예약 및 예약상태 확인");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","105",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_tabjustify("true");
            obj.set_tabbuttonheight("45");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("직접방문");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","5%","20",null,"40","5%",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("방문정보");
            obj.set_cssclass("sta_title");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","5%","73",null,"35","5%",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("방문일시 선택");
            obj.set_font("bold 17pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_color("#7d7f97");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","5.00%","110","43.5%","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("방문일자");
            obj.set_cssclass("calendar2");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_00","5%","160",null,"35","5%",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("신청자명");
            obj.set_font("bold 17pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_color("#7d7f97");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00","5.00%","195","20%","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_displaynulltext("신청자명");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo01","28%","195","40%","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_displaynulltext("어르신과의 관계");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Tab00_Tabpage1_form_Combo01_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage1_form_Combo01_innerdataset", obj);
            Tab00_Tabpage1_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">가나다</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">나아라ㅏㄷ</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage1_form_Combo01_innerdataset);
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo02","71%","195","24%","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_displaynulltext("동반인원");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02","5%","242",null,"30","5%",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("※ 신청자 포함 최대 4명까지 동시에 방문 가능합니다.");
            obj.set_cssclass("sta_txt");
            obj.set_font("15pt/normal \"Noto Sans CJK KR Regular\"");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02_00","5%","264",null,"70","5%",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_txt");
            obj.set_text("※ 현재 코로나 19 집단감염 예방을 위해 방문 시\r\n비대면 면회신청서를 방문객별로 작성하고 있습니다.");
            obj.set_font("15pt/normal \"Noto Sans CJK KR Regular\"");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","5%","327",null,"35","5%",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("(필수) 수집항목 및 이용 목적");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00","5.00%","649",null,"54","5.00%",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("방문예약신청");
            obj.set_cssclass("btn_basic");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Div("Div00","5%","368",null,"250","5%",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_background("#ffffff");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Div("Div00","0%","0","27%","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("divsta2_mDataHForm1");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00",null,"0","1","40","0",null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            this.Tab00.Tabpage1.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","200","26.96%","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("divsta2_mDataBForm1");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","100%","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("CCTV 영상정보");
            obj.set_cssclass("sta2_mDataBForm3");
            obj.set_wordWrap("char");
            obj.set_padding("5px 4px");
            this.Tab00.Tabpage1.form.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div00",null,"0","1","50","0",null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_background("#cccccc");
            this.Tab00.Tabpage1.form.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0%","0","27%","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("항목");
            obj.set_cssclass("sta2_mDataHForm1");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","27%","0","52%","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("이용목적");
            obj.set_cssclass("sta2_mDataHForm2");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","79%","0","21%","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("보유기간");
            obj.set_cssclass("sta2_mDataHForm3");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","40","27%","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("이름");
            obj.set_cssclass("sta2_mDataBForm1");
            obj.set_wordWrap("char");
            obj.set_padding("5px 4px");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","27%","40","52%","80",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("방문 예약 및 재방문 확인 등 출입관리, 제한구역 출입허가 및 등록");
            obj.set_cssclass("sta2_mDataBForm1");
            obj.set_wordWrap("char");
            obj.set_textAlign("left");
            obj.set_padding("5px 4px");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","27%","200","52%","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("시설안전 및 범죄예방");
            obj.set_cssclass("sta2_mDataBForm4");
            obj.set_wordWrap("char");
            obj.set_textAlign("left");
            obj.set_padding("5px 4px");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","79%","40","21%","210",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("최종 방문일로부터 1년");
            obj.set_cssclass("sta2_mDataBForm5");
            obj.set_wordWrap("char");
            obj.set_padding("5px 4px");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","80","27%","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("소속회사");
            obj.set_cssclass("sta2_mDataBForm1");
            obj.set_wordWrap("char");
            obj.set_padding("5px 4px");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","0","120","27%","80",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta2_mDataBForm1");
            obj.set_wordWrap("char");
            obj.set_padding("5px 4px");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","27%","120","52%","80",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("출입증 분실, 방문 확인 등을 위한 연락(방문 예약 SMS 발송)");
            obj.set_cssclass("sta2_mDataBForm1");
            obj.set_wordWrap("char");
            obj.set_textAlign("left");
            obj.set_padding("5px 4px");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","34","748","418","10",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("12");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("medt_visit_time","53.50%","110","43.50%","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_format("## : ##");
            obj.set_type("string");
            obj.set_displaynulltext("방문시간");
            obj.set_readonly("true");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("영상통화");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","5.00%","20",null,"40","5.00%",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("영상통화정보");
            obj.set_cssclass("sta_title");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01","5.00%","73",null,"35","5.00%",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("영상통화일시 선택");
            obj.set_font("bold 17pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_color("#7d7f97");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","5.00%","110","43.13%","35",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("통화예정일");
            obj.set_cssclass("calendar2");
            obj.set_font("16pt \"Noto Sans CJK KR Medium\"");
            obj.set_color("#7d7f97");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static02","5%","160",null,"35","5%",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("신청자명");
            obj.set_font("bold 17pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_color("#7d7f97");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit00","5.00%","195","43.5%","35",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_displaynulltext("신청자명");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("Combo01",null,"195","43.5%","35","5%",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_displaynulltext("어르신과의 관계");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("Edit01","5.00%","245",null,"35","5.00%",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_displaynulltext("신청자연락처");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static03","29","280","431","70",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("※ 요양원으로 영상통화를 거실 날짜와 시간을 선택해 주시기\r\n    바랍니다.");
            obj.set_cssclass("sta_txt");
            obj.set_font("15pt/normal \"Noto Sans CJK KR Regular\"");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static03_00","29","332","431","70",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_text("※ 신청자 연락처에는 영상통화를 거실 휴대폰번호를 입력해\r\n    주시기 바랍니다.");
            obj.set_cssclass("sta_txt");
            obj.set_font("15pt/normal \"Noto Sans CJK KR Regular\"");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button00","5.00%","419",null,"54","5.00%",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_text("영상통화 예약신청");
            obj.set_cssclass("btn_basic");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("medt_video_time","53.33%","110","43.33%","35",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_format("## : ##");
            obj.set_type("string");
            obj.set_displaynulltext("방문시간");
            obj.set_readonly("true");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("예약목록");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","5.00%","30",null,null,"5.00%","20",null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_cssclass("grid2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"일시\"/><Cell col=\"1\" text=\"신청내역\"/><Cell col=\"2\" text=\"상태\"/></Band></Format></Formats>");
            this.Tab00.Tabpage3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,1000,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("mTest8.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("mTest8.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("mTest8.xfdl","lib::mpgm_com.xjs");
        this.registerScript("mTest8.xfdl", function() {
        /***********************************************************************
         * 화면ID    	: mTest
         * 화면명   	:
         * 화면설명 	:
         * 작성일    	: 2021-07-06
         * 작성자   	: 조기종
         * 수정이력 	:
         ***********************************************************************
         *     	수정일     	수정자   	내용
         *		2020-07-08		배영걸		1차수정
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
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e);

        	this.makeStandardObject();

        	//조회조건
        	//this.ds_search.setColumn(0, "COMPANY_CD", nexacro.getApplication().gds_mUserInfo.getColumn(0, "COMPANY_CD"));

        	//조회
        	//this.fn_search();

        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
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

        	var svcId = "search";
        	var params = "/commonController.do";
        	var inDatasets = "input1=ds_search";
        	var outDatasets = "ds_list=output1";
        	var argument = "method=getList "
        		+ "sqlId=mTest7.mTest7_DS_LIST_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //콜백
        this.fn_callback = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode == 0)
        	{
        		if(strSvcID == "search")
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
        	var objDs = this.gfn_createReturnDs(this, "ds_Return", strDs);
        	switch(popid)
        	{
        		case "NUC_VISIT_SUCCESS_POP" :
        			break;
        		case "NUC_LOGIN_AGREE_POP" :
        			break;
        		default :
        			this.gfn_createReturnDs(this, "ds_Return", strDs);
        	}
        };
         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/

        this.Tab00_Tabpage1_Button00_onclick = function(obj,e)
        {
        	var param = {};

        	Sct.tPopup(this, "NUC_VISIT_SUCCESS_POP", 350, 400, param, "MobilePOP::NUC_VISIT_SUCCESS_POP.xfdl", "fn_popCallback");
        };

        this.Tab00_Tabpage2_Button00_onclick = function(obj,e)
        {
        	var param = {};

        	Sct.tPopup(this, "NUC_LOGIN_AGREE_POP", 460, 700, param, "MobilePOP::NUC_LOGIN_AGREE_POP.xfdl", "fn_popCallback");
        };

        this.medt_oneditclick = function(obj,e)
        {
        	let param;

        	if(obj.id == "medt_visit_time")
        	{
        		param = {arg1 : "1"};
        	}
        	else if(obj.id == "medt_video_time")
        	{
        		param = {arg1 : "2"};
        	}

        	this.standardPlugin.callMethod("TIMEPICKER", param);
        };

        // 앱에서 _oncallback의 callback 호출시
        this.on_standardPlugin_callback = function(obj, e)
        {
        	trace("this.on_callback ::: " + e.svcid);
        	trace("this.on_callback ::: " + e.reason);
        	trace("this.on_callback ::: " + e.returnvalue);

        	if(e.svcid == "TIMEPICKER1")
        	{
        		if(e.reason == 0)
        		{
        			this.Tab00.Tabpage1.form.medt_visit_time.set_value(e.returnvalue);
        		}
        	}
        	else if(e.svcid == "TIMEPICKER2")
        	{
        		if(e.reason == 0)
        		{
        			this.Tab00.Tabpage2.form.medt_video_time.set_value(e.returnvalue);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.addEventHandler("onclick",this.formClick,this);
            this.Static00.addEventHandler("onclick",this.formClick,this);
            this.Static01.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.addEventHandler("ontouchend",this.formClick,this);
            this.Tab00.Tabpage1.form.Static00.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.Static01.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.Static01_00.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.Static02.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.Static02_00.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.Button00.addEventHandler("onclick",this.Tab00_Tabpage1_Button00_onclick,this);
            this.Tab00.Tabpage1.form.Div00.form.Div01.form.Static00.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.Div00.form.Static00.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.Div00.form.Static01.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.Div00.form.Static02.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.Div00.form.Static03.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.Div00.form.Static04.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.Div00.form.Static06.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.Div00.form.Static07.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.Div00.form.Static03_00.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.Div00.form.Static03_00_00.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.Div00.form.Static04_00.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage1.form.medt_visit_time.addEventHandler("oneditclick",this.medt_oneditclick,this);
            this.Tab00.Tabpage2.addEventHandler("ontouchend",this.formClick,this);
            this.Tab00.Tabpage2.form.Static00.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.Static01.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.Static02.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.Static03.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.Static03_00.addEventHandler("onclick",this.formClick,this);
            this.Tab00.Tabpage2.form.Button00.addEventHandler("onclick",this.Tab00_Tabpage2_Button00_onclick,this);
            this.Tab00.Tabpage2.form.medt_video_time.addEventHandler("oneditclick",this.medt_oneditclick,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
        };
        this.loadIncludeScript("mTest8.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
