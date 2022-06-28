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
            this.set_titletext("요양일지");
            this.set_scrollindicatorsize("5");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRESIDENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_TP\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_resident","5.00%","20",null,"110","5.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("#dee7f6");
            obj.set_borderRadius("6px");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_resident","19","15","80","80",null,null,null,null,null,null,this.div_resident.form);
            obj.set_taborder("0");
            obj.set_borderRadius("40px");
            obj.set_border("1px solid transparent");
            this.div_resident.addChild(obj.name, obj);

            obj = new Static("sta_resident","126","18","90","40",null,null,null,null,null,null,this.div_resident.form);
            obj.set_taborder("1");
            obj.set_text("홍길동");
            obj.set_font("bold 19pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_color("#6a8ed3");
            obj.set_verticalAlign("bottom");
            obj.set_textAlign("right");
            obj.set_letterSpacing("-1px");
            this.div_resident.addChild(obj.name, obj);

            obj = new Static("Static01","216","18","25","40",null,null,null,null,null,null,this.div_resident.form);
            obj.set_taborder("2");
            obj.set_text("님");
            obj.set_color("#999999");
            obj.set_verticalAlign("bottom");
            obj.set_textAlign("right");
            obj.set_font("18pt/normal \"Noto Sans CJK KR Medium\"");
            this.div_resident.addChild(obj.name, obj);

            obj = new Calendar("cal_date","125","64","170","30",null,null,null,null,null,null,this.div_resident.form);
            obj.set_taborder("3");
            obj.set_type("normal");
            obj.set_readonly("false");
            obj.set_usetrailingday("false");
            this.div_resident.addChild(obj.name, obj);

            obj = new Static("Static00","5.00%","150",null,"40","5.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("치료·훈련");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"155","325","30","5%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("각 항목 클릭 시 상세내역을 보실 수 있습니다.");
            obj.set_textAlign("right");
            obj.set_letterSpacing("-1px");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","5.00%","193",null,"235","5%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_background("#6a8ed3");
            obj.set_borderRadius("6px");
            obj.set_formscrolltype("both");
            obj.set_formscrollindicatorsize("0");
            obj.set_formscrollbartype("autoindicator");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","15","11","170","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("물리치료 >");
            obj.set_color("#cbd6ee");
            obj.set_font("bold 16pt/normal \"Noto Sans CJK KR Bold\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","15","86","170","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("운동치료 >");
            obj.set_color("#cbd6ee");
            obj.set_font("bold 16pt/normal \"Noto Sans CJK KR Bold\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_01","15","155","170","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("작업치료 >");
            obj.set_color("#cbd6ee");
            obj.set_font("bold 16pt/normal \"Noto Sans CJK KR Bold\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_02","15","238","170","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("로봇인지훈련 >");
            obj.set_color("#cbd6ee");
            obj.set_font("bold 16pt/normal \"Noto Sans CJK KR Bold\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_03","15","42","240","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("T.E.N.S&I.C.T");
            obj.set_color("#ffffff");
            obj.set_font("bold 18pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_letterSpacing("-0.5px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","194","42","120","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("(12/30, 50분)");
            obj.set_color("#ffffff");
            obj.set_font("15pt/normal \"Noto Sans CJK KR Medium\"");
            obj.set_wordSpacing("-0.5px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","15","117","240","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("ROM-exercise");
            obj.set_color("#ffffff");
            obj.set_font("bold 18pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_letterSpacing("-0.5px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","194","117","120","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("(12/30, 50분)");
            obj.set_color("#ffffff");
            obj.set_font("15pt/normal \"Noto Sans CJK KR Medium\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00","15","188","240","40",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("어깨관절 운동 사다리");
            obj.set_color("#ffffff");
            obj.set_font("bold 18pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_letterSpacing("-0.5px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00","241","188","120","40",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("(12/30, 50분)");
            obj.set_color("#ffffff");
            obj.set_font("15pt/normal \"Noto Sans CJK KR Medium\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00","15","270","240","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("로봇인지훈련");
            obj.set_color("#ffffff");
            obj.set_font("bold 18pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_letterSpacing("-0.5px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00","170","272","120","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("(12/30, 50분)");
            obj.set_color("#ffffff");
            obj.set_font("15pt/normal \"Noto Sans CJK KR Medium\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","27","448","103","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("식사");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","5.00%","491",null,"80","5.00%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div02");
            obj.set_background("#88dc95");
            obj.set_borderRadius("6px");
            obj.set_formscrollbartype("indicator");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","12","11","150","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("식사 >");
            obj.set_font("bold 16pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_color("#d4f1d8");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00","15","42","408","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("7/1, 조식O  중식O  석식O  오전간식X  오후간식O");
            obj.set_font("bold 16pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_color("#ffffff");
            obj.set_letterSpacing("-1px");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_01","24","591","103","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("체성분");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00",null,"599","320","30","5.00%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("최근 측정일 : 2021.06.10(목)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_txt");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","5%","634","16.4%","133",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div03");
            obj.set_borderRadius("6px");
            obj.set_edge("url(\'theme://images/bg_diary_bc1.png\') 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","100%","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("골격근량");
            obj.set_font("bold 15pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("center");
            obj.set_color("#fcecf2");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-0.5px");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","0","50","100%","40",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("28");
            obj.set_textAlign("center");
            obj.set_font("normal 700 25pt/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","0","80","100%","40",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("㎏");
            obj.set_textAlign("center");
            obj.set_font("17pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div03_00","23.4%","634","16.4%","133",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div03");
            obj.set_borderRadius("6px");
            obj.set_edge("url(\'theme://images/bg_diary_bc2.png\') 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","100%","24",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("0");
            obj.set_text("체중");
            obj.set_font("bold 15pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("center");
            obj.set_color("#ffe9e2");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-0.5px");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50","100%","40",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("1");
            obj.set_text("28");
            obj.set_textAlign("center");
            obj.set_font("normal 700 25pt/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Static("Static02","0","80","100%","40",null,null,null,null,null,null,this.Div03_00.form);
            obj.set_taborder("2");
            obj.set_text("㎏");
            obj.set_textAlign("center");
            obj.set_font("17pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.Div03_00.addChild(obj.name, obj);

            obj = new Div("Div03_01","41.8%","634","16.40%","133",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div03");
            obj.set_borderRadius("6px");
            obj.set_edge("url(\'theme://images/bg_diary_bc3.png\') 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","100%","24",null,null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("0");
            obj.set_text("신장");
            obj.set_font("bold 15pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("center");
            obj.set_color("#fff2d6");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-0.5px");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Static("Static01","0","50","100%","40",null,null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("1");
            obj.set_text("28");
            obj.set_textAlign("center");
            obj.set_font("normal 700 25pt/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Static("Static02","0","80","100%","40",null,null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("2");
            obj.set_text("㎝");
            obj.set_textAlign("center");
            obj.set_font("17pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Div("Div03_02","60.2%","634","16.40%","133",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div03");
            obj.set_borderRadius("6px");
            obj.set_edge("url(\'theme://images/bg_diary_bc4.png\') 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","100%","24",null,null,null,null,null,null,this.Div03_02.form);
            obj.set_taborder("0");
            obj.set_text("체지방량");
            obj.set_font("bold 15pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("center");
            obj.set_color("#dff2f5");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-0.5px");
            this.Div03_02.addChild(obj.name, obj);

            obj = new Static("Static01","0","50","100%","40",null,null,null,null,null,null,this.Div03_02.form);
            obj.set_taborder("1");
            obj.set_text("28");
            obj.set_textAlign("center");
            obj.set_font("normal 700 25pt/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.Div03_02.addChild(obj.name, obj);

            obj = new Static("Static02","0","80","100%","40",null,null,null,null,null,null,this.Div03_02.form);
            obj.set_taborder("2");
            obj.set_text("㎏");
            obj.set_textAlign("center");
            obj.set_font("17pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.Div03_02.addChild(obj.name, obj);

            obj = new Div("Div03_03","78.6%","634",null,"133","5%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Div03");
            obj.set_borderRadius("6px");
            obj.set_edge("url(\'theme://images/bg_diary_bc5.png\') 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","100%","24",null,null,null,null,null,null,this.Div03_03.form);
            obj.set_taborder("0");
            obj.set_text("체지방률");
            obj.set_font("bold 15pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_textAlign("center");
            obj.set_color("#e7e1ff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-0.5px");
            this.Div03_03.addChild(obj.name, obj);

            obj = new Static("Static01","0","50","100%","40",null,null,null,null,null,null,this.Div03_03.form);
            obj.set_taborder("1");
            obj.set_text("24.3");
            obj.set_textAlign("center");
            obj.set_font("normal 700 25pt/normal \"Arial\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            obj.set_letterSpacing("-1px");
            this.Div03_03.addChild(obj.name, obj);

            obj = new Static("Static02","0","80","100%","40",null,null,null,null,null,null,this.Div03_03.form);
            obj.set_taborder("2");
            obj.set_text("％");
            obj.set_textAlign("center");
            obj.set_font("17pt/normal \"Noto Sans CJK KR Bold\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.Div03_03.addChild(obj.name, obj);

            obj = new Div("Div04","27","806","428","7",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile",480,1000,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("mTest.xfdl","lib::sct_com.xjs");
        this.addIncludeScript("mTest.xfdl","lib::pgm_com.xjs");
        this.addIncludeScript("mTest.xfdl","lib::mpgm_com.xjs");
        this.registerScript("mTest.xfdl", function() {
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
        this.fileGroupId = "";
        /***********************************************************************
         * Form Event Functions
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.form_onload_com(obj, e);

        	const today = Sct.Util.getToday();
        	const resName = nexacro.getApplication().gds_mUserInfo.getColumn(0, "RES_NAME");

        	this.div_resident.form.cal_date.set_value(today);
        	this.div_resident.form.sta_resident.set_text(resName);

        	//조회조건
        	//this.div_search.form.cmb_use_yn.set_value("Y")

        	//조회
        	//this.fn_search();
        };

        /***********************************************************************
         * Data Validation check Functions
         ************************************************************************/
        //조회 전 validation
        this.fn_search_pre = function ()
        {
        	//조회전 그리드에 변경된 데이터가 있을경우 ..
        	if(Sct.Grid.isUpdate(this.ds_notice) || Sct.Grid.isUpdate(this.ds_read_user)){
        		if(!Sct.confirm(this,"000171","")){ //변경된 데이터가 있습니다. 무시하겠습니까?
        			return;
        		}
        	}

        	//조회조건 필수여부확인
        	if(!this.gfn_findSnull(this.div_search)) return false;

        	return true;
        };

        //추가 전 validation
        this.fn_insert_pre = function ()
        {
        	//변경여부
        	if (!Sct.Grid.hasInsertedRow(this.ds_notice))
        	{
        		Sct.alert(this, "000240"); //추가한 데이터가 없습니다.
        		return false;
        	}

        	//다른상태값 존재여부
        	if(!Sct.Grid.hasDifferentRowType(this.ds_notice, Dataset.ROWTYPE_INSERT))
        	{
        		Sct.alert(this, "000237"); //추가작업 외 다른 작업상태가 존재합니다.
        		return false;
        	}

        	//입력 필수여부체크
        	if(!this.gfn_findSnull(this.div_cont.form.div_edit)) return false;

        	//수신인 저장시 validation
        	if(!this.fn_readUserValidation()) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

        	return true;
        };

        // 수정 전 validation
        this.fn_update_pre = function ()
        {
        	//변경여부
        	if (!Sct.Grid.hasUpdatedRow(this.ds_notice) && !Sct.Grid.isUpdate(this.ds_read_user))
        	{
        		Sct.alert(this, "000118"); //변경된 데이터가 없습니다.
        		return false;
        	}

        	//입력 필수여부체크
        	if(!this.gfn_findSnull(this.div_cont.form.div_edit)) return false;

        	//수신인 저장시 validation
        	if(!this.fn_readUserValidation()) return false;

        	//저장하시겠습니까?
        	if(!Sct.confirm(this, "000038", "")) return false;

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
        	var outDatasets = "ds_head=output1";
        	var argument = "method=getList "
        		+ "sqlId=CMA001CT.CMA001CT_DS_HEAD_S ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc);
        };

        //detail 조회
        this.fn_searchDetail = function ()
        {
        	var companyCd = this.ds_head.getColumn(this.ds_head.rowposition, "COMPANY_CD");

        	var svcId = "searchDetail";
        	var params = "/commonController.do";
        	var inDatasets = "";
        	var outDatasets = "ds_detail=output1";
        	var argument = "method=getList "
        		+ "sqlId=CMA001CT.CMA001CT_DS_DETAIL_S ";

        	if(!Sct.Util.isEmpty(companyCd)) argument += "COMPANY_CD=" + companyCd + " ";

        	var callbackFunc = "fn_callback";
        	Sct.transaction(this, svcId, params, inDatasets, outDatasets, argument, callbackFunc, false);
        };

        //저장
        this.fn_save = function ()
        {
        	//입력 필수여부체크
        	if(!this.gfn_chkGridEssential(this.fv_currentGrid)) return false;

        	let svcId = "save";
        	let inDs = "ds_head"
        	this.fn_save_com(svcId, inDs);
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

         /***********************************************************************
         * Component Event Functions
         ***********************************************************************/
        // 물리치료
        this.Div01_Static00_onclick = function(obj,e)
        {
        	const id = "test";
        	const url = "MobileFrame::mTest1.xfdl";
        	const title = "물리치료";

        	this.mMenuOpen(id, url, title);

        // 	nexacro.getApplication().av_topFrame.form.formId = "test11";
        // 	nexacro.getApplication().av_topFrame.form.preUrl = "MobileFrame::mTest.xfdl";
        // 	nexacro.getApplication().av_topFrame.form.preTitle = "요양일지";
        // 	nexacro.getApplication().av_topFrame.form.btn_back.set_visible(true);
        };

        // 로봇인지훈련
        this.Div01_Static00_02_onclick = function(obj,e)
        {
        	const id = "test4";
        	const url = "MobileFrame::mTest4.xfdl";
        	const title = "로봇인지훈련";

        	this.mMenuOpen(id, url, title);

        // 	nexacro.getApplication().av_topFrame.form.formId = "test11";
        // 	nexacro.getApplication().av_topFrame.form.preUrl = "MobileFrame::mTest.xfdl";
        // 	nexacro.getApplication().av_topFrame.form.preTitle = "요양일지";
        // 	nexacro.getApplication().av_topFrame.form.btn_back.set_visible(true);
        };

        // 운동치료
        this.Div01_Static00_00_onclick = function(obj,e)
        {
        	const id = "test2";
        	const url = "MobileFrame::mTest2.xfdl";
        	const title = "운동치료";

        	this.mMenuOpen(id, url, title);

        // 	nexacro.getApplication().av_topFrame.form.formId = "test11";
        // 	nexacro.getApplication().av_topFrame.form.preUrl = "MobileFrame::mTest.xfdl";
        // 	nexacro.getApplication().av_topFrame.form.preTitle = "요양일지";
        // 	nexacro.getApplication().av_topFrame.form.btn_back.set_visible(true);
        };

        // 작업치료
        this.Div01_Static00_01_onclick = function(obj,e)
        {
        	const id = "test3";
        	const url = "MobileFrame::mTest3.xfdl";
        	const title = "작업치료";

        	this.mMenuOpen(id, url, title);

        // 	nexacro.getApplication().av_topFrame.form.formId = "test11";
        // 	nexacro.getApplication().av_topFrame.form.preUrl = "MobileFrame::mTest.xfdl";
        // 	nexacro.getApplication().av_topFrame.form.preTitle = "요양일지";
        // 	nexacro.getApplication().av_topFrame.form.btn_back.set_visible(true);
        };

        // 식사
        this.Div02_Static00_onclick = function(obj,e)
        {
        	const id = "test5";
        	const url = "MobileFrame::mTest5.xfdl";
        	const title = "식사";

        	this.mMenuOpen(id, url, title);

        // 	nexacro.getApplication().av_topFrame.form.formId = "test11";
        // 	nexacro.getApplication().av_topFrame.form.preUrl = "MobileFrame::mTest.xfdl";
        // 	nexacro.getApplication().av_topFrame.form.preTitle = "요양일지";
        // 	nexacro.getApplication().av_topFrame.form.btn_back.set_visible(true);
        };

        // 체성분
        this.weight_go = function(obj, e)
        {
        	const id = "test6";
        	const url = "MobileFrame::mTest6.xfdl";
        	const title = "체성분분석";

        	this.mMenuOpen(id, url, title);

        // 	nexacro.getApplication().av_topFrame.form.formId = "test11";
        // 	nexacro.getApplication().av_topFrame.form.preUrl = "MobileFrame::mTest.xfdl";
        // 	nexacro.getApplication().av_topFrame.form.preTitle = "요양일지";
        // 	nexacro.getApplication().av_topFrame.form.btn_back.set_visible(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onkeyup",this.fn_openDebugPopup,this);
            this.Div01.form.Static00.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Div01.form.Static00_00.addEventHandler("onclick",this.Div01_Static00_00_onclick,this);
            this.Div01.form.Static00_01.addEventHandler("onclick",this.Div01_Static00_01_onclick,this);
            this.Div01.form.Static00_02.addEventHandler("onclick",this.Div01_Static00_02_onclick,this);
            this.Div01.form.Static00_03.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Div01.form.Static00_03_00.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Div01.form.Static00_03_01.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Div01.form.Static00_03_00_00.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Div01.form.Static00_03_01_00.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Div01.form.Static00_03_00_00_00.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Div01.form.Static00_03_01_00_00.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Div01.form.Static00_03_00_00_00_00.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Div02.form.Static00.addEventHandler("onclick",this.Div02_Static00_onclick,this);
            this.Div03.form.Static00.addEventHandler("onclick",this.weight_go,this);
            this.Div03.form.Static01.addEventHandler("onclick",this.weight_go,this);
            this.Div03.form.Static02.addEventHandler("onclick",this.weight_go,this);
            this.Div03_00.form.Static00.addEventHandler("onclick",this.weight_go,this);
            this.Div03_00.form.Static01.addEventHandler("onclick",this.weight_go,this);
            this.Div03_00.form.Static02.addEventHandler("onclick",this.weight_go,this);
            this.Div03_01.form.Static00.addEventHandler("onclick",this.weight_go,this);
            this.Div03_01.form.Static01.addEventHandler("onclick",this.weight_go,this);
            this.Div03_01.form.Static02.addEventHandler("onclick",this.weight_go,this);
            this.Div03_02.form.Static00.addEventHandler("onclick",this.weight_go,this);
            this.Div03_02.form.Static01.addEventHandler("onclick",this.weight_go,this);
            this.Div03_02.form.Static02.addEventHandler("onclick",this.weight_go,this);
            this.Div03_03.form.Static00.addEventHandler("onclick",this.weight_go,this);
            this.Div03_03.form.Static01.addEventHandler("onclick",this.weight_go,this);
            this.Div03_03.form.Static02.addEventHandler("onclick",this.weight_go,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_notice_onrowposchanged,this);
        };
        this.loadIncludeScript("mTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
